import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, name, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white rounded-lg p-8 max-w-sm w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="text-center">
          <img src={image} alt={name} className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;