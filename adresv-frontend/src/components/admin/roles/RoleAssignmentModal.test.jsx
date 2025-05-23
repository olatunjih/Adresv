import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RoleAssignmentModal from './RoleAssignmentModal';

// availableRoles is defined globally in RoleAssignmentModal.jsx, 
// so we can use it here for consistency in tests.
const availableRoles = ["Global Admin", "User Admin", "Billing Admin", "Message Admin"];

describe('RoleAssignmentModal Component', () => {
  const mockOnClose = jest.fn();
  const mockOnSaveRoles = jest.fn();
  const mockAdminUser = {
    id: "adm2",
    name: "Bob The Builder",
    currentRoles: ["User Admin"], // Initial roles for Bob
  };
  const mockAdminUserNoRoles = {
    id: "adm3",
    name: "Charlie Brown",
    currentRoles: [],
  };

  let consoleSpy;

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnSaveRoles.mockClear();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('does not render when isOpen is false', () => {
    render(
      <RoleAssignmentModal
        isOpen={false}
        onClose={mockOnClose}
        adminUser={mockAdminUser}
        onSaveRoles={mockOnSaveRoles}
      />
    );
    expect(screen.queryByText(`Editing roles for: ${mockAdminUser.name}`)).not.toBeInTheDocument();
  });

  test('renders correctly when isOpen is true and displays admin user\'s name', () => {
    render(
      <RoleAssignmentModal
        isOpen={true}
        onClose={mockOnClose}
        adminUser={mockAdminUser}
        onSaveRoles={mockOnSaveRoles}
      />
    );
    expect(screen.getByText(`Editing roles for: ${mockAdminUser.name}`)).toBeInTheDocument();
    expect(screen.getByText('Bob The Builder')).toBeInTheDocument(); // Check name is present
  });

  test('renders role checkboxes and pre-selects based on adminUser.currentRoles', () => {
    render(
      <RoleAssignmentModal
        isOpen={true}
        onClose={mockOnClose}
        adminUser={mockAdminUser} // Bob has "User Admin"
        onSaveRoles={mockOnSaveRoles}
      />
    );
    
    availableRoles.forEach(role => {
      const checkbox = screen.getByLabelText(role);
      expect(checkbox).toBeInTheDocument();
      if (role === "User Admin") {
        expect(checkbox).toBeChecked();
      } else {
        expect(checkbox).not.toBeChecked();
      }
    });
  });

  test('renders role checkboxes correctly when adminUser has no initial roles', () => {
    render(
      <RoleAssignmentModal
        isOpen={true}
        onClose={mockOnClose}
        adminUser={mockAdminUserNoRoles} // Charlie has no roles
        onSaveRoles={mockOnSaveRoles}
      />
    );
    availableRoles.forEach(role => {
      const checkbox = screen.getByLabelText(role);
      expect(checkbox).toBeInTheDocument();
      expect(checkbox).not.toBeChecked();
    });
  });

  test('allows changing checkbox selections', () => {
    render(
      <RoleAssignmentModal
        isOpen={true}
        onClose={mockOnClose}
        adminUser={mockAdminUser}
        onSaveRoles={mockOnSaveRoles}
      />
    );
    const globalAdminCheckbox = screen.getByLabelText("Global Admin");
    expect(globalAdminCheckbox).not.toBeChecked();
    fireEvent.click(globalAdminCheckbox);
    expect(globalAdminCheckbox).toBeChecked();

    const userAdminCheckbox = screen.getByLabelText("User Admin"); // Was initially checked
    expect(userAdminCheckbox).toBeChecked();
    fireEvent.click(userAdminCheckbox);
    expect(userAdminCheckbox).not.toBeChecked();
  });

  test('"Cancel" button calls onClose prop and hides confirmation if shown', () => {
    render(
      <RoleAssignmentModal
        isOpen={true}
        onClose={mockOnClose}
        adminUser={mockAdminUser}
        onSaveRoles={mockOnSaveRoles}
      />
    );
    const cancelButton = screen.getByRole('button', { name: /Cancel/i });
    fireEvent.click(cancelButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test('"Save Changes" button shows confirmation, then "Confirm & Save" calls onSaveRoles and onClose', () => {
    render(
      <RoleAssignmentModal
        isOpen={true}
        onClose={mockOnClose}
        adminUser={mockAdminUser}
        onSaveRoles={mockOnSaveRoles}
      />
    );

    // Select "Global Admin" and unselect "User Admin" for Bob
    fireEvent.click(screen.getByLabelText("Global Admin"));
    fireEvent.click(screen.getByLabelText("User Admin")); 
    // Now selectedRoles should be ["Global Admin"]

    const saveChangesButton = screen.getByRole('button', { name: /Save Changes/i });
    fireEvent.click(saveChangesButton);

    // Confirmation view should be visible
    expect(screen.getByText(/Confirm Role Update/i)).toBeInTheDocument();
    expect(screen.getByText(/Are you sure you want to update roles for Bob The Builder to: Global Admin?/i)).toBeInTheDocument();
    expect(saveChangesButton).not.toBeInTheDocument(); // Original save button is gone

    const confirmSaveButton = screen.getByRole('button', { name: /Confirm & Save/i });
    fireEvent.click(confirmSaveButton);

    expect(mockOnSaveRoles).toHaveBeenCalledWith(mockAdminUser.id, ["Global Admin"]);
    expect(consoleSpy).toHaveBeenCalledWith("Confirmation modal (more complex) would be shown here before closing.");
    expect(mockOnClose).toHaveBeenCalledTimes(1); // Modal should close after save
  });

  test('clicking "Cancel" in confirmation view returns to role selection', () => {
    render(
      <RoleAssignmentModal
        isOpen={true}
        onClose={mockOnClose}
        adminUser={mockAdminUser}
        onSaveRoles={mockOnSaveRoles}
      />
    );
    // Go to confirmation screen
    fireEvent.click(screen.getByRole('button', { name: /Save Changes/i }));
    expect(screen.getByText(/Confirm Role Update/i)).toBeInTheDocument();

    // Click Cancel in confirmation view
    const cancelConfirmationButton = screen.getAllByRole('button', { name: /Cancel/i })[0]; // First cancel is for confirmation
    fireEvent.click(cancelConfirmationButton);
    
    // Should be back to role editing view
    expect(screen.getByText(`Editing roles for: ${mockAdminUser.name}`)).toBeInTheDocument();
    expect(screen.queryByText(/Confirm Role Update/i)).not.toBeInTheDocument();
    expect(mockOnClose).not.toHaveBeenCalled(); // Main modal should not close yet
    expect(mockOnSaveRoles).not.toHaveBeenCalled();
  });

  test('modal closes on backdrop click', () => {
    render(
      <RoleAssignmentModal
        isOpen={true}
        onClose={mockOnClose}
        adminUser={mockAdminUser}
        onSaveRoles={mockOnSaveRoles}
      />
    );
    // The backdrop is the div with class 'fixed inset-0...'
    const backdrop = screen.getByText(`Editing roles for: ${mockAdminUser.name}`).closest('.fixed.inset-0');
    fireEvent.click(backdrop);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
