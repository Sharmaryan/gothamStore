import { useAuth, useWishlist, useCart } from "context";
import React from "react";
import "./Product.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { productExists } from "utility/productExists";
import { addToCart } from "services/cart";
import { addToWishlist } from "services/wishlist";
import { useToast } from "hooks/useToast";
import axios from "axios";
export const Product = ({ product }) => {
  const { itemsAdded, setItemsAdded } = useCart();
  const { wishlistItems, setWishlistItems } = useWishlist();
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
