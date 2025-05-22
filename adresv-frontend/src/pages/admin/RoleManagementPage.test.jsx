import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import RoleManagementPage from './RoleManagementPage';

// Mock the AdminDirectoryTable component
jest.mock('../../components/admin/roles/AdminDirectoryTable', () => {
  return jest.fn(() => <div data-testid="admin-directory-table-mock">Mocked AdminDirectoryTable</div>);
});

describe('RoleManagementPage Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <RoleManagementPage />
      </MemoryRouter>
    );
  });

  test('renders main "Role Management" heading', () => {
    expect(screen.getByRole('heading', { name: /Role Management/i, level: 1 })).toBeInTheDocument();
  });

  test('renders "Role Change Activity Logs" subheading', () => {
    expect(screen.getByRole('heading', { name: /Role Change Activity Logs/i, level: 2 })).toBeInTheDocument();
  });

  test('renders the mocked AdminDirectoryTable component', () => {
    expect(screen.getByTestId('admin-directory-table-mock')).toBeInTheDocument();
    expect(screen.getByText('Mocked AdminDirectoryTable')).toBeInTheDocument();
  });

  test('renders some mock activity log text', () => {
    // Check for a snippet of one of the mock log entries
    expect(screen.getByText(/User 'SuperAdmin' changed role of 'Alice Wonderland'/i)).toBeInTheDocument();
    expect(screen.getByText(/to 'User Admin' on/i)).toBeInTheDocument();
  });
});
