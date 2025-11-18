import React from "react";
import { Link, useLocation } from "react-router-dom";

const SuperAdminSidebar = ({ collapsed, isMobile, onClose, onNavItemClick, logo, smallLogo }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const NavItem = ({ to, icon, children, onClick }) => (
    <Link
      to={to}
      onClick={(e) => {
        // Scroll to top immediately
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        const mainContent = document.querySelector('.flex-1.overflow-y-auto');
        if (mainContent) {
          mainContent.scrollTop = 0;
        }
        onClick && onClick(e);
      }}
      className={`flex items-center py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out ${
        isActive(to)
          ? "border-l-4 border-l-[#6942e2] text-[#6942e2] bg-purple-50"
          : "text-gray-600 hover:border-l-4 hover:border-l-[#6942e2] hover:text-[#6942e2]"
      }`}
    >
      <svg className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        {icon}
      </svg>
      {!collapsed && <span className="whitespace-nowrap">{children}</span>}
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
                className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close sidebar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
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
            {!collapsed && <div className="px-5 pt-3 ml-6 mb-0 text-xs font-semibold text-gray-500 uppercase tracking-wider">Super Admin</div>}
            <nav className="flex-1">
              <NavItem 
                to="/super-admin/dashboard" 
                onClick={onNavItemClick}
                icon={<path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />}
              >
                Dashboard
              </NavItem>
              
              <NavItem 
                to="/super-admin/tenants" 
                onClick={onNavItemClick}
                icon={<path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
              >
                Tenants
              </NavItem>
              
              <NavItem 
                to="/super-admin/tenant-details" 
                onClick={onNavItemClick}
                icon={<path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
              >
                Tenant Details
              </NavItem>
              
              <NavItem 
                to="/super-admin/plans" 
                onClick={onNavItemClick}
                icon={<path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />}
              >
                Plans
              </NavItem>
              
              <NavItem 
                to="/super-admin/billing" 
                onClick={onNavItemClick}
                icon={<path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />}
              >
                Billing
              </NavItem>
              
              <NavItem 
                to="/super-admin/settings" 
                onClick={onNavItemClick}
                icon={<path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
              >
                Settings
              </NavItem>
              
              <NavItem 
                to="/dashboard" 
                onClick={onNavItemClick}
                icon={<path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />}
              >
                <span className="text-red-600">Exit Super Admin</span>
              </NavItem>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminSidebar;