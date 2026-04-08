import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { TestTube2, CheckCircle2, XCircle, Clock, Play, Container, FileCode } from "lucide-react";
import { motion } from "motion/react";

export default function Testing() {
  const navigate = useNavigate();
  const [testProgress, setTestProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { name: "Initializing Sandbox", status: "complete" },
    { name: "Starting Containers", status: "complete" },
    { name: "Deploying Patch", status: "complete" },
    { name: "Running Unit Tests", status: "running" },
    { name: "Integration Tests", status: "pending" },
    { name: "Load Testing", status: "pending" },
  ];

  const testResults = [
    { suite: "Unit Tests", total: 247, passed: 247, failed: 0, duration: "12.4s" },
    { suite: "Integration Tests", total: 89, passed: 87, failed: 0, duration: "34.2s", running: 2 },
    { suite: "Performance Tests", total: 15, passed: 0, failed: 0, duration: "0s", pending: 15 },
  ];

  const logs = [
    { time: "14:25:01", level: "info", message: "Sandbox environment initialized" },
    { time: "14:25:03", level: "info", message: "Docker containers started successfully" },
    { time: "14:25:05", level: "info", message: "Deploying patched code to sandbox" },
    { time: "14:25:08", level: "success", message: "Patch deployed successfully" },
    { time: "14:25:10", level: "info", message: "Starting test suite execution" },
    { time: "14:25:12", level: "success", message: "Unit tests: 247/247 passed" },
    { time: "14:25:14", level: "info", message: "Running integration tests..." },
    { time: "14:25:18", level: "info", message: "Database connection pool test: PASSED" },
    { time: "14:25:22", level: "info", message: "Transaction rollback test: PASSED" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
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
            <TestTube2 className="w-8 h-8 text-cyan-400" />
            Sandbox Testing Environment
          </h1>
          <p className="text-slate-400 mt-1">Testing AI-generated fix in isolated environment</p>
        </div>
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg"
        >
          <Play className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-semibold">Tests Running</span>
        </motion.div>
      </div>

      {/* Overall Progress */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Overall Progress</h3>
          <span className="text-3xl font-bold text-cyan-400">{testProgress}%</span>
        </div>
        <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${testProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Phases */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Testing Phases</h3>
        <div className="space-y-3">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-4 p-4 rounded-lg border ${
                phase.status === "complete"
                  ? "bg-green-500/10 border-green-500/30"
                  : phase.status === "running"
                  ? "bg-blue-500/10 border-blue-500/30"
                  : "bg-slate-800/40 border-white/5"
              }`}
            >
              {phase.status === "complete" ? (
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
              ) : phase.status === "running" ? (
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
                <div className="font-semibold">{phase.name}</div>
                <div className="text-xs text-slate-400 capitalize">{phase.status}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Test Results */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {testResults.map((result, index) => (
          <motion.div
            key={result.suite}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
          >
            <h4 className="font-bold mb-4">{result.suite}</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Total</span>
                <span className="font-semibold">{result.total}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Passed</span>
                <span className="font-semibold text-green-400 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  {result.passed}
                </span>
              </div>
              {result.failed > 0 && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Failed</span>
                  <span className="font-semibold text-red-400 flex items-center gap-1">
                    <XCircle className="w-4 h-4" />
                    {result.failed}
                  </span>
                </div>
              )}
              {result.running && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Running</span>
                  <span className="font-semibold text-blue-400 flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {result.running}
                  </span>
                </div>
              )}
              {result.pending && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Pending</span>
                  <span className="font-semibold text-slate-400">{result.pending}</span>
                </div>
              )}
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Duration</span>
                  <span className="font-semibold">{result.duration}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Test Coverage */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FileCode className="w-5 h-5 text-purple-400" />
          Code Coverage
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Statements", value: 94 },
            { label: "Branches", value: 88 },
            { label: "Functions", value: 96 },
            { label: "Lines", value: 93 },
          ].map((metric) => (
            <div key={metric.label} className="bg-slate-800/40 border border-white/5 rounded-lg p-4">
              <div className="text-sm text-slate-400 mb-2">{metric.label}</div>
              <div className="text-2xl font-bold mb-2">{metric.value}%</div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Container Status */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Container className="w-5 h-5 text-blue-400" />
          Container Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "app-sandbox", status: "running", cpu: "12%", memory: "256MB" },
            { name: "db-sandbox", status: "running", cpu: "8%", memory: "512MB" },
            { name: "cache-sandbox", status: "running", cpu: "4%", memory: "128MB" },
          ].map((container) => (
            <div
              key={container.name}
              className="bg-slate-800/40 border border-white/5 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold font-mono text-sm">{container.name}</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                  {container.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">CPU</span>
                  <span>{container.cpu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Memory</span>
                  <span>{container.memory}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Logs */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Live Test Logs</h3>
        <div className="bg-slate-950/60 border border-white/5 rounded-lg p-4 font-mono text-xs max-h-64 overflow-y-auto">
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`mb-1 ${
                log.level === "success"
                  ? "text-green-400"
                  : log.level === "error"
                  ? "text-red-400"
                  : "text-slate-400"
              }`}
            >
              <span className="text-slate-500">[{log.time}]</span>{" "}
              <span className="text-cyan-400">[{log.level.toUpperCase()}]</span> {log.message}
            </motion.div>
          ))}
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-blue-400"
          >
            <span className="text-slate-500">[14:25:25]</span>{" "}
            <span className="text-cyan-400">[INFO]</span> Running load tests...
          </motion.div>
        </div>
      </div>

      {/* Actions */}
      {testProgress >= 100 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-400" />
            <div>
              <h3 className="text-2xl font-bold text-green-400">All Tests Passed!</h3>
              <p className="text-slate-400">Fix is ready for deployment</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/dashboard/deployment")}
            className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Approve & Deploy to Production
          </button>
        </motion.div>
      )}
    </div>
  );
}
