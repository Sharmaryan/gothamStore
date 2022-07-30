import { createContext, useContext, useReducer } from "react";

const ModalContext = createContext();

const inputReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        userAddress: { ...state.userAddress, name: action.payload },
      };
    case "STREET":
      return {
        ...state,
        userAddress: { ...state.userAddress, street: action.payload },
      };
    case "CITY":
      return {
        ...state,
        userAddress: { ...state.userAddress, city: action.payload },
      };
    case "STATE":
      return {
        ...state,
        userAddress: { ...state.userAddress, state: action.payload },
      };
    case "COUNTRY":
      return {
        ...state,
        userAddress: { ...state.userAddress, country: action.payload },
      };
    case "PHONE":
      return {
        ...state,
        userAddress: { ...state.userAddress, phone: action.payload },
      };
    case "PINCODE":
      return {
        ...state,
        userAddress: { ...state.userAddress, pincode: action.payload },
      };

    case "HANDLE_EDIT":
      return {
        ...state,
        userAddress: {
          ...state.userAddress,
          name: action.payload.name,
          street: action.payload.street,
          city: action.payload.city,
          state: action.payload.state,
          country: action.payload.country,
          phone: action.payload.phone,
          pincode: action.payload.pincode,
        },
      };
    case "EMPTY_MODAL":
      return {
        ...state,
        userAddress: {
          ...state.userAddress,
          name: '',
          street: '',
          city: '',
          state: '',
          country: '',
          phone: '',
          pincode: '',
        },
      };
    case "default":
      return { ...state };
  }
};

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
