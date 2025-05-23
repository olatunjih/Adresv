import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminMaintenancePage from './AdminMaintenancePage';

describe('AdminMaintenancePage', () => {
  test('renders page title, maintenance controls, custom message section, and monitoring placeholders', () => {
    render(
      <MemoryRouter>
        <AdminMaintenancePage />
      </MemoryRouter>
    );

    // Main title
    expect(screen.getByRole('heading', { name: /admin maintenance management/i })).toBeInTheDocument();

    // System Toggles Section
    expect(screen.getByRole('heading', { name: /maintenance mode control/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/enable platform-wide maintenance mode/i)).toBeInTheDocument();
    // Check for the label of the secret URLs display area
    expect(screen.getByText(/secret login\/registration urls for admin testing:/i)).toBeInTheDocument();
    // Check for some of the placeholder content within the secret URLs display
    expect(screen.getByText(/e\.g\., \/login\?admin_bypass=TOKEN_HERE/i)).toBeInTheDocument();


    // Custom Maintenance Messages Section
    expect(screen.getByRole('heading', { name: /custom maintenance message/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/compose message for users during maintenance:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save message/i })).toBeInTheDocument();

    // System Monitoring (Placeholder) Section
    expect(screen.getByRole('heading', { name: /system monitoring/i })).toBeInTheDocument();
    // Check for the first placeholder text
    expect(screen.getByText(/\[Real-time system performance stats \(e\.g\., server uptime, active sessions\) will be displayed here\]/i)).toBeInTheDocument();
    // Check for the second placeholder text to be more thorough
    expect(screen.getByText(/\[Alerts for critical issues detected during maintenance will be shown here\]/i)).toBeInTheDocument();
  });
});
