import React from "react";
import Transition from "../../transition";
import { Navbar, Footer } from "../index";
import {
  signature,
  AboutHeader,
  AboutCEO,
  AboutGallery1,
  AboutGallery2,
  AboutGallery3,
  AboutGallery4,
  AboutGallery5,
  AboutIcon1,
  AboutIcon2,
  AboutIcon3,
  AboutIcon4,
  Chef1,
  Chef2,
  Chef3,
  Chef4,
  Star,
  Pattern,
  AboutBg,
} from "../../assets/img/index";
import Button from "../../components/Buttons/NoirButton";
import AboutItem from "./AboutItem";

const About = () => {
  const line = <span className="border-r h-72 border-gray-500"></span>;
  const star = <img src={Star} alt="star" />;

  return (
    <>
      <Navbar showHeader={true} />
      <div className="bg-white flex px-64 py-52 justify-center gap-48">
        <div className="">
          <div className="flex flex-col gap-5">
            <h2 className="text-gray-800 text-base font-medium font-body uppercase leading-3 tracking-widest">
              About Us
            </h2>
            <h1 className="text-gray-800 text-4xl font-bold font-body leading-loose">
              Quality and Tradition
            </h1>
            <p className="w-124 text-neutral-600 text-xl font-normal font-body leading-relaxed">
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content gfshere making
              look like readable English. Many desktop publishing packages.
            </p>
          </div>
          <div className="pt-11">
            <h2 className="text-gray-800 text-xl font-normal font-body leading-relaxed pb-7">
              Josefine
            </h2>
            <img src={signature} alt="" className="pb-20" />
            <Button type="primary">See More</Button>
          </div>
        </div>

        <div>
          <div className="relative">
            <span className="relative">
              <div className="relative">
                <img
                  src={AboutHeader}
                  alt="AboutHeader"
                  className="rounded-tr-full"
                  style={{ position: "relative", zIndex: 10 }}
                />
                <img
                  src={Pattern}
                  alt="aboutPattern"
                  className="absolute top-0 right-0"
                  style={{ zIndex: 0 }}
                />
              </div>
            </span>
            <div className="absolute -bottom-32 -left-60 font-body z-20">
              <div className="px-14 py-10 bg-white shadow-2xl w-96">
                <span className="flex gap-8 pb-5">
                  <img src={AboutCEO} alt="CEO" className="rounded-full" />
                  <span>
                    <h2 className="text-gray-800 text-3xl font-bold">
                      Josefine
                    </h2>
                    <p className="text-neutral-600 text-xl font-normal leading-relaxed">
                      CEO & Founder
                    </p>
                  </span>
                </span>
                <span>
                  <p className="text-neutral-600 text-xl font-normal leading-9">
                    Capitalize on low hanging fruit <br /> to identify a
                    ballpark
                  </p>
                  <span className="inline-flex gap-1 pt-5">
                    {star}
                    {star}
                    {star}
                    {star}
                    {star}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center h-110 relative"
        style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justtify-between items-center">
          <AboutItem
            type="Icons"
            image={AboutIcon1}
            title={"Fresh Product"}
            description={
              "Professional consider everyone probls small niche friendly."
            }
          />
          {line}
          <AboutItem
            type="Icons"
            image={AboutIcon2}
            title={"Skilled Chefs"}
            description={
              "Professional consider everyone probls small niche friendly."
            }
          />
          {line}
          <AboutItem
            type="Icons"
            image={AboutIcon3}
            title={"Drinks & Juices"}
            description={
              "Professional consider everyone probls small niche friendly."
            }
          />
          {line}
          <AboutItem
            type="Icons"
            image={AboutIcon4}
            title={"Vegan Couisine"}
            description={
              "Professional consider everyone probls small niche friendly."
            }
          />
        </div>
      </div>

          <div className="bg-white h-screen py-48">
            <div>
              <h2 className="text-center text-gray-800 text-base font-medium font-['Josefin Sans'] uppercase leading-3 tracking-widest pb-3">TEAM</h2>
              <h1 className="text-center text-gray-800 text-4xl font-bold font-body">Meet Our Professional Chefs</h1>
            </div>
            <div className="flex justify-center items-center gap-4 pt-12">
              <AboutItem
                type="Chefs"
                image={Chef1}
                title={"Avroko"}
                description={"Master Chef"} />
              <AboutItem
                type="Chefs"
                image={Chef2}
                title={"Evan Mattew"}
                description={"Master Chef"} />
              <AboutItem
                type="Chefs"
                image={Chef3}
                title={"Diane	Clarkson"}
                description={"Master Chef"} />
              <AboutItem
                type="Chefs"
                image={Chef4}
                title={"Dan Rafalin"}
                description={"Assistant Chef"} />

            </div>
          </div>
      <Footer />
    </>
  );
};

export default Transition(About);
