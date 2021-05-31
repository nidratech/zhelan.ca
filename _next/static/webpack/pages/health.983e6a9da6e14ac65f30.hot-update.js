self["webpackHotUpdate_N_E"]("pages/health",{

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
})(["max-width:60rem;min-width:30rem;margin:", ";padding:", ";line-height:1.25;", " @media (max-width:", "){max-width:none;min-width:auto;margin:0 ", ";padding:", ";}"], function (_ref) {
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


/***/ }),

/***/ "./pages/health.tsx":
/*!**************************!*\
  !*** ./pages/health.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./components/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\Projects\\zhelan.ca\\pages\\health.tsx",
    _this = undefined;





var Health = function Health() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components__WEBPACK_IMPORTED_MODULE_2__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
      title: "Zhelan Cardigans - Health",
      description: "Health information of Zhelan Cardigans.",
      canonical: "https://www.zhelan.ca/health",
      openGraph: {
        title: 'Zhelan Cardigans - Health',
        description: 'Health information of Zhelan Cardigans.',
        url: 'https://www.zhelan.ca/health'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ImagesContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DoggyImg, {
        src: "images/boola2.jpg",
        alt: "Boola portrait"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HealthBody, {
      children: ["I am happy to report that our girl Boola aka CANCH Maksherri Baiya Morna CA, SDIN, S has great genetic health results and Orthopedic Federation of America (OFA) qualified her for a CHIC#154055.", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpacerSection, {
        children: ["Boola's OFA profile is open to the public and can be seen here:", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          target: "_blank",
          rel: "noreferrer",
          href: "https://www.ofa.org/advanced-search?f=sr&appnum=2169987",
          children: "https://www.ofa.org/advanced-search?f=sr&appnum=2169987"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "DM - Clear"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Pra - Clear"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "EIC - Clear"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Fluffy - Clear"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "E-Locus -Clear"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Elbows - Normal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: "Hips - GOOD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = Health;
var SpacerSection = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "health__SpacerSection",
  componentId: "sc-3zi2ct-0"
})(["margin:", ";"], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.space.medium, " 0");
});
_c2 = SpacerSection;
var HealthBody = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "health__HealthBody",
  componentId: "sc-3zi2ct-1"
})(["font-size:1.2em;margin-top:", ";color:", ";"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.large;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.color.white;
});
_c3 = HealthBody;
var DoggyImg = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.img.withConfig({
  displayName: "health__DoggyImg",
  componentId: "sc-3zi2ct-2"
})(["width:40%;max-width:325px;min-width:250px;border-radius:", ";@media (max-width:", "){display:", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.borderRadius;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakpoint.mobile;
}, function (_ref6) {
  var hideMobile = _ref6.hideMobile;
  return hideMobile ? 'none' : 'block';
});
_c4 = DoggyImg;
var ImagesContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "health__ImagesContainer",
  componentId: "sc-3zi2ct-3"
})(["display:flex;align-items:center;justify-content:space-around;"]);
_c5 = ImagesContainer;
/* harmony default export */ __webpack_exports__["default"] = (Health);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Health");
$RefreshReg$(_c2, "SpacerSection");
$RefreshReg$(_c3, "HealthBody");
$RefreshReg$(_c4, "DoggyImg");
$RefreshReg$(_c5, "ImagesContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWluZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hlYWx0aC50c3giXSwibmFtZXMiOlsic3R5bGVkIiwidGhlbWUiLCJzcGFjZSIsIm1lZGl1bSIsImxhcmdlIiwiaXNDZW50ZXJlZCIsImNzcyIsImJyZWFrcG9pbnQiLCJtb2JpbGUiLCJIZWFsdGgiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsIiwiU3BhY2VyU2VjdGlvbiIsIkhlYWx0aEJvZHkiLCJjb2xvciIsIndoaXRlIiwiRG9nZ3lJbWciLCJib3JkZXJSYWRpdXMiLCJoaWRlTW9iaWxlIiwiSW1hZ2VzQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFlQSxxRUFBZjtBQUFBO0FBQUE7QUFBQSwwS0FHWTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLG1CQUFrQkEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQTlCLG1CQUE2Q0YsS0FBSyxDQUFDQyxLQUFOLENBQVlFLEtBQXpEO0FBQUEsQ0FIWixFQUlhO0FBQUEsTUFBR0gsS0FBSCxTQUFHQSxLQUFIO0FBQUEscUJBQW9CQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FBaEM7QUFBQSxDQUpiLEVBT0k7QUFBQSxNQUFHQyxVQUFILFNBQUdBLFVBQUg7QUFBQSxTQUNBQSxVQUFVLElBQ1ZDLHNEQURVLDREQURWO0FBQUEsQ0FQSixFQWV1QjtBQUFBLE1BQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ00sVUFBTixDQUFpQkMsTUFBaEM7QUFBQSxDQWZ2QixFQWtCZ0I7QUFBQSxNQUFHUCxLQUFILFNBQUdBLEtBQUg7QUFBQSxxQkFBb0JBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFoQztBQUFBLENBbEJoQixFQW1CZTtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLHFCQUFvQkEsS0FBSyxD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QU1HLGVBQWUsR0FBR3BCLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHFFQUFyQjtNQUFNb0IsZTtBQU1OLCtEQUFlWCxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hlYWx0aC45ODNlNmE5ZGE2ZTE0YWM2NWYzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5kaXY8eyBpc0NlbnRlcmVkPzogYm9vbGVhbiB9PmBcbiAgbWF4LXdpZHRoOiA2MHJlbTtcbiAgbWluLXdpZHRoOiAzMHJlbTtcbiAgbWFyZ2luOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNwYWNlLm1lZGl1bX0gYXV0byAke3RoZW1lLnNwYWNlLmxhcmdlfWB9O1xuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2UubGFyZ2V9YH07XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuXG4gICR7KHsgaXNDZW50ZXJlZCB9KSA9PlxuICAgIGlzQ2VudGVyZWQgJiZcbiAgICBjc3NgXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50Lm1vYmlsZX0pIHtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMCAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2UubWVkaXVtfWB9O1xuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gYDAgJHt0aGVtZS5zcGFjZS5tZWRpdW19YH07XG4gIH1cbmA7XG4iLCJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdjb21wb25lbnRzJztcblxuY29uc3QgSGVhbHRoOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgdGl0bGU9XCJaaGVsYW4gQ2FyZGlnYW5zIC0gSGVhbHRoXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJIZWFsdGggaW5mb3JtYXRpb24gb2YgWmhlbGFuIENhcmRpZ2Fucy5cIlxuICAgICAgICBjYW5vbmljYWw9XCJodHRwczovL3d3dy56aGVsYW4uY2EvaGVhbHRoXCJcbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdGl0bGU6ICdaaGVsYW4gQ2FyZGlnYW5zIC0gSGVhbHRoJyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hlYWx0aCBpbmZvcm1hdGlvbiBvZiBaaGVsYW4gQ2FyZGlnYW5zLicsXG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuemhlbGFuLmNhL2hlYWx0aCcsXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8SW1hZ2VzQ29udGFpbmVyPlxuICAgICAgICA8RG9nZ3lJbWcgc3JjPVwiaW1hZ2VzL2Jvb2xhMi5qcGdcIiBhbHQ9XCJCb29sYSBwb3J0cmFpdFwiIC8+XG4gICAgICA8L0ltYWdlc0NvbnRhaW5lcj5cblxuICAgICAgPEhlYWx0aEJvZHk+XG4gICAgICAgIEkgYW0gaGFwcHkgdG8gcmVwb3J0IHRoYXQgb3VyIGdpcmwgQm9vbGEgYWthIENBTkNIIE1ha3NoZXJyaSBCYWl5YSBNb3JuYSBDQSwgU0RJTiwgUyBoYXNcbiAgICAgICAgZ3JlYXQgZ2VuZXRpYyBoZWFsdGggcmVzdWx0cyBhbmQgT3J0aG9wZWRpYyBGZWRlcmF0aW9uIG9mIEFtZXJpY2EgKE9GQSkgcXVhbGlmaWVkIGhlciBmb3IgYVxuICAgICAgICBDSElDIzE1NDA1NS5cbiAgICAgICAgPFNwYWNlclNlY3Rpb24+XG4gICAgICAgICAgQm9vbGEmYXBvcztzIE9GQSBwcm9maWxlIGlzIG9wZW4gdG8gdGhlIHB1YmxpYyBhbmQgY2FuIGJlIHNlZW4gaGVyZTpcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm9mYS5vcmcvYWR2YW5jZWQtc2VhcmNoP2Y9c3ImYXBwbnVtPTIxNjk5ODdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIGh0dHBzOi8vd3d3Lm9mYS5vcmcvYWR2YW5jZWQtc2VhcmNoP2Y9c3ImYXBwbnVtPTIxNjk5ODdcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvU3BhY2VyU2VjdGlvbj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5ETSAtIENsZWFyPC9saT5cbiAgICAgICAgICA8bGk+UHJhIC0gQ2xlYXI8L2xpPlxuICAgICAgICAgIDxsaT5FSUMgLSBDbGVhcjwvbGk+XG4gICAgICAgICAgPGxpPkZsdWZmeSAtIENsZWFyPC9saT5cbiAgICAgICAgICA8bGk+RS1Mb2N1cyAtQ2xlYXI8L2xpPlxuICAgICAgICAgIDxsaT5FbGJvd3MgLSBOb3JtYWw8L2xpPlxuICAgICAgICAgIDxsaT5IaXBzIC0gR09PRDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L0hlYWx0aEJvZHk+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5jb25zdCBTcGFjZXJTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNwYWNlLm1lZGl1bX0gMGB9O1xuYDtcbmNvbnN0IEhlYWx0aEJvZHkgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNlLmxhcmdlfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3Iud2hpdGV9O1xuYDtcbmNvbnN0IERvZ2d5SW1nID0gc3R5bGVkLmltZzx7IGhpZGVNb2JpbGU/OiBib29sZWFuIH0+YFxuICB3aWR0aDogNDAlO1xuICBtYXgtd2lkdGg6IDMyNXB4O1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJvcmRlclJhZGl1c307XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludC5tb2JpbGV9KSB7XG4gICAgZGlzcGxheTogJHsoeyBoaWRlTW9iaWxlIH0pID0+IChoaWRlTW9iaWxlID8gJ25vbmUnIDogJ2Jsb2NrJyl9O1xuICB9XG5gO1xuY29uc3QgSW1hZ2VzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFsdGg7XG4iXSwic291cmNlUm9vdCI6IiJ9