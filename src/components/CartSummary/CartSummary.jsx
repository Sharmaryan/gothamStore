import React from "react";
import "./CartSummary.css";
import { useCart, useAuth } from "context";
import { discountPerBook, calculatePrice, totalCartItems, removeCart } from "services/cart";
import usePayment from "hooks/usePayment";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const CartSummary = () => {
  const redirect = () => {
    removeCart(axios, auth, setItemsAdded);
    navigate("/thank-you");
  };

  const navigate = useNavigate();
  const { itemsAdded, setItemsAdded } = useCart();
  const { auth } = useAuth();
  const showRazorPay = usePayment(
    calculatePrice(itemsAdded) + 99 - discountPerBook(itemsAdded),
    auth.user,
    redirect
  );
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
        <button className="price-btn" onClick={showRazorPay}>
          place order
        </button>
      </div>
    </div>
  );
};
