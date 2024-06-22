
"use client"

import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import Pagination from './Pagination';
import Task from './Task';

const TaskList = () => {
  const { tasks, status, error, completeTask } = useContext(TaskContext);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  const offset = currentPage * itemsPerPage;
  const currentTasks = tasks.slice(offset, offset + itemsPerPage);

  return (
    <div className="p-4">
      {currentTasks.map(task => (
        <Task key={task.id} task={task} onComplete={completeTask} />
      ))}
      <Pagination
        pageCount={Math.ceil(tasks.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default TaskList;
