import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import NotificationsPage from './NotificationsPage';

// Mock the NotificationItem component
jest.mock('../components/notifications/NotificationItem', () => {
  // Mock implementation that renders identifiable parts of the notification
  return jest.fn(({ title, type, isRead }) => (
    <div data-testid="notification-item">
      <span data-testid="notification-title">{title}</span>
      <span data-testid="notification-type">{type}</span>
      <span data-testid="notification-isRead">{isRead ? 'Read' : 'Unread'}</span>
    </div>
  ));
});

// Mock data from NotificationsPage.jsx to align tests
const mockNotificationsData = [
  { id: 1, title: 'New Login Detected', message: '...', timestamp: '2 minutes ago', type: 'Security', isRead: false },
  { id: 2, title: 'Investment Successful', message: '...', timestamp: '30 minutes ago', type: 'Investment', isRead: false },
  { id: 3, title: 'Withdrawal Processed', message: '...', timestamp: '1 hour ago', type: 'System', isRead: true },
  { id: 4, title: 'Quiz Reward!', message: '...', timestamp: '3 hours ago', type: 'Engagement', isRead: true },
  { id: 5, title: 'Platform Update', message: '...', timestamp: '1 day ago', type: 'System', isRead: true },
];


describe('NotificationsPage Component', () => {
  beforeEach(() => {
    // Reset mock call counts for each test
    jest.clearAllMocks();
    render(
      <MemoryRouter>
        <NotificationsPage />
      </MemoryRouter>
    );
  });

  test('renders main "Notifications" heading', () => {
    expect(screen.getByRole('heading', { name: /Notifications/i, level: 1 })).toBeInTheDocument();
  });

  test('renders "Unread Notifications" and "Previous Notifications" subheadings', () => {
    expect(screen.getByRole('heading', { name: /Unread Notifications/i, level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Previous Notifications/i, level: 2 })).toBeInTheDocument();
  });

  test('renders filter buttons', () => {
    expect(screen.getByRole('button', { name: /All/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /System/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Investment/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Engagement/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Security/i })).toBeInTheDocument();
  });

  test('initially displays some unread and read notifications (using mocked items)', () => {
    const notificationItems = screen.getAllByTestId('notification-item');
    // Based on mockNotificationsData: 2 unread, 3 read initially
    expect(notificationItems.length).toBe(mockNotificationsData.length);

    const unreadItems = screen.getAllByText('Unread');
    expect(unreadItems.length).toBe(mockNotificationsData.filter(n => !n.isRead).length);
    
    const readItems = screen.getAllByText('Read');
    expect(readItems.length).toBe(mockNotificationsData.filter(n => n.isRead).length);
  });

  test('clicking "System" filter button updates displayed notifications', () => {
    fireEvent.click(screen.getByRole('button', { name: /System/i }));
    
    const notificationTitles = screen.getAllByTestId('notification-title').map(el => el.textContent);
    const notificationTypes = screen.getAllByTestId('notification-type').map(el => el.textContent);

    // Mock data has 2 "System" notifications: 'Withdrawal Processed', 'Platform Update'
    expect(notificationTitles).toContain('Withdrawal Processed');
    expect(notificationTitles).toContain('Platform Update');
    expect(notificationTitles.length).toBe(2);
    notificationTypes.forEach(type => expect(type).toBe('System'));

    // Check unread section for system notifications (0 in mock data)
    const unreadSection = screen.getByRole('heading', { name: /Unread Notifications/i, level: 2 }).closest('div');
    expect(unreadSection).toHaveTextContent('No unread notifications.');

    // Check read section for system notifications (2 in mock data)
    const readItems = screen.getAllByText('Read');
    expect(readItems.length).toBe(2);
  });

  test('clicking "Investment" filter button updates displayed notifications', () => {
    fireEvent.click(screen.getByRole('button', { name: /Investment/i }));
    
    const notificationTitles = screen.getAllByTestId('notification-title').map(el => el.textContent);
    const notificationTypes = screen.getAllByTestId('notification-type').map(el => el.textContent);

    // Mock data has 1 "Investment" notification
    expect(notificationTitles).toContain('Investment Successful');
    expect(notificationTitles.length).toBe(1);
    notificationTypes.forEach(type => expect(type).toBe('Investment'));

    // Check unread section (1 "Investment" notification, which is unread)
    const unreadItems = screen.getAllByText('Unread');
    expect(unreadItems.length).toBe(1);

    // Check read section (should show "No previous notifications")
    const readSection = screen.getByRole('heading', { name: /Previous Notifications/i, level: 2 }).closest('div');
    expect(readSection).toHaveTextContent('No previous notifications found.');
  });

  test('displays "No unread/previous notifications" if filter results in empty lists', () => {
    // Filter by a type that has no unread notifications in mock data, but has read ones.
    // "System" type has 0 unread and 2 read.
    fireEvent.click(screen.getByRole('button', { name: /System/i }));
    
    const unreadSection = screen.getByRole('heading', { name: /Unread Notifications/i, level: 2 }).closest('div');
    expect(unreadSection).toHaveTextContent('No unread notifications.');

    const readSection = screen.getByRole('heading', { name: /Previous Notifications/i, level: 2 }).closest('div');
    expect(readSection).not.toHaveTextContent('No previous notifications found.'); // It should find the 2 read System notifications
    expect(screen.getAllByText('Read').length).toBe(2);
  });
});
