import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ collapsed, isMobile, onClose, onNavItemClick, isAdminRoute, logo }) => {
  const [accountOpen, setAccountOpen] = useState(false);
  const [fundsOpen, setFundsOpen] = useState(false);
  const [ibOpen, setIbOpen] = useState(false);
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mt5Open, setMt5Open] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [copyTradingOpen, setCopyTradingOpen] = useState(false);
  const [pammOpen, setPammOpen] = useState(false);
  const [prizeLotsOpen, setPrizeLotsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeAllDropdowns = () => {
    setAccountOpen(false);
    setFundsOpen(false);
    setIbOpen(false);
    setAnalyticsOpen(false);
    setSettingsOpen(false);
    setMt5Open(false);
    setPaymentOpen(false);
    setCopyTradingOpen(false);
    setPammOpen(false);
    setPrizeLotsOpen(false);
  };

  const NavItem = ({ to, icon, children, badge, onClick }) => (
    <Link
      to={to}
      onClick={(e) => {
        closeAllDropdowns();
        onClick && onClick(e);
      }}
      className={`flex items-center py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
        isActive(to)
          ? "border-l-4 border-l-[#6942e2] text-[#6942e2] bg-purple-50"
          : "text-gray-600 hover:border-l-4 hover:border-l-[#6942e2] hover:text-[#6942e2]"
      }`}
    >
      <img src={icon} alt="" className="h-6 w-6 align-middle flex-shrink-0" style={{ minWidth: 24, minHeight: 24 }} />
      {!collapsed && <span className="whitespace-nowrap">{children}</span>}
      {badge && !collapsed && <span className="ml-auto rounded-full bg-rose-600 px-2 text-xs text-white">{badge}</span>}
    </Link>
  );

  return (
    <div className={`${isMobile ? 'fixed inset-0 z-50' : 'h-screen'}`} onClick={isMobile ? onClose : undefined}>
      <div className={`h-full transition-all duration-300 ${collapsed ? 'w-20' : 'w-76'} ${isMobile ? 'relative bg-white shadow-xl' : ''}`} onClick={e => e.stopPropagation()}>
   <div className={`flex h-full flex-col overflow-y-auto bg-gray-100 ${isMobile ? 'shadow-xl' : 'shadow-md'}`}>
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
           <div className="flex items-center justify-center px-4 h-[60px]">
              {!isMobile && logo && (
                <img
                  className="w-auto max-w-full h-full object-contain py-2"
                  src={logo}
                  alt="Logo"
                />
              )}
            </div>

          <div className="flex flex-1 flex-col">
            {!collapsed && <div className="px-5 pt-3 ml-6 mb-0 text-xs font-semibold text-gray-500 uppercase tracking-wider">{isAdminRoute ? 'Admin Menu' : 'Menu'}</div>}
            <nav className="flex-1">
              {isAdminRoute ? (
                // Admin Menu Items
                <>
                  <NavItem to="/admin/system-settings" icon="/icons/settings.svg" onClick={onNavItemClick}>System Settings</NavItem>
                  <NavItem to="/admin/" icon="/icons/dashboard.svg" onClick={onNavItemClick}>Dashboard</NavItem>
                  <NavItem to="/admin/roles-management" icon="/icons/account.svg" onClick={onNavItemClick}>Roles & Responsibilities</NavItem>
                  
                  {/* User Management dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        const wasOpen = accountOpen;
                        closeAllDropdowns();
                        setAccountOpen(!wasOpen);
                      }}
                      className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                    >
                      <svg className="h-6 w-6 flex-shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      {!collapsed && <span className="whitespace-nowrap">User Management</span>}
                      {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${accountOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>}
                    </button>
                    <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${accountOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                      <li><Link to="/admin/users/all" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100 hover:text-[#6942e2]">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">All Users</span></>}</Link></li>
                      <li><Link to="/admin/users/active" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Active Users</span></>}</Link></li>
                      <li><Link to="/admin/users/banned" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Banned Users</span></>}</Link></li>
                      <li><Link to="/admin/users/add" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Add User</span></>}</Link></li>
                      <li><Link to="/admin/users/email-unverified" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Email Unverified</span></>}</Link></li>
                      <li><Link to="/admin/users/kyc-pending" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">KYC Pending</span></>}</Link></li>
                      <li><Link to="/admin/users/kyc-unverified" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">KYC Unverified</span></>}</Link></li>
                      <li><Link to="/admin/users/manage-finance" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Manage Finance</span></>}</Link></li>
                      <li><Link to="/admin/users/mt5-accounts" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">MT5 Accounts</span></>}</Link></li>
                      <li><Link to="/admin/users/profit-loss" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Profit/Loss Report</span></>}</Link></li>
                      <li><Link to="/admin/users/send-notification" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Send Notification</span></>}</Link></li>
                    </ul>
                  </div>

                  <NavItem to="/admin/kyc-verification" icon="/icons/kyc.svg" onClick={onNavItemClick}>KYC Verifications</NavItem>

                  {/* MT5 Management dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        const wasOpen = mt5Open;
                        closeAllDropdowns();
                        setMt5Open(!wasOpen);
                      }}
                      className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                    >
                      <svg className="h-6 w-6 flex-shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                      {!collapsed && <span className="whitespace-nowrap">MT5 Management</span>}
                      {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${mt5Open ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>}
                    </button>
                    <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${mt5Open ? 'max-h-60' : 'max-h-0'}`}>
                      <li><Link to="/admin/mt5/users" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">MT5 Users</span></>}</Link></li>
                      <li><Link to="/admin/mt5/assign-account" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Assign Account</span></>}</Link></li>
                      <li><Link to="/admin/mt5/change-password" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Change Password</span></>}</Link></li>
                    </ul>
                  </div>

                  {/* Payment Gateways dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        const wasOpen = paymentOpen;
                        closeAllDropdowns();
                        setPaymentOpen(!wasOpen);
                      }}
                      className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                    >
                      <img src="/icons/payment.svg" alt="" className="h-6 w-6 flex-shrink-0" style={{ minWidth: 24, minHeight: 24 }} />
                      {!collapsed && <span className="whitespace-nowrap">Payment Gateways</span>}
                      {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${paymentOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>}
                    </button>
                    <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${paymentOpen ? 'max-h-60' : 'max-h-0'}`}>
                      <li><Link to="/admin/payment-gateways/automatic" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Automatic Gateways</span></>}</Link></li>
                      <li><Link to="/admin/payment-gateways/manual" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Manual Gateways</span></>}</Link></li>
                    </ul>
                  </div>

                  {/* Deposits dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        const wasOpen = fundsOpen;
                        closeAllDropdowns();
                        setFundsOpen(!wasOpen);
                      }}
                      className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                    >
                      <img src="/icons/funds.svg" alt="" className="h-6 w-6 flex-shrink-0" style={{ minWidth: 24, minHeight: 24 }} />
                      {!collapsed && <span className="whitespace-nowrap">Manage Deposits</span>}
                      {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${fundsOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>}
                    </button>
                    <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${fundsOpen ? 'max-h-60' : 'max-h-0'}`}>
                      <li><Link to="/admin/deposits/all" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">All Deposits</span></>}</Link></li>
                      <li><Link to="/admin/deposits/pending" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Pending</span></>}</Link></li>
                      <li><Link to="/admin/deposits/approved" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Approved</span></>}</Link></li>
                      <li><Link to="/admin/deposits/rejected" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Rejected</span></>}</Link></li>
                    </ul>
                  </div>

                  {/* Withdrawals dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        const wasOpen = ibOpen;
                        closeAllDropdowns();
                        setIbOpen(!wasOpen);
                      }}
                      className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                    >
                      <svg className="h-6 w-6 flex-shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {!collapsed && <span className="whitespace-nowrap">Manage Withdrawals</span>}
                      {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${ibOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>}
                    </button>
                    <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${ibOpen ? 'max-h-60' : 'max-h-0'}`}>
                      <li><Link to="/admin/withdrawals/all" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">All Withdrawals</span></>}</Link></li>
                      <li><Link to="/admin/withdrawals/pending" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Pending</span></>}</Link></li>
                      <li><Link to="/admin/withdrawals/approved" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Approved</span></>}</Link></li>
                      <li><Link to="/admin/withdrawals/rejected" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Rejected</span></>}</Link></li>
                    </ul>
                  </div>

                  {/* IB Management dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        const wasOpen = analyticsOpen;
                        closeAllDropdowns();
                        setAnalyticsOpen(!wasOpen);
                      }}
                      className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                    >
                      <svg className="h-6 w-6 flex-shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {!collapsed && <span className="whitespace-nowrap">IB Management</span>}
                      {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${analyticsOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>}
                    </button>
                    <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${analyticsOpen ? 'max-h-60' : 'max-h-0'}`}>
                      <li><Link to="/admin/ib/distribution-management" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">IB Distribution</span></>}</Link></li>
                      <li><Link to="/ib-admin/dashboard" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">IB Admin Portal</span></>}</Link></li>
                    </ul>
                  </div>

                  {/* PAMM Management dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        const wasOpen = pammOpen;
                        closeAllDropdowns();
                        setPammOpen(!wasOpen);
                      }}
                      className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                    >
                      <svg className="h-6 w-6 flex-shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      {!collapsed && <span className="whitespace-nowrap">PAMM Management</span>}
                      {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${pammOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>}
                    </button>
                    <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${pammOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
                      <li><Link to="/admin/pamm/managers" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Manage Managers</span></>}</Link></li>
                      <li><Link to="/admin/pamm/users" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">PAMM Users</span></>}</Link></li>
                      <li><Link to="/admin/pamm/deposits" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Deposits</span></>}</Link></li>
                      <li><Link to="/admin/pamm/withdrawals" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Withdrawals</span></>}</Link></li>
                      <li><Link to="/admin/pamm/investments" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Investments</span></>}</Link></li>
                      <li><Link to="/admin/pamm/requests" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Requests/Applications</span></>}</Link></li>
                      <li><Link to="/admin/pamm/performance" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Performance Reports</span></>}</Link></li>
                      <li><Link to="/admin/pamm/settings" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">PAMM Settings</span></>}</Link></li>
                    </ul>
                  </div>

                  {/* Copy Trading dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        const wasOpen = copyTradingOpen;
                        closeAllDropdowns();
                        setCopyTradingOpen(!wasOpen);
                      }}
                      className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                    >
                      <svg className="h-6 w-6 flex-shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                      {!collapsed && <span className="whitespace-nowrap">Copy Trading Area</span>}
                      {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${copyTradingOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>}
                    </button>
                    <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${copyTradingOpen ? 'max-h-60' : 'max-h-0'}`}>
                      <li><Link to="/admin/copy-trading/master" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Master Area</span></>}</Link></li>
                      <li><Link to="/admin/copy-trading/copier" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Copier Area</span></>}</Link></li>
                      <li><Link to="/admin/copy-trading/map" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Map Copier/Master</span></>}</Link></li>
                    </ul>
                  </div>

                  {/* Prize Lots dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        const wasOpen = prizeLotsOpen;
                        closeAllDropdowns();
                        setPrizeLotsOpen(!wasOpen);
                      }}
                      className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                    >
                      <svg className="h-6 w-6 flex-shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                      {!collapsed && <span className="whitespace-nowrap">Set Prize Lots</span>}
                      {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${prizeLotsOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>}
                    </button>
                    <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${prizeLotsOpen ? 'max-h-60' : 'max-h-0'}`}>
                      <li><Link to="/admin/prize-lots/manage" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Manage Prize Lots</span></>}</Link></li>
                      <li><Link to="/admin/prize-lots/pricing" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Set Lot Pricing</span></>}</Link></li>
                      <li><Link to="/admin/prize-lots/history" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Distribution History</span></>}</Link></li>
                    </ul>
                  </div>

                  <NavItem to="/admin/send-emails" icon="/icons/payment.svg" onClick={onNavItemClick}>Send Emails</NavItem>
                  <NavItem to="/admin/send-analysis" icon="/icons/analytics.svg" onClick={onNavItemClick}>Send Analysis</NavItem>
                  <NavItem to="/dashboard" icon="/icons/logout.svg" onClick={onNavItemClick}><span className="text-red-600">Logout</span></NavItem>
                </>
              ) : (
                // Default User Menu Items
                <>
              <NavItem to="/dashboard" icon="/icons/dashboard.svg" onClick={onNavItemClick}>Dashboard</NavItem>

              {/* My Account dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    const wasOpen = accountOpen;
                    closeAllDropdowns();
                    setAccountOpen(!wasOpen);
                  }}
                  aria-expanded={accountOpen}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
                    isActive('/my-account') ? 'border-l-4 border-l-[#6942e2] text-[#6942e2] bg-purple-50' : 'text-gray-600 hover:border-l-4 hover:border-l-[#6942e2] hover:text-[#6942e2]'
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
                    <Link to="/my-account/open-trading-account" onClick={onNavItemClick} className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-[#6942e2]">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Open Trading Account'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-account/accounts" onClick={onNavItemClick} className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-[#6942e2]">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'My Accounts'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-account/overview" onClick={onNavItemClick} className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-[#6942e2]">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Account Overview'}
                    </Link>
                  </li>
                </ul>
              </div>

              <NavItem to="/my-wallet" icon="/icons/wallet.svg" onClick={onNavItemClick}>My Wallet</NavItem>
              <NavItem to="/account-analytics" icon="/icons/analytics.svg" onClick={onNavItemClick}>Account Analytics</NavItem>
              <NavItem to="/payment-details" icon="/icons/payment.svg" onClick={onNavItemClick}>Payment Details</NavItem>

              {/* Funds dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    const wasOpen = fundsOpen;
                    closeAllDropdowns();
                    setFundsOpen(!wasOpen);
                  }}
                  aria-expanded={fundsOpen}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
                    isActive('/funds') ? 'border-l-4 border-l-[#6942e2] text-[#6942e2] bg-purple-50' : 'text-gray-600 hover:border-l-4 hover:border-l-[#6942e2] hover:text-[#6942e2]'
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
                    <Link to="/funds/deposit" onClick={onNavItemClick} className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-[#6942e2]">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Deposit'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/funds/withdrawal" onClick={onNavItemClick} className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-[#6942e2]">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Withdrawal'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/funds/internal-transfer" onClick={onNavItemClick} className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-[#6942e2]">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Internal Transfer'}
                    </Link>
                  </li>
                  <li>
                    <Link to="/funds/transaction-history" onClick={onNavItemClick} className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-[#6942e2]">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Transaction History'}
                    </Link>
                  </li>
                </ul>
              </div>

              <NavItem to="/kyc" icon="/icons/kyc.svg" onClick={onNavItemClick}>KYC</NavItem>

              {/* IB Dashboard dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    const wasOpen = ibOpen;
                    closeAllDropdowns();
                    setIbOpen(!wasOpen);
                  }}
                  aria-expanded={ibOpen}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
                    isActive('/ib-dashboard') ? 'border-l-4 border-l-[#6942e2] text-[#6942e2] bg-purple-50' : 'text-gray-600 hover:border-l-4 hover:border-l-[#6942e2] hover:text-[#6942e2]'
                  }`}
                >
                  <img src="/icons/ib.svg" alt="" className="h-6 w-6" style={{ minWidth: 24, minHeight: 24 }} />
                  {!collapsed && 'IB Dashboard'}
                  {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 transition-transform ${ibOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>}
                </button>
                <ul className={`flex flex-col overflow-hidden rounded-xl bg-gray-100 font-medium transition-all duration-300 ${ibOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <li>
                    <Link to="/ib-dashboard/advanced" onClick={onNavItemClick} className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-[#6942e2]">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Advanced IB Dashboard'}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Analytics dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    const wasOpen = analyticsOpen;
                    closeAllDropdowns();
                    setAnalyticsOpen(!wasOpen);
                  }}
                  aria-expanded={analyticsOpen}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
                    isActive('/analytics') ? 'border-l-4 border-l-[#6942e2] text-[#6942e2] bg-purple-50' : 'text-gray-600 hover:border-l-4 hover:border-l-[#6942e2] hover:text-[#6942e2]'
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
                    <Link to="/analytics/trading" onClick={onNavItemClick} className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-[#6942e2]">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Trading Analysis'}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Settings dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    const wasOpen = settingsOpen;
                    closeAllDropdowns();
                    setSettingsOpen(!wasOpen);
                  }}
                  aria-expanded={settingsOpen}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
                    isActive('/settings') ? 'border-l-4 border-l-[#6942e2] text-[#6942e2] bg-purple-50' : 'text-gray-600 hover:border-l-4 hover:border-l-[#6942e2] hover:text-[#6942e2]'
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
                    <Link to="/settings/profile" onClick={onNavItemClick} className="flex items-center py-2 px-4 ml-6 text-sm text-gray-600 hover:text-[#6942e2]">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-4"></div>
                      {!collapsed && 'Profile'}
                    </Link>
                  </li>
                </ul>
              </div>

              <NavItem to="/logout" icon="/icons/logout.svg" onClick={onNavItemClick}>Logout</NavItem>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
