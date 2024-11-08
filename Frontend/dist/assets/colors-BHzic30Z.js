import { h as commonjsGlobal, i as getDefaultExportFromCjs, j as jsxRuntimeExports } from "./index-CRCdbRYf.js";
var reactLoading = { exports: {} };
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(typeof self !== "undefined" ? self : commonjsGlobal, function() {
    return (
      /******/
      function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module2 = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
          };
          modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.l = true;
          return module2.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports2, name, getter) {
          if (!__webpack_require__.o(exports2, name)) {
            Object.defineProperty(exports2, name, {
              /******/
              configurable: false,
              /******/
              enumerable: true,
              /******/
              get: getter
              /******/
            });
          }
        };
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? (
            /******/
            function getDefault() {
              return module2["default"];
            }
          ) : (
            /******/
            function getModuleExports() {
              return module2;
            }
          );
          __webpack_require__.d(getter, "a", getter);
          return getter;
        };
        __webpack_require__.o = function(object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "/";
        return __webpack_require__(__webpack_require__.s = 7);
      }([
        /* 0 */
        /***/
        function(module2, exports2, __webpack_require__) {
          function invariant(condition, format, a, b, c, d, e, f) {
            if (!condition) {
              var error;
              if (format === void 0) {
                error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
              } else {
                var args = [a, b, c, d, e, f];
                var argIndex = 0;
                error = new Error(format.replace(/%s/g, function() {
                  return args[argIndex++];
                }));
                error.name = "Invariant Violation";
              }
              error.framesToPop = 1;
              throw error;
            }
          }
          module2.exports = invariant;
        },
        /* 1 */
        /***/
        function(module2, exports2, __webpack_require__) {
          function makeEmptyFunction(arg) {
            return function() {
              return arg;
            };
          }
          var emptyFunction = function emptyFunction2() {
          };
          emptyFunction.thatReturns = makeEmptyFunction;
          emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
          emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
          emptyFunction.thatReturnsNull = makeEmptyFunction(null);
          emptyFunction.thatReturnsThis = function() {
            return this;
          };
          emptyFunction.thatReturnsArgument = function(arg) {
            return arg;
          };
          module2.exports = emptyFunction;
        },
        /* 2 */
        /***/
        function(module2, exports2, __webpack_require__) {
          /*
          object-assign
          (c) Sindre Sorhus
          @license MIT
          */
          var getOwnPropertySymbols = Object.getOwnPropertySymbols;
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var propIsEnumerable = Object.prototype.propertyIsEnumerable;
          function toObject(val) {
            if (val === null || val === void 0) {
              throw new TypeError("Object.assign cannot be called with null or undefined");
            }
            return Object(val);
          }
          function shouldUseNative() {
            try {
              if (!Object.assign) {
                return false;
              }
              var test1 = new String("abc");
              test1[5] = "de";
              if (Object.getOwnPropertyNames(test1)[0] === "5") {
                return false;
              }
              var test2 = {};
              for (var i = 0; i < 10; i++) {
                test2["_" + String.fromCharCode(i)] = i;
              }
              var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                return test2[n];
              });
              if (order2.join("") !== "0123456789") {
                return false;
              }
              var test3 = {};
              "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                test3[letter] = letter;
              });
              if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
                return false;
              }
              return true;
            } catch (err) {
              return false;
            }
          }
          module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
            var from;
            var to = toObject(target);
            var symbols;
            for (var s = 1; s < arguments.length; s++) {
              from = Object(arguments[s]);
              for (var key in from) {
                if (hasOwnProperty.call(from, key)) {
                  to[key] = from[key];
                }
              }
              if (getOwnPropertySymbols) {
                symbols = getOwnPropertySymbols(from);
                for (var i = 0; i < symbols.length; i++) {
                  if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                  }
                }
              }
            }
            return to;
          };
        },
        /* 3 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var emptyFunction = __webpack_require__(1);
          var warning = emptyFunction;
          module2.exports = warning;
        },
        /* 4 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          module2.exports = ReactPropTypesSecret;
        },
        /* 5 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var emptyObject = {};
          module2.exports = emptyObject;
        },
        /* 6 */
        /***/
        function(module2, exports2, __webpack_require__) {
          function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
          }
          module2.exports = checkPropTypes;
        },
        /* 7 */
        /***/
        function(module2, exports2, __webpack_require__) {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          var _createClass = /* @__PURE__ */ function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps) defineProperties(Constructor.prototype, protoProps);
              if (staticProps) defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          var _react = __webpack_require__(8);
          var _react2 = _interopRequireDefault(_react);
          var _propTypes = __webpack_require__(11);
          var _propTypes2 = _interopRequireDefault(_propTypes);
          var _svg = __webpack_require__(14);
          var svgSources = _interopRequireWildcard(_svg);
          function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
              return obj;
            } else {
              var newObj = {};
              if (obj != null) {
                for (var key in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
              }
              newObj.default = obj;
              return newObj;
            }
          }
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
          function _objectWithoutProperties(obj, keys) {
            var target = {};
            for (var i in obj) {
              if (keys.indexOf(i) >= 0) continue;
              if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
              target[i] = obj[i];
            }
            return target;
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _possibleConstructorReturn(self2, call) {
            if (!self2) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self2;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
          }
          var Loading = function(_Component) {
            _inherits(Loading2, _Component);
            function Loading2() {
              var _ref;
              var _temp, _this, _ret;
              _classCallCheck(this, Loading2);
              for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loading2.__proto__ || Object.getPrototypeOf(Loading2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
                delayed: _this.props.delay > 0
              }, _temp), _possibleConstructorReturn(_this, _ret);
            }
            _createClass(Loading2, [{
              key: "componentDidMount",
              value: function componentDidMount() {
                var _this2 = this;
                var delay = this.props.delay;
                var delayed = this.state.delayed;
                if (delayed) {
                  this.timeout = setTimeout(function() {
                    _this2.setState({
                      delayed: false
                    });
                  }, delay);
                }
              }
            }, {
              key: "componentWillUnmount",
              value: function componentWillUnmount() {
                var timeout = this.timeout;
                if (timeout) {
                  clearTimeout(timeout);
                }
              }
            }, {
              key: "render",
              value: function render() {
                var _props = this.props, color = _props.color;
                _props.delay;
                var type = _props.type, height = _props.height, width = _props.width, restProps = _objectWithoutProperties(_props, ["color", "delay", "type", "height", "width"]);
                var selectedType = this.state.delayed ? "blank" : type;
                var svg = svgSources[selectedType];
                var style = {
                  fill: color,
                  height,
                  width
                };
                return _react2.default.createElement("div", _extends({
                  style,
                  dangerouslySetInnerHTML: { __html: svg }
                }, restProps));
              }
            }]);
            return Loading2;
          }(_react.Component);
          Loading.propTypes = {
            color: _propTypes2.default.string,
            delay: _propTypes2.default.number,
            type: _propTypes2.default.string,
            height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
            width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
          };
          Loading.defaultProps = {
            color: "#fff",
            delay: 0,
            type: "balls",
            height: 64,
            width: 64
          };
          exports2.default = Loading;
        },
        /* 8 */
        /***/
        function(module2, exports2, __webpack_require__) {
          {
            module2.exports = __webpack_require__(9);
          }
        },
        /* 9 */
        /***/
        function(module2, exports2, __webpack_require__) {
          /** @license React v16.3.2
           * react.production.min.js
           *
           * Copyright (c) 2013-present, Facebook, Inc.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */
          var m = __webpack_require__(2), n = __webpack_require__(0), p = __webpack_require__(5), q = __webpack_require__(1), r = "function" === typeof Symbol && Symbol["for"], t = r ? Symbol["for"]("react.element") : 60103, u = r ? Symbol["for"]("react.portal") : 60106, v = r ? Symbol["for"]("react.fragment") : 60107, w = r ? Symbol["for"]("react.strict_mode") : 60108, x = r ? Symbol["for"]("react.provider") : 60109, y = r ? Symbol["for"]("react.context") : 60110, z = r ? Symbol["for"]("react.async_mode") : 60111, A = r ? Symbol["for"]("react.forward_ref") : 60112, B = "function" === typeof Symbol && Symbol.iterator;
          function C(a) {
            for (var b = arguments.length - 1, e = "http://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 0; c < b; c++) e += "&args[]=" + encodeURIComponent(arguments[c + 1]);
            n(false, "Minified React error #" + a + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", e);
          }
          var D = { isMounted: function() {
            return false;
          }, enqueueForceUpdate: function() {
          }, enqueueReplaceState: function() {
          }, enqueueSetState: function() {
          } };
          function E(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = p;
            this.updater = e || D;
          }
          E.prototype.isReactComponent = {};
          E.prototype.setState = function(a, b) {
            "object" !== typeof a && "function" !== typeof a && null != a ? C("85") : void 0;
            this.updater.enqueueSetState(this, a, b, "setState");
          };
          E.prototype.forceUpdate = function(a) {
            this.updater.enqueueForceUpdate(this, a, "forceUpdate");
          };
          function F() {
          }
          F.prototype = E.prototype;
          function G(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = p;
            this.updater = e || D;
          }
          var H = G.prototype = new F();
          H.constructor = G;
          m(H, E.prototype);
          H.isPureReactComponent = true;
          var I = { current: null }, J = Object.prototype.hasOwnProperty, K = { key: true, ref: true, __self: true, __source: true };
          function L(a, b, e) {
            var c = void 0, d = {}, g = null, h = null;
            if (null != b) for (c in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (g = "" + b.key), b) J.call(b, c) && !K.hasOwnProperty(c) && (d[c] = b[c]);
            var f = arguments.length - 2;
            if (1 === f) d.children = e;
            else if (1 < f) {
              for (var k = Array(f), l = 0; l < f; l++) k[l] = arguments[l + 2];
              d.children = k;
            }
            if (a && a.defaultProps) for (c in f = a.defaultProps, f) void 0 === d[c] && (d[c] = f[c]);
            return { $$typeof: t, type: a, key: g, ref: h, props: d, _owner: I.current };
          }
          function M(a) {
            return "object" === typeof a && null !== a && a.$$typeof === t;
          }
          function escape(a) {
            var b = { "=": "=0", ":": "=2" };
            return "$" + ("" + a).replace(/[=:]/g, function(a2) {
              return b[a2];
            });
          }
          var N = /\/+/g, O = [];
          function P(a, b, e, c) {
            if (O.length) {
              var d = O.pop();
              d.result = a;
              d.keyPrefix = b;
              d.func = e;
              d.context = c;
              d.count = 0;
              return d;
            }
            return { result: a, keyPrefix: b, func: e, context: c, count: 0 };
          }
          function Q(a) {
            a.result = null;
            a.keyPrefix = null;
            a.func = null;
            a.context = null;
            a.count = 0;
            10 > O.length && O.push(a);
          }
          function R(a, b, e, c) {
            var d = typeof a;
            if ("undefined" === d || "boolean" === d) a = null;
            var g = false;
            if (null === a) g = true;
            else switch (d) {
              case "string":
              case "number":
                g = true;
                break;
              case "object":
                switch (a.$$typeof) {
                  case t:
                  case u:
                    g = true;
                }
            }
            if (g) return e(c, a, "" === b ? "." + S(a, 0) : b), 1;
            g = 0;
            b = "" === b ? "." : b + ":";
            if (Array.isArray(a)) for (var h = 0; h < a.length; h++) {
              d = a[h];
              var f = b + S(d, h);
              g += R(d, f, e, c);
            }
            else if (null === a || "undefined" === typeof a ? f = null : (f = B && a[B] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), h = 0; !(d = a.next()).done; ) d = d.value, f = b + S(d, h++), g += R(d, f, e, c);
            else "object" === d && (e = "" + a, C("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));
            return g;
          }
          function S(a, b) {
            return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
          }
          function T(a, b) {
            a.func.call(a.context, b, a.count++);
          }
          function U(a, b, e) {
            var c = a.result, d = a.keyPrefix;
            a = a.func.call(a.context, b, a.count++);
            Array.isArray(a) ? V(a, c, e, q.thatReturnsArgument) : null != a && (M(a) && (b = d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(N, "$&/") + "/") + e, a = { $$typeof: t, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner }), c.push(a));
          }
          function V(a, b, e, c, d) {
            var g = "";
            null != e && (g = ("" + e).replace(N, "$&/") + "/");
            b = P(b, g, c, d);
            null == a || R(a, "", U, b);
            Q(b);
          }
          var W = { Children: { map: function(a, b, e) {
            if (null == a) return a;
            var c = [];
            V(a, c, null, b, e);
            return c;
          }, forEach: function(a, b, e) {
            if (null == a) return a;
            b = P(null, null, b, e);
            null == a || R(a, "", T, b);
            Q(b);
          }, count: function(a) {
            return null == a ? 0 : R(a, "", q.thatReturnsNull, null);
          }, toArray: function(a) {
            var b = [];
            V(a, b, null, q.thatReturnsArgument);
            return b;
          }, only: function(a) {
            M(a) ? void 0 : C("143");
            return a;
          } }, createRef: function() {
            return { current: null };
          }, Component: E, PureComponent: G, createContext: function(a, b) {
            void 0 === b && (b = null);
            a = {
              $$typeof: y,
              _calculateChangedBits: b,
              _defaultValue: a,
              _currentValue: a,
              _changedBits: 0,
              Provider: null,
              Consumer: null
            };
            a.Provider = { $$typeof: x, _context: a };
            return a.Consumer = a;
          }, forwardRef: function(a) {
            return { $$typeof: A, render: a };
          }, Fragment: v, StrictMode: w, unstable_AsyncMode: z, createElement: L, cloneElement: function(a, b, e) {
            null === a || void 0 === a ? C("267", a) : void 0;
            var c = void 0, d = m({}, a.props), g = a.key, h = a.ref, f = a._owner;
            if (null != b) {
              void 0 !== b.ref && (h = b.ref, f = I.current);
              void 0 !== b.key && (g = "" + b.key);
              var k = void 0;
              a.type && a.type.defaultProps && (k = a.type.defaultProps);
              for (c in b) J.call(b, c) && !K.hasOwnProperty(c) && (d[c] = void 0 === b[c] && void 0 !== k ? k[c] : b[c]);
            }
            c = arguments.length - 2;
            if (1 === c) d.children = e;
            else if (1 < c) {
              k = Array(c);
              for (var l = 0; l < c; l++) k[l] = arguments[l + 2];
              d.children = k;
            }
            return { $$typeof: t, type: a.type, key: g, ref: h, props: d, _owner: f };
          }, createFactory: function(a) {
            var b = L.bind(null, a);
            b.type = a;
            return b;
          }, isValidElement: M, version: "16.3.2", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: I, assign: m } }, X = Object.freeze({ default: W }), Y = X && W || X;
          module2.exports = Y["default"] ? Y["default"] : Y;
        },
        /* 10 */
        /***/
        function(module2, exports2, __webpack_require__) {
        },
        /* 11 */
        /***/
        function(module2, exports2, __webpack_require__) {
          {
            module2.exports = __webpack_require__(13)();
          }
        },
        /* 12 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var emptyFunction = __webpack_require__(1);
          var invariant = __webpack_require__(0);
          var warning = __webpack_require__(3);
          var assign = __webpack_require__(2);
          var ReactPropTypesSecret = __webpack_require__(4);
          var checkPropTypes = __webpack_require__(6);
          module2.exports = function(isValidElement, throwOnDirectAccess) {
            var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
            var FAUX_ITERATOR_SYMBOL = "@@iterator";
            function getIteratorFn(maybeIterable) {
              var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
              if (typeof iteratorFn === "function") {
                return iteratorFn;
              }
            }
            var ANONYMOUS = "<<anonymous>>";
            var ReactPropTypes = {
              array: createPrimitiveTypeChecker("array"),
              bool: createPrimitiveTypeChecker("boolean"),
              func: createPrimitiveTypeChecker("function"),
              number: createPrimitiveTypeChecker("number"),
              object: createPrimitiveTypeChecker("object"),
              string: createPrimitiveTypeChecker("string"),
              symbol: createPrimitiveTypeChecker("symbol"),
              any: createAnyTypeChecker(),
              arrayOf: createArrayOfTypeChecker,
              element: createElementTypeChecker(),
              instanceOf: createInstanceTypeChecker,
              node: createNodeChecker(),
              objectOf: createObjectOfTypeChecker,
              oneOf: createEnumTypeChecker,
              oneOfType: createUnionTypeChecker,
              shape: createShapeTypeChecker,
              exact: createStrictShapeTypeChecker
            };
            function is(x, y) {
              if (x === y) {
                return x !== 0 || 1 / x === 1 / y;
              } else {
                return x !== x && y !== y;
              }
            }
            function PropTypeError(message) {
              this.message = message;
              this.stack = "";
            }
            PropTypeError.prototype = Error.prototype;
            function createChainableTypeChecker(validate) {
              function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                componentName = componentName || ANONYMOUS;
                propFullName = propFullName || propName;
                if (secret !== ReactPropTypesSecret) {
                  if (throwOnDirectAccess) {
                    invariant(
                      false,
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                  }
                }
                if (props[propName] == null) {
                  if (isRequired) {
                    if (props[propName] === null) {
                      return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                    }
                    return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
                  }
                  return null;
                } else {
                  return validate(props, propName, componentName, location, propFullName);
                }
              }
              var chainedCheckType = checkType.bind(null, false);
              chainedCheckType.isRequired = checkType.bind(null, true);
              return chainedCheckType;
            }
            function createPrimitiveTypeChecker(expectedType) {
              function validate(props, propName, componentName, location, propFullName, secret) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== expectedType) {
                  var preciseType = getPreciseType(propValue);
                  return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createAnyTypeChecker() {
              return createChainableTypeChecker(emptyFunction.thatReturnsNull);
            }
            function createArrayOfTypeChecker(typeChecker) {
              function validate(props, propName, componentName, location, propFullName) {
                if (typeof typeChecker !== "function") {
                  return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                }
                var propValue = props[propName];
                if (!Array.isArray(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
                }
                for (var i = 0; i < propValue.length; i++) {
                  var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                  if (error instanceof Error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createElementTypeChecker() {
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];
                if (!isValidElement(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createInstanceTypeChecker(expectedClass) {
              function validate(props, propName, componentName, location, propFullName) {
                if (!(props[propName] instanceof expectedClass)) {
                  var expectedClassName = expectedClass.name || ANONYMOUS;
                  var actualClassName = getClassName(props[propName]);
                  return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createEnumTypeChecker(expectedValues) {
              if (!Array.isArray(expectedValues)) {
                return emptyFunction.thatReturnsNull;
              }
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];
                for (var i = 0; i < expectedValues.length; i++) {
                  if (is(propValue, expectedValues[i])) {
                    return null;
                  }
                }
                var valuesString = JSON.stringify(expectedValues);
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
              }
              return createChainableTypeChecker(validate);
            }
            function createObjectOfTypeChecker(typeChecker) {
              function validate(props, propName, componentName, location, propFullName) {
                if (typeof typeChecker !== "function") {
                  return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                }
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== "object") {
                  return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
                }
                for (var key in propValue) {
                  if (propValue.hasOwnProperty(key)) {
                    var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                      return error;
                    }
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createUnionTypeChecker(arrayOfTypeCheckers) {
              if (!Array.isArray(arrayOfTypeCheckers)) {
                return emptyFunction.thatReturnsNull;
              }
              for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (typeof checker !== "function") {
                  warning(
                    false,
                    "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                    getPostfixForTypeWarning(checker),
                    i
                  );
                  return emptyFunction.thatReturnsNull;
                }
              }
              function validate(props, propName, componentName, location, propFullName) {
                for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
                  var checker2 = arrayOfTypeCheckers[i2];
                  if (checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
                    return null;
                  }
                }
                return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
              }
              return createChainableTypeChecker(validate);
            }
            function createNodeChecker() {
              function validate(props, propName, componentName, location, propFullName) {
                if (!isNode(props[propName])) {
                  return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createShapeTypeChecker(shapeTypes) {
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== "object") {
                  return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                }
                for (var key in shapeTypes) {
                  var checker = shapeTypes[key];
                  if (!checker) {
                    continue;
                  }
                  var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                  if (error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createStrictShapeTypeChecker(shapeTypes) {
              function validate(props, propName, componentName, location, propFullName) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== "object") {
                  return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                }
                var allKeys = assign({}, props[propName], shapeTypes);
                for (var key in allKeys) {
                  var checker = shapeTypes[key];
                  if (!checker) {
                    return new PropTypeError(
                      "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                    );
                  }
                  var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                  if (error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function isNode(propValue) {
              switch (typeof propValue) {
                case "number":
                case "string":
                case "undefined":
                  return true;
                case "boolean":
                  return !propValue;
                case "object":
                  if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                  }
                  if (propValue === null || isValidElement(propValue)) {
                    return true;
                  }
                  var iteratorFn = getIteratorFn(propValue);
                  if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                      while (!(step = iterator.next()).done) {
                        if (!isNode(step.value)) {
                          return false;
                        }
                      }
                    } else {
                      while (!(step = iterator.next()).done) {
                        var entry = step.value;
                        if (entry) {
                          if (!isNode(entry[1])) {
                            return false;
                          }
                        }
                      }
                    }
                  } else {
                    return false;
                  }
                  return true;
                default:
                  return false;
              }
            }
            function isSymbol(propType, propValue) {
              if (propType === "symbol") {
                return true;
              }
              if (propValue["@@toStringTag"] === "Symbol") {
                return true;
              }
              if (typeof Symbol === "function" && propValue instanceof Symbol) {
                return true;
              }
              return false;
            }
            function getPropType(propValue) {
              var propType = typeof propValue;
              if (Array.isArray(propValue)) {
                return "array";
              }
              if (propValue instanceof RegExp) {
                return "object";
              }
              if (isSymbol(propType, propValue)) {
                return "symbol";
              }
              return propType;
            }
            function getPreciseType(propValue) {
              if (typeof propValue === "undefined" || propValue === null) {
                return "" + propValue;
              }
              var propType = getPropType(propValue);
              if (propType === "object") {
                if (propValue instanceof Date) {
                  return "date";
                } else if (propValue instanceof RegExp) {
                  return "regexp";
                }
              }
              return propType;
            }
            function getPostfixForTypeWarning(value) {
              var type = getPreciseType(value);
              switch (type) {
                case "array":
                case "object":
                  return "an " + type;
                case "boolean":
                case "date":
                case "regexp":
                  return "a " + type;
                default:
                  return type;
              }
            }
            function getClassName(propValue) {
              if (!propValue.constructor || !propValue.constructor.name) {
                return ANONYMOUS;
              }
              return propValue.constructor.name;
            }
            ReactPropTypes.checkPropTypes = checkPropTypes;
            ReactPropTypes.PropTypes = ReactPropTypes;
            return ReactPropTypes;
          };
        },
        /* 13 */
        /***/
        function(module2, exports2, __webpack_require__) {
          var emptyFunction = __webpack_require__(1);
          var invariant = __webpack_require__(0);
          var ReactPropTypesSecret = __webpack_require__(4);
          module2.exports = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
              if (secret === ReactPropTypesSecret) {
                return;
              }
              invariant(
                false,
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
            }
            shim.isRequired = shim;
            function getShim() {
              return shim;
            }
            var ReactPropTypes = {
              array: shim,
              bool: shim,
              func: shim,
              number: shim,
              object: shim,
              string: shim,
              symbol: shim,
              any: shim,
              arrayOf: getShim,
              element: shim,
              instanceOf: getShim,
              node: shim,
              objectOf: getShim,
              oneOf: getShim,
              oneOfType: getShim,
              shape: getShim,
              exact: getShim
            };
            ReactPropTypes.checkPropTypes = emptyFunction;
            ReactPropTypes.PropTypes = ReactPropTypes;
            return ReactPropTypes;
          };
        },
        /* 14 */
        /***/
        function(module2, exports2, __webpack_require__) {
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _blank = __webpack_require__(15);
          Object.defineProperty(exports2, "blank", {
            enumerable: true,
            get: function get() {
              return _interopRequireDefault(_blank).default;
            }
          });
          var _loadingBalls = __webpack_require__(16);
          Object.defineProperty(exports2, "balls", {
            enumerable: true,
            get: function get() {
              return _interopRequireDefault(_loadingBalls).default;
            }
          });
          var _loadingBars = __webpack_require__(17);
          Object.defineProperty(exports2, "bars", {
            enumerable: true,
            get: function get() {
              return _interopRequireDefault(_loadingBars).default;
            }
          });
          var _loadingBubbles = __webpack_require__(18);
          Object.defineProperty(exports2, "bubbles", {
            enumerable: true,
            get: function get() {
              return _interopRequireDefault(_loadingBubbles).default;
            }
          });
          var _loadingCubes = __webpack_require__(19);
          Object.defineProperty(exports2, "cubes", {
            enumerable: true,
            get: function get() {
              return _interopRequireDefault(_loadingCubes).default;
            }
          });
          var _loadingCylon = __webpack_require__(20);
          Object.defineProperty(exports2, "cylon", {
            enumerable: true,
            get: function get() {
              return _interopRequireDefault(_loadingCylon).default;
            }
          });
          var _loadingSpin = __webpack_require__(21);
          Object.defineProperty(exports2, "spin", {
            enumerable: true,
            get: function get() {
              return _interopRequireDefault(_loadingSpin).default;
            }
          });
          var _loadingSpinningBubbles = __webpack_require__(22);
          Object.defineProperty(exports2, "spinningBubbles", {
            enumerable: true,
            get: function get() {
              return _interopRequireDefault(_loadingSpinningBubbles).default;
            }
          });
          var _loadingSpokes = __webpack_require__(23);
          Object.defineProperty(exports2, "spokes", {
            enumerable: true,
            get: function get() {
              return _interopRequireDefault(_loadingSpokes).default;
            }
          });
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
          }
        },
        /* 15 */
        /***/
        function(module2, exports2) {
          module2.exports = '<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>\n';
        },
        /* 16 */
        /***/
        function(module2, exports2) {
          module2.exports = '<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> \n    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n</svg>\n';
        },
        /* 17 */
        /***/
        function(module2, exports2) {
          module2.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> \n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(8)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(14)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n  <path transform="translate(20)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n  <path transform="translate(26)" d="M0 12 V20 H4 V12z">\n    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />\n  </path>\n</svg>\n';
        },
        /* 18 */
        /***/
        function(module2, exports2) {
          module2.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> \n    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n  </circle>\n</svg>\n';
        },
        /* 19 */
        /***/
        function(module2, exports2) {
          module2.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(2 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(12 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n  <path transform="translate(24 0)" d="M0 12 V20 H8 V12z"> \n    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />\n  </path>\n</svg>\n';
        },
        /* 20 */
        /***/
        function(module2, exports2) {
          module2.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n  <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n  <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">\n    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </path>\n</svg>\n';
        },
        /* 21 */
        /***/
        function(module2, exports2) {
          module2.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>\n  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">\n    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />\n  </path>\n</svg>\n';
        },
        /* 22 */
        /***/
        function(module2, exports2) {
          module2.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <circle cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">\n    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n  </circle>\n</svg>\n';
        },
        /* 23 */
        /***/
        function(module2, exports2) {
          module2.exports = '<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>\n  </path>\n  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">\n    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>\n  </path>\n</svg>\n';
        }
        /******/
      ])
    );
  });
})(reactLoading);
var reactLoadingExports = reactLoading.exports;
const ReactLoading = /* @__PURE__ */ getDefaultExportFromCjs(reactLoadingExports);
const LoadingPageWithReactLoading = ({ type, color, transparent = false }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: transparent ? `fixed inset-0 flex items-center justify-center bg-black bg-opacity-50` : `loading-screen h-screen flex justify-center items-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReactLoading, { type, color, height: 60, width: 60 }) });
};
const PRIMARY_COLOR = "#ff6f00";
export {
  LoadingPageWithReactLoading as L,
  PRIMARY_COLOR as P,
  ReactLoading as R
};
