import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="p-3 bg-black leading-10">
      <nav className="flex justify-between text-white">
        <NavLink to="/">Home</NavLink>
        <div className="flex gap-5 text-white">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
