// // TaskCard.js
// import React, { useContext } from 'react';
// import Image from 'next/image';
// import { formatDate } from "@/util";
// import { TaskContext } from "@/context/TaskContext";

// const TaskCard = ({ task }) => {
//   const { completeTask } = useContext(TaskContext);

//   const statusMessage = task.completed ? 'Completed' : 'In Progress';

//   return (
//     <div className="bg-white shadow rounded-md p-4 mb-4">
//       <div className="flex items-center justify-center mb-4">
//         <div className="status-container relative cursor-pointer">
//           <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 status-tooltip group-hover:opacity-100 transition-opacity z-50">
//             <div className="bg-yellow-100 w-24 flex justify-center text-yellow-500 text-sm px-2 py-2 rounded-full shadow-md">
//               {statusMessage}
//             </div>
//           </div>
//           <Image
//             src={task.completed ? "/completed.svg" : "/in-progress.svg"}
//             alt={statusMessage}
//             width={24}
//             height={24}
//             className="status-icon"
//           />
//         </div>
//         <div className="ml-2">
//           <p className="font-semibold">{task.todo}</p>
//           <p className="text-gray-500 text-sm">{task.createdBy}</p>
//         </div>
//       </div>
//       <div className="flex justify-between text-sm text-gray-500">
//         <div>
//           <span className={`px-2 py-1 capitalize rounded-full ${task.priority === 'LOW' ? 'bg-blue-100 text-blue-700' : task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
//             {task.priority.toLowerCase()}
//           </span>
//         </div>
//         <div>
//           <p>{formatDate(new Date(task.createdAt).toLocaleDateString())}</p>
//         </div>
//       </div>
//       {!task.completed && (
//         <div className="text-pink-500 cursor-pointer mt-2" onClick={() => completeTask(task.id)}>
//           Mark as Completed
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskCard;


// TaskCard.js
import React, { useContext } from 'react';
import Image from 'next/image';
import { formatDate } from "@/util";
import { TaskContext } from "@/context/TaskContext";

const TaskCard = ({ task }) => {
  const { completeTask } = useContext(TaskContext);

  const statusMessage = task.completed ? 'Completed' : 'In Progress';

  return (
    <div className="bg-white shadow rounded-md p-4 mb-4">
      <div className="flex items-center justify-center mb-4">
        <div className="status-container relative cursor-pointer">
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 status-tooltip group-hover:opacity-100 transition-opacity z-50">
            <div className="bg-yellow-100 w-24 flex justify-center text-yellow-500 text-sm px-2 py-2 rounded-full shadow-md">
              {statusMessage}
            </div>
          </div>
          <Image
            src={task.completed ? "/completed.svg" : "/in-progress.svg"}
            alt={statusMessage}
            width={24}
            height={24}
            className="status-icon"
          />
        </div>
        <div className="ml-2 flex-grow">
          <p className="font-semibold">{task.todo}</p>
          <p className="text-gray-500 text-sm">{task.createdBy}</p>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Status:</span>
          <span className="capitalize">{statusMessage}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold mr-2">Priority:</span>
          <span className={`px-2 py-1 capitalize rounded-full ${task.priority === 'LOW' ? 'bg-blue-100 text-blue-700' : task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
            {task.priority.toLowerCase()}
          </span>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Date:</span>
          <span>{formatDate(new Date(task.createdAt).toLocaleDateString())}</span>
        </div>
        {!task.completed && (
          <div className="text-pink-500 cursor-pointer" onClick={() => completeTask(task.id)}>
            Mark as Completed
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;

