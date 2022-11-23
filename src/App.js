import React from "react";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Product from "./Components/Product";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
