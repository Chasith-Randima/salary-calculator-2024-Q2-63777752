// // components/Tasks.js
// import React from 'react';

// const tasks = [
//   { status: 'completed', name: "Franklin More's professional review is pending", creator: 'Brandon Mango', priority: 'Low', date: 'Sep 12' },
//   { status: 'not-completed', name: 'Internship Agreement template is not completed', creator: 'James Walter', priority: 'High', date: 'Sep 10' },
//   { status: 'in-progress', name: "Contract #2564 need Charlie Puth's signature", creator: 'Allison Torff', priority: 'Low', date: 'Sep 08' },
//   { status: 'completed', name: "David Gram's professional review is pending", creator: 'Chance Kenter', priority: 'Medium', date: 'Sep 08' },
//   { status: 'not-completed', name: "Contract #2564 need Charlie Puth's signature", creator: 'Nolan Philips', priority: 'High', date: 'Sep 08' },
//   { status: 'completed', name: "Franklin More's professional review is pending", creator: 'Zain Culhane', priority: 'Low', date: 'Sep 06' },
//   { status: 'not-completed', name: 'Internship Agreement template is not completed', creator: 'Paityn Gouse', priority: 'High', date: 'Sep 06' },
//   { status: 'completed', name: 'Ze hinzek osodojov dibiluo ut soj culjen sivige osuac fej rehop ri uzewе unатagтив', creator: 'Jakob Baptista', priority: 'Medium', date: 'Sep 04' },
// ];

// const TaskRow = ({ task }) => {
//   return (
//     <div className="flex items-center py-2">
//       <div className="flex items-center justify-center w-1/12">
//         {task.status === 'completed' && (
//           <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.707a1 1 0 00-1.414-1.414L9 8.586 7.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//           </svg>
//         )}
//         {task.status === 'in-progress' && (
//           <div className="w-5 h-5 rounded-full bg-yellow-500"></div>
//         )}
//         {task.status === 'not-completed' && (
//           <div className="w-5 h-5 rounded-full bg-red-500"></div>
//         )}
//       </div>
//       <div className="w-5/12 pl-4">
//         <p>{task.name}</p>
//       </div>
//       <div className="w-3/12 pl-4">
//         <p>{task.creator}</p>
//       </div>
//       <div className="w-2/12 pl-4">
//         <span className={`px-2 py-1 text-sm rounded-full ${task.priority === 'Low' ? 'bg-blue-100 text-blue-700' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
//           {task.priority}
//         </span>
//       </div>
//       <div className="w-1/12 pl-4">
//         <p>{task.date}</p>
//       </div>
//     </div>
//   );
// };

// const Tasks = () => {
//   return (
//     <div className="p-4 bg-white shadow rounded">
//       <div className="border-b pb-4">
//         <h2 className="text-lg font-semibold">Tasks</h2>
//       </div>
//       <div>
//         {tasks.map((task, index) => (
//           <TaskRow key={index} task={task} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Tasks;


// components/Tasks.js
// "use client"
// import React from 'react';
// import Image from 'next/image';
// import { useState } from 'react';
// import Pagination from './Pagination_New';

// const tasks = [
//   { status: 'completed', name: "Franklin More's professional review is pending", creator: 'Brandon Mango', priority: 'Low', date: 'Sep 12' },
//   { status: 'in-progress', name: 'Internship Agreement template is not completed', creator: 'James Walter', priority: 'High', date: 'Sep 10' },
//   { status: 'in-progress', name: "Contract #2564 need Charlie Puth's signature", creator: 'Allison Torff', priority: 'Low', date: 'Sep 08' },
//   { status: 'completed', name: "David Gram's professional review is pending", creator: 'Chance Kenter', priority: 'Medium', date: 'Sep 08' },
//   { status: 'in-progress', name: "Contract #2564 need Charlie Puth's signature", creator: 'Nolan Philips', priority: 'High', date: 'Sep 08' },
//   { status: 'completed', name: "Franklin More's professional review is pending", creator: 'Zain Culhane', priority: 'Low', date: 'Sep 06' },
//   { status: 'in-progress', name: 'Internship Agreement template is not completed', creator: 'Paityn Gouse', priority: 'High', date: 'Sep 06' },
//   { status: 'completed', name: 'Ze hinzek osodojov dibiluo ut soj culjen sivige osuac fej rehop ri uzewе unатagтив', creator: 'Jakob Baptista', priority: 'Medium', date: 'Sep 04' },
// ];

