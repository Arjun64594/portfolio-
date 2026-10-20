const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { X, Printer, Download, Copy, Check, FileText } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
import { PERSONAL_INFO, PROJECTS, EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from "/src/data/portfolioData.ts";
var _jsxFileName = "/app/applet/src/components/ResumeModal.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const ResumeModal = ({ isOpen, onClose }) => {
	const [copied, setCopied] = useState(false);
	if (!isOpen) return null;
	const handlePrint = () => {
		window.print();
	};
	const resumePlainText = `
ARJUN M
Location: ${PERSONAL_INFO.location}
Phone: ${PERSONAL_INFO.phone}
Email: ${PERSONAL_INFO.email} | LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

EXECUTIVE SUMMARY:
${PERSONAL_INFO.executiveSummary}

EDUCATION:
- ${EDUCATION[0].degree} (2023 - 2027)
  ${EDUCATION[0].institution} | CGPA: ${EDUCATION[0].score}
- ${EDUCATION[1].degree} (2022 - 2023)
  ${EDUCATION[1].institution} | ${EDUCATION[1].score}

TECHNICAL SKILLS:
- Frontend: HTML5, CSS3, JavaScript, React.js
- Backend: Node.js, Express.js, REST API Design, JWT Authentication
- Database: MySQL
- Languages: C, Python
- Data Analysis: Python (Pandas, NumPy) - basic level
- Cyber Security: Web Application Security, OWASP Top 10, Kali Linux, Nmap, Wireshark, Burp Suite
- Tools & Platforms: Git, GitHub, VS Code, Linux Basics

PROJECTS:
1. FoodieHub - Full-Stack Food Ordering Web Application
   Technologies: React.js, Node.js, Express.js, MySQL, JWT
   - Built a full-stack food ordering platform using React.js, Node.js, Express.js and MySQL
   - Implemented JWT-based user authentication, cart, and order management modules
   - Integrated MySQL database for real-time order tracking and data persistence

2. Secure Sphere Design - Cyber Security Awareness Web Application
   Technologies: HTML5, CSS3, JavaScript
   - Developed a responsive cybersecurity awareness platform using HTML5, CSS3, and JavaScript
   - Designed content modules covering OWASP Top 10 vulnerabilities and secure coding best practices

3. IoT-Based Vehicle Ignition Monitoring and GPS Tracking System
   Technologies: Raspberry Pi, GPS Module, Python
   - Built a Raspberry Pi-based vehicle security system with real-time GPS tracking
   - Implemented ignition monitoring logic using Python and GPS module integration

TRAININGS & CERTIFICATIONS:
- Cloud Computing Training (AWS) (23 Jun – 7 Jul 2025, 15 Days)
  Pantech e Learning Pvt. Ltd. | Certified under MSME, Govt. of India | Cert No: PEL-SI-2025-4519
  - Completed a 15-day training on AWS cloud fundamentals covering EC2, S3, and IAM
  - Gained foundational knowledge of cloud architecture, deployment models, and cloud security best practices

ACHIEVEMENTS:
- Participated in Hackathons
- Participated in Technical Symposiums

LANGUAGES:
- English, Tamil
  `.trim();
	const handleCopyText = () => {
		navigator.clipboard.writeText(resumePlainText);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	const handleDownloadJson = () => {
		const data = {
			personalInfo: PERSONAL_INFO,
			education: EDUCATION,
			certifications: CERTIFICATIONS,
			projects: PROJECTS,
			achievements: ACHIEVEMENTS
		};
		const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "Arjun_M_Resume_Data.json";
		a.click();
		URL.revokeObjectURL(url);
	};
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
			className: "relative w-full max-w-4xl max-h-[95vh] overflow-y-auto rounded-3xl border border-stone-200 bg-stone-100 shadow-2xl flex flex-col my-auto",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "no-print sticky top-0 z-20 flex items-center justify-between border-b border-stone-200 bg-white/95 px-6 py-3.5 backdrop-blur-md",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2 text-stone-900 font-bold text-sm sm:text-base",
						children: [/* @__PURE__ */ _jsxDEV(FileText, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("span", { children: ["Curriculum Vitae — ", /* @__PURE__ */ _jsxDEV("span", {
							className: "text-orange-600",
							children: "Arjun M"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 38
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: handlePrint,
								className: "flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-all shadow-xs",
								title: "Print directly or save as PDF",
								children: [/* @__PURE__ */ _jsxDEV(Printer, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Print / Save PDF" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 123,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 117,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: handleCopyText,
								className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors border border-stone-200",
								children: [copied ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 25
								}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 78
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: copied ? "Copied" : "Copy Text" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 126,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: handleDownloadJson,
								className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors border border-stone-200",
								title: "Download structured JSON",
								children: [/* @__PURE__ */ _jsxDEV(Download, { className: "w-3.5 h-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", { children: "JSON" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 140,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								onClick: onClose,
								className: "p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200 rounded-xl transition-colors ml-1",
								"aria-label": "Close resume view",
								children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 148,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-4 sm:p-8 overflow-x-auto bg-stone-100",
					children: /* @__PURE__ */ _jsxDEV("div", {
						className: "resume-sheet mx-auto max-w-[800px] bg-white text-stone-900 p-8 sm:p-12 rounded-2xl shadow-md font-sans text-xs sm:text-sm leading-normal border border-stone-200",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "text-center pb-4 border-b-2 border-orange-600",
								children: [
									/* @__PURE__ */ _jsxDEV("h1", {
										className: "text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900",
										children: "ARJUN M"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 159,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs text-stone-600 mt-1 font-medium",
										children: "Location: Coimbatore, Tamil Nadu"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 162,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs text-stone-600 font-mono mt-0.5",
										children: "+91 9342960627"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 165,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "mt-2 text-xs flex flex-wrap justify-center items-center gap-2 text-stone-700 font-mono",
										children: [
											/* @__PURE__ */ _jsxDEV("span", { children: ["Gmail: ", /* @__PURE__ */ _jsxDEV("a", {
												href: "mailto:arjun.m0204@gmail.com",
												className: "text-orange-600 hover:underline",
												children: "arjun.m0204@gmail.com"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 169,
												columnNumber: 30
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 169,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ _jsxDEV("span", { children: "|" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 170,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ _jsxDEV("span", { children: ["LinkedIn: ", /* @__PURE__ */ _jsxDEV("a", {
												href: "https://linkedin.com/in/arjun2604",
												target: "_blank",
												rel: "noreferrer",
												className: "text-orange-600 hover:underline",
												children: "linkedin.com/in/arjun2604"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 171,
												columnNumber: 33
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 171,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ _jsxDEV("span", { children: "|" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 172,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ _jsxDEV("span", { children: ["Github: ", /* @__PURE__ */ _jsxDEV("a", {
												href: "https://github.com/Arjun64594",
												target: "_blank",
												rel: "noreferrer",
												className: "text-orange-600 hover:underline",
												children: "github.com/Arjun64594"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 173,
												columnNumber: 31
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 173,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 168,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4",
								children: [/* @__PURE__ */ _jsxDEV("h2", {
									className: "text-xs font-bold text-orange-700 uppercase tracking-wider border-b border-orange-200 pb-1",
									children: "EXECUTIVE SUMMARY:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 179,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("p", {
									className: "mt-2 text-xs sm:text-[13px] text-stone-800 leading-relaxed text-justify",
									children: "Final-year CSE (Cyber Security) student with hands-on experience across the full stack — React, Node.js, Express, MySQL — and applied security tooling (OWASP Top 10, Nmap, Burp Suite, Wireshark). Built three independent full-stack and security-focused projects; seeking entry-level Software Engineer / Cyber Security roles."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 182,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 178,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4",
								children: [/* @__PURE__ */ _jsxDEV("h2", {
									className: "text-xs font-bold text-orange-700 uppercase tracking-wider border-b border-orange-200 pb-1",
									children: "EDUCATION:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-2 space-y-2",
									children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex justify-between items-center text-xs font-bold text-stone-900",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "B.E (CSE) – Cyber Security" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 196,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono font-normal",
											children: "2023 – 2027"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 197,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 195,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs text-stone-700 flex justify-between",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "Coimbatore Institute of Engineering and Technology" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 200,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-bold text-orange-700",
											children: "CGPA: 7.18"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 201,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 199,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 194,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "flex justify-between items-center text-xs font-bold text-stone-900",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "Higher Secondary Education" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 207,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono font-normal",
											children: "2022 – 2023"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 208,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 206,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs text-stone-700 flex justify-between",
										children: [/* @__PURE__ */ _jsxDEV("span", { children: "Government Higher Secondary School, Kalveerampalayam, Coimbatore" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 211,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-bold text-orange-700",
											children: "61.5%"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 212,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 210,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 205,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 193,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 188,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4",
								children: [/* @__PURE__ */ _jsxDEV("h2", {
									className: "text-xs font-bold text-orange-700 uppercase tracking-wider border-b border-orange-200 pb-1",
									children: "TECHNICAL SKILLS:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 220,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-2 space-y-1 text-xs text-stone-800",
									children: [
										/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Frontend:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 224,
											columnNumber: 22
										}, this), " HTML5, CSS3, JavaScript, React.js"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 224,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Backend:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 225,
											columnNumber: 22
										}, this), " Node.js, Express.js, REST API Design, JWT Authentication"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 225,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Database:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 226,
											columnNumber: 22
										}, this), " MySQL"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 226,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Languages:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 227,
											columnNumber: 22
										}, this), " C, Python"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 227,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Data Analysis:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 228,
											columnNumber: 22
										}, this), " Python (Pandas, NumPy) – basic level"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 228,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Cyber Security:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 229,
											columnNumber: 22
										}, this), " Web Application Security, OWASP Top 10, Kali Linux, Nmap, Wireshark, Burp Suite"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 229,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "Tools & Platforms:" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 230,
											columnNumber: 22
										}, this), " Git, GitHub, VS Code, Linux Basics"] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 230,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 223,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 219,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4",
								children: [/* @__PURE__ */ _jsxDEV("h2", {
									className: "text-xs font-bold text-orange-700 uppercase tracking-wider border-b border-orange-200 pb-1",
									children: "PROJECTS:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 236,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-2 space-y-3",
									children: [
										/* @__PURE__ */ _jsxDEV("div", { children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-xs text-stone-900",
												children: "FoodieHub – Full-Stack Food Ordering Web Application"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 242,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-[11px] text-stone-600 italic",
												children: "Technologies: React.js, Node.js, Express.js, MySQL, JWT"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 245,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("ul", {
												className: "list-disc list-inside mt-1 text-xs text-stone-800 space-y-0.5",
												children: [
													/* @__PURE__ */ _jsxDEV("li", { children: "Built a full-stack food ordering platform using React.js, Node.js, Express.js and MySQL" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 249,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ _jsxDEV("li", { children: "Implemented JWT-based user authentication, cart, and order management modules" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 250,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ _jsxDEV("li", { children: "Integrated MySQL database for real-time order tracking and data persistence" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 251,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 248,
												columnNumber: 19
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 241,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-xs text-stone-900",
												children: "Secure Sphere Design – Cyber Security Awareness Web Application"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 256,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-[11px] text-stone-600 italic",
												children: "Technologies: HTML5, CSS3, JavaScript"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 259,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("ul", {
												className: "list-disc list-inside mt-1 text-xs text-stone-800 space-y-0.5",
												children: [/* @__PURE__ */ _jsxDEV("li", { children: "Developed a responsive cybersecurity awareness platform using HTML5, CSS3, and JavaScript" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 263,
													columnNumber: 21
												}, this), /* @__PURE__ */ _jsxDEV("li", { children: "Designed content modules covering OWASP Top 10 vulnerabilities and secure coding best practices" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 264,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 262,
												columnNumber: 19
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 255,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "font-bold text-xs text-stone-900",
												children: "IoT-Based Vehicle Ignition Monitoring and GPS Tracking System"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 269,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "text-[11px] text-stone-600 italic",
												children: "Technologies: Raspberry Pi, GPS Module, Python"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 272,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ _jsxDEV("ul", {
												className: "list-disc list-inside mt-1 text-xs text-stone-800 space-y-0.5",
												children: [/* @__PURE__ */ _jsxDEV("li", { children: "Built a Raspberry Pi-based vehicle security system with real-time GPS tracking" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 276,
													columnNumber: 21
												}, this), /* @__PURE__ */ _jsxDEV("li", { children: "Implemented ignition monitoring logic using Python and GPS module integration" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 277,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 275,
												columnNumber: 19
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 268,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 240,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 235,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4",
								children: [/* @__PURE__ */ _jsxDEV("h2", {
									className: "text-xs font-bold text-orange-700 uppercase tracking-wider border-b border-orange-200 pb-1",
									children: "TRAININGS & CERTIFICATIONS:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 285,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-2",
									children: [
										/* @__PURE__ */ _jsxDEV("div", {
											className: "flex justify-between items-center text-xs font-bold text-stone-900",
											children: [/* @__PURE__ */ _jsxDEV("span", { children: "Cloud Computing Training (AWS)" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 290,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "font-mono font-normal",
												children: "23 Jun – 7 Jul 2025 (15 Days)"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 291,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 289,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "text-[11px] text-stone-600 italic",
											children: "Pantech e Learning Pvt. Ltd. | Certified under MSME, Govt. of India | Cert No: PEL-SI-2025-4519"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 293,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("ul", {
											className: "list-disc list-inside mt-1 text-xs text-stone-800 space-y-0.5",
											children: [/* @__PURE__ */ _jsxDEV("li", { children: "Completed a 15-day training on AWS cloud fundamentals covering EC2, S3, and IAM" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 297,
												columnNumber: 19
											}, this), /* @__PURE__ */ _jsxDEV("li", { children: "Gained foundational knowledge of cloud architecture, deployment models, and cloud security best practices" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 298,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 296,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 288,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 284,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4",
								children: [/* @__PURE__ */ _jsxDEV("h2", {
									className: "text-xs font-bold text-orange-700 uppercase tracking-wider border-b border-orange-200 pb-1",
									children: "ACHIEVEMENTS:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 305,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("ul", {
									className: "list-disc list-inside mt-1 text-xs text-stone-800 space-y-0.5",
									children: [/* @__PURE__ */ _jsxDEV("li", { children: "Participated in Hackathons" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 309,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("li", { children: "Participated in Technical Symposiums" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 310,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 308,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 304,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "pt-4",
								children: [/* @__PURE__ */ _jsxDEV("h2", {
									className: "text-xs font-bold text-orange-700 uppercase tracking-wider border-b border-orange-200 pb-1",
									children: "LANGUAGES:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 316,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-1 text-xs text-stone-800",
									children: "English, Tamil"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 319,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 315,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 155,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 154,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "no-print border-t border-stone-200 bg-white px-6 py-4 flex items-center justify-between",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "text-xs text-stone-500",
						children: "Tip: Click \"Print / Save PDF\" to generate an ATS-friendly single-page PDF"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 329,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: onClose,
						className: "px-4 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors",
						children: "Close Viewer"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 332,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 328,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 100,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 99,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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UUFBSyxXQUFVO2tCQUFmLENBQ0Usd0JBQUMsTUFBRDtTQUFJLFdBQVU7bUJBQTZGO1FBRXZHOzs7O2tCQUNKLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUE4QjtRQUV4Qzs7OztnQkFDRjs7Ozs7O01BRUY7Ozs7OztJQUNGOzs7OztJQUdMLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO2VBQWYsQ0FDRSx3QkFBQyxRQUFEO01BQU0sV0FBVTtnQkFBeUI7S0FFbkM7Ozs7ZUFDTix3QkFBQyxVQUFEO01BQ0UsU0FBUztNQUNULFdBQVU7Z0JBQ1g7S0FFTzs7OzthQUNMOzs7Ozs7R0FFSzs7Ozs7O0NBQ1Q7Ozs7O0FBRVQiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiUmVzdW1lTW9kYWwudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IFgsIFByaW50ZXIsIERvd25sb2FkLCBDb3B5LCBDaGVjaywgRmlsZVRleHQgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgUEVSU09OQUxfSU5GTywgUFJPSkVDVFMsIEVEVUNBVElPTiwgQ0VSVElGSUNBVElPTlMsIEFDSElFVkVNRU5UUyB9IGZyb20gJy4uL2RhdGEvcG9ydGZvbGlvRGF0YSc7XG5cbmludGVyZmFjZSBSZXN1bWVNb2RhbFByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUmVzdW1lTW9kYWw6IFJlYWN0LkZDPFJlc3VtZU1vZGFsUHJvcHM+ID0gKHsgaXNPcGVuLCBvbkNsb3NlIH0pID0+IHtcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBpZiAoIWlzT3BlbikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgaGFuZGxlUHJpbnQgPSAoKSA9PiB7XG4gICAgd2luZG93LnByaW50KCk7XG4gIH07XG5cbiAgY29uc3QgcmVzdW1lUGxhaW5UZXh0ID0gYFxuQVJKVU4gTVxuTG9jYXRpb246ICR7UEVSU09OQUxfSU5GTy5sb2NhdGlvbn1cblBob25lOiAke1BFUlNPTkFMX0lORk8ucGhvbmV9XG5FbWFpbDogJHtQRVJTT05BTF9JTkZPLmVtYWlsfSB8IExpbmtlZEluOiAke1BFUlNPTkFMX0lORk8ubGlua2VkaW59IHwgR2l0SHViOiAke1BFUlNPTkFMX0lORk8uZ2l0aHVifVxuXG5FWEVDVVRJVkUgU1VNTUFSWTpcbiR7UEVSU09OQUxfSU5GTy5leGVjdXRpdmVTdW1tYXJ5fVxuXG5FRFVDQVRJT046XG4tICR7RURVQ0FUSU9OWzBdLmRlZ3JlZX0gKDIwMjMgLSAyMDI3KVxuICAke0VEVUNBVElPTlswXS5pbnN0aXR1dGlvbn0gfCBDR1BBOiAke0VEVUNBVElPTlswXS5zY29yZX1cbi0gJHtFRFVDQVRJT05bMV0uZGVncmVlfSAoMjAyMiAtIDIwMjMpXG4gICR7RURVQ0FUSU9OWzFdLmluc3RpdHV0aW9ufSB8ICR7RURVQ0FUSU9OWzFdLnNjb3JlfVxuXG5URUNITklDQUwgU0tJTExTOlxuLSBGcm9udGVuZDogSFRNTDUsIENTUzMsIEphdmFTY3JpcHQsIFJlYWN0LmpzXG4tIEJhY2tlbmQ6IE5vZGUuanMsIEV4cHJlc3MuanMsIFJFU1QgQVBJIERlc2lnbiwgSldUIEF1dGhlbnRpY2F0aW9uXG4tIERhdGFiYXNlOiBNeVNRTFxuLSBMYW5ndWFnZXM6IEMsIFB5dGhvblxuLSBEYXRhIEFuYWx5c2lzOiBQeXRob24gKFBhbmRhcywgTnVtUHkpIC0gYmFzaWMgbGV2ZWxcbi0gQ3liZXIgU2VjdXJpdHk6IFdlYiBBcHBsaWNhdGlvbiBTZWN1cml0eSwgT1dBU1AgVG9wIDEwLCBLYWxpIExpbnV4LCBObWFwLCBXaXJlc2hhcmssIEJ1cnAgU3VpdGVcbi0gVG9vbHMgJiBQbGF0Zm9ybXM6IEdpdCwgR2l0SHViLCBWUyBDb2RlLCBMaW51eCBCYXNpY3NcblxuUFJPSkVDVFM6XG4xLiBGb29kaWVIdWIgLSBGdWxsLVN0YWNrIEZvb2QgT3JkZXJpbmcgV2ViIEFwcGxpY2F0aW9uXG4gICBUZWNobm9sb2dpZXM6IFJlYWN0LmpzLCBOb2RlLmpzLCBFeHByZXNzLmpzLCBNeVNRTCwgSldUXG4gICAtIEJ1aWx0IGEgZnVsbC1zdGFjayBmb29kIG9yZGVyaW5nIHBsYXRmb3JtIHVzaW5nIFJlYWN0LmpzLCBOb2RlLmpzLCBFeHByZXNzLmpzIGFuZCBNeVNRTFxuICAgLSBJbXBsZW1lbnRlZCBKV1QtYmFzZWQgdXNlciBhdXRoZW50aWNhdGlvbiwgY2FydCwgYW5kIG9yZGVyIG1hbmFnZW1lbnQgbW9kdWxlc1xuICAgLSBJbnRlZ3JhdGVkIE15U1FMIGRhdGFiYXNlIGZvciByZWFsLXRpbWUgb3JkZXIgdHJhY2tpbmcgYW5kIGRhdGEgcGVyc2lzdGVuY2VcblxuMi4gU2VjdXJlIFNwaGVyZSBEZXNpZ24gLSBDeWJlciBTZWN1cml0eSBBd2FyZW5lc3MgV2ViIEFwcGxpY2F0aW9uXG4gICBUZWNobm9sb2dpZXM6IEhUTUw1LCBDU1MzLCBKYXZhU2NyaXB0XG4gICAtIERldmVsb3BlZCBhIHJlc3BvbnNpdmUgY3liZXJzZWN1cml0eSBhd2FyZW5lc3MgcGxhdGZvcm0gdXNpbmcgSFRNTDUsIENTUzMsIGFuZCBKYXZhU2NyaXB0XG4gICAtIERlc2lnbmVkIGNvbnRlbnQgbW9kdWxlcyBjb3ZlcmluZyBPV0FTUCBUb3AgMTAgdnVsbmVyYWJpbGl0aWVzIGFuZCBzZWN1cmUgY29kaW5nIGJlc3QgcHJhY3RpY2VzXG5cbjMuIElvVC1CYXNlZCBWZWhpY2xlIElnbml0aW9uIE1vbml0b3JpbmcgYW5kIEdQUyBUcmFja2luZyBTeXN0ZW1cbiAgIFRlY2hub2xvZ2llczogUmFzcGJlcnJ5IFBpLCBHUFMgTW9kdWxlLCBQeXRob25cbiAgIC0gQnVpbHQgYSBSYXNwYmVycnkgUGktYmFzZWQgdmVoaWNsZSBzZWN1cml0eSBzeXN0ZW0gd2l0aCByZWFsLXRpbWUgR1BTIHRyYWNraW5nXG4gICAtIEltcGxlbWVudGVkIGlnbml0aW9uIG1vbml0b3JpbmcgbG9naWMgdXNpbmcgUHl0aG9uIGFuZCBHUFMgbW9kdWxlIGludGVncmF0aW9uXG5cblRSQUlOSU5HUyAmIENFUlRJRklDQVRJT05TOlxuLSBDbG91ZCBDb21wdXRpbmcgVHJhaW5pbmcgKEFXUykgKDIzIEp1biDigJMgNyBKdWwgMjAyNSwgMTUgRGF5cylcbiAgUGFudGVjaCBlIExlYXJuaW5nIFB2dC4gTHRkLiB8IENlcnRpZmllZCB1bmRlciBNU01FLCBHb3Z0LiBvZiBJbmRpYSB8IENlcnQgTm86IFBFTC1TSS0yMDI1LTQ1MTlcbiAgLSBDb21wbGV0ZWQgYSAxNS1kYXkgdHJhaW5pbmcgb24gQVdTIGNsb3VkIGZ1bmRhbWVudGFscyBjb3ZlcmluZyBFQzIsIFMzLCBhbmQgSUFNXG4gIC0gR2FpbmVkIGZvdW5kYXRpb25hbCBrbm93bGVkZ2Ugb2YgY2xvdWQgYXJjaGl0ZWN0dXJlLCBkZXBsb3ltZW50IG1vZGVscywgYW5kIGNsb3VkIHNlY3VyaXR5IGJlc3QgcHJhY3RpY2VzXG5cbkFDSElFVkVNRU5UUzpcbi0gUGFydGljaXBhdGVkIGluIEhhY2thdGhvbnNcbi0gUGFydGljaXBhdGVkIGluIFRlY2huaWNhbCBTeW1wb3NpdW1zXG5cbkxBTkdVQUdFUzpcbi0gRW5nbGlzaCwgVGFtaWxcbiAgYC50cmltKCk7XG5cbiAgY29uc3QgaGFuZGxlQ29weVRleHQgPSAoKSA9PiB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocmVzdW1lUGxhaW5UZXh0KTtcbiAgICBzZXRDb3BpZWQodHJ1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRDb3BpZWQoZmFsc2UpLCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZEpzb24gPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHBlcnNvbmFsSW5mbzogUEVSU09OQUxfSU5GTyxcbiAgICAgIGVkdWNhdGlvbjogRURVQ0FUSU9OLFxuICAgICAgY2VydGlmaWNhdGlvbnM6IENFUlRJRklDQVRJT05TLFxuICAgICAgcHJvamVjdHM6IFBST0pFQ1RTLFxuICAgICAgYWNoaWV2ZW1lbnRzOiBBQ0hJRVZFTUVOVFNcbiAgICB9O1xuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMildLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gdXJsO1xuICAgIGEuZG93bmxvYWQgPSAnQXJqdW5fTV9SZXN1bWVfRGF0YS5qc29uJztcbiAgICBhLmNsaWNrKCk7XG4gICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0zIHNtOnAtNiBvdmVyZmxvdy15LWF1dG8gYmctc3RvbmUtOTAwLzYwIGJhY2tkcm9wLWJsdXItc21cIj5cbiAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjk2IH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgc2NhbGU6IDEgfX1cbiAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45NiB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIG1heC13LTR4bCBtYXgtaC1bOTV2aF0gb3ZlcmZsb3cteS1hdXRvIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXN0b25lLTEwMCBzaGFkb3ctMnhsIGZsZXggZmxleC1jb2wgbXktYXV0b1wiXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgPlxuICAgICAgICBcbiAgICAgICAgey8qIFRvcCBBY3Rpb24gQmFyIChuby1wcmludCkgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tcHJpbnQgc3RpY2t5IHRvcC0wIHotMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1zdG9uZS0yMDAgYmctd2hpdGUvOTUgcHgtNiBweS0zLjUgYmFja2Ryb3AtYmx1ci1tZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1zdG9uZS05MDAgZm9udC1ib2xkIHRleHQtc20gc206dGV4dC1iYXNlXCI+XG4gICAgICAgICAgICA8RmlsZVRleHQgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgPHNwYW4+Q3VycmljdWx1bSBWaXRhZSDigJQgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNjAwXCI+QXJqdW4gTTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByaW50fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHB4LTMuNSBweS0xLjUgdGV4dC14cyBmb250LWJvbGQgdGV4dC13aGl0ZSBiZy1vcmFuZ2UtNjAwIGhvdmVyOmJnLW9yYW5nZS01MDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBzaGFkb3cteHNcIlxuICAgICAgICAgICAgICB0aXRsZT1cIlByaW50IGRpcmVjdGx5IG9yIHNhdmUgYXMgUERGXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFByaW50ZXIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5QcmludCAvIFNhdmUgUERGPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29weVRleHR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtc3RvbmUtNzAwIGhvdmVyOnRleHQtc3RvbmUtOTAwIGJnLXN0b25lLTEwMCBob3ZlcjpiZy1zdG9uZS0yMDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWNvbG9ycyBib3JkZXIgYm9yZGVyLXN0b25lLTIwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb3BpZWQgPyA8Q2hlY2sgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1lbWVyYWxkLTYwMFwiIC8+IDogPENvcHkgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPn1cbiAgICAgICAgICAgICAgPHNwYW4+e2NvcGllZCA/ICdDb3BpZWQnIDogJ0NvcHkgVGV4dCd9PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRG93bmxvYWRKc29ufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gc206ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zdG9uZS03MDAgaG92ZXI6dGV4dC1zdG9uZS05MDAgYmctc3RvbmUtMTAwIGhvdmVyOmJnLXN0b25lLTIwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIGJvcmRlciBib3JkZXItc3RvbmUtMjAwXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJEb3dubG9hZCBzdHJ1Y3R1cmVkIEpTT05cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RG93bmxvYWQgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5KU09OPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgdGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC1zdG9uZS05MDAgaG92ZXI6Ymctc3RvbmUtMjAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnMgbWwtMVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSByZXN1bWUgdmlld1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBQcmludGFibGUgUmVzdW1lIFNoZWV0IENhbnZhcyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgc206cC04IG92ZXJmbG93LXgtYXV0byBiZy1zdG9uZS0xMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VtZS1zaGVldCBteC1hdXRvIG1heC13LVs4MDBweF0gYmctd2hpdGUgdGV4dC1zdG9uZS05MDAgcC04IHNtOnAtMTIgcm91bmRlZC0yeGwgc2hhZG93LW1kIGZvbnQtc2FucyB0ZXh0LXhzIHNtOnRleHQtc20gbGVhZGluZy1ub3JtYWwgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDBcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcGItNCBib3JkZXItYi0yIGJvcmRlci1vcmFuZ2UtNjAwXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBzbTp0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXN0b25lLTkwMFwiPlxuICAgICAgICAgICAgICAgIEFSSlVOIE1cbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNjAwIG10LTEgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICBMb2NhdGlvbjogQ29pbWJhdG9yZSwgVGFtaWwgTmFkdVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNjAwIGZvbnQtbW9ubyBtdC0wLjVcIj5cbiAgICAgICAgICAgICAgICArOTEgOTM0Mjk2MDYyN1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHRleHQteHMgZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtc3RvbmUtNzAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkdtYWlsOiA8YSBocmVmPVwibWFpbHRvOmFyanVuLm0wMjA0QGdtYWlsLmNvbVwiIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBob3Zlcjp1bmRlcmxpbmVcIj5hcmp1bi5tMDIwNEBnbWFpbC5jb208L2E+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+TGlua2VkSW46IDxhIGhyZWY9XCJodHRwczovL2xpbmtlZGluLmNvbS9pbi9hcmp1bjI2MDRcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnVuZGVybGluZVwiPmxpbmtlZGluLmNvbS9pbi9hcmp1bjI2MDQ8L2E+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnw8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+R2l0aHViOiA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0FyanVuNjQ1OTRcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnVuZGVybGluZVwiPmdpdGh1Yi5jb20vQXJqdW42NDU5NDwvYT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBFeGVjdXRpdmUgU3VtbWFyeSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNzAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBib3JkZXItYiBib3JkZXItb3JhbmdlLTIwMCBwYi0xXCI+XG4gICAgICAgICAgICAgICAgRVhFQ1VUSVZFIFNVTU1BUlk6XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC14cyBzbTp0ZXh0LVsxM3B4XSB0ZXh0LXN0b25lLTgwMCBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1qdXN0aWZ5XCI+XG4gICAgICAgICAgICAgICAgRmluYWwteWVhciBDU0UgKEN5YmVyIFNlY3VyaXR5KSBzdHVkZW50IHdpdGggaGFuZHMtb24gZXhwZXJpZW5jZSBhY3Jvc3MgdGhlIGZ1bGwgc3RhY2sg4oCUIFJlYWN0LCBOb2RlLmpzLCBFeHByZXNzLCBNeVNRTCDigJQgYW5kIGFwcGxpZWQgc2VjdXJpdHkgdG9vbGluZyAoT1dBU1AgVG9wIDEwLCBObWFwLCBCdXJwIFN1aXRlLCBXaXJlc2hhcmspLiBCdWlsdCB0aHJlZSBpbmRlcGVuZGVudCBmdWxsLXN0YWNrIGFuZCBzZWN1cml0eS1mb2N1c2VkIHByb2plY3RzOyBzZWVraW5nIGVudHJ5LWxldmVsIFNvZnR3YXJlIEVuZ2luZWVyIC8gQ3liZXIgU2VjdXJpdHkgcm9sZXMuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogRWR1Y2F0aW9uICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LW9yYW5nZS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGJvcmRlci1iIGJvcmRlci1vcmFuZ2UtMjAwIHBiLTFcIj5cbiAgICAgICAgICAgICAgICBFRFVDQVRJT046XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgc3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHRleHQteHMgZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkIuRSAoQ1NFKSDigJMgQ3liZXIgU2VjdXJpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LW5vcm1hbFwiPjIwMjMg4oCTIDIwMjc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN0b25lLTcwMCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db2ltYmF0b3JlIEluc3RpdHV0ZSBvZiBFbmdpbmVlcmluZyBhbmQgVGVjaG5vbG9neTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtb3JhbmdlLTcwMFwiPkNHUEE6IDcuMTg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5IaWdoZXIgU2Vjb25kYXJ5IEVkdWNhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIGZvbnQtbm9ybWFsXCI+MjAyMiDigJMgMjAyMzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNzAwIGZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkdvdmVybm1lbnQgSGlnaGVyIFNlY29uZGFyeSBTY2hvb2wsIEthbHZlZXJhbXBhbGF5YW0sIENvaW1iYXRvcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LW9yYW5nZS03MDBcIj42MS41JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogVGVjaG5pY2FsIFNraWxscyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNzAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBib3JkZXItYiBib3JkZXItb3JhbmdlLTIwMCBwYi0xXCI+XG4gICAgICAgICAgICAgICAgVEVDSE5JQ0FMIFNLSUxMUzpcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHNwYWNlLXktMSB0ZXh0LXhzIHRleHQtc3RvbmUtODAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdj48c3Ryb25nPkZyb250ZW5kOjwvc3Ryb25nPiBIVE1MNSwgQ1NTMywgSmF2YVNjcmlwdCwgUmVhY3QuanM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxzdHJvbmc+QmFja2VuZDo8L3N0cm9uZz4gTm9kZS5qcywgRXhwcmVzcy5qcywgUkVTVCBBUEkgRGVzaWduLCBKV1QgQXV0aGVudGljYXRpb248L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PjxzdHJvbmc+RGF0YWJhc2U6PC9zdHJvbmc+IE15U1FMPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48c3Ryb25nPkxhbmd1YWdlczo8L3N0cm9uZz4gQywgUHl0aG9uPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48c3Ryb25nPkRhdGEgQW5hbHlzaXM6PC9zdHJvbmc+IFB5dGhvbiAoUGFuZGFzLCBOdW1QeSkg4oCTIGJhc2ljIGxldmVsPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48c3Ryb25nPkN5YmVyIFNlY3VyaXR5Ojwvc3Ryb25nPiBXZWIgQXBwbGljYXRpb24gU2VjdXJpdHksIE9XQVNQIFRvcCAxMCwgS2FsaSBMaW51eCwgTm1hcCwgV2lyZXNoYXJrLCBCdXJwIFN1aXRlPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj48c3Ryb25nPlRvb2xzICYgUGxhdGZvcm1zOjwvc3Ryb25nPiBHaXQsIEdpdEh1YiwgVlMgQ29kZSwgTGludXggQmFzaWNzPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBQcm9qZWN0cyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNzAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBib3JkZXItYiBib3JkZXItb3JhbmdlLTIwMCBwYi0xXCI+XG4gICAgICAgICAgICAgICAgUFJPSkVDVFM6XG4gICAgICAgICAgICAgIDwvaDI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhzIHRleHQtc3RvbmUtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIEZvb2RpZUh1YiDigJMgRnVsbC1TdGFjayBGb29kIE9yZGVyaW5nIFdlYiBBcHBsaWNhdGlvblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc3RvbmUtNjAwIGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgICAgICBUZWNobm9sb2dpZXM6IFJlYWN0LmpzLCBOb2RlLmpzLCBFeHByZXNzLmpzLCBNeVNRTCwgSldUXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgbXQtMSB0ZXh0LXhzIHRleHQtc3RvbmUtODAwIHNwYWNlLXktMC41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5CdWlsdCBhIGZ1bGwtc3RhY2sgZm9vZCBvcmRlcmluZyBwbGF0Zm9ybSB1c2luZyBSZWFjdC5qcywgTm9kZS5qcywgRXhwcmVzcy5qcyBhbmQgTXlTUUw8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SW1wbGVtZW50ZWQgSldULWJhc2VkIHVzZXIgYXV0aGVudGljYXRpb24sIGNhcnQsIGFuZCBvcmRlciBtYW5hZ2VtZW50IG1vZHVsZXM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SW50ZWdyYXRlZCBNeVNRTCBkYXRhYmFzZSBmb3IgcmVhbC10aW1lIG9yZGVyIHRyYWNraW5nIGFuZCBkYXRhIHBlcnNpc3RlbmNlPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14cyB0ZXh0LXN0b25lLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICBTZWN1cmUgU3BoZXJlIERlc2lnbiDigJMgQ3liZXIgU2VjdXJpdHkgQXdhcmVuZXNzIFdlYiBBcHBsaWNhdGlvblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc3RvbmUtNjAwIGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgICAgICBUZWNobm9sb2dpZXM6IEhUTUw1LCBDU1MzLCBKYXZhU2NyaXB0XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgbXQtMSB0ZXh0LXhzIHRleHQtc3RvbmUtODAwIHNwYWNlLXktMC41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5EZXZlbG9wZWQgYSByZXNwb25zaXZlIGN5YmVyc2VjdXJpdHkgYXdhcmVuZXNzIHBsYXRmb3JtIHVzaW5nIEhUTUw1LCBDU1MzLCBhbmQgSmF2YVNjcmlwdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5EZXNpZ25lZCBjb250ZW50IG1vZHVsZXMgY292ZXJpbmcgT1dBU1AgVG9wIDEwIHZ1bG5lcmFiaWxpdGllcyBhbmQgc2VjdXJlIGNvZGluZyBiZXN0IHByYWN0aWNlczwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteHMgdGV4dC1zdG9uZS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgSW9ULUJhc2VkIFZlaGljbGUgSWduaXRpb24gTW9uaXRvcmluZyBhbmQgR1BTIFRyYWNraW5nIFN5c3RlbVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtc3RvbmUtNjAwIGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgICAgICBUZWNobm9sb2dpZXM6IFJhc3BiZXJyeSBQaSwgR1BTIE1vZHVsZSwgUHl0aG9uXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgbGlzdC1pbnNpZGUgbXQtMSB0ZXh0LXhzIHRleHQtc3RvbmUtODAwIHNwYWNlLXktMC41XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5CdWlsdCBhIFJhc3BiZXJyeSBQaS1iYXNlZCB2ZWhpY2xlIHNlY3VyaXR5IHN5c3RlbSB3aXRoIHJlYWwtdGltZSBHUFMgdHJhY2tpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+SW1wbGVtZW50ZWQgaWduaXRpb24gbW9uaXRvcmluZyBsb2dpYyB1c2luZyBQeXRob24gYW5kIEdQUyBtb2R1bGUgaW50ZWdyYXRpb248L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFRyYWluaW5ncyAmIENlcnRpZmljYXRpb25zICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LW9yYW5nZS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIGJvcmRlci1iIGJvcmRlci1vcmFuZ2UtMjAwIHBiLTFcIj5cbiAgICAgICAgICAgICAgICBUUkFJTklOR1MgJiBDRVJUSUZJQ0FUSU9OUzpcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdGV4dC14cyBmb250LWJvbGQgdGV4dC1zdG9uZS05MDBcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNsb3VkIENvbXB1dGluZyBUcmFpbmluZyAoQVdTKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmb250LW5vcm1hbFwiPjIzIEp1biDigJMgNyBKdWwgMjAyNSAoMTUgRGF5cyk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXN0b25lLTYwMCBpdGFsaWNcIj5cbiAgICAgICAgICAgICAgICAgIFBhbnRlY2ggZSBMZWFybmluZyBQdnQuIEx0ZC4gfCBDZXJ0aWZpZWQgdW5kZXIgTVNNRSwgR292dC4gb2YgSW5kaWEgfCBDZXJ0IE5vOiBQRUwtU0ktMjAyNS00NTE5XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBtdC0xIHRleHQteHMgdGV4dC1zdG9uZS04MDAgc3BhY2UteS0wLjVcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5Db21wbGV0ZWQgYSAxNS1kYXkgdHJhaW5pbmcgb24gQVdTIGNsb3VkIGZ1bmRhbWVudGFscyBjb3ZlcmluZyBFQzIsIFMzLCBhbmQgSUFNPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5HYWluZWQgZm91bmRhdGlvbmFsIGtub3dsZWRnZSBvZiBjbG91ZCBhcmNoaXRlY3R1cmUsIGRlcGxveW1lbnQgbW9kZWxzLCBhbmQgY2xvdWQgc2VjdXJpdHkgYmVzdCBwcmFjdGljZXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBBY2hpZXZlbWVudHMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtb3JhbmdlLTcwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgYm9yZGVyLWIgYm9yZGVyLW9yYW5nZS0yMDAgcGItMVwiPlxuICAgICAgICAgICAgICAgIEFDSElFVkVNRU5UUzpcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBsaXN0LWluc2lkZSBtdC0xIHRleHQteHMgdGV4dC1zdG9uZS04MDAgc3BhY2UteS0wLjVcIj5cbiAgICAgICAgICAgICAgICA8bGk+UGFydGljaXBhdGVkIGluIEhhY2thdGhvbnM8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5QYXJ0aWNpcGF0ZWQgaW4gVGVjaG5pY2FsIFN5bXBvc2l1bXM8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBMYW5ndWFnZXMgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtb3JhbmdlLTcwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgYm9yZGVyLWIgYm9yZGVyLW9yYW5nZS0yMDAgcGItMVwiPlxuICAgICAgICAgICAgICAgIExBTkdVQUdFUzpcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgdGV4dC1zdG9uZS04MDBcIj5cbiAgICAgICAgICAgICAgICBFbmdsaXNoLCBUYW1pbFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBNb2RhbCBCb3R0b20gQWN0aW9ucyAobm8tcHJpbnQpICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vLXByaW50IGJvcmRlci10IGJvcmRlci1zdG9uZS0yMDAgYmctd2hpdGUgcHgtNiBweS00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdG9uZS01MDBcIj5cbiAgICAgICAgICAgIFRpcDogQ2xpY2sgXCJQcmludCAvIFNhdmUgUERGXCIgdG8gZ2VuZXJhdGUgYW4gQVRTLWZyaWVuZGx5IHNpbmdsZS1wYWdlIFBERlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXN0b25lLTcwMCBob3Zlcjp0ZXh0LXN0b25lLTkwMCBiZy1zdG9uZS0xMDAgaG92ZXI6Ymctc3RvbmUtMjAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIENsb3NlIFZpZXdlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ==