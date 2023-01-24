import React from "react";
import homebg from "../Assests/homebg.webp";
import Products from "./Products";
import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";

const Home = () => {
  const [load, setLoad] = useState(null);

  useEffect(() => {
    setLoad(Image);
  }, []);

  const Loading = () => {
    return <Skeleton className="h-full" />;
  };
  const Image = () => {
    return (
      <div className="w-full">
        <img src={homebg} alt="apparel" height={100} />
      </div>
    );
  };

  return (
    <>
      {load ? <Image /> : <Loading />}
      <Products />
    </>
  );
};

export default Home;
