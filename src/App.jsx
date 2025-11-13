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
import IbAdminDashboard from './Admin/IB Management/IB Admin Panel/IbAdminDashboard'
import SymbolsPipValues from './Admin/IB Management/IB Admin Panel/SymbolsPipValues'
import IbOverview from './Admin/IB Management/IB Admin Panel/IbOverview'
import IbRequests from './Admin/IB Management/IB Admin Panel/IbRequests'
import IBProfile from './Admin/IB Management/IB Admin Panel/IBProfile'
import IBCommissionDistribution from './Admin/IB Management/IB Admin Panel/IBCommissionDistribution'
import ClientLinking from './Admin/IB Management/IB Admin Panel/IB Management/ClientLinking'
import IBWithdrawalManagement from './Admin/IB Management/IB Admin Panel/IB Management/IBWithdrawalManagement'
import MoveUser from './Admin/IB Management/IB Admin Panel/IB Management/MoveUser'
import TradingGroups from './Admin/IB Management/IB Admin Panel/Group Management/TradingGroups'
import CommissionDistribution from './Admin/IB Management/IB Admin Panel/Group Management/CommissionDistribution'
import PortalSettings from './Admin/IB Management/IB Admin Panel/PortalSettings'

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

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
    <BrowserRouter>
      <ScrollToTop />
      <div className="h-screen flex relative overflow-hidden">
        {(sidebarOpen || !isMobile) && (
          <div className="fixed left-0 top-0 h-full z-40">
            <Sidebar
              collapsed={sidebarCollapsed && !isMobile}
              isMobile={isMobile}
              onClose={closeSidebar}
              onNavItemClick={closeSidebar}
            />
          </div>
        )}
        <div className={`flex-1 flex flex-col ${!isMobile && !sidebarCollapsed ? 'ml-64' : !isMobile && sidebarCollapsed ? 'ml-16' : ''} transition-all duration-300`}>
          <div className={`fixed top-0 z-50 ${!isMobile && !sidebarCollapsed ? 'left-64 right-0' : !isMobile && sidebarCollapsed ? 'left-16 right-0' : 'left-0 right-0'} transition-all duration-300`}>
            <Navbar toggleSidebar={toggleSidebar} />
          </div>
          <div className="flex-1 overflow-y-auto pt-16">
            <Routes>
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
              <Route path="/ib-admin" element={<IbAdminDashboard /> } />
              <Route path="/ib-admin/symbols-pip-values" element={<SymbolsPipValues />} />
              <Route path="/ib-admin/overview" element={<IbOverview />} />
              <Route path="/ib-admin/requests" element={<IbRequests />} />
              <Route path="/ib-admin/profile" element={<IBProfile />} />
              <Route path="/ib-admin/commission-distribution" element={<IBCommissionDistribution />} />
              <Route path="/ib-admin/client-linking" element={<ClientLinking />} />
              <Route path="/ib-admin/withdrawal-management" element={<IBWithdrawalManagement />} />
              <Route path="/ib-admin/move-user" element={<MoveUser />} />
              <Route path="/ib-admin/trading-groups" element={<TradingGroups />} />
              <Route path="/ib-admin/group-commission-distribution" element={<CommissionDistribution />} />
              <Route path="/ib-admin/portal-settings" element={<PortalSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
