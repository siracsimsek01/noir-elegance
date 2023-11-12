import React from "react";

const MenuItem = ({ imgSrc, imgAlt, title, description, price }) => {
  return (
    <div className="flex justify-items-center relative">
      <img src={imgSrc} alt={imgAlt} className="rounded-full scale-75" />
      <span className="mt-5 text-gray-800">
        <h2 className="text-gray-800 text-xl font-bold ">{title}</h2>
        <p className="inline-block text-neutral-600 text-base font-normal">{description}</p>
      </span>
      <span className="border-t-2 border-dotted border-gray-700 inline-block w-28 absolute -right-24 bottom-5"></span>
      <p className=" mt-12 translate-x-32 font-bold text-base">{price}</p>
    </div>
  );
};

export default MenuItem;
