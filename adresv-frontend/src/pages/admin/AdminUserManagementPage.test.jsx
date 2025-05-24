import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Good practice for page components
import AdminUserManagementPage from './AdminUserManagementPage';

describe('AdminUserManagementPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminUserManagementPage />
      </MemoryRouter>
    );
  });

  test('renders the main heading "Admin User Management"', () => {
    const heading = screen.getByRole('heading', { 
      name: /Admin User Management/i,
      level: 1 // Assuming h1 for the main page title
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the placeholder paragraph', () => {
    const paragraph = screen.getByText(/Manage user accounts, roles, and permissions here./i);
    expect(paragraph).toBeInTheDocument();
  });
});
