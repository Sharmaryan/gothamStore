import { createContext, useContext, useReducer } from "react";

const AddressContext = createContext();

const addressReducer = (state, action) => {
  switch (action.type) {
    case "GET_ADDRESS":
      return { ...state, address: action.payload };
    case "ADD_ADDRESS":
      return { ...state, address: action.payload, isModalOpen: false};
    case "SELECTED_ADDRESS":
      return { ...state, selectedAddress: action.payload };
    case "REMOVE_ADDRESS":
      return { ...state, address : action.payload };
    case "EDIT_ADDRESS":
      return { ...state, isModalOpen: true, currentEditedItem : action.payload };
    case "UPDATE_ADDRESS":
      return { ...state, isModalOpen: false, address : action.payload };
    case "OPEN_MODAL":
      console.log(state,action)
      return {
        ...state,
        isModalOpen: true,
        currentEditedItem:''
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

const AddressProvider = ({ children }) => {
  const [{ address, isModalOpen, selectedAddress, currentEditedItem,  }, addressDispatch] =
    useReducer(addressReducer, {
      address: [],
      isModalOpen: false,
      selectedAddress: "",
      currentEditedItem:'',
    });
  return (
    <AddressContext.Provider
      value={{
        address,
        isModalOpen,
        selectedAddress,
        currentEditedItem,
        addressDispatch,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
