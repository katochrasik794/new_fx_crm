import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Dashboard from './Pages/Dashboard'
import OpenTradingAccount from './Pages/OpenTradingAccount'
import MyAccounts from './Pages/MyAccounts'
import AccountOverview from './Pages/AccountOverview'
import MyWallet from './Pages/MyWallet'
import AccountAnalytics from './Pages/AccountAnalytics'
import PaymentDetails from './Pages/PaymentDetails'
import DepositFunds from './Pages/DepositFunds'
import WithdrawFunds from './Pages/WithdrawFunds'
import InternalTransfer from './Pages/InternalTransfer'
import TransactionHistory from './Pages/TransactionHistory'
import KYC from './Pages/KYC'
import AdvancedIBDashboard from './Pages/IB dashboard/AdvancedIBDashboard'
import IBAccountOverview from './Pages/IB dashboard/AccountOverview'
import CommissionAnalytics from './Pages/IB dashboard/CommissionAnalytics'
import PipCalculator from './Pages/IB dashboard/PipCalculator'
import MyIBClients from './Pages/IB dashboard/MyIBClients'
import MyIBStructure from './Pages/IB dashboard/MyIBStructure'
import MyCommission from './Pages/IB dashboard/MyCommission'
import IBWithdrawals from './Pages/IB dashboard/IBWithdrawals'
import Profile from './Pages/Profile'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Admin imports
import AdminDashboard from './Admin/AdminDashboard'
import KycVerification from './Admin/KycVerification'
import RolesManagement from './Admin/RolesManagement'
import SendAnalysis from './Admin/SendAnalysis'
import SendEmails from './Admin/SendEmails'
import SystemSettings from './Admin/SystemSettings'

// User Management
import AllUsers from './Admin/User Management/AllUsers'
import ActiveUsers from './Admin/User Management/ActiveUsers'
import BannedUsers from './Admin/User Management/BannedUsers'
import AddUser from './Admin/User Management/AddUser'
import EmailUnverified from './Admin/User Management/EmailUnverified'
import KycPending from './Admin/User Management/KycPending'
import KycUnverified from './Admin/User Management/KycUnverified'
import ManageFinance from './Admin/User Management/ManageFinance'
import Mt5Accounts from './Admin/User Management/Mt5Accounts'
import ProfitLossReport from './Admin/User Management/ProfitLossReport'
import SendNotification from './Admin/User Management/SendNotification'

// Manage Deposits
import AllDeposits from './Admin/Manage Deposits/AllDeposits'
import PendingDeposits from './Admin/Manage Deposits/PendingDeposits'
import ApprovedDeposits from './Admin/Manage Deposits/ApprovedDeposits'
import RejectedDeposits from './Admin/Manage Deposits/RejectedDeposits'

// Manage Withdrawals
import AllWithdrawals from './Admin/Manage Withdrawls/AllWithdrawals'
import PendingWithdrawals from './Admin/Manage Withdrawls/PendingWithdrawals'
import ApprovedWithdrawals from './Admin/Manage Withdrawls/ApprovedWithdrawals'
import RejectedWithdrawals from './Admin/Manage Withdrawls/RejectedWithdrawals'

// MT5 Management
import Mt5Users from './Admin/MT5 Management/Mt5Users'
import AssignMt5Account from './Admin/MT5 Management/AssignMt5Account'
import ChangeMt5Password from './Admin/MT5 Management/ChangeMt5Password'

// Payment Gateways
import AutomaticGateways from './Admin/Payment Gateways/AutomaticGateways'
import ManualGateways from './Admin/Payment Gateways/ManualGateways'

// IB Management
import IbAdminDashboard from './Admin/IB Management/IB Admin Panel/IbAdminDashboard'
import IbOverview from './Admin/IB Management/IB Admin Panel/IbOverview'
import IbRequests from './Admin/IB Management/IB Admin Panel/IbRequests'
import IBProfile from './Admin/IB Management/IB Admin Panel/IBProfile'
import IBCommissionDistribution from './Admin/IB Management/IB Admin Panel/IBCommissionDistribution'
import PortalSettings from './Admin/IB Management/IB Admin Panel/PortalSettings'
import SymbolsPipValues from './Admin/IB Management/IB Admin Panel/SymbolsPipValues'
import TradingGroups from './Admin/IB Management/IB Admin Panel/Group Management/TradingGroups'
import CommissionDistribution from './Admin/IB Management/IB Admin Panel/Group Management/CommissionDistribution'
import ClientLinking from './Admin/IB Management/IB Admin Panel/IB Management/ClientLinking'
import MoveUser from './Admin/IB Management/IB Admin Panel/IB Management/MoveUser'
import IBWithdrawalManagement from './Admin/IB Management/IB Admin Panel/IB Management/IBWithdrawalManagement'
import IBDistributionManagement from './Admin/IB Management/IBDistributionManagement'

