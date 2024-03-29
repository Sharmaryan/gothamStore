import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Test",
    lastName: "User",
    email: "Testuser@gmail.com",
    password: "Testuser",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        addressId: uuid(),
        name: "Tester",
        street: "somewhere on earth",
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        country: "India",
        phone: "1234567890",
        pincode: "201003",
      },
    ],
  },
];
