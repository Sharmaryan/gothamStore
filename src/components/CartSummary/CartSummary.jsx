import React from "react";
import "./CartSummary.css";
import { useCart } from "context/cart-context";

export const CartSummary = () => {
  const { itemsAdded, calculatePrice, discountPerBook, totalCartItems } =
    useCart();
  return (
    <div className="price">
      <div className="price-heading">price details</div>
      <div className="price-desc">
        <div className="price-desc-desc">
          price ({totalCartItems(itemsAdded)} items)
        </div>
        <div className="price-desc-price">₹{calculatePrice(itemsAdded)}</div>
      </div>
      <div className="price-desc">
        <div className="price-desc-desc">discount</div>
        <div className="price-desc-price">-₹{discountPerBook(itemsAdded)}</div>
      </div>
      <div className="price-desc">
        <div className="price-desc-desc">delivery charge</div>
        <div className="price-desc-price">₹99</div>
      </div>
      <div className="price-total">
        <div className="price-inner">total amount</div>
        <div className="price-inner">
          ₹{calculatePrice(itemsAdded) + 99 - discountPerBook(itemsAdded)}
        </div>
      </div>
      <div className="price-saving">
        you will save ₹{discountPerBook(itemsAdded)} on this order
      </div>
      <div className="price-button">
        <button className="price-btn">place order</button>
      </div>
    </div>
  );
};
