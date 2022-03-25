import React, { useReducer } from "react";
import axios from "axios";
import "./Login.css";
import { useAuth } from "../../context/auth-context";
import { useNavigate, Link } from "react-router-dom";
export const Login = () => {
  const loginReducer = (state, { fieldName, fieldValue, type }) => {
    switch (type) {
      case "INPUT":
        return { ...state, [fieldName]: fieldValue };
      default:
        return { ...state };
    }
  };

  const [{ email, password }, dispatch] = useReducer(loginReducer, {
    email: "",
    password: "",
  });

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      const { data } = response;
      if (data) {
        const { foundUser, encodedToken } = data;
        setAuth({
          user: { ...foundUser },
          token: encodedToken,
          auth: true,
        });
        localStorage.setItem("token", encodedToken);
        navigate("/");
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-form">
      <h2 className="login-title">login</h2>
      <form>
        <label htmlFor="email">
          Email
          <input
            name="email"
            type="email"
            id="email"
            placeholder="xyz@gmail.com"
            className="input"
            value={email}
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                fieldName: e.target.name,
                fieldValue: e.target.value,
              })
            }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            name="password"
            type="password"
            id="password"
            placeholder="*********"
            className="input"
            value={password}
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                fieldName: e.target.name,
                fieldValue: e.target.value,
              })
            }
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
        <button className="login-btn" onClick={(e) => loginHandler(e)}>
          login
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
