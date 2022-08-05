const loginHandler = async (
  e,
  axios,
  setAuth,
  auth,
  navigate,
  showToast,
  from,
  email,
  password
) => {
  e.preventDefault();

  try {
    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });
    const {
      status,
      data: { encodedToken, foundUser },
    } = response;
    if (status >= 200 && status <= 299) {
      setAuth({ ...auth, auth: true, user: foundUser, token: encodedToken });
      localStorage.setItem("token", encodedToken);

      navigate(from || '/', { replace: true });
      showToast("success", "Successfully Logged In!");
    }
  } catch (error) {
    console.log(error);
  }
};
const guestHandler = async (
  e,
  axios,
  setAuth,
  auth,
  navigate,
  showToast,
  from
) => {
  e.preventDefault();
  try {
    const response = await axios.post("/api/auth/login", {
      email: "Testuser@gmail.com",
      password: "Testuser",
    });
    const {
      status,
      data: { encodedToken, foundUser },
    } = response;
    if (status >= 200 && status <= 299) {
      setAuth({ ...auth, auth: true, user: foundUser, token: encodedToken });
      localStorage.setItem("token", encodedToken);
      navigate(from || '/', { replace: true });
      showToast("success", "Successfully Logged In!");
    }
  } catch (error) {
    console.log("something went wrong");
  }
};

const signupHandler = async (
  e,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  showToast,
  setAuth,
  auth,
  navigate,
  axios
) => {
  e.preventDefault();
  if (password !== confirmPassword) {
    showToast("error", "password din't match");
  } else {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      const {
        status,
        data: { encodedToken, createdUser },
      } = response;

      if (status >= 200 && status <= 299) {
        setAuth({
          ...auth,
          auth: true,
          user: createdUser,
          token: encodedToken,
        });
        localStorage.setItem("token", encodedToken);
        navigate("/");
        showToast("success", "Account Created Successfully!");
      }
    } catch (error) {
      showToast("error", "Something went wrong with server!");
    }
  }
};

export { loginHandler, guestHandler, signupHandler };
