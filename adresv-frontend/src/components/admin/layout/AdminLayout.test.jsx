import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import AdminLayout from './AdminLayout';

// Mock useNavigate as it's used in AdminLayout for logout
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // import and retain default behavior
  useNavigate: () => mockNavigate, // supply mock for useNavigate
  Outlet: () => <div data-testid="outlet-mock">Outlet Content</div>, // Mock Outlet
}));

describe('AdminLayout Component', () => {
  let consoleSpy;
  let alertSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    mockNavigate.mockClear(); // Clear navigate mock calls

    render(
      <MemoryRouter initialEntries={['/admin']}>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            {/* Define a child route to test Outlet rendering */}
            <Route index element={<div data-testid="child-route-content">Mock Child Page</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
  });

  afterEach(() => {
    consoleSpy.mockRestore();
    alertSpy.mockRestore();
  });

  test('renders sidebar with "Admin Menu" title', () => {
    expect(screen.getByText(/Admin Menu/i)).toBeInTheDocument();
  });

  test('renders navigation links in the sidebar', () => {
    expect(screen.getByRole('link', { name: /Dashboard/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /User Management/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Platform Notifications/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Settings/i })).toBeInTheDocument();
  });

  test('renders the Outlet component for child routes', () => {
    // The Outlet itself is mocked to render a div with data-testid="outlet-mock"
    expect(screen.getByTestId('outlet-mock')).toBeInTheDocument();
    // If we want to check content passed *through* the Outlet, we would check for the child route content.
    // However, our mock Outlet replaces its children.
    // To test content rendering *through* Outlet, the Outlet mock needs to render its children.
    // For this test, verifying the mock Outlet is rendered is sufficient given the mock setup.
  });

  test('renders logout button and handles logout action', () => {
    const logoutButton = screen.getByRole('button', { name: /Logout/i });
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);

    expect(consoleSpy).toHaveBeenCalledWith("Admin logged out");
    expect(alertSpy).toHaveBeenCalledWith("Admin logged out (placeholder).");
    expect(mockNavigate).toHaveBeenCalledWith('/admin/login');
  });
});
