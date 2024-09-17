import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving, faShoppingCart, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => (
  <section id="projects" className="bg-gray-100 py-8">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            <FontAwesomeIcon icon={faTruckMoving} className="mr-2" />
            Mobile-Application "Demena-Go"
          </h3>
          <p className="mb-2">An Application Of Demenagement-service</p>
          <p className="mb-2"><strong>Technologies Used:</strong> Node.js, Express, MySql , React-Native, cloudinary, (JWT) authentification, Figma, Real-Time Communication: WebSockets for in-app chat, Mapping and Tracking, Nodemailer, Payment Gateways</p>
          <p className="mb-4"><strong>Role:</strong> Full stack developer</p>
          <a href="https://github.com/Thesis-pr/thesis" className="text-yellow-500 hover:text-amber-950 px-4 py-2 rounded flex items-center" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            View Code
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            E-commerce Platform "El Marchi"
          </h3>
          <p className="mb-2">An online store for selling products.</p>
          <p className="mb-2"><strong>Technologies Used:</strong> Node.js, Express, Mysql, React, Next.js, Tailwindcss, cloudinary, (JWT) authentification, Figma</p>
          <p className="mb-4"><strong>Role:</strong> Back-End and Front-End developer</p>
          <a href="https://github.com/El-Marchi/El-Marchi" className="text-yellow-500 hover:text-amber-950 px-4 py-2 rounded flex items-center" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            View Code
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            E-commerce Platform
          </h3>
          <p className="mb-2">An online store for selling products.</p>
          <p className="mb-2"><strong>Technologies Used:</strong> Node.js, Express, MongoDB</p>
          <p className="mb-4"><strong>Role:</strong> Back-End developer</p>
          <a href="https://github.com/New-Project-Rbk/week-project" className="text-yellow-500 hover:text-amber-950 px-4 py-2 rounded flex items-center" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            View Code
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
            Portfolio Website
          </h3>
          <p className="mb-2">A personal portfolio website to showcase my work.</p>
          <p className="mb-2"><strong>Technologies Used:</strong> HTML, TailwindCSS, JavaScript, React</p>
          <p className="mb-4"><strong>Role:</strong> Front-End developer</p>
          <a href="https://github.com/Wiizmed/Portofolio" className="text-yellow-500 hover:text-amber-950 px-4 py-2 rounded flex items-center" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            View Code
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;