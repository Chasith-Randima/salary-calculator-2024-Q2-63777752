// __tests__/WelcomeMessage.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import WelcomeMessage from '@/components/WelcomeMessage';

describe('WelcomeMessage Component', () => {
  it('renders the component initially', () => {
    render(React.createElement(WelcomeMessage));
    
    // Check if the component renders initially
    expect(screen.getByText('Welcome back, John Doe')).toBeDefined();
    expect(screen.getByText('The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.')).toBeDefined();
    expect(screen.getByText('Look here for more information')).toBeDefined();
  });

  it('hides the component on close button click', () => {
    render(React.createElement(WelcomeMessage));
    
    // Click on the close button
    fireEvent.click(screen.getByText('×'));
    
    // Check if the component is hidden
    expect(screen.queryByText('Welcome back, John Doe')).not.toBeDefined();
    expect(screen.queryByText('The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.')).not.toBeDefined();
    expect(screen.queryByText('Look here for more information')).not.toBeDefined();
  });

  it('remains hidden after closing and does not render', () => {
    render(React.createElement(WelcomeMessage));
    
    // Click on the close button
    fireEvent.click(screen.getByText('×'));
    
    // Check if the component is hidden
    expect(screen.queryByText('Welcome back, John Doe')).not.toBeDefined();
    expect(screen.queryByText('The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.')).not.toBeDefined();
    expect(screen.queryByText('Look here for more information')).not.toBeDefined();
  });
});
