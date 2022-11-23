import React from "react";
import homebg from "../Assests/homebg.webp";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <img src={homebg} alt="apparel" height={100} />
      </div>
      <Products />
    </>
  );
};

export default Home;
