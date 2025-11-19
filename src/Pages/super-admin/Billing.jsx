import { useState, useMemo } from 'react';
import DataTable from 'react-data-table-component';

const Billing = () => {
  const [filterText, setFilterText] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [planFilter, setPlanFilter] = useState('All Plans');
  const invoices = [
    { id: "INV-001", tenant: "Forex Pro Ltd", plan: "Enterprise", amount: "$299.00", date: "2024-02-15", dueDate: "2024-03-15", status: "Paid", paymentMethod: "Credit Card" },
    { id: "INV-002", tenant: "Trade Masters", plan: "Pro", amount: "$199.00", date: "2024-02-14", dueDate: "2024-03-14", status: "Paid", paymentMethod: "Bank Transfer" },
    { id: "INV-003", tenant: "Capital FX", plan: "Basic", amount: "$99.00", date: "2024-02-13", dueDate: "2024-03-13", status: "Pending", paymentMethod: "Credit Card" },
    { id: "INV-004", tenant: "Global Trading", plan: "Pro", amount: "$199.00", date: "2024-02-12", dueDate: "2024-03-12", status: "Paid", paymentMethod: "PayPal" },
    { id: "INV-005", tenant: "FX Solutions", plan: "Enterprise", amount: "$299.00", date: "2024-02-11", dueDate: "2024-03-11", status: "Overdue", paymentMethod: "Credit Card" },
    { id: "INV-006", tenant: "Prime Brokers", plan: "Pro", amount: "$199.00", date: "2024-02-10", dueDate: "2024-03-10", status: "Paid", paymentMethod: "Stripe" },
    { id: "INV-007", tenant: "Apex Trading", plan: "Basic", amount: "$99.00", date: "2024-02-09", dueDate: "2024-03-09", status: "Processing", paymentMethod: "Bank Transfer" },
    { id: "INV-008", tenant: "Elite FX", plan: "Enterprise", amount: "$299.00", date: "2024-02-08", dueDate: "2024-03-08", status: "Paid", paymentMethod: "Credit Card" }
  ];

  const columns = useMemo(() => [
    {
      name: 'Invoice',
      selector: row => row.id,
      sortable: true,
      cell: row => (
        <div>
          <p className="font-medium">{row.id}</p>
          <p className="text-gray-500 text-xs">{row.date}</p>
        </div>
      ),
      width: '130px'
    },
    {
      name: 'Tenant',
      selector: row => row.tenant,
      sortable: true,
      width: '180px'
    },
    {
      name: 'Plan',
      selector: row => row.plan,
      sortable: true,
      cell: row => (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          row.plan === "Enterprise" ? "bg-purple-100 text-purple-800" :
          row.plan === "Pro" ? "bg-blue-100 text-blue-800" :
          "bg-gray-100 text-gray-800"
        }`}>
          {row.plan}
        </span>
      ),
      width: '120px'
    },
    {
      name: 'Amount',
      selector: row => row.amount,
      sortable: true,
      cell: row => <span className="font-bold">{row.amount}</span>,
      width: '110px'
    },
    {
      name: 'Due Date',
      selector: row => row.dueDate,
      sortable: true,
      cell: row => <span className="text-gray-500">{row.dueDate}</span>,
      width: '120px'
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      cell: row => (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          row.status === "Paid" ? "bg-green-100 text-green-800" :
          row.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
          row.status === "Processing" ? "bg-blue-100 text-blue-800" :
          "bg-red-100 text-red-800"
        }`}>
          {row.status}
        </span>
      ),
      width: '120px'
    },
    {
      name: 'Payment Method',
      selector: row => row.paymentMethod,
      sortable: true,
      cell: row => <span className="text-gray-500">{row.paymentMethod}</span>,
      width: '150px'
    },
    {
      name: 'Actions',
      cell: row => (
        <div className="flex gap-2">
          <button className="text-blue-600">View</button>
          <button className="text-green-600">Download</button>
          {row.status === "Overdue" && <button className="text-red-600">Remind</button>}
          {row.status === "Pending" && <button className="text-yellow-600">Follow Up</button>}
        </div>
      ),
      width: '200px'
    }
  ], []);

  const filteredItems = invoices.filter(item => {
    const matchesSearch = item.id.toLowerCase().includes(filterText.toLowerCase()) ||
                          item.tenant.toLowerCase().includes(filterText.toLowerCase());
    const matchesStatus = statusFilter === 'All Status' || item.status === statusFilter;
    const matchesPlan = planFilter === 'All Plans' || item.plan === planFilter;
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#f9fafb',
        borderBottom: '1px solid #e5e7eb',
        minHeight: '48px'
      }
    },
    headCells: {
      style: {
        fontSize: '12px',
        fontWeight: '600',
        textTransform: 'uppercase',
        color: '#6b7280',
        paddingLeft: '16px',
        paddingRight: '16px'
      }
    },
    cells: {
      style: {
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingTop: '12px',
        paddingBottom: '12px'
      }
    },
    rows: {
      style: {
        '&:hover': {
          backgroundColor: '#f9fafb'
        }
      }
    }
  };

  const originalInvoices = [
    { id: "INV-001", tenant: "Forex Pro Ltd", plan: "Enterprise", amount: "$299.00", date: "2024-02-15", dueDate: "2024-03-15", status: "Paid", paymentMethod: "Credit Card" },
    { id: "INV-002", tenant: "Trade Masters", plan: "Pro", amount: "$199.00", date: "2024-02-14", dueDate: "2024-03-14", status: "Paid", paymentMethod: "Bank Transfer" },
    { id: "INV-003", tenant: "Capital FX", plan: "Basic", amount: "$99.00", date: "2024-02-13", dueDate: "2024-03-13", status: "Pending", paymentMethod: "Credit Card" },
    { id: "INV-004", tenant: "Global Trading", plan: "Pro", amount: "$199.00", date: "2024-02-12", dueDate: "2024-03-12", status: "Paid", paymentMethod: "PayPal" },
    { id: "INV-005", tenant: "FX Solutions", plan: "Enterprise", amount: "$299.00", date: "2024-02-11", dueDate: "2024-03-11", status: "Overdue", paymentMethod: "Credit Card" },
    { id: "INV-006", tenant: "Prime Brokers", plan: "Pro", amount: "$199.00", date: "2024-02-10", dueDate: "2024-03-10", status: "Paid", paymentMethod: "Stripe" },
    { id: "INV-007", tenant: "Apex Trading", plan: "Basic", amount: "$99.00", date: "2024-02-09", dueDate: "2024-03-09", status: "Processing", paymentMethod: "Bank Transfer" },
    { id: "INV-008", tenant: "Elite FX", plan: "Enterprise", amount: "$299.00", date: "2024-02-08", dueDate: "2024-03-08", status: "Paid", paymentMethod: "Credit Card" }
  ];

  const billingStats = [
    { label: "Total Revenue", value: "$45,230", change: "+12%", icon: "💰" },
    { label: "Outstanding", value: "$2,890", change: "+5%", icon: "⏳" },
    { label: "Overdue", value: "$599", change: "-8%", icon: "⚠️" },
    { label: "Collection Rate", value: "94.2%", change: "+2%", icon: "📈" }
  ];

  const revenueByPlan = [
    { plan: "Enterprise", revenue: "$23,920", percentage: 53 },
    { plan: "Pro", revenue: "$15,960", percentage: 35 },
    { plan: "Basic", revenue: "$5,350", percentage: 12 }
  ];

  return (
    <div className="w-[350px] sm:w-full max-w-[2800px] p-2 mx-auto sm:p-6 space-y-6">

      {/* Header */}
      <div className="w-full max-w-[1800px] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Billing & Revenue Management</h1>
          <p className="text-gray-600 text-sm">Track payments, invoices, and revenue analytics</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm w-full sm:w-auto">Generate Invoice</button>
          <button className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm w-full sm:w-auto">Export Report</button>
          <button className="bg-gray-600 text-white px-3 py-2 rounded-lg text-sm w-full sm:w-auto">Payment Settings</button>
        </div>
      </div>

      {/* Billing Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {billingStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${
                  stat.change.startsWith("+") ? "text-green-600"
                  : stat.change.startsWith("-") && stat.label === "Overdue" ? "text-green-600"
                  : "text-red-600"
                }`}>
                  {stat.change} this month
                </p>
              </div>
              <div className="text-3xl">{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue by Plan</h3>

          <div className="space-y-4">
            {revenueByPlan.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                
                {/* Left side */}
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded ${
                    item.plan === "Enterprise" ? "bg-purple-500" :
                    item.plan === "Pro" ? "bg-blue-500" : "bg-gray-500"
                  }`} />
                  <span className="font-medium">{item.plan}</span>
                </div>

                {/* Progress Bar + Revenue */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="flex-1 sm:w-32 bg-gray-200 h-2 rounded-full">
                    <div
                      className={`h-2 rounded-full ${
                        item.plan === "Enterprise" ? "bg-purple-500"
                        : item.plan === "Pro" ? "bg-blue-500"
                        : "bg-gray-500"
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <span className="font-bold">{item.revenue}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full p-3 bg-blue-50 rounded-lg hover:bg-blue-100 text-left">
              <div className="font-medium text-blue-900">Send Payment Reminders</div>
              <div className="text-sm text-blue-600">3 overdue invoices</div>
            </button>
            <button className="w-full p-3 bg-green-50 rounded-lg hover:bg-green-100 text-left">
              <div className="font-medium text-green-900">Process Refunds</div>
              <div className="text-sm text-green-600">2 pending requests</div>
            </button>
            <button className="w-full p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 text-left">
              <div className="font-medium text-yellow-900">Update Payment Methods</div>
              <div className="text-sm text-yellow-600">5 cards expiring soon</div>
            </button>
          </div>
        </div>

      </div>

      {/* Recent Invoices with DataTable */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-4 border-b flex flex-wrap justify-between items-center gap-3">
          <h3 className="text-lg font-semibold">Recent Invoices</h3>
          <div className="flex gap-2">
            <button className="text-blue-600 text-sm">Export CSV</button>
            <button className="text-blue-600 text-sm">Print</button>
          </div>
        </div>

        <div className="p-4 border-b">
          <div className="flex flex-col sm:flex-row gap-3">
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full sm:w-auto"
            >
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Overdue</option>
              <option>Processing</option>
            </select>

            <select 
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full sm:w-auto"
            >
              <option>All Plans</option>
              <option>Basic</option>
              <option>Pro</option>
              <option>Enterprise</option>
            </select>

            <input
              type="text"
              placeholder="Search invoices..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="border rounded-lg px-3 py-2 flex-1 min-w-[200px]"
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          highlightOnHover
          responsive
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default Billing;
