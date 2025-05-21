import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For enhanced matchers
import TransactionHistory from './TransactionHistory';

describe('TransactionHistory Component', () => {
  beforeEach(() => {
    render(<TransactionHistory />);
  });

  test('renders "Transaction History" heading', () => {
    expect(screen.getByRole('heading', { name: /Transaction History/i, level: 2 })).toBeInTheDocument();
  });

  test('renders table headers', () => {
    expect(screen.getByRole('columnheader', { name: /Date/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Amount/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Network/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /Status/i })).toBeInTheDocument();
  });

  test('renders mock transaction data', () => {
    // Check for data from the first mock transaction
    expect(screen.getByText('2024-03-15')).toBeInTheDocument(); // Date
    expect(screen.getByText('100 USDT')).toBeInTheDocument();  // Amount
    // Check a status to ensure the getStatusClass logic is covered at least superficially
    expect(screen.getByText('Completed')).toBeInTheDocument();

    // Check for data from the withdrawal transaction
    expect(screen.getByText('-75 USDT')).toBeInTheDocument();
  });

  test('renders all mock transactions', () => {
    // Based on the mock data provided in TransactionHistory.jsx
    const transactions = [
      { date: '2024-03-15', amount: '100 USDT', network: 'ERC20', status: 'Completed' },
      { date: '2024-03-14', amount: '50 USDT', network: 'TRC20', status: 'Pending' },
      { date: '2024-03-13', amount: '200 USDT', network: 'BEP20', status: 'Confirmed' },
      { date: '2024-03-12', amount: '-75 USDT', network: 'ERC20', status: 'Completed' },
    ];

    transactions.forEach(tx => {
      expect(screen.getByText(tx.date)).toBeInTheDocument();
      expect(screen.getByText(tx.amount)).toBeInTheDocument();
      expect(screen.getAllByText(tx.network)[0]).toBeInTheDocument(); // May appear multiple times if same network
      expect(screen.getAllByText(tx.status)[0]).toBeInTheDocument(); // May appear multiple times
    });
  });
});
