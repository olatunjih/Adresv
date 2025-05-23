import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminDashboardPage from './AdminDashboardPage';

// Mock child components
jest.mock('../../components/admin/dashboard/superadmin/PlatformMetrics', () => () => <div data-testid="platform-metrics-mock">PlatformMetrics Mock</div>);
jest.mock('../../components/admin/dashboard/superadmin/AdminActivityLogs', () => () => <div data-testid="admin-activity-logs-mock">AdminActivityLogs Mock</div>);
jest.mock('../../components/admin/dashboard/superadmin/SystemToggles', () => () => <div data-testid="system-toggles-mock">SystemToggles Mock</div>);

describe('AdminDashboardPage', () => {
  test('renders the main title, TODO comment, and child component placeholders', () => {
    render(
      <MemoryRouter>
        <AdminDashboardPage />
      </MemoryRouter>
    );

    // Check for the main title
    expect(screen.getByText(/Admin Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/\(Super Admin View\)/i)).toBeInTheDocument();

    // Check for the TODO comment (by checking if the component renders any text node containing it)
    // This is a bit fragile; might be better to check for a specific element if the comment were wrapped.
    // For now, we check if the text content of the page includes the core part of the comment.
    const pageContent = screen.getByRole('main').textContent; // Assuming the main content is within a <main> or similar role.
                                                         // The AdminDashboardPage itself is a div. Let's use the container.
    const fullPageContent = document.body.textContent;
    expect(fullPageContent).toContain('TODO: Add logic here to determine the admin\'s role');


    // Check for mocked child components
    expect(screen.getByTestId('platform-metrics-mock')).toBeInTheDocument();
    expect(screen.getByText('PlatformMetrics Mock')).toBeInTheDocument();

    expect(screen.getByTestId('admin-activity-logs-mock')).toBeInTheDocument();
    expect(screen.getByText('AdminActivityLogs Mock')).toBeInTheDocument();

    expect(screen.getByTestId('system-toggles-mock')).toBeInTheDocument();
    expect(screen.getByText('SystemToggles Mock')).toBeInTheDocument();
  });
});
