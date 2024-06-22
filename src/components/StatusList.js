import React from 'react';
import Image from 'next/image';

const statuses = [
  { id: 1, name: 'Franklin', status: 'completed' },
  { id: 2, name: 'Intern', status: 'completed' },
  { id: 3, name: 'Contract', status: 'in-progress' },
  { id: 4, name: 'David', status: 'completed' },
  { id: 5, name: 'Contract', status: 'in-progress' },
  { id: 6, name: 'Franklin', status: 'completed' },
  { id: 7, name: 'Intern', status: 'completed' },
  { id: 8, name: 'Ze hin', status: 'completed' },
];

const StatusList = () => {
  return (
    <div className="flex flex-col p-4">
      {statuses.map((item) => (
        <div key={item.id} className="flex items-center mb-2 relative group">
          <Image
            src={`/${item.status === 'completed' ? 'completed' : 'in-progress'}.svg`}
            alt={item.status}
            width={24}
            height={24}
          />
          <span className="ml-2">{item.name}</span>
          <span className="ml-2 text-pink-500">Mark as {item.status === 'completed' ? 'Incomplete' : 'Completed'}</span>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-yellow-100 text-yellow-500 text-sm px-2 py-2 rounded-full shadow-md">
              {item.status === 'completed' ? 'Completed' : 'In-Progress'}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusList;


// import React from 'react';
// import Image from 'next/image';

// const statuses = [
//   { id: 1, name: 'Franklin', status: 'completed' },
//   { id: 2, name: 'Intern', status: 'completed' },
//   { id: 3, name: 'Contract', status: 'in-progress' },
//   { id: 4, name: 'David', status: 'completed' },
//   { id: 5, name: 'Contract', status: 'in-progress' },
//   { id: 6, name: 'Franklin', status: 'completed' },
//   { id: 7, name: 'Intern', status: 'completed' },
//   { id: 8, name: 'Ze hin', status: 'completed' },
// ];

// const StatusList = () => {
//   return (
//     <div className="flex flex-col p-4">
//       {statuses.map((item) => (
//         <div key={item.id} className="flex items-center mb-4 relative group">
//           <Image
//             src={`/${item.status === 'completed' ? 'completed' : 'in-progress'}.svg`}
//             alt={item.status}
//             width={24}
//             height={24}
//           />
//           <span className="ml-2">{item.name}</span>
//           <span className="ml-2 text-pink-500 cursor-pointer">
//             Mark as {item.status === 'completed' ? 'Incomplete' : 'Completed'}
//           </span>
//           <div className="absolute bottom-1/10 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
//             <div className="bg-yellow-100 text-yellow-500 text-sm px-4 py-2 rounded-full shadow-md">
//               {item.status === 'completed' ? 'Completed' : 'In-Progress'}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatusList;
