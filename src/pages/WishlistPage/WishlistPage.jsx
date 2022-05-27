import React from "react";
import { WishlistProduct } from "components/WishlistProduct/WishlistProduct";
import "./WishlistPage.css";
import { useWishlist } from "context";
import { Link } from "react-router-dom";
export const WishlistPage = () => {
  const { wishlistItems } = useWishlist();
  return (
    <div className="wishlist-page">
      <WishlistProduct />

      {wishlistItems.length === 0 && (
        <h1 className="text-center">
          Oh! Such Empty 
          <Link to="/products" className="wishlist-shop">
            Shop Now
          </Link>{" "}
        </h1>
      )}
    </div>
  );
};
