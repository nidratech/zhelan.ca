self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/Container.ts":
/*!*********************************!*\
  !*** ./components/Container.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "Container",
  componentId: "h1c72z-0"
})(["max-width:60rem;min-width:30rem;margin:", ";padding:", ";", " @media (max-width:", "){max-width:none;min-width:auto;margin:0 ", ";padding:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.space.medium, " auto ").concat(theme.space.large);
}, function (_ref2) {
  var theme = _ref2.theme;
  return "0 ".concat(theme.space.large);
}, function (_ref3) {
  var isCentered = _ref3.isCentered;
  return isCentered && (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;align-items:center;flex-direction:column;"]);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoint.mobile;
}, function (_ref5) {
  var theme = _ref5.theme;
  return "0 ".concat(theme.space.medium);
}, function (_ref6) {
  var theme = _ref6.theme;
  return "0 ".concat(theme.space.medium);
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIudHMiXSwibmFtZXMiOlsic3R5bGVkIiwidGhlbWUiLCJzcGFjZSIsIm1lZGl1bSIsImxhcmdlIiwiaXNDZW50ZXJlZCIsImNzcyIsImJyZWFrcG9pbnQiLCJtb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsK0RBQWVBLHFFQUFmO0FBQUE7QUFBQTtBQUFBLHlKQUdZO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsbUJBQWtCQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBOUIsbUJBQTZDRixLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FBekQ7QUFBQSxDQUhaLEVBSWE7QUFBQSxNQUFHSCxLQUFILFNBQUdBLEtBQUg7QUFBQSxxQkFBb0JBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxLQUFoQztBQUFBLENBSmIsRUFNSTtBQUFBLE1BQUdDLFVBQUgsU0FBR0EsVUFBSDtBQUFBLFNBQ0FBLFVBQVUsSUFDVkMsc0RBRFUsNERBRFY7QUFBQSxDQU5KLEVBY3VCO0FBQUEsTUFBR0wsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTSxVQUFOLENBQWlCQyxNQUFoQztBQUFBLENBZHZCLEVBaUJnQjtBQUFBLE1BQUdQLEtBQUgsU0FBR0EsS0FBSDtBQUFBLHFCQUFvQkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQWhDO0FBQUEsQ0FqQmhCLEVBa0JlO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEscUJBQW9CQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBaEM7QUFBQSxDQWxCZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dC41MmZiZmJlMzcyNjg3MTRkNWI2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5kaXY8eyBpc0NlbnRlcmVkPzogYm9vbGVhbiB9PmBcbiAgbWF4LXdpZHRoOiA2MHJlbTtcbiAgbWluLXdpZHRoOiAzMHJlbTtcbiAgbWFyZ2luOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNwYWNlLm1lZGl1bX0gYXV0byAke3RoZW1lLnNwYWNlLmxhcmdlfWB9O1xuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2UubGFyZ2V9YH07XG5cbiAgJHsoeyBpc0NlbnRlcmVkIH0pID0+XG4gICAgaXNDZW50ZXJlZCAmJlxuICAgIGNzc2BcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnQubW9iaWxlfSkge1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwICR7KHsgdGhlbWUgfSkgPT4gYDAgJHt0aGVtZS5zcGFjZS5tZWRpdW19YH07XG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiBgMCAke3RoZW1lLnNwYWNlLm1lZGl1bX1gfTtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=