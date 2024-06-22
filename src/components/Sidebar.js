// components/Sidebar.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Sidebar = ({children}) => {
  return (
    <>


    <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
    {/* <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 mt-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      > */}
        {/* <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        
        </div> */}
            <div className="flex flex-col w-64 h-screen bg-purple-900 text-white">
      <div className="py-6 px-4 bg-purple-800 text-center text-xl font-bold">
        Acmy Solutions
      </div>
      <div className="flex flex-col items-start mt-8 px-4 space-y-2">
        <div className="flex items-center bg-purple-700 justify-center text-gray-300 w-full h-12 py-2 px-4 rounded-full space-x-2">
          {/* <FontAwesomeIcon icon={faBell} width={12} /> */}
          <Image
            src="dashboard.svg"
            alt="Profile"
            width={24}
            height={24}
            // className="rounded-full"
          />
          <span>Dashboard</span>
        </div>
      </div>
    </div>
      </aside>

      <div class="p-4 sm:ml-64 ">
        {/* <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"> */}
          {children}
        {/* </div> */}
      </div>
    </>
  );
};

export default Sidebar;




// import { useState, useEffect } from "react";
// import Link from "next/link";
// // import { logOutUser } from "@/actions/user";

// import { useRouter } from "next/navigation";

// // import customSVG from "/svg/read-later.svg"
// const SideBar = ({ children }) => {
// //   const router = useRouter();
// //   const [user, setUser] = useState();
// //   useEffect(() => {
// //     if (localStorage.getItem("user")) {
// //       setUser(JSON.parse(localStorage.getItem("user")));
// //     }
// //   }, []);

// //   const handleLogout = () => {
// //     logOutUser();
// //     router.push("/");
// //   };

//   return (
//     <>
//       {/* <button
//         data-drawer-target="default-sidebar"
//         data-drawer-toggle="default-sidebar"
//         aria-controls="default-sidebar"
//         type="button"
//         class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//       >
//         <span class="sr-only">Open sidebar</span>
//         <svg
//           class="w-6 h-6"
//           aria-hidden="true"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             clip-rule="evenodd"
//             fill-rule="evenodd"
//             d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
//           ></path>
//         </svg>
//       </button> */}

//       <aside
//         id="default-sidebar"
//         class="fixed top-0 left-0 z-40 w-64 mt-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
//         aria-label="Sidebar"
//       >
//         <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        
//         </div>
//       </aside>

//       <div class="p-4 sm:ml-64 ">
//         <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
//           {children}
//         </div>
//       </div>
//     </>
//   );
// };

// export default SideBar;



