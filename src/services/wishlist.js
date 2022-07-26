const addToWishlist = async (
  product,
  auth,
  navigate,
  axios,
  setWishlistItems,
  showToast
) => {
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
      showToast("success", "Added to Wishlist!");
      setWishlistItems(response.data.wishlist);
    } catch (err) {
      console.log(err);
      showToast("error", "Something went wrong with server!");
    }
  }
};

const removeFromWishlist = async (
  product,
  axios,
  auth,
  setWishlistItems,
  showToast
) => {
  const productId = product._id;
  try {
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: { authorization: auth.token },
    });
    setWishlistItems(response.data.wishlist);
    showToast("warning", "Removed from Wishlist!");
  } catch (err) {
    showToast("error", "Something went wrong with server!");
  }
};

const moveToWishlist = (
  product,
  wishlistItems,
  removeFromCart,
  showToast,
  auth,
  navigate,
  axios,
  setWishlistItems,
  setItemsAdded
) => {
  const itemPresent = wishlistItems.some((item) => item._id === product._id);
  if (!itemPresent) {
    addToWishlist(product, auth, navigate, axios, setWishlistItems, showToast);
    removeFromCart(product, axios, auth, setItemsAdded, showToast);
  } else {
    showToast("warning", "Item is already in the wishlist");
  }
};

export { moveToWishlist, addToWishlist, removeFromWishlist };
