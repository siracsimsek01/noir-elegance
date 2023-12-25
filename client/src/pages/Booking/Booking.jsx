import React, { useState } from "react";
import { Navbar, Footer } from "../index";
import Button from "../../components/Buttons/NoirButton";
import {
  Booking1,
  Booking2,
  BookingIcon1,
  BookingIcon2,
  BookingIcon3,
  BookingIcon4,
} from "../../assets/img/index";
import Transition from "../../transition";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    persons: "",
    time: "",
    date: new Date().toISOString().slice(0, 10), // default to today's date
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Updates state when form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Disable the submit button
    setSubmissionMessage(""); // Clear any previous messages

    try {
      const response = await fetch("http://localhost:5050/api/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmissionMessage("Your reservation has been created."); // Set success message
        // Optionally, redirect to a success page or update the UI further
      } else {
        throw new Error(data.message || "Failed to book the table.");
      }
    } catch (error) {
      setSubmissionMessage(`Error: ${error.message}`); // Set error message
    } finally {
      setIsSubmitting(true); // Re-enable the submit button after the operation
    }
  };

  const iconBox = (icon, title) => {
    return (
      <div className="flex items-center gap-4 bg-white w-64 h-16 border-2 border-gray-200 p-10">
          <img src={icon} alt="icon" />
          <p>{title}</p>
      </div>
    );
  };
  return (
    <>
      <Navbar showHeader={true} HeaderContent={"Booking Page"} />
      <div className="bg-white h-screen font-body flex justify-evenly items-center overflow-hidden">
        <div>
          <div>
            <h2 className="text-gray-800 text-base font-medium font-body uppercase leading-5 tracking-widest after:block after:w-30 after:bg-darkYellow after:h-0.5">
              Reservation
            </h2>
            <h1 className="text-gray-800 text-4xl font-bold font-body leading-loose">
              Book your table now
            </h1>
            <p className="w-124 text-neutral-600 text-xl font-normal font-body leading-relaxed">
              The people, food and the prime locations make Rodich the perfect
              place good friends & family to come together and have great time.
            </p>
          </div>
          <form onSubmit={handleSubmit} name="reserve">
            <div className="flex justify-center gap-4 mb-4 pt-10">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="bg-transparent border border-black text-black py-3 px-4 w-full max-w-xs outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="bg-transparent border border-black text-black py-3 px-4 w-full max-w-xs outline-none"
              />
            </div>
            <div className="flex justify-center gap-4">
              <input
                type="number"
                min={1}
                value={formData.persons}
                onChange={handleChange}
                name="persons"
                color="white"
                required
                placeholder="Person"
                className="bg-transparent border border-black text-black py-3 px-4 w-full max-w-xs outline-none"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="Timing"
                required
                className="bg-transparent border border-black text-black py-3 px-4 w-full max-w-xs outline-none"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Date"
                required
                className="bg-transparent border border-black text-black py-3 px-4 w-full max-w-xs outline-none"
              />
            </div>
            <div className="mt-10">
              <Button
                //   type="submit"
                type="primary"
                disabled={isSubmitting}
                onSubmit={handleSubmit}
              >
                Book a table
              </Button>
            </div>
          </form>

          {submissionMessage && (
            <div className="text-center mt-8">
              <p
                className={
                  submissionMessage.startsWith("Error:")
                    ? "text-red-600"
                    : "text-green-600 font-bold"
                }
              >
                {submissionMessage}
              </p>
            </div>
          )}
        </div>
        <div>
          <img src={Booking1} alt="Booking1" />
        </div>
      </div>

      <div className="bg-white h-screen font-body flex justify-evenly items-center">
        <div>
          <img src={Booking2} alt="Booking2" />
        </div>
        <div>
          <div>
            <h2 className="text-gray-800 text-base font-medium font-body uppercase leading-5 tracking-widest after:block after:w-38 after:bg-darkYellow after:h-0.5">WHY CHOOSE US</h2>
            <h1 className="text-gray-800 text-4xl font-bold font-body leading-loose">Why We Are The Best?</h1>
            <p className="w-124 text-neutral-600 text-xl font-normal font-body leading-relaxed">
              Bring the table winwin survival strateges ensure proactive the
              domination the end of the day going forward new normal that has
              evolved froms generation on the runway heading towards streamlined
              cloud solution generated content in real times will have multiple
              touchpoints.
            </p>
          </div>
          <div className="flex justify-evenly mt-16">
            <span>
               {iconBox(BookingIcon1, "Fresh Food")}
               {iconBox(BookingIcon2, "Fast Delivery")}
            </span>
            <span>
                {iconBox(BookingIcon3, "Quality Maintain")}
                {iconBox(BookingIcon4, "24/7 Service")}
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Transition(Booking);
