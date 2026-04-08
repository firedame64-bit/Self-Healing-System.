import { useState, useEffect } from "react";
import { Rocket, CheckCircle2, Clock, GitBranch, Users, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export default function Deployment() {
  const [deployProgress, setDeployProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  const stages = [
    { name: "Patch Created", progress: 100, status: "complete" },
    { name: "Tests Passed", progress: 100, status: "complete" },
    { name: "Canary Deployment (5%)", progress: 100, status: "complete" },
    { name: "Canary Monitoring", progress: 75, status: "running" },
    { name: "Production Rollout (50%)", progress: 0, status: "pending" },
    { name: "Full Production (100%)", progress: 0, status: "pending" },
  ];

  const deploymentMetrics = [
    { label: "Deploy Duration", value: "4m 23s", icon: Clock },
    { label: "Traffic Shifted", value: "5%", icon: TrendingUp },
    { label: "Error Rate", value: "0.02%", icon: CheckCircle2 },
    { label: "Users Affected", value: "2.4K", icon: Users },
  ];

  const rolloutPhases = [
    { phase: "Canary", percentage: 5, status: "active", duration: "5 mins" },
    { phase: "Progressive 1", percentage: 25, status: "pending", duration: "10 mins" },
    { phase: "Progressive 2", percentage: 50, status: "pending", duration: "15 mins" },
    { phase: "Progressive 3", percentage: 75, status: "pending", duration: "15 mins" },
    { phase: "Full Rollout", percentage: 100, status: "pending", duration: "20 mins" },
  ];

  const deploymentLogs = [
    { time: "14:30:01", event: "Deployment initiated", status: "info" },
    { time: "14:30:05", event: "Building container image", status: "info" },
    { time: "14:30:42", event: "Image pushed to registry", status: "success" },
    { time: "14:31:15", event: "Canary deployment started (5% traffic)", status: "info" },
    { time: "14:31:45", event: "Canary health check: PASSED", status: "success" },
    { time: "14:32:10", event: "Monitoring canary performance", status: "info" },
    { time: "14:32:45", event: "Canary error rate: 0.02% (Normal)", status: "success" },
    { time: "14:33:20", event: "Canary latency: -12ms (Improved)", status: "success" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDeployProgress((prev) => {
        if (prev >= 75) {
          clearInterval(interval);
          return 75;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent flex items-center gap-3">
            <Rocket className="w-8 h-8 text-purple-400" />
            Automated Deployment Pipeline
          </h1>
          <p className="text-slate-400 mt-1">Progressive rollout with canary analysis</p>
        </div>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg"
        >
          <Rocket className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-semibold">Deploying</span>
        </motion.div>
      </div>

      {/* Overall Progress */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Deployment Progress</h3>
          <span className="text-3xl font-bold text-purple-400">{deployProgress}%</span>
        </div>
        <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-600 to-cyan-600"
            initial={{ width: 0 }}
            animate={{ width: `${deployProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {deploymentMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
            >
              <Icon className="w-8 h-8 text-cyan-400 mb-3" />
              <div className="text-2xl font-bold mb-1">{metric.value}</div>
              <div className="text-sm text-slate-400">{metric.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Pipeline Stages */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <GitBranch className="w-5 h-5 text-cyan-400" />
          Pipeline Stages
        </h3>
        <div className="space-y-4">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-2">
                {stage.status === "complete" ? (
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                ) : stage.status === "running" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Clock className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  </motion.div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-slate-600 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">{stage.name}</span>
                    <span className="text-sm text-slate-400">{stage.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${
                        stage.status === "complete"
                          ? "bg-gradient-to-r from-green-500 to-emerald-600"
                          : stage.status === "running"
                          ? "bg-gradient-to-r from-blue-500 to-cyan-600"
                          : "bg-slate-600"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${stage.progress}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Traffic Rollout */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Traffic Rollout Plan</h3>
        <div className="space-y-3">
          {rolloutPhases.map((phase, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg border ${
                phase.status === "active"
                  ? "bg-blue-500/10 border-blue-500/30"
                  : phase.status === "complete"
                  ? "bg-green-500/10 border-green-500/30"
                  : "bg-slate-800/40 border-white/5"
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold ${
                    phase.status === "active"
                      ? "bg-blue-500/20 text-blue-400"
                      : phase.status === "complete"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-slate-700 text-slate-400"
                  }`}
                >
                  {phase.percentage}%
                </div>
                <div>
                  <div className="font-semibold">{phase.phase}</div>
                  <div className="text-sm text-slate-400">Duration: {phase.duration}</div>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                  phase.status === "active"
                    ? "bg-blue-500/20 text-blue-400"
                    : phase.status === "complete"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-slate-700 text-slate-400"
                }`}
              >
                {phase.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Canary Analysis */}
      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Canary Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/40 border border-white/10 rounded-lg p-4">
            <div className="text-sm text-slate-400 mb-2">Response Time</div>
            <div className="text-2xl font-bold text-green-400 mb-1">-12ms</div>
            <div className="text-xs text-green-400">↓ 8% faster than baseline</div>
          </div>
          <div className="bg-slate-900/40 border border-white/10 rounded-lg p-4">
            <div className="text-sm text-slate-400 mb-2">Error Rate</div>
            <div className="text-2xl font-bold text-green-400 mb-1">0.02%</div>
            <div className="text-xs text-green-400">↓ 85% reduction</div>
          </div>
          <div className="bg-slate-900/40 border border-white/10 rounded-lg p-4">
            <div className="text-sm text-slate-400 mb-2">CPU Usage</div>
            <div className="text-2xl font-bold text-green-400 mb-1">-5%</div>
            <div className="text-xs text-green-400">↓ More efficient</div>
          </div>
        </div>
        <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-green-400 mb-1">Canary Performing Well</div>
            <div className="text-sm text-slate-300">
              All metrics are within acceptable thresholds. Ready to proceed with progressive rollout.
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Logs */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Deployment Logs</h3>
        <div className="bg-slate-950/60 border border-white/5 rounded-lg p-4 font-mono text-xs max-h-64 overflow-y-auto">
          {deploymentLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`mb-1 ${
                log.status === "success"
                  ? "text-green-400"
                  : log.status === "error"
                  ? "text-red-400"
                  : "text-slate-400"
              }`}
            >
              <span className="text-slate-500">[{log.time}]</span>{" "}
              <span className="text-cyan-400">[{log.status.toUpperCase()}]</span> {log.event}
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-blue-400"
          >
            <span className="text-slate-500">[14:33:45]</span>{" "}
            <span className="text-cyan-400">[INFO]</span> Continuing canary monitoring...
          </motion.div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="flex-1 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:opacity-90 transition-opacity font-semibold">
          Continue Progressive Rollout
        </button>
        <button className="px-6 py-4 bg-red-500/20 border border-red-500/30 rounded-lg hover:border-red-500/50 transition-colors font-semibold">
          Rollback
        </button>
      </div>
    </div>
  );
}
