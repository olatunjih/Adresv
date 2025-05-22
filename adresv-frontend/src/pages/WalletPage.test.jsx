import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WalletPage from './WalletPage';

// Mock child components
jest.mock('../components/wallet/Deposit', () => () => <div data-testid="deposit-mock">Deposit Component Mock</div>);
jest.mock('../components/wallet/Withdrawal', () => () => <div data-testid="withdrawal-mock">Withdrawal Component Mock</div>);
jest.mock('../components/wallet/TransactionHistory', () => () => <div data-testid="transaction-history-mock">Transaction History Component Mock</div>);

describe('WalletPage', () => {
  test('renders the main title and child component placeholders', () => {
    render(
      <MemoryRouter>
        <WalletPage />
      </MemoryRouter>
    );

    // Check for the main title (adjust text if necessary based on actual component)
    expect(screen.getByText(/Wallet Dashboard/i)).toBeInTheDocument();

    // Check for mocked child components
    expect(screen.getByTestId('deposit-mock')).toBeInTheDocument();
    expect(screen.getByText('Deposit Component Mock')).toBeInTheDocument();

    expect(screen.getByTestId('withdrawal-mock')).toBeInTheDocument();
    expect(screen.getByText('Withdrawal Component Mock')).toBeInTheDocument();

    expect(screen.getByTestId('transaction-history-mock')).toBeInTheDocument();
    expect(screen.getByText('Transaction History Component Mock')).toBeInTheDocument();
  });
});
