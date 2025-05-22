import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DefaultAdminDashboardView from './DefaultAdminDashboardView';

describe('DefaultAdminDashboardView Component', () => {
  beforeEach(() => {
    render(<DefaultAdminDashboardView />);
  });

  test('renders main heading "Admin Dashboard"', () => {
    expect(screen.getByRole('heading', { name: /Admin Dashboard/i, level: 3 })).toBeInTheDocument();
  });

  test('renders its specific placeholder message', () => {
    expect(screen.getByText(/Select a role from the dropdown above to see a specific dashboard view./i)).toBeInTheDocument();
    expect(screen.getByText(/This area will display generic administrative information or role-specific tools based on your selection./i)).toBeInTheDocument();
  });
});
