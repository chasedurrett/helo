const bcrypt = require("bcryptjs");
module.exports = {
  register: async (req, res) => {
    const { username, password } = req.body;
    const db = req.app.get("db");
    const existingUser = await db.check_user(username);
    if (existingUser[0]) {
      return res.status(404).send(`Username already exists`);
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = db.register_user([username, hash]);

    req.session.user[0] = newUser;

    res.status(200).send(req.session.user);
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    const user = await db.check_user(username);
    if (!user[0]) {
      return res.status(404).send(`User does not exist!`);
    }
    const auth = bcrypt.compareSync(password, user[0].password);

    if (!auth) {
      res.status(403).send(`Incorrect username or password`);
    }

    req.session.user = user[0];

    res.status(200).send(req.session.user);
  },
  getUser: async (req, res) => {
    const { user } = req.session;
    if (user) {
      res.status(200).send(user);
    } else {
      res.sendStatus(404);
    }
  },
  getPosts: async (req, res) => {
    const { id } = req.session.user;
    const db = req.app.get("db");
    const { userPosts, search } = req.query;
    let posts;
    if (userPosts === "true") {
      posts = await db.get_posts_is_user(search);
    } else {
      posts = await db.get_posts_not_user(search, id);
    }
    if(!req.session.user){
      return res.sendStatus(404)
    }

    res.status(200).send(posts);
  },
  getPost: async (req, res) => {
        const db = req.app.get('db')
        const {postId} = req.params
        const post = await db.get_post(postId)

        if(post[0]){
          res.status(200).send(post)
        }
  }
};
