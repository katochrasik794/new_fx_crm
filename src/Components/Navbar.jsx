import { FiMenu } from "react-icons/fi";
import { HiOutlineWallet } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar({ toggleSidebar }) {
  return (
    <div className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">

      {/* LEFT SECTION */}
      <div className="flex items-center gap-6">

        {/* Menu */}
        <FiMenu
          className="text-[22px] cursor-pointer text-gray-600 hover:text-black transition"
          onClick={toggleSidebar}
        />

        {/* Wallet */}
        <div className="flex items-center gap-2">
          <HiOutlineWallet className="text-[20px] text-blue-500" />
          <span className="text-[16px] font-semibold text-gray-700">$0.00</span>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-3">

          <span className="bg-red-100 text-red-600 border border-red-300 text-xs font-medium px-3 py-[6px] rounded-full flex items-center gap-1">
            <span className="w-[7px] h-[7px] bg-red-600 rounded-full"></span>
            KYC Not Submitted
          </span>

          <span className="bg-green-100 text-green-600 border border-green-300 text-xs font-medium px-3 py-[6px] rounded-full flex items-center gap-1">
            <span className="w-[7px] h-[7px] bg-green-600 rounded-full"></span>
            Email Verified
          </span>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="w-9 h-9 rounded-full bg-gray-900 text-white flex items-center justify-center group-hover:bg-gray-700 transition">
          <span className="text-[17px]">👤</span>
        </div>

        <span className="text-[15px] font-medium text-gray-800 group-hover:text-purple-700 transition">
          abc cde
        </span>

        <IoMdArrowDropdown className="text-[20px] text-gray-600 group-hover:text-purple-700 transition" />
      </div>
    </div>
  );
}
