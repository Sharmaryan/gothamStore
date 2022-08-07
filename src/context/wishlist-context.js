import { useEffect, useContext, createContext, useState } from "react";
import { useAuth } from "./auth-context";
import axios from "axios";
const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [disableWishlist, setDisableWishlist] = useState(false);
  const [disableRemoveFromWishlist, setDisableRemoveFromWishlist] =
    useState(false);
  const { auth } = useAuth();
  const wishlistLength = wishlistItems.length;

  useEffect(() => {
    async () => {
      try {
        const response = await axios({
          method: "get",
          url: "/api/user/wishlist",
          headers: { authorization: auth.token },
        });
        setWishlistItems(response.data.wishlist);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        wishlistLength,
        errorMsg,
        setWishlistItems,
        disableWishlist,
        setDisableWishlist,
        disableRemoveFromWishlist,
        setDisableRemoveFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };
