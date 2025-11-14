import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const IBAdminSidebar = ({ collapsed, isMobile, onClose, onNavItemClick, logo }) => {
  const [groupManagementOpen, setGroupManagementOpen] = useState(false);
  const [ibManagementOpen, setIbManagementOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeAllDropdowns = () => {
    setGroupManagementOpen(false);
    setIbManagementOpen(false);
  };

  const NavItem = ({ to, icon, children, onClick }) => (
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
    </Link>
  );

  return (
    <div className={`${isMobile ? 'fixed inset-0 z-50' : 'h-screen'}`} onClick={isMobile ? onClose : undefined}>
      <div className={`h-full transition-all duration-300 ${collapsed ? 'w-20' : 'w-76'} ${isMobile ? 'relative bg-white shadow-xl' : ''}`} onClick={e => e.stopPropagation()}>
        <div className={`flex h-full flex-col overflow-y-auto bg-gray-100 ${isMobile ? 'shadow-xl' : 'rounded-br-lg rounded-tr-lg shadow-md'}`}>
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
            {!collapsed && <div className="px-5 py-3 ml-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">IB Admin Menu</div>}
            <nav className="flex-1">
              <NavItem to="/ib-admin/dashboard" icon="/icons/dashboard.svg" onClick={onNavItemClick}>IB Dashboard</NavItem>
              <NavItem to="/ib-admin/overview" icon="/icons/analytics.svg" onClick={onNavItemClick}>Overview</NavItem>
              <NavItem to="/ib-admin/requests" icon="/icons/account.svg" onClick={onNavItemClick}>IB Requests</NavItem>
              <NavItem to="/ib-admin/profile" icon="/icons/account.svg" onClick={onNavItemClick}>IB Profile</NavItem>
              <NavItem to="/ib-admin/commission-distribution" icon="/icons/payment.svg" onClick={onNavItemClick}>Commission Distribution</NavItem>
              <NavItem to="/ib-admin/portal-settings" icon="/icons/settings.svg" onClick={onNavItemClick}>Portal Settings</NavItem>
              <NavItem to="/ib-admin/symbols-pip-values" icon="/icons/analytics.svg" onClick={onNavItemClick}>Symbols Pip Values</NavItem>

              {/* Group Management dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    const wasOpen = groupManagementOpen;
                    closeAllDropdowns();
                    setGroupManagementOpen(!wasOpen);
                  }}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                >
                  <svg className="h-6 w-6 flex-shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {!collapsed && <span className="whitespace-nowrap">Group Management</span>}
                  {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${groupManagementOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>}
                </button>
                <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${groupManagementOpen ? 'max-h-60' : 'max-h-0'}`}>
                  <li><Link to="/ib-admin/trading-groups" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Trading Groups</span></>}</Link></li>
                  <li><Link to="/ib-admin/group-commission" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Commission Distribution</span></>}</Link></li>
                </ul>
              </div>

              {/* IB Management dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    const wasOpen = ibManagementOpen;
                    closeAllDropdowns();
                    setIbManagementOpen(!wasOpen);
                  }}
                  className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out text-gray-600 hover:bg-gray-100`}
                >
                  <svg className="h-6 w-6 flex-shrink-0 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  {!collapsed && <span className="whitespace-nowrap">IB Management</span>}
                  {!collapsed && <svg xmlns="http://www.w3.org/2000/svg" className={`ml-auto h-4 w-4 text-gray-600 flex-shrink-0 transition-transform ${ibManagementOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>}
                </button>
                <ul className={`flex flex-col overflow-hidden transition-all duration-300 ${ibManagementOpen ? 'max-h-60' : 'max-h-0'}`}>
                  <li><Link to="/ib-admin/client-linking" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Client Linking</span></>}</Link></li>
                  <li><Link to="/ib-admin/move-user" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Move User</span></>}</Link></li>
                  <li><Link to="/ib-admin/withdrawal-management" onClick={onNavItemClick} className="flex items-center gap-3 py-2 px-5 pl-14 text-sm text-gray-600 hover:bg-gray-100">{!collapsed && <><span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span><span className="whitespace-nowrap">Withdrawal Management</span></>}</Link></li>
                </ul>
              </div>

              <NavItem to="/admin" icon="/icons/logout.svg" onClick={onNavItemClick}><span className="text-red-600">Back to Admin</span></NavItem>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IBAdminSidebar;
