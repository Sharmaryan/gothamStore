import React from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
export const Shop = () => {
  return (
    <div className="shop">
      <img
        src="https://media.istockphoto.com/photos/textbooks-stacked-on-school-desk-with-chalkboard-background-picture-id638383032?b=1&k=20&m=638383032&s=170667a&w=0&h=T8UqCXjblfdTPKu4LlLHqJWizWbd3LEhEkJHAMcB83I="
        alt="books"
        className="img-responsive img shop-image"
      />
      <div className="shop-desc">
        <h1 className="shop-heading">There is no friend as loyal as a book.</h1>
        <Link to='/products' className="shop-btn">shop now</Link>
      </div>
    </div>
  );
};