// const TaskRow = ({ task }) => {

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center py-2 pr-2 relative group border-b">
//       <div className="col-span-1 grid items-center justify-center">
//       {/* <div className="flex items-center justify-center w-1/12"> */}
//     {/* <div className="flex items-center py-2 relative group border-b">
//       <div className="flex items-center justify-center w-1/12"> */}
//         {task.status === 'completed' && (
//           <Image
//             src="/completed.svg"
//             alt="Completed"
//             width={24}
//             height={24}
//           />
//         )}
//         {task.status === 'in-progress' && (
//           <Image
//             src="/in-progress.svg"
//             alt="In Progress"
//             width={24}
//             height={24}
//           />
//         )}
//         {task.status === 'not-completed' && (
//           <div className="w-5 h-5 rounded-full bg-red-500"></div>
//         )}
//       </div>
//       <div className="col-span-5 ">
//       {/* <div className="col-span-5 w-5/12 "> */}
//         <p>{task.name}</p>
//         {
//           task && task.status == "in-progress" &&  <span className=" text-pink-500 cursor-pointer">
//           Mark as {task.status === 'completed' ? 'Incomplete' : 'Completed'}
//         </span>
//         }
       
//       </div>
//       <div className="col-span-2 ">
//       {/* <div className="col-span-3 w-3/12 "> */}
//         <p>{task.creator}</p>
//       </div>
//       <div className="col-span-1 ">
//         <span className={`px-2 py-1 text-sm rounded-full ${task.priority === 'Low' ? 'bg-blue-100 text-blue-700' : task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
//           {task.priority}
//         </span>
//       </div>
//       <div className="col-span-1 ">
//         <p>{task.date}</p>
//       </div>
//       {/* <span className="ml-2 text-pink-500 cursor-pointer">
//         Mark as {task.status === 'completed' ? 'Incomplete' : 'Completed'}
//       </span> */}
//       <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
//         <div className="bg-yellow-100 text-yellow-500 text-sm px-2 py-2 rounded-full shadow-md">
//           {task.status === 'completed' ? 'Completed' : 'In-Progress'}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Tasks = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const pageCount = 3; // Example page count, replace with your actual page count

//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected);
//   };
//   return (
//     <div className=" bg-white shadow rounded">
//       <div className="border-b p-4 pb-4">
//         <h2 className="text-lg font-semibold">Tasks</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center p-4 bg-gray-100 relative group border-b">
//       <div className="col-span-1 grid ">

//         <h2>Status</h2>
//       </div>
//       <div className="col-span-5 grid ">

//         <h2>Task Name</h2>
//       </div>
//       <div className="col-span-2 grid ">

//         <h2>Created By</h2>
//       </div>
//       <div className="col-span-1 grid ">

//         <h2>Priority</h2>
//       </div>
//       <div className="col-span-1 grid ">

//         <h2>Date</h2>
//       </div>
       
//       </div>
//       <div>
//         {tasks.map((task, index) => (
//           <TaskRow key={index} task={task} />
//         ))}
//            <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
//       </div>
//     </div>
//   );
// };

// export default Tasks;



// components/Tasks.js
// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import axios from 'axios';
// import Pagination from './Pagination_New';
// import { formatDate } from '@/util';

