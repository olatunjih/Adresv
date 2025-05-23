import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AdminLoginForm from './AdminLoginForm';

describe('AdminLoginForm Component', () => {
  let consoleSpy;
  let alertSpy;

  beforeEach(() => {
    // Mock console.log and window.alert as they are used in form submission
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<AdminLoginForm />);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    alertSpy.mockRestore();
  });

  test('renders key form elements', () => {
    expect(screen.getByLabelText(/Username\/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Role \(Placeholder\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Use 2FA/i)).toBeInTheDocument(); // Checkbox
    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
  });

  test('conditionally renders OTP input based on "Use 2FA" checkbox', () => {
    // Initially, OTP input should not be present
    expect(screen.queryByLabelText(/OTP Code/i)).not.toBeInTheDocument();

    // Simulate checking the "Use 2FA" checkbox
    const use2FACheckbox = screen.getByLabelText(/Use 2FA/i);
    fireEvent.click(use2FACheckbox);

    // Now, OTP input should be present
    expect(screen.getByLabelText(/OTP Code/i)).toBeInTheDocument();

    // Simulate unchecking the "Use 2FA" checkbox
    fireEvent.click(use2FACheckbox);

    // OTP input should be hidden again
    expect(screen.queryByLabelText(/OTP Code/i)).not.toBeInTheDocument();
  });

  test('allows input in username and password fields', () => {
    const usernameInput = screen.getByLabelText(/Username\/Email/i);
    fireEvent.change(usernameInput, { target: { value: 'admin@test.com' } });
    expect(usernameInput.value).toBe('admin@test.com');

    const passwordInput = screen.getByLabelText(/Password/i);
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput.value).toBe('password123');
  });
  
  test('role select dropdown allows selection', () => {
    const roleSelect = screen.getByLabelText(/Role \(Placeholder\)/i);
    fireEvent.change(roleSelect, { target: { value: 'User Admin' } });
    expect(roleSelect.value).toBe('User Admin');
  });

  test('form submission calls console.log and window.alert', () => {
    // Fill in required fields
    fireEvent.change(screen.getByLabelText(/Username\/Email/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'testpass' } });
    fireEvent.change(screen.getByLabelText(/Role \(Placeholder\)/i), { target: { value: 'Global Admin' } });

    const loginButton = screen.getByRole('button', { name: /Login/i });
    fireEvent.click(loginButton);

    expect(consoleSpy).toHaveBeenCalledWith('Admin Login Credentials:', {
      username: 'testuser',
      password: 'testpass',
      role: 'Global Admin',
      use2FA: false, // Default state
      otp: 'N/A',
    });
    expect(alertSpy).toHaveBeenCalledWith('Admin login attempt with username: testuser. Check console for details.');
  });

  test('form submission includes OTP when 2FA is enabled', () => {
    fireEvent.change(screen.getByLabelText(/Username\/Email/i), { target: { value: 'test2fauser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'test2fapass' } });
    
    const use2FACheckbox = screen.getByLabelText(/Use 2FA/i);
    fireEvent.click(use2FACheckbox); // Enable 2FA
    
    const otpInput = screen.getByLabelText(/OTP Code/i);
    fireEvent.change(otpInput, { target: { value: '123456' } });

    const loginButton = screen.getByRole('button', { name: /Login/i });
    fireEvent.click(loginButton);

    expect(consoleSpy).toHaveBeenCalledWith('Admin Login Credentials:', expect.objectContaining({
      username: 'test2fauser',
      password: 'test2fapass',
      use2FA: true,
      otp: '123456',
    }));
    expect(alertSpy).toHaveBeenCalledWith('Admin login attempt with username: test2fauser. Check console for details.');
  });
});
