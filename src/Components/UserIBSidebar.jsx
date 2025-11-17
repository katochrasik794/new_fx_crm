import React from "react";
import { Link, useLocation } from "react-router-dom";

const UserIBSidebar = ({ collapsed, isMobile, onClose, onNavItemClick, logo, smallLogo }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavItem = ({ to, icon, children, onClick }) => (
    <Link
      to={to}
      onClick={onClick}
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
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
            </div>
          )}
          <div className="flex items-center justify-between px-4 h-[60px]">
            {isMobile && (
              <div className="flex-1 flex justify-center">
                <img
                  className="w-auto max-w-[120px] h-8 object-contain"
                  src={collapsed ? smallLogo : logo}
                  alt="Logo"
                />
              </div>
            )}
            {!isMobile && (
              <img
                className="w-auto max-w-full h-full object-contain py-2"
                src={collapsed ? smallLogo : logo}
                alt="Logo"
              />
            )}
          </div>

          <div className="flex flex-1 flex-col">
            {!collapsed && <div className="px-5 py-3 ml-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">IB Menu</div>}
            <nav className="flex-1">
              <NavItem to="/ib-dashboard/advanced" icon="/icons/dashboard.svg" onClick={onNavItemClick}>Advanced IB Dashboard</NavItem>
              <NavItem to="/ib-dashboard/account-overview" icon="/icons/account.svg" onClick={onNavItemClick}>Account Overview</NavItem>
              <NavItem to="/ib-dashboard/commission-analytics" icon="/icons/analytics.svg" onClick={onNavItemClick}>Commission Analytics</NavItem>
              <NavItem to="/ib-dashboard/pip-calculator" icon="/icons/analytics.svg" onClick={onNavItemClick}>Pip Calculator</NavItem>
              <NavItem to="/ib-dashboard/my-clients" icon="/icons/account.svg" onClick={onNavItemClick}>My IB Clients</NavItem>
              <NavItem to="/ib-dashboard/my-structure" icon="/icons/ib.svg" onClick={onNavItemClick}>My IB Structure</NavItem>
              <NavItem to="/ib-dashboard/my-commission" icon="/icons/payment.svg" onClick={onNavItemClick}>My Commission</NavItem>
              <NavItem to="/ib-dashboard/withdrawals" icon="/icons/funds.svg" onClick={onNavItemClick}>IB Withdrawals</NavItem>
              <NavItem to="/dashboard" icon="/icons/logout.svg" onClick={onNavItemClick}><span className="text-red-600">Back to Main Dashboard</span></NavItem>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserIBSidebar;
