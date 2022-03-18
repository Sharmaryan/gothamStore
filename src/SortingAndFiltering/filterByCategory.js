function filterByCategory(sortedData, selfhelp, business, biography, spirtual) {
  let newData = [];
  if (!selfhelp && !business && !biography && !spirtual) {
    return sortedData;
  }
  if (selfhelp) {
    const selfHelpCategory = sortedData.filter(
      (product) => product.category === "self-help"
    );

    newData.push(...selfHelpCategory);
  }
  if (business) {
    const businessCategory = sortedData.filter(
      (product) => product.category === "business"
    );

    newData.push(...businessCategory);
  }
  if (biography) {
    const biographyCategory = sortedData.filter(
      (product) => product.category === "biography"
    );

    newData.push(...biographyCategory);
  }
  if (spirtual) {
    const spirtualCategory = sortedData.filter(
      (product) => product.category === "spirtual"
    );

    newData.push(...spirtualCategory);
  }

  return newData;
}

export { filterByCategory };
