import React from "react";
import "./CartSummary.css";
export const CartSummary = () => {
  return (
    <div className="price">
      <div className="price-heading">price details</div>
      <div className="price-desc">
        <div className="price-desc-desc">price (2 items)</div>
        <div className="price-desc-price">$199</div>
      </div>
      <div className="price-desc">
        <div className="price-desc-desc">discount</div>
        <div className="price-desc-price">-$99</div>
      </div>
      <div className="price-desc">
        <div className="price-desc-desc">delivery charge</div>
        <div className="price-desc-price">$50</div>
      </div>
      <div className="price-total">
        <div className="price-inner">total amount</div>
        <div className="price-inner">$150</div>
      </div>
      <div className="price-saving">you will save $49 on this order</div>
      <div className="price-button">
        <button className="price-btn">place order</button>
      </div>
    </div>
  );
};
