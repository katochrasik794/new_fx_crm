
import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

function Dashboard() {
  useEffect(() => {
    // Update stats
    document.getElementById('summaryBalance').textContent = '$6,300.00';
    document.getElementById('summaryEquity').textContent = '$6,450.00';
    document.getElementById('summaryWins').textContent = '12';
    document.getElementById('summaryLosses').textContent = '5';
    document.getElementById('summaryPnl').textContent = '$1,850.00';
    document.getElementById('statsProfit').textContent = '$2,450.00';
    document.getElementById('statsLoss').textContent = '$600.00';
    document.getElementById('statsNet').textContent = '$1,850.00';
  }, []);

  const chartData = {
    labels: ['Jan 1', 'Jan 5', 'Jan 10', 'Jan 15', 'Jan 20', 'Jan 25', 'Jan 30'],
    datasets: [
      {
        label: 'Cumulative Earnings',
        data: [1200, 2400, 3100, 2800, 4200, 5100, 6300],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleColor: '#fff',
        bodyColor: '#fff',
        callbacks: {
          label: (context) => `Earnings: $${context.parsed.y.toLocaleString()}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => '$' + value.toLocaleString()
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="bg-violet-100 p-3 sm:p-4 md:p-6 flex justify-center">
      <div className="w-[350px] sm:w-full max-w-[2800px] mx-auto px-1 sm:px-2
 space-y-8 ">

        {/* Enhanced Page Header with Global MT5 Selector */}
        <div className="bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 text-white p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] border border-purple-500/20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-1 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
                Dashboard Overview
              </h4>
              <p className="text-gray-300 text-sm">
                Welcome back! Here's your trading overview at a glance.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <img src="https://portal.fincrmmarkets.com/client/assets/images/icons/mt5.png" alt="MT5" className="w-6 h-6" />
              <select className="bg-white text-black border-2 border-white px-3 py-1 rounded text-sm min-w-[150px]">
                <option value="">No MT5 Account</option>
              </select>
            </div>
          </div>
        </div>

        {/* KYC Verification Status Banner */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-0 p-6 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01] border border-white/20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-1">Verify your profile to start trading</h5>
              <p className="text-gray-600 mb-3">Complete your personal information to unlock all trading features</p>
              <a href="/kyc" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Verify now
              </a>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2 border border-blue-500">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0V7z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-900">Register</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-600">Personal Info</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Welcome Message */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.01] border border-emerald-100/50">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div>
              <h5 className="font-semibold text-gray-900 mb-1">Ready to start trading?</h5>
              <p className="text-gray-600 mb-3">You haven't made any trades yet. Start your trading journey today!</p>
              <div className="flex gap-3">
                <a href="/deposit" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Deposit Funds
                </a>
                <a href="/open-trading-account" className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                  </svg>
                  Open Account
                </a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-2 border border-blue-500">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-900">Account</span>
              </div>
              <div className="w-8 h-0.5 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-600">Start Trading</span>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <h4 className="text-2xl font-semibold text-gray-900 flex items-center mb-1">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Dashboard
          </h4>
          <div className="text-sm text-gray-600">
            Get started with your trading journey.
          </div>
        </div>

        {/* Enhanced Summary Cards */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 transform border border-gray-100 group">
            <div className="mb-4 p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Balance</p>
            <h5 className="font-bold text-2xl text-gray-900" id="summaryBalance">$0.00</h5>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 transform border border-gray-100 group">
            <div className="mb-4 p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
              </svg>
            </div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Equity</p>
            <h5 className="font-bold text-2xl text-gray-900" id="summaryEquity">$0.00</h5>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 transform border border-gray-100 group">
            <div className="mb-4 p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Total Deposits</p>
            <h5 className="font-bold text-2xl text-green-600" id="summaryWins">0</h5>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 transform border border-gray-100 group">
            <div className="mb-4 p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 13a1 1 0 100-2h5a1 1 0 001-1V5a1 1 0 10-2 0v5.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd"/>
              </svg>
            </div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Total Withdrawls</p>
            <h5 className="font-bold text-2xl text-red-600" id="summaryLosses">0</h5>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 transform border border-gray-100 group">
            <div className="mb-4 p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <p className="text-sm text-gray-600 mb-2 font-medium">Total PNL</p>
            <h5 className="font-bold text-2xl text-gray-900" id="summaryPnl">$0.00</h5>
          </div>
        </div>


        {/* Getting Started Section */}
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-white/50 backdrop-blur-sm hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
          <div className="mb-6">
            <h6 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Getting Started</h6>
            <p className="text-gray-600 mt-2">Follow these simple steps to begin your trading journey</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="group text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">1</div>
              </div>
              <h6 className="font-bold text-gray-900 mb-3 text-lg">Deposit Funds</h6>
              <p className="text-sm text-gray-600 mb-4">Add money to your account to start trading</p>
              <a href="/deposit" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Deposit Now
              </a>
            </div>
            <div className="group text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">2</div>
              </div>
              <h6 className="font-bold text-gray-900 mb-3 text-lg">Start Trading</h6>
              <p className="text-sm text-gray-600 mb-4">Use MT5 platform to place your first trade</p>
              <a href="/open-trading-account" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                </svg>
                Open Account
              </a>
            </div>
            <div className="group text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">3</div>
              </div>
              <h6 className="font-bold text-gray-900 mb-3 text-lg">Track Performance</h6>
              <p className="text-sm text-gray-600 mb-4">Monitor your trades and profits here</p>
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-xl cursor-not-allowed font-semibold shadow-lg">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
                Coming Soon
              </span>
            </div>
          </div>
        </div>


        {/* Earnings Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Cumulative Earnings */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Cumulative Earnings</h4>
              <select className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">
                <option value="7">Last 7 days</option>
                <option value="30" selected>Last 30 days</option>
                <option value="90">Last 90 days</option>
                <option value="365">Last 365 days</option>
              </select>
            </div>
            <div className="h-80 w-full">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          {/* Earnings Stats */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-900">Earnings Stats</h4>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                <div className="text-sm text-green-700 mb-1">Total Profit</div>
                <div className="text-xl font-bold text-green-700" id="statsProfit">$0.00</div>
                <div className="text-xs text-green-600 mt-1">From 0 winning trades</div>
              </div>

              <div className="p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg">
                <div className="text-sm text-red-700 mb-1">Total Loss</div>
                <div className="text-xl font-bold text-red-700" id="statsLoss">$0.00</div>
                <div className="text-xs text-red-600 mt-1">From 0 losing trades</div>
              </div>

              <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <div className="text-sm text-blue-700 mb-1">Net Earnings</div>
                <div className="text-xl font-bold text-blue-700" id="statsNet">$0.00</div>
                <div className="text-xs text-blue-600 mt-1">Win Rate: 0.0%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History Table */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Transaction History</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-30</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Deposit</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">+$1,200.00</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$6,300.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-28</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Trade Profit</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">+$450.00</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$5,100.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-25</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Withdrawal</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">-$500.00</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$4,650.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-22</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Trade Profit</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">+$850.00</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$5,150.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-20</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Trade Loss</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-semibold">-$200.00</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$4,300.00</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-01-18</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Deposit</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">+$2,000.00</td>
                  <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$4,500.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Monthly Performance Heatmap */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Monthly Performance Heatmap</h4>
            <p className="text-sm text-gray-600 mt-1">Trading performance by day of the month</p>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              const profit = Math.random() > 0.4 ? Math.floor(Math.random() * 500) : -Math.floor(Math.random() * 200);
              const intensity = Math.abs(profit) / 500;
              const bgColor = profit > 0 
                ? `rgba(34, 197, 94, ${0.2 + intensity * 0.6})` 
                : `rgba(239, 68, 68, ${0.2 + intensity * 0.6})`;
              
              return (
                <div
                  key={day}
                  className="aspect-square rounded-lg flex flex-col items-center justify-center text-xs font-medium hover:scale-110 transition-transform cursor-pointer"
                  style={{ backgroundColor: bgColor }}
                  title={`Day ${day}: ${profit > 0 ? '+' : ''}$${profit}`}
                >
                  <div className="text-gray-700">{day}</div>
                  <div className={`text-[10px] font-bold ${profit > 0 ? 'text-green-700' : 'text-red-700'}`}>
                    {profit > 0 ? '+' : ''}${profit}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(34, 197, 94, 0.8)' }}></div>
              <span>High Profit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(34, 197, 94, 0.3)' }}></div>
              <span>Low Profit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(239, 68, 68, 0.3)' }}></div>
              <span>Low Loss</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(239, 68, 68, 0.8)' }}></div>
              <span>High Loss</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-2">
          <p className="text-sm text-gray-600">
            {new Date().getFullYear()} © FINCRM
          </p>
        </div>

      </div>
    </div>
  )
}

export default Dashboard