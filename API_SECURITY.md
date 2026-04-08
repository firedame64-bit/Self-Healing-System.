# 🔐 IMPORTANT: API Key Security Notice

## ⚠️ URGENT: Your API Key Has Been Exposed

You shared your Google Gemini API key publicly:
```
AIzaSyBaM03mgWKim4NEZT0sheca0HNyuYFWBlQ
```

**This means anyone who saw it can use your API quota!**

---

## 🚨 Immediate Action Required

### Step 1: Rotate Your API Key (Do This NOW!)

1. **Go to Google Cloud Console:**
   - Visit: https://console.cloud.google.com/apis/credentials

2. **Delete the exposed key:**
   - Find key: `AIzaSyBaM03mgWKim4NEZT0sheca0HNyuYFWBlQ`
   - Click the trash icon to delete it
   - Confirm deletion

3. **Create a new key:**
   - Click "Create Credentials"
   - Select "API Key"
   - Copy the new key
   - Click "Restrict Key" (important!)

4. **Add restrictions:**
   - **Application restrictions:** HTTP referrers
   - **API restrictions:** Only select "Generative Language API"
   - Save

---

## 🔒 How to Secure Your New API Key

### Option 1: Environment Variables (Recommended for Development)

1. **Create a `.env` file** in your project root:
   ```env
   VITE_GEMINI_API_KEY=your_new_api_key_here
   ```

2. **Update the API file** (`/src/app/utils/geminiAPI.ts`):
   ```typescript
   const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
   ```

3. **Add to `.gitignore`:**
   ```
   .env
   .env.local
   .env.*.local
   ```

4. **Never commit `.env` files to Git!**

---

### Option 2: Backend API (Recommended for Production)

**Why?** Your API key is still exposed in frontend code if you use Option 1!

#### Create a Backend Server:

**File: `backend/server.js`**
```javascript
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

// API key stored ONLY on server
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post('/api/analyze-code', async (req, res) => {
  try {
    const { code, filename, language } = req.body;
    
    // Call Gemini API from server (key never exposed to browser)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `Analyze this ${language} code...` }] }]
        })
      }
    );
    
    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log('Backend running on http://localhost:3001');
});
```

#### Update Frontend to Call Backend:

**File: `/src/app/utils/geminiAPI.ts`**
```typescript
// Instead of calling Gemini directly, call your backend
const response = await fetch('http://localhost:3001/api/analyze-code', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ code, filename, language })
});
```

---

## 📋 Quick Checklist

- [ ] Deleted exposed API key from Google Cloud Console
- [ ] Created new API key
- [ ] Added API restrictions (HTTP referrers + Generative Language API only)
- [ ] Created `.env` file with new key
- [ ] Added `.env` to `.gitignore`
- [ ] Updated code to use environment variable
- [ ] Tested that it still works
- [ ] (Optional) Set up backend server for production

---

## 🎯 Best Practices Going Forward

### DO ✅
- Store API keys in environment variables
- Use backend servers for production apps
- Add API restrictions in Google Cloud Console
- Monitor your API usage regularly
- Rotate keys every 90 days
- Use `.gitignore` to exclude `.env` files

### DON'T ❌
- Share API keys in messages/emails
- Commit API keys to Git repositories
- Hardcode keys in source code
- Use keys without restrictions
- Share screenshots containing keys
- Use the same key for multiple projects

---

## 🔍 How to Check if Your Key Was Compromised

1. **Go to Google Cloud Console:**
   - https://console.cloud.google.com/apis/dashboard

2. **Check API usage:**
   - Look for unusual spikes in requests
   - Check the time periods
   - Review request patterns

3. **If you see suspicious activity:**
   - Delete the key immediately
   - Create a new one
   - Report to Google Cloud Support

---

## 💰 Cost Protection

### Set Up Billing Alerts:

1. **Go to Billing:**
   - https://console.cloud.google.com/billing

2. **Create Budget Alert:**
   - Set monthly limit (e.g., $10)
   - Get email when you hit 50%, 90%, 100%

3. **Set API Quotas:**
   - Limit requests per day
   - Limit requests per minute
   - Prevents runaway costs

---

## 🛡️ Current Integration Status

**Your app currently has the key HARDCODED!**

The key is visible in: `/src/app/utils/geminiAPI.ts`

```typescript
// ⚠️ THIS IS INSECURE - ANYONE CAN SEE THIS!
const GEMINI_API_KEY = 'AIzaSyBaM03mgWKim4NEZT0sheca0HNyuYFWBlQ';
```

**After you get a new key, let me know and I'll help you secure it properly!**

---

## 📞 Need Help?

### To Rotate Your Key:
1. Tell me when you've created a new key
2. I'll update the code to use environment variables
3. I'll show you how to set up backend (optional)

### To Set Up Backend:
1. Tell me you want a secure backend setup
2. I'll create the full backend code
3. I'll show you how to deploy it

---

## 🎓 Learn More

- **Google Cloud Security Best Practices:**
  https://cloud.google.com/docs/security/best-practices

- **API Key Security:**
  https://cloud.google.com/docs/authentication/api-keys

- **Environment Variables in Vite:**
  https://vitejs.dev/guide/env-and-mode.html

---

## ✅ Summary

1. **Immediate:** Rotate your API key (delete old, create new)
2. **Short-term:** Use environment variables (`.env` file)
3. **Long-term:** Set up backend server for production
4. **Always:** Never share API keys publicly

---

**Once you have your new key, send it to me and I'll help secure it properly!** 🔐
