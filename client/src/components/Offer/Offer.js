import React from "react";
import {offer1, offer2} from "../../assets/img/index";

export default function Offer() {
    return (
        <>
        <div className="h-screen bg-white text-gray-800 text-base font-body mt-44">
            <div className="text-center">
            <h2 className="inline-block text-lg font-medium after:block after:w-10 after:bg-darkYellow after:h-0.5 mb-5 tracking-wider">Offer</h2>
            <h1 className="font-bold text-4xl text-gray-800 mb-6">Our special  Offer dishes</h1>
            <p className="text-neutral-600 text-xl font-normal">Lorem Ipsum is that it has a more-or-less normal distribution of letters, as <br /> opposed to using 'Content here, content making.</p>
            </div>

            <div className="flex justify-center gap-8 items-center mt-8">
            <img src={offer1} alt="offer1" />
            <img src={offer2} alt="offer2" />
            </div>
        </div>
        </>
    )
}

