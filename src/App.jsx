import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import IBAdminSidebar from './Components/IBAdminSidebar'
import UserIBSidebar from './Components/UserIBSidebar'
import SuperAdminSidebar from './Components/SuperAdminSidebar'
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
import TradingAnalysis from './Pages/TradingAnalysis'
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
import { AnimatePresence } from 'framer-motion'
import PageTransition from './Components/PageTransition'

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

// Super Admin
import SuperAdminDashboard from './Pages/super-admin/Dashboard'
import SuperAdminTenants from './Pages/super-admin/Tenants'
import SuperAdminTenantDetails from './Pages/super-admin/TenantDetails'
import SuperAdminPlans from './Pages/super-admin/Plans'
import SuperAdminBilling from './Pages/super-admin/Billing'
import SuperAdminSettings from './Pages/super-admin/Settings'

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
    // Scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    
    // Also scroll the main content area to top
    const mainContent = document.querySelector('.flex-1.overflow-y-auto')
    if (mainContent) {
      mainContent.scrollTop = 0
    }
  }, [pathname])

  return null
}

function AppContent() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')
  const isIBAdminRoute = location.pathname.startsWith('/ib-admin')
  const isUserIBRoute = location.pathname.startsWith('/ib-dashboard')
  const isSuperAdminRoute = location.pathname.startsWith('/super-admin')

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width <= 1024)
      
      if (width < 768) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
        // Set sidebar to collapsed on tablet screens (768px - 1024px)
        setSidebarCollapsed(width >= 768 && width <= 1024)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-collapse sidebar on navigation for tablet screens
  useEffect(() => {
    if (isTablet && !sidebarCollapsed) {
      setSidebarCollapsed(true)
    }
  }, [location.pathname, isTablet])

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

  const paymentOptions = [
    { name: 'Neteller', src: '/neteller.png' },
    { name: 'USDT', src: '/usdt.png' },
    { name: 'Master Card', src: '/master-card.png' },
    { name: 'Skrill', src: '/skrill.png' },
    { name: 'Litecoin', src: '/litecoin.png' },
    { name: 'Bitcoin', src: '/bitcoin.png' },
    { name: 'Wire Transfer', src: '/wire.png' }
  ];

  return (
    <>
      <ScrollToTop />
      <div className="h-screen flex relative overflow-hidden">
        {(sidebarOpen || !isMobile) && (
          <div className="fixed left-0 top-0 h-full z-40">
            {isSuperAdminRoute ? (
              <SuperAdminSidebar
                collapsed={sidebarCollapsed && !isMobile}
                isMobile={isMobile}
                onClose={closeSidebar}
                onNavItemClick={closeSidebar}
                logo="/finCRM-logo-dark (1).png"
                smallLogo="/finCRM-logo-small.png"
              />
            ) : isIBAdminRoute ? (
              <IBAdminSidebar
                collapsed={sidebarCollapsed && !isMobile}
                isMobile={isMobile}
                onClose={closeSidebar}
                onNavItemClick={closeSidebar}
                logo="/finCRM-logo-dark (1).png"
                smallLogo="/finCRM-logo-small.png"
              />
            ) : isUserIBRoute ? (
              <UserIBSidebar
                collapsed={sidebarCollapsed && !isMobile}
                isMobile={isMobile}
                onClose={closeSidebar}
                onNavItemClick={closeSidebar}
                logo="/finCRM-logo-dark (1).png"
                smallLogo="/finCRM-logo-small.png"
              />
            ) : (
              <Sidebar
                collapsed={sidebarCollapsed && !isMobile}
                isMobile={isMobile}
                onClose={closeSidebar}
                onNavItemClick={closeSidebar}
                isAdminRoute={isAdminRoute}
                logo="/finCRM-logo-dark (1).png"
                smallLogo="/finCRM-logo-small.png"
              />
            )}
          </div>
        )}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${!isMobile ? (sidebarCollapsed ? 'ml-20' : 'ml-76') : ''}`}>
          <div className={`fixed top-0 z-50 transition-all duration-300 ${!isMobile ? (sidebarCollapsed ? 'left-20' : 'left-76') : 'left-0'} right-0`}>
            <Navbar toggleSidebar={toggleSidebar} isAdminRoute={isAdminRoute} isSuperAdminRoute={isSuperAdminRoute} />
          </div>
          <div className="flex-1 overflow-y-auto bg-violet-100" style={{ marginTop: '60px' }}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
              {/* Admin Routes */}
              <Route path="/admin/" element={<PageTransition><AdminDashboard /></PageTransition>} />
              <Route path="/admin/kyc-verification" element={<PageTransition><KycVerification /></PageTransition>} />
              <Route path="/admin/roles-management" element={<PageTransition><RolesManagement /></PageTransition>} />
              <Route path="/admin/send-analysis" element={<PageTransition><SendAnalysis /></PageTransition>} />
              <Route path="/admin/send-emails" element={<PageTransition><SendEmails /></PageTransition>} />
              <Route path="/admin/system-settings" element={<PageTransition><SystemSettings /></PageTransition>} />
              
              {/* User Management */}
              <Route path="/admin/users/all" element={<PageTransition><AllUsers /></PageTransition>} />
              <Route path="/admin/users/active" element={<PageTransition><ActiveUsers /></PageTransition>} />
              <Route path="/admin/users/banned" element={<PageTransition><BannedUsers /></PageTransition>} />
              <Route path="/admin/users/add" element={<PageTransition><AddUser /></PageTransition>} />
              <Route path="/admin/users/email-unverified" element={<PageTransition><EmailUnverified /></PageTransition>} />
              <Route path="/admin/users/kyc-pending" element={<PageTransition><KycPending /></PageTransition>} />
              <Route path="/admin/users/kyc-unverified" element={<PageTransition><KycUnverified /></PageTransition>} />
              <Route path="/admin/users/manage-finance" element={<PageTransition><ManageFinance /></PageTransition>} />
              <Route path="/admin/users/mt5-accounts" element={<PageTransition><Mt5Accounts /></PageTransition>} />
              <Route path="/admin/users/profit-loss" element={<PageTransition><ProfitLossReport /></PageTransition>} />
              <Route path="/admin/users/send-notification" element={<PageTransition><SendNotification /></PageTransition>} />
              
              {/* Deposits */}
              <Route path="/admin/deposits/all" element={<PageTransition><AllDeposits /></PageTransition>} />
              <Route path="/admin/deposits/pending" element={<PageTransition><PendingDeposits /></PageTransition>} />
              <Route path="/admin/deposits/approved" element={<PageTransition><ApprovedDeposits /></PageTransition>} />
              <Route path="/admin/deposits/rejected" element={<PageTransition><RejectedDeposits /></PageTransition>} />
              
              {/* Withdrawals */}
              <Route path="/admin/withdrawals/all" element={<PageTransition><AllWithdrawals /></PageTransition>} />
              <Route path="/admin/withdrawals/pending" element={<PageTransition><PendingWithdrawals /></PageTransition>} />
              <Route path="/admin/withdrawals/approved" element={<PageTransition><ApprovedWithdrawals /></PageTransition>} />
              <Route path="/admin/withdrawals/rejected" element={<PageTransition><RejectedWithdrawals /></PageTransition>} />
              
              {/* MT5 Management */}
              <Route path="/admin/mt5/users" element={<PageTransition><Mt5Users /></PageTransition>} />
              <Route path="/admin/mt5/assign-account" element={<PageTransition><AssignMt5Account /></PageTransition>} />
              <Route path="/admin/mt5/change-password" element={<PageTransition><ChangeMt5Password /></PageTransition>} />
              
              {/* Payment Gateways */}
              <Route path="/admin/payment-gateways/automatic" element={<PageTransition><AutomaticGateways /></PageTransition>} />
              <Route path="/admin/payment-gateways/manual" element={<PageTransition><ManualGateways /></PageTransition>} />
              
              {/* IB Management */}
              <Route path="/admin/ib/distribution-management" element={<PageTransition><IBDistributionManagement /></PageTransition>} />
              
              {/* IB Admin Portal Routes */}
              <Route path="/ib-admin/dashboard" element={<PageTransition><IbAdminDashboard /></PageTransition>} />
              <Route path="/ib-admin/overview" element={<PageTransition><IbOverview /></PageTransition>} />
              <Route path="/ib-admin/requests" element={<PageTransition><IbRequests /></PageTransition>} />
              <Route path="/ib-admin/profile" element={<PageTransition><IBProfile /></PageTransition>} />
              <Route path="/ib-admin/commission-distribution" element={<PageTransition><IBCommissionDistribution /></PageTransition>} />
              <Route path="/ib-admin/portal-settings" element={<PageTransition><PortalSettings /></PageTransition>} />
              <Route path="/ib-admin/symbols-pip-values" element={<PageTransition><SymbolsPipValues /></PageTransition>} />
              <Route path="/ib-admin/trading-groups" element={<PageTransition><TradingGroups /></PageTransition>} />
              <Route path="/ib-admin/group-commission" element={<PageTransition><CommissionDistribution /></PageTransition>} />
              <Route path="/ib-admin/client-linking" element={<PageTransition><ClientLinking /></PageTransition>} />
              <Route path="/ib-admin/move-user" element={<PageTransition><MoveUser /></PageTransition>} />
              <Route path="/ib-admin/withdrawal-management" element={<PageTransition><IBWithdrawalManagement /></PageTransition>} />
              
              {/* Copy Trading */}
              <Route path="/admin/copy-trading/master" element={<PageTransition><MasterArea /></PageTransition>} />
              <Route path="/admin/copy-trading/copier" element={<PageTransition><CopierArea /></PageTransition>} />
              <Route path="/admin/copy-trading/map" element={<PageTransition><MapCopierMaster /></PageTransition>} />
              
              {/* PAMM Management */}
              <Route path="/admin/pamm/managers" element={<PageTransition><ManageManagers /></PageTransition>} />
              <Route path="/admin/pamm/users" element={<PageTransition><PammUsers /></PageTransition>} />
              <Route path="/admin/pamm/deposits" element={<PageTransition><PammDeposits /></PageTransition>} />
              <Route path="/admin/pamm/withdrawals" element={<PageTransition><PammWithdrawals /></PageTransition>} />
              <Route path="/admin/pamm/investments" element={<PageTransition><Investments /></PageTransition>} />
              <Route path="/admin/pamm/requests" element={<PageTransition><RequestsApplications /></PageTransition>} />
              <Route path="/admin/pamm/performance" element={<PageTransition><PerformanceReports /></PageTransition>} />
              <Route path="/admin/pamm/settings" element={<PageTransition><PammSettings /></PageTransition>} />
              
              {/* Prize Lots */}
              <Route path="/admin/prize-lots/manage" element={<PageTransition><ManagePrizeLots /></PageTransition>} />
              <Route path="/admin/prize-lots/pricing" element={<PageTransition><SetLotPricing /></PageTransition>} />
              <Route path="/admin/prize-lots/history" element={<PageTransition><PrizeDistributionHistory /></PageTransition>} />
              
              {/* Super Admin */}
              <Route path="/super-admin/dashboard" element={<PageTransition><SuperAdminDashboard /></PageTransition>} />
              <Route path="/super-admin/tenants" element={<PageTransition><SuperAdminTenants /></PageTransition>} />
              <Route path="/super-admin/tenant-details" element={<PageTransition><SuperAdminTenantDetails /></PageTransition>} />
              <Route path="/super-admin/plans" element={<PageTransition><SuperAdminPlans /></PageTransition>} />
              <Route path="/super-admin/billing" element={<PageTransition><SuperAdminBilling /></PageTransition>} />
              <Route path="/super-admin/settings" element={<PageTransition><SuperAdminSettings /></PageTransition>} />
              
              {/* User Routes */}
              <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
              <Route path="/my-account/open-trading-account" element={<PageTransition><OpenTradingAccount /></PageTransition>} />
              <Route path="/my-account/accounts" element={<PageTransition><MyAccounts /></PageTransition>} />
              <Route path="/my-account/overview" element={<PageTransition><AccountOverview /></PageTransition>} />
              <Route path="/ib-dashboard/account-overview" element={<PageTransition><IBAccountOverview /></PageTransition>} />
              <Route path="/ib-dashboard/commission-analytics" element={<PageTransition><CommissionAnalytics /></PageTransition>} />
              <Route path="/ib-dashboard/pip-calculator" element={<PageTransition><PipCalculator /></PageTransition>} />
              <Route path="/ib-dashboard/my-clients" element={<PageTransition><MyIBClients /></PageTransition>} />
              <Route path="/ib-dashboard/my-structure" element={<PageTransition><MyIBStructure /></PageTransition>} />
              <Route path="/ib-dashboard/my-commission" element={<PageTransition><MyCommission /></PageTransition>} />
              <Route path="/ib-dashboard/withdrawals" element={<PageTransition><IBWithdrawals /></PageTransition>} />
              <Route path="/my-wallet" element={<PageTransition><MyWallet paymentOptions={paymentOptions} /></PageTransition>} />
              <Route path="/account-analytics" element={<PageTransition><AccountAnalytics /></PageTransition>} />
              <Route path="/kyc" element={<PageTransition><KYC /></PageTransition>} />
              <Route path="/ib-dashboard/advanced" element={<PageTransition><AdvancedIBDashboard /></PageTransition>} />
              <Route path="/analytics/trading" element={<PageTransition><TradingAnalysis /></PageTransition>} />
              <Route path="/settings/profile" element={<PageTransition><Profile /></PageTransition>} />
              <Route path="/payment-details" element={<PageTransition><PaymentDetails /></PageTransition>} />
              <Route path="/funds/deposit" element={<PageTransition><DepositFunds /></PageTransition>} />
              <Route path="/funds/withdrawal" element={<PageTransition><WithdrawFunds /></PageTransition>} />
              <Route path="/funds/internal-transfer" element={<PageTransition><InternalTransfer /></PageTransition>} />
              <Route path="/funds/transaction-history" element={<PageTransition><TransactionHistory /></PageTransition>} />
              <Route path="/messages" element={<PageTransition><Placeholder title="Messages" /></PageTransition>} />
              <Route path="/analytics/revenue" element={<PageTransition><Placeholder title="Revenue" /></PageTransition>} />
              <Route path="/analytics/refunds" element={<PageTransition><Placeholder title="Refunds" /></PageTransition>} />
              <Route path="/products" element={<PageTransition><Placeholder title="Products" /></PageTransition>} />
              <Route path="/orders" element={<PageTransition><Placeholder title="Orders" /></PageTransition>} />
              <Route path="/suppliers" element={<PageTransition><Placeholder title="Suppliers" /></PageTransition>} />
              <Route path="/blogs" element={<PageTransition><Placeholder title="Blogs" /></PageTransition>} />
              <Route path="/" element={<PageTransition><Dashboard /></PageTransition>} />
              </Routes>
            </AnimatePresence>
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
