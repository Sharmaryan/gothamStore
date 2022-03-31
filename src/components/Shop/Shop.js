import React from "react";
import { Link } from "react-router-dom";
import "./Shop.css";
export const Shop = () => {
  return (
    <div>
      <main className="container">
        <h1 className="container-title">store for bibliophiles</h1>

        <button className="btn btn-link">
          <Link to={"/products"} className="btn-text-decoration btn-shop ">
            shop now
          </Link>
        </button>
      </main>
    </div>
  );
};
