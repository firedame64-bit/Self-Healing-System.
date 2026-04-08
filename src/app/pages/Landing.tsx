import { useNavigate } from "react-router";
import {
  Activity,
  Brain,
  CheckCircle2,
  Code2,
  Zap,
  Shield,
  LineChart,
  Rocket,
  ArrowRight,
  Play,
} from "lucide-react";
import { motion } from "motion/react";

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Activity,
      title: "Autonomous Debugging",
      description: "AI-powered detection and analysis of issues in real-time",
    },
    {
      icon: LineChart,
      title: "Real-time Monitoring",
      description: "24/7 tracking of system health and performance metrics",
    },
    {
      icon: Shield,
      title: "Safe Sandbox Testing",
      description: "Isolated environment for testing fixes before deployment",
    },
    {
      icon: Rocket,
      title: "Automatic Deployments",
      description: "Seamless rollout of validated patches to production",
    },
  ];

  const steps = [
    { icon: Activity, title: "Monitoring", color: "from-cyan-500 to-blue-500" },
    { icon: Brain, title: "AI Analysis", color: "from-blue-500 to-purple-500" },
    { icon: Code2, title: "Patch", color: "from-purple-500 to-pink-500" },
    { icon: Zap, title: "Deployment", color: "from-pink-500 to-cyan-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              SelfHeal
            </span>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              AI Self-Healing Infrastructure
              <br />
              for Modern Applications
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Automatically detect, analyze, fix, test, and deploy bug fixes while you sleep.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => navigate("/dashboard")}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate("/dashboard/applications")}
                className="px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-colors"
              >
                <Play className="w-5 h-5" /> Watch Platform
              </button>
            </div>
          </motion.div>

          {/* Floating Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl" />
            <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg p-4 border border-white/5"
                  >
                    <div className="h-3 w-20 bg-cyan-500/20 rounded mb-3" />
                    <div className="h-8 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <div className="text-sm text-slate-400">Step {index + 1}</div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6">
                      <ArrowRight className="w-6 h-6 text-cyan-500/50" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-500/50 transition-colors"
                >
                  <Icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            System Architecture
          </h2>
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg p-6">
                  <Activity className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="font-bold mb-2">Monitoring Layer</h4>
                  <p className="text-sm text-slate-400">
                    Continuous tracking of all services
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-6">
                  <Brain className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-bold mb-2">AI Engine</h4>
                  <p className="text-sm text-slate-400">
                    Deep learning analysis and fix generation
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 animate-pulse">
                    <CheckCircle2 className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-lg font-bold text-cyan-400">Self-Healing Core</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-6">
                  <Shield className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="font-bold mb-2">Testing Sandbox</h4>
                  <p className="text-sm text-slate-400">
                    Safe isolated environment
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-500/20 to-cyan-600/20 border border-pink-500/30 rounded-lg p-6">
                  <Rocket className="w-8 h-8 text-pink-400 mb-3" />
                  <h4 className="font-bold mb-2">Deployment Pipeline</h4>
                  <p className="text-sm text-slate-400">
                    Automated rollout system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Start Healing Your Infrastructure Today
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of teams that never worry about downtime again
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:scale-105 transition-transform text-lg font-semibold"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2026 SelfHeal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}