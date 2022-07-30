import axios from "axios";
import { AddressModal } from "components";
import { useAddress, useAuth, useModal } from "context";
import React, { useEffect } from "react";
import "./AddressPage.css";
export const AddressPage = () => {
  const { auth } = useAuth();
  const { addressDispatch, address, isModalOpen, selectedAddress } =
    useAddress();
    const { inputDispatch } = useModal();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/address", {
          headers: { authorization: auth.token },
        });
        addressDispatch({
          type: "GET_ADDRESS",
          payload: response.data.address,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const newAddressHandler = () => {
    addressDispatch({ type: "OPEN_MODAL"});
    inputDispatch({ type: "EMPTY_MODAL" });  
  };
  const handleAddressSelect = (addressId) => {
    addressDispatch({ type: "SELECTED_ADDRESS", payload: addressId });
  };

  const deleteAddressHandler = async (addressId) => {
    console.log(addressId)
    try {
      const response = await axios.delete(`/api/user/address/${addressId}`, {
        headers: { authorization: auth.token },
      });

      addressDispatch({
        type: "REMOVE_ADDRESS",
        payload: response.data.address,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const editAddressHandler = async ( data) => {
    addressDispatch({ type: "EDIT_ADDRESS", payload : data });
  };

  return (
    <div className="addresses">
      {isModalOpen && <AddressModal />}
      <button className="addresses-new" onClick={newAddressHandler}>
        add new address
      </button>
      <div className="addresses-desc">Addresses</div>
      <div className="addresses-list">
        {address.map(( data) => {
          const {
            name,
            street,
            city,
            state,
            country,
            phone,
            pincode,
            addressId,
          } = data;
          return (
            <div key={addressId} className="single-address">
              <input
                type="radio"
                onChange={() => handleAddressSelect(addressId)}
                checked={selectedAddress === addressId}
              />
              <p className="single-address-desc">name : {name}</p>
              <p className="single-address-desc">street : {street}</p>
              <p className="single-address-desc">city : {city}</p>
              <p className="single-address-desc">state : {state}</p>
              <p className="single-address-desc">country : {country}</p>
              <p className="single-address-desc">phone : {phone}</p>
              <p className="single-address-desc">pincode : {pincode}</p>
              <button
                className="single-address-edit"
                onClick={() => editAddressHandler( data)}
              >
                edit
              </button>
              <button
                className="single-address-delete"
                onClick={() => deleteAddressHandler(addressId)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
