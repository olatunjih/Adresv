import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationList from './NotificationList';

describe('NotificationList Component', () => {
  const mockNotifications = [
    { 
      id: 1, 
      title: "System Maintenance", 
      message: "System will be down for maintenance tonight.", 
      timestamp: "2h ago", 
      category: "System Updates", 
      unread: true 
    },
    { 
      id: 2, 
      title: "Investment Confirmed", 
      message: "Your investment in 'Solar Fund' is confirmed.", 
      timestamp: "1d ago", 
      category: "Investment Activity", 
      unread: false 
    },
  ];

  test('renders a list of notifications passed via props', () => {
    render(<NotificationList notifications={mockNotifications} />);
    
    expect(screen.getByText("System Maintenance")).toBeInTheDocument();
    expect(screen.getByText("System will be down for maintenance tonight.")).toBeInTheDocument();
    
    expect(screen.getByText("Investment Confirmed")).toBeInTheDocument();
    expect(screen.getByText("Your investment in 'Solar Fund' is confirmed.")).toBeInTheDocument();
  });

  test('displays details for a sample notification: title, message, timestamp, category, and unread status', () => {
    render(<NotificationList notifications={[mockNotifications[0]]} />); // Render with only the first notification
    
    const firstNotification = mockNotifications[0];
    expect(screen.getByText(firstNotification.title)).toBeInTheDocument();
    expect(screen.getByText(firstNotification.message)).toBeInTheDocument();
    expect(screen.getByText(firstNotification.timestamp)).toBeInTheDocument();
    // Check for category display, e.g., "Category: System Updates"
    expect(screen.getByText(`Category: ${firstNotification.category}`)).toBeInTheDocument(); 

    // Check for unread indicator (e.g., the "Unread" badge)
    if (firstNotification.unread) {
      expect(screen.getByText("Unread")).toBeInTheDocument(); // Assuming "Unread" text is present for unread items
    }
  });

  test('correctly displays a "No notifications" message if an empty array is passed', () => {
    render(<NotificationList notifications={[]} />);
    expect(screen.getByText(/No notifications match the current filter./i)).toBeInTheDocument();
  });

  test('does not display "Unread" badge if notification is not unread', () => {
    render(<NotificationList notifications={[mockNotifications[1]]} />); // Render with the second notification (unread: false)
    
    expect(screen.getByText(mockNotifications[1].title)).toBeInTheDocument(); // Ensure item is rendered
    expect(screen.queryByText("Unread")).not.toBeInTheDocument();
  });
});
