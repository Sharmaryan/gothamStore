import React from "react";
import { CartProduct, CartSummary } from "components";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { useTitle } from "hooks/useTitle";
import { useAddress, useCart } from "context";

export const CartPage = () => {
  const { itemsAdded } = useCart();
  const { selectedAddress, address } = useAddress();
  useTitle("Cart | Gotham Store");
  return (
    <div>
      <div className="address">
        <div className="address-name">
        Address:{address
            .filter((item) => item.addressId === selectedAddress)
            .map((item) => (
              <div key={item.addressId}>
                {item.city}, {item.street}, {item.state},{item.pincode}
              </div>
            ))}
        </div>
        <Link to="/address" className="address-new">
          add address
        </Link>
      </div>

      <div className="cart-page">
        <div>
          <CartProduct />
        </div>
        {itemsAdded.length === 0 ? (
          <h1 className="text-center">
            Oh! Such Empty
            <Link to="/products" className="wishlist-shop">
              Shop Now
            </Link>
          </h1>
        ) : (
          <CartSummary />
        )}
      </div>
    </div>
  );
};
