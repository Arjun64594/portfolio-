const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport6_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { Github, ExternalLink } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
import { PROJECTS, PERSONAL_INFO } from "/src/data/portfolioData.ts";
import { ProjectCard } from "/src/components/ProjectCard.tsx";
import { ProjectDetailModal } from "/src/components/ProjectDetailModal.tsx";
var _jsxFileName = "/app/applet/src/components/ProjectsSection.tsx";
import __vite__cjsImport6_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const ProjectsSection = () => {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedProject, setSelectedProject] = useState(null);
	const categories = [
		"All",
		"Full-Stack",
		"Cyber Security",
		"IoT & Embedded"
	];
	const filteredProjects = selectedCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === selectedCategory);
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "projects",
		className: "py-16 lg:py-24 border-b border-stone-200 bg-stone-50/40",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-mono text-orange-600 font-bold tracking-wider uppercase mb-1",
							children: "Engineering Portfolio"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900",
							children: ["Featured Projects & ", /* @__PURE__ */ _jsxDEV("span", {
								className: "text-orange-600",
								children: "Secure Systems"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 35
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-2 text-sm text-stone-600 max-w-2xl",
							children: "Independent applications engineered across web application security, full-stack REST architectures, and real-time IoT micro-controllers."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-stone-200 rounded-2xl shadow-xs",
						children: categories.map((category) => /* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setSelectedCategory(category),
							className: `relative px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${selectedCategory === category ? "bg-orange-600 text-white shadow-sm shadow-orange-600/25" : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"}`,
							children: category
						}, category, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV(motion.div, {
					layout: true,
					className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: /* @__PURE__ */ _jsxDEV(AnimatePresence, {
						mode: "popLayout",
						children: filteredProjects.map((project) => /* @__PURE__ */ _jsxDEV(motion.div, {
							layout: true,
							initial: {
								opacity: 0,
								scale: .95
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							exit: {
								opacity: 0,
								scale: .95
							},
							transition: { duration: .3 },
							children: /* @__PURE__ */ _jsxDEV(ProjectCard, {
								project,
								onSelect: (p) => setSelectedProject(p)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 17
							}, this)
						}, project.id, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 60,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 56,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV(motion.div, {
					initial: {
						opacity: 0,
						y: 15
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .4 },
					className: "mt-12 rounded-3xl border border-stone-200 bg-white p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-3.5",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "p-3 rounded-2xl bg-orange-50 text-orange-600 border border-orange-100",
							children: /* @__PURE__ */ _jsxDEV(Github, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("h4", {
							className: "text-sm sm:text-base font-bold text-stone-900",
							children: "Explore more source code repositories on GitHub"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							className: "text-xs text-stone-500",
							children: ["Browse commits, branches, and scripts on @", PERSONAL_INFO.githubUsername]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 91,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV(motion.a, {
						whileHover: {
							y: -2,
							scale: 1.02
						},
						whileTap: { scale: .98 },
						href: PERSONAL_INFO.github,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-stone-900 hover:bg-orange-600 rounded-xl transition-colors shadow-sm whitespace-nowrap",
						children: [/* @__PURE__ */ _jsxDEV("span", { children: "Visit GitHub Profile" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3.5 h-3.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 80,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV(ProjectDetailModal, {
			project: selectedProject,
			onClose: () => setSelectedProject(null)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 117,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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YUFDQTs7Ozs7O0dBRVQ7Ozs7O1lBR0wsd0JBQUMsb0JBQUQ7R0FDRSxTQUFTO0dBQ1QsZUFBZSxtQkFBbUIsSUFBSTtFQUN2Qzs7OztVQUNNOzs7Ozs7QUFFYiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJQcm9qZWN0c1NlY3Rpb24udHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IEdpdGh1YiwgRXh0ZXJuYWxMaW5rIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IFByb2plY3QsIFBST0pFQ1RTLCBQRVJTT05BTF9JTkZPIH0gZnJvbSAnLi4vZGF0YS9wb3J0Zm9saW9EYXRhJztcbmltcG9ydCB7IFByb2plY3RDYXJkIH0gZnJvbSAnLi9Qcm9qZWN0Q2FyZCc7XG5pbXBvcnQgeyBQcm9qZWN0RGV0YWlsTW9kYWwgfSBmcm9tICcuL1Byb2plY3REZXRhaWxNb2RhbCc7XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0c1NlY3Rpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdBbGwnKTtcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlPFByb2plY3QgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gWydBbGwnLCAnRnVsbC1TdGFjaycsICdDeWJlciBTZWN1cml0eScsICdJb1QgJiBFbWJlZGRlZCddO1xuXG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBzZWxlY3RlZENhdGVnb3J5ID09PSAnQWxsJ1xuICAgID8gUFJPSkVDVFNcbiAgICA6IFBST0pFQ1RTLmZpbHRlcigocCkgPT4gcC5jYXRlZ29yeSA9PT0gc2VsZWN0ZWRDYXRlZ29yeSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCIgY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjQgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTIwMCBiZy1zdG9uZS01MC80MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICBcbiAgICAgICAgey8qIFNlY3Rpb24gSGVhZGVyICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBnYXAtNiBwYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS0yMDBcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LW9yYW5nZS02MDAgZm9udC1ib2xkIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZSBtYi0xXCI+XG4gICAgICAgICAgICAgIEVuZ2luZWVyaW5nIFBvcnRmb2xpb1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zdG9uZS05MDBcIj5cbiAgICAgICAgICAgICAgRmVhdHVyZWQgUHJvamVjdHMgJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS02MDBcIj5TZWN1cmUgU3lzdGVtczwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gdGV4dC1zdG9uZS02MDAgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgIEluZGVwZW5kZW50IGFwcGxpY2F0aW9ucyBlbmdpbmVlcmVkIGFjcm9zcyB3ZWIgYXBwbGljYXRpb24gc2VjdXJpdHksIGZ1bGwtc3RhY2sgUkVTVCBhcmNoaXRlY3R1cmVzLCBcbiAgICAgICAgICAgICAgYW5kIHJlYWwtdGltZSBJb1QgbWljcm8tY29udHJvbGxlcnMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogSW50ZXJhY3RpdmUgRmlsdGVyIENvbnRyb2xzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0xLjUgcC0xLjUgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgcm91bmRlZC0yeGwgc2hhZG93LXhzXCI+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkQ2F0ZWdvcnkoY2F0ZWdvcnkpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIHB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCB3aGl0ZXNwYWNlLW5vd3JhcCAke1xuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeSA9PT0gY2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgPyAnYmctb3JhbmdlLTYwMCB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBzaGFkb3ctb3JhbmdlLTYwMC8yNSdcbiAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1zdG9uZS02MDAgaG92ZXI6dGV4dC1zdG9uZS05MDAgaG92ZXI6Ymctc3RvbmUtNTAnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiAzLWluLWEtcm93IFByb2plY3RzIEdyaWQgd2l0aCBBbmltYXRlUHJlc2VuY2UgKi99XG4gICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgIGxheW91dFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTggZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBnYXAtNlwiXG4gICAgICAgID5cbiAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIG1vZGU9XCJwb3BMYXlvdXRcIj5cbiAgICAgICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICBsYXlvdXRcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjk1IH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBzY2FsZTogMSB9fVxuICAgICAgICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICAgICAgcHJvamVjdD17cHJvamVjdH1cbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsocCkgPT4gc2V0U2VsZWN0ZWRQcm9qZWN0KHApfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgey8qIEV4dGVybmFsIEdpdEh1YiBMaW5rIFN0cmlwICovfVxuICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDE1IH19XG4gICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjQgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xMiByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZSBwLTYgc206cC03IHNoYWRvdy1zbSBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMy41XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLTJ4bCBiZy1vcmFuZ2UtNTAgdGV4dC1vcmFuZ2UtNjAwIGJvcmRlciBib3JkZXItb3JhbmdlLTEwMFwiPlxuICAgICAgICAgICAgICA8R2l0aHViIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWJhc2UgZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwXCI+XG4gICAgICAgICAgICAgICAgRXhwbG9yZSBtb3JlIHNvdXJjZSBjb2RlIHJlcG9zaXRvcmllcyBvbiBHaXRIdWJcbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN0b25lLTUwMFwiPlxuICAgICAgICAgICAgICAgIEJyb3dzZSBjb21taXRzLCBicmFuY2hlcywgYW5kIHNjcmlwdHMgb24gQHtQRVJTT05BTF9JTkZPLmdpdGh1YlVzZXJuYW1lfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiwgc2NhbGU6IDEuMDIgfX1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjk4IH19XG4gICAgICAgICAgICBocmVmPXtQRVJTT05BTF9JTkZPLmdpdGh1Yn1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC01IHB5LTIuNSB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJnLXN0b25lLTkwMCBob3ZlcjpiZy1vcmFuZ2UtNjAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXNtIHdoaXRlc3BhY2Utbm93cmFwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj5WaXNpdCBHaXRIdWIgUHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgIDwvbW90aW9uLmE+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBQcm9qZWN0IERldGFpbCBNb2RhbCAqL31cbiAgICAgIDxQcm9qZWN0RGV0YWlsTW9kYWxcbiAgICAgICAgcHJvamVjdD17c2VsZWN0ZWRQcm9qZWN0fVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTZWxlY3RlZFByb2plY3QobnVsbCl9XG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXX0=