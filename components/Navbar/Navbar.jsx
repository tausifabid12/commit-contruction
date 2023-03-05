import Link from 'next/link';
import React from 'react';
import { FaGitter } from 'react-icons/fa';

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">About Us</Link>
      </li>
      <li>
        <Link href="/">Services</Link>
      </li>
      <li>
        <Link href="/">Contact Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar px-5 py-3">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 font-semibold shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div> */}
        <a
          href="#"
          className="text-3xl font-bold text-orange-500 flex items-center space-x-2"
        >
          <span>
            <FaGitter />
          </span>{' '}
          <p> Commit</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-semibold px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content -ml-40 mt-3 p-2 font-semibold shadow bg-base-100 rounded-box w-72"
          >
            {links}
          </ul>
        </div>
        <a className=" hidden lg:block bg-orange-500 text-white px-6 py-2 font-semibold rounded-md border border-none">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
