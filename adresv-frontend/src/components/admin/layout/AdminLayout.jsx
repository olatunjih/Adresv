import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Placeholder for actual logout logic
    console.log("Admin logged out");
    alert("Admin logged out (placeholder).");
    navigate('/admin/login'); // Redirect to admin login after logout
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-6 fixed h-full shadow-lg">
        <h2 className="text-2xl font-semibold text-center">Admin Menu</h2>
        <nav>
          <ul className="space-y-3">
            <li>
              <Link 
                to="/admin/dashboard" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-150"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/users" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-150"
              >
                User Management
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/notifications" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-150"
              >
                Platform Notifications
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/settings" 
                className="block py-2 px-4 rounded hover:bg-gray-700 transition duration-150"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 rounded bg-red-600 hover:bg-red-700 text-white transition duration-150"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto"> {/* ml-64 to offset sidebar width */}
        <Outlet /> {/* This will render the matched child route component */}
      </main>
    </div>
  );
};

export default AdminLayout;
