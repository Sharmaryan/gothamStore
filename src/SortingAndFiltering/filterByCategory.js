function filterByCategory(sortedData, selfhelp, business, biography, spirtual) {
  let selfHelpCategory = [],
    businessCategory = [],
    biographyCategory = [],
    spirtualCategory = [];
  if (!selfhelp && !business && !biography && !spirtual) {
    return sortedData;
  }
  if (selfhelp) {
    selfHelpCategory = sortedData.filter(
      (product) => product.category === "self-help"
    );
  }
  if (business) {
    businessCategory = sortedData.filter(
      (product) => product.category === "business"
    );
  }
  if (biography) {
    biographyCategory = sortedData.filter(
      (product) => product.category === "biography"
    );
  }
  if (spirtual) {
    spirtualCategory = sortedData.filter(
      (product) => product.category === "spirtual"
    );
  }

  return [
    ...selfHelpCategory,
    ...businessCategory,
    ...biographyCategory,
    ...spirtualCategory,
  ];
}

export { filterByCategory };
