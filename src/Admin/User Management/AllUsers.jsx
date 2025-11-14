import React, { useState, useEffect } from 'react';
import { FaUsers, FaEye, FaUserCheck, FaKey, FaTrash, FaSearch, FaFilter, FaEdit, FaSignInAlt } from 'react-icons/fa';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    verification: '',
    status: '',
    country: '',
    phone: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(25);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockUsers = [
      {
        id: 383,
        firstName: 'jagdish',
        lastName: 'sonar',
        email: 'jagdishsonar020@gmail.com',
        phone: '7900003727',
        country: 'India',
        referral: 'FINCRM 7363',
        referredBy: { name: 'Candle Story', email: 'ceo.candlestory@gmail.com' },
        emailVerified: true,
        kycStatus: 'verified',
        status: 'Active',
        joinedDate: '11 Nov 2025'
      },
      {
        id: 382,
        firstName: 'Rajesh',
        lastName: 'Pawar',
        email: 'raju.21pawar@gmail.com',
        phone: '9885582723',
        country: 'India',
        referral: 'FINCRM 8090',
        referredBy: { name: 'V R ENTERPRISE', email: 'vrenterprisessatara@gmail.com' },
        emailVerified: true,
        kycStatus: 'unverified',
        status: 'Active',
        joinedDate: '11 Nov 2025'
      },
      {
        id: 378,
        firstName: 'Vinod',
        lastName: 'Kumar',
        email: 'vkvinodkumar760@gmail.com',
        phone: '+91 90583 67783',
        country: 'india',
        referral: 'FINCRM220565',
        referredBy: null,
        emailVerified: true,
        kycStatus: 'verified',
        status: 'Active',
        joinedDate: '10 Nov 2025'
      }
    ];
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  useEffect(() => {
    let filtered = users.filter(user => {
      const matchesSearch = searchTerm === '' ||
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.includes(searchTerm) ||
        user.country.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilters =
        (filters.name === '' || `${user.firstName} ${user.lastName}`.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.email === '' || user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (filters.country === '' || user.country.toLowerCase().includes(filters.country.toLowerCase())) &&
        (filters.phone === '' || user.phone.includes(filters.phone)) &&
        (filters.status === '' || user.status === filters.status) &&
        (filters.verification === '' ||
          (filters.verification === 'email-verified' && user.emailVerified) ||
          (filters.verification === 'email-unverified' && !user.emailVerified) ||
          (filters.verification === 'kyc-verified' && user.kycStatus === 'verified') ||
          (filters.verification === 'kyc-pending' && user.kycStatus === 'pending') ||
          (filters.verification === 'kyc-unverified' && user.kycStatus === 'unverified')
        );

      return matchesSearch && matchesFilters;
    });

    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [users, searchTerm, filters]);

  const getVerificationBadge = (emailVerified, kycStatus) => {
    return (
      <div className="flex flex-col gap-1">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          emailVerified
            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
            : 'bg-amber-100 text-amber-800 border border-amber-200'
        }`}>
          {emailVerified ? 'Email: Verified' : 'Email: Unverified'}
        </span>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          kycStatus === 'verified'
            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
            : kycStatus === 'pending'
            ? 'bg-amber-100 text-amber-800 border border-amber-200'
            : 'bg-gray-100 text-gray-800 border border-gray-200'
        }`}>
          KYC: {kycStatus === 'verified' ? 'Verified' : kycStatus === 'pending' ? 'Pending' : 'Unverified'}
        </span>
      </div>
    );
  };

  const getStatusBadge = (status) => {
    return (
      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
        status === 'Active'
          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
          : 'bg-red-100 text-red-800 border border-red-200'
      }`}>
        {status}
      </span>
    );
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-violet-100 p-3 sm:p-4 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
              <FaUsers className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">All Users</h1>
              <p className="text-gray-600">Manage and view all registered users</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaFilter className="text-blue-500" />
                Name
              </label>
              <input
                type="text"
                placeholder="Search name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={filters.name}
                onChange={(e) => handleFilterChange('name', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaFilter className="text-blue-500" />
                Email
              </label>
              <input
                type="text"
                placeholder="Search email..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={filters.email}
                onChange={(e) => handleFilterChange('email', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaFilter className="text-blue-500" />
                Verification
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={filters.verification}
                onChange={(e) => handleFilterChange('verification', e.target.value)}
              >
                <option value="">All</option>
                <option value="email-verified">Email: Verified</option>
                <option value="email-unverified">Email: Unverified</option>
                <option value="kyc-verified">KYC: Verified</option>
                <option value="kyc-pending">KYC: Pending</option>
                <option value="kyc-unverified">KYC: Unverified</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaFilter className="text-blue-500" />
                Status
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
              >
                <option value="">All</option>
                <option value="Active">Active</option>
                <option value="Banned">Banned</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaFilter className="text-blue-500" />
                Country
              </label>
              <input
                type="text"
                placeholder="Search country..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={filters.country}
                onChange={(e) => handleFilterChange('country', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <FaFilter className="text-blue-500" />
                Phone
              </label>
              <input
                type="text"
                placeholder="Search phone..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                value={filters.phone}
                onChange={(e) => handleFilterChange('phone', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Global Search */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-3">
            <FaSearch className="text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Global search across all columns..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto -mx-3 sm:-mx-0 px-3 sm:px-0">
            <table className="w-full min-w-[1200px]">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Sr No.</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Referred By</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Verification</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Country</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Phone</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Referral</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Joined</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {currentItems.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.referredBy ? (
                        <div className="flex flex-col">
                          <span className="font-medium">{user.referredBy.name}</span>
                          <span className="text-xs text-gray-500">{user.referredBy.email}</span>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {getVerificationBadge(user.emailVerified, user.kycStatus)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.country}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(user.status)}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {user.referral}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {user.joinedDate}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => {
                            setSelectedUser(user);
                            setShowUserModal(true);
                          }}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center gap-1 text-sm"
                        >
                          <FaEye className="text-xs" />
                          View
                        </button>
                        <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors flex items-center gap-1 text-sm">
                          <FaSignInAlt className="text-xs" />
                          Login
                        </button>
                        <button className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors flex items-center gap-1 text-sm">
                          <FaKey className="text-xs" />
                          Password
                        </button>
                        <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-1 text-sm">
                          <FaTrash className="text-xs" />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-4 sm:px-6 py-4 bg-gray-50/50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-sm text-gray-700">
                Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredUsers.length)} of {filteredUsers.length} entries
              </div>
              <div className="flex items-center flex-wrap gap-2 justify-center">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-3 py-1 border rounded-lg transition-colors ${
                      currentPage === number
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* User Details Modal */}
        {showUserModal && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">
                    User Details ({selectedUser.firstName} {selectedUser.lastName})
                  </h2>
                  <button
                    onClick={() => setShowUserModal(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaEdit className="text-xl" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        defaultValue={selectedUser.firstName}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        defaultValue={selectedUser.lastName}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="text"
                        defaultValue={selectedUser.phone}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                      <input
                        type="text"
                        defaultValue={selectedUser.country}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={selectedUser.email}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Referral</label>
                      <input
                        type="text"
                        defaultValue={selectedUser.referral}
                        disabled
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 pt-4">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>

                <hr className="my-6" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="px-4 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center gap-2">
                    <FaUserCheck />
                    Unverify Email
                  </button>
                  <button className="px-4 py-3 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center justify-center gap-2">
                    <FaUserCheck />
                    Mark as Pending
                  </button>
                  <button className="px-4 py-3 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center justify-center gap-2">
                    <FaUserCheck />
                    Ban User
                  </button>
                </div>

                <hr className="my-6" />

                <button
                  onClick={() => {
                    setShowPasswordModal(true);
                    setShowUserModal(false);
                  }}
                  className="w-full px-4 py-3 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors flex items-center justify-center gap-2"
                >
                  <FaKey />
                  Change Portal Password
                </button>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setShowUserModal(false)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Password Change Modal */}
        {showPasswordModal && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <FaKey className="text-amber-500 text-xl" />
                  <h2 className="text-xl font-bold text-gray-900">Change Portal Password</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Changing password for: <strong>{selectedUser.firstName} {selectedUser.lastName}</strong> ({selectedUser.email})
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Must be at least 8 characters with uppercase, lowercase, number, and special character.
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  Change Password
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && selectedUser && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <FaTrash className="text-red-500 text-xl" />
                  <h2 className="text-xl font-bold text-red-900">Confirm User Delete</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Enter the 6-digit OTP for this user deletion request.
                  <br />
                  <span className="text-sm text-gray-500">
                    (Email sending is disabled; OTP is saved in admin_delete_requests and also shown in the success banner when created.)
                  </span>
                </p>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Delete Permanently
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;

