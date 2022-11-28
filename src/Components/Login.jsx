import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <div className="flex justify-center items-center">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <div
              className="w-full p-16 my-4 mx-auto
               lg:w-9/12 rounded-2xl
             shadow-2xl border border-black"
            >
              <div className="flex text-center">
                <h1 className="font-bold uppercase text-5xl text-[#CF8E69]">
                  Login Here
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded focus:outline-none
                     focus:shadow-outline"
                  type="email"
                  placeholder="Enter Email"
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded focus:outline-none
                   focus:shadow-outline"
                  type="text"
                  placeholder="Enter Password"
                />
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button
                  className="uppercase text-sm font-bold tracking-wide bg-black text-[#CF8E69] hover:bg-transparent
                   duration-300 p-3 rounded-lg w-full border hover:border-black
                      focus:outline-none focus:shadow-outline"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
