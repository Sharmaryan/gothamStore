import React from "react";

export const Product = ({ product: { image, name, price } }) => {
  return (
    <div >
      <div className="card card-vertical ">
        <img src={image} alt="" className="card-logo" />
        <p className="card-title">{name}</p>
        <div className="card-price">{price}</div>

        <div className="card-btns">
          <button className="card-btn card-vertical-btn">add to cart</button>
          <button className="card-btn">add to wishlist</button>
        </div>
      </div>
    </div>
  );
};
