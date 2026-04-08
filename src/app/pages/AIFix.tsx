import { useNavigate } from "react-router";
import { Brain, CheckCircle2, AlertTriangle, Code2, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function AIFix() {
  const navigate = useNavigate();

  const originalCode = `public Transaction processTransaction(Payment payment) {
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

  const fixedCode = `public Transaction processTransaction(Payment payment) {
    Connection conn = null;
    try {
        // FIX: Added 5-second connection timeout
        conn = dbPool.getConnection(5000);
        
        PreparedStatement stmt = conn.prepareStatement(
            "INSERT INTO transactions VALUES (?, ?, ?)"
        );
        stmt.setString(1, payment.getId());
        stmt.setDouble(2, payment.getAmount());
        stmt.setTimestamp(3, new Timestamp(System.currentTimeMillis()));
        
        stmt.executeUpdate();
        conn.commit(); // FIX: Explicit commit
        return new Transaction(payment);
    } catch (SQLException e) {
        if (conn != null) {
            try {
                conn.rollback(); // FIX: Rollback on error
            } catch (SQLException rollbackEx) {
                logger.error("Rollback failed", rollbackEx);
            }
        }
        throw new RuntimeException("Transaction failed", e);
    } finally {
        // FIX: Proper connection release using try-catch
        if (conn != null) {
            try {
                dbPool.releaseConnection(conn);
            } catch (SQLException closeEx) {
                logger.error("Connection release failed", closeEx);
            }
        }
    }
}`;

  const metrics = {
    riskLevel: "Low",
    testCoverage: 94,
    aiConfidence: 98,
    estimatedImpact: "Resolves connection pool exhaustion",
  };

  const changes = [
    { type: "add", description: "Added 5-second connection timeout parameter" },
    { type: "add", description: "Explicit transaction commit on success" },
    { type: "add", description: "Rollback mechanism on SQL exceptions" },
    { type: "add", description: "Proper connection release with error handling" },
    { type: "add", description: "Comprehensive error logging" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent flex items-center gap-3">
            <Brain className="w-8 h-8 text-purple-400" />
            AI-Generated Fix
          </h1>
          <p className="text-slate-400 mt-1">Incident: INC-2024-0047 - Payment API Connection Pool</p>
        </div>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span className="text-sm font-semibold">AI Analyzing</span>
        </motion.div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="text-sm text-slate-400 mb-2">Risk Level</div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-2xl font-bold text-green-400">{metrics.riskLevel}</span>
          </div>
        </div>
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="text-sm text-slate-400 mb-2">Test Coverage</div>
          <div className="text-2xl font-bold text-cyan-400">{metrics.testCoverage}%</div>
          <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
              style={{ width: `${metrics.testCoverage}%` }}
            />
          </div>
        </div>
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="text-sm text-slate-400 mb-2">AI Confidence</div>
          <div className="text-2xl font-bold text-purple-400">{metrics.aiConfidence}%</div>
          <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-600"
              style={{ width: `${metrics.aiConfidence}%` }}
            />
          </div>
        </div>
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <CheckCircle2 className="w-8 h-8 text-green-400 mb-2" />
          <div className="text-sm text-slate-400">Impact</div>
          <div className="text-sm font-semibold mt-1">{metrics.estimatedImpact}</div>
        </div>
      </div>

      {/* Code Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Original Code */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Code2 className="w-5 h-5 text-red-400" />
              Original Code
            </h3>
            <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">Problematic</span>
          </div>
          <div className="bg-slate-950/60 border border-white/5 rounded-lg p-4 font-mono text-xs overflow-x-auto max-h-96 overflow-y-auto">
            <pre className="text-slate-300 whitespace-pre-wrap">{originalCode}</pre>
          </div>
        </div>

        {/* AI Suggested Patch */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 ring-2 ring-cyan-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400" />
              AI Suggested Patch
            </h3>
            <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Improved</span>
          </div>
          <div className="bg-slate-950/60 border border-cyan-500/20 rounded-lg p-4 font-mono text-xs overflow-x-auto max-h-96 overflow-y-auto">
            <pre className="text-slate-300 whitespace-pre-wrap">{fixedCode}</pre>
          </div>
        </div>
      </div>

      {/* Changes Summary */}
      <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-cyan-400" />
          Changes Applied
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {changes.map((change, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 bg-slate-900/40 border border-white/10 rounded-lg p-4"
            >
              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-300">{change.description}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Code Diff View */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Unified Diff</h3>
        <div className="bg-slate-950/60 border border-white/5 rounded-lg p-4 font-mono text-xs overflow-x-auto">
          <pre className="whitespace-pre-wrap">
            <span className="text-slate-500">{'@@ -1,20 +1,35 @@'}</span>
            {"\n"}
            <span className="text-slate-400">{' public Transaction processTransaction(Payment payment) {'}</span>
            {"\n"}
            <span className="text-slate-400">{'     Connection conn = null;'}</span>
            {"\n"}
            <span className="text-slate-400">{'     try {'}</span>
            {"\n"}
            <span className="text-red-400">{'-        // ISSUE: No connection timeout configured'}</span>
            {"\n"}
            <span className="text-red-400">{'-        conn = dbPool.getConnection();'}</span>
            {"\n"}
            <span className="text-green-400">{'+        // FIX: Added 5-second connection timeout'}</span>
            {"\n"}
            <span className="text-green-400">{'+        conn = dbPool.getConnection(5000);'}</span>
            {"\n"}
            <span className="text-slate-400">{'         '}</span>
            {"\n"}
            <span className="text-slate-400">{'         PreparedStatement stmt = conn.prepareStatement('}</span>
            {"\n"}
            <span className="text-slate-400">{'             "INSERT INTO transactions VALUES (?, ?, ?)"'}</span>
            {"\n"}
            <span className="text-slate-400">{'         );'}</span>
            {"\n"}
            <span className="text-green-400">{'+        conn.commit(); // FIX: Explicit commit'}</span>
            {"\n"}
            <span className="text-slate-400">{'         return new Transaction(payment);'}</span>
            {"\n"}
            <span className="text-slate-400">{'     } catch (SQLException e) {'}</span>
            {"\n"}
            <span className="text-green-400">{'+        if (conn != null) {'}</span>
            {"\n"}
            <span className="text-green-400">{'+            try {'}</span>
            {"\n"}
            <span className="text-green-400">{'+                conn.rollback(); // FIX: Rollback on error'}</span>
            {"\n"}
            <span className="text-green-400">{'+            } catch (SQLException rollbackEx) {'}</span>
            {"\n"}
            <span className="text-green-400">{'+                logger.error("Rollback failed", rollbackEx);'}</span>
            {"\n"}
            <span className="text-green-400">{'+            }'}</span>
            {"\n"}
            <span className="text-green-400">{'+        }'}</span>
            {"\n"}
            <span className="text-slate-400">{'         throw new RuntimeException("Transaction failed", e);'}</span>
            {"\n"}
            <span className="text-slate-400">{'     } finally {'}</span>
            {"\n"}
            <span className="text-red-400">{'-        // ISSUE: Connection not properly returned to pool'}</span>
            {"\n"}
            <span className="text-red-400">{'-        if (conn != null) conn.close();'}</span>
            {"\n"}
            <span className="text-green-400">{'+        // FIX: Proper connection release using try-catch'}</span>
            {"\n"}
            <span className="text-green-400">{'+        if (conn != null) {'}</span>
            {"\n"}
            <span className="text-green-400">{'+            try {'}</span>
            {"\n"}
            <span className="text-green-400">{'+                dbPool.releaseConnection(conn);'}</span>
            {"\n"}
            <span className="text-green-400">{'+            } catch (SQLException closeEx) {'}</span>
            {"\n"}
            <span className="text-green-400">{'+                logger.error("Connection release failed", closeEx);'}</span>
            {"\n"}
            <span className="text-green-400">{'+            }'}</span>
            {"\n"}
            <span className="text-green-400">{'+        }'}</span>
            {"\n"}
            <span className="text-slate-400">{'     }'}</span>
            {"\n"}
            <span className="text-slate-400">{' }'}</span>
          </pre>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/dashboard/testing")}
          className="flex-1 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:opacity-90 transition-opacity font-semibold flex items-center justify-center gap-2"
        >
          <CheckCircle2 className="w-5 h-5" />
          Test Fix in Sandbox
        </button>
        <button className="px-6 py-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors font-semibold">
          Request Another Fix
        </button>
        <button className="px-6 py-4 bg-purple-500/20 border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-colors font-semibold">
          <AlertTriangle className="w-5 h-5 inline mr-2" />
          Review Details
        </button>
      </div>
    </div>
  );
}