import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdminLoginForm from './AdminLoginForm';

describe('AdminLoginForm Component', () => {
  beforeEach(() => {
    // Mock alert and console.log as they are used in handleSubmit
    global.alert = jest.fn();
    global.console.log = jest.fn();
    render(<AdminLoginForm />);
  });

  test('renders all form fields and login button', () => {
    expect(screen.getByLabelText(/Username or Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Role/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/2FA\/OTP Code/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  test('allows user input into username field', () => {
    const usernameInput = screen.getByLabelText(/Username or Email/i);
    fireEvent.change(usernameInput, { target: { value: 'testadmin' } });
    expect(usernameInput.value).toBe('testadmin');
  });

  test('allows user input into password field', () => {
    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toBe('password123');
  });

  test('allows role selection', () => {
    const roleSelect = screen.getByLabelText(/Role/i);
    fireEvent.change(roleSelect, { target: { value: 'User Admin' } });
    expect(roleSelect.value).toBe('User Admin');
  });

  test('allows user input into OTP field', () => {
    const otpInput = screen.getByLabelText(/2FA\/OTP Code/i);
    fireEvent.change(otpInput, { target: { value: '654321' } });
    expect(otpInput.value).toBe('654321');
  });

  test('form submission triggers console.log and alert with correct data', () => {
    const usernameInput = screen.getByLabelText(/Username or Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const roleSelect = screen.getByLabelText(/Role/i);
    const otpInput = screen.getByLabelText(/2FA\/OTP Code/i);
    const loginButton = screen.getByRole('button', { name: /Login/i });

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: 'superadmin' } });
    fireEvent.change(passwordInput, { target: { value: 'securepass' } });
    fireEvent.change(roleSelect, { target: { value: 'Super Admin' } });
    fireEvent.change(otpInput, { target: { value: '112233' } });

    // Simulate form submission
    fireEvent.click(loginButton);

    // Verify console.log
    expect(global.console.log).toHaveBeenCalledWith('Admin Login Attempt:', {
      username: 'superadmin',
      password: 'securepass',
      role: 'Super Admin',
      otp: '112233',
    });

    // Verify alert
    expect(global.alert).toHaveBeenCalledWith('Attempting login for Super Admin: superadmin');
  });

  test('form submission with "Billing Admin" role triggers specific error alert', () => {
    const roleSelect = screen.getByLabelText(/Role/i);
    const loginButton = screen.getByRole('button', { name: /Login/i });

    // Select "Billing Admin" role
    fireEvent.change(roleSelect, { target: { value: 'Billing Admin' } });
    
    // Fill other required fields (username and password)
    fireEvent.change(screen.getByLabelText(/Username or Email/i), { target: { value: 'billinguser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'billingpass' } });


    // Simulate form submission
    fireEvent.click(loginButton);

    // Verify specific error alert for Billing Admin
    expect(global.alert).toHaveBeenCalledWith('Mock Error: Billing Admins are temporarily disabled.');
    // Ensure the regular login alert was not called
    expect(global.alert).not.toHaveBeenCalledWith(expect.stringContaining('Attempting login for Billing Admin'));
  });
});
