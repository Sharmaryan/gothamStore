import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./SingelProductPage.css";
import { useCart, useWishlist } from "context";
import { productExists } from "utility/productExists";
export const SingleProductPage = () => {
  const [singleProduct, setSingleProduct] = useState([]);

  const { productId } = useParams();
  const { addToCart, itemsAdded } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();

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

      <div class="card card-vertical single-product-card">
        <p class="card-title single-product-title text-xl">{name}</p>
        <p class="single-product-category text-m">
          <span className="single-category">Category:</span>
          <span className="single-category-name">{category}</span>
        </p>
        <div class="card-price single-category-price">₹{price}</div>
        <p class="card-desc single-product-desc text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea impedit
          quod adipisci facilis? Obcaecati autem odit debitis tempora fugiat
          tenetur? Dolorum numquam voluptate sunt incidunt et odit nulla
          consequatur laboriosam.
        </p>
        <div class="card-btns">
          {productExists(itemsAdded, singleProduct) ? (
            <Link to="/cart">
              <button class="card-btn card-vertical-btn category-btns">
                move to cart
              </button>
            </Link>
          ) : (
            <button
              class="card-btn card-vertical-btn category-btns"
              onClick={() => addToCart(singleProduct)}
            >
              add to cart
            </button>
          )}

          {productExists(wishlistItems, singleProduct) ? (
            <Link to="/wishlist">
              <button class="card-btn category-btns">move to wishlist</button>
            </Link>
          ) : (
            <button
              class="card-btn category-btns"
              onClick={() => addToWishlist(singleProduct)}
            >
              add to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
