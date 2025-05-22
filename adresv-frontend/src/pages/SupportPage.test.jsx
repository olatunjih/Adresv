import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom'; // MemoryRouter is good for testing components that use Link or routing features
import SupportPage from './SupportPage';

// Mock child components to isolate SupportPage tests
jest.mock('../components/support/SubmitTicketForm', () => () => <div data-testid="submit-ticket-form-mock">SubmitTicketForm Mock</div>);
jest.mock('../components/support/TicketList', () => () => <div data-testid="ticket-list-mock">TicketList Mock</div>);
jest.mock('../components/support/LiveChatPlaceholder', () => () => <div data-testid="live-chat-mock">LiveChatPlaceholder Mock</div>);
jest.mock('../components/support/KnowledgeBasePlaceholder', () => () => <div data-testid="knowledge-base-mock">KnowledgeBasePlaceholder Mock</div>);

describe('SupportPage Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <SupportPage />
      </MemoryRouter>
    );
  });

  test('renders the main "Support Page" heading', () => {
    expect(screen.getByRole('heading', { name: /Support Page/i, level: 1 })).toBeInTheDocument();
  });

  test('renders mocked child components', () => {
    expect(screen.getByTestId('submit-ticket-form-mock')).toBeInTheDocument();
    expect(screen.getByText('SubmitTicketForm Mock')).toBeInTheDocument();

    expect(screen.getByTestId('ticket-list-mock')).toBeInTheDocument();
    expect(screen.getByText('TicketList Mock')).toBeInTheDocument();

    expect(screen.getByTestId('live-chat-mock')).toBeInTheDocument();
    expect(screen.getByText('LiveChatPlaceholder Mock')).toBeInTheDocument();

    expect(screen.getByTestId('knowledge-base-mock')).toBeInTheDocument();
    expect(screen.getByText('KnowledgeBasePlaceholder Mock')).toBeInTheDocument();
  });
});
