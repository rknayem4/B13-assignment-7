import React from "react";
import { IoMdAdd } from "react-icons/io";

const Home = () => {
  return (
    <div className="min-h-screen container mx-auto px-3">
      <div className="text-center mt-12 py-4 space-y-4">
        <h2 className="md:text-5xl text-3xl font-bold">
          Friends to keep close in your life
        </h2>
        <p className="text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <button className="bg-[#244D3F] text-white btn flex justify-center items-center gap-1.5 mx-auto">
          {" "}
          <IoMdAdd /> Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-10">
        <div className="text-center space-y-2.5 p-4 shadow rounded">
          <h3 className="text-2xl font-bold">10</h3>
          <p className="text-gray-500">Total Friend</p>
        </div>
        <div className="text-center space-y-2.5 p-4 shadow rounded">
          <h3 className="text-2xl font-bold">3</h3>
          <p className="text-gray-500">On Track</p>
        </div>
        <div className="text-center space-y-2.5 p-4 shadow rounded">
          <h3 className="text-2xl font-bold">4</h3>
          <p className="text-gray-500">Need Attention</p>
        </div>
        <div className="text-center space-y-2.5 p-4 shadow rounded">
          <h3 className="text-2xl font-bold">12</h3>
          <p className="text-gray-500">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
