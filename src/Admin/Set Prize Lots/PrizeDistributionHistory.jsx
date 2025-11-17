import React from 'react';

const PrizeDistributionHistory = () => {
  // Sample data - replace with actual data fetching logic
  const historyData = [
    { user: 'John Doe', email: 'john@example.com', prize: '$100 Cash', date: '2023-10-01' },
    { user: 'Jane Smith', email: 'jane@example.com', prize: '$50 Voucher', date: '2023-10-02' },
    { user: 'Bob Johnson', email: 'bob@example.com', prize: '$200 Prize', date: '2023-10-03' },
  ];

  return (
    <div className="min-h-screen bg-violet-100 p-2">
      <div className="w-[350px] sm:w-full max-w-[2800px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white p-4">
          <h2 className="text-2xl font-bold">Prize Distribution History</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">User</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">Email</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">Prize</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {historyData.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">{item.user}</td>
                    <td className="px-4 py-3">{item.email}</td>
                    <td className="px-4 py-3">{item.prize}</td>
                    <td className="px-4 py-3">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizeDistributionHistory;