// "use client"
// import Image from 'next/image';
// import { formatDate } from "@/util";
// import { useContext } from "react";
// import { TaskContext } from "@/context/TaskContext";

// const TaskRow = ({ task }) => {
//     const { completeTask } = useContext(TaskContext);
  
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center py-2 pr-2 relative group border-b">
//         <div className="col-span-1 grid items-center justify-center">
//           {task.completed && (
//             <Image
//               src="/completed.svg"
//               alt="Completed"
//               width={24}
//               height={24}
//             />
//           )}
//           {!task.completed && (
//             <Image
//               src="/in-progress.svg"
//               alt="In Progress"
//               width={24}
//               height={24}
//             />
//           )}
//         </div>
//         <div className="col-span-5">
//           <p>{task.todo}</p>
//           {!task.completed && (
//             <span className="text-pink-500 cursor-pointer" onClick={() => completeTask(task.id)}>
//               Mark as Completed
//             </span>
//           )}
//         </div>
//         <div className="col-span-2">
//           <p>{task.createdBy}</p>
//         </div>
//         <div className="col-span-1">
//           <span className={`px-2 py-1 text-sm capitalize rounded-full ${task.priority === 'LOW' ? 'bg-blue-100 text-blue-700' : task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
//             {task.priority.toLowerCase()}
//           </span>
//         </div>
//         <div className="col-span-1">
//           <p>{formatDate(new Date(task.createdAt).toLocaleDateString())}</p>
//         </div>
//         <div className="absolute bottom-28 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
//           <div className="bg-yellow-100 text-yellow-500 text-sm px-2 py-2 rounded-full shadow-md">
//             {task.completed ? 'Completed' : 'In-Progress'}
//           </div>
//         </div>
//       </div>
//     );
//   };
  

//   export default TaskRow;




// "use client"
// import Image from 'next/image';
// import { formatDate } from "@/util";
// import { useContext } from "react";
// import { TaskContext } from "@/context/TaskContext";

// const TaskRow = ({ task }) => {
//   const { completeTask } = useContext(TaskContext);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center py-2 pr-2 relative group border-b">
//       <div className="col-span-1 grid items-center justify-center relative cursor-pointer" >
//         {task.completed && (
//           <Image
//             src="/completed.svg"
//             alt="Completed"
//             width={24}
//             height={24}
//             className="status-icon"
//           />
//         )}
//         {!task.completed && (
//           <Image
//             src="/in-progress.svg"
//             alt="In Progress"
//             width={24}
//             height={24}
//             className="status-icon"
//           />
//         )}
//         <div className="absolute top-full w-auto mt-2 opacity-0 status-tooltip group-hover:opacity-100 transition-opacity">
//           <div className="bg-yellow-100 w-24 flex justify-center text-yellow-500 text-sm px-2 py-2 rounded-full shadow-md">
//             {task.completed ? 'Completed' : 'In-Progress'}
//           </div>
//         </div>
//       </div>
//       <div className="col-span-5">
//         <p>{task.todo}</p>
//         {!task.completed && (
//           <span className="text-pink-500 cursor-pointer" onClick={() => completeTask(task.id)}>
//             Mark as Completed
//           </span>
//         )}
//       </div>
//       <div className="col-span-2">
//         <p>{task.createdBy}</p>
//       </div>
//       <div className="col-span-1">
//         <span className={`px-2 py-1 text-sm capitalize rounded-full ${task.priority === 'LOW' ? 'bg-blue-100 text-blue-700' : task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
//           {task.priority.toLowerCase()}
//         </span>
//       </div>
//       <div className="col-span-1">
//         <p>{formatDate(new Date(task.createdAt).toLocaleDateString())}</p>
//       </div>
//     </div>
//   );
// };

// export default TaskRow;





"use client"
import Image from 'next/image';
import { formatDate } from "@/util";
import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";

const TaskRow = ({ task }) => {
  const { completeTask } = useContext(TaskContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center py-2 pr-2 relative group border-b">
      <div className="col-span-1 grid items-center justify-center relative cursor-pointer">
        <div className="status-container">
          {task.completed && (
            <Image
              src="/completed.svg"
              alt="Completed"
              width={24}
              height={24}
              className="status-icon"
            />
          )}
          {!task.completed && (
            <Image
              src="/in-progress.svg"
              alt="In Progress"
              width={24}
              height={24}
              className="status-icon"
            />
          )}
          <div className="absolute -left-4 top-full w-auto mt-2 opacity-0 status-tooltip transition-opacity z-1000">
            <div className="bg-yellow-100 w-24 flex justify-center text-yellow-500 text-sm px-2 py-2 rounded-full shadow-md">
              {task.completed ? 'Completed' : 'In-Progress'}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <p>{task.todo}</p>
        {!task.completed && (
          <span className="text-pink-500 cursor-pointer" onClick={() => completeTask(task.id)}>
            Mark as Completed
          </span>
        )}
      </div>
      <div className="col-span-2">
        <p>{task.createdBy}</p>
      </div>
      <div className="col-span-1">
        <span className={`px-2 py-1 text-sm capitalize rounded-full ${task.priority === 'LOW' ? 'bg-blue-100 text-blue-700' : task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
          {task.priority.toLowerCase()}
        </span>
      </div>
      <div className="col-span-1">
        <p>{formatDate(new Date(task.createdAt).toLocaleDateString())}</p>
      </div>
    </div>
  );
};

export default TaskRow;
