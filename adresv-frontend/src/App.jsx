import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // We'll create this next
import Dashboard from './pages/Dashboard'; // Import the new Dashboard component
import ProfileManagement from './pages/ProfileManagement'; // Import the new ProfileManagement component
import InvestmentsPage from './pages/InvestmentsPage'; // Import the new InvestmentsPage component
import WalletPage from './pages/WalletPage'; // Import the WalletPage component
import DailyEngagementPage from './pages/DailyEngagementPage'; // Import the DailyEngagementPage component
import NotificationsPage from './pages/NotificationsPage'; // Import the NotificationsPage component
import SupportPage from './pages/SupportPage'; // Import the SupportPage component
import AdminLoginPage from './pages/admin/AdminLoginPage'; // Import the AdminLoginPage component
import AdminDashboardPage from './pages/admin/AdminDashboardPage'; // Import the AdminDashboardPage component
import RoleManagementPage from './pages/admin/RoleManagementPage'; // Import the RoleManagementPage component
import NotificationsManagementPage from './pages/admin/NotificationsManagementPage'; // Import NotificationsManagementPage

// Placeholder for other pages
const PlaceholderPage = ({ title }) => <div className="p-4"><h2 className="text-2xl">{title}</h2><p>Content will be here.</p></div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Define other routes here later */}
            <Route path="/about" element={<PlaceholderPage title="About Us" />} />
            <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/terms" element={<PlaceholderPage title="Terms and Conditions" />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Use the Dashboard component */}
            <Route path="/profile" element={<ProfileManagement />} /> {/* Use the ProfileManagement component */}
            <Route path="/investments" element={<InvestmentsPage />} /> {/* Use the InvestmentsPage component */}
            <Route path="/wallet" element={<WalletPage />} /> {/* Use the WalletPage component */}
            <Route path="/daily-engagement" element={<DailyEngagementPage />} /> {/* Use the DailyEngagementPage component */}
            <Route path="/notifications" element={<NotificationsPage />} /> {/* Use the NotificationsPage component */}
            <Route path="/support" element={<SupportPage />} /> {/* Use the SupportPage component */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
            <Route path="/admin/roles" element={<RoleManagementPage />} />
            <Route path="/admin/notifications-mgt" element={<NotificationsManagementPage />} /> {/* Added Notifications Management Page Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
