import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AdminDirectory from './AdminDirectory';

// Mock the RoleAssignmentModal component
// We need to be able to check if it's rendered and what props it receives
const mockOnClose = jest.fn();
const mockOnSaveRoles = jest.fn();
jest.mock('./RoleAssignmentModal', () => ({ isOpen, onClose, adminUser, onSaveRoles }) => {
  mockOnClose.mockImplementation(onClose); // Allow the mock to call the passed onClose
  mockOnSaveRoles.mockImplementation(onSaveRoles); // Allow the mock to call the passed onSaveRoles
  if (!isOpen) return null;
  return (
    <div data-testid="role-assignment-modal-mock">
      RoleAssignmentModal Mock for {adminUser.name}
      {/* Simulate interaction for saving */}
      <button onClick={() => onSaveRoles(adminUser.id, ["Global Admin"])}>Simulate Save</button>
      <button onClick={onClose}>Simulate Close</button>
    </div>
  );
});


describe('AdminDirectory Component', () => {
  let alertSpy;

  beforeEach(() => {
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    mockOnClose.mockClear();
    mockOnSaveRoles.mockClear();
    render(<AdminDirectory />);
  });

  afterEach(() => {
    alertSpy.mockRestore();
  });

  test('renders its section title "Admin User Directory"', () => {
    expect(screen.getByRole('heading', { name: /Admin User Directory/i, level: 2 })).toBeInTheDocument();
  });

  test('renders table headers', () => {
    expect(screen.getByRole('columnheader', { name: /Name/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Email/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Current Role\(s\)/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Created At/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Last Login/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Actions/i })).toBeInTheDocument();
  });

  test('renders mock admin data in the table', () => {
    expect(screen.getByText("Alice Wonderland")).toBeInTheDocument();
    expect(screen.getByText("alice@example.com")).toBeInTheDocument();
    expect(screen.getByText("Super Admin")).toBeInTheDocument(); // Alice's roles

    expect(screen.getByText("Bob The Builder")).toBeInTheDocument();
    expect(screen.getByText("User Admin, Message Admin")).toBeInTheDocument(); // Bob's roles
  });

  test('"Edit Roles" button is disabled for Super Admin and enabled for others', () => {
    // Alice is Super Admin
    const aliceRow = screen.getByText("Alice Wonderland").closest('tr');
    const editAliceButton = Array.from(aliceRow.querySelectorAll('button')).find(btn => btn.textContent === "Edit Roles");
    expect(editAliceButton).toBeDisabled();

    // Bob is not Super Admin
    const bobRow = screen.getByText("Bob The Builder").closest('tr');
    const editBobButton = Array.from(bobRow.querySelectorAll('button')).find(btn => btn.textContent === "Edit Roles");
    expect(editBobButton).not.toBeDisabled();
  });

  test('clicking "Edit Roles" for a non-Super Admin opens the modal', () => {
    // Modal should not be visible initially
    expect(screen.queryByTestId('role-assignment-modal-mock')).not.toBeInTheDocument();

    const bobRow = screen.getByText("Bob The Builder").closest('tr');
    const editBobButton = Array.from(bobRow.querySelectorAll('button')).find(btn => btn.textContent === "Edit Roles");
    fireEvent.click(editBobButton);

    // Modal should now be visible
    const modal = screen.getByTestId('role-assignment-modal-mock');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveTextContent('RoleAssignmentModal Mock for Bob The Builder');
  });
  
  test('clicking "Edit Roles" for Super Admin shows an alert and does not open modal', () => {
    const aliceRow = screen.getByText("Alice Wonderland").closest('tr');
    const editAliceButton = Array.from(aliceRow.querySelectorAll('button')).find(btn => btn.textContent === "Edit Roles");
    fireEvent.click(editAliceButton);

    expect(alertSpy).toHaveBeenCalledWith("Super Admin roles cannot be modified through this interface.");
    expect(screen.queryByTestId('role-assignment-modal-mock')).not.toBeInTheDocument();
  });

  test('handleSaveRoles updates admin roles in the table and closes modal', () => {
    // Open modal for Bob
    const bobRow = screen.getByText("Bob The Builder").closest('tr');
    const editBobButton = Array.from(bobRow.querySelectorAll('button')).find(btn => btn.textContent === "Edit Roles");
    fireEvent.click(editBobButton);
    
    // Modal should be open
    let modal = screen.getByTestId('role-assignment-modal-mock');
    expect(modal).toBeInTheDocument();

    // Simulate saving from the mocked modal
    // The mock modal's "Simulate Save" button calls onSaveRoles with adminId and ["Global Admin"]
    const simulateSaveButton = screen.getByRole('button', { name: 'Simulate Save' });
    fireEvent.click(simulateSaveButton);

    // Check if onSaveRoles was called (indirectly testing handleSaveRoles)
    // The actual handleSaveRoles in AdminDirectory calls setAdmins
    // and then setIsModalOpen(false)
    
    // Verify Bob's roles are updated in the table.
    // The original roles for Bob were "User Admin, Message Admin". Now should be "Global Admin".
    expect(bobRow).toHaveTextContent("Global Admin"); // Check the updated role in the row
    expect(bobRow).not.toHaveTextContent("User Admin, Message Admin");


    // Modal should be closed after saving
    // This relies on the mock correctly calling onClose which then sets state in AdminDirectory
    // To test this properly, the mock's simulateSaveButton should call onClose
    // Let's assume the mock modal calls onClose after saving.
    // The current mock calls onSaveRoles, which in AdminDirectory updates state and closes modal.
    // So, checking for modal absence should work.
    expect(screen.queryByTestId('role-assignment-modal-mock')).not.toBeInTheDocument();
  });
});
