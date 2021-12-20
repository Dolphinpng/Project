/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _contatns_contants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contatns/contants */ \"./src/contatns/contants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\90538\\\\Desktop\\\\reactweb\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TOTAL_CAROUSEL_COUNT = _contatns_contants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length;\n\nconst TimeLine = () => {\n  _s();\n\n  const {\n    0: activeItem,\n    1: setActiveItem\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  const handleClick = (e, i) => {\n    e.preventDefault();\n\n    if (carouselRef.current) {\n      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _contatns_contants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length));\n      scroll(carouselRef.current, scrollLeft);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    id: \"about\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {\n      children: \"About Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n      children: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, ipsa impedit. Aliquid excepturi quae aperiam!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselContainer, {\n      ref: carouselRef,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: _contatns_contants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselMobileScrollNode, {\n          final: index === TOTAL_CAROUSEL_COUNT - 1,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselItem, {\n            index: index,\n            id: `carousel__item-${index}`,\n            active: activeItem,\n            onClick: e => handleClick(e, index)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 22\n          }, undefined)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 23\n        }, undefined))\n      }, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 14\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(TimeLine, \"BeWKxKc1qZViFSD7/MFNqtRFzqM=\");\n\n_c = TimeLine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TimeLine);\n\nvar _c;\n\n$RefreshReg$(_c, \"TimeLine\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1rQixvQkFBb0IsR0FBSUQsbUVBQTlCOztBQUdBLE1BQU1HLFFBQVEsR0FBRyxNQUFNO0FBQUE7O0FBQ25CLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QnJCLCtDQUFRLENBQUMsQ0FBRCxDQUE1QztBQUNBLFFBQU1zQixXQUFXLEdBQUdyQiw2Q0FBTSxFQUExQjs7QUFHQSxRQUFNc0IsV0FBVyxHQUFHLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxLQUFTO0FBQ3pCRCxJQUFBQSxDQUFDLENBQUNFLGNBQUY7O0FBRUEsUUFBR0osV0FBVyxDQUFDSyxPQUFmLEVBQXdCO0FBQ3BCLFlBQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdSLFdBQVcsQ0FBQ0ssT0FBWixDQUFvQkksV0FBcEIsR0FBa0MsR0FBbEMsSUFBeUNOLENBQUMsR0FBR1QsbUVBQTdDLENBQVgsQ0FBbkI7QUFFQWdCLE1BQUFBLE1BQU0sQ0FBQ1YsV0FBVyxDQUFDSyxPQUFiLEVBQXNCQyxVQUF0QixDQUFOO0FBQ0g7QUFDSixHQVJEOztBQWVBLHNCQUVJLDhEQUFDLDZEQUFEO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBQSw0QkFDSSw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBS0ssOERBQUMsOERBQUQ7QUFBbUIsU0FBRyxFQUFFTixXQUF4QjtBQUFBLDZCQUNJO0FBQUEsa0JBQ0VOLGdFQUFBLENBQWlCLENBQUNrQixJQUFELEVBQU1DLEtBQU4sa0JBQ2QsOERBQUMscUVBQUQ7QUFFQyxlQUFLLEVBQUdBLEtBQUssS0FBS2xCLG9CQUFvQixHQUFFLENBRnpDO0FBQUEsaUNBR0QsOERBQUMseURBQUQ7QUFDQyxpQkFBSyxFQUFHa0IsS0FEVDtBQUVDLGNBQUUsRUFBSSxrQkFBaUJBLEtBQU0sRUFGOUI7QUFHQyxrQkFBTSxFQUFFZixVQUhUO0FBSUMsbUJBQU8sRUFBSUksQ0FBRCxJQUFPRCxXQUFXLENBQUNDLENBQUQsRUFBR1csS0FBSDtBQUo3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEMsV0FDTUEsS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURIO0FBREY7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBOEJILENBbEREOztHQUFNaEI7O0tBQUFBO0FBb0ROLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lLmpzPzkxMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlLHVzZVJlZix1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgQ2Fyb3VzZWxCdXR0b24sIENhcm91c2VsQnV0dG9uRG90LCBDYXJvdXNlbEJ1dHRvbnMsIENhcm91c2VsQ29udGFpbmVyLCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsSXRlbUltZywgQ2Fyb3VzZWxJdGVtVGV4dCwgQ2Fyb3VzZWxJdGVtVGl0bGUsIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSB9IGZyb20gJy4vVGltZUxpbmVTdHlsZXMnO1xyXG5pbXBvcnQge1NlY3Rpb24sU2VjdGlvbkRpdmlkZXIsU2VjdGlvblRleHQsU2VjdGlvblRpdGxlfSBmcm9tIFwiLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHNcIlxyXG5pbXBvcnQge1RpbWVMaW5lRGF0YX0gZnJvbSBcIi4uLy4uL2NvbnRhdG5zL2NvbnRhbnRzXCJcclxuXHJcbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gIFRpbWVMaW5lRGF0YS5sZW5ndGg7XHJcblxyXG5cclxuY29uc3QgVGltZUxpbmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKVxyXG4gICAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKVxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsaSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgICAgICBpZihjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIFRpbWVMaW5lRGF0YS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8U2VjdGlvbiBpZD0nYWJvdXQnPlxyXG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlPkFib3V0IE1lPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBcmNoaXRlY3RvLCBpcHNhIGltcGVkaXQuIEFsaXF1aWQgZXhjZXB0dXJpIHF1YWUgYXBlcmlhbSFcclxuICAgICAgICAgICAgPC9TZWN0aW9uVGV4dD5cclxuICAgICAgICAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSA+XHJcbiAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgZmluYWw9IHtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLTF9ID5cclxuICAgICAgICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXg9IHtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSB7YGNhcm91c2VsX19pdGVtLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlSXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9IHsoZSkgPT4gaGFuZGxlQ2xpY2soZSxpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVMaW5lXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQ2Fyb3VzZWxCdXR0b24iLCJDYXJvdXNlbEJ1dHRvbkRvdCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiU2VjdGlvbiIsIlNlY3Rpb25EaXZpZGVyIiwiU2VjdGlvblRleHQiLCJTZWN0aW9uVGl0bGUiLCJUaW1lTGluZURhdGEiLCJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsImxlbmd0aCIsIlRpbWVMaW5lIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJzY3JvbGwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n");

/***/ }),

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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