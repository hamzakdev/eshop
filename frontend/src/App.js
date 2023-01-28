import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state)=> state.user.currentUser)
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={user ? <Home />  :  <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
