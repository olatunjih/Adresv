import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminNotificationsPage from './AdminNotificationsPage';

describe('AdminNotificationsPage', () => {
  beforeEach(() => {
    // Render the component within MemoryRouter if it uses any react-router features,
    // or if there's a chance it might in the future. Good practice for page components.
    render(
      <MemoryRouter>
        <AdminNotificationsPage />
      </MemoryRouter>
    );
  });

  test('renders the main heading "Admin Notifications Management"', () => {
    const heading = screen.getByRole('heading', { 
      name: /Admin Notifications Management/i,
      level: 1 // Assuming h1 is used for the main heading
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the placeholder paragraph', () => {
    const paragraph = screen.getByText(/Manage notifications settings and history here./i);
    expect(paragraph).toBeInTheDocument();
  });
});
