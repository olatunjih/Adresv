import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AdminAnalyticsReportingPage from './AdminAnalyticsReportingPage';

describe('AdminAnalyticsReportingPage', () => {
  test('renders page title, all metric sections with placeholders, and export button', () => {
    render(
      <MemoryRouter>
        <AdminAnalyticsReportingPage />
      </MemoryRouter>
    );

    // Main title
    expect(screen.getByRole('heading', { name: /admin analytics and reporting/i })).toBeInTheDocument();

    // User Metrics Section
    expect(screen.getByRole('heading', { name: /user metrics/i })).toBeInTheDocument();
    expect(screen.getByText(/Total active users vs. inactive accounts: \[Data Here\]/i)).toBeInTheDocument();

    // Investment Metrics Section
    expect(screen.getByRole('heading', { name: /investment metrics/i })).toBeInTheDocument();
    expect(screen.getByText(/Total active investments and ROI distribution: \[Data\/Graph Here\]/i)).toBeInTheDocument();

    // Trading Metrics Section
    expect(screen.getByRole('heading', { name: /trading metrics/i })).toBeInTheDocument();
    expect(screen.getByText(/Total trade volume \(real and mock\): \[Data Here\]/i)).toBeInTheDocument();

    // Support Metrics Section
    expect(screen.getByRole('heading', { name: /support metrics/i })).toBeInTheDocument();
    expect(screen.getByText(/Total number of tickets submitted: \[Data Here\]/i)).toBeInTheDocument();

    // Export Functionality
    expect(screen.getByRole('button', { name: /download reports \(csv\/pdf\)/i })).toBeInTheDocument();
  });
});
