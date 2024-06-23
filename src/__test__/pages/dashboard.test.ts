// __tests__/Home.test.tsx

import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '@/app/page';
import WelcomeMessage from '@/components/WelcomeMessage';
import Tasks from '@/components/Tasks';
import TaskPriorityChart from '@/components/TaskPriorityChart';
import ActivityFeed from '@/components/ActivityFeed';

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(React.createElement(Home));
  });

  it('renders WelcomeMessage component', () => {
    render(React.createElement(Home));
    expect(screen.getByText(/Welcome/i)).toBeDefined();
  });

  it('renders Tasks component', () => {
    render(React.createElement(Home));
    expect(screen.getByRole('heading', { name: /Tasks/i })).toBeDefined();
  });

  it('renders TaskPriorityChart component', () => {
    render(React.createElement(Home));
    expect(screen.getByRole('heading', { name: /Task Priorities/i })).toBeDefined();
  });

  it('renders ActivityFeed component', () => {
    render(React.createElement(Home));
    expect(screen.getByText(/Activity Feed/i)).toBeDefined();
  });
});

export {};
