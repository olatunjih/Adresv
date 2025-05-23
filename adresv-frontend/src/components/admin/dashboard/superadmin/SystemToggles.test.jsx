import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SystemToggles from './SystemToggles';

describe('SystemToggles Component', () => {
  const toggleLabels = [ // From the component structure
    "User Registration",
    "Login System",
    "Daily Engagement Features",
    "Platform Maintenance Mode",
  ];

  beforeEach(() => {
    render(<SystemToggles />);
  });

  test('renders the section title "System Controls"', () => {
    expect(screen.getByRole('heading', { name: /System Controls/i, level: 2 })).toBeInTheDocument();
  });

  test('renders labels for each system toggle', () => {
    toggleLabels.forEach(label => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test('renders a toggle switch for each control', () => {
    // Each toggle is represented by a button role in the ToggleSwitch sub-component
    const toggleSwitches = screen.getAllByRole('button');
    // We expect one button per toggle label plus any other buttons if present.
    // In this component, each toggle is a button.
    expect(toggleSwitches.length).toBe(toggleLabels.length); 
  });

  test('toggle switches can be clicked (visual state change test)', () => {
    // Test one toggle, for example, "User Registration"
    const userRegLabel = screen.getByText("User Registration");
    // The button is the parent of the label in this structure, or a sibling.
    // The actual button element is what we need to click.
    // The current structure has the button as a sibling to the span with the label.
    // Let's get the button associated with "User Registration".
    // The structure is: div > span (label) + button (toggle)
    // We can find the button by its role and proximity or specific attributes if added.
    
    const userRegToggle = userRegLabel.nextElementSibling; // Assuming button is the next sibling
    expect(userRegToggle).toHaveClass('bg-green-500'); // Initial state (true)

    fireEvent.click(userRegToggle);
    expect(userRegToggle).toHaveClass('bg-red-500'); // After click (false)

    fireEvent.click(userRegToggle);
    expect(userRegToggle).toHaveClass('bg-green-500'); // Click again (true)


    // Test another toggle to be sure, e.g., "Platform Maintenance Mode" (initially false)
    const maintenanceLabel = screen.getByText("Platform Maintenance Mode");
    const maintenanceToggle = maintenanceLabel.nextElementSibling;
    expect(maintenanceToggle).toHaveClass('bg-red-500'); // Initial state (false)

    fireEvent.click(maintenanceToggle);
    expect(maintenanceToggle).toHaveClass('bg-green-500'); // After click (true)
  });
});
