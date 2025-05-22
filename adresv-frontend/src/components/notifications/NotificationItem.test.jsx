import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For enhanced matchers like .toHaveClass
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  const defaultProps = {
    id: '1',
    title: 'Test Title',
    message: 'This is a test message.',
    timestamp: '5 minutes ago',
    type: 'System',
    isRead: false,
  };

  test('renders correctly with all props (unread)', () => {
    render(<NotificationItem {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.message)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.timestamp)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.type)).toBeInTheDocument(); // Type badge
  });

  test('unread notification has distinct styling/elements', () => {
    render(<NotificationItem {...defaultProps} isRead={false} />);
    
    // Check for the unread indicator dot
    expect(screen.getByLabelText('Unread')).toBeInTheDocument();
    // Check for title class (more specific than general container class)
    expect(screen.getByText(defaultProps.title)).toHaveClass('text-blue-700', 'font-semibold');
    // Check container class for background (can be a bit brittle, but useful for visual distinction)
    const containerElement = screen.getByText(defaultProps.title).closest('div.p-4'); // Find the main container of the item
    expect(containerElement).toHaveClass('bg-blue-50');
  });

  test('read notification is styled differently from unread', () => {
    render(<NotificationItem {...defaultProps} isRead={true} title="Read Notification Title" />);
    
    // Unread indicator should NOT be present
    expect(screen.queryByLabelText('Unread')).not.toBeInTheDocument();
    // Check for title class
    expect(screen.getByText("Read Notification Title")).toHaveClass('text-gray-800', 'font-medium');
    expect(screen.getByText("Read Notification Title")).not.toHaveClass('text-blue-700', 'font-semibold');
    // Check container class for background
    const containerElement = screen.getByText("Read Notification Title").closest('div.p-4');
    expect(containerElement).toHaveClass('bg-white');
    expect(containerElement).not.toHaveClass('bg-blue-50');
  });

  test('type badge displays correct type text', () => {
    render(<NotificationItem {...defaultProps} type="Investment" />);
    expect(screen.getByText('Investment')).toBeInTheDocument(); // Checks if the type is rendered
    // Also check class for type badge styling
    expect(screen.getByText('Investment')).toHaveClass('bg-green-100', 'text-green-700');
  });

   test('type badge displays correct type text for Security', () => {
    render(<NotificationItem {...defaultProps} type="Security" />);
    expect(screen.getByText('Security')).toBeInTheDocument();
    expect(screen.getByText('Security')).toHaveClass('bg-red-100', 'text-red-700');
  });

   test('type badge displays correct type text for Engagement', () => {
    render(<NotificationItem {...defaultProps} type="Engagement" />);
    expect(screen.getByText('Engagement')).toBeInTheDocument();
    expect(screen.getByText('Engagement')).toHaveClass('bg-purple-100', 'text-purple-700');
  });
});
