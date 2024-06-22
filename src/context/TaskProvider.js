// // // components/TaskProvider.js
// "use client"

// import React, { useState } from 'react';
// import { TaskContext } from './TaskContext';

// const TaskProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [status, setStatus] = useState('idle');
//   const [error, setError] = useState(null);

//   const completeTask = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, completed: true } : task
//     ));
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, setTasks, status, setStatus, error, setError, completeTask }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// export default TaskProvider;



// components/TaskProvider.js

















// "use client"

// import React, { useState } from 'react';
// import { TaskContext } from './TaskContext';

// const TaskProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [status, setStatus] = useState('idle');
//   const [error, setError] = useState(null);

//   const completeTask = (taskId) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, completed: true } : task
//     ));
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, setTasks, status, setStatus, error, setError, completeTask }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// export default TaskProvider;



// components/TaskProvider.js

"use client"

import React, { useState, useEffect } from 'react';
import { TaskContext } from './TaskContext';

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [lowCount, setLowCount] = useState(0);
  const [mediumCount, setMediumCount] = useState(0);
  const [highCount, setHighCount] = useState(0);

  useEffect(() => {
    const countPriorities = () => {
      let low = 0;
      let medium = 0;
      let high = 0;

      tasks.forEach(task => {
        if (task.priority === 'LOW') low++;
        else if (task.priority === 'MEDIUM') medium++;
        else if (task.priority === 'HIGH') high++;
      });

      setLowCount(low);
      setMediumCount(medium);
      setHighCount(high);
    };

    countPriorities();
  }, [tasks]);

  const completeTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, status, setStatus, error, setError, completeTask, lowCount, mediumCount, highCount }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
