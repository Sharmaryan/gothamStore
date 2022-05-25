import React from "react";
import "./UserProfile.css";
import { useAuth } from "context";
export const UserProfile = () => {
   const {
     auth: {
       user: { firstName, lastName, email },
     },
     setAuth,
     auth,
   } = useAuth();


  const logout = () => {
    setAuth({ ...auth, user: null, token: "", auth: false });
  };
  return (
    <div className="profile">
      <div className="card card-simple">
        <p className="card-title">Your Profile</p>
        <p className="card-desc">
          Name :{firstName} {lastName}
        </p>
        <p className="card-desc">Email :{email}</p>
        <button className="card-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};
