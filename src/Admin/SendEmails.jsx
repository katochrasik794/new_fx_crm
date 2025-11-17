import React, { useState } from 'react';

const SendEmails = () => {
  const [group, setGroup] = useState('all');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle send emails logic here
    alert(`Emails sent to ${group} group with subject: ${subject}`);
  };

  return (
    <div className="min-h-screen bg-violet-100 p-2 sm:p-6">
      <div className="w-full max-w-[1800px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-4">
          <h2 className="text-2xl font-bold flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Send Bulk Email
          </h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">User Group</label>
              <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              >
                <option value="all">All Users</option>
                <option value="balance">Users with Balance</option>
                <option value="unverified">Email Unverified</option>
                <option value="kyc_pending">KYC Pending</option>
                <option value="active">Active Users</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="8"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.409l-7-14z" />
              </svg>
              Send Emails
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendEmails;