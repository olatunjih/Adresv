import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import KnowledgeBase from './KnowledgeBase';

describe('KnowledgeBase Component', () => {
  const faqsMock = [ // Using the same structure as in the component for consistency
    { question: "How do I reset my password?", answer: "To reset your password, go to the login page..." },
    { question: "What are the deposit fees?", answer: "Currently, Adresv does not charge any fees..." },
    { question: "How long do withdrawals take?", answer: "Withdrawal processing times vary..." },
    { question: "How do I enable Two-Factor Authentication (2FA)?", answer: "You can enable 2FA in your account security settings..." }
  ];

  beforeEach(() => {
    render(<KnowledgeBase />);
  });

  test('renders the section title "Frequently Asked Questions"', () => {
    expect(screen.getByText(/Frequently Asked Questions/i)).toBeInTheDocument();
  });

  test('renders all mock FAQ questions', () => {
    faqsMock.forEach(faq => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    });
  });

  test('clicking a question toggles the visibility of its answer', () => {
    const firstQuestionText = faqsMock[0].question;
    const firstAnswerText = faqsMock[0].answer; // Partial answer text is fine for getByText

    // Initially, the answer should not be visible
    expect(screen.queryByText(firstAnswerText, { exact: false })).not.toBeInTheDocument();

    // Click the first question
    const firstQuestionButton = screen.getByText(firstQuestionText);
    fireEvent.click(firstQuestionButton);

    // Now, the answer should be visible
    expect(screen.getByText(firstAnswerText, { exact: false })).toBeInTheDocument();

    // Click the first question again
    fireEvent.click(firstQuestionButton);

    // The answer should be hidden again
    expect(screen.queryByText(firstAnswerText, { exact: false })).not.toBeInTheDocument();
  });

  test('clicking another question hides the previously open answer and shows the new one', () => {
    const firstQuestionText = faqsMock[0].question;
    const firstAnswerText = faqsMock[0].answer;
    const secondQuestionText = faqsMock[1].question;
    const secondAnswerText = faqsMock[1].answer;

    // Click the first question to open it
    const firstQuestionButton = screen.getByText(firstQuestionText);
    fireEvent.click(firstQuestionButton);
    expect(screen.getByText(firstAnswerText, { exact: false })).toBeInTheDocument();

    // Click the second question
    const secondQuestionButton = screen.getByText(secondQuestionText);
    fireEvent.click(secondQuestionButton);

    // The first answer should now be hidden
    expect(screen.queryByText(firstAnswerText, { exact: false })).not.toBeInTheDocument();
    // The second answer should now be visible
    expect(screen.getByText(secondAnswerText, { exact: false })).toBeInTheDocument();
  });
});
