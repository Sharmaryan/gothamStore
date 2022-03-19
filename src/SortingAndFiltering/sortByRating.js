function sortByRating(filteredProducts, rating) {
  if (rating === "ABOVE_FOUR") {
    const filterByFour = filteredProducts.filter(
      (product) => 4 <= product.star
    );
    return filterByFour;
  }
  if (rating === "ABOVE_THREE") {
    const filterByThree = filteredProducts.filter(
      (product) => 3 <= product.star
    );
    return filterByThree;
  }
  if (rating === "ABOVE_TWO") {
    const filterByThree = filteredProducts.filter(
      (product) => 2 <= product.star
    );
    return filterByThree;
  }
  if (rating === "ABOVE_ONE") {
    const filterByThree = filteredProducts.filter(
      (product) => 1 <= product.star
    );
    return filterByThree;
  }
  return filteredProducts;
}

export { sortByRating };
