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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                obcaecati quaerat numquam blanditiis vero et ex accusantium
                modi. Voluptatem nostrum tempore accusamus incidunt ut iste,
                provident dicta non ipsam. Enim?
              </p>
              <h2 className="text-2xl my-4 font-thin">What We Do?</h2>
              <p className="text-gray-400  text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                officia aspernatur minima. Eum sed veritatis mollitia ut! Nam
                unde at nemo suscipit incidunt non voluptates obcaecati, dolore,
                magnam, recusandae veniam.
              </p>
              <h3 className="text-2xl my-4 font-thin">Why us?</h3>
              <p className="text-gray-400 text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sequi dicta voluptates eum, blanditiis veritatis delectus! Quae
                commodi nostrum architecto quia magni, quibusdam perferendis,
                obcaecati, minus adipisci corporis a iusto.
              </p>
            </div>
          </div>
          <div className="mx-auto pt-5 mt-10">
            <img src={bg3} alt="fashion-wear" className="px-10 h-3/4 ib" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