// const TaskRow = ({ task }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center py-2 pr-2 relative group border-b">
//       <div className="col-span-1 grid items-center justify-center">
//       {task.completed=== true && (
//           <Image
//             src="/completed.svg"
//             alt="Completed"
//             width={24}
//             height={24}
//           />
//         )}
//         {task.completed === false && (
//           <Image
//             src="/in-progress.svg"
//             alt="In Progress"
//             width={24}
//             height={24}
//           />
//         )}
//         {/* {task.status === 'not-completed' && (
//           <div className="w-5 h-5 rounded-full bg-red-500"></div>
//         )} */}
//         {/* {task.completed ? (
//           <Image
//             src="/completed.svg"
//             alt="Completed"
//             width={24}
//             height={24}
//           />
//         ) : (
//           <div className="w-5 h-5 rounded-full bg-red-500"></div>
//         )} */}
//       </div>
//       <div className="col-span-5">
//         <p>{task.todo}</p>
//         {task.status === 'in-progress' && (
//           <span className="text-pink-500 cursor-pointer">
//             Mark as {task.completed ? 'Incomplete' : 'Completed'}
//           </span>
//         )}
//       </div>
//       <div className="col-span-2">
//         <p>{task.createdBy}</p>
//       </div>
//       <div className="col-span-1">
//         <span className={`px-2 py-1 text-sm rounded-full ${task.priority === 'LOW' ? 'bg-blue-100 text-blue-700' : task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
//           {task.priority}
//         </span>
//       </div>
//       <div className="col-span-1">
//         <p>{formatDate(new Date(task.createdAt).toLocaleDateString())}</p>
//       </div>
//       <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
//         <div className="bg-yellow-100 text-yellow-500 text-sm px-2 py-2 rounded-full shadow-md">
//           {task.completed ? 'Completed' : 'In-Progress'}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Tasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0);
//   const pageCount = 3; // Example page count, replace with your actual page count

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
//         console.log(response)
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected);
//   };

//   return (
//     <div className="bg-white shadow rounded">
//       <div className="border-b p-4 pb-4">
//         <h2 className="text-lg font-semibold">Tasks</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center p-4 bg-gray-100 relative group border-b">
//         <div className="col-span-1 grid">
//           <h2>Status</h2>
//         </div>
//         <div className="col-span-5 grid">
//           <h2>Task Name</h2>
//         </div>
//         <div className="col-span-2 grid">
//           <h2>Created By</h2>
//         </div>
//         <div className="col-span-1 grid">
//           <h2>Priority</h2>
//         </div>
//         <div className="col-span-1 grid">
//           <h2>Date</h2>
//         </div>
//       </div>
//       <div>
//         {tasks.map((task, index) => (
//           <TaskRow key={index} task={task} />
//         ))}
//         <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
//       </div>
//     </div>
//   );
// };

// export default Tasks;



// context api changes--------------------------------



// // components/Tasks.js
// "use client";
// import React, { useState, useEffect, useContext } from 'react';
// import Image from 'next/image';
// import axios from 'axios';
// import Pagination from './Pagination_New';
// import { TaskContext } from '@/context/TaskContext';
// // import { formatDate } from '@/util';
// import TaskRow from './TaskRow';


// const Tasks = () => {
//   const { tasks, setTasks, status, setStatus, error, setError } = useContext(TaskContext);
//   const [currentPage, setCurrentPage] = useState(0);
//   const pageCount = 3; // Example page count, replace with your actual page count

//   useEffect(() => {
//     const fetchTasks = async () => {
//       setStatus('loading');
//       try {
//         const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
//         console.log(response)
//         setTasks(response.data);
//         setStatus('succeeded');
//       } catch (err) {
//         setError(err.message);
//         setStatus('failed');
//       }
//     };

//     fetchTasks();
//   }, [setTasks, setStatus, setError]);

//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected);
//   };

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="bg-white shadow rounded">
//       <div className="border-b p-4 pb-4">
//         <h2 className="text-lg font-semibold">Tasks</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center p-4 bg-gray-100 relative group border-b">
//         <div className="col-span-1 grid">
//           <h2>Status</h2>
//         </div>
//         <div className="col-span-5 grid">
//           <h2>Task Name</h2>
//         </div>
//         <div className="col-span-2 grid">
//           <h2>Created By</h2>
//         </div>
//         <div className="col-span-1 grid">
//           <h2>Priority</h2>
//         </div>
//         <div className="col-span-1 grid">
//           <h2>Date</h2>
//         </div>
//       </div>
//       <div>
//         {tasks && tasks.map((task, index) => (
//           <TaskRow key={index} task={task} />
//         ))}
//         <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
//       </div>
//     </div>
//   );
// };

// export default Tasks;



// pagination --------------------------------



// // components/Tasks.js
// "use client";
// import React, { useState, useEffect, useContext } from 'react';
// import Image from 'next/image';
// import axios from 'axios';
// import Pagination from './Pagination_New';
// import { TaskContext } from '@/context/TaskContext';
// // import { formatDate } from '@/util';
// import TaskRow from './TaskRow';

