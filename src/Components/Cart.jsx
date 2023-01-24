import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cartE from "../Assests/cartE.svg";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const items = useSelector((state) => state.handleCart);
  const navigate = useNavigate();

  useEffect(() => {
    if (items.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);
  const Loading = () => {
    return (
      <div>
        <h1 className="font-bold uppercase">
          Your <span className="text-[#CF8E69]">Cart</span> is Empty
          <span className="text-[#CF8E69]">?</span>
        </h1>
        <button
          onClick={() => navigate("/products")}
          className="mx-auto mb-2 border rounded px-6 py-2 font-bold bg-black text-[#CF8E69] hover:bg-transparent duration-300 hover:border-[#CF8E69]"
        >
          Start Shopping
        </button>
        <img className="mx-auto lg:w-2/4 md:w-full sm:w-full" src={cartE} />
      </div>
    );
  };
  const ShowCart = () => {
    return (
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {item.title} - {item.quantity}
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="px-10 mx-auto text-center my-10">
        {loading ? <Loading /> : <ShowCart />}
      </div>
    </>
  );
};

export default Cart;
