import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Withdrawal from './Withdrawal';

describe('Withdrawal Component', () => {
  beforeEach(() => {
    // Mock window.alert as it's called by placeholder functions
    global.alert = jest.fn();
    render(<Withdrawal />);
  });

  test('renders the section title "Withdraw Funds"', () => {
    expect(screen.getByText(/Withdraw Funds/i)).toBeInTheDocument();
  });

  test('renders wallet address input field', () => {
    expect(screen.getByPlaceholderText(/Enter your wallet address/i)).toBeInTheDocument();
  });

  test('renders network input field', () => {
    expect(screen.getByPlaceholderText(/e.g., ERC20, TRC20, BEP20/i)).toBeInTheDocument();
  });

  test('renders OTP input field', () => {
    expect(screen.getByPlaceholderText(/Enter OTP/i)).toBeInTheDocument();
  });

  test('renders "Send OTP" button', () => {
    expect(screen.getByRole('button', { name: /Send OTP/i })).toBeInTheDocument();
  });
  
  test('renders "Submit Withdrawal Request" button', () => {
    expect(screen.getByRole('button', { name: /Submit Withdrawal Request/i })).toBeInTheDocument();
  });

  test('updates wallet address on input change', () => {
    const addressInput = screen.getByPlaceholderText(/Enter your wallet address/i);
    fireEvent.change(addressInput, { target: { value: '0x123...' } });
    expect(addressInput.value).toBe('0x123...');
  });

  test('updates network on input change', () => {
    const networkInput = screen.getByPlaceholderText(/e.g., ERC20, TRC20, BEP20/i);
    fireEvent.change(networkInput, { target: { value: 'ERC20' } });
    expect(networkInput.value).toBe('ERC20');
  });

  test('updates OTP on input change', () => {
    const otpInput = screen.getByPlaceholderText(/Enter OTP/i);
    fireEvent.change(otpInput, { target: { value: '123456' } });
    expect(otpInput.value).toBe('123456');
  });

  test('calls alert when "Send OTP" is clicked (placeholder test)', () => {
    const sendOtpButton = screen.getByRole('button', { name: /Send OTP/i });
    fireEvent.click(sendOtpButton);
    expect(global.alert).toHaveBeenCalledWith('OTP sending functionality to be implemented.');
  });
});
