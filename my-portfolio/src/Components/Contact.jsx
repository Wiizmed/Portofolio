import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => (
  <section id="contact" className="bg-gray-100 py-8">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
              <input
                type="text"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
              <input
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message:
              <textarea
                name="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            className="bg-black hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </form>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-yellow-500 " />
            <strong>Email:</strong> <a href="mailto:louizmed2@gmail.com" className="text-black hover:text-yellow-500">louizmed2@gmail.com</a>
          </p>
          <p className="mb-4">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-yellow-500" />
            <strong>Phone:</strong> +21627440072
          </p>
          <p className="mb-4">
            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-yellow-500" />
            <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/mohamed-louiz-a469492b2" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-500">linkedin.com/in/mohamed-louiz-a469492b2</a>
          </p>
          <p className="mb-4">
            <FontAwesomeIcon icon={faGithub} className="mr-2 text-yellow-500" />
            <strong>GitHub:</strong> <a href="https://github.com/Wiizmed" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-500 ">github.com/Wiizmed</a>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;