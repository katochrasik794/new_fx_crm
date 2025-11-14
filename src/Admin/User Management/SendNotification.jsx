import React, { useState } from 'react';
import { FaMailBulk, FaUsers, FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaEnvelope, FaUserCheck, FaBan, FaWallet, FaIdBadge } from 'react-icons/fa';

const SendNotification = () => {
  const [formData, setFormData] = useState({
    userType: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const userTypes = [
    { value: 'all', label: 'All Users', icon: FaUsers, color: 'bg-blue-500' },
    { value: 'with_balance', label: 'Users with Balance', icon: FaWallet, color: 'bg-green-500' },
    { value: 'kyc_pending', label: 'KYC Pending Users', icon: FaIdBadge, color: 'bg-yellow-500' },
    { value: 'kyc_unverified', label: 'KYC Unverified Users', icon: FaExclamationTriangle, color: 'bg-red-500' },
    { value: 'banned', label: 'Banned Users', icon: FaBan, color: 'bg-gray-500' },
    { value: 'active', label: 'Active Users', icon: FaUserCheck, color: 'bg-emerald-500' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ userType: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedUserType = userTypes.find(type => type.value === formData.userType);

  return (
    <div className="bg-violet-100 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl shadow-xl border-2 border-violet-400">
              <FaMailBulk className="text-white text-2xl" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Send Email Notification
              </h1>
              <p className="text-gray-700 mt-2 text-sm md:text-base">
                Broadcast email messages to selected user types using rich formatting.
              </p>
            </div>
          </div>
        </div>

        {/* Status Messages */}
        {submitStatus && (
          <div className={`mb-6 p-4 rounded-2xl border-2 ${
            submitStatus === 'success'
              ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
              : 'bg-red-50 border-red-500 text-red-800'
          }`}>
            <div className="flex items-center gap-3">
              {submitStatus === 'success' ? (
                <FaCheckCircle className="text-emerald-600 text-xl" />
              ) : (
                <FaExclamationTriangle className="text-red-600 text-xl" />
              )}
              <div>
                <p className="font-semibold">
                  {submitStatus === 'success'
                    ? 'Email notification sent successfully!'
                    : 'Failed to send email notification. Please try again.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* User Type Selection */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-violet-500/30 p-6 md:p-8">
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaUsers className="text-violet-500" />
                Select User Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {userTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <label
                      key={type.value}
                      className={`relative cursor-pointer group ${
                        formData.userType === type.value
                          ? 'ring-2 ring-violet-500 ring-offset-2'
                          : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="userType"
                        value={type.value}
                        checked={formData.userType === type.value}
                        onChange={handleInputChange}
                        className="sr-only"
                        required
                      />
                      <div className={`p-4 rounded-2xl border-2 transition-all duration-200 ${
                        formData.userType === type.value
                          ? 'border-violet-500 bg-violet-50 shadow-lg'
                          : 'border-gray-200 bg-gray-50 hover:border-violet-300 hover:bg-violet-25'
                      }`}>
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl ${type.color} text-white`}>
                            <IconComponent className="text-sm" />
                          </div>
                          <span className={`font-medium ${
                            formData.userType === type.value ? 'text-violet-700' : 'text-gray-700'
                          }`}>
                            {type.label}
                          </span>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Selected User Type Display */}
            {selectedUserType && (
              <div className="bg-violet-50/50 rounded-2xl p-4 border border-violet-200">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${selectedUserType.color} text-white`}>
                    <selectedUserType.icon className="text-sm" />
                  </div>
                  <div>
                    <p className="font-semibold text-violet-800">Selected: {selectedUserType.label}</p>
                    <p className="text-sm text-violet-600">Email will be sent to all users in this category</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Email Subject */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-purple-500/30 p-6 md:p-8">
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaEnvelope className="text-purple-500" />
                Email Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-purple-50/50 border-2 border-purple-500/30 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-900 placeholder-purple-400 text-lg"
                placeholder="Enter email subject..."
                required
              />
            </div>
          </div>

          {/* Email Message */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-fuchsia-500/30 p-6 md:p-8">
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FaMailBulk className="text-fuchsia-500" />
                Email Message
              </label>
              <div className="bg-fuchsia-50/50 border-2 border-fuchsia-500/30 rounded-2xl overflow-hidden">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-transparent border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder-fuchsia-400 resize-none"
                  placeholder="Compose your email message..."
                  rows="12"
                  required
                />
                <div className="px-4 pb-4 flex items-center justify-between text-sm text-fuchsia-600">
                  <span>Rich text formatting supported</span>
                  <span>{formData.message.length} characters</span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white rounded-2xl hover:from-violet-600 hover:via-purple-600 hover:to-fuchsia-600 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-3 text-lg font-semibold"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="text-lg" />
                  Send Email
                </>
              )}
            </button>
          </div>
        </form>

        {/* Preview Section */}
        {formData.subject && formData.message && (
          <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-violet-500/30 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FaEnvelope className="text-violet-500" />
              Email Preview
            </h3>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="mb-4">
                <strong className="text-gray-700">Subject:</strong> {formData.subject}
              </div>
              <div className="mb-4">
                <strong className="text-gray-700">To:</strong> {selectedUserType ? selectedUserType.label : 'Selected user type'}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="text-gray-800 whitespace-pre-wrap">{formData.message}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SendNotification;