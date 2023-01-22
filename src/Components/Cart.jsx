import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => (state.cart ? state.cart.items : []));
  return (
    <>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {item.name} - {item.quantity}
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
