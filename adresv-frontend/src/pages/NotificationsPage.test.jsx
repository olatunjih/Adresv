import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotificationsPage from './NotificationsPage';

// Mock child components
// We need to make NotificationFilters mock interactive to test filter logic
const mockSetFilteredNotifications = jest.fn();
const mockOnFilterChange = jest.fn();

jest.mock('../components/notifications/UnreadNotifications', () => () => <div data-testid="unread-notifications-mock">Unread Notifications Mock</div>);
jest.mock('../components/notifications/NotificationFilters', () => ({ onFilterChange, activeFilter }) => (
  <div data-testid="notification-filters-mock">
    Notification Filters Mock
    <button onClick={() => onFilterChange('Investment Activity')}>Filter Investment</button>
    <button onClick={() => onFilterChange('All')}>Filter All</button>
    <span>Active: {activeFilter}</span>
  </div>
));
jest.mock('../components/notifications/NotificationList', () => ({ notifications }) => (
  <div data-testid="notification-list-mock">
    Notification List Mock
    {notifications.map(n => <div key={n.id}>{n.title}</div>)}
  </div>
));


describe('NotificationsPage', () => {
  const initialNotifications = [
    { id: 1, title: "Welcome!", message: "Welcome", timestamp: "1d", category: "System Updates", unread: false },
    { id: 2, title: "Login Alert", message: "New Login", timestamp: "5m", category: "Security", unread: true },
    { id: 3, title: "Investment Matched", message: "Matched", timestamp: "2h", category: "Investment Activity", unread: true },
  ];
  
  // This is tricky because the filtering logic is within NotificationsPage itself.
  // We are mocking NotificationList, so we can't directly see its output changing based on internal state of NotificationsPage.
  // Instead, we can check if NotificationList receives the correctly filtered props.

  beforeEach(() => {
    // Reset mocks if needed
    mockOnFilterChange.mockClear();
  });

  test('renders the main title and child component placeholders', () => {
    render(
      <MemoryRouter>
        <NotificationsPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/^Notifications$/i)).toBeInTheDocument();
    expect(screen.getByTestId('unread-notifications-mock')).toBeInTheDocument();
    expect(screen.getByTestId('notification-filters-mock')).toBeInTheDocument();
    expect(screen.getByTestId('notification-list-mock')).toBeInTheDocument();
  });

  test('renders "All Notifications" section title', () => {
    render(
      <MemoryRouter>
        <NotificationsPage />
      </MemoryRouter>
    );
    expect(screen.getByText(/All Notifications/i)).toBeInTheDocument();
  });
  
  test('filter logic correctly updates props passed to NotificationList', async () => {
    render(
      <MemoryRouter>
        <NotificationsPage />
      </MemoryRouter>
    );

    // Initial render should show all (or based on default filter 'All')
    // The mock NotificationList displays titles. Check for all titles from allNotificationsData in NotificationsPage.
    expect(screen.getByText("Welcome to Adresv!")).toBeInTheDocument();
    expect(screen.getByText("New Login Alert")).toBeInTheDocument();
    expect(screen.getByText("Investment Matched")).toBeInTheDocument();
    expect(screen.getByText("Daily Quiz Available")).toBeInTheDocument();
    // ... and so on for all titles in the mock data within NotificationsPage

    // Simulate clicking a filter button in our mocked NotificationFilters
    // This button directly calls the onFilterChange prop passed from NotificationsPage
    const filterInvestmentButton = screen.getByRole('button', { name: 'Filter Investment' });
    fireEvent.click(filterInvestmentButton);

    // After filtering for "Investment Activity":
    // Only "Investment Matched" and "Trade Executed" should be present
    // Other titles should not be present.
    expect(screen.getByText("Investment Matched")).toBeInTheDocument();
    expect(screen.getByText("Trade Executed")).toBeInTheDocument();
    expect(screen.queryByText("Welcome to Adresv!")).not.toBeInTheDocument();
    expect(screen.queryByText("New Login Alert")).not.toBeInTheDocument();
    expect(screen.queryByText("Daily Quiz Available")).not.toBeInTheDocument();


    // Simulate clicking 'Filter All'
    const filterAllButton = screen.getByRole('button', { name: 'Filter All' });
    fireEvent.click(filterAllButton);
    
    expect(screen.getByText("Welcome to Adresv!")).toBeInTheDocument();
    expect(screen.getByText("New Login Alert")).toBeInTheDocument();
    expect(screen.getByText("Investment Matched")).toBeInTheDocument();

  });
});
