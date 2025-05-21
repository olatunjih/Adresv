import React from 'react';
import { Link } from 'react-router-dom';
// Using simple text for icons for now, can be replaced with actual SVG icons later
const IconPlaceholder = ({ children }) => <span className="mr-2">{children}</span>;

const QuickAccess = () => {
  const shortcuts = [
    { id: 1, name: 'Investments', link: '/investments', icon: '📈' },
    { id: 2, name: 'Withdrawals', link: '/wallet#withdraw', icon: '💸' }, // Example of specific section link
    { id: 3, name: 'Deposits', link: '/wallet#deposit', icon: '💰' },    // Example of specific section link
    { id: 4, name: 'Support', link: '/support', icon: '💬' },
  ];

  return (
    <section className="p-6 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Quick Access</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {shortcuts.map(shortcut => (
          <Link
            key={shortcut.id}
            to={shortcut.link}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg shadow transition duration-150 ease-in-out"
          >
            <IconPlaceholder>{shortcut.icon}</IconPlaceholder>
            <span className="text-sm font-medium text-gray-700">{shortcut.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default QuickAccess;
