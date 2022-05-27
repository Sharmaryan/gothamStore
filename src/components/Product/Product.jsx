import { useCart } from "context/cart-context";
import { useWishlist } from "context/wishlist-context";
import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { productExists } from "utility/productExists";
export const Product = ({ product }) => {
  const { addToCart, itemsAdded } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();
  const { image, name, price, star, _id } = product;

  return (
    <div className="card card-vertical ">
      <Link to={`/products/${_id}`}>
        <img src={image} alt="products" className="card-logo" />
      </Link>
      <p className="card-title">{name}</p>
      <div className="card-price">
        ₹ {price}
        <span className="rating">
          {star}
          <i class="fa fa-star "></i>
        </span>
      </div>

      <div className="card-btns">
        {productExists(itemsAdded, product) ? (
          <button className="card-btn card-vertical-btn ">
            <Link className="cart-secondary cart-move" to="/cart">
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
        {productExists(wishlistItems, product) ? (
          <button className="card-btn card-vertical-btn ">
            <Link className="cart-secondary cart-wishlist" to="/wishlist">
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
