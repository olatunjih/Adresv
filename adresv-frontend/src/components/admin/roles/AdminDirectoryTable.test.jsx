import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminDirectoryTable from './AdminDirectoryTable';

// Mock initialAdminUsers data from AdminDirectoryTable.jsx to make tests predictable
const initialAdminUsers = [
  { id: 'admin001', name: 'Super Admin User', roles: ['Super Admin'], accountCreated: '2023-01-01', lastLogin: '2024-03-15 09:00 AM', isModifiable: false },
  { id: 'admin002', name: 'Alice Wonderland', roles: ['Global Admin', 'Message Admin'], accountCreated: '2023-02-10', lastLogin: '2024-03-14 11:30 AM', isModifiable: true },
  { id: 'admin003', name: 'Bob The Builder', roles: ['User Admin'], accountCreated: '2023-03-20', lastLogin: '2024-03-15 08:15 AM', isModifiable: true },
];

// Helper to get a row by admin name
const getRowByAdminName = (name) => {
  const adminNameCell = screen.getByText(name);
  return adminNameCell.closest('tr');
};

describe('AdminDirectoryTable Component', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Spy on console.log before each test
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<AdminDirectoryTable />);
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleLogSpy.mockRestore();
    jest.restoreAllMocks(); // Restores all mocks, including window.confirm
  });

  test('renders "Admin User Directory" heading and table headers', () => {
    expect(screen.getByRole('heading', { name: /Admin User Directory/i, level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Name/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Current Role\(s\)/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Assign New Role/i })).toBeInTheDocument(); // Updated header
  });

  test('renders mock admin users with their names and initial roles', () => {
    initialAdminUsers.forEach(admin => {
      expect(screen.getByText(admin.name)).toBeInTheDocument();
      expect(getRowByAdminName(admin.name)).toHaveTextContent(admin.roles.join(', '));
    });
  });

  test('allows changing role for a modifiable admin and logs the change', () => {
    window.confirm = jest.fn(() => true); // Mock window.confirm to return true

    const modifiableAdminName = 'Alice Wonderland';
    const modifiableAdminRow = getRowByAdminName(modifiableAdminName);
    
    // Find the select dropdown within Alice's row
    const roleSelect = within(modifiableAdminRow).getByRole('combobox'); // <select> has role "combobox"
    expect(roleSelect).toBeInTheDocument();

    // Simulate selecting a new role
    const newRole = 'User Admin';
    fireEvent.change(roleSelect, { target: { value: newRole } });

    expect(window.confirm).toHaveBeenCalledWith(`Are you sure you want to change ${modifiableAdminName}'s role to ${newRole}?`);
    
    // Verify the role in the table updates
    expect(within(modifiableAdminRow).getByText(newRole)).toBeInTheDocument(); // Check if the new role is now displayed
    expect(within(modifiableAdminRow)).not.toHaveTextContent('Global Admin, Message Admin'); // Old roles should be gone

    // Verify console.log
    expect(consoleLogSpy).toHaveBeenCalledWith(`Role for ${modifiableAdminName} changed to ${newRole}. New roles: ["${newRole}"]`);
  });

  test('non-modifiable admin shows "Not Modifiable" and no select dropdown', () => {
    const nonModifiableAdminName = 'Super Admin User';
    const nonModifiableAdminRow = getRowByAdminName(nonModifiableAdminName);

    expect(within(nonModifiableAdminRow).getByText(/Not Modifiable/i)).toBeInTheDocument();
    expect(within(nonModifiableAdminRow).queryByRole('combobox')).not.toBeInTheDocument();
  });

  test('canceling role change confirmation does not update role or log', () => {
    window.confirm = jest.fn(() => false); // Mock window.confirm to return false (cancel)

    const modifiableAdminName = 'Bob The Builder';
    const modifiableAdminRow = getRowByAdminName(modifiableAdminName);
    const initialRole = 'User Admin'; // Bob's initial role

    const roleSelect = within(modifiableAdminRow).getByRole('combobox');
    const newRole = 'Global Admin';

    fireEvent.change(roleSelect, { target: { value: newRole } });

    expect(window.confirm).toHaveBeenCalledWith(`Are you sure you want to change ${modifiableAdminName}'s role to ${newRole}?`);
    
    // Verify the role in the table does NOT change
    expect(within(modifiableAdminRow).getByText(initialRole)).toBeInTheDocument();
    expect(within(modifiableAdminRow)).not.toHaveTextContent(newRole);

    // Verify console.log was not called with the success message
    expect(consoleLogSpy).not.toHaveBeenCalledWith(expect.stringContaining(`Role for ${modifiableAdminName} changed to`));
  });
});
