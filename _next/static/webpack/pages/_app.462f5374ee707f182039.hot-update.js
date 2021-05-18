self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\Projects\\zhelan.ca\\components\\Navbar.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var Navbar = function Navbar() {
  _s();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
      pathname = _useRouter.pathname;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBar, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlexContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: '/',
          passHref: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
            as: "a",
            title: 'Zhelan Cardigans',
            "aria-label": 'Zhelan Cardigans',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
              src: "images/nav-icon.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLinks, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: '/',
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
                as: "a",
                title: 'Home',
                isActive: pathname === '/',
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: '/about',
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
                as: "a",
                title: 'About',
                isActive: pathname === '/about',
                children: "About"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 30,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: '/puppies',
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
                as: "a",
                title: 'Puppies',
                isActive: pathname === '/puppies',
                children: "Puppies"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Navbar, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Navbar;
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.a.withConfig({
  displayName: "Navbar__NavItem",
  componentId: "k52eh5-0"
})(["display:flex;padding:0 ", ";color:", ";align-items:center;transition:all ", ";word-break:keep-all;:hover{color:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.space.medium;
}, function (_ref2) {
  var isActive = _ref2.isActive,
      theme = _ref2.theme;
  return isActive ? theme.color.brand : theme.color.grey;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.transitionTime;
}, function (_ref4) {
  var isActive = _ref4.isActive,
      theme = _ref4.theme;
  return isActive ? (0,polished__WEBPACK_IMPORTED_MODULE_4__.darken)(0.05, theme.color.brand) : theme.color.brand;
});
_c2 = NavItem;
var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.nav.withConfig({
  displayName: "Navbar__NavBar",
  componentId: "k52eh5-1"
})(["position:fixed;width:100%;top:0;left:0;z-index:999;"]);
_c3 = NavBar;
var FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "Navbar__FlexContainer",
  componentId: "k52eh5-2"
})(["max-width:120rem;display:flex;margin:auto;justify-content:space-between;padding:0 ", ";height:", ";background:", ";@media (max-width:", "){padding:", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.space.medium;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.space.navBarHeight;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.background;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.breakpoint.mobile;
}, function (_ref9) {
  var theme = _ref9.theme;
  return "0 ".concat(theme.space.small);
});
_c4 = FlexContainer;
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({
  displayName: "Navbar__NavLinks",
  componentId: "k52eh5-3"
})(["justify-self:end;list-style-type:none;margin:auto 0;display:flex;align-items:center;"]);
_c5 = NavLinks;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "NavItem");
$RefreshReg$(_c3, "NavBar");
$RefreshReg$(_c4, "FlexContainer");
$RefreshReg$(_c5, "NavLinks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiTmF2SXRlbSIsInN0eWxlZCIsInRoZW1lIiwic3BhY2UiLCJtZWRpdW0iLCJpc0FjdGl2ZSIsImNvbG9yIiwiYnJhbmQiLCJncmV5IiwidHJhbnNpdGlvblRpbWUiLCJkYXJrZW4iLCJOYXZCYXIiLCJGbGV4Q29udGFpbmVyIiwibmF2QmFySGVpZ2h0IiwiYmFja2dyb3VuZCIsImJyZWFrcG9pbnQiLCJtb2JpbGUiLCJzbWFsbCIsIk5hdkxpbmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQW1CO0FBQUE7O0FBQUEsbUJBQ1hDLHNEQUFTLEVBREU7QUFBQSxNQUN4QkMsUUFEd0IsY0FDeEJBLFFBRHdCOztBQUdoQyxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLE1BQUQ7QUFBQSw2QkFDRSw4REFBQyxhQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUUsR0FBWjtBQUFpQixrQkFBUSxNQUF6QjtBQUFBLGlDQUNFLDhEQUFDLE9BQUQ7QUFBUyxjQUFFLEVBQUMsR0FBWjtBQUFnQixpQkFBSyxFQUFFLGtCQUF2QjtBQUEyQywwQkFBWSxrQkFBdkQ7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRSw4REFBQyxRQUFEO0FBQUEsa0NBQ0U7QUFBQSxtQ0FDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUUsR0FBWjtBQUFpQixzQkFBUSxNQUF6QjtBQUFBLHFDQUNFLDhEQUFDLE9BQUQ7QUFBUyxrQkFBRSxFQUFD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QUFvQkEsS0FBSyxDQUFDQyxLQUFOLENBQVljLEtBQWhDO0FBQUEsQ0FWSSxDQUFuQjtNQUFNTCxhO0FBYU4sSUFBTU0sUUFBUSxHQUFHakIsb0VBQUg7QUFBQTtBQUFBO0FBQUEsNEZBQWQ7TUFBTWlCLFE7QUFRTiwrREFBZXJCLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NjJmNTM3NGVlNzA3ZjE4MjAzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxOYXZCYXI+XHJcbiAgICAgICAgPEZsZXhDb250YWluZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J1poZWxhbiBDYXJkaWdhbnMnfSBhcmlhLWxhYmVsPXsnWmhlbGFuIENhcmRpZ2Fucyd9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL25hdi1pY29uLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8TmF2TGlua3M+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydIb21lJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9PlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvYWJvdXQnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnQWJvdXQnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnfT5cclxuICAgICAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wdXBwaWVzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J1B1cHBpZXMnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvcHVwcGllcyd9PlxyXG4gICAgICAgICAgICAgICAgICBQdXBwaWVzXHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9OYXZMaW5rcz5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgIDwvTmF2QmFyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYTx7IGlzQWN0aXZlPzogYm9vbGVhbiB9PmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjZS5tZWRpdW19O1xyXG4gIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PiAoaXNBY3RpdmUgPyB0aGVtZS5jb2xvci5icmFuZCA6IHRoZW1lLmNvbG9yLmdyZXkpfTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRyYW5zaXRpb25UaW1lfTtcclxuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxyXG4gICAgICBpc0FjdGl2ZSA/IGRhcmtlbigwLjA1LCB0aGVtZS5jb2xvci5icmFuZCkgOiB0aGVtZS5jb2xvci5icmFuZH07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbmA7XHJcbmNvbnN0IEZsZXhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2UubWVkaXVtfTtcclxuICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2UubmF2QmFySGVpZ2h0fTtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50Lm1vYmlsZX0pIHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbH1gfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLnVsYFxyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IGF1dG8gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=