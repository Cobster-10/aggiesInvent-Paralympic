"use client"
import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Link from "next/link";

const Header = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const handletoggle = () =>{
        toggleDarkMode();
    }

  return (
    
    <div className={`navbar ${darkMode ? "bg-gray-800" : "bg-gray-300"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Homepage</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Sensational Comfort</a>
      </div>
      <div className="navbar-end">
        <input onChange={handletoggle}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </div>
    </div>
  );
};

export default Header;
