const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { X, Rocket, Copy, Check, ExternalLink, ShieldCheck, Download, Loader2 } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
import { PERSONAL_INFO } from "/src/data/portfolioData.ts";
import { downloadProjectZip } from "/src/utils/downloadProjectZip.ts";
var _jsxFileName = "/app/applet/src/components/GitHubPagesGuideModal.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const GitHubPagesGuideModal = ({ isOpen, onClose }) => {
	const [copiedIndex, setCopiedIndex] = useState(null);
	const [isDownloading, setIsDownloading] = useState(false);
	const [downloadStatus, setDownloadStatus] = useState("");
	if (!isOpen) return null;
	const handleDownloadCode = async () => {
		try {
			setIsDownloading(true);
			await downloadProjectZip((status) => setDownloadStatus(status));
		} catch (e) {
			console.error(e);
		} finally {
			setTimeout(() => {
				setIsDownloading(false);
				setDownloadStatus("");
			}, 1500);
		}
	};
	const copyToClipboard = (text, index) => {
		navigator.clipboard.writeText(text);
		setCopiedIndex(index);
		setTimeout(() => setCopiedIndex(null), 2e3);
	};
	const workflowYaml = `name: Deploy to GitHub Pages

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
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-900/60 backdrop-blur-sm",
		children: /* @__PURE__ */ _jsxDEV(motion.div, {
			initial: {
				opacity: 0,
				scale: .96
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			exit: {
				opacity: 0,
				scale: .96
			},
			transition: { duration: .2 },
			className: "relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl border border-stone-200 bg-white shadow-2xl flex flex-col my-auto",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "sticky top-0 z-20 flex items-center justify-between border-b border-stone-200 bg-white/95 px-6 py-4 backdrop-blur-md",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-200",
							children: /* @__PURE__ */ _jsxDEV(Rocket, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 104,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 103,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-base sm:text-lg font-bold text-stone-900",
							children: ["How to Push & Deploy to ", /* @__PURE__ */ _jsxDEV("span", {
								className: "text-orange-600",
								children: "GitHub Pages"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 41
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-stone-500 font-medium",
							children: ["Configured specifically for @", PERSONAL_INFO.githubUsername]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onClose,
						className: "p-1.5 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors",
						children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-6 space-y-6 text-xs sm:text-sm text-stone-700",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-4 rounded-2xl bg-orange-50/70 border border-orange-200 space-y-1.5",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 text-orange-800 font-bold text-xs uppercase tracking-wider",
								children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Pre-Configured for GitHub Pages" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-stone-700 leading-relaxed",
								children: [
									"Your Vite configuration is already tuned with ",
									/* @__PURE__ */ _jsxDEV("code", {
										className: "font-mono text-orange-700 font-bold bg-white px-1.5 py-0.5 rounded border border-orange-200",
										children: "base: './'"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 61
									}, this),
									" so assets, images, and fonts load flawlessly on either ",
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono font-bold text-stone-900",
										children: [
											"https://",
											PERSONAL_INFO.githubUsername,
											".github.io"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 244
									}, this),
									" or ",
									/* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono font-bold text-stone-900",
										children: [
											"https://",
											PERSONAL_INFO.githubUsername,
											".github.io/portfolio/"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 134,
										columnNumber: 356
									}, this),
									"."
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 133,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-5 rounded-2xl border-2 border-orange-300 bg-orange-50/40 flex flex-col sm:flex-row items-center justify-between gap-4",
							children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "font-extrabold text-stone-900 text-sm sm:text-base flex items-center gap-2",
								children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 142,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Step 0: Download Complete Source Code" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 143,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 141,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-stone-600 mt-1",
								children: "Packages all components, images, styles, configs, and workflow YAML into a single .ZIP file ready to extract."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 140,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV(motion.button, {
								whileHover: { scale: 1.03 },
								whileTap: { scale: .97 },
								onClick: handleDownloadCode,
								disabled: isDownloading,
								className: "inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-all shadow-sm shadow-orange-600/25 whitespace-nowrap cursor-pointer shrink-0",
								children: [isDownloading ? /* @__PURE__ */ _jsxDEV(Loader2, { className: "w-4 h-4 animate-spin" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 17
								}, this) : /* @__PURE__ */ _jsxDEV(Download, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 160,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: isDownloading ? downloadStatus || "Preparing ZIP..." : "Download Code (.ZIP)" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 162,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 139,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between",
									children: /* @__PURE__ */ _jsxDEV("h3", {
										className: "font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-mono font-bold",
											children: "1"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 170,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Automatic Deployment (GitHub Actions — Recommended)" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 171,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 169,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 168,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-stone-600",
									children: [
										"Create a workflow file in your project at ",
										/* @__PURE__ */ _jsxDEV("code", {
											className: "text-orange-700 font-mono font-semibold",
											children: ".github/workflows/deploy.yml"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 176,
											columnNumber: 57
										}, this),
										". Whenever you push code to GitHub, your portfolio will build and deploy automatically!"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 175,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "relative rounded-2xl border border-stone-200 bg-stone-900 p-3.5 font-mono text-[11px] text-stone-200",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between pb-2 border-b border-stone-800 text-[10px] text-stone-400",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: ".github/workflows/deploy.yml" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 181,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("button", {
											onClick: () => copyToClipboard(workflowYaml, 1),
											className: "flex items-center gap-1 text-orange-400 hover:text-orange-300 font-bold",
											children: [copiedIndex === 1 ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3 h-3 text-emerald-400" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 186,
												columnNumber: 40
											}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3 h-3" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 186,
												columnNumber: 89
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedIndex === 1 ? "Copied" : "Copy Workflow YAML" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 187,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 182,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 180,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("pre", {
										className: "mt-2 overflow-x-auto max-h-48 text-stone-300",
										children: workflowYaml
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 190,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 167,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-3 pt-2",
							children: [
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "w-5 h-5 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs font-mono font-bold",
										children: "2"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 199,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Git Commands to Initialize & Push" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 200,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 198,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-stone-600",
									children: "Run these commands in your local project terminal to connect to your GitHub account:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 203,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "relative rounded-2xl border border-stone-200 bg-stone-900 p-3.5 font-mono text-[11px] text-stone-200 space-y-1",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex justify-between items-center text-[10px] text-stone-400 pb-1.5 border-b border-stone-800 mb-2",
											children: [/* @__PURE__ */ _jsxDEV("span", { children: "Terminal / Bash" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 209,
												columnNumber: 17
											}, this), /* @__PURE__ */ _jsxDEV("button", {
												onClick: () => copyToClipboard(`git init\ngit add .\ngit commit -m "feat: portfolio launch"\ngit branch -M main\ngit remote add origin https://github.com/${PERSONAL_INFO.githubUsername}/portfolio.git\ngit push -u origin main`, 2),
												className: "flex items-center gap-1 text-orange-400 hover:text-orange-300 font-bold",
												children: [copiedIndex === 2 ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3 h-3 text-emerald-400" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 214,
													columnNumber: 40
												}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3 h-3" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 214,
													columnNumber: 89
												}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedIndex === 2 ? "Copied" : "Copy Commands" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 215,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 210,
												columnNumber: 17
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 208,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-stone-400",
											children: "# 1. Initialize git"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 218,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-emerald-400 font-semibold",
											children: "git init"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 219,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-emerald-400 font-semibold",
											children: "git add ."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 220,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-emerald-400 font-semibold",
											children: "git commit -m \"feat: portfolio launch\""
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 221,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-stone-400 pt-1",
											children: "# 2. Link your GitHub repository"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 222,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-emerald-400 font-semibold",
											children: "git branch -M main"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 223,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-emerald-400 font-semibold",
											children: [
												"git remote add origin https://github.com/",
												PERSONAL_INFO.githubUsername,
												"/portfolio.git"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 224,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-emerald-400 font-semibold",
											children: "git push -u origin main"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 225,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 207,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 197,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-3 pt-2",
							children: [
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "w-5 h-5 rounded-full bg-stone-700 text-white flex items-center justify-center text-xs font-mono font-bold",
										children: "3"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 232,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Alternative: Instant CLI Deploy (`npx gh-pages`)" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 233,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 231,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "text-xs text-stone-600",
									children: [
										"If you prefer not using GitHub Actions, you can deploy your built ",
										/* @__PURE__ */ _jsxDEV("code", {
											className: "font-mono text-orange-700 font-semibold",
											children: "dist/"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 237,
											columnNumber: 81
										}, this),
										" directory in 1 command:"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 236,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "relative rounded-2xl border border-stone-200 bg-stone-900 p-3.5 font-mono text-[11px] text-stone-200",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex justify-between items-center text-[10px] text-stone-400 pb-1.5 border-b border-stone-800 mb-2",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "One-Line CLI Deploy" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 242,
											columnNumber: 17
										}, this), /* @__PURE__ */ _jsxDEV("button", {
											onClick: () => copyToClipboard("npm run build && npx gh-pages -d dist", 3),
											className: "flex items-center gap-1 text-orange-400 hover:text-orange-300 font-bold",
											children: [copiedIndex === 3 ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3 h-3 text-emerald-400" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 247,
												columnNumber: 40
											}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3 h-3" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 247,
												columnNumber: 89
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: copiedIndex === 3 ? "Copied" : "Copy Command" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 248,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 243,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 241,
										columnNumber: 15
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-emerald-400 font-semibold",
										children: "npm run build && npx gh-pages -d dist"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 251,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 240,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 230,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "font-bold text-stone-900 block",
								children: "Final step in GitHub repository:"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 257,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-stone-600",
								children: [
									"Go to your repo on GitHub → ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "Settings" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 43
									}, this),
									" → ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "Pages" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 71
									}, this),
									" → Under ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "Source" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 102
									}, this),
									", select ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "GitHub Actions" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 134
									}, this),
									" (or ",
									/* @__PURE__ */ _jsxDEV("strong", { children: "Deploy from a branch" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 170
									}, this),
									" → ",
									/* @__PURE__ */ _jsxDEV("code", {
										className: "text-orange-700 font-mono font-semibold",
										children: "gh-pages"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 259,
										columnNumber: 210
									}, this),
									")."
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 258,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 256,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 125,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "border-t border-stone-200 bg-stone-50 px-6 py-4 flex items-center justify-between",
					children: [/* @__PURE__ */ _jsxDEV("a", {
						href: PERSONAL_INFO.github,
						target: "_blank",
						rel: "noreferrer",
						className: "text-xs text-orange-600 hover:text-orange-700 flex items-center gap-1 font-mono font-bold",
						children: [/* @__PURE__ */ _jsxDEV("span", { children: ["Open ", PERSONAL_INFO.github] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 273,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3 h-3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 274,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 267,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onClose,
						className: "px-5 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-colors shadow-xs",
						children: "Got It!"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 277,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 266,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 91,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 90,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QkFBaUM7T0FBc0M7Ozs7aUJBQ3ZGLHdCQUFDLEtBQUQ7UUFBRyxXQUFVO2tCQUFiO1NBQThCO1NBQ0Esd0JBQUMsVUFBRCxZQUFRLFdBQWdCOzs7OztTQUFDO1NBQUcsd0JBQUMsVUFBRCxZQUFRLFFBQWE7Ozs7O1NBQUM7U0FBUyx3QkFBQyxVQUFELFlBQVEsU0FBYzs7Ozs7U0FBQztTQUFTLHdCQUFDLFVBQUQsWUFBUSxpQkFBc0I7Ozs7O1NBQUM7U0FBSyx3QkFBQyxVQUFELFlBQVEsdUJBQTRCOzs7OztTQUFDO1NBQUcsd0JBQUMsUUFBRDtVQUFNLFdBQVU7b0JBQTBDO1NBQWM7Ozs7O1NBQUM7UUFDM1E7Ozs7O2VBQ0E7Ozs7OztLQUVGOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmLENBQ0Usd0JBQUMsS0FBRDtNQUNFLE1BQU0sY0FBYztNQUNwQixRQUFPO01BQ1AsS0FBSTtNQUNKLFdBQVU7Z0JBSlosQ0FNRSx3QkFBQyxRQUFELGFBQU0sU0FBTSxjQUFjLE1BQWE7Ozs7Z0JBQ3ZDLHdCQUFDLGNBQUQsRUFBYyxXQUFVLFVBQVc7Ozs7Y0FDbEM7Ozs7O2VBRUgsd0JBQUMsVUFBRDtNQUNFLFNBQVM7TUFDVCxXQUFVO2dCQUNYO0tBRU87Ozs7YUFDTDs7Ozs7O0dBRUs7Ozs7OztDQUNUOzs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkdpdEh1YlBhZ2VzR3VpZGVNb2RhbC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgWCwgUm9ja2V0LCBDb3B5LCBDaGVjaywgRXh0ZXJuYWxMaW5rLCBTaGllbGRDaGVjaywgRG93bmxvYWQsIExvYWRlcjIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgUEVSU09OQUxfSU5GTyB9IGZyb20gJy4uL2RhdGEvcG9ydGZvbGlvRGF0YSc7XG5pbXBvcnQgeyBkb3dubG9hZFByb2plY3RaaXAgfSBmcm9tICcuLi91dGlscy9kb3dubG9hZFByb2plY3RaaXAnO1xuXG5pbnRlcmZhY2UgR2l0SHViUGFnZXNHdWlkZU1vZGFsUHJvcHMge1xuICBpc09wZW46IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBHaXRIdWJQYWdlc0d1aWRlTW9kYWw6IFJlYWN0LkZDPEdpdEh1YlBhZ2VzR3VpZGVNb2RhbFByb3BzPiA9ICh7IGlzT3Blbiwgb25DbG9zZSB9KSA9PiB7XG4gIGNvbnN0IFtjb3BpZWRJbmRleCwgc2V0Q29waWVkSW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtpc0Rvd25sb2FkaW5nLCBzZXRJc0Rvd25sb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Rvd25sb2FkU3RhdHVzLCBzZXREb3dubG9hZFN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkQ29kZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNEb3dubG9hZGluZyh0cnVlKTtcbiAgICAgIGF3YWl0IGRvd25sb2FkUHJvamVjdFppcCgoc3RhdHVzKSA9PiBzZXREb3dubG9hZFN0YXR1cyhzdGF0dXMpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNEb3dubG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldERvd25sb2FkU3RhdHVzKCcnKTtcbiAgICAgIH0sIDE1MDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAodGV4dDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgc2V0Q29waWVkSW5kZXgoaW5kZXgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkSW5kZXgobnVsbCksIDIwMDApO1xuICB9O1xuXG4gIGNvbnN0IHdvcmtmbG93WWFtbCA9IGBuYW1lOiBEZXBsb3kgdG8gR2l0SHViIFBhZ2VzXG5cbm9uOlxuICBwdXNoOlxuICAgIGJyYW5jaGVzOlxuICAgICAgLSBtYWluXG5cbnBlcm1pc3Npb25zOlxuICBjb250ZW50czogcmVhZFxuICBwYWdlczogd3JpdGVcbiAgaWQtdG9rZW46IHdyaXRlXG5cbmNvbmN1cnJlbmN5OlxuICBncm91cDogJ3BhZ2VzJ1xuICBjYW5jZWwtaW4tcHJvZ3Jlc3M6IHRydWVcblxuam9iczpcbiAgYnVpbGQtYW5kLWRlcGxveTpcbiAgICBlbnZpcm9ubWVudDpcbiAgICAgIG5hbWU6IGdpdGh1Yi1wYWdlc1xuICAgICAgdXJsOiBcXCR7eyBzdGVwcy5kZXBsb3ltZW50Lm91dHB1dHMucGFnZV91cmwgfX1cbiAgICBydW5zLW9uOiB1YnVudHUtbGF0ZXN0XG4gICAgc3RlcHM6XG4gICAgICAtIG5hbWU6IENoZWNrb3V0XG4gICAgICAgIHVzZXM6IGFjdGlvbnMvY2hlY2tvdXRAdjRcblxuICAgICAgLSBuYW1lOiBTZXR1cCBOb2RlXG4gICAgICAgIHVzZXM6IGFjdGlvbnMvc2V0dXAtbm9kZUB2NFxuICAgICAgICB3aXRoOlxuICAgICAgICAgIG5vZGUtdmVyc2lvbjogMjBcbiAgICAgICAgICBjYWNoZTogJ25wbSdcblxuICAgICAgLSBuYW1lOiBJbnN0YWxsIGRlcGVuZGVuY2llc1xuICAgICAgICBydW46IG5wbSBjaVxuXG4gICAgICAtIG5hbWU6IEJ1aWxkXG4gICAgICAgIHJ1bjogbnBtIHJ1biBidWlsZFxuXG4gICAgICAtIG5hbWU6IFNldHVwIFBhZ2VzXG4gICAgICAgIHVzZXM6IGFjdGlvbnMvY29uZmlndXJlLXBhZ2VzQHY0XG5cbiAgICAgIC0gbmFtZTogVXBsb2FkIGFydGlmYWN0XG4gICAgICAgIHVzZXM6IGFjdGlvbnMvdXBsb2FkLXBhZ2VzLWFydGlmYWN0QHYzXG4gICAgICAgIHdpdGg6XG4gICAgICAgICAgcGF0aDogJy4vZGlzdCdcblxuICAgICAgLSBuYW1lOiBEZXBsb3kgdG8gR2l0SHViIFBhZ2VzXG4gICAgICAgIGlkOiBkZXBsb3ltZW50XG4gICAgICAgIHVzZXM6IGFjdGlvbnMvZGVwbG95LXBhZ2VzQHY0YDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMyBzbTpwLTYgb3ZlcmZsb3cteS1hdXRvIGJnLXN0b25lLTkwMC82MCBiYWNrZHJvcC1ibHVyLXNtXCI+XG4gICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45NiB9fVxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XG4gICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOTYgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYXgtdy0zeGwgbWF4LWgtWzkydmhdIG92ZXJmbG93LXktYXV0byByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZSBzaGFkb3ctMnhsIGZsZXggZmxleC1jb2wgbXktYXV0b1wiXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAgey8qIEhlYWRlciB3aXRoIFdoaXRlIEJhY2tncm91bmQgJiBPcmFuZ2UgVGV4dCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZS85NSBweC02IHB5LTQgYmFja2Ryb3AtYmx1ci1tZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC14bCBiZy1vcmFuZ2UtNTAgdGV4dC1vcmFuZ2UtNjAwIGJvcmRlciBib3JkZXItb3JhbmdlLTIwMFwiPlxuICAgICAgICAgICAgICA8Um9ja2V0IGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwXCI+XG4gICAgICAgICAgICAgICAgSG93IHRvIFB1c2ggJiBEZXBsb3kgdG8gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNjAwXCI+R2l0SHViIFBhZ2VzPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNTAwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgQ29uZmlndXJlZCBzcGVjaWZpY2FsbHkgZm9yIEB7UEVSU09OQUxfSU5GTy5naXRodWJVc2VybmFtZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgdGV4dC1zdG9uZS00MDAgaG92ZXI6dGV4dC1zdG9uZS05MDAgaG92ZXI6Ymctc3RvbmUtMTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ29udGVudCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgc3BhY2UteS02IHRleHQteHMgc206dGV4dC1zbSB0ZXh0LXN0b25lLTcwMFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBSZWFkaW5lc3MgQmFubmVyIGluIFdhcm0gT3JhbmdlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtMnhsIGJnLW9yYW5nZS01MC83MCBib3JkZXIgYm9yZGVyLW9yYW5nZS0yMDAgc3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1vcmFuZ2UtODAwIGZvbnQtYm9sZCB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICA8U2hpZWxkQ2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5QcmUtQ29uZmlndXJlZCBmb3IgR2l0SHViIFBhZ2VzPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNzAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICBZb3VyIFZpdGUgY29uZmlndXJhdGlvbiBpcyBhbHJlYWR5IHR1bmVkIHdpdGggPGNvZGUgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtb3JhbmdlLTcwMCBmb250LWJvbGQgYmctd2hpdGUgcHgtMS41IHB5LTAuNSByb3VuZGVkIGJvcmRlciBib3JkZXItb3JhbmdlLTIwMFwiPmJhc2U6ICcuLyc8L2NvZGU+IHNvIGFzc2V0cywgaW1hZ2VzLCBhbmQgZm9udHMgbG9hZCBmbGF3bGVzc2x5IG9uIGVpdGhlciA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwXCI+aHR0cHM6Ly97UEVSU09OQUxfSU5GTy5naXRodWJVc2VybmFtZX0uZ2l0aHViLmlvPC9zcGFuPiBvciA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwXCI+aHR0cHM6Ly97UEVSU09OQUxfSU5GTy5naXRodWJVc2VybmFtZX0uZ2l0aHViLmlvL3BvcnRmb2xpby88L3NwYW4+LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEFjdGlvbjogRG93bmxvYWQgU291cmNlIENvZGUgWklQICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJvcmRlci0yIGJvcmRlci1vcmFuZ2UtMzAwIGJnLW9yYW5nZS01MC80MCBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LXN0b25lLTkwMCB0ZXh0LXNtIHNtOnRleHQtYmFzZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICAgIDxEb3dubG9hZCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+U3RlcCAwOiBEb3dubG9hZCBDb21wbGV0ZSBTb3VyY2UgQ29kZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN0b25lLTYwMCBtdC0xXCI+XG4gICAgICAgICAgICAgICAgUGFja2FnZXMgYWxsIGNvbXBvbmVudHMsIGltYWdlcywgc3R5bGVzLCBjb25maWdzLCBhbmQgd29ya2Zsb3cgWUFNTCBpbnRvIGEgc2luZ2xlIC5aSVAgZmlsZSByZWFkeSB0byBleHRyYWN0LlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wMyB9fVxuICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NyB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZENvZGV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rvd25sb2FkaW5nfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNSBweS0yLjUgdGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1vcmFuZ2UtNjAwIGhvdmVyOmJnLW9yYW5nZS01MDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctc20gc2hhZG93LW9yYW5nZS02MDAvMjUgd2hpdGVzcGFjZS1ub3dyYXAgY3Vyc29yLXBvaW50ZXIgc2hyaW5rLTBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNEb3dubG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8TG9hZGVyMiBjbGFzc05hbWU9XCJ3LTQgaC00IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8c3Bhbj57aXNEb3dubG9hZGluZyA/IChkb3dubG9hZFN0YXR1cyB8fCAnUHJlcGFyaW5nIFpJUC4uLicpIDogJ0Rvd25sb2FkIENvZGUgKC5aSVApJ308L3NwYW4+XG4gICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogTWV0aG9kIDE6IEdpdEh1YiBBY3Rpb25zIChSZWNvbW1lbmRlZCkgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zdG9uZS05MDAgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy1vcmFuZ2UtNjAwIHRleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC14cyBmb250LW1vbm8gZm9udC1ib2xkXCI+MTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5BdXRvbWF0aWMgRGVwbG95bWVudCAoR2l0SHViIEFjdGlvbnMg4oCUIFJlY29tbWVuZGVkKTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNjAwXCI+XG4gICAgICAgICAgICAgIENyZWF0ZSBhIHdvcmtmbG93IGZpbGUgaW4geW91ciBwcm9qZWN0IGF0IDxjb2RlIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTcwMCBmb250LW1vbm8gZm9udC1zZW1pYm9sZFwiPi5naXRodWIvd29ya2Zsb3dzL2RlcGxveS55bWw8L2NvZGU+LiBXaGVuZXZlciB5b3UgcHVzaCBjb2RlIHRvIEdpdEh1YiwgeW91ciBwb3J0Zm9saW8gd2lsbCBidWlsZCBhbmQgZGVwbG95IGF1dG9tYXRpY2FsbHkhXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgYmctc3RvbmUtOTAwIHAtMy41IGZvbnQtbW9ubyB0ZXh0LVsxMXB4XSB0ZXh0LXN0b25lLTIwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwYi0yIGJvcmRlci1iIGJvcmRlci1zdG9uZS04MDAgdGV4dC1bMTBweF0gdGV4dC1zdG9uZS00MDBcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4uZ2l0aHViL3dvcmtmbG93cy9kZXBsb3kueW1sPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNvcHlUb0NsaXBib2FyZCh3b3JrZmxvd1lhbWwsIDEpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1vcmFuZ2UtNDAwIGhvdmVyOnRleHQtb3JhbmdlLTMwMCBmb250LWJvbGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjb3BpZWRJbmRleCA9PT0gMSA/IDxDaGVjayBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtZW1lcmFsZC00MDBcIiAvPiA6IDxDb3B5IGNsYXNzTmFtZT1cInctMyBoLTNcIiAvPn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjb3BpZWRJbmRleCA9PT0gMSA/ICdDb3BpZWQnIDogJ0NvcHkgV29ya2Zsb3cgWUFNTCd9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJtdC0yIG92ZXJmbG93LXgtYXV0byBtYXgtaC00OCB0ZXh0LXN0b25lLTMwMFwiPlxuICAgICAgICAgICAgICAgIHt3b3JrZmxvd1lhbWx9XG4gICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogVGVybWluYWwgQ29tbWFuZHMgdG8gUHVzaCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMyBwdC0yXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwIHRleHQtc20gc206dGV4dC1iYXNlIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInctNSBoLTUgcm91bmRlZC1mdWxsIGJnLW9yYW5nZS02MDAgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzIGZvbnQtbW9ubyBmb250LWJvbGRcIj4yPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj5HaXQgQ29tbWFuZHMgdG8gSW5pdGlhbGl6ZSAmIFB1c2g8L3NwYW4+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNjAwXCI+XG4gICAgICAgICAgICAgIFJ1biB0aGVzZSBjb21tYW5kcyBpbiB5b3VyIGxvY2FsIHByb2plY3QgdGVybWluYWwgdG8gY29ubmVjdCB0byB5b3VyIEdpdEh1YiBhY2NvdW50OlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXN0b25lLTkwMCBwLTMuNSBmb250LW1vbm8gdGV4dC1bMTFweF0gdGV4dC1zdG9uZS0yMDAgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQtWzEwcHhdIHRleHQtc3RvbmUtNDAwIHBiLTEuNSBib3JkZXItYiBib3JkZXItc3RvbmUtODAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5UZXJtaW5hbCAvIEJhc2g8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weVRvQ2xpcGJvYXJkKGBnaXQgaW5pdFxcbmdpdCBhZGQgLlxcbmdpdCBjb21taXQgLW0gXCJmZWF0OiBwb3J0Zm9saW8gbGF1bmNoXCJcXG5naXQgYnJhbmNoIC1NIG1haW5cXG5naXQgcmVtb3RlIGFkZCBvcmlnaW4gaHR0cHM6Ly9naXRodWIuY29tLyR7UEVSU09OQUxfSU5GTy5naXRodWJVc2VybmFtZX0vcG9ydGZvbGlvLmdpdFxcbmdpdCBwdXNoIC11IG9yaWdpbiBtYWluYCwgMil9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LW9yYW5nZS00MDAgaG92ZXI6dGV4dC1vcmFuZ2UtMzAwIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvcGllZEluZGV4ID09PSAyID8gPENoZWNrIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1lbWVyYWxkLTQwMFwiIC8+IDogPENvcHkgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+fVxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvcGllZEluZGV4ID09PSAyID8gJ0NvcGllZCcgOiAnQ29weSBDb21tYW5kcyd9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMFwiPiMgMS4gSW5pdGlhbGl6ZSBnaXQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtc2VtaWJvbGRcIj5naXQgaW5pdDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC00MDAgZm9udC1zZW1pYm9sZFwiPmdpdCBhZGQgLjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC00MDAgZm9udC1zZW1pYm9sZFwiPmdpdCBjb21taXQgLW0gXCJmZWF0OiBwb3J0Zm9saW8gbGF1bmNoXCI8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTQwMCBwdC0xXCI+IyAyLiBMaW5rIHlvdXIgR2l0SHViIHJlcG9zaXRvcnk8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtc2VtaWJvbGRcIj5naXQgYnJhbmNoIC1NIG1haW48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWVtZXJhbGQtNDAwIGZvbnQtc2VtaWJvbGRcIj5naXQgcmVtb3RlIGFkZCBvcmlnaW4gaHR0cHM6Ly9naXRodWIuY29tL3tQRVJTT05BTF9JTkZPLmdpdGh1YlVzZXJuYW1lfS9wb3J0Zm9saW8uZ2l0PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTQwMCBmb250LXNlbWlib2xkXCI+Z2l0IHB1c2ggLXUgb3JpZ2luIG1haW48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIE1ldGhvZCAyOiBGYXN0IENMSSBkZXBsb3ltZW50IHdpdGggZ2gtcGFnZXMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTMgcHQtMlwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXN0b25lLTkwMCB0ZXh0LXNtIHNtOnRleHQtYmFzZSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy1zdG9uZS03MDAgdGV4dC13aGl0ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhzIGZvbnQtbW9ubyBmb250LWJvbGRcIj4zPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj5BbHRlcm5hdGl2ZTogSW5zdGFudCBDTEkgRGVwbG95IChgbnB4IGdoLXBhZ2VzYCk8L3NwYW4+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNjAwXCI+XG4gICAgICAgICAgICAgIElmIHlvdSBwcmVmZXIgbm90IHVzaW5nIEdpdEh1YiBBY3Rpb25zLCB5b3UgY2FuIGRlcGxveSB5b3VyIGJ1aWx0IDxjb2RlIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LW9yYW5nZS03MDAgZm9udC1zZW1pYm9sZFwiPmRpc3QvPC9jb2RlPiBkaXJlY3RvcnkgaW4gMSBjb21tYW5kOlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXN0b25lLTkwMCBwLTMuNSBmb250LW1vbm8gdGV4dC1bMTFweF0gdGV4dC1zdG9uZS0yMDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC1bMTBweF0gdGV4dC1zdG9uZS00MDAgcGItMS41IGJvcmRlci1iIGJvcmRlci1zdG9uZS04MDAgbWItMlwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPk9uZS1MaW5lIENMSSBEZXBsb3k8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY29weVRvQ2xpcGJvYXJkKCducG0gcnVuIGJ1aWxkICYmIG5weCBnaC1wYWdlcyAtZCBkaXN0JywgMyl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LW9yYW5nZS00MDAgaG92ZXI6dGV4dC1vcmFuZ2UtMzAwIGZvbnQtYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvcGllZEluZGV4ID09PSAzID8gPENoZWNrIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1lbWVyYWxkLTQwMFwiIC8+IDogPENvcHkgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+fVxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvcGllZEluZGV4ID09PSAzID8gJ0NvcGllZCcgOiAnQ29weSBDb21tYW5kJ308L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC00MDAgZm9udC1zZW1pYm9sZFwiPm5wbSBydW4gYnVpbGQgJiYgbnB4IGdoLXBhZ2VzIC1kIGRpc3Q8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEdpdEh1YiBTZXR0aW5ncyBTdGVwICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC0yeGwgYmctc3RvbmUtNTAgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgdGV4dC14cyBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXN0b25lLTkwMCBibG9ja1wiPkZpbmFsIHN0ZXAgaW4gR2l0SHViIHJlcG9zaXRvcnk6PC9zcGFuPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS02MDBcIj5cbiAgICAgICAgICAgICAgR28gdG8geW91ciByZXBvIG9uIEdpdEh1YiDihpIgPHN0cm9uZz5TZXR0aW5nczwvc3Ryb25nPiDihpIgPHN0cm9uZz5QYWdlczwvc3Ryb25nPiDihpIgVW5kZXIgPHN0cm9uZz5Tb3VyY2U8L3N0cm9uZz4sIHNlbGVjdCA8c3Ryb25nPkdpdEh1YiBBY3Rpb25zPC9zdHJvbmc+IChvciA8c3Ryb25nPkRlcGxveSBmcm9tIGEgYnJhbmNoPC9zdHJvbmc+IOKGkiA8Y29kZSBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS03MDAgZm9udC1tb25vIGZvbnQtc2VtaWJvbGRcIj5naC1wYWdlczwvY29kZT4pLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLXN0b25lLTIwMCBiZy1zdG9uZS01MCBweC02IHB5LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e1BFUlNPTkFMX0lORk8uZ2l0aHVifVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW9yYW5nZS02MDAgaG92ZXI6dGV4dC1vcmFuZ2UtNzAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGZvbnQtbW9ubyBmb250LWJvbGRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPk9wZW4ge1BFUlNPTkFMX0lORk8uZ2l0aHVifTwvc3Bhbj5cbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwidy0zIGgtM1wiIC8+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTUgcHktMiB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTUwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIHNoYWRvdy14c1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgR290IEl0IVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==