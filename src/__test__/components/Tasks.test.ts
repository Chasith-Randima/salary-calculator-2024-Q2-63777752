// __tests__/Tasks.test.tsx

import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import axios from 'axios';
import Tasks from '@/components/Tasks';
import { TaskContext } from '@/context/TaskContext';

// Mocking axios
jest.mock('axios');

// Mock context values
const mockContext = {
  tasks: [],
  setTasks: jest.fn(),
  status: 'idle',
  setStatus: jest.fn(),
  error: null,
  setError: jest.fn(),
};

describe('Tasks Component', () => {
  beforeEach(() => {
    render(
      React.createElement(Tasks)
    );
  });

  it('renders loading modal on initial load', async () => {
    expect(screen.getByText('Loading tasks...')).toBeDefined();

    // Wait for API call to resolve
    await waitFor(() => {
      expect(mockContext.setTasks).toHaveBeenCalled();
      expect(mockContext.setStatus).toHaveBeenCalledWith('succeeded');
      expect(screen.queryByText('Loading tasks...')).not.toBeDefined();
    });
  });

  it('renders error modal on API failure', async () => {
    // Mock API call to throw an error
    const errorMessage = 'Failed to fetch tasks';
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));

    // Re-render component to trigger useEffect
    render(
      React.createElement(Tasks)
    );

    expect(screen.getByText('Loading tasks...')).toBeDefined();

    // Wait for API call to reject
    await waitFor(() => {
      expect(mockContext.setError).toHaveBeenCalledWith(errorMessage);
      expect(mockContext.setStatus).toHaveBeenCalledWith('failed');
      expect(screen.getByText(`Failed to load tasks: ${errorMessage}`)).toBeDefined();
    });
  });

  it('displays tasks correctly after successful API call', async () => {
    // Mock API response
    const mockTasks = [
      {
        id: '1',
        name: 'Task 1',
        priority: 'LOW',
        todo: 'Do something',
        completed: false,
        createdAt: '2023-06-24T12:00:00Z',
        createdBy: 'John Doe',
      },
      // Add more mock tasks as needed
    ];
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockTasks });

    // Re-render component to trigger useEffect
    render(
      React.createElement(Tasks)
    );

    // Wait for API call to resolve
    await waitFor(() => {
      // Check if tasks are rendered correctly
      expect(screen.getByText('Task 1')).toBeDefined();
      expect(screen.getByText('John Doe')).toBeDefined();
      expect(screen.getByText('low')).toBeDefined(); // Assuming priority is displayed correctly
      expect(screen.getByText('6/24/2023')).toBeDefined(); // Assuming formatted date is displayed correctly
    });
  });

  it('handles page click and updates current page', async () => {
    // Mock API response
    const mockTasks = Array.from({ length: 20 }, (_, index) => ({
      id: `${index + 1}`,
      name: `Task ${index + 1}`,
      priority: 'LOW',
      todo: `Do something ${index + 1}`,
      completed: false,
      createdAt: '2023-06-24T12:00:00Z',
      createdBy: 'John Doe',
    }));
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockTasks });

    // Re-render component to trigger useEffect
    render(
      React.createElement(Tasks)
    );

    // Wait for API call to resolve
    await waitFor(() => {
      // Pagination should initially render
      expect(screen.getByText('Task 1')).toBeDefined();

      // Simulate page click
      fireEvent.click(screen.getByText('2'));

      // Check if page click updates currentPage state
      expect(mockContext.setStatus).toHaveBeenCalledTimes(2); // One for initial load, one for page change
      expect(mockContext.setStatus).toHaveBeenCalledWith('succeeded'); // Check status after page click
    });
  });

  it('closes modal on successful API call', async () => {
    // Mock API response
    const mockTasks = [
      {
        id: '1',
        name: 'Task 1',
        priority: 'LOW',
        todo: 'Do something',
        completed: false,
        createdAt: '2023-06-24T12:00:00Z',
        createdBy: 'John Doe',
      },
    ];
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockTasks });

    // Re-render component to trigger useEffect
    render(
      React.createElement(Tasks)
    );

    // Wait for API call to resolve
    await waitFor(() => {
      // Modal should disappear after successful API call
      expect(screen.queryByText('Loading tasks...')).not.toBeDefined();
    });
  });

  it('resets error state and closes modal on modal close', async () => {
    // Mock API call to throw an error
    const errorMessage = 'Failed to fetch tasks';
    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValue(new Error(errorMessage));

    // Re-render component to trigger useEffect
    render(
      React.createElement(Tasks)
    );

    // Wait for API call to reject
    await waitFor(() => {
      // Modal should display error message
      expect(screen.getByText(`Failed to load tasks: ${errorMessage}`)).toBeDefined();

      // Simulate modal close
      fireEvent.click(screen.getByText('Close'));

      // Check if error state is reset
      expect(mockContext.setError).toHaveBeenCalledWith(null);
      expect(mockContext.setStatus).toHaveBeenCalledWith('idle'); // Status should reset to idle after modal close
    });
  });
});
