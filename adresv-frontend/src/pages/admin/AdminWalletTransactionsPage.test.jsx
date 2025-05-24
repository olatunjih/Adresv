import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Important for page components
import AdminWalletTransactionsPage from './AdminWalletTransactionsPage';

describe('AdminWalletTransactionsPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminWalletTransactionsPage />
      </MemoryRouter>
    );
  });

  test('renders the main heading "Admin Wallet & Transactions"', () => {
    const heading = screen.getByRole('heading', { 
      name: /Admin Wallet & Transactions/i,
      level: 1 // Assuming h1 for the main page title
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the placeholder paragraph', () => {
    const paragraph = screen.getByText(/Monitor and manage user wallets and platform transactions here./i);
    expect(paragraph).toBeInTheDocument();
  });
});
