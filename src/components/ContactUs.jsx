// import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import NavBar from './partials/NavBar';

function ContactUs() {
  const navigate = useNavigate();

  // web3 from code
  const [result, setResult] = useState("");
  const [submit,SetSubmit] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "76aa202c-ce09-4bc3-a78c-bea6237300c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      SetSubmit(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  // web3 from code

  return (
    <div
      className={`min-h-screen w-screen bg-white text-black flex flex-col items-center overflow-y-auto px-4 sm:px-10 py-10`}
    >
      {/* <NavBar /> */}
      <div className="w-full max-w-2xl">
        <div className="flex items-center mb-6">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] text-black text-3xl mr-3 ri-arrow-left-line cursor-pointer"
          ></i>
          <h1 className="text-3xl sm:text-4xl font-bold">
            <i className="ri-phone-fill text-[#6556CD] mr-2"></i>
            Contact Us
          </h1>
        </div>

        <div className="h-[1px] bg-zinc-300 mb-6"></div>

        {/* Form */}
        <form onSubmit={onSubmit} className="bg-gray-100 p-6 rounded-xl shadow-md flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="text-lg uppercase block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-white text-black outline-none px-5 py-2 rounded-lg text-lg border border-gray-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-lg uppercase block mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-white text-black outline-none px-5 py-2 rounded-lg text-lg border border-gray-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-lg uppercase block mb-1">
              Enter your issue
            </label>
            <textarea
              name="message"
              required
              className="w-full bg-white text-black outline-none px-5 py-2 rounded-lg text-lg border border-gray-300"
            ></textarea>
          </div>

          {submit ? (
            <div className="py-2 bg-green-500 text-white rounded text-lg text-center w-full sm:w-[50%] mx-auto">
              Done 👍🏻
            </div>
          ) : (
            <button
              type="submit"
              className="bg-[#6556CD] hover:bg-[#423591] transition px-6 py-2 rounded text-lg text-white w-full sm:w-[50%] mx-auto"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>

  )
}

export default ContactUs