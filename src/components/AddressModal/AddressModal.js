import axios from "axios";
import { useAddress, useAuth, useModal } from "context";
import React, { useEffect,  } from "react";
import { v4 as uuid } from "uuid";
import "./AddressModal.css";

export const AddressModal = () => {
  const { addressDispatch, currentEditedItem } =
    useAddress();
  const { auth } = useAuth();
  const {userAddress, inputDispatch} = useModal();
 
  useEffect(() => {
    inputDispatch({ type: "HANDLE_EDIT", payload: currentEditedItem });
  }, [currentEditedItem]);

  const modalCancelHandler = () => {
    addressDispatch({ type: "CLOSE_MODAL" });
  };
  const modalAddHandler = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "/api/user/address",
        headers: { authorization: auth.token },
        data: { newaddress: { ...userAddress, addressId: uuid() } },
      });
      addressDispatch({ type: "ADD_ADDRESS", payload: response.data.address });
    } catch (err) {
      console.log(err);
    }
  };
  const modalUpdateHandler = async (addressId) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/address/edit/${addressId}`,
        headers: { authorization: auth.token },
        data: { address: { ...userAddress, addressId: uuid() } },
      });
      addressDispatch({
        type: "UPDATE_ADDRESS",
        payload: response.data.address,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const inputValuesEntered =
    userAddress.name &&
    userAddress.street &&
    userAddress.city &&
    userAddress.country &&
    userAddress.phone &&
    userAddress.pincode;

  return (
    <div className="address-modal">
      <div className="main-modal">
        <input
          type="text"
          className="modal-inputs"
          placeholder="name"
          value={userAddress.name}
          onChange={(e) =>
            inputDispatch({ type: "NAME", payload: e.target.value })
          }
        />
        <input
          type="text"
          className="modal-inputs"
          placeholder="street"
          value={userAddress.street}
          onChange={(e) =>
            inputDispatch({ type: "STREET", payload: e.target.value })
          }
        />
        <input
          type="text"
          className="modal-inputs"
          placeholder="city"
          value={userAddress.city}
          onChange={(e) =>
            inputDispatch({ type: "CITY", payload: e.target.value })
          }
        />
        <input
          type="text"
          className="modal-inputs"
          placeholder="state"
          value={userAddress.state}
          onChange={(e) =>
            inputDispatch({ type: "STATE", payload: e.target.value })
          }
        />
        <input
          type="text"
          className="modal-inputs"
          placeholder="country"
          value={userAddress.country}
          onChange={(e) =>
            inputDispatch({ type: "COUNTRY", payload: e.target.value })
          }
        />
        <input
          type="number"
          className="modal-inputs"
          placeholder="phone"
          value={userAddress.phone}
          onChange={(e) =>
            inputDispatch({ type: "PHONE", payload: e.target.value })
          }
        />
        <input
          type="number"
          className="modal-inputs"
          placeholder="pincode"
          value={userAddress.pincode}
          onChange={(e) =>
            inputDispatch({ type: "PINCODE", payload: e.target.value })
          }
        />
        <div className="modal-btns">
          {currentEditedItem ? (
            inputValuesEntered ? (
              <button
                className="modal-add modal-btn"
                onClick={() => modalUpdateHandler(currentEditedItem.addressId)}
              >
                update
              </button>
            ) : (
              <button
                className="modal-btn modal-disable-btn"
                disabled={!inputValuesEntered}
              >
                update
              </button>
            )
          ) : inputValuesEntered ? (
            <button className="modal-add modal-btn" onClick={modalAddHandler}>
              add
            </button>
          ) : (
            <button
              className="modal-btn modal-disable-btn"
              disabled={!inputValuesEntered}
            >
              add
            </button>
          )}
          <button
            className="modal-cancel modal-btn"
            onClick={modalCancelHandler}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
