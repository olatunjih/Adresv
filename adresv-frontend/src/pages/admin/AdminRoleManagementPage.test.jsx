import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminRoleManagementPage from './AdminRoleManagementPage';

// Mock child components
jest.mock('../../components/admin/roles/AdminDirectory', () => () => <div data-testid="admin-directory-mock">AdminDirectory Mock</div>);
// The Role Assignment Activity Log is currently part of AdminRoleManagementPage directly, not a separate mocked component.

describe('AdminRoleManagementPage with default logs', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminRoleManagementPage /> 
      </MemoryRouter>
    );
  });

  test('renders the main title "Admin Role Management"', () => {
    expect(screen.getByRole('heading', { name: /Admin Role Management/i, level: 1 })).toBeInTheDocument();
  });

  test('renders the title for the "Role Assignment Activity Log" section', () => {
    expect(screen.getByRole('heading', { name: /Role Assignment Activity Log/i, level: 2 })).toBeInTheDocument();
  });

  test('renders the placeholder for the AdminDirectory mock component', () => {
    expect(screen.getByTestId('admin-directory-mock')).toBeInTheDocument();
    expect(screen.getByText('AdminDirectory Mock')).toBeInTheDocument();
  });

  test('renders mock role activity log entries by default', () => {
    // Check for some text from the default mock log entries
    expect(screen.getByText(/User 'Bob The Builder' roles changed/i)).toBeInTheDocument();
    expect(screen.getByText(/User 'Charlie Brown' roles changed/i)).toBeInTheDocument();
    expect(screen.getByText(/User 'Diana Prince' roles changed/i)).toBeInTheDocument();
  });
});

describe('AdminRoleManagementPage with no activity logs', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminRoleManagementPage roleActivityLogs={[]} />
      </MemoryRouter>
    );
  });

  test('renders the main title "Admin Role Management"', () => {
    expect(screen.getByRole('heading', { name: /Admin Role Management/i, level: 1 })).toBeInTheDocument();
  });
  
  test('renders the placeholder for AdminDirectory mock', () => {
    expect(screen.getByTestId('admin-directory-mock')).toBeInTheDocument();
  });

  test('renders the "Role Assignment Activity Log" title', () => {
    expect(screen.getByRole('heading', { name: /Role Assignment Activity Log/i, level: 2 })).toBeInTheDocument();
  });

  test('displays placeholder message when no activity logs are provided', () => {
    expect(screen.getByText('A log of recent role changes will be displayed here.')).toBeInTheDocument();
    // Ensure no log items are rendered
    expect(screen.queryByText(/User 'Bob The Builder' roles changed/i)).not.toBeInTheDocument();
  });
});
