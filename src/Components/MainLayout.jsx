import React from "react";
import NavBer from "./Common/NavBer";
import { Outlet } from "react-router";
import Footer from "./Common/Footer";

const Mainleyout = () => {
  return (
    <div>
      <NavBer></NavBer>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Mainleyout;
