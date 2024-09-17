import React from 'react';
import Me from "../../src/Me.png";
import html2pdf from 'html2pdf.js';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleDownload = () => {
    const element = document.getElementById('home');
    html2pdf()
      .from(element)
      .save('resume.pdf');
  };

  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url('https://png.pngtree.com/background/20231018/original/pngtree-d-illustration-of-cube-pixel-abstract-background-with-ripple-xrp-logo-picture-image_5595607.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Transparent overlay */}
      <div className="relative container mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I AM LOUIZ MOHAMED
        </motion.h1>
        <motion.p
          className="text-xl mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          FULL STACK WEB DEVELOPER
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            to="/resume"
            className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded transition duration-300"
          >
            Go to Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;