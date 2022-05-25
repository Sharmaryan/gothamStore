import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/product-context";
import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <App />
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
