import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import GraphicalSummary from './GraphicalSummary';

// Note: We are not mocking react-apexcharts here to test its actual rendering behavior.

describe('GraphicalSummary Component', () => {
  test('renders main heading, sub-headings, and ApexCharts elements', async () => {
    const { container } = render(<GraphicalSummary />);
    
    // Check for the main heading (h3)
    expect(screen.getByRole('heading', { name: /Graphical Summary/i, level: 3 })).toBeInTheDocument();
    
    // Check for the sub-headings (h4)
    expect(screen.getByRole('heading', { name: /Monthly Investment Trends/i, level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Monthly ROI Performance \(%\)/i, level: 4 })).toBeInTheDocument();
    
    // Check if the placeholder text is NOT present
    expect(screen.queryByText(/Investment trends and ROI performance charts will be displayed here soon./i)).not.toBeInTheDocument();

    // Check for the presence of ApexCharts rendered elements.
    // ApexCharts typically creates an SVG element with the class 'apexcharts-svg' for each chart.
    // We use waitFor to handle any potential asynchronous rendering of the charts.
    await waitFor(() => {
      const chartElements = container.querySelectorAll('.apexcharts-svg');
      expect(chartElements.length).toBe(2); // Expecting two charts to be rendered

      // Optionally, you could also check for elements related to the chart IDs if ApexCharts
      // consistently creates them in an accessible way. For example:
      // expect(container.querySelector('[id*="investment-trends-chart"]')).toBeInTheDocument();
      // expect(container.querySelector('[id*="roi-performance-chart"]')).toBeInTheDocument();
      // The querySelectorAll('.apexcharts-svg') is generally robust.
    });
  });
});
