import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import AdminDashboardPage from './AdminDashboardPage';

// Mock all view components
jest.mock('../../components/admin/dashboard/SuperAdminDashboardView', () => () => <div data-testid="super-admin-view">Mocked SuperAdminView</div>);
jest.mock('../../components/admin/dashboard/UserAdminDashboardView', () => () => <div data-testid="user-admin-view">Mocked UserAdminView</div>);
jest.mock('../../components/admin/dashboard/GlobalAdminDashboardView', () => () => <div data-testid="global-admin-view">Mocked GlobalAdminView</div>);
jest.mock('../../components/admin/dashboard/BillingAdminDashboardView', () => () => <div data-testid="billing-admin-view">Mocked BillingAdminView</div>);
jest.mock('../../components/admin/dashboard/MessageAdminDashboardView', () => () => <div data-testid="message-admin-view">Mocked MessageAdminView</div>);
jest.mock('../../components/admin/dashboard/DefaultAdminDashboardView', () => () => <div data-testid="default-admin-view">Mocked DefaultAdminView</div>);

describe('AdminDashboardPage Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminDashboardPage />
      </MemoryRouter>
    );
  });

  test('renders main "Admin Dashboard" heading and role selection dropdown', () => {
    expect(screen.getByRole('heading', { name: /Admin Dashboard/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Mock Role:/i)).toBeInTheDocument();
  });

  test('default view is SuperAdminView (or DefaultAdminView if Super Admin is not default)', () => {
    // The initial state for currentMockRole in AdminDashboardPage is "Super Admin"
    expect(screen.getByTestId('super-admin-view')).toBeInTheDocument();
    expect(screen.getByText('Mocked SuperAdminView')).toBeInTheDocument();
    expect(screen.queryByTestId('default-admin-view')).not.toBeInTheDocument();
  });

  test('changing role to "User Admin" renders UserAdminView', () => {
    const roleSelect = screen.getByLabelText(/Select Mock Role:/i);
    fireEvent.change(roleSelect, { target: { value: 'User Admin' } });

    expect(screen.getByTestId('user-admin-view')).toBeInTheDocument();
    expect(screen.getByText('Mocked UserAdminView')).toBeInTheDocument();
    expect(screen.queryByTestId('super-admin-view')).not.toBeInTheDocument();
  });

  test('changing role to "Billing Admin" renders BillingAdminView', () => {
    const roleSelect = screen.getByLabelText(/Select Mock Role:/i);
    fireEvent.change(roleSelect, { target: { value: 'Billing Admin' } });

    expect(screen.getByTestId('billing-admin-view')).toBeInTheDocument();
    expect(screen.getByText('Mocked BillingAdminView')).toBeInTheDocument();
    expect(screen.queryByTestId('super-admin-view')).not.toBeInTheDocument();
  });
  
  test('changing role to "Global Admin" renders GlobalAdminView', () => {
    const roleSelect = screen.getByLabelText(/Select Mock Role:/i);
    fireEvent.change(roleSelect, { target: { value: 'Global Admin' } });

    expect(screen.getByTestId('global-admin-view')).toBeInTheDocument();
    expect(screen.getByText('Mocked GlobalAdminView')).toBeInTheDocument();
  });

  test('changing role to "Message Admin" renders MessageAdminView', () => {
    const roleSelect = screen.getByLabelText(/Select Mock Role:/i);
    fireEvent.change(roleSelect, { target: { value: 'Message Admin' } });

    expect(screen.getByTestId('message-admin-view')).toBeInTheDocument();
    expect(screen.getByText('Mocked MessageAdminView')).toBeInTheDocument();
  });
});
