import { useCart, useWishlist, useAuth } from "context";
import React from "react";
import { removeFromCart } from "services/cart";
import { useToast } from "hooks/useToast";
import { incrementQuantity, decrementQuantity } from "services/cart";
import { moveToWishlist } from "services/wishlist";
import { useNavigate } from "react-router-dom";
import "./CartProduct.css";
import axios from "axios";

export const CartProduct = () => {
  const { itemsAdded } = useCart();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const { setItemsAdded, setIsDisable } = useCart();
  const { auth } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

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
                  <div className="cart-discount-price">₹{discount}</div>
                </div>

                <div className="cart-quantity">
                  <div className="cart-quantity-head">Quantity:</div>
                  <button
                    className="cart-quantity-minus"
                    onClick={() =>
                      decrementQuantity(
                        product,
                        auth,
                        setItemsAdded,
                        axios,
                        setIsDisable,
                        removeFromCart,
                        showToast
                      )
                    }
                  >
                    -
                  </button>
                  <div className="cart-quantity-value">{qty}</div>
                  <button
                    className="cart-quantity-plus"
                    onClick={() =>
                      incrementQuantity(product, auth, setItemsAdded, axios)
                    }
                  >
                    +
                  </button>
                </div>
                <div className="cart-buttons">
                  <button
                    className="cart-button-remove"
                    onClick={() =>
                      removeFromCart(
                        product,
                        axios,
                        auth,
                        setItemsAdded,
                        showToast
                      )
                    }
                  >
                    remove from cart
                  </button>
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
                        setItemsAdded
                      )
                    }
                  >
                    move to wishlist
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
