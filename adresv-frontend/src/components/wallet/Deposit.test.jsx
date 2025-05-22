import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For enhanced matchers
import Deposit from './Deposit';

describe('Deposit Component', () => {
  beforeEach(() => {
    // Mock alert as it's used in the handleSubmit
    global.alert = jest.fn();
    render(<Deposit />);
  });

  test('renders "Deposit Funds" heading', () => {
    expect(screen.getByRole('heading', { name: /Deposit Funds/i, level: 2 })).toBeInTheDocument();
  });

  test('renders deposit type radio buttons', () => {
    expect(screen.getByLabelText('USDT ERC20')).toBeInTheDocument();
    expect(screen.getByLabelText('USDT TRC20')).toBeInTheDocument();
  });

  test('renders QR Code placeholder text', () => {
    expect(screen.getByText('QR Code Placeholder')).toBeInTheDocument();
  });

  test('renders "Confirm Deposited Amount" input field', () => {
    expect(screen.getByPlaceholderText('Enter amount')).toBeInTheDocument();
  });

  test('renders "Submit Deposit" button', () => {
    expect(screen.getByRole('button', { name: /Submit Deposit/i })).toBeInTheDocument();
  });

  test('allows deposit type to be changed', () => {
    const trc20Radio = screen.getByLabelText('USDT TRC20');
    fireEvent.click(trc20Radio);
    expect(trc20Radio.checked).toBe(true);

    const erc20Radio = screen.getByLabelText('USDT ERC20');
    fireEvent.click(erc20Radio);
    expect(erc20Radio.checked).toBe(true);
    expect(trc20Radio.checked).toBe(false);
  });

  test('allows amount to be entered', () => {
    const amountInput = screen.getByPlaceholderText('Enter amount');
    fireEvent.change(amountInput, { target: { value: '100' } });
    expect(amountInput.value).toBe('100');
  });

  test('form submission with mock alert', () => {
    fireEvent.change(screen.getByPlaceholderText('Enter amount'), { target: { value: '150' } });
    fireEvent.click(screen.getByLabelText('USDT TRC20'));
    fireEvent.click(screen.getByRole('button', { name: /Submit Deposit/i }));
    expect(global.alert).toHaveBeenCalledWith('Submitting deposit of 150 USDT TRC20');
  });
});
