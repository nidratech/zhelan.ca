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
      href: "https://www.facebook.com/profile.php?id=100010647843215",
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
        href: "tel:+17788816864",
        children: "(778) 881-6864"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "mailto:zhelancardigans@gmail.com",
        children: "zhelancardigans@gmail.com"
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
})(["margin-bottom:0.25rem;font-size:1.3rem;color:white;"]);
_c2 = ContactHeader;
var ContactContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
  displayName: "pages__ContactContainer",
  componentId: "eymzt7-1"
})(["display:grid;margin-top:2rem;grid-gap:0.2rem;"]);
_c3 = ContactContainer;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div.withConfig({
  displayName: "pages__Container",
  componentId: "eymzt7-2"
})(["background-color:#363636;display:flex;height:100vh;justify-content:center;align-items:center;flex-direction:column;"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJDb250YWN0SGVhZGVyIiwic3R5bGVkIiwiQ29udGFjdENvbnRhaW5lciIsIkNvbnRhaW5lciIsIlN0eWxlZEltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUMzQixzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0U7QUFBRyxVQUFJLEVBQUMseURBQVI7QUFBQSw2QkFDRSw4REFBQyxTQUFEO0FBQVcsV0FBRyxFQUFDLFdBQWY7QUFBMkIsV0FBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRSw4REFBQyxnQkFBRDtBQUFBLDhCQUNFLDhEQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUcsWUFBSSxFQUFDLGtCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFHLFlBQUksRUFBQyxrQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FkRDs7S0FBTUEsSTtBQWdCTixJQUFNQyxhQUFhLEdBQUdDLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDJEQUFuQjtNQUFNRCxhO0FBS04sSUFBTUUsZ0JBQWdCLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFEQUF0QjtNQUFNQyxnQjtBQUtOLElBQU1DLFNBQVMsR0FBR0YscUVBQUg7QUFBQTtBQUFBO0FBQUEsMkhBQWY7TUFBTUUsUztBQVFOLElBQU1DLFNBQVMsR0FBR0gscUVBQUg7QUFBQTtBQUFBO0FBQUEsd0VBQWY7TUFBTUcsUztBQU9OLCtEQUFlTCxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk3ZWVjYjNjNTBhMWIyZTYyNzRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwP2lkPTEwMDAxMDY0Nzg0MzIxNVwiPlxyXG4gICAgICAgIDxTdHlsZWRJbWcgc3JjPVwiYm9vbGEuanBnXCIgYWx0PVwiQm9vbGEgcGljXCIgLz5cclxuICAgICAgPC9hPlxyXG5cclxuICAgICAgPENvbnRhY3RDb250YWluZXI+XHJcbiAgICAgICAgPENvbnRhY3RIZWFkZXI+R2V0IGluIFRvdWNoPC9Db250YWN0SGVhZGVyPlxyXG4gICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzE3Nzg4ODE2ODY0XCI+KDc3OCkgODgxLTY4NjQ8L2E+XHJcbiAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp6aGVsYW5jYXJkaWdhbnNAZ21haWwuY29tXCI+emhlbGFuY2FyZGlnYW5zQGdtYWlsLmNvbTwvYT5cclxuICAgICAgPC9Db250YWN0Q29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENvbnRhY3RIZWFkZXIgPSBzdHlsZWQuaDFgXHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbmA7XHJcbmNvbnN0IENvbnRhY3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBncmlkLWdhcDogMC4ycmVtO1xyXG5gO1xyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYDtcclxuY29uc3QgU3R5bGVkSW1nID0gc3R5bGVkLmltZ2BcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwcmVtO1xyXG4gIG1heC1oZWlnaHQ6IDEzcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==