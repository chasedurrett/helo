const initialState = {
  username: "",
  profile_pic: "",
  id: "",
};

export const actions = {
  USER_INFO: "USER_INFO",
};

export function getUserInfo(username, profile_pic, id) {
  return {
    type: actions.USER_INFO,
    payload: { username, profile_pic, id },
  };
}

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.USER_INFO:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
