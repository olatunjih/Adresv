import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import UserSecurity from './UserSecurity';

describe('UserSecurity Component', () => {
  test('renders correctly and displays security links', () => {
    render(
      <MemoryRouter>
        <UserSecurity />
      </MemoryRouter>
    );
    
    // Check for the heading
    expect(screen.getByText('User Security')).toBeInTheDocument();
    
    // Check for the "Update Password" link
    expect(screen.getByText('Update Password')).toBeInTheDocument();
    expect(screen.getByText('Update Password').closest('a')).toHaveAttribute('href', '/profile/security#update-password');
    
    // Check for the "Enable 2FA" link
    expect(screen.getByText('Enable 2FA')).toBeInTheDocument();
    expect(screen.getByText('Enable 2FA').closest('a')).toHaveAttribute('href', '/profile/security#enable-2fa');
  });
});
