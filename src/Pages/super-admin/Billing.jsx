const Billing = () => {
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

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex flex-wrap gap-3">
          <select className="border rounded-lg px-3 py-2 w-full sm:w-auto">
            <option>All Status</option>
            <option>Paid</option>
            <option>Pending</option>
            <option>Overdue</option>
            <option>Processing</option>
          </select>

          <select className="border rounded-lg px-3 py-2 w-full sm:w-auto">
            <option>All Plans</option>
            <option>Basic</option>
            <option>Pro</option>
            <option>Enterprise</option>
          </select>

          <input type="date" className="border rounded-lg px-3 py-2 w-full sm:w-auto" />

          <input
            type="text"
            placeholder="Search invoices..."
            className="border rounded-lg px-3 py-2 flex-1 min-w-[200px]"
          />

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
            Filter
          </button>
        </div>
      </div>

      {/* Recent Invoices */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        
        {/* Table Header */}
        <div className="p-4 border-b flex flex-wrap justify-between items-center gap-3">
          <h3 className="text-lg font-semibold">Recent Invoices</h3>
          <div className="flex gap-2">
            <button className="text-blue-600 text-sm">Export CSV</button>
            <button className="text-blue-600 text-sm">Print</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[800px] w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Invoice</th>
                <th className="px-4 py-3 text-left">Tenant</th>
                <th className="px-4 py-3 text-left">Plan</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Due Date</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Payment Method</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <p className="font-medium">{invoice.id}</p>
                    <p className="text-gray-500 text-xs">{invoice.date}</p>
                  </td>

                  <td className="px-4 py-3">{invoice.tenant}</td>

                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      invoice.plan === "Enterprise"
                        ? "bg-purple-100 text-purple-800"
                        : invoice.plan === "Pro"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {invoice.plan}
                    </span>
                  </td>

                  <td className="px-4 py-3 font-bold">{invoice.amount}</td>

                  <td className="px-4 py-3 text-gray-500">{invoice.dueDate}</td>

                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : invoice.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : invoice.status === "Processing"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {invoice.status}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-gray-500">{invoice.paymentMethod}</td>

                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="text-blue-600">View</button>
                      <button className="text-green-600">Download</button>

                      {invoice.status === "Overdue" && (
                        <button className="text-red-600">Remind</button>
                      )}

                      {invoice.status === "Pending" && (
                        <button className="text-yellow-600">Follow Up</button>
                      )}
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold">1</span> – <span className="font-semibold">8</span> of <span className="font-semibold">45</span>
          </p>

          <div className="flex gap-1">
            <button className="px-3 py-2 border rounded-md bg-white">Prev</button>
            <button className="px-3 py-2 border rounded-md bg-blue-50 text-blue-600">1</button>
            <button className="px-3 py-2 border rounded-md bg-white">2</button>
            <button className="px-3 py-2 border rounded-md bg-white">3</button>
            <button className="px-3 py-2 border rounded-md bg-white">Next</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Billing;
