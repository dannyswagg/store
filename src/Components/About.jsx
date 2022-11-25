import React from "react";
import bg2 from "../Assests/bg2.webp";
import bg3 from "../Assests/bg3.webp";

const About = () => {
  return (
    <>
      <div className="bg-black text-[#CF8E69] h-screen pt-5">
        <h1 className="text-center text-5xl uppercase">Berry Stores</h1>
        <div className="grid grid-cols-2">
          <div>
            {" "}
            <div className="px-20">
              <h2 className="text-3xl my-4">Who are we?</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                obcaecati quaerat numquam blanditiis vero et ex accusantium
                modi. Voluptatem nostrum tempore accusamus incidunt ut iste,
                provident dicta non ipsam. Enim?
              </p>
              <h2 className="text-3xl my-4">What Do We Do?</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                officia aspernatur minima. Eum sed veritatis mollitia ut! Nam
                unde at nemo suscipit incidunt non voluptates obcaecati, dolore,
                magnam, recusandae veniam.
              </p>
              <h3 className="text-3xl my-4">Why you should choose us</h3>
              <p className="text-gray-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                sequi dicta voluptates eum, blanditiis veritatis delectus! Quae
                commodi nostrum architecto quia magni, quibusdam perferendis,
                obcaecati, minus adipisci corporis a iusto.
              </p>
            </div>
          </div>
          <div className="mx-auto pt-5">
            <img src={bg3} alt="fashion-wear" className="px-10 h-3/4 ib" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
