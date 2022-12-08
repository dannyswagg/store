import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ber from "../Assests/ber.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-3/5 py-10 flex items-center justify-center bg-black inset-x-0 bottom-0">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="w-full text-5xl font-bold">
            <h1 className="w-full md:w-2/3">
              How can we help you. get in touch
            </h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between">
            <p className="w-full md:w-2/3 text-gray-400">
              To ensure that all Wikipedia content is verifiable, anyone may
              question an uncited claim. If your work has been tagged
            </p>
            <div className="w-44 pt-6 md:pt-0">
              <Link to="contact">
                <h1 className="bg-black text-[#CF8E69] border border-[#CF8E69] justify-center text-center rounded shadow px-10 py-3 flex items-center">
                  Contact US
                </h1>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-12 mb-6 flex-row justify-between">
              <div className="flex items-center">
                <img src={ber} alt="Berries" width={50} />
                <h1 className="font-bold text-3xl">Berries</h1>
              </div>
              <div className="flex flex-row space-x-8 items-center justify-between">
                <a
                  href="https://twitter.com/dannyswagg_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
                <a
                  href="https://github.com/dannyswagg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/ugiomoh-daniel-1937b1160/"
                  traget="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </div>
            </div>
            <hr className="border-gray-600" />
            <p className="w-full text-center my-6 text-gray-600">
              Copyright © 2022 Berries Stores
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
