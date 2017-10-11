/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RootController_1 = __webpack_require__(1);
h5.core.controller('#container', RootController_1.default);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CountUpController_1 = __webpack_require__(2);
var ResetController_1 = __webpack_require__(5);
var rootController = {
    __meta: {
        _countUpController: {
            rootElement: '#counterContainer',
        },
    },
    __name: 'rootController',
    _countUpController: CountUpController_1.default,
    _resetController: ResetController_1.default,
    '{rootElement} resetCount': function (context, $el) {
        this._countUpController.reset();
    },
};
exports.default = rootController;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Counter_1 = __webpack_require__(3);
var counterTemplate = __webpack_require__(4); // tslint:disable-line no-var-requires
var countUpController = {
    __name: 'countUpController',
    _counter: new Counter_1.default(),
    '#countUpBtn click': function () {
        this._counter.increment();
        alert(this._counter.count);
    },
    reset: function () {
        this._counter.reset();
        alert('reset!');
    },
    __ready: function (context) {
        $(this.rootElement).append(counterTemplate());
    },
};
exports.default = countUpController;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Counter = (function () {
    /**
     * Count numbers
     * @param {number} initialCount initial count num
     */
    function Counter(initialCount) {
        if (initialCount === void 0) { initialCount = 0; }
        this._count = initialCount;
    }
    /**
     * Increment count
     */
    Counter.prototype.increment = function () {
        this._count++;
    };
    Object.defineProperty(Counter.prototype, "count", {
        /**
         * Get current count
         * @returns {number} current count
         */
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reset count to zero
     */
    Counter.prototype.reset = function () {
        this._count = 0;
    };
    return Counter;
}());
exports.default = Counter;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function anonymous(locals, filters, escape, rethrow) {
    escape = escape || function(html) {
        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: '<input type="button" id="countUpBtn" class="btn btn-primary" value="Count Up" />\n',
        filename: "."
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            (function() {
                buf.push('<input type="button" id="countUpBtn" class="btn btn-primary" value="Count Up" />\n');
            })();
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var resetTemplate = __webpack_require__(6); // tslint:disable-line no-var-requires
var resetController = {
    __name: 'resetController',
    '#resetBtn click': function () {
        this.trigger('resetCount');
    },
    __ready: function () {
        $(this.rootElement).append(resetTemplate());
    },
};
exports.default = resetController;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function anonymous(locals, filters, escape, rethrow) {
    escape = escape || function(html) {
        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    };
    var __stack = {
        lineno: 1,
        input: '<input type="button" id="resetBtn" class="btn btn-warning" value="Reset" />\n',
        filename: "."
    };
    function rethrow(err, str, filename, lineno) {
        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
        var context = lines.slice(start, end).map(function(line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
    }
    try {
        var buf = [];
        with (locals || {}) {
            (function() {
                buf.push('<input type="button" id="resetBtn" class="btn btn-warning" value="Reset" />\n');
            })();
        }
        return buf.join("");
    } catch (err) {
        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTVmZjZjODhmNTIwMTRmNjQ1NDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9Sb290Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9Db3VudFVwQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9Db3VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY291bnRlci5lanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIvUmVzZXRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcmVzZXQuZWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzNEQSw4Q0FBeUQ7QUFDekQsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLHdCQUFjLENBQUUsQ0FBQzs7Ozs7Ozs7OztBQ0FsRCxpREFBMEU7QUFDMUUsK0NBQW9FO0FBUXBFLElBQU0sY0FBYyxHQUFvQjtJQUNwQyxNQUFNLEVBQUU7UUFDSixrQkFBa0IsRUFBRTtZQUNoQixXQUFXLEVBQUUsbUJBQW1CO1NBQ25D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Q0EsQyIsImZpbGUiOiJkaXN0L2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE1ZmY2Yzg4ZjUyMDE0ZjY0NTQ5IiwiZGVjbGFyZSBjb25zdCBoNTogYW55O1xuXG5pbXBvcnQgcm9vdENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyL1Jvb3RDb250cm9sbGVyJztcbmg1LmNvcmUuY29udHJvbGxlcignI2NvbnRhaW5lcicsIHJvb3RDb250cm9sbGVyICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwLnRzIiwiaW1wb3J0ICogYXMgSlF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQge0V2ZW50Q2FsbGJhY2ssIElDb250ZXh0fSBmcm9tICcuLi9oNS9JQ29udGV4dCc7XG5pbXBvcnQge0lDb250cm9sbGVyfSBmcm9tICcuLi9oNS9JQ29udHJvbGxlcic7XG5pbXBvcnQgY291bnRVcENvbnRyb2xsZXIsIHtJQ291bnRVcENvbnRyb2xsZXJ9IGZyb20gJy4vQ291bnRVcENvbnRyb2xsZXInO1xuaW1wb3J0IHJlc2V0Q29udHJvbGxlciwge0lSZXNldENvbnRyb2xsZXJ9IGZyb20gJy4vUmVzZXRDb250cm9sbGVyJztcblxuaW50ZXJmYWNlIElSb290Q29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICBfY291bnRVcENvbnRyb2xsZXI6IElDb3VudFVwQ29udHJvbGxlcjtcbiAgICBfcmVzZXRDb250cm9sbGVyOiBJUmVzZXRDb250cm9sbGVyO1xuICAgICd7cm9vdEVsZW1lbnR9IHJlc2V0Q291bnQnOiBFdmVudENhbGxiYWNrO1xufVxuXG5jb25zdCByb290Q29udHJvbGxlcjogSVJvb3RDb250cm9sbGVyID0ge1xuICAgIF9fbWV0YToge1xuICAgICAgICBfY291bnRVcENvbnRyb2xsZXI6IHtcbiAgICAgICAgICAgIHJvb3RFbGVtZW50OiAnI2NvdW50ZXJDb250YWluZXInLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgX19uYW1lOiAncm9vdENvbnRyb2xsZXInLFxuICAgIF9jb3VudFVwQ29udHJvbGxlcjogY291bnRVcENvbnRyb2xsZXIsXG4gICAgX3Jlc2V0Q29udHJvbGxlcjogcmVzZXRDb250cm9sbGVyLFxuXG4gICAgJ3tyb290RWxlbWVudH0gcmVzZXRDb3VudCcoY29udGV4dDogSUNvbnRleHQsICRlbDogSlF1ZXJ5PEhUTUxFbGVtZW50Pikge1xuICAgICAgICB0aGlzLl9jb3VudFVwQ29udHJvbGxlci5yZXNldCgpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCByb290Q29udHJvbGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250cm9sbGVyL1Jvb3RDb250cm9sbGVyLnRzIiwiaW1wb3J0IHtFdmVudENhbGxiYWNrLCBJQ29udGV4dH0gZnJvbSAnLi4vaDUvSUNvbnRleHQnO1xuaW1wb3J0IHtJQ29udHJvbGxlcn0gZnJvbSAnLi4vaDUvSUNvbnRyb2xsZXInO1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vc2VydmljZS9Db3VudGVyJztcbmNvbnN0IGNvdW50ZXJUZW1wbGF0ZTogKG8/OiBvYmplY3QpID0+IHN0cmluZyA9IHJlcXVpcmUoJy4uL2Fzc2V0cy9jb3VudGVyLmVqcycpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLXZhci1yZXF1aXJlc1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb3VudFVwQ29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICBfY291bnRlcjogQ291bnRlcjtcbiAgICAnI2NvdW50VXBCdG4gY2xpY2snOiBFdmVudENhbGxiYWNrO1xuICAgIHJlc2V0OiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBjb3VudFVwQ29udHJvbGxlcjogSUNvdW50VXBDb250cm9sbGVyID0ge1xuICAgIF9fbmFtZTogJ2NvdW50VXBDb250cm9sbGVyJyxcbiAgICBfY291bnRlcjogbmV3IENvdW50ZXIoKSxcblxuICAgICcjY291bnRVcEJ0biBjbGljaycoKSB7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIuaW5jcmVtZW50KCk7XG4gICAgICAgIGFsZXJ0KHRoaXMuX2NvdW50ZXIuY291bnQpO1xuICAgIH0sXG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5fY291bnRlci5yZXNldCgpO1xuICAgICAgICBhbGVydCgncmVzZXQhJyk7XG4gICAgfSxcblxuICAgIF9fcmVhZHkoY29udGV4dDogSUNvbnRleHQpIHtcbiAgICAgICAgJCh0aGlzLnJvb3RFbGVtZW50KS5hcHBlbmQoY291bnRlclRlbXBsYXRlKCkpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudFVwQ29udHJvbGxlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250cm9sbGVyL0NvdW50VXBDb250cm9sbGVyLnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciB7XG4gICAgcHJpdmF0ZSBfY291bnQ6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIENvdW50IG51bWJlcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5pdGlhbENvdW50IGluaXRpYWwgY291bnQgbnVtXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaW5pdGlhbENvdW50ID0gMCkge1xuICAgICAgICB0aGlzLl9jb3VudCA9IGluaXRpYWxDb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgY291bnRcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5jcmVtZW50KCkge1xuICAgICAgICB0aGlzLl9jb3VudCsrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IGNvdW50XG4gICAgICogQHJldHVybnMge251bWJlcn0gY3VycmVudCBjb3VudFxuICAgICAqL1xuICAgIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgY291bnQgdG8gemVyb1xuICAgICAqL1xuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5fY291bnQgPSAwO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlL0NvdW50ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhsb2NhbHMsIGZpbHRlcnMsIGVzY2FwZSwgcmV0aHJvdykge1xuICAgIGVzY2FwZSA9IGVzY2FwZSB8fCBmdW5jdGlvbihodG1sKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpLnJlcGxhY2UoLycvZywgXCImIzM5O1wiKS5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKTtcbiAgICB9O1xuICAgIHZhciBfX3N0YWNrID0ge1xuICAgICAgICBsaW5lbm86IDEsXG4gICAgICAgIGlucHV0OiAnPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cImNvdW50VXBCdG5cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPVwiQ291bnQgVXBcIiAvPlxcbicsXG4gICAgICAgIGZpbGVuYW1lOiBcIi5cIlxuICAgIH07XG4gICAgZnVuY3Rpb24gcmV0aHJvdyhlcnIsIHN0ciwgZmlsZW5hbWUsIGxpbmVubykge1xuICAgICAgICB2YXIgbGluZXMgPSBzdHIuc3BsaXQoXCJcXG5cIiksIHN0YXJ0ID0gTWF0aC5tYXgobGluZW5vIC0gMywgMCksIGVuZCA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgbGluZW5vICsgMyk7XG4gICAgICAgIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpIHtcbiAgICAgICAgICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICAgICAgICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyBcIiA+PiBcIiA6IFwiICAgIFwiKSArIGN1cnIgKyBcInwgXCIgKyBsaW5lO1xuICAgICAgICB9KS5qb2luKFwiXFxuXCIpO1xuICAgICAgICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICAgICAgICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCBcImVqc1wiKSArIFwiOlwiICsgbGluZW5vICsgXCJcXG5cIiArIGNvbnRleHQgKyBcIlxcblxcblwiICsgZXJyLm1lc3NhZ2U7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGJ1ZiA9IFtdO1xuICAgICAgICB3aXRoIChsb2NhbHMgfHwge30pIHtcbiAgICAgICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBidWYucHVzaCgnPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cImNvdW50VXBCdG5cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPVwiQ291bnQgVXBcIiAvPlxcbicpO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmLmpvaW4oXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldGhyb3coZXJyLCBfX3N0YWNrLmlucHV0LCBfX3N0YWNrLmZpbGVuYW1lLCBfX3N0YWNrLmxpbmVubyk7XG4gICAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Fzc2V0cy9jb3VudGVyLmVqc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0V2ZW50Q2FsbGJhY2t9IGZyb20gJy4uL2g1L0lDb250ZXh0JztcbmltcG9ydCB7SUNvbnRyb2xsZXJ9IGZyb20gJy4uL2g1L0lDb250cm9sbGVyJztcbmNvbnN0IHJlc2V0VGVtcGxhdGU6IChvPzogb2JqZWN0KSA9PiBzdHJpbmcgPSByZXF1aXJlKCcuLi9hc3NldHMvcmVzZXQuZWpzJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tdmFyLXJlcXVpcmVzXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc2V0Q29udHJvbGxlciBleHRlbmRzIElDb250cm9sbGVyIHtcbiAgICAnI3Jlc2V0QnRuIGNsaWNrJzogRXZlbnRDYWxsYmFjaztcbn1cblxuY29uc3QgcmVzZXRDb250cm9sbGVyOiBJUmVzZXRDb250cm9sbGVyID0ge1xuICAgIF9fbmFtZTogJ3Jlc2V0Q29udHJvbGxlcicsXG5cbiAgICAnI3Jlc2V0QnRuIGNsaWNrJygpIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyISgncmVzZXRDb3VudCcpO1xuICAgIH0sXG5cbiAgICBfX3JlYWR5KCkge1xuICAgICAgICAkKHRoaXMucm9vdEVsZW1lbnQpLmFwcGVuZChyZXNldFRlbXBsYXRlKCkpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNldENvbnRyb2xsZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udHJvbGxlci9SZXNldENvbnRyb2xsZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFub255bW91cyhsb2NhbHMsIGZpbHRlcnMsIGVzY2FwZSwgcmV0aHJvdykge1xuICAgIGVzY2FwZSA9IGVzY2FwZSB8fCBmdW5jdGlvbihodG1sKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvJi9nLCBcIiZhbXA7XCIpLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpLnJlcGxhY2UoLz4vZywgXCImZ3Q7XCIpLnJlcGxhY2UoLycvZywgXCImIzM5O1wiKS5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKTtcbiAgICB9O1xuICAgIHZhciBfX3N0YWNrID0ge1xuICAgICAgICBsaW5lbm86IDEsXG4gICAgICAgIGlucHV0OiAnPGlucHV0IHR5cGU9XCJidXR0b25cIiBpZD1cInJlc2V0QnRuXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiB2YWx1ZT1cIlJlc2V0XCIgLz5cXG4nLFxuICAgICAgICBmaWxlbmFtZTogXCIuXCJcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHJldGhyb3coZXJyLCBzdHIsIGZpbGVuYW1lLCBsaW5lbm8pIHtcbiAgICAgICAgdmFyIGxpbmVzID0gc3RyLnNwbGl0KFwiXFxuXCIpLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIDMsIDApLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIDMpO1xuICAgICAgICB2YXIgY29udGV4dCA9IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQpLm1hcChmdW5jdGlvbihsaW5lLCBpKSB7XG4gICAgICAgICAgICB2YXIgY3VyciA9IGkgKyBzdGFydCArIDE7XG4gICAgICAgICAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gXCIgPj4gXCIgOiBcIiAgICBcIikgKyBjdXJyICsgXCJ8IFwiICsgbGluZTtcbiAgICAgICAgfSkuam9pbihcIlxcblwiKTtcbiAgICAgICAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgXCJlanNcIikgKyBcIjpcIiArIGxpbmVubyArIFwiXFxuXCIgKyBjb250ZXh0ICsgXCJcXG5cXG5cIiArIGVyci5tZXNzYWdlO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHZhciBidWYgPSBbXTtcbiAgICAgICAgd2l0aCAobG9jYWxzIHx8IHt9KSB7XG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYnVmLnB1c2goJzxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJyZXNldEJ0blwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgdmFsdWU9XCJSZXNldFwiIC8+XFxuJyk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBidWYuam9pbihcIlwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0aHJvdyhlcnIsIF9fc3RhY2suaW5wdXQsIF9fc3RhY2suZmlsZW5hbWUsIF9fc3RhY2subGluZW5vKTtcbiAgICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXNzZXRzL3Jlc2V0LmVqc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9