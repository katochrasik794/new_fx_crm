import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCreditCard,
  FaCashRegister,
  FaGift,
  FaMailBulk,
  FaSignOutAlt,
  FaUserShield,
  FaChartLine,
  FaCopy,
  FaIdCard,
  FaChartPie,
} from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const AdminSidebar = ({ collapsed, isMobile, onClose, onNavItemClick }) => {
  // Dropdown states
  const [userManagementOpen, setUserManagementOpen] = useState(false);
  const [mt5ManagementOpen, setMt5ManagementOpen] = useState(false);
  const [gatewayOpen, setGatewayOpen] = useState(false);
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawalOpen, setWithdrawalOpen] = useState(false);
  const [ibManagementOpen, setIbManagementOpen] = useState(false);
  const [pammManagementOpen, setPammManagementOpen] = useState(false);
  const [copyTradingOpen, setCopyTradingOpen] = useState(false);
  const [prizeLotsOpen, setPrizeLotsOpen] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // --- NavItem Component ---
  const NavItem = ({ to, icon: Icon, children, badge, onClick }) => (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center py-3 px-5 gap-4 text-base font-medium outline-none transition-all duration-100 ease-in-out
        ${
          isActive(to)
            ? "border-l-4 border-l-blue-600 text-blue-600 bg-blue-50 dark:bg-gray-700 dark:text-blue-400"
            : "text-gray-700 hover:border-l-4 hover:border-l-blue-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
        }`}
    >
      <Icon className="text-lg min-w-6" />
      {!collapsed && children}
      {badge && !collapsed && (
        <span className="ml-auto rounded-full bg-blue-600 px-2 text-xs text-white">
          {badge}
        </span>
      )}
    </Link>
  );

  // --- Dropdown Item ---
  const DropdownItem = ({ to, children, onClick }) => (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-start py-2 px-4 ml-8 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 dark:bg-gray-500"></div>
      {!collapsed && children}
    </Link>
  );

  return (
    <div
      className={`${
        isMobile
          ? "fixed inset-0 z-50 bg-black bg-opacity-50"
          : "bg-gray-100 dark:bg-gray-900 h-screen"
      }`}
      onClick={isMobile ? onClose : undefined}
    >
      <div
        className={`h-full transition-all duration-300 ${
          collapsed ? "w-22" : "w-64"
        } ${
          isMobile
            ? "relative bg-white dark:bg-gray-800 shadow-xl"
            : "bg-white dark:bg-gray-800 shadow-md"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          {/* Mobile close button */}
          {isMobile && (
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
          )}

          {/* Logo Section */}
          <div
            className={`flex items-center justify-center ${
              collapsed ? "py-4" : "py-6"
            }`}
          >
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {collapsed ? "A" : "Admin"}
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2">
            {!collapsed && (
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Admin Panel
              </div>
            )}

            <NavItem
              to="/admin/system-settings"
              icon={MdSettings}
              onClick={onNavItemClick}
            >
              System Settings
            </NavItem>
            <NavItem
              to="/admin/dashboard"
              icon={FaHome}
              onClick={onNavItemClick}
            >
              Dashboard
            </NavItem>
            <NavItem
              to="/admin/roles"
              icon={FaUserShield}
              onClick={onNavItemClick}
            >
              Roles & Responsibilities
            </NavItem>

            {/* User Management */}
            <div>
              <button
                onClick={() => setUserManagementOpen((s) => !s)}
                className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium transition-all ${
                  userManagementOpen
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <FaUsers className="text-lg" />
                {!collapsed && "User Management"}
                {!collapsed && (
                  <IoIosArrowDown
                    className={` transition-transform ${
                      userManagementOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <ul
                className={`flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-700 font-medium transition-all duration-300 ${
                  userManagementOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <li>
                  <DropdownItem to="/admin/add-user" onClick={onNavItemClick}>
                    Add User
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem to="/admin/users" onClick={onNavItemClick}>
                    All Users
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/active-users"
                    onClick={onNavItemClick}
                  >
                    Active Users
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/banned-users"
                    onClick={onNavItemClick}
                  >
                    Banned Users
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/email-unverified"
                    onClick={onNavItemClick}
                  >
                    Email Unverified
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/kyc-unverified"
                    onClick={onNavItemClick}
                  >
                    KYC Unverified
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/kyc-pending"
                    onClick={onNavItemClick}
                  >
                    KYC Pending
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/profit-loss-report"
                    onClick={onNavItemClick}
                  >
                    Profit/Loss Report
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/send-notification"
                    onClick={onNavItemClick}
                  >
                    Send Notification
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/mt5-account-list"
                    onClick={onNavItemClick}
                  >
                    MT5 Account List
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/manage-finance"
                    onClick={onNavItemClick}
                  >
                    Manage Finance
                  </DropdownItem>
                </li>
              </ul>
            </div>

            {/* KYC Verifications */}
            <NavItem
              to="/admin/kyc-verifications"
              icon={FaIdCard}
              onClick={onNavItemClick}
            >
              KYC Verifications
            </NavItem>

            {/* MT5 Management */}
            <div>
              <button
                onClick={() => setMt5ManagementOpen((s) => !s)}
                className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium transition-all ${
                  mt5ManagementOpen
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <FaChartLine className="text-lg" />
                {!collapsed && "MT5 Management"}
                {!collapsed && (
                  <IoIosArrowDown
                    className={`ml-auto transition-transform ${
                      mt5ManagementOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <ul
                className={`flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-700 font-medium transition-all duration-300 ${
                  mt5ManagementOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <DropdownItem
                    to="/admin/mt5-users-list"
                    onClick={onNavItemClick}
                  >
                    MT5 Users List
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/assign-mt5-to-email"
                    onClick={onNavItemClick}
                  >
                    Assign MT5 to Email
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/change-mt5-password"
                    onClick={onNavItemClick}
                  >
                    Change MT5 Password
                  </DropdownItem>
                </li>
              </ul>
            </div>

            {/* Payment Gateways */}
            <div>
              <button
                onClick={() => setGatewayOpen((s) => !s)}
                className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium transition-all ${
                  gatewayOpen
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <FaCreditCard className="text-lg" />
                {!collapsed && "Payment Gateways"}
                {!collapsed && (
                  <IoIosArrowDown
                    className={`ml-auto transition-transform ${
                      gatewayOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <ul
                className={`flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-700 font-medium transition-all duration-300 ${
                  gatewayOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <DropdownItem
                    to="/admin/automatic-gateways"
                    onClick={onNavItemClick}
                  >
                    Automatic Gateways
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/manual-gateways"
                    onClick={onNavItemClick}
                  >
                    Manual Gateways
                  </DropdownItem>
                </li>
              </ul>
            </div>

            {/* Manage Deposits */}
            <div>
              <button
                onClick={() => setDepositOpen((s) => !s)}
                className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium transition-all ${
                  depositOpen
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <FaCashRegister className="text-lg" />
                {!collapsed && "Manage Deposits"}
                {!collapsed && (
                  <IoIosArrowDown
                    className={`ml-auto transition-transform ${
                      depositOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <ul
                className={`flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-700 font-medium transition-all duration-300 ${
                  depositOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <DropdownItem
                    to="/admin/pending-deposits"
                    onClick={onNavItemClick}
                  >
                    Pending Deposits
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/approved-deposits"
                    onClick={onNavItemClick}
                  >
                    Approved Deposits
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/rejected-deposits"
                    onClick={onNavItemClick}
                  >
                    Rejected Deposits
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/all-deposits"
                    onClick={onNavItemClick}
                  >
                    All Deposits
                  </DropdownItem>
                </li>
              </ul>
            </div>

            {/* Manage Withdrawals */}
            <div>
              <button
                onClick={() => setWithdrawalOpen((s) => !s)}
                className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium transition-all ${
                  withdrawalOpen
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <FaCashRegister className="text-lg" />
                {!collapsed && "Manage Withdrawals"}
                {!collapsed && (
                  <IoIosArrowDown
                    className={`ml-auto transition-transform ${
                      withdrawalOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <ul
                className={`flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-700 font-medium transition-all duration-300 ${
                  withdrawalOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <DropdownItem
                    to="/admin/pending-withdrawals"
                    onClick={onNavItemClick}
                  >
                    Pending Withdrawals
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/approved-withdrawals"
                    onClick={onNavItemClick}
                  >
                    Approved Withdrawals
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/rejected-withdrawals"
                    onClick={onNavItemClick}
                  >
                    Rejected Withdrawals
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/all-withdrawals"
                    onClick={onNavItemClick}
                  >
                    All Withdrawals
                  </DropdownItem>
                </li>
              </ul>
            </div>

            {/* IB Management */}
            <div>
              <button
                onClick={() => setIbManagementOpen((s) => !s)}
                className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium transition-all ${
                  ibManagementOpen
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <FaCopy className="text-lg" />
                {!collapsed && "IB Management"}
                {!collapsed && (
                  <IoIosArrowDown
                    className={`ml-auto transition-transform ${
                      ibManagementOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <ul
                className={`flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-700 font-medium transition-all duration-300 ${
                  ibManagementOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <DropdownItem
                    to="/admin/ib-distribution"
                    onClick={onNavItemClick}
                  >
                    IB Distribution
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/ib-admin-portal"
                    onClick={onNavItemClick}
                  >
                    IB Admin Portal
                  </DropdownItem>
                </li>
              </ul>
            </div>

            {/* PAMM Management */}
            <div>
              <button
                onClick={() => setPammManagementOpen((s) => !s)}
                className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium transition-all ${
                  pammManagementOpen
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <FaChartPie className="text-lg" />
                {!collapsed && "PAMM Management"}
                {!collapsed && (
                  <IoIosArrowDown
                    className={`ml-auto transition-transform ${
                      pammManagementOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <ul
                className={`flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-700 font-medium transition-all duration-300 ${
                  pammManagementOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <li>
                  <DropdownItem
                    to="/admin/manage-managers"
                    onClick={onNavItemClick}
                  >
                    Manage Managers
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/requests-applications"
                    onClick={onNavItemClick}
                  >
                    Requests & Applications
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/investments"
                    onClick={onNavItemClick}
                  >
                    Investments
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem to="/admin/deposits" onClick={onNavItemClick}>
                    Deposits
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/withdrawals"
                    onClick={onNavItemClick}
                  >
                    Withdrawals
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/performance-reports"
                    onClick={onNavItemClick}
                  >
                    Performance Reports
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem to="/admin/pamm-users" onClick={onNavItemClick}>
                    PAMM Users
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/pamm-settings"
                    onClick={onNavItemClick}
                  >
                    PAMM Settings
                  </DropdownItem>
                </li>
              </ul>
            </div>

            {/* Copy Trading Area */}
            <div>
              <button
                onClick={() => setCopyTradingOpen((s) => !s)}
                className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium transition-all ${
                  copyTradingOpen
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <FaCopy className="text-lg" />
                {!collapsed && "Copy Trading Area"}
                {!collapsed && (
                  <IoIosArrowDown
                    className={`ml-auto transition-transform ${
                      copyTradingOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <ul
                className={`flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-700 font-medium transition-all duration-300 ${
                  copyTradingOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <DropdownItem
                    to="/admin/copier-area"
                    onClick={onNavItemClick}
                  >
                    Copier Area
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/master-area"
                    onClick={onNavItemClick}
                  >
                    Master Area
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/map-copier-master"
                    onClick={onNavItemClick}
                  >
                    Map Copier & Master
                  </DropdownItem>
                </li>
              </ul>
            </div>

            {/* Set Prize Lots */}
            <div>
              <button
                onClick={() => setPrizeLotsOpen((s) => !s)}
                className={`flex items-center w-full py-3 px-5 gap-4 text-base font-medium transition-all ${
                  prizeLotsOpen
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <FaGift className="text-lg" />
                {!collapsed && "Set Prize Lots"}
                {!collapsed && (
                  <IoIosArrowDown
                    className={`ml-auto transition-transform ${
                      prizeLotsOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              <ul
                className={`flex flex-col overflow-hidden bg-gray-50 dark:bg-gray-700 font-medium transition-all duration-300 ${
                  prizeLotsOpen ? "max-h-60" : "max-h-0"
                }`}
              >
                <li>
                  <DropdownItem
                    to="/admin/manage-prize-lots"
                    onClick={onNavItemClick}
                  >
                    Manage Prize Lots
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/set-lot-pricing"
                    onClick={onNavItemClick}
                  >
                    Set Lot Pricing
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    to="/admin/prize-distribution-history"
                    onClick={onNavItemClick}
                  >
                    Prize Distribution History
                  </DropdownItem>
                </li>
              </ul>
            </div>

            {/* Send Emails */}
            <NavItem
              to="/admin/send-emails"
              icon={FaMailBulk}
              onClick={onNavItemClick}
            >
              Send Emails
            </NavItem>

            {/* Send Analysis */}
            <NavItem
              to="/admin/send-analysis"
              icon={FaChartLine}
              onClick={onNavItemClick}
            >
              Send Analysis
            </NavItem>

            {/* Logout */}
            <NavItem
              to="/admin/logout"
              icon={FaSignOutAlt}
              onClick={onNavItemClick}
            >
              Logout
            </NavItem>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
