import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminSupportTicketsPage from './AdminSupportTicketsPage';

// Mock the window.alert used in the component for row clicks
global.alert = jest.fn();

describe('AdminSupportTicketsPage', () => {
  test('renders page title, tickets table, and action elements for mock data', () => {
    render(
      <MemoryRouter>
        <AdminSupportTicketsPage />
      </MemoryRouter>
    );

    // Main title
    expect(screen.getByRole('heading', { name: /admin support ticket management/i })).toBeInTheDocument();

    // Support Tickets Table
    expect(screen.getByRole('heading', { name: /user support tickets/i })).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('Ticket ID')).toBeInTheDocument();
    expect(screen.getByText('User ID')).toBeInTheDocument();
    expect(screen.getByText('Category')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();

    // Check for mock ticket data
    expect(screen.getByText('ticket001')).toBeInTheDocument();
    expect(screen.getByText('userXyz')).toBeInTheDocument();
    expect(screen.getByText('Withdrawals')).toBeInTheDocument();
    // Initial status of ticket001 is 'Open'
    // The component renders select elements for status. We check if one of them has 'Open' as its value.
    const openStatusSelects = screen.getAllByRole('combobox').filter(select => select.value === 'Open');
    expect(openStatusSelects.length).toBeGreaterThan(0);


    // Check for action elements within the context of the first ticket row
    // This assumes the buttons/inputs are uniquely identifiable or we pick the first ones.
    // For inputs/textareas, you might check for their presence associated with a ticket.
    // For buttons, check they exist.
    expect(screen.getAllByText('Assign')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Save Notes')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Close Ticket & Notify User')[0]).toBeInTheDocument();
    // Check for one of the status dropdowns (specifically the one for ticket001 which is 'Open')
    const statusDropdown = screen.getAllByRole('combobox').find(select => select.value === 'Open');
    expect(statusDropdown).toBeInTheDocument();
  });
});
