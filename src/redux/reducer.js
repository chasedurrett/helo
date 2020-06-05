const initialState = {
  username: "",
  profile: "",
  userId: 0,
};

const actions = {
  USER_INFO: "USER_INFO",
};

export function getUserInfo(username, profile, userId) {
  return {
    type: actions.USER_INFO,
    payload: {username, profile, userId},
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.USER_INFO:
      return {
       
      };

    default:
      return state;
  }
}
