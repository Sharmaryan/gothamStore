import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./auth-context";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemsAdded, setItemsAdded] = useState([]);
  const [disableCart, setDisableCart] = useState(false);
  const [incrementHandle, setIncrementHandle] = useState(false);
  const [decrementHandle, setDecrementHandle] = useState(false);


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
        console.log(err);
      }
    };
    data();
  }, []);

  return (
    <CartContext.Provider
      value={{
        itemsAdded,
        setItemsAdded,
        cartLength,
        disableCart,
        setDisableCart,
        incrementHandle,
        setIncrementHandle,
        decrementHandle,
        setDecrementHandle,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
