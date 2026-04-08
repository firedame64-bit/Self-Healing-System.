import { useNavigate } from "react-router";
import { AlertCircle, Brain, Clock, TrendingDown, Code2, Activity } from "lucide-react";
import { motion } from "motion/react";

export default function Incidents() {
  const navigate = useNavigate();

  const incident = {
    id: "INC-2024-0047",
    service: "Payment API",
    severity: "critical",
    detectedAt: "2026-03-27 14:23:45 UTC",
    status: "Analyzing",
  };

  const timeline = [
    { time: "14:23:45", event: "Error rate spike detected", status: "detected" },
    { time: "14:23:48", event: "AI analysis initiated", status: "analyzing" },
    { time: "14:24:12", event: "Root cause identified", status: "identified" },
    { time: "14:24:30", event: "Generating fix proposal", status: "generating" },
  ];

  const errorLog = `[2026-03-27 14:23:45] ERROR: Connection pool exhausted
[2026-03-27 14:23:45] at DatabaseConnection.getConnection()
[2026-03-27 14:23:45] at PaymentService.processTransaction()
[2026-03-27 14:23:45] Caused by: java.sql.SQLException: Timeout waiting for connection
[2026-03-27 14:23:46] Connection attempts: 347 failed in last 60 seconds
[2026-03-27 14:23:46] Pool size: 50, Active: 50, Idle: 0`;

  const stackTrace = [
    {
      file: "PaymentService.java",
      line: 145,
      method: "processTransaction()",
      highlight: true,
    },
    { file: "DatabaseConnection.java", line: 89, method: "getConnection()", highlight: true },
    { file: "ConnectionPool.java", line: 234, method: "acquire()", highlight: false },
    { file: "PoolManager.java", line: 67, method: "allocate()", highlight: false },
  ];

  const codeSnippet = `public Transaction processTransaction(Payment payment) {
    Connection conn = null;
    try {
        // ISSUE: No connection timeout configured
        conn = dbPool.getConnection();
        
        PreparedStatement stmt = conn.prepareStatement(
            "INSERT INTO transactions VALUES (?, ?, ?)"
        );
        stmt.setString(1, payment.getId());
        stmt.setDouble(2, payment.getAmount());
        stmt.setTimestamp(3, new Timestamp(System.currentTimeMillis()));
        
        stmt.executeUpdate();
        return new Transaction(payment);
    } catch (SQLException e) {
        throw new RuntimeException("Transaction failed", e);
    } finally {
        // ISSUE: Connection not properly returned to pool
        if (conn != null) conn.close();
    }
}`;

  const aiAnalysis = {
    rootCause: "Database connection pool exhaustion due to missing timeout configuration and improper connection handling",
    confidence: 96,
    impact: "High",
    recommendations: [
      "Add connection timeout parameter (recommended: 5000ms)",
      "Implement proper connection release in finally block",
      "Increase pool size from 50 to 100 connections",
      "Add connection retry logic with exponential backoff",
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {incident.id}
            </h1>
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-red-500/20 text-red-400 border border-red-500/30">
              {incident.severity}
            </span>
          </div>
          <p className="text-slate-400">{incident.service}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-400">Detected</div>
          <div className="font-semibold">{incident.detectedAt}</div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-cyan-400" />
          Incident Timeline
        </h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-6"
              >
                <div className="relative z-10 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="flex-1 bg-slate-800/40 border border-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{item.event}</div>
                    <div className="text-sm text-slate-400">{item.time}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Error Logs & Stack Trace */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Error Logs */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-400" />
            Error Logs
          </h3>
          <div className="bg-slate-950/60 border border-white/5 rounded-lg p-4 font-mono text-xs overflow-x-auto">
            <pre className="text-red-400 whitespace-pre-wrap">{errorLog}</pre>
          </div>
        </div>

        {/* Stack Trace */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-400" />
            Stack Trace
          </h3>
          <div className="space-y-2">
            {stackTrace.map((trace, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${
                  trace.highlight
                    ? "bg-red-500/10 border-red-500/30"
                    : "bg-slate-800/40 border-white/5"
                }`}
              >
                <div className="font-mono text-xs text-slate-300">{trace.file}</div>
                <div className="font-mono text-xs text-slate-400">
                  Line {trace.line}: {trace.method}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Snippet */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-cyan-400" />
          Problem Code
        </h3>
        <div className="bg-slate-950/60 border border-white/5 rounded-lg p-4 font-mono text-xs overflow-x-auto">
          <pre className="text-slate-300">{codeSnippet}</pre>
        </div>
      </div>

      {/* AI Analysis */}
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-400" />
            AI Analysis
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-400">Confidence:</span>
            <span className="text-2xl font-bold text-green-400">{aiAnalysis.confidence}%</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-sm text-slate-400 mb-2">Root Cause</div>
            <div className="bg-slate-900/40 border border-white/10 rounded-lg p-4">
              <p className="text-slate-200">{aiAnalysis.rootCause}</p>
            </div>
          </div>

          <div>
            <div className="text-sm text-slate-400 mb-2">Impact Level</div>
            <div className="flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-400" />
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">
                {aiAnalysis.impact}
              </span>
            </div>
          </div>

          <div>
            <div className="text-sm text-slate-400 mb-2">AI Recommendations</div>
            <div className="space-y-2">
              {aiAnalysis.recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="bg-slate-900/40 border border-white/10 rounded-lg p-3 flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-300 text-sm">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/dashboard/ai-fix")}
          className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2"
        >
          <Brain className="w-5 h-5" />
          Generate Fix
        </button>
      </div>
    </div>
  );
}
