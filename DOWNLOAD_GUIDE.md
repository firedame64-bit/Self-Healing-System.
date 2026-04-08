# 📥 How to Download & Run on Your PC

Complete step-by-step guide to get your Self-Healing Platform running locally.

---

## 🎯 Method 1: Download from Web Environment (EASIEST)

If you're currently viewing this in a web-based development environment:

### Step 1: Locate Download Button
Look for one of these options in your interface:
- **"Download"** button (usually top-right)
- **"Export"** option in File menu
- **"Download ZIP"** option
- **"Export Project"** button

### Step 2: Download
1. Click the download/export button
2. Save the ZIP file to your computer
3. Choose a location (e.g., `Desktop` or `Documents`)

### Step 3: Extract Files
- **Windows**: Right-click ZIP → "Extract All"
- **Mac**: Double-click the ZIP file
- **Linux**: `unzip filename.zip`

### Step 4: You're Done!
You now have all files on your PC. Skip to "Installation & Setup" section below.

---

## 🎯 Method 2: Manual File Copy (Alternative)

If no download option is available:

### Step 1: Create Project Folder
```bash
# On Windows
mkdir C:\Projects\self-healing-platform
cd C:\Projects\self-healing-platform

# On Mac/Linux
mkdir ~/Projects/self-healing-platform
cd ~/Projects/self-healing-platform
```

### Step 2: Copy All Files
Copy these files/folders from the web environment to your new folder:
```
self-healing-platform/
├── src/               (entire folder)
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── postcss.config.mjs
├── README.md
└── CODE_UPLOAD_GUIDE.md
```

### Step 3: Create Missing Files
If any files are missing, create them manually (content available in the web editor).

---

## 💻 Installation & Setup

### Prerequisites Check

Before starting, make sure you have:

#### 1. Node.js (Required)
```bash
# Check if installed
node --version
# Should show: v18.0.0 or higher

npm --version
# Should show: 9.0.0 or higher
```

**Don't have Node.js?**
- Download: https://nodejs.org/
- Install the **LTS version** (recommended)
- Restart terminal after installation

#### 2. Code Editor (Recommended)
- **VS Code**: https://code.visualstudio.com/ (recommended)
- Or any text editor: Sublime, Atom, etc.

#### 3. Terminal/Command Prompt
- **Windows**: PowerShell or Command Prompt
- **Mac**: Terminal
- **Linux**: Any terminal

---

## 🚀 Setup Steps

### Step 1: Navigate to Project
```bash
# Replace with your actual path
cd path/to/self-healing-platform

# Example Windows:
cd C:\Projects\self-healing-platform

# Example Mac/Linux:
cd ~/Projects/self-healing-platform
```

### Step 2: Install Dependencies
```bash
npm install
```

**What this does:**
- Downloads all required packages
- Sets up React, Tailwind CSS, and other libraries
- Creates `node_modules` folder
- Takes 2-5 minutes depending on internet speed

**Expected Output:**
```
added 1247 packages in 3m
```

### Step 3: Start Development Server
```bash
npm run dev
```

**Expected Output:**
```
  VITE v6.3.5  ready in 823 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 4: Open in Browser
1. Open your web browser
2. Go to: `http://localhost:5173`
3. You should see your Self-Healing Platform!

---

## ✅ Verify Installation

You should see:
1. **Landing Page** with hero section
2. **Navigation bar** at top
3. **"Get Started"** and **"Watch Platform"** buttons
4. No error messages in browser console (F12)

### Browser Console Check
1. Press **F12** (Windows/Linux) or **Cmd+Option+I** (Mac)
2. Look at "Console" tab
3. Should have no red errors
4. Minor warnings are OK

---

## 🔧 Troubleshooting

### Problem: "node: command not found"

**Solution:**
```bash
# Install Node.js from nodejs.org
# Then restart your terminal
```

### Problem: "Port 5173 already in use"

**Solution 1** - Kill the process:
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID [process_id] /F

# Mac/Linux
lsof -ti:5173 | xargs kill
```

**Solution 2** - Use different port:
```bash
npm run dev -- --port 3000
# Then open http://localhost:3000
```

### Problem: "EACCES: permission denied"

**Solution:**
```bash
# Don't use sudo! Fix npm permissions:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Add to PATH (add to ~/.bashrc or ~/.zshrc)
export PATH=~/.npm-global/bin:$PATH

# Restart terminal, then try again
npm install
```

### Problem: "Module not found" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Problem: Slow installation

**Solution:**
```bash
# Use faster mirror (China users)
npm install --registry=https://registry.npmmirror.com

