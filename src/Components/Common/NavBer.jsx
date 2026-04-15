import React from "react";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { Link, NavLink } from "react-router";

const NavBer = () => {
  const linkBtn = (
    <>
      <NavLink
        className="flex justify-center items-center gap-2 lg:border px-4 py-1.5 rounded border-gray-100 font-semibold text-lg"
        to="/"
      >
        {" "}
        <TiHome />
        Home{" "}
      </NavLink>
      <NavLink
        className="flex justify-center items-center gap-2 lg:border px-4 py-1.5 rounded border-gray-100 font-semibold text-lg "
        to="/timeline"
      >
        {" "}
        <RiTimeLine />
        Timeline{" "}
      </NavLink>
      <NavLink
        className="flex justify-center items-center gap-2  px-4 py-1.5  rounded border   border-gray-100 font-semibold text-lg"
        to="/stats"
      >
        {" "}
        <ImStatsDots />
        Stats{" "}
      </NavLink>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {linkBtn}
            </ul>
          </div>
          <Link to="/"><img src="/assets/logo.png" alt="" /></Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{linkBtn}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBer;
