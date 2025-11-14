import React, { useState } from 'react';

const KYC = () => {
  const [formData, setFormData] = useState({
    document_type: '',
    front_file: null,
    back_file: null
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('KYC form submitted:', formData);
  };

  const handleReset = () => {
    setFormData({
      document_type: '',
      front_file: null,
      back_file: null
    });
  };

  return (
    <div className="min-h-screen bg-violet-100 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white rounded-3xl p-6 md:p-8 mb-6 md:mb-8 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
            KYC Verification
          </h1>
          <p className="text-gray-300 text-lg">Complete your KYC verification in order to start trading</p>
        </div>

        {/* Status Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01] mb-6 md:mb-8">
          <div className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Your Profile Status:
              </h3>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Not Submitted
              </span>
            </div>
          </div>
        </div>

        {/* Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {[
            {
              icon: 'user',
              title: 'Personal Information',
              status: 'Not Submitted',
              description: 'Basic profile and ID details required for compliance.',
              color: 'from-blue-500 to-blue-600',
              bgColor: 'from-blue-50 to-blue-100',
              borderColor: 'border-blue-200',
              step: 1
            },
            {
              icon: 'id',
              title: 'Legal Information',
              status: 'Not Submitted',
              description: 'Ensure your name, DOB, and address match your documents.',
              color: 'from-purple-500 to-purple-600',
              bgColor: 'from-purple-50 to-purple-100',
              borderColor: 'border-purple-200',
              step: 2
            },
            {
              icon: 'file-alert',
              title: 'Documents Verification',
              status: 'Not Submitted',
              description: 'Upload government-issued ID and address proof to proceed.',
              color: 'from-green-500 to-green-600',
              bgColor: 'from-green-50 to-green-100',
              borderColor: 'border-green-200',
              step: 3
            }
          ].map((card, index) => (
            <div key={index} className={`bg-gradient-to-br ${card.bgColor} backdrop-blur-sm rounded-3xl shadow-2xl border ${card.borderColor} overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-1 relative min-h-[200px]`}>
              {/* Step Number Badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                {card.step}
              </div>

              <div className="p-4 md:p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}>
                      <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        {card.icon === 'user' && <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>}
                        {card.icon === 'id' && <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm3 2a1 1 0 000 2h.01a1 1 0 100-2H9zm-2 4a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>}
                        {card.icon === 'file-alert' && <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>}
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-gray-900 text-base md:text-lg mb-1">{card.title}</h4>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/60 text-gray-700 border border-gray-300">
                        {card.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{card.description}</p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-600">Progress</span>
                    <span className="text-xs font-medium text-gray-600">0%</span>
                  </div>
                  <div className="w-full bg-white/60 rounded-full h-2">
                    <div className={`bg-gradient-to-r ${card.color} h-2 rounded-full transition-all duration-500`} style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* KYC Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <svg className="w-6 h-6 md:w-7 md:h-7 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
              </svg>
              Document Type
            </h2>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              {/* Document Type Selection */}
              <div className="mb-6 md:mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Proof of Identification
                </label>
                <select
                  name="document_type"
                  value={formData.document_type}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Document</option>
                  <option value="National ID">National ID</option>
                  <option value="Passport">Passport</option>
                  <option value="Driving License">Driving License</option>
                </select>
              </div>

              {/* File Upload Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                {/* Front Side */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Front Side
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 md:p-8 text-center hover:border-blue-400 transition-colors duration-200 bg-gray-50 hover:bg-blue-50">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-gray-600 mb-4">Drop your file here<br />or</p>
                    <input
                      type="file"
                      name="front_file"
                      onChange={handleInputChange}
                      accept="image/*,.pdf"
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      required
                    />
                    <div className="text-xs text-gray-500 mt-3">
                      📄 JPG, PNG, PDF | Max: 15MB
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <svg className="w-4 h-4 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong className="text-yellow-800">Note:</strong>
                        <span className="text-yellow-700 ml-1">Clear front image required.</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Back Side
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 md:p-8 text-center hover:border-blue-400 transition-colors duration-200 bg-gray-50 hover:bg-blue-50">
                    <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-gray-600 mb-4">Drop your file here<br />or</p>
                    <input
                      type="file"
                      name="back_file"
                      onChange={handleInputChange}
                      accept="image/*,.pdf"
                      className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      required
                    />
                    <div className="text-xs text-gray-500 mt-3">
                      📄 JPG, PNG, PDF | Max: 15MB
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-start">
                      <svg className="w-4 h-4 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      <div>
                        <strong className="text-yellow-800">Note:</strong>
                        <span className="text-yellow-700 ml-1">Clear back image required.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 md:p-6 mb-6">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <strong className="text-blue-800">Note:</strong>
                    <span className="text-blue-700 ml-1">Please ensure file size is under 15 MB and in JPG, PNG, or PDF format.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Reset All
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Submit Documents
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYC;