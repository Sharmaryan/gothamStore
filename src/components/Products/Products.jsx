import React, { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../Product/Product";
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
  return (
    <div className="products">
      <div>{data && data.map((product) => <Product product={product} key={product._id}/>)}</div>
    </div>
  );
};
