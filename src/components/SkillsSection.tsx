const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { Search, Shield, Database, Layout, Server, Cloud } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
import { SKILL_CATEGORIES } from "/src/data/portfolioData.ts";
var _jsxFileName = "/app/applet/src/components/SkillsSection.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const SkillsSection = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");
	const categoryIcons = {
		"Frontend Development": /* @__PURE__ */ _jsxDEV(Layout, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 11,
			columnNumber: 29
		}, this),
		"Backend & APIs": /* @__PURE__ */ _jsxDEV(Server, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 23
		}, this),
		"Cyber Security & Tooling": /* @__PURE__ */ _jsxDEV(Shield, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 33
		}, this),
		"Databases & Languages": /* @__PURE__ */ _jsxDEV(Database, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 30
		}, this),
		"Cloud & Dev Platforms": /* @__PURE__ */ _jsxDEV(Cloud, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 30
		}, this)
	};
	const filteredCategories = SKILL_CATEGORIES.map((cat) => {
		const matchesCategory = activeCategory === "All" || cat.title === activeCategory;
		if (!matchesCategory) return null;
		const filteredSkills = cat.skills.filter((skill) => skill.name.toLowerCase().includes(searchQuery.toLowerCase()) || skill.detail.toLowerCase().includes(searchQuery.toLowerCase()));
		if (filteredSkills.length === 0 && searchQuery.trim() !== "") return null;
		return {
			...cat,
			skills: filteredSkills
		};
	}).filter(Boolean);
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "skills",
		className: "py-16 lg:py-24 border-b border-stone-200 bg-stone-50/30",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-200",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-mono text-orange-600 font-bold uppercase tracking-wider mb-1",
							children: "Technical Matrix"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900",
							children: ["Skills, Toolchains & ", /* @__PURE__ */ _jsxDEV("span", {
								className: "text-orange-600",
								children: "Security Stack"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 36
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-2 text-sm text-stone-600 max-w-2xl",
							children: "Practical competencies acquired through hands-on project builds, lab security testing, and enterprise cloud training."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 13
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "relative w-full md:w-72",
						children: [/* @__PURE__ */ _jsxDEV(Search, { className: "absolute left-3.5 top-2.5 w-4 h-4 text-stone-400" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("input", {
							type: "text",
							placeholder: "Search skills (e.g. OWASP, React, MySQL)...",
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							className: "w-full rounded-2xl border border-stone-200 bg-white py-2 pl-10 pr-4 text-xs text-stone-900 placeholder-stone-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 shadow-xs"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-6 flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setActiveCategory("All"),
						className: `px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ${activeCategory === "All" ? "bg-orange-600 text-white shadow-xs" : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"}`,
						children: "All Categories"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 11
					}, this), SKILL_CATEGORIES.map((cat) => /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setActiveCategory(cat.title),
						className: `px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${activeCategory === cat.title ? "bg-orange-600 text-white shadow-xs" : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200"}`,
						children: [categoryIcons[cat.title], /* @__PURE__ */ _jsxDEV("span", { children: cat.title }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 15
						}, this)]
					}, cat.title, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 13
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV(motion.div, {
					layout: true,
					className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: /* @__PURE__ */ _jsxDEV(AnimatePresence, { children: filteredCategories.map((cat) => cat && /* @__PURE__ */ _jsxDEV(motion.div, {
						layout: true,
						initial: {
							opacity: 0,
							y: 15
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							scale: .95
						},
						transition: { duration: .3 },
						whileHover: {
							y: -4,
							transition: { duration: .2 }
						},
						className: "rounded-3xl border border-stone-200 bg-white p-6 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-orange-300 transition-all",
						children: [/* @__PURE__ */ _jsxDEV("div", { children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 text-stone-900 font-bold text-base mb-1",
								children: [categoryIcons[cat.title], /* @__PURE__ */ _jsxDEV("h3", {
									className: "hover:text-orange-600 transition-colors",
									children: cat.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-stone-500 mb-5",
								children: cat.description
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "space-y-2.5",
								children: cat.skills.map((skill) => /* @__PURE__ */ _jsxDEV("div", {
									className: "group p-3 rounded-2xl bg-stone-50 border border-stone-100 hover:border-orange-200 hover:bg-orange-50/40 transition-colors",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between text-xs",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "font-bold text-stone-900 group-hover:text-orange-600 transition-colors",
											children: skill.name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 129,
											columnNumber: 27
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono text-[11px] font-semibold text-orange-700",
											children: skill.level
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 132,
											columnNumber: 27
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 128,
										columnNumber: 25
									}, this), /* @__PURE__ */ _jsxDEV("p", {
										className: "mt-1 text-[11px] text-stone-600 leading-normal",
										children: skill.detail
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 25
									}, this)]
								}, skill.name, true, {
									fileName: _jsxFileName,
									lineNumber: 124,
									columnNumber: 23
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 17
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500",
							children: [/* @__PURE__ */ _jsxDEV("span", { children: [cat.skills.length, " competencies listed"] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 146,
								columnNumber: 19
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-orange-700 font-semibold",
								children: "Active Lab Verified"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 145,
							columnNumber: 17
						}, this)]
					}, cat.title, true, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 15
					}, this)) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 96,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUFHLEdBQUc7TUFBRTtNQUM1QixNQUFNO09BQUUsU0FBUztPQUFHLE9BQU87TUFBSztNQUNoQyxZQUFZLEVBQUUsVUFBVSxHQUFJO01BQzVCLFlBQVk7T0FBRSxHQUFHLENBQUM7T0FBRyxZQUFZLEVBQUUsVUFBVSxHQUFJO01BQUU7TUFDbkQsV0FBVTtnQkFSWixDQVVFLHdCQUFDLE9BQUQ7T0FDRSx3QkFBQyxPQUFEO1FBQUssV0FBVTtrQkFBZixDQUNHLGNBQWMsSUFBSSxRQUNuQix3QkFBQyxNQUFEO1NBQUksV0FBVTttQkFBMkMsSUFBSTtRQUFVOzs7O2dCQUNwRTs7Ozs7O09BQ0wsd0JBQUMsS0FBRDtRQUFHLFdBQVU7a0JBQ1YsSUFBSTtPQUNKOzs7OztPQUdILHdCQUFDLE9BQUQ7UUFBSyxXQUFVO2tCQUNaLElBQUksT0FBTyxLQUFLLFVBQ2Ysd0JBQUMsT0FBRDtTQUVFLFdBQVU7bUJBRlosQ0FJRSx3QkFBQyxPQUFEO1VBQUssV0FBVTtvQkFBZixDQUNFLHdCQUFDLFFBQUQ7V0FBTSxXQUFVO3FCQUNiLE1BQU07VUFDSDs7OztvQkFDTix3QkFBQyxRQUFEO1dBQU0sV0FBVTtxQkFDYixNQUFNO1VBQ0g7Ozs7a0JBQ0g7Ozs7O21CQUNMLHdCQUFDLEtBQUQ7VUFBRyxXQUFVO29CQUNWLE1BQU07U0FDTjs7OztpQkFDQTtXQWRFLE1BQU07Ozs7ZUFjUixDQUNOO09BQ0U7Ozs7O01BQ0Y7Ozs7Z0JBR0wsd0JBQUMsT0FBRDtPQUFLLFdBQVU7aUJBQWYsQ0FDRSx3QkFBQyxRQUFELGFBQU8sSUFBSSxPQUFPLFFBQU8sc0JBQTBCOzs7O2lCQUNuRCx3QkFBQyxRQUFEO1FBQU0sV0FBVTtrQkFBZ0M7T0FBeUI7Ozs7ZUFDdEU7Ozs7O2NBQ0s7UUE5Q0wsSUFBSTs7OztZQThDQyxDQUNiLEVBQ2M7Ozs7O0lBQ1A7Ozs7O0dBRVQ7Ozs7OztDQUNFOzs7OztBQUViIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIlNraWxsc1NlY3Rpb24udHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IFNlYXJjaCwgU2hpZWxkLCBEYXRhYmFzZSwgTGF5b3V0LCBTZXJ2ZXIsIENsb3VkIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IFNLSUxMX0NBVEVHT1JJRVMgfSBmcm9tICcuLi9kYXRhL3BvcnRmb2xpb0RhdGEnO1xuXG5leHBvcnQgY29uc3QgU2tpbGxzU2VjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hRdWVyeSwgc2V0U2VhcmNoUXVlcnldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYWN0aXZlQ2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlPHN0cmluZz4oJ0FsbCcpO1xuXG4gIGNvbnN0IGNhdGVnb3J5SWNvbnM6IFJlY29yZDxzdHJpbmcsIFJlYWN0LlJlYWN0Tm9kZT4gPSB7XG4gICAgJ0Zyb250ZW5kIERldmVsb3BtZW50JzogPExheW91dCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtb3JhbmdlLTYwMFwiIC8+LFxuICAgICdCYWNrZW5kICYgQVBJcyc6IDxTZXJ2ZXIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW9yYW5nZS02MDBcIiAvPixcbiAgICAnQ3liZXIgU2VjdXJpdHkgJiBUb29saW5nJzogPFNoaWVsZCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtb3JhbmdlLTYwMFwiIC8+LFxuICAgICdEYXRhYmFzZXMgJiBMYW5ndWFnZXMnOiA8RGF0YWJhc2UgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW9yYW5nZS02MDBcIiAvPixcbiAgICAnQ2xvdWQgJiBEZXYgUGxhdGZvcm1zJzogPENsb3VkIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZENhdGVnb3JpZXMgPSBTS0lMTF9DQVRFR09SSUVTLm1hcCgoY2F0KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlc0NhdGVnb3J5ID0gYWN0aXZlQ2F0ZWdvcnkgPT09ICdBbGwnIHx8IGNhdC50aXRsZSA9PT0gYWN0aXZlQ2F0ZWdvcnk7XG4gICAgaWYgKCFtYXRjaGVzQ2F0ZWdvcnkpIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgZmlsdGVyZWRTa2lsbHMgPSBjYXQuc2tpbGxzLmZpbHRlcigoc2tpbGwpID0+XG4gICAgICBza2lsbC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgIHNraWxsLmRldGFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgKTtcblxuICAgIGlmIChmaWx0ZXJlZFNraWxscy5sZW5ndGggPT09IDAgJiYgc2VhcmNoUXVlcnkudHJpbSgpICE9PSAnJykgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uY2F0LFxuICAgICAgc2tpbGxzOiBmaWx0ZXJlZFNraWxsc1xuICAgIH07XG4gIH0pLmZpbHRlcihCb29sZWFuKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwic2tpbGxzXCIgY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjQgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTIwMCBiZy1zdG9uZS01MC8zMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICBcbiAgICAgICAgey8qIEhlYWRlciB3aXRoIE9yYW5nZSBUZXh0IEhpZ2hsaWdodHMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtZDppdGVtcy1lbmQganVzdGlmeS1iZXR3ZWVuIGdhcC02IHBiLTggYm9yZGVyLWIgYm9yZGVyLXN0b25lLTIwMFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHRleHQtb3JhbmdlLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG1iLTFcIj5cbiAgICAgICAgICAgICAgVGVjaG5pY2FsIE1hdHJpeFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zdG9uZS05MDBcIj5cbiAgICAgICAgICAgICAgU2tpbGxzLCBUb29sY2hhaW5zICYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNjAwXCI+U2VjdXJpdHkgU3RhY2s8L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHRleHQtc3RvbmUtNjAwIG1heC13LTJ4bFwiPlxuICAgICAgICAgICAgICBQcmFjdGljYWwgY29tcGV0ZW5jaWVzIGFjcXVpcmVkIHRocm91Z2ggaGFuZHMtb24gcHJvamVjdCBidWlsZHMsIGxhYiBzZWN1cml0eSB0ZXN0aW5nLCBcbiAgICAgICAgICAgICAgYW5kIGVudGVycHJpc2UgY2xvdWQgdHJhaW5pbmcuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU2VhcmNoIGJhciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtZDp3LTcyXCI+XG4gICAgICAgICAgICA8U2VhcmNoIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMy41IHRvcC0yLjUgdy00IGgtNCB0ZXh0LXN0b25lLTQwMFwiIC8+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBza2lsbHMgKGUuZy4gT1dBU1AsIFJlYWN0LCBNeVNRTCkuLi5cIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgYmctd2hpdGUgcHktMiBwbC0xMCBwci00IHRleHQteHMgdGV4dC1zdG9uZS05MDAgcGxhY2Vob2xkZXItc3RvbmUtNDAwIGZvY3VzOmJvcmRlci1vcmFuZ2UtNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1vcmFuZ2UtNTAwIHNoYWRvdy14c1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogQ2F0ZWdvcnkgVGFicyAoRnVuY3Rpb25hbCBidXR0b25zIHdpdGggYWN0aXZlIHN0YXRlcykgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVDYXRlZ29yeSgnQWxsJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zLjUgcHktMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5ID09PSAnQWxsJ1xuICAgICAgICAgICAgICAgID8gJ2JnLW9yYW5nZS02MDAgdGV4dC13aGl0ZSBzaGFkb3cteHMnXG4gICAgICAgICAgICAgICAgOiAnYmctd2hpdGUgdGV4dC1zdG9uZS02MDAgaG92ZXI6dGV4dC1zdG9uZS05MDAgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAnXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbGwgQ2F0ZWdvcmllc1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtTS0lMTF9DQVRFR09SSUVTLm1hcCgoY2F0KSA9PiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGtleT17Y2F0LnRpdGxlfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVDYXRlZ29yeShjYXQudGl0bGUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BweC0zLjUgcHktMS41IHRleHQteHMgZm9udC1zZW1pYm9sZCByb3VuZGVkLXhsIHRyYW5zaXRpb24tYWxsIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgJHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9PT0gY2F0LnRpdGxlXG4gICAgICAgICAgICAgICAgICA/ICdiZy1vcmFuZ2UtNjAwIHRleHQtd2hpdGUgc2hhZG93LXhzJ1xuICAgICAgICAgICAgICAgICAgOiAnYmctd2hpdGUgdGV4dC1zdG9uZS02MDAgaG92ZXI6dGV4dC1zdG9uZS05MDAgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2F0ZWdvcnlJY29uc1tjYXQudGl0bGVdfVxuICAgICAgICAgICAgICA8c3Bhbj57Y2F0LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogU2tpbGwgQ2F0ZWdvcnkgQ2FyZHMgR3JpZCAqL31cbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgY2xhc3NOYW1lPVwibXQtOCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC02XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICB7ZmlsdGVyZWRDYXRlZ29yaWVzLm1hcCgoY2F0KSA9PiBjYXQgJiYgKFxuICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGtleT17Y2F0LnRpdGxlfVxuICAgICAgICAgICAgICAgIGxheW91dFxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTUgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjk1IH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtNCwgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMC4yIH0gfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZSBwLTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gc2hhZG93LXhzIGhvdmVyOnNoYWRvdy1sZyBob3Zlcjpib3JkZXItb3JhbmdlLTMwMCB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXN0b25lLTkwMCBmb250LWJvbGQgdGV4dC1iYXNlIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5SWNvbnNbY2F0LnRpdGxlXX1cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPntjYXQudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN0b25lLTUwMCBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgIHtjYXQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBTa2lsbHMgbGlzdCAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yLjVcIj5cbiAgICAgICAgICAgICAgICAgICAge2NhdC5za2lsbHMubWFwKChza2lsbCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2tpbGwubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHAtMyByb3VuZGVkLTJ4bCBiZy1zdG9uZS01MCBib3JkZXIgYm9yZGVyLXN0b25lLTEwMCBob3Zlcjpib3JkZXItb3JhbmdlLTIwMCBob3ZlcjpiZy1vcmFuZ2UtNTAvNDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwIGdyb3VwLWhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtza2lsbC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMXB4XSBmb250LXNlbWlib2xkIHRleHQtb3JhbmdlLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtza2lsbC5sZXZlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtWzExcHhdIHRleHQtc3RvbmUtNjAwIGxlYWRpbmctbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtza2lsbC5kZXRhaWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogQm90dG9tIHN0YXRzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBwdC0zIGJvcmRlci10IGJvcmRlci1zdG9uZS0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtWzExcHhdIGZvbnQtbW9ubyB0ZXh0LXN0b25lLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhdC5za2lsbHMubGVuZ3RofSBjb21wZXRlbmNpZXMgbGlzdGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNzAwIGZvbnQtc2VtaWJvbGRcIj5BY3RpdmUgTGFiIFZlcmlmaWVkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19