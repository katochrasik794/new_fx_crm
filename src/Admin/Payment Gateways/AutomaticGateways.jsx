
import React, { useState } from 'react';

const AutomaticGateways = () => {
  const [formData, setFormData] = useState({
    name: '',
    apiKey: '',
    secretKey: '',
    image: null
  });

  // Sample gateway data - in real app this would come from API
  const gateways = [
    {
      id: 1,
      name: 'USDT',
      apiKey: '0123456789abcABC',
      secretKey: 'PYkP7SeOoHCt7V6zWXEqIwIyn1G02yf6',
      status: 'Active',
      added: '21 Oct 2025',
      logo: null
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your API
  };

  const getStatusBadge = (status) => {
    return status === 'Active'
      ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
      : 'bg-red-100 text-red-800 border-red-200';
  };

  return (
    <div className="min-h-screen bg-violet-100 p-2">
      <div className="w-[350px] sm:w-full max-w-[2800px] mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Payment Gateway Setup</h1>
          <p className="text-lg text-gray-600">Add and manage API-based payment gateways.</p>
        </div>

        {/* Add Gateway Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
              Add New Gateway
            </h2>
            <p className="text-emerald-100 mt-1">Configure a new payment gateway with API credentials</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Gateway Name */}
              <div className="md:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gateway Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Enter gateway name"
                />
              </div>

              {/* API Key */}
              <div className="md:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  API Key
                </label>
                <input
                  type="text"
                  name="apiKey"
                  value={formData.apiKey}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors font-mono text-sm"
                  placeholder="Enter API key"
                />
              </div>

              {/* Secret Key */}
              <div className="md:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secret Key
                </label>
                <input
                  type="text"
                  name="secretKey"
                  value={formData.secretKey}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors font-mono text-sm"
                  placeholder="Enter secret key"
                />
              </div>

              {/* Gateway Logo */}
              <div className="md:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gateway Logo
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:text-sm file:font-medium file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 flex items-center space-x-2 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                </svg>
                <span>Save Gateway</span>
              </button>
            </div>
          </form>
        </div>

        {/* Gateways Table */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6">
            <h2 className="text-2xl font-semibold text-white flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Configured Gateways
            </h2>
            <p className="text-emerald-100 mt-1">Manage your existing payment gateway configurations</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Logo</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">API Key</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Secret Key</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-emerald-800 uppercase tracking-wider">Added</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {gateways.map((gateway) => (
                  <tr key={gateway.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {gateway.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                        {gateway.logo ? (
                          <img
                            src={gateway.logo}
                            alt={`${gateway.name} logo`}
                            className="w-8 h-8 object-contain"
                          />
                        ) : (
                          <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                          </svg>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {gateway.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-mono break-all max-w-xs">
                      {gateway.apiKey}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-mono break-all max-w-xs">
                      {gateway.secretKey}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${getStatusBadge(gateway.status)}`}>
                        {gateway.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {gateway.added}
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
              <h3 className="text-lg font-medium text-gray-900 mb-2">No gateways configured</h3>
              <p className="text-gray-600">Add your first payment gateway using the form above.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AutomaticGateways;