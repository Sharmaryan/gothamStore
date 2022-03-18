function filterByPriceRange(ratedProducts, range) {
  if (range) {
    const newData = ratedProducts.filter((item) => item.price <= range);
    return newData;
  }
  return ratedProducts;
}

export { filterByPriceRange };
