// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//     <div class="container">
//       <Link class="navbar-brand" to = "/"><img src="/images/logo.jpg" style={{width : "90px", height : "60px"}} alt="" /></Link>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//           <li class="nav-item">
//             <Link class="nav-link active" aria-current="page" to = "/">Home</Link>
//           </li>
//         </ul>
//         <form class="d-flex" role="search">
//           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//           <Link to = "/login" class="btn" style={{background : "#093d91", color : "white", width : "140px"}} >Login</Link>
//         </form>
//       </div>
//     </div>
//   </nav>
//     </>
//   )
// }

// export default Navbar
// src/Navbar.js
import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
const buyerToken=localStorage.getItem("buyerToken");
const sellerToken=localStorage.getItem("sellerToken")
  return (
    <>
    
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
     <div class="container">
     <a href="/" className="navbar-logo">
          E-Commerece
        </a>
      <Link class="navbar-brand" to = "/"><img src="/images/logo.jpg" style={{width : "90px", height : "60px"}} alt="" /></Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
       </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to = "/">Home</Link>
          </li>
          
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to = "/product">Product</Link>
          </li> 
          <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/wishlist"> Wishlist</Link>
    </li>
        </ul>
</div>
        <form class="d-flex" role="search">
          <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
          <Link to = "/login" class="btn" style={{background : "blue", color : "black", width : "160px"}} >Login As Seller</Link>
        </form>
        <form class="d-flex" role="search"> 
          <Link to = "/login" class="btn" style={{background : "blue", color : "black", width : "90px"}} >Login As Buyer</Link>
        </form>
        <div className="navbar-links">
          <Link to="/account" className="navbar-link">
            <FaUser className="icon" />
            <span>Account</span>
          </Link>
          <Link to="/cart" className="navbar-link">
            <FaShoppingCart className="icon" />
            <span>Cart</span>
          </Link>
      </div>
      </div>
      </nav>
      
    </>
  )
}

export default Navbar;
