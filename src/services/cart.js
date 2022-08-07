const discountPerBook = (itemsAdded) => {
  return [...itemsAdded].reduce(
    (acc, curr) => Number(acc) + ((curr.price * curr.qty) * curr.discount)/100,
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

const moveToCart = (
  product,
  itemsAdded,
  removeFromWishlist,
  auth,
  navigate,
  showToast,
  setItemsAdded,
  setWishlistItems,
  axios,
  setDisableCart,
  setIncrementHandle,
  setDisableRemoveFromWishlist
) => {
  const itemPresent = itemsAdded.some((item) => item._id === product._id);
  if (!itemPresent) {
    addToCart(
      product,
      auth,
      navigate,
      showToast,
      setItemsAdded,
      axios,
      setDisableCart
    );
  }
  if (itemPresent) {
    incrementQuantity(product, auth, setItemsAdded, axios, setIncrementHandle);
  }
  removeFromWishlist(
    product,
    axios,
    auth,
    setWishlistItems,
    showToast,
    setDisableRemoveFromWishlist
  );
};

const incrementQuantity = async (
  product,
  auth,
  setItemsAdded,
  axios,
  setIncrementHandle
) => {
  const productId = product._id;
  setIncrementHandle(true);
  try {
    const response = await axios.post(
      `/api/user/cart/${productId}`,
      { action: { type: "increment" } },
      { headers: { authorization: auth.token } }
    );
    setIncrementHandle(false);
    setItemsAdded(response.data.cart);
  } catch (err) {
    console.log(err);
  }
};
const decrementQuantity = async (
  product,
  auth,
  setItemsAdded,
  axios,
  removeFromCart,
  showToast,
  setDecrementHandle,
  setDisableRemoveCart
) => {
  setDecrementHandle(true);
  const productId = product._id;
  if (product.qty === 1) {
    removeFromCart(
      product,
      axios,
      auth,
      setItemsAdded,
      showToast,
      setDisableRemoveCart
    );
  }
  try {
    const response = await axios.post(
      `/api/user/cart/${productId}`,
      { action: { type: "decrement" } },
      { headers: { authorization: auth.token } }
    );
    setDecrementHandle(false);
    setItemsAdded(response.data.cart);
  } catch (err) {
    console.log(err.response);
  }
};

const addToCart = async (
  product,
  auth,
  navigate,
  showToast,
  setItemsAdded,
  axios,
  setDisableCart,
  location
) => {
  if (!auth.user) {
     navigate("/login", { state: { from: location }, replace: true });
  } else {
    setDisableCart(true)
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/cart",
        headers: { authorization: auth.token },
        data: { product: product },
      });
      showToast("success", "Added to Cart!");
      setItemsAdded(response.data.cart);
      setDisableCart(false);
    } catch (err) {
      console.log(err);
      showToast("error", "Something went wrong with server!");
    }
  }
};

const removeFromCart = async (
  product,
  axios,
  auth,
  setItemsAdded,
  showToast,
  setDisableRemoveCart
) => {
  const productId = product._id;
  setDisableRemoveCart(true);
  try {
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: auth.token },
    });
    setItemsAdded(response.data.cart);
    showToast("warning", "Removed from Cart!");
    setDisableRemoveCart(false);
  } catch (err) {
    console.log(err);
    showToast("error", "Something went wrong with server!");
  }
};

const removeCart = async (
  axios,
  auth,
  setItemsAdded,
) => {
  try {
    const response = await axios.delete(`/api/user/cart`, {
      headers: { authorization: auth.token },
    });
    setItemsAdded(response.data.cart);
  } catch (err) {
    console.log(err);
    showToast("error", "Something went wrong with server!");
  }
};

export {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  discountPerBook,
  calculatePrice,
  totalCartItems,
  moveToCart,
  removeCart
};
