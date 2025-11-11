import React, { useState, useEffect } from 'react';
import { RiMenu5Line, RiMoonLine, RiSunLine, RiArrowDownSLine, RiLogoutBoxLine } from 'react-icons/ri';

function AdminTopbar({ onToggleSidebar }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between transition-colors duration-200">
      {/* Left Section */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        {/* <a href="/" className="logo flex-shrink-0">
          <span className="logo-light">
            <span className="logo-lg">
              <img src="assets/images/logo.png" alt="logo" className="h-8 w-auto" />
            </span>
            <span className="logo-sm hidden">
              <img src="assets/images/oxo_favicon.png" alt="small logo" className="h-6 w-6" />
            </span>
          </span>
          <span className="logo-dark hidden">
            <span className="logo-lg">
              <img src="assets/images/logo-dark.png" alt="dark logo" className="h-8 w-auto" />
            </span>
            <span className="logo-sm hidden">
              <img src="assets/images/oxo_favicon.png" alt="small logo" className="h-6 w-6" />
            </span>
          </span>
        </a> */}

        <button
          onClick={onToggleSidebar}
          className="sidenav-toggle-button flex-shrink-0 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors duration-200"
        >
          <RiMenu5Line className="text-xl" />
        </button>

        <button className="topnav-toggle-button hidden px-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors duration-200">
          <RiMenu5Line className="text-xl" />
        </button>

        <div className="topbar-item hidden md:flex px-2 flex-1 min-w-0">
          <div className="truncate">
            <h4 className="page-title text-lg font-semibold text-gray-800 dark:text-gray-200 mb-0 truncate">
              WELCOME OXO SUPER ADMIN
            </h4>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="topbar-item hidden sm:flex">
          <button
            onClick={toggleDarkMode}
            className="topbar-link p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors duration-200"
            type="button"
          >
            <RiMoonLine className={`text-xl light-mode-icon ${darkMode ? 'hidden' : 'block'}`} />
            <RiSunLine className={`text-xl dark-mode-icon ${darkMode ? 'block' : 'hidden'}`} />
          </button>
        </div>

        <div className="topbar-item nav-user relative">
          <button
            onClick={toggleDropdown}
            className="topbar-link flex items-center gap-2 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors duration-200"
            type="button"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/525/162/non_2x/lion-animal-isolated-photo.jpg"
              width="32"
              className="rounded-full flex-shrink-0"
              alt="user-image"
            />
            <span className="hidden lg:flex flex-col gap-1 min-w-0">
              <h5 className="my-0 text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                admin@oxo.com
              </h5>
              <small className="text-xs text-gray-500 dark:text-gray-400">Super Admin</small>
            </span>
            <RiArrowDownSLine className="hidden lg:block text-sm flex-shrink-0" />
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
              <div className="dropdown-header px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                <h6 className="text-sm font-medium text-gray-800 dark:text-gray-200 m-0">Welcome!</h6>
              </div>
              <div className="dropdown-divider border-t border-gray-200 dark:border-gray-700"></div>
              <a
                href="logout.php"
                className="dropdown-item flex items-center px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={closeDropdown}
              >
                <RiLogoutBoxLine className="mr-2 text-base" />
                <span>Sign Out</span>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile dropdown */}
      {dropdownOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={closeDropdown}
        ></div>
      )}
    </div>
  );
}

export default AdminTopbar;