import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SingelProductPage.css";
import { useCart, useWishlist, useAuth } from "context";
import { productExists } from "utility/productExists";
import { addToCart } from "services/cart";
import { addToWishlist } from "services/wishlist";
import { useToast } from "hooks/useToast";

export const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const { productId } = useParams();
  const { itemsAdded, setItemsAdded } = useCart();
  const { auth } = useAuth();
  const { wishlistItems, setWishlistItems } = useWishlist();
  const { showToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/products/${productId}`);
      setSingleProduct(response.data.product);
    })();
  }, [productId]);

  const { name, image, price, category } = singleProduct;

  return (
    <div className="single-product">
      <img src={image} alt="" className="single-product-image " />

      <div className="card card-vertical single-product-card">
        <p className="card-title single-product-title text-xl">{name}</p>
        <p className="single-product-category text-m">
          <span className="single-category">Category:</span>
          <span className="single-category-name">{category}</span>
        </p>
        <div className="card-price single-category-price">₹{price}</div>
        <p className="card-desc single-product-desc text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea impedit
          quod adipisci facilis? Obcaecati autem odit debitis tempora fugiat
          tenetur? Dolorum numquam voluptate sunt incidunt et odit nulla
          consequatur laboriosam.
        </p>
        <div className="card-btns">
          {productExists(itemsAdded, singleProduct) ? (
            <Link to="/cart">
              <button className="card-btn card-vertical-btn category-btns">
                move to cart
              </button>
            </Link>
          ) : (
            <button
              className="card-btn card-vertical-btn category-btns"
              onClick={() =>
                addToCart(
                  singleProduct,
                  auth,
                  navigate,
                  showToast,
                  setItemsAdded,
                  axios
                )
              }
            >
              add to cart
            </button>
          )}

          {productExists(wishlistItems, singleProduct) ? (
            <Link to="/wishlist">
              <button className="card-btn category-btns">
                move to wishlist
              </button>
            </Link>
          ) : (
            <button
              className="card-btn category-btns"
              onClick={() =>
                addToWishlist(
                  singleProduct,
                  auth,
                  navigate,
                  axios,
                  setWishlistItems,
                  showToast
                )
              }
            >
              add to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
