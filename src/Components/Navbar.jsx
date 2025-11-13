import { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { HiOutlineWallet } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Navbar({ toggleSidebar, isAdminRoute }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between relative">

      {/* LEFT SECTION - Menu Icon and Title */}
      <div className="flex items-center gap-4">
        <FiMenu
          className="text-[22px] cursor-pointer text-gray-600 hover:text-black transition"
          onClick={toggleSidebar}
        />
        {isAdminRoute && (
          <span className="text-lg font-semibold text-gray-800">Admin Panel</span>
        )}
      </div>

      {/* RIGHT SECTION - All Other Content */}
      <div className="flex items-center gap-6">

        {/* Badges */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-medium px-3 py-[6px] rounded-full flex items-center gap-1">
            <span className="w-[7px] h-[7px] bg-red-600 rounded-full"></span>
            KYC Not Submitted
          </span>

          <span className="bg-green-100 text-green-600 border border-green-300 text-xs font-medium px-3 py-[6px] rounded-full flex items-center gap-1">
            <span className="w-[7px] h-[7px] bg-green-600 rounded-full"></span>
            Email Verified
          </span>
        </div>

        {/* Wallet */}
        <div className="flex items-center gap-2">
          <HiOutlineWallet className="text-[20px] text-blue-500" />
          <span className="text-[16px] font-semibold text-gray-700">$0.00</span>
        </div>

        {/* User Profile */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-gray-700 transition">
              <span className="text-[17px]">👤</span>
            </div>

            <span className="hidden sm:inline text-[15px] font-medium text-gray-800 group-hover:text-purple-700 transition">
              abc cde
            </span>

            <IoMdArrowDropdown className="text-[20px] text-gray-600 group-hover:text-purple-700 transition" />
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <div className="py-1">
                <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FaUser className="text-gray-500" />
                  Profile
                </button>
                <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FaCog className="text-gray-500" />
                  Settings
                </button>
                <button className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <FaSignOutAlt className="text-gray-500" />
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
