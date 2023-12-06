import React, {useEffect, useState} from "react";
import "./Reserve.css";
import { Reservation1 } from "../../assets/img/index";


export default function Reserve() {
   // State to store form data
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    persons: '',
    time: '',
    date: new Date().toISOString().slice(0, 10), // default to today's date
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Updates state when form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Disable the submit button
    setSubmissionMessage(''); // Clear any previous messages

    try {
      const response = await fetch('http://localhost:5050/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmissionMessage('Your reservation has been created.'); // Set success message
        // Optionally, redirect to a success page or update the UI further
      } else {
        throw new Error(data.message || 'Failed to book the table.');
      }
    } catch (error) {
      setSubmissionMessage(`Error: ${error.message}`); // Set error message
    } finally {
      setIsSubmitting(true); // Re-enable the submit button after the operation
    }
  };

  

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
        <div id="reserveDiv" className="relative z-10 px-40 py-36 bg-blackPrimary bg-opacity-95 flex flex-col items-center gap-2.5">
          <div className="text-center">
            <h3 className="text-xl font-medium text-white uppercase mb-4 after:content-[''] after:block after:w-26 after:h-0.5 after:bg-yellow-400 after:mt-2">
              Reservation
            </h3>
            <h1 className="text-4xl font-bold text-white mb-6">
              Book your table now
            </h1>
          </div>

          <div className="w-full">
            <form onSubmit={handleSubmit} name="reserve">
            <div className="flex justify-center gap-4 mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="bg-transparent border border-white text-white py-3 px-4 w-full max-w-xs outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="bg-transparent border border-white text-white py-3 px-4 w-full max-w-xs outline-none"
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
                className="bg-transparent border border-white text-white py-3 px-4 w-full max-w-xs outline-none"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="Timing"
                required
                className="bg-transparent border border-white text-white py-3 px-4 w-full max-w-xs outline-none"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Date"
                required
                className="bg-transparent border border-white text-white py-3 px-4 w-full max-w-xs outline-none"
              />
            </div>
            <button type="submit" disabled={isSubmitting} className="
              mt-8  bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75">
            Book a table

          
          </button>
            </form>

            {submissionMessage && (
                <div className="text-center mt-8">
                <p className={submissionMessage.startsWith('Error:') ? 'text-red-600' : 'text-green-600 font-bold'}>
                  {submissionMessage}
                </p>
              </div>
            )}
          </div>

        
        </div>
      </div>
    </>
  );
}
