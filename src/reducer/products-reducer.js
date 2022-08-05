function ProductReducer(state, action) {
  const { selfhelp, business, biography, spirtual } = state.category;
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" };
    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" };
    case "SELF_HELP":
      return {
        ...state,
        category: { ...state.category, selfhelp: !selfhelp },
      };
    case "BUSINSESS":
      return {
        ...state,
        category: { ...state.category, business: !business },
      };
    case "BIOGRAPHY":
      return {
        ...state,
        category: { ...state.category, biography: !biography },
      };
    case "SPIRTUAL":
      return {
        ...state,
        category: { ...state.category, spirtual: !spirtual },
      };
      case 'SEARCH_PRODUCT':
        return { ...state, searchProduct : action.payload};
    case "ABOVE_FOUR":
      return { ...state, rating: "ABOVE_FOUR" };
    case "ABOVE_THREE":
      return { ...state, rating: "ABOVE_THREE" };
    case "ABOVE_TWO":
      return { ...state, rating: "ABOVE_TWO" };
    case "ABOVE_ONE":
      return { ...state, rating: "ABOVE_ONE" };
    case "RANGE":
      return { ...state, range: action.payload };
    case "CLEAR":
      return {
        ...state,
        sortBy: null,
        category: {
          selfhelp: false,
          business: false,
          biography: false,
          spirtual: false,
        },
        rating: null,
        range: 0,
        searchProduct: "",
      };
    default:
      return state;
  }
}

export { ProductReducer };
