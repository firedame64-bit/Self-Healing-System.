# 🛡️ Self-Healing Cloud Platform

AI-powered infrastructure that automatically detects, fixes, and deploys solutions for application issues.
**An automated self-healing system that detects application crashes, intelligently analyzes root causes with AI, generates code patches, and safely deploys fixes — all in a closed loop.**

Built to demonstrate reliable, production-grade engineering with AI augmentation. Perfect for high-scale distributed systems where uptime matters.


### Getting Started

1. Open a terminal in the project root folder:
   - `C:\Users\Sir Dame\Music\Ai-Self-Healing-System`
2. Install dependencies:
   - `npm install`
3. Start the app:
   - `npm start`

> Note: `npm start` is configured in the project root `package.json`. Do not run `npm start` from inside `src`.

### How to Use

1. **Navigate to Applications Page**
   - Click "Applications" in the sidebar
   - Click "+ Add Application" button

2. **Choose Your Input Method**

   #### 📤 Upload from PC
   - Upload `.java`, `.py`, `.js`, `.ts`, `.go`, `.cs`, `.rb`, `.php`, `.rs`, `.kt` files
   - Supports multiple files
   - Drag & drop or click to browse

   #### 🐙 Import from GitHub
   - Enter your GitHub repository URL
   - Example: `https://github.com/username/repository`
   - Specify branch (default: `main`)
   - Optional: Add GitHub token for private repos

   #### 📝 Paste Code Directly
   - Paste your code into the text editor
   - Specify filename and language
   - Perfect for quick testing

   #### 🌐 Import from URL
   - Fetch code from any public URL
   - Supports GitHub raw URLs, GitLab, Bitbucket
   - Example: `https://raw.githubusercontent.com/user/repo/main/file.java`

3. **Configure Your Project**
   - Enter project name (e.g., "Payment Service")
   - Select programming language
   - Click "Start AI Analysis"

4. **What Happens Next**
   - ✅ Code is scanned for bugs and vulnerabilities
   - ✅ AI learns your code patterns
   - ✅ Continuous monitoring is enabled
   - ✅ You receive instant alerts for issues

---

## 🏗️ Project Structure

```
/src/app/
├── pages/
│   ├── Landing.tsx          # Marketing homepage
│   ├── Dashboard.tsx        # System overview
│   ├── Applications.tsx     # App monitoring
│   ├── CodeInput.tsx        # 🆕 Upload your code
│   ├── Incidents.tsx        # Issue detection
│   ├── AIFix.tsx           # AI-generated fixes
│   ├── Testing.tsx         # Sandbox testing
│   ├── Deployment.tsx      # Production rollout
│   └── AILearning.tsx      # AI learning system
│
├── components/
│   ├── DashboardLayout.tsx  # Shared navigation
│   └── ui/                  # Reusable UI components
│
├── routes.ts                # Route configuration
└── App.tsx                  # Main entry point
```


## ✨ Key Highlights
- **Closed-loop self-healing**: Monitors → Detects → Analyzes (AI) → Patches → Deploys → Verifies
- **Smart safeguards** against real production problems:
  - Deployment-aware alert suppression (prevents recursive restart loops)
  - Intelligent incident filtering (user reports trigger full AI analysis; noisy metrics are logged only)
  - Schema cache synchronization for reliable database operations
- **Interactive dashboard** with full pipeline visibility: Applications → Incidents → AI Fixes → Deployments
- **30-second stability check** before marking incidents as resolved

## 🛠️ Architecture

```mermaid
flowchart TD
    A[Monitoring Engine<br>CPU • Memory • Latency] --> B[Crash Detected]
    B --> C[Incident API]
    C --> D[AI Debugger<br>Google Gemini Analysis]
    D --> E[Patch Engine<br>Generates targeted code fix]
    E --> F[Auto Deployer + Health Checks]
    F --> G[30s Stability Verification]
    G -->|Healthy| H[Resolved + Loop Closes]
    G -->|Issue| A
    style A fill:#1e3a8a,stroke:#60a5fa
    style D fill:#4338ca,stroke:#a5b4fc
    style H fill:#166534,stroke:#4ade80