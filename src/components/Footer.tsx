const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { Github, Linkedin, Mail, ArrowUp, Rocket, FileText, Download } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
import { PERSONAL_INFO } from "/src/data/portfolioData.ts";
import { downloadProjectZip } from "/src/utils/downloadProjectZip.ts";
var _jsxFileName = "/app/applet/src/components/Footer.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const Footer = ({ onOpenResume, onOpenDeployGuide }) => {
	const [isDownloading, setIsDownloading] = useState(false);
	const handleDownloadCode = async () => {
		try {
			setIsDownloading(true);
			await downloadProjectZip();
		} catch (e) {
			console.error(e);
		} finally {
			setTimeout(() => setIsDownloading(false), 1500);
		}
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ _jsxDEV("footer", {
		className: "border-t border-stone-200 bg-white py-12 text-stone-600",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-100",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-col items-center md:items-start text-center md:text-left",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							className: "text-base font-extrabold text-stone-900 tracking-tight",
							children: ["ARJUN ", /* @__PURE__ */ _jsxDEV("span", {
								className: "text-orange-600",
								children: "M"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 21
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							className: "text-xs text-stone-500 mt-0.5",
							children: "Software Engineer & Cyber Security Specialist · Coimbatore, Tamil Nadu"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-stone-600",
						children: [
							/* @__PURE__ */ _jsxDEV("a", {
								href: "#about",
								className: "hover:text-orange-600 transition-colors",
								children: "About"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("a", {
								href: "#projects",
								className: "hover:text-orange-600 transition-colors",
								children: "Projects"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("a", {
								href: "#skills",
								className: "hover:text-orange-600 transition-colors",
								children: "Skills"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("a", {
								href: "#education",
								className: "hover:text-orange-600 transition-colors",
								children: "Education & Certs"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("a", {
								href: "#contact",
								className: "hover:text-orange-600 transition-colors",
								children: "Contact"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: onOpenResume,
								className: "text-orange-600 hover:text-orange-700 transition-colors flex items-center gap-1 font-bold",
								children: [/* @__PURE__ */ _jsxDEV(FileText, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 57,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Resume" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 58,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: handleDownloadCode,
								disabled: isDownloading,
								className: "text-stone-700 hover:text-orange-600 transition-colors flex items-center gap-1 font-bold cursor-pointer",
								children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: isDownloading ? "Packaging..." : "Download Code" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 67,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: onOpenDeployGuide,
								className: "text-stone-700 hover:text-orange-600 transition-colors flex items-center gap-1 font-mono font-medium",
								children: [/* @__PURE__ */ _jsxDEV(Rocket, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 74,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Deploy Guide" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 75,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ _jsxDEV(motion.a, {
								whileHover: { y: -2 },
								href: PERSONAL_INFO.github,
								target: "_blank",
								rel: "noreferrer",
								className: "p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors",
								"aria-label": "GitHub Profile",
								children: /* @__PURE__ */ _jsxDEV(Github, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV(motion.a, {
								whileHover: { y: -2 },
								href: PERSONAL_INFO.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "p-2 text-stone-600 hover:text-orange-600 hover:bg-stone-100 rounded-xl transition-colors",
								"aria-label": "LinkedIn Profile",
								children: /* @__PURE__ */ _jsxDEV(Linkedin, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV(motion.a, {
								whileHover: { y: -2 },
								href: `mailto:${PERSONAL_INFO.email}`,
								className: "p-2 text-stone-600 hover:text-orange-600 hover:bg-stone-100 rounded-xl transition-colors",
								"aria-label": "Email",
								children: /* @__PURE__ */ _jsxDEV(Mail, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 107,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 101,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-mono",
				children: [/* @__PURE__ */ _jsxDEV("div", { children: [
					"© ",
					new Date().getFullYear(),
					" Arjun M. All rights reserved. Built with React, Tailwind & Motion."
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("button", {
					onClick: scrollToTop,
					className: "flex items-center gap-1 text-stone-600 hover:text-orange-600 font-medium transition-colors",
					children: [/* @__PURE__ */ _jsxDEV("span", { children: "Back to top" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV(ArrowUp, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 124,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 119,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 114,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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RTtRQUNwQixNQUFNLFVBQVUsY0FBYztRQUM5QixXQUFVO1FBQ1YsY0FBVztrQkFFWCx3QkFBQyxNQUFELEVBQU0sV0FBVSxVQUFXOzs7OztPQUNuQjs7Ozs7TUFDUDs7Ozs7O0lBRUY7Ozs7O2FBR0wsd0JBQUMsT0FBRDtJQUFLLFdBQVU7Y0FBZixDQUNFLHdCQUFDLE9BQUQ7S0FBSztLQUNBLElBQUksS0FBSyxDQUFDLENBQUMsWUFBWTtLQUFFO0lBQ3pCOzs7O2NBRUwsd0JBQUMsVUFBRDtLQUNFLFNBQVM7S0FDVCxXQUFVO2VBRlosQ0FJRSx3QkFBQyxRQUFELFlBQU0sY0FBaUI7Ozs7ZUFDdkIsd0JBQUMsU0FBRCxFQUFTLFdBQVUsOEJBQStCOzs7O2FBQzVDOzs7OztZQUNMOzs7OztXQUVGOzs7Ozs7Q0FDQzs7Ozs7QUFFWiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJGb290ZXIudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ21vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBHaXRodWIsIExpbmtlZGluLCBNYWlsLCBBcnJvd1VwLCBSb2NrZXQsIEZpbGVUZXh0LCBEb3dubG9hZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBQRVJTT05BTF9JTkZPIH0gZnJvbSAnLi4vZGF0YS9wb3J0Zm9saW9EYXRhJztcbmltcG9ydCB7IGRvd25sb2FkUHJvamVjdFppcCB9IGZyb20gJy4uL3V0aWxzL2Rvd25sb2FkUHJvamVjdFppcCc7XG5cbmludGVyZmFjZSBGb290ZXJQcm9wcyB7XG4gIG9uT3BlblJlc3VtZTogKCkgPT4gdm9pZDtcbiAgb25PcGVuRGVwbG95R3VpZGU6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXI6IFJlYWN0LkZDPEZvb3RlclByb3BzPiA9ICh7IG9uT3BlblJlc3VtZSwgb25PcGVuRGVwbG95R3VpZGUgfSkgPT4ge1xuICBjb25zdCBbaXNEb3dubG9hZGluZywgc2V0SXNEb3dubG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRG93bmxvYWRDb2RlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBzZXRJc0Rvd25sb2FkaW5nKHRydWUpO1xuICAgICAgYXdhaXQgZG93bmxvYWRQcm9qZWN0WmlwKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc0Rvd25sb2FkaW5nKGZhbHNlKSwgMTUwMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItc3RvbmUtMjAwIGJnLXdoaXRlIHB5LTEyIHRleHQtc3RvbmUtNjAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNiBwYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS0xMDBcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1kOml0ZW1zLXN0YXJ0IHRleHQtY2VudGVyIG1kOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtZXh0cmFib2xkIHRleHQtc3RvbmUtOTAwIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgIEFSSlVOIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMFwiPk08L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNTAwIG10LTAuNVwiPlxuICAgICAgICAgICAgICBTb2Z0d2FyZSBFbmdpbmVlciAmIEN5YmVyIFNlY3VyaXR5IFNwZWNpYWxpc3QgwrcgQ29pbWJhdG9yZSwgVGFtaWwgTmFkdVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFF1aWNrIEFjdGlvbiBMaW5rcyB3aXRoIE9yYW5nZSBIb3ZlciBTdGF0ZXMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc3RvbmUtNjAwXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1vcmFuZ2UtNjAwIHRyYW5zaXRpb24tY29sb3JzXCI+QWJvdXQ8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI3Byb2plY3RzXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1vcmFuZ2UtNjAwIHRyYW5zaXRpb24tY29sb3JzXCI+UHJvamVjdHM8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI3NraWxsc1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlNraWxsczwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjZWR1Y2F0aW9uXCIgY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1vcmFuZ2UtNjAwIHRyYW5zaXRpb24tY29sb3JzXCI+RWR1Y2F0aW9uICYgQ2VydHM8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LW9yYW5nZS02MDAgdHJhbnNpdGlvbi1jb2xvcnNcIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5SZXN1bWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS03MDAgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgZm9udC1ib2xkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZpbGVUZXh0IGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+UmVzdW1lPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURvd25sb2FkQ29kZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRG93bmxvYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+e2lzRG93bmxvYWRpbmcgPyAnUGFja2FnaW5nLi4uJyA6ICdEb3dubG9hZCBDb2RlJ308L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgb25DbGljaz17b25PcGVuRGVwbG95R3VpZGV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBmb250LW1vbm8gZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Um9ja2V0IGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPkRlcGxveSBHdWlkZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFNvY2lhbCBQcm9maWxlcyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiB9fVxuICAgICAgICAgICAgICBocmVmPXtQRVJTT05BTF9JTkZPLmdpdGh1Yn1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXN0b25lLTYwMCBob3Zlcjp0ZXh0LXN0b25lLTkwMCBob3ZlcjpiZy1zdG9uZS0xMDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJHaXRIdWIgUHJvZmlsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHaXRodWIgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICAgICAgaHJlZj17UEVSU09OQUxfSU5GTy5saW5rZWRpbn1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXN0b25lLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS02MDAgaG92ZXI6Ymctc3RvbmUtMTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiTGlua2VkSW4gUHJvZmlsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rZWRpbiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICAgICAgaHJlZj17YG1haWx0bzoke1BFUlNPTkFMX0lORk8uZW1haWx9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtc3RvbmUtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCBob3ZlcjpiZy1zdG9uZS0xMDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNYWlsIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUXVpZXQgY29weXJpZ2h0ICYgQmFjayB0byBUb3AgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgdGV4dC14cyB0ZXh0LXN0b25lLTUwMCBmb250LW1vbm9cIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQXJqdW4gTS4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gQnVpbHQgd2l0aCBSZWFjdCwgVGFpbHdpbmQgJiBNb3Rpb24uXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtzY3JvbGxUb1RvcH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtc3RvbmUtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+QmFjayB0byB0b3A8L3NwYW4+XG4gICAgICAgICAgICA8QXJyb3dVcCBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuIl19