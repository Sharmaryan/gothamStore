import React, { useState } from "react";
import { removeFromWishlist } from "services/wishlist";
import { moveToCart } from "services/cart";
import axios from "axios";
import "./WishlistProduct.css";
import { useAuth, useCart, useWishlist } from "context";
import { useToast } from "hooks/useToast";
import { useNavigate } from "react-router-dom";

export const WishlistProduct = () => {
  const {
    wishlistItems,
    setWishlistItems,
    disableRemoveFromWishlist,
    setDisableRemoveFromWishlist,
  } = useWishlist();
  const {
    itemsAdded,
    setItemsAdded,
    disableCart,
    setDisableCart,
    setIncrementHandle,
    incrementHandle
  } = useCart();
  const { auth } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  return (
    <div className="wishlist-items">
      {wishlistItems.map((item) => {
        const { image, name, price, _id } = item;
        return (
          <div className="card card-dismiss" key={_id}>
            <div className="card-dismiss-btn">
              {disableRemoveFromWishlist ? (
                <i className="fa fa-times"></i>
              ) : (
                <i
                  className="fa fa-times"
                  onClick={() =>
                    removeFromWishlist(
                      item,
                      axios,
                      auth,
                      setWishlistItems,
                      showToast, 
                      setDisableRemoveFromWishlist
                    )
                  }
                ></i>
              )}
            </div>
            <img src={image} alt={name} className="card-logo" />
            <p className="card-title">{name}</p>
            <div className="card-price">₹{price}</div>

            <div className="card-btns">
              {disableCart || incrementHandle ? (
                <button className="card-btn">move to cart</button>
              ) : (
                <button
                  className="card-btn"
                  onClick={() =>
                    moveToCart(
                      item,
                      itemsAdded,
                      removeFromWishlist,
                      auth,
                      navigate,
                      showToast,
                      setItemsAdded,
                      setWishlistItems,
                      axios,
                      setDisableCart,
                      setIncrementHandle,
                      setDisableRemoveFromWishlist
                    )
                  }
                >
                  move to cart
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
