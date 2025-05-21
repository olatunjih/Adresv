import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WalletPage from './WalletPage';

// Mock child components to isolate WalletPage tests and check for their presence by text
// This also avoids issues if child components have their own complex logic or routing dependencies
jest.mock('../components/wallet/Deposit', () => () => <div>Deposit Funds</div>);
jest.mock('../components/wallet/Withdrawal', () => () => <div>Withdraw Funds</div>);
jest.mock('../components/wallet/TransactionHistory', () => () => <div>Transaction History</div>);

describe('WalletPage', () => {
  test('renders Wallet heading', () => {
    render(
      <MemoryRouter>
        <WalletPage />
      </MemoryRouter>
    );
    // The main heading for the WalletPage itself
    const headingElement = screen.getByRole('heading', { name: /Wallet/i, level: 1 });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders sub-component representative texts (mocked headings)', () => {
    render(
      <MemoryRouter>
        <WalletPage />
      </MemoryRouter>
    );
    // Check for the text that our mocked components render
    expect(screen.getByText('Deposit Funds')).toBeInTheDocument();
    expect(screen.getByText('Withdraw Funds')).toBeInTheDocument();
    expect(screen.getByText('Transaction History')).toBeInTheDocument();
  });
});
