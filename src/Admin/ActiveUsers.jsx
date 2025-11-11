import React, { useState, useEffect } from 'react';
import { FaUserCheck, FaSearch, FaFilter, FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaPhone, FaEnvelope, FaIdCard } from 'react-icons/fa';

const ActiveUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    country: '',
    fromDate: '',
    toDate: '',
    perPage: 25
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(113);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockUsers = [
      { id: 1, name: 'jagdish sonar', email: 'jagdishsonar020@gmail.com', country: 'India', phone: '7900003727', referral: 'OXO 7363', joined: '11 Nov 2025' },
      { id: 2, name: 'Rajesh Pawar', email: 'raju.21pawar@gmail.com', country: 'India', phone: '9885582723', referral: 'OXO 8090', joined: '11 Nov 2025' },
      { id: 3, name: 'Rushikesh kale', email: 'kale91150@gmail.com', country: 'India', phone: '9112628024', referral: 'OXO 5139', joined: '11 Nov 2025' },
      { id: 4, name: 'Vinod Kumar', email: 'vkvinodkumar760@gmail.com', country: 'india', phone: '+91 90583 67783', referral: 'OXO220565', joined: '10 Nov 2025' },
      { id: 5, name: 'shahbaz ilyas', email: 'shahbazilyas196@gmail.com', country: 'Pakistan', phone: '3204072575', referral: 'OXO 8307', joined: '10 Nov 2025' },
      { id: 6, name: 'Bhura Ram', email: 'bhuraram9754@gmail.com', country: 'India', phone: '3762422038', referral: 'OXO 9230', joined: '10 Nov 2025' },
      { id: 7, name: 'Vinod Kumar', email: 'insurancearadhanahyundai@gmail.com', country: 'india', phone: '+91 90583 67783', referral: 'OXO789795', joined: '09 Nov 2025' },
      { id: 8, name: 'sanjay Jadhav', email: 'sj0447439@gmail.com', country: 'India', phone: '9371310517', referral: 'OXO 5517', joined: '09 Nov 2025' },
      { id: 9, name: 'Sagar Shinde', email: 'nitin3105.shinde@gmail.com', country: 'India', phone: '9975818554', referral: 'OXO 2026', joined: '09 Nov 2025' },
      { id: 10, name: 'Sagar Shinde', email: 'ss12421243@gmail.com', country: 'India', phone: '9975818554', referral: 'OXO 7234', joined: '09 Nov 2025' },
      { id: 11, name: 'Swarup Kakade', email: 'swarupk298@gmail.com', country: 'India', phone: '9322432803', referral: 'OXO 1682', joined: '09 Nov 2025' },
      { id: 12, name: 'adnan raza', email: 'adnan24raza@gmail.com', country: 'Pakistan', phone: '03204408424', referral: 'OXO 9440', joined: '07 Nov 2025' },
      { id: 13, name: 'Tushar Warad', email: 'tusharimp13@gmail.com', country: 'India', phone: '9970433322', referral: 'OXO 6616', joined: '07 Nov 2025' },
      { id: 14, name: 'Akash Sonmale', email: 'akashsonmale2026@gmail.com', country: 'India', phone: '9763659257', referral: 'OXO 9342', joined: '07 Nov 2025' },
      { id: 15, name: 'Pramod Kirdat', email: 'kirdatpramod4@gmail.com', country: 'India', phone: '8421007092', referral: 'OXO 5595', joined: '07 Nov 2025' },
      { id: 16, name: 'Sandip Kenjale', email: 'sandipkenjale@gmail.com', country: 'India', phone: '9892160284', referral: 'OXO 8182', joined: '07 Nov 2025' },
      { id: 17, name: 'Ganesh Sutar', email: 'ganeshsutar2002@gmail.com', country: 'India', phone: '9175051059', referral: 'OXO 1761', joined: '07 Nov 2025' },
      { id: 18, name: 'sanjay Jadhav', email: 'jsanjay1070@gmail.com', country: 'India', phone: '9011222535', referral: 'OXO 8606', joined: '07 Nov 2025' },
      { id: 19, name: 'anku putt', email: 'parteekchawla69@gmail.com', country: 'India', phone: '7529860737', referral: 'OXO 8346', joined: '07 Nov 2025' },
      { id: 20, name: 'Sonali sutar', email: 'sgsservices2002@gmail.com', country: 'India', phone: '9049296262', referral: 'OXO 6116', joined: '07 Nov 2025' },
      { id: 21, name: 'Madhukar Dhonde', email: 'dhondemadhukar2999@gmail.com', country: 'India', phone: '9322522120', referral: 'OXO 4664', joined: '07 Nov 2025' },
      { id: 22, name: 'abc cde', email: 'thomasselve7@gmail.com', country: 'India', phone: '3197010539578', referral: 'OXO 9291', joined: '07 Nov 2025' },
      { id: 23, name: 'Candle  Story', email: 'ceo.candlestory@gmail.com', country: 'India', phone: '0000000000', referral: 'OXO924721', joined: '07 Nov 2025' },
      { id: 24, name: 'OXO Trading tw', email: 'trading123@gmail.com', country: 'India', phone: '9191919191', referral: 'OXO 2569', joined: '07 Nov 2025' },
      { id: 25, name: 'OXO SUB IB TWO', email: 'oxosubib2@gmail.com', country: 'India', phone: '9191919191', referral: 'OXO 8082', joined: '07 Nov 2025' }
    ];
    setUsers(mockUsers);
    setFilteredUsers(mockUsers);
  }, []);

  useEffect(() => {
    let filtered = users.filter(user => {
      const matchesSearch = searchTerm === '' ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.includes(searchTerm);

      const matchesCountry = filters.country === '' || user.country === filters.country;
      const matchesDateRange = (!filters.fromDate || new Date(user.joined) >= new Date(filters.fromDate)) &&
                              (!filters.toDate || new Date(user.joined) <= new Date(filters.toDate));

      return matchesSearch && matchesCountry && matchesDateRange;
    });

    setFilteredUsers(filtered);
    setTotalUsers(filtered.length);
    setCurrentPage(1);
  }, [users, searchTerm, filters]);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const countries = [...new Set(users.map(user => user.country))];

  const indexOfLastItem = currentPage * filters.perPage;
  const indexOfFirstItem = indexOfLastItem - filters.perPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / filters.perPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getCountryFlag = (country) => {
    const flags = {
      'India': '🇮🇳',
      'Pakistan': '🇵🇰',
      'Canada': '🇨🇦',
      'Indonesia': '🇮🇩',
      'uae': '🇦🇪',
      'United Arab Emirates': '🇦🇪',
      'United Kingdom': '🇬🇧',
      'Yemen': '🇾🇪'
    };
    return flags[country] || '🌍';
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-xl">
              <FaUserCheck className="text-white text-2xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Active Verified Users
              </h1>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Users whose <strong className="text-purple-600">email</strong> and <strong className="text-pink-600">KYC</strong> are verified and account status is <strong className="text-emerald-600">Active</strong>.
              </p>
              <div className="flex items-center gap-2 mt-2">
                <FaUsers className="text-purple-500" />
                <span className="text-lg font-semibold text-gray-700">Found <strong className="text-purple-600">{totalUsers}</strong> users</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaSearch className="text-purple-500" />
                Search
              </label>
              <input
                type="text"
                placeholder="name / email / phone"
                className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-purple-50/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-500" />
                Country
              </label>
              <select
                className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-purple-50/50"
                value={filters.country}
                onChange={(e) => handleFilterChange('country', e.target.value)}
              >
                <option value="">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>
                    {getCountryFlag(country)} {country}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-purple-500" />
                From Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-purple-50/50"
                value={filters.fromDate}
                onChange={(e) => handleFilterChange('fromDate', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <FaCalendarAlt className="text-purple-500" />
                To Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-purple-50/50"
                value={filters.toDate}
                onChange={(e) => handleFilterChange('toDate', e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-6 border-t border-purple-100">
            <div className="flex items-center gap-2">
              <FaFilter className="text-purple-500" />
              <span className="text-sm font-medium text-gray-600">Per Page:</span>
              <select
                className="px-3 py-1 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-purple-50/50"
                value={filters.perPage}
                onChange={(e) => handleFilterChange('perPage', e.target.value)}
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
              <FaSearch className="text-sm" />
              Apply Filters
            </button>
          </div>
        </div>

        {/* Table/Card View */}
        <div className="space-y-4">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Sr No.</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Name</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Email</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Country</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Phone</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Referral</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Joined</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100">
                    {currentItems.map((user, index) => (
                      <tr key={user.id} className="hover:bg-purple-50/30 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {(currentPage - 1) * filters.perPage + index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <FaEnvelope className="text-purple-400 text-xs" />
                            {user.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{getCountryFlag(user.country)}</span>
                            {user.country}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <FaPhone className="text-purple-400 text-xs" />
                            {user.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-purple-600 bg-purple-50 rounded-lg px-2 py-1">
                          {user.referral}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-purple-400 text-xs" />
                            {user.joined}
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
              <div key={user.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-6 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {(currentPage - 1) * filters.perPage + index + 1}
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
                    <div className="text-sm font-medium text-purple-600 bg-purple-50 rounded-lg px-3 py-1 mb-2">
                      {user.referral}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <FaCalendarAlt />
                      {user.joined}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-purple-50/50 rounded-xl">
                    <FaEnvelope className="text-purple-500 text-sm" />
                    <span className="text-sm text-gray-700 break-all">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-pink-50/50 rounded-xl">
                    <FaPhone className="text-pink-500 text-sm" />
                    <span className="text-sm text-gray-700">{user.phone}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-purple-100">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-medium text-emerald-600">Verified & Active</span>
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-purple-200 rounded-xl hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-purple-600 font-medium"
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
                      className={`px-4 py-2 border rounded-xl transition-colors font-medium ${
                        currentPage === pageNum
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-600'
                          : 'border-purple-200 hover:bg-purple-50 text-purple-600'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="px-2 text-purple-400">...</span>
                    <button
                      onClick={() => paginate(totalPages)}
                      className="px-4 py-2 border border-purple-200 rounded-xl hover:bg-purple-50 text-purple-600 font-medium transition-colors"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-purple-200 rounded-xl hover:bg-purple-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-purple-600 font-medium"
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

export default ActiveUsers;