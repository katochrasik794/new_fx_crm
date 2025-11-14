import React, { useState, useEffect } from 'react';
import { FaClock, FaSearch, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationTriangle, FaEye, FaUserCheck } from 'react-icons/fa';

const KycPending = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(25);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockUsers = [
      { id: 1, name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com', phone: '7875311225', country: 'India', emailVerified: 'Verified', kycStatus: 'Pending', referral: 'FINCRM 1009', joined: '07 Nov 2025' },
      { id: 2, name: 'John Smith', email: 'john.smith@example.com', phone: '+1-555-0124', country: 'United States', emailVerified: 'Verified', kycStatus: 'Pending', referral: 'FINCRM 2341', joined: '06 Nov 2025' },
      { id: 3, name: 'Maria Garcia', email: 'maria.garcia@example.com', phone: '+34-912-345-678', country: 'Spain', emailVerified: 'Verified', kycStatus: 'Pending', referral: 'FINCRM 5678', joined: '05 Nov 2025' },
      { id: 4, name: 'Ahmed Hassan', email: 'ahmed.hassan@example.com', phone: '+971-50-123-4567', country: 'United Arab Emirates', emailVerified: 'Unverified', kycStatus: 'Pending', referral: 'FINCRM 8901', joined: '04 Nov 2025' },
      { id: 5, name: 'Lisa Chen', email: 'lisa.chen@example.com', phone: '+86-138-0013-8000', country: 'China', emailVerified: 'Verified', kycStatus: 'Pending', referral: 'FINCRM 3456', joined: '03 Nov 2025' }
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

  const handleReviewKyc = (userId) => {
    // Mock review KYC functionality
    console.log(`Reviewing KYC for user ${userId}`);
    // You can add modal or navigation to KYC review page here
  };

  const getEmailStatusBadge = (status) => {
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
        status === 'Verified'
          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
          : 'bg-amber-100 text-amber-800 border border-amber-200'
      }`}>
        {status === 'Verified' ? (
          <><FaCheckCircle className="inline mr-1" /> {status}</>
        ) : (
          <><FaExclamationTriangle className="inline mr-1" /> {status}</>
        )}
      </span>
    );
  };

  const getKycStatusBadge = (status) => {
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
        status === 'Pending'
          ? 'bg-amber-100 text-amber-800 border border-amber-200'
          : status === 'Verified'
          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
          : 'bg-gray-100 text-gray-800 border border-gray-200'
      }`}>
        {status === 'Pending' ? (
          <><FaClock className="inline mr-1" /> {status}</>
        ) : status === 'Verified' ? (
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
      'United States': '🇺🇸',
      'Spain': '🇪🇸',
      'United Arab Emirates': '🇦🇪',
      'China': '🇨🇳',
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
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl border-2 border-indigo-400">
              <FaClock className="text-white text-2xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                KYC Pending Users
              </h1>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                Users who submitted KYC but are awaiting approval.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaClock className="text-indigo-500" />
                <span className="text-lg font-semibold text-gray-200">
                  Total Pending: <strong className="text-indigo-600">{filteredUsers.length}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-indigo-500/30 p-6 mb-8">
          <div className="max-w-md">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <FaSearch className="text-indigo-500" />
              Search by Name or Email
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Start typing..."
                className="w-full px-4 py-3 pl-12 bg-indigo-50/50 border-2 border-indigo-500/30 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-gray-900 placeholder-indigo-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500" />
            </div>
          </div>
        </div>

        {/* Table/Card View */}
        <div className="space-y-4">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-indigo-500/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Sr No.</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Name</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Email</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Phone</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Country</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Email Verified</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">KYC Status</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Referral</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Joined</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-indigo-100">
                    {currentItems.map((user, index) => (
                      <tr key={user.id} className="hover:bg-indigo-50/30 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <FaEnvelope className="text-indigo-400 text-xs" />
                            {user.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <FaPhone className="text-indigo-400 text-xs" />
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
                          {getEmailStatusBadge(user.emailVerified)}
                        </td>
                        <td className="px-6 py-4">
                          {getKycStatusBadge(user.kycStatus)}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-lg px-2 py-1">
                          {user.referral}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {user.joined}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleReviewKyc(user.id)}
                            className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
                          >
                            <FaEye className="text-xs" />
                            Review KYC
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
              <div key={user.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-indigo-500/30 p-6 hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-indigo-400">
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
                  <div className="text-right space-y-2">
                    {getEmailStatusBadge(user.emailVerified)}
                    {getKycStatusBadge(user.kycStatus)}
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 p-3 bg-indigo-50/50 rounded-xl border border-indigo-500/20">
                    <FaEnvelope className="text-indigo-500 text-sm" />
                    <span className="text-sm text-gray-700 break-all">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50/50 rounded-xl border border-purple-500/20">
                    <FaPhone className="text-purple-500 text-sm" />
                    <span className="text-sm text-gray-700">{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-50/50 rounded-xl border border-pink-500/20">
                    <FaUserCheck className="text-pink-500 text-sm" />
                    <span className="text-sm text-gray-700">Referral: {user.referral}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-indigo-100">
                  <div className="text-xs text-gray-500">
                    Joined: {user.joined}
                  </div>
                  <button
                    onClick={() => handleReviewKyc(user.id)}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
                  >
                    <FaEye className="text-xs" />
                    Review KYC
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-indigo-500/30 p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border-2 border-indigo-500/30 rounded-xl hover:bg-indigo-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-indigo-600 font-medium"
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
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-600'
                          : 'border-indigo-500/30 hover:bg-indigo-900/50 text-indigo-600'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="px-2 text-indigo-400">...</span>
                    <button
                      onClick={() => paginate(totalPages)}
                      className="px-4 py-2 border-2 border-indigo-500/30 rounded-xl hover:bg-indigo-900/50 text-indigo-600 font-medium transition-colors"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border-2 border-indigo-500/30 rounded-xl hover:bg-indigo-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-indigo-600 font-medium"
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

export default KycPending;