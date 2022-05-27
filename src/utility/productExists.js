export const productExists = (items, product) => {
  return items.some((item) => item._id === product._id);
};
