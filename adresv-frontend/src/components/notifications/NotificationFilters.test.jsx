import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationFilters from './NotificationFilters';

describe('NotificationFilters Component', () => {
  const mockOnFilterChange = jest.fn();
  const filters = ["All", "System Updates", "Investment Activity", "Engagement Reminders"];

  beforeEach(() => {
    mockOnFilterChange.mockClear(); // Clear mock calls before each test
  });

  test('renders filter buttons for all specified categories', () => {
    render(<NotificationFilters onFilterChange={mockOnFilterChange} activeFilter="All" />);
    
    filters.forEach(filterName => {
      expect(screen.getByRole('button', { name: filterName })).toBeInTheDocument();
    });
  });

  test('calls onFilterChange prop with the correct category when a button is clicked', () => {
    render(<NotificationFilters onFilterChange={mockOnFilterChange} activeFilter="All" />);

    filters.forEach(filterName => {
      const button = screen.getByRole('button', { name: filterName });
      fireEvent.click(button);
      expect(mockOnFilterChange).toHaveBeenCalledWith(filterName);
    });
    
    // Ensure it was called for each filter
    expect(mockOnFilterChange).toHaveBeenCalledTimes(filters.length);
  });

  test('applies active styling to the currently active filter button', () => {
    const activeFilterName = "Investment Activity";
    render(<NotificationFilters onFilterChange={mockOnFilterChange} activeFilter={activeFilterName} />);
    
    const activeButton = screen.getByRole('button', { name: activeFilterName });
    // Check for a class that indicates active state, e.g., 'bg-purple-600'
    expect(activeButton).toHaveClass('bg-purple-600');

    // Check that other buttons do not have the active class
    const inactiveFilterName = "All";
    const inactiveButton = screen.getByRole('button', { name: inactiveFilterName });
    expect(inactiveButton).not.toHaveClass('bg-purple-600');
    expect(inactiveButton).toHaveClass('bg-gray-200');
  });
});
