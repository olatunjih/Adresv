import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminLoginPage from './AdminLoginPage';

// Mock the AdminLoginForm component
jest.mock('../../components/admin/auth/AdminLoginForm', () => () => <div data-testid="admin-login-form-mock">AdminLoginForm Mock</div>);

describe('AdminLoginPage', () => {
  test('renders the main title and the mocked AdminLoginForm', () => {
    render(
      <MemoryRouter>
        <AdminLoginPage />
      </MemoryRouter>
    );

    // Check for the main title
    // The title text "Admin Portal Login" is inside an h1 within AdminLoginPage.jsx
    expect(screen.getByRole('heading', { name: /Admin Portal Login/i, level: 1 })).toBeInTheDocument();

    // Check for the mocked AdminLoginForm component
    expect(screen.getByTestId('admin-login-form-mock')).toBeInTheDocument();
    expect(screen.getByText('AdminLoginForm Mock')).toBeInTheDocument();
  });
});
