import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SubmitTicketForm from './SubmitTicketForm';

describe('SubmitTicketForm Component', () => {
  beforeEach(() => {
    // Mock alert and console.log as they are used in handleSubmit
    global.alert = jest.fn();
    global.console.log = jest.fn();
    render(<SubmitTicketForm />);
  });

  test('renders all form fields and submit button', () => {
    expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Ticket/i })).toBeInTheDocument();
  });

  test('allows user input into category select', () => {
    const categorySelect = screen.getByLabelText(/Category/i);
    fireEvent.change(categorySelect, { target: { value: 'Deposits' } });
    expect(categorySelect.value).toBe('Deposits');
  });

  test('allows user input into subject input', () => {
    const subjectInput = screen.getByLabelText(/Subject/i);
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    expect(subjectInput.value).toBe('Test Subject');
  });

  test('allows user input into description textarea', () => {
    const descriptionTextarea = screen.getByLabelText(/Description/i);
    fireEvent.change(descriptionTextarea, { target: { value: 'Test description details.' } });
    expect(descriptionTextarea.value).toBe('Test description details.');
  });

  test('form submission triggers console.log, alert, and resets form fields', () => {
    const categorySelect = screen.getByLabelText(/Category/i);
    const subjectInput = screen.getByLabelText(/Subject/i);
    const descriptionTextarea = screen.getByLabelText(/Description/i);
    const submitButton = screen.getByRole('button', { name: /Submit Ticket/i });

    // Simulate user input
    fireEvent.change(categorySelect, { target: { value: 'Technical Glitch' } });
    fireEvent.change(subjectInput, { target: { value: 'Page Freezing' } });
    fireEvent.change(descriptionTextarea, { target: { value: 'The main dashboard page freezes upon loading.' } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Verify console.log
    expect(global.console.log).toHaveBeenCalledWith('Submitting Ticket:', {
      category: 'Technical Glitch',
      subject: 'Page Freezing',
      description: 'The main dashboard page freezes upon loading.',
    });

    // Verify alert
    expect(global.alert).toHaveBeenCalledWith('Ticket Submitted (mock):\nCategory: Technical Glitch\nSubject: Page Freezing\nDescription: The main dashboard page freezes upon loading....');

    // Verify form fields are reset (assuming default category is 'Account Issues')
    expect(categorySelect.value).toBe('Account Issues');
    expect(subjectInput.value).toBe('');
    expect(descriptionTextarea.value).toBe('');
  });

  test('form requires subject and description', () => {
    // Check for 'required' attribute
    expect(screen.getByLabelText(/Subject/i)).toBeRequired();
    expect(screen.getByLabelText(/Description/i)).toBeRequired();
  });
});
