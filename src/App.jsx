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
import AdvancedIBDashboard from './Pages/AdvancedIBDashboard'
import TradingAnalysis from './Pages/TradingAnalysis'
import Profile from './Pages/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Placeholder({ title }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-600">This is a placeholder page for {title}.</p>
    </div>
  )
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
      <div className="h-screen flex relative overflow-hidden">
        {(sidebarOpen || !isMobile) && (
          <div className="fixed left-0 top-0 h-full z-40">
            <Sidebar
              collapsed={sidebarCollapsed && !isMobile}
              isMobile={isMobile}
              onClose={closeSidebar}
            />
          </div>
        )}
        <div className={`flex-1 flex flex-col ${!isMobile && !sidebarCollapsed ? 'ml-64' : !isMobile && sidebarCollapsed ? 'ml-16' : ''} transition-all duration-300`}>
          <div className={`fixed top-0 z-50 ${!isMobile && !sidebarCollapsed ? 'left-64 right-0' : !isMobile && sidebarCollapsed ? 'left-16 right-0' : 'left-0 right-0'} transition-all duration-300`}>
            <Navbar toggleSidebar={toggleSidebar} />
          </div>
          <div className="flex-1 overflow-y-auto pt-16">
            <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-account/open-trading-account" element={<OpenTradingAccount />} />
            <Route path="/my-account/accounts" element={<MyAccounts />} />
            <Route path="/my-account/overview" element={<AccountOverview />} />
            <Route path="/my-wallet" element={<MyWallet />} />
            <Route path="/account-analytics" element={<AccountAnalytics />} />
            <Route path="/kyc" element={<KYC />} />
            <Route path="/ib-dashboard/advanced" element={<AdvancedIBDashboard />} />
            <Route path="/analytics/trading" element={<TradingAnalysis />} />
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
    </BrowserRouter>
  )
}

export default App
