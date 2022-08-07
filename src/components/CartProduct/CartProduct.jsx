import { useCart, useWishlist, useAuth } from "context";
import React, { useState } from "react";
import { removeFromCart } from "services/cart";
import { useToast } from "hooks/useToast";
import { incrementQuantity, decrementQuantity } from "services/cart";
import { moveToWishlist } from "services/wishlist";
import { useNavigate } from "react-router-dom";
import "./CartProduct.css";
import axios from "axios";

export const CartProduct = () => {
  const {
    itemsAdded,
    setItemsAdded,
    incrementHandle,
    setIncrementHandle,
    decrementHandle,
    setDecrementHandle,
  } = useCart();
  const {
    wishlistItems,
    setWishlistItems,
    setDisableWishlist,
    disableWishlist,
  } = useWishlist();
  const { auth } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [disableRemoveCart, setDisableRemoveCart] = useState(false);
  const [disableMoveToWishlist, setDisableMoveToWishlist] = useState(false);

  return (
    <div>
      {itemsAdded &&
        itemsAdded.map((product) => {
          const { image, name, price, _id, qty, discount } = product;
          return (
            <div className="cart-card" key={_id}>
              <img src={image} className="cart-image" />
              <div className="cart-details">
                <p className="cart-head">{name}</p>
                <div className="cart-real-discount">
                  <div className="cart-real-price">{price}</div>
                  <div className="cart-discount-price">
                    {discount}% discount
                  </div>
                </div>

                <div className="cart-quantity">
                  <div className="cart-quantity-head">Quantity:</div>
                  {decrementHandle ? (
                    <button className="cart-quantity-minus">-</button>
                  ) : (
                    <button
                      className="cart-quantity-minus"
                      onClick={() =>
                        decrementQuantity(
                          product,
                          auth,
                          setItemsAdded,
                          axios,
                          removeFromCart,
                          showToast,
                          setDecrementHandle, 
                          setDisableRemoveCart
                        )
                      }
                    >
                      -
                    </button>
                  )}
                  <div className="cart-quantity-value">{qty}</div>
                  {incrementHandle ? (
                    <button className="cart-quantity-plus">+</button>
                  ) : (
                    <button
                      className="cart-quantity-plus"
                      onClick={() =>
                        incrementQuantity(
                          product,
                          auth,
                          setItemsAdded,
                          axios,
                          setIncrementHandle
                        )
                      }
                    >
                      +
                    </button>
                  )}
                </div>
                <div className="cart-buttons">
                  {!disableRemoveCart ? (
                    <button
                      className="cart-button-remove"
                      onClick={() =>
                        removeFromCart(
                          product,
                          axios,
                          auth,
                          setItemsAdded,
                          showToast,
                          setDisableRemoveCart
                        )
                      }
                    >
                      remove from cart
                    </button>
                  ) : (
                    <button className="cart-button-remove">
                      remove from cart
                    </button>
                  )}
                  {disableWishlist ? (
                    <button className="cart-button-move">
                      move to wishlist
                    </button>
                  ) : (
                    <button
                      className="cart-button-move"
                      onClick={() =>
                        moveToWishlist(
                          product,
                          wishlistItems,
                          removeFromCart,
                          showToast,
                          auth,
                          navigate,
                          axios,
                          setWishlistItems,
                          setItemsAdded,
                          setDisableWishlist,
                          setDisableRemoveCart
                        )
                      }
                    >
                      move to wishlist
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
