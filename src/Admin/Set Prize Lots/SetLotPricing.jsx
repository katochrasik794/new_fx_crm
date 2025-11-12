import React, { useState } from 'react';

const SetLotPricing = () => {
  const [usdPerLot, setUsdPerLot] = useState(1.00);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle update pricing logic here
    alert(`Pricing updated to $${usdPerLot} per lot`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-teal-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4">
          <h2 className="text-2xl font-bold">Set Lot Pricing</h2>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-end gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">USD Per Lot</label>
                <input
                  type="number"
                  step="0.01"
                  value={usdPerLot}
                  onChange={(e) => setUsdPerLot(parseFloat(e.target.value))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition duration-300"
              >
                Update Pricing
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetLotPricing;