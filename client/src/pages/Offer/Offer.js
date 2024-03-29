import React from "react";
import {
  offer1,
  offer2,
  popular1,
  popular2,
  popular3,
  popular4,
  offerIcon1,
  offerIcon2,
  offerIcon3,
  blog1,
  blog2,
} from "../../assets/img/index";
import Button from "../../components/Buttons/NoirButton";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export default function Offer() {
  return (
    <>
      <div className="h-screen bg-white text-gray-800 text-base font-body pt-44">
        <div className="text-center" id="offerTitle">
          <Fade cascade triggerOnce>
            <h2 className="inline-block text-lg font-medium after:block after:w-10 after:bg-darkYellow after:h-0.5 mb-5 tracking-wider">
              Offer
            </h2>
            <h1 className="font-bold text-4xl text-gray-800 mb-6">
              Our special Offer dishes
            </h1>
            <p className="text-neutral-600 text-xl font-normal">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as <br /> opposed to using 'Content here, content making.
            </p>
          </Fade>
        </div>

        <div className="flex justify-center gap-8 items-center pt-8">
          <Fade direction="left" triggerOnce>
            <img src={offer1} alt="offer1" id="offerLeft" />
          </Fade>
          <Fade direction="right" triggerOnce>
            <img src={offer2} alt="offer2" id="offerRight" />
          </Fade>
        </div>
      </div>

      <div className="pb-10 pt-10 bg-white">
        <div className="text-center font-body" id="menuTitle">
          <Fade cascade triggerOnce>
            <h2 className="inline-block text-lg font-medium after:block after:w-14 after:bg-darkYellow after:h-0.5 mb-5 tracking-wider">
              Menu
            </h2>
            <h1 className="font-bold text-4xl text-gray-800 mb-6">
              Popular Dishes
            </h1>
            <p className="text-neutral-600 text-xl font-normal">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as <br /> opposed to using 'Content here, content making.
            </p>
          </Fade>
        </div>
      </div>

      <div className="flex justify-center gap-8 font-body bg-white">
        <Fade direction="left" triggerOnce>
          <div>
            <div id="menuItem">
              <img src={popular1} alt="popular1" />
              <span className="inline-flex justify-between w-80 mt-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  Chicken Manjoori
                </h2>
                <p className="text-gray-800 text-2xl font-bold ">$15</p>
              </span>

              <p className="w-80 text-neutral-600 text-xl font-normal">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>

          <div>
            <div id="menuItem">
              <img src={popular2} alt="popular2" />
              <span className="inline-flex justify-between w-80 mt-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  Chicken Manjoori
                </h2>
                <p className="text-gray-800 text-2xl font-bold ">$15</p>
              </span>

              <p className="w-80">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
        </Fade>
        <Fade direction="right" triggerOnce>
          <div>
            <div id="menuItem">
              <img src={popular3} alt="popular3" />
              <span className="inline-flex justify-between w-80 mt-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  Chicken Manjoori
                </h2>
                <p className="text-gray-800 text-2xl font-bold ">$15</p>
              </span>

              <p className="w-80">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>

          <div>
            <div id="menuItem">
              <img src={popular4} alt="popular4" />
              <span className="inline-flex justify-between w-80 mt-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  Chicken Manjoori
                </h2>
                <p className="text-gray-800 text-2xl font-bold ">$15</p>
              </span>

              <p className="w-80">
                Lorem Ipsum is that it has a more-or-less normal
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <Fade direction="top" triggerOnce>
        <div className="text-center pt-10 pb-10 bg-white">
          <Button type="primary">
            <Link to="/menu">See all dishes</Link>
          </Button>
        </div>
      </Fade>

      <div className="bg-blackPrimary pt-32 h-screen px-80 flex items-center justify-around w-full">
        <div className="text-white font-body mr-14" id="servicesTitle">
          <Fade cascade triggerOnce>
            <h2 className="uppercase  text-base font-medium after:block after:w-32 after:bg-darkYellow after:h-0.5 mb-5 ">
              What We Offer
            </h2>
            <h1 className="text-4xl font-bold">Our Great Services</h1>
            <p className="text-xl font-normal w-96 mt-5">
              Lorem Ipsum is that it has a more-or-less normal distribution
              content making it look like readable English.{" "}
            </p>
          </Fade>
        </div>

        <div className="font-body text-white flex gap-10" id="servicesItem">
          <Fade direction="top" triggerOnce>
            <div className="py-12 px-12 bg-blackPrimary  text-center border-8 rounded-md border-zinc-700 flex flex-col items-center justify-center">
              <img src={offerIcon1} alt="offerIcon1" className="pb-2" />
              <h2>Opened 24/7</h2>
            </div>
          </Fade>

          <Fade direction="top" triggerOnce>
            <div className="py-12 px-12 bg-blackPrimary  text-center border-8 rounded-md border-zinc-700 flex flex-col items-center justify-center">
              <img src={offerIcon2} alt="offerIcon2" className="pb-2" />
              <h2>Special Menus</h2>
            </div>
          </Fade>

          <Fade direction="top" triggerOnce>
            <div className="py-12 px-12 bg-blackPrimary  text-center border-8 rounded-md border-zinc-700 flex flex-col items-center justify-center">
              <img src={offerIcon3} alt="offerIcon3" className="pb-2" />
              <h2>Home Delivery</h2>
            </div>
          </Fade>
        </div>
      </div>

      {/* Blog View */}
      <div className="pt-32 pb-32 bg-white">
        <div className="text-center font-body" id="blogTitle">
          <Fade cascade triggerOnce>
            <h2 className="inline-block text-lg font-medium after:block after:w-10 after:bg-darkYellow after:h-0.5 mb-5 tracking-wider">
              Blog
            </h2>
            <h1 className="font-bold text-4xl text-gray-800 mb-6">
              Be First Who Read News
            </h1>
            <p className="text-neutral-600 text-xl font-normal">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as <br /> opposed to using 'Content here, content making.
            </p>
          </Fade>
        </div>

        <div className="mt-16 flex justify-center gap-9 font-body">
          <Fade direction="left" triggerOnce>
            <div id="blogItem">
              <img src={blog1} alt="blog1" />
              <div className="px-10 py-11 border border-black">
                <span className="inline-flex gap-3 ">
                  <h3 className="uppercase text-gray-800 text-base font-medium  after:block after:w-26 after:bg-darkYellow after:h-0.5 mb-4">
                    Restaurants
                  </h3>
                  <h3 className="text-gray-800 text-base font-medium  after:block after:w-20 after:bg-darkYellow after:h-0.5 mb-4">
                    FEB 22, 2022
                  </h3>
                </span>
                <span>
                  <h2 className="text-gray-800 text-4xl font-bold">
                    The Most Popular Delicious Food Of <br /> Mediterranean
                    Cuisine
                  </h2>
                  <p className="w-110 text-neutral-600 text-xl font-normal mt-5">
                    Capitalize on low-hanging fruit to identify a ballpark value
                    added matrix economically and the creative activity to beta
                    test override the food quality.
                  </p>
                </span>
              </div>
            </div>
          </Fade>

          <Fade direction="right" triggerOnce>
            <div id="blogItem">
              <img src={blog2} alt="blog2" />
              <div className="px-10 py-11 border border-black">
                <span className="inline-flex gap-3 ">
                  <h3 className="uppercase text-gray-800 text-base font-medium  after:block after:w-26 after:bg-darkYellow after:h-0.5 mb-4">
                    Restaurants
                  </h3>
                  <h3 className="text-gray-800 text-base font-medium  after:block after:w-20 after:bg-darkYellow after:h-0.5 mb-4">
                    FEB 22, 2022
                  </h3>
                </span>
                <span>
                  <h2 className="text-gray-800 text-4xl font-bold">
                    Elegant Dessert: 10 Tips How to Make <br /> It at Home
                  </h2>
                  <p className="w-110 text-neutral-600 text-xl font-normal mt-5">
                    Capitalize on low-hanging fruit to identify a ballpark value
                    added matrix economically and the creative activity to beta
                    test override the food quality.
                  </p>
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
