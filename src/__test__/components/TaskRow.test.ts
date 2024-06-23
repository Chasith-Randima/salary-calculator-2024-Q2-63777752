// __tests__/TaskRow.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import TaskRow from '@/components/TaskRow';
import { TaskContext } from '@/context/TaskContext';

// Mocking completeTask function
const mockCompleteTask = jest.fn();

const mockTask = {
  id: '1',
  name: 'Sample Task',
  priority: 'LOW',
  todo: 'Sample todo item',
  completed: false,
  createdAt: '2023-06-24T12:00:00Z',
  createdBy: 'John Doe',
};

const mockContext = {
  completeTask: mockCompleteTask,
};

describe('TaskRow Component', () => {
  beforeEach(() => {
    render(
      React.createElement(TaskRow)
    );
  });

  it('renders without crashing', () => {
    expect(screen.getByText('Sample todo item')).toBeDefined();
    expect(screen.getByText('John Doe')).toBeDefined();
    expect(screen.getByText('low')).toBeDefined(); // Check lowercase priority label
    expect(screen.getByText('6/24/2023')).toBeDefined(); // Assuming formatDate returns '6/24/2023'
  });

  it('displays correct status icon and tooltip', () => {
    const statusIcon = screen.getByAltText('In Progress');
    expect(statusIcon).toBeDefined();

    fireEvent.mouseEnter(statusIcon);

    const tooltip = screen.getByText('In-Progress');
    expect(tooltip).toBeDefined();

    fireEvent.mouseLeave(statusIcon);

    expect(screen.queryByText('In-Progress')).not.toBeDefined();
  });

  it('calls completeTask function when "Mark as Completed" is clicked', () => {
    const markCompletedLink = screen.getByText('Mark as Completed');
    fireEvent.click(markCompletedLink);

    expect(mockCompleteTask).toHaveBeenCalledWith('1');
  });
});
