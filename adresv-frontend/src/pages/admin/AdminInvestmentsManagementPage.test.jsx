import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Important for page components
import AdminInvestmentsManagementPage from './AdminInvestmentsManagementPage';

describe('AdminInvestmentsManagementPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminInvestmentsManagementPage />
      </MemoryRouter>
    );
  });

  test('renders the main heading "Admin Investments Management"', () => {
    const heading = screen.getByRole('heading', { 
      name: /Admin Investments Management/i,
      level: 1 // Assuming h1 for the main page title
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the placeholder paragraph', () => {
    const paragraph = screen.getByText(/Oversee and manage all investment-related activities and products here./i);
    expect(paragraph).toBeInTheDocument();
  });
});
