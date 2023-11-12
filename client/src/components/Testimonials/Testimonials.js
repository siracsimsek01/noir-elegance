import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsItem from "./TestimonialsItem";
import {
  Testimonials1,
  Testimonials2,
  Testimonials3,
  Testimonials4,
  Testimonials5,
  Testimonials6,
  TestimonialsImg,
} from "../../assets/img/index";
import "./Testimonials.css";

export default function Testimonials() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="bg-blackPrimary h-screen text-white font-body pl-64 pt-28">
        <div className="mb-14">
          <h2 className="text-base font-medium after:block after:w-20 after:bg-darkYellow after:h-0.5 mb-4">
            Testimonials
          </h2>
          <h1 className="text-4xl font-bold mb-3">What our clients say</h1>
          <p className="text-xl font-normal ">
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </p>
        </div>

        <Slider {...settings}>
          <TestimonialsItem
            imgSrc={Testimonials1}
            imgAlt="Testimonials1"
            name="Natasha Jones"
            location="Salt Lake City"
            description="It is professional, considers everyone's time, can think about the  There are many variations of passages."
          />

          <TestimonialsItem
            imgSrc={Testimonials2}
            imgAlt="Testimonials2"
            name="Jack Sparrow"
            location="San Diego"
            description="From the moment we walked in, the ambiance captivated us. The staff greeted us with genuine smiles and the menu offered a tantalizing variety of options. "
          />

          <TestimonialsItem
            imgSrc={Testimonials4}
            imgAlt="Testimonials3"
            name="James Smith"
            location="London"
            description="This is our go-to spot for special occasions. The attention to detail is evident from the exquisitely crafted cocktails to the locally-sourced ingredients in every entrée."
          />

          <TestimonialsItem
            imgSrc={Testimonials3}
            imgAlt="Testimonials4"
            name="Emily Johnson"
            location="Toronto"
            description="I was thoroughly impressed with the vegetarian options at this restaurant. Innovative, flavorful, and satisfying are the words that come to mind. "
          />

          <TestimonialsItem
            imgSrc={Testimonials5}
            imgAlt="Testimonials5"
            name="Ece Demir"
            location="Istanbul"
            description="Dining at this restaurant is like a mini vacation. The seafood is the freshest I've ever had, and the ocean view is just breathtaking."
          />

          <TestimonialsItem
            imgSrc={Testimonials6}
            imgAlt="Testimonials6"
            name="Araya Suriyabandara"
            location="Bangkok"
            description="It the fusion cuisine here is second to none. I love how they blend different culinary traditions to create something uniquely delicious."
          />
        </Slider>

      </div>
        <div className="w-full bg-blackPrimary pt-10">
          <img src={TestimonialsImg} alt="TestimonialsImg" />
        </div>
    </>
  );
}
