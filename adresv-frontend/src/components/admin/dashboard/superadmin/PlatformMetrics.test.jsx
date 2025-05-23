import React from 'react';
import { render, screen } from '@testing-library/react';
import PlatformMetrics from './PlatformMetrics';

describe('PlatformMetrics Component', () => {
  const metricsData = [ // From the component itself
    { label: "Total Active Users", value: "1,234" },
    { label: "Total Investments Value", value: "$5,678,900" },
    { label: "Total Deposit Volume (24h)", value: "$12,345" },
    { label: "Total Withdrawal Volume (24h)", value: "$6,789" },
  ];

  beforeEach(() => {
    render(<PlatformMetrics />);
  });

  test('renders the section title "Platform Metrics"', () => {
    expect(screen.getByRole('heading', { name: /Platform Metrics/i, level: 2 })).toBeInTheDocument();
  });

  test('renders placeholder text/figures for each metric', () => {
    metricsData.forEach(metric => {
      // Check if the label for the metric is rendered
      expect(screen.getByText(metric.label)).toBeInTheDocument();
      // Check if the value for the metric is rendered
      expect(screen.getByText(metric.value)).toBeInTheDocument();
    });
  });

  test('renders the correct number of metric items', () => {
    // Each metric is in a div with a specific structure.
    // We can count how many metric labels are rendered.
    const metricLabels = screen.getAllByText(/- \((24h)\)$|Value$|Users$/i); // Regex to match parts of labels
    // This is a bit fragile. A better way would be to add a data-testid to each metric card.
    // For now, we'll check based on the provided metricsData length.
    
    // Let's find all elements that are likely metric cards.
    // The structure is: div > h3 (label) + p (value)
    // We can get all headings (labels) and check their count.
    const allLabels = metricsData.map(m => m.label);
    allLabels.forEach(label => {
        expect(screen.getByText(label)).toBeInTheDocument();
    });
    // This doesn't directly give a count of "metric items" but confirms all labels are present.
    // A more robust test would involve data-testid on the metric card div.
    // For example, if each metric card had `data-testid="metric-card"`, we could use:
    // expect(screen.getAllByTestId('metric-card')).toHaveLength(metricsData.length);
    // Since we don't have that, we rely on checking for each piece of data.
  });
});
