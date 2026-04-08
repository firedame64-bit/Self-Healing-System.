// Google Gemini AI Integration
// Real code analysis using Google's Gemini AI

export interface CodeAnalysisResult {
  success: boolean;
  bugs: Bug[];
  securityIssues: SecurityIssue[];
  performanceIssues: PerformanceIssue[];
  codeQuality: CodeQuality;
  suggestions: string[];
  confidence: number;
}

export interface Bug {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  type: string;
  location: string;
  description: string;
  suggestedFix: string;
  lineNumber?: number;
}

export interface SecurityIssue {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  type: string;
  description: string;
  recommendation: string;
}

export interface PerformanceIssue {
  id: string;
  type: string;
  description: string;
  impact: string;
  optimization: string;
}

export interface CodeQuality {
  score: number;
  maintainability: number;
  complexity: number;
  documentation: number;
}

const GEMINI_API_KEY = 'AIzaSyBaM03mgWKim4NEZT0sheca0HNyuYFWBlQ';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export async function analyzeCodeWithGemini(
  code: string,
  filename: string,
  language: string
): Promise<CodeAnalysisResult> {
  try {
    const prompt = `You are an expert code analyzer. Analyze the following ${language} code from file "${filename}" and provide a comprehensive analysis.

Code to analyze:
\`\`\`${language}
${code}
\`\`\`

Please provide a detailed JSON response with:
1. List of bugs found (with severity, type, location, description, suggested fix)
2. Security vulnerabilities (with severity, type, description, recommendation)
3. Performance issues (with type, description, impact, optimization suggestions)
4. Code quality metrics (score 0-100, maintainability, complexity, documentation scores)
5. General improvement suggestions
6. Overall confidence score (0-100) in the analysis

Format your response as valid JSON matching this structure:
{
  "bugs": [{"id": "1", "severity": "high", "type": "NullPointer", "location": "line 45", "description": "...", "suggestedFix": "...", "lineNumber": 45}],
  "securityIssues": [{"id": "1", "severity": "critical", "type": "SQL Injection", "description": "...", "recommendation": "..."}],
  "performanceIssues": [{"id": "1", "type": "N+1 Query", "description": "...", "impact": "...", "optimization": "..."}],
  "codeQuality": {"score": 75, "maintainability": 80, "complexity": 70, "documentation": 60},
  "suggestions": ["Use dependency injection", "Add input validation"],
  "confidence": 92
}`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.2,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Gemini API error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    
    // Extract the generated text from Gemini's response
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!generatedText) {
      throw new Error('No response generated from Gemini AI');
    }

    // Parse the JSON response from the AI
    // Gemini might wrap JSON in markdown code blocks, so we need to extract it
    let jsonText = generatedText.trim();
    
    // Remove markdown code block if present
    if (jsonText.startsWith('```json')) {
      jsonText = jsonText.replace(/^```json\n/, '').replace(/\n```$/, '');
    } else if (jsonText.startsWith('```')) {
      jsonText = jsonText.replace(/^```\n/, '').replace(/\n```$/, '');
    }

    const analysisResult = JSON.parse(jsonText);

    return {
      success: true,
      bugs: analysisResult.bugs || [],
      securityIssues: analysisResult.securityIssues || [],
      performanceIssues: analysisResult.performanceIssues || [],
      codeQuality: analysisResult.codeQuality || {
        score: 75,
        maintainability: 75,
        complexity: 75,
        documentation: 75
      },
      suggestions: analysisResult.suggestions || [],
      confidence: analysisResult.confidence || 85
    };

  } catch (error) {
    console.error('Error analyzing code with Gemini:', error);
    
    // Return fallback analysis on error
    return {
      success: false,
      bugs: [],
      securityIssues: [],
      performanceIssues: [],
      codeQuality: {
        score: 0,
        maintainability: 0,
        complexity: 0,
        documentation: 0
      },
      suggestions: ['Analysis failed. Please try again.'],
      confidence: 0
    };
  }
}

export async function analyzeMultipleFiles(
  files: { code: string; filename: string; language: string }[]
): Promise<CodeAnalysisResult[]> {
  const results = await Promise.all(
    files.map(file => analyzeCodeWithGemini(file.code, file.filename, file.language))
  );
  return results;
}

export async function analyzeGitHubRepo(
  repoUrl: string,
  branch: string = 'main',
  token?: string
): Promise<{success: boolean; message: string; filesAnalyzed?: number}> {
  try {
    // Extract owner and repo from URL
    const urlParts = repoUrl.replace('https://github.com/', '').split('/');
    const owner = urlParts[0];
    const repo = urlParts[1]?.replace('.git', '');

    if (!owner || !repo) {
      throw new Error('Invalid GitHub URL format');
    }

    // GitHub API endpoint to get repository contents
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents`;
    
    const headers: Record<string, string> = {
      'Accept': 'application/vnd.github.v3+json'
    };

    if (token) {
      headers['Authorization'] = `token ${token}`;
    }

    const response = await fetch(apiUrl, { headers });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const files = await response.json();
    
    // Filter for code files
    const codeFiles = files.filter((file: any) => 
      file.type === 'file' && 
      /\.(java|py|js|ts|go|cs|rb|php|rs|kt|jsx|tsx|cpp|c|h)$/i.test(file.name)
    );

    return {
      success: true,
      message: `Found ${codeFiles.length} code files`,
      filesAnalyzed: codeFiles.length
    };

  } catch (error) {
    console.error('Error analyzing GitHub repo:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to analyze repository'
    };
  }
}

// Helper function to read file content
export async function readFileContent(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target?.result as string);
    reader.onerror = (e) => reject(e);
    reader.readAsText(file);
  });
}
