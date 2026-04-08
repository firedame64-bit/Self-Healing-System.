import { useNavigate } from "react-router";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Clock,
  Eye,
  Shield,
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Applications() {
  const navigate = useNavigate();

  const applications = [
    {
      id: 1,
      name: "Auth Service",
      status: "healthy",
      cpu: 45,
      memory: 62,
      errorRate: 0.1,
      uptime: 99.9,
      requests: "1.2M/day",
    },
    {
      id: 2,
      name: "Payment API",
      status: "warning",
      cpu: 78,
      memory: 85,
      errorRate: 2.3,
      uptime: 99.5,
      requests: "850K/day",
    },
    {
      id: 3,
      name: "User Database",
      status: "healthy",
      cpu: 34,
      memory: 48,
      errorRate: 0.05,
      uptime: 99.99,
      requests: "2.1M/day",
    },
    {
      id: 4,
      name: "Media Service",
      status: "critical",
      cpu: 92,
      memory: 94,
      errorRate: 5.7,
      uptime: 98.2,
      requests: "540K/day",
    },
    {
      id: 5,
      name: "Notification Service",
      status: "healthy",
      cpu: 28,
      memory: 41,
      errorRate: 0.2,
      uptime: 99.8,
      requests: "3.4M/day",
    },
    {
      id: 6,
      name: "Analytics Engine",
      status: "warning",
      cpu: 67,
      memory: 73,
      errorRate: 1.8,
      uptime: 99.4,
      requests: "670K/day",
    },
  ];

  const cpuData = [
    { time: "00:00", value: 45 },
    { time: "04:00", value: 52 },
    { time: "08:00", value: 68 },
    { time: "12:00", value: 75 },
    { time: "16:00", value: 62 },
    { time: "20:00", value: 48 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "from-green-500 to-emerald-600";
      case "warning":
        return "from-yellow-500 to-orange-600";
      case "critical":
        return "from-red-500 to-pink-600";
      default:
        return "from-slate-500 to-slate-600";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-500/20 text-green-400";
      case "warning":
        return "bg-yellow-500/20 text-yellow-400";
      case "critical":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-slate-500/20 text-slate-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Application Monitoring
          </h1>
          <p className="text-slate-400 mt-1">Real-time health and performance tracking</p>
        </div>
        <button 
          onClick={() => navigate("/dashboard/add-code")}
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:opacity-90 transition-opacity"
        >
          + Add Application
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <CheckCircle2 className="w-8 h-8 text-green-400 mb-3" />
          <div className="text-2xl font-bold">4</div>
          <div className="text-sm text-slate-400">Healthy Services</div>
        </div>
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <AlertTriangle className="w-8 h-8 text-yellow-400 mb-3" />
          <div className="text-2xl font-bold">2</div>
          <div className="text-sm text-slate-400">Warnings</div>
        </div>
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <Activity className="w-8 h-8 text-cyan-400 mb-3" />
          <div className="text-2xl font-bold">8.75M</div>
          <div className="text-sm text-slate-400">Total Requests</div>
        </div>
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
          <div className="text-2xl font-bold">99.5%</div>
          <div className="text-sm text-slate-400">Avg Uptime</div>
        </div>
      </div>

      {/* Applications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{app.name}</h3>
                <p className="text-sm text-slate-400">{app.requests}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${getStatusBadge(
                  app.status
                )}`}
              >
                {app.status}
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-slate-400 mb-1">CPU Usage</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getStatusColor(app.status)}`}
                      style={{ width: `${app.cpu}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold">{app.cpu}%</span>
                </div>
              </div>
              <div>
                <div className="text-sm text-slate-400 mb-1">Memory</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getStatusColor(app.status)}`}
                      style={{ width: `${app.memory}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold">{app.memory}%</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4 text-sm">
              <div className="flex items-center gap-1">
                <AlertTriangle className="w-4 h-4 text-orange-400" />
                <span className="text-slate-400">Error Rate:</span>
                <span className="font-semibold">{app.errorRate}%</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-slate-400">Uptime:</span>
                <span className="font-semibold">{app.uptime}%</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => navigate("/dashboard/incidents")}
                className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-sm"
              >
                <Eye className="w-4 h-4 inline mr-2" />
                View Logs
              </button>
              <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 hover:border-cyan-500/50 rounded-lg transition-colors text-sm">
                <Shield className="w-4 h-4 inline mr-2" />
                Self-Healing
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CPU Usage Chart */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Average CPU Usage (24h)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={cpuData}>
            <defs>
              <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#colorCpu)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}