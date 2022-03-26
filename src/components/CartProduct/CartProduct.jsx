import React from "react";
import "./CartProduct.css";
export const CartProduct = () => {
  return (
    <div className="cart-card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
        alt=""
        className="cart-image"
      />
      <div className="cart-details">
        <p className="cart-head">Batman Bike</p>
        <div className="cart-real-discount">
          <div className="cart-real-price">$2000</div>
          <div className="cart-discount-price">$3000</div>
        </div>
        <div className="cart-offer">50% off</div>
        <div className="cart-quantity">
          <div className="cart-quantity-head">Quantity:</div>
          <div className="cart-quantity-minus">-</div>
          <div className="cart-quantity-value">1</div>
          <div className="cart-quantity-plus">+</div>
        </div>
        <div className="cart-buttons">
          <button className="cart-button-remove">remove from cart</button>
          <button className="cart-button-move">move to wishlist</button>
        </div>
      </div>
    </div>
  );
};
