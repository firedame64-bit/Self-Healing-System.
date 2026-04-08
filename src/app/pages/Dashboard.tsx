import { Activity, AlertCircle, CheckCircle2, TrendingUp, Zap } from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const performanceData = [
    { time: "00:00", value: 65 },
    { time: "04:00", value: 72 },
    { time: "08:00", value: 85 },
    { time: "12:00", value: 78 },
    { time: "16:00", value: 90 },
    { time: "20:00", value: 82 },
    { time: "24:00", value: 88 },
  ];

  const errorData = [
    { time: "00:00", errors: 12 },
    { time: "04:00", errors: 8 },
    { time: "08:00", errors: 15 },
    { time: "12:00", errors: 5 },
    { time: "16:00", errors: 2 },
    { time: "20:00", errors: 3 },
    { time: "24:00", errors: 1 },
  ];

  const stats = [
    {
      icon: CheckCircle2,
      label: "Active Services",
      value: "24",
      change: "+2",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: AlertCircle,
      label: "Recent Incidents",
      value: "3",
      change: "-5",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Zap,
      label: "AI Fixes Deployed",
      value: "147",
      change: "+12",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: TrendingUp,
      label: "System Stability",
      value: "99.7%",
      change: "+0.3%",
      color: "from-green-500 to-emerald-600",
    },
  ];

  const recentIncidents = [
    {
      id: "INC-001",
      service: "Auth Service",
      status: "Fixed",
      time: "5 mins ago",
      severity: "high",
    },
    {
      id: "INC-002",
      service: "Payment API",
      status: "Analyzing",
      time: "12 mins ago",
      severity: "critical",
    },
    {
      id: "INC-003",
      service: "User Database",
      status: "Monitoring",
      time: "1 hour ago",
      severity: "medium",
    },
  ];

  const recentFixes = [
    { id: "FIX-045", description: "Memory leak in worker process", confidence: 98 },
    { id: "FIX-046", description: "Database connection timeout", confidence: 95 },
    { id: "FIX-047", description: "Rate limit exceeded handler", confidence: 92 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
          System Health Overview
        </h1>
        <p className="text-slate-400 mt-1">Real-time monitoring and AI healing status</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    stat.change.startsWith("+")
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-cyan-400" />
            System Performance
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="colorPerf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#06b6d4"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPerf)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Error Rate Chart */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-400" />
            Error Rate
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={errorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="time" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                }}
              />
              <Line
                type="monotone"
                dataKey="errors"
                stroke="#f97316"
                strokeWidth={2}
                dot={{ fill: "#f97316", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Incidents */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Recent Incidents</h3>
          <div className="space-y-3">
            {recentIncidents.map((incident) => (
              <div
                key={incident.id}
                className="bg-slate-800/40 border border-white/5 rounded-lg p-4 hover:border-white/10 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-semibold">{incident.id}</div>
                    <div className="text-sm text-slate-400">{incident.service}</div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      incident.severity === "critical"
                        ? "bg-red-500/20 text-red-400"
                        : incident.severity === "high"
                        ? "bg-orange-500/20 text-orange-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {incident.severity}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm ${
                      incident.status === "Fixed"
                        ? "text-green-400"
                        : incident.status === "Analyzing"
                        ? "text-blue-400"
                        : "text-slate-400"
                    }`}
                  >
                    {incident.status}
                  </span>
                  <span className="text-xs text-slate-500">{incident.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent AI Fixes */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Recent AI Fixes</h3>
          <div className="space-y-3">
            {recentFixes.map((fix) => (
              <div
                key={fix.id}
                className="bg-slate-800/40 border border-white/5 rounded-lg p-4 hover:border-white/10 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="font-semibold">{fix.id}</div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400">{fix.confidence}%</span>
                  </div>
                </div>
                <div className="text-sm text-slate-400">{fix.description}</div>
                <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    style={{ width: `${fix.confidence}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
