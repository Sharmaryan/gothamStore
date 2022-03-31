import { useCart } from "context/cart-context";
import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
export const Product = ({ product }) => {
  const { addToCart, itemsAdded } = useCart();
  const { image, name, price } = product;

  return (
    <div className="card card-vertical ">
      <img src={image} alt="" className="card-logo" />
      <p className="card-title">{name}</p>
      <div className="card-price">{price}</div>

      <div className="card-btns">
        {itemsAdded.some((items) => items._id === product._id) ? (
          <button className="card-btn card-vertical-btn ">
            <Link className="cart-secondary" to="/cart">
              Move to Cart
            </Link>
          </button>
        ) : (
          <button
            className="card-btn card-vertical-btn"
            onClick={() => addToCart(product)}
          >
            add to cart
          </button>
        )}

        <button className="card-btn">add to wishlist</button>
      </div>
    </div>
  );
};
