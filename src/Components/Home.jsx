import React from "react";
import homebg from "../Assests/homebg.webp";
import Products from "./Products";
import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";

const Home = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  const Loading = () => {
    return <Skeleton className="h-screen" />;
  };
  // const Image = () => {
  //   return <div className="w-full"></div>;
  // };

  return (
    <>
      {load ? <Loading /> : <img src={homebg} alt="apparel" height={100} />}
      <Products />
    </>
  );
};

export default Home;
