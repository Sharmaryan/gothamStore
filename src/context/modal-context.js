import { createContext, useContext, useReducer } from "react";
import { inputReducer } from "reducer/modal-reducer";
const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [{ userAddress }, inputDispatch] = useReducer(inputReducer, {
    userAddress: {
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      phone: "",
      pincode: "",
    },
  });
  return (
    <ModalContext.Provider value={{ userAddress, inputDispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
