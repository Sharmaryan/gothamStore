import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to Cart are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's address.
 * send GET Request at /api/user/address
 * */
export const getAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userAddress = schema.users.findBy({ _id: userId }).address;
  return new Response(200, {}, { address: userAddress });
};

/**
 * This handler handles adding items to user's address.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAddress = schema.users.findBy({ _id: userId }).address;
    const { newaddress } = JSON.parse(request.requestBody);
    userAddress.push({
      ...newaddress,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { address: userAddress });
    return new Response(201, {}, { address: userAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's address.
 * send DELETE Request at /api/user/address/:addressId
 * */

export const removeAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userAddress = schema.users.findBy({ _id: userId }).address;
    const addressId = request.params.addressId;
    userAddress = userAddress.filter((item) => item.addressId !== addressId);
    this.db.users.update({ _id: userId }, { address: userAddress });
    return new Response(200, {}, { address: userAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 *This handler handles update a address of the user.
 * send post Request at /api/user/address/edit/:addressId
 * */

export const updateAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userAddresses = schema.users.findBy({ _id: userId }).address;
    const addressId = request.params.addressId;
    const { address } = JSON.parse(request.requestBody);

    userAddresses = userAddresses.map((item) =>
      item.addressId === addressId ? address : item
    );

    this.db.users.update({ _id: userId }, { address: userAddresses });
    return new Response(200, {}, { address: userAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
