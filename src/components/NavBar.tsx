// components/Navbar.tsx
import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-white text-white py-6 px-6 border mb-2 border-gray-300 shadow-md">
      <div className="text-lg font-bold">Acmy Solutions</div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Image
            src="/bell.svg"
            alt="Notifications"
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center items-center gap-2 relative">
          <Image
            src="/navbar_image.svg"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span>
            <Image
              src="/down_arrow.svg"
              alt="Dropdown"
              width={32}
              height={32}
              className="rounded-full"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
