import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TextareaCard = () => {
  const [text, setText] = useState('');

  return (
    <motion.div
      className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
    >
      <img
        className="w-full h-48 object-cover"
        src="https://source.unsplash.com/random/400x200" // Replace with your image source
        alt="Random"
      />
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-2">TextareaCard Title</h2>
        <p className="text-gray-700 mb-4">
          This is a description of the TextareaCard. You can provide feedback or comments below.
        </p>
        <textarea
          className="w-full h-24 p-2 border border-gray-300 rounded mb-4"
          placeholder="Type your feedback here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-between">
          <motion.button
            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
          <motion.button
            className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Cancel
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default TextareaCard;
