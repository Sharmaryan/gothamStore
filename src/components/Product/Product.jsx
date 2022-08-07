import { useAuth, useWishlist, useCart } from "context";
import React, { useState } from "react";
import "./Product.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { productExists } from "utility/productExists";
import { addToCart } from "services/cart";
import { addToWishlist } from "services/wishlist";
import { useToast } from "hooks/useToast";
import axios from "axios";
export const Product = ({ product }) => {
  const { itemsAdded, setItemsAdded, disableCart, setDisableCart } = useCart();
  const {
    wishlistItems,
    setWishlistItems,
    disableWishlist,
    setDisableWishlist,
  } = useWishlist();
  const { image, name, price, star, _id } = product;
  const { auth } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();


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
          <i className="fa fa-star "></i>
        </span>
      </div>

      <div className="card-btns">
        {productExists(itemsAdded, product) ? (
          <button className="card-btn card-vertical-btn ">
            <Link className="cart-secondary cart-move" to="/cart">
              Move to Cart
            </Link>
          </button>
        ) : disableCart ? (
          <button className="card-btn card-vertical-btn">add to cart</button>
        ) : (
          <button
            className="card-btn card-vertical-btn"
            onClick={() =>
              addToCart(
                product,
                auth,
                navigate,
                showToast,
                setItemsAdded,
                axios,
                setDisableCart,
                location
              )
            }
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
        ) : disableWishlist ? (
          <button className="card-btn">add to wishlist</button>
        ) : (
          <button
            className="card-btn"
            onClick={() =>
              addToWishlist(
                product,
                auth,
                navigate,
                axios,
                setWishlistItems,
                showToast,
                setDisableWishlist,
                location
              )
            }
          >
            add to wishlist
          </button>
        )}
      </div>
    </div>
  );
};
