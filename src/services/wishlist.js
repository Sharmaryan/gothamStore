const addToWishlist = async (
  product,
  auth,
  navigate,
  axios,
  setWishlistItems,
  showToast,
  setDisableWishlist,
  location,
) => {
  if (!auth.user) {
    navigate("/login", { state: { from: location }, replace: true });
  } else {
    setDisableWishlist(true);
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/wishlist",
        headers: { authorization: auth.token },
        data: { product: product },
      });
      showToast("success", "Added to Wishlist!");
      setWishlistItems(response.data.wishlist);
      setDisableWishlist(false);
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
  showToast,
  setDisableRemoveFromWishlist
) => {
  const productId = product._id;
  setDisableRemoveFromWishlist(true);
  try {
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: { authorization: auth.token },
    });
    setWishlistItems(response.data.wishlist);
    setDisableRemoveFromWishlist(false);
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
  setItemsAdded,
  setDisableWishlist,
  setDisableRemoveCart
) => {
  const itemPresent = wishlistItems.some((item) => item._id === product._id);
  if (!itemPresent) {
    addToWishlist(
      product,
      auth,
      navigate,
      axios,
      setWishlistItems,
      showToast,
      setDisableWishlist
    );
    removeFromCart(
      product,
      axios,
      auth,
      setItemsAdded,
      showToast,
      setDisableRemoveCart
    );
  } else {
    showToast("warning", "Item is already in the wishlist");
  }
};

export { moveToWishlist, addToWishlist, removeFromWishlist };
