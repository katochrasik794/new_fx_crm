import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminTopbar from './AdminTopbar';
import AdminDashboard from './AdminDashboard';
import SystemSettings from './SystemSettings';
import RolesManagement from './RolesManagement';
import AddUser from './User Management/AddUser';
import AllUsers from './User Management/AllUsers';
import ActiveUsers from './User Management/ActiveUsers';
import BannedUsers from './User Management/BannedUsers';
import EmailUnverified from './User Management/EmailUnverified';
import KycUnverified from './User Management/KycUnverified';
import KycPending from './User Management/KycPending';
import ProfitLossReport from './User Management/ProfitLossReport';
import SendNotification from './User Management/SendNotification';
import SendEmails from './SendEmails';
import SendAnalysis from './SendAnalysis';
import Mt5Accounts from './User Management/Mt5Accounts';
import PaymentDetailsReview from './User Management/ManageFinance';
import KycVerification from './KycVerification';
import Mt5Users from './MT5 Management/Mt5Users';
import AssignMt5Account from './MT5 Management/AssignMt5Account';
import ChangeMt5Password from './MT5 Management/ChangeMt5Password';
import AutomaticGateways from './Payment Gateways/AutomaticGateways';
import ManualGateways from './Payment Gateways/ManualGateways';
import PendingDeposits from './Manage Deposits/PendingDeposits';
import ApprovedDeposits from './Manage Deposits/ApprovedDeposits';
import RejectedDeposits from './Manage Deposits/RejectedDeposits';
import AllDeposits from './Manage Deposits/AllDeposits';
import PendingWithdrawals from './Manage Withdrawls/PendingWithdrawals';
import ApprovedWithdrawals from './Manage Withdrawls/ApprovedWithdrawals';
import RejectedWithdrawals from './Manage Withdrawls/RejectedWithdrawals';
import AllWithdrawals from './Manage Withdrawls/AllWithdrawals';
import IBDistributionManagement from './IB Management/IBDistributionManagement';
import ManageManagers from './PAMM Management/ManageManagers';
import RequestsApplications from './PAMM Management/RequestsApplications';
import Investments from './PAMM Management/Investments';
import Deposits from './PAMM Management/Deposits';
import Withdrawals from './PAMM Management/Withdrawals';
import PerformanceReports from './PAMM Management/PerformanceReports';
import PammUsers from './PAMM Management/PammUsers';
import PammSettings from './PAMM Management/PammSettings';
import CopierArea from './Copy Trading/CopierArea';
import MasterArea from './Copy Trading/MasterArea';
import MapCopierMaster from './Copy Trading/MapCopierMaster';
import ManagePrizeLots from './Set Prize Lots/ManagePrizeLots';
import SetLotPricing from './Set Prize Lots/SetLotPricing';
import PrizeDistributionHistory from './Set Prize Lots/PrizeDistributionHistory';

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
              <Route path="/mt5-users-list" element={<Mt5Users />} />
              <Route path="/assign-mt5-to-email" element={<AssignMt5Account />} />
              <Route path="/change-mt5-password" element={<ChangeMt5Password />} />

              {/* Payment Gateways Routes */}
              <Route path="/automatic-gateways" element={<AutomaticGateways />} />
              <Route path="/manual-gateways" element={<ManualGateways />} />

              {/* Deposits Routes */}
              <Route path="/pending-deposits" element={<PendingDeposits />} />
              <Route path="/approved-deposits" element={<ApprovedDeposits />} />
              <Route path="/rejected-deposits" element={<RejectedDeposits />} />
              <Route path="/all-deposits" element={<AllDeposits />} />

              {/* Withdrawals Routes */}
              <Route path="/pending-withdrawals" element={<PendingWithdrawals />} />
              <Route path="/approved-withdrawals" element={<ApprovedWithdrawals />} />
              <Route path="/rejected-withdrawals" element={<RejectedWithdrawals />} />
              <Route path="/all-withdrawals" element={<AllWithdrawals />} />

              {/* IB Management Routes */}
              <Route path="/ib-distribution" element={<IBDistributionManagement />} />
              <Route path="/ib-admin-portal" element={<Placeholder title="IB Admin Portal" />} />

              {/* PAMM Management Routes */}
              <Route path="/manage-managers" element={<ManageManagers />} />
              <Route path="/requests-applications" element={<RequestsApplications />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/deposits" element={<Deposits />} />
              <Route path="/withdrawals" element={<Withdrawals />} />
              <Route path="/performance-reports" element={<PerformanceReports />} />
              <Route path="/pamm-users" element={<PammUsers />} />
              <Route path="/pamm-settings" element={<PammSettings />} />

              {/* Copy Trading Routes */}
              <Route path="/copier-area" element={<CopierArea />} />
              <Route path="/master-area" element={<MasterArea />} />
              <Route path="/map-copier-master" element={<MapCopierMaster />} />

              {/* Prize Lots Routes */}
              <Route path="/manage-prize-lots" element={<ManagePrizeLots />} />
              <Route path="/set-lot-pricing" element={<SetLotPricing />} />
              <Route path="/prize-distribution-history" element={<PrizeDistributionHistory />} />

              <Route path="/send-emails" element={<SendEmails />} />
              <Route path="/send-analysis" element={<SendAnalysis />} />
              <Route path="/logout" element={<Placeholder title="Logout" />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminApp;