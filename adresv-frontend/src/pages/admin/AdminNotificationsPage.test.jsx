import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminNotificationsPage from './AdminNotificationsPage';

// Mock child components
jest.mock('../../components/admin/notifications/ComposeNotificationForm', () => () => <div data-testid="compose-form-mock">ComposeNotificationForm Mock</div>);
// NotificationHistoryTable is no longer directly used by AdminNotificationsPage, it's replaced by a placeholder.
// jest.mock('../../components/admin/notifications/NotificationHistoryTable', () => () => <div data-testid="history-table-mock">NotificationHistoryTable Mock</div>);

describe('AdminNotificationsPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminNotificationsPage />
      </MemoryRouter>
    );
  });

  test('renders the main title "Notifications Management"', () => {
    expect(screen.getByRole('heading', { name: /Notifications Management/i, level: 1 })).toBeInTheDocument();
  });

  test('renders the ComposeNotificationForm mock', () => {
    expect(screen.getByTestId('compose-form-mock')).toBeInTheDocument();
    expect(screen.getByText('ComposeNotificationForm Mock')).toBeInTheDocument();
  });

  describe('Notification History Placeholder Section', () => {
    test('renders the "Notification History" heading', () => {
      const historyHeading = screen.getByRole('heading', { name: /Notification History/i, level: 2 });
      expect(historyHeading).toBeInTheDocument();
    });

    test('renders the placeholder text for notification history', () => {
      const historyPlaceholderText = screen.getByText('A table of sent notifications will be displayed here.');
      expect(historyPlaceholderText).toBeInTheDocument();
    });
  });

  describe('Saved Drafts Placeholder Section', () => {
    test('renders the "Saved Drafts" heading', () => {
      const draftsHeading = screen.getByRole('heading', { name: /Saved Drafts/i, level: 2 });
      expect(draftsHeading).toBeInTheDocument();
    });

    test('renders the placeholder text for saved drafts', () => {
      const draftsPlaceholderText = screen.getByText('Your saved notification drafts will appear here.');
      expect(draftsPlaceholderText).toBeInTheDocument();
    });
  });

  // Obsolete tests for the previous detailed draft list and history table are removed.
  // test('renders section titles for mocked components and Drafts section', () => { ... });
  // test('renders placeholders for mocked child components', () => { ... }); // Partially covered by compose form mock test
  // test('renders mock draft notification entries', () => { ... });
  // test('renders Edit and Delete buttons for draft notifications', () => { ... });
});
