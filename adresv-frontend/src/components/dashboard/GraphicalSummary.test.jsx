import React from 'react';
import { render, screen } from '@testing-library/react';
import GraphicalSummary from './GraphicalSummary';

describe('GraphicalSummary Component', () => {
  beforeEach(() => {
    render(<GraphicalSummary />);
  });

  test('renders the heading "Graphical Summary"', () => {
    const heading = screen.getByRole('heading', { 
      name: /Graphical Summary/i,
      level: 3 // As defined in the component h3
    });
    expect(heading).toBeInTheDocument();
  });

  test('renders the chart placeholder text', () => {
    const placeholder = screen.getByText(/Chart placeholder/i);
    expect(placeholder).toBeInTheDocument();
  });

  test('renders the placeholder SVG icon', () => {
    // Check for the presence of SVG (could be more specific if needed)
    const svgElement = document.querySelector('svg'); // Simple check
    expect(svgElement).toBeInTheDocument();
  });

  test('applies correct styling to the main section', () => {
    const sectionElement = screen.getByText(/Chart placeholder/i).closest('section');
    expect(sectionElement).toHaveClass('bg-white', 'p-6', 'rounded-lg', 'shadow-md');
  });

  test('applies correct styling to the chart placeholder div', () => {
    const placeholderDiv = screen.getByText(/Chart placeholder/i).closest('div');
    expect(placeholderDiv).toHaveClass('bg-gray-100', 'p-4', 'rounded-lg', 'text-center', 'text-gray-500', 'h-64', 'flex', 'items-center', 'justify-center');
  });
});
