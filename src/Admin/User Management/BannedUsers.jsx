import React, { useState, useEffect } from 'react';
import { FaUserTimes, FaSearch, FaUserCheck, FaBan, FaCalendarAlt, FaPhone, FaEnvelope, FaMapMarkerAlt, FaRedo } from 'react-icons/fa';

const BannedUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(25);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockUsers = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1-555-0123',
        country: 'United States',
        status: 'Banned',
        joined: '15 Oct 2025',
        banReason: 'Violation of terms',
        bannedDate: '10 Nov 2025'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+44-20-7946-0123',
        country: 'United Kingdom',
        status: 'Banned',
        joined: '12 Sep 2025',
        banReason: 'Suspicious activity',
        bannedDate: '08 Nov 2025'
      },
      {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        phone: '+61-2-1234-5678',
        country: 'Australia',
        status: 'Banned',
        joined: '05 Aug 2025',
        banReason: 'Multiple violations',
        bannedDate: '05 Nov 2025'
      }
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

  const handleUnbanUser = (userId) => {
    // Mock unban functionality
    setUsers(prev => prev.filter(user => user.id !== userId));
    setFilteredUsers(prev => prev.filter(user => user.id !== userId));
  };

  const getStatusBadge = (status) => {
    return (
      <span className="px-3 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800 border-2 border-red-200">
        <FaBan className="inline mr-1" />
        {status}
      </span>
    );
  };

  const getCountryFlag = (country) => {
    const flags = {
      'United States': '🇺🇸',
      'United Kingdom': '🇬🇧',
      'Australia': '🇦🇺',
      'Canada': '🇨🇦',
      'India': '🇮🇳',
      'Pakistan': '🇵🇰'
    };
    return flags[country] || '🌍';
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl shadow-2xl border-2 border-red-500">
              <FaUserTimes className="text-gray-900 text-2xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Banned Users
              </h1>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                These users are currently blocked (status = 1).
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaBan className="text-red-400" />
                <span className="text-lg font-semibold text-gray-900">
                  Total Banned: <strong className="text-red-400">{filteredUsers.length}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 mb-8">
          <div className="max-w-md">
            <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FaSearch className="text-red-400" />
              Search Banned Users
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or email"
                className="w-full px-4 py-3 pl-12 bg-gray-800/50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-gray-900 placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-400" />
            </div>
          </div>
        </div>

        {/* Table/Card View */}
        {filteredUsers.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 text-center">
            <FaUserCheck className="text-6xl text-gray-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Banned Users</h3>
            <p className="text-gray-600">Currently, there are no users with banned status.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Desktop Table View */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-red-600 to-red-800">
                      <tr>
                        <th className="px-6 py-4 text-left text-gray-900 font-semibold text-sm">Sr No.</th>
                        <th className="px-6 py-4 text-left text-gray-900 font-semibold text-sm">Name</th>
                        <th className="px-6 py-4 text-left text-gray-900 font-semibold text-sm">Email</th>
                        <th className="px-6 py-4 text-left text-gray-900 font-semibold text-sm">Phone</th>
                        <th className="px-6 py-4 text-left text-gray-900 font-semibold text-sm">Country</th>
                        <th className="px-6 py-4 text-left text-gray-900 font-semibold text-sm">Status</th>
                        <th className="px-6 py-4 text-left text-gray-900 font-semibold text-sm">Joined</th>
                        <th className="px-6 py-4 text-left text-gray-900 font-semibold text-sm">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {currentItems.map((user, index) => (
                        <tr key={user.id} className="hover:bg-red-50 transition-colors duration-200">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {(currentPage - 1) * itemsPerPage + index + 1}
                          </td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                            {user.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                              <FaEnvelope className="text-red-400 text-xs" />
                              {user.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                              <FaPhone className="text-red-400 text-xs" />
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
                            {getStatusBadge(user.status)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                              <FaCalendarAlt className="text-red-400 text-xs" />
                              {user.joined}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleUnbanUser(user.id)}
                                className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-gray-900 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
                              >
                                <FaRedo className="text-xs" />
                                Unban
                              </button>
                            </div>
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
                <div key={user.id} className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 hover:shadow-red-500/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg border-2 border-red-500">
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
                      {getStatusBadge(user.status)}
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-200">
                      <FaEnvelope className="text-red-400 text-sm" />
                      <span className="text-sm text-gray-700 break-all">{user.email}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-200">
                      <FaPhone className="text-red-400 text-sm" />
                      <span className="text-sm text-gray-700">{user.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-200">
                      <FaCalendarAlt className="text-red-400 text-sm" />
                      <span className="text-sm text-gray-700">Joined: {user.joined}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-red-200">
                    <div className="text-xs text-gray-600">
                      <div>Banned: {user.bannedDate}</div>
                      <div className="text-red-400">Reason: {user.banReason}</div>
                    </div>
                    <button
                      onClick={() => handleUnbanUser(user.id)}
                      className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-gray-900 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
                    >
                      <FaRedo className="text-xs" />
                      Unban User
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pagination */}
        {filteredUsers.length > 0 && totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border-2 border-gray-200 rounded-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-red-300 font-medium"
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
                          ? 'bg-gradient-to-r from-red-600 to-red-800 text-gray-900 border-red-600'
                          : 'border-gray-200 hover:bg-gray-100 text-red-300'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="px-2 text-red-400">...</span>
                    <button
                      onClick={() => paginate(totalPages)}
                      className="px-4 py-2 border-2 border-gray-200 rounded-xl hover:bg-gray-100 text-red-300 font-medium transition-colors"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border-2 border-gray-200 rounded-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-red-300 font-medium"
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

export default BannedUsers;

