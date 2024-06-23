// "use client"

// import React, { useContext } from 'react';
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
// import { TaskContext } from '@/context/TaskContext';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const TaskPriorityChart: React.FC = () => {
//   const { lowCount,mediumCount ,highCount } = useContext(TaskContext);

//   const data = {
//     labels: [''],
//     datasets: [
//       {
//         label: 'Low',
//         data: [lowCount],
//         backgroundColor: '#3b82f6',
//         borderRadius: 10,
//         borderSkipped: false,
//       },
//       {
//         label: 'High',
//         data: [highCount],
//         backgroundColor: '#ef4444',
//         borderRadius: 10,
//         borderSkipped: false,
//       },
//       {
//         label: 'Medium',
//         data: [mediumCount],
//         backgroundColor: '#f59e0b',
//         borderRadius: 10,
//         borderSkipped: false,
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
//     <div className="p-4 mb-2 bg-white border border-gray-300 rounded-md">
//       <h2 className="text-lg font-semibold border-b pb-4 mb-4">Tasks Priorities</h2>
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


"use client";

import React, { useContext } from 'react';
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
import { TaskContext } from '@/context/TaskContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TaskPriorityChart: React.FC = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('TaskContext must be used within a TaskProvider');
  }

  const { lowCount = 80, mediumCount = 60, highCount = 40 } = context;

  const data = {
    labels: [''],
    datasets: [
      {
        label: 'Low',
        data: [lowCount],
        backgroundColor: '#3b82f6',
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: 'High',
        data: [highCount],
        backgroundColor: '#ef4444',
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: 'Medium',
        data: [mediumCount],
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

