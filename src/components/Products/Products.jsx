import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../Product/Product";
import { useProduct } from "../../context/product-context";
import { filterByCategory } from "../../SortingAndFiltering/filterByCategory";

import { sortByPrice } from "../../SortingAndFiltering/sortByPrice";

import "./Products.css";

export const Products = () => {
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("api/products");
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const [data, setData] = useState([]);
  const { selfhelp, business, biography, spirtual, sortBy } = useProduct();

  const filteredProducts = filterByCategory(
    data,
    selfhelp,
    business,
    biography,
    spirtual
  );
  const sortedProducts = sortByPrice(sortBy, filteredProducts);

  return (
    <div className="products">
      {sortedProducts &&
        sortedProducts.map((product) => (
          <Product product={product} key={product._id} />
        ))}
    </div>
  );
};