# Or use pnpm (faster package manager)
npm install -g pnpm
pnpm install
pnpm dev
```

### Problem: Build fails with memory error

**Solution:**
```bash
# Increase Node memory
export NODE_OPTIONS=--max_old_space_size=4096
npm run dev
```

---

## 📦 Project Structure

After installation, your folder should look like:

```
self-healing-platform/
│
├── node_modules/          # Dependencies (auto-generated)
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── DashboardLayout.tsx
│   │   │   └── ui/       # UI components
│   │   ├── pages/
│   │   │   ├── Landing.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Applications.tsx
│   │   │   ├── CodeInput.tsx    # NEW: Upload code
│   │   │   ├── Incidents.tsx
│   │   │   ├── AIFix.tsx
│   │   │   ├── Testing.tsx
│   │   │   ├── Deployment.tsx
│   │   │   └── AILearning.tsx
│   │   ├── App.tsx
│   │   └── routes.ts
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   └── main.tsx
│
├── package.json           # Dependencies list
├── package-lock.json      # Locked versions
├── vite.config.ts         # Build configuration
├── tsconfig.json          # TypeScript config
├── index.html             # HTML entry point
├── README.md              # Documentation
└── CODE_UPLOAD_GUIDE.md   # Upload feature guide
```

---

## 🎮 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint

# Format code (if configured)
npm run format
```

---

## 🌐 Accessing from Other Devices

Want to access from phone/tablet on same network?

```bash
# Start with network access
npm run dev -- --host

# Output will show:
#   Local:   http://localhost:5173/
#   Network: http://192.168.1.100:5173/
```

Open the Network URL on any device connected to same WiFi!

---

## 📱 Testing on Mobile

1. Start server with `--host` flag
2. Find your computer's IP address:
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```
3. Open `http://YOUR_IP:5173` on mobile browser

---

## 🏗️ Building for Production

When you're ready to deploy:

```bash
# Create optimized build
npm run build

# Output folder: /dist
# Contains optimized HTML, CSS, JS
```

### Deploy Options:
- **Vercel**: Drag & drop `/dist` folder
- **Netlify**: Drag & drop `/dist` folder  
- **GitHub Pages**: Push `/dist` to gh-pages branch
- **Your server**: Upload `/dist` contents

---

## 📊 Performance Tips

### Faster Development
```bash
# Use pnpm (faster than npm)
npm install -g pnpm
pnpm install
pnpm dev
```

### Reduce Bundle Size
```bash
# Build with analysis
npm run build -- --analyze

# Check which packages are largest
# Consider replacing heavy dependencies
```

### Enable Turbo Mode (Vite 6+)
Already enabled! Vite 6.3.5 is blazing fast ⚡

---

## 🔐 Environment Setup (Optional)

### For GitHub Integration:

1. Create `.env` file in project root:
   ```env
   VITE_GITHUB_TOKEN=your_token_here
   ```

2. Get GitHub token:
   - Go to: https://github.com/settings/tokens
   - Generate new token
   - Select `repo` scope
   - Copy token to `.env`

3. Restart dev server:
   ```bash
   npm run dev
   ```

**Important:** Never commit `.env` to Git!

Add to `.gitignore`:
```
.env
.env.local
.env.*.local
```

---

## 📝 Common File Locations

### Configuration Files:
- `package.json` - Dependencies
- `vite.config.ts` - Build settings
- `tsconfig.json` - TypeScript settings
- `postcss.config.mjs` - CSS processing

### Source Code:
- `src/app/App.tsx` - Main component
- `src/app/routes.ts` - Page routing
- `src/main.tsx` - Entry point
- `src/styles/` - CSS files

### Documentation:
- `README.md` - Main documentation
- `CODE_UPLOAD_GUIDE.md` - Upload feature guide

---

## 🆘 Still Having Issues?

### Check List:
- [ ] Node.js installed (v18+)
- [ ] npm installed (v9+)
- [ ] In correct directory
- [ ] `package.json` exists
- [ ] Internet connection active
- [ ] No firewall blocking npm
- [ ] Sufficient disk space (500MB+)
- [ ] Terminal has proper permissions

### Debug Steps:
1. Delete `node_modules` folder
2. Delete `package-lock.json` file
3. Run `npm install` again
4. Clear npm cache: `npm cache clean --force`
5. Restart terminal
6. Try again

### Get Help:
- Check error message carefully
- Google the error
- Check Node.js version
- Try different terminal
- Restart computer

---

## ✅ Success Checklist

You're all set when:
- [ ] Project downloaded to PC
- [ ] Node.js installed
- [ ] Dependencies installed (`npm install` completed)
- [ ] Dev server running (`npm run dev` working)
- [ ] Browser showing landing page
- [ ] No console errors
- [ ] Can navigate between pages
- [ ] Code upload feature working

---

## 🎉 Next Steps

Now that it's running:

1. **Explore the Platform**
   - Navigate through all pages
   - Test the workflows
   - Check out the features

2. **Upload Your Code**
   - Go to Applications → + Add Application
   - Upload your actual code
   - Watch AI analyze it

3. **Customize**
   - Change colors in `/src/styles/theme.css`
   - Modify pages in `/src/app/pages/`
   - Add new features

4. **Learn**
   - Read through the code
   - Understand React components
   - Explore Tailwind CSS

---

**🚀 You're ready to go! Open http://localhost:5173 and start using your Self-Healing Platform!**
