import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminNotificationsPage from './AdminNotificationsPage';

// Mock child components
jest.mock('../../components/admin/notifications/ComposeNotificationForm', () => () => <div data-testid="compose-form-mock">ComposeNotificationForm Mock</div>);

// Unmock NotificationHistoryTable to test its actual rendering including its heading
jest.unmock('../../components/admin/notifications/NotificationHistoryTable');
// Ensure any previous mock is cleared if it was set elsewhere, though unmock should handle it.
// jest.dontMock('../../components/admin/notifications/NotificationHistoryTable');


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

  describe('Notification History Section', () => {
    test('renders the "Notification History" heading (from NotificationHistoryTable)', () => {
      // This heading is rendered by the actual NotificationHistoryTable component
      const historyHeading = screen.getByRole('heading', { name: /Notification History/i, level: 2 });
      expect(historyHeading).toBeInTheDocument();
    });

    // The placeholder text test is removed as the actual table is now rendered.
    // test('renders the placeholder text for notification history', () => { ... });
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
