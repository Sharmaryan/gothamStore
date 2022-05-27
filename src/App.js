import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { RequiresAuth } from "./components/RequiresAuth/RequiresAuth";
import { Routes, Route } from "react-router-dom";
import {
  LandingPage,
  ProductPage,
  CartPage,
  SignUp,
  LoginPage,
  WishlistPage,
  UserProfile,
} from "./components/Routes/Routes";
import { SingleProductPage } from "pages/SingleProductPage/SingleProductPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<SingleProductPage />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <CartPage />
            </RequiresAuth>
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishlistPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <UserProfile />
            </RequiresAuth>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <ToastContainer />
    </div>
  );
}

export default App;
