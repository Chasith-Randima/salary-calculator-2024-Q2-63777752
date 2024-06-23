// components/Sidebar.tsx
"use client";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="flex flex-col w-64 h-screen bg-purple-900 text-white">
          <div className="py-6 px-4 bg-purple-800 text-center text-xl font-bold">
            <span className='cursor-pointer' onClick={handleClick}>
              Acmy Solutions
            </span>
          </div>
          <div className="flex flex-col items-start mt-8 px-4 space-y-2 cursor-pointer" onClick={handleClick}>
            <div className="flex items-center bg-purple-700 justify-center text-gray-300 w-full h-12 py-2 px-4 rounded-full space-x-2 hover:bg-purple-300 hover:text-purple-600 transition-all">
              <Image
                src="/dashboard.svg"
                alt="Dashboard"
                width={24}
                height={24}
                className="hover:text-purple-600"
              />
              <span>Dashboard</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        {children}
      </div>
    </>
  );
};

export default Sidebar;
