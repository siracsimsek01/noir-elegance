import React from "react";
import "./App.css";
import { Navbar, Footer, Menu } from "./pages/index";
import Button from "../src/components/Buttons/NoirButton";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineBook, AiOutlineClockCircle } from "react-icons/ai";
import {
  headerImg,
  signature,
  main1,
  main2,
  main3,
  main4,
  main5,
  main6,
  main7,
  main8,
  main9,
  main10,
  main11,
  main12,
} from "../src/assets/img/index";
import MenuItem from "./components/MenuItem/MenuItem";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  const circle = (
    <span className="absolute -left-20 bottom-0.5 bg-gray-800 w-16 h-16 rounded-full"></span>
  );

  return (
    <div className="App">
      {/* Navbar Component @/src/pages/Navbar/Navbar */}
      <Navbar showHeader={false} />
      {/* Header of main page */}
      <header className="w-full bg-blackPrimary flex justify-evenly items-center relative">
        <div className="text-white font-body text-left">
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
            src={headerImg}
            alt="header"
            className="w-96 h-auto rounded-tl-full rounded-tr-full scale-90"
          />
        </div>
      </header>

      {/* Main part of main page */}
      <main>
        <div className="flex justify-around items-center h-96 text-left font-body bg-red-50 px-40">
          <div className="relative">
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
          <div className="relative">
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
          <div className="relative">
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
          <div>
            <img src={main1} alt="main1" />
          </div>
          <div className="font-body grid grid-cols-2 auto-rows-min ">
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

        <div className="flex justify-around items-center px-40 font-body mt-48 pb-40">
          <div>
            <h3 className="text-gray-800 text-base font-medium uppercase pb-3">
              Menu
            </h3>
            <h1 className="text-gray-800 text-4xl font-bold pb-6">
              Try Our Special Offers
            </h1>
            <p className="w-96 text-neutral-600 text-xl font-normal text-left pb-12">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content making it look
              like readable English.{" "}
            </p>
            <img src={main2} alt="main2" className="mb-14" />
  
              <Button type="primary">See all dishes</Button>
         
          </div>
          <div>
            <div className="flex flex-col gap-4 justify-end items-center mt-52">
              <div>
                <h2 className="text-gray-800 text-3xl font-bold mb-5">Starters</h2>

                <MenuItem
                  imgSrc={main3}
                  imgAlt="main3"
                  title="Raw Scallops from Erquy"
                  description="Candied Jerusalem artichokes, truffle"
                  price="$40"
                />

                <MenuItem
                  imgSrc={main4}
                  imgAlt="main4"
                  title="Spring Roll"
                  description="Candied Jerusalem artichokes, truffle"
                  price="$20"
                />

                <MenuItem
                  imgSrc={main5}
                  imgAlt="main5"
                  title="French Onion Soup"
                  description="Candied Jerusalem artichokes, truffle"
                  price="$25"
                />

                <MenuItem
                  imgSrc={main6}
                  imgAlt="main6"
                  title="Tomato Bruschetta"
                  description="Candied Jerusalem artichokes, truffle"
                  price="$30"
                />

           
              </div>

              <div>
                <h2 className="text-gray-800 text-3xl font-bold mb-5">Main Dish</h2>

                <MenuItem
                  imgSrc={main7}
                  imgAlt="main7"
                  title="Grilled Salmon with Dil Sau"
                  description="Candied Jerusalem artichokes, truffle"
                  price="$40"
                />

                <MenuItem
                  imgSrc={main8}
                  imgAlt="main8"
                  title="Roast Beef with Vegetable"
                  description="Candied Jerusalem artichokes, truffle"
                  price="$20"
                />
                     <MenuItem
                  imgSrc={main9}
                  imgAlt="main9"
                  title="Marrkesh Vegetetarian Dish"
                  description="Candied Jerusalem artichokes, truffle"
                  price="$25" />

                <MenuItem
                  imgSrc={main10}
                  imgAlt="main10"
                  title="Spicy Vegan Potato Curry"
                  description="Candied Jerusalem artichokes, truffle"
                  price="$25"
                />
              </div>
              <div className="">
                <h2 className="text-gray-800 text-3xl font-bold mb-5">Dessert</h2>

                <MenuItem
                  imgSrc={main11}
                  imgAlt="main11"
                  title="Apple Pie with Cream"
                  description="Candied Jerusalem artichokes, truffle"
                  price="$30"
                />

                <MenuItem
                  imgSrc={main12}
                  imgAlt="main12"
                  title="Lemon Meringue Pie"
                  description="Candied Jerusalem artichokes, truffle"
                  price="$40"
                />
              </div>
            </div>
          </div>
        </div>

        <Testimonials />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
