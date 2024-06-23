// __tests__/TaskCard.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { TaskContext } from '@/context/TaskContext';
import TaskCard from '@/components/TaskCard';
import { formatDate } from '@/util/index';

jest.mock('@/util/index', () => ({
  formatDate: jest.fn((date) => date),
}));

const task = {
  id: '1',
  name: 'Task 1',
  priority: 'HIGH',
  todo: 'Complete the project',
  completed: false,
  createdAt: '2023-06-23T10:00:00Z',
  createdBy: 'John Doe',
};

const mockCompleteTask = jest.fn();

describe('TaskCard Component', () => {
  beforeEach(() => {
    render(
      React.createElement(TaskCard)
    );
  });

  it('renders without crashing', () => {
    expect(screen.getByText('Complete the project')).toBeDefined();
  });

  it('displays task details correctly', () => {
    expect(screen.getByText('Complete the project')).toBeDefined();
    expect(screen.getByText('John Doe')).toBeDefined();
    expect(screen.getByText('In Progress')).toBeDefined();
    expect(screen.getByText('high')).toBeDefined();
    expect(screen.getByText('2023-06-23')).toBeDefined(); // Assuming formatDate just returns the input date in this mock
  });

  it('calls completeTask when "Mark as Completed" is clicked', () => {
    fireEvent.click(screen.getByText('Mark as Completed'));
    expect(mockCompleteTask).toHaveBeenCalledWith('1');
  });

  it('does not show "Mark as Completed" when task is completed', () => {
    const completedTask = { ...task, completed: true };
    render(
      React.createElement(TaskCard)
    );
    expect(screen.queryByText('Mark as Completed')).not.toBeDefined();
  });

  it('displays completed status correctly', () => {
    const completedTask = { ...task, completed: true };
    render(
      React.createElement(TaskCard)
    );
    expect(screen.getByText('Completed')).toBeDefined();
  });
});
