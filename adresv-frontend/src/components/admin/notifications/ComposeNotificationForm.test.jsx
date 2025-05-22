import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComposeNotificationForm from './ComposeNotificationForm';

describe('ComposeNotificationForm Component', () => {
  let consoleLogSpy;
  let alertSpy;

  beforeEach(() => {
    // Spy on console.log and alert before each test
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<ComposeNotificationForm />);
  });

  afterEach(() => {
    // Restore spies after each test
    consoleLogSpy.mockRestore();
    alertSpy.mockRestore();
  });

  test('renders all form fields and buttons', () => {
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Target Audience \(Placeholder\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Schedule \(Placeholder\)/i)).toBeInTheDocument();
    
    expect(screen.getByRole('button', { name: /Preview/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Preview/i })).toBeDisabled();
    
    expect(screen.getByRole('button', { name: /Send Notification/i })).toBeInTheDocument();
  });

  test('allows user input into Title field', () => {
    const titleInput = screen.getByLabelText(/Title/i);
    fireEvent.change(titleInput, { target: { value: 'Test Notification Title' } });
    expect(titleInput.value).toBe('Test Notification Title');
  });

  test('allows user input into Message field', () => {
    const messageTextarea = screen.getByLabelText(/Message/i);
    fireEvent.change(messageTextarea, { target: { value: 'This is a detailed test message for the notification.' } });
    expect(messageTextarea.value).toBe('This is a detailed test message for the notification.');
  });
  
  test('allows user input into Target Audience field', () => {
    const targetInput = screen.getByLabelText(/Target Audience \(Placeholder\)/i);
    fireEvent.change(targetInput, { target: { value: 'all_users' } });
    expect(targetInput.value).toBe('all_users');
  });

  test('allows user input into Schedule field', () => {
    const scheduleInput = screen.getByLabelText(/Schedule \(Placeholder\)/i);
    fireEvent.change(scheduleInput, { target: { value: '2024-12-31 10:00' } });
    expect(scheduleInput.value).toBe('2024-12-31 10:00');
  });

  test('form submission triggers console.log, alert, and resets fields', () => {
    const titleInput = screen.getByLabelText(/Title/i);
    const messageTextarea = screen.getByLabelText(/Message/i);
    const targetInput = screen.getByLabelText(/Target Audience \(Placeholder\)/i);
    const scheduleInput = screen.getByLabelText(/Schedule \(Placeholder\)/i);
    const sendButton = screen.getByRole('button', { name: /Send Notification/i });

    const testData = {
      title: 'Final Test Title',
      message: 'Final detailed message for testing submission.',
      targetAudience: 'role:Tester',
      schedule: 'now',
    };

    fireEvent.change(titleInput, { target: { value: testData.title } });
    fireEvent.change(messageTextarea, { target: { value: testData.message } });
    fireEvent.change(targetInput, { target: { value: testData.targetAudience } });
    fireEvent.change(scheduleInput, { target: { value: testData.schedule } });

    fireEvent.click(sendButton);

    expect(consoleLogSpy).toHaveBeenCalledWith('Sending Notification:', testData);
    expect(alertSpy).toHaveBeenCalledWith(`Notification Sent (Mock):\nTitle: ${testData.title}\nMessage: ${testData.message.substring(0,30)}...\nTarget: ${testData.targetAudience}\nSchedule: ${testData.schedule}`);

    // Check if fields are reset (assuming this is the behavior)
    expect(titleInput.value).toBe('');
    expect(messageTextarea.value).toBe('');
    expect(targetInput.value).toBe('');
    expect(scheduleInput.value).toBe('');
  });
});
