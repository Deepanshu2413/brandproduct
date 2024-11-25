import React from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';


function Navbar() {
   

  // Function to increment the cart count
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

    return (
      <header className="bg-emerald-900 shadow">
        <div className="container mx-auto px-14 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-300">Logo</Link>
          <nav className="space-x-6">
          <Link to="/" className="text-gray-300 hover:text-gray-900">Home</Link>
          <Link to="/shop" className="text-gray-300 hover:text-gray-900">Shop</Link>
          <Link to="/product" className="text-gray-300 hover:text-gray-900">Product</Link>
          <Link to="/blog" className="text-gray-300 hover:text-gray-900">Blog</Link>
        </nav>
          <div className="space-x-4">
          <Link to="/Shop" className="text-gray-200 bg-gray-600 px-4 py-2 rounded-3xl">Chart</Link>
          <Link to="/login" className="text-gray-300">Login</Link>
          <Link to="/login" className="bg-gray-800 text-white px-4 py-2 rounded">Sign Up</Link>
          
          
   


          </div>
        </div>
      </header>
    );
  };




export default Navbar