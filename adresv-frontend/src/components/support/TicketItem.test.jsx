import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TicketItem from './TicketItem';

describe('TicketItem Component', () => {
  const defaultProps = {
    id: 'TKT-001',
    category: 'Deposits',
    subject: 'USDT deposit not reflected',
    status: 'Open',
    lastUpdated: '30 minutes ago',
  };

  test('renders correctly with all props', () => {
    render(<TicketItem {...defaultProps} />);

    expect(screen.getByText(defaultProps.subject)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.status)).toBeInTheDocument(); // Status badge text
    expect(screen.getByText((content, element) => content.includes(defaultProps.category))).toBeInTheDocument();
    expect(screen.getByText((content, element) => content.includes(defaultProps.id))).toBeInTheDocument();
    expect(screen.getByText((content, element) => content.includes(defaultProps.lastUpdated))).toBeInTheDocument();
  });

  test('status "Open" has correct styling', () => {
    render(<TicketItem {...defaultProps} status="Open" />);
    const statusBadge = screen.getByText('Open');
    expect(statusBadge).toHaveClass('bg-green-100', 'text-green-700');
  });

  test('status "In Progress" has correct styling', () => {
    render(<TicketItem {...defaultProps} status="In Progress" />);
    const statusBadge = screen.getByText('In Progress');
    expect(statusBadge).toHaveClass('bg-yellow-100', 'text-yellow-700');
  });

  test('status "Resolved" has correct styling', () => {
    render(<TicketItem {...defaultProps} status="Resolved" />);
    const statusBadge = screen.getByText('Resolved');
    expect(statusBadge).toHaveClass('bg-blue-100', 'text-blue-700');
  });

  test('status "Closed" has correct styling', () => {
    render(<TicketItem {...defaultProps} status="Closed" />);
    const statusBadge = screen.getByText('Closed');
    expect(statusBadge).toHaveClass('bg-gray-100', 'text-gray-700');
  });
});
