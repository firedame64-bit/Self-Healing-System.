# 🎯 Quick Start Guide

## 📥 Download Your Code

### Option 1: Download as ZIP (Easiest)
1. Look for **"Download"** or **"Export"** button
2. Click it and save the ZIP file
3. Extract on your computer
4. Done! ✅

### Option 2: Run Locally
```bash
# After extracting/downloading:

# 1. Navigate to folder
cd self-healing-platform

# 2. Install dependencies (first time only)
npm install

# 3. Start the app
npm run dev

# 4. Open browser
# Go to: http://localhost:5173
```

---

## 🚀 Use the Code Upload Feature

### Quick Steps:
1. **Open the app** → http://localhost:5173
2. **Sign In** (click top-right button)
3. **Click "Applications"** in sidebar
4. **Click "+ Add Application"** button
5. **Enter project name** (e.g., "My API")
6. **Select language** (Java, Python, etc.)
7. **Choose upload method:**

#### 📤 Upload from PC
```
Click "Upload from PC" →
Drag & drop your code files →
Click "Start AI Analysis"
```

#### 🐙 GitHub Import
```
Click "Import from GitHub" →
Paste repo URL: https://github.com/user/repo →
Click "Start AI Analysis"
```

#### 📝 Paste Code
```
Click "Paste Code" →
Paste your code in the box →
Click "Start AI Analysis"
```

#### 🌐 URL Import
```
Click "Import from URL" →
Paste direct code URL →
Click "Start AI Analysis"
```

8. **Wait 3 seconds** for AI analysis
9. **Done!** Your code is now monitored ✅

---

## 📱 What You Can Do Now

### View Your Applications
- See all uploaded code projects
- Monitor CPU, Memory, Errors
- Real-time health tracking

### Detect Issues
- Automatic bug detection
- Severity classification
- Stack trace analysis

### AI-Generated Fixes
- Automatic code patches
- Side-by-side comparisons
- Confidence scores

### Test in Sandbox
- Safe testing environment
- Automated test runs
- Performance metrics

### Deploy Automatically
- Canary deployments
- Rollback capability
- Zero downtime

---

## 🆘 Need Help?

### Something Not Working?
1. Read `/DOWNLOAD_GUIDE.md` for setup
2. Read `/CODE_UPLOAD_GUIDE.md` for upload help
3. Read `/README.md` for full documentation
4. Check browser console (F12) for errors

### Common Issues:

**"Can't download code"**
→ Look for Download/Export button in your editor

**"npm install fails"**
→ Make sure Node.js is installed: https://nodejs.org

**"Port already in use"**
→ Run: `npx kill-port 5173` then try again

**"Upload not working"**
→ Make sure you entered a project name first

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Complete project documentation |
| `CODE_UPLOAD_GUIDE.md` | Detailed upload instructions |
| `DOWNLOAD_GUIDE.md` | How to download & run locally |
| `SUMMARY.md` | Everything we built |
| `QUICKSTART.md` | This file! Quick reference |

---

## ✅ Checklist

Before you start:
- [ ] Code downloaded to PC
- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] App running (`npm run dev`)
- [ ] Browser open at localhost:5173

To upload code:
- [ ] Project name entered
- [ ] Language selected
- [ ] Upload method chosen
- [ ] Code added (file/GitHub/paste/URL)
- [ ] "Start AI Analysis" clicked
- [ ] Success! 🎉

---

## 🎯 File Structure

```
self-healing-platform/
├── src/
│   ├── app/
│   │   ├── pages/
│   │   │   ├── Landing.tsx          # Homepage
│   │   │   ├── Dashboard.tsx        # Overview
│   │   │   ├── Applications.tsx     # App monitoring
│   │   │   ├── CodeInput.tsx        # 🆕 Upload code
│   │   │   ├── Incidents.tsx        # Issue detection
│   │   │   ├── AIFix.tsx           # AI solutions
│   │   │   ├── Testing.tsx         # Sandbox testing
│   │   │   ├── Deployment.tsx      # Deploy fixes
│   │   │   └── AILearning.tsx      # AI learning
│   │   └── components/
│   │       └── DashboardLayout.tsx  # Navigation
│   └── styles/                      # CSS files
├── package.json                     # Dependencies
├── README.md                        # Main docs
├── CODE_UPLOAD_GUIDE.md            # Upload guide
├── DOWNLOAD_GUIDE.md               # Setup guide
├── SUMMARY.md                       # What we built
└── QUICKSTART.md                    # This file
```

---

## 🔑 Key Features

### ✨ What Makes It Special:
- **Real Code Input** - Upload YOUR actual code
- **4 Upload Methods** - PC, GitHub, URL, Paste
- **AI Analysis** - Automatic bug detection
- **Self-Healing** - Fixes bugs automatically
- **Real-time Monitoring** - 24/7 tracking
- **Beautiful UI** - Modern glassmorphism design
- **Fully Responsive** - Works on all devices

---

## 🎬 5-Minute Demo Flow

1. **Start app** (30 sec)
   - `npm run dev`
   - Open localhost:5173

2. **Navigate** (30 sec)
   - Click "Sign In"
   - Explore dashboard
   - Click "Applications"

3. **Upload code** (2 min)
   - Click "+ Add Application"
   - Fill in project name
   - Select language
   - Upload a file
   - Click "Start Analysis"

4. **Watch AI work** (1 min)
   - See progress updates
   - Watch toast notifications
   - View completion

5. **Explore features** (1 min)
   - Check Applications page
   - Browse other pages
   - See the workflow

---

## 💻 Commands Reference

```bash
# Install dependencies (first time)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Kill stuck port
npx kill-port 5173

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 🌐 URLs

| Page | URL |
|------|-----|
| Landing | http://localhost:5173 |
| Dashboard | http://localhost:5173/dashboard |
| Applications | http://localhost:5173/dashboard/applications |
| Upload Code | http://localhost:5173/dashboard/add-code |
| Incidents | http://localhost:5173/dashboard/incidents |
| AI Fix | http://localhost:5173/dashboard/ai-fix |
| Testing | http://localhost:5173/dashboard/testing |
| Deployment | http://localhost:5173/dashboard/deployment |
| AI Learning | http://localhost:5173/dashboard/ai-learning |

---

## 📞 Support

**Still stuck?**
1. Check `/DOWNLOAD_GUIDE.md` → Complete setup guide
2. Check `/CODE_UPLOAD_GUIDE.md` → Upload tutorial
3. Check `/README.md` → Full documentation
4. Press F12 in browser → Check console errors
5. Google the error message

---

## 🎉 You're Ready!

**Everything is set up and ready to use!**

Just follow the steps above and you'll have your Self-Healing Platform running with real code upload capability.

---

**Happy Coding! 🚀**

*Built with React, TypeScript, Tailwind CSS, and ❤️*
