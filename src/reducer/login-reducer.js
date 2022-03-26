export const loginReducer = (state, { payload, type }) => {
  switch (type) {
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    default:
      return { ...state };
  }
};
