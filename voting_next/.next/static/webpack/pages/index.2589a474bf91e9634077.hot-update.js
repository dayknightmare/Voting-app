webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navBar.tsx":
/*!*******************************!*\
  !*** ./components/navBar.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\fabio\\Documents\\vitrine\\voting-app\\voting_next\\components\\navBar.tsx";


function Nav(props) {
  var _this = this;

  var colors = props.colors,
      itens = props.itens;
  var availables = ["button", 'li', 'a'];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "top__menu",
    style: {
      backgroundColor: colors || "#fff"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: itens.map(function (e) {
        return availables.includes(e.type) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [e.type.toLowerCase() == "a" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: e.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: e.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 85
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 65
          }, _this) : null, e.type.toLowerCase() == "li" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: e.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 66
          }, _this) : null, e.type.toLowerCase() == "button" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
            href: e.link,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "pub only__border",
              children: e.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 90
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 70
          }, _this) : null]
        }, void 0, true) : null;
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

_c = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c;

$RefreshReg$(_c, "Nav");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZCYXIudHN4Il0sIm5hbWVzIjpbIk5hdiIsInByb3BzIiwiY29sb3JzIiwiaXRlbnMiLCJhdmFpbGFibGVzIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiZSIsImluY2x1ZGVzIiwidHlwZSIsInRvTG93ZXJDYXNlIiwibGluayIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFtQjtBQUFBOztBQUFBLE1BQ1JDLE1BRFEsR0FDU0QsS0FEVCxDQUNSQyxNQURRO0FBQUEsTUFDQUMsS0FEQSxHQUNTRixLQURULENBQ0FFLEtBREE7QUFFZixNQUFNQyxVQUFVLEdBQUcsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixHQUFqQixDQUFuQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUVILE1BQU0sSUFBSTtBQUE1QixLQUFsQztBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsZ0JBRVFDLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFDLENBQUM7QUFBQSxlQUNQSCxVQUFVLENBQUNJLFFBQVgsQ0FBb0JELENBQUMsQ0FBQ0UsSUFBdEIsaUJBQ0k7QUFBQSxxQkFDS0YsQ0FBQyxDQUFDRSxJQUFGLENBQU9DLFdBQVAsTUFBd0IsR0FBeEIsZ0JBQStCLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRUgsQ0FBQyxDQUFDSSxJQUFkO0FBQUEsbUNBQW9CO0FBQUEsd0JBQUtKLENBQUMsQ0FBQ0s7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQS9CLEdBQWdGLElBRHJGLEVBRUtMLENBQUMsQ0FBQ0UsSUFBRixDQUFPQyxXQUFQLE1BQXdCLElBQXhCLGdCQUFnQztBQUFBLHNCQUFLSCxDQUFDLENBQUNLO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBaEMsR0FBc0QsSUFGM0QsRUFHS0wsQ0FBQyxDQUFDRSxJQUFGLENBQU9DLFdBQVAsTUFBd0IsUUFBeEIsZ0JBQW9DLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRUgsQ0FBQyxDQUFDSSxJQUFkO0FBQUEsbUNBQW9CO0FBQVEsdUJBQVMsRUFBQyxrQkFBbEI7QUFBQSx3QkFBc0NKLENBQUMsQ0FBQ0s7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFwQyxHQUEwSCxJQUgvSDtBQUFBLHdCQURKLEdBTUssSUFQRTtBQUFBLE9BQVg7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFtQkg7O0tBdkJRWixHO0FBeUJNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNTg5YTQ3NGJmOTFlOTYzNDA3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gTmF2KHByb3BzKXtcclxuICAgIGNvbnN0IHtjb2xvcnMsIGl0ZW5zfSA9IHByb3BzO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlcyA9IFtcImJ1dHRvblwiLCAnbGknLCAnYSddO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJ0b3BfX21lbnVcIiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogY29sb3JzIHx8IFwiI2ZmZlwifX0+XHJcbiAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW5zLm1hcChlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlcy5pbmNsdWRlcyhlLnR5cGUpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZS50eXBlLnRvTG93ZXJDYXNlKCkgPT0gXCJhXCIgPyAoPExpbmsgaHJlZj17ZS5saW5rfT48bGk+e2UudGV4dH08L2xpPjwvTGluaz4pIDogKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnR5cGUudG9Mb3dlckNhc2UoKSA9PSBcImxpXCIgPyAoPGxpPntlLnRleHR9PC9saT4pIDogKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnR5cGUudG9Mb3dlckNhc2UoKSA9PSBcImJ1dHRvblwiID8gKDxMaW5rIGhyZWY9e2UubGlua30+PGJ1dHRvbiBjbGFzc05hbWU9XCJwdWIgb25seV9fYm9yZGVyXCI+e2UudGV4dH08L2J1dHRvbj48L0xpbms+KSA6IChudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjsiXSwic291cmNlUm9vdCI6IiJ9