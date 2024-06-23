import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Pagination from './Pagination';
import { TaskContext } from '@/context/TaskContext';
import TaskRow from './TaskRow';
import Modal from './Modal';
import TaskCard from './TaskCard';
import { isMobile } from 'react-device-detect';

interface PageClickData {
  selected: number;
}

const Tasks: React.FC = () => {
  const { tasks, setTasks, status, setStatus, error, setError } = useContext(TaskContext)!;
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const tasksPerPage = 8; // Number of tasks to show per page

  useEffect(() => {
    const fetchTasks = async () => {
      setStatus('loading');
      setModalMessage('Loading tasks...');
      setIsModalVisible(true);

      try {
        const response = await axios.get('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        setTasks(response.data);
        setStatus('succeeded');
        setIsModalVisible(false);
      } catch (err:any) {
        setError(err.message);
        setStatus('failed');
        setModalMessage(`Failed to load tasks: ${err.message}`);
        setIsModalVisible(true);
      }
    };

    fetchTasks();
  }, [setTasks, setStatus, setError]);

  const handlePageClick = (data: PageClickData) => {
    setCurrentPage(data.selected);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    if (status === 'failed') {
      setError(null);
      setStatus('idle');
    }
  };

  const startIndex = currentPage * tasksPerPage;
  const endIndex = startIndex + tasksPerPage;
  const currentTasks = tasks.slice(startIndex, endIndex);
  const pageCount = Math.ceil(tasks.length / tasksPerPage);

  return (
    <div className="bg-white shadow rounded">
      <div className="border-b p-4 pb-4">
        <h2 className="text-lg font-semibold">Tasks</h2>
      </div>
      <div className="hidden md:grid  md:grid-cols-2 lg:grid-cols-10 justify-center gap-4 items-center p-4 bg-gray-100 relative group border-b">
        <div className="col-span-1 grid">
          <h2>Status</h2>
        </div>
        <div className="col-span-5 grid">
          <h2>Task Name</h2>
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <h2>Created By</h2>
        </div>
        <div className="col-span-1 grid">
          <h2>Priority</h2>
        </div>
        <div className="col-span-1 grid">
          <h2>Date</h2>
        </div>
      </div>
      <div>
        {currentTasks.map((task, index) => {
          if (isMobile) {
            return <TaskCard key={index} task={task} />;
          } else {
            return <TaskRow key={index} task={task} />;
          }
        })}
        <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
      </div>
      <Modal message={modalMessage} isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Tasks;
