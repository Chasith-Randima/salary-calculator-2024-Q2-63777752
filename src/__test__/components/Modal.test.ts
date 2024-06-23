// __tests__/Modal.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Modal from '@/components/Modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it('renders without crashing when visible', () => {
    render(
      React.createElement(Modal, {
        message: 'Test Message',
        isVisible: true,
        onClose: mockOnClose,
      })
    );
  });

  it('does not render when not visible', () => {
    render(
      React.createElement(Modal, {
        message: 'Test Message',
        isVisible: false,
        onClose: mockOnClose,
      })
    );
    expect(screen.queryByText('Test Message')).toBeNull();
  });

  it('displays the correct message', () => {
    render(
      React.createElement(Modal, {
        message: 'Test Message',
        isVisible: true,
        onClose: mockOnClose,
      })
    );
    expect(screen.getByText('Test Message')).toBeDefined();
  });

  it('calls onClose when close button is clicked', () => {
    render(
      React.createElement(Modal, {
        message: 'Test Message',
        isVisible: true,
        onClose: mockOnClose,
      })
    );
    fireEvent.click(screen.getByText('Close'));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when close icon is clicked', () => {
    render(
      React.createElement(Modal, {
        message: 'Test Message',
        isVisible: true,
        onClose: mockOnClose,
      })
    );
    fireEvent.click(screen.getByRole('button', { name: /Close modal/i }));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('has correct accessibility attributes', () => {
    render(
      React.createElement(Modal, {
        message: 'Test Message',
        isVisible: true,
        onClose: mockOnClose,
      })
    );
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveProperty('id', 'popup-modal');
    expect(modal).toHaveProperty('tabIndex', '-1');
  });
});

export {};
