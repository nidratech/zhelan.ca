self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\Projects\\zhelan.ca\\pages\\index.tsx",
    _this = undefined;



var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "mailto:zhelancardigans@gmail.com",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledImg, {
        src: "boola.jpg",
        alt: "Boola pic"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContactContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContactHeader, {
        children: "Get in Touch"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "mailto:zhelancardigans@gmail.com",
        children: "zhelancardigans@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "tel:+17788816864",
        children: "778-881-6864"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};

_c = Home;
var ContactHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.h1.withConfig({
  displayName: "pages__ContactHeader",
  componentId: "eymzt7-0"
})(["margin-top:0.5rem;font-size:1.2rem;"]);
_c2 = ContactHeader;
var ContactContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
  displayName: "pages__ContactContainer",
  componentId: "eymzt7-1"
})(["display:flex;flex-direction:column;margin-top:2rem;"]);
_c3 = ContactContainer;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
  displayName: "pages__Container",
  componentId: "eymzt7-2"
})(["display:flex;height:100vh;justify-content:center;align-items:center;flex-direction:column;"]);
_c4 = Container;
var StyledImg = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img.withConfig({
  displayName: "pages__StyledImg",
  componentId: "eymzt7-3"
})(["height:50vh;border-radius:40%;min-height:10rem;max-height:13rem;"]);
_c5 = StyledImg;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "ContactHeader");
$RefreshReg$(_c3, "ContactContainer");
$RefreshReg$(_c4, "Container");
$RefreshReg$(_c5, "StyledImg");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJDb250YWN0SGVhZGVyIiwic3R5bGVkIiwiQ29udGFjdENvbnRhaW5lciIsIkNvbnRhaW5lciIsIlN0eWxlZEltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUMzQixzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0U7QUFBRyxVQUFJLEVBQUMsa0NBQVI7QUFBQSw2QkFDRSw4REFBQyxTQUFEO0FBQVcsV0FBRyxFQUFDLFdBQWY7QUFBMkIsV0FBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSw4REFBQyxnQkFBRDtBQUFBLDhCQUNFLDhEQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUcsWUFBSSxFQUFDLGtDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFHLFlBQUksRUFBQyxrQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FkRDs7S0FBTUEsSTtBQWdCTixJQUFNQyxhQUFhLEdBQUdDLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDJDQUFuQjtNQUFNRCxhO0FBS04sSUFBTUUsZ0JBQWdCLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLDJEQUF0QjtNQUFNQyxnQjtBQUtOLElBQU1DLFNBQVMsR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsa0dBQWY7TUFBTUUsUztBQU9OLElBQU1DLFNBQVMsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsd0VBQWY7TUFBTUcsUztBQU9OLCtEQUFlTCxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ2ZTQyMjgwY2MyYWU0ZjdlODQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8YSBocmVmPVwibWFpbHRvOnpoZWxhbmNhcmRpZ2Fuc0BnbWFpbC5jb21cIj5cclxuICAgICAgICA8U3R5bGVkSW1nIHNyYz1cImJvb2xhLmpwZ1wiIGFsdD1cIkJvb2xhIHBpY1wiIC8+XHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICAgIDxDb250YWN0Q29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWN0SGVhZGVyPkdldCBpbiBUb3VjaDwvQ29udGFjdEhlYWRlcj5cclxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOnpoZWxhbmNhcmRpZ2Fuc0BnbWFpbC5jb21cIj56aGVsYW5jYXJkaWdhbnNAZ21haWwuY29tPC9hPlxyXG4gICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzE3Nzg4ODE2ODY0XCI+Nzc4LTg4MS02ODY0PC9hPlxyXG4gICAgICA8L0NvbnRhY3RDb250YWluZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQ29udGFjdEhlYWRlciA9IHN0eWxlZC5oMWBcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuYDtcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5gO1xyXG5jb25zdCBTdHlsZWRJbWcgPSBzdHlsZWQuaW1nYFxyXG4gIGhlaWdodDogNTB2aDtcclxuICBib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgbWluLWhlaWdodDogMTByZW07XHJcbiAgbWF4LWhlaWdodDogMTNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9