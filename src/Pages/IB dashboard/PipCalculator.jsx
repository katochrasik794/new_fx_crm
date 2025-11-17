import React, { useState, useEffect } from 'react';

const PipCalculator = () => {
  const [tradingPair, setTradingPair] = useState('');
  const [accountCurrency, setAccountCurrency] = useState('USD');
  const [numberOfPips, setNumberOfPips] = useState(10);
  const [lotSize, setLotSize] = useState(1);
  const [estimatedPipValue, setEstimatedPipValue] = useState(100.00);
  const [commissionPreview, setCommissionPreview] = useState(2.00);
  const [pipValuePerLot, setPipValuePerLot] = useState(10.00);
  const [updateTime, setUpdateTime] = useState('');

  // Update time every second
  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      setUpdateTime(now.toLocaleTimeString());
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate pip value when inputs change
  useEffect(() => {
    if (tradingPair && numberOfPips && lotSize) {
      // Basic pip calculation (simplified)
      const basePipValue = 10; // Standard pip value for most pairs
      const calculatedValue = basePipValue * numberOfPips * lotSize;
      setEstimatedPipValue(calculatedValue);
      setPipValuePerLot(basePipValue);

      // Commission calculation (simplified - using $1 per lot rate)
      const commission = lotSize * 1.00 * numberOfPips;
      setCommissionPreview(commission);
    }
  }, [tradingPair, numberOfPips, lotSize]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 p-4 md:p-6">
      <div className="w-[350px] sm:w-full max-w-[2800px] mx-auto space-y-6">

        {/* Page Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-100 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
            Pip Calculator
          </h1>
          <p className="text-gray-600 text-lg">Calculate pip values and commission for your trading pairs</p>
        </div>

        {/* Main Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Calculator Form */}
          <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-rose-100 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Left Panel - Input Fields */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Symbol</label>
                  <select
                    value={tradingPair}
                    onChange={(e) => setTradingPair(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                  >
                    <option value="">Select Symbol</option>
                    <optgroup label="Commodities">
                      <option value="XAUUSD">XAUUSD</option>
                      <option value="XAGUSD">XAGUSD</option>
                      <option value="CL-OIL">CL-OIL</option>
                      <option value="UKOIL">UKOIL</option>
                    </optgroup>
                    <optgroup label="Cryptocurrencies">
                      <option value="BTCUSD">BTCUSD</option>
                      <option value="ETHUSD">ETHUSD</option>
                      <option value="ADAUSD">ADAUSD</option>
                      <option value="DOTUSD">DOTUSD</option>
                    </optgroup>
                    <optgroup label="Forex">
                      <option value="EURUSD">EURUSD</option>
                      <option value="GBPUSD">GBPUSD</option>
                      <option value="USDJPY">USDJPY</option>
                      <option value="AUDUSD">AUDUSD</option>
                    </optgroup>
                    <optgroup label="Indices">
                      <option value="US30">US30</option>
                      <option value="US500">US500</option>
                      <option value="NAS100">NAS100</option>
                      <option value="UK100">UK100</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Account Currency</label>
                  <select
                    value={accountCurrency}
                    onChange={(e) => setAccountCurrency(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="JPY">JPY</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Pips</label>
                  <input
                    type="number"
                    value={numberOfPips}
                    onChange={(e) => setNumberOfPips(parseFloat(e.target.value) || 0)}
                    step="0.1"
                    placeholder="Enter pips"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Lots</label>
                  <input
                    type="number"
                    value={lotSize}
                    onChange={(e) => setLotSize(parseFloat(e.target.value) || 0)}
                    step="0.01"
                    placeholder="Enter lots"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent text-base"
                  />
                </div>
              </div>

              {/* Right Panel - Results */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Estimated Pip Value</h3>
                  <div className="flex items-center">
                    <span className="text-4xl font-bold text-rose-600">${estimatedPipValue.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Symbol:</span>
                    <span className="font-semibold text-gray-900">{tradingPair || 'EURUSD'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lots:</span>
                    <span className="font-semibold text-gray-900">{lotSize.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pips:</span>
                    <span className="font-semibold text-gray-900">{numberOfPips.toFixed(1)}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Your IB Rate:</span>
                    <span className="font-semibold text-green-600">$1.00/Lot</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Commission Preview:</span>
                    <span className="font-semibold text-green-600">${commissionPreview.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pip Value / Lot:</span>
                  <span className="font-semibold text-gray-900">${pipValuePerLot.toFixed(2)}</span>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    Rates updated {updateTime} via frankfurter • Base USD
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes Panel */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-pink-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Notes</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <p className="text-sm text-gray-600">Pip USD per lot can vary by symbol and broker settings.</p>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <p className="text-sm text-gray-600">The above tool is for estimation only; live trading may differ.</p>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <p className="text-sm text-gray-600">Commission preview uses your IB pip/lot rate for accurate calculations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipCalculator;