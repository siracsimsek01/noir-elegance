import React from "react";
// import Navbar from '../Navbar/Navbar'
import Transition from "../../transition";
import { Navbar, Footer, Testimonials } from "../index";
import Reserve from "../../components/Reserve/Reserve";
import AboutItem from "../About/AboutItem";
import {
  Chef1,
  Chef2,
  Chef3,
  Chef4,
  Chef5,
  Chef6,
  Chef7
} from "../../assets/img/index";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Button } from "../../components/index";
import { Link } from "react-router-dom";

const Chefs = () => {
  return (
    <>
      <Navbar showHeader={true} HeaderContent={"Our Chefs"} />

      <div className="bg-white  h-fit py-48">
        <div className="text-center text-gray-800">
          <h2 className="inline-block text-base font-medium font-body uppercase leading-5 tracking-widest after:block after:w-12 after: after:bg-darkYellow after:h-0.5 mb-4">
            TEAM
          </h2>
          <h1 className=" text-4xl font-bold font-body">
            Meet Our Professional Chefs
          </h1>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4 pt-12 px-56">
          <AboutItem
            type="Chefs"
            image={Chef1}
            title={"Avroko"}
            description={"Master Chef"}
          />
          <AboutItem
            type="Chefs"
            image={Chef2}
            title={"Evan Mattew"}
            description={"Master Chef"}
          />
          <AboutItem
            type="Chefs"
            image={Chef3}
            title={"Diane	Clarkson"}
            description={"Master Chef"}
          />

          <AboutItem
            type="Chefs"
            image={Chef4}
            title={"Dan Rafalin"}
            description={"Assistant Chef"}
          />
          <AboutItem
            type="Chefs"
            image={Chef5}
            title={"Leonardo Smith"}
            description={"Assistant Chef"}
          />
          <AboutItem
            type="Chefs"
            image={Chef6}
            title={"Jensen Yong"}
            description={"Senior Chef"}
          />
        </div>
      </div>
      <Testimonials showBottom={false}/>

      <div className="bg-white h-screen flex justify-evenly items-center font-body">
        <div>
          <div>
            <h2 className="inline-block text-base font-medium font-body uppercase leading-5 tracking-widest after:block after:w-26 after: after:bg-darkYellow after:h-0.5 mb-4">BEST CHEFS</h2>
            <h1 className="text-gray-800 text-4xl font-bold font-body leading-loose">Only Skilled Team</h1>
            <p className="w-124 text-neutral-600 text-xl font-normal font-body leading-relaxed">Bring tothe table survival strategies to ensured proactived domination At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined  touchpoints for offshoring.</p>
          </div>
          <div className="flex flex-col justify-evenly items-center h-96">
          <ProgressBar label={"Experienced"} percentage={90}/>
          <ProgressBar label={"Proffessionalism"} percentage={70}/>
          <ProgressBar label={"Creative"} percentage={80}/>
          </div>

        
          <Button type="primary">
            <Link to="/menu">See all dishes</Link>
          </Button>

          
        </div>

        <div>
          <img src={Chef7} alt="Chef7" />
        </div>
      </div>


      <Reserve />
      <Footer />
    </>
  );
};

export default Transition(Chefs);
