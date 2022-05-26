import React, { useReducer } from "react";
import axios from "axios";
import "./Login.css";
import { useAuth } from "../../context/auth-context";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { loginReducer } from "../../reducer/login-reducer";
export const Login = () => {
  const [{ email, password }, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
  });

  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const loginHandler = async (e) => {
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
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const guestHandler = async (e) => {
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
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.log("something went wrong");
    }
  };

  return (
    <div className="login-form">
      <h2 className="login-title">login</h2>
      <form>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            placeholder="xyz@gmail.com"
            className="input"
            value={email}
            onChange={(e) =>
              dispatch({
                type: "EMAIL",
                payload: e.target.value,
              })
            }
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input"
            value={password}
            onChange={(e) =>
              dispatch({
                type: "PASSWORD",
                payload: e.target.value,
              })
            }
            required
          />
        </label>

        <div className="password">
          <label htmlFor="remember">
            <input name="checkbox" id="remember" type="checkbox" />
            Remember Me
          </label>
          <a href="#" className="text-decorations password-forgot">
            forgot your password?
          </a>
        </div>
        <button className="login-btn" onClick={loginHandler}>
          login
        </button>
        <button className="login-btn" onClick={guestHandler}>
          login with guest credentials
        </button>
        <div className="new-account">
          <Link to="/signup" className="text-decorations account-title">
            create new account
          </Link>
        </div>
      </form>
    </div>
  );
};
