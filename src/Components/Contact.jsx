import React from "react";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiTwotonePhone,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl border border-black">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl text-[#CF8E69]">
                  Send us a <br /> message
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded focus:outline-none
                   focus:shadow-outline"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded focus:outline-none
                   focus:shadow-outline"
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded focus:outline-none
                   focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded focus:outline-none
                   focus:shadow-outline"
                  type="number"
                  placeholder="Phone"
                />
              </div>
              <div className="my-4">
                <textarea
                  placeholder="Type Your Message Here"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-black text-[#CF8E69] hover:bg-transparent
                   duration-300 p-3 rounded-lg w-full border hover:border-black
                      focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </div>

            <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-black rounded-2xl relative">
              <div className="flex flex-col text-[#CF8E69]">
                <h1 className="font-bold uppercase text-4xl my-4">
                  Drop in our office
                </h1>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam tincidunt arcu diam, eu feugiat felis fermentum id.
                  Curabitur vitae nibh viverra, auctor turpis sed, scelerisque
                  ex.
                </p>

                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Main Office</h2>
                    <p className="text-gray-400">
                      5555 Tailwind RD, Pleasant Grove, UT 73533
                    </p>
                  </div>
                </div>

                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <h2 className="text-2xl">Call Us</h2>
                    <p className="text-gray-400">Tel: xxx-xxx-xxx</p>
                  </div>
                </div>

                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <a href="tel:08166143044" target="_blank" rel="noreferrer">
                    <AiTwotonePhone size={30} />
                  </a>
                  <a
                    href="https://twitter.com/dannyswagg_"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineTwitter size={30} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ugiomoh-daniel-1937b1160/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin size={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
