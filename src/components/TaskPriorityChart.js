// "use client"

// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const TaskPriorityChart = () => {
//   const data = {
//     labels: [''],
//     datasets: [
//       {
//         label: 'Low',
//         data: [80],
//         backgroundColor: '#3b82f6',
//       },
//       {
//         label: 'High',
//         data: [60],
//         backgroundColor: '#ef4444',
//       },
//       {
//         label: 'Medium',
//         data: [40],
//         backgroundColor: '#f59e0b',
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         display: false,
//       },
//       y: {
//         display: false,
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="p-4 bg-white border border-gray-300 rounded-md">
//       <h2 className="text-lg font-semibold mb-4">Tasks Priorities</h2>
//       <Bar data={data} options={options} />
//       <div className="mt-4 flex justify-center space-x-4">
//         <div className="flex items-center">
//           <span className="w-3 h-3 inline-block bg-red-500 rounded-full"></span>
//           <span className="ml-2">High</span>
//         </div>
//         <div className="flex items-center">
//           <span className="w-3 h-3 inline-block bg-yellow-500 rounded-full"></span>
//           <span className="ml-2">Medium</span>
//         </div>
//         <div className="flex items-center">
//           <span className="w-3 h-3 inline-block bg-blue-500 rounded-full"></span>
//           <span className="ml-2">Low</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskPriorityChart;




// "use client"

// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const TaskPriorityChart = () => {
//   const data = {
//     labels: [''],
//     datasets: [
//       {
//         label: 'Low',
//         data: [80],
//         backgroundColor: '#3b82f6',
//         borderRadius: 10,
//       },
//       {
//         label: 'High',
//         data: [60],
//         backgroundColor: '#ef4444',
//         borderRadius: 10,
//       },
//       {
//         label: 'Medium',
//         data: [40],
//         backgroundColor: '#f59e0b',
//         borderRadius: 10,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       title: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         display: false,
//       },
//       y: {
//         display: false,
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="p-4 bg-white border border-gray-300 rounded-md">
//       <h2 className="text-lg font-semibold mb-4">Tasks Priorities</h2>
//       <Bar data={data} options={options} />
//       <div className="mt-4 flex justify-center space-x-4">
//         <div className="flex items-center">
//           <span className="w-3 h-3 inline-block bg-red-500 rounded-full"></span>
//           <span className="ml-2">High</span>
//         </div>
//         <div className="flex items-center">
//           <span className="w-3 h-3 inline-block bg-yellow-500 rounded-full"></span>
//           <span className="ml-2">Medium</span>
//         </div>
//         <div className="flex items-center">
//           <span className="w-3 h-3 inline-block bg-blue-500 rounded-full"></span>
//           <span className="ml-2">Low</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskPriorityChart;






















// ================================================






"use client"



import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useContext } from 'react';
import { TaskContext } from '@/context/TaskContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TaskPriorityChart = () => {
  const { lowCount,highCount,mediumCount } = useContext(TaskContext);
  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Low',
        data: [lowCount ]|| [80],
        backgroundColor: '#3b82f6',
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: 'High',
        data: [highCount] || [60],
        backgroundColor: '#ef4444',
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: 'Medium',
        data: [mediumCount] || [40],
        backgroundColor: '#f59e0b',
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 mb-2 bg-white border border-gray-300 rounded-md">
      <h2 className="text-lg font-semibold border-b pb-4 mb-4">Tasks Priorities</h2>
      <Bar data={data} options={options} />
      <div className="mt-4 flex justify-center space-x-4">
        <div className="flex items-center">
          <span className="w-3 h-3 inline-block bg-red-500 rounded-full"></span>
          <span className="ml-2">High</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 inline-block bg-yellow-500 rounded-full"></span>
          <span className="ml-2">Medium</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 inline-block bg-blue-500 rounded-full"></span>
          <span className="ml-2">Low</span>
        </div>
      </div>
    </div>
  );
};

export default TaskPriorityChart;
