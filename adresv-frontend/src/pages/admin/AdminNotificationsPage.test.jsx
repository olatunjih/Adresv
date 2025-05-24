import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminNotificationsPage from './AdminNotificationsPage';

// Mock child components
jest.mock('../../components/admin/notifications/ComposeNotificationForm', () => () => <div data-testid="compose-form-mock">ComposeNotificationForm Mock</div>);
jest.mock('../../components/admin/notifications/NotificationHistoryTable', () => () => <div data-testid="history-table-mock">NotificationHistoryTable Mock</div>);
// The Drafts list is currently part of AdminNotificationsPage directly, so no separate mock for it.

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

  test('renders section titles for mocked components and Drafts section', () => {
    // The ComposeNotificationForm mock doesn't have its own title visible here, it's part of the mock itself.
    // The AdminNotificationsPage directly renders the section title for Drafts.
    expect(screen.getByRole('heading', { name: /Draft Notifications/i, level: 2 })).toBeInTheDocument();
    // NotificationHistoryTable also has its title within its own component, so not tested here directly other than the mock.
  });

  test('renders placeholders for mocked child components', () => {
    expect(screen.getByTestId('compose-form-mock')).toBeInTheDocument();
    expect(screen.getByText('ComposeNotificationForm Mock')).toBeInTheDocument();

    expect(screen.getByTestId('history-table-mock')).toBeInTheDocument();
    expect(screen.getByText('NotificationHistoryTable Mock')).toBeInTheDocument();
  });

  test('renders mock draft notification entries', () => {
    // Check for some text from the mock draft entries defined within AdminNotificationsPage
    expect(screen.getByText(/Draft: Q3 Marketing Blast/i)).toBeInTheDocument();
    expect(screen.getByText(/Saved: 2024-08-02 09:15 AM/i)).toBeInTheDocument();
    expect(screen.getByText(/Draft: New User Welcome Email Update/i)).toBeInTheDocument();
  });

  test('renders Edit and Delete buttons for draft notifications', () => {
    // Assuming there's at least one draft, find its buttons
    // This is less specific, but AdminNotificationsPage defines these buttons.
    const editButtons = screen.getAllByRole('button', { name: /Edit/i });
    expect(editButtons.length).toBeGreaterThan(0);
    
    const deleteButtons = screen.getAllByRole('button', { name: /Delete/i });
    expect(deleteButtons.length).toBeGreaterThan(0);
  });
});
