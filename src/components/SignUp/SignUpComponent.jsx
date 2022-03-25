import React from "react";
import "./SiginUpComponent.css";
import { useReducer } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const SignUpComponent = () => {
  const signupReducer = (state, { fieldName, fieldValue, type }) => {
    switch (type) {
      case "INPUT":
        return { ...state, [fieldName]: fieldValue };
      default:
        return { ...state };
    }
  };
  const [{ firstName, lastName, email, password }, dispatch] = useReducer(
    signupReducer,
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }
  );

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
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
    <div className="signup-section">
      <div className="signup-form">
        <h2 className="signup-form-title">signup</h2>
        <form>
          <label className="label" htmlFor="fname">
            first name
            <input
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  fieldName: e.target.name,
                  fieldValue: e.target.value,
                })
              }
              name="firstName"
              type="text"
              id="fname"
              placeholder="enter your first name"
              className="input"
              value={firstName}
            />
          </label>
          <label className="label" htmlFor="lname">
            last name
            <input
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  fieldName: e.target.name,
                  fieldValue: e.target.value,
                })
              }
              name="lastName"
              type="text"
              id="lname"
              placeholder="enter your last name"
              className="input"
              value={lastName}
            />
          </label>
          <label className="label" htmlFor="email">
            Email
            <input
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  fieldName: e.target.name,
                  fieldValue: e.target.value,
                })
              }
              name="email"
              type="email"
              id="email"
              placeholder="xyz@gmail.com"
              className="input"
              value={email}
            />
          </label>
          <label className="label" htmlFor="password">
            Password
            <input
              onChange={(e) =>
                dispatch({
                  type: "INPUT",
                  fieldName: e.target.name,
                  fieldValue: e.target.value,
                })
              }
              name="password"
              type="password"
              id="password"
              placeholder="*********"
              className="input"
              value={password}
            />
          </label>

          <div className="t-and-c">
            <label className="label" htmlFor="t&c">
              <input name="t&c" id="t&c" type="checkbox" />I accept terms and
              condition
            </label>
          </div>
          <button className="signup-btn" onClick={(e) => signupHandler(e)}>
            create new account
          </button>
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
