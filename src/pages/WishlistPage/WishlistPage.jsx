import React from "react";
import { WishlistProduct } from "components/WishlistProduct/WishlistProduct";
import "./WishlistPage.css";
import { useWishlist } from "context";
import { Link } from "react-router-dom";
import { useTitle } from "hooks/useTitle";
export const WishlistPage = () => {
  const { wishlistItems } = useWishlist();
  useTitle("Wishlist | Gotham Store");
  return (
    <div className="wishlist-page">
      <h1 className="mt-4 text-center wishlist-length">Wishlist({wishlistItems.length})</h1>
      <WishlistProduct />
      {wishlistItems.length === 0 && (
        <h1 className="text-center mt-4">
          Oh! Such Empty 
          <Link to="/products" className="wishlist-shop">
            Shop Now
          </Link>{" "}
        </h1>
      )}
    </div>
  );
};
