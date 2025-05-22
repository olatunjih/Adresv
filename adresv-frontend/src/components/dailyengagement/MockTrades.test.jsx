import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MockTrades from './MockTrades';

describe('MockTrades Component', () => {
  beforeEach(() => {
    global.alert = jest.fn(); // Mock alert for button clicks
    render(<MockTrades />);
  });

  test('renders "Available Mock Trades" heading', () => {
    expect(screen.getByRole('heading', { name: /Available Mock Trades/i, level: 2 })).toBeInTheDocument();
  });

  test('renders mock trade item details', () => {
    // Check for details from the first mock trade (BTC/USDT)
    expect(screen.getByText('BTC/USDT')).toBeInTheDocument();
    expect(screen.getByText((content, element) => content.startsWith('Entry:') && content.includes('$30,000'))).toBeInTheDocument();
    expect(screen.getByText((content, element) => content.startsWith('Target Exit:') && content.includes('$30,500'))).toBeInTheDocument();
    expect(screen.getByText('Participation Fee:')).toBeInTheDocument();
    expect(screen.getByText('1 USDT')).toBeInTheDocument(); // Part of the fee display
    expect(screen.getByText(/Participants: 15\/50/i)).toBeInTheDocument();
  });

  test('renders "Join Trade" buttons', () => {
    // Get all "Join Trade" buttons. There's also a "Full / Closed" button.
    const joinButtons = screen.getAllByRole('button', { name: /Join Trade/i });
    expect(joinButtons.length).toBeGreaterThan(0); // Ensure at least one such button exists
    expect(joinButtons[0]).toBeEnabled(); // First one should be enabled
  });

  test('renders a disabled button for a full/closed trade', () => {
    // Based on mockTradesData, the ADA/USDT trade is disabled
    const disabledButton = screen.getByRole('button', { name: /Full \/ Closed/i });
    expect(disabledButton).toBeInTheDocument();
    expect(disabledButton).toBeDisabled();
  });

  test('clicking "Join Trade" button triggers alert', () => {
    // Click the first available "Join Trade" button
    const firstJoinButton = screen.getAllByRole('button', { name: /Join Trade/i })[0];
    fireEvent.click(firstJoinButton);
    // The tradeId for the first item is 1
    expect(global.alert).toHaveBeenCalledWith('Attempting to join trade ID: 1. Functionality to be implemented.');
  });
});
