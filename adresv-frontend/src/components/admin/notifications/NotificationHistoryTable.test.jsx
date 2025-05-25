import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationHistoryTable from './NotificationHistoryTable';

describe('NotificationHistoryTable Component', () => {
  const mockNotifications = [ // From the component itself
    { id: "n1", title: "Scheduled Maintenance", snippet: "Platform will be down for maintenance...", targetAudience: "All Users", deliveryTime: "2024-08-15 02:00 AM", status: "Scheduled", readRate: "N/A" },
    { id: "n2", title: "New Feature: Auto-Invest", snippet: "Check out our new auto-invest feature...", targetAudience: "Roles: Investor, VIP", deliveryTime: "2024-08-01 10:00 AM", status: "Sent", readRate: "75% Reads" },
    // Add more if needed to cover all statuses for class testing
  ];

  beforeEach(() => {
    render(<NotificationHistoryTable />);
  });

  test('renders the section title "Notification History"', () => {
    expect(screen.getByRole('heading', { name: /Notification History/i, level: 2 })).toBeInTheDocument();
  });

  // Test for the filter UI elements
  describe('Filter UI Elements', () => {
    test('renders Target Audience filter', () => {
      expect(screen.getByLabelText(/Target Audience/i)).toBeInTheDocument();
      expect(screen.getByRole('combobox', { name: /Target Audience/i })).toBeInTheDocument();
    });

    test('renders Status filter', () => {
      expect(screen.getByLabelText(/Status/i)).toBeInTheDocument();
      expect(screen.getByRole('combobox', { name: /Status/i })).toBeInTheDocument();
    });

    test('renders Start Date filter', () => {
      expect(screen.getByLabelText(/Start Date/i)).toBeInTheDocument();
      // Date inputs don't have a specific role like 'textbox' or 'combobox' that is consistently reliable across browsers/Testing Library versions for getByRole.
      // Using getByLabelText is sufficient to find the input associated with the label.
    });

    test('renders End Date filter', () => {
      expect(screen.getByLabelText(/End Date/i)).toBeInTheDocument();
    });

    test('renders Apply Filters button', () => {
      expect(screen.getByRole('button', { name: /Apply Filters/i })).toBeInTheDocument();
    });
  });

  test('renders table headers correctly', () => {
    const headers = ["Title", "Snippet", "Target Audience", "Delivery Date/Time", "Status", "Read/Unread Rates"];
    headers.forEach(headerText => {
      expect(screen.getByRole('columnheader', { name: new RegExp(headerText, 'i') })).toBeInTheDocument();
    });
  });

  test('renders mock notification data in the table', () => {
    // Check for data from the first mock notification
    expect(screen.getByText("Scheduled Maintenance")).toBeInTheDocument();
    expect(screen.getByText(/Platform will be down for maintenance.../i)).toBeInTheDocument(); // Snippet might be truncated
    expect(screen.getByText("All Users")).toBeInTheDocument();
    expect(screen.getByText("2024-08-15 02:00 AM")).toBeInTheDocument();
    expect(screen.getByText("Scheduled")).toBeInTheDocument(); // Status text
    expect(screen.getByText("N/A")).toBeInTheDocument(); // Read Rate for first item

    // Check for data from the second mock notification
    expect(screen.getByText("New Feature: Auto-Invest")).toBeInTheDocument();
    expect(screen.getByText("Roles: Investor, VIP")).toBeInTheDocument();
    expect(screen.getByText("Sent")).toBeInTheDocument(); // Status text
    expect(screen.getByText("75% Reads")).toBeInTheDocument();
  });

  test('applies correct status badge styling (sample check)', () => {
    // Test for "Scheduled" status
    const scheduledStatusElement = screen.getByText("Scheduled");
    expect(scheduledStatusElement.closest('span')).toHaveClass('bg-blue-100', 'text-blue-700');

    // Test for "Sent" status
    const sentStatusElement = screen.getByText("Sent");
    expect(sentStatusElement.closest('span')).toHaveClass('bg-green-100', 'text-green-700');
    
    // Test for "Draft" status (from component's mock data)
    const draftStatusElement = screen.getByText("Draft");
    expect(draftStatusElement.closest('span')).toHaveClass('bg-yellow-100', 'text-yellow-700');

    // Test for "Failed" status (from component's mock data)
    const failedStatusElement = screen.getByText("Failed");
    expect(failedStatusElement.closest('span')).toHaveClass('bg-red-100', 'text-red-700');
  });
});
