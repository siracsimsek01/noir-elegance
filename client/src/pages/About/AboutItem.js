import React from "react";

const Icons = ({ image, title, description }) => {
  return (
    <>
      <div className="text-center font-body flex flex-col justify-center items-center gap-3">
        <img src={image} alt="AboutItemImg" />
        <h2 className=" text-white text-3xl font-bold ">{title}</h2>
        <p className=" text-white text-xl font-normal text-wrap w-72">
          {description}
        </p>
        <button className=" text-orange-300 text-xl font-normal  cursor-pointer">
          See more
        </button>
      </div>
    </>
  );
};

const Chefs = ({ image, title, description }) => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center text-center font-body">
        <img src={image} alt="AboutItemImg" className="bg-gray-400 h-96"/>
        <h2 className="text-gray-800 text-3xl font-bold">{title}</h2>
        <p className="text-center text-neutral-600 text-xl font-normal font-['Josefin Sans'] leading-relaxed">
          {description}
        </p>
      </div>
    </>
  );
};

export default function AboutItem({ type, ...props }) {
  switch (type) {
    case "Icons":
      return <Icons {...props} />;
    case "Chefs":
      return <Chefs {...props} />;
    default:
      return null;
  }
}
