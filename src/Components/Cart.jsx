import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <div>
        {/* <ul>
          {cart.items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default Cart;
