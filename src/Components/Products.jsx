import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
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
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div>
          <SkeletonTheme color="#000000" highlightColor="#444">
            <Skeleton height={250} width={250}>
              Loading...
            </Skeleton>
          </SkeletonTheme>
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
        <div className="grid grid-cols-3 gap-10">
          {filter.map((product) => {
            return (
              <>
                <div>
                  <div
                    className="shadow-lg rounded p-4 mx-auto"
                    key={product.title}
                  >
                    <img
                      className="h-[300px] mx-auto mb-2"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h1 className="font-bold text-2xl mb-2">
                        {product.title.substring(0, 12)}
                      </h1>
                      <Link to={`/products/product/${product.id}`}>
                        <button className="rounded px-4 border-black border">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <>
      <div className="text-center mt-10 px-20 mb-10 cursor-pointer">
        <h1 className="text-5xl font-bold mb-5">All Products</h1>
        <hr />
        <ul className="flex items-center justify-center rounded font-bold my-5">
          <li className="px-5 py-2 border" onClick={() => setFilter(data)}>
            All
          </li>
          <li
            className="px-5 py-2 border"
            onClick={() => filterProduct("men's clothing")}
          >
            Men
          </li>
          <li
            className="px-5 py-2 border"
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </li>
          <li
            className="px-5 py-2 border"
            onClick={() => filterProduct("jewelery")}
          >
            Jewerly
          </li>
          <li
            className="px-5 py-2 border"
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
