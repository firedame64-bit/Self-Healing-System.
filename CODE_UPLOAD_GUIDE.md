# 📤 Code Upload Feature - User Guide

## How to Upload Your Code for AI Analysis

Your Self-Healing Platform can now analyze YOUR actual code! Here's how:

---

## 🎯 Quick Start

1. **Go to Applications Page**
   - Click "Applications" in the left sidebar
   - Or navigate to: `http://localhost:5173/dashboard/applications`

2. **Click "+ Add Application"**
   - Big blue button in the top-right corner

3. **Fill in Project Details**
   - **Project Name**: e.g., "Payment Service", "User Auth API"
   - **Programming Language**: Select from dropdown

4. **Choose Upload Method** (pick ONE)

---

## 📁 Method 1: Upload from PC

**Best for:** Local files, complete projects

**Steps:**
1. Click the "Upload from PC" card
2. Click the upload area or drag files
3. Select your code files (`.java`, `.py`, `.js`, etc.)
4. You can upload multiple files at once!
5. Review the file list
6. Click "Start AI Analysis"

**Supported Files:**
- Java (`.java`)
- Python (`.py`)
- JavaScript (`.js`, `.jsx`)
- TypeScript (`.ts`, `.tsx`)
- Go (`.go`)
- C# (`.cs`)
- Ruby (`.rb`)
- PHP (`.php`)
- Rust (`.rs`)
- Kotlin (`.kt`)
- C/C++ (`.c`, `.cpp`, `.h`, `.hpp`)

**Tips:**
- Upload your main application files first
- Configuration files are optional
- Larger codebases may take longer to analyze

---

## 🐙 Method 2: Import from GitHub

**Best for:** Public repositories, version-controlled code

**Steps:**
1. Click the "Import from GitHub" card
2. Paste your repository URL
   - Example: `https://github.com/spring-projects/spring-boot`
3. (Optional) Specify branch (default is `main`)
4. (Optional) Add GitHub token for private repos
5. Click "Start AI Analysis"

**GitHub Token (for private repos):**
1. Go to GitHub → Settings → Developer Settings
2. Personal Access Tokens → Generate new token
3. Select `repo` permissions
4. Copy token and paste in the field
5. Token is encrypted and never stored

**Tips:**
- Make sure repo is accessible (public or you have access)
- AI will clone the entire repository
- Large repos may take 5-10 minutes

---

## 📝 Method 3: Paste Code Directly

**Best for:** Quick tests, single files, code snippets

**Steps:**
1. Click the "Paste Code" card
2. Enter filename (e.g., `PaymentProcessor.java`)
3. Paste your code in the text area
4. Click "Start AI Analysis"

**Example:**
```java
// Filename: DatabaseConnection.java
public class DatabaseConnection {
    private Connection conn;
    
    public void connect() {
        conn = DriverManager.getConnection(url);
    }
}
```

**Tips:**
- Include the complete file for best results
- You can paste multiple files one at a time
- Great for testing specific problematic code

---

## 🌐 Method 4: Import from URL

**Best for:** Code hosted on any platform

**Steps:**
1. Click the "Import from URL" card
2. Paste the direct URL to your code file
3. Click "Start AI Analysis"

**Supported URLs:**
- GitHub raw: `https://raw.githubusercontent.com/user/repo/main/file.java`
- GitLab: `https://gitlab.com/user/repo/-/raw/main/file.py`
- Bitbucket: `https://bitbucket.org/user/repo/raw/main/file.js`
- Any public code URL

**Tips:**
- URL must be publicly accessible
- Use raw/plain text URLs (not HTML pages)
- One file per URL

---

## 🤖 What Happens During Analysis?

After clicking "Start AI Analysis", you'll see:

### Phase 1: Scanning (30 seconds)
- ✅ Scanning code structure...
- ✅ Identifying dependencies...
- 🔄 Building knowledge graph...

### Phase 2: Analysis (1-2 minutes)
- AI reads your entire codebase
- Identifies potential bugs
- Maps dependencies
- Finds security vulnerabilities
- Learns your coding patterns

### Phase 3: Monitoring Setup (30 seconds)
- Creates monitoring configuration
- Sets up alert thresholds
- Enables real-time tracking
- Prepares self-healing capabilities

### Result:
Your application appears in the Applications list with:
- ✅ Real-time health monitoring
- ✅ Automatic bug detection
- ✅ AI-powered fix generation
- ✅ Continuous learning

---

## 📊 After Upload: What You Get

### 1. Application Dashboard
- CPU & Memory usage tracking
- Error rate monitoring
- Uptime statistics
- Request volume

