export const addressReducer = (state, action) => {
  switch (action.type) {
    case "GET_ADDRESS":
      return { ...state, address: action.payload };
    case "ADD_ADDRESS":
      return { ...state, address: action.payload, isModalOpen: false };
    case "SELECTED_ADDRESS":
      return { ...state, selectedAddress: action.payload };
    case "REMOVE_ADDRESS":
      return { ...state, address: action.payload };
    case "EDIT_ADDRESS":
      return { ...state, isModalOpen: true, currentEditedItem: action.payload };
    case "UPDATE_ADDRESS":
      return { ...state, isModalOpen: false, address: action.payload };
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        currentEditedItem: "",
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return { ...state };
  }
};
