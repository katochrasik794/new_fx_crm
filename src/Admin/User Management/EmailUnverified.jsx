import React, { useState, useEffect } from 'react';
import { FaMailBulk, FaSearch, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const EmailUnverified = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(25);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockUsers = [
      { id: 1, name: 'Sagar Shinde', email: 'ss12421243@gmail.com', phone: '9975818554', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 7234', joined: '09 Nov 2025' },
      { id: 2, name: 'anku putt', email: 'parteekchawla69@gmail.com', phone: '7529860737', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 8346', joined: '07 Nov 2025' },
      { id: 3, name: 'FINCRM Trading tw', email: 'trading123@gmail.com', phone: '9191919191', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 2569', joined: '07 Nov 2025' },
      { id: 4, name: 'FINCRM SUB IB TWO', email: 'FINCRMsubib2@gmail.com', phone: '9191919191', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 8082', joined: '07 Nov 2025' },
      { id: 5, name: 'Rajendra Dudhe', email: 'rushikesh350@gmail.com', phone: '9067078024', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 2992', joined: '06 Nov 2025' },
      { id: 6, name: 'Dayanand Shendarkar', email: 'daya23299@gmail.com', phone: '918605256052', country: 'India', kycStatus: 'Verified', referral: 'FINCRM271292', joined: '06 Nov 2025' },
      { id: 7, name: 'ksm init', email: 'ksmin@gmail.com', phone: '7529860734', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 1973', joined: '06 Nov 2025' },
      { id: 8, name: 'FINCRM MARKET TRADING', email: 'tradings@gmail.com', phone: '9191919191', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 9127', joined: '06 Nov 2025' },
      { id: 9, name: 'FINCRM MARKET SUB IB', email: 'fincrmmarketsubib@gmail.com', phone: '9191919191', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 3068', joined: '06 Nov 2025' },
      { id: 10, name: 'Priyjeet Devkar', email: 'priyjeetdevkar@gmail.com', phone: '9960095759r', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 1734', joined: '06 Nov 2025' },
      { id: 11, name: 'Naveed Naveed', email: 'naveed1381381@gmail.com', phone: '3346726021', country: 'Pakistan', kycStatus: 'Unverified', referral: 'FINCRM 3801', joined: '05 Nov 2025' },
      { id: 12, name: 'Vishwjit Salunkhe', email: 'vishwjitsalunkhe2000@gmail.com', phone: '9130835434', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 5225', joined: '05 Nov 2025' },
      { id: 13, name: 'Shahbaz Ilyas', email: 'shahbazilyas074@gmail.com', phone: '03204072575', country: 'Pakistan', kycStatus: 'Unverified', referral: 'FINCRM 8004', joined: '05 Nov 2025' },
      { id: 14, name: 'Prathamesh MISAL', email: 'misalp737@gmail.com', phone: '8999636263', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 9329', joined: '04 Nov 2025' },
      { id: 15, name: 'Aniket Dhage', email: 'dhagemanju57@gmail.com', phone: '9284829571', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 2676', joined: '04 Nov 2025' },
      { id: 16, name: 'Mandar Kathote', email: 'mandarak16051922@gmail.com', phone: '9766693549', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 1047', joined: '04 Nov 2025' },
      { id: 17, name: 'Akash Jadhav', email: 'akashjadhav9699@gmail.com', phone: '0000000000', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 7696', joined: '04 Nov 2025' },
      { id: 18, name: 'Navnath Salunkhe', email: 'nbs881982@gmail.com', phone: '919370882250', country: 'India', kycStatus: 'Verified', referral: 'FINCRM738260', joined: '04 Nov 2025' },
      { id: 19, name: 'Master mas', email: 'master1234@gmail.com', phone: '+971563259949', country: 'United Arab Emirates', kycStatus: 'Unverified', referral: 'FINCRM 9849', joined: '04 Nov 2025' },
      { id: 20, name: 'Ramesh Babar', email: 'ib.wtcindia@gmail.com', phone: '918484843188', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM685829', joined: '03 Nov 2025' },
      { id: 21, name: 'Pankaj  Matere', email: 'pankajmatere08@gmail.com', phone: '918149605010', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM758758', joined: '03 Nov 2025' },
      { id: 22, name: 'Vijay Kamble', email: 'v.vijay137@gmail.com', phone: '7977827358', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 1118', joined: '02 Nov 2025' },
      { id: 23, name: 'Karuna  Dhisal', email: 'arunadhisal@gmail.com', phone: '9190114 45363', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM822256', joined: '31 Oct 2025' },
      { id: 24, name: 'Sambhaji Hajare', email: 'sambhajih2255@gmail.com', phone: '7066725559', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM 2014', joined: '31 Oct 2025' },
      { id: 25, name: 'Vilas  Jadhav', email: 'rajeshgamare38@gmail.com', phone: '919423292816', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM944476', joined: '29 Oct 2025' },
      { id: 26, name: 'ABCD XYZ', email: 'admin@gmail.com', phone: '0000000000', country: 'India', kycStatus: 'Unverified', referral: 'FINCRM8534', joined: '15 Oct 2025' }
    ];
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  useEffect(() => {
    const filtered = users.filter(user =>
      searchTerm === '' ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [users, searchTerm]);

  const handleSendVerification = (userId) => {
    // Mock send verification email functionality
    console.log(`Sending verification email to user ${userId}`);
    // You can add toast notification or state update here
  };

  const getKycBadge = (status) => {
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
        status === 'Verified'
          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
          : 'bg-gray-100 text-gray-800 border border-gray-200'
      }`}>
        {status === 'Verified' ? (
          <><FaCheckCircle className="inline mr-1" /> {status}</>
        ) : (
          <><FaExclamationTriangle className="inline mr-1" /> {status}</>
        )}
      </span>
    );
  };

  const getCountryFlag = (country) => {
    const flags = {
      'India': '🇮🇳',
      'Pakistan': '🇵🇰',
      'United Arab Emirates': '🇦🇪',
      'Canada': '🇨🇦',
      'United Kingdom': '🇬🇧'
    };
    return flags[country] || '🌍';
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl shadow-xl border-2 border-orange-400">
              <FaMailBulk className="text-white text-2xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Email Unverified Users
              </h1>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                Users whose email is not verified.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaExclamationTriangle className="text-orange-500" />
                <span className="text-lg font-semibold text-gray-200">
                  Total Unverified: <strong className="text-orange-600">{filteredUsers.length}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-500/30 p-6 mb-8">
          <div className="max-w-md">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <FaSearch className="text-orange-500" />
              Search by Name or Email
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Start typing..."
                className="w-full px-4 py-3 pl-12 bg-orange-50/50 border-2 border-orange-500/30 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-900 placeholder-orange-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Table/Card View */}
        <div className="space-y-4">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-orange-500/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Sr No.</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Name</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Email</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Phone</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Country</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">KYC</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Referral</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Joined</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-orange-100">
                    {currentItems.map((user, index) => (
                      <tr key={user.id} className="hover:bg-orange-50/30 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <FaEnvelope className="text-orange-400 text-xs" />
                            {user.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <FaPhone className="text-orange-400 text-xs" />
                            {user.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{getCountryFlag(user.country)}</span>
                            {user.country}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {getKycBadge(user.kycStatus)}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-orange-600 bg-orange-50 rounded-lg px-2 py-1">
                          {user.referral}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {user.joined}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleSendVerification(user.id)}
                            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
                          >
                            <FaPaperPlane className="text-xs" />
                            Send Email
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {currentItems.map((user, index) => (
              <div key={user.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-orange-500/30 p-6 hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-orange-400">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{user.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-lg">{getCountryFlag(user.country)}</span>
                        {user.country}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {getKycBadge(user.kycStatus)}
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 p-3 bg-orange-50/50 rounded-xl border border-orange-500/20">
                    <FaEnvelope className="text-orange-500 text-sm" />
                    <span className="text-sm text-gray-700 break-all">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50/50 rounded-xl border border-amber-500/20">
                    <FaPhone className="text-amber-500 text-sm" />
                    <span className="text-sm text-gray-700">{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50/50 rounded-xl border border-yellow-500/20">
                    <FaIdCard className="text-yellow-500 text-sm" />
                    <span className="text-sm text-gray-700">Referral: {user.referral}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-orange-100">
                  <div className="text-xs text-gray-500">
                    Joined: {user.joined}
                  </div>
                  <button
                    onClick={() => handleSendVerification(user.id)}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
                  >
                    <FaPaperPlane className="text-xs" />
                    Send Verification
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-orange-500/30 p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border-2 border-orange-500/30 rounded-xl hover:bg-orange-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-orange-600 font-medium"
                >
                  Previous
                </button>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => paginate(pageNum)}
                      className={`px-4 py-2 border-2 rounded-xl transition-colors font-medium ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white border-orange-600'
                          : 'border-orange-500/30 hover:bg-orange-900/50 text-orange-600'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="px-2 text-orange-400">...</span>
                    <button
                      onClick={() => paginate(totalPages)}
                      className="px-4 py-2 border-2 border-orange-500/30 rounded-xl hover:bg-orange-900/50 text-orange-600 font-medium transition-colors"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border-2 border-orange-500/30 rounded-xl hover:bg-orange-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-orange-600 font-medium"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailUnverified;