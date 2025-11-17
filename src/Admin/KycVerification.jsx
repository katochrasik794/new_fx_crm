import React, { useState, useEffect } from 'react';
import { FaIdBadge, FaSearch, FaEye, FaCheckCircle, FaTimesCircle, FaClock, FaFileAlt, FaUser, FaEnvelope, FaCalendarAlt, FaFilter } from 'react-icons/fa';

const KycVerification = () => {
  const [kycSubmissions, setKycSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Mock data - replace with actual API call
  useEffect(() => {
    const mockData = [
      {
        id: 25,
        fullName: 'Prasad Nanekar',
        email: 'prasadnanekar358@gmail.com',
        documentType: 'Driving License',
        status: 'Approved',
        submittedAt: '11 Nov 2025, 04:07 PM',
        documents: {
          front: '../uploads/kyc/front_691311eaee5db_17628573812964501647149962147230.jpg',
          back: '../uploads/kyc/back_691311eaee5de_17628574021838298227329581579067.jpg'
        }
      },
      {
        id: 24,
        fullName: 'jagdish sonar',
        email: 'jagdishsonar020@gmail.com',
        documentType: 'National ID',
        status: 'Approved',
        submittedAt: '11 Nov 2025, 03:35 PM',
        documents: {
          front: '../uploads/kyc/front_69130a7f132cd_IMG-20251005-WA0013.jpg',
          back: '../uploads/kyc/back_69130a7f132d0_IMG-20251005-WA0014.jpg'
        }
      },
      {
        id: 23,
        fullName: 'Shoaib Qureshi',
        email: 'luckee8@gmail.com',
        documentType: 'National ID',
        status: 'Approved',
        submittedAt: '11 Nov 2025, 12:52 PM',
        documents: {
          front: '../uploads/kyc/front_6912e41fc0ad9_17628456309424183906685021081139.jpg',
          back: '../uploads/kyc/back_6912e41fc0adb_17628456596713767835869412255548.jpg'
        }
      },
      {
        id: 22,
        fullName: 'V R ENTERPRISE',
        email: 'vrenterprisessatara@gmail.com',
        documentType: 'National ID',
        status: 'Pending',
        submittedAt: '11 Nov 2025, 07:49 AM',
        documents: {
          front: '../uploads/kyc/front_69129d2ca1eda_IMG_20250616_160338.jpg',
          back: '../uploads/kyc/back_69129d2ca1edc_IMG_20250616_160317.jpg'
        }
      },
      {
        id: 21,
        fullName: 'Vinod Kumar',
        email: 'vkvinodkumar760@gmail.com',
        documentType: 'National ID',
        status: 'Approved',
        submittedAt: '11 Nov 2025, 05:58 AM',
        documents: {
          front: '../uploads/kyc/front_6912833829ef4_IMG_20250829_103133.jpg',
          back: '../uploads/kyc/back_6912833829ef7_TimePhoto_20230826_173254~2.jpg'
        }
      }
    ];
    setKycSubmissions(mockData);
    setFilteredSubmissions(mockData);
  }, []);

  useEffect(() => {
    let filtered = kycSubmissions;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(submission =>
        submission.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(submission => submission.status.toLowerCase() === statusFilter);
    }

    setFilteredSubmissions(filtered);
    setCurrentPage(1);
  }, [kycSubmissions, searchTerm, statusFilter]);

  const handleViewDetails = (submission) => {
    setSelectedSubmission(submission);
  };

  const handleApprove = (id) => {
    // Mock approve functionality
    console.log(`Approving KYC ${id}`);
    setSelectedSubmission(null);
  };

  const handleReject = (id, reason) => {
    // Mock reject functionality
    console.log(`Rejecting KYC ${id} with reason: ${reason}`);
    setSelectedSubmission(null);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Approved': { color: 'bg-emerald-100 text-emerald-800 border-emerald-200', icon: FaCheckCircle },
      'Rejected': { color: 'bg-red-100 text-red-800 border-red-200', icon: FaTimesCircle },
      'Pending': { color: 'bg-amber-100 text-amber-800 border-amber-200', icon: FaClock }
    };

    const config = statusConfig[status] || statusConfig['Pending'];
    const IconComponent = config.icon;

    return (
      <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${config.color} flex items-center gap-1`}>
        <IconComponent className="text-xs" />
        {status}
      </span>
    );
  };

  const getDocumentTypeIcon = (type) => {
    return type === 'Driving License' ? <FaFileAlt className="text-blue-500" /> : <FaIdBadge className="text-purple-500" />;
  };

  const totalSubmissions = filteredSubmissions.length;
  const pendingSubmissions = filteredSubmissions.filter(s => s.status === 'Pending').length;
  const approvedSubmissions = filteredSubmissions.filter(s => s.status === 'Approved').length;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSubmissions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-violet-100 p-2 md:p-6">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-xl border-2 border-cyan-400">
              <FaIdBadge className="text-white text-2xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                KYC Verification
              </h1>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                Review and manage all submitted KYC documents for verification.
              </p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-cyan-500/30 p-6 hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-100 rounded-xl">
                <FaIdBadge className="text-cyan-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Submissions</p>
                <p className="text-2xl font-bold text-gray-900">{totalSubmissions}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-500/30 p-6 hover:shadow-amber-500/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 rounded-xl">
                <FaClock className="text-amber-600 text-xl" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Review</p>
                <p className="text-2xl font-bold text-gray-900">{pendingSubmissions}</p>
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
                <p className="text-2xl font-bold text-gray-900">{approvedSubmissions}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-500/30 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FaSearch className="text-cyan-500" />
                Search by Name or Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Start typing..."
                  className="w-full px-4 py-3 pl-12 bg-cyan-50/50 border-2 border-cyan-500/30 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 text-gray-900 placeholder-cyan-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-500" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <FaFilter className="text-blue-500" />
                Filter by Status
              </label>
              <select
                className="w-full px-4 py-3 bg-blue-50/50 border-2 border-blue-500/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table/Card View */}
        <div className="space-y-4">
          {/* Desktop Table View */}
          <div className="hidden lg:block">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-500/30 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                    <tr>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">#</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Full Name</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Email</th>
                      <th className="px-6 py-4 text-center text-white font-semibold text-sm">Document Type</th>
                      <th className="px-6 py-4 text-center text-white font-semibold text-sm">Status</th>
                      <th className="px-6 py-4 text-left text-white font-semibold text-sm">Submitted</th>
                      <th className="px-6 py-4 text-center text-white font-semibold text-sm">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cyan-100">
                    {currentItems.map((submission, index) => (
                      <tr key={submission.id} className="hover:bg-cyan-50/30 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                          {submission.fullName}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {submission.email}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            {getDocumentTypeIcon(submission.documentType)}
                            <span className="text-sm font-medium text-gray-900">{submission.documentType}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {getStatusBadge(submission.status)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          {submission.submittedAt}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => handleViewDetails(submission)}
                            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
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
            {currentItems.map((submission, index) => (
              <div key={submission.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-cyan-500/30 p-6 hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-cyan-400">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{submission.fullName}</h3>
                      <p className="text-sm text-gray-600 break-all">{submission.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(submission.status)}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-cyan-50/50 rounded-xl border border-cyan-500/20">
                    <div className="text-xs text-gray-600 mb-1">Document Type</div>
                    <div className="flex items-center gap-2">
                      {getDocumentTypeIcon(submission.documentType)}
                      <span className="text-sm font-bold text-gray-900">{submission.documentType}</span>
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-500/20">
                    <div className="text-xs text-gray-600 mb-1">Submitted</div>
                    <div className="text-sm font-bold text-gray-900">{submission.submittedAt}</div>
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-cyan-100">
                  <button
                    onClick={() => handleViewDetails(submission)}
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 text-sm font-medium"
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
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-cyan-500/30 p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border-2 border-cyan-500/30 rounded-xl hover:bg-cyan-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-cyan-600 font-medium"
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
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-600'
                          : 'border-cyan-500/30 hover:bg-cyan-900/50 text-cyan-600'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <>
                    <span className="px-2 text-cyan-400">...</span>
                    <button
                      onClick={() => paginate(totalPages)}
                      className="px-4 py-2 border-2 border-cyan-500/30 rounded-xl hover:bg-cyan-900/50 text-cyan-600 font-medium transition-colors"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border-2 border-cyan-500/30 rounded-xl hover:bg-cyan-900/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-cyan-600 font-medium"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

        {/* KYC Details Modal */}
        {selectedSubmission && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl border border-cyan-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
                      {getDocumentTypeIcon(selectedSubmission.documentType)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">KYC Document Review</h3>
                      <p className="text-sm text-gray-600">Review submitted documents for verification</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSubmission(null)}
                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <FaTimesCircle className="text-gray-400 text-xl" />
                  </button>
                </div>

                <div className="space-y-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-cyan-50/50 rounded-xl border border-cyan-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <FaUser className="text-cyan-500" />
                        <span className="text-sm font-medium text-gray-700">Full Name</span>
                      </div>
                      <p className="font-semibold text-gray-900">{selectedSubmission.fullName}</p>
                    </div>
                    <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <FaEnvelope className="text-blue-500" />
                        <span className="text-sm font-medium text-gray-700">Email</span>
                      </div>
                      <p className="font-semibold text-gray-900 break-all">{selectedSubmission.email}</p>
                    </div>
                    <div className="p-4 bg-green-50/50 rounded-xl border border-green-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <FaCalendarAlt className="text-green-500" />
                        <span className="text-sm font-medium text-gray-700">Submitted At</span>
                      </div>
                      <p className="font-semibold text-gray-900">{selectedSubmission.submittedAt}</p>
                    </div>
                    <div className="p-4 bg-purple-50/50 rounded-xl border border-purple-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        {getDocumentTypeIcon(selectedSubmission.documentType)}
                        <span className="text-sm font-medium text-gray-700">Document Type</span>
                      </div>
                      <p className="font-semibold text-gray-900">{selectedSubmission.documentType}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                      <FaFileAlt className="text-cyan-500" />
                      Document Images
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Front Side:</p>
                        <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                          <img
                            src={selectedSubmission.documents.front}
                            alt="Front document"
                            className="w-full h-48 object-contain"
                            onError={(e) => {
                              e.target.src = '/placeholder-document.png';
                            }}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-700">Back Side:</p>
                        <div className="border-2 border-gray-200 rounded-xl overflow-hidden bg-gray-50">
                          <img
                            src={selectedSubmission.documents.back}
                            alt="Back document"
                            className="w-full h-48 object-contain"
                            onError={(e) => {
                              e.target.src = '/placeholder-document.png';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedSubmission.status === 'Pending' && (
                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                    <button
                      onClick={() => handleApprove(selectedSubmission.id)}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-medium"
                    >
                      <FaCheckCircle className="text-sm" />
                      Approve KYC
                    </button>
                    <button
                      onClick={() => handleReject(selectedSubmission.id, 'Documents rejected')}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-medium"
                    >
                      <FaTimesCircle className="text-sm" />
                      Reject KYC
                    </button>
                  </div>
                )}

                {selectedSubmission.status !== 'Pending' && (
                  <div className="pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-600">This KYC submission has already been {selectedSubmission.status.toLowerCase()}.</p>
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

export default KycVerification;