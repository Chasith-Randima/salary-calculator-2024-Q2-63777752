// __tests__/Navbar.test.tsx

import { render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from '@/components/NavBar';

describe('Navbar Component', () => {
  it('renders without crashing', () => {
    render(React.createElement(Navbar));
  });

  it('displays the company name', () => {
    render(React.createElement(Navbar));
    expect(screen.getByText('Acmy Solutions')).toBeDefined();
  });

  it('renders the notifications icon', () => {
    render(React.createElement(Navbar));
    expect(screen.getByAltText('Notifications')).toBeDefined();
  });

  it('renders the profile image', () => {
    render(React.createElement(Navbar));
    expect(screen.getByAltText('Profile')).toBeDefined();
  });

  it('renders the dropdown arrow', () => {
    render(React.createElement(Navbar));
    expect(screen.getByAltText('Dropdown')).toBeDefined();
  });
});

export {};
