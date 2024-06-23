// __tests__/TaskPriorityChart.test.tsx

import { render, screen } from '@testing-library/react';
import React from 'react';
import TaskPriorityChart from '@/components/TaskPriorityChart';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { TaskContext } from '@/context/TaskContext';

// Mocking ChartJS registration
jest.mock('chart.js', () => ({
  Chart: jest.fn(),
  CategoryScale: jest.fn(),
  LinearScale: jest.fn(),
  BarElement: jest.fn(),
  Title: jest.fn(),
  Tooltip: jest.fn(),
  Legend: jest.fn(),
}));

const mockContext = {
  lowCount: 80,
  mediumCount: 60,
  highCount: 40,
};

describe('TaskPriorityChart Component', () => {
  beforeEach(() => {
    render(React.createElement(TaskPriorityChart))
  });

  it('renders without crashing', () => {
    expect(screen.getByText('Tasks Priorities')).toBeDefined();
    expect(screen.getByText('High')).toBeDefined();
    expect(screen.getByText('Medium')).toBeDefined();
    expect(screen.getByText('Low')).toBeDefined();
  });

  it('renders the Bar chart with correct data and options', () => {
    expect(Chart).toHaveBeenCalled();
    expect(Chart).toHaveBeenCalledWith(expect.anything(), {
      type: 'bar',
      data: {
        labels: [''],
        datasets: [
          {
            label: 'Low',
            data: [80],
            backgroundColor: '#3b82f6',
            borderRadius: 10,
            borderSkipped: false,
          },
          {
            label: 'High',
            data: [40],
            backgroundColor: '#ef4444',
            borderRadius: 10,
            borderSkipped: false,
          },
          {
            label: 'Medium',
            data: [60],
            backgroundColor: '#f59e0b',
            borderRadius: 10,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: { display: false },
        },
        scales: {
          x: { display: false },
          y: { display: false, beginAtZero: true },
        },
      },
    });
  });

  it('displays legend items correctly', () => {
    expect(screen.getByText('High')).toBeDefined();
    expect(screen.getByText('Medium')).toBeDefined();
    expect(screen.getByText('Low')).toBeDefined();
  });
});
