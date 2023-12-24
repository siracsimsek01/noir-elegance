import React from "react";


export default function TestimonialsItem({ imgSrc, imgAlt, name, location, description }) {
  return (
     
    <div className="w-96 h-72 bg-blackLight px-12 py-14 relative" >
      <div className="inline-flex gap-6 ">
        <div className="w-16 h-16">
        <img src={imgSrc} alt={imgAlt} className="rounded-full" />
        </div>
        <span >
          <h2 className="text-2xl font-bold">{name}</h2>
          <h3 className="text-md text-orange-300 font-normal">{location}</h3>
          <span className="inline-block bg-gray-500 h-0.5 w-86 translate-y-3 -translate-x-28 "></span>
        </span>
      </div>
      <div className="w-72 pt-5">{description}</div>
    </div>
    


  );
};



