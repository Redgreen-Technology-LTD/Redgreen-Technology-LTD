import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './TobBar.css';

const TopBar = () => {
  const myMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink to="/phone">Phone</NavLink>
      </li>
      <li tabIndex="0">
        <Link to="#" className="justify-between">
          Laptop
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </Link>
        <ul className="p-3 bg-gray-200 text-black">
          <li className="">
            <NavLink to="/laptop/chuwi">Chuwi</NavLink>
          </li>
        </ul>
      </li>
      <li tabIndex="1">
        <Link to="#" className="justify-between">
          TV
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </Link>
        <ul className="p-2 bg-gray-200 text-black">
          <li>
            <NavLink to="/tv/oneplus">Oneplus</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/accessories">Accessories</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-transparent lg:absolute z-40">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {myMenu}
          </ul>
        </div>
        <NavLink
          to="/"
          className="text-2xl font-bold hover:text-red-500 text-black"
        >
          RedGreen
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{myMenu}</ul>
      </div>
    </div>
  );
};

export default TopBar;
