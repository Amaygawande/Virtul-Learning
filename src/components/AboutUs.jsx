import React from 'react';
import { FaBookReader, FaUsers, FaLightbulb, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-[#2B2B2B] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">About VirtualStudy</h1>
                        <p className="text-xl mb-4">Empowering students through collaborative virtual learning</p>
                    </div>
                </div>
            </div>


            {/* Our Values Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <FaUsers className="text-indigo-600 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Community</h3>
                            <p className="text-gray-600 text-3xl">Building strong learning communities through collaboration</p>
                        </div>
                        <div className="text-center p-6">
                            <FaBookReader className="text-indigo-600 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Education</h3>
                            <p className="text-gray-600 text-3xl">Providing quality educational resources and support</p>
                        </div>
                        <div className="text-center p-6">
                            <FaLightbulb className="text-indigo-600 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                            <p className="text-gray-600 text-3xl">Embracing new ways of learning and teaching</p>
                        </div>
                        <div className="text-center p-6">
                            <FaStar className="text-indigo-600 text-4xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                            <p className="text-gray-600 text-3xl">Striving for the highest standards in everything we do</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            VirtualStudy was founded with a simple mission: to make quality education accessible to everyone through collaborative learning. We believe that learning together creates better understanding and lasting knowledge.
                        </p>
                    </div>
                </div>
            </section>



            {/* Team Section */}
            
           
            <section className="py-16 bg-white">
                <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

                {/* Full-width horizontally scrollable container */}
                <div className='overflow-x-auto w-screen px-4'>
                    <div className="flex gap-4 w-max px-4">
                        {/* Each team card */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center min-w-[250px]">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold">Sanjay Kumar</h3>
                            <p className="text-gray-600 text-2xl">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center min-w-[250px]">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold">Sanjay Kumar</h3>
                            <p className="text-gray-600 text-2xl">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center min-w-[250px]">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold">Sanjay Kumar</h3>
                            <p className="text-gray-600 text-2xl">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center min-w-[250px]">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold">Sanjay Kumar</h3>
                            <p className="text-gray-600 text-2xl">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center min-w-[250px]">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold">Sanjay Kumar</h3>
                            <p className="text-gray-600 text-2xl">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center min-w-[250px]">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold">Sanjay Kumar</h3>
                            <p className="text-gray-600 text-2xl">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md text-center min-w-[250px]">
                            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                            <h3 className="text-xl font-semibold">Sanjay Kumar</h3>
                            <p className="text-gray-600 text-2xl">Founder & CEO</p>
                        </div>
                        
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-[#2B2B2B] text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                    <p className="text-xl mb-8">Have questions? We'd love to hear from you.</p>
                    <Link to='/contact' className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
                        Contact Us
                    </Link >
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
