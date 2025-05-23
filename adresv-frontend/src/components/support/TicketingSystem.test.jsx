import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TicketingSystem from './TicketingSystem';

describe('TicketingSystem Component', () => {
  let consoleSpy;
  let alertSpy;

  beforeEach(() => {
    // Mock console.log and window.alert as they are used in form submission
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<TicketingSystem />);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    alertSpy.mockRestore();
  });

  // Test for main sections/titles
  test('renders main section titles', () => {
    expect(screen.getByText(/Submit a New Support Ticket/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Support Tickets/i)).toBeInTheDocument();
  });

  // Tests for the "Submit New Ticket" form
  describe('Submit New Ticket Form', () => {
    test('renders form elements: category select, subject input, message textarea, and submit button', () => {
      expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Submit Ticket/i })).toBeInTheDocument();
    });

    test('allows input changes in form fields', () => {
      // Category select
      const categorySelect = screen.getByLabelText(/Category/i);
      fireEvent.change(categorySelect, { target: { value: 'Withdrawals' } });
      expect(categorySelect.value).toBe('Withdrawals');

      // Subject input
      const subjectInput = screen.getByLabelText(/Subject/i);
      fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
      expect(subjectInput.value).toBe('Test Subject');

      // Message textarea
      const messageTextarea = screen.getByLabelText(/Message/i);
      fireEvent.change(messageTextarea, { target: { value: 'Test message content.' } });
      expect(messageTextarea.value).toBe('Test message content.');
    });

    test('calls console.log and alert on form submission with form data', () => {
      fireEvent.change(screen.getByLabelText(/Category/i), { target: { value: 'Deposits' } });
      fireEvent.change(screen.getByLabelText(/Subject/i), { target: { value: 'Urgent Issue' } });
      fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Need help ASAP.' } });
      
      const submitButton = screen.getByRole('button', { name: /Submit Ticket/i });
      fireEvent.click(submitButton);

      expect(consoleSpy).toHaveBeenCalledWith('New Ticket Submitted:', {
        category: 'Deposits',
        subject: 'Urgent Issue',
        message: 'Need help ASAP.'
      });
      expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining('Ticket Submitted:'));
      expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining('Category: Deposits'));
      expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining('Subject: Urgent Issue'));
      expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining('Message: Need help ASAP.'));
    });
  });

  // Tests for the "Existing Tickets List"
  describe('Existing Tickets List', () => {
    test('renders table headers: ID, Subject, Category, Status, Last Updated', () => {
      expect(screen.getByRole('columnheader', { name: /Ticket ID/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /Subject/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /Category/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /Status/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /Last Updated/i })).toBeInTheDocument();
    });

    test('renders mock ticket data in the table', () => {
      // Check for data from the first mock ticket
      expect(screen.getByText('TIC-001')).toBeInTheDocument();
      expect(screen.getByText('Unable to login')).toBeInTheDocument();
      expect(screen.getByText('Account Issues')).toBeInTheDocument(); // Category of first ticket
      expect(screen.getAllByText('Open')[0]).toBeInTheDocument(); // Status of first ticket (can be multiple "Open" if other tickets have this)

      // Check for data from another mock ticket to be sure
      expect(screen.getByText('TIC-002')).toBeInTheDocument();
      expect(screen.getByText('Withdrawal pending for too long')).toBeInTheDocument();
      expect(screen.getByText('In Progress')).toBeInTheDocument();
    });
  });
});
