const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin, Check, Shield } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from "/src/data/portfolioData.ts";
var _jsxFileName = "/app/applet/src/components/EducationCertSection.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const EducationCertSection = () => {
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "education",
		className: "py-16 lg:py-24 border-b border-stone-200 bg-white",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "pb-8 border-b border-stone-200",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "text-xs font-mono text-orange-600 font-bold uppercase tracking-wider mb-1",
						children: "Academic Track & Credentials"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 13,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("h2", {
						className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900",
						children: ["Education, Certifications & ", /* @__PURE__ */ _jsxDEV("span", {
							className: "text-orange-600",
							children: "Achievements"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 17,
							columnNumber: 41
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 16,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "mt-2 text-sm text-stone-600 max-w-2xl",
						children: "Formal education in Computer Science (Cyber Security) alongside government-certified AWS cloud training."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-7 space-y-8",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2 text-stone-900 font-bold text-lg",
							children: [/* @__PURE__ */ _jsxDEV(GraduationCap, { className: "w-5 h-5 text-orange-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("h3", { children: "Academic Education" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-6",
							children: EDUCATION.map((edu, idx) => /* @__PURE__ */ _jsxDEV(motion.div, {
								initial: {
									opacity: 0,
									x: -15
								},
								whileInView: {
									opacity: 1,
									x: 0
								},
								viewport: { once: true },
								transition: {
									duration: .4,
									delay: idx * .1
								},
								className: "relative pl-6 border-l-2 border-stone-200 space-y-2 group",
								children: [
									/* @__PURE__ */ _jsxDEV("div", { className: "absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-orange-600 group-hover:scale-125 transition-transform" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 44,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-500",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "flex items-center gap-1.5 text-orange-600 font-bold",
											children: [/* @__PURE__ */ _jsxDEV(Calendar, { className: "w-3.5 h-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 48,
												columnNumber: 23
											}, this), edu.period]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 47,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "flex items-center gap-1 text-stone-600",
											children: [/* @__PURE__ */ _jsxDEV(MapPin, { className: "w-3 h-3 text-stone-400" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 52,
												columnNumber: 23
											}, this), edu.location]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 51,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("h4", {
										className: "text-base sm:text-lg font-bold text-stone-900",
										children: edu.degree
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 57,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-sm text-stone-700 font-medium",
										children: edu.institution
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 61,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "inline-flex items-center gap-2 text-xs font-mono py-1 px-3 rounded-xl bg-orange-50 border border-orange-200 text-stone-800",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-stone-600 font-semibold",
											children: [edu.scoreLabel, ":"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 67,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-extrabold text-orange-700",
											children: edu.score
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 68,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 66,
										columnNumber: 19
									}, this),
									edu.details && /* @__PURE__ */ _jsxDEV("ul", {
										className: "mt-2 space-y-1.5 text-xs text-stone-600",
										children: edu.details.map((detail, dIdx) => /* @__PURE__ */ _jsxDEV("li", {
											className: "flex items-start gap-2",
											children: [/* @__PURE__ */ _jsxDEV("span", {
												className: "text-orange-600 font-bold mt-0.5",
												children: "•"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 75,
												columnNumber: 27
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: detail }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 76,
												columnNumber: 27
											}, this)]
										}, dIdx, true, {
											fileName: _jsxFileName,
											lineNumber: 74,
											columnNumber: 25
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 72,
										columnNumber: 21
									}, this)
								]
							}, edu.institution, true, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 33,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "pt-6 border-t border-stone-200 space-y-4",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 text-stone-900 font-bold text-base",
								children: [/* @__PURE__ */ _jsxDEV(Shield, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 88,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("h3", { children: "Co-Curricular Achievements & Activities" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: ACHIEVEMENTS.map((ach, idx) => /* @__PURE__ */ _jsxDEV(motion.div, {
									whileHover: { y: -3 },
									className: "p-4 rounded-2xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-orange-300 hover:shadow-xs transition-all space-y-1.5",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-xs font-mono font-bold text-orange-600",
											children: ach.category
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 99,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-sm font-bold text-stone-900",
											children: ach.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 102,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-stone-600 leading-relaxed",
											children: ach.description
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 105,
											columnNumber: 21
										}, this)
									]
								}, ach.title, true, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 27,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-5 space-y-6",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 text-stone-900 font-bold text-lg",
						children: [/* @__PURE__ */ _jsxDEV(Award, { className: "w-5 h-5 text-orange-600" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("h3", { children: "Trainings & Certifications" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 13
					}, this), CERTIFICATIONS.map((cert) => /* @__PURE__ */ _jsxDEV(motion.div, {
						whileHover: { y: -4 },
						transition: { duration: .25 },
						className: "rounded-3xl border border-orange-200 bg-gradient-to-b from-orange-50/40 via-white to-white p-6 sm:p-7 shadow-sm space-y-5",
						children: [
							/* @__PURE__ */ _jsxDEV("div", { children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center justify-between text-xs font-mono font-bold text-orange-700 mb-1",
									children: [/* @__PURE__ */ _jsxDEV("span", { children: cert.affiliation }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 131,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "15 Days" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 132,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("h4", {
									className: "text-xl font-extrabold text-stone-900",
									children: cert.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-sm font-semibold text-stone-700 mt-0.5",
									children: cert.organization
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mt-2 text-xs font-mono text-stone-600 flex items-center gap-2",
									children: [
										/* @__PURE__ */ _jsxDEV("span", { children: ["Date: ", cert.period] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 141,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-stone-300",
											children: "·"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 142,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-orange-700 font-bold",
											children: ["Cert No: ", cert.certNumber]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 143,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 19
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 129,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs sm:text-sm text-stone-600 leading-relaxed",
								children: cert.description
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "space-y-2 border-t border-stone-200/80 pt-3",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs font-bold text-stone-700 uppercase tracking-wider",
									children: "Core Learning Outcomes"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("ul", {
									className: "space-y-1.5 text-xs text-stone-700",
									children: cert.bullets.map((b, bIdx) => /* @__PURE__ */ _jsxDEV("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 158,
											columnNumber: 25
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: b }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 159,
											columnNumber: 25
										}, this)]
									}, bIdx, true, {
										fileName: _jsxFileName,
										lineNumber: 157,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 155,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-2 border-t border-stone-200/80",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs font-bold text-stone-600 mb-2",
									children: "Technologies Mastered"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 167,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "flex flex-wrap gap-2 text-xs font-mono text-stone-800",
									children: cert.skillsCovered.map((sc, scIdx) => /* @__PURE__ */ _jsxDEV("span", {
										className: "inline-flex items-center",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-orange-800 font-semibold",
											children: sc
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 173,
											columnNumber: 25
										}, this), scIdx < cert.skillsCovered.length - 1 && /* @__PURE__ */ _jsxDEV("span", {
											className: "mx-2 text-orange-500 font-bold",
											children: "/"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 175,
											columnNumber: 27
										}, this)]
									}, sc, true, {
										fileName: _jsxFileName,
										lineNumber: 172,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 170,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 166,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "p-3 rounded-2xl bg-white border border-stone-200 text-[11px] font-mono text-stone-600 flex items-center justify-between shadow-xs",
								children: [/* @__PURE__ */ _jsxDEV("span", { children: ["Certificate ID: ", cert.certNumber] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 184,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "text-emerald-700 font-bold flex items-center gap-1",
									children: [/* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 21
									}, this), "Verified Credential"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 185,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 183,
								columnNumber: 17
							}, this)
						]
					}, cert.title, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 15
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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cmNlcyI6WyJFZHVjYXRpb25DZXJ0U2VjdGlvbi50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ21vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyBHcmFkdWF0aW9uQ2FwLCBBd2FyZCwgQ2hlY2tDaXJjbGUyLCBDYWxlbmRhciwgTWFwUGluLCBDaGVjaywgU2hpZWxkIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IEVEVUNBVElPTiwgQ0VSVElGSUNBVElPTlMsIEFDSElFVkVNRU5UUyB9IGZyb20gJy4uL2RhdGEvcG9ydGZvbGlvRGF0YSc7XG5cbmV4cG9ydCBjb25zdCBFZHVjYXRpb25DZXJ0U2VjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJlZHVjYXRpb25cIiBjbGFzc05hbWU9XCJweS0xNiBsZzpweS0yNCBib3JkZXItYiBib3JkZXItc3RvbmUtMjAwIGJnLXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIFxuICAgICAgICB7LyogU2VjdGlvbiBIZWFkZXIgd2l0aCBPcmFuZ2UgVGV4dCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi04IGJvcmRlci1iIGJvcmRlci1zdG9uZS0yMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHRleHQtb3JhbmdlLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG1iLTFcIj5cbiAgICAgICAgICAgIEFjYWRlbWljIFRyYWNrICYgQ3JlZGVudGlhbHNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zdG9uZS05MDBcIj5cbiAgICAgICAgICAgIEVkdWNhdGlvbiwgQ2VydGlmaWNhdGlvbnMgJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS02MDBcIj5BY2hpZXZlbWVudHM8L3NwYW4+XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gdGV4dC1zdG9uZS02MDAgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICBGb3JtYWwgZWR1Y2F0aW9uIGluIENvbXB1dGVyIFNjaWVuY2UgKEN5YmVyIFNlY3VyaXR5KSBhbG9uZ3NpZGUgZ292ZXJubWVudC1jZXJ0aWZpZWQgQVdTIGNsb3VkIHRyYWluaW5nLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0xMiBnYXAtMTBcIj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogTGVmdCBDb2x1bW46IEVkdWNhdGlvbiBUaW1lbGluZSAoNyBjb2xzKSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTcgc3BhY2UteS04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc3RvbmUtOTAwIGZvbnQtYm9sZCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgIDxHcmFkdWF0aW9uQ2FwIGNsYXNzTmFtZT1cInctNSBoLTUgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgPGgzPkFjYWRlbWljIEVkdWNhdGlvbjwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAgICAgICAge0VEVUNBVElPTi5tYXAoKGVkdSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgIGtleT17ZWR1Lmluc3RpdHV0aW9ufVxuICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMTUgfX1cbiAgICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCwgZGVsYXk6IGlkeCAqIDAuMSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgcGwtNiBib3JkZXItbC0yIGJvcmRlci1zdG9uZS0yMDAgc3BhY2UteS0yIGdyb3VwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7LyogVGltZWxpbmUgTm9kZSBpbiBPcmFuZ2UgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1sZWZ0LVs3cHhdIHRvcC0xLjUgdy0zIGgtMyByb3VuZGVkLWZ1bGwgYmctd2hpdGUgYm9yZGVyLTIgYm9yZGVyLW9yYW5nZS02MDAgZ3JvdXAtaG92ZXI6c2NhbGUtMTI1IHRyYW5zaXRpb24tdHJhbnNmb3JtXCIgLz5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIHRleHQteHMgZm9udC1tb25vIHRleHQtc3RvbmUtNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgdGV4dC1vcmFuZ2UtNjAwIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAge2VkdS5wZXJpb2R9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEgdGV4dC1zdG9uZS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1zdG9uZS00MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtlZHUubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtlZHUuZGVncmVlfVxuICAgICAgICAgICAgICAgICAgPC9oND5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc3RvbmUtNzAwIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgIHtlZHUuaW5zdGl0dXRpb259XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgey8qIFNjb3JlIGJhZGdlIHdpdGggb3JhbmdlIHRleHQgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIGZvbnQtbW9ubyBweS0xIHB4LTMgcm91bmRlZC14bCBiZy1vcmFuZ2UtNTAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwIHRleHQtc3RvbmUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtNjAwIGZvbnQtc2VtaWJvbGRcIj57ZWR1LnNjb3JlTGFiZWx9Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGQgdGV4dC1vcmFuZ2UtNzAwXCI+e2VkdS5zY29yZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge2VkdS5kZXRhaWxzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTIgc3BhY2UteS0xLjUgdGV4dC14cyB0ZXh0LXN0b25lLTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtlZHUuZGV0YWlscy5tYXAoKGRldGFpbCwgZElkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17ZElkeH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS02MDAgZm9udC1ib2xkIG10LTAuNVwiPuKAojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RldGFpbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBBY2hpZXZlbWVudHMgTWluaSBTZWN0aW9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IGJvcmRlci10IGJvcmRlci1zdG9uZS0yMDAgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zdG9uZS05MDAgZm9udC1ib2xkIHRleHQtYmFzZVwiPlxuICAgICAgICAgICAgICAgIDxTaGllbGQgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICAgIDxoMz5Dby1DdXJyaWN1bGFyIEFjaGlldmVtZW50cyAmIEFjdGl2aXRpZXM8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICB7QUNISUVWRU1FTlRTLm1hcCgoYWNoLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17YWNoLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0zIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBiZy1zdG9uZS01MC81MCBob3ZlcjpiZy13aGl0ZSBob3Zlcjpib3JkZXItb3JhbmdlLTMwMCBob3ZlcjpzaGFkb3cteHMgdHJhbnNpdGlvbi1hbGwgc3BhY2UteS0xLjVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIGZvbnQtYm9sZCB0ZXh0LW9yYW5nZS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7YWNoLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHthY2gudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNjAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHthY2guZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFJpZ2h0IENvbHVtbjogQVdTIENlcnRpZmljYXRpb24gU3BvdGxpZ2h0IGluIENyaXNwIFdoaXRlIENhcmQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi01IHNwYWNlLXktNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXN0b25lLTkwMCBmb250LWJvbGQgdGV4dC1sZ1wiPlxuICAgICAgICAgICAgICA8QXdhcmQgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICA8aDM+VHJhaW5pbmdzICYgQ2VydGlmaWNhdGlvbnM8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtDRVJUSUZJQ0FUSU9OUy5tYXAoKGNlcnQpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBrZXk9e2NlcnQudGl0bGV9XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtNCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMjUgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLW9yYW5nZS0yMDAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLW9yYW5nZS01MC80MCB2aWEtd2hpdGUgdG8td2hpdGUgcC02IHNtOnAtNyBzaGFkb3ctc20gc3BhY2UteS01XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNzAwIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NlcnQuYWZmaWxpYXRpb259PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4xNSBEYXlzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWV4dHJhYm9sZCB0ZXh0LXN0b25lLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y2VydC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXN0b25lLTcwMCBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAge2NlcnQub3JnYW5pemF0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC14cyBmb250LW1vbm8gdGV4dC1zdG9uZS02MDAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGF0ZToge2NlcnQucGVyaW9kfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS0zMDBcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNzAwIGZvbnQtYm9sZFwiPkNlcnQgTm86IHtjZXJ0LmNlcnROdW1iZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gdGV4dC1zdG9uZS02MDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICB7Y2VydC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMiBib3JkZXItdCBib3JkZXItc3RvbmUtMjAwLzgwIHB0LTNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1zdG9uZS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIENvcmUgTGVhcm5pbmcgT3V0Y29tZXNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNwYWNlLXktMS41IHRleHQteHMgdGV4dC1zdG9uZS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge2NlcnQuYnVsbGV0cy5tYXAoKGIsIGJJZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtiSWR4fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtb3JhbmdlLTYwMCBzaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2J9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBDb3ZlcmVkIENsb3VkIFNraWxscyB1bmJveGVkICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBib3JkZXItdCBib3JkZXItc3RvbmUtMjAwLzgwXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtc3RvbmUtNjAwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgVGVjaG5vbG9naWVzIE1hc3RlcmVkXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTIgdGV4dC14cyBmb250LW1vbm8gdGV4dC1zdG9uZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge2NlcnQuc2tpbGxzQ292ZXJlZC5tYXAoKHNjLCBzY0lkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17c2N9IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtODAwIGZvbnQtc2VtaWJvbGRcIj57c2N9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3NjSWR4IDwgY2VydC5za2lsbHNDb3ZlcmVkLmxlbmd0aCAtIDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0yIHRleHQtb3JhbmdlLTUwMCBmb250LWJvbGRcIj4vPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogVmVyaWZpY2F0aW9uIG5vdGUgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC0yeGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgdGV4dC1bMTFweF0gZm9udC1tb25vIHRleHQtc3RvbmUtNjAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBzaGFkb3cteHNcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNlcnRpZmljYXRlIElEOiB7Y2VydC5jZXJ0TnVtYmVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZW1lcmFsZC03MDAgZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LWVtZXJhbGQtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgVmVyaWZpZWQgQ3JlZGVudGlhbFxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXX0=