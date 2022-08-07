import { useContext, createContext, useReducer } from "react";
import { ProductReducer } from "../reducer/products-reducer";
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [
    {
      sortBy,
      category: { selfhelp, business, biography, spirtual },
      rating,
      range,
      searchProduct
    },
    
    productsDispatch,
  ] = useReducer(ProductReducer, {
    sortBy: null,
    category: {
      selfhelp: false,
      business: false,
      biography: false,
      spirtual: false,
    },
    rating: null,
    range: 500,
    searchProduct:''
  });

  return (
    <ProductContext.Provider
      value={{
        sortBy,
        selfhelp,
        business,
        biography,
        spirtual,
        rating,
        range,
        searchProduct,
        productsDispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
