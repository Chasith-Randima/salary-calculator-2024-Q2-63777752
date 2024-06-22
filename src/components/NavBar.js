// components/Navbar.js

import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white text-white py-6 px-6 border mb-2 border-gray-300 shadow-md">
    {/* <div className="flex items-center justify-between bg-purple-900 text-white py-6 px-6"> */}
      <div className="text-lg font-bold">Acmy Solutions</div>
      <div className="flex items-center space-x-4">
        {/* <span className="text-black font-semibold">Dashboard</span> */}
        <div className="relative">
        <Image
            src="bell.svg"
            alt="Profile"
            width={24}
            height={24}
            className="rounded-full"
          />
          {/* <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405a1.992 1.992 0 00-1.414-.586H16a1.992 1.992 0 01-1.414-.586L15 17zM19 10a5 5 0 11-10 0 5 5 0 0110 0z" />
          </svg> */}
        </div>
        <div className="flex justify-center items-center gap-2 relative">
          <Image
            src="navbar_image.svg"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span>

          <Image
            src="down_arrow.svg"
            alt="Profile"
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
