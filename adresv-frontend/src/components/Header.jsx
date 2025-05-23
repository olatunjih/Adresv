import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px 0',
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '20px', // Space between links
  };

  const linkStyle = {
    color: 'white', // Make links white
    textDecoration: 'none',
  };

  return (
    <header className="bg-gray-800 text-white p-4 text-center">
      <h1 className="text-xl mb-4">Adresv Crypto Platform</h1>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/dashboard" style={linkStyle}>Dashboard</Link></li>
          <li><Link to="/profile" style={linkStyle}>Profile</Link></li>
          <li><Link to="/investments" style={linkStyle}>Investments</Link></li>
          <li><Link to="/wallet" style={linkStyle}>Wallet</Link></li>
          <li><Link to="/daily-engagement" style={linkStyle}>Daily Engagement</Link></li>
          <li><Link to="/notifications" style={linkStyle}>Notifications</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
