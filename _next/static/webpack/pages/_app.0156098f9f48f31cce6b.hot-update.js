self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar/CollapsedMenu.tsx":
/*!*********************************************!*\
  !*** ./components/Navbar/CollapsedMenu.tsx ***!
  \*********************************************/
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


var _jsxFileName = "F:\\Projects\\zhelan.ca\\components\\Navbar\\CollapsedMenu.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var CollapsedMenu = function CollapsedMenu() {
  _s();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
      pathname = _useRouter.pathname;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavLinks, {
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
          lineNumber: 13,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
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
          lineNumber: 21,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
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
          lineNumber: 29,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_s(CollapsedMenu, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = CollapsedMenu;
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.a.withConfig({
  displayName: "CollapsedMenu__NavItem",
  componentId: "mzqa58-0"
})(["display:flex;padding:0 3vw;color:", ";justify-content:center;min-width:14vw;word-break:keep-all;:hover{color:", ";}"], function (_ref) {
  var isActive = _ref.isActive,
      theme = _ref.theme;
  return isActive ? theme.color.brand : theme.color.grey;
}, function (_ref2) {
  var isActive = _ref2.isActive,
      theme = _ref2.theme;
  return (0,polished__WEBPACK_IMPORTED_MODULE_4__.darken)(0.05, isActive ? theme.color.brand : theme.color.grey);
});
_c2 = NavItem;
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({
  displayName: "CollapsedMenu__NavLinks",
  componentId: "mzqa58-1"
})(["list-style-type:none;padding:", ";display:flex;justify-content:center;@media (min-width:", "){display:none;}"], function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.space.large, " ").concat(theme.space.medium, " ").concat(theme.space.large, " 0");
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.breakpoint.mobile;
});
_c3 = NavLinks;
/* harmony default export */ __webpack_exports__["default"] = (CollapsedMenu);

var _c, _c2, _c3;

$RefreshReg$(_c, "CollapsedMenu");
$RefreshReg$(_c2, "NavItem");
$RefreshReg$(_c3, "NavLinks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvQ29sbGFwc2VkTWVudS50c3giXSwibmFtZXMiOlsiQ29sbGFwc2VkTWVudSIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiTmF2SXRlbSIsInN0eWxlZCIsImlzQWN0aXZlIiwidGhlbWUiLCJjb2xvciIsImJyYW5kIiwiZ3JleSIsImRhcmtlbiIsIk5hdkxpbmtzIiwic3BhY2UiLCJsYXJnZSIsIm1lZGl1bSIsImJyZWFrcG9pbnQiLCJtb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQW1CO0FBQUE7O0FBQUEsbUJBQ2xCQyxzREFBUyxFQURTO0FBQUEsTUFDL0JDLFFBRCtCLGNBQy9CQSxRQUQrQjs7QUFHdkMsc0JBQ0UsOERBQUMsUUFBRDtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUUsR0FBWjtBQUFpQixnQkFBUSxNQUF6QjtBQUFBLCtCQUNFLDhEQUFDLE9BQUQ7QUFBUyxZQUFFLEVBQUMsR0FBWjtBQUFnQixlQUFLLEVBQUUsTUFBdkI7QUFBK0Isa0JBQVEsRUFBRUEsUUFBUSxLQUFLLEdBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVNFO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUUsUUFBWjtBQUFzQixnQkFBUSxNQUE5QjtBQUFBLCtCQUNFLDhEQUFDLE9BQUQ7QUFBUyxZQUFFLEVBQUMsR0FBWjtBQUFnQixlQUFLLEVBQUUsT0FBdkI7QUFBZ0Msa0JBQVEsRUFBRUEsUUFBUSxLQUFLLFFBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURixlQWlCRTtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFLFVBQVo7QUFBd0IsZ0JBQVEsTUFBaEM7QUFBQSwrQkFDRSw4REFBQyxPQUFEO0FBQVMsWUFBRSxFQUFDLEdBQVo7QUFBZ0IsZUFBSyxFQUFFLFNBQXZCO0FBQWtDLGtCQUFRLEVBQUVBLFFBQVEsS0FBSyxVQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBOUJEOztHQUFNRixhO1VBQ2lCQyxrRDs7O0tBRGpCRCxhO0FBZ0NOLElBQU1HLE9BQU8sR0FBR0MsbUVBQUg7QUFBQTtBQUFBO0FBQUEsNEhBR0Y7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxTQUEwQkQsUUFBUSxHQUFHQyxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBZixHQUF1QkYsS0FBSyxDQUFDQyxLQUFOLENBQVlFLElBQXJFO0FBQUEsQ0FIRSxFQVNBO0FBQUEsTUFBR0osUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsU0FDUEksZ0RBQU0sQ0FBQyxJQUFELEVBQU9MLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQWYsR0FBdUJGLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxJQUFsRCxDQURDO0FBQUEsQ0FUQSxDQUFiO01BQU1OLE87QUFhTixJQUFNUSxRQUFRLEdBQUdQLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHFIQUVEO0FBQUEsTUFBR0UsS0FBSCxTQUFHQSxLQUFIO0FBQUEsbUJBQWtCQSxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsS0FBOUIsY0FBdUNQLEtBQUssQ0FBQ00sS0FBTixDQUFZRSxNQUFuRCxjQUE2RFIsS0FBSyxDQUFDTSxLQUFOLENBQVlDLEtBQXpFO0FBQUEsQ0FGQyxFQU1TO0FBQUEsTUFBR1AsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDUyxVQUFOLENBQWlCQyxNQUFoQztBQUFBLENBTlQsQ0FBZDtNQUFNTCxRO0FBV04sK0RBQWVYLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMTU2MDk4ZjlmNDhmMzFjY2U2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgQ29sbGFwc2VkTWVudSA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2TGlua3M+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydIb21lJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9PlxyXG4gICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG5cclxuICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9eycvYWJvdXQnfSBwYXNzSHJlZj5cclxuICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnQWJvdXQnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvYWJvdXQnfT5cclxuICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcblxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgaHJlZj17Jy9wdXBwaWVzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J1B1cHBpZXMnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvcHVwcGllcyd9PlxyXG4gICAgICAgICAgICBQdXBwaWVzXHJcbiAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC9OYXZMaW5rcz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAzdnc7XHJcbiAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+IChpc0FjdGl2ZSA/IHRoZW1lLmNvbG9yLmJyYW5kIDogdGhlbWUuY29sb3IuZ3JleSl9O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMTR2dztcclxuICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxyXG4gICAgICBkYXJrZW4oMC4wNSwgaXNBY3RpdmUgPyB0aGVtZS5jb2xvci5icmFuZCA6IHRoZW1lLmNvbG9yLmdyZXkpfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNwYWNlLmxhcmdlfSAke3RoZW1lLnNwYWNlLm1lZGl1bX0gJHt0aGVtZS5zcGFjZS5sYXJnZX0gMGB9O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnQubW9iaWxlfSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZWRNZW51O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9