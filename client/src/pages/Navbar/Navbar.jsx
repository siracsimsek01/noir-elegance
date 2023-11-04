import React from "react";
import Button from "../../components/Buttons/NoirButton";
import logo from "../../assets/img/logo.png";
import {
  AiOutlineShoppingCart,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaXTwitter, FaPinterest } from "react-icons/fa6";

const Navbar = ({ showHeader, HeaderContent }) => {
  return (
    <>
      <div className="bg-blackPrimary w-full pt-16 h-auto flex justify-around items-center pb-16">
        <div className="text-white">
          <Button type="primary">
            {" "}
            <a href="#" onClick={(e) => e.preventDefault}>
              Call 987 654 321
            </a>
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
      <div className="bg-blackPrimary">
        <hr className="border-gray-600" />
        <div className="inline-flex justify-around items-center w-full py-7 font-body">
          <ul className="flex gap-10 text-neutral-200 text-lg ">
            <li>
              <a
                href="/"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/Menu"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="/Reservation"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                Reservation
              </a>
            </li>
            <li>
              <a
                href="/Gallery"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                Gallery{" "}
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="hover:text-neutral-600 transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          <ul className="inline-flex gap-4">
            <a href="https://www.instagram.com/" target="_blank">
              <AiOutlineInstagram size={23} color="#fff" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
              <AiOutlineFacebook
                className="block cursor-pointer hover:text-neutral-600 transition-all duration-300"
                size={23}
                color="#fff"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              {" "}
              <FaXTwitter
                className="block cursor-pointer hover:text-neutral-600 transition-all duration-300"
                size={23}
                color="#fff"
              />
            </a>
            <a href="https://www.pinterest.com" target="_blank">
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
