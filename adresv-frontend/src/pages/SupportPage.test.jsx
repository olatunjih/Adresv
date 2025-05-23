import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SupportPage from './SupportPage';

// Mock child components
jest.mock('../components/support/TicketingSystem', () => () => <div data-testid="ticketing-system-mock">Ticketing System Mock</div>);
jest.mock('../components/support/LiveChatPlaceholder', () => () => <div data-testid="live-chat-mock">Live Chat Placeholder Mock</div>);
jest.mock('../components/support/KnowledgeBase', () => () => <div data-testid="knowledge-base-mock">Knowledge Base Mock</div>);

describe('SupportPage', () => {
  test('renders the main title and child component placeholders', () => {
    render(
      <MemoryRouter>
        <SupportPage />
      </MemoryRouter>
    );

    // Check for the main title (adjust text if necessary based on actual component)
    expect(screen.getByText(/Customer Support/i)).toBeInTheDocument();

    // Check for mocked child components
    expect(screen.getByTestId('ticketing-system-mock')).toBeInTheDocument();
    expect(screen.getByText('Ticketing System Mock')).toBeInTheDocument();

    expect(screen.getByTestId('live-chat-mock')).toBeInTheDocument();
    expect(screen.getByText('Live Chat Placeholder Mock')).toBeInTheDocument();

    expect(screen.getByTestId('knowledge-base-mock')).toBeInTheDocument();
    expect(screen.getByText('Knowledge Base Mock')).toBeInTheDocument();
  });
});
