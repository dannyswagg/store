import React, { useState } from "react";
import blacknt from "../Assests/blacknt.svg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-sm pt-5">Page Not found</h1>
        <button
          onClick={goHome}
          className="border border-black px-6 py-1 rounded font-bold"
        >
          Go Home
        </button>
        <img className="mx-auto w-full" src={blacknt} />
      </div>
    </>
  );
};

export default Error;
