const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { Github, Linkedin, MapPin, ArrowRight, ShieldCheck, Check, Copy, ExternalLink, Phone, Download, Loader2 } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
import { PERSONAL_INFO } from "/src/data/portfolioData.ts";
import { downloadProjectZip } from "/src/utils/downloadProjectZip.ts";
var _jsxFileName = "/app/applet/src/components/Hero.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const Hero = ({ onOpenResume }) => {
	const [copiedEmail, setCopiedEmail] = useState(false);
	const [isDownloading, setIsDownloading] = useState(false);
	const [downloadStatus, setDownloadStatus] = useState("");
	const copyEmailToClipboard = () => {
		navigator.clipboard.writeText(PERSONAL_INFO.email);
		setCopiedEmail(true);
		setTimeout(() => setCopiedEmail(false), 2e3);
	};
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
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: .12,
				delayChildren: .1
			}
		}
	};
	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 16
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .5,
				ease: [
					.16,
					1,
					.3,
					1
				]
			}
		}
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-stone-200 bg-white",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "absolute inset-0 opacity-[0.025] pointer-events-none",
			style: {
				backgroundImage: `linear-gradient(#ea580c 1px, transparent 1px), linear-gradient(90deg, #ea580c 1px, transparent 1px)`,
				backgroundSize: "40px 40px"
			},
			"aria-hidden": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 71,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ _jsxDEV(motion.div, {
				variants: containerVariants,
				initial: "hidden",
				animate: "visible",
				className: "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "lg:col-span-7 space-y-6",
					children: [
						/* @__PURE__ */ _jsxDEV(motion.div, {
							variants: itemVariants,
							className: "flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-orange-600 font-bold tracking-wide",
									children: "CSE (Cyber Security)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									"aria-hidden": "true",
									className: "text-stone-300",
									children: "/"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "flex items-center gap-1 text-stone-700",
									children: [/* @__PURE__ */ _jsxDEV(MapPin, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 98,
										columnNumber: 17
									}, this), PERSONAL_INFO.location]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 97,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									"aria-hidden": "true",
									className: "text-stone-300",
									children: "/"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 101,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-stone-600",
									children: "Class of 2027"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 102,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV(motion.h1, {
							variants: itemVariants,
							className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-[1.15]",
							style: { textWrap: "balance" },
							children: [
								"Building secure full-stack web applications with",
								" ",
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-orange-600 underline decoration-orange-200 underline-offset-4 decoration-wavy",
									children: "engineering rigor"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 112,
									columnNumber: 15
								}, this),
								"."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV(motion.p, {
							variants: itemVariants,
							className: "text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl",
							children: [
								"I am a final-year Computer Science Engineering student specializing in Cyber Security at",
								" ",
								/* @__PURE__ */ _jsxDEV("strong", {
									className: "text-stone-900 font-semibold",
									children: "Coimbatore Institute of Engineering and Technology"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 15
								}, this),
								". Experienced in shipping full-stack products with",
								" ",
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-orange-700 font-semibold",
									children: "React, Node.js, Express, and MySQL"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 15
								}, this),
								", paired with hands-on vulnerability analysis and penetration testing using",
								" ",
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-orange-700 font-semibold",
									children: "OWASP Top 10, Kali Linux, Burp Suite, and Nmap"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 124,
									columnNumber: 15
								}, this),
								"."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV(motion.div, {
							variants: itemVariants,
							className: "flex flex-wrap items-center gap-3 pt-2",
							children: [
								/* @__PURE__ */ _jsxDEV(motion.a, {
									whileHover: {
										y: -2,
										scale: 1.02
									},
									whileTap: { scale: .98 },
									href: "#projects",
									className: "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-all shadow-sm shadow-orange-600/25",
									children: [/* @__PURE__ */ _jsxDEV("span", { children: "Explore Projects" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 135,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV(ArrowRight, { className: "w-4 h-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 129,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV(motion.button, {
									whileHover: {
										y: -2,
										scale: 1.02
									},
									whileTap: { scale: .98 },
									onClick: handleDownloadCode,
									disabled: isDownloading,
									className: "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-orange-800 hover:text-orange-900 bg-orange-50 hover:bg-orange-100/90 border border-orange-200 rounded-xl transition-colors shadow-xs cursor-pointer",
									title: "Download complete project ZIP to push to GitHub",
									children: [isDownloading ? /* @__PURE__ */ _jsxDEV(Loader2, { className: "w-4 h-4 text-orange-600 animate-spin" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 19
									}, this) : /* @__PURE__ */ _jsxDEV(Download, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 150,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: isDownloading ? downloadStatus || "Packaging ZIP..." : "Download Code (.ZIP)" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV(motion.button, {
									whileHover: {
										y: -2,
										scale: 1.02
									},
									whileTap: { scale: .98 },
									onClick: onOpenResume,
									className: "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-stone-800 hover:text-orange-700 bg-stone-100 hover:bg-stone-200/70 border border-stone-200 rounded-xl transition-colors",
									children: /* @__PURE__ */ _jsxDEV("span", { children: "Resume" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 161,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 155,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV(motion.button, {
									whileHover: { y: -1 },
									whileTap: { scale: .97 },
									onClick: copyEmailToClipboard,
									className: "inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-mono text-stone-700 hover:text-orange-700 bg-white hover:bg-orange-50/50 border border-stone-200 rounded-xl transition-colors",
									title: "Copy email address",
									children: [copiedEmail ? /* @__PURE__ */ _jsxDEV(Check, { className: "w-3.5 h-3.5 text-emerald-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 32
									}, this) : /* @__PURE__ */ _jsxDEV(Copy, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 85
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "font-medium",
										children: copiedEmail ? "Copied" : PERSONAL_INFO.email
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 172,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 164,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV(motion.div, {
							variants: itemVariants,
							className: "pt-2 flex flex-wrap items-center gap-6 text-xs text-stone-600 font-mono",
							children: [
								/* @__PURE__ */ _jsxDEV("a", {
									href: PERSONAL_INFO.github,
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center gap-1.5 text-stone-700 hover:text-orange-600 transition-colors",
									children: [
										/* @__PURE__ */ _jsxDEV(Github, { className: "w-4 h-4 text-stone-800" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 184,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("span", { children: ["github.com/", PERSONAL_INFO.githubUsername] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 185,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3 h-3 text-stone-400" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 186,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 178,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("a", {
									href: PERSONAL_INFO.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "flex items-center gap-1.5 text-stone-700 hover:text-orange-600 transition-colors",
									children: [
										/* @__PURE__ */ _jsxDEV(Linkedin, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 195,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("span", { children: ["in/", PERSONAL_INFO.linkedinHandle] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 196,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3 h-3 text-stone-400" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 197,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("a", {
									href: `tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`,
									className: "flex items-center gap-1.5 text-stone-700 hover:text-orange-600 transition-colors",
									children: [/* @__PURE__ */ _jsxDEV(Phone, { className: "w-4 h-4 text-stone-600" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 204,
										columnNumber: 17
									}, this), /* @__PURE__ */ _jsxDEV("span", { children: PERSONAL_INFO.phone }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 205,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 200,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV(motion.div, {
					variants: itemVariants,
					className: "lg:col-span-5 flex justify-center",
					children: /* @__PURE__ */ _jsxDEV(motion.div, {
						whileHover: {
							y: -4,
							transition: { duration: .3 }
						},
						className: "relative w-full max-w-sm sm:max-w-md lg:max-w-none",
						children: /* @__PURE__ */ _jsxDEV("div", {
							className: "relative rounded-3xl border border-stone-200 bg-white p-3 sm:p-4 shadow-xl shadow-stone-200/50",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "relative aspect-square w-full overflow-hidden rounded-2xl bg-stone-100 border border-stone-100",
								children: [
									/* @__PURE__ */ _jsxDEV("img", {
										src: "/src/assets/images/avatar_engineer_portrait_1792421495359.jpg",
										alt: "Arjun M - Software Engineer and Cyber Security Specialist",
										referrerPolicy: "no-referrer",
										className: "h-full w-full object-cover object-top transition-transform duration-500 hover:scale-102"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 226,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 233,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-stone-950/75 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-white/10",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, { className: "w-4 h-4 text-orange-400" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 238,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("span", {
												className: "font-semibold text-white",
												children: "Full-Stack & Security"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 239,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 237,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono text-stone-300 text-[11px]",
											children: "CIET · 2023–2027"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 241,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 236,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 225,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "mt-3 grid grid-cols-2 gap-2 text-xs",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "p-3 rounded-xl bg-orange-50/60 border border-orange-100",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-orange-700 font-semibold block text-[11px] uppercase tracking-wider",
										children: "Primary Stack"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 248,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-stone-900 font-bold",
										children: "React · Node · MySQL"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 249,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 247,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "p-3 rounded-xl bg-orange-50/60 border border-orange-100",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "text-orange-700 font-semibold block text-[11px] uppercase tracking-wider",
										children: "Security Tools"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 252,
										columnNumber: 21
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-stone-900 font-bold",
										children: "OWASP · Burp · Nmap"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 253,
										columnNumber: 21
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 251,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 246,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 216,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: .2
				},
				className: "mt-14 pt-8 border-t border-stone-200",
				children: /* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-6",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-1 p-3 rounded-xl hover:bg-stone-50 transition-colors",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "font-mono text-3xl sm:text-4xl font-extrabold text-orange-600 tabular-nums",
									children: "03"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 275,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs sm:text-sm font-bold text-stone-900",
									children: "Independent Projects Built"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 278,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs text-stone-500",
									children: "Full-Stack, Security & IoT"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 281,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 274,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-1 p-3 rounded-xl hover:bg-stone-50 transition-colors",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "font-mono text-3xl sm:text-4xl font-extrabold text-orange-600 tabular-nums",
									children: "7.18"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 287,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs sm:text-sm font-bold text-stone-900",
									children: "Cumulative CGPA"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 290,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs text-stone-500",
									children: "B.E. CSE (Cyber Security)"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 293,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 286,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-1 p-3 rounded-xl hover:bg-stone-50 transition-colors",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "font-mono text-3xl sm:text-4xl font-extrabold text-orange-600 tabular-nums",
									children: "AWS"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 299,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs sm:text-sm font-bold text-stone-900",
									children: "Cloud Training Certified"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 302,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs text-stone-500",
									children: "EC2 · S3 · IAM · MSME Govt."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 305,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 298,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-1 p-3 rounded-xl hover:bg-stone-50 transition-colors",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "font-mono text-3xl sm:text-4xl font-extrabold text-orange-600 tabular-nums",
									children: "2027"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 311,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs sm:text-sm font-bold text-stone-900",
									children: "Graduation Year"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 314,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs text-stone-500",
									children: "Seeking Entry-Level Roles"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 317,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 310,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 272,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 265,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 80,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 69,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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QUQ7U0FBSyxXQUFVO21CQUE2RTtRQUV2Rjs7Ozs7UUFDTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBOEM7UUFFeEQ7Ozs7O1FBQ0wsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQXlCO1FBRW5DOzs7OztPQUNGOzs7Ozs7TUFFTCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZjtRQUNFLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUE2RTtRQUV2Rjs7Ozs7UUFDTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBOEM7UUFFeEQ7Ozs7O1FBQ0wsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQXlCO1FBRW5DOzs7OztPQUNGOzs7Ozs7TUFFTCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZjtRQUNFLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUE2RTtRQUV2Rjs7Ozs7UUFDTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBOEM7UUFFeEQ7Ozs7O1FBQ0wsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQXlCO1FBRW5DOzs7OztPQUNGOzs7Ozs7TUFFTCx3QkFBQyxPQUFEO09BQUssV0FBVTtpQkFBZjtRQUNFLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUE2RTtRQUV2Rjs7Ozs7UUFDTCx3QkFBQyxPQUFEO1NBQUssV0FBVTttQkFBOEM7UUFFeEQ7Ozs7O1FBQ0wsd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQXlCO1FBRW5DOzs7OztPQUNGOzs7Ozs7S0FFRjs7Ozs7O0dBQ0s7Ozs7V0FFVDs7Ozs7VUFDRTs7Ozs7O0FBRWIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiSGVyby50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IFxuICBHaXRodWIsIFxuICBMaW5rZWRpbiwgXG4gIE1hcFBpbiwgXG4gIEFycm93UmlnaHQsIFxuICBTaGllbGRDaGVjaywgXG4gIENoZWNrLCBcbiAgQ29weSwgXG4gIEV4dGVybmFsTGluaywgXG4gIFBob25lLCBcbiAgRG93bmxvYWQsIFxuICBMb2FkZXIyIFxufSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuaW1wb3J0IHsgUEVSU09OQUxfSU5GTyB9IGZyb20gJy4uL2RhdGEvcG9ydGZvbGlvRGF0YSc7XG5pbXBvcnQgeyBkb3dubG9hZFByb2plY3RaaXAgfSBmcm9tICcuLi91dGlscy9kb3dubG9hZFByb2plY3RaaXAnO1xuXG5pbnRlcmZhY2UgSGVyb1Byb3BzIHtcbiAgb25PcGVuUmVzdW1lOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgSGVybzogUmVhY3QuRkM8SGVyb1Byb3BzPiA9ICh7IG9uT3BlblJlc3VtZSB9KSA9PiB7XG4gIGNvbnN0IFtjb3BpZWRFbWFpbCwgc2V0Q29waWVkRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEb3dubG9hZGluZywgc2V0SXNEb3dubG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkb3dubG9hZFN0YXR1cywgc2V0RG93bmxvYWRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGNvcHlFbWFpbFRvQ2xpcGJvYXJkID0gKCkgPT4ge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KFBFUlNPTkFMX0lORk8uZW1haWwpO1xuICAgIHNldENvcGllZEVtYWlsKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0Q29waWVkRW1haWwoZmFsc2UpLCAyMDAwKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEb3dubG9hZENvZGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldElzRG93bmxvYWRpbmcodHJ1ZSk7XG4gICAgICBhd2FpdCBkb3dubG9hZFByb2plY3RaaXAoKHN0YXR1cykgPT4gc2V0RG93bmxvYWRTdGF0dXMoc3RhdHVzKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldElzRG93bmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXREb3dubG9hZFN0YXR1cygnJyk7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29udGFpbmVyVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgICB2aXNpYmxlOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMTIsXG4gICAgICAgIGRlbGF5Q2hpbGRyZW46IDAuMVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBpdGVtVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDE2IH0sXG4gICAgdmlzaWJsZTogeyBcbiAgICAgIG9wYWNpdHk6IDEsIFxuICAgICAgeTogMCxcbiAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNSwgZWFzZTogWzAuMTYsIDEsIDAuMywgMV0gYXMgY29uc3QgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBwdC0xMCBwYi0xNiBsZzpwdC0xNiBsZzpwYi0yNCBib3JkZXItYiBib3JkZXItc3RvbmUtMjAwIGJnLXdoaXRlXCI+XG4gICAgICB7LyogU3VidGxlIG1vZGVybiBnZW9tZXRyaWMgZ3JpZCBiYWNrZ3JvdW5kIGluIHNvZnQgb3JhbmdlL3N0b25lICovfVxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvcGFjaXR5LVswLjAyNV0gcG9pbnRlci1ldmVudHMtbm9uZVwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KCNlYTU4MGMgMXB4LCB0cmFuc3BhcmVudCAxcHgpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlYTU4MGMgMXB4LCB0cmFuc3BhcmVudCAxcHgpYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJzQwcHggNDBweCdcbiAgICAgICAgfX1cbiAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXgtYXV0byBtYXgtdy03eGwgcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgXG4gICAgICAgIHsvKiBTcGxpdC1TY3JlZW4gSGVybyAqL31cbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgdmFyaWFudHM9e2NvbnRhaW5lclZhcmlhbnRzfVxuICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0xMiBnYXAtMTAgbGc6Z2FwLTE0IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogTGVmdCBDb2x1bW46IFR5cG9ncmFwaGljIEhpZXJhcmNoeSB3aXRoIE9yYW5nZSBUZXh0ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tNyBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIENsZWFuIHVuYm94ZWQga2lja2VyICovfVxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2l0ZW1WYXJpYW50c30gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgZm9udC1tb25vIHRleHQtc3RvbmUtNTAwXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBmb250LWJvbGQgdHJhY2tpbmctd2lkZVwiPkNTRSAoQ3liZXIgU2VjdXJpdHkpPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTMwMFwiPi88L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xIHRleHQtc3RvbmUtNzAwXCI+XG4gICAgICAgICAgICAgICAgPE1hcFBpbiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICAgIHtQRVJTT05BTF9JTkZPLmxvY2F0aW9ufVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtMzAwXCI+Lzwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS02MDBcIj5DbGFzcyBvZiAyMDI3PC9zcGFuPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICB7LyogRGlzcGxheSBIZWFkbGluZSB3aXRoIHN0cmlraW5nIG9yYW5nZSBlbXBoYXNpcyAqL31cbiAgICAgICAgICAgIDxtb3Rpb24uaDEgXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXtpdGVtVmFyaWFudHN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtM3hsIHNtOnRleHQtNHhsIGxnOnRleHQtNXhsIGZvbnQtZXh0cmFib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtc3RvbmUtOTAwIGxlYWRpbmctWzEuMTVdXCIgXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRleHRXcmFwOiAnYmFsYW5jZScgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQnVpbGRpbmcgc2VjdXJlIGZ1bGwtc3RhY2sgd2ViIGFwcGxpY2F0aW9ucyB3aXRoeycgJ31cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNjAwIHVuZGVybGluZSBkZWNvcmF0aW9uLW9yYW5nZS0yMDAgdW5kZXJsaW5lLW9mZnNldC00IGRlY29yYXRpb24td2F2eVwiPlxuICAgICAgICAgICAgICAgIGVuZ2luZWVyaW5nIHJpZ29yXG4gICAgICAgICAgICAgIDwvc3Bhbj4uXG4gICAgICAgICAgICA8L21vdGlvbi5oMT5cblxuICAgICAgICAgICAgey8qIExlYWQgQ29weSAqL31cbiAgICAgICAgICAgIDxtb3Rpb24ucCB2YXJpYW50cz17aXRlbVZhcmlhbnRzfSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyB0ZXh0LXN0b25lLTYwMCBsZWFkaW5nLXJlbGF4ZWQgbWF4LXctMnhsXCI+XG4gICAgICAgICAgICAgIEkgYW0gYSBmaW5hbC15ZWFyIENvbXB1dGVyIFNjaWVuY2UgRW5naW5lZXJpbmcgc3R1ZGVudCBzcGVjaWFsaXppbmcgaW4gQ3liZXIgU2VjdXJpdHkgYXR7JyAnfVxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtOTAwIGZvbnQtc2VtaWJvbGRcIj5Db2ltYmF0b3JlIEluc3RpdHV0ZSBvZiBFbmdpbmVlcmluZyBhbmQgVGVjaG5vbG9neTwvc3Ryb25nPi4gXG4gICAgICAgICAgICAgIEV4cGVyaWVuY2VkIGluIHNoaXBwaW5nIGZ1bGwtc3RhY2sgcHJvZHVjdHMgd2l0aHsnICd9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTcwMCBmb250LXNlbWlib2xkXCI+UmVhY3QsIE5vZGUuanMsIEV4cHJlc3MsIGFuZCBNeVNRTDwvc3Bhbj4sIFxuICAgICAgICAgICAgICBwYWlyZWQgd2l0aCBoYW5kcy1vbiB2dWxuZXJhYmlsaXR5IGFuYWx5c2lzIGFuZCBwZW5ldHJhdGlvbiB0ZXN0aW5nIHVzaW5neycgJ31cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNzAwIGZvbnQtc2VtaWJvbGRcIj5PV0FTUCBUb3AgMTAsIEthbGkgTGludXgsIEJ1cnAgU3VpdGUsIGFuZCBObWFwPC9zcGFuPi5cbiAgICAgICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgICAgIHsvKiBBY3Rpb24gQnV0dG9ucyB3aXRoIG1vZGVybiBtaWNyby1hbmltYXRpb25zICovfVxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2l0ZW1WYXJpYW50c30gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0zIHB0LTJcIj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5hXG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiwgc2NhbGU6IDEuMDIgfX1cbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45OCB9fVxuICAgICAgICAgICAgICAgIGhyZWY9XCIjcHJvamVjdHNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC01IHB5LTIuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC13aGl0ZSBiZy1vcmFuZ2UtNjAwIGhvdmVyOmJnLW9yYW5nZS01MDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWFsbCBzaGFkb3ctc20gc2hhZG93LW9yYW5nZS02MDAvMjVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+RXhwbG9yZSBQcm9qZWN0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uYT5cblxuICAgICAgICAgICAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgeTogLTIsIHNjYWxlOiAxLjAyIH19XG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTggfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEb3dubG9hZENvZGV9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRG93bmxvYWRpbmd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTUgcHktMi41IHRleHQtc20gZm9udC1ib2xkIHRleHQtb3JhbmdlLTgwMCBob3Zlcjp0ZXh0LW9yYW5nZS05MDAgYmctb3JhbmdlLTUwIGhvdmVyOmJnLW9yYW5nZS0xMDAvOTAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnMgc2hhZG93LXhzIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkRvd25sb2FkIGNvbXBsZXRlIHByb2plY3QgWklQIHRvIHB1c2ggdG8gR2l0SHViXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpc0Rvd25sb2FkaW5nID8gKFxuICAgICAgICAgICAgICAgICAgPExvYWRlcjIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW9yYW5nZS02MDAgYW5pbWF0ZS1zcGluXCIgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPERvd25sb2FkIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxzcGFuPntpc0Rvd25sb2FkaW5nID8gKGRvd25sb2FkU3RhdHVzIHx8ICdQYWNrYWdpbmcgWklQLi4uJykgOiAnRG93bmxvYWQgQ29kZSAoLlpJUCknfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyB5OiAtMiwgc2NhbGU6IDEuMDIgfX1cbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45OCB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uT3BlblJlc3VtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtNSBweS0yLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtc3RvbmUtODAwIGhvdmVyOnRleHQtb3JhbmdlLTcwMCBiZy1zdG9uZS0xMDAgaG92ZXI6Ymctc3RvbmUtMjAwLzcwIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4+UmVzdW1lPC9zcGFuPlxuICAgICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG5cbiAgICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC0xIH19XG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTcgfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb3B5RW1haWxUb0NsaXBib2FyZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSBweC0zLjUgcHktMi41IHRleHQteHMgZm9udC1tb25vIHRleHQtc3RvbmUtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTcwMCBiZy13aGl0ZSBob3ZlcjpiZy1vcmFuZ2UtNTAvNTAgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJDb3B5IGVtYWlsIGFkZHJlc3NcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NvcGllZEVtYWlsID8gPENoZWNrIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtZW1lcmFsZC02MDBcIiAvPiA6IDxDb3B5IGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtb3JhbmdlLTYwMFwiIC8+fVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2NvcGllZEVtYWlsID8gJ0NvcGllZCcgOiBQRVJTT05BTF9JTkZPLmVtYWlsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICB7LyogU29jaWFsICYgQ29udGFjdCBEaXJlY3QgTGlua3MgKi99XG4gICAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17aXRlbVZhcmlhbnRzfSBjbGFzc05hbWU9XCJwdC0yIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtNiB0ZXh0LXhzIHRleHQtc3RvbmUtNjAwIGZvbnQtbW9ub1wiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e1BFUlNPTkFMX0lORk8uZ2l0aHVifVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXN0b25lLTcwMCBob3Zlcjp0ZXh0LW9yYW5nZS02MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEdpdGh1YiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtc3RvbmUtODAwXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5naXRodWIuY29tL3tQRVJTT05BTF9JTkZPLmdpdGh1YlVzZXJuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1zdG9uZS00MDBcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtQRVJTT05BTF9JTkZPLmxpbmtlZGlufVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXN0b25lLTcwMCBob3Zlcjp0ZXh0LW9yYW5nZS02MDAgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmtlZGluIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5pbi97UEVSU09OQUxfSU5GTy5saW5rZWRpbkhhbmRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPEV4dGVybmFsTGluayBjbGFzc05hbWU9XCJ3LTMgaC0zIHRleHQtc3RvbmUtNDAwXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YHRlbDoke1BFUlNPTkFMX0lORk8ucGhvbmUucmVwbGFjZSgvXFxzKy9nLCAnJyl9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQtc3RvbmUtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uLWNvbG9yc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGhvbmUgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXN0b25lLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+e1BFUlNPTkFMX0lORk8ucGhvbmV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBSaWdodCBDb2x1bW46IEhlcm8gVmlzdWFsIENvbnRhaW5lciAqL31cbiAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgIHZhcmlhbnRzPXtpdGVtVmFyaWFudHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi01IGZsZXgganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHk6IC00LCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjMgfSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctc20gc206bWF4LXctbWQgbGc6bWF4LXctbm9uZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB7LyogQ2FyZCBmcmFtaW5nIHdpdGggc3VidGxlIHdhcm0gYm9yZGVyICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIGJnLXdoaXRlIHAtMyBzbTpwLTQgc2hhZG93LXhsIHNoYWRvdy1zdG9uZS0yMDAvNTBcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7LyogUGhvdG8gc2xvdCAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGFzcGVjdC1zcXVhcmUgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBiZy1zdG9uZS0xMDAgYm9yZGVyIGJvcmRlci1zdG9uZS0xMDBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3NyYy9hc3NldHMvaW1hZ2VzL2F2YXRhcl9lbmdpbmVlcl9wb3J0cmFpdF8xNzkyNDIxNDk1MzU5LmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkFyanVuIE0gLSBTb2Z0d2FyZSBFbmdpbmVlciBhbmQgQ3liZXIgU2VjdXJpdHkgU3BlY2lhbGlzdFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtdG9wIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMCBob3ZlcjpzY2FsZS0xMDJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHsvKiBTdWJ0bGUgY2xlYW4gYm90dG9tIHNjcmltICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1zdG9uZS05MDAvNjAgdmlhLXRyYW5zcGFyZW50IHRvLXRyYW5zcGFyZW50IHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuXG4gICAgICAgICAgICAgICAgICB7LyogQ29ybmVyIHRlY2huaWNhbCBiYWRnZSBpbiBjbGVhbiBnbGFzcyAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTMgbGVmdC0zIHJpZ2h0LTMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgdGV4dC13aGl0ZSBiZy1zdG9uZS05NTAvNzUgYmFja2Ryb3AtYmx1ci1tZCBweC0zLjUgcHktMi41IHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNoaWVsZENoZWNrIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1vcmFuZ2UtNDAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtd2hpdGVcIj5GdWxsLVN0YWNrICYgU2VjdXJpdHk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1zdG9uZS0zMDAgdGV4dC1bMTFweF1cIj5DSUVUIMK3IDIwMjPigJMyMDI3PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogRm9jdXMgQXJlYXMgTWljcm8gU3RyaXAgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTIgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC14bCBiZy1vcmFuZ2UtNTAvNjAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTcwMCBmb250LXNlbWlib2xkIGJsb2NrIHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlByaW1hcnkgU3RhY2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtOTAwIGZvbnQtYm9sZFwiPlJlYWN0IMK3IE5vZGUgwrcgTXlTUUw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQteGwgYmctb3JhbmdlLTUwLzYwIGJvcmRlciBib3JkZXItb3JhbmdlLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS03MDAgZm9udC1zZW1pYm9sZCBibG9jayB0ZXh0LVsxMXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5TZWN1cml0eSBUb29sczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdG9uZS05MDAgZm9udC1ib2xkXCI+T1dBU1AgwrcgQnVycCDCtyBObWFwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgIHsvKiBGdWxsLVdpZHRoIE1ldHJpY3MgU3RyaXAgQmVsb3cgdGhlIFNwbGl0IHdpdGggT3JhbmdlIE51bWJlcnMgKi99XG4gICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuMiB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTE0IHB0LTggYm9yZGVyLXQgYm9yZGVyLXN0b25lLTIwMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbWQ6Z3JpZC1jb2xzLTQgZ2FwLTZcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEgcC0zIHJvdW5kZWQteGwgaG92ZXI6Ymctc3RvbmUtNTAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC0zeGwgc206dGV4dC00eGwgZm9udC1leHRyYWJvbGQgdGV4dC1vcmFuZ2UtNjAwIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICAgIDAzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSBmb250LWJvbGQgdGV4dC1zdG9uZS05MDBcIj5cbiAgICAgICAgICAgICAgICBJbmRlcGVuZGVudCBQcm9qZWN0cyBCdWlsdFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNTAwXCI+XG4gICAgICAgICAgICAgICAgRnVsbC1TdGFjaywgU2VjdXJpdHkgJiBJb1RcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEgcC0zIHJvdW5kZWQteGwgaG92ZXI6Ymctc3RvbmUtNTAgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC0zeGwgc206dGV4dC00eGwgZm9udC1leHRyYWJvbGQgdGV4dC1vcmFuZ2UtNjAwIHRhYnVsYXItbnVtc1wiPlxuICAgICAgICAgICAgICAgIDcuMThcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBzbTp0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTkwMFwiPlxuICAgICAgICAgICAgICAgIEN1bXVsYXRpdmUgQ0dQQVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNTAwXCI+XG4gICAgICAgICAgICAgICAgQi5FLiBDU0UgKEN5YmVyIFNlY3VyaXR5KVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMSBwLTMgcm91bmRlZC14bCBob3ZlcjpiZy1zdG9uZS01MCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0ZXh0LW9yYW5nZS02MDAgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgICAgQVdTXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgc206dGV4dC1zbSBmb250LWJvbGQgdGV4dC1zdG9uZS05MDBcIj5cbiAgICAgICAgICAgICAgICBDbG91ZCBUcmFpbmluZyBDZXJ0aWZpZWRcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN0b25lLTUwMFwiPlxuICAgICAgICAgICAgICAgIEVDMiDCtyBTMyDCtyBJQU0gwrcgTVNNRSBHb3Z0LlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMSBwLTMgcm91bmRlZC14bCBob3ZlcjpiZy1zdG9uZS01MCB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LTN4bCBzbTp0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCB0ZXh0LW9yYW5nZS02MDAgdGFidWxhci1udW1zXCI+XG4gICAgICAgICAgICAgICAgMjAyN1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHNtOnRleHQtc20gZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwXCI+XG4gICAgICAgICAgICAgICAgR3JhZHVhdGlvbiBZZWFyXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdG9uZS01MDBcIj5cbiAgICAgICAgICAgICAgICBTZWVraW5nIEVudHJ5LUxldmVsIFJvbGVzXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuIl19