// __tests__/Sidebar.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Sidebar Component', () => {
  const mockUseRouter = useRouter as jest.Mock;
  const mockPush = jest.fn();

  beforeEach(() => {
    mockUseRouter.mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(
      React.createElement(Sidebar)
    );
    expect(screen.getByLabelText('Sidebar')).toBeDefined();
  });

  it('displays the company name', () => {
    render(
      React.createElement(Sidebar)
    );
    expect(screen.getByText('Acmy Solutions')).toBeDefined();
  });

  it('triggers router push when company name is clicked', () => {
    render(
      React.createElement(Sidebar)
    );
    fireEvent.click(screen.getByText('Acmy Solutions'));
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('triggers router push when dashboard link is clicked', () => {
    render(
      React.createElement(Sidebar)
    );
    fireEvent.click(screen.getByText('Dashboard'));
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('renders children content', () => {
    render(
      React.createElement(Sidebar)
    );
    expect(screen.getByText('Test Content')).toBeDefined();
  });
});
