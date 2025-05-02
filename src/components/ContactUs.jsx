import React from 'react';
import { FaBookReader } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-[#2B2B2B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-4">Get in touch with our team</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-2xl font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 text-2xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 text-2xl font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 text-2xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 text-2xl font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 text-2xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 text-2xl font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 text-2xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white text-2xl py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 text-2xl">support@studygroup.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 text-2xl">(123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600 text-2xl">123 Study Street, Learning City, ED 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
