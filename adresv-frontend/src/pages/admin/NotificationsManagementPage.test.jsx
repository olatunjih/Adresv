import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import NotificationsManagementPage from './NotificationsManagementPage';

// Mock child components
jest.mock('../../components/admin/notifications/ComposeNotificationForm', () => {
  return jest.fn(() => <div data-testid="compose-form-mock">Mocked ComposeForm</div>);
});
jest.mock('../../components/admin/notifications/NotificationHistoryTable', () => {
  return jest.fn(() => <div data-testid="history-table-mock">Mocked HistoryTable</div>);
});

describe('NotificationsManagementPage Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter> {/* Added MemoryRouter as pages might have Links or routing logic implicitly */}
        <NotificationsManagementPage />
      </MemoryRouter>
    );
  });

  test('renders main "Notifications Management" heading', () => {
    expect(screen.getByRole('heading', { name: /Notifications Management/i, level: 1 })).toBeInTheDocument();
  });

  test('renders mocked child component placeholders', () => {
    expect(screen.getByTestId('compose-form-mock')).toBeInTheDocument();
    expect(screen.getByText('Mocked ComposeForm')).toBeInTheDocument();

    expect(screen.getByTestId('history-table-mock')).toBeInTheDocument();
    expect(screen.getByText('Mocked HistoryTable')).toBeInTheDocument();
  });

  test('renders "Draft Notifications" subheading', () => {
    expect(screen.getByRole('heading', { name: /Draft Notifications/i, level: 3 })).toBeInTheDocument();
  });

  test('renders some mock draft text', () => {
    // Check for a snippet of one of the mock draft entries
    expect(screen.getByText(/Draft: Welcome Email Update \(Mock\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Last saved: 2024-03-14/i)).toBeInTheDocument(); // Example date from mock draft
  });
});
