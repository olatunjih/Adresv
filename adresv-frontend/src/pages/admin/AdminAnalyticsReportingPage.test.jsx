import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Important for page components
import AdminAnalyticsReportingPage from './AdminAnalyticsReportingPage';

describe('AdminAnalyticsReportingPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AdminAnalyticsReportingPage />
      </MemoryRouter>
    );
  });

  test('renders the main heading "Admin Analytics and Reporting"', () => {
    const heading = screen.getByRole('heading', { 
      name: /Admin Analytics and Reporting/i,
      level: 1 // Assuming h1 for the main page title
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the placeholder paragraph', () => {
    const paragraph = screen.getByText(/View key metrics, generate reports, and gain insights into platform performance here./i);
    expect(paragraph).toBeInTheDocument();
  });
});
