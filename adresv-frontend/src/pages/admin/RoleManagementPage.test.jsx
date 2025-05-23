import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RoleManagementPage from './RoleManagementPage';

describe('RoleManagementPage', () => {
  test('renders page title, admin table, and mock admin data', () => {
    render(
      <MemoryRouter>
        <RoleManagementPage />
      </MemoryRouter>
    );

    // Check for the main title of the page
    // The component uses "Admin Role Management" as the heading
    expect(screen.getByRole('heading', { name: /admin role management/i })).toBeInTheDocument();

    // Check for table headers
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Account Creation Date')).toBeInTheDocument();
    expect(screen.getByText('Last Login Timestamp')).toBeInTheDocument();
    expect(screen.getByText('Assign Role')).toBeInTheDocument(); // Added this header as it's in the component

    // Check for at least one mock admin's data
    expect(screen.getByText('Alice Wonderland')).toBeInTheDocument();
    // Check for Alice's role displayed in the table row, not just the dropdown
    // Need to be more specific if there are multiple instances of 'Super Admin' (e.g., in dropdowns)
    // For simplicity, assuming it's the main display of her role.
    // A better way would be to get the row for 'Alice Wonderland' and then find 'Super Admin' within that row.
    const rows = screen.getAllByRole('row');
    const aliceRow = Array.from(rows).find(row => row.textContent.includes('Alice Wonderland'));
    expect(aliceRow).toHaveTextContent('Super Admin');


    expect(screen.getByText('Bob The Builder')).toBeInTheDocument();
    const bobRow = Array.from(rows).find(row => row.textContent.includes('Bob The Builder'));
    expect(bobRow).toHaveTextContent('Global Admin');

    expect(screen.getByText('Charlie Brown')).toBeInTheDocument();
    const charlieRow = Array.from(rows).find(row => row.textContent.includes('Charlie Brown'));
    expect(charlieRow).toHaveTextContent('User Admin');
  });
});
