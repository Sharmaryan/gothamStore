import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "components";
import { useProduct } from "../../context/product-context";
import {
  filterByCategory,
  sortByPrice,
  sortByRating,
  filterByPriceRange,
} from "../../SortingAndFiltering/index";

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
  const {
    selfhelp,
    business,
    biography,
    spirtual,
    sortBy,
    rating,
    range,
    searchProduct,
  } = useProduct();

  const filteredProducts = filterByCategory(
    data,
    selfhelp,
    business,
    biography,
    spirtual
  );

  const searchForProduct = (products, search) =>
    products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

  const sortedProducts = sortByPrice(sortBy, filteredProducts);
  const ratedProducts = sortByRating(sortedProducts, rating);
  const products = filterByPriceRange(ratedProducts, range);
  const searchedProduct = searchForProduct(products, searchProduct);

  return (
    <div className="products">
      {loading && <h1>Loading...</h1>}
      {searchedProduct?.map((product) => (
        <Product product={product} key={product._id} />
      ))}
    </div>
  );
};
