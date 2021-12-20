"use strict";
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _contatns_contants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contatns/contants */ \"./src/contatns/contants.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"C:\\\\Users\\\\90538\\\\Desktop\\\\reactweb\\\\src\\\\components\\\\TimeLine\\\\TimeLine.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TOTAL_CAROUSEL_COUNT = _contatns_contants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length;\n\nconst Timeline = () => {\n  _s();\n\n  const {\n    0: activeItem,\n    1: setActiveItem\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  const scroll = (node, left) => {\n    return node.scrollTo({\n      left,\n      behavior: 'smooth'\n    });\n  };\n\n  const handleClick = (e, i) => {\n    e.preventDefault();\n\n    if (carouselRef.current) {\n      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _contatns_contants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length));\n      scroll(carouselRef.current, scrollLeft);\n    }\n  };\n\n  const handleScroll = () => {\n    if (carouselRef.current) {\n      const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _contatns_contants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.length);\n      setActiveItem(index);\n    }\n  }; // snap back to beginning of scroll when window is resized\n  // avoids a bug where content is covered up if coming from smaller screen\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const handleResize = () => {\n      scroll(carouselRef.current, 0);\n    };\n\n    window.addEventListener('resize', handleResize);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {\n    id: \"about\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {\n      children: \"About Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {\n      children: \"The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselContainer, {\n      ref: carouselRef,\n      onScroll: handleScroll,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: _contatns_contants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselMobileScrollNode, {\n          final: index === TOTAL_CAROUSEL_COUNT - 1,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselItem, {\n            index: index,\n            id: `carousel__item-${index}`,\n            active: activeItem,\n            onClick: e => handleClick(e, index),\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselItemTitle, {\n              children: [`${item.year}`, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselItemImg, {\n                width: \"208\",\n                height: \"6\",\n                viewBox: \"0 0 208 6\",\n                fill: \"none\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"path\", {\n                  \"fill-rule\": \"evenodd\",\n                  \"clip-rule\": \"evenodd\",\n                  d: \"M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z\",\n                  fill: \"url(#paint0_linear)\",\n                  \"fill-opacity\": \"0.33\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 21\n                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"defs\", {\n                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"linearGradient\", {\n                    id: \"paint0_linear\",\n                    x1: \"-4.30412e-10\",\n                    y1: \"0.5\",\n                    x2: \"208\",\n                    y2: \"0.500295\",\n                    gradientUnits: \"userSpaceOnUse\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"stop\", {\n                      \"stop-color\": \"white\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 85,\n                      columnNumber: 25\n                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"stop\", {\n                      offset: \"0.79478\",\n                      \"stop-color\": \"white\",\n                      \"stop-opacity\": \"0\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 86,\n                      columnNumber: 25\n                    }, undefined)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 78,\n                    columnNumber: 23\n                  }, undefined)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 21\n                }, undefined)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 19\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselItemText, {\n              children: item.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }, undefined)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselButtons, {\n      children: _contatns_contants__WEBPACK_IMPORTED_MODULE_3__.TimeLineData.map((item, index) => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselButton, {\n          index: index,\n          active: activeItem,\n          onClick: e => handleClick(e, index),\n          type: \"button\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_1__.CarouselButtonDot, {\n            active: activeItem\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 15\n          }, undefined)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 13\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQ0UsOERBQUMsMkRBQUQ7QUFFRSxlQUFLLEVBQUVBLEtBRlQ7QUFHRSxnQkFBTSxFQUFFbEIsVUFIVjtBQUlFLGlCQUFPLEVBQUdTLENBQUQsSUFBT0QsV0FBVyxDQUFDQyxDQUFELEVBQUlTLEtBQUosQ0FKN0I7QUFLRSxjQUFJLEVBQUMsUUFMUDtBQUFBLGlDQU1FLDhEQUFDLDhEQUFEO0FBQW1CLGtCQUFNLEVBQUVsQjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsV0FDT2tCLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQVVELE9BWEE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZERixlQXFFRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlFRCxDQTdHRDs7R0FBTW5COztLQUFBQTtBQStHTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcz85MTA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDYXJvdXNlbEJ1dHRvbiwgQ2Fyb3VzZWxCdXR0b25Eb3QsIENhcm91c2VsQnV0dG9ucywgQ2Fyb3VzZWxDb250YWluZXIsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxJdGVtSW1nLCBDYXJvdXNlbEl0ZW1UZXh0LCBDYXJvdXNlbEl0ZW1UaXRsZSwgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIH0gZnJvbSAnLi9UaW1lTGluZVN0eWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tIFwiLi4vLi4vY29udGF0bnMvY29udGFudHNcIlxyXG5cclxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xyXG5cclxuY29uc3QgVGltZWxpbmUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcclxuICAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgaSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBNYXRoLmZsb29yKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcgKiAoaSAvIFRpbWVMaW5lRGF0YS5sZW5ndGgpKTtcclxuICAgICAgXHJcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC8gKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqIFRpbWVMaW5lRGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgc2V0QWN0aXZlSXRlbShpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBzbmFwIGJhY2sgdG8gYmVnaW5uaW5nIG9mIHNjcm9sbCB3aGVuIHdpbmRvdyBpcyByZXNpemVkXHJcbiAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XHJcbiAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvbiBpZD1cImFib3V0XCI+XHJcbiAgICAgIDxTZWN0aW9uVGl0bGU+QWJvdXQgTWU8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgPFNlY3Rpb25UZXh0PlxyXG4gICAgICBUaGUgcHVycG9zZSBvZiBKYXZhU2NyaXB0IE1hc3RlcnkgaXMgdG8gaGVscCBhc3BpcmluZyBhbmQgZXN0YWJsaXNoZWQgZGV2ZWxvcGVycyB0byB0YWtlIHRoZWlyIGRldmVsb3BtZW50IHNraWxscyB0byB0aGUgbmV4dCBsZXZlbCBhbmQgYnVpbGQgYXdlc29tZSBhcHBzLlxyXG4gICAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgICA8Q2Fyb3VzZWxDb250YWluZXIgcmVmPXtjYXJvdXNlbFJlZn0gb25TY3JvbGw9e2hhbmRsZVNjcm9sbH0+XHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtUaW1lTGluZURhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBmaW5hbD17aW5kZXggPT09IFRPVEFMX0NBUk9VU0VMX0NPVU5UIC0gMX0+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVxyXG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgaWQ9e2BjYXJvdXNlbF9faXRlbS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT5cclxuICAgICAgICAgICAgICAgICAge2Ake2l0ZW0ueWVhcn1gfVxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA1LjVDMy44ODA3MSA1LjUgNSA0LjM4MDcxIDUgM1YzLjVMMjA4IDMuNTAwMDJWMi41MDAwMkw1IDIuNVYzQzUgMS42MTkyOSAzLjg4MDcxIDAuNSAyLjUgMC41QzEuMTE5MjkgMC41IDAgMS42MTkyOSAwIDNDMCA0LjM4MDcxIDEuMTE5MjkgNS41IDIuNSA1LjVaXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3BhaW50MF9saW5lYXIpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjAuMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRlZnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYWludDBfbGluZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDE9XCItNC4zMDQxMmUtMTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5MT1cIjAuNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgyPVwiMjA4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTI9XCIwLjUwMDI5NVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XHJcbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XHJcbiAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsQnV0dG9uRG90IGFjdGl2ZT17YWN0aXZlSXRlbX0gLz5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbEJ1dHRvbj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWxCdXR0b25zPlxyXG4gICAgICA8U2VjdGlvbkRpdmlkZXIgLz5cclxuICAgIDwvU2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiQ2Fyb3VzZWxCdXR0b24iLCJDYXJvdXNlbEJ1dHRvbkRvdCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQ29udGFpbmVyIiwiQ2Fyb3VzZWxJdGVtIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIiwiU2VjdGlvbiIsIlNlY3Rpb25EaXZpZGVyIiwiU2VjdGlvblRleHQiLCJTZWN0aW9uVGl0bGUiLCJUaW1lTGluZURhdGEiLCJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsImxlbmd0aCIsIlRpbWVsaW5lIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hcCIsIml0ZW0iLCJ5ZWFyIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n");

/***/ })

});