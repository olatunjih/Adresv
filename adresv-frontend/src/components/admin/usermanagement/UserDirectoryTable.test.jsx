import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserDirectoryTable from './UserDirectoryTable';

describe('UserDirectoryTable Component', () => {
  let consoleSpy;
  let alertSpy;
  const initialMockUsers = [ // Define once to use in tests
    { id: "usr1", name: "John Doe", email: "john.doe@example.com", phone: "555-1234", role: "Investor", status: "Active", wallets: "ERC20: 0xabc... / TRC20: Tdef..." },
    { id: "usr2", name: "Jane Smith", email: "jane.smith@example.com", phone: "555-5678", role: "Trader", status: "Active", wallets: "ERC20: 0x123... / TRC20: T456..." },
    { id: "usr3", name: "Mike Johnson", email: "mike.j@example.com", phone: "555-8765", role: "VIP", status: "Banned", wallets: "ERC20: 0x789..." },
  ];


  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    // Render the component with a fresh set of users for each test to isolate state changes
    render(<UserDirectoryTable />); 
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    alertSpy.mockRestore();
  });

  test('renders its section title "Platform User Directory"', () => {
    expect(screen.getByRole('heading', { name: /Platform User Directory/i, level: 2 })).toBeInTheDocument();
  });

  test('renders placeholder filter inputs', () => {
    expect(screen.getByPlaceholderText(/Search by Name\/Email.../i)).toBeInTheDocument();
    // Check for select elements by their initial displayed option or a label if available
    // Since labels are sr-only, we'll check for default selected values or presence of select itself
    expect(screen.getByDisplayValue('All')).toBeInTheDocument(); // Assuming "All" is default for role and status filters
    // More robust: query for the select elements themselves if more unique selectors are available
  });

  test('renders table headers', () => {
    const headers = ["Name", "Email", "Phone", "Role", "Status", "Linked Wallets", "Actions"];
    headers.forEach(headerText => {
      expect(screen.getByRole('columnheader', { name: new RegExp(headerText, 'i') })).toBeInTheDocument();
    });
  });

  test('renders mock user data in the table, including correct status badge text/styling', () => {
    // John Doe - Active
    const johnDoeRow = screen.getByText("John Doe").closest('tr');
    expect(johnDoeRow).toHaveTextContent("john.doe@example.com");
    expect(johnDoeRow).toHaveTextContent("Investor");
    const johnDoeStatus = within(johnDoeRow).getByText("Active");
    expect(johnDoeStatus.closest('span')).toHaveClass('bg-green-100', 'text-green-700');

    // Mike Johnson - Banned
    const mikeJohnsonRow = screen.getByText("Mike Johnson").closest('tr');
    expect(mikeJohnsonRow).toHaveTextContent("mike.j@example.com");
    expect(mikeJohnsonRow).toHaveTextContent("VIP");
    const mikeJohnsonStatus = within(mikeJohnsonRow).getByText("Banned");
    expect(mikeJohnsonStatus.closest('span')).toHaveClass('bg-red-100', 'text-red-700');
  });

  describe('Action Buttons', () => {
    test('renders "Reset Pwd", dynamic "Ban/Unban", and "Logs" buttons for users', () => {
      const johnDoeRow = screen.getByText("John Doe").closest('tr');
      expect(within(johnDoeRow).getByRole('button', { name: /Reset Pwd/i })).toBeInTheDocument();
      expect(within(johnDoeRow).getByRole('button', { name: /Ban/i })).toBeInTheDocument(); // John is Active
      expect(within(johnDoeRow).getByRole('button', { name: /Logs/i })).toBeInTheDocument();

      const mikeJohnsonRow = screen.getByText("Mike Johnson").closest('tr');
      expect(within(mikeJohnsonRow).getByRole('button', { name: /Unban/i })).toBeInTheDocument(); // Mike is Banned
    });

    test('clicking "Reset Password" logs to console and alerts', () => {
      const johnDoeRow = screen.getByText("John Doe").closest('tr');
      const resetButton = within(johnDoeRow).getByRole('button', { name: /Reset Pwd/i });
      fireEvent.click(resetButton);

      expect(consoleSpy).toHaveBeenCalledWith("Attempting to reset password for user usr1: John Doe");
      expect(alertSpy).toHaveBeenCalledWith("Password reset initiated for John Doe (backend integration needed).");
    });

    test('clicking "Ban" on an active user logs, alerts, updates status, and changes button text', () => {
      const johnDoeRow = screen.getByText("John Doe").closest('tr');
      const banButton = within(johnDoeRow).getByRole('button', { name: /Ban/i });
      fireEvent.click(banButton);

      expect(consoleSpy).toHaveBeenCalledWith("Banning user usr1: John Doe");
      expect(alertSpy).toHaveBeenCalledWith("Reason for ban would be requested here for user John Doe. For now, proceeding with mock ban.");
      
      // Verify status update in table
      const johnDoeStatus = within(johnDoeRow).getByText("Banned"); // Now Banned
      expect(johnDoeStatus.closest('span')).toHaveClass('bg-red-100', 'text-red-700');
      
      // Verify button text change
      expect(within(johnDoeRow).getByRole('button', { name: /Unban/i })).toBeInTheDocument();
      expect(within(johnDoeRow).queryByRole('button', { name: /Ban/i })).not.toBeInTheDocument();
    });

    test('clicking "Unban" on a banned user logs, alerts, updates status, and changes button text', () => {
      const mikeJohnsonRow = screen.getByText("Mike Johnson").closest('tr'); // Mike is initially Banned
      const unbanButton = within(mikeJohnsonRow).getByRole('button', { name: /Unban/i });
      fireEvent.click(unbanButton);

      expect(consoleSpy).toHaveBeenCalledWith("Unbanning user usr3: Mike Johnson");
      expect(alertSpy).toHaveBeenCalledWith("Unbanning user Mike Johnson.");

      // Verify status update in table
      const mikeJohnsonStatus = within(mikeJohnsonRow).getByText("Active"); // Now Active
      expect(mikeJohnsonStatus.closest('span')).toHaveClass('bg-green-100', 'text-green-700');

      // Verify button text change
      expect(within(mikeJohnsonRow).getByRole('button', { name: /Ban/i })).toBeInTheDocument();
      expect(within(mikeJohnsonRow).queryByRole('button', { name: /Unban/i })).not.toBeInTheDocument();
    });

    test('clicking "View Activity Logs" logs to console and alerts', () => {
      const janeSmithRow = screen.getByText("Jane Smith").closest('tr');
      const logsButton = within(janeSmithRow).getByRole('button', { name: /Logs/i });
      fireEvent.click(logsButton);

      expect(consoleSpy).toHaveBeenCalledWith("Viewing activity logs for user usr2: Jane Smith");
      expect(alertSpy).toHaveBeenCalledWith("Displaying activity logs for Jane Smith (new view or modal needed).");
    });
  });
});

// Helper to scope queries within a specific element
// (Can be defined in a setup file or locally if not already available)
import { queries } from '@testing-library/dom';
function within(element) {
  const getQuery = (queryName) => (...args) => queries[queryName](element, ...args);
  return {
    getByText: getQuery('getByText'),
    getByRole: getQuery('getByRole'),
    queryByRole: getQuery('queryByRole'),
    // Add other queries as needed
  };
}
