import React from "react";
import bg3 from "../Assests/bg3.webp";

const About = () => {
  return (
    <>
      <div className="bg-black text-[#CF8E69] pt-5">
        <h1 className="text-center text-4xl my-6 uppercase font-bold px-4">
          Everything You Need To Know.
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 md:text-center sm:text-center">
          <div>
            {" "}
            <div className="px-20 py-8">
              <h2 className="text-2xl my-4 font-thin">Who We Are?</h2>
              <p className="text-gray-400 text-justify">
                Berries is an online fashion e-commerce platform where users can
                shop for items in different categories. You can find stylish
                dresses, tops, bottoms and shoes designed by young designers
              </p>
              <h2 className="text-2xl my-4 font-thin">What We Do?</h2>
              <p className="text-gray-400  text-justify">
                We specialize in a wide range of clothing and accessories. From
                formal wear to casual clothing and accessories, you can shop
                online in just a few clicks!
              </p>
              <h3 className="text-2xl my-4 font-thin">Why us?</h3>
              <p className="text-gray-400 text-justify">
                Berries mission is to help you style your life. Sign up today
                and find something that resonates with you! If you love to shop,
                you're going to love us.
              </p>
            </div>
          </div>
          <div className="mx-auto pt-5 mt-10">
            <img alt="fashion-wear" className="px-10 h-3/4 ib" src={bg3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
