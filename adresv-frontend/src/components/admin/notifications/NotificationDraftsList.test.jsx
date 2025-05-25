import React from 'react';
import { render, screen, within } from '@testing-library/react';
import NotificationDraftsList from './NotificationDraftsList';

// Mock data for testing (same as default in component, but explicit here for clarity)
const mockDraftsData = [
  { id: "d1", title: "Upcoming Feature Teaser", lastSaved: "2024-08-20 10:00 AM" },
  { id: "d2", title: "Holiday Greetings (Pending Review)", lastSaved: "2024-08-19 03:00 PM" },
  { id: "d3", title: "Q4 Newsletter Ideas", lastSaved: "2024-08-18 11:30 AM" },
];

describe('NotificationDraftsList Component', () => {
  describe('When drafts are present', () => {
    beforeEach(() => {
      render(<NotificationDraftsList drafts={mockDraftsData} />);
    });

    test('renders section title "Saved Drafts"', () => {
      expect(screen.getByRole('heading', { name: /Saved Drafts/i, level: 2 })).toBeInTheDocument();
    });

    test('renders table headers: Draft Title, Last Saved Date, Actions', () => {
      expect(screen.getByRole('columnheader', { name: /Draft Title/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /Last Saved Date/i })).toBeInTheDocument();
      expect(screen.getByRole('columnheader', { name: /Actions/i })).toBeInTheDocument();
    });

    test('renders mock draft data titles and dates', () => {
      // Test data from mockDraftsData
      expect(screen.getByText("Upcoming Feature Teaser")).toBeInTheDocument();
      expect(screen.getByText("2024-08-20 10:00 AM")).toBeInTheDocument();

      expect(screen.getByText("Holiday Greetings (Pending Review)")).toBeInTheDocument();
      expect(screen.getByText("2024-08-19 03:00 PM")).toBeInTheDocument();
      
      expect(screen.getByText("Q4 Newsletter Ideas")).toBeInTheDocument();
      expect(screen.getByText("2024-08-18 11:30 AM")).toBeInTheDocument();
    });

    test('renders Edit, Delete, and Send from Draft buttons for each draft item', () => {
      mockDraftsData.forEach(draft => {
        // Find the row. A simple way is to get the row that contains the draft's title.
        // More robustly, you could assign data-testid to rows.
        const row = screen.getByText(draft.title).closest('tr');
        expect(row).not.toBeNull(); // Ensure row is found

        if (row) {
          const utils = within(row);
          expect(utils.getByRole('button', { name: /Edit/i })).toBeInTheDocument();
          expect(utils.getByRole('button', { name: /Delete/i })).toBeInTheDocument();
          expect(utils.getByRole('button', { name: /Send from Draft/i })).toBeInTheDocument();
        }
      });
    });
  });

  describe('When no drafts are present', () => {
    beforeEach(() => {
      render(<NotificationDraftsList drafts={[]} />); // Pass empty array for drafts
    });

    test('renders "No saved drafts found." message', () => {
      expect(screen.getByText("No saved drafts found.")).toBeInTheDocument();
    });

    test('does not render table headers', () => {
      expect(screen.queryByRole('columnheader', { name: /Draft Title/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('columnheader', { name: /Last Saved Date/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('columnheader', { name: /Actions/i })).not.toBeInTheDocument();
    });

    test('does not render any draft items or action buttons', () => {
      // Check that none of the mock data items are present
      mockDraftsData.forEach(draft => {
        expect(screen.queryByText(draft.title)).not.toBeInTheDocument();
      });
      // Check that no action buttons are present
      expect(screen.queryByRole('button', { name: /Edit/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /Delete/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /Send from Draft/i })).not.toBeInTheDocument();
    });
  });
});
