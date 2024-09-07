import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import SellerRegister from './seller/pages/SellerRegister';
import SellerLogin from './seller/pages/SellerLogin';
import SellerDashboard from'./seller/pages/SellerDashboard';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Wishlist from './pages/Wishlist';
import ProductPage from './pages/ProductPage';


import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
<Route path="/" element={<Home />} />
<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/seller-dashboard" element={< SellerDashboard/>} />
<Route path="/seller-register" element={<SellerRegister />} />
<Route path="/seller-login" element={<SellerLogin />} />
<Route path="/account" element={<Account />} />
<Route path="/cart" element={<Cart/>} />
<Route path="/wishlist" element={<Wishlist/>} />
<Route path="/product" element={<ProductPage/>} />
      </Routes>
    </>
  );
}

export default App;
