import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationHistoryTable from './NotificationHistoryTable';

// Mock data from NotificationHistoryTable.jsx to make tests predictable
const mockNotificationHistory = [
  { id: 'hist001', title: 'Platform Maintenance Scheduled', messageSnippet: 'Please be advised...', dateSent: '2024-03-15 10:00 AM', status: 'Sent', readRate: '75%' },
  { id: 'hist002', title: 'New Investment Opportunity: EcoFund', messageSnippet: 'Exciting news! A new sustainable...', dateSent: '2024-03-14 02:30 PM', status: 'Sent', readRate: '85%' },
  { id: 'hist003', title: 'Daily Quiz Rewards Update', messageSnippet: 'We have updated the reward structure...', dateSent: '2024-03-13 09:00 AM', status: 'Sent', readRate: 'N/A' },
  { id: 'hist004', title: 'Security Alert: Phishing Attempt', messageSnippet: 'We have detected a potential phishing campaign...', dateSent: '2024-03-12 05:00 PM', status: 'Failed', readRate: '0%' },
];

describe('NotificationHistoryTable Component', () => {
  beforeEach(() => {
    render(<NotificationHistoryTable />);
  });

  test('renders "Notification History" heading', () => {
    expect(screen.getByRole('heading', { name: /Notification History/i, level: 3 })).toBeInTheDocument();
  });

  test('renders table headers', () => {
    expect(screen.getByRole('columnheader', { name: /Title/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Message Snippet/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Date Sent/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Status/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Read Rate/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Actions/i })).toBeInTheDocument();
  });

  test('renders mock notification history entries', () => {
    mockNotificationHistory.forEach(notification => {
      // Find the row that contains the notification title
      const row = screen.getByText(notification.title).closest('tr');
      expect(row).toBeInTheDocument();
      
      // Use `within` to query elements within that specific row
      expect(within(row).getByText(notification.title)).toBeInTheDocument();
      expect(within(row).getByText(notification.messageSnippet)).toBeInTheDocument();
      expect(within(row).getByText(notification.dateSent)).toBeInTheDocument();
      expect(within(row).getByText(notification.status)).toBeInTheDocument();
      expect(within(row).getByText(notification.readRate)).toBeInTheDocument();
      expect(within(row).getByRole('button', { name: /View Details/i })).toBeInTheDocument();
    });
  });
  
  test('all "View Details" buttons are present', () => {
    const viewDetailsButtons = screen.getAllByRole('button', { name: /View Details/i });
    expect(viewDetailsButtons.length).toBe(mockNotificationHistory.length);
  });

  test('renders placeholder text for filters', () => {
    expect(screen.getByText(/\(Placeholder: Filters for date range, status, target audience, etc. will be here.\)/i)).toBeInTheDocument();
  });
});
