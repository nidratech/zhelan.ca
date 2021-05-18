self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar/index.tsx":
/*!*************************************!*\
  !*** ./components/Navbar/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BurgerMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BurgerMenu */ "./components/Navbar/BurgerMenu.tsx");
/* harmony import */ var _CollapseMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CollapseMenu */ "./components/Navbar/CollapseMenu.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "F:\\Projects\\zhelan.ca\\components\\Navbar\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Navbar = function Navbar(_ref) {
  _s();

  var isNavbarOpen = _ref.isNavbarOpen,
      setIsNavbarOpen = _ref.setIsNavbarOpen;

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
      pathname = _useRouter.pathname;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavBar, {
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
              lineNumber: 23,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
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
              href: '/about',
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
                as: "a",
                title: 'About',
                isActive: pathname === '/about',
                children: "About"
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
                lineNumber: 46,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BurgerWrapper, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BurgerMenu__WEBPACK_IMPORTED_MODULE_3__.default, {
            isNavbarOpen: isNavbarOpen,
            setIsNavbarOpen: setIsNavbarOpen
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CollapseMenu__WEBPACK_IMPORTED_MODULE_4__.default, {
      isNavbarOpen: isNavbarOpen,
      setIsNavbarOpen: setIsNavbarOpen
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Navbar, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Navbar;
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.a.withConfig({
  displayName: "Navbar__NavItem",
  componentId: "sc-21zoc0-0"
})(["display:flex;padding:0 ", ";color:", ";align-items:center;transition:all ", ";:hover{color:", ";}@media (max-width:", "){padding:0;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.medium;
}, function (_ref3) {
  var isActive = _ref3.isActive,
      theme = _ref3.theme;
  return isActive ? theme.color.brand : theme.color.grey;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.transitionTime;
}, function (_ref5) {
  var isActive = _ref5.isActive,
      theme = _ref5.theme;
  return isActive ? (0,polished__WEBPACK_IMPORTED_MODULE_6__.darken)(0.05, theme.color.brand) : theme.color.brand;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.breakpoint.mobile;
});
_c2 = NavItem;
var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.nav.withConfig({
  displayName: "Navbar__NavBar",
  componentId: "sc-21zoc0-1"
})(["position:fixed;width:100%;top:0;left:0;z-index:1;"]);
_c3 = NavBar;
var FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "Navbar__FlexContainer",
  componentId: "sc-21zoc0-2"
})(["max-width:120rem;display:flex;margin:auto;justify-content:space-between;padding:0 ", ";height:", ";background:", ";@media (max-width:", "){padding:", ";}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.space.medium;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.space.navBarHeight;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.background;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.breakpoint.mobile;
}, function (_ref11) {
  var theme = _ref11.theme;
  return "0 ".concat(theme.space.small);
});
_c4 = FlexContainer;
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.ul.withConfig({
  displayName: "Navbar__NavLinks",
  componentId: "sc-21zoc0-3"
})(["justify-self:end;list-style-type:none;margin:auto 0;display:flex;align-items:center;@media (max-width:", "){display:none;}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.breakpoint.mobile;
});
_c5 = NavLinks;
var BurgerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "Navbar__BurgerWrapper",
  componentId: "sc-21zoc0-4"
})(["margin:auto 0;@media (min-width:", "){display:none;}"], function (_ref13) {
  var theme = _ref13.theme;
  return theme.breakpoint.mobile;
});
_c6 = BurgerWrapper;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "NavItem");
$RefreshReg$(_c3, "NavBar");
$RefreshReg$(_c4, "FlexContainer");
$RefreshReg$(_c5, "NavLinks");
$RefreshReg$(_c6, "BurgerWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsImlzTmF2YmFyT3BlbiIsInNldElzTmF2YmFyT3BlbiIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiTmF2SXRlbSIsInN0eWxlZCIsInRoZW1lIiwic3BhY2UiLCJtZWRpdW0iLCJpc0FjdGl2ZSIsImNvbG9yIiwiYnJhbmQiLCJncmV5IiwidHJhbnNpdGlvblRpbWUiLCJkYXJrZW4iLCJicmVha3BvaW50IiwibW9iaWxlIiwiTmF2QmFyIiwiRmxleENvbnRhaW5lciIsIm5hdkJhckhlaWdodCIsImJhY2tncm91bmQiLCJzbWFsbCIsIk5hdkxpbmtzIiwiQnVyZ2VyV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFPQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEyRDtBQUFBOztBQUFBLE1BQXhEQyxZQUF3RCxRQUF4REEsWUFBd0Q7QUFBQSxNQUExQ0MsZUFBMEMsUUFBMUNBLGVBQTBDOztBQUFBLG1CQUNuREMsc0RBQVMsRUFEMEM7QUFBQSxNQUNoRUMsUUFEZ0UsY0FDaEVBLFFBRGdFOztBQUd4RSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLE1BQUQ7QUFBQSw2QkFDRSw4REFBQyxhQUFEO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUUsR0FBWjtBQUFpQixrQkFBUSxNQUF6QjtBQUFBLGlDQUNFLDhEQUFDLE9BQUQ7QUFBUyxjQUFFLEVBQUMsR0FBWjtBQUFnQixpQkFBSyxFQUFFLGtCQUF2QjtBQUEyQywwQkFBWSxrQkFBdkQ7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEs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LEdBQUdaLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHlEQUFaO01BQU1ZLE07QUFPTixJQUFNQyxhQUFhLEdBQUdiLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGtLQUtKO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQTNCO0FBQUEsQ0FMSSxFQU1QO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxLQUFOLENBQVlZLFlBQTNCO0FBQUEsQ0FOTyxFQU9IO0FBQUEsTUFBR2IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSSxLQUFOLENBQVlVLFVBQTNCO0FBQUEsQ0FQRyxFQVNJO0FBQUEsTUFBR2QsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDUyxVQUFOLENBQWlCQyxNQUFoQztBQUFBLENBVEosRUFVSjtBQUFBLE1BQUdWLEtBQUgsVUFBR0EsS0FBSDtBQUFBLHFCQUFvQkEsS0FBSyxDQUFDQyxLQUFOLENBQVljLEtBQWhDO0FBQUEsQ0FWSSxDQUFuQjtNQUFNSCxhO0FBYU4sSUFBTUksUUFBUSxHQUFHakIsb0VBQUg7QUFBQTtBQUFBO0FBQUEsbUlBT1M7QUFBQSxNQUFHQyxLQUFILFVBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNTLFVBQU4sQ0FBaUJDLE1BQWhDO0FBQUEsQ0FQVCxDQUFkO01BQU1NLFE7QUFXTixJQUFNQyxhQUFhLEdBQUdsQixxRUFBSDtBQUFBO0FBQUE7QUFBQSw2REFHSTtBQUFBLE1BQUdDLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1MsVUFBTixDQUFpQkMsTUFBaEM7QUFBQSxDQUhKLENBQW5CO01BQU1PLGE7QUFRTiwrREFBZXhCLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41N2E1ZjJkNjM5ZWFkMDU1NzcyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IEJ1cmdlck1lbnUgZnJvbSAnLi9CdXJnZXJNZW51JztcclxuaW1wb3J0IENvbGxhcHNlTWVudSBmcm9tICcuL0NvbGxhcHNlTWVudSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlzTmF2YmFyT3BlbjogYm9vbGVhbjtcclxuICBzZXRJc05hdmJhck9wZW46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgTmF2YmFyID0gKHsgaXNOYXZiYXJPcGVuLCBzZXRJc05hdmJhck9wZW4gfTogUHJvcHMpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2QmFyPlxyXG4gICAgICAgIDxGbGV4Q29udGFpbmVyPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydaaGVsYW4gQ2FyZGlnYW5zJ30gYXJpYS1sYWJlbD17J1poZWxhbiBDYXJkaWdhbnMnfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9uYXYtaWNvbi5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPE5hdkxpbmtzPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnSG9tZSd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy8nfT5cclxuICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2Fib3V0J30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J0Fib3V0J30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2Fib3V0J30+XHJcbiAgICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHVwcGllcyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydQdXBwaWVzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL3B1cHBpZXMnfT5cclxuICAgICAgICAgICAgICAgICAgUHVwcGllc1xyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvTmF2TGlua3M+XHJcblxyXG4gICAgICAgICAgPEJ1cmdlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxCdXJnZXJNZW51IGlzTmF2YmFyT3Blbj17aXNOYXZiYXJPcGVufSBzZXRJc05hdmJhck9wZW49e3NldElzTmF2YmFyT3Blbn0gLz5cclxuICAgICAgICAgIDwvQnVyZ2VyV3JhcHBlcj5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgIDwvTmF2QmFyPlxyXG5cclxuICAgICAgPENvbGxhcHNlTWVudSBpc05hdmJhck9wZW49e2lzTmF2YmFyT3Blbn0gc2V0SXNOYXZiYXJPcGVuPXtzZXRJc05hdmJhck9wZW59IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNlLm1lZGl1bX07XHJcbiAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+IChpc0FjdGl2ZSA/IHRoZW1lLmNvbG9yLmJyYW5kIDogdGhlbWUuY29sb3IuZ3JleSl9O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudHJhbnNpdGlvblRpbWV9O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+XHJcbiAgICAgIGlzQWN0aXZlID8gZGFya2VuKDAuMDUsIHRoZW1lLmNvbG9yLmJyYW5kKSA6IHRoZW1lLmNvbG9yLmJyYW5kfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnQubW9iaWxlfSkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5uYXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbmA7XHJcbmNvbnN0IEZsZXhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2UubWVkaXVtfTtcclxuICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2UubmF2QmFySGVpZ2h0fTtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmJhY2tncm91bmR9O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50Lm1vYmlsZX0pIHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gYDAgJHt0aGVtZS5zcGFjZS5zbWFsbH1gfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLnVsYFxyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IGF1dG8gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnQubW9iaWxlfSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEJ1cmdlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogYXV0byAwO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50Lm1vYmlsZX0pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9