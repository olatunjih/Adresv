import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import AdminLoginPage from './AdminLoginPage';

// Mock the AdminLoginForm component
jest.mock('../../components/admin/auth/AdminLoginForm', () => {
  return jest.fn(() => <div data-testid="admin-login-form-mock">Mocked AdminLoginForm</div>);
});

describe('AdminLoginPage Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminLoginPage />
      </MemoryRouter>
    );
  });

  test('renders the main "Admin Login" heading', () => {
    expect(screen.getByRole('heading', { name: /Admin Login/i, level: 1 })).toBeInTheDocument();
  });

  test('renders the mocked AdminLoginForm component', () => {
    expect(screen.getByTestId('admin-login-form-mock')).toBeInTheDocument();
    expect(screen.getByText('Mocked AdminLoginForm')).toBeInTheDocument();
  });
});
