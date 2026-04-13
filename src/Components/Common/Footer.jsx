import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] w-full py-12 text-white">
      <div className="container mx-auto px-3">
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold">KeenKeeper</h1>
          <p className="text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="text-center font-semibold space-y-4 my-5">
          <h4>Social Links </h4>
          <div className="flex justify-center items-center gap-4">
            <span className="p-2 rounded-full bg-white">
              <RiInstagramFill className="text-xl text-black " />
            </span>
            <span className="p-2 rounded-full bg-white">
              <FaFacebook className="text-xl text-black " />
            </span>
            <span className="p-2 rounded-full bg-white">
              <BsTwitterX className="text-xl text-black " />
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center max-md:flex-col space-y-4">
          <p className="text-gray-200">© 2026 KeenKeeper. All rights reserved.</p>
          <ul className="flex  justify-evenly items-center gap-4 text-gray-200">
            <li>Privacy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
