import React from "react";
import "./UserProfile.css";
import { useAuth } from "context";
import { useToast } from "hooks/useToast";
export const UserProfile = () => {
   const {
     auth: {
       user: { firstName, lastName, email },
     },
     setAuth,
     auth,
   } = useAuth();
 const {showToast} = useToast();

  const logout = () => {
    setAuth({ ...auth, user: null, token: "", auth: false });
    showToast('warning', 'Successfully logged out!');
  };
  return (
    <div className="profile">
      <div className="card card-simple">
        <p className="card-title">Your Profile</p>
        <p className="card-desc profile-username">
          Name :{firstName} {lastName}
        </p>
        <p className="card-desc profile-email" >Email :{email}</p>
        <button className="card-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};
