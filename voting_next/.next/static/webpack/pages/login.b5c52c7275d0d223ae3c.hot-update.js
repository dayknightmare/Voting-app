webpackHotUpdate_N_E("pages/login",{

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
      children: [itens.map(function (e) {
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
          }, _this) : null]
        }, void 0, true) : null;
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "pub only__border",
          children: "Fazer login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZCYXIudHN4Il0sIm5hbWVzIjpbIk5hdiIsInByb3BzIiwiY29sb3JzIiwiaXRlbnMiLCJhdmFpbGFibGVzIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwiZSIsImluY2x1ZGVzIiwidHlwZSIsInRvTG93ZXJDYXNlIiwibGluayIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFtQjtBQUFBOztBQUFBLE1BQ1JDLE1BRFEsR0FDU0QsS0FEVCxDQUNSQyxNQURRO0FBQUEsTUFDQUMsS0FEQSxHQUNTRixLQURULENBQ0FFLEtBREE7QUFFZixNQUFNQyxVQUFVLEdBQUcsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixHQUFqQixDQUFuQjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBMkIsU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUVILE1BQU0sSUFBSTtBQUE1QixLQUFsQztBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsaUJBRVFDLEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUFDLENBQUM7QUFBQSxlQUNQSCxVQUFVLENBQUNJLFFBQVgsQ0FBb0JELENBQUMsQ0FBQ0UsSUFBdEIsaUJBQ0k7QUFBQSxxQkFDS0YsQ0FBQyxDQUFDRSxJQUFGLENBQU9DLFdBQVAsTUFBd0IsR0FBeEIsZ0JBQStCLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRUgsQ0FBQyxDQUFDSSxJQUFkO0FBQUEsbUNBQW9CO0FBQUEsd0JBQUtKLENBQUMsQ0FBQ0s7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQS9CLEdBQWdGLElBRHJGLEVBRUtMLENBQUMsQ0FBQ0UsSUFBRixDQUFPQyxXQUFQLE1BQXdCLElBQXhCLGdCQUFnQztBQUFBLHNCQUFLSCxDQUFDLENBQUNLO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBaEMsR0FBc0QsSUFGM0Q7QUFBQSx3QkFESixHQU1LLElBUEU7QUFBQSxPQUFYLENBRlIsZUFZSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQ0k7QUFBUSxtQkFBUyxFQUFDLGtCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFCSDs7S0F6QlFaLEc7QUEyQk1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmI1YzUyYzcyNzVkMGQyMjNhZTNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5mdW5jdGlvbiBOYXYocHJvcHMpe1xyXG4gICAgY29uc3Qge2NvbG9ycywgaXRlbnN9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBhdmFpbGFibGVzID0gW1wiYnV0dG9uXCIsICdsaScsICdhJ107XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInRvcF9fbWVudVwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBjb2xvcnMgfHwgXCIjZmZmXCJ9fT5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbnMubWFwKGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVzLmluY2x1ZGVzKGUudHlwZSkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLnR5cGUudG9Mb3dlckNhc2UoKSA9PSBcImFcIiA/ICg8TGluayBocmVmPXtlLmxpbmt9PjxsaT57ZS50ZXh0fTwvbGk+PC9MaW5rPikgOiAobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2UudHlwZS50b0xvd2VyQ2FzZSgpID09IFwibGlcIiA/ICg8bGk+e2UudGV4dH08L2xpPikgOiAobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtlLnR5cGUudG9Mb3dlckNhc2UoKSA9PSBcImJ1dHRvblwiID8gKDxMaW5rIGhyZWY9e2UubGlua30+PGJ1dHRvbiBjbGFzc05hbWU9XCJwdWJcIj48e2UudGV4dH08L2J1dHRvbj48L0xpbms+KSA6IChudWxsKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwdWIgb25seV9fYm9yZGVyXCI+RmF6ZXIgbG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2OyJdLCJzb3VyY2VSb290IjoiIn0=