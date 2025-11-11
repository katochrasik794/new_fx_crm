import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminTopbar';
import AdminDashboard from './AdminDashboard';
import SystemSettings from './SystemSettings';
import RolesManagement from './RolesManagement';
import AddUser from './AddUser';
import AllUsers from './AllUsers';
import ActiveUsers from './ActiveUsers';
import BannedUsers from './BannedUsers';
import EmailUnverified from './EmailUnverified';
import KycUnverified from './KycUnverified';
import KycPending from './KycPending';
import ProfitLossReport from './ProfitLossReport';
import SendNotification from './SendNotification';
import Mt5Accounts from './Mt5Accounts';
import PaymentDetailsReview from './PaymentDetailsReview';
import KycVerification from './KycVerification';

function Placeholder({ title }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-600">This is a placeholder page for {title}.</p>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AdminApp() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const closeSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <ScrollToTop />
      <div className="h-full w-full flex relative overflow-hidden">
        {(sidebarOpen || !isMobile) && (
          <div className="fixed left-0 top-0 h-full z-40">
            <AdminSidebar
              collapsed={sidebarCollapsed && !isMobile}
              isMobile={isMobile}
              onClose={closeSidebar}
              onNavItemClick={closeSidebar}
            />
          </div>
        )}
        <div className={`flex-1 flex flex-col ${!isMobile && !sidebarCollapsed ? 'ml-0' : !isMobile && sidebarCollapsed ? 'ml-[-200px]' : 'ml-[-200px]'} transition-all duration-300`}>
          <div className={`fixed top-0 z-100 ${!isMobile && !sidebarCollapsed ? 'left-64 right-0' : !isMobile && sidebarCollapsed ? 'left-16 right-0' : 'left-0 right-0'} transition-all duration-300`}>
            <AdminTopbar onToggleSidebar={toggleSidebar} />
          </div>
          <div className="flex-1 overflow-y-auto ">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/system-settings" element={<SystemSettings />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/roles" element={<RolesManagement />} />

              {/* User Management Routes */}
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/users" element={<AllUsers />} />
              <Route path="/active-users" element={<ActiveUsers />} />
              <Route path="/banned-users" element={<BannedUsers />} />
              <Route path="/email-unverified" element={<EmailUnverified />} />
              <Route path="/kyc-unverified" element={<KycUnverified />} />
              <Route path="/kyc-pending" element={<KycPending />} />
              <Route path="/profit-loss-report" element={<ProfitLossReport />} />
              <Route path="/send-notification" element={<SendNotification />} />
              <Route path="/mt5-account-list" element={<Mt5Accounts />} />
              <Route path="/manage-finance" element={<PaymentDetailsReview />} />

              <Route path="/kyc-verifications" element={<KycVerification />} />

              {/* MT5 Management Routes */}
              <Route path="/mt5-users-list" element={<Placeholder title="MT5 Users List" />} />
              <Route path="/assign-mt5-to-email" element={<Placeholder title="Assign MT5 to Email" />} />
              <Route path="/change-mt5-password" element={<Placeholder title="Change MT5 Password" />} />

              {/* Payment Gateways Routes */}
              <Route path="/automatic-gateways" element={<Placeholder title="Automatic Gateways" />} />
              <Route path="/manual-gateways" element={<Placeholder title="Manual Gateways" />} />

              {/* Deposits Routes */}
              <Route path="/pending-deposits" element={<Placeholder title="Pending Deposits" />} />
              <Route path="/approved-deposits" element={<Placeholder title="Approved Deposits" />} />
              <Route path="/rejected-deposits" element={<Placeholder title="Rejected Deposits" />} />
              <Route path="/all-deposits" element={<Placeholder title="All Deposits" />} />

              {/* Withdrawals Routes */}
              <Route path="/pending-withdrawals" element={<Placeholder title="Pending Withdrawals" />} />
              <Route path="/approved-withdrawals" element={<Placeholder title="Approved Withdrawals" />} />
              <Route path="/rejected-withdrawals" element={<Placeholder title="Rejected Withdrawals" />} />
              <Route path="/all-withdrawals" element={<Placeholder title="All Withdrawals" />} />

              {/* IB Management Routes */}
              <Route path="/ib-distribution" element={<Placeholder title="IB Distribution" />} />
              <Route path="/ib-admin-portal" element={<Placeholder title="IB Admin Portal" />} />

              {/* PAMM Management Routes */}
              <Route path="/manage-managers" element={<Placeholder title="Manage Managers" />} />
              <Route path="/requests-applications" element={<Placeholder title="Requests & Applications" />} />
              <Route path="/investments" element={<Placeholder title="Investments" />} />
              <Route path="/deposits" element={<Placeholder title="Deposits" />} />
              <Route path="/withdrawals" element={<Placeholder title="Withdrawals" />} />
              <Route path="/performance-reports" element={<Placeholder title="Performance Reports" />} />
              <Route path="/pamm-users" element={<Placeholder title="PAMM Users" />} />
              <Route path="/pamm-settings" element={<Placeholder title="PAMM Settings" />} />

              {/* Copy Trading Routes */}
              <Route path="/copier-area" element={<Placeholder title="Copier Area" />} />
              <Route path="/master-area" element={<Placeholder title="Master Area" />} />
              <Route path="/map-copier-master" element={<Placeholder title="Map Copier & Master" />} />

              {/* Prize Lots Routes */}
              <Route path="/manage-prize-lots" element={<Placeholder title="Manage Prize Lots" />} />
              <Route path="/set-lot-pricing" element={<Placeholder title="Set Lot Pricing" />} />
              <Route path="/prize-distribution-history" element={<Placeholder title="Prize Distribution History" />} />

              <Route path="/send-emails" element={<Placeholder title="Send Emails" />} />
              <Route path="/send-analysis" element={<Placeholder title="Send Analysis" />} />
              <Route path="/logout" element={<Placeholder title="Logout" />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminApp;