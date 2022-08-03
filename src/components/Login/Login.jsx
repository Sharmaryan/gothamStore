import React, { useReducer } from "react";
import axios from "axios";
import "./Login.css";
import { useAuth } from "../../context/auth-context";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { loginReducer } from "../../reducer/login-reducer";
import { useToast } from "hooks/useToast";
import { loginHandler, guestHandler } from "services/auth";
export const Login = () => {
  const [{ email, password, passwordType }, dispatch] = useReducer(
    loginReducer,
    {
      email: "",
      password: "",
      passwordType: "password",
    }
  );
  const { showToast } = useToast();
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;

  return (
    <div className="login-form">
      <h2 className="login-title">login</h2>
      <form
        onSubmit={(e) =>
          loginHandler(e, axios, setAuth, auth, navigate, showToast, from, email, password)
        }
      >
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
          <div className="password-input">
            <input
              type={passwordType}
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
            {passwordType === "password" ? (
              <i
                className="fa fa-eye-slash password-icons"
                onClick={() =>
                  dispatch({ type: "PASSWORD_VISIBLITY", payload: "text" })
                }
              ></i>
            ) : (
              <i
                className="fa fa-eye password-icons"
                onClick={() =>
                  dispatch({ type: "PASSWORD_VISIBLITY", payload: "password" })
                }
              ></i>
            )}
          </div>
        </label>

        <button className="login-btn">login</button>
        <button
          className="login-btn"
          onClick={(e) =>
            guestHandler(e, axios, setAuth, auth, navigate, showToast, from)
          }
        >
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
