const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { ShieldCheck, Code, Globe, GraduationCap, Award } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
import { PERSONAL_INFO } from "/src/data/portfolioData.ts";
var _jsxFileName = "/app/applet/src/components/AboutSection.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const AboutSection = () => {
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "about",
		className: "py-16 lg:py-24 border-b border-stone-200 bg-white",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start",
				children: [/* @__PURE__ */ _jsxDEV(motion.div, {
					initial: {
						opacity: 0,
						x: -20
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: { duration: .5 },
					className: "lg:col-span-7 space-y-6",
					children: [
						/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "text-xs font-mono text-orange-600 font-bold uppercase tracking-wider mb-1",
							children: "Background & Philosophy"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("h2", {
							className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900",
							children: [
								"Engineering Software with a ",
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-orange-600",
									children: "Security-First"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 26,
									columnNumber: 45
								}, this),
								" Mindset"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 21,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed",
							children: [
								/* @__PURE__ */ _jsxDEV("p", { children: [
									"I am a final-year Computer Science & Engineering student specializing in Cyber Security at",
									" ",
									/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-stone-900 font-semibold",
										children: "Coimbatore Institute of Engineering and Technology"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 33,
										columnNumber: 17
									}, this),
									" (CGPA: 7.18). My focus bridges modern full-stack web application development with applied offensive and defensive security practices."
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 31,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", { children: [
									"Having built independent full-stack platforms from the ground up using ",
									/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-orange-700 font-semibold",
										children: "React.js, Node.js, Express, and MySQL"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 38,
										columnNumber: 88
									}, this),
									", I treat application security not as an afterthought, but as a core architectural requirement. Whether implementing stateless JWT session lifecycle management or securing relational queries against SQL injection, I write code designed to withstand modern attack surfaces."
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", { children: [
									"My security foundation includes hands-on protocol analysis with ",
									/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-stone-900 font-semibold",
										children: "Wireshark"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 45,
										columnNumber: 81
									}, this),
									", network attack surface discovery with ",
									/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-stone-900 font-semibold",
										children: "Nmap"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 55
									}, this),
									", web proxy interception and fuzzing with ",
									/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-stone-900 font-semibold",
										children: "Burp Suite"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 159
									}, this),
									", and defensive hardening guided by the ",
									/* @__PURE__ */ _jsxDEV("strong", {
										className: "text-orange-700 font-semibold",
										children: "OWASP Top 10"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 47,
										columnNumber: 55
									}, this),
									" vulnerabilities."
								] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 44,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "pt-2",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "text-xs font-bold text-stone-500 uppercase tracking-wider mb-2",
								children: "Languages Spoken"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex flex-wrap gap-4 text-sm text-stone-700",
								children: PERSONAL_INFO.languages.map((item, idx) => /* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ _jsxDEV(Globe, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 59,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "font-bold text-stone-900",
											children: item.language
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 60,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "text-stone-500 text-xs",
											children: [
												"(",
												item.proficiency,
												")"
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 61,
											columnNumber: 21
										}, this),
										idx < PERSONAL_INFO.languages.length - 1 && /* @__PURE__ */ _jsxDEV("span", {
											className: "text-stone-300 ml-2",
											children: "/"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 63,
											columnNumber: 23
										}, this)
									]
								}, item.language, true, {
									fileName: _jsxFileName,
									lineNumber: 58,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-5 space-y-4",
					children: [
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
							transition: {
								duration: .4,
								delay: .1
							},
							whileHover: { y: -3 },
							className: "p-5 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-md transition-all space-y-1.5",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2.5 text-orange-600 font-bold text-sm",
								children: [/* @__PURE__ */ _jsxDEV(Code, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 84,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Full-Stack Development" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs sm:text-sm text-stone-600 leading-relaxed",
								children: "Developing responsive, performant user interfaces in React.js and structured RESTful backend services in Node.js/Express with MySQL persistence."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 13
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
							transition: {
								duration: .4,
								delay: .2
							},
							whileHover: { y: -3 },
							className: "p-5 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-md transition-all space-y-1.5",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2.5 text-orange-600 font-bold text-sm",
								children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 101,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Applied Cyber Security" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs sm:text-sm text-stone-600 leading-relaxed",
								children: "Auditing web application vulnerabilities against OWASP Top 10 risks, performing traffic analysis in Wireshark, and utilizing Kali Linux toolkits for threat modeling."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 104,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 92,
							columnNumber: 13
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
							transition: {
								duration: .4,
								delay: .3
							},
							whileHover: { y: -3 },
							className: "p-5 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-md transition-all space-y-1.5",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2.5 text-orange-600 font-bold text-sm",
								children: [/* @__PURE__ */ _jsxDEV(Award, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Cloud & Infrastructure" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs sm:text-sm text-stone-600 leading-relaxed",
								children: "Trained in AWS cloud primitives (EC2 compute, S3 object storage, IAM role policies) through Pantech e-Learning (certified under MSME, Govt. of India)."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 121,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 13
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
							transition: {
								duration: .4,
								delay: .4
							},
							whileHover: { y: -3 },
							className: "p-5 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-md transition-all space-y-1.5",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2.5 text-orange-600 font-bold text-sm",
								children: [/* @__PURE__ */ _jsxDEV(GraduationCap, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 135,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Academic Rigor" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs sm:text-sm text-stone-600 leading-relaxed",
								children: "Bachelor of Engineering in CSE (Cyber Security) at Coimbatore Institute of Engineering and Technology, graduating 2027 with a 7.18 CGPA."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 138,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 9
			}, this)
		}, void 0, false, {
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

//# sourceMappingURL=data:application/json;base64,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QUFJO09BQ3hDLFlBQVksRUFBRSxHQUFHLENBQUMsRUFBRTtPQUNwQixXQUFVO2lCQU5aLENBUUUsd0JBQUMsT0FBRDtRQUFLLFdBQVU7a0JBQWYsQ0FDRSx3QkFBQyxlQUFELEVBQWUsV0FBVSxVQUFXOzs7O2tCQUNwQyx3QkFBQyxRQUFELFlBQU0saUJBQW9COzs7O2dCQUN2Qjs7Ozs7aUJBQ0wsd0JBQUMsS0FBRDtRQUFHLFdBQVU7a0JBQW9EO09BRTlEOzs7O2VBQ087Ozs7OztLQUVUOzs7OztZQUVGOzs7Ozs7RUFFRjs7Ozs7Q0FDRTs7Ozs7QUFFYiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyJBYm91dFNlY3Rpb24udHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgU2hpZWxkQ2hlY2ssIENvZGUsIEdsb2JlLCBHcmFkdWF0aW9uQ2FwLCBBd2FyZCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBQRVJTT05BTF9JTkZPIH0gZnJvbSAnLi4vZGF0YS9wb3J0Zm9saW9EYXRhJztcblxuZXhwb3J0IGNvbnN0IEFib3V0U2VjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cInB5LTE2IGxnOnB5LTI0IGJvcmRlci1iIGJvcmRlci1zdG9uZS0yMDAgYmctd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMTIgZ2FwLTEwIGxnOmdhcC0xNCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBMZWZ0IENvbHVtbjogTmFycmF0aXZlIHdpdGggT3JhbmdlIFRleHQgSGlnaGxpZ2h0cyAqL31cbiAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogLTIwIH19XG4gICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTcgc3BhY2UteS02XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHRleHQtb3JhbmdlLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIG1iLTFcIj5cbiAgICAgICAgICAgICAgICBCYWNrZ3JvdW5kICYgUGhpbG9zb3BoeVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIHNtOnRleHQtM3hsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtc3RvbmUtOTAwXCI+XG4gICAgICAgICAgICAgICAgRW5naW5lZXJpbmcgU29mdHdhcmUgd2l0aCBhIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMFwiPlNlY3VyaXR5LUZpcnN0PC9zcGFuPiBNaW5kc2V0XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgdGV4dC1zbSBzbTp0ZXh0LWJhc2UgdGV4dC1zdG9uZS02MDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIEkgYW0gYSBmaW5hbC15ZWFyIENvbXB1dGVyIFNjaWVuY2UgJiBFbmdpbmVlcmluZyBzdHVkZW50IHNwZWNpYWxpemluZyBpbiBDeWJlciBTZWN1cml0eSBhdHsnICd9XG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTkwMCBmb250LXNlbWlib2xkXCI+Q29pbWJhdG9yZSBJbnN0aXR1dGUgb2YgRW5naW5lZXJpbmcgYW5kIFRlY2hub2xvZ3k8L3N0cm9uZz4gKENHUEE6IDcuMTgpLiBcbiAgICAgICAgICAgICAgICBNeSBmb2N1cyBicmlkZ2VzIG1vZGVybiBmdWxsLXN0YWNrIHdlYiBhcHBsaWNhdGlvbiBkZXZlbG9wbWVudCB3aXRoIGFwcGxpZWQgb2ZmZW5zaXZlIGFuZCBkZWZlbnNpdmUgc2VjdXJpdHkgcHJhY3RpY2VzLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBIYXZpbmcgYnVpbHQgaW5kZXBlbmRlbnQgZnVsbC1zdGFjayBwbGF0Zm9ybXMgZnJvbSB0aGUgZ3JvdW5kIHVwIHVzaW5nIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNzAwIGZvbnQtc2VtaWJvbGRcIj5SZWFjdC5qcywgTm9kZS5qcywgRXhwcmVzcywgYW5kIE15U1FMPC9zdHJvbmc+LCBcbiAgICAgICAgICAgICAgICBJIHRyZWF0IGFwcGxpY2F0aW9uIHNlY3VyaXR5IG5vdCBhcyBhbiBhZnRlcnRob3VnaHQsIGJ1dCBhcyBhIGNvcmUgYXJjaGl0ZWN0dXJhbCByZXF1aXJlbWVudC4gXG4gICAgICAgICAgICAgICAgV2hldGhlciBpbXBsZW1lbnRpbmcgc3RhdGVsZXNzIEpXVCBzZXNzaW9uIGxpZmVjeWNsZSBtYW5hZ2VtZW50IG9yIHNlY3VyaW5nIHJlbGF0aW9uYWwgcXVlcmllcyBhZ2FpbnN0IFNRTCBpbmplY3Rpb24sIFxuICAgICAgICAgICAgICAgIEkgd3JpdGUgY29kZSBkZXNpZ25lZCB0byB3aXRoc3RhbmQgbW9kZXJuIGF0dGFjayBzdXJmYWNlcy5cbiAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIE15IHNlY3VyaXR5IGZvdW5kYXRpb24gaW5jbHVkZXMgaGFuZHMtb24gcHJvdG9jb2wgYW5hbHlzaXMgd2l0aCA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtOTAwIGZvbnQtc2VtaWJvbGRcIj5XaXJlc2hhcms8L3N0cm9uZz4sIFxuICAgICAgICAgICAgICAgIG5ldHdvcmsgYXR0YWNrIHN1cmZhY2UgZGlzY292ZXJ5IHdpdGggPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTkwMCBmb250LXNlbWlib2xkXCI+Tm1hcDwvc3Ryb25nPiwgd2ViIHByb3h5IGludGVyY2VwdGlvbiBhbmQgZnV6emluZyB3aXRoIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC1zdG9uZS05MDAgZm9udC1zZW1pYm9sZFwiPkJ1cnAgU3VpdGU8L3N0cm9uZz4sIFxuICAgICAgICAgICAgICAgIGFuZCBkZWZlbnNpdmUgaGFyZGVuaW5nIGd1aWRlZCBieSB0aGUgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS03MDAgZm9udC1zZW1pYm9sZFwiPk9XQVNQIFRvcCAxMDwvc3Ryb25nPiB2dWxuZXJhYmlsaXRpZXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogTGFuZ3VhZ2VzIHNwb2tlbiB1bmJveGVkIGxpc3QgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgIExhbmd1YWdlcyBTcG9rZW5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTQgdGV4dC1zbSB0ZXh0LXN0b25lLTcwMFwiPlxuICAgICAgICAgICAgICAgIHtQRVJTT05BTF9JTkZPLmxhbmd1YWdlcy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubGFuZ3VhZ2V9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxHbG9iZSBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXN0b25lLTkwMFwiPntpdGVtLmxhbmd1YWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS01MDAgdGV4dC14c1wiPih7aXRlbS5wcm9maWNpZW5jeX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7aWR4IDwgUEVSU09OQUxfSU5GTy5sYW5ndWFnZXMubGVuZ3RoIC0gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS0zMDAgbWwtMlwiPi88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgIHsvKiBSaWdodCBDb2x1bW46IEtleSBQaWxsYXJzIHdpdGggTW90aW9uIENhcmRzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tNSBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTUgfX1cbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCwgZGVsYXk6IDAuMSB9fVxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0zIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZSBob3Zlcjpib3JkZXItb3JhbmdlLTMwMCBob3ZlcjpzaGFkb3ctbWQgdHJhbnNpdGlvbi1hbGwgc3BhY2UteS0xLjVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjUgdGV4dC1vcmFuZ2UtNjAwIGZvbnQtYm9sZCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgPENvZGUgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+RnVsbC1TdGFjayBEZXZlbG9wbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB0ZXh0LXN0b25lLTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBEZXZlbG9waW5nIHJlc3BvbnNpdmUsIHBlcmZvcm1hbnQgdXNlciBpbnRlcmZhY2VzIGluIFJlYWN0LmpzIGFuZCBzdHJ1Y3R1cmVkIFJFU1RmdWwgYmFja2VuZCBzZXJ2aWNlcyBpbiBOb2RlLmpzL0V4cHJlc3Mgd2l0aCBNeVNRTCBwZXJzaXN0ZW5jZS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxNSB9fVxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40LCBkZWxheTogMC4yIH19XG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTMgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXdoaXRlIGhvdmVyOmJvcmRlci1vcmFuZ2UtMzAwIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbCBzcGFjZS15LTEuNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSB0ZXh0LW9yYW5nZS02MDAgZm9udC1ib2xkIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICA8U2hpZWxkQ2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+QXBwbGllZCBDeWJlciBTZWN1cml0eTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB0ZXh0LXN0b25lLTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBBdWRpdGluZyB3ZWIgYXBwbGljYXRpb24gdnVsbmVyYWJpbGl0aWVzIGFnYWluc3QgT1dBU1AgVG9wIDEwIHJpc2tzLCBwZXJmb3JtaW5nIHRyYWZmaWMgYW5hbHlzaXMgaW4gV2lyZXNoYXJrLCBhbmQgdXRpbGl6aW5nIEthbGkgTGludXggdG9vbGtpdHMgZm9yIHRocmVhdCBtb2RlbGluZy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxNSB9fVxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40LCBkZWxheTogMC4zIH19XG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTMgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXdoaXRlIGhvdmVyOmJvcmRlci1vcmFuZ2UtMzAwIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbCBzcGFjZS15LTEuNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSB0ZXh0LW9yYW5nZS02MDAgZm9udC1ib2xkIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICA8QXdhcmQgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q2xvdWQgJiBJbmZyYXN0cnVjdHVyZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB0ZXh0LXN0b25lLTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBUcmFpbmVkIGluIEFXUyBjbG91ZCBwcmltaXRpdmVzIChFQzIgY29tcHV0ZSwgUzMgb2JqZWN0IHN0b3JhZ2UsIElBTSByb2xlIHBvbGljaWVzKSB0aHJvdWdoIFBhbnRlY2ggZS1MZWFybmluZyAoY2VydGlmaWVkIHVuZGVyIE1TTUUsIEdvdnQuIG9mIEluZGlhKS5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxNSB9fVxuICAgICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC40LCBkZWxheTogMC40IH19XG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTMgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC01IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXdoaXRlIGhvdmVyOmJvcmRlci1vcmFuZ2UtMzAwIGhvdmVyOnNoYWRvdy1tZCB0cmFuc2l0aW9uLWFsbCBzcGFjZS15LTEuNVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIuNSB0ZXh0LW9yYW5nZS02MDAgZm9udC1ib2xkIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICA8R3JhZHVhdGlvbkNhcCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5BY2FkZW1pYyBSaWdvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSB0ZXh0LXN0b25lLTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBCYWNoZWxvciBvZiBFbmdpbmVlcmluZyBpbiBDU0UgKEN5YmVyIFNlY3VyaXR5KSBhdCBDb2ltYmF0b3JlIEluc3RpdHV0ZSBvZiBFbmdpbmVlcmluZyBhbmQgVGVjaG5vbG9neSwgZ3JhZHVhdGluZyAyMDI3IHdpdGggYSA3LjE4IENHUEEuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19