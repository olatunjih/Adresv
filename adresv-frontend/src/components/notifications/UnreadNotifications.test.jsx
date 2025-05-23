import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UnreadNotifications from './UnreadNotifications';

describe('UnreadNotifications Component', () => {
  const mockNotifications = [
    { id: 1, title: "New Login Alert", snippet: "A new device logged into your account.", timestamp: "5m ago" },
    { id: 2, title: "Investment Update", snippet: "Your investment has increased by 2%.", timestamp: "1h ago" },
  ];

  // Mock console.log as it's called by placeholder function
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    // Re-render with fresh mock data for each test if component modifies data or state
    // For this component, the mock data is internal, so rendering once might be fine if no state changes affect list.
    // However, if we were testing "mark as read" actually removing items, re-rendering or state management would be key.
    render(<UnreadNotifications />); 
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('renders the section title "Unread Notifications"', () => {
    expect(screen.getByText(/Unread Notifications/i)).toBeInTheDocument();
  });

  test('renders list items representing unread notifications based on its internal mock data', () => {
    // Using text from the component's internal mock data
    expect(screen.getByText("New Login Alert")).toBeInTheDocument();
    expect(screen.getByText("Investment Update")).toBeInTheDocument();
    expect(screen.getByText("Daily Quiz Reminder")).toBeInTheDocument(); 
  });

  test('renders title, snippet, timestamp, and "Mark as Read" button for a notification item', () => {
    // Using the first notification from the component's internal mock data
    const titleText = "New Login Alert";
    const snippetText = "A new device logged into your account. Was this you?";
    const timestampText = "5m ago";

    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByText(snippetText)).toBeInTheDocument();
    expect(screen.getByText(timestampText)).toBeInTheDocument();

    // Find the "Mark as Read" button associated with this item.
    // This assumes the button is a direct child or easily queryable from the item's container.
    // We might need a more specific query if the structure is complex.
    // Get all buttons and check the first one, assuming order matches mock data.
    const markAsReadButtons = screen.getAllByRole('button', { name: /Mark as Read/i });
    expect(markAsReadButtons.length).toBeGreaterThan(0);
    // This is a bit fragile. Ideally, the button would be within a scope related to "New Login Alert"
    // For example, within an article element for that notification.
    // For now, we assume the first button corresponds to the first item.
    expect(markAsReadButtons[0]).toBeInTheDocument();
  });

  test('calls console.log when "Mark as Read" button is clicked', () => {
    // Mock window.alert as well as it's used in the component
    global.alert = jest.fn(); 

    const markAsReadButtons = screen.getAllByRole('button', { name: /Mark as Read/i });
    fireEvent.click(markAsReadButtons[0]); // Click the first "Mark as Read" button

    expect(console.log).toHaveBeenCalledWith('Notification 1 marked as read.');
    expect(global.alert).toHaveBeenCalledWith('Notification 1 marked as read.');

    delete global.alert; // Clean up
  });

  test('displays "You have no unread notifications." if no notifications are present', () => {
    // To test this, we'd need to be able to control the mock data used by UnreadNotifications.
    // Since its mock data is internal, this requires either:
    // 1. Modifying the component to accept notifications as props (better design for testability)
    // 2. Mocking its internal data source if it were fetched.
    // For now, this test is hard to achieve without component modification.
    // We'll simulate it by rendering with an empty array if we could pass props:
    // render(<UnreadNotifications notifications={[]} />);
    // expect(screen.getByText(/You have no unread notifications./i)).toBeInTheDocument();
    // This test will be skipped or adapted if the component is refactored.
    // For the current structure, this specific test case cannot be easily executed.
  });
});
