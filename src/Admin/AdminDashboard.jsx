import React, { useState } from 'react';

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    type: 'all',
    status: 'all',
    from: '',
    to: '',
    q: ''
  });

  // Sample data - in real app this would come from API
  const activityData = [
    { time: '11 Nov 2025, 12:58 PM', type: 'Account', user: 'luckee8@gmail.com', name: 'Shoaib Qureshi', mt5: '369076', amount: '-', status: 'Opened', ref: '-' },
    { time: '11 Nov 2025, 09:06 AM', type: 'Account', user: 'raju.21pawar@gmail.com', name: 'Rajesh Pawar', mt5: '369075', amount: '-', status: 'Opened', ref: '-' },
    { time: '11 Nov 2025, 07:58 AM', type: 'Account', user: 'vrenterprisessatara@gmail.com', name: 'V R ENTERPRISE', mt5: '369074', amount: '-', status: 'Opened', ref: '-' },
    { time: '11 Nov 2025, 07:56 AM', type: 'Account', user: 'vrenterprisessatara@gmail.com', name: 'V R ENTERPRISE', mt5: '369073', amount: '-', status: 'Opened', ref: '-' },
    { time: '11 Nov 2025, 07:55 AM', type: 'Account', user: 'vrenterprisessatara@gmail.com', name: 'V R ENTERPRISE', mt5: '369072', amount: '-', status: 'Opened', ref: '-' },
    { time: '11 Nov 2025, 07:53 AM', type: 'Account', user: 'vrenterprisessatara@gmail.com', name: 'V R ENTERPRISE', mt5: '369071', amount: '-', status: 'Opened', ref: '-' },
    { time: '11 Nov 2025, 07:51 AM', type: 'Withdrawal', user: 'vkvinodkumar760@gmail.com', name: 'Vinod Kumar', mt5: '369070', amount: '$110.00', status: 'pending', ref: '-' },
    { time: '11 Nov 2025, 07:15 AM', type: 'Deposit', user: 'raju.21pawar@gmail.com', name: 'Rajesh Pawar', mt5: '369075', amount: '$45.00', status: 'Approved', ref: '-' },
    // Add more data as needed
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(activityData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = activityData.slice(startIndex, endIndex);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-violet-100 text-gray-900 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold flex items-center">
            <svg className="w-8 h-8 mr-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Dashboard
          </h1>
          <p className="text-gray-600 mt-1">Realtime overview</p>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Users */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold">113</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">Active: 113 (100%)</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{width: '100%'}}></div>
          </div>
          <a href="#" className="text-blue-400 text-sm mt-3 inline-block hover:text-blue-300">View Details</a>
        </div>

        {/* Email Unverified */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email Unverified</p>
              <p className="text-2xl font-bold">26</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">Of total users (23%)</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full" style={{width: '23%'}}></div>
          </div>
          <a href="#" className="text-blue-400 text-sm mt-3 inline-block hover:text-blue-300">Resolve</a>
        </div>

        {/* KYC Pending */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">KYC Pending</p>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">Pending vs users (1%)</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full" style={{width: '1%'}}></div>
          </div>
          <a href="#" className="text-blue-400 text-sm mt-3 inline-block hover:text-blue-300">Review KYC</a>
        </div>

        {/* MT5 Accounts */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total MT5 Accounts</p>
              <p className="text-2xl font-bold">97</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">Accounts per user: 0.86</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{width: '86%'}}></div>
          </div>
          <a href="#" className="text-blue-400 text-sm mt-3 inline-block hover:text-blue-300">View MT5</a>
        </div>
      </div>

      {/* Money KPI Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Deposits */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
            </svg>
            Deposits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold">$27,812.56 USD</p>
                <p className="text-sm text-gray-600">Total Deposited</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold">0</p>
                <p className="text-sm text-gray-600">Pending Deposits</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold">8</p>
                <p className="text-sm text-gray-600">Rejected Deposits</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm mb-1">
              <span>MTD</span>
              <span className="font-semibold">$25,211.79 USD</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Today</span>
              <span>$45.00 (vs 7-day avg $4,430.30)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '1%'}}></div>
            </div>
          </div>
        </div>

        {/* Withdrawals */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
            </svg>
            Withdrawals
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold">$1,775.22 USD</p>
                <p className="text-sm text-gray-600">Total Withdrawn</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold">1</p>
                <p className="text-sm text-gray-600">Pending Withdrawals</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold">3</p>
                <p className="text-sm text-gray-600">Rejected Withdrawals</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm mb-1">
              <span>MTD</span>
              <span className="font-semibold">$810.00 USD</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Today</span>
              <span>$110.00 (vs 7-day avg $350.00)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{width: '31%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Deposits */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
            </svg>
            Recent Deposits
          </h4>
          <div className="space-y-4">
            {[
              { email: 'raju.21pawar@gmail.com', time: '11 Nov, 07:15 AM', mt5: '369075', amount: '$45.00', status: 'Approved' },
              { email: 'vkvinodkumar760@gmail.com', time: '10 Nov, 12:57 PM', mt5: '369070', amount: '$393.57', status: 'Approved', txn: 'ADMIN_1762779474' },
              { email: 'umbarkaramit90@gmail.com', time: '10 Nov, 10:12 AM', mt5: '369067', amount: '$53.19', status: 'Approved', txn: '825711636746' },
              { email: 'rajpisal07@gmail.com', time: '10 Nov, 07:40 AM', mt5: '369042', amount: '$10.64', status: 'Approved', txn: '788834984999' },
              { email: 'sj0447439@gmail.com', time: '10 Nov, 06:35 AM', mt5: '369060', amount: '$159.57', status: 'Approved', txn: '568089467191' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-semibold text-sm break-all">{item.email}</p>
                  <p className="text-xs text-gray-600">{item.time} • MT5: {item.mt5}</p>
                  {item.txn && <p className="text-xs text-gray-500 break-all">Txn: {item.txn}</p>}
                </div>
                <div className="text-right ml-2">
                  <p className="font-bold text-sm">{item.amount}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded ${item.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xs text-gray-600">Showing last 5 results</span>
            <a href="#" className="text-xs text-blue-400 hover:text-blue-300">View all</a>
          </div>
        </div>

        {/* Recent Withdrawals */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 7.293l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 10.586V7a1 1 0 012 0v3.586l1.293-1.293a1 1 0 011.414 1.414z" clipRule="evenodd"/>
            </svg>
            Recent Withdrawals
          </h4>
          <div className="space-y-4">
            {[
              { email: 'vkvinodkumar760@gmail.com', time: '11 Nov, 07:51 AM', mt5: '369070', amount: '$110.00', status: 'pending' },
              { email: 'kolipl28@gmail.com', time: '10 Nov, 02:13 PM', mt5: '369026', amount: '$100.00', status: 'approved' },
              { email: 'kirdatpramod4@gmail.com', time: '10 Nov, 01:42 AM', mt5: '369035', amount: '$400.00', status: 'approved' },
              { email: 'kirdatpramod4@gmail.com', time: '07 Nov, 05:01 PM', mt5: '369035', amount: '$200.00', status: 'approved' },
              { email: '', time: '27 Oct, 01:48 PM', mt5: '7100016976', amount: '$74.22', status: 'approved' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-semibold text-sm break-all">{item.email || 'N/A'}</p>
                  <p className="text-xs text-gray-600">{item.time} • MT5: {item.mt5}</p>
                </div>
                <div className="text-right ml-2">
                  <p className="font-bold text-sm">{item.amount}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded ${item.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xs text-gray-600">Showing last 5 results</span>
            <a href="#" className="text-xs text-blue-400 hover:text-blue-300">View all</a>
          </div>
        </div>

        {/* Recent Accounts Opened */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-bold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
            </svg>
            Recent Accounts Opened
          </h4>
          <div className="space-y-4">
            {[
              { email: 'luckee8@gmail.com', time: '11 Nov, 12:58 PM', mt5: '369076' },
              { email: 'raju.21pawar@gmail.com', time: '11 Nov, 09:06 AM', mt5: '369075' },
              { email: 'vrenterprisessatara@gmail.com', time: '11 Nov, 07:58 AM', mt5: '369074' },
              { email: 'vrenterprisessatara@gmail.com', time: '11 Nov, 07:56 AM', mt5: '369073' },
              { email: 'vrenterprisessatara@gmail.com', time: '11 Nov, 07:55 AM', mt5: '369072' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-semibold text-sm break-all">{item.email}</p>
                  <p className="text-xs text-gray-600">{item.time}</p>
                </div>
                <div className="text-right ml-2">
                  <p className="text-xs text-gray-600">MT5</p>
                  <p className="font-semibold text-sm">{item.mt5}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xs text-gray-600">Showing last 5 results</span>
            <a href="#" className="text-xs text-blue-400 hover:text-blue-300">View all</a>
          </div>
        </div>
      </div>

      {/* Activity Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h3 className="text-xl font-bold">All Activity</h3>
            <form className="flex flex-wrap items-end gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Type</label>
                <select name="type" value={filters.type} onChange={handleFilterChange} className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm">
                  <option value="all">All</option>
                  <option value="deposit">Deposits</option>
                  <option value="withdrawal">Withdrawals</option>
                  <option value="account">Accounts</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Status</label>
                <select name="status" value={filters.status} onChange={handleFilterChange} className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm">
                  <option value="all">All</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">From</label>
                <input type="date" name="from" value={filters.from} onChange={handleFilterChange} className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">To</label>
                <input type="date" name="to" value={filters.to} onChange={handleFilterChange} className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Search</label>
                <input type="text" name="q" value={filters.q} onChange={handleFilterChange} placeholder="email / mt5 / txn" className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm" />
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium">
                <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                </svg>
                Filter
              </button>
            </form>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">MT5</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-700 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Ref</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{item.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{item.type}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium break-all">{item.user}</div>
                    <div className="text-sm text-gray-600">{item.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{item.mt5}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      item.status.toLowerCase() === 'approved' ? 'bg-green-100 text-green-700' :
                      item.status.toLowerCase() === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      item.status.toLowerCase() === 'rejected' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm break-all">{item.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, activityData.length)} of {activityData.length} transactions
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 text-sm rounded ${
                  page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;









