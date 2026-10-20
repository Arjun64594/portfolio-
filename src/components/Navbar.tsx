const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { FileText, Github, Linkedin, Menu, X, Rocket, Download, Loader2 } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
import { PERSONAL_INFO } from "/src/data/portfolioData.ts";
import { downloadProjectZip } from "/src/utils/downloadProjectZip.ts";
var _jsxFileName = "/app/applet/src/components/Navbar.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const Navbar = ({ onOpenResume, onOpenDeployGuide }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isDownloading, setIsDownloading] = useState(false);
	const [downloadStatus, setDownloadStatus] = useState("");
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
	const navLinks = [
		{
			label: "About",
			href: "#about"
		},
		{
			label: "Projects",
			href: "#projects"
		},
		{
			label: "Skills",
			href: "#skills"
		},
		{
			label: "Education & Certs",
			href: "#education"
		},
		{
			label: "Contact",
			href: "#contact"
		}
	];
	return /* @__PURE__ */ _jsxDEV("header", {
		className: "sticky top-0 z-40 w-full border-b border-stone-200/90 bg-white/90 backdrop-blur-md transition-all",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ _jsxDEV(motion.a, {
					href: "#",
					whileHover: { scale: 1.02 },
					whileTap: { scale: .98 },
					className: "text-lg font-bold tracking-tight text-stone-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "font-mono text-orange-600 font-extrabold",
							children: "</>"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-stone-900 font-extrabold",
							children: "ARJUN"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "text-orange-600 font-extrabold",
							children: "M"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 45,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("nav", {
					className: "hidden md:flex items-center gap-7 text-sm font-medium text-stone-600",
					children: navLinks.map((link) => /* @__PURE__ */ _jsxDEV("a", {
						href: link.href,
						className: "relative py-1 transition-colors hover:text-orange-600 hover:underline underline-offset-8 decoration-orange-500 whitespace-nowrap shrink-0",
						children: link.label
					}, link.label, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "hidden sm:flex items-center gap-2.5 shrink-0",
					children: [
						/* @__PURE__ */ _jsxDEV(motion.button, {
							whileHover: {
								y: -1,
								scale: 1.02
							},
							whileTap: { scale: .97 },
							onClick: handleDownloadCode,
							disabled: isDownloading,
							className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-stone-800 hover:text-orange-700 bg-orange-50/70 hover:bg-orange-100/80 border border-orange-200/80 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs",
							title: "Download full project code as a .ZIP file to upload to GitHub",
							children: [isDownloading ? /* @__PURE__ */ _jsxDEV(Loader2, { className: "w-3.5 h-3.5 text-orange-600 animate-spin" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 15
							}, this) : /* @__PURE__ */ _jsxDEV(Download, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: isDownloading ? downloadStatus || "Packaging..." : "Download Code (.ZIP)" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV(motion.button, {
							whileHover: {
								y: -1,
								scale: 1.02
							},
							whileTap: { scale: .97 },
							onClick: onOpenDeployGuide,
							className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200/80 border border-stone-200 rounded-xl transition-colors whitespace-nowrap shrink-0",
							title: "How to push this portfolio to GitHub Pages",
							children: [/* @__PURE__ */ _jsxDEV(Rocket, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 95,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Deploy Guide" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV(motion.button, {
							whileHover: {
								y: -1,
								scale: 1.03
							},
							whileTap: { scale: .96 },
							onClick: onOpenResume,
							className: "flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-xl transition-all shadow-sm shadow-orange-600/20 whitespace-nowrap shrink-0",
							children: [/* @__PURE__ */ _jsxDEV(FileText, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "View Resume" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex md:hidden items-center gap-2",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: handleDownloadCode,
							disabled: isDownloading,
							className: "p-2 text-orange-600 hover:bg-orange-50 rounded-lg border border-orange-200 flex items-center gap-1 text-xs font-bold",
							title: "Download ZIP",
							children: [isDownloading ? /* @__PURE__ */ _jsxDEV(Loader2, { className: "w-4 h-4 animate-spin" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 30
							}, this) : /* @__PURE__ */ _jsxDEV(Download, { className: "w-4 h-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 77
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "ZIP" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 119,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: onOpenResume,
							className: "px-2.5 py-1.5 text-xs font-bold text-white bg-orange-600 rounded-lg",
							children: "Resume"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setMobileMenuOpen(!mobileMenuOpen),
							className: "p-2 text-stone-600 hover:text-stone-900 focus:outline-none",
							"aria-label": "Toggle navigation menu",
							children: mobileMenuOpen ? /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 31
							}, this) : /* @__PURE__ */ _jsxDEV(Menu, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 59
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 129,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 42,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ _jsxDEV(motion.div, {
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "auto"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: { duration: .2 },
			className: "md:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-5 space-y-3",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-col space-y-2",
				children: navLinks.map((link) => /* @__PURE__ */ _jsxDEV("a", {
					href: link.href,
					onClick: () => setMobileMenuOpen(false),
					className: "py-2 text-sm font-medium text-stone-700 hover:text-orange-600 border-b border-stone-100",
					children: link.label
				}, link.label, false, {
					fileName: _jsxFileName,
					lineNumber: 151,
					columnNumber: 17
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 13
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "pt-2 flex flex-col gap-2",
				children: [
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							setMobileMenuOpen(false);
							handleDownloadCode();
						},
						disabled: isDownloading,
						className: "flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-orange-800 bg-orange-50 border border-orange-200 rounded-xl",
						children: [isDownloading ? /* @__PURE__ */ _jsxDEV(Loader2, { className: "w-4 h-4 animate-spin" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 170,
							columnNumber: 34
						}, this) : /* @__PURE__ */ _jsxDEV(Download, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 170,
							columnNumber: 81
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: isDownloading ? downloadStatus || "Packaging..." : "Download Full Code (.ZIP)" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 171,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 162,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => {
							setMobileMenuOpen(false);
							onOpenDeployGuide();
						},
						className: "flex items-center justify-center gap-2 w-full py-2 text-xs font-medium text-stone-800 bg-stone-100 hover:bg-orange-50 border border-stone-200 rounded-xl",
						children: [/* @__PURE__ */ _jsxDEV(Rocket, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 181,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: "GitHub Pages Deployment Guide" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 182,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 174,
						columnNumber: 15
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center justify-center gap-6 pt-2",
						children: [/* @__PURE__ */ _jsxDEV("a", {
							href: PERSONAL_INFO.github,
							target: "_blank",
							rel: "noreferrer",
							className: "text-xs text-stone-600 hover:text-orange-600 flex items-center gap-1 font-mono",
							children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 191,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "GitHub" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 192,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 185,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("a", {
							href: PERSONAL_INFO.linkedin,
							target: "_blank",
							rel: "noreferrer",
							className: "text-xs text-stone-600 hover:text-orange-600 flex items-center gap-1 font-mono",
							children: [/* @__PURE__ */ _jsxDEV(Linkedin, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 200,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "LinkedIn" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 201,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 194,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 184,
						columnNumber: 15
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 161,
				columnNumber: 13
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 142,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 140,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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bUI7TUFDckI7TUFDQSxVQUFVO01BQ1YsV0FBVTtnQkFOWixDQVFHLGdCQUFnQix3QkFBQyxTQUFELEVBQVMsV0FBVSx1QkFBd0I7Ozs7aUJBQUksd0JBQUMsVUFBRCxFQUFVLFdBQVUsMEJBQTJCOzs7O2dCQUMvRyx3QkFBQyxRQUFELFlBQU8sZ0JBQWlCLGtCQUFrQixpQkFBa0IsNEJBQWtDOzs7O2NBQ3hGOzs7Ozs7S0FFUix3QkFBQyxVQUFEO01BQ0UsZUFBZTtPQUNiLGtCQUFrQixLQUFLO09BQ3ZCLGtCQUFrQjtNQUNwQjtNQUNBLFdBQVU7Z0JBTFosQ0FPRSx3QkFBQyxRQUFELEVBQVEsV0FBVSw4QkFBK0I7Ozs7Z0JBQ2pELHdCQUFDLFFBQUQsWUFBTSxnQ0FBbUM7Ozs7Y0FDbkM7Ozs7OztLQUNSLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO2dCQUFmLENBQ0Usd0JBQUMsS0FBRDtPQUNFLE1BQU0sY0FBYztPQUNwQixRQUFPO09BQ1AsS0FBSTtPQUNKLFdBQVU7aUJBSlosQ0FNRSx3QkFBQyxRQUFELEVBQVEsV0FBVSxjQUFlOzs7O2lCQUNqQyx3QkFBQyxRQUFELFlBQU0sU0FBWTs7OztlQUNqQjs7Ozs7Z0JBQ0gsd0JBQUMsS0FBRDtPQUNFLE1BQU0sY0FBYztPQUNwQixRQUFPO09BQ1AsS0FBSTtPQUNKLFdBQVU7aUJBSlosQ0FNRSx3QkFBQyxVQUFELEVBQVUsV0FBVSw4QkFBK0I7Ozs7aUJBQ25ELHdCQUFDLFFBQUQsWUFBTSxXQUFjOzs7O2VBQ25COzs7OztjQUNBOzs7Ozs7SUFDRjs7Ozs7V0FDSzs7Ozs7V0FFQzs7OztVQUNYOzs7Ozs7QUFFWiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJOYXZiYXIudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IEZpbGVUZXh0LCBHaXRodWIsIExpbmtlZGluLCBNZW51LCBYLCBSb2NrZXQsIERvd25sb2FkLCBMb2FkZXIyIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IFBFUlNPTkFMX0lORk8gfSBmcm9tICcuLi9kYXRhL3BvcnRmb2xpb0RhdGEnO1xuaW1wb3J0IHsgZG93bmxvYWRQcm9qZWN0WmlwIH0gZnJvbSAnLi4vdXRpbHMvZG93bmxvYWRQcm9qZWN0WmlwJztcblxuaW50ZXJmYWNlIE5hdmJhclByb3BzIHtcbiAgb25PcGVuUmVzdW1lOiAoKSA9PiB2b2lkO1xuICBvbk9wZW5EZXBsb3lHdWlkZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE5hdmJhcjogUmVhY3QuRkM8TmF2YmFyUHJvcHM+ID0gKHsgb25PcGVuUmVzdW1lLCBvbk9wZW5EZXBsb3lHdWlkZSB9KSA9PiB7XG4gIGNvbnN0IFttb2JpbGVNZW51T3Blbiwgc2V0TW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEb3dubG9hZGluZywgc2V0SXNEb3dubG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkb3dubG9hZFN0YXR1cywgc2V0RG93bmxvYWRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZURvd25sb2FkQ29kZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0SXNEb3dubG9hZGluZyh0cnVlKTtcbiAgICAgIGF3YWl0IGRvd25sb2FkUHJvamVjdFppcCgoc3RhdHVzKSA9PiBzZXREb3dubG9hZFN0YXR1cyhzdGF0dXMpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2V0SXNEb3dubG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHNldERvd25sb2FkU3RhdHVzKCcnKTtcbiAgICAgIH0sIDE1MDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBuYXZMaW5rcyA9IFtcbiAgICB7IGxhYmVsOiAnQWJvdXQnLCBocmVmOiAnI2Fib3V0JyB9LFxuICAgIHsgbGFiZWw6ICdQcm9qZWN0cycsIGhyZWY6ICcjcHJvamVjdHMnIH0sXG4gICAgeyBsYWJlbDogJ1NraWxscycsIGhyZWY6ICcjc2tpbGxzJyB9LFxuICAgIHsgbGFiZWw6ICdFZHVjYXRpb24gJiBDZXJ0cycsIGhyZWY6ICcjZWR1Y2F0aW9uJyB9LFxuICAgIHsgbGFiZWw6ICdDb250YWN0JywgaHJlZjogJyNjb250YWN0JyB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei00MCB3LWZ1bGwgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTIwMC85MCBiZy13aGl0ZS85MCBiYWNrZHJvcC1ibHVyLW1kIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICB7LyogU3RyaWN0IDMtWm9uZSBUb3AgQmFyIENvbnRyYWN0ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIGZsZXggaC0xNiBtYXgtdy03eGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtOCBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICBcbiAgICAgICAgey8qIFpvbmUgMTogU2luZ2xlIHRleHQgZWxlbWVudCB3b3JkbWFyayAqL31cbiAgICAgICAgPG1vdGlvbi5hIFxuICAgICAgICAgIGhyZWY9XCIjXCIgXG4gICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wMiB9fVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk4IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zdG9uZS05MDAgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXAgc2hyaW5rLTAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtb3JhbmdlLTYwMCBmb250LWV4dHJhYm9sZFwiPiZsdDsvJmd0Ozwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTkwMCBmb250LWV4dHJhYm9sZFwiPkFSSlVOPC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBmb250LWV4dHJhYm9sZFwiPk08L3NwYW4+XG4gICAgICAgIDwvbW90aW9uLmE+XG5cbiAgICAgICAgey8qIFpvbmUgMjogQ2xlYW4gc2luZ2xlLWxpbmUgdGV4dCBuYXZpZ2F0aW9uIGxpbmtzICovfVxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNyB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc3RvbmUtNjAwXCI+XG4gICAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAga2V5PXtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTEgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTggZGVjb3JhdGlvbi1vcmFuZ2UtNTAwIHdoaXRlc3BhY2Utbm93cmFwIHNocmluay0wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIHsvKiBab25lIDM6IFByaW1hcnkgYWN0aW9uICsgRG93bmxvYWQgQ29kZSArIFF1aWNrIERlcGxveW1lbnQgSGVscGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMi41IHNocmluay0wXCI+XG4gICAgICAgICAgey8qIERvd25sb2FkIENvZGUgQnV0dG9uICovfVxuICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0xLCBzY2FsZTogMS4wMiB9fVxuICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTcgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkQ29kZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rvd25sb2FkaW5nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTgwMCBob3Zlcjp0ZXh0LW9yYW5nZS03MDAgYmctb3JhbmdlLTUwLzcwIGhvdmVyOmJnLW9yYW5nZS0xMDAvODAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwLzgwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnMgd2hpdGVzcGFjZS1ub3dyYXAgc2hyaW5rLTAgY3Vyc29yLXBvaW50ZXIgc2hhZG93LXhzXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRG93bmxvYWQgZnVsbCBwcm9qZWN0IGNvZGUgYXMgYSAuWklQIGZpbGUgdG8gdXBsb2FkIHRvIEdpdEh1YlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzRG93bmxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtb3JhbmdlLTYwMCBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPHNwYW4+e2lzRG93bmxvYWRpbmcgPyAoZG93bmxvYWRTdGF0dXMgfHwgJ1BhY2thZ2luZy4uLicpIDogJ0Rvd25sb2FkIENvZGUgKC5aSVApJ308L3NwYW4+XG4gICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuXG4gICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTEsIHNjYWxlOiAxLjAyIH19XG4gICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45NyB9fVxuICAgICAgICAgICAgb25DbGljaz17b25PcGVuRGVwbG95R3VpZGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tb25vIGZvbnQtbWVkaXVtIHRleHQtc3RvbmUtNzAwIGhvdmVyOnRleHQtc3RvbmUtOTAwIGJnLXN0b25lLTEwMCBob3ZlcjpiZy1zdG9uZS0yMDAvODAgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcCBzaHJpbmstMFwiXG4gICAgICAgICAgICB0aXRsZT1cIkhvdyB0byBwdXNoIHRoaXMgcG9ydGZvbGlvIHRvIEdpdEh1YiBQYWdlc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFJvY2tldCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgPHNwYW4+RGVwbG95IEd1aWRlPC9zcGFuPlxuICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cblxuICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0xLCBzY2FsZTogMS4wMyB9fVxuICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTYgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblJlc3VtZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtNCBweS0yIHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNTAwIGFjdGl2ZTpiZy1vcmFuZ2UtNzAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgc2hhZG93LXNtIHNoYWRvdy1vcmFuZ2UtNjAwLzIwIHdoaXRlc3BhY2Utbm93cmFwIHNocmluay0wXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmlsZVRleHQgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgPHNwYW4+VmlldyBSZXN1bWU8L3NwYW4+XG4gICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogTW9iaWxlIG1lbnUgYnV0dG9uICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6aGlkZGVuIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkQ29kZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rvd25sb2FkaW5nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNTAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLW9yYW5nZS0yMDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC14cyBmb250LWJvbGRcIlxuICAgICAgICAgICAgdGl0bGU9XCJEb3dubG9hZCBaSVBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0Rvd25sb2FkaW5nID8gPExvYWRlcjIgY2xhc3NOYW1lPVwidy00IGgtNCBhbmltYXRlLXNwaW5cIiAvPiA6IDxEb3dubG9hZCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz59XG4gICAgICAgICAgICA8c3Bhbj5aSVA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5SZXN1bWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yLjUgcHktMS41IHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctb3JhbmdlLTYwMCByb3VuZGVkLWxnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXN1bWVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVNZW51T3BlbighbW9iaWxlTWVudU9wZW4pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtc3RvbmUtNjAwIGhvdmVyOnRleHQtc3RvbmUtOTAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb24gbWVudVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge21vYmlsZU1lbnVPcGVuID8gPFggY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+IDogPE1lbnUgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogTW9iaWxlIERyYXdlciAqL31cbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIHttb2JpbGVNZW51T3BlbiAmJiAoXG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIGhlaWdodDogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBoZWlnaHQ6ICdhdXRvJyB9fVxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCBoZWlnaHQ6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGJvcmRlci1iIGJvcmRlci1zdG9uZS0yMDAgYmctd2hpdGUgcHgtNCBwdC0zIHBiLTUgc3BhY2UteS0zXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAga2V5PXtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgaHJlZj17bGluay5ocmVmfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc3RvbmUtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCBib3JkZXItYiBib3JkZXItc3RvbmUtMTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgZmxleCBmbGV4LWNvbCBnYXAtMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgaGFuZGxlRG93bmxvYWRDb2RlKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEb3dubG9hZGluZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB3LWZ1bGwgcHktMi41IHRleHQteHMgZm9udC1ib2xkIHRleHQtb3JhbmdlLTgwMCBiZy1vcmFuZ2UtNTAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwIHJvdW5kZWQteGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2lzRG93bmxvYWRpbmcgPyA8TG9hZGVyMiBjbGFzc05hbWU9XCJ3LTQgaC00IGFuaW1hdGUtc3BpblwiIC8+IDogPERvd25sb2FkIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1vcmFuZ2UtNjAwXCIgLz59XG4gICAgICAgICAgICAgICAgPHNwYW4+e2lzRG93bmxvYWRpbmcgPyAoZG93bmxvYWRTdGF0dXMgfHwgJ1BhY2thZ2luZy4uLicpIDogJ0Rvd25sb2FkIEZ1bGwgQ29kZSAoLlpJUCknfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIG9uT3BlbkRlcGxveUd1aWRlKCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB3LWZ1bGwgcHktMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtc3RvbmUtODAwIGJnLXN0b25lLTEwMCBob3ZlcjpiZy1vcmFuZ2UtNTAgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgcm91bmRlZC14bFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Um9ja2V0IGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+R2l0SHViIFBhZ2VzIERlcGxveW1lbnQgR3VpZGU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02IHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17UEVSU09OQUxfSU5GTy5naXRodWJ9XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LW1vbm9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxHaXRodWIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+R2l0SHViPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17UEVSU09OQUxfSU5GTy5saW5rZWRpbn1cbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdG9uZS02MDAgaG92ZXI6dGV4dC1vcmFuZ2UtNjAwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xIGZvbnQtbW9ub1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPExpbmtlZGluIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5MaW5rZWRJbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICApfVxuICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuIl19