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
import AdminLayout from './components/admin/layout/AdminLayout'; // Import AdminLayout
import AdminDashboardPage from './pages/admin/AdminDashboardPage'; // Import AdminDashboardPage
import RoleManagementPage from './pages/admin/RoleManagementPage'; // Import RoleManagementPage
import AdminNotificationsPage from './pages/admin/AdminNotificationsPage'; // Import AdminNotificationsPage

// Placeholder for other pages
const PlaceholderPage = ({ title }) => <div className="p-4"><h2 className="text-2xl">{title}</h2><p>Content will be here.</p></div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Conditionally render Header and Footer based on route */}
        <Routes>
          <Route path="/admin/*" element={null} /> {/* No Header/Footer for admin routes using AdminLayout */}
          <Route path="*" element={<Header />} />
        </Routes>
        
        <main className="flex-grow"> {/* Adjusted for full-width admin layout */}
          <Routes>
            {/* Public/User Routes */}
            <Route path="/" element={<LayoutWithHeaderFooter><Home /></LayoutWithHeaderFooter>} />
            <Route path="/about" element={<LayoutWithHeaderFooter><PlaceholderPage title="About Us" /></LayoutWithHeaderFooter>} />
            <Route path="/privacy" element={<LayoutWithHeaderFooter><PlaceholderPage title="Privacy Policy" /></LayoutWithHeaderFooter>} />
            <Route path="/terms" element={<LayoutWithHeaderFooter><PlaceholderPage title="Terms and Conditions" /></LayoutWithHeaderFooter>} />
            <Route path="/dashboard" element={<LayoutWithHeaderFooter><Dashboard /></LayoutWithHeaderFooter>} />
            <Route path="/profile" element={<LayoutWithHeaderFooter><ProfileManagement /></LayoutWithHeaderFooter>} />
            <Route path="/investments" element={<LayoutWithHeaderFooter><InvestmentsPage /></LayoutWithHeaderFooter>} />
            <Route path="/wallet" element={<LayoutWithHeaderFooter><WalletPage /></LayoutWithHeaderFooter>} />
            <Route path="/daily-engagement" element={<LayoutWithHeaderFooter><DailyEngagementPage /></LayoutWithHeaderFooter>} />
            <Route path="/notifications" element={<LayoutWithHeaderFooter><NotificationsPage /></LayoutWithHeaderFooter>} />
            <Route path="/support" element={<LayoutWithHKeyErroraderFooter><SupportPage /></LayoutWithHeaderFooter>} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLoginPage />} /> {/* Admin login remains separate */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="role-management" element={<RoleManagementPage />} /> 
              <Route path="notifications-management" element={<AdminNotificationsPage />} /> {/* New route */}
              {/* Future admin pages will be nested here: */}
              {/* <Route path="users" element={<PlaceholderPage title="Admin User Management" />} /> */}
              {/* <Route path="settings" element={<PlaceholderPage title="Admin Settings" />} /> */}
            </Route>
          </Routes>
        </main>
        
        <Routes>
          <Route path="/admin/*" element={null} /> {/* No Header/Footer for admin routes */}
          <Route path="*" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
