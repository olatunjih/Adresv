import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Important for page components
import AdminMaintenanceManagementPage from './AdminMaintenanceManagementPage';

describe('AdminMaintenanceManagementPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminMaintenanceManagementPage />
      </MemoryRouter>
    );
  });

  test('renders the main heading "Admin Maintenance Management"', () => {
    const heading = screen.getByRole('heading', { 
      name: /Admin Maintenance Management/i,
      level: 1 // Assuming h1 for the main page title
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the placeholder paragraph', () => {
    const paragraph = screen.getByText(/Manage site settings, perform maintenance tasks, and monitor system health here./i);
    expect(paragraph).toBeInTheDocument();
  });
});
