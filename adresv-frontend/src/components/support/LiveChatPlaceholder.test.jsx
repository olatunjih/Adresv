import React from 'react';
import { render, screen } from '@testing-library/react';
import LiveChatPlaceholder from './LiveChatPlaceholder';

describe('LiveChatPlaceholder Component', () => {
  beforeEach(() => {
    render(<LiveChatPlaceholder />);
  });

  test('renders the section title "Live Chat Support"', () => {
    expect(screen.getByText(/Live Chat Support/i)).toBeInTheDocument();
  });

  test('renders the "Coming Soon!" message', () => {
    // The text is "Live Chat: Coming Soon!" where "Coming Soon!" is emphasized
    expect(screen.getByText((content, element) => {
      const hasText = (node) => node.textContent === "Live Chat: Coming Soon!";
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child)
      );
      return elementHasText && childrenDontHaveText;
    })).toBeInTheDocument();
    
    // More specific check for the emphasized part
    const comingSoonSpan = screen.getByText("Coming Soon!");
    expect(comingSoonSpan).toBeInTheDocument();
    expect(comingSoonSpan).toHaveClass('font-semibold', 'text-indigo-600'); // Check for styling
  });

  test('renders informational text about the feature being under development', () => {
    expect(screen.getByText(/Our live chat feature is currently under development/i)).toBeInTheDocument();
  });

  test('renders a reminder to use the support ticket system', () => {
    const reminderText = screen.getByText(/In the meantime, please use our/i);
    expect(reminderText).toBeInTheDocument();
    
    const ticketLink = screen.getByRole('link', { name: /Support Ticket System/i });
    expect(ticketLink).toBeInTheDocument();
    expect(ticketLink).toHaveAttribute('href', '#ticketing-system');
  });
});
