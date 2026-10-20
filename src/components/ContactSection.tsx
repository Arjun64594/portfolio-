const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, ExternalLink, MessageSquare } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
import { PERSONAL_INFO } from "/src/data/portfolioData.ts";
var _jsxFileName = "/app/applet/src/components/ContactSection.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const ContactSection = () => {
	const [copiedField, setCopiedField] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: ""
	});
	const [submittedStatus, setSubmittedStatus] = useState(null);
	const handleCopy = (text, field) => {
		navigator.clipboard.writeText(text);
		setCopiedField(field);
		setTimeout(() => setCopiedField(null), 2500);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.message) {
			setSubmittedStatus("Please fill in your name, email, and message.");
			return;
		}
		const emailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
		const emailBody = encodeURIComponent(`Hi Arjun,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`);
		// Open mail client
		window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
		setSubmittedStatus("Drafting email in your default client! Thank you.");
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		id: "contact",
		className: "py-16 lg:py-24 border-b border-stone-200 bg-white",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "pb-8 border-b border-stone-200",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "text-xs font-mono text-orange-600 font-bold uppercase tracking-wider mb-1",
						children: "Get In Touch"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 58,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("h2", {
						className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900",
						children: ["Contact & ", /* @__PURE__ */ _jsxDEV("span", {
							className: "text-orange-600",
							children: "Career Inquiries"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 23
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						className: "mt-2 text-sm text-stone-600 max-w-2xl",
						children: "Currently seeking entry-level Software Engineer or Cyber Security Analyst opportunities. Feel free to reach out directly via email, phone, or LinkedIn."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-5 space-y-4",
					children: [
						/* @__PURE__ */ _jsxDEV(motion.div, {
							whileHover: { y: -2 },
							className: "p-4 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 shadow-xs flex items-center justify-between transition-all",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-3.5",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-100",
									children: /* @__PURE__ */ _jsxDEV(Mail, { className: "w-5 h-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 82,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] font-mono text-stone-500 font-semibold uppercase",
									children: "Direct Email"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("a", {
									href: `mailto:${PERSONAL_INFO.email}`,
									className: "text-sm font-bold text-stone-900 hover:text-orange-600 transition-colors",
									children: PERSONAL_INFO.email
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 86,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 84,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => handleCopy(PERSONAL_INFO.email, "email"),
								className: "p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors",
								title: "Copy email",
								children: copiedField === "email" ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-4 h-4 text-emerald-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 101,
									columnNumber: 19
								}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 103,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 95,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV(motion.div, {
							whileHover: { y: -2 },
							className: "p-4 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 shadow-xs flex items-center justify-between transition-all",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-3.5",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-100",
									children: /* @__PURE__ */ _jsxDEV(Phone, { className: "w-5 h-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 115,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] font-mono text-stone-500 font-semibold uppercase",
									children: "Phone & WhatsApp"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 118,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("a", {
									href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`,
									className: "text-sm font-bold text-stone-900 hover:text-orange-600 transition-colors",
									children: PERSONAL_INFO.phone
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 117,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("button", {
								onClick: () => handleCopy(PERSONAL_INFO.phone, "phone"),
								className: "p-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors",
								title: "Copy phone",
								children: copiedField === "phone" ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-4 h-4 text-emerald-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 19
								}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-4 h-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 136,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "p-4 rounded-2xl border border-stone-200 bg-white shadow-xs flex items-center justify-between",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-3.5",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-100",
									children: /* @__PURE__ */ _jsxDEV(MapPin, { className: "w-5 h-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 145,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 144,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-[11px] font-mono text-stone-500 font-semibold uppercase",
									children: "Location"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 148,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-sm font-bold text-stone-900",
									children: PERSONAL_INFO.location
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 149,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 147,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "text-xs font-mono font-semibold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-lg",
								children: "Open to Relocation"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 142,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "pt-2 grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ _jsxDEV(motion.a, {
								whileHover: { y: -2 },
								href: PERSONAL_INFO.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "p-4 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition-all flex items-center justify-between",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2 text-xs font-bold text-stone-800",
									children: [/* @__PURE__ */ _jsxDEV(Linkedin, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 169,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "LinkedIn Profile" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 170,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 168,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3.5 h-3.5 text-stone-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 172,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 161,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV(motion.a, {
								whileHover: { y: -2 },
								href: PERSONAL_INFO.github,
								target: "_blank",
								rel: "noreferrer",
								className: "p-4 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xs transition-all flex items-center justify-between",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2 text-xs font-bold text-stone-800",
									children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-4 h-4 text-stone-900" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 183,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: "GitHub Profile" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 184,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 182,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3.5 h-3.5 text-stone-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 186,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 175,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 73,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 text-stone-900 font-bold text-base mb-1",
								children: [/* @__PURE__ */ _jsxDEV(MessageSquare, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 196,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("h3", { children: "Send a Direct Inquiry" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 197,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 195,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "text-xs text-stone-500 mb-6",
								children: "Fill out the form below to immediately compose and dispatch an inquiry email to Arjun M."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 199,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("form", {
								onSubmit: handleSubmit,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ _jsxDEV("label", {
												className: "text-xs font-bold text-stone-700",
												children: ["Your Name ", /* @__PURE__ */ _jsxDEV("span", {
													className: "text-orange-600",
													children: "*"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 207,
													columnNumber: 33
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 206,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("input", {
												type: "text",
												required: true,
												placeholder: "e.g. Recruiter / Engineering Manager",
												value: formData.name,
												onChange: (e) => setFormData({
													...formData,
													name: e.target.value
												}),
												className: "w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 209,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 205,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("div", {
											className: "space-y-1.5",
											children: [/* @__PURE__ */ _jsxDEV("label", {
												className: "text-xs font-bold text-stone-700",
												children: ["Your Email ", /* @__PURE__ */ _jsxDEV("span", {
													className: "text-orange-600",
													children: "*"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 221,
													columnNumber: 34
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 220,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("input", {
												type: "email",
												required: true,
												placeholder: "e.g. name@company.com",
												value: formData.email,
												onChange: (e) => setFormData({
													...formData,
													email: e.target.value
												}),
												className: "w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 223,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 219,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 204,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ _jsxDEV("label", {
											className: "text-xs font-bold text-stone-700",
											children: "Subject"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 235,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("input", {
											type: "text",
											placeholder: "e.g. Software Engineer / Cyber Security Role Discussion",
											value: formData.subject,
											onChange: (e) => setFormData({
												...formData,
												subject: e.target.value
											}),
											className: "w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 238,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 234,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "space-y-1.5",
										children: [/* @__PURE__ */ _jsxDEV("label", {
											className: "text-xs font-bold text-stone-700",
											children: ["Message ", /* @__PURE__ */ _jsxDEV("span", {
												className: "text-orange-600",
												children: "*"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 249,
												columnNumber: 29
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 248,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("textarea", {
											required: true,
											rows: 4,
											placeholder: "Describe the opportunity, interview details, or project inquiry...",
											value: formData.message,
											onChange: (e) => setFormData({
												...formData,
												message: e.target.value
											}),
											className: "w-full rounded-xl border border-stone-200 bg-stone-50/50 px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-orange-500 focus:bg-white focus:outline-none resize-none"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 251,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 247,
										columnNumber: 17
									}, this),
									submittedStatus && /* @__PURE__ */ _jsxDEV(motion.div, {
										initial: {
											opacity: 0,
											y: -5
										},
										animate: {
											opacity: 1,
											y: 0
										},
										className: "p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-900 font-semibold",
										children: submittedStatus
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 262,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "pt-2 flex items-center justify-between",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-[11px] font-mono text-stone-500",
											children: "Direct routing to arjun.m0204@gmail.com"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 272,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV(motion.button, {
											whileHover: { scale: 1.02 },
											whileTap: { scale: .98 },
											type: "submit",
											className: "inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-xl transition-colors shadow-sm shadow-orange-600/25",
											children: [/* @__PURE__ */ _jsxDEV(Send, { className: "w-3.5 h-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 282,
												columnNumber: 21
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Send Message" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 283,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 276,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 271,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 203,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 194,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 193,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 53,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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LFFBQUQ7V0FBTSxXQUFVO3FCQUF1QztVQUVqRDs7OztvQkFFTix3QkFBQyxPQUFPLFFBQVI7V0FDRSxZQUFZLEVBQUUsT0FBTyxLQUFLO1dBQzFCLFVBQVUsRUFBRSxPQUFPLElBQUs7V0FDeEIsTUFBSztXQUNMLFdBQVU7cUJBSlosQ0FNRSx3QkFBQyxNQUFELEVBQU0sV0FBVSxjQUFlOzs7O3FCQUMvQix3QkFBQyxRQUFELFlBQU0sZUFBa0I7Ozs7bUJBQ1g7Ozs7O2tCQUNaOzs7Ozs7UUFDRDs7Ozs7O01BRUg7Ozs7OztJQUNGOzs7O1lBRUY7Ozs7O1dBRUY7Ozs7OztDQUNFOzs7OztBQUViIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkNvbnRhY3RTZWN0aW9uLnRzeCJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgXG4gIE1haWwsIFxuICBQaG9uZSwgXG4gIE1hcFBpbiwgXG4gIEdpdGh1YiwgXG4gIExpbmtlZGluLCBcbiAgU2VuZCwgXG4gIENvcHksIFxuICBDaGVjaywgXG4gIEV4dGVybmFsTGluayxcbiAgTWVzc2FnZVNxdWFyZVxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgUEVSU09OQUxfSU5GTyB9IGZyb20gJy4uL2RhdGEvcG9ydGZvbGlvRGF0YSc7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0U2VjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb3BpZWRGaWVsZCwgc2V0Q29waWVkRmllbGRdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBzdWJqZWN0OiAnJyxcbiAgICBtZXNzYWdlOiAnJ1xuICB9KTtcbiAgY29uc3QgW3N1Ym1pdHRlZFN0YXR1cywgc2V0U3VibWl0dGVkU3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNvcHkgPSAodGV4dDogc3RyaW5nLCBmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gICAgc2V0Q29waWVkRmllbGQoZmllbGQpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkRmllbGQobnVsbCksIDI1MDApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCFmb3JtRGF0YS5uYW1lIHx8ICFmb3JtRGF0YS5lbWFpbCB8fCAhZm9ybURhdGEubWVzc2FnZSkge1xuICAgICAgc2V0U3VibWl0dGVkU3RhdHVzKCdQbGVhc2UgZmlsbCBpbiB5b3VyIG5hbWUsIGVtYWlsLCBhbmQgbWVzc2FnZS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbWFpbFN1YmplY3QgPSBlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICBmb3JtRGF0YS5zdWJqZWN0IHx8IGBJbnF1aXJ5IGZyb20gJHtmb3JtRGF0YS5uYW1lfSB2aWEgUG9ydGZvbGlvYFxuICAgICk7XG4gICAgY29uc3QgZW1haWxCb2R5ID0gZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgYEhpIEFyanVuLFxcblxcbiR7Zm9ybURhdGEubWVzc2FnZX1cXG5cXG5Gcm9tOiAke2Zvcm1EYXRhLm5hbWV9XFxuRW1haWw6ICR7Zm9ybURhdGEuZW1haWx9YFxuICAgICk7XG5cbiAgICAvLyBPcGVuIG1haWwgY2xpZW50XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgbWFpbHRvOiR7UEVSU09OQUxfSU5GTy5lbWFpbH0/c3ViamVjdD0ke2VtYWlsU3ViamVjdH0mYm9keT0ke2VtYWlsQm9keX1gO1xuICAgIHNldFN1Ym1pdHRlZFN0YXR1cygnRHJhZnRpbmcgZW1haWwgaW4geW91ciBkZWZhdWx0IGNsaWVudCEgVGhhbmsgeW91LicpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwicHktMTYgbGc6cHktMjQgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICBcbiAgICAgICAgey8qIFNlY3Rpb24gSGVhZGVyIHdpdGggT3JhbmdlIFRleHQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItOCBib3JkZXItYiBib3JkZXItc3RvbmUtMjAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LW9yYW5nZS02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBtYi0xXCI+XG4gICAgICAgICAgICBHZXQgSW4gVG91Y2hcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgc206dGV4dC0zeGwgZm9udC1leHRyYWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1zdG9uZS05MDBcIj5cbiAgICAgICAgICAgIENvbnRhY3QgJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS02MDBcIj5DYXJlZXIgSW5xdWlyaWVzPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LXNtIHRleHQtc3RvbmUtNjAwIG1heC13LTJ4bFwiPlxuICAgICAgICAgICAgQ3VycmVudGx5IHNlZWtpbmcgZW50cnktbGV2ZWwgU29mdHdhcmUgRW5naW5lZXIgb3IgQ3liZXIgU2VjdXJpdHkgQW5hbHlzdCBvcHBvcnR1bml0aWVzLiBcbiAgICAgICAgICAgIEZlZWwgZnJlZSB0byByZWFjaCBvdXQgZGlyZWN0bHkgdmlhIGVtYWlsLCBwaG9uZSwgb3IgTGlua2VkSW4uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTEyIGdhcC0xMFwiPlxuICAgICAgICAgIFxuICAgICAgICAgIHsvKiBMZWZ0IENvbHVtbjogRGlyZWN0IENvbnRhY3QgSW5mbyAoNSBjb2xzKSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTUgc3BhY2UteS00XCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBFbWFpbCBDYXJkICovfVxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXdoaXRlIGhvdmVyOmJvcmRlci1vcmFuZ2UtMzAwIHNoYWRvdy14cyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zLjVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLXhsIGJnLW9yYW5nZS01MCB0ZXh0LW9yYW5nZS02MDAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMTAwXCI+XG4gICAgICAgICAgICAgICAgICA8TWFpbCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSBmb250LW1vbm8gdGV4dC1zdG9uZS01MDAgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2VcIj5EaXJlY3QgRW1haWw8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BtYWlsdG86JHtQRVJTT05BTF9JTkZPLmVtYWlsfWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtQRVJTT05BTF9JTkZPLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29weShQRVJTT05BTF9JTkZPLmVtYWlsLCAnZW1haWwnKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgdGV4dC1zdG9uZS00MDAgaG92ZXI6dGV4dC1zdG9uZS05MDAgaG92ZXI6Ymctc3RvbmUtMTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29weSBlbWFpbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y29waWVkRmllbGQgPT09ICdlbWFpbCcgPyAoXG4gICAgICAgICAgICAgICAgICA8Q2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWVtZXJhbGQtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPENvcHkgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIHsvKiBQaG9uZSBDYXJkICovfVxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXdoaXRlIGhvdmVyOmJvcmRlci1vcmFuZ2UtMzAwIHNoYWRvdy14cyBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zLjVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLXhsIGJnLW9yYW5nZS01MCB0ZXh0LW9yYW5nZS02MDAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMTAwXCI+XG4gICAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1tb25vIHRleHQtc3RvbmUtNTAwIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlXCI+UGhvbmUgJiBXaGF0c0FwcDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YHRlbDoke1BFUlNPTkFMX0lORk8ucGhvbmUucmVwbGFjZSgvXFxzKy9nLCAnJyl9YH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1zdG9uZS05MDAgaG92ZXI6dGV4dC1vcmFuZ2UtNjAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1BFUlNPTkFMX0lORk8ucGhvbmV9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb3B5KFBFUlNPTkFMX0lORk8ucGhvbmUsICdwaG9uZScpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LXN0b25lLTQwMCBob3Zlcjp0ZXh0LXN0b25lLTkwMCBob3ZlcjpiZy1zdG9uZS0xMDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDb3B5IHBob25lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjb3BpZWRGaWVsZCA9PT0gJ3Bob25lJyA/IChcbiAgICAgICAgICAgICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZW1lcmFsZC02MDBcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8Q29weSBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgICAgey8qIExvY2F0aW9uIENhcmQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZSBzaGFkb3cteHMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMuNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQteGwgYmctb3JhbmdlLTUwIHRleHQtb3JhbmdlLTYwMCBib3JkZXIgYm9yZGVyLW9yYW5nZS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxNYXBQaW4gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gZm9udC1tb25vIHRleHQtc3RvbmUtNTAwIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlXCI+TG9jYXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1zdG9uZS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge1BFUlNPTkFMX0lORk8ubG9jYXRpb259XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIGZvbnQtc2VtaWJvbGQgdGV4dC1vcmFuZ2UtNzAwIGJnLW9yYW5nZS01MCBweC0yLjUgcHktMSByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgT3BlbiB0byBSZWxvY2F0aW9uXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogUHJvZmlsZXMgU3RyaXAgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIgZ3JpZCBncmlkLWNvbHMtMiBnYXAtM1wiPlxuICAgICAgICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0yIH19XG4gICAgICAgICAgICAgICAgaHJlZj17UEVSU09OQUxfSU5GTy5saW5rZWRpbn1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZSBob3Zlcjpib3JkZXItb3JhbmdlLTMwMCBob3ZlcjpzaGFkb3cteHMgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyBmb250LWJvbGQgdGV4dC1zdG9uZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rZWRpbiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5MaW5rZWRJbiBQcm9maWxlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxFeHRlcm5hbExpbmsgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1zdG9uZS00MDBcIiAvPlxuICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuXG4gICAgICAgICAgICAgIDxtb3Rpb24uYVxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIgfX1cbiAgICAgICAgICAgICAgICBocmVmPXtQRVJTT05BTF9JTkZPLmdpdGh1Yn1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZSBob3Zlcjpib3JkZXItb3JhbmdlLTMwMCBob3ZlcjpzaGFkb3cteHMgdHJhbnNpdGlvbi1hbGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyBmb250LWJvbGQgdGV4dC1zdG9uZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxHaXRodWIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXN0b25lLTkwMFwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5HaXRIdWIgUHJvZmlsZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtc3RvbmUtNDAwXCIgLz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmlnaHQgQ29sdW1uOiBEaXJlY3QgTWVzc2FnaW5nIEZvcm0gKDcgY29scykgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi03XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXdoaXRlIHAtNiBzbTpwLTggc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zdG9uZS05MDAgZm9udC1ib2xkIHRleHQtYmFzZSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VTcXVhcmUgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICAgIDxoMz5TZW5kIGEgRGlyZWN0IElucXVpcnk8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN0b25lLTUwMCBtYi02XCI+XG4gICAgICAgICAgICAgICAgRmlsbCBvdXQgdGhlIGZvcm0gYmVsb3cgdG8gaW1tZWRpYXRlbHkgY29tcG9zZSBhbmQgZGlzcGF0Y2ggYW4gaW5xdWlyeSBlbWFpbCB0byBBcmp1biBNLlxuICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMS41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFlvdXIgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS02MDBcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gUmVjcnVpdGVyIC8gRW5naW5lZXJpbmcgTWFuYWdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBiZy1zdG9uZS01MC81MCBweC0zLjUgcHktMi41IHRleHQteHMgdGV4dC1zdG9uZS05MDAgcGxhY2Vob2xkZXItc3RvbmUtNDAwIGZvY3VzOmJvcmRlci1vcmFuZ2UtNTAwIGZvY3VzOmJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1zdG9uZS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBZb3VyIEVtYWlsIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gbmFtZUBjb21wYW55LmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXN0b25lLTUwLzUwIHB4LTMuNSBweS0yLjUgdGV4dC14cyB0ZXh0LXN0b25lLTkwMCBwbGFjZWhvbGRlci1zdG9uZS00MDAgZm9jdXM6Ym9yZGVyLW9yYW5nZS01MDAgZm9jdXM6Ymctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEuNVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtc3RvbmUtNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIFN1YmplY3RcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gU29mdHdhcmUgRW5naW5lZXIgLyBDeWJlciBTZWN1cml0eSBSb2xlIERpc2N1c3Npb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuc3ViamVjdH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBzdWJqZWN0OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgYmctc3RvbmUtNTAvNTAgcHgtMy41IHB5LTIuNSB0ZXh0LXhzIHRleHQtc3RvbmUtOTAwIHBsYWNlaG9sZGVyLXN0b25lLTQwMCBmb2N1czpib3JkZXItb3JhbmdlLTUwMCBmb2N1czpiZy13aGl0ZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0xLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICBNZXNzYWdlIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpYmUgdGhlIG9wcG9ydHVuaXR5LCBpbnRlcnZpZXcgZGV0YWlscywgb3IgcHJvamVjdCBpbnF1aXJ5Li4uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgbWVzc2FnZTogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLXhsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXN0b25lLTUwLzUwIHB4LTMuNSBweS0yLjUgdGV4dC14cyB0ZXh0LXN0b25lLTkwMCBwbGFjZWhvbGRlci1zdG9uZS00MDAgZm9jdXM6Ym9yZGVyLW9yYW5nZS01MDAgZm9jdXM6Ymctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIHJlc2l6ZS1ub25lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7c3VibWl0dGVkU3RhdHVzICYmIChcbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IC01IH19XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTMuNSByb3VuZGVkLXhsIGJnLW9yYW5nZS01MCBib3JkZXIgYm9yZGVyLW9yYW5nZS0yMDAgdGV4dC14cyB0ZXh0LW9yYW5nZS05MDAgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtzdWJtaXR0ZWRTdGF0dXN9XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtWzExcHhdIGZvbnQtbW9ubyB0ZXh0LXN0b25lLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICBEaXJlY3Qgcm91dGluZyB0byBhcmp1bi5tMDIwNEBnbWFpbC5jb21cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4wMiB9fVxuICAgICAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45OCB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTYgcHktMi41IHRleHQteHMgZm9udC1ib2xkIHRleHQtd2hpdGUgYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNTAwIGFjdGl2ZTpiZy1vcmFuZ2UtNzAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXNtIHNoYWRvdy1vcmFuZ2UtNjAwLzI1XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFNlbmQgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZW5kIE1lc3NhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXX0=