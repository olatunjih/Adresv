import React from 'react';
import { render, screen } from '@testing-library/react';
import AdminActivityLogs from './AdminActivityLogs';

describe('AdminActivityLogs Component', () => {
  const mockLogs = [ // From the component itself
    { id: 1, action: "AdminX updated user Y's role to 'Premium'", timestamp: "2m ago" },
    { id: 2, action: "AdminZ sent a system notification about upcoming maintenance", timestamp: "10m ago" },
    { id: 3, action: "AdminA resolved billing dispute #123 for user Z", timestamp: "1h ago" },
    { id: 4, action: "AdminX banned user B for policy violation", timestamp: "3h ago" },
  ];

  beforeEach(() => {
    render(<AdminActivityLogs />);
  });

  test('renders the section title "Admin Activity Logs"', () => {
    expect(screen.getByRole('heading', { name: /Admin Activity Logs/i, level: 2 })).toBeInTheDocument();
  });

  test('renders mock activity log data', () => {
    mockLogs.forEach(log => {
      // Check if the action text for each log is rendered
      expect(screen.getByText(log.action)).toBeInTheDocument();
      // Check if the timestamp for each log is rendered
      expect(screen.getByText(log.timestamp)).toBeInTheDocument();
    });
  });

  test('renders the "View All Logs" button', () => {
    const viewAllButton = screen.getByRole('button', { name: /View All Logs/i });
    // The button text includes an arrow, so using a regex or partial match is safer
    expect(viewAllButton).toBeInTheDocument();
    expect(screen.getByText(/View All Logs/)).toBeInTheDocument(); 
  });

  test('renders correct number of log items', () => {
    // Each log item is an <li>. We can count them.
    const logItems = screen.getAllByRole('listitem');
    expect(logItems.length).toBe(mockLogs.length);
  });
});
