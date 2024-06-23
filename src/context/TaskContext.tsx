// "use client";
// import { createContext } from 'react';

// interface Task {
//   id: string;
//   name: string;
//   priority: 'LOW' | 'MEDIUM' | 'HIGH';
//   todo: string;
//   completed: boolean;
//   createdAt: string;
// }

// interface TaskContextType {
//   tasks: Task[];
//   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
//   status: string;
//   setStatus: React.Dispatch<React.SetStateAction<string>>;
//   error: Error | null;
//   setError: React.Dispatch<React.SetStateAction<Error | null>>;
//   completeTask: (taskId: string) => void;
//   lowCount: number;
//   mediumCount: number;
//   highCount: number;
// }

// export const TaskContext = createContext<TaskContextType | undefined>(undefined);



"use client";
import { createContext } from 'react';

interface Task {
  id: string;
  name: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  todo: string;
  completed: boolean;
  createdAt: string;
  createdBy:string;
}

interface TaskContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  completeTask: (taskId: string) => void;
  lowCount?: number;
  mediumCount?: number;
  highCount?: number;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);
