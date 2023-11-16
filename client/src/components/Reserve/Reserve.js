import React from "react";
import "./Reserve.css";
import { Reservation1 } from "../../assets/img/index";

export default function Reserve() {
  return (
    <>
      <div
        className="pt-32 relative h-screen flex flex-col items-center justify-center font-body"
        style={{
          backgroundImage: `url(${Reservation1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 px-40 py-36 bg-blackPrimary bg-opacity-95 flex flex-col items-center gap-2.5">
          <div className="text-center">
            <h3 className="text-xl font-medium text-white uppercase mb-4 after:content-[''] after:block after:w-26 after:h-0.5 after:bg-yellow-400 after:mt-2">
              Reservation
            </h3>
            <h1 className="text-4xl font-bold text-white mb-6">
              Book your table now
            </h1>
          </div>

          <div className="w-full">
            <div className="flex justify-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="bg-transparent border border-white text-white py-3 px-4 w-full max-w-xs outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="bg-transparent border border-white text-white py-3 px-4 w-full max-w-xs outline-none"
              />
            </div>
            <div className="flex justify-center gap-4">
              <input
                type="number"
                min={1}
                color="white"
                required
                placeholder="Person"
                className="bg-transparent border border-white text-white py-3 px-4 w-full max-w-xs outline-none"
              />
              <input
                type="time"
                placeholder="Timing"
                required
                className="bg-transparent border border-white text-white py-3 px-4 w-full max-w-xs outline-none"
              />
              <input
                type="date"
                placeholder="Date"
                required
                value={new Date().toISOString().slice(0, 10)}
                className="bg-transparent border border-white text-white py-3 px-4 w-full max-w-xs outline-none"
              />
            </div>
          </div>

          <button className="mt-8 bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
            Book a Table
          </button>
        </div>
      </div>
    </>
  );
}
