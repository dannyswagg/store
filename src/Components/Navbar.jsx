import React from "react";
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <div className="flex justify-between items-center h-20 w-full mx-auto px-16 shadow">
        <Link to="/">
          <h1 className="font-bold text-3xl">Berry-Stores</h1>
          <img src="" alt="" />
        </Link>
        <ul className="flex mx-auto">
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="products">
            <li className="px-4">Products</li>
          </Link>
          <Link to="about">
            <li className="px-4">About</li>
          </Link>
          <Link to="contact">
            <li className="px-4">Contact</li>
          </Link>
        </ul>
        <div className="buttons font-bold flex">
          <Link to="login">
            <button
              className="inline-flex rounded mr-2 px-6 py-2 text-[#CF8E69]
           bg-black hover:bg-transparent hover:text-black duration-200 border hover:border-black"
            >
              <FaSignInAlt size={20} className="mr-1 pt-2" /> Login
            </button>
          </Link>

          <Link to="register">
            <button
              className="inline-flex rounded mr-2 px-6 py-2 text-[#CF8E69]
           bg-black hover:bg-transparent hover:text-black duration-200 border hover:border-black"
            >
              <FaUserPlus size={20} className="mr-1 pt-2" /> Register
            </button>
          </Link>
          <Link to="cart">
            <button
              className="inline-flex rounded px-6 py-2 text-[#CF8E69]
             bg-black hover:bg-transparent hover:text-black duration-200 border hover:border-black"
            >
              <FaShoppingCart size={20} className="mr-1 pt-2" />
              Cart ({state.length})
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