// const Tasks = () => {
//   const { tasks, setTasks, status, setStatus, error, setError } = useContext(TaskContext);
//   const [currentPage, setCurrentPage] = useState(0);
//   const tasksPerPage = 8; // Number of tasks to show per page

//   useEffect(() => {
//     const fetchTasks = async () => {
//       setStatus('loading');
//       try {
//         const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
//         console.log(response)
//         setTasks(response.data);
//         setStatus('succeeded');
//       } catch (err) {
//         setError(err.message);
//         setStatus('failed');
//       }
//     };

//     fetchTasks();
//   }, [setTasks, setStatus, setError]);

//   const handlePageClick = (data) => {
//     setCurrentPage(data.selected);
//   };

//   const startIndex = currentPage * tasksPerPage;
//   const endIndex = startIndex + tasksPerPage;
//   const currentTasks = tasks.slice(startIndex, endIndex);
//   const pageCount = Math.ceil(tasks.length / tasksPerPage);

//   if (status === 'loading') {
//     return <div>Loading...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="bg-white shadow rounded">
//       <div className="border-b p-4 pb-4">
//         <h2 className="text-lg font-semibold">Tasks</h2>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center p-4 bg-gray-100 relative group border-b">
//         <div className="col-span-1 grid">
//           <h2>Status</h2>
//         </div>
//         <div className="col-span-5 grid">
//           <h2>Task Name</h2>
//         </div>
//         <div className="col-span-2 grid">
//           <h2>Created By</h2>
//         </div>
//         <div className="col-span-1 grid">
//           <h2>Priority</h2>
//         </div>
//         <div className="col-span-1 grid">
//           <h2>Date</h2>
//         </div>
//       </div>
//       <div>
//         {currentTasks.map((task, index) => (
//           <TaskRow key={index} task={task} />
//         ))}
//         <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
//       </div>
//     </div>
//   );
// };

// export default Tasks;














// -----------------------------------------------------------------















import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Pagination from './Pagination_New';
import { TaskContext } from '@/context/TaskContext';
import TaskRow from './TaskRow';
import Modal from './Modal';
import TaskCard from './TaskCard';
import { isMobile } from 'react-device-detect';

const Tasks = () => {
  const { tasks, setTasks, status, setStatus, error, setError } = useContext(TaskContext);
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const tasksPerPage = 8; // Number of tasks to show per page

  useEffect(() => {
    const fetchTasks = async () => {
      setStatus('loading');
      setModalMessage('Loading tasks...');
      setIsModalVisible(true);

      try {
        const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        setTasks(response.data);
        setStatus('succeeded');
        setIsModalVisible(false);
      } catch (err) {
        setError(err.message);
        setStatus('failed');
        setModalMessage(`Failed to load tasks: ${err.message}`);
        setIsModalVisible(true);
      }
    };

    fetchTasks();
  }, [setTasks, setStatus, setError]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    if (status === 'failed') {
      setError(null);
      setStatus('idle');
    }
  };

  const startIndex = currentPage * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;
  const currentTasks = tasks.slice(startIndex, endIndex);
  const pageCount = Math.ceil(tasks.length / tasksPerPage);

  return (
    <div className="bg-white shadow rounded">
      <div className="border-b p-4 pb-4">
        <h2 className="text-lg font-semibold">Tasks</h2>
      </div>
      <div className="hidden md:grid  md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center p-4 bg-gray-100 relative group border-b">
        <div className="col-span-1 grid">
          <h2>Status</h2>
        </div>
        <div className="col-span-5 grid">
          <h2>Task Name</h2>
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <h2>Created By</h2>
        </div>
        <div className="col-span-1 grid">
          <h2>Priority</h2>
        </div>
        <div className="col-span-1 grid">
          <h2>Date</h2>
        </div>
      </div>
      <div>
        {currentTasks.map((task, index) => {
          // <TaskRow key={index} task={task} />
          if(isMobile){

            return <TaskCard key={index} task={task}/>
          }else{
return <TaskRow key={index} task={task} />
          }
          
})}
        <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
      </div>
      <Modal message={modalMessage} isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Tasks;
