import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionHistory from './TransactionHistory';

describe('TransactionHistory Component', () => {
  beforeEach(() => {
    render(<TransactionHistory />);
  });

  test('renders the section title "Transaction History"', () => {
    expect(screen.getByText(/Transaction History/i)).toBeInTheDocument();
  });

  test('renders table headers', () => {
    // Check for table headers (using text content as they are <th> elements)
    // Tailwind applies uppercase, so we might need to match that or use a regex
    expect(screen.getByRole('columnheader', { name: /date/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /amount/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /network/i })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: /status/i })).toBeInTheDocument();
  });

  test('renders mock transaction data rows', () => {
    // Example: Check if at least one row is rendered based on mock data
    // This assumes your mock data has specific values you can query
    expect(screen.getByText('100 USDT')).toBeInTheDocument(); // Amount from first mock transaction
    expect(screen.getByText('ERC20')).toBeInTheDocument(); // Network from first mock transaction
    expect(screen.getAllByText('Completed').length).toBeGreaterThanOrEqual(1); // Status from mock transactions

    // Check for a different transaction to ensure multiple rows might be rendered
    expect(screen.getByText('50 USDT')).toBeInTheDocument(); 
    expect(screen.getByText('Pending')).toBeInTheDocument();
  });

  test('renders correct number of rows based on mock data', () => {
    const transactions = [
      { id: 1, date: '2024-03-15', amount: '100 USDT', network: 'ERC20', status: 'Completed' },
      { id: 2, date: '2024-03-14', amount: '50 USDT', network: 'TRC20', status: 'Pending' },
      { id: 3, date: '2024-03-13', amount: '200 USDT', network: 'BEP20', status: 'Confirmed' },
      { id: 4, date: '2024-03-12', amount: '-75 USDT', network: 'ERC20', status: 'Completed' },
    ];
    // `rows` will include the header row, so we expect transactions.length + 1
    // A more robust way is to query for `rowgroup` (tbody) and then its rows, or query by cell content.
    const tableRows = screen.getAllByRole('row'); 
    expect(tableRows.length).toBe(transactions.length + 1); // +1 for the header row
  });
});
