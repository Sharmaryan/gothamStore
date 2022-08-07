export const signupReducer = (state, { type, payload }) => {
  switch (type) {
    case "FNAME":
      return { ...state, firstName: payload };
    case "LNAME":
      return { ...state, lastName: payload };
    case "EMAIL":
      return { ...state, email: payload };
    case "PASSWORD":
      return { ...state, password: payload };
    case "CONFIRM_PASSWORD":
      return { ...state, confirmPassword: payload };
    case "PASSWORD_VISIBLITY":
      return { ...state, passwordType: payload };
    case "CONFIRM_PASSWORD_VISIBLITY":
      return { ...state, confirmPasswordType: payload };
    case "GUEST_CREDENTIALS":
      return {...state, firstName:'Aryan', lastName:'Sharma', email:'panditaryan.as@gmail.com', password:'dontknow', confirmPassword:'dontknow',}
    default:
      return { ...state };
  }
};
