import React from 'react';

const Task = ({ task, onComplete }) => {
  return (
    <div className="border p-4 mb-2 flex justify-between items-center">
      <div>
        <h3 className="font-bold">{task.todo}</h3>
        <p className="text-sm">Created by: {task.name}</p>
        <p className="text-sm">Priority: {task.priority}</p>
      </div>
      <div>
        {task.completed ? (
          <span className="text-green-500">Completed</span>
        ) : (
          <button
            onClick={() => onComplete(task.id)}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            Mark as done
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
