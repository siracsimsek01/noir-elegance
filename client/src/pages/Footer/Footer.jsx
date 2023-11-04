import React from "react";
import logo from "../../assets/img/logo.png";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter, FaPinterest } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-blackPrimary flex justify-around items-center">
        <span className="text-white">
          <a href="https://www.instagram.com" target="_blank">
            Instagram Feed
          </a>
        </span>

        <div className="w-1/4 h-auto">
          <img src={logo} alt="logo" />
        </div>

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

      <div>
        <div>
          <h3>Contact</h3>
          <span>
            Call <p>33 156 78 89 56</p>
          </span>
          <p>contact@noirelegance.com</p>
        </div>

        <div>
          <p> Join our mailing list for updates, Get news & offers events.</p>
          <input type="email"  placeholder="Email"/>
          <button>Subscribe</button>
        </div>

        <div>
          <h3>Working Hours</h3>
          <span>Mon - Fri <p>10:00am - 10:00pm</p></span>
          <span>Sat - Sun<p>11:00am - 2:00am</p></span>
        </div>

        <div>
          <p>&copy; All right Reserved - Noir Elegance | Developed by Simsek.Dev</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
