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
import Reserve from "../../components/Reserve/Reserve";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const line = <span className="border-r h-72 border-gray-500"></span>;
  const star = <img src={Star} alt="star" />;

  return (
    <>
      <Navbar showHeader={true} HeaderContent={"About Us"} />
      <div className="bg-white flex px-64 py-52 justify-center gap-48">
        <Fade direction="left" triggerOnce>
          <div>
            <div className="flex flex-col gap-5">
              <h2 className="text-gray-800 text-base font-medium font-body uppercase leading-5 tracking-widest after:block after:w-24 after:bg-darkYellow after:h-0.5">
                About Us
              </h2>
              <h1 className="text-gray-800 text-4xl font-bold font-body leading-loose">
                Quality and Tradition
              </h1>
              <p className="w-124 text-neutral-600 text-xl font-normal font-body leading-relaxed">
                Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content gfshere
                making look like readable English. Many desktop publishing
                packages.
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
        </Fade>
        <Fade direction="right" triggerOnce>
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
                    className="absolute top-0 right-0 opacity-50"
                    style={{ zIndex: 0 }}
                  />
                </div>
              </span>

              <div className="absolute -bottom-32 -left-60 font-body z-20">
                <Fade direction="top" delay={2000} triggerOnce>
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
                </Fade>
              </div>
            </div>
          </div>
        </Fade>
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
          <Fade direction="up" triggerOnce>
            <AboutItem
              type="Icons"
              image={AboutIcon1}
              title={"Fresh Product"}
              description={
                "Professional consider everyone probls small niche friendly."
              }
            />
          </Fade>
          {line}
          <Fade direction="up" delay={500} triggerOnce>
            <AboutItem
              type="Icons"
              image={AboutIcon2}
              title={"Skilled Chefs"}
              description={
                "Professional consider everyone probls small niche friendly."
              }
            />
          </Fade>
          {line}
          <Fade direction="up" delay={1000} triggerOnce>
            <AboutItem
              type="Icons"
              image={AboutIcon3}
              title={"Drinks & Juices"}
              description={
                "Professional consider everyone probls small niche friendly."
              }
            />
          </Fade>
          {line}
          <Fade direction="up" delay={1500} triggerOnce>
            <AboutItem
              type="Icons"
              image={AboutIcon4}
              title={"Vegan Couisine"}
              description={
                "Professional consider everyone probls small niche friendly."
              }
            />
          </Fade>
        </div>
      </div>

      <div className="bg-white h-screen py-48">
        <div className="text-center text-gray-800">
          <Fade cascade>
            <h2 className="inline-block text-base font-medium font-body uppercase leading-5 tracking-widest after:block after:w-12 after: after:bg-darkYellow after:h-0.5 mb-4">
              TEAM
            </h2>
            <h1 className=" text-4xl font-bold font-body">
              Meet Our Professional Chefs
            </h1>
          </Fade>
        </div>
        <div className="flex justify-center items-center gap-4 pt-12">
          <Fade direction="up" triggerOnce>
            <AboutItem
              type="Chefs"
              image={Chef1}
              title={"Avroko"}
              description={"Master Chef"}
            />
          </Fade>
          <Fade direction="up" delay={500} triggerOnce>
            <AboutItem
              type="Chefs"
              image={Chef2}
              title={"Evan Mattew"}
              description={"Master Chef"}
            />
          </Fade>
          <Fade direction="up" delay={1000} triggerOnce>
            <AboutItem
              type="Chefs"
              image={Chef3}
              title={"Diane	Clarkson"}
              description={"Master Chef"}
            />
          </Fade>
          <Fade direction="up" delay={1500} triggerOnce>
            <AboutItem
              type="Chefs"
              image={Chef4}
              title={"Dan Rafalin"}
              description={"Assistant Chef"}
            />
          </Fade>
        </div>
      </div>

      <div className="pt-10 h-screen pb-32">
        <div className="text-center text-white font-body">
          <Fade cascade>
          <h2 className="inline-block text-base font-medium font-body uppercase leading-5 tracking-widest after:block after:w-20 after: after:bg-darkYellow after:h-0.5 mb-5">
            Gallery
          </h2>
          <h1 className="text-4xl font-bold font-body">What We Make</h1>
          </Fade>
        </div>
        <div className="pt-20 flex justify-center items-center gap-3">
          <Fade direction="left" triggerOnce>
          <div>
            <img src={AboutGallery1} alt="Gallery1" className="pb-4" />
            <img src={AboutGallery2} alt="Gallery2" />
          </div>
          </Fade>
          <Fade direction="up" triggerOnce>
          <div>
            <img src={AboutGallery3} alt="Gallery3" />
          </div>
          </Fade>
          <Fade direction="right" triggerOnce>
          <div>
            <img src={AboutGallery4} alt="Gallery4" className="pb-4" />
            <img src={AboutGallery5} alt="Gallery5" />
          </div>
          </Fade>
        </div>
      </div>
      <Reserve />
      <Footer />
    </>
  );
};

export default Transition(About);
