import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useAuth, useCart, useWishlist, useProduct } from "../../context";

export const Navbar = () => {
  const { auth } = useAuth();
  const { cartLength } = useCart();
  const { wishlistLength } = useWishlist();
  const { pathname } = useLocation();
  const { searchProduct, productsDispatch } = useProduct();
  return (
    <nav className="nav-menu navbar">
      <h1 className="nav-menu-logo">
        <Link to="/" className="text-decorations text-white nav-logo">
          Gotham Store
        </Link>
      </h1>

      {pathname === "/products" && (
        <div className="search">
          <i className="fas fa-search search-background"></i>
          <input
            type="text"
            placeholder="search products"
            className="search-bar"
            value={searchProduct}
            onChange={(e) =>
              productsDispatch({
                type: "SEARCH_PRODUCT",
                payload: e.target.value,
              })
            }
          />
        </div>
      )}
      <div className="menu">
        <ul>
          <li className="menu-items fas-icons">
            <button className="btn btn-link">
              <Link to={"/products"} className="btn-text-decoration btn-shop ">
                <i className="fa fa-shopping-bag"></i>
              </Link>
            </button>
          </li>
          {auth.user ? (
            <li className="menu-items">
              <Link to="/profile" className="text-decorations text-white">
                <i className="fas fa-user-alt"></i>
              </Link>
            </li>
          ) : (
            <li className="menu-items">
              <Link to="/login" className="text-decorations text-white">
                <i className="fa fa-sign-in"></i>
              </Link>
            </li>
          )}

          <li className="menu-items fas-icons">
            <Link to="/wishlist" className="text-decorations text-white">
              <i className="fas fa-heart"></i>
            </Link>
            <div className="count-items">{wishlistLength}</div>
          </li>
          <li className="menu-items fas-icons">
            <Link to="/cart" className="text-decorations text-white">
              <i className="fas fa-shopping-cart"></i>
            </Link>
            <div className="count-items">{cartLength}</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
