import React from 'react';
import Me from "../../src/Me.png"

const Home = () => (
  <section id="home" className="bg-gray-100 py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Hi, I'm [Your Name]</h1>
        <p className="text-lg text-gray-700 mb-6">A passionate web developer specializing in front-end development.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Download Resume</button>
      </div>
      <div className="flex justify-center md:justify-end">
        <img src={Me} alt="[Your Name]" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg" />
      </div>
    </div>
  </section>
);

export default Home;