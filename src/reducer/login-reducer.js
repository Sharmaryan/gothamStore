export const loginReducer = (state, { payload, type }) => {
  switch (type) {
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "PASSWORD_VISIBLITY":
      return { ...state, passwordType: payload };
    default:
      return { ...state };
  }
};
