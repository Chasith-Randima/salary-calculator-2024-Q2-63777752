"use client";
import Image from 'next/image';
import { formatDate } from "@/util/index";
import { useContext } from "react";
import { TaskContext } from "@/context/TaskContext";

interface TaskRowProps {
  task: {
    id: string;
    name: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
    todo: string;
    completed: boolean;
    createdAt: string;
    createdBy: string;
  };
}

const TaskRow: React.FC<TaskRowProps> = ({ task }) => {
  const { completeTask } = useContext(TaskContext)!;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 justify-center gap-4 items-center py-2 pr-2 relative group border-b">
      <div className="col-span-1 flex items-center justify-center relative cursor-pointer">
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
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 status-tooltip group-hover:opacity-100 transition-opacity z-50">
            <div className="bg-yellow-100 w-24 flex justify-center text-yellow-500 text-sm px-2 py-2 rounded-full shadow-md">
              {task.completed ? 'Completed' : 'In-Progress'}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-5 md:col-span-2 lg:col-span-5">
        <p>{task.todo}</p>
        {!task.completed && (
          <span className="text-pink-500 cursor-pointer" onClick={() => completeTask(task.id)}>
            Mark as Completed
          </span>
        )}
      </div>
      <div className=" md:col-span-2 lg:col-span-2">
        <p>{task.createdBy}</p>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <span className={`px-2 py-1 text-sm capitalize rounded-full ${task.priority === 'LOW' ? 'bg-blue-100 text-blue-700' : task.priority === 'MEDIUM' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
          {task.priority.toLowerCase()}
        </span>
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <p>{formatDate(new Date(task.createdAt).toLocaleDateString())}</p>
      </div>
    </div>
  );
};

export default TaskRow;
