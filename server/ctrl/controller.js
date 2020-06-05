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
    res.status(200).send(newUser);
  },
  login: async (req, res) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    const user = await db.check_user(username);
    if (!user[0]) {
      return res.status(404).send(`User does not exist!`);
    } else {
      const auth = bcrypt.compareSync(password, user[0].password);
      if (auth) {
        res.status(200).send(auth);
      }
    }
  },
};
