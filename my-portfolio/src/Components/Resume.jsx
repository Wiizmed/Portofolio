import React from 'react';
import Me from "../../src/Me.png";
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const handleDownload = () => {
    const element = document.getElementById('home');
    html2pdf()
      .from(element)
      .save('resume.pdf');
  };

  return (
    <section id="home" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4 text-black">Hi, I'm LOUIZ MOHAMED</h1>
          <p className="text-lg text-gray-700 mb-6">A passionate web developer Full Stack JavaScript Developer, I thrive on developing robust, scalable, and efficient web and mobile applications. With proficiency in front-end technologies like React.Js,Next.Js,React Native and back-end solutions powered by Node.Js,Express.Js, I bring a comprehensive approach to delivering end-to-end solutions. My focus on clean, maintainable code, along with a passion for solving complex problems, allows me to create seamless user experiences while ensuring system stability and performance. Dedicated to continuous improvement, I enjoy collaborating with teams to build innovative solutions that meet both user needs and business goals.</p>
          <button
            onClick={handleDownload}
            className="inline-block  bg-black hover:bg-yellow-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </button>
        </div>
        <div className="flex justify-center md:justify-end  mt-0 mb-4">
        <img src={Me} alt="Louiz Mohamed" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg mr-8 mt-[-4]" />        </div>
      </div>
    </section>
  );
};

export default Resume;