import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";

const Product = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
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
      window.scrollTo(0, 0);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 my-10 px-10">
          <Skeleton
            className="shadow-xl"
            height={400}
            baseColor="#202020"
            highlightColor="#444"
          />
          <SkeletonTheme
            className="shadow-xl"
            baseColor="#202020"
            highlightColor="#444"
          >
            <div>
              <Skeleton height={60} />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton height={150} />
              <Skeleton className="skeleton" width={100} />
            </div>
          </SkeletonTheme>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <React.Fragment key={product.id}>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 my-10 px-10">
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
              onClick={() => addProduct(product)}
              className="mr-2 border border-black hover:bg-[#CF8E69] duration-200 rounded px-6 py-2 font-bold"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="border rounded px-6 py-2 font-bold bg-black text-[#CF8E69] hover:bg-transparent duration-300 hover:border-[#CF8E69]"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="border rounded px-6 py-2 font-bold bg-black text-[#CF8E69] hover:bg-transparent duration-300 hover:border-[#CF8E69]"
            >
              Go to Cart
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  };

  return (
    <>
      <div className="w-full">{loading ? <Loading /> : <ShowProduct />}</div>
    </>
  );
};

export default Product;
