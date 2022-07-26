import React from "react";
import "./SiginUpComponent.css";
import { useReducer } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { signupReducer } from "../../reducer/signup-reducer";
import { useToast } from "hooks/useToast";
import { signupHandler } from "../../services/auth";

export const SignUpComponent = () => {
  const [
    {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      passwordType,
      confirmPasswordType,
    },
    dispatch,
  ] = useReducer(signupReducer, {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    passwordType: "password",
    confirmPasswordType: "password",
  });

  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();
 
  return (
    <div className="signup-section">
      <div className="signup-form">
        <h2 className="signup-form-title">signup</h2>
        <form
          onSubmit={(e) =>
            signupHandler(
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
            )
          }
        >
          <label className="label" htmlFor="fname">
            first name
            <input
              onChange={(e) =>
                dispatch({
                  type: "FNAME",
                  payload: e.target.value,
                })
              }
              type="text"
              id="fname"
              placeholder="enter your first name"
              className="input"
              value={firstName}
              required
            />
          </label>
          <label className="label" htmlFor="lname">
            last name
            <input
              onChange={(e) =>
                dispatch({
                  type: "LNAME",
                  payload: e.target.value,
                })
              }
              type="text"
              id="lname"
              placeholder="enter your last name"
              className="input"
              value={lastName}
              required
            />
          </label>
          <label className="label" htmlFor="email">
            Email
            <input
              onChange={(e) =>
                dispatch({
                  type: "EMAIL",
                  payload: e.target.value,
                })
              }
              type="email"
              id="email"
              placeholder="xyz@gmail.com"
              className="input"
              value={email}
              required
            />
          </label>
          <label className="label" htmlFor="password">
            Password
            <div className="password-input">
              <input
                onChange={(e) =>
                  dispatch({
                    type: "PASSWORD",
                    payload: e.target.value,
                  })
                }
                type={passwordType}
                id="password"
                placeholder="*********"
                className="input"
                value={password}
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
                    dispatch({
                      type: "PASSWORD_VISIBLITY",
                      payload: "password",
                    })
                  }
                ></i>
              )}
            </div>
          </label>
          <label className="label" htmlFor="confirm-password">
            Confirm Password
            <div className="password-input">
              <input
                onChange={(e) =>
                  dispatch({
                    type: "CONFIRM_PASSWORD",
                    payload: e.target.value,
                  })
                }
                type={confirmPasswordType}
                id="confirm-password"
                placeholder="*********"
                className="input"
                value={confirmPassword}
                required
              />

              {confirmPasswordType === "password" ? (
                <i
                  className="fa fa-eye-slash password-icons"
                  onClick={() =>
                    dispatch({
                      type: "CONFIRM_PASSWORD_VISIBLITY",
                      payload: "text",
                    })
                  }
                ></i>
              ) : (
                <i
                  className="fa fa-eye password-icons"
                  onClick={() =>
                    dispatch({
                      type: "CONFIRM_PASSWORD_VISIBLITY",
                      payload: "password",
                    })
                  }
                ></i>
              )}
            </div>
          </label>

          <div className="t-and-c">
            <label className="label" htmlFor="t&c">
              <input name="t&c" id="t&c" type="checkbox" required />I accept
              terms and condition
            </label>
          </div>
          <button className="signup-btn">create new account</button>
          <div className="have-account">
            <Link to="/login" className="text-decorations account">
              already have an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
