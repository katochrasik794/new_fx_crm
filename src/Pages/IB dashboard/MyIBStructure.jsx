import React, { useState } from 'react';

const MyIBStructure = () => {
  const [expandedNodes, setExpandedNodes] = useState(new Set([0, 1, 2, 3, 4, 5]));

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const expandAll = () => {
    setExpandedNodes(new Set([0, 1, 2, 3, 4, 5]));
  };

  const collapseAll = () => {
    setExpandedNodes(new Set([0]));
  };

  const treeData = {
    root: {
      id: 0,
      name: 'OXO MARKET IB',
      email: 'OXOMARKETIB@GMAIL.COM',
      level: 0,
      type: 'IB',
      status: 'active',
      stats: {
        amount: 0.00,
        ownLots: 0.0000,
        teamLots: 0.4000,
        ibClients: 3,
        traders: 5,
        totalLots: 0.4000
      },
      commission: 2.10,
      commissionFrom: 3,
      pipRates: [
        { plan: 'PRO', rate: 1.00 },
        { plan: 'STANDARD', rate: 1.50 },
        { plan: 'PLUS', rate: 2.00 }
      ]
    },
    level1: [
      {
        id: 1,
        name: 'OXO SUB IB TWO',
        email: 'oxosubib2@gmail.com',
        level: 1,
        type: 'IB',
        status: 'active',
        stats: {
          amount: 0.00,
          ownLots: 0.0000,
          teamLots: 0.2000,
          ibClients: 1,
          traders: 1,
          totalLots: 0.2000
        },
        commission: 0.55,
        commissionFrom: 1,
        pipRates: [
          { plan: 'PLUS', rate: 1.00 },
          { plan: 'PRO', rate: 0.80 },
          { plan: 'STANDARD', rate: 0.50 }
        ],
        children: [
          {
            id: 2,
            name: 'OXO Trading tw',
            email: 'trading123@gmail.com',
            level: 2,
            type: 'Client',
            status: 'active',
            stats: {
              amount: 967.77,
              ownLots: 0.2000,
              teamLots: 0.0000,
              ibClients: 0,
              traders: 0,
              totalLots: 0.2000
            },
            pipRates: [
              { plan: 'PRO', rate: 1.00 },
              { plan: 'STANDARD', rate: 1.50 },
              { plan: 'PLUS', rate: 2.00 }
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'ksm init',
        email: 'ksmin@gmail.com',
        level: 1,
        type: 'IB',
        status: 'active',
        stats: {
          amount: 0.00,
          ownLots: 0.0000,
          teamLots: 0.0000,
          ibClients: 0,
          traders: 0,
          totalLots: 0.0000
        },
        commission: 0.00,
        commissionFrom: 0,
        pipRates: [
          { plan: 'PLUS', rate: 1.40 }
        ]
      },
      {
        id: 4,
        name: 'OXO MARKET SUB IB',
        email: 'oxomarketsubib@gmail.com',
        level: 1,
        type: 'IB',
        status: 'active',
        stats: {
          amount: 0.00,
          ownLots: 0.0000,
          teamLots: 0.2000,
          ibClients: 1,
          traders: 1,
          totalLots: 0.2000
        },
        commission: 3.00,
        commissionFrom: 1,
        pipRates: [
          { plan: 'PLUS', rate: 1.50 },
          { plan: 'PRO', rate: 0.80 },
          { plan: 'STANDARD', rate: 1.20 }
        ],
        children: [
          {
            id: 5,
            name: 'OXO MARKET TRADING',
            email: 'tradings@gmail.com',
            level: 2,
            type: 'Client',
            status: 'active',
            stats: {
              amount: 999.43,
              ownLots: 0.2000,
              teamLots: 0.0000,
              ibClients: 0,
              traders: 0,
              totalLots: 0.2000
            },
            pipRates: [
              { plan: 'PRO', rate: 1.00 },
              { plan: 'STANDARD', rate: 1.50 },
              { plan: 'PLUS', rate: 2.00 }
            ]
          }
        ]
      }
    ]
  };

  const renderNode = (node, isRoot = false) => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className="flex flex-col items-center">
        {/* Connector from parent */}
        {!isRoot && (
          <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-gray-400"></div>
        )}

        {/* Node Card */}
        <div className={`relative ${isRoot ? 'bg-gradient-to-br from-violet-500 to-purple-600 text-white' : node.type === 'IB' ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white' : 'bg-gradient-to-br from-yellow-500 to-orange-600 text-white'} rounded-2xl shadow-xl p-6 min-w-80 hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
          {/* Status Indicator */}
          <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${node.status === 'active' ? 'bg-green-500' : 'bg-gray-500'} border-2 border-white`}></div>

          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isRoot ? 'bg-violet-400' : node.type === 'IB' ? 'bg-green-400' : 'bg-yellow-400'}`}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                {isRoot || node.type === 'Client' ? (
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                ) : (
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                )}
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold">{node.name}</h3>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs font-medium">L{node.level}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${node.type === 'IB' ? 'bg-green-500/20 text-green-100' : 'bg-yellow-500/20 text-yellow-100'}`}>
                  {node.type}
                </span>
              </div>
              <p className={`text-sm ${isRoot ? 'text-violet-100' : node.type === 'IB' ? 'text-green-100' : 'text-yellow-100'}`}>
                {node.email}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <div className="text-center p-3 bg-white/10 rounded-xl">
                <p className="text-xs opacity-80 mb-1">AMOUNT/LOTS</p>
                <p className="text-lg font-bold">${node.stats.amount.toFixed(2)}</p>
              </div>
              <div className="text-center p-2 bg-white/10 rounded-xl mt-2">
                <p className="text-xs opacity-80 mb-1">Own Lots</p>
                <p className="text-sm font-semibold">{node.stats.ownLots.toFixed(4)}</p>
              </div>
              <div className="text-center p-2 bg-white/10 rounded-xl mt-2">
                <p className="text-xs opacity-80 mb-1">Team Lots</p>
                <p className="text-sm font-semibold">{node.stats.teamLots.toFixed(4)}</p>
              </div>
            </div>
            <div>
              <div className="text-center p-3 bg-white/10 rounded-xl">
                <p className="text-xs opacity-80 mb-1">IB/CLIENTS</p>
                <p className="text-lg font-bold">{node.stats.ibClients}</p>
              </div>
              <div className="text-center p-2 bg-white/10 rounded-xl mt-2">
                <p className="text-xs opacity-80 mb-1">Traders</p>
                <p className="text-sm font-semibold">{node.stats.traders}</p>
              </div>
              <div className="text-center p-2 bg-white/10 rounded-xl mt-2">
                <p className="text-xs opacity-80 mb-1">Total Lots</p>
                <p className="text-sm font-semibold">{node.stats.totalLots.toFixed(4)}</p>
              </div>
            </div>
          </div>

          {/* IB Commission Info */}
          {node.type === 'IB' && (
            <div className="mb-4 p-3 bg-white/10 rounded-xl">
              <p className="text-sm font-semibold mb-1">Total IB Commission: <span className="text-xl font-bold">${node.commission.toFixed(2)}</span></p>
              <p className="text-xs opacity-80">From {node.commissionFrom} client(s) trading activity</p>
            </div>
          )}

          {/* Pip Rates */}
          <div className="mb-4">
            <p className="text-xs opacity-80 mb-2">Pip Rate:</p>
            <div className="flex flex-wrap gap-2">
              {node.pipRates.map((rate, index) => (
                <div key={index} className="flex items-center gap-1">
                  <span className="px-2 py-1 bg-white/20 rounded text-xs font-medium">{rate.plan}</span>
                  <span className="px-2 py-1 bg-white/30 rounded text-xs font-bold">{rate.rate.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expand/Collapse Button */}
          {hasChildren && (
            <button
              onClick={() => toggleNode(node.id)}
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg className={`w-3 h-3 text-gray-600 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          )}
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="flex gap-8 mt-8 overflow-x-auto pb-4">
            {node.children.map((child) => (
              <div key={child.id} className="flex-shrink-0">
                {renderNode(child)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Page Header */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-violet-100 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 flex items-center">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
            </svg>
            My IB Structure
          </h1>
          <p className="text-gray-600 text-lg">Complete IB hierarchy showing IBs and their clients</p>

          {/* Info Alert */}
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <div>
                <p className="text-blue-800 font-medium">Total Referrals in Tree: 5 users</p>
                <p className="text-blue-700 text-sm">Direct Referrals: 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-violet-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-12 h-12 text-violet-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">0.0000</h3>
              <p className="text-gray-600 text-sm mb-2">Own Lots</p>
              <p className="text-gray-500 text-xs">IBs earn from their own trades</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-green-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">0.4000</h3>
              <p className="text-gray-600 text-sm mb-2">Team Lots</p>
              <p className="text-gray-500 text-xs">From client trading</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100 p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <svg className="w-12 h-12 text-blue-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">$2.10</h3>
              <p className="text-gray-600 text-sm mb-2">Total Commission</p>
              <p className="text-gray-500 text-xs">Updated from live trades</p>
            </div>
          </div>
        </div>

        {/* Tree Visualization */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-violet-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <svg className="w-6 h-6 mr-2 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
              </svg>
              My IB Structure
            </h3>
            <div className="flex gap-3">
              <button
                onClick={expandAll}
                className="flex items-center gap-2 px-4 py-2 bg-violet-500 hover:bg-violet-600 text-white rounded-xl transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
                </svg>
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-xl transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001-1v-6z" clipRule="evenodd"/>
                </svg>
                Collapse All
              </button>
            </div>
          </div>

          {/* Tree Container */}
          <div className="overflow-x-auto">
            <div className="min-w-max p-8">
              {renderNode(treeData.root, true)}
            </div>
          </div>
        </div>

        {/* Tree Legend */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Tree Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-violet-500 rounded-full"></div>
              <span className="text-sm text-gray-700">You (Root)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Active IBs</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Regular Clients</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Inactive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyIBStructure;