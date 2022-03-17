import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { LandingPage, ProductPage, CartPage, SignUp, LoginPage, WishlistPage } from './components/Routes/Routes';
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
