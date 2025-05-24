import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Important for page components
import AdminEngagementActivitiesPage from './AdminEngagementActivitiesPage';

describe('AdminEngagementActivitiesPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminEngagementActivitiesPage />
      </MemoryRouter>
    );
  });

  test('renders the main heading "Admin Engagement Activities"', () => {
    const heading = screen.getByRole('heading', { 
      name: /Admin Engagement Activities/i,
      level: 1 // Assuming h1 for the main page title
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the placeholder paragraph', () => {
    const paragraph = screen.getByText(/Track and manage user engagement and platform activities here./i);
    expect(paragraph).toBeInTheDocument();
  });
});
