import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MockTrades from './MockTrades';

describe('MockTrades Component', () => {
  beforeEach(() => {
    // Mock alert as it's used in handleJoinTrade
    global.alert = jest.fn();
    render(<MockTrades />);
  });

  afterEach(() => {
    delete global.alert;
  });

  test('renders the section title "Available Mock Trades"', () => {
    expect(screen.getByText(/Available Mock Trades/i)).toBeInTheDocument();
  });

  test('renders list items representing trades based on mock data', () => {
    // Check for the names of the mock trades
    expect(screen.getByText('BTC/USD Long')).toBeInTheDocument();
    expect(screen.getByText('ETH/USD Short')).toBeInTheDocument();
    expect(screen.getByText('SOL/USD Long')).toBeInTheDocument();
  });

  test('renders details for a trade item and the "Join Trade" button', () => {
    // Focus on the first trade item "BTC/USD Long"
    const tradeName = 'BTC/USD Long';
    const tradeEntryPrice = /Entry: \$50,000/i;
    const tradeFee = /Fee: \$5/i;
    const tradeParticipants = /Participants: 10\/50/i;

    // Find the container for this specific trade if possible, or check globally
    expect(screen.getByText(tradeName)).toBeInTheDocument();
    expect(screen.getByText(tradeEntryPrice)).toBeInTheDocument();
    expect(screen.getByText(tradeFee)).toBeInTheDocument();
    expect(screen.getByText(tradeParticipants)).toBeInTheDocument();

    // Check for the "Join Trade" button associated with this trade.
    // Since there are multiple, we can get all and check one.
    const joinButtons = screen.getAllByRole('button', { name: /Join Trade/i });
    expect(joinButtons.length).toBeGreaterThan(0);
    // A more specific test might involve finding the button within the specific trade's div/article
    // For now, checking one exists is a good start.
    expect(joinButtons[0]).toBeInTheDocument(); 
  });

  test('calls alert when "Join Trade" is clicked (placeholder test)', () => {
    const joinButtons = screen.getAllByRole('button', { name: /Join Trade/i });
    fireEvent.click(joinButtons[0]); // Click the first "Join Trade" button
    // The tradeId passed to alert will depend on the mock data
    expect(global.alert).toHaveBeenCalledWith('Joining trade ID: 1'); 
  });
});
