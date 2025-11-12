import React, { useState } from 'react';

const ManualGateways = () => {
  const [formData, setFormData] = useState({
    gatewayId: '',
    oldIcon: '',
    oldQrImage: '',
    type: '',
    name: '',
    icon: null,
    qrImage: null,
    address: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountType: '',
    contactNumber: ''
  });

  const gateways = [
    {
      id: 3,
      type: 'upi',
      name: 'UPI PAYMENT',
      icon: '',
      qrImage: '1761040685_f1821453-de9d-464d-8239-2e3bb90d20ba.jpeg',
      address: 'RAM ENTERPRISE',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      accountType: '',
      contactNumber: '',
      createdAt: '2025-10-21 15:26:07'
    },
    {
      id: 2,
      type: 'crypto',
      name: 'USDT TRC20',
      icon: '',
      qrImage: '1761040436_db6cca84-7a11-4519-b032-93de1824ec18.jpeg',
      address: 'TM7H2dPMJQBmLXGAZjiybdF3NYSYfe962N',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      accountType: '',
      contactNumber: '',
      createdAt: '2025-10-15 14:50:15'
    }
  ];

  const [editingGateway, setEditingGateway] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      type,
      // Reset conditional fields when type changes
      address: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      accountType: '',
      contactNumber: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API
  };

  const handleEdit = (gateway) => {
    setEditingGateway(gateway);
    setFormData({
      gatewayId: gateway.id,
      oldIcon: gateway.icon,
      oldQrImage: gateway.qrImage,
      type: gateway.type,
      name: gateway.name,
      icon: null,
      qrImage: null,
      address: gateway.address,
      bankName: gateway.bankName,
      accountNumber: gateway.accountNumber,
      ifscCode: gateway.ifscCode,
      accountType: gateway.accountType,
      contactNumber: gateway.contactNumber
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this gateway?')) {
      // Handle delete
      console.log('Delete gateway:', id);
    }
  };

  const handleReset = () => {
    setFormData({
      gatewayId: '',
      oldIcon: '',
      oldQrImage: '',
      type: '',
      name: '',
      icon: null,
      qrImage: null,
      address: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      accountType: '',
      contactNumber: ''
    });
    setEditingGateway(null);
  };

  const getTypeDisplayName = (type) => {
    const types = {
      crypto: 'Cryptocurrency',
      wire: 'Wire Transfer',
      upi: 'UPI',
      local: 'Local Depositor'
    };
    return types[type] || type;
  };

  const getGatewayDetails = (gateway) => {
    switch (gateway.type) {
      case 'crypto':
      case 'upi':
        return gateway.address;
      case 'wire':
        return `${gateway.bankName} - ${gateway.accountNumber}`;
      case 'local':
        return gateway.contactNumber;
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Add Manual Gateway</h1>
          <p className="text-lg text-gray-600">Configure manual payment gateways with custom details.</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
              Gateway Configuration
            </h2>
            <p className="text-orange-100 mt-1">Set up manual payment methods with detailed information</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {/* Hidden Fields */}
            <input type="hidden" name="gatewayId" value={formData.gatewayId} />
            <input type="hidden" name="oldIcon" value={formData.oldIcon} />
            <input type="hidden" name="oldQrImage" value={formData.oldQrImage} />

            {/* Basic Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gateway Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={(e) => handleTypeChange(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white transition-colors"
                >
                  <option value="">Select Type</option>
                  <option value="crypto">Cryptocurrency</option>
                  <option value="wire">Wire Transfer</option>
                  <option value="upi">UPI</option>
                  <option value="local">Local Depositor</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name / Label
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Enter gateway name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Icon
                </label>
                <input
                  type="file"
                  name="icon"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                />
              </div>
            </div>

            {/* Conditional Fields */}
            <div className="space-y-6">
              {/* QR Image - shown for crypto and upi */}
              {(formData.type === 'crypto' || formData.type === 'upi') && (
                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-lg font-medium text-orange-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/>
                    </svg>
                    QR Code Configuration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        QR Image
                      </label>
                      <input
                        type="file"
                        name="qrImage"
                        onChange={handleFileChange}
                        accept="image/*"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address / UPI ID
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder={formData.type === 'crypto' ? 'Enter crypto address' : 'Enter UPI ID'}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Wire Transfer Fields */}
              {formData.type === 'wire' && (
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-medium text-blue-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                    Bank Account Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bank Name
                      </label>
                      <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter bank name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Number
                      </label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter account number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        IFSC Code
                      </label>
                      <input
                        type="text"
                        name="ifscCode"
                        value={formData.ifscCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter IFSC code"
                      />
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Type
                      </label>
                      <select
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors"
                      >
                        <option value="">Select Account Type</option>
                        <option value="Saving">Saving</option>
                        <option value="Current">Current</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Local Depositor Fields */}
              {formData.type === 'local' && (
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h3 className="text-lg font-medium text-green-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    Contact Information
                  </h3>
                  <div className="max-w-md">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number
                    </label>
                    <input
                      type="text"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Enter contact number"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                </svg>
                <span>{editingGateway ? 'Update Gateway' : 'Save Gateway'}</span>
              </button>
              {editingGateway && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                  </svg>
                  <span>Cancel Edit</span>
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Gateways Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 p-6">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              All Manual Gateways
            </h2>
            <p className="text-orange-100 mt-1">Manage your configured manual payment gateways</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-orange-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">#</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Icon</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">QR</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Details</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-orange-800 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {gateways.map((gateway, index) => (
                  <tr key={gateway.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                      {getTypeDisplayName(gateway.type)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {gateway.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                        {gateway.icon ? (
                          <img
                            src={`../uploads/icons/${gateway.icon}`}
                            alt={`${gateway.name} icon`}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {gateway.qrImage ? (
                        <img
                          src={`../uploads/qr/${gateway.qrImage}`}
                          alt="QR Code"
                          className="w-10 h-10 object-contain rounded"
                        />
                      ) : (
                        <span className="text-gray-400 text-sm">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">
                      {getGatewayDetails(gateway) || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button
                        onClick={() => handleEdit(gateway)}
                        className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium rounded transition-colors focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(gateway.id)}
                        className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded transition-colors focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {gateways.length === 0 && (
            <div className="p-12 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No manual gateways configured</h3>
              <p className="text-gray-600">Add your first manual payment gateway using the form above.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManualGateways;