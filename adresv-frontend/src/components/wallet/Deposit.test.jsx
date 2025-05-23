import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Deposit from './Deposit';

describe('Deposit Component', () => {
  beforeEach(() => {
    render(<Deposit />);
  });

  test('renders the section title "Deposit Funds"', () => {
    expect(screen.getByText(/Deposit Funds/i)).toBeInTheDocument();
  });

  test('renders amount input field', () => {
    expect(screen.getByPlaceholderText(/Enter amount/i)).toBeInTheDocument();
  });

  test('renders deposit type selection radio buttons', () => {
    expect(screen.getByLabelText(/USDT ERC20/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/USDT TRC20/i)).toBeInTheDocument();
  });

  test('allows changing deposit type', () => {
    const trc20Radio = screen.getByLabelText(/USDT TRC20/i);
    fireEvent.click(trc20Radio);
    expect(trc20Radio.checked).toBe(true);

    const erc20Radio = screen.getByLabelText(/USDT ERC20/i);
    fireEvent.click(erc20Radio);
    expect(erc20Radio.checked).toBe(true);
    expect(trc20Radio.checked).toBe(false);
  });

  test('renders the submit button', () => {
    expect(screen.getByRole('button', { name: /Submit Deposit/i })).toBeInTheDocument();
  });

  test('updates amount on input change', () => {
    const amountInput = screen.getByPlaceholderText(/Enter amount/i);
    fireEvent.change(amountInput, { target: { value: '123' } });
    expect(amountInput.value).toBe('123');
  });
});
