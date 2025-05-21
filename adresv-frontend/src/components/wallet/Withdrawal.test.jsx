import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For enhanced matchers
import Withdrawal from './Withdrawal';

describe('Withdrawal Component', () => {
  beforeEach(() => {
    // Mock alert as it's used in handleSubmit and handleSendOtp
    global.alert = jest.fn();
    render(<Withdrawal />);
  });

  test('renders "Withdraw Funds" heading', () => {
    expect(screen.getByRole('heading', { name: /Withdraw Funds/i, level: 2 })).toBeInTheDocument();
  });

  test('renders wallet address input field', () => {
    expect(screen.getByPlaceholderText('Enter your wallet address')).toBeInTheDocument();
  });

  test('renders network input field', () => {
    expect(screen.getByPlaceholderText('e.g., ERC20, TRC20, BEP20')).toBeInTheDocument();
  });

  test('renders OTP/2FA input field', () => {
    expect(screen.getByPlaceholderText('Enter OTP')).toBeInTheDocument();
  });

  test('renders "Send OTP" button', () => {
    expect(screen.getByRole('button', { name: /Send OTP/i })).toBeInTheDocument();
  });

  test('renders "Submit Withdrawal Request" button', () => {
    expect(screen.getByRole('button', { name: /Submit Withdrawal Request/i })).toBeInTheDocument();
  });

  test('allows wallet address to be entered', () => {
    const walletInput = screen.getByPlaceholderText('Enter your wallet address');
    fireEvent.change(walletInput, { target: { value: '0x123abc' } });
    expect(walletInput.value).toBe('0x123abc');
  });

  test('allows network to be entered', () => {
    const networkInput = screen.getByPlaceholderText('e.g., ERC20, TRC20, BEP20');
    fireEvent.change(networkInput, { target: { value: 'ERC20' } });
    expect(networkInput.value).toBe('ERC20');
  });

  test('allows OTP to be entered', () => {
    const otpInput = screen.getByPlaceholderText('Enter OTP');
    fireEvent.change(otpInput, { target: { value: '123456' } });
    expect(otpInput.value).toBe('123456');
  });

  test('"Send OTP" button click calls alert', () => {
    fireEvent.click(screen.getByRole('button', { name: /Send OTP/i }));
    expect(global.alert).toHaveBeenCalledWith('OTP sending functionality to be implemented.');
  });

  test('form submission with mock alert', () => {
    fireEvent.change(screen.getByPlaceholderText('Enter your wallet address'), { target: { value: '0x123abc' } });
    fireEvent.change(screen.getByPlaceholderText('e.g., ERC20, TRC20, BEP20'), { target: { value: 'ERC20' } });
    fireEvent.change(screen.getByPlaceholderText('Enter OTP'), { target: { value: '123456' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit Withdrawal Request/i }));
    expect(global.alert).toHaveBeenCalledWith('Submitting withdrawal request for 0x123abc on ERC20 with OTP 123456');
  });
});
