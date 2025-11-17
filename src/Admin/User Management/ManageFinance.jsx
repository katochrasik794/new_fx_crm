import React, { useState, useEffect } from 'react';
import { FaWallet, FaCheckCircle, FaTimesCircle, FaEye, FaSearch, FaCreditCard, FaCoins, FaClock, FaUser, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

const PaymentDetailsReview = () => {
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockPayments = [
      {
        id: 20,
        user: 'Prasad Nanekar',
        email: 'prasadnanekar358@gmail.com',
        type: 'Bank',
        status: 'Pending',
        submittedAt: '11 Nov 2025, 03:58 PM',
        details: {
          accountName: 'Prasad Nanekar',
          accountNo: '60321829118',
          ifsc: 'MAHB0001715',
          bank: 'Bank of Maharashtra',
          address: 'Malthan',
          country: 'India'
        }
      },
      {
        id: 19,
        user: 'V R ENTERPRISE',
        email: 'vrenterprisessatara@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '11 Nov 2025, 07:29 AM',
        details: {
          accountName: 'V R ENTERPRISE',
          accountNo: '50200093253563',
          ifsc: 'HDFC0000790',
          bank: 'HDFC BANK',
          address: 'SATARA',
          country: 'India'
        }
      },
      {
        id: 18,
        user: 'Vinod Kumar',
        email: 'vkvinodkumar760@gmail.com',
        type: 'Crypto',
        status: 'Approved',
        submittedAt: '10 Nov 2025, 08:38 PM',
        details: {
          currency: 'USDT',
          walletName: 'TRC-20',
          address: 'TLMfj2iwmn3LcddvaApDNxmwTtjLW3C4mU'
        }
      },
      {
        id: 17,
        user: 'PRAVIN KOLI',
        email: 'kolipl28@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '10 Nov 2025, 07:42 PM',
        details: {
          accountName: 'PRAVIN KOLI',
          accountNo: '31663339426',
          ifsc: 'SBIN0013262',
          bank: 'state bank of india',
          address: 'mhaswad,tel.man,dist.satara,415509',
          country: 'India'
        }
      },
      {
        id: 16,
        user: 'Sandip Kenjale',
        email: 'sandipkenjale@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '09 Nov 2025, 08:53 PM',
        details: {
          accountName: 'Sandip Kenjale',
          accountNo: '04415408',
          ifsc: 'KKBK0002038',
          bank: 'Kotak Mahindra bank',
          address: 'Sataea',
          country: 'India'
        }
      },
      {
        id: 15,
        user: 'Raj Pisal',
        email: 'rajpisal07@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '08 Nov 2025, 01:41 PM',
        details: {
          accountName: 'Raj Pisal',
          accountNo: '50100199102393',
          ifsc: 'HDFC0004487',
          bank: 'HDFC',
          address: 'Bhandarkar road Pune',
          country: 'India'
        }
      },
      {
        id: 14,
        user: 'Sonali sutar',
        email: 'sgsservices2002@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '07 Nov 2025, 11:44 PM',
        details: {
          accountName: 'Sonali sutar',
          accountNo: '7712346426',
          ifsc: 'KKBK0002038',
          bank: 'Kotak Bank',
          address: 'Satara',
          country: 'India'
        }
      },
      {
        id: 13,
        user: 'Ganesh Sutar',
        email: 'ganeshsutar2002@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '07 Nov 2025, 11:38 PM',
        details: {
          accountName: 'Ganesh Sutar',
          accountNo: '8012359482',
          ifsc: 'KKBK0002038',
          bank: 'Kotak Bank',
          address: 'Satara',
          country: 'India'
        }
      },
      {
        id: 12,
        user: 'sanjay Jadhav',
        email: 'jsanjay1070@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '07 Nov 2025, 07:48 PM',
        details: {
          accountName: 'sanjay Jadhav',
          accountNo: '0370010000456',
          ifsc: 'CSBK0000370',
          bank: 'CSB Bank',
          address: 'Satara',
          country: 'India'
        }
      },
      {
        id: 11,
        user: 'Pramod Kirdat',
        email: 'kirdatpramod4@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '07 Nov 2025, 07:17 PM',
        details: {
          accountName: 'Pramod Kirdat',
          accountNo: '382203100000966',
          ifsc: 'SRCB0000382',
          bank: 'Saraswat bank',
          address: 'Satara',
          country: 'India'
        }
      },
      {
        id: 10,
        user: 'Anil Patil',
        email: 'anillg123@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '05 Nov 2025, 06:04 PM',
        details: {
          accountName: 'Anil Patil',
          accountNo: '60525254623',
          ifsc: 'MAHB0001130',
          bank: 'Bank of Maharashtra',
          address: '',
          country: 'India'
        }
      },
      {
        id: 9,
        user: 'PRAVIN KOLI',
        email: 'kolipl28@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '05 Nov 2025, 03:53 PM',
        details: {
          accountName: 'PRAVIN KOLI',
          accountNo: '31663339426',
          ifsc: 'SBIN0013262',
          bank: 'state bank of india',
          address: 'mhaswad,tel.man,dist.satara,415509',
          country: 'India'
        }
      },
      {
        id: 8,
        user: 'Anil Gaikwad',
        email: 'anilgaikwad9748ib@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '03 Nov 2025, 05:51 PM',
        details: {
          accountName: 'Anil Gaikwad',
          accountNo: '071318210000350',
          ifsc: 'BKID0000713',
          bank: 'Bank of india',
          address: 'Piliv Tal: Malshiras Dist : Sholapur',
          country: 'India'
        }
      },
      {
        id: 6,
        user: 'Rajan Agalave',
        email: 'panshoindia@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '28 Oct 2025, 12:20 AM',
        details: {
          accountName: 'Rajan Agalave',
          accountNo: '300003000054530',
          ifsc: 'SVCB0000089',
          bank: 'Shamrao vitthal Co op bank',
          address: 'Worli, mumbai',
          country: 'India'
        }
      },
      {
        id: 5,
        user: 'Pratik Babar',
        email: 'pratikbabar726@gmail.com',
        type: 'Bank',
        status: 'Approved',
        submittedAt: '21 Oct 2025, 12:44 PM',
        details: {
          accountName: 'Pratik Babar',
          accountNo: '074918210013564',
          ifsc: 'BKID0000749',
          bank: 'Bank Of India',
          address: 'Sangola Vadegao naka Sangola Tal-Sangola Dist- Solapur 413308',
          country: 'India'
        }
      },
      {
        id: 4,
        user: 'Aliza Fatma',
        email: 'alizafatma5110@gmail.com',
        type: 'Crypto',
        status: 'Approved',
        submittedAt: '17 Oct 2025, 06:22 PM',
        details: {
          currency: 'USDT',
          walletName: 'TRC-20',
          address: 'TFJKBqr4ZDajDKgFWXW1YKPhfhri2AEZjE'
        }
      }
    ];
    setPayments(mockPayments);
    setFilteredPayments(mockPayments);
  }, []);

  useEffect(() => {
    const filtered = payments.filter(payment =>
      searchTerm === '' ||
      payment.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPayments(filtered);
    setCurrentPage(1);
  }, [payments, searchTerm]);

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
  };

  const handleApprove = (paymentId) => {
    // Mock approve functionality
    console.log(`Approving payment ${paymentId}`);
    setSelectedPayment(null);
  };

  const handleReject = (paymentId, reason) => {
    // Mock reject functionality
    console.log(`Rejecting payment ${paymentId} with reason: ${reason}`);
    setSelectedPayment(null);
  };

  const getStatusBadge = (status) => {
    if (status === 'Approved') {
      return (
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 border-2 border-emerald-200">
          <FaCheckCircle className="inline mr-1" />
          Approved
        </span>
      );
    } else if (status === 'Rejected') {
      return (
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-red-100 text-red-800 border-2 border-red-200">
          <FaTimesCircle className="inline mr-1" />
          Rejected
        </span>
      );
    } else {
      return (
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-yellow-100 text-yellow-800 border-2 border-yellow-200">
          <FaClock className="inline mr-1" />
          Pending
        </span>
      );
    }
  };

  const getTypeIcon = (type) => {
    return type === 'Bank' ? <FaCreditCard className="text-purple-500" /> : <FaCoins className="text-orange-500" />;
  };

  const getTypeBadge = (type) => {
    if (type === 'Bank') {
      return (
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 border border-purple-200">
          <FaCreditCard className="inline mr-1" />
          Bank
        </span>
      );
    } else {
      return (
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800 border border-orange-200">
          <FaCoins className="inline mr-1" />
          Crypto
        </span>
      );
    }
  };

  const totalPayments = filteredPayments.length;
  const pendingPayments = filteredPayments.filter(p => p.status === 'Pending').length;
  const approvedPayments = filteredPayments.filter(p => p.status === 'Approved').length;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPayments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-violet-100 p-2 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-xl border-2 border-purple-400">
              <FaWallet className="text-white text-2xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Payment Details Review
              </h1>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                Approve or reject submitted bank and crypto payment details.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-500/30 p-6 hover:shadow-purple-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <FaWallet className="text-purple-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Payments</p>
                <p className="text-2xl font-bold text-gray-900">{totalPayments}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-500/30 p-6 hover:shadow-yellow-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-xl">
                <FaClock className="text-yellow-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-gray-900">{pendingPayments}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-500/30 p-6 hover:shadow-emerald-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <FaCheckCircle className="text-emerald-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-gray-900">{approvedPayments}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-purple-500/30 p-6 mb-8">
          <div className="max-w-md">
            <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <FaSearch className="text-purple-500" />
              Search by User Name or Email
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Start typing..."
                className="w-full px-4 py-3 pl-12 bg-purple-50/50 border-2 border-purple-500/30 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-900 placeholder-purple-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Table/Card View */}
        <div className="space-y-4">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-purple-500/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">#</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">User</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Email</th>
                      <th className="px-6 py-4 text-center text-white font-semibold text-sm">Type</th>
                      <th className="px-6 py-4 text-center text-white font-semibold text-sm">Status</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Submitted At</th>
                      <th className="px-6 py-4 text-center text-white font-semibold text-sm">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100">
                    {currentItems.map((payment, index) => (
                      <tr key={payment.id} className="hover:bg-purple-50/30 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {payment.user}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {payment.email}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {getTypeBadge(payment.type)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {getStatusBadge(payment.status)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {payment.submittedAt}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => handleViewDetails(payment)}
                            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
                          >
                            <FaEye className="text-xs" />
                            View
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
            {currentItems.map((payment, index) => (
              <div key={payment.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/30 p-6 hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-purple-400">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{payment.user}</h3>
                      <p className="text-sm text-gray-600 break-all">{payment.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(payment.status)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-purple-50/50 rounded-xl border border-purple-500/20">
                    <div className="text-xs text-gray-600 mb-1">Payment Type</div>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(payment.type)}
                      <span className="text-sm font-bold text-gray-900">{payment.type}</span>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-500/20">
                    <div className="text-xs text-gray-600 mb-1">Submitted</div>
                    <div className="text-sm font-bold text-gray-900">{payment.submittedAt}</div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-purple-100">
                  <button
                    onClick={() => handleViewDetails(payment)}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
                  >
                    <FaEye className="text-xs" />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/30 p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border-2 border-purple-500/30 rounded-xl hover:bg-purple-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-purple-600 font-medium"
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
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-600'
                          : 'border-purple-500/30 hover:bg-purple-900/50 text-purple-600'
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
                      className="px-4 py-2 border-2 border-purple-500/30 rounded-xl hover:bg-purple-900/50 text-purple-600 font-medium transition-colors"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border-2 border-purple-500/30 rounded-xl hover:bg-purple-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-purple-600 font-medium"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Payment Details Modal */}
        {selectedPayment && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl border border-purple-500/30 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                      {getTypeIcon(selectedPayment.type)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Payment Details</h3>
                      <p className="text-sm text-gray-600">Review and approve payment information</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPayment(null)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <FaTimesCircle className="text-gray-400 text-xl" />
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-purple-50/50 rounded-xl border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <FaUser className="text-purple-500" />
                        <span className="text-sm font-medium text-gray-700">User</span>
                      </div>
                      <p className="font-semibold text-gray-900">{selectedPayment.user}</p>
                    </div>
                    <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <FaEnvelope className="text-blue-500" />
                        <span className="text-sm font-medium text-gray-700">Email</span>
                      </div>
                      <p className="font-semibold text-gray-900 break-all">{selectedPayment.email}</p>
                    </div>
                    <div className="p-4 bg-green-50/50 rounded-xl border border-green-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <FaCalendarAlt className="text-green-500" />
                        <span className="text-sm font-medium text-gray-700">Submitted At</span>
                      </div>
                      <p className="font-semibold text-gray-900">{selectedPayment.submittedAt}</p>
                    </div>
                    <div className="p-4 bg-orange-50/50 rounded-xl border border-orange-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        {getTypeIcon(selectedPayment.type)}
                        <span className="text-sm font-medium text-gray-700">Type</span>
                      </div>
                      <p className="font-semibold text-gray-900">{selectedPayment.type}</p>
                    </div>
                  </div>

                  {selectedPayment.type === 'Bank' ? (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                        <FaCreditCard className="text-purple-500" />
                        Bank Account Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <span className="text-xs text-gray-600">Account Name</span>
                          <p className="font-medium text-gray-900">{selectedPayment.details.accountName}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <span className="text-xs text-gray-600">Account Number</span>
                          <p className="font-medium text-gray-900 font-mono">{selectedPayment.details.accountNo}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <span className="text-xs text-gray-600">IFSC Code</span>
                          <p className="font-medium text-gray-900 font-mono">{selectedPayment.details.ifsc}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <span className="text-xs text-gray-600">Bank Name</span>
                          <p className="font-medium text-gray-900">{selectedPayment.details.bank}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg md:col-span-2">
                          <span className="text-xs text-gray-600">Address</span>
                          <p className="font-medium text-gray-900">{selectedPayment.details.address || 'N/A'}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <span className="text-xs text-gray-600">Country</span>
                          <p className="font-medium text-gray-900">{selectedPayment.details.country}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                        <FaCoins className="text-orange-500" />
                        Crypto Wallet Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <span className="text-xs text-gray-600">Currency</span>
                          <p className="font-medium text-gray-900">{selectedPayment.details.currency}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <span className="text-xs text-gray-600">Wallet Type</span>
                          <p className="font-medium text-gray-900">{selectedPayment.details.walletName}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg md:col-span-2">
                          <span className="text-xs text-gray-600">Wallet Address</span>
                          <p className="font-medium text-gray-900 font-mono break-all">{selectedPayment.details.address}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {selectedPayment.status === 'Pending' && (
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => handleApprove(selectedPayment.id)}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-medium"
                    >
                      <FaCheckCircle className="text-sm" />
                      Approve Payment
                    </button>
                    <button
                      onClick={() => handleReject(selectedPayment.id, 'Payment details rejected')}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-medium"
                    >
                      <FaTimesCircle className="text-sm" />
                      Reject Payment
                    </button>
                  </div>
                )}

                {selectedPayment.status !== 'Pending' && (
                  <div className="pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-600">This payment has already been {selectedPayment.status.toLowerCase()}.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentDetailsReview;