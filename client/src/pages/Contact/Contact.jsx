import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "../index";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here, such as sending the data to a server
    console.log(formData);
  };

  const circle = (
    <span className="absolute left-0 bottom-5 bg-gray-800 w-12 h-12 rounded-full"></span>
  );

  return (
    <>
      <Navbar showHeader={true} HeaderContent={"Contact Us"} />
      <div className="bg-white h-screen flex justify-around items-center font-body">
        <div className="">
          <h1 className="text-gray-800 text-4xl font-bold leading-loose">
            Contact Information
          </h1>
          <p className="w-96 text-neutral-600 text-xl font-normal leading-relaxed">
            Bring the table winwin survival strateges ensure proactive
            domination the end of the day going real times multiple touchpoints.
          </p>

          <div className="mt-10 flex flex-col gap-10  ">
            <span className="relative">
              {circle}
              <IoLocationOutline size={23} color="#fff" className="z-10 absolute -top-6 left-3" />
              <h3 className="text-neutral-600 text-xl font-normal leading-relaxed">Riverside 25, San Francisco, California</h3>
            </span>
            <span className="relative">
              {circle}
              <MdMailOutline size={23} color="#fff" className="z-10 absolute -top-6 left-3"/>
              <h3 className="text-neutral-600 text-xl font-normal leading-relaxed">evanmattew@mail.com</h3>
            </span>
            <span className="relative">
              {circle}
              <BsTelephone size={23} color="#fff" className="z-10 absolute -top-6 left-3"/>
              <h3 className="text-neutral-600 text-xl font-normal leading-relaxed">evanmattew@mail.com</h3>
            </span>
          </div>
        </div>
      </div>
      {/* <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Have a Question?</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border-2 rounded-md p-2"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border-2 rounded-md p-2"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="border-2 rounded-md p-2"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border-2 rounded-md p-2"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border-2 rounded-md p-2 h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-transparent hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Send
        </button>
      </form>
    </div> */}
      <Footer />
    </>
  );
};

export default Contact;
