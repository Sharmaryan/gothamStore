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

    default:
      return state;
  }
}

export { ProductReducer };
