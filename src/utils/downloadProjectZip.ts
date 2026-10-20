const JSZip = __vite__cjsImport0_jszip;import __vite__cjsImport0_jszip from "/node_modules/.vite/deps/jszip.js?v=d4c18074";
export async function downloadProjectZip(onProgress) {
	onProgress?.("Preparing source files...");
	const zip = new JSZip();
	// Root configuration files
	zip.file("package.json", JSON.stringify({
		name: "arjun-portfolio",
		private: true,
		version: "1.0.0",
		type: "module",
		scripts: {
			dev: "vite",
			build: "vite build",
			preview: "vite preview",
			deploy: "gh-pages -d dist",
			lint: "tsc --noEmit"
		},
		dependencies: {
			"@tailwindcss/vite": "^4.3.3",
			"@vitejs/plugin-react": "^6.1.1",
			"jszip": "^3.10.1",
			"lucide-react": "^0.546.0",
			"motion": "^12.23.24",
			"react": "^19.0.1",
			"react-dom": "^19.0.1",
			"tailwindcss": "^4.3.3",
			"vite": "^8.3.0"
		},
		devDependencies: {
			"@types/jszip": "^3.4.1",
			"@types/node": "^22.14.0",
			"@types/react": "^19.3.0",
			"@types/react-dom": "^19.3.0",
			"gh-pages": "^6.3.0",
			"typescript": "^7.0.2"
		}
	}, null, 2));
	zip.file("tsconfig.json", JSON.stringify({
		compilerOptions: {
			target: "ES2022",
			experimentalDecorators: true,
			useDefineForClassFields: false,
			module: "ESNext",
			types: ["vite/client"],
			lib: [
				"ES2022",
				"DOM",
				"DOM.Iterable"
			],
			skipLibCheck: true,
			moduleResolution: "bundler",
			isolatedModules: true,
			moduleDetection: "force",
			allowJs: true,
			jsx: "react-jsx",
			paths: { "@/*": ["./*"] },
			allowImportingTsExtensions: true,
			noEmit: true
		},
		exclude: ["dist", "node_modules"]
	}, null, 2));
	zip.file("vite.config.ts", `import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: './', // Pre-configured for GitHub Pages deployment
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
`);
	zip.file("index.html", `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Arjun M - Software Engineer & Cyber Security Portfolio</title>
    <meta name="description" content="Portfolio of Arjun M - Final-Year CSE (Cyber Security) Student, Full-Stack Developer & Security Researcher. Hands-on experience with React, Node.js, Express, MySQL, OWASP Top 10, and AWS." />
    <meta property="og:title" content="Arjun M - Software Engineer & Cyber Security Portfolio" />
    <meta property="og:description" content="Portfolio of Arjun M - Final-Year CSE (Cyber Security) Student, Full-Stack Developer & Security Researcher. Hands-on experience with React, Node.js, Express, MySQL, OWASP Top 10, and AWS." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body class="bg-white text-stone-900 antialiased selection:bg-orange-500 selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`);
	zip.file(".gitignore", `# Logs
logs
*.log
npm-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Dependency directories
node_modules/

# Production build outputs
dist/
dist-ssr/
*.local

# Editor and OS files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env
`);
	zip.file("README.md", `# Arjun M — Software Engineer & Cyber Security Portfolio

A responsive, high-performance portfolio website built with **React**, **Tailwind CSS v4**, **TypeScript**, and **Motion**. Fully optimized for instant deployment to **GitHub Pages**.

- **GitHub Profile**: [https://github.com/Arjun64594](https://github.com/Arjun64594)
- **LinkedIn Profile**: [https://www.linkedin.com/in/arjun2604/](https://www.linkedin.com/in/arjun2604/)
- **Contact**: arjun.m0204@gmail.com | +91 9342960627

---

## 🛠️ Local Development Setup

1. **Extract this zip** into your workspace directory.
2. Open your terminal in this directory and install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open the browser URL displayed in the terminal (default: \`http://localhost:5173\`).

---

## 🚀 How to Upload to GitHub & Deploy to GitHub Pages

### Method A: Automated Deployment with GitHub Actions (Recommended)

1. Create a new repository on your GitHub account at **[github.com/new](https://github.com/new)** (e.g. named \`portfolio\`).
2. Open terminal in this folder and initialize Git:
   \`\`\`bash
   git init
   git add .
   git commit -m "feat: portfolio launch"
   git branch -M main
   git remote add origin https://github.com/Arjun64594/portfolio.git
   git push -u origin main
   \`\`\`
3. In your GitHub repository:
   - Navigate to **Settings** -> **Pages** (in the left sidebar).
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. The included workflow (\`.github/workflows/deploy.yml\`) will automatically build and publish your site!

---

### Method B: Quick 1-Command CLI Deploy with \`gh-pages\`

1. Run the build and deploy script:
   \`\`\`bash
   npm run build
   npx gh-pages -d dist
   \`\`\`
2. In your GitHub repository:
   - Navigate to **Settings** -> **Pages**.
   - Under **Source**, select **Deploy from a branch**.
   - Choose branch **gh-pages** and folder **/ (root)**, then click **Save**.

Your portfolio will be live at:
\`https://Arjun64594.github.io/portfolio/\`
`);
	// GitHub Actions Workflow
	zip.file(".github/workflows/deploy.yml", `name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build production bundle
        run: npm run build

      - name: Setup GitHub Pages
        uses: actions/configure-pages@v4

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`);
	// Source files
	onProgress?.("Packing source components...");
	// Helper to fetch file content via fetch or bundle directly
	const fetchFile = async (url) => {
		try {
			const res = await fetch(url);
			if (res.ok) return await res.text();
		} catch {}
		return null;
	};
	const fetchBinary = async (url) => {
		try {
			const res = await fetch(url);
			if (res.ok) return await res.blob();
		} catch {}
		return null;
	};
	// Fetch images so downloaded project is 100% self-contained
	onProgress?.("Packaging images & visual assets...");
	const imagePaths = [
		"/src/assets/images/project_foodiehub_1792421492990.jpg",
		"/src/assets/images/project_securesphere_1792421494788.jpg",
		"/src/assets/images/project_iot_vehicle_1792421494438.jpg",
		"/src/assets/images/avatar_engineer_portrait_1792421495359.jpg"
	];
	for (const imgPath of imagePaths) {
		const blob = await fetchBinary(imgPath);
		if (blob) {
			const fileName = imgPath.replace("/src/assets/images/", "");
			zip.file(`src/assets/images/${fileName}`, blob);
		}
	}
	// Fetch or write source files
	const srcFiles = [
		"src/main.tsx",
		"src/App.tsx",
		"src/index.css",
		"src/data/portfolioData.ts",
		"src/components/Navbar.tsx",
		"src/components/Hero.tsx",
		"src/components/ProjectsSection.tsx",
		"src/components/ProjectCard.tsx",
		"src/components/ProjectDetailModal.tsx",
		"src/components/AboutSection.tsx",
		"src/components/SkillsSection.tsx",
		"src/components/EducationCertSection.tsx",
		"src/components/ContactSection.tsx",
		"src/components/Footer.tsx",
		"src/components/ResumeModal.tsx",
		"src/components/GitHubPagesGuideModal.tsx",
		"src/utils/downloadProjectZip.ts"
	];
	for (const file of srcFiles) {
		const content = await fetchFile(`/${file}`);
		if (content) {
			zip.file(file, content);
		}
	}
	onProgress?.("Generating .ZIP archive...");
	const zipBlob = await zip.generateAsync({ type: "blob" });
	// Trigger download
	const downloadUrl = URL.createObjectURL(zipBlob);
	const anchor = document.createElement("a");
	anchor.href = downloadUrl;
	anchor.download = "arjun-portfolio-source-code.zip";
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
	URL.revokeObjectURL(downloadUrl);
	onProgress?.("Complete! Download started.");
}

//# sourceMappingURL=data:application/json;base64,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LE1BQU0sT0FBTztFQUN4QjtDQUNGO0NBRUEsYUFBYSw0QkFBNEI7Q0FDekMsTUFBTSxVQUFVLE1BQU0sSUFBSSxjQUFjLEVBQUUsTUFBTSxPQUFPLENBQUM7O0NBR3hELE1BQU0sY0FBYyxJQUFJLGdCQUFnQixPQUFPO0NBQy9DLE1BQU0sU0FBUyxTQUFTLGNBQWMsR0FBRztDQUN6QyxPQUFPLE9BQU87Q0FDZCxPQUFPLFdBQVc7Q0FDbEIsU0FBUyxLQUFLLFlBQVksTUFBTTtDQUNoQyxPQUFPLE1BQU07Q0FDYixTQUFTLEtBQUssWUFBWSxNQUFNO0NBQ2hDLElBQUksZ0JBQWdCLFdBQVc7Q0FFL0IsYUFBYSw2QkFBNkI7QUFDNUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiZG93bmxvYWRQcm9qZWN0WmlwLnRzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKU1ppcCBmcm9tICdqc3ppcCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkb3dubG9hZFByb2plY3RaaXAob25Qcm9ncmVzcz86IChzdGF0dXM6IHN0cmluZykgPT4gdm9pZCkge1xuICBvblByb2dyZXNzPy4oJ1ByZXBhcmluZyBzb3VyY2UgZmlsZXMuLi4nKTtcbiAgY29uc3QgemlwID0gbmV3IEpTWmlwKCk7XG5cbiAgLy8gUm9vdCBjb25maWd1cmF0aW9uIGZpbGVzXG4gIHppcC5maWxlKFxuICAgICdwYWNrYWdlLmpzb24nLFxuICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAge1xuICAgICAgICBuYW1lOiAnYXJqdW4tcG9ydGZvbGlvJyxcbiAgICAgICAgcHJpdmF0ZTogdHJ1ZSxcbiAgICAgICAgdmVyc2lvbjogJzEuMC4wJyxcbiAgICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgICAgIHNjcmlwdHM6IHtcbiAgICAgICAgICBkZXY6ICd2aXRlJyxcbiAgICAgICAgICBidWlsZDogJ3ZpdGUgYnVpbGQnLFxuICAgICAgICAgIHByZXZpZXc6ICd2aXRlIHByZXZpZXcnLFxuICAgICAgICAgIGRlcGxveTogJ2doLXBhZ2VzIC1kIGRpc3QnLFxuICAgICAgICAgIGxpbnQ6ICd0c2MgLS1ub0VtaXQnXG4gICAgICAgIH0sXG4gICAgICAgIGRlcGVuZGVuY2llczoge1xuICAgICAgICAgICdAdGFpbHdpbmRjc3Mvdml0ZSc6ICdeNC4zLjMnLFxuICAgICAgICAgICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc6ICdeNi4xLjEnLFxuICAgICAgICAgICdqc3ppcCc6ICdeMy4xMC4xJyxcbiAgICAgICAgICAnbHVjaWRlLXJlYWN0JzogJ14wLjU0Ni4wJyxcbiAgICAgICAgICAnbW90aW9uJzogJ14xMi4yMy4yNCcsXG4gICAgICAgICAgJ3JlYWN0JzogJ14xOS4wLjEnLFxuICAgICAgICAgICdyZWFjdC1kb20nOiAnXjE5LjAuMScsXG4gICAgICAgICAgJ3RhaWx3aW5kY3NzJzogJ140LjMuMycsXG4gICAgICAgICAgJ3ZpdGUnOiAnXjguMy4wJ1xuICAgICAgICB9LFxuICAgICAgICBkZXZEZXBlbmRlbmNpZXM6IHtcbiAgICAgICAgICAnQHR5cGVzL2pzemlwJzogJ14zLjQuMScsXG4gICAgICAgICAgJ0B0eXBlcy9ub2RlJzogJ14yMi4xNC4wJyxcbiAgICAgICAgICAnQHR5cGVzL3JlYWN0JzogJ14xOS4zLjAnLFxuICAgICAgICAgICdAdHlwZXMvcmVhY3QtZG9tJzogJ14xOS4zLjAnLFxuICAgICAgICAgICdnaC1wYWdlcyc6ICdeNi4zLjAnLFxuICAgICAgICAgICd0eXBlc2NyaXB0JzogJ143LjAuMidcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG51bGwsXG4gICAgICAyXG4gICAgKVxuICApO1xuXG4gIHppcC5maWxlKFxuICAgICd0c2NvbmZpZy5qc29uJyxcbiAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgIHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgdGFyZ2V0OiAnRVMyMDIyJyxcbiAgICAgICAgICBleHBlcmltZW50YWxEZWNvcmF0b3JzOiB0cnVlLFxuICAgICAgICAgIHVzZURlZmluZUZvckNsYXNzRmllbGRzOiBmYWxzZSxcbiAgICAgICAgICBtb2R1bGU6ICdFU05leHQnLFxuICAgICAgICAgIHR5cGVzOiBbJ3ZpdGUvY2xpZW50J10sXG4gICAgICAgICAgbGliOiBbJ0VTMjAyMicsICdET00nLCAnRE9NLkl0ZXJhYmxlJ10sXG4gICAgICAgICAgc2tpcExpYkNoZWNrOiB0cnVlLFxuICAgICAgICAgIG1vZHVsZVJlc29sdXRpb246ICdidW5kbGVyJyxcbiAgICAgICAgICBpc29sYXRlZE1vZHVsZXM6IHRydWUsXG4gICAgICAgICAgbW9kdWxlRGV0ZWN0aW9uOiAnZm9yY2UnLFxuICAgICAgICAgIGFsbG93SnM6IHRydWUsXG4gICAgICAgICAganN4OiAncmVhY3QtanN4JyxcbiAgICAgICAgICBwYXRoczoge1xuICAgICAgICAgICAgJ0AvKic6IFsnLi8qJ11cbiAgICAgICAgICB9LFxuICAgICAgICAgIGFsbG93SW1wb3J0aW5nVHNFeHRlbnNpb25zOiB0cnVlLFxuICAgICAgICAgIG5vRW1pdDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBleGNsdWRlOiBbJ2Rpc3QnLCAnbm9kZV9tb2R1bGVzJ11cbiAgICAgIH0sXG4gICAgICBudWxsLFxuICAgICAgMlxuICAgIClcbiAgKTtcblxuICB6aXAuZmlsZShcbiAgICAndml0ZS5jb25maWcudHMnLFxuICAgIGBpbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAnQHRhaWx3aW5kY3NzL3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYmFzZTogJy4vJywgLy8gUHJlLWNvbmZpZ3VyZWQgZm9yIEdpdEh1YiBQYWdlcyBkZXBsb3ltZW50XG4gICAgcGx1Z2luczogW3JlYWN0KCksIHRhaWx3aW5kY3NzKCldLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4nKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn0pO1xuYFxuICApO1xuXG4gIHppcC5maWxlKFxuICAgICdpbmRleC5odG1sJyxcbiAgICBgPCFkb2N0eXBlIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIiBjbGFzcz1cInNjcm9sbC1zbW9vdGhcIj5cbiAgPGhlYWQ+XG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgPHRpdGxlPkFyanVuIE0gLSBTb2Z0d2FyZSBFbmdpbmVlciAmIEN5YmVyIFNlY3VyaXR5IFBvcnRmb2xpbzwvdGl0bGU+XG4gICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlBvcnRmb2xpbyBvZiBBcmp1biBNIC0gRmluYWwtWWVhciBDU0UgKEN5YmVyIFNlY3VyaXR5KSBTdHVkZW50LCBGdWxsLVN0YWNrIERldmVsb3BlciAmIFNlY3VyaXR5IFJlc2VhcmNoZXIuIEhhbmRzLW9uIGV4cGVyaWVuY2Ugd2l0aCBSZWFjdCwgTm9kZS5qcywgRXhwcmVzcywgTXlTUUwsIE9XQVNQIFRvcCAxMCwgYW5kIEFXUy5cIiAvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiQXJqdW4gTSAtIFNvZnR3YXJlIEVuZ2luZWVyICYgQ3liZXIgU2VjdXJpdHkgUG9ydGZvbGlvXCIgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIlBvcnRmb2xpbyBvZiBBcmp1biBNIC0gRmluYWwtWWVhciBDU0UgKEN5YmVyIFNlY3VyaXR5KSBTdHVkZW50LCBGdWxsLVN0YWNrIERldmVsb3BlciAmIFNlY3VyaXR5IFJlc2VhcmNoZXIuIEhhbmRzLW9uIGV4cGVyaWVuY2Ugd2l0aCBSZWFjdCwgTm9kZS5qcywgRXhwcmVzcywgTXlTUUwsIE9XQVNQIFRvcCAxMCwgYW5kIEFXUy5cIiAvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiPlxuICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luPlxuICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpldEJyYWlucytNb25vOndnaHRANDAwOzUwMDs2MDAmZmFtaWx5PVBsdXMrSmFrYXJ0YStTYW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPlxuICA8L2hlYWQ+XG4gIDxib2R5IGNsYXNzPVwiYmctd2hpdGUgdGV4dC1zdG9uZS05MDAgYW50aWFsaWFzZWQgc2VsZWN0aW9uOmJnLW9yYW5nZS01MDAgc2VsZWN0aW9uOnRleHQtd2hpdGVcIj5cbiAgICA8ZGl2IGlkPVwicm9vdFwiPjwvZGl2PlxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiIHNyYz1cIi9zcmMvbWFpbi50c3hcIj48L3NjcmlwdD5cbiAgPC9ib2R5PlxuPC9odG1sPlxuYFxuICApO1xuXG4gIHppcC5maWxlKFxuICAgICcuZ2l0aWdub3JlJyxcbiAgICBgIyBMb2dzXG5sb2dzXG4qLmxvZ1xubnBtLWRlYnVnLmxvZypcblxuIyBSdW50aW1lIGRhdGFcbnBpZHNcbioucGlkXG4qLnNlZWRcbioucGlkLmxvY2tcblxuIyBEZXBlbmRlbmN5IGRpcmVjdG9yaWVzXG5ub2RlX21vZHVsZXMvXG5cbiMgUHJvZHVjdGlvbiBidWlsZCBvdXRwdXRzXG5kaXN0L1xuZGlzdC1zc3IvXG4qLmxvY2FsXG5cbiMgRWRpdG9yIGFuZCBPUyBmaWxlc1xuLnZzY29kZS8qXG4hLnZzY29kZS9leHRlbnNpb25zLmpzb25cbi5pZGVhXG4uRFNfU3RvcmVcbiouc3VvXG4qLm50dnMqXG4qLm5qc3Byb2pcbiouc2xuXG4qLnN3P1xuLmVudlxuYFxuICApO1xuXG4gIHppcC5maWxlKFxuICAgICdSRUFETUUubWQnLFxuICAgIGAjIEFyanVuIE0g4oCUIFNvZnR3YXJlIEVuZ2luZWVyICYgQ3liZXIgU2VjdXJpdHkgUG9ydGZvbGlvXG5cbkEgcmVzcG9uc2l2ZSwgaGlnaC1wZXJmb3JtYW5jZSBwb3J0Zm9saW8gd2Vic2l0ZSBidWlsdCB3aXRoICoqUmVhY3QqKiwgKipUYWlsd2luZCBDU1MgdjQqKiwgKipUeXBlU2NyaXB0KiosIGFuZCAqKk1vdGlvbioqLiBGdWxseSBvcHRpbWl6ZWQgZm9yIGluc3RhbnQgZGVwbG95bWVudCB0byAqKkdpdEh1YiBQYWdlcyoqLlxuXG4tICoqR2l0SHViIFByb2ZpbGUqKjogW2h0dHBzOi8vZ2l0aHViLmNvbS9Bcmp1bjY0NTk0XShodHRwczovL2dpdGh1Yi5jb20vQXJqdW42NDU5NClcbi0gKipMaW5rZWRJbiBQcm9maWxlKio6IFtodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYXJqdW4yNjA0L10oaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FyanVuMjYwNC8pXG4tICoqQ29udGFjdCoqOiBhcmp1bi5tMDIwNEBnbWFpbC5jb20gfCArOTEgOTM0Mjk2MDYyN1xuXG4tLS1cblxuIyMg8J+boO+4jyBMb2NhbCBEZXZlbG9wbWVudCBTZXR1cFxuXG4xLiAqKkV4dHJhY3QgdGhpcyB6aXAqKiBpbnRvIHlvdXIgd29ya3NwYWNlIGRpcmVjdG9yeS5cbjIuIE9wZW4geW91ciB0ZXJtaW5hbCBpbiB0aGlzIGRpcmVjdG9yeSBhbmQgaW5zdGFsbCBkZXBlbmRlbmNpZXM6XG4gICBcXGBcXGBcXGBiYXNoXG4gICBucG0gaW5zdGFsbFxuICAgXFxgXFxgXFxgXG4zLiBSdW4gdGhlIGRldmVsb3BtZW50IHNlcnZlcjpcbiAgIFxcYFxcYFxcYGJhc2hcbiAgIG5wbSBydW4gZGV2XG4gICBcXGBcXGBcXGBcbjQuIE9wZW4gdGhlIGJyb3dzZXIgVVJMIGRpc3BsYXllZCBpbiB0aGUgdGVybWluYWwgKGRlZmF1bHQ6IFxcYGh0dHA6Ly9sb2NhbGhvc3Q6NTE3M1xcYCkuXG5cbi0tLVxuXG4jIyDwn5qAIEhvdyB0byBVcGxvYWQgdG8gR2l0SHViICYgRGVwbG95IHRvIEdpdEh1YiBQYWdlc1xuXG4jIyMgTWV0aG9kIEE6IEF1dG9tYXRlZCBEZXBsb3ltZW50IHdpdGggR2l0SHViIEFjdGlvbnMgKFJlY29tbWVuZGVkKVxuXG4xLiBDcmVhdGUgYSBuZXcgcmVwb3NpdG9yeSBvbiB5b3VyIEdpdEh1YiBhY2NvdW50IGF0ICoqW2dpdGh1Yi5jb20vbmV3XShodHRwczovL2dpdGh1Yi5jb20vbmV3KSoqIChlLmcuIG5hbWVkIFxcYHBvcnRmb2xpb1xcYCkuXG4yLiBPcGVuIHRlcm1pbmFsIGluIHRoaXMgZm9sZGVyIGFuZCBpbml0aWFsaXplIEdpdDpcbiAgIFxcYFxcYFxcYGJhc2hcbiAgIGdpdCBpbml0XG4gICBnaXQgYWRkIC5cbiAgIGdpdCBjb21taXQgLW0gXCJmZWF0OiBwb3J0Zm9saW8gbGF1bmNoXCJcbiAgIGdpdCBicmFuY2ggLU0gbWFpblxuICAgZ2l0IHJlbW90ZSBhZGQgb3JpZ2luIGh0dHBzOi8vZ2l0aHViLmNvbS9Bcmp1bjY0NTk0L3BvcnRmb2xpby5naXRcbiAgIGdpdCBwdXNoIC11IG9yaWdpbiBtYWluXG4gICBcXGBcXGBcXGBcbjMuIEluIHlvdXIgR2l0SHViIHJlcG9zaXRvcnk6XG4gICAtIE5hdmlnYXRlIHRvICoqU2V0dGluZ3MqKiAtPiAqKlBhZ2VzKiogKGluIHRoZSBsZWZ0IHNpZGViYXIpLlxuICAgLSBVbmRlciAqKkJ1aWxkIGFuZCBkZXBsb3ltZW50KiogLT4gKipTb3VyY2UqKiwgc2VsZWN0ICoqR2l0SHViIEFjdGlvbnMqKi5cbjQuIFRoZSBpbmNsdWRlZCB3b3JrZmxvdyAoXFxgLmdpdGh1Yi93b3JrZmxvd3MvZGVwbG95LnltbFxcYCkgd2lsbCBhdXRvbWF0aWNhbGx5IGJ1aWxkIGFuZCBwdWJsaXNoIHlvdXIgc2l0ZSFcblxuLS0tXG5cbiMjIyBNZXRob2QgQjogUXVpY2sgMS1Db21tYW5kIENMSSBEZXBsb3kgd2l0aCBcXGBnaC1wYWdlc1xcYFxuXG4xLiBSdW4gdGhlIGJ1aWxkIGFuZCBkZXBsb3kgc2NyaXB0OlxuICAgXFxgXFxgXFxgYmFzaFxuICAgbnBtIHJ1biBidWlsZFxuICAgbnB4IGdoLXBhZ2VzIC1kIGRpc3RcbiAgIFxcYFxcYFxcYFxuMi4gSW4geW91ciBHaXRIdWIgcmVwb3NpdG9yeTpcbiAgIC0gTmF2aWdhdGUgdG8gKipTZXR0aW5ncyoqIC0+ICoqUGFnZXMqKi5cbiAgIC0gVW5kZXIgKipTb3VyY2UqKiwgc2VsZWN0ICoqRGVwbG95IGZyb20gYSBicmFuY2gqKi5cbiAgIC0gQ2hvb3NlIGJyYW5jaCAqKmdoLXBhZ2VzKiogYW5kIGZvbGRlciAqKi8gKHJvb3QpKiosIHRoZW4gY2xpY2sgKipTYXZlKiouXG5cbllvdXIgcG9ydGZvbGlvIHdpbGwgYmUgbGl2ZSBhdDpcblxcYGh0dHBzOi8vQXJqdW42NDU5NC5naXRodWIuaW8vcG9ydGZvbGlvL1xcYFxuYFxuICApO1xuXG4gIC8vIEdpdEh1YiBBY3Rpb25zIFdvcmtmbG93XG4gIHppcC5maWxlKFxuICAgICcuZ2l0aHViL3dvcmtmbG93cy9kZXBsb3kueW1sJyxcbiAgICBgbmFtZTogRGVwbG95IHRvIEdpdEh1YiBQYWdlc1xuXG5vbjpcbiAgcHVzaDpcbiAgICBicmFuY2hlczpcbiAgICAgIC0gbWFpblxuXG5wZXJtaXNzaW9uczpcbiAgY29udGVudHM6IHJlYWRcbiAgcGFnZXM6IHdyaXRlXG4gIGlkLXRva2VuOiB3cml0ZVxuXG5jb25jdXJyZW5jeTpcbiAgZ3JvdXA6ICdwYWdlcydcbiAgY2FuY2VsLWluLXByb2dyZXNzOiB0cnVlXG5cbmpvYnM6XG4gIGJ1aWxkLWFuZC1kZXBsb3k6XG4gICAgZW52aXJvbm1lbnQ6XG4gICAgICBuYW1lOiBnaXRodWItcGFnZXNcbiAgICAgIHVybDogXFwke3sgc3RlcHMuZGVwbG95bWVudC5vdXRwdXRzLnBhZ2VfdXJsIH19XG4gICAgcnVucy1vbjogdWJ1bnR1LWxhdGVzdFxuICAgIHN0ZXBzOlxuICAgICAgLSBuYW1lOiBDaGVja291dCByZXBvc2l0b3J5XG4gICAgICAgIHVzZXM6IGFjdGlvbnMvY2hlY2tvdXRAdjRcblxuICAgICAgLSBuYW1lOiBTZXQgdXAgTm9kZS5qc1xuICAgICAgICB1c2VzOiBhY3Rpb25zL3NldHVwLW5vZGVAdjRcbiAgICAgICAgd2l0aDpcbiAgICAgICAgICBub2RlLXZlcnNpb246IDIwXG4gICAgICAgICAgY2FjaGU6ICducG0nXG5cbiAgICAgIC0gbmFtZTogSW5zdGFsbCBkZXBlbmRlbmNpZXNcbiAgICAgICAgcnVuOiBucG0gY2lcblxuICAgICAgLSBuYW1lOiBCdWlsZCBwcm9kdWN0aW9uIGJ1bmRsZVxuICAgICAgICBydW46IG5wbSBydW4gYnVpbGRcblxuICAgICAgLSBuYW1lOiBTZXR1cCBHaXRIdWIgUGFnZXNcbiAgICAgICAgdXNlczogYWN0aW9ucy9jb25maWd1cmUtcGFnZXNAdjRcblxuICAgICAgLSBuYW1lOiBVcGxvYWQgUGFnZXMgQXJ0aWZhY3RcbiAgICAgICAgdXNlczogYWN0aW9ucy91cGxvYWQtcGFnZXMtYXJ0aWZhY3RAdjNcbiAgICAgICAgd2l0aDpcbiAgICAgICAgICBwYXRoOiAnLi9kaXN0J1xuXG4gICAgICAtIG5hbWU6IERlcGxveSB0byBHaXRIdWIgUGFnZXNcbiAgICAgICAgaWQ6IGRlcGxveW1lbnRcbiAgICAgICAgdXNlczogYWN0aW9ucy9kZXBsb3ktcGFnZXNAdjRcbmBcbiAgKTtcblxuICAvLyBTb3VyY2UgZmlsZXNcbiAgb25Qcm9ncmVzcz8uKCdQYWNraW5nIHNvdXJjZSBjb21wb25lbnRzLi4uJyk7XG5cbiAgLy8gSGVscGVyIHRvIGZldGNoIGZpbGUgY29udGVudCB2aWEgZmV0Y2ggb3IgYnVuZGxlIGRpcmVjdGx5XG4gIGNvbnN0IGZldGNoRmlsZSA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgaWYgKHJlcy5vaykgcmV0dXJuIGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgfSBjYXRjaCB7fVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIGNvbnN0IGZldGNoQmluYXJ5ID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICBpZiAocmVzLm9rKSByZXR1cm4gYXdhaXQgcmVzLmJsb2IoKTtcbiAgICB9IGNhdGNoIHt9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgLy8gRmV0Y2ggaW1hZ2VzIHNvIGRvd25sb2FkZWQgcHJvamVjdCBpcyAxMDAlIHNlbGYtY29udGFpbmVkXG4gIG9uUHJvZ3Jlc3M/LignUGFja2FnaW5nIGltYWdlcyAmIHZpc3VhbCBhc3NldHMuLi4nKTtcbiAgY29uc3QgaW1hZ2VQYXRocyA9IFtcbiAgICAnL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2plY3RfZm9vZGllaHViXzE3OTI0MjE0OTI5OTAuanBnJyxcbiAgICAnL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2plY3Rfc2VjdXJlc3BoZXJlXzE3OTI0MjE0OTQ3ODguanBnJyxcbiAgICAnL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2plY3RfaW90X3ZlaGljbGVfMTc5MjQyMTQ5NDQzOC5qcGcnLFxuICAgICcvc3JjL2Fzc2V0cy9pbWFnZXMvYXZhdGFyX2VuZ2luZWVyX3BvcnRyYWl0XzE3OTI0MjE0OTUzNTkuanBnJ1xuICBdO1xuXG4gIGZvciAoY29uc3QgaW1nUGF0aCBvZiBpbWFnZVBhdGhzKSB7XG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IGZldGNoQmluYXJ5KGltZ1BhdGgpO1xuICAgIGlmIChibG9iKSB7XG4gICAgICBjb25zdCBmaWxlTmFtZSA9IGltZ1BhdGgucmVwbGFjZSgnL3NyYy9hc3NldHMvaW1hZ2VzLycsICcnKTtcbiAgICAgIHppcC5maWxlKGBzcmMvYXNzZXRzL2ltYWdlcy8ke2ZpbGVOYW1lfWAsIGJsb2IpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZldGNoIG9yIHdyaXRlIHNvdXJjZSBmaWxlc1xuICBjb25zdCBzcmNGaWxlcyA9IFtcbiAgICAnc3JjL21haW4udHN4JyxcbiAgICAnc3JjL0FwcC50c3gnLFxuICAgICdzcmMvaW5kZXguY3NzJyxcbiAgICAnc3JjL2RhdGEvcG9ydGZvbGlvRGF0YS50cycsXG4gICAgJ3NyYy9jb21wb25lbnRzL05hdmJhci50c3gnLFxuICAgICdzcmMvY29tcG9uZW50cy9IZXJvLnRzeCcsXG4gICAgJ3NyYy9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbi50c3gnLFxuICAgICdzcmMvY29tcG9uZW50cy9Qcm9qZWN0Q2FyZC50c3gnLFxuICAgICdzcmMvY29tcG9uZW50cy9Qcm9qZWN0RGV0YWlsTW9kYWwudHN4JyxcbiAgICAnc3JjL2NvbXBvbmVudHMvQWJvdXRTZWN0aW9uLnRzeCcsXG4gICAgJ3NyYy9jb21wb25lbnRzL1NraWxsc1NlY3Rpb24udHN4JyxcbiAgICAnc3JjL2NvbXBvbmVudHMvRWR1Y2F0aW9uQ2VydFNlY3Rpb24udHN4JyxcbiAgICAnc3JjL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24udHN4JyxcbiAgICAnc3JjL2NvbXBvbmVudHMvRm9vdGVyLnRzeCcsXG4gICAgJ3NyYy9jb21wb25lbnRzL1Jlc3VtZU1vZGFsLnRzeCcsXG4gICAgJ3NyYy9jb21wb25lbnRzL0dpdEh1YlBhZ2VzR3VpZGVNb2RhbC50c3gnLFxuICAgICdzcmMvdXRpbHMvZG93bmxvYWRQcm9qZWN0WmlwLnRzJ1xuICBdO1xuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBzcmNGaWxlcykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBmZXRjaEZpbGUoYC8ke2ZpbGV9YCk7XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIHppcC5maWxlKGZpbGUsIGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uUHJvZ3Jlc3M/LignR2VuZXJhdGluZyAuWklQIGFyY2hpdmUuLi4nKTtcbiAgY29uc3QgemlwQmxvYiA9IGF3YWl0IHppcC5nZW5lcmF0ZUFzeW5jKHsgdHlwZTogJ2Jsb2InIH0pO1xuXG4gIC8vIFRyaWdnZXIgZG93bmxvYWRcbiAgY29uc3QgZG93bmxvYWRVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHppcEJsb2IpO1xuICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGFuY2hvci5ocmVmID0gZG93bmxvYWRVcmw7XG4gIGFuY2hvci5kb3dubG9hZCA9ICdhcmp1bi1wb3J0Zm9saW8tc291cmNlLWNvZGUuemlwJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbmNob3IpO1xuICBhbmNob3IuY2xpY2soKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhbmNob3IpO1xuICBVUkwucmV2b2tlT2JqZWN0VVJMKGRvd25sb2FkVXJsKTtcblxuICBvblByb2dyZXNzPy4oJ0NvbXBsZXRlISBEb3dubG9hZCBzdGFydGVkLicpO1xufVxuIl19