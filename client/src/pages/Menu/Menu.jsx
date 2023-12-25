import React from "react";
import Transition from "../../transition";
import { Navbar, Footer } from "../index";
import { Reserve, MenuItem } from "../../components/index";
import {
  Menu1,
  Menu2,
  Menu3,
  MenuBg,
  MenuBg2,
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
  ChickenNoodleSoup,
  ChickenWithMushroom,
  ChineseSoup,
  ItalianPasta,
  BeefBurger,
  RibeyeSteak,
  OreoIceCream,
  Soufle,
  StrawberryTart,
  Waffle,
} from "../../assets/img/index";
import { Fade } from 'react-awesome-reveal';
import { FaD } from "react-icons/fa6";

const Menu = () => {
  return (
    <>
      <Navbar showHeader={true} HeaderContent={"Menu"} />
      <div className="bg-white flex justify-evenly px-52  items-center font-body h-screen ">
        <Fade direction="left" triggerOnce>
        <div>
          <img src={Menu1} alt="Menu1" />
        </div>
        </Fade>
  
        <div id="starters" className="self-start mt-36">
          <Fade cascade triggerOnce>
          <h2 className="text-gray-800 text-3xl font-bold mb-5">Starters</h2>
          </Fade>
         
         <Fade cascade damping={0.2} delay={500} triggerOnce>
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
     
       
          <MenuItem
            imgSrc={ChickenNoodleSoup}
            imgAlt="ChickenNoodleSoup"
            title="Chicken Noodle Soup"
            description="Candied Jerusalem artichokes, truffle"
            price="$25"
          />
         
       
          <MenuItem
            imgSrc={ChickenWithMushroom}
            imgAlt="Chicken With Mushroom"
            title="Chicken With Mushroom"
            description="Candied Jerusalem artichokes, truffle"
            price="$45"
          />
      
        
          <MenuItem
            imgSrc={ChineseSoup}
            imgAlt="ChineseSoup"
            title="Chinese Soup"
            description="Candied Jerusalem artichokes, truffle"
            price="$15"
          />
       </Fade>
        </div>
      </div>

    
      <div>
        <img src={MenuBg} alt="MenuBg" />
      </div>

      <div className="bg-white flex justify-evenly items-center font-body h-screen">
        <div className="self-start mt-40">
          <Fade cascade triggerOnce>
          <h2 className="text-gray-800 text-3xl font-bold mb-5">Main Dish</h2>
          </Fade>
        <Fade cascade damping={0.2} delay={500} triggerOnce>
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
            price="$25"
          />

          <MenuItem
            imgSrc={main10}
            imgAlt="main10"
            title="Spicy Vegan Potato Curry"
            description="Candied Jerusalem artichokes, truffle"
            price="$25"
          />
          <MenuItem
            imgSrc={ItalianPasta}
            imgAlt="ItalianPasta"
            title="Italian Pasta"
            description="Candied Jerusalem artichokes, truffle"
            price="$25"
          />
          <MenuItem
            imgSrc={BeefBurger}
            imgAlt="BeefBurger"
            title="Beef Burger"
            description="Candied Jerusalem artichokes, truffle"
            price="$35"
          />
          <MenuItem
            imgSrc={RibeyeSteak}
            imgAlt="RibeyeSteak"
            title="Ribeye Steak"
            description="Candied Jerusalem artichokes, truffle"
            price="$55"
          />
          </Fade>
        </div>
      <Fade direction="right" triggerOnce>
        <div>
          <img src={Menu2} alt="Menu2" />
        </div>
      </Fade>
      </div>

      <div>
        <img src={MenuBg2} alt="MenuBg2" />
      </div>

      <div className="bg-white flex justify-center gap-28 items-center font-body h-screen">
        <Fade direction="left" triggerOnce>
        <div>
          <img src={Menu3} alt="Menu3" />
        </div>
        </Fade>
        <div className="self-start mt-40">
          <Fade cascade triggerOnce>
          <h2 className="text-gray-800 text-3xl font-bold mb-5">Dessert</h2>
          </Fade>
          <Fade cascade damping={0.2} delay={500} triggerOnce>
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
          <MenuItem
            imgSrc={OreoIceCream}
            imgAlt="OreoIceCream"
            title="Oreo Ice Cream"
            description="Candied Jerusalem artichokes, truffle"
            price="$10"
          />
          <MenuItem
            imgSrc={Soufle}
            imgAlt="Soufle"
            title="Soufle"
            description="Candied Jerusalem artichokes, truffle"
            price="$15"
          />
          <MenuItem
            imgSrc={Waffle}
            imgAlt="Waffle"
            title="Waffle"
            description="Candied Jerusalem artichokes, truffle"
            price="$20"
          />
          <MenuItem
            imgSrc={StrawberryTart}
            imgAlt="StrawberryTart"
            title="StrawberryTart"
            description="Candied Jerusalem artichokes, truffle"
            price="$10"
          />
          </Fade>
        </div>
      </div>
      <Reserve />
      <Footer />
    </>
  );
};

export default Transition(Menu);
