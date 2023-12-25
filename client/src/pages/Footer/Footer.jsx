import React from "react";
import logo from "../../assets/img/logo.png";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter, FaPinterest } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";


const Footer = () => {
  return (
    <>
      <Fade direction="up" triggerOnce>
      <div className="bg-blackPrimary flex justify-around items-center pt-20">
        <span className="text-white after:block after:w-28 after:bg-white after:h-0.5">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram Feed
          </a>
        </span>

        <div className="w-1/4 h-auto relative">
          <img src={logo} alt="logo" />
        </div>

        <ul className="inline-flex gap-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
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
          <a href="https://www.pinterest.com" target="_blank" rel="noreferrer">
            {" "}
            <FaPinterest
              className="block cursor-pointer hover:text-neutral-600 transition-all duration-300"
              size={23}
              color="#fff"
            />
          </a>
        </ul>
      </div>

      <div className="w-full flex justify-around items-center bg-blackPrimary pb-16 text-white">
        <div className=" font-body text-left">
          <h3 className="text-2xl after:block after:w-20 after:bg-darkYellow after:h-0.5 ">Contact</h3>
          <div className="mt-6">
          <p>5 Rue Dalou, 75015 Paris</p>
          <span className="inline-flex gap-2 text-darkYellow">
            Call <p className="text-white">+33 156 78 89 56</p>
          </span>
          <p className="text-darkYellow">contact@noirelegance.com</p>
          </div>
    
        </div>

        <div className="mt-16">
          <p className="text-center"> Join our mailing list for updates, <br /> Get news & offers events.</p>
          <div className="mt-8 flex items-center justify-center">
          <input className="p-3 bg-blackPrimary border-white  border-0.5 focus:outline-none" type="email" placeholder="Email" />
          <button className="py-3 px-16 bg-white text-black hover:bg-blackPrimary border-0.5 border-white transition-all duration-300 hover:text-white">Subscribe</button>
          </div>
        </div>

        <div>
          <h3 className="text-right relative text-xl mb-7 after:block after:w-32 after:bg-darkYellow after:h-0.5 after:absolute after:right-0">Working Hours</h3>
          <span className="text-darkYellow inline-flex gap-2">
            Mon - Fri: <p className="text-white">10:00am - 10:00pm</p>
          </span>
          <br />
          <span className="text-darkYellow inline-flex gap-2">
            Sat - Sun: <p className="text-white">11:00am - 2:00am</p>
          </span>
        </div>
      </div>
      </Fade>
      <div className="bg-blackPrimary">
        <hr className="border-gray-600"/>
        <p className="py-9 text-white text-center">
          &copy; All Rights Reserved - Noir Elegance | Developed by <span className="text-darkYellow">Simsek.Dev</span> 
        </p>
      </div>
    </>
  );
};

export default Footer;
