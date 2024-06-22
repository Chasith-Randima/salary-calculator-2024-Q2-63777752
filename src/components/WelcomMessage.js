// components/WelcomeMessage.js


"use client"
import { useState } from 'react';

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-between bg-white border mb-2 border-gray-300 rounded-md p-4 shadow-md">
      <div>
        <h2 className="text-xl font-bold">Welcome back, John Doe</h2>
        <p className="text-gray-700">
          The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.
        </p>
        <a href="#" className="text-pink-500">Look here for more information</a>
      </div>
      <div className="flex-shrink-0 ml-4 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gray-400 cursor-pointer" onClick={() => setIsVisible(false)}>
            &times;
          </div>
        </div>
        <div className="absolute inset-0 bg-white opacity-50 rounded-full"></div>
        <div className="absolute inset-0 bg-purple-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
