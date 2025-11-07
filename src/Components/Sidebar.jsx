import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ collapsed, isMobile, onClose }) => {
  const [accountOpen, setAccountOpen] = useState(false);
  const [fundsOpen, setFundsOpen] = useState(false);
  const [ibOpen, setIbOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavItem = ({ to, icon, children, badge }) => (
    <Link
      to={to}
      className={`flex items-center py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
        isActive(to)
          ? "border-l-4 border-l-rose-600 text-rose-600 bg-rose-50"
          : "text-gray-600 hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600"
      }`}
    >
      <img src={icon} alt="" className="h-6 w-6 align-middle" style={{ minWidth: 24, minHeight: 24 }} />
      {!collapsed && children}
      {badge && !collapsed && <span className="ml-auto rounded-full bg-rose-600 px-2 text-xs text-white">{badge}</span>}
    </Link>
  );

  return (
    <div className={`${isMobile ? 'fixed inset-0 z-50 bg-black bg-opacity-50' : 'bg-gray-100 h-screen'}`}>
      <div className={`h-full transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} ${isMobile ? 'relative' : ''}`}>
   <div className={`flex h-full flex-col overflow-y-auto ${isMobile ? 'bg-white shadow-xl' : 'rounded-br-lg rounded-tr-lg bg-white shadow-md'}`}>
           {isMobile && (
             <div className="flex justify-end p-4">
               <button
                 onClick={onClose}
                 className="text-gray-500 hover:text-gray-700 text-2xl"
               >
                 ×
               </button>
             </div>
           )}
           <div className={`flex items-center justify-center px-4 ${collapsed ? 'py-4' : 'py-6'}`}>
             <img
               className={`w-auto max-w-full align-middle ${collapsed ? 'h-8' : 'h-12'}`}
               src="https://cdn-icons-png.flaticon.com/512/7021/7021246.png"
               alt="Profile"
             />
           </div>

          <div className="flex flex-1 flex-col">
            <nav className="flex-1">
              <NavItem to="/dashboard" icon="/icons/dashboard.svg">Dashboard</NavItem>

              {/* My Account dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAccountOpen((s) => !s)}
                  aria-expanded={accountOpen}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
                    isActive('/my-account') ? 'border-l-4 border-l-rose-600 text-rose-600 bg-rose-50' : 'text-gray-600 hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600'
                  }`}
                >
                  <img src="/icons/account.svg" alt="" className="h-6 w-6" style={{ minWidth: 24, minHeight: 24 }} />
                  {!collapsed && 'My Account'}
                  {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 transition-transform ${accountOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>}
                </button>
                <ul className={`flex flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 ${accountOpen ? 'max-h-60' : 'max-h-0'}`}>
                  <li>
                    <Link to="/my-account/open-trading-account" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Open Trading Account'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-account/accounts" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'My Accounts'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-account/overview" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Account Overview'}
                    </Link>
                  </li>
                </ul>
              </div>

              <NavItem to="/my-wallet" icon="/icons/wallet.svg">My Wallet</NavItem>
              <NavItem to="/account-analytics" icon="/icons/analytics.svg">Account Analytics</NavItem>
              <NavItem to="/payment-details" icon="/icons/payment.svg">Payment Details</NavItem>

              {/* Funds dropdown */}
              <div className="relative">
                <button
                  onClick={() => setFundsOpen((s) => !s)}
                  aria-expanded={fundsOpen}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
                    isActive('/funds') ? 'border-l-4 border-l-rose-600 text-rose-600 bg-rose-50' : 'text-gray-600 hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600'
                  }`}
                >
                  <img src="/icons/funds.svg" alt="" className="h-6 w-6" style={{ minWidth: 24, minHeight: 24 }} />
                  {!collapsed && 'Funds'}
                  {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 transition-transform ${fundsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>}
                </button>
                <ul className={`flex flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 ${fundsOpen ? 'max-h-60' : 'max-h-0'}`}>
                  <li>
                    <Link to="/funds/deposit" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Deposit'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/funds/withdrawal" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Withdrawal'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/funds/internal-transfer" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Internal Transfer'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/funds/transaction-history" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Transaction History'}
                    </Link>
                  </li>
                </ul>
              </div>

              <NavItem to="/kyc" icon="/icons/kyc.svg">KYC</NavItem>

              {/* IB Dashboard dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIbOpen((s) => !s)}
                  aria-expanded={ibOpen}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
                    isActive('/ib-dashboard') ? 'border-l-4 border-l-rose-600 text-rose-600 bg-rose-50' : 'text-gray-600 hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600'
                  }`}
                >
                  <img src="/icons/ib.svg" alt="" className="h-6 w-6" style={{ minWidth: 24, minHeight: 24 }} />
                  {!collapsed && 'IB Dashboard'}
                  {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 transition-transform ${ibOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>}
                </button>
                <ul className={`flex flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 ${ibOpen ? 'max-h-60' : 'max-h-0'}`}>
                  <li>
                    <Link to="/ib-dashboard/advanced" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Advanced IB Dashboard'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ib-dashboard/apply" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Apply As an IB'}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Analytics dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAnalyticsOpen((s) => !s)}
                  aria-expanded={analyticsOpen}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
                    isActive('/analytics') ? 'border-l-4 border-l-rose-600 text-rose-600 bg-rose-50' : 'text-gray-600 hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600'
                  }`}
                >
                  <img src="/icons/analytics.svg" alt="" className="h-6 w-6" style={{ minWidth: 24, minHeight: 24 }} />
                  {!collapsed && 'Analytics'}
                  {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 transition-transform ${analyticsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>}
                </button>
                <ul className={`flex flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 ${analyticsOpen ? 'max-h-60' : 'max-h-0'}`}>
                  <li>
                    <Link to="/analytics/trading" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Trading Analysis'}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Settings dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSettingsOpen((s) => !s)}
                  aria-expanded={settingsOpen}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
                    isActive('/settings') ? 'border-l-4 border-l-rose-600 text-rose-600 bg-rose-50' : 'text-gray-600 hover:border-l-4 hover:border-l-rose-600 hover:text-rose-600'
                  }`}
                >
                  <img src="/icons/settings.svg" alt="" className="h-6 w-6" style={{ minWidth: 24, minHeight: 24 }} />
                  {!collapsed && 'Settings'}
                  {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 transition-transform ${settingsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>}
                </button>
                <ul className={`flex flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 ${settingsOpen ? 'max-h-60' : 'max-h-0'}`}>
                  <li>
                    <Link to="/settings/profile" className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-rose-600">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Profile'}
                    </Link>
                  </li>
                </ul>
              </div>

              <NavItem to="/logout" icon="/icons/logout.svg">Logout</NavItem>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
