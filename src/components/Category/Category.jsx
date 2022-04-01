import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import { useProduct } from "context/product-context";

export const Category = () => {
  const { productsDispatch } = useProduct();
  return (
    <div>
      
      <div className="categories">
        <div className="category">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/I/51aEhyjQGrL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            className="category-image"
            alt="car"
          />
          <p className="category-title">
            <Link
              to="/products"
              className="text-decorations text-white"
              onClick={() => productsDispatch({ type: "BUSINSESS" })}
            >
           
              Business
            </Link>
          </p>
        </div>
        <div className="category">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX460_BO1,204,203,200_.jpg"
            className="category-image"
            alt="batman"
          />
          <p className="category-title">
            <Link
              to="/products"
              className="text-decorations text-white"
              onClick={() => productsDispatch({ type: "SELF_HELP" })}
            >
            
              Self Help
            </Link>
          </p>
        </div>
        <div className="category">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/518aPMbn8uL._SX292_BO1,204,203,200_.jpg"
            className="category-image"
            alt="bike"
          />
          <p className="category-title">
            <Link
              to="/products"
              className="text-decorations text-white"
              onClick={() => productsDispatch({ type: "SPIRTUAL" })}
            >
            
              Spirtual
            </Link>
          </p>
        </div>
        <div className="category">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/I/41ZlN7iry-L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            className="category-image"
            alt="plane"
          />
          <p className="category-title">
            <Link
              to="/products"
              className="text-decorations text-white"
              onClick={() => productsDispatch({ type: "BIOGRAPHY" })}
            >
             
              Biography
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
