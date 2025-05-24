import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Important for page components
import AdminSupportTicketsManagementPage from './AdminSupportTicketsManagementPage';

describe('AdminSupportTicketsManagementPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminSupportTicketsManagementPage />
      </MemoryRouter>
    );
  });

  test('renders the main heading "Admin Support Tickets Management"', () => {
    const heading = screen.getByRole('heading', { 
      name: /Admin Support Tickets Management/i,
      level: 1 // Assuming h1 for the main page title
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the placeholder paragraph', () => {
    const paragraph = screen.getByText(/Manage and respond to user support tickets and inquiries here./i);
    expect(paragraph).toBeInTheDocument();
  });
});
