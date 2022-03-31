import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./auth-context";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemsAdded, setItemsAdded] = useState([]);
  const [isDisable, setIsDisable] = useState(false);

  const cartLength = itemsAdded.length;
  const { auth } = useAuth();
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "/api/user/cart",
          headers: { authorization: auth.token },
        });
        setItemsAdded(response.data.cart);
      } catch (err) {
        console.log(err.response);
      }
    };
    data();
  }, []);

  const discountPerBook = (itemsAdded) => {
    return [...itemsAdded].reduce(
      (acc, curr) => Number(acc) + curr.discount * curr.qty,
      0
    );
  };

  const calculatePrice = (itemsAdded) => {
    return [...itemsAdded].reduce(
      (acc, curr) => Number(acc) + curr.price * curr.qty,
      0
    );
  };

  const totalCartItems = (itemsAdded) => {
    return [...itemsAdded].reduce((acc, curr) => Number(acc) + curr.qty, 0);
  };

  const addToCart = async (product) => {
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/cart",
        headers: { authorization: auth.token },
        data: { product: product },
      });
      setItemsAdded(response.data.cart);
    } catch (err) {
      console.log(err.response);
    }
  };

  const incrementQuantity = async (product) => {
    const productId = product._id;
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "increment" } },
        { headers: { authorization: auth.token } }
      );

      setItemsAdded(response.data.cart);
    } catch (err) {
      console.log(err.response);
    }
  };
  const decrementQuantity = async (product) => {
    setIsDisable(true);
    const productId = product._id;
    if (product.qty === 1) {
      removeFromCart(product);
    }
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "decrement" } },
        { headers: { authorization: auth.token } }
      );
      setIsDisable(false);
      setItemsAdded(response.data.cart);
    } catch (err) {
      console.log(err.response);
    }
  };

  const removeFromCart = async (product) => {
    const productId = product._id;
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: auth.token },
      });
      setItemsAdded(response.data.cart);
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        itemsAdded,
        setItemsAdded,
        incrementQuantity,
        cartLength,
        decrementQuantity,
        removeFromCart,
        isDisable,
        discountPerBook,
        totalCartItems,
        calculatePrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