### 2. Incident Detection
- Automatic bug detection
- Stack trace analysis
- Impact assessment
- Severity classification

### 3. AI-Generated Fixes
- Code patches for detected issues
- Confidence scores (85-99%)
- Side-by-side comparisons
- Detailed change explanations

### 4. Sandbox Testing
- Isolated test environment
- Automated test suites
- Performance benchmarks
- Safety validation

### 5. Production Deployment
- Canary deployments
- Rollback capabilities
- Health monitoring
- Zero-downtime updates

---

## 🔍 Example Workflow

**Scenario:** You have a Java Payment Service with connection issues

1. **Upload**
   ```
   Click "+ Add Application"
   Project Name: "Payment Service"
   Language: Java
   Method: Upload from PC
   Files: PaymentProcessor.java, DatabaseConfig.java
   ```

2. **Analysis** (3 minutes)
   ```
   ✅ Found 2 files, 487 lines of code
   ✅ Detected Spring Boot framework
   ⚠️ Identified 1 potential issue: connection pool exhaustion
   ```

3. **Monitoring Enabled**
   ```
   Your app now appears in Applications list
   Status: Healthy
   Monitoring: Active
   ```

4. **AI Detects Issue** (when it happens)
   ```
   Incident: Connection timeout
   AI generates fix in 2 minutes
   Tests fix in sandbox
   Deploys automatically
   ```

---

## ⚙️ Advanced Options

### Customize Monitoring
After upload, click "Configure" to set:
- CPU threshold (default: 80%)
- Memory threshold (default: 85%)
- Error rate threshold (default: 2%)
- Response time limits

### Multiple Files
You can upload:
- Single file: Quick analysis
- Multiple files: Full context
- Entire project: Complete understanding

### Re-upload / Update
To update your code:
1. Go to Applications page
2. Click the app card
3. Click "Update Code"
4. Upload new version
5. AI learns the differences

---

## 🚨 Common Issues

### "File type not supported"
**Solution:** Only upload source code files (not executables, images, or binaries)

### "Analysis taking too long"
**Solution:** 
- Large projects (1000+ files) may take 10-15 minutes
- Check your internet connection for GitHub imports
- Try uploading in smaller batches

### "GitHub authentication failed"
**Solution:**
- Verify repository is public OR you've added a valid token
- Check token has `repo` permissions
- Make sure URL is correct

### "No issues detected"
**Solution:**
- Great! Your code is healthy
- AI is now monitoring for future issues
- Try the sandbox to simulate issues

---

## 💡 Pro Tips

1. **Start Small**: Upload one problematic file first to test
2. **Use GitHub**: Easiest for projects already in version control
3. **Include Tests**: Upload test files for better AI understanding
4. **Regular Updates**: Re-upload code when you make changes
5. **Check Logs**: View analysis logs in browser console (F12)

---

## 📈 Best Practices

### Before Upload:
- ✅ Remove sensitive data (API keys, passwords)
- ✅ Ensure code compiles/runs
- ✅ Include relevant files only
- ✅ Test on small project first

### During Upload:
- ✅ Use descriptive project names
- ✅ Select correct language
- ✅ Wait for analysis to complete
- ✅ Review any warnings

### After Upload:
- ✅ Check application appears in list
- ✅ Verify monitoring is active
- ✅ Review initial health metrics
- ✅ Set up alert preferences

---

## 🎓 Learning Resources

### Video Tutorials (Coming Soon)
- Uploading from PC (3 min)
- GitHub Integration (5 min)
- Understanding AI Analysis (8 min)

### Documentation
- Full API Reference
- Code Analysis Algorithms
- Deployment Strategies

---

## ✅ Checklist

Before uploading, make sure:
- [ ] Code is saved and accessible
- [ ] Sensitive data is removed
- [ ] Project name is descriptive
- [ ] Language is selected correctly
- [ ] Files are in supported format
- [ ] Internet connection is stable (for GitHub/URL imports)

After uploading:
- [ ] Analysis completed successfully
- [ ] Application appears in dashboard
- [ ] Monitoring status is "Active"
- [ ] No critical errors detected

---

## 🆘 Need Help?

**Issue:** Still stuck after following this guide?

**Debug Steps:**
1. Open browser console (F12)
2. Look for error messages
3. Check network tab for failed requests
4. Try a different upload method
5. Test with a simple single file first

**Check:**
- File size < 50MB
- Total files < 1000
- Internet connection stable
- Browser is up to date (Chrome, Firefox, Safari)

---

**Ready to start? Go to Applications → + Add Application!** 🚀
