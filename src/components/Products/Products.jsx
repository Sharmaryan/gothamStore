import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../Product/Product";
import { useProduct } from "../../context/product-context";
import { filterByCategory } from "../../SortingAndFiltering/filterByCategory";

import { sortByPrice } from "../../SortingAndFiltering/sortByPrice";
import { sortByRating } from "../../SortingAndFiltering/sortByRating";
import {filterByPriceRange} from '../../SortingAndFiltering/filterByPriceRange';

import "./Products.css";

export const Products = () => {
  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const response = await axios.get("api/products");
        setLoading(false);
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { selfhelp, business, biography, spirtual, sortBy, rating, range } =
    useProduct();

  const filteredProducts = filterByCategory(
    data,
    selfhelp,
    business,
    biography,
    spirtual
  );
  const sortedProducts = sortByPrice(sortBy, filteredProducts);

  const ratedProducts = sortByRating(sortedProducts, rating);
  const products = filterByPriceRange(ratedProducts, range);

  return (
    <div className="products">
      {loading && <h1>Loading...</h1>}
      {products &&
        products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
    </div>
  );
};
