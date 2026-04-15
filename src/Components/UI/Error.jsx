import React from "react";
import { Link } from "react-router";
import img from '/assets/error.webp'

import { TiArrowBackOutline } from "react-icons/ti";

const Error = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center space-y-8">
        <img src={img} alt="" />
        <p className="text-5xl font-bold">Oops, Page not found!</p>
        <Link className="btn bg-purple-500 text-white"><TiArrowBackOutline className="text-2xl" /> Return Home</Link>
      </div>
    </div>
  );
};

export default Error;
