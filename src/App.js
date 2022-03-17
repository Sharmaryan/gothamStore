import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import {  LandingPage } from "./pages/LandingPage/LandingPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { SignUp } from "./pages/SignUpPage/SignUp";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { WishlistPage } from "./pages/WishlistPage/WishlistPage";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
      </Routes>
    </div>
  );
}

export default App;
