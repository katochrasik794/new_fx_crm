const Plans = () => {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      description: "Perfect for small brokerages getting started",
      features: ["Up to 100 users", "Basic MT5 integration", "Email support", "Standard branding", "5GB storage", "Basic reporting"],
      limits: { users: 100, storage: "5GB", apiCalls: "10K/month" },
      subscribers: 8
    },
    {
      name: "Pro",
      price: "$199",
      description: "Ideal for growing businesses with advanced needs",
      features: ["Up to 500 users", "Advanced MT5 features", "Priority support", "Custom branding", "API access", "25GB storage", "Advanced analytics", "Multi-language support"],
      limits: { users: 500, storage: "25GB", apiCalls: "50K/month" },
      subscribers: 12
    },
    {
      name: "Enterprise",
      price: "$299",
      description: "Complete solution for large-scale operations",
      features: ["Unlimited users", "Full MT5 integration", "24/7 support", "White-label solution", "Custom features", "Unlimited storage", "Custom integrations", "Dedicated account manager", "SLA guarantee"],
      limits: { users: "Unlimited", storage: "Unlimited", apiCalls: "Unlimited" },
      subscribers: 4
    }
  ];

  const planStats = [
    { label: "Total Active Plans", value: "24", change: "+3" },
    { label: "Monthly Revenue", value: "$4,890", change: "+12%" },
    { label: "Average Revenue Per User", value: "$203.75", change: "+8%" },
    { label: "Churn Rate", value: "2.1%", change: "-0.5%" }
  ];

  return (
    <div className="w-[350px] sm:w-full max-w-[2800px] p-0 mx-auto sm:p-6 space-y-6">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Subscription Plans Management</h1>
          <p className="text-gray-600 text-sm">Manage pricing, features, and plan configurations</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Create New Plan</button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">Plan Analytics</button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {planStats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-4">
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className={`text-sm ${
              stat.change.startsWith("+") ? "text-green-600" :
              stat.label === "Churn Rate" ? "text-green-600" :
              "text-red-600"
            }`}>
              {stat.change} this month
            </p>
          </div>
        ))}
      </div>

      {/* PLANS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-xl shadow p-4 sm:p-6 border-2 ${
              plan.name === "Pro" ? "border-blue-500 relative" : "border-gray-200"
            }`}
          >
            {plan.name === "Pro" && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-blue-500 text-white text-xs px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            {/* PLAN HEADER */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{plan.description}</p>

              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 text-sm">/month</span>
              </div>

              <p className="text-xs text-gray-500">{plan.subscribers} active subscribers</p>
            </div>

            {/* LIMITS */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold mb-3">Plan Limits</h4>

              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Users:</span>
                  <span className="font-medium">{plan.limits.users}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Storage:</span>
                  <span className="font-medium">{plan.limits.storage}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">API Calls:</span>
                  <span className="font-medium">{plan.limits.apiCalls}</span>
                </div>
              </div>
            </div>

            {/* FEATURES LIST */}
            <ul className="space-y-2 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  <span className="text-sm text-gray-700">{f}</span>
                </li>
              ))}
            </ul>

            {/* BUTTONS */}
            <div className="space-y-3">
              <button className={`w-full py-3 rounded-xl font-semibold ${
                plan.name === "Pro"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}>
                Edit Plan Details
              </button>

              <div className="flex gap-2">
                <button className="flex-1 py-2 border rounded-lg hover:bg-gray-50 text-sm">
                  View Subscribers
                </button>

                <button className="flex-1 py-2 border rounded-lg hover:bg-gray-50 text-sm">
                  Clone Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* COMPARISON TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-4 border-b">
          <h3 className="font-semibold text-lg">Feature Comparison</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50 text-xs uppercase">
              <tr>
                <th className="px-6 py-3 text-left">Feature</th>
                <th className="px-6 py-3 text-center">Basic</th>
                <th className="px-6 py-3 text-center">Pro</th>
                <th className="px-6 py-3 text-center">Enterprise</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              <tr>
                <td className="px-6 py-4 font-medium">Max Users</td>
                <td className="px-6 py-4 text-center">100</td>
                <td className="px-6 py-4 text-center">500</td>
                <td className="px-6 py-4 text-center">Unlimited</td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium">MT5 Integration</td>
                <td className="px-6 py-4 text-center"><span className="text-yellow-500">Basic</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-500">Advanced</span></td>
                <td className="px-6 py-4 text-center"><span className="text-green-500">Full</span></td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium">Support Level</td>
                <td className="px-6 py-4 text-center">Email</td>
                <td className="px-6 py-4 text-center">Priority</td>
                <td className="px-6 py-4 text-center">24/7 Dedicated</td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium">Custom Branding</td>
                <td className="px-6 py-4 text-center text-red-500">✗</td>
                <td className="px-6 py-4 text-center text-green-500">✓</td>
                <td className="px-6 py-4 text-center text-green-500">✓</td>
              </tr>

              <tr>
                <td className="px-6 py-4 font-medium">API Access</td>
                <td className="px-6 py-4 text-center text-red-500">✗</td>
                <td className="px-6 py-4 text-center text-green-500">✓</td>
                <td className="px-6 py-4 text-center text-green-500">✓</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Plans;
