import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
      const product = response.product.find((yourData) => yourData.id === id);
      if (product) {
        setProduct(product);
      }
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="font-bold text-7xl text-center">Loading...</div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="grid grid-cols-2 gap-5 my-10">
          <div>
            <img
              className="mx-auto"
              src={product.image}
              alt={product.title}
              height={400}
              width={400}
            />
          </div>
          <div>
            <h4 className="uppercase font-bold text-3xl text-gray-400">
              {product.category}
            </h4>
            <h1 className="text-5xl my-2">{product.title}</h1>
            <div className="flex items-center mt-2 mb-4">
              <p className="font-bold">
                Rating: {product.rating && product.rating.rate}
              </p>
              <p>
                {" "}
                <AiFillStar />
              </p>
            </div>
            <h3 className="font-bold text-4xl my-3">$ {product.price}</h3>
            <p className="capitalize my-5">{product.description}</p>
            <button
              className="mr-2 border rounded px-6 py-2 font-bold"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <button className="border rounded px-6 py-2 font-bold bg-black text-white">
              Go to Cart
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="w-full">{loading ? <Loading /> : <ShowProduct />}</div>
    </>
  );
};

export default Product;
