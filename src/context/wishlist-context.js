import { useEffect, useContext, createContext, useState } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";
import { useCart } from "./cart-context";
import { useNavigate } from "react-router-dom";
const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [wishlistError, setWishListError] = useState(false);
  
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { addToCart, itemsAdded, removeFromCart, incrementQuantity } =
    useCart();

  const wishlistLength = wishlistItems.length;

  const addToWishlist = async (product) => {
    if (!auth.user) {
      navigate("/login");
    } else {
      try {
        const response = await axios({
          method: "post",
          url: "/api/user/wishlist",
          headers: { authorization: auth.token },
          data: { product: product },
        });
        setWishlistItems(response.data.wishlist);
      } catch (err) {
        console.log(err.response);
      }
    }
  };

  useEffect(() => {
    async () => {
      try {
        const response = await axios({
          method: "get",
          url: "/api/user/wishlist",
          headers: { authorization: auth.token },
        });
        setWishlistItems(response.data.wishlist);
        console.log(response.data.wishlist);
      } catch (err) {
        console.log(err.response);
      }
    };
  }, []);

  const removeFromWishlist = async (product) => {
    const productId = product._id;
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: auth.token },
      });
      setWishlistItems(response.data.wishlist);
    } catch (err) {
      console.log(err.response);
    }
  };

  const moveToCart = (product) => {
    const itemPresent = itemsAdded.some((item) => item._id === product._id);
    if (!itemPresent) {
      addToCart(product);
      removeFromWishlist(product);
    }
    if (itemPresent) {
      incrementQuantity(product);
      removeFromWishlist(product);
    }
  };

  const moveToWishlist = (product) => {
    const itemPresent = wishlistItems.some((item) => item._id === product._id);
    if (!itemPresent) {
      addToWishlist(product);
      removeFromCart(product);
    } else {
      setWishListError(true);
      setTimeout(() => {
        setWishListError(false);
      }, 1000);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        addToWishlist,
        wishlistItems,
        removeFromWishlist,
        moveToCart,
        wishlistLength,
        errorMsg,
        moveToWishlist,
        wishlistError,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
