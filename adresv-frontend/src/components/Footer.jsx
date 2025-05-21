import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-8 text-center mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h5 className="font-bold mb-2">Adresv</h5>
          <p>&copy; {new Date().getFullYear()} Adresv. All rights reserved.</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Quick Links</h5>
          <ul>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms and Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Support</h5>
          <ul>
            <li><Link to="/support" className="hover:underline">Contact Support</Link></li>
            {/* Add FAQ link later if needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
