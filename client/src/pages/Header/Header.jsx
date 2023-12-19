import React from "react";
import { Button } from "../../components/index";
import { headerImg } from "../../assets/img/index";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineBook, AiOutlineClockCircle } from "react-icons/ai";
import { signature, main1 } from "../../assets/img/index";

const Header = () => {
  const circle = (
    <span className="absolute -left-20 bottom-0.5 bg-gray-800 w-16 h-16 rounded-full"></span>
  );

  return (
    <>
    {/* Header Top */}
      <header className="w-full bg-blackPrimary flex justify-evenly items-center relative">
        <div className="text-white font-body text-left" id="headerTitle">
          <h1 className="text-6xl mb-3 ">
            Welcome to <br /> Noir Elegance
          </h1>
          <p className="mb-5">
            Simply dummy text of the printing and typesetting industry. <br />{" "}
            Lorem Ipsum has been the industry's standard dummy .
          </p>
          <Button type="primary">View Menu</Button>
        </div>

        <div className="mt-8 backdrop-blur-3xl bg-white bg-opacity-10 rounded-tl-full rounded-tr-full w-96 h-96">
          <img
            id="headerImg"
            src={headerImg}
            alt="header"
            className="w-96 h-auto rounded-tl-full rounded-tr-full scale-90"
          />
        </div>
      </header>

        {/* Header Bottom */}
      <div className="flex justify-around items-center h-96 text-left font-body bg-red-50 px-40">
        <div className="relative" id="headerBottom">
          {circle}
          <SlLocationPin
            size={32}
            color="#fff"
            className="absolute -left-16 top-3 z-10"
          />
          <h3 className=" text-gray-800 text-3xl font-bold font-body">
            Locate Us
          </h3>
          <p className="text-neutral-600 text-xl font-normal">
            Riverside 25, San Francisco, California
          </p>
        </div>
        <div className="relative" id="headerBottom">
          {circle}
          <AiOutlineClockCircle
            size={34}
            color="#fff"
            className="absolute -left-16 top-3 z-10"
          />
          <h3 className=" text-gray-800 text-3xl font-bold font-body">
            Open Hours
          </h3>
          <p className="text-neutral-600 text-xl font-normal">
            Mon To Fri 11:00 AM - 11:00 PM
          </p>
        </div>
        <div className="relative" id="headerBottom">
          {circle}
          <AiOutlineBook
            size={32}
            color="#fff"
            className="absolute -left-16  top-3 z-10"
          />
          <h3 className=" text-gray-800 text-3xl font-bold font-body">
            Reservation
          </h3>
          <p className="text-neutral-600 text-xl font-normal">
            reservation@noirelegance.com
          </p>
        </div>
      </div>

      <div className="flex justify-evenly items-start w-full h-auto scale-85 bg-red-50 pb-20">
          <div id="main1Img">
            <img src={main1} alt="main1" />
          </div>
          <div
            className="font-body grid grid-cols-2 auto-rows-min "
            id="theStory"
          >
            <span className="col-span-2 pb-10">
              <h2 className="text-gray-800 text-4xl font-bold pb-5">
                The Story
              </h2>
              <p className="w-96 text-neutral-600 text-xl font-normal">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gfshere',
                makinlook like readable English. Many desktop publishing
                packages.
              </p>
            </span>
            <span className="pb-10 ">
              <h2 className="text-gray-800 text-4xl font-bold pb-5">1973</h2>
              <p className="text-neutral-600 text-xl font-normal">
                Lorem Ipsum is that it has a <br /> more-or-less normal
                distribution{" "}
              </p>
            </span>
            <span>
              <h2 className="text-gray-800 text-4xl font-bold pb-5">2023</h2>
              <p className="text-neutral-600 text-xl font-normal">
                Lorem Ipsum is that it has a <br /> more-or-less normal Content
                content
              </p>
            </span>
            <span className="col-span-1 row-span-1">
              <h3 className="text-gray-800 text-xl font-normal pb-4">
                JOSEFINE
              </h3>
              <img src={signature} alt="signature" />
            </span>
          </div>
        </div>
    </>
  );
};

export default Header;
