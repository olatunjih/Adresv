import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import RoleManagementPage from './RoleManagementPage';

describe('RoleManagementPage', () => {
  // Helper function to get a specific admin's row
  const getAdminRow = (adminName) => {
    const rows = screen.getAllByRole('row');
    return Array.from(rows).find(row => within(row).queryByText(adminName));
  };

  test('renders page title, admin table, and mock admin data', () => {
    render(
      <MemoryRouter>
        <RoleManagementPage />
      </MemoryRouter>
    );

    // Check for the main title of the page
    expect(screen.getByRole('heading', { name: /admin role management/i })).toBeInTheDocument();

    // Check for table headers
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Account Creation Date')).toBeInTheDocument();
    expect(screen.getByText('Last Login Timestamp')).toBeInTheDocument();
    expect(screen.getByText('Assign Role')).toBeInTheDocument();

    // Check for mock admin data
    const aliceRow = getAdminRow('Alice Wonderland');
    expect(aliceRow).toBeInTheDocument();
    expect(within(aliceRow).getByText('Super Admin')).toBeInTheDocument();

    const bobRow = getAdminRow('Bob The Builder');
    expect(bobRow).toBeInTheDocument();
    expect(within(bobRow).getByText('Global Admin')).toBeInTheDocument();

    const charlieRow = getAdminRow('Charlie Brown');
    expect(charlieRow).toBeInTheDocument();
    expect(within(charlieRow).getByText('User Admin')).toBeInTheDocument();
  });

  describe('Interactive Role Change', () => {
    test('modal appears when changing a role and displays correct information', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <RoleManagementPage />
        </MemoryRouter>
      );

      const aliceSelect = screen.getByTestId('role-select-1');
      expect(aliceSelect.value).toBe('Super Admin'); // Initial role

      await user.selectOptions(aliceSelect, 'Global Admin');

      const modal = screen.getByTestId('confirmation-modal');
      expect(modal).toBeInTheDocument();
      expect(within(modal).getByRole('heading', { name: /confirm role change/i })).toBeInTheDocument();
      expect(within(modal).getByText(/Are you sure you want to assign 'Global Admin' to Alice Wonderland?/i)).toBeInTheDocument();
    });

    test('confirming role change updates the role in the table and closes modal', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <RoleManagementPage />
        </MemoryRouter>
      );

      let aliceRow = getAdminRow('Alice Wonderland');
      expect(within(aliceRow).getByText('Super Admin')).toBeInTheDocument();

      const aliceSelect = screen.getByTestId('role-select-1');
      await user.selectOptions(aliceSelect, 'Global Admin');

      const modal = screen.getByTestId('confirmation-modal');
      expect(modal).toBeInTheDocument();

      const confirmButton = within(modal).getByRole('button', { name: /confirm/i });
      await user.click(confirmButton);

      expect(screen.queryByTestId('confirmation-modal')).not.toBeInTheDocument();

      aliceRow = getAdminRow('Alice Wonderland'); // Re-fetch the row
      expect(within(aliceRow).getByText('Global Admin')).toBeInTheDocument();
      // Verify the select dropdown also reflects the change
      expect(aliceSelect.value).toBe('Global Admin');
    });

    test('cancelling role change does not update the role and closes modal', async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <RoleManagementPage />
        </MemoryRouter>
      );

      let aliceRow = getAdminRow('Alice Wonderland');
      expect(within(aliceRow).getByText('Super Admin')).toBeInTheDocument(); // Initial role

      const aliceSelect = screen.getByTestId('role-select-1');
      await user.selectOptions(aliceSelect, 'Global Admin');

      const modal = screen.getByTestId('confirmation-modal');
      expect(modal).toBeInTheDocument();

      const cancelButton = within(modal).getByRole('button', { name: /cancel/i });
      await user.click(cancelButton);

      expect(screen.queryByTestId('confirmation-modal')).not.toBeInTheDocument();

      aliceRow = getAdminRow('Alice Wonderland'); // Re-fetch the row
      expect(within(aliceRow).getByText('Super Admin')).toBeInTheDocument(); // Role should not have changed
      // Verify the select dropdown also reverted or remains the original value
      // The component's current logic resets the select on cancel implicitly because state isn't confirmed.
      // For a more robust test, one might want to ensure the select still shows 'Super Admin'.
      // The current component behavior is that the select value *will* reflect the attempted change,
      // even if cancelled, because the `select` element's `value` prop is tied to `admin.role` which is only updated on confirm.
      // However, the actual `admin.role` in the `admins` state array *is* preserved.
      // The test for the displayed role in the table (<td>{admin.role}</td>) is the most crucial here.
      expect(aliceSelect.value).toBe('Super Admin'); // After cancel, the select should revert to the actual admin role
    });
  });
});
