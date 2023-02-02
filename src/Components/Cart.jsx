import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import cartE from "../Assests/cartE.svg";
import { delCart, addCart, deCart } from "../redux/actions";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const items = useSelector((state) => state.handleCart);
  // console.log(items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const delItem = (item) => {
    dispatch(delCart(item));
  };
  const addProduct = (item) => {
    dispatch(addCart(item));
  };
  const decreaseItem = (item) => {
    dispatch(deCart(item));
  };

  useEffect(() => {
    if (items.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  const Loading = () => {
    return (
      <div className="mx-auto text-center">
        <h1 className="font-bold uppercase">
          Your <span className="text-[#CF8E69] text-2xl">Cart</span> is Empty
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
        <div className="grid cart lg:grid-cols-5 md:grid-cols-5 gap-5 bg-black text-[#CF8E69] rounded px-4 py-4 mb-10 text-center">
          <div>Item Details</div>
          <div>Image</div>
          <div>Quantity</div>
          <div>price</div>
          <div>Action</div>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3 gap-5 text-center font-bold">
          {items.map((item) => (
            <>
              <div>{item.title.substring(0, 12)}</div>
              <div>
                <img className="h-[70px] mx-auto" src={item.image} alt="" />
              </div>
              <div className="mx-auto">
                {" "}
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseItem(item)}
                    className="border border-black px-4 hover:bg-black hover:text-[#CF8E69]"
                  >
                    -
                  </button>
                  <button className="border border-black px-4 bg-black text-[#CF8E69]">
                    {item.qty}
                  </button>
                  <button
                    onClick={() => addProduct(item)}
                    className="border border-black px-4 hover:bg-black hover:text-[#CF8E69]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                {item.price} x {item.qty} = $ {item.qty * item.price}
              </div>
              <div className="cursor-pointer" onClick={() => delItem(item)}>
                Remove
              </div>
            </>
          ))}
        </div>
        <hr className="border border-black my-5" />
        <div className="flex font-bold justify-around text-lg">
          <div>Total Price</div>
          <div> = 3456$</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="px-10 my-10">{loading ? <Loading /> : <ShowCart />}</div>
    </>
  );
};

export default Cart;
