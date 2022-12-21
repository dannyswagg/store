import React, { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sling as Hamburger } from "hamburger-react";
import ber from "../Assests/ber.png";
import OutsideClickHandler from "react-outside-click-handler";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const state = useSelector((state) => state.handleCart);

  const handleNav = () => {
    setOpen(!open);
  };

  return (
    <>
      <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
        <nav>
          <div className="flex justify-between items-center h-20 w-full mx-auto lg:px-16 md:px-16 sm:px-16 shadow sticky">
            <img src={ber} alt="Berries" width={50} />
            <Link to="/">
              <h1 className="font-bold text-3xl">Berries</h1>
            </Link>
            <ul className="mx-auto uppercase text-xs lg:inline-flex hidden">
              <NavLink to="/" activeclassname="active">
                <li className="px-4 hover:text-[#CF8E69]">Home</li>
              </NavLink>
              <NavLink to="products" activeclassname="active">
                <li className="px-4 hover:text-[#CF8E69]">Products</li>
              </NavLink>
              <NavLink to="about" activeclassname="active">
                <li className="px-4 hover:text-[#CF8E69]">About</li>
              </NavLink>
              <NavLink to="contact" activeclassname="active">
                <li className="px-4 hover:text-[#CF8E69]">Contact</li>
              </NavLink>
            </ul>
            <div className="buttons font-bold lg:inline hidden">
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
            <Link to="cart">
              <li
                className="border lg:hidden border-black text-black rounded
             bg-[#CF8E69] p-1 inline-flex items-center -mr-12"
              >
                <FaShoppingCart /> ({state.length})
              </li>
            </Link>
            <div
              onClick={handleNav}
              className="block lg:hidden focus:outline-0"
            >
              <Hamburger
                distance="sm"
                duration={0.9}
                color="#CF8E69"
                size={25}
                rounded
                hideOutline={false}
                label="Show menu"
                toggled={open}
                toggle={setOpen}
              />
            </div>
            <div
              className={
                open
                  ? "fixed left-0 top-0 w-[50%] h-full bg-black text-[#CF8E69] ease-in-out duration-800 pt-10 text-center"
                  : "fixed left-[-100%]"
              }
            >
              <h1 className="uppercase text-3xl mb-2">Berries</h1>
              <hr className="border-1 border-[#CF8E69] mb-3" />
              <ul className="text-sm uppercase">
                <Link to="/">
                  <li className="my-5" onClick={handleNav}>
                    Home
                  </li>
                </Link>
                <Link to="products">
                  <li className="my-5" onClick={handleNav}>
                    Product
                  </li>
                </Link>
                <Link to="about">
                  <li className="my-5" onClick={handleNav}>
                    About
                  </li>
                </Link>
                <Link to="contact">
                  <li className="my-5" onClick={handleNav}>
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="uppercase text-sm">
                <ul>
                  <Link to="login">
                    <li
                      className="my-5 border border-[#CF8E69] mx-6"
                      onClick={handleNav}
                    >
                      Login
                    </li>
                  </Link>
                  <Link to="register">
                    <li
                      className="my-5 border border-[#CF8E69] mx-6"
                      onClick={handleNav}
                    >
                      Register
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </OutsideClickHandler>
    </>
  );
};

export default Navbar;
