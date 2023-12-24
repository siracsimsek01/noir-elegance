/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Button from "../../components/Buttons/NoirButton";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaXTwitter, FaPinterest } from "react-icons/fa6";

const Navbar = ({ showHeader, HeaderContent }) => {
  return (
    <>
      <div
        id="navbar"
        className="bg-blackPrimary w-full pt-16 h-auto flex justify-around items-center pb-16"
      >
        <div className="text-white">
          <Button type="primary">
            <button onClick={(e) => e.preventDefault()}>
              Call 987 654 321
            </button>
          </Button>
        </div>
        <div className="w-1/4 h-auto">
          <img className="" src={logo} alt="logo" />
        </div>
        <div className="inline-block">
          <AiOutlineShoppingCart
            className="inline-block mr-7 cursor-pointer"
            color="#fff"
            size={22}
          />
          <Button className="font-body" type="secondary">
            Reservation
          </Button>
        </div>
      </div>

      <div className="bg-blackPrimary" id="navbarLink">
        <hr className="border-gray-600" />
        <div className="inline-flex justify-around items-center w-full py-7 font-body">
          <ul className="flex gap-10 text-neutral-200 text-lg ">
            <li>
              <Link
                to="/"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                Reservation
              </Link>
            </li>
            <li>
              <Link
                to="/chefs"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                Chefs
              </Link>
            </li>
            <li>
              <Link
                to="/footer"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          <ul className="inline-flex gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram size={23} color="#fff" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <AiOutlineFacebook
                className="block cursor-pointer hover:text-neutral-600 transition-all duration-300"
                size={23}
                color="#fff"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              {" "}
              <FaXTwitter
                className="block cursor-pointer hover:text-neutral-600 transition-all duration-300"
                size={23}
                color="#fff"
              />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaPinterest
                className="block cursor-pointer hover:text-neutral-600 transition-all duration-300"
                size={23}
                color="#fff"
              />
            </a>
          </ul>
        </div>
        <hr className="border-gray-600" />
      </div>

      {showHeader && HeaderContent && (
        <div className="bg-blackPrimary h-64">
          <h1 className="text-white text-4xl font-body font-bold text-center pt-24">
            {HeaderContent}
          </h1>
        </div>
      )}
    </>
  );
};

export default Navbar;
