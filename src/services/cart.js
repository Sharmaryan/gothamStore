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
  axios
) => {
  const itemPresent = itemsAdded.some((item) => item._id === product._id);
  if (!itemPresent) {
    addToCart(product, auth, navigate, showToast, setItemsAdded, axios);
  }
  if (itemPresent) {
    incrementQuantity(product, auth, setItemsAdded, axios);
  }
  removeFromWishlist(product, axios, auth, setWishlistItems, showToast);
};

const incrementQuantity = async (product, auth, setItemsAdded, axios) => {
  const productId = product._id;
  try {
    const response = await axios.post(
      `/api/user/cart/${productId}`,
      { action: { type: "increment" } },
      { headers: { authorization: auth.token } }
    );

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
  setIsDisable,
  removeFromCart,
  showToast
) => {
  setIsDisable(true);
  const productId = product._id;
  if (product.qty === 1) {
    removeFromCart(product, axios, auth, setItemsAdded, showToast);
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

const addToCart = async (
  product,
  auth,
  navigate,
  showToast,
  setItemsAdded,
  axios,
  location
) => {
  if (!auth.user) {
     navigate("/login", { state: { from: location }, replace: true });
  } else {
    try {
      const response = await axios({
        method: "post",
        url: "/api/user/cart",
        headers: { authorization: auth.token },
        data: { product: product },
      });
      showToast("success", "Added to Cart!");
      setItemsAdded(response.data.cart);
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
  showToast
) => {
  const productId = product._id;
  try {
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: auth.token },
    });
    setItemsAdded(response.data.cart);
    showToast("warning", "Removed from Cart!");
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
