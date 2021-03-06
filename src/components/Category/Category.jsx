import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
import { useProduct } from "context/product-context";

export const Category = () => {
  const { productsDispatch } = useProduct();

  const categories = [
    {
      id: 1,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/51aEhyjQGrL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      altText: "business books",
      dispatchType: "BUSINSESS",
      title: "Business",
    },
    {
      id: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX460_BO1,204,203,200_.jpg",
      altText: "self help books",
      dispatchType: "SELF_HELP",
      title: "Self Help",
    },
    {
      id: 3,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/518aPMbn8uL._SX292_BO1,204,203,200_.jpg",
      altText: "spirtual books",
      dispatchType: "SPIRTUAL",
      title: "Spirtual",
    },
    {
      id: 4,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/41ZlN7iry-L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      altText: "biography books",
      dispatchType: "BIOGRAPHY",
      title: "Biography",
    },
  ];

  return (
    <div>
      <h2 className="categories-title text-l text-center">Categories</h2>
      <div className="categories">
        {categories.map(({ image, altText, dispatchType, title, id }) => {
          return (
            <Link
              to="/products"
              className="category"
              key={id}
              onClick={() => productsDispatch({ type: dispatchType })}
            >
              <img src={image} className="category-image" alt={altText} />
              <p className="category-title text-white">{title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