// Copy Trading
import MasterArea from './Admin/Copy Trading/MasterArea'
import CopierArea from './Admin/Copy Trading/CopierArea'
import MapCopierMaster from './Admin/Copy Trading/MapCopierMaster'

// PAMM Management
import ManageManagers from './Admin/PAMM Management/ManageManagers'
import PammUsers from './Admin/PAMM Management/PammUsers'
import PammDeposits from './Admin/PAMM Management/Deposits'
import PammWithdrawals from './Admin/PAMM Management/Withdrawals'
import Investments from './Admin/PAMM Management/Investments'
import RequestsApplications from './Admin/PAMM Management/RequestsApplications'
import PerformanceReports from './Admin/PAMM Management/PerformanceReports'
import PammSettings from './Admin/PAMM Management/PammSettings'

// Set Prize Lots
import ManagePrizeLots from './Admin/Set Prize Lots/ManagePrizeLots'
import SetLotPricing from './Admin/Set Prize Lots/SetLotPricing'
import PrizeDistributionHistory from './Admin/Set Prize Lots/PrizeDistributionHistory'

function Placeholder({ title }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-600">This is a placeholder page for {title}.</p>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function AppContent() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen)
    } else {
      setSidebarCollapsed(!sidebarCollapsed)
    }
  }

  const closeSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  return (
    <>
      <ScrollToTop />
      <div className="h-screen flex relative overflow-hidden">
        {(sidebarOpen || !isMobile) && (
          <div className="fixed left-0 top-0 h-full z-40">
            <Sidebar
              collapsed={sidebarCollapsed && !isMobile}
              isMobile={isMobile}
              onClose={closeSidebar}
              onNavItemClick={closeSidebar}
              isAdminRoute={isAdminRoute}
            />
          </div>
        )}
        <div className={`flex-1 flex flex-col ${!isMobile && !sidebarCollapsed ? 'ml-80' : !isMobile && sidebarCollapsed ? 'ml-16' : ''} transition-all duration-300`}>
          <div className={`fixed top-0 z-50 ${!isMobile && !sidebarCollapsed ? 'left-80 right-0' : !isMobile && sidebarCollapsed ? 'left-16 right-0' : 'left-0 right-0'} transition-all duration-300`}>
            <Navbar toggleSidebar={toggleSidebar} isAdminRoute={isAdminRoute} />
          </div>
          <div className="flex-1 overflow-y-auto pt-16">
            <Routes>
              {/* Admin Routes */}
              <Route path="/admin/" element={<AdminDashboard />} />
              <Route path="/admin/kyc-verification" element={<KycVerification />} />
              <Route path="/admin/roles-management" element={<RolesManagement />} />
              <Route path="/admin/send-analysis" element={<SendAnalysis />} />
              <Route path="/admin/send-emails" element={<SendEmails />} />
              <Route path="/admin/system-settings" element={<SystemSettings />} />
              
              {/* User Management */}
              <Route path="/admin/users/all" element={<AllUsers />} />
              <Route path="/admin/users/active" element={<ActiveUsers />} />
              <Route path="/admin/users/banned" element={<BannedUsers />} />
              <Route path="/admin/users/add" element={<AddUser />} />
              <Route path="/admin/users/email-unverified" element={<EmailUnverified />} />
              <Route path="/admin/users/kyc-pending" element={<KycPending />} />
              <Route path="/admin/users/kyc-unverified" element={<KycUnverified />} />
              <Route path="/admin/users/manage-finance" element={<ManageFinance />} />
              <Route path="/admin/users/mt5-accounts" element={<Mt5Accounts />} />
              <Route path="/admin/users/profit-loss" element={<ProfitLossReport />} />
              <Route path="/admin/users/send-notification" element={<SendNotification />} />
              
              {/* Deposits */}
              <Route path="/admin/deposits/all" element={<AllDeposits />} />
              <Route path="/admin/deposits/pending" element={<PendingDeposits />} />
              <Route path="/admin/deposits/approved" element={<ApprovedDeposits />} />
              <Route path="/admin/deposits/rejected" element={<RejectedDeposits />} />
              
              {/* Withdrawals */}
              <Route path="/admin/withdrawals/all" element={<AllWithdrawals />} />
              <Route path="/admin/withdrawals/pending" element={<PendingWithdrawals />} />
              <Route path="/admin/withdrawals/approved" element={<ApprovedWithdrawals />} />
              <Route path="/admin/withdrawals/rejected" element={<RejectedWithdrawals />} />
              
              {/* MT5 Management */}
              <Route path="/admin/mt5/users" element={<Mt5Users />} />
              <Route path="/admin/mt5/assign-account" element={<AssignMt5Account />} />
              <Route path="/admin/mt5/change-password" element={<ChangeMt5Password />} />
              
              {/* Payment Gateways */}
              <Route path="/admin/payment-gateways/automatic" element={<AutomaticGateways />} />
              <Route path="/admin/payment-gateways/manual" element={<ManualGateways />} />
              
              {/* IB Management */}
              <Route path="/admin/ib/dashboard" element={<IbAdminDashboard />} />
              <Route path="/admin/ib/overview" element={<IbOverview />} />
              <Route path="/admin/ib/requests" element={<IbRequests />} />
              <Route path="/admin/ib/profile" element={<IBProfile />} />
              <Route path="/admin/ib/commission-distribution" element={<IBCommissionDistribution />} />
              <Route path="/admin/ib/portal-settings" element={<PortalSettings />} />
              <Route path="/admin/ib/symbols-pip-values" element={<SymbolsPipValues />} />
              <Route path="/admin/ib/trading-groups" element={<TradingGroups />} />
              <Route path="/admin/ib/group-commission" element={<CommissionDistribution />} />
              <Route path="/admin/ib/client-linking" element={<ClientLinking />} />
              <Route path="/admin/ib/move-user" element={<MoveUser />} />
              <Route path="/admin/ib/withdrawal-management" element={<IBWithdrawalManagement />} />
              <Route path="/admin/ib/distribution-management" element={<IBDistributionManagement />} />
              
              {/* Copy Trading */}
              <Route path="/admin/copy-trading/master" element={<MasterArea />} />
              <Route path="/admin/copy-trading/copier" element={<CopierArea />} />
              <Route path="/admin/copy-trading/map" element={<MapCopierMaster />} />
              
              {/* PAMM Management */}
              <Route path="/admin/pamm/managers" element={<ManageManagers />} />
              <Route path="/admin/pamm/users" element={<PammUsers />} />
              <Route path="/admin/pamm/deposits" element={<PammDeposits />} />
              <Route path="/admin/pamm/withdrawals" element={<PammWithdrawals />} />
              <Route path="/admin/pamm/investments" element={<Investments />} />
              <Route path="/admin/pamm/requests" element={<RequestsApplications />} />
              <Route path="/admin/pamm/performance" element={<PerformanceReports />} />
              <Route path="/admin/pamm/settings" element={<PammSettings />} />
              
              {/* Prize Lots */}
              <Route path="/admin/prize-lots/manage" element={<ManagePrizeLots />} />
              <Route path="/admin/prize-lots/pricing" element={<SetLotPricing />} />
              <Route path="/admin/prize-lots/history" element={<PrizeDistributionHistory />} />
              
              {/* User Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/my-account/open-trading-account" element={<OpenTradingAccount />} />
              <Route path="/my-account/accounts" element={<MyAccounts />} />
              <Route path="/my-account/overview" element={<AccountOverview />} />
              <Route path="/ib-dashboard/account-overview" element={<IBAccountOverview />} />
              <Route path="/ib-dashboard/commission-analytics" element={<CommissionAnalytics />} />
              <Route path="/ib-dashboard/pip-calculator" element={<PipCalculator />} />
              <Route path="/ib-dashboard/my-clients" element={<MyIBClients />} />
              <Route path="/ib-dashboard/my-structure" element={<MyIBStructure />} />
              <Route path="/ib-dashboard/my-commission" element={<MyCommission />} />
              <Route path="/ib-dashboard/withdrawals" element={<IBWithdrawals />} />
              <Route path="/my-wallet" element={<MyWallet />} />
              <Route path="/account-analytics" element={<AccountAnalytics />} />
              <Route path="/kyc" element={<KYC />} />
              <Route path="/ib-dashboard/advanced" element={<AdvancedIBDashboard />} />
              {/* <Route path="/analytics/trading" element={<TradingAnalysis />} /> */}
              <Route path="/settings/profile" element={<Profile />} />
              <Route path="/payment-details" element={<PaymentDetails />} />
              <Route path="/funds/deposit" element={<DepositFunds />} />
              <Route path="/funds/withdrawal" element={<WithdrawFunds />} />
              <Route path="/funds/internal-transfer" element={<InternalTransfer />} />
              <Route path="/funds/transaction-history" element={<TransactionHistory />} />
              <Route path="/messages" element={<Placeholder title="Messages" />} />
              <Route path="/analytics/revenue" element={<Placeholder title="Revenue" />} />
              <Route path="/analytics/refunds" element={<Placeholder title="Refunds" />} />
              <Route path="/products" element={<Placeholder title="Products" />} />
              <Route path="/orders" element={<Placeholder title="Orders" />} />
              <Route path="/suppliers" element={<Placeholder title="Suppliers" />} />
              <Route path="/blogs" element={<Placeholder title="Blogs" />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
