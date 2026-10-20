const React = __vite__cjsImport0_react;const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { motion } from "/node_modules/.vite/deps/motion_react.js?v=0f7692ca";
import { Github, ArrowUpRight, CheckCircle2, Play } from "/node_modules/.vite/deps/lucide-react.js?v=73fa967c";
var _jsxFileName = "/app/applet/src/components/ProjectCard.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export const ProjectCard = ({ project, onSelect }) => {
	return /* @__PURE__ */ _jsxDEV(motion.div, {
		whileHover: {
			y: -6,
			transition: {
				duration: .25,
				ease: "easeOut"
			}
		},
		className: "group relative flex flex-col justify-between rounded-3xl border border-stone-200 bg-white p-5 transition-all duration-200 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-950/5",
		children: [/* @__PURE__ */ _jsxDEV("div", { children: [
			/* @__PURE__ */ _jsxDEV("div", {
				onClick: () => onSelect(project),
				className: "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-stone-100 bg-stone-100 cursor-pointer",
				children: [
					/* @__PURE__ */ _jsxDEV("img", {
						src: project.image,
						alt: project.title,
						referrerPolicy: "no-referrer",
						className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
						onError: (e) => {
							e.target.style.display = "none";
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-stone-950/40 backdrop-blur-xs transition-opacity duration-200",
						children: /* @__PURE__ */ _jsxDEV("span", {
							className: "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-orange-600 text-white text-xs font-semibold shadow-lg",
							children: [/* @__PURE__ */ _jsxDEV(Play, { className: "w-3.5 h-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Inspect & Test Demo" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "absolute bottom-2.5 left-3 text-[11px] font-mono font-medium text-white bg-stone-900/60 backdrop-blur-xs px-2.5 py-1 rounded-md",
						children: project.category
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "mt-4 flex flex-wrap items-center gap-1 text-xs font-mono text-stone-600",
				children: [project.technologies.slice(0, 4).map((tech, idx) => /* @__PURE__ */ _jsxDEV(React.Fragment, { children: [/* @__PURE__ */ _jsxDEV("span", {
					className: "text-stone-800 font-medium",
					children: tech
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 15
				}, this), idx < Math.min(project.technologies.length, 4) - 1 && /* @__PURE__ */ _jsxDEV("span", {
					className: "text-orange-600 px-0.5 font-bold",
					children: "·"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 17
				}, this)] }, tech, true, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 13
				}, this)), project.technologies.length > 4 && /* @__PURE__ */ _jsxDEV("span", {
					className: "text-orange-600 font-semibold text-[11px]",
					children: ["+", project.technologies.length - 4]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "mt-2.5",
				children: [/* @__PURE__ */ _jsxDEV("h3", {
					onClick: () => onSelect(project),
					className: "text-lg sm:text-xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors cursor-pointer flex items-center gap-1.5",
					children: [/* @__PURE__ */ _jsxDEV("span", { children: project.title }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV(ArrowUpRight, { className: "w-4 h-4 text-stone-400 group-hover:text-orange-600 transition-colors" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("p", {
					className: "text-xs text-orange-700 font-bold mt-0.5",
					children: project.subtitle
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 72,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 64,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("p", {
				className: "mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2",
				children: project.description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "mt-3.5 space-y-1.5 border-t border-stone-100 pt-3",
				children: project.bullets.slice(0, 2).map((bullet, idx) => /* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-start gap-2 text-xs text-stone-700",
					children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, { className: "w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "line-clamp-1",
						children: bullet
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 15
					}, this)]
				}, idx, true, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "mt-5 pt-3 border-t border-stone-100 flex items-center justify-between",
			children: [/* @__PURE__ */ _jsxDEV("button", {
				onClick: () => onSelect(project),
				className: "text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors flex items-center gap-1",
				children: [/* @__PURE__ */ _jsxDEV("span", { children: "Architecture & Demo" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV(ArrowUpRight, { className: "w-3.5 h-3.5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("a", {
				href: project.githubUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "flex items-center gap-1.5 text-xs font-mono font-medium text-stone-600 hover:text-orange-600 transition-colors p-1",
				title: "View project on GitHub",
				children: [/* @__PURE__ */ _jsxDEV(Github, { className: "w-3.5 h-3.5 text-stone-800" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("span", { children: "Code" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 94,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 5
	}, this);
};

//# sourceMappingURL=data:application/json;base64,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VTs7OztZQUNmOzs7OztXQUNBOzs7OztVQUVLOzs7Ozs7QUFFaEIiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiUHJvamVjdENhcmQudHN4Il0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgR2l0aHViLCBBcnJvd1VwUmlnaHQsIENoZWNrQ2lyY2xlMiwgUGxheSB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vZGF0YS9wb3J0Zm9saW9EYXRhJztcblxuaW50ZXJmYWNlIFByb2plY3RDYXJkUHJvcHMge1xuICBwcm9qZWN0OiBQcm9qZWN0O1xuICBvblNlbGVjdDogKHByb2plY3Q6IFByb2plY3QpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0Q2FyZDogUmVhY3QuRkM8UHJvamVjdENhcmRQcm9wcz4gPSAoeyBwcm9qZWN0LCBvblNlbGVjdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXYgXG4gICAgICB3aGlsZUhvdmVyPXt7IHk6IC02LCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjI1LCBlYXNlOiAnZWFzZU91dCcgfSB9fVxuICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC0zeGwgYm9yZGVyIGJvcmRlci1zdG9uZS0yMDAgYmctd2hpdGUgcC01IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBob3Zlcjpib3JkZXItb3JhbmdlLTMwMCBob3ZlcjpzaGFkb3cteGwgaG92ZXI6c2hhZG93LW9yYW5nZS05NTAvNVwiXG4gICAgPlxuICAgICAgPGRpdj5cbiAgICAgICAgey8qIFByb2plY3QgSW1hZ2UgQ29udGFpbmVyICovfVxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KHByb2plY3QpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGFzcGVjdC1bMTYvMTBdIHctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgYm9yZGVyIGJvcmRlci1zdG9uZS0xMDAgYmctc3RvbmUtMTAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgIGFsdD17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgIHJlZmVycmVyUG9saWN5PVwibm8tcmVmZXJyZXJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwIGdyb3VwLWhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgICAgICBvbkVycm9yPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1zdG9uZS05MDAvNjAgdmlhLXRyYW5zcGFyZW50IHRvLXRyYW5zcGFyZW50IHBvaW50ZXItZXZlbnRzLW5vbmVcIiAvPlxuXG4gICAgICAgICAgey8qIEludGVyYWN0aXZlIEluc3BlY3QgSGludCBPdmVybGF5ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgYmctc3RvbmUtOTUwLzQwIGJhY2tkcm9wLWJsdXIteHMgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTIwMFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgcHgtMy41IHB5LTIgcm91bmRlZC14bCBiZy1vcmFuZ2UtNjAwIHRleHQtd2hpdGUgdGV4dC14cyBmb250LXNlbWlib2xkIHNoYWRvdy1sZ1wiPlxuICAgICAgICAgICAgICA8UGxheSBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPkluc3BlY3QgJiBUZXN0IERlbW88L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogQ2F0ZWdvcnkga2lja2VyICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTIuNSBsZWZ0LTMgdGV4dC1bMTFweF0gZm9udC1tb25vIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctc3RvbmUtOTAwLzYwIGJhY2tkcm9wLWJsdXIteHMgcHgtMi41IHB5LTEgcm91bmRlZC1tZFwiPlxuICAgICAgICAgICAge3Byb2plY3QuY2F0ZWdvcnl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBVbmJveGVkIHRlY2ggc3RhY2sgd2l0aCBvcmFuZ2Ugc2VwYXJhdG9ycyAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LXN0b25lLTYwMFwiPlxuICAgICAgICAgIHtwcm9qZWN0LnRlY2hub2xvZ2llcy5zbGljZSgwLCA0KS5tYXAoKHRlY2gsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dGVjaH0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3RvbmUtODAwIGZvbnQtbWVkaXVtXCI+e3RlY2h9PC9zcGFuPlxuICAgICAgICAgICAgICB7aWR4IDwgTWF0aC5taW4ocHJvamVjdC50ZWNobm9sb2dpZXMubGVuZ3RoLCA0KSAtIDEgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBweC0wLjUgZm9udC1ib2xkXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtwcm9qZWN0LnRlY2hub2xvZ2llcy5sZW5ndGggPiA0ICYmIChcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTYwMCBmb250LXNlbWlib2xkIHRleHQtWzExcHhdXCI+K3twcm9qZWN0LnRlY2hub2xvZ2llcy5sZW5ndGggLSA0fTwvc3Bhbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogVGl0bGUgYW5kIFN1YnRpdGxlIHdpdGggT3JhbmdlIEhpZ2hsaWdodHMgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMi41XCI+XG4gICAgICAgICAgPGgzIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QocHJvamVjdCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQteGwgZm9udC1ib2xkIHRleHQtc3RvbmUtOTAwIGdyb3VwLWhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBjdXJzb3ItcG9pbnRlciBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj57cHJvamVjdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8QXJyb3dVcFJpZ2h0IGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1zdG9uZS00MDAgZ3JvdXAtaG92ZXI6dGV4dC1vcmFuZ2UtNjAwIHRyYW5zaXRpb24tY29sb3JzXCIgLz5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1vcmFuZ2UtNzAwIGZvbnQtYm9sZCBtdC0wLjVcIj5cbiAgICAgICAgICAgIHtwcm9qZWN0LnN1YnRpdGxlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEJyaWVmIGRlc2NyaXB0aW9uICovfVxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQteHMgc206dGV4dC1zbSB0ZXh0LXN0b25lLTYwMCBsZWFkaW5nLXJlbGF4ZWQgbGluZS1jbGFtcC0yXCI+XG4gICAgICAgICAge3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cblxuICAgICAgICB7LyogSGlnaGxpZ2h0IEJ1bGxldHMgZnJvbSBSZXN1bWUgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMy41IHNwYWNlLXktMS41IGJvcmRlci10IGJvcmRlci1zdG9uZS0xMDAgcHQtM1wiPlxuICAgICAgICAgIHtwcm9qZWN0LmJ1bGxldHMuc2xpY2UoMCwgMikubWFwKChidWxsZXQsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBnYXAtMiB0ZXh0LXhzIHRleHQtc3RvbmUtNzAwXCI+XG4gICAgICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjUgdGV4dC1vcmFuZ2UtNjAwIHNocmluay0wIG10LTAuNVwiIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmUtY2xhbXAtMVwiPntidWxsZXR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDYXJkIEFjdGlvbnMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgcHQtMyBib3JkZXItdCBib3JkZXItc3RvbmUtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3QocHJvamVjdCl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWJvbGQgdGV4dC1vcmFuZ2UtNjAwIGhvdmVyOnRleHQtb3JhbmdlLTcwMCB0cmFuc2l0aW9uLWNvbG9ycyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Bhbj5BcmNoaXRlY3R1cmUgJiBEZW1vPC9zcGFuPlxuICAgICAgICAgIDxBcnJvd1VwUmlnaHQgY2xhc3NOYW1lPVwidy0zLjUgaC0zLjVcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e3Byb2plY3QuZ2l0aHViVXJsfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSB0ZXh0LXhzIGZvbnQtbW9ubyBmb250LW1lZGl1bSB0ZXh0LXN0b25lLTYwMCBob3Zlcjp0ZXh0LW9yYW5nZS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgcC0xXCJcbiAgICAgICAgICB0aXRsZT1cIlZpZXcgcHJvamVjdCBvbiBHaXRIdWJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEdpdGh1YiBjbGFzc05hbWU9XCJ3LTMuNSBoLTMuNSB0ZXh0LXN0b25lLTgwMFwiIC8+XG4gICAgICAgICAgPHNwYW4+Q29kZTwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuIl19