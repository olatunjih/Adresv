import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ComposeNotificationForm from './ComposeNotificationForm';

describe('ComposeNotificationForm Component', () => {
  let consoleSpy;
  let alertSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<ComposeNotificationForm />);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    alertSpy.mockRestore();
  });

  test('renders its section title "Compose New Notification"', () => {
    expect(screen.getByRole('heading', { name: /Compose New Notification/i, level: 2 })).toBeInTheDocument();
  });

  test('renders key form elements', () => {
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message Body/i)).toBeInTheDocument();
    
    // Target Audience radio buttons
    expect(screen.getByLabelText('All Users')).toBeInTheDocument();
    expect(screen.getByLabelText('Specific Roles')).toBeInTheDocument();
    expect(screen.getByLabelText('Individual User')).toBeInTheDocument();

    // Delivery Schedule radio buttons
    expect(screen.getByLabelText('Send Now')).toBeInTheDocument();
    expect(screen.getByLabelText('Schedule for Later')).toBeInTheDocument();

    // Action buttons
    expect(screen.getByRole('button', { name: /Preview Notification/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Save as Draft/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Notification/i })).toBeInTheDocument(); // Initial text
  });

  test('conditionally renders role checkboxes when "Specific Roles" is selected', () => {
    expect(screen.queryByText(/Select Roles:/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Specific Roles'));
    expect(screen.getByText(/Select Roles:/i)).toBeInTheDocument();
    // Check for a sample role checkbox
    expect(screen.getByLabelText('Investor')).toBeInTheDocument(); 
  });

  test('conditionally renders username input when "Individual User" is selected', () => {
    expect(screen.queryByLabelText(/Username/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Individual User'));
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
  });

  test('conditionally renders date/time inputs when "Schedule for Later" is selected', () => {
    expect(screen.queryByLabelText(/Date/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Time/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('Schedule for Later'));
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    // Button text should change
    expect(screen.getByRole('button', { name: /Schedule Notification/i })).toBeInTheDocument();
  });

  test('allows input changes in form fields', () => {
    // Title
    const titleInput = screen.getByLabelText(/Title/i);
    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    expect(titleInput.value).toBe('Test Title');

    // Message Body
    const messageTextarea = screen.getByLabelText(/Message Body/i);
    fireEvent.change(messageTextarea, { target: { value: 'Test message content.' } });
    expect(messageTextarea.value).toBe('Test message content.');

    // Target Audience (select "Individual User" and type username)
    fireEvent.click(screen.getByLabelText('Individual User'));
    const usernameInput = screen.getByLabelText(/Username/i);
    fireEvent.change(usernameInput, { target: { value: 'test_user_1' } });
    expect(usernameInput.value).toBe('test_user_1');
  });

  test('"Preview Notification" button logs data and alerts', () => {
    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Preview Test' } });
    fireEvent.click(screen.getByRole('button', { name: /Preview Notification/i }));
    expect(consoleSpy).toHaveBeenCalledWith("Preview Notification Data:", expect.objectContaining({ title: 'Preview Test' }));
    expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining("Preview:\nTitle: Preview Test"));
  });

  test('"Save as Draft" button logs data and alerts', () => {
    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Draft Test' } });
    fireEvent.click(screen.getByRole('button', { name: /Save as Draft/i }));
    expect(consoleSpy).toHaveBeenCalledWith("Save Draft Data:", expect.objectContaining({ title: 'Draft Test' }));
    expect(alertSpy).toHaveBeenCalledWith("Draft Saved:\nTitle: Draft Test");
  });

  test('"Send Notification" button logs data and alerts', () => {
    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Send Test' } });
    fireEvent.click(screen.getByRole('button', { name: /Send Notification/i }));
    expect(consoleSpy).toHaveBeenCalledWith("Send Notification Data:", expect.objectContaining({ title: 'Send Test' }));
    expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining("Send Notification:\nTitle: Send Test"));
  });
  
  test('"Schedule Notification" button logs data and alerts when scheduled', () => {
    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Schedule Test' } });
    fireEvent.click(screen.getByLabelText('Schedule for Later')); // Change to schedule mode
    fireEvent.click(screen.getByRole('button', { name: /Schedule Notification/i }));
    expect(consoleSpy).toHaveBeenCalledWith("Schedule Notification Data:", expect.objectContaining({ title: 'Schedule Test' }));
    expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining("Schedule Notification:\nTitle: Schedule Test"));
  });
});
