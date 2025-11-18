import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const recentActivity = [
    { id: 1, action: "New tenant registered", tenant: "Forex Pro Ltd", time: "2 hours ago", type: "success" },
    { id: 2, action: "Payment received", tenant: "Trade Masters", time: "4 hours ago", type: "success" },
    { id: 3, action: "Tenant suspended", tenant: "Capital FX", time: "1 day ago", type: "warning" },
    { id: 4, action: "Plan upgraded", tenant: "Global Trading", time: "2 days ago", type: "info" }
  ];

  const systemHealth = [
    { service: "MT5 Server", status: "Online", uptime: "99.9%" },
    { service: "Database", status: "Online", uptime: "100%" },
    { service: "Payment Gateway", status: "Online", uptime: "98.5%" },
    { service: "Email Service", status: "Warning", uptime: "95.2%" }
  ];

  return (
    <div className="w-[370px] sm:w-full max-w-[2800px] mx-auto p-2 sm:p-6 space-y-6">
      <div className=" flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Super Admin Dashboard</h1>
        <div className="flex space-x-3">
          <button 
            onClick={() => navigate('/super-admin/tenants')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Tenant
          </button>
          <button 
            onClick={() => navigate('/super-admin/settings')}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            System Backup
          </button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Tenants</p>
              <p className="text-3xl font-bold text-gray-900">24</p>
              <p className="text-sm text-green-600">+3 this month</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Tenants</p>
              <p className="text-3xl font-bold text-green-600">18</p>
              <p className="text-sm text-gray-500">75% active rate</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
              <p className="text-3xl font-bold text-yellow-600">$45,230</p>
              <p className="text-sm text-green-600">+12% vs last month</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">System Status</p>
              <p className="text-3xl font-bold text-green-600">Healthy</p>
              <p className="text-sm text-gray-500">All systems operational</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <div className="w-6 h-6 bg-green-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.tenant} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
          <div className="space-y-4">
            {systemHealth.map((system, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    system.status === 'Online' ? 'bg-green-500' : 'bg-yellow-500'
                  }`}></div>
                  <span className="font-medium text-gray-900">{system.service}</span>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-medium ${
                    system.status === 'Online' ? 'text-green-600' : 'text-yellow-600'
                  }`}>{system.status}</span>
                  <p className="text-xs text-gray-500">{system.uptime} uptime</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => navigate('/super-admin/tenants')}
            className="p-4 text-center bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <svg className="w-8 h-8 text-blue-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span className="text-sm font-medium text-gray-900">Add Tenant</span>
          </button>
          <button 
            onClick={() => navigate('/super-admin/settings')}
            className="p-4 text-center bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <svg className="w-8 h-8 text-green-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium text-gray-900">System Check</span>
          </button>
          <button 
            onClick={() => navigate('/super-admin/billing')}
            className="p-4 text-center bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
          >
            <svg className="w-8 h-8 text-yellow-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
            <span className="text-sm font-medium text-gray-900">Billing Report</span>
          </button>
          <button 
            onClick={() => navigate('/super-admin/settings')}
            className="p-4 text-center bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
            <span className="text-sm font-medium text-gray-900">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;