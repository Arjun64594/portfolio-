# Arjun M — Software Engineer & Cyber Security Portfolio

A responsive, high-performance portfolio website built with **React**, **Tailwind CSS v4**, **TypeScript**, and **Motion**. Fully optimized for instant deployment to **GitHub Pages**.

- **GitHub Profile**: [https://github.com/Arjun64594](https://github.com/Arjun64594)
- **LinkedIn Profile**: [https://www.linkedin.com/in/arjun2604/](https://www.linkedin.com/in/arjun2604/)
- **Contact**: arjun.m0204@gmail.com | +91 9342960627

---

## 🛠️ Local Development Setup

1. **Extract this zip** into your workspace directory.
2. Open your terminal in this directory and install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the browser URL displayed in the terminal (default: `http://localhost:5173`).

---

## 🚀 How to Upload to GitHub & Deploy to GitHub Pages

### Method A: Automated Deployment with GitHub Actions (Recommended)

1. Create a new repository on your GitHub account at **[github.com/new](https://github.com/new)** (e.g. named `portfolio`).
2. Open terminal in this folder and initialize Git:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio launch"
   git branch -M main
   git remote add origin https://github.com/Arjun64594/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Navigate to **Settings** -> **Pages** (in the left sidebar).
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) will automatically build and publish your site!

---

### Method B: Quick 1-Command CLI Deploy with `gh-pages`

1. Run the build and deploy script:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```
2. In your GitHub repository:
   - Navigate to **Settings** -> **Pages**.
   - Under **Source**, select **Deploy from a branch**.
   - Choose branch **gh-pages** and folder **/ (root)**, then click **Save**.

Your portfolio will be live at:
`https://Arjun64594.github.io/portfolio/`
