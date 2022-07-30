import React from "react";
import { useNavigate } from "react-router-dom";
import "./ThankYou.css";

export const ThankYou = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/products");
  }, 3000);
  return (
    <div className="thank-you">
      ThankYou for shopping with us, you will be redirect to the products page
    </div>
  );
};
