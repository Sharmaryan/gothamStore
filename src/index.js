import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
  WishlistProvider,
  CartProvider,
  AuthProvider,
  ProductProvider,
  AddressProvider,
  ModalProvider,
} from "./context";
import "./index.css";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <AddressProvider>
                <ModalProvider>
                  <App />
                </ModalProvider>
              </AddressProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
