import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="w-[90%] bg-pink-500  mx-auto p-4 text-white flex justify-between items-center">
      <p>Navigation</p>
      <ul className="flex gap-x-8">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to='/profile'>Profile</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;