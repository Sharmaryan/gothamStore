import { createContext, useContext, useReducer } from "react";
import { addressReducer } from "reducer/address-reducer";
const AddressContext = createContext();

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
