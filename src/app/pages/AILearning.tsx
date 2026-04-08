import { Brain, TrendingUp, Zap, Target, Award, Clock } from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "motion/react";

export default function AILearning() {
  const learningData = [
    { month: "Jan", accuracy: 72, fixes: 45 },
    { month: "Feb", accuracy: 78, fixes: 67 },
    { month: "Mar", accuracy: 83, fixes: 89 },
    { month: "Apr", accuracy: 87, fixes: 112 },
    { month: "May", accuracy: 91, fixes: 134 },
    { month: "Jun", accuracy: 94, fixes: 147 },
  ];

  const recoveryTimeData = [
    { month: "Jan", time: 45 },
    { month: "Feb", time: 38 },
    { month: "Mar", time: 32 },
    { month: "Apr", time: 28 },
    { month: "May", time: 22 },
    { month: "Jun", time: 18 },
  ];

  const incidentTypeData = [
    { type: "Memory Leak", count: 34, resolved: 32 },
    { type: "Connection Pool", count: 28, resolved: 27 },
    { type: "Timeout", count: 45, resolved: 43 },
    { type: "Rate Limit", count: 19, resolved: 19 },
    { type: "Database Lock", count: 21, resolved: 20 },
  ];

  const stats = [
    {
      icon: Zap,
      label: "Total Bugs Fixed",
      value: "1,247",
      change: "+23%",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Target,
      label: "Success Rate",
      value: "96.8%",
      change: "+4.2%",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Clock,
      label: "Avg Recovery Time",
      value: "18 min",
      change: "-60%",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Award,
      label: "AI Accuracy",
      value: "94%",
      change: "+22%",
      color: "from-orange-500 to-red-600",
    },
  ];

  const recentLearnings = [
    {
      pattern: "Connection pool exhaustion under high load",
      occurrences: 12,
      successRate: 100,
      avgFix: "5 min",
    },
    {
      pattern: "Memory leak in worker threads",
      occurrences: 8,
      successRate: 98,
      avgFix: "8 min",
    },
    {
      pattern: "Database transaction deadlocks",
      occurrences: 15,
      successRate: 95,
      avgFix: "12 min",
    },
    {
      pattern: "Rate limit exceeded during peak hours",
      occurrences: 23,
      successRate: 100,
      avgFix: "3 min",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-400" />
          AI Learning System
        </h1>
        <p className="text-slate-400 mt-1">Continuous improvement through machine learning</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
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
            </motion.div>
          );
        })}
      </div>

      {/* Learning Curve & Success Rate */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Learning Curve */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            AI Accuracy Over Time
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={learningData}>
              <defs>
                <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" domain={[0, 100]} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="accuracy"
                stroke="#8b5cf6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorAccuracy)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bugs Fixed */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-400" />
            Bugs Fixed Per Month
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={learningData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="fixes" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recovery Time */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-400" />
          Average Time to Recovery
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={recoveryTimeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" label={{ value: "Minutes", angle: -90, position: "insideLeft" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="time"
              stroke="#a855f7"
              strokeWidth={3}
              dot={{ fill: "#a855f7", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Incident Type Analysis */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Incident Type Resolution Rate</h3>
        <div className="space-y-4">
          {incidentTypeData.map((incident, index) => {
            const successRate = ((incident.resolved / incident.count) * 100).toFixed(1);
            return (
              <motion.div
                key={incident.type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/40 border border-white/5 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-semibold">{incident.type}</div>
                    <div className="text-sm text-slate-400">
                      {incident.resolved}/{incident.count} resolved
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">{successRate}%</div>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${successRate}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Learned Patterns */}
      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Brain className="w-6 h-6 text-purple-400" />
          Recently Learned Patterns
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {recentLearnings.map((learning, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/40 border border-white/10 rounded-lg p-4"
            >
              <div className="font-semibold mb-3">{learning.pattern}</div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-slate-400 text-xs mb-1">Occurrences</div>
                  <div className="font-semibold text-cyan-400">{learning.occurrences}</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs mb-1">Success Rate</div>
                  <div className="font-semibold text-green-400">{learning.successRate}%</div>
                </div>
                <div>
                  <div className="text-slate-400 text-xs mb-1">Avg Fix Time</div>
                  <div className="font-semibold text-purple-400">{learning.avgFix}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Improvement Summary */}
      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">
        <h3 className="text-2xl font-bold mb-4">System Improvements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2">94%</div>
            <div className="text-slate-400">AI Accuracy</div>
            <div className="text-sm text-green-400 mt-1">↑ 22% since launch</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2">60%</div>
            <div className="text-slate-400">Faster Recovery</div>
            <div className="text-sm text-purple-400 mt-1">↓ From 45min to 18min</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-cyan-400 mb-2">1,247</div>
            <div className="text-slate-400">Total Fixes</div>
            <div className="text-sm text-cyan-400 mt-1">↑ Growing every day</div>
          </div>
        </div>
      </div>
    </div>
  );
}
