function sortByPrice(sortBy, data) {
  let newData = [...data];
  if (sortBy === "HIGH_TO_LOW")
    return newData.sort((a, b) => b["price"] - a["price"]);

  if (sortBy === "LOW_TO_HIGH")
    return newData.sort((a, b) => a["price"] - b["price"]);
  return newData;
}

export { sortByPrice };
