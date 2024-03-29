import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    if (componentMounted) {
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    }
    return () => {
      componentMounted = false;
    };
  };

  useEffect(() => {
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="grid lg:grid-cols-3 md:gird-cols-2 sm:grid-cols-2 gap-10">
          <Skeleton
            className="hover:scale-105 duration-300 shadow-xl"
            height={400}
            borderRadius={"rounded"}
            baseColor="#202020"
            highlightColor="#444"
          />
          <Skeleton
            className="hover:scale-105 duration-300 shadow-xl"
            height={400}
            borderRadius={"rounded"}
            baseColor="#202020"
            highlightColor="#444"
          />
          <Skeleton
            className="hover:scale-105 duration-300 shadow-xl"
            height={400}
            borderRadius={"rounded"}
            baseColor="#202020"
            highlightColor="#444"
          />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="grid lg:grid-cols-3 md:gird-cols-2 sm:grid-cols-2 gap-10">
          {filter.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <Link to={`/products/product/${product.id}`}>
                  <div className="hover:scale-105 duration-300">
                    <div className="shadow-2xl rounded-2xl p-4 mx-auto">
                      <img
                        className="h-[300px] mx-auto mb-2 p-8"
                        src={product.image}
                        alt={product.title}
                      />
                      <div className="card-body">
                        <h1 className="font-bold text-2xl mb-2">
                          {product.title.substring(0, 12)}...
                        </h1>

                        <button
                          onClick={handleClick}
                          className="rounded px-4 border-black border hover:bg-black hover:text-[#CF8E69] duration-200"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="text-center mt-10 px-10 mb-10 cursor-pointer">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-5">
          All Products
        </h1>
        <hr className="border border-black" />
        <ul className="items-center justify-center rounded font-bold my-5 lg:flex md:flex block">
          <li
            className="px-5 py-2 border border-black hover:text-[#CF8E69] hover:bg-black"
            onClick={() => setFilter(data)}
          >
            All
          </li>
          <li
            className="px-5 py-2 border border-black hover:text-[#CF8E69] hover:bg-black"
            onClick={() => filterProduct("men's clothing")}
          >
            Men
          </li>
          <li
            className="px-5 py-2 border border-black hover:text-[#CF8E69] hover:bg-black"
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </li>
          <li
            className="px-5 py-2 border border-black hover:text-[#CF8E69] hover:bg-black"
            onClick={() => filterProduct("jewelery")}
          >
            Jewerly
          </li>
          <li
            className="px-5 py-2 border border-black hover:text-[#CF8E69] hover:bg-black"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </li>
        </ul>
        <div>{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};

export default Products;
