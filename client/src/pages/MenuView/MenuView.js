import React from "react";
import {main2,
    main3,
    main4,
    main5,
    main6,
    main7,
    main8,
    main9,
    main10,
    main11,
    main12,} from "../../assets/img/index";
import { MenuItem, Button } from "../../components/index";
import { Link } from 'react-router-dom'

export default function MenuView() {
 
  
    return(

        <div className="flex justify-around items-center px-40 font-body pt-32 pb-40 bg-white">
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

            <Button type="primary">
            <Link to="/menu">See all dishes</Link>
          </Button>
          </div>
          <div>
            <div className="flex flex-col gap-4 justify-end items-center mt-52">
              <div id="starters">
                <h2 className="text-gray-800 text-3xl font-bold mb-5" >
                  Starters
                </h2>

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
                <h2 className="text-gray-800 text-3xl font-bold mb-5">
                  Main Dish
                </h2>

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
              </div>
              <div>
                <h2 className="text-gray-800 text-3xl font-bold mb-5">
                  Dessert
                </h2>

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
    )
}