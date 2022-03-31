import { useCart } from "context/cart-context";
import React from "react";
import "./CartProduct.css";

export const CartProduct = () => {
  const {
    isDisable,
    itemsAdded,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCart();

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
                    disabled={isDisable}
                    className="cart-quantity-minus"
                    onClick={() => decrementQuantity(product)}
                  >
                    -
                  </button>
                  <div className="cart-quantity-value">{qty}</div>
                  <button
                    className="cart-quantity-plus"
                    onClick={() => incrementQuantity(product)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-buttons">
                  <button
                    className="cart-button-remove"
                    onClick={() => removeFromCart(product)}
                  >
                    remove from cart
                  </button>
                  <button className="cart-button-move">move to wishlist</button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
