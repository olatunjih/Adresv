import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserManagementPage from './UserManagementPage';

describe('UserManagementPage', () => {
  test('renders page title, user table, mock user data, and action buttons', () => {
    render(
      <MemoryRouter>
        <UserManagementPage />
      </MemoryRouter>
    );

    // Check for the main title
    expect(screen.getByRole('heading', { name: /user management/i })).toBeInTheDocument();

    // Check for the table
    expect(screen.getByRole('table')).toBeInTheDocument();

    // Check for key column headers
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Account Status')).toBeInTheDocument();
    expect(screen.getByText('Linked Wallets')).toBeInTheDocument();

    // Check for mock user data (John Doe)
    expect(screen.getByText('John Doe')).toBeInTheDocument(); // From mockUsers
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument(); // John Doe's email
    // Need to be more specific for status, as "Active" might appear multiple times
    const rows = screen.getAllByRole('row');
    const johnDoeRow = Array.from(rows).find(row => row.textContent.includes('John Doe'));
    expect(johnDoeRow).toHaveTextContent('Active'); // John Doe's status

    // Check for Jane Smith's data as well to ensure multiple users render and status check is robust
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    const janeSmithRow = Array.from(rows).find(row => row.textContent.includes('Jane Smith'));
    expect(janeSmithRow).toHaveTextContent('Banned'); // Jane Smith's status


    // Check for an action button for the first mock user (John Doe)
    // Ensure buttons are within John Doe's row context if possible, or check globally
    expect(screen.getAllByText('Reset Password')[0]).toBeInTheDocument();
    // Check for the initial 'Ban' button for an active user (John Doe)
    expect(screen.getAllByText('Ban')[0]).toBeInTheDocument();
    // Check for the 'Unban' button for a banned user (Jane Smith)
    expect(screen.getAllByText('Unban')[0]).toBeInTheDocument();
  });
});
