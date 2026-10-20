const React = __vite__cjsImport0_react; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport11_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=469f7b21";
import { Navbar } from "/src/components/Navbar.tsx";
import { Hero } from "/src/components/Hero.tsx";
import { ProjectsSection } from "/src/components/ProjectsSection.tsx";
import { AboutSection } from "/src/components/AboutSection.tsx";
import { SkillsSection } from "/src/components/SkillsSection.tsx";
import { EducationCertSection } from "/src/components/EducationCertSection.tsx";
import { ContactSection } from "/src/components/ContactSection.tsx";
import { Footer } from "/src/components/Footer.tsx";
import { ResumeModal } from "/src/components/ResumeModal.tsx";
import { GitHubPagesGuideModal } from "/src/components/GitHubPagesGuideModal.tsx";
var _jsxFileName = "/app/applet/src/App.tsx";
import __vite__cjsImport11_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=469f7b21";
export default function App() {
	const [isResumeOpen, setIsResumeOpen] = useState(false);
	const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "min-h-screen bg-white text-stone-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white",
		children: [
			/* @__PURE__ */ _jsxDEV(Navbar, {
				onOpenResume: () => setIsResumeOpen(true),
				onOpenDeployGuide: () => setIsDeployGuideOpen(true)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("main", {
				className: "flex-1",
				children: [
					/* @__PURE__ */ _jsxDEV(Hero, { onOpenResume: () => setIsResumeOpen(true) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(ProjectsSection, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(AboutSection, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(SkillsSection, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(EducationCertSection, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV(ContactSection, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Footer, {
				onOpenResume: () => setIsResumeOpen(true),
				onOpenDeployGuide: () => setIsDeployGuideOpen(true)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(ResumeModal, {
				isOpen: isResumeOpen,
				onClose: () => setIsResumeOpen(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(GitHubPagesGuideModal, {
				isOpen: isDeployGuideOpen,
				onClose: () => setIsDeployGuideOpen(false)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxTQUFTLGdCQUFnQjtBQUNoQyxTQUFTLGNBQWM7QUFDdkIsU0FBUyxZQUFZO0FBQ3JCLFNBQVMsdUJBQXVCO0FBQ2hDLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsc0JBQXNCO0FBQy9CLFNBQVMsY0FBYztBQUN2QixTQUFTLG1CQUFtQjtBQUM1QixTQUFTLDZCQUE2Qjs7O0FBRXRDLGVBQWUsU0FBUyxNQUFNO0NBQzVCLE1BQU0sQ0FBQyxjQUFjLG1CQUFtQixTQUFTLEtBQUs7Q0FDdEQsTUFBTSxDQUFDLG1CQUFtQix3QkFBd0IsU0FBUyxLQUFLO0NBRWhFLE9BQ0Usd0JBQUMsT0FBRDtFQUFLLFdBQVU7WUFBZjtHQUVFLHdCQUFDLFFBQUQ7SUFDRSxvQkFBb0IsZ0JBQWdCLElBQUk7SUFDeEMseUJBQXlCLHFCQUFxQixJQUFJO0dBQ25EOzs7OztHQUdELHdCQUFDLFFBQUQ7SUFBTSxXQUFVO2NBQWhCO0tBQ0Usd0JBQUMsTUFBRCxFQUNFLG9CQUFvQixnQkFBZ0IsSUFBSSxFQUN6Qzs7Ozs7S0FDRCx3QkFBQyxpQkFBRCxDQUFrQjs7Ozs7S0FDbEIsd0JBQUMsY0FBRCxDQUFlOzs7OztLQUNmLHdCQUFDLGVBQUQsQ0FBZ0I7Ozs7O0tBQ2hCLHdCQUFDLHNCQUFELENBQXVCOzs7OztLQUN2Qix3QkFBQyxnQkFBRCxDQUFpQjs7Ozs7SUFDYjs7Ozs7O0dBR04sd0JBQUMsUUFBRDtJQUNFLG9CQUFvQixnQkFBZ0IsSUFBSTtJQUN4Qyx5QkFBeUIscUJBQXFCLElBQUk7R0FDbkQ7Ozs7O0dBR0Qsd0JBQUMsYUFBRDtJQUNFLFFBQVE7SUFDUixlQUFlLGdCQUFnQixLQUFLO0dBQ3JDOzs7OztHQUdELHdCQUFDLHVCQUFEO0lBQ0UsUUFBUTtJQUNSLGVBQWUscUJBQXFCLEtBQUs7R0FDMUM7Ozs7O0VBQ0U7Ozs7OztBQUVUIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIkFwcC50c3giXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9jb21wb25lbnRzL0hlcm8nO1xuaW1wb3J0IHsgUHJvamVjdHNTZWN0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbic7XG5pbXBvcnQgeyBBYm91dFNlY3Rpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvQWJvdXRTZWN0aW9uJztcbmltcG9ydCB7IFNraWxsc1NlY3Rpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvU2tpbGxzU2VjdGlvbic7XG5pbXBvcnQgeyBFZHVjYXRpb25DZXJ0U2VjdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9FZHVjYXRpb25DZXJ0U2VjdGlvbic7XG5pbXBvcnQgeyBDb250YWN0U2VjdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0U2VjdGlvbic7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IFJlc3VtZU1vZGFsIH0gZnJvbSAnLi9jb21wb25lbnRzL1Jlc3VtZU1vZGFsJztcbmltcG9ydCB7IEdpdEh1YlBhZ2VzR3VpZGVNb2RhbCB9IGZyb20gJy4vY29tcG9uZW50cy9HaXRIdWJQYWdlc0d1aWRlTW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtpc1Jlc3VtZU9wZW4sIHNldElzUmVzdW1lT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0RlcGxveUd1aWRlT3Blbiwgc2V0SXNEZXBsb3lHdWlkZU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctd2hpdGUgdGV4dC1zdG9uZS05MDAgZmxleCBmbGV4LWNvbCBmb250LXNhbnMgc2VsZWN0aW9uOmJnLW9yYW5nZS01MDAgc2VsZWN0aW9uOnRleHQtd2hpdGVcIj5cbiAgICAgIHsvKiBUb3AgQmFyIE5hdmlnYXRpb24gKFN0cmljdCAzLVpvbmUgQ29udHJhY3QpICovfVxuICAgICAgPE5hdmJhciBcbiAgICAgICAgb25PcGVuUmVzdW1lPXsoKSA9PiBzZXRJc1Jlc3VtZU9wZW4odHJ1ZSl9XG4gICAgICAgIG9uT3BlbkRlcGxveUd1aWRlPXsoKSA9PiBzZXRJc0RlcGxveUd1aWRlT3Blbih0cnVlKX1cbiAgICAgIC8+XG5cbiAgICAgIHsvKiBNYWluIENvbnRlbnQgU2VjdGlvbnMgKi99XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgPEhlcm8gXG4gICAgICAgICAgb25PcGVuUmVzdW1lPXsoKSA9PiBzZXRJc1Jlc3VtZU9wZW4odHJ1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0c1NlY3Rpb24gLz5cbiAgICAgICAgPEFib3V0U2VjdGlvbiAvPlxuICAgICAgICA8U2tpbGxzU2VjdGlvbiAvPlxuICAgICAgICA8RWR1Y2F0aW9uQ2VydFNlY3Rpb24gLz5cbiAgICAgICAgPENvbnRhY3RTZWN0aW9uIC8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiBGb290ZXIgKi99XG4gICAgICA8Rm9vdGVyIFxuICAgICAgICBvbk9wZW5SZXN1bWU9eygpID0+IHNldElzUmVzdW1lT3Blbih0cnVlKX1cbiAgICAgICAgb25PcGVuRGVwbG95R3VpZGU9eygpID0+IHNldElzRGVwbG95R3VpZGVPcGVuKHRydWUpfVxuICAgICAgLz5cblxuICAgICAgey8qIEludGVyYWN0aXZlIFJlc3VtZSBTaGVldCBNb2RhbCAoUHJpbnRhYmxlICYgRXhwb3J0YWJsZSkgKi99XG4gICAgICA8UmVzdW1lTW9kYWwgXG4gICAgICAgIGlzT3Blbj17aXNSZXN1bWVPcGVufVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc1Jlc3VtZU9wZW4oZmFsc2UpfVxuICAgICAgLz5cblxuICAgICAgey8qIEdpdEh1YiBQYWdlcyBEZXBsb3ltZW50IEhlbHBlciBNb2RhbCAqL31cbiAgICAgIDxHaXRIdWJQYWdlc0d1aWRlTW9kYWwgXG4gICAgICAgIGlzT3Blbj17aXNEZXBsb3lHdWlkZU9wZW59XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzRGVwbG95R3VpZGVPcGVuKGZhbHNlKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXX0=