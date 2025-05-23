import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminNotificationsPage from './AdminNotificationsPage';

describe('AdminNotificationsPage', () => {
  test('renders page title and key sections with mock data', () => {
    render(
      <MemoryRouter>
        <AdminNotificationsPage />
      </MemoryRouter>
    );

    // Check for the main title of the page
    expect(screen.getByRole('heading', { name: /admin notifications management/i })).toBeInTheDocument();

    // Check for "Compose Notifications" section (e.g., by a sub-heading or a form field)
    expect(screen.getByRole('heading', { name: /compose notification/i })).toBeInTheDocument();
    // The component uses "Title (Max 100 chars):" as the label
    expect(screen.getByLabelText(/title \(max 100 chars\):/i)).toBeInTheDocument();

    // Check for "Notification History" section (e.g., by a sub-heading or a table element/header)
    expect(screen.getByRole('heading', { name: /notification history/i })).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('System Maintenance Alert')).toBeInTheDocument(); // Mock data
    // The component uses "Delivery Status" as the header for status
    expect(screen.getByText('Delivered')).toBeInTheDocument(); // Mock data status

    // Check for "Drafts" section
    expect(screen.getByRole('heading', { name: /drafts/i })).toBeInTheDocument();
    expect(screen.getByText('Upcoming Promotion')).toBeInTheDocument(); // Mock draft title
  });
});
