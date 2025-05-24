import React from 'react';
import { render, screen } from '@testing-library/react';
import GraphicalSummary from './GraphicalSummary';

describe('GraphicalSummary Component', () => {
  test('renders correctly and displays placeholder text', () => {
    render(<GraphicalSummary />);
    
    // Check for the heading
    expect(screen.getByText('Graphical Summary')).toBeInTheDocument();
    
    // Check for the placeholder text
    expect(screen.getByText(/Investment trends and ROI performance charts will be displayed here soon./i)).toBeInTheDocument();
  });
});
