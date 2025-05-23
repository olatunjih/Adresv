import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminWalletTransactionsPage from './AdminWalletTransactionsPage';

describe('AdminWalletTransactionsPage', () => {
  test('renders page title, transaction table, dispute section, and analytics placeholders', () => {
    render(
      <MemoryRouter>
        <AdminWalletTransactionsPage />
      </MemoryRouter>
    );

    // Main title
    expect(screen.getByRole('heading', { name: /admin wallet & transactions management/i })).toBeInTheDocument();

    // Transaction Overview Section
    expect(screen.getByRole('heading', { name: /transaction overview/i })).toBeInTheDocument();
    // Use getAllByRole if multiple tables exist, or more specific selectors
    // The component has multiple tables, so we'll identify them by their content or structure if needed.
    // For simplicity, we'll assume the order or use more specific queries if direct text matching is clear.
    
    // Check for transaction table headers and data
    expect(screen.getByText('User ID')).toBeInTheDocument(); // Header in transaction table
    expect(screen.getByText('Amount')).toBeInTheDocument(); // Header in transaction table
    expect(screen.getByText('Status')).toBeInTheDocument(); // Header in transaction table
    expect(screen.getByText('user001')).toBeInTheDocument(); // Mock transaction data (User ID)
    expect(screen.getByText('0xabc123...')).toBeInTheDocument(); // Mock transaction data (Transaction ID)

    // Dispute Management Section
    expect(screen.getByRole('heading', { name: /dispute management/i })).toBeInTheDocument();
    // Check for dispute table data (mock data)
    expect(screen.getByText(/User claims funds not reflected/i)).toBeInTheDocument(); // Part of a mock dispute reason
    // Check for an action button (e.g., "Approve Dispute")
    // There might be multiple such buttons, so we check if at least one exists.
    expect(screen.getAllByText('Approve Dispute')[0]).toBeInTheDocument();

    // Analytics Section
    expect(screen.getByRole('heading', { name: /analytics/i })).toBeInTheDocument();
    expect(screen.getByText(/\[Graph: Total deposits and withdrawals over time\]/i)).toBeInTheDocument();
    // Also checking another placeholder from the component to be sure
    expect(screen.getByText(/\[Graph: Percentage of failed vs. successful transactions\]/i)).toBeInTheDocument();


    // Verifying table presence more robustly by checking for tables related to sections
    const allTables = screen.getAllByRole('table');
    // Assuming the first table is for transactions and the second for disputes
    // This can be fragile; more specific selectors (e.g., `aria-labelledby` on tables) would be better in a complex app.
    expect(allTables.length).toBeGreaterThanOrEqual(2); 
    // Check that the transaction table (assumed first) contains expected headers/data
    expect(allTables[0]).toHaveTextContent('User ID');
    expect(allTables[0]).toHaveTextContent('0xabc123...');
    // Check that the dispute table (assumed second) contains expected headers/data
    expect(allTables[1]).toHaveTextContent('User Reason');
    expect(allTables[1]).toHaveTextContent(/User claims funds not reflected/i);
  });
});
