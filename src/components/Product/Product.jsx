import { useCart } from "context/cart-context";
import { useWishlist } from "context/wishlist-context";
import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
export const Product = ({ product }) => {
  const { addToCart, itemsAdded } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();
  const { image, name, price, star } = product;

  return (
    <div className="card card-vertical ">
      <img src={image} alt="products" className="card-logo" />
      <p className="card-title">{name}</p>
      <div className="card-price">
        ₹ {price}
        <span className="rating">
          {star}
          <i class="fa fa-star "></i>
        </span>
      </div>

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
        {wishlistItems.some((items) => items._id === product._id) ? (
          <button className="card-btn card-vertical-btn ">
            <Link className="cart-secondary" to="/wishlist">
              Move to Wishlist
            </Link>
          </button>
        ) : (
          <button className="card-btn" onClick={() => addToWishlist(product)}>
            add to wishlist
          </button>
        )}
      </div>
    </div>
  );
};
