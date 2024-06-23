// "use client";
// import React, { useState, useEffect, ReactNode } from 'react';
// import { TaskContext } from './TaskContext';

// interface TaskProviderProps {
//   children: ReactNode;
// }

// interface Task {
//   id: string;
//   name: string;
//   priority: 'LOW' | 'MEDIUM' | 'HIGH';
//   todo: string;
//   completed: boolean;
//   createdAt: string;
// }

// const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [status, setStatus] = useState<string>('idle');
//   const [error, setError] = useState<Error | null>(null);
//   const [lowCount, setLowCount] = useState<number>(0);
//   const [mediumCount, setMediumCount] = useState<number>(0);
//   const [highCount, setHighCount] = useState<number>(0);

//   useEffect(() => {
//     const countPriorities = () => {
//       let low = 0;
//       let medium = 0;
//       let high = 0;

//       tasks.forEach(task => {
//         if (task.priority === 'LOW') low++;
//         else if (task.priority === 'MEDIUM') medium++;
//         else if (task.priority === 'HIGH') high++;
//       });

//       setLowCount(low);
//       setMediumCount(medium);
//       setHighCount(high);
//     };

//     countPriorities();
//   }, [tasks]);

//   const completeTask = (taskId: string) => {
//     setTasks(tasks.map(task => 
//       task.id === taskId ? { ...task, completed: true } : task
//     ));
//   };

//   return (
//     <TaskContext.Provider value={{ tasks, setTasks, status, setStatus, error, setError, completeTask, lowCount, mediumCount, highCount }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// export default TaskProvider;



"use client";
import React, { useState, useEffect, ReactNode } from 'react';
import { TaskContext } from './TaskContext';

interface TaskProviderProps {
  children: ReactNode;
}

interface Task {
  id: string;
  name: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  todo: string;
  completed: boolean;
  createdAt: string;
  createdBy:string;
}

const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [status, setStatus] = useState<string>('idle');
  const [error, setError] = useState<string | null>(null);
  const [lowCount, setLowCount] = useState<number>(0);
  const [mediumCount, setMediumCount] = useState<number>(0);
  const [highCount, setHighCount] = useState<number>(0);

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

  const completeTask = (taskId: string) => {
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
