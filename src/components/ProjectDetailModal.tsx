const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion, AnimatePresence } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { X, Github, ExternalLink, ShieldCheck, Database, Server, Layout, CheckCircle2, Play, AlertTriangle, Lock, Cpu, RefreshCw } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
var _jsxFileName = "/app/applet/src/components/ProjectDetailModal.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const ProjectDetailModal = ({ project, onClose }) => {
	const [activeTab, setActiveTab] = useState("overview");
	// Interactive states for FoodieHub Demo
	const [foodieCart, setFoodieCart] = useState([{
		id: "1",
		name: "Paneer Butter Masala",
		price: 280,
		qty: 1
	}, {
		id: "2",
		name: "Garlic Butter Naan",
		price: 60,
		qty: 2
	}]);
	const [authToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjY0NTk0LCJlbWFpbCI6ImFyanVuLm0wMjA0QGdtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTc5MjQyMTQ5Mn0");
	const [orderStatus, setOrderStatus] = useState("Preparing");
	// Interactive states for SecureSphere Demo
	const [selectedOwasp, setSelectedOwasp] = useState("sqli");
	const [simulatedInput, setSimulatedInput] = useState("admin' OR '1'='1");
	const [sanitizedResult, setSanitizedResult] = useState("");
	// Interactive states for IoT Vehicle Demo
	const [ignitionState, setIgnitionState] = useState(false);
	const [geoCoords, setGeoCoords] = useState({
		lat: "11.0168° N",
		lng: "76.9558° E",
		speed: "0 km/h"
	});
	const [tamperAlert, setTamperAlert] = useState(false);
	if (!project) return null;
	const totalFoodie = foodieCart.reduce((sum, item) => sum + item.price * item.qty, 0);
	const simulateSanitization = () => {
		if (selectedOwasp === "sqli") {
			const clean = simulatedInput.replace(/['"\\;]/g, "");
			setSanitizedResult(`Prepared Statement [SELECT * FROM users WHERE username = ? AND password = ?] -> Input bound safely as parameter literal: "${clean}"`);
		} else if (selectedOwasp === "xss") {
			const escaped = simulatedInput.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
			setSanitizedResult(`HTML Entity Escaped Output: ${escaped}`);
		} else {
			setSanitizedResult(`Applied strict authorization policy & validated header integrity.`);
		}
	};
	const toggleIgnition = () => {
		const next = !ignitionState;
		setIgnitionState(next);
		if (next) {
			setGeoCoords({
				lat: "11.0182° N",
				lng: "76.9610° E",
				speed: "38 km/h"
			});
		} else {
			setGeoCoords({
				lat: "11.0168° N",
				lng: "76.9558° E",
				speed: "0 km/h"
			});
		}
	};
	return /* @__PURE__ */ _jsxDEV(AnimatePresence, { children: /* @__PURE__ */ _jsxDEV("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-900/60 backdrop-blur-sm",
		onClick: onClose,
		children: /* @__PURE__ */ _jsxDEV(motion.div, {
			initial: {
				opacity: 0,
				scale: .96,
				y: 15
			},
			animate: {
				opacity: 1,
				scale: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				scale: .96,
				y: 15
			},
			transition: {
				duration: .25,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-stone-200 bg-white shadow-2xl flex flex-col my-auto",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "sticky top-0 z-20 flex items-center justify-between border-b border-stone-200 bg-white/95 px-6 py-4 backdrop-blur-md",
					children: [/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "text-xs font-mono font-bold text-orange-600 uppercase tracking-wider",
						children: [project.category, " · Technical Dossier"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 93,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("h2", {
						className: "text-xl sm:text-2xl font-extrabold text-stone-900",
						children: project.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 96,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ _jsxDEV("a", {
							href: project.githubUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-stone-700 hover:text-orange-600 bg-stone-100 hover:bg-orange-50 rounded-xl transition-colors border border-stone-200",
							children: [
								/* @__PURE__ */ _jsxDEV(Github, { className: "w-3.5 h-3.5 text-stone-900" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 108,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("span", { children: "Repository" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV(ExternalLink, { className: "w-3 h-3 text-stone-400" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 110,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("button", {
							onClick: onClose,
							className: "p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors",
							"aria-label": "Close modal",
							children: /* @__PURE__ */ _jsxDEV(X, { className: "w-5 h-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 118,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 101,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-4 px-6 pt-3 border-b border-stone-200 bg-stone-50/50 text-xs font-bold",
					children: [
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveTab("overview"),
							className: `pb-3 px-1 border-b-2 transition-colors ${activeTab === "overview" ? "border-orange-600 text-orange-600" : "border-transparent text-stone-500 hover:text-stone-800"}`,
							children: "Overview & Specifications"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveTab("interactive-demo"),
							className: `pb-3 px-1 border-b-2 transition-colors flex items-center gap-1.5 ${activeTab === "interactive-demo" ? "border-orange-600 text-orange-600" : "border-transparent text-stone-500 hover:text-stone-800"}`,
							children: [/* @__PURE__ */ _jsxDEV(Play, { className: "w-3 h-3 text-orange-600" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Interactive Sandbox & Demos" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							onClick: () => setActiveTab("architecture"),
							className: `pb-3 px-1 border-b-2 transition-colors ${activeTab === "architecture" ? "border-orange-600 text-orange-600" : "border-transparent text-stone-500 hover:text-stone-800"}`,
							children: "Architecture & Security"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 146,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 124,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "p-6 space-y-6",
					children: [
						activeTab === "overview" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "relative aspect-video w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-100",
									children: [
										/* @__PURE__ */ _jsxDEV("img", {
											src: project.image,
											alt: project.title,
											referrerPolicy: "no-referrer",
											className: "h-full w-full object-cover"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 167,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 173,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ _jsxDEV("div", {
											className: "absolute bottom-3 left-4 text-xs font-mono font-medium text-white bg-stone-900/60 backdrop-blur-xs px-2.5 py-1 rounded",
											children: project.subtitle
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 174,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs font-bold text-stone-500 uppercase tracking-wider mb-2",
									children: "Technology Stack"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 181,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-sm font-mono text-stone-800 flex flex-wrap gap-2",
									children: project.technologies.map((tech, i) => /* @__PURE__ */ _jsxDEV("span", {
										className: "inline-flex items-center",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "text-stone-900 font-semibold",
											children: tech
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 187,
											columnNumber: 25
										}, this), i < project.technologies.length - 1 && /* @__PURE__ */ _jsxDEV("span", {
											className: "mx-2 text-orange-600 font-bold",
											children: "·"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 189,
											columnNumber: 27
										}, this)]
									}, tech, true, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 184,
									columnNumber: 19
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 180,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "text-sm sm:text-base text-stone-700 leading-relaxed",
									children: project.description
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 197,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "text-xs font-bold text-stone-500 uppercase tracking-wider",
										children: "Key Technical Achievements"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 203,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("ul", {
										className: "space-y-2 text-sm text-stone-700",
										children: project.bullets.map((bullet, idx) => /* @__PURE__ */ _jsxDEV("li", {
											className: "flex items-start gap-2.5",
											children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-4 h-4 text-orange-600 shrink-0 mt-0.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 209,
												columnNumber: 25
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: bullet }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 210,
												columnNumber: 25
											}, this)]
										}, idx, true, {
											fileName: _jsxFileName,
											lineNumber: 208,
											columnNumber: 23
										}, this))
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 206,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 202,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",
									children: project.keyFeatures.map((feat, idx) => /* @__PURE__ */ _jsxDEV("div", {
										className: "p-3.5 rounded-xl bg-orange-50/50 border border-orange-100 text-xs text-stone-700",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "font-bold text-orange-800 block mb-0.5",
											children: ["Feature 0", idx + 1]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 220,
											columnNumber: 23
										}, this), feat]
									}, idx, true, {
										fileName: _jsxFileName,
										lineNumber: 219,
										columnNumber: 21
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 217,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 15
						}, this),
						activeTab === "interactive-demo" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-6",
							children: [
								project.id === "foodiehub" && /* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-4",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4",
										children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center justify-between border-b border-stone-200 pb-3",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ _jsxDEV(Layout, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 238,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("h4", {
														className: "text-sm font-bold text-stone-900",
														children: "FoodieHub Live Cart & Auth Dispatcher"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 239,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 237,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("span", {
													className: "text-xs font-mono font-bold text-orange-600",
													children: "Order ID: #FH-8924"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 241,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 236,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "space-y-2",
												children: [
													/* @__PURE__ */ _jsxDEV("div", {
														className: "text-xs font-bold text-stone-600",
														children: "Simulated Cart State:"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 246,
														columnNumber: 25
													}, this),
													foodieCart.map((item) => /* @__PURE__ */ _jsxDEV("div", {
														className: "flex items-center justify-between text-xs py-2 px-3 bg-white rounded-xl border border-stone-200",
														children: [/* @__PURE__ */ _jsxDEV("span", {
															className: "text-stone-900 font-semibold",
															children: [
																item.name,
																" (x",
																item.qty,
																")"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 249,
															columnNumber: 29
														}, this), /* @__PURE__ */ _jsxDEV("span", {
															className: "font-mono font-bold text-stone-700",
															children: ["₹", item.price * item.qty]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 250,
															columnNumber: 29
														}, this)]
													}, item.id, true, {
														fileName: _jsxFileName,
														lineNumber: 248,
														columnNumber: 27
													}, this)),
													/* @__PURE__ */ _jsxDEV("div", {
														className: "flex justify-between text-xs font-bold pt-2 border-t border-stone-200 text-stone-900",
														children: [/* @__PURE__ */ _jsxDEV("span", { children: "Total Payable:" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 254,
															columnNumber: 27
														}, this), /* @__PURE__ */ _jsxDEV("span", {
															className: "font-mono text-orange-600 text-sm",
															children: ["₹", totalFoodie]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 255,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 253,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 245,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "pt-2",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "text-xs font-bold text-stone-600 mb-2",
													children: "Simulated Live Order Status:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 261,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "grid grid-cols-4 gap-2 text-center text-xs",
													children: [
														"Received",
														"Preparing",
														"In Transit",
														"Delivered"
													].map((st) => /* @__PURE__ */ _jsxDEV("button", {
														onClick: () => setOrderStatus(st),
														className: `p-2 rounded-xl border transition-all ${orderStatus === st ? "bg-orange-600 border-orange-600 text-white font-bold shadow-xs" : "bg-white border-stone-200 text-stone-600 hover:text-stone-900"}`,
														children: st
													}, st, false, {
														fileName: _jsxFileName,
														lineNumber: 264,
														columnNumber: 29
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 262,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 260,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "pt-2",
												children: [
													/* @__PURE__ */ _jsxDEV("div", {
														className: "flex items-center justify-between text-xs font-bold text-stone-700 mb-1",
														children: [/* @__PURE__ */ _jsxDEV("span", {
															className: "flex items-center gap-1.5",
															children: [/* @__PURE__ */ _jsxDEV(Lock, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 283,
																columnNumber: 29
															}, this), /* @__PURE__ */ _jsxDEV("span", { children: "JWT Auth Token Inspector (Authorization: Bearer)" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 284,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 282,
															columnNumber: 27
														}, this), /* @__PURE__ */ _jsxDEV("span", {
															className: "text-emerald-600 font-mono text-[11px]",
															children: "Valid Signature (HS256)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 286,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 281,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														className: "p-3 rounded-xl bg-white font-mono text-[11px] text-orange-700 break-all select-all border border-stone-200",
														children: authToken
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 288,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														className: "mt-2 text-[11px] font-mono text-stone-600 p-2.5 bg-white rounded-xl border border-stone-200",
														children: [
															"Decoded Payload: ",
															"{",
															" \"userId\": 64594, \"email\": \"arjun.m0204@gmail.com\", \"role\": \"customer\" ",
															"}"
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 291,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 280,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 235,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 234,
									columnNumber: 19
								}, this),
								project.id === "securesphere" && /* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-4",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4",
										children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center justify-between border-b border-stone-200 pb-3",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 304,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("h4", {
														className: "text-sm font-bold text-stone-900",
														children: "OWASP Vulnerability Playground"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 305,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 303,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("span", {
													className: "text-xs font-mono text-stone-500",
													children: "Security Sandbox"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 307,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 302,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "flex flex-wrap gap-2 text-xs",
												children: [
													{
														id: "sqli",
														label: "A03: SQL Injection (SQLi)"
													},
													{
														id: "xss",
														label: "A03: Cross-Site Scripting (XSS)"
													},
													{
														id: "broken_auth",
														label: "A01: Broken Access Control"
													},
													{
														id: "ssrf",
														label: "A10: Server-Side Request Forgery"
													}
												].map((item) => /* @__PURE__ */ _jsxDEV("button", {
													onClick: () => {
														setSelectedOwasp(item.id);
														setSanitizedResult("");
														if (item.id === "sqli") setSimulatedInput("admin' OR '1'='1");
														if (item.id === "xss") setSimulatedInput("<script>alert('XSS')<\/script>");
														if (item.id === "broken_auth") setSimulatedInput("/api/user/orders?userId=9999");
														if (item.id === "ssrf") setSimulatedInput("http://169.254.169.254/latest/meta-data/");
													},
													className: `px-3.5 py-1.5 rounded-xl border transition-all ${selectedOwasp === item.id ? "bg-orange-600 border-orange-600 text-white font-bold" : "bg-white border-stone-200 text-stone-600 hover:text-stone-900"}`,
													children: item.label
												}, item.id, false, {
													fileName: _jsxFileName,
													lineNumber: 318,
													columnNumber: 27
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 311,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "space-y-2",
												children: [/* @__PURE__ */ _jsxDEV("label", {
													className: "text-xs font-bold text-stone-700 block",
													children: "Payload to Test against Remediation Filter:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 341,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "flex gap-2",
													children: [/* @__PURE__ */ _jsxDEV("input", {
														type: "text",
														value: simulatedInput,
														onChange: (e) => setSimulatedInput(e.target.value),
														className: "flex-1 bg-white border border-stone-300 rounded-xl px-3.5 py-2 text-xs font-mono text-stone-900 focus:outline-none focus:border-orange-500"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 345,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("button", {
														onClick: simulateSanitization,
														className: "px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold rounded-xl transition-colors whitespace-nowrap shadow-xs",
														children: "Apply Secure Filter"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 351,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 344,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 340,
												columnNumber: 23
											}, this),
											sanitizedResult && /* @__PURE__ */ _jsxDEV("div", {
												className: "p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs font-mono text-orange-900",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "text-[11px] text-orange-700 font-bold mb-1",
													children: "Defense Mitigated Result:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 363,
													columnNumber: 27
												}, this), sanitizedResult]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 362,
												columnNumber: 25
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "p-3.5 rounded-xl bg-red-50 border border-red-200 space-y-1",
													children: [/* @__PURE__ */ _jsxDEV("div", {
														className: "text-red-700 font-bold flex items-center gap-1",
														children: [/* @__PURE__ */ _jsxDEV(AlertTriangle, { className: "w-3.5 h-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 372,
															columnNumber: 29
														}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Vulnerable Implementation" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 373,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 371,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("pre", {
														className: "font-mono text-[11px] text-stone-800 overflow-x-auto p-2 bg-white rounded-lg border border-red-100",
														children: selectedOwasp === "sqli" ? `// Direct String Concatenation\nconst query = "SELECT * FROM users\nWHERE user = '" + input + "'";` : selectedOwasp === "xss" ? `// Unescaped DOM Insertion\nelement.innerHTML = userInput;` : `// Missing Session / Role Check\nif (!req.params.id) return error;`
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 375,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 370,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("div", {
													className: "p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1",
													children: [/* @__PURE__ */ _jsxDEV("div", {
														className: "text-emerald-800 font-bold flex items-center gap-1",
														children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 384,
															columnNumber: 29
														}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Secure Engineering Practice" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 385,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 383,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("pre", {
														className: "font-mono text-[11px] text-stone-800 overflow-x-auto p-2 bg-white rounded-lg border border-emerald-100",
														children: selectedOwasp === "sqli" ? `// Parameterized Query\nawait db.execute(\n  "SELECT * FROM users WHERE user = ?",\n  [input]\n);` : selectedOwasp === "xss" ? `// TextNode or React JSX Escaping\nelement.textContent = userInput;\n// or JSX: <span>{userInput}</span>` : `// Verified JWT Subject Auth\nif (req.user.id !== req.params.id) {\n  return res.status(403).json();\n}`
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 387,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 382,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 369,
												columnNumber: 23
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 301,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 300,
									columnNumber: 19
								}, this),
								project.id === "iot-vehicle" && /* @__PURE__ */ _jsxDEV("div", {
									className: "space-y-4",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-4",
										children: [
											/* @__PURE__ */ _jsxDEV("div", {
												className: "flex items-center justify-between border-b border-stone-200 pb-3",
												children: [/* @__PURE__ */ _jsxDEV("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ _jsxDEV(Cpu, { className: "w-4 h-4 text-orange-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 403,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("h4", {
														className: "text-sm font-bold text-stone-900",
														children: "Raspberry Pi Telematics & Ignition Controller"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 404,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 402,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("span", {
													className: "text-xs font-mono text-stone-500",
													children: "GPIO Pin 18 (Active Low Relay)"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 406,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 401,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
												children: [
													/* @__PURE__ */ _jsxDEV("div", {
														className: "p-3.5 rounded-xl bg-white border border-stone-200",
														children: [/* @__PURE__ */ _jsxDEV("span", {
															className: "text-[11px] text-stone-500 font-semibold block",
															children: "Ignition Relay Status"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 412,
															columnNumber: 27
														}, this), /* @__PURE__ */ _jsxDEV("div", {
															className: "flex items-center gap-2 mt-1",
															children: [/* @__PURE__ */ _jsxDEV("span", { className: `w-2.5 h-2.5 rounded-full ${ignitionState ? "bg-emerald-500" : "bg-red-500"}` }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 414,
																columnNumber: 29
															}, this), /* @__PURE__ */ _jsxDEV("span", {
																className: "font-mono text-sm font-bold text-stone-900",
																children: ignitionState ? "ENGAGED" : "LOCKED / CUTOFF"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 415,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 413,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 411,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														className: "p-3.5 rounded-xl bg-white border border-stone-200",
														children: [/* @__PURE__ */ _jsxDEV("span", {
															className: "text-[11px] text-stone-500 font-semibold block",
															children: "GPS Telemetry (NMEA)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 422,
															columnNumber: 27
														}, this), /* @__PURE__ */ _jsxDEV("span", {
															className: "font-mono text-xs font-semibold text-stone-800 block mt-1",
															children: [
																geoCoords.lat,
																", ",
																geoCoords.lng
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 423,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 421,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ _jsxDEV("div", {
														className: "p-3.5 rounded-xl bg-white border border-stone-200",
														children: [/* @__PURE__ */ _jsxDEV("span", {
															className: "text-[11px] text-stone-500 font-semibold block",
															children: "Telemetry Speed"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 429,
															columnNumber: 27
														}, this), /* @__PURE__ */ _jsxDEV("span", {
															className: "font-mono text-sm font-bold text-orange-600 block mt-1",
															children: geoCoords.speed
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 430,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 428,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 410,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ _jsxDEV("div", {
												className: "flex flex-wrap items-center gap-3 pt-2",
												children: [/* @__PURE__ */ _jsxDEV("button", {
													onClick: toggleIgnition,
													className: `px-4 py-2 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 ${ignitionState ? "bg-red-600 hover:bg-red-500 text-white" : "bg-emerald-600 hover:bg-emerald-500 text-white"}`,
													children: [/* @__PURE__ */ _jsxDEV(RefreshCw, { className: "w-3.5 h-3.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 446,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("span", { children: ignitionState ? "Cut Off Vehicle Ignition" : "Authorize Vehicle Ignition" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 447,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 438,
													columnNumber: 25
												}, this), /* @__PURE__ */ _jsxDEV("button", {
													onClick: () => setTamperAlert(!tamperAlert),
													className: `px-4 py-2 text-xs font-bold rounded-xl border transition-colors flex items-center gap-1.5 ${tamperAlert ? "bg-orange-100 border-orange-300 text-orange-900" : "bg-white border-stone-200 text-stone-700 hover:text-stone-900"}`,
													children: [/* @__PURE__ */ _jsxDEV(AlertTriangle, { className: "w-3.5 h-3.5 text-orange-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 458,
														columnNumber: 27
													}, this), /* @__PURE__ */ _jsxDEV("span", { children: tamperAlert ? "Clear Tamper Alert" : "Trigger Displacement Breach Alert" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 459,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 450,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 437,
												columnNumber: 23
											}, this),
											tamperAlert && /* @__PURE__ */ _jsxDEV("div", {
												className: "p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-mono text-red-900 flex items-start gap-2",
												children: [/* @__PURE__ */ _jsxDEV(AlertTriangle, { className: "w-4 h-4 text-red-600 shrink-0 mt-0.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 465,
													columnNumber: 27
												}, this), /* @__PURE__ */ _jsxDEV("div", { children: [/* @__PURE__ */ _jsxDEV("strong", { children: "TAMPER SECURITY EVENT DETECTED:" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 467,
													columnNumber: 29
												}, this), " Vehicle moved outside geofence without authorized ignition activation. Alert packet dispatched."] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 466,
													columnNumber: 27
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 464,
												columnNumber: 25
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 400,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 399,
									columnNumber: 19
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 231,
							columnNumber: 15
						}, this),
						activeTab === "architecture" && /* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2 text-orange-700 font-bold text-xs uppercase tracking-wider",
											children: [/* @__PURE__ */ _jsxDEV(Layout, { className: "w-4 h-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 486,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Frontend Architecture" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 487,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 485,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-stone-700 leading-relaxed",
											children: project.architectureDetails.frontend
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 489,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 484,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2 text-orange-700 font-bold text-xs uppercase tracking-wider",
											children: [/* @__PURE__ */ _jsxDEV(Server, { className: "w-4 h-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 496,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Backend & API Pipeline" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 497,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 495,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-stone-700 leading-relaxed",
											children: project.architectureDetails.backend
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 499,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 494,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2 text-orange-700 font-bold text-xs uppercase tracking-wider",
											children: [/* @__PURE__ */ _jsxDEV(Database, { className: "w-4 h-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 506,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Database & Data Persistence" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 507,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 505,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-stone-700 leading-relaxed",
											children: project.architectureDetails.database
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 509,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 504,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2",
										children: [/* @__PURE__ */ _jsxDEV("div", {
											className: "flex items-center gap-2 text-orange-700 font-bold text-xs uppercase tracking-wider",
											children: [/* @__PURE__ */ _jsxDEV(ShieldCheck, { className: "w-4 h-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 516,
												columnNumber: 23
											}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Applied Security Controls" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 517,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 515,
											columnNumber: 21
										}, this), /* @__PURE__ */ _jsxDEV("p", {
											className: "text-xs text-stone-700 leading-relaxed",
											children: project.architectureDetails.security
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 519,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 514,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 482,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "space-y-3 pt-2",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-xs font-bold text-stone-500 uppercase tracking-wider",
									children: "Security Defense Highlights"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 528,
									columnNumber: 19
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
									children: project.securityHighlights.map((highlight, idx) => /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-start gap-2 p-3 rounded-xl bg-orange-50/50 border border-orange-100 text-xs text-stone-700",
										children: [/* @__PURE__ */ _jsxDEV(Lock, { className: "w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 534,
											columnNumber: 25
										}, this), /* @__PURE__ */ _jsxDEV("span", { children: highlight }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 535,
											columnNumber: 25
										}, this)]
									}, idx, true, {
										fileName: _jsxFileName,
										lineNumber: 533,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 531,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 527,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 480,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "border-t border-stone-200 bg-stone-50 px-6 py-4 flex items-center justify-between",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "text-xs font-medium text-stone-500",
						children: "Arjun M · Portfolio Showcase"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 548,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ _jsxDEV("button", {
							onClick: onClose,
							className: "px-4 py-2 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-100 rounded-xl transition-colors border border-stone-200",
							children: "Close"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 552,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("a", {
							href: project.githubUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "px-4 py-2 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl transition-colors flex items-center gap-1.5 shadow-xs",
							children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 564,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "View Source on GitHub" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 565,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 558,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 551,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 547,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 82,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 78,
		columnNumber: 7
	}, this) }, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 77,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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LENBQ0Usd0JBQUMsT0FBRDtTQUFLLFdBQVU7bUJBQTREO1FBRXRFOzs7O2tCQUNMLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO21CQUNaLFFBQVEsbUJBQW1CLEtBQUssV0FBVyxRQUMxQyx3QkFBQyxPQUFEO1VBQWUsV0FBVTtvQkFBekIsQ0FDRSx3QkFBQyxNQUFELEVBQU0sV0FBVSw4Q0FBK0M7Ozs7b0JBQy9ELHdCQUFDLFFBQUQsWUFBTyxVQUFnQjs7OztrQkFDcEI7WUFISzs7OztnQkFHTCxDQUNOO1FBQ0U7Ozs7Z0JBQ0Y7Ozs7O2VBRUY7Ozs7OztLQUdKOzs7Ozs7SUFHTCx3QkFBQyxPQUFEO0tBQUssV0FBVTtlQUFmLENBQ0Usd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQXFDO0tBRS9DOzs7O2VBQ0wsd0JBQUMsT0FBRDtNQUFLLFdBQVU7Z0JBQWYsQ0FDRSx3QkFBQyxVQUFEO09BQ0UsU0FBUztPQUNULFdBQVU7aUJBQ1g7TUFFTzs7OztnQkFDUix3QkFBQyxLQUFEO09BQ0UsTUFBTSxRQUFRO09BQ2QsUUFBTztPQUNQLEtBQUk7T0FDSixXQUFVO2lCQUpaLENBTUUsd0JBQUMsUUFBRCxFQUFRLFdBQVUsY0FBZTs7OztpQkFDakMsd0JBQUMsUUFBRCxZQUFNLHdCQUEyQjs7OztlQUNoQzs7Ozs7Y0FDQTs7Ozs7YUFDRjs7Ozs7O0dBRUs7Ozs7OztDQUNUOzs7O1VBQ1U7Ozs7O0FBRXJCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIlByb2plY3REZXRhaWxNb2RhbC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgXG4gIFgsIFxuICBHaXRodWIsIFxuICBFeHRlcm5hbExpbmssIFxuICBTaGllbGRDaGVjaywgXG4gIERhdGFiYXNlLCBcbiAgU2VydmVyLCBcbiAgTGF5b3V0LCBcbiAgQ2hlY2tDaXJjbGUyLCBcbiAgUGxheSwgXG4gIEFsZXJ0VHJpYW5nbGUsXG4gIExvY2ssXG4gIENwdSxcbiAgUmVmcmVzaEN3XG59IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vZGF0YS9wb3J0Zm9saW9EYXRhJztcblxuaW50ZXJmYWNlIFByb2plY3REZXRhaWxNb2RhbFByb3BzIHtcbiAgcHJvamVjdDogUHJvamVjdCB8IG51bGw7XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0RGV0YWlsTW9kYWw6IFJlYWN0LkZDPFByb2plY3REZXRhaWxNb2RhbFByb3BzPiA9ICh7IHByb2plY3QsIG9uQ2xvc2UgfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlVGFiLCBzZXRBY3RpdmVUYWJdID0gdXNlU3RhdGU8J292ZXJ2aWV3JyB8ICdpbnRlcmFjdGl2ZS1kZW1vJyB8ICdhcmNoaXRlY3R1cmUnPignb3ZlcnZpZXcnKTtcblxuICAvLyBJbnRlcmFjdGl2ZSBzdGF0ZXMgZm9yIEZvb2RpZUh1YiBEZW1vXG4gIGNvbnN0IFtmb29kaWVDYXJ0LCBzZXRGb29kaWVDYXJ0XSA9IHVzZVN0YXRlPHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nOyBwcmljZTogbnVtYmVyOyBxdHk6IG51bWJlciB9W10+KFtcbiAgICB7IGlkOiAnMScsIG5hbWU6ICdQYW5lZXIgQnV0dGVyIE1hc2FsYScsIHByaWNlOiAyODAsIHF0eTogMSB9LFxuICAgIHsgaWQ6ICcyJywgbmFtZTogJ0dhcmxpYyBCdXR0ZXIgTmFhbicsIHByaWNlOiA2MCwgcXR5OiAyIH1cbiAgXSk7XG4gIGNvbnN0IFthdXRoVG9rZW5dID0gdXNlU3RhdGUoJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVNXUWlPalkwTlRrMExDSmxiV0ZwYkNJNkltRnlhblZ1TG0wd01qQTBRR2R0WVdsc0xtTnZiU0lzSW5KdmJHVWlPaUpqZFhOMGIyMWxjaUlzSW1saGRDSTZNVGM1TWpReU1UUTVNbjAnKTtcbiAgY29uc3QgW29yZGVyU3RhdHVzLCBzZXRPcmRlclN0YXR1c10gPSB1c2VTdGF0ZTwnUmVjZWl2ZWQnIHwgJ1ByZXBhcmluZycgfCAnSW4gVHJhbnNpdCcgfCAnRGVsaXZlcmVkJz4oJ1ByZXBhcmluZycpO1xuXG4gIC8vIEludGVyYWN0aXZlIHN0YXRlcyBmb3IgU2VjdXJlU3BoZXJlIERlbW9cbiAgY29uc3QgW3NlbGVjdGVkT3dhc3AsIHNldFNlbGVjdGVkT3dhc3BdID0gdXNlU3RhdGU8J3NxbGknIHwgJ3hzcycgfCAnYnJva2VuX2F1dGgnIHwgJ3NzcmYnPignc3FsaScpO1xuICBjb25zdCBbc2ltdWxhdGVkSW5wdXQsIHNldFNpbXVsYXRlZElucHV0XSA9IHVzZVN0YXRlKFwiYWRtaW4nIE9SICcxJz0nMVwiKTtcbiAgY29uc3QgW3Nhbml0aXplZFJlc3VsdCwgc2V0U2FuaXRpemVkUmVzdWx0XSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBJbnRlcmFjdGl2ZSBzdGF0ZXMgZm9yIElvVCBWZWhpY2xlIERlbW9cbiAgY29uc3QgW2lnbml0aW9uU3RhdGUsIHNldElnbml0aW9uU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZ2VvQ29vcmRzLCBzZXRHZW9Db29yZHNdID0gdXNlU3RhdGUoeyBsYXQ6ICcxMS4wMTY4wrAgTicsIGxuZzogJzc2Ljk1NTjCsCBFJywgc3BlZWQ6ICcwIGttL2gnIH0pO1xuICBjb25zdCBbdGFtcGVyQWxlcnQsIHNldFRhbXBlckFsZXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBpZiAoIXByb2plY3QpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHRvdGFsRm9vZGllID0gZm9vZGllQ2FydC5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5wcmljZSAqIGl0ZW0ucXR5LCAwKTtcblxuICBjb25zdCBzaW11bGF0ZVNhbml0aXphdGlvbiA9ICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRPd2FzcCA9PT0gJ3NxbGknKSB7XG4gICAgICBjb25zdCBjbGVhbiA9IHNpbXVsYXRlZElucHV0LnJlcGxhY2UoL1snXCJcXFxcO10vZywgJycpO1xuICAgICAgc2V0U2FuaXRpemVkUmVzdWx0KGBQcmVwYXJlZCBTdGF0ZW1lbnQgW1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlcm5hbWUgPSA/IEFORCBwYXNzd29yZCA9ID9dIC0+IElucHV0IGJvdW5kIHNhZmVseSBhcyBwYXJhbWV0ZXIgbGl0ZXJhbDogXCIke2NsZWFufVwiYCk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZE93YXNwID09PSAneHNzJykge1xuICAgICAgY29uc3QgZXNjYXBlZCA9IHNpbXVsYXRlZElucHV0XG4gICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKVxuICAgICAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xuICAgICAgc2V0U2FuaXRpemVkUmVzdWx0KGBIVE1MIEVudGl0eSBFc2NhcGVkIE91dHB1dDogJHtlc2NhcGVkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTYW5pdGl6ZWRSZXN1bHQoYEFwcGxpZWQgc3RyaWN0IGF1dGhvcml6YXRpb24gcG9saWN5ICYgdmFsaWRhdGVkIGhlYWRlciBpbnRlZ3JpdHkuYCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUlnbml0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IG5leHQgPSAhaWduaXRpb25TdGF0ZTtcbiAgICBzZXRJZ25pdGlvblN0YXRlKG5leHQpO1xuICAgIGlmIChuZXh0KSB7XG4gICAgICBzZXRHZW9Db29yZHMoeyBsYXQ6ICcxMS4wMTgywrAgTicsIGxuZzogJzc2Ljk2MTDCsCBFJywgc3BlZWQ6ICczOCBrbS9oJyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0R2VvQ29vcmRzKHsgbGF0OiAnMTEuMDE2OMKwIE4nLCBsbmc6ICc3Ni45NTU4wrAgRScsIHNwZWVkOiAnMCBrbS9oJyB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMyBzbTpwLTYgb3ZlcmZsb3cteS1hdXRvIGJnLXN0b25lLTkwMC82MCBiYWNrZHJvcC1ibHVyLXNtXCJcbiAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45NiwgeTogMTUgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxLCB5OiAwIH19XG4gICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45NiwgeTogMTUgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjI1LCBlYXNlOiBbMC4xNiwgMSwgMC4zLCAxXSBhcyBjb25zdCB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYXgtdy00eGwgbWF4LWgtWzkydmhdIG92ZXJmbG93LXktYXV0byByb3VuZGVkLTN4bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZSBzaGFkb3ctMnhsIGZsZXggZmxleC1jb2wgbXktYXV0b1wiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgID5cbiAgICAgICAgICB7LyogSGVhZGVyIHdpdGggV2hpdGUgQmFja2dyb3VuZCBhbmQgT3JhbmdlIFRleHQgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTAgei0yMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLXN0b25lLTIwMCBiZy13aGl0ZS85NSBweC02IHB5LTQgYmFja2Ryb3AtYmx1ci1tZFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNjAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LmNhdGVnb3J5fSDCtyBUZWNobmljYWwgRG9zc2llclxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgc206dGV4dC0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC1zdG9uZS05MDBcIj5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yLjVcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0LmdpdGh1YlVybH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc3RvbmUtNzAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCBiZy1zdG9uZS0xMDAgaG92ZXI6Ymctb3JhbmdlLTUwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnMgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEdpdGh1YiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LXN0b25lLTkwMFwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+UmVwb3NpdG9yeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIGNsYXNzTmFtZT1cInctMyBoLTMgdGV4dC1zdG9uZS00MDBcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xLjUgdGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC1zdG9uZS05MDAgaG92ZXI6Ymctc3RvbmUtMTAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnNcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZSBtb2RhbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBUYWIgQ29udHJvbHMgKEZ1bmN0aW9uYWwgQnV0dG9ucykgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNCBweC02IHB0LTMgYm9yZGVyLWIgYm9yZGVyLXN0b25lLTIwMCBiZy1zdG9uZS01MC81MCB0ZXh0LXhzIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoJ292ZXJ2aWV3Jyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBiLTMgcHgtMSBib3JkZXItYi0yIHRyYW5zaXRpb24tY29sb3JzICR7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiID09PSAnb3ZlcnZpZXcnXG4gICAgICAgICAgICAgICAgICA/ICdib3JkZXItb3JhbmdlLTYwMCB0ZXh0LW9yYW5nZS02MDAnXG4gICAgICAgICAgICAgICAgICA6ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC1zdG9uZS04MDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBPdmVydmlldyAmIFNwZWNpZmljYXRpb25zXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdpbnRlcmFjdGl2ZS1kZW1vJyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBiLTMgcHgtMSBib3JkZXItYi0yIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgJHtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdpbnRlcmFjdGl2ZS1kZW1vJ1xuICAgICAgICAgICAgICAgICAgPyAnYm9yZGVyLW9yYW5nZS02MDAgdGV4dC1vcmFuZ2UtNjAwJ1xuICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtc3RvbmUtNTAwIGhvdmVyOnRleHQtc3RvbmUtODAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBsYXkgY2xhc3NOYW1lPVwidy0zIGgtMyB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5JbnRlcmFjdGl2ZSBTYW5kYm94ICYgRGVtb3M8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlVGFiKCdhcmNoaXRlY3R1cmUnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGItMyBweC0xIGJvcmRlci1iLTIgdHJhbnNpdGlvbi1jb2xvcnMgJHtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09ICdhcmNoaXRlY3R1cmUnXG4gICAgICAgICAgICAgICAgICA/ICdib3JkZXItb3JhbmdlLTYwMCB0ZXh0LW9yYW5nZS02MDAnXG4gICAgICAgICAgICAgICAgICA6ICdib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1zdG9uZS01MDAgaG92ZXI6dGV4dC1zdG9uZS04MDAnXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBcmNoaXRlY3R1cmUgJiBTZWN1cml0eVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogTW9kYWwgQm9keSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzcGFjZS15LTZcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgey8qIFRBQiAxOiBPVkVSVklFVyAqL31cbiAgICAgICAgICAgIHthY3RpdmVUYWIgPT09ICdvdmVydmlldycgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsvKiBNZWRpYSBTbG90ICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LXZpZGVvIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgYmctc3RvbmUtMTAwXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICByZWZlcnJlclBvbGljeT1cIm5vLXJlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tc3RvbmUtOTUwLzcwIHZpYS10cmFuc3BhcmVudCB0by10cmFuc3BhcmVudCBwb2ludGVyLWV2ZW50cy1ub25lXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTMgbGVmdC00IHRleHQteHMgZm9udC1tb25vIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctc3RvbmUtOTAwLzYwIGJhY2tkcm9wLWJsdXIteHMgcHgtMi41IHB5LTEgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5zdWJ0aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIFRlY2hub2xvZ2llcyB1bmJveGVkIGxpc3Qgd2l0aCBvcmFuZ2Ugc2VwYXJhdG9ycyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICBUZWNobm9sb2d5IFN0YWNrXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1vbm8gdGV4dC1zdG9uZS04MDAgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3QudGVjaG5vbG9naWVzLm1hcCgodGVjaCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17dGVjaH0gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTkwMCBmb250LXNlbWlib2xkXCI+e3RlY2h9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge2kgPCBwcm9qZWN0LnRlY2hub2xvZ2llcy5sZW5ndGggLSAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtMiB0ZXh0LW9yYW5nZS02MDAgZm9udC1ib2xkXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBEZXNjcmlwdGlvbiAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gc206dGV4dC1iYXNlIHRleHQtc3RvbmUtNzAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogUmVzdW1lIEJ1bGxldHMgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIEtleSBUZWNobmljYWwgQWNoaWV2ZW1lbnRzXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTIgdGV4dC1zbSB0ZXh0LXN0b25lLTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5idWxsZXRzLm1hcCgoYnVsbGV0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrQ2lyY2xlMiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtb3JhbmdlLTYwMCBzaHJpbmstMCBtdC0wLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2J1bGxldH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIEtleSBGZWF0dXJlcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3Qua2V5RmVhdHVyZXMubWFwKChmZWF0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC14bCBiZy1vcmFuZ2UtNTAvNTAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMTAwIHRleHQteHMgdGV4dC1zdG9uZS03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1vcmFuZ2UtODAwIGJsb2NrIG1iLTAuNVwiPkZlYXR1cmUgMHtpZHggKyAxfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7ZmVhdH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHsvKiBUQUIgMjogSU5URVJBQ1RJVkUgREVNTyAmIFNBTkRCT1ggKi99XG4gICAgICAgICAgICB7YWN0aXZlVGFiID09PSAnaW50ZXJhY3RpdmUtZGVtbycgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LmlkID09PSAnZm9vZGllaHViJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSByb3VuZGVkLTJ4bCBiZy1zdG9uZS01MCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItc3RvbmUtMjAwIHBiLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTkwMFwiPkZvb2RpZUh1YiBMaXZlIENhcnQgJiBBdXRoIERpc3BhdGNoZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNjAwXCI+T3JkZXIgSUQ6ICNGSC04OTI0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgey8qIENhcnQgSXRlbXMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1zdG9uZS02MDBcIj5TaW11bGF0ZWQgQ2FydCBTdGF0ZTo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb29kaWVDYXJ0Lm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgcHktMiBweC0zIGJnLXdoaXRlIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN0b25lLTkwMCBmb250LXNlbWlib2xkXCI+e2l0ZW0ubmFtZX0gKHh7aXRlbS5xdHl9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkIHRleHQtc3RvbmUtNzAwXCI+4oK5e2l0ZW0ucHJpY2UgKiBpdGVtLnF0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQteHMgZm9udC1ib2xkIHB0LTIgYm9yZGVyLXQgYm9yZGVyLXN0b25lLTIwMCB0ZXh0LXN0b25lLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Ub3RhbCBQYXlhYmxlOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtb3JhbmdlLTYwMCB0ZXh0LXNtXCI+4oK5e3RvdGFsRm9vZGllfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgey8qIE9yZGVyIFN0YXR1cyBUcmFja2luZyBTaW11bGF0b3IgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ib2xkIHRleHQtc3RvbmUtNjAwIG1iLTJcIj5TaW11bGF0ZWQgTGl2ZSBPcmRlciBTdGF0dXM6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTIgdGV4dC1jZW50ZXIgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7KFsnUmVjZWl2ZWQnLCAnUHJlcGFyaW5nJywgJ0luIFRyYW5zaXQnLCAnRGVsaXZlcmVkJ10gYXMgY29uc3QpLm1hcCgoc3QpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3JkZXJTdGF0dXMoc3QpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0yIHJvdW5kZWQteGwgYm9yZGVyIHRyYW5zaXRpb24tYWxsICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyU3RhdHVzID09PSBzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLW9yYW5nZS02MDAgYm9yZGVyLW9yYW5nZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgc2hhZG93LXhzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2JnLXdoaXRlIGJvcmRlci1zdG9uZS0yMDAgdGV4dC1zdG9uZS02MDAgaG92ZXI6dGV4dC1zdG9uZS05MDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogSldUIEF1dGggSW5zcGVjdG9yICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC14cyBmb250LWJvbGQgdGV4dC1zdG9uZS03MDAgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2sgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1vcmFuZ2UtNjAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5KV1QgQXV0aCBUb2tlbiBJbnNwZWN0b3IgKEF1dGhvcml6YXRpb246IEJlYXJlcik8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTYwMCBmb250LW1vbm8gdGV4dC1bMTFweF1cIj5WYWxpZCBTaWduYXR1cmUgKEhTMjU2KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgcm91bmRlZC14bCBiZy13aGl0ZSBmb250LW1vbm8gdGV4dC1bMTFweF0gdGV4dC1vcmFuZ2UtNzAwIGJyZWFrLWFsbCBzZWxlY3QtYWxsIGJvcmRlciBib3JkZXItc3RvbmUtMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHthdXRoVG9rZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LVsxMXB4XSBmb250LW1vbm8gdGV4dC1zdG9uZS02MDAgcC0yLjUgYmctd2hpdGUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBEZWNvZGVkIFBheWxvYWQ6IHsneyd9IFwidXNlcklkXCI6IDY0NTk0LCBcImVtYWlsXCI6IFwiYXJqdW4ubTAyMDRAZ21haWwuY29tXCIsIFwicm9sZVwiOiBcImN1c3RvbWVyXCIgeyd9J31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC5pZCA9PT0gJ3NlY3VyZXNwaGVyZScgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgcm91bmRlZC0yeGwgYmctc3RvbmUtNTAgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLXN0b25lLTIwMCBwYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGllbGRDaGVjayBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTkwMFwiPk9XQVNQIFZ1bG5lcmFiaWxpdHkgUGxheWdyb3VuZDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tb25vIHRleHQtc3RvbmUtNTAwXCI+U2VjdXJpdHkgU2FuZGJveDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBDYXRlZ29yeSBTZWxlY3RvciAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0yIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgaWQ6ICdzcWxpJywgbGFiZWw6ICdBMDM6IFNRTCBJbmplY3Rpb24gKFNRTGkpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAneHNzJywgbGFiZWw6ICdBMDM6IENyb3NzLVNpdGUgU2NyaXB0aW5nIChYU1MpJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAnYnJva2VuX2F1dGgnLCBsYWJlbDogJ0EwMTogQnJva2VuIEFjY2VzcyBDb250cm9sJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGlkOiAnc3NyZicsIGxhYmVsOiAnQTEwOiBTZXJ2ZXItU2lkZSBSZXF1ZXN0IEZvcmdlcnknIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0ubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRPd2FzcChpdGVtLmlkIGFzIGFueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTYW5pdGl6ZWRSZXN1bHQoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09ICdzcWxpJykgc2V0U2ltdWxhdGVkSW5wdXQoXCJhZG1pbicgT1IgJzEnPScxXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09ICd4c3MnKSBzZXRTaW11bGF0ZWRJbnB1dChcIjxzY3JpcHQ+YWxlcnQoJ1hTUycpPC9zY3JpcHQ+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09ICdicm9rZW5fYXV0aCcpIHNldFNpbXVsYXRlZElucHV0KFwiL2FwaS91c2VyL29yZGVycz91c2VySWQ9OTk5OVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSAnc3NyZicpIHNldFNpbXVsYXRlZElucHV0KFwiaHR0cDovLzE2OS4yNTQuMTY5LjI1NC9sYXRlc3QvbWV0YS1kYXRhL1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTMuNSBweS0xLjUgcm91bmRlZC14bCBib3JkZXIgdHJhbnNpdGlvbi1hbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkT3dhc3AgPT09IGl0ZW0uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYmctb3JhbmdlLTYwMCBib3JkZXItb3JhbmdlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctd2hpdGUgYm9yZGVyLXN0b25lLTIwMCB0ZXh0LXN0b25lLTYwMCBob3Zlcjp0ZXh0LXN0b25lLTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgey8qIEludGVyYWN0aXZlIElucHV0ICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1zdG9uZS03MDAgYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgUGF5bG9hZCB0byBUZXN0IGFnYWluc3QgUmVtZWRpYXRpb24gRmlsdGVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NpbXVsYXRlZElucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2ltdWxhdGVkSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXN0b25lLTMwMCByb3VuZGVkLXhsIHB4LTMuNSBweS0yIHRleHQteHMgZm9udC1tb25vIHRleHQtc3RvbmUtOTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItb3JhbmdlLTUwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaW11bGF0ZVNhbml0aXphdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNTAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgcm91bmRlZC14bCB0cmFuc2l0aW9uLWNvbG9ycyB3aGl0ZXNwYWNlLW5vd3JhcCBzaGFkb3cteHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwbHkgU2VjdXJlIEZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgey8qIE91dHB1dCAqL31cbiAgICAgICAgICAgICAgICAgICAgICB7c2FuaXRpemVkUmVzdWx0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC14bCBiZy1vcmFuZ2UtNTAgYm9yZGVyIGJvcmRlci1vcmFuZ2UtMjAwIHRleHQteHMgZm9udC1tb25vIHRleHQtb3JhbmdlLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzExcHhdIHRleHQtb3JhbmdlLTcwMCBmb250LWJvbGQgbWItMVwiPkRlZmVuc2UgTWl0aWdhdGVkIFJlc3VsdDo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Nhbml0aXplZFJlc3VsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogVnVsbmVyYWJsZSB2cyBTZWN1cmUgQ29tcGFyaXNvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLTMgdGV4dC14cyBwdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IHJvdW5kZWQteGwgYmctcmVkLTUwIGJvcmRlciBib3JkZXItcmVkLTIwMCBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC03MDAgZm9udC1ib2xkIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlZ1bG5lcmFibGUgSW1wbGVtZW50YXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMXB4XSB0ZXh0LXN0b25lLTgwMCBvdmVyZmxvdy14LWF1dG8gcC0yIGJnLXdoaXRlIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1yZWQtMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkT3dhc3AgPT09ICdzcWxpJyA/IGAvLyBEaXJlY3QgU3RyaW5nIENvbmNhdGVuYXRpb25cXG5jb25zdCBxdWVyeSA9IFwiU0VMRUNUICogRlJPTSB1c2Vyc1xcbldIRVJFIHVzZXIgPSAnXCIgKyBpbnB1dCArIFwiJ1wiO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE93YXNwID09PSAneHNzJyA/IGAvLyBVbmVzY2FwZWQgRE9NIEluc2VydGlvblxcbmVsZW1lbnQuaW5uZXJIVE1MID0gdXNlcklucHV0O2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLy8gTWlzc2luZyBTZXNzaW9uIC8gUm9sZSBDaGVja1xcbmlmICghcmVxLnBhcmFtcy5pZCkgcmV0dXJuIGVycm9yO2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC14bCBiZy1lbWVyYWxkLTUwIGJvcmRlciBib3JkZXItZW1lcmFsZC0yMDAgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1lbWVyYWxkLTgwMCBmb250LWJvbGQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tDaXJjbGUyIGNsYXNzTmFtZT1cInctMy41IGgtMy41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TZWN1cmUgRW5naW5lZXJpbmcgUHJhY3RpY2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMXB4XSB0ZXh0LXN0b25lLTgwMCBvdmVyZmxvdy14LWF1dG8gcC0yIGJnLXdoaXRlIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1lbWVyYWxkLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZE93YXNwID09PSAnc3FsaScgPyBgLy8gUGFyYW1ldGVyaXplZCBRdWVyeVxcbmF3YWl0IGRiLmV4ZWN1dGUoXFxuICBcIlNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlciA9ID9cIixcXG4gIFtpbnB1dF1cXG4pO2AgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE93YXNwID09PSAneHNzJyA/IGAvLyBUZXh0Tm9kZSBvciBSZWFjdCBKU1ggRXNjYXBpbmdcXG5lbGVtZW50LnRleHRDb250ZW50ID0gdXNlcklucHV0O1xcbi8vIG9yIEpTWDogPHNwYW4+e3VzZXJJbnB1dH08L3NwYW4+YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvLyBWZXJpZmllZCBKV1QgU3ViamVjdCBBdXRoXFxuaWYgKHJlcS51c2VyLmlkICE9PSByZXEucGFyYW1zLmlkKSB7XFxuICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oKTtcXG59YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge3Byb2plY3QuaWQgPT09ICdpb3QtdmVoaWNsZScgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgcm91bmRlZC0yeGwgYmctc3RvbmUtNTAgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgc3BhY2UteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLXN0b25lLTIwMCBwYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDcHUgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1zdG9uZS05MDBcIj5SYXNwYmVycnkgUGkgVGVsZW1hdGljcyAmIElnbml0aW9uIENvbnRyb2xsZXI8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LXN0b25lLTUwMFwiPkdQSU8gUGluIDE4IChBY3RpdmUgTG93IFJlbGF5KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBSZWFsLXRpbWUgVGVsZW1ldHJ5IERhc2hib2FyZCAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC14bCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXN0b25lLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXN0b25lLTUwMCBmb250LXNlbWlib2xkIGJsb2NrXCI+SWduaXRpb24gUmVsYXkgU3RhdHVzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2B3LTIuNSBoLTIuNSByb3VuZGVkLWZ1bGwgJHtpZ25pdGlvblN0YXRlID8gJ2JnLWVtZXJhbGQtNTAwJyA6ICdiZy1yZWQtNTAwJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LXN0b25lLTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lnbml0aW9uU3RhdGUgPyAnRU5HQUdFRCcgOiAnTE9DS0VEIC8gQ1VUT0ZGJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zLjUgcm91bmRlZC14bCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXN0b25lLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsxMXB4XSB0ZXh0LXN0b25lLTUwMCBmb250LXNlbWlib2xkIGJsb2NrXCI+R1BTIFRlbGVtZXRyeSAoTk1FQSk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1zdG9uZS04MDAgYmxvY2sgbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZW9Db29yZHMubGF0fSwge2dlb0Nvb3Jkcy5sbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMy41IHJvdW5kZWQteGwgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1bMTFweF0gdGV4dC1zdG9uZS01MDAgZm9udC1zZW1pYm9sZCBibG9ja1wiPlRlbGVtZXRyeSBTcGVlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc20gZm9udC1ib2xkIHRleHQtb3JhbmdlLTYwMCBibG9jayBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dlb0Nvb3Jkcy5zcGVlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogQWN0aW9uIGJ1dHRvbnMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTMgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVJZ25pdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yIHRleHQteHMgZm9udC1ib2xkIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1jb2xvcnMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlnbml0aW9uU3RhdGUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdiZy1yZWQtNjAwIGhvdmVyOmJnLXJlZC01MDAgdGV4dC13aGl0ZScgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdiZy1lbWVyYWxkLTYwMCBob3ZlcjpiZy1lbWVyYWxkLTUwMCB0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlZnJlc2hDdyBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntpZ25pdGlvblN0YXRlID8gJ0N1dCBPZmYgVmVoaWNsZSBJZ25pdGlvbicgOiAnQXV0aG9yaXplIFZlaGljbGUgSWduaXRpb24nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhbXBlckFsZXJ0KCF0YW1wZXJBbGVydCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtYm9sZCByb3VuZGVkLXhsIGJvcmRlciB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFtcGVyQWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLW9yYW5nZS0xMDAgYm9yZGVyLW9yYW5nZS0zMDAgdGV4dC1vcmFuZ2UtOTAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYmctd2hpdGUgYm9yZGVyLXN0b25lLTIwMCB0ZXh0LXN0b25lLTcwMCBob3Zlcjp0ZXh0LXN0b25lLTkwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydFRyaWFuZ2xlIGNsYXNzTmFtZT1cInctMy41IGgtMy41IHRleHQtb3JhbmdlLTYwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0YW1wZXJBbGVydCA/ICdDbGVhciBUYW1wZXIgQWxlcnQnIDogJ1RyaWdnZXIgRGlzcGxhY2VtZW50IEJyZWFjaCBBbGVydCd9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICB7dGFtcGVyQWxlcnQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMuNSByb3VuZGVkLXhsIGJnLXJlZC01MCBib3JkZXIgYm9yZGVyLXJlZC0yMDAgdGV4dC14cyBmb250LW1vbm8gdGV4dC1yZWQtOTAwIGZsZXggaXRlbXMtc3RhcnQgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0VHJpYW5nbGUgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXJlZC02MDAgc2hyaW5rLTAgbXQtMC41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRBTVBFUiBTRUNVUklUWSBFVkVOVCBERVRFQ1RFRDo8L3N0cm9uZz4gVmVoaWNsZSBtb3ZlZCBvdXRzaWRlIGdlb2ZlbmNlIHdpdGhvdXQgYXV0aG9yaXplZCBpZ25pdGlvbiBhY3RpdmF0aW9uLiBBbGVydCBwYWNrZXQgZGlzcGF0Y2hlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICB7LyogVEFCIDM6IEFSQ0hJVEVDVFVSRSAmIFNFQ1VSSVRZICovfVxuICAgICAgICAgICAge2FjdGl2ZVRhYiA9PT0gJ2FyY2hpdGVjdHVyZScgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNlwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLTJ4bCBiZy1zdG9uZS01MCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LW9yYW5nZS03MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Gcm9udGVuZCBBcmNoaXRlY3R1cmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc3RvbmUtNzAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmFyY2hpdGVjdHVyZURldGFpbHMuZnJvbnRlbmR9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLTJ4bCBiZy1zdG9uZS01MCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LW9yYW5nZS03MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlcnZlciBjbGFzc05hbWU9XCJ3LTQgaC00XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CYWNrZW5kICYgQVBJIFBpcGVsaW5lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXN0b25lLTcwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5hcmNoaXRlY3R1cmVEZXRhaWxzLmJhY2tlbmR9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCByb3VuZGVkLTJ4bCBiZy1zdG9uZS01MCBib3JkZXIgYm9yZGVyLXN0b25lLTIwMCBzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LW9yYW5nZS03MDAgZm9udC1ib2xkIHRleHQteHMgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPERhdGFiYXNlIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRhdGFiYXNlICYgRGF0YSBQZXJzaXN0ZW5jZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdG9uZS03MDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuYXJjaGl0ZWN0dXJlRGV0YWlscy5kYXRhYmFzZX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IHJvdW5kZWQtMnhsIGJnLXN0b25lLTUwIGJvcmRlciBib3JkZXItc3RvbmUtMjAwIHNwYWNlLXktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtb3JhbmdlLTcwMCBmb250LWJvbGQgdGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2hpZWxkQ2hlY2sgY2xhc3NOYW1lPVwidy00IGgtNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QXBwbGllZCBTZWN1cml0eSBDb250cm9sczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1zdG9uZS03MDAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QuYXJjaGl0ZWN0dXJlRGV0YWlscy5zZWN1cml0eX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHsvKiBTZWN1cml0eSBIaWdobGlnaHRzICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zIHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1zdG9uZS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIFNlY3VyaXR5IERlZmVuc2UgSGlnaGxpZ2h0c1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgZ2FwLTIuNVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5zZWN1cml0eUhpZ2hsaWdodHMubWFwKChoaWdobGlnaHQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgZ2FwLTIgcC0zIHJvdW5kZWQteGwgYmctb3JhbmdlLTUwLzUwIGJvcmRlciBib3JkZXItb3JhbmdlLTEwMCB0ZXh0LXhzIHRleHQtc3RvbmUtNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jayBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LW9yYW5nZS02MDAgc2hyaW5rLTAgbXQtMC41XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntoaWdobGlnaHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIEZvb3RlciAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10IGJvcmRlci1zdG9uZS0yMDAgYmctc3RvbmUtNTAgcHgtNiBweS00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtc3RvbmUtNTAwXCI+XG4gICAgICAgICAgICAgIEFyanVuIE0gwrcgUG9ydGZvbGlvIFNob3djYXNlXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LXN0b25lLTcwMCBob3Zlcjp0ZXh0LXN0b25lLTkwMCBiZy13aGl0ZSBob3ZlcjpiZy1zdG9uZS0xMDAgcm91bmRlZC14bCB0cmFuc2l0aW9uLWNvbG9ycyBib3JkZXIgYm9yZGVyLXN0b25lLTIwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9qZWN0LmdpdGh1YlVybH1cbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIGJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTUwMCByb3VuZGVkLXhsIHRyYW5zaXRpb24tY29sb3JzIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgc2hhZG93LXhzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxHaXRodWIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPlZpZXcgU291cmNlIG9uIEdpdEh1Yjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICk7XG59O1xuIl19