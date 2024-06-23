// __tests__/Pagination.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Pagination from '@/components/Pagination';
import ReactPaginate from 'react-paginate';

// jest.mock('react-paginate', () => {
//   return jest.fn((props) => (
//     <div data-testid="react-paginate">
//       <button onClick={() => props.onPageChange({ selected: 1 })}>Next</button>
//     </div>
//   ));
// });

describe('Pagination Component', () => {
  const mockOnPageChange = jest.fn();

  beforeEach(() => {
    mockOnPageChange.mockClear();
  });

  it('renders without crashing', () => {
    render(
      React.createElement(Pagination, {
        pageCount: 5,
        onPageChange: mockOnPageChange,
      })
    );
    expect(screen.getByTestId('react-paginate')).toBeDefined();
  });

  it('displays the correct number of pages', () => {
    render(
      React.createElement(Pagination, {
        pageCount: 5,
        onPageChange: mockOnPageChange,
      })
    );
    expect(ReactPaginate).toHaveBeenCalledWith(
      expect.objectContaining({
        pageCount: 5,
      }),
      {}
    );
  });

  it('calls onPageChange when page is changed', () => {
    render(
      React.createElement(Pagination, {
        pageCount: 5,
        onPageChange: mockOnPageChange,
      })
    );
    fireEvent.click(screen.getByText('Next'));
    expect(mockOnPageChange).toHaveBeenCalledTimes(1);
    expect(mockOnPageChange).toHaveBeenCalledWith({ selected: 1 });
  });
});
