import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminUserManagementPage from './AdminUserManagementPage';

// Mock the UserDirectoryTable child component
jest.mock('../../components/admin/usermanagement/UserDirectoryTable', () => () => <div data-testid="user-directory-table-mock">UserDirectoryTable Mock</div>);

describe('AdminUserManagementPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminUserManagementPage />
      </MemoryRouter>
    );
  });

  test('renders the main title "User Management"', () => {
    expect(screen.getByRole('heading', { name: /User Management/i, level: 1 })).toBeInTheDocument();
  });

  test('renders the placeholder for the mocked UserDirectoryTable component', () => {
    expect(screen.getByTestId('user-directory-table-mock')).toBeInTheDocument();
    expect(screen.getByText('UserDirectoryTable Mock')).toBeInTheDocument();
  });
});
