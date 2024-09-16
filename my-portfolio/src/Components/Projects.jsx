import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving, faShoppingCart, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const Projects = () => (
  <section id="projects" className="bg-gray-100 py-8">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            <FontAwesomeIcon icon={faTruckMoving} className="mr-2" />
            Mobile-Application "Demena-Go"
          </h3>
          <p className="mb-2">An Application Of Demenagement-service</p>
          <p className="mb-2"><strong>Technologies Used:</strong> Node.js, Express, MongoDB</p>
          <p className="mb-4"><strong>Role:</strong> Backend developer</p>
          <a href="[Live Demo]" className="text-white text-yellow-500 hover:text-amber-950 px-4 py-2 rounded">
            View Demo
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            E-commerce Platform "El Marchi"
          </h3>
          <p className="mb-2">An online store for selling products.</p>
          <p className="mb-2"><strong>Technologies Used:</strong> Node.js, Express, MongoDB</p>
          <p className="mb-4"><strong>Role:</strong> Backend developer</p>
          <a href="[Live Demo]" className="text-white text-yellow-500 hover:text-amber-950 px-4 py-2 rounded">
            View Demo
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            E-commerce Platform
          </h3>
          <p className="mb-2">An online store for selling products.</p>
          <p className="mb-2"><strong>Technologies Used:</strong> Node.js, Express, MongoDB</p>
          <p className="mb-4"><strong>Role:</strong> Backend developer</p>
          <a href="[Live Demo]" className="text-white text-yellow-500 hover:text-amber-950 px-4 py-2 rounded">
            View Demo
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">
            <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
            Portfolio Website
          </h3>
          <p className="mb-2">A personal portfolio website to showcase my work.</p>
          <p className="mb-2"><strong>Technologies Used:</strong> HTML, CSS, JavaScript, React</p>
          <p className="mb-4"><strong>Role:</strong> Full-stack developer</p>
          <a href="[GitHub Repository]" className="text-white text-yellow-500 hover:text-amber-950 px-4 py-2 rounded">
            View Code
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;