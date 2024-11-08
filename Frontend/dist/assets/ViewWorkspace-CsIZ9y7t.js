const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/YouTube-Cx2I2Gvb.js","assets/index-BgyoVvld.js","assets/index-C71yZ_iP.css","assets/SoundCloud-UHkIOLPR.js","assets/Vimeo-o7B6Cg50.js","assets/Mux-x8LqZMsq.js","assets/Facebook-CxoYo-hx.js","assets/Streamable-C2eJraUn.js","assets/Wistia-DdpwX_xR.js","assets/Twitch-VUQOhXN_.js","assets/DailyMotion-Ce0xA9pN.js","assets/Mixcloud-CV1i858f.js","assets/Vidyard-sqNLAN1b.js","assets/Kaltura-BaNP-uDo.js","assets/FilePlayer-CHZqB5kO.js","assets/Preview-CwuXlofZ.js"])))=>i.map(i=>d[i]);
import { j as jsxRuntimeExports, b as reactExports, p as propTypesExports, h as commonjsGlobal, d as __vitePreload, m as getAugmentedNamespace, i as getDefaultExportFromCjs, k as React, c as useSelector, a as useDispatch, n as useParams, L as Link, l as setLoading, _ as _t } from "./index-BgyoVvld.js";
import { H as Header } from "./Header-CXC-HNJa.js";
import { F as Footer } from "./Footer-B01DlYJ4.js";
import { A as AnimatedPage } from "./Animation-eGCpIPZ_.js";
import { e as createReview, a as getSingleWorkspace, h as getAvailableSeats, i as getReviews } from "./UserRouter-DiV_yASJ.js";
import { a as FaChair, b as FaClock, c as FaRupeeSign, d as FaCalendar, e as FaArrowLeft, f as FaTicketAlt, g as FaPhoneAlt, h as FaMapMarkerAlt } from "./index-CBXuPOJf.js";
import { B } from "./react-toastify.esm-CTm47IRj.js";
import { r as reviewValidator } from "./userValidator-q4F520mw.js";
import { r as requireClassnames } from "./index-X3VZbKVJ.js";
import { c as createLucideIcon } from "./createLucideIcon-aT5HAUZt.js";
import { S as Star, a as SearchBar } from "./SearchBar-CMX10Laj.js";
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return Object.propertyIsEnumerable.call(target, symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object2, property) {
  try {
    return property in object2;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array2, options) {
  if (!Array.isArray(array2)) {
    throw new Error("first argument should be an array");
  }
  return array2.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Battery = createLucideIcon("Battery", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
]);
const WorkspaceSkeleton = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 bg-gray-200 rounded-lg mb-2 w-3/4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-gray-200 rounded-lg mb-6 w-1/2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-96 bg-gray-200 rounded-lg" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        [...Array(5)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-gray-200 rounded-lg w-full" }, index)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 bg-gray-200 rounded-lg w-36" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 bg-gray-200 rounded-lg w-36" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-gray-200 rounded-lg mb-4 w-1/4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-6", children: [...Array(3)].map((_, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-gray-200 rounded-lg w-24" }, index)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-gray-200 rounded-lg mt-3 w-28" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 bg-gray-200 rounded-lg mb-4 w-1/3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 bg-gray-200 rounded-lg mr-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-gray-200 rounded-lg w-20 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded-lg w-24" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-gray-200 rounded-lg w-1/4 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded-lg w-full mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 bg-gray-200 rounded-lg w-3/4" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 bg-gray-200 rounded-lg mt-6 w-28" })
    ] })
  ] });
};
const ReviewForm = ({ workspaceId }) => {
  const [rating, setRating] = reactExports.useState(0);
  const [comment, setComment] = reactExports.useState("");
  const submitReview = async () => {
    try {
      const error = reviewValidator({ comment, rating });
      if (error) {
        return B.error(error.comment || error.rating);
      }
      const response = await createReview(rating, comment, workspaceId);
      if (response == null ? void 0 : response.data.success) {
        B.success("Review submitted successfully!");
        return;
      }
    } catch (err) {
      console.log(err);
      B.error("Something went wrong!");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold", children: "Submit a Review" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Rating:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setRating(star),
          className: `text-xl ${star <= rating ? "text-orange-500" : "text-gray-300"}`,
          children: "★"
        },
        star
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { children: "Comment:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: comment,
          onChange: (e) => setComment(e.target.value),
          className: "border rounded p-2 w-full"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: submitReview,
        className: "bg-orange-500 text-white p-2 mt-4 rounded",
        children: "Submit Review"
      }
    )
  ] });
};
var js = {};
var Carousel$1 = {};
var lib$1 = {};
var reactSwipe = {};
var hasRequiredReactSwipe;
function requireReactSwipe() {
  if (hasRequiredReactSwipe) return reactSwipe;
  hasRequiredReactSwipe = 1;
  (function(exports) {
    (function(global, factory) {
      {
        factory(exports, reactExports, propTypesExports);
      }
    })(commonjsGlobal, function(exports2, _react2, _propTypes) {
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.setHasSupportToCaptureOption = setHasSupportToCaptureOption;
      var _react22 = _interopRequireDefault2(_react2);
      var _propTypes2 = _interopRequireDefault2(_propTypes);
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var _extends2 = Object.assign || function(target) {
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
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
          target[i] = obj[i];
        }
        return target;
      }
      function _classCallCheck2(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var _createClass2 = /* @__PURE__ */ function() {
        function defineProperties(target, props2) {
          for (var i = 0; i < props2.length; i++) {
            var descriptor = props2[i];
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
      function _possibleConstructorReturn2(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits2(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var supportsCaptureOption = false;
      function setHasSupportToCaptureOption(hasSupport) {
        supportsCaptureOption = hasSupport;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function get() {
          setHasSupportToCaptureOption(true);
        } }));
      } catch (e) {
      }
      function getSafeEventHandlerOpts() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return supportsCaptureOption ? options : options.capture;
      }
      function getPosition3(event) {
        if ("touches" in event) {
          var _event$touches$ = event.touches[0], pageX = _event$touches$.pageX, pageY = _event$touches$.pageY;
          return { x: pageX, y: pageY };
        }
        var screenX = event.screenX, screenY = event.screenY;
        return { x: screenX, y: screenY };
      }
      var ReactSwipe = function(_Component) {
        _inherits2(ReactSwipe2, _Component);
        function ReactSwipe2() {
          var _ref;
          _classCallCheck2(this, ReactSwipe2);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn2(this, (_ref = ReactSwipe2.__proto__ || Object.getPrototypeOf(ReactSwipe2)).call.apply(_ref, [this].concat(args)));
          _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
          _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
          _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);
          _this._onMouseDown = _this._onMouseDown.bind(_this);
          _this._onMouseMove = _this._onMouseMove.bind(_this);
          _this._onMouseUp = _this._onMouseUp.bind(_this);
          _this._setSwiperRef = _this._setSwiperRef.bind(_this);
          return _this;
        }
        _createClass2(ReactSwipe2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            if (this.swiper) {
              this.swiper.addEventListener("touchmove", this._handleSwipeMove, getSafeEventHandlerOpts({
                capture: true,
                passive: false
              }));
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (this.swiper) {
              this.swiper.removeEventListener("touchmove", this._handleSwipeMove, getSafeEventHandlerOpts({
                capture: true,
                passive: false
              }));
            }
          }
        }, {
          key: "_onMouseDown",
          value: function _onMouseDown(event) {
            if (!this.props.allowMouseEvents) {
              return;
            }
            this.mouseDown = true;
            document.addEventListener("mouseup", this._onMouseUp);
            document.addEventListener("mousemove", this._onMouseMove);
            this._handleSwipeStart(event);
          }
        }, {
          key: "_onMouseMove",
          value: function _onMouseMove(event) {
            if (!this.mouseDown) {
              return;
            }
            this._handleSwipeMove(event);
          }
        }, {
          key: "_onMouseUp",
          value: function _onMouseUp(event) {
            this.mouseDown = false;
            document.removeEventListener("mouseup", this._onMouseUp);
            document.removeEventListener("mousemove", this._onMouseMove);
            this._handleSwipeEnd(event);
          }
        }, {
          key: "_handleSwipeStart",
          value: function _handleSwipeStart(event) {
            var _getPosition = getPosition3(event), x = _getPosition.x, y = _getPosition.y;
            this.moveStart = { x, y };
            this.props.onSwipeStart(event);
          }
        }, {
          key: "_handleSwipeMove",
          value: function _handleSwipeMove(event) {
            if (!this.moveStart) {
              return;
            }
            var _getPosition2 = getPosition3(event), x = _getPosition2.x, y = _getPosition2.y;
            var deltaX = x - this.moveStart.x;
            var deltaY = y - this.moveStart.y;
            this.moving = true;
            var shouldPreventDefault = this.props.onSwipeMove({
              x: deltaX,
              y: deltaY
            }, event);
            if (shouldPreventDefault && event.cancelable) {
              event.preventDefault();
            }
            this.movePosition = { deltaX, deltaY };
          }
        }, {
          key: "_handleSwipeEnd",
          value: function _handleSwipeEnd(event) {
            this.props.onSwipeEnd(event);
            var tolerance = this.props.tolerance;
            if (this.moving && this.movePosition) {
              if (this.movePosition.deltaX < -tolerance) {
                this.props.onSwipeLeft(1, event);
              } else if (this.movePosition.deltaX > tolerance) {
                this.props.onSwipeRight(1, event);
              }
              if (this.movePosition.deltaY < -tolerance) {
                this.props.onSwipeUp(1, event);
              } else if (this.movePosition.deltaY > tolerance) {
                this.props.onSwipeDown(1, event);
              }
            }
            this.moveStart = null;
            this.moving = false;
            this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function _setSwiperRef(node2) {
            this.swiper = node2;
            this.props.innerRef(node2);
          }
        }, {
          key: "render",
          value: function render() {
            var _props = this.props;
            _props.tagName;
            var className = _props.className, style = _props.style, children = _props.children;
            _props.allowMouseEvents;
            _props.onSwipeUp;
            _props.onSwipeDown;
            _props.onSwipeLeft;
            _props.onSwipeRight;
            _props.onSwipeStart;
            _props.onSwipeMove;
            _props.onSwipeEnd;
            _props.innerRef;
            _props.tolerance;
            var props2 = _objectWithoutProperties(_props, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return _react22.default.createElement(
              this.props.tagName,
              _extends2({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className,
                style
              }, props2),
              children
            );
          }
        }]);
        return ReactSwipe2;
      }(_react2.Component);
      ReactSwipe.displayName = "ReactSwipe";
      ReactSwipe.propTypes = {
        tagName: _propTypes2.default.string,
        className: _propTypes2.default.string,
        style: _propTypes2.default.object,
        children: _propTypes2.default.node,
        allowMouseEvents: _propTypes2.default.bool,
        onSwipeUp: _propTypes2.default.func,
        onSwipeDown: _propTypes2.default.func,
        onSwipeLeft: _propTypes2.default.func,
        onSwipeRight: _propTypes2.default.func,
        onSwipeStart: _propTypes2.default.func,
        onSwipeMove: _propTypes2.default.func,
        onSwipeEnd: _propTypes2.default.func,
        innerRef: _propTypes2.default.func,
        tolerance: _propTypes2.default.number.isRequired
      };
      ReactSwipe.defaultProps = {
        tagName: "div",
        allowMouseEvents: false,
        onSwipeUp: function onSwipeUp() {
        },
        onSwipeDown: function onSwipeDown() {
        },
        onSwipeLeft: function onSwipeLeft() {
        },
        onSwipeRight: function onSwipeRight() {
        },
        onSwipeStart: function onSwipeStart2() {
        },
        onSwipeMove: function onSwipeMove2() {
        },
        onSwipeEnd: function onSwipeEnd2() {
        },
        innerRef: function innerRef() {
        },
        tolerance: 0
      };
      exports2.default = ReactSwipe;
    });
  })(reactSwipe);
  return reactSwipe;
}
(function(exports) {
  (function(global, factory) {
    {
      factory(exports, requireReactSwipe());
    }
  })(commonjsGlobal, function(exports2, _reactSwipe) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    var _reactSwipe2 = _interopRequireDefault2(_reactSwipe);
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports2.default = _reactSwipe2.default;
  });
})(lib$1);
var cssClasses = {};
Object.defineProperty(cssClasses, "__esModule", {
  value: true
});
cssClasses.default = void 0;
var _classnames = _interopRequireDefault$4(requireClassnames());
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _defineProperty$3(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var _default$3 = {
  ROOT: function ROOT(customClassName) {
    return (0, _classnames.default)(_defineProperty$3({
      "carousel-root": true
    }, customClassName || "", !!customClassName));
  },
  CAROUSEL: function CAROUSEL(isSlider) {
    return (0, _classnames.default)({
      carousel: true,
      "carousel-slider": isSlider
    });
  },
  WRAPPER: function WRAPPER(isSlider, axis) {
    return (0, _classnames.default)({
      "thumbs-wrapper": !isSlider,
      "slider-wrapper": isSlider,
      "axis-horizontal": axis === "horizontal",
      "axis-vertical": axis !== "horizontal"
    });
  },
  SLIDER: function SLIDER(isSlider, isSwiping) {
    return (0, _classnames.default)({
      thumbs: !isSlider,
      slider: isSlider,
      animated: !isSwiping
    });
  },
  ITEM: function ITEM(isSlider, selected, previous) {
    return (0, _classnames.default)({
      thumb: !isSlider,
      slide: isSlider,
      selected,
      previous
    });
  },
  ARROW_PREV: function ARROW_PREV(disabled) {
    return (0, _classnames.default)({
      "control-arrow control-prev": true,
      "control-disabled": disabled
    });
  },
  ARROW_NEXT: function ARROW_NEXT(disabled) {
    return (0, _classnames.default)({
      "control-arrow control-next": true,
      "control-disabled": disabled
    });
  },
  DOT: function DOT(selected) {
    return (0, _classnames.default)({
      dot: true,
      selected
    });
  }
};
cssClasses.default = _default$3;
var Thumbs$1 = {};
var dimensions = {};
Object.defineProperty(dimensions, "__esModule", {
  value: true
});
dimensions.outerWidth = void 0;
var outerWidth = function outerWidth2(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
};
dimensions.outerWidth = outerWidth;
var CSSTranslate = {};
Object.defineProperty(CSSTranslate, "__esModule", {
  value: true
});
CSSTranslate.default = void 0;
var _default$2 = function _default(position, metric, axis) {
  var positionPercent = position === 0 ? position : position + metric;
  var positionCss = axis === "horizontal" ? [positionPercent, 0, 0] : [0, positionPercent, 0];
  var transitionProp = "translate3d";
  var translatedPosition = "(" + positionCss.join(",") + ")";
  return transitionProp + translatedPosition;
};
CSSTranslate.default = _default$2;
var window$1 = {};
Object.defineProperty(window$1, "__esModule", {
  value: true
});
window$1.default = void 0;
var _default$1 = function _default2() {
  return window;
};
window$1.default = _default$1;
Object.defineProperty(Thumbs$1, "__esModule", {
  value: true
});
Thumbs$1.default = void 0;
var _react$3 = _interopRequireWildcard$1(reactExports);
var _cssClasses$1 = _interopRequireDefault$3(cssClasses);
var _dimensions = dimensions;
var _CSSTranslate$2 = _interopRequireDefault$3(CSSTranslate);
var _reactEasySwipe$1 = _interopRequireDefault$3(lib$1);
var _window$1 = _interopRequireDefault$3(window$1);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache$1() {
  if (typeof WeakMap !== "function") return null;
  var cache = /* @__PURE__ */ new WeakMap();
  _getRequireWildcardCache$1 = function _getRequireWildcardCache2() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard$1(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof$1(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache$1();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof$1 = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof$1(obj);
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
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
  return _extends$1.apply(this, arguments);
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props2) {
  for (var i = 0; i < props2.length; i++) {
    var descriptor = props2[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  return Constructor;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$1(o, p);
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result);
  };
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized$1(self);
}
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var isKeyboardEvent$1 = function isKeyboardEvent(e) {
  return e.hasOwnProperty("key");
};
var Thumbs = /* @__PURE__ */ function(_Component) {
  _inherits$1(Thumbs2, _Component);
  var _super = _createSuper$1(Thumbs2);
  function Thumbs2(_props) {
    var _this;
    _classCallCheck$1(this, Thumbs2);
    _this = _super.call(this, _props);
    _defineProperty$2(_assertThisInitialized$1(_this), "itemsWrapperRef", void 0);
    _defineProperty$2(_assertThisInitialized$1(_this), "itemsListRef", void 0);
    _defineProperty$2(_assertThisInitialized$1(_this), "thumbsRef", void 0);
    _defineProperty$2(_assertThisInitialized$1(_this), "setItemsWrapperRef", function(node2) {
      _this.itemsWrapperRef = node2;
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "setItemsListRef", function(node2) {
      _this.itemsListRef = node2;
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "setThumbsRef", function(node2, index) {
      if (!_this.thumbsRef) {
        _this.thumbsRef = [];
      }
      _this.thumbsRef[index] = node2;
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "updateSizes", function() {
      if (!_this.props.children || !_this.itemsWrapperRef || !_this.thumbsRef) {
        return;
      }
      var total = _react$3.Children.count(_this.props.children);
      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : (0, _dimensions.outerWidth)(_this.thumbsRef[0]);
      var visibleItems = Math.floor(wrapperSize / itemSize);
      var showArrows = visibleItems < total;
      var lastPosition = showArrows ? total - visibleItems : 0;
      _this.setState(function(_state, props2) {
        return {
          itemSize,
          visibleItems,
          firstItem: showArrows ? _this.getFirstItem(props2.selectedItem) : 0,
          lastPosition,
          showArrows
        };
      });
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "handleClickItem", function(index, item, e) {
      if (!isKeyboardEvent$1(e) || e.key === "Enter") {
        var handler = _this.props.onSelectItem;
        if (typeof handler === "function") {
          handler(index, item);
        }
      }
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "onSwipeStart", function() {
      _this.setState({
        swiping: true
      });
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "onSwipeEnd", function() {
      _this.setState({
        swiping: false
      });
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "onSwipeMove", function(delta) {
      var deltaX = delta.x;
      if (!_this.state.itemSize || !_this.itemsWrapperRef || !_this.state.visibleItems) {
        return false;
      }
      var leftBoundary = 0;
      var childrenLength = _react$3.Children.count(_this.props.children);
      var currentPosition = -(_this.state.firstItem * 100) / _this.state.visibleItems;
      var lastLeftItem = Math.max(childrenLength - _this.state.visibleItems, 0);
      var lastLeftBoundary = -lastLeftItem * 100 / _this.state.visibleItems;
      if (currentPosition === leftBoundary && deltaX > 0) {
        deltaX = 0;
      }
      if (currentPosition === lastLeftBoundary && deltaX < 0) {
        deltaX = 0;
      }
      var wrapperSize = _this.itemsWrapperRef.clientWidth;
      var position = currentPosition + 100 / (wrapperSize / deltaX);
      if (_this.itemsListRef) {
        ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(prop) {
          _this.itemsListRef.style[prop] = (0, _CSSTranslate$2.default)(position, "%", _this.props.axis);
        });
      }
      return true;
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "slideRight", function(positions) {
      _this.moveTo(_this.state.firstItem - (typeof positions === "number" ? positions : 1));
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "slideLeft", function(positions) {
      _this.moveTo(_this.state.firstItem + (typeof positions === "number" ? positions : 1));
    });
    _defineProperty$2(_assertThisInitialized$1(_this), "moveTo", function(position) {
      position = position < 0 ? 0 : position;
      position = position >= _this.state.lastPosition ? _this.state.lastPosition : position;
      _this.setState({
        firstItem: position
      });
    });
    _this.state = {
      selectedItem: _props.selectedItem,
      swiping: false,
      showArrows: false,
      firstItem: 0,
      visibleItems: 0,
      lastPosition: 0
    };
    return _this;
  }
  _createClass$1(Thumbs2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setupThumbs();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.selectedItem !== this.state.selectedItem) {
        this.setState({
          selectedItem: this.props.selectedItem,
          firstItem: this.getFirstItem(this.props.selectedItem)
        });
      }
      if (this.props.children === prevProps.children) {
        return;
      }
      this.updateSizes();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyThumbs();
    }
  }, {
    key: "setupThumbs",
    value: function setupThumbs() {
      (0, _window$1.default)().addEventListener("resize", this.updateSizes);
      (0, _window$1.default)().addEventListener("DOMContentLoaded", this.updateSizes);
      this.updateSizes();
    }
  }, {
    key: "destroyThumbs",
    value: function destroyThumbs() {
      (0, _window$1.default)().removeEventListener("resize", this.updateSizes);
      (0, _window$1.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem(selectedItem) {
      var firstItem = selectedItem;
      if (selectedItem >= this.state.lastPosition) {
        firstItem = this.state.lastPosition;
      }
      if (selectedItem < this.state.firstItem + this.state.visibleItems) {
        firstItem = this.state.firstItem;
      }
      if (selectedItem < this.state.firstItem) {
        firstItem = selectedItem;
      }
      return firstItem;
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this2 = this;
      return this.props.children.map(function(img, index) {
        var itemClass = _cssClasses$1.default.ITEM(false, index === _this2.state.selectedItem);
        var thumbProps = {
          key: index,
          ref: function ref(e) {
            return _this2.setThumbsRef(e, index);
          },
          className: itemClass,
          onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
          "aria-label": "".concat(_this2.props.labels.item, " ").concat(index + 1),
          style: {
            width: _this2.props.thumbWidth
          }
        };
        return /* @__PURE__ */ _react$3.default.createElement("li", _extends$1({}, thumbProps, {
          role: "button",
          tabIndex: 0
        }), img);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      if (!this.props.children) {
        return null;
      }
      var isSwipeable = _react$3.Children.count(this.props.children) > 1;
      var hasPrev = this.state.showArrows && this.state.firstItem > 0;
      var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition;
      var itemListStyles = {};
      var currentPosition = -this.state.firstItem * (this.state.itemSize || 0);
      var transformProp = (0, _CSSTranslate$2.default)(currentPosition, "px", this.props.axis);
      var transitionTime = this.props.transitionTime + "ms";
      itemListStyles = {
        WebkitTransform: transformProp,
        MozTransform: transformProp,
        MsTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp,
        msTransform: transformProp,
        WebkitTransitionDuration: transitionTime,
        MozTransitionDuration: transitionTime,
        MsTransitionDuration: transitionTime,
        OTransitionDuration: transitionTime,
        transitionDuration: transitionTime,
        msTransitionDuration: transitionTime
      };
      return /* @__PURE__ */ _react$3.default.createElement("div", {
        className: _cssClasses$1.default.CAROUSEL(false)
      }, /* @__PURE__ */ _react$3.default.createElement("div", {
        className: _cssClasses$1.default.WRAPPER(false),
        ref: this.setItemsWrapperRef
      }, /* @__PURE__ */ _react$3.default.createElement("button", {
        type: "button",
        className: _cssClasses$1.default.ARROW_PREV(!hasPrev),
        onClick: function onClick() {
          return _this3.slideRight();
        },
        "aria-label": this.props.labels.leftArrow
      }), isSwipeable ? /* @__PURE__ */ _react$3.default.createElement(_reactEasySwipe$1.default, {
        tagName: "ul",
        className: _cssClasses$1.default.SLIDER(false, this.state.swiping),
        onSwipeLeft: this.slideLeft,
        onSwipeRight: this.slideRight,
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: itemListStyles,
        innerRef: this.setItemsListRef,
        allowMouseEvents: this.props.emulateTouch
      }, this.renderItems()) : /* @__PURE__ */ _react$3.default.createElement("ul", {
        className: _cssClasses$1.default.SLIDER(false, this.state.swiping),
        ref: function ref(node2) {
          return _this3.setItemsListRef(node2);
        },
        style: itemListStyles
      }, this.renderItems()), /* @__PURE__ */ _react$3.default.createElement("button", {
        type: "button",
        className: _cssClasses$1.default.ARROW_NEXT(!hasNext),
        onClick: function onClick() {
          return _this3.slideLeft();
        },
        "aria-label": this.props.labels.rightArrow
      })));
    }
  }]);
  return Thumbs2;
}(_react$3.Component);
Thumbs$1.default = Thumbs;
_defineProperty$2(Thumbs, "displayName", "Thumbs");
_defineProperty$2(Thumbs, "defaultProps", {
  axis: "horizontal",
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item"
  },
  selectedItem: 0,
  thumbWidth: 80,
  transitionTime: 350
});
var document$1 = {};
Object.defineProperty(document$1, "__esModule", {
  value: true
});
document$1.default = void 0;
var _default3 = function _default4() {
  return document;
};
document$1.default = _default3;
var utils$1 = {};
Object.defineProperty(utils$1, "__esModule", {
  value: true
});
utils$1.setPosition = utils$1.getPosition = utils$1.isKeyboardEvent = utils$1.defaultStatusFormatter = utils$1.noop = void 0;
var _react$2 = reactExports;
var _CSSTranslate$1 = _interopRequireDefault$2(CSSTranslate);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var noop$1 = function noop() {
};
utils$1.noop = noop$1;
var defaultStatusFormatter = function defaultStatusFormatter2(current, total) {
  return "".concat(current, " of ").concat(total);
};
utils$1.defaultStatusFormatter = defaultStatusFormatter;
var isKeyboardEvent2 = function isKeyboardEvent3(e) {
  return e ? e.hasOwnProperty("key") : false;
};
utils$1.isKeyboardEvent = isKeyboardEvent2;
var getPosition = function getPosition2(index, props2) {
  if (props2.infiniteLoop) {
    ++index;
  }
  if (index === 0) {
    return 0;
  }
  var childrenLength = _react$2.Children.count(props2.children);
  if (props2.centerMode && props2.axis === "horizontal") {
    var currentPosition = -index * props2.centerSlidePercentage;
    var lastPosition = childrenLength - 1;
    if (index && (index !== lastPosition || props2.infiniteLoop)) {
      currentPosition += (100 - props2.centerSlidePercentage) / 2;
    } else if (index === lastPosition) {
      currentPosition += 100 - props2.centerSlidePercentage;
    }
    return currentPosition;
  }
  return -index * 100;
};
utils$1.getPosition = getPosition;
var setPosition = function setPosition2(position, axis) {
  var style = {};
  ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(prop) {
    style[prop] = (0, _CSSTranslate$1.default)(position, "%", axis);
  });
  return style;
};
utils$1.setPosition = setPosition;
var animations = {};
Object.defineProperty(animations, "__esModule", {
  value: true
});
animations.fadeAnimationHandler = animations.slideStopSwipingHandler = animations.slideSwipeAnimationHandler = animations.slideAnimationHandler = void 0;
var _react$1 = reactExports;
var _CSSTranslate = _interopRequireDefault$1(CSSTranslate);
var _utils$1 = utils$1;
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function ownKeys$1(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly) symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var slideAnimationHandler = function slideAnimationHandler2(props2, state) {
  var returnStyles = {};
  var selectedItem = state.selectedItem;
  var previousItem = selectedItem;
  var lastPosition = _react$1.Children.count(props2.children) - 1;
  var needClonedSlide = props2.infiniteLoop && (selectedItem < 0 || selectedItem > lastPosition);
  if (needClonedSlide) {
    if (previousItem < 0) {
      if (props2.centerMode && props2.centerSlidePercentage && props2.axis === "horizontal") {
        returnStyles.itemListStyle = (0, _utils$1.setPosition)(-(lastPosition + 2) * props2.centerSlidePercentage - (100 - props2.centerSlidePercentage) / 2, props2.axis);
      } else {
        returnStyles.itemListStyle = (0, _utils$1.setPosition)(-(lastPosition + 2) * 100, props2.axis);
      }
    } else if (previousItem > lastPosition) {
      returnStyles.itemListStyle = (0, _utils$1.setPosition)(0, props2.axis);
    }
    return returnStyles;
  }
  var currentPosition = (0, _utils$1.getPosition)(selectedItem, props2);
  var transformProp = (0, _CSSTranslate.default)(currentPosition, "%", props2.axis);
  var transitionTime = props2.transitionTime + "ms";
  returnStyles.itemListStyle = {
    WebkitTransform: transformProp,
    msTransform: transformProp,
    OTransform: transformProp,
    transform: transformProp
  };
  if (!state.swiping) {
    returnStyles.itemListStyle = _objectSpread$1(_objectSpread$1({}, returnStyles.itemListStyle), {}, {
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime
    });
  }
  return returnStyles;
};
animations.slideAnimationHandler = slideAnimationHandler;
var slideSwipeAnimationHandler = function slideSwipeAnimationHandler2(delta, props2, state, setState) {
  var returnStyles = {};
  var isHorizontal = props2.axis === "horizontal";
  var childrenLength = _react$1.Children.count(props2.children);
  var initialBoundry = 0;
  var currentPosition = (0, _utils$1.getPosition)(state.selectedItem, props2);
  var finalBoundry = props2.infiniteLoop ? (0, _utils$1.getPosition)(childrenLength - 1, props2) - 100 : (0, _utils$1.getPosition)(childrenLength - 1, props2);
  var axisDelta = isHorizontal ? delta.x : delta.y;
  var handledDelta = axisDelta;
  if (currentPosition === initialBoundry && axisDelta > 0) {
    handledDelta = 0;
  }
  if (currentPosition === finalBoundry && axisDelta < 0) {
    handledDelta = 0;
  }
  var position = currentPosition + 100 / (state.itemSize / handledDelta);
  var hasMoved = Math.abs(axisDelta) > props2.swipeScrollTolerance;
  if (props2.infiniteLoop && hasMoved) {
    if (state.selectedItem === 0 && position > -100) {
      position -= childrenLength * 100;
    } else if (state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
      position += childrenLength * 100;
    }
  }
  if (!props2.preventMovementUntilSwipeScrollTolerance || hasMoved || state.swipeMovementStarted) {
    if (!state.swipeMovementStarted) {
      setState({
        swipeMovementStarted: true
      });
    }
    returnStyles.itemListStyle = (0, _utils$1.setPosition)(position, props2.axis);
  }
  if (hasMoved && !state.cancelClick) {
    setState({
      cancelClick: true
    });
  }
  return returnStyles;
};
animations.slideSwipeAnimationHandler = slideSwipeAnimationHandler;
var slideStopSwipingHandler = function slideStopSwipingHandler2(props2, state) {
  var currentPosition = (0, _utils$1.getPosition)(state.selectedItem, props2);
  var itemListStyle = (0, _utils$1.setPosition)(currentPosition, props2.axis);
  return {
    itemListStyle
  };
};
animations.slideStopSwipingHandler = slideStopSwipingHandler;
var fadeAnimationHandler = function fadeAnimationHandler2(props2, state) {
  var transitionTime = props2.transitionTime + "ms";
  var transitionTimingFunction = "ease-in-out";
  var slideStyle = {
    position: "absolute",
    display: "block",
    zIndex: -2,
    minHeight: "100%",
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction
  };
  if (!state.swiping) {
    slideStyle = _objectSpread$1(_objectSpread$1({}, slideStyle), {}, {
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime
    });
  }
  return {
    slideStyle,
    selectedStyle: _objectSpread$1(_objectSpread$1({}, slideStyle), {}, {
      opacity: 1,
      position: "relative"
    }),
    prevStyle: _objectSpread$1({}, slideStyle)
  };
};
animations.fadeAnimationHandler = fadeAnimationHandler;
Object.defineProperty(Carousel$1, "__esModule", {
  value: true
});
Carousel$1.default = void 0;
var _react = _interopRequireWildcard(reactExports);
var _reactEasySwipe = _interopRequireDefault(lib$1);
var _cssClasses = _interopRequireDefault(cssClasses);
var _Thumbs = _interopRequireDefault(Thumbs$1);
var _document = _interopRequireDefault(document$1);
var _window = _interopRequireDefault(window$1);
var _utils = utils$1;
var _animations = animations;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = /* @__PURE__ */ new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache2() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _extends() {
  _extends = Object.assign || function(target) {
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
  return _extends.apply(this, arguments);
}
function ownKeys(object2, enumerableOnly) {
  var keys = Object.keys(object2);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object2);
    if (enumerableOnly) symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props2) {
  for (var i = 0; i < props2.length; i++) {
    var descriptor = props2[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var Carousel = /* @__PURE__ */ function(_React$Component) {
  _inherits(Carousel2, _React$Component);
  var _super = _createSuper(Carousel2);
  function Carousel2(props2) {
    var _this;
    _classCallCheck(this, Carousel2);
    _this = _super.call(this, props2);
    _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);
    _defineProperty(_assertThisInitialized(_this), "carouselWrapperRef", void 0);
    _defineProperty(_assertThisInitialized(_this), "listRef", void 0);
    _defineProperty(_assertThisInitialized(_this), "itemsRef", void 0);
    _defineProperty(_assertThisInitialized(_this), "timer", void 0);
    _defineProperty(_assertThisInitialized(_this), "animationHandler", void 0);
    _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function(node2) {
      _this.thumbsRef = node2;
    });
    _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function(node2) {
      _this.carouselWrapperRef = node2;
    });
    _defineProperty(_assertThisInitialized(_this), "setListRef", function(node2) {
      _this.listRef = node2;
    });
    _defineProperty(_assertThisInitialized(_this), "setItemsRef", function(node2, index) {
      if (!_this.itemsRef) {
        _this.itemsRef = [];
      }
      _this.itemsRef[index] = node2;
    });
    _defineProperty(_assertThisInitialized(_this), "autoPlay", function() {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }
      _this.clearAutoPlay();
      if (!_this.props.autoPlay) {
        return;
      }
      _this.timer = setTimeout(function() {
        _this.increment();
      }, _this.props.interval);
    });
    _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function() {
      if (_this.timer) clearTimeout(_this.timer);
    });
    _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function() {
      _this.clearAutoPlay();
      _this.autoPlay();
    });
    _defineProperty(_assertThisInitialized(_this), "stopOnHover", function() {
      _this.setState({
        isMouseEntered: true
      }, _this.clearAutoPlay);
    });
    _defineProperty(_assertThisInitialized(_this), "startOnLeave", function() {
      _this.setState({
        isMouseEntered: false
      }, _this.autoPlay);
    });
    _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function() {
      if (!_this.carouselWrapperRef) {
        return false;
      }
      if ((0, _document.default)().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains((0, _document.default)().activeElement)) {
        return true;
      }
      return false;
    });
    _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function(e) {
      if (!_this.isFocusWithinTheCarousel()) {
        return;
      }
      var axis = _this.props.axis;
      var isHorizontal = axis === "horizontal";
      var keyNames = {
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
        ArrowLeft: 37
      };
      var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
      var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;
      if (nextKey === e.keyCode) {
        _this.increment();
      } else if (prevKey === e.keyCode) {
        _this.decrement();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "updateSizes", function() {
      if (!_this.state.initialized || !_this.itemsRef || _this.itemsRef.length === 0) {
        return;
      }
      var isHorizontal = _this.props.axis === "horizontal";
      var firstItem = _this.itemsRef[0];
      if (!firstItem) {
        return;
      }
      var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;
      _this.setState({
        itemSize
      });
      if (_this.thumbsRef) {
        _this.thumbsRef.updateSizes();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "setMountState", function() {
      _this.setState({
        hasMount: true
      });
      _this.updateSizes();
    });
    _defineProperty(_assertThisInitialized(_this), "handleClickItem", function(index, item) {
      if (_react.Children.count(_this.props.children) === 0) {
        return;
      }
      if (_this.state.cancelClick) {
        _this.setState({
          cancelClick: false
        });
        return;
      }
      _this.props.onClickItem(index, item);
      if (index !== _this.state.selectedItem) {
        _this.setState({
          selectedItem: index
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function(index, item) {
      if (_react.Children.count(_this.props.children) <= 1) {
        return;
      }
      _this.props.onChange(index, item);
    });
    _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function(index, item) {
      _this.props.onClickThumb(index, item);
      _this.moveTo(index);
    });
    _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function(event) {
      _this.setState({
        swiping: true
      });
      _this.props.onSwipeStart(event);
    });
    _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function(event) {
      _this.setState({
        swiping: false,
        cancelClick: false,
        swipeMovementStarted: false
      });
      _this.props.onSwipeEnd(event);
      _this.clearAutoPlay();
      if (_this.state.autoPlay) {
        _this.autoPlay();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function(delta, event) {
      _this.props.onSwipeMove(event);
      var animationHandlerResponse = _this.props.swipeAnimationHandler(delta, _this.props, _this.state, _this.setState.bind(_assertThisInitialized(_this)));
      _this.setState(_objectSpread({}, animationHandlerResponse));
      return !!Object.keys(animationHandlerResponse).length;
    });
    _defineProperty(_assertThisInitialized(_this), "decrement", function() {
      var positions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      _this.moveTo(_this.state.selectedItem - (typeof positions === "number" ? positions : 1));
    });
    _defineProperty(_assertThisInitialized(_this), "increment", function() {
      var positions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
      _this.moveTo(_this.state.selectedItem + (typeof positions === "number" ? positions : 1));
    });
    _defineProperty(_assertThisInitialized(_this), "moveTo", function(position) {
      if (typeof position !== "number") {
        return;
      }
      var lastPosition = _react.Children.count(_this.props.children) - 1;
      if (position < 0) {
        position = _this.props.infiniteLoop ? lastPosition : 0;
      }
      if (position > lastPosition) {
        position = _this.props.infiniteLoop ? 0 : lastPosition;
      }
      _this.selectItem({
        // if it's not a slider, we don't need to set position here
        selectedItem: position
      });
      if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
        _this.resetAutoPlay();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onClickNext", function() {
      _this.increment(1);
    });
    _defineProperty(_assertThisInitialized(_this), "onClickPrev", function() {
      _this.decrement(1);
    });
    _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function() {
      _this.increment(1);
      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function() {
      _this.decrement(1);
      if (_this.props.emulateTouch) {
        _this.setState({
          cancelClick: true
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "changeItem", function(newIndex) {
      return function(e) {
        if (!(0, _utils.isKeyboardEvent)(e) || e.key === "Enter") {
          _this.moveTo(newIndex);
        }
      };
    });
    _defineProperty(_assertThisInitialized(_this), "selectItem", function(state) {
      _this.setState(_objectSpread({
        previousItem: _this.state.selectedItem
      }, state), function() {
        _this.setState(_this.animationHandler(_this.props, _this.state));
      });
      _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
    });
    _defineProperty(_assertThisInitialized(_this), "getInitialImage", function() {
      var selectedItem = _this.props.selectedItem;
      var item = _this.itemsRef && _this.itemsRef[selectedItem];
      var images = item && item.getElementsByTagName("img") || [];
      return images[0];
    });
    _defineProperty(_assertThisInitialized(_this), "getVariableItemHeight", function(position) {
      var item = _this.itemsRef && _this.itemsRef[position];
      if (_this.state.hasMount && item && item.children.length) {
        var slideImages = item.children[0].getElementsByTagName("img") || [];
        if (slideImages.length > 0) {
          var image = slideImages[0];
          if (!image.complete) {
            var onImageLoad = function onImageLoad2() {
              _this.forceUpdate();
              image.removeEventListener("load", onImageLoad2);
            };
            image.addEventListener("load", onImageLoad);
          }
        }
        var displayItem = slideImages[0] || item.children[0];
        var height = displayItem.clientHeight;
        return height > 0 ? height : null;
      }
      return null;
    });
    var initState = {
      initialized: false,
      previousItem: props2.selectedItem,
      selectedItem: props2.selectedItem,
      hasMount: false,
      isMouseEntered: false,
      autoPlay: props2.autoPlay,
      swiping: false,
      swipeMovementStarted: false,
      cancelClick: false,
      itemSize: 1,
      itemListStyle: {},
      slideStyle: {},
      selectedStyle: {},
      prevStyle: {}
    };
    _this.animationHandler = typeof props2.animationHandler === "function" && props2.animationHandler || props2.animationHandler === "fade" && _animations.fadeAnimationHandler || _animations.slideAnimationHandler;
    _this.state = _objectSpread(_objectSpread({}, initState), _this.animationHandler(props2, initState));
    return _this;
  }
  _createClass(Carousel2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.children) {
        return;
      }
      this.setupCarousel();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.children && this.props.children && !this.state.initialized) {
        this.setupCarousel();
      }
      if (!prevProps.autoFocus && this.props.autoFocus) {
        this.forceFocus();
      }
      if (prevState.swiping && !this.state.swiping) {
        this.setState(_objectSpread({}, this.props.stopSwipingHandler(this.props, this.state)));
      }
      if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
        this.updateSizes();
        this.moveTo(this.props.selectedItem);
      }
      if (prevProps.autoPlay !== this.props.autoPlay) {
        if (this.props.autoPlay) {
          this.setupAutoPlay();
        } else {
          this.destroyAutoPlay();
        }
        this.setState({
          autoPlay: this.props.autoPlay
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyCarousel();
    }
  }, {
    key: "setupCarousel",
    value: function setupCarousel() {
      var _this2 = this;
      this.bindEvents();
      if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
        this.setupAutoPlay();
      }
      if (this.props.autoFocus) {
        this.forceFocus();
      }
      this.setState({
        initialized: true
      }, function() {
        var initialImage = _this2.getInitialImage();
        if (initialImage && !initialImage.complete) {
          initialImage.addEventListener("load", _this2.setMountState);
        } else {
          _this2.setMountState();
        }
      });
    }
  }, {
    key: "destroyCarousel",
    value: function destroyCarousel() {
      if (this.state.initialized) {
        this.unbindEvents();
        this.destroyAutoPlay();
      }
    }
  }, {
    key: "setupAutoPlay",
    value: function setupAutoPlay() {
      this.autoPlay();
      var carouselWrapper = this.carouselWrapperRef;
      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.addEventListener("mouseenter", this.stopOnHover);
        carouselWrapper.addEventListener("mouseleave", this.startOnLeave);
      }
    }
  }, {
    key: "destroyAutoPlay",
    value: function destroyAutoPlay() {
      this.clearAutoPlay();
      var carouselWrapper = this.carouselWrapperRef;
      if (this.props.stopOnHover && carouselWrapper) {
        carouselWrapper.removeEventListener("mouseenter", this.stopOnHover);
        carouselWrapper.removeEventListener("mouseleave", this.startOnLeave);
      }
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      (0, _window.default)().addEventListener("resize", this.updateSizes);
      (0, _window.default)().addEventListener("DOMContentLoaded", this.updateSizes);
      if (this.props.useKeyboardArrows) {
        (0, _document.default)().addEventListener("keydown", this.navigateWithKeyboard);
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      (0, _window.default)().removeEventListener("resize", this.updateSizes);
      (0, _window.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
      var initialImage = this.getInitialImage();
      if (initialImage) {
        initialImage.removeEventListener("load", this.setMountState);
      }
      if (this.props.useKeyboardArrows) {
        (0, _document.default)().removeEventListener("keydown", this.navigateWithKeyboard);
      }
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      var _this$carouselWrapper;
      (_this$carouselWrapper = this.carouselWrapperRef) === null || _this$carouselWrapper === void 0 ? void 0 : _this$carouselWrapper.focus();
    }
  }, {
    key: "renderItems",
    value: function renderItems(isClone) {
      var _this3 = this;
      if (!this.props.children) {
        return [];
      }
      return _react.Children.map(this.props.children, function(item, index) {
        var isSelected = index === _this3.state.selectedItem;
        var isPrevious = index === _this3.state.previousItem;
        var style = isSelected && _this3.state.selectedStyle || isPrevious && _this3.state.prevStyle || _this3.state.slideStyle || {};
        if (_this3.props.centerMode && _this3.props.axis === "horizontal") {
          style = _objectSpread(_objectSpread({}, style), {}, {
            minWidth: _this3.props.centerSlidePercentage + "%"
          });
        }
        if (_this3.state.swiping && _this3.state.swipeMovementStarted) {
          style = _objectSpread(_objectSpread({}, style), {}, {
            pointerEvents: "none"
          });
        }
        var slideProps = {
          ref: function ref(e) {
            return _this3.setItemsRef(e, index);
          },
          key: "itemKey" + index + (isClone ? "clone" : ""),
          className: _cssClasses.default.ITEM(true, index === _this3.state.selectedItem, index === _this3.state.previousItem),
          onClick: _this3.handleClickItem.bind(_this3, index, item),
          style
        };
        return /* @__PURE__ */ _react.default.createElement("li", slideProps, _this3.props.renderItem(item, {
          isSelected: index === _this3.state.selectedItem,
          isPrevious: index === _this3.state.previousItem
        }));
      });
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this4 = this;
      var _this$props = this.props, showIndicators = _this$props.showIndicators, labels = _this$props.labels, renderIndicator2 = _this$props.renderIndicator, children = _this$props.children;
      if (!showIndicators) {
        return null;
      }
      return /* @__PURE__ */ _react.default.createElement("ul", {
        className: "control-dots"
      }, _react.Children.map(children, function(_, index) {
        return renderIndicator2 && renderIndicator2(_this4.changeItem(index), index === _this4.state.selectedItem, index, labels.item);
      }));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      if (!this.props.showStatus) {
        return null;
      }
      return /* @__PURE__ */ _react.default.createElement("p", {
        className: "carousel-status"
      }, this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children)));
    }
  }, {
    key: "renderThumbs",
    value: function renderThumbs2() {
      if (!this.props.showThumbs || !this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }
      return /* @__PURE__ */ _react.default.createElement(_Thumbs.default, {
        ref: this.setThumbsRef,
        onSelectItem: this.handleClickThumb,
        selectedItem: this.state.selectedItem,
        transitionTime: this.props.transitionTime,
        thumbWidth: this.props.thumbWidth,
        labels: this.props.labels,
        emulateTouch: this.props.emulateTouch
      }, this.props.renderThumbs(this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;
      if (!this.props.children || _react.Children.count(this.props.children) === 0) {
        return null;
      }
      var isSwipeable = this.props.swipeable && _react.Children.count(this.props.children) > 1;
      var isHorizontal = this.props.axis === "horizontal";
      var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1;
      var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false;
      var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false;
      var itemsClone = this.renderItems(true);
      var firstClone = itemsClone.shift();
      var lastClone = itemsClone.pop();
      var swiperProps = {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        onSwipeMove: this.onSwipeMove,
        onSwipeStart: this.onSwipeStart,
        onSwipeEnd: this.onSwipeEnd,
        style: this.state.itemListStyle,
        tolerance: this.props.swipeScrollTolerance
      };
      var containerStyles = {};
      if (isHorizontal) {
        swiperProps.onSwipeLeft = this.onSwipeForward;
        swiperProps.onSwipeRight = this.onSwipeBackwards;
        if (this.props.dynamicHeight) {
          var itemHeight = this.getVariableItemHeight(this.state.selectedItem);
          containerStyles.height = itemHeight || "auto";
        }
      } else {
        swiperProps.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward;
        swiperProps.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards;
        swiperProps.style = _objectSpread(_objectSpread({}, swiperProps.style), {}, {
          height: this.state.itemSize
        });
        containerStyles.height = this.state.itemSize;
      }
      return /* @__PURE__ */ _react.default.createElement("div", {
        "aria-label": this.props.ariaLabel,
        className: _cssClasses.default.ROOT(this.props.className),
        ref: this.setCarouselWrapperRef,
        tabIndex: this.props.useKeyboardArrows ? 0 : void 0
      }, /* @__PURE__ */ _react.default.createElement("div", {
        className: _cssClasses.default.CAROUSEL(true),
        style: {
          width: this.props.width
        }
      }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), /* @__PURE__ */ _react.default.createElement("div", {
        className: _cssClasses.default.WRAPPER(true, this.props.axis),
        style: containerStyles
      }, isSwipeable ? /* @__PURE__ */ _react.default.createElement(_reactEasySwipe.default, _extends({
        tagName: "ul",
        innerRef: this.setListRef
      }, swiperProps, {
        allowMouseEvents: this.props.emulateTouch
      }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : /* @__PURE__ */ _react.default.createElement("ul", {
        className: _cssClasses.default.SLIDER(true, this.state.swiping),
        ref: function ref(node2) {
          return _this5.setListRef(node2);
        },
        style: this.state.itemListStyle || {}
      }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
    }
  }]);
  return Carousel2;
}(_react.default.Component);
Carousel$1.default = Carousel;
_defineProperty(Carousel, "displayName", "Carousel");
_defineProperty(Carousel, "defaultProps", {
  ariaLabel: void 0,
  axis: "horizontal",
  centerSlidePercentage: 80,
  interval: 3e3,
  labels: {
    leftArrow: "previous slide / item",
    rightArrow: "next slide / item",
    item: "slide item"
  },
  onClickItem: _utils.noop,
  onClickThumb: _utils.noop,
  onChange: _utils.noop,
  onSwipeStart: function onSwipeStart() {
  },
  onSwipeEnd: function onSwipeEnd() {
  },
  onSwipeMove: function onSwipeMove() {
    return false;
  },
  preventMovementUntilSwipeScrollTolerance: false,
  renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
    return /* @__PURE__ */ _react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_PREV(!hasPrev),
      onClick: onClickHandler
    });
  },
  renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
    return /* @__PURE__ */ _react.default.createElement("button", {
      type: "button",
      "aria-label": label,
      className: _cssClasses.default.ARROW_NEXT(!hasNext),
      onClick: onClickHandler
    });
  },
  renderIndicator: function renderIndicator(onClickHandler, isSelected, index, label) {
    return /* @__PURE__ */ _react.default.createElement("li", {
      className: _cssClasses.default.DOT(isSelected),
      onClick: onClickHandler,
      onKeyDown: onClickHandler,
      value: index,
      key: index,
      role: "button",
      tabIndex: 0,
      "aria-label": "".concat(label, " ").concat(index + 1)
    });
  },
  renderItem: function renderItem(item) {
    return item;
  },
  renderThumbs: function renderThumbs(children) {
    var images = _react.Children.map(children, function(item) {
      var img = item;
      if (item.type !== "img") {
        img = _react.Children.toArray(item.props.children).find(function(children2) {
          return children2.type === "img";
        });
      }
      if (!img) {
        return void 0;
      }
      return img;
    });
    if (images.filter(function(image) {
      return image;
    }).length === 0) {
      console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
      return [];
    }
    return images;
  },
  statusFormatter: _utils.defaultStatusFormatter,
  selectedItem: 0,
  showArrows: true,
  showIndicators: true,
  showStatus: true,
  showThumbs: true,
  stopOnHover: true,
  swipeScrollTolerance: 5,
  swipeable: true,
  transitionTime: 350,
  verticalSwipe: "standard",
  width: "100%",
  animationHandler: "slide",
  swipeAnimationHandler: _animations.slideSwipeAnimationHandler,
  stopSwipingHandler: _animations.slideStopSwipingHandler
});
var types = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Carousel", {
    enumerable: true,
    get: function get() {
      return _Carousel.default;
    }
  });
  Object.defineProperty(exports, "CarouselProps", {
    enumerable: true,
    get: function get() {
      return _types.CarouselProps;
    }
  });
  Object.defineProperty(exports, "Thumbs", {
    enumerable: true,
    get: function get() {
      return _Thumbs2.default;
    }
  });
  var _Carousel = _interopRequireDefault2(Carousel$1);
  var _types = types;
  var _Thumbs2 = _interopRequireDefault2(Thumbs$1);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
})(js);
var loadScript = function load(src, opts, cb) {
  var head = document.head || document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  if (typeof opts === "function") {
    cb = opts;
    opts = {};
  }
  opts = opts || {};
  cb = cb || function() {
  };
  script.type = opts.type || "text/javascript";
  script.charset = opts.charset || "utf8";
  script.async = "async" in opts ? !!opts.async : true;
  script.src = src;
  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }
  if (opts.text) {
    script.text = "" + opts.text;
  }
  var onend = "onload" in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);
  if (!script.onload) {
    stdOnEnd(script, cb);
  }
  head.appendChild(script);
};
function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}
function stdOnEnd(script, cb) {
  script.onload = function() {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function() {
    this.onerror = this.onload = null;
    cb(new Error("Failed to load " + this.src), script);
  };
}
function ieOnEnd(script, cb) {
  script.onreadystatechange = function() {
    if (this.readyState != "complete" && this.readyState != "loaded") return;
    this.onreadystatechange = null;
    cb(null, script);
  };
}
var __create$4 = Object.create;
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$6 = Object.getOwnPropertyNames;
var __getProtoOf$4 = Object.getPrototypeOf;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __export$6 = (target, all) => {
  for (var name in all)
    __defProp$6(target, name, { get: all[name], enumerable: true });
};
var __copyProps$6 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$6(from))
      if (!__hasOwnProp$6.call(to, key) && key !== except)
        __defProp$6(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$6(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$4 = (mod, isNodeMode, target) => (target = mod != null ? __create$4(__getProtoOf$4(mod)) : {}, __copyProps$6(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$6(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$6 = (mod) => __copyProps$6(__defProp$6({}, "__esModule", { value: true }), mod);
var utils_exports = {};
__export$6(utils_exports, {
  callPlayer: () => callPlayer,
  getConfig: () => getConfig,
  getSDK: () => getSDK,
  isBlobUrl: () => isBlobUrl,
  isMediaStream: () => isMediaStream,
  lazy: () => lazy,
  omit: () => omit,
  parseEndTime: () => parseEndTime,
  parseStartTime: () => parseStartTime,
  queryString: () => queryString,
  randomString: () => randomString,
  supportsWebKitPresentationMode: () => supportsWebKitPresentationMode
});
var utils = __toCommonJS$6(utils_exports);
var import_react$2 = __toESM$4(reactExports);
var import_load_script = __toESM$4(loadScript);
var import_deepmerge$1 = __toESM$4(cjs);
const lazy = (componentImportFn) => import_react$2.default.lazy(async () => {
  const obj = await componentImportFn();
  return typeof obj.default === "function" ? obj : obj.default;
});
const MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
const MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
const MATCH_START_STAMP = /(\d+)(h|m|s)/g;
const MATCH_NUMERIC = /^\d+$/;
function parseTimeParam(url, pattern) {
  if (url instanceof Array) {
    return void 0;
  }
  const match = url.match(pattern);
  if (match) {
    const stamp = match[1];
    if (stamp.match(MATCH_START_STAMP)) {
      return parseTimeString(stamp);
    }
    if (MATCH_NUMERIC.test(stamp)) {
      return parseInt(stamp);
    }
  }
  return void 0;
}
function parseTimeString(stamp) {
  let seconds = 0;
  let array2 = MATCH_START_STAMP.exec(stamp);
  while (array2 !== null) {
    const [, count, period] = array2;
    if (period === "h")
      seconds += parseInt(count, 10) * 60 * 60;
    if (period === "m")
      seconds += parseInt(count, 10) * 60;
    if (period === "s")
      seconds += parseInt(count, 10);
    array2 = MATCH_START_STAMP.exec(stamp);
  }
  return seconds;
}
function parseStartTime(url) {
  return parseTimeParam(url, MATCH_START_QUERY);
}
function parseEndTime(url) {
  return parseTimeParam(url, MATCH_END_QUERY);
}
function randomString() {
  return Math.random().toString(36).substr(2, 5);
}
function queryString(object2) {
  return Object.keys(object2).map((key) => `${key}=${object2[key]}`).join("&");
}
function getGlobal(key) {
  if (window[key]) {
    return window[key];
  }
  if (window.exports && window.exports[key]) {
    return window.exports[key];
  }
  if (window.module && window.module.exports && window.module.exports[key]) {
    return window.module.exports[key];
  }
  return null;
}
const requests = {};
const getSDK = enableStubOn(function getSDK2(url, sdkGlobal, sdkReady = null, isLoaded = () => true, fetchScript = import_load_script.default) {
  const existingGlobal = getGlobal(sdkGlobal);
  if (existingGlobal && isLoaded(existingGlobal)) {
    return Promise.resolve(existingGlobal);
  }
  return new Promise((resolve, reject) => {
    if (requests[url]) {
      requests[url].push({ resolve, reject });
      return;
    }
    requests[url] = [{ resolve, reject }];
    const onLoaded = (sdk) => {
      requests[url].forEach((request) => request.resolve(sdk));
    };
    if (sdkReady) {
      const previousOnReady = window[sdkReady];
      window[sdkReady] = function() {
        if (previousOnReady)
          previousOnReady();
        onLoaded(getGlobal(sdkGlobal));
      };
    }
    fetchScript(url, (err) => {
      if (err) {
        requests[url].forEach((request) => request.reject(err));
        requests[url] = null;
      } else if (!sdkReady) {
        onLoaded(getGlobal(sdkGlobal));
      }
    });
  });
});
function getConfig(props2, defaultProps2) {
  return (0, import_deepmerge$1.default)(defaultProps2.config, props2.config);
}
function omit(object2, ...arrays) {
  const omitKeys = [].concat(...arrays);
  const output = {};
  const keys = Object.keys(object2);
  for (const key of keys) {
    if (omitKeys.indexOf(key) === -1) {
      output[key] = object2[key];
    }
  }
  return output;
}
function callPlayer(method, ...args) {
  if (!this.player || !this.player[method]) {
    let message = `ReactPlayer: ${this.constructor.displayName} player could not call %c${method}%c – `;
    if (!this.player) {
      message += "The player was not available";
    } else if (!this.player[method]) {
      message += "The method was not available";
    }
    console.warn(message, "font-weight: bold", "");
    return null;
  }
  return this.player[method](...args);
}
function isMediaStream(url) {
  return typeof window !== "undefined" && typeof window.MediaStream !== "undefined" && url instanceof window.MediaStream;
}
function isBlobUrl(url) {
  return /^blob:/.test(url);
}
function supportsWebKitPresentationMode(video = document.createElement("video")) {
  const notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
  return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function" && notMobile;
}
function enableStubOn(fn) {
  return fn;
}
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$5 = Object.getOwnPropertyNames;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __export$5 = (target, all) => {
  for (var name in all)
    __defProp$5(target, name, { get: all[name], enumerable: true });
};
var __copyProps$5 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$5(from))
      if (!__hasOwnProp$5.call(to, key) && key !== except)
        __defProp$5(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$5(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS$5 = (mod) => __copyProps$5(__defProp$5({}, "__esModule", { value: true }), mod);
var patterns_exports = {};
__export$5(patterns_exports, {
  AUDIO_EXTENSIONS: () => AUDIO_EXTENSIONS,
  DASH_EXTENSIONS: () => DASH_EXTENSIONS,
  FLV_EXTENSIONS: () => FLV_EXTENSIONS,
  HLS_EXTENSIONS: () => HLS_EXTENSIONS,
  MATCH_URL_DAILYMOTION: () => MATCH_URL_DAILYMOTION,
  MATCH_URL_FACEBOOK: () => MATCH_URL_FACEBOOK,
  MATCH_URL_FACEBOOK_WATCH: () => MATCH_URL_FACEBOOK_WATCH,
  MATCH_URL_KALTURA: () => MATCH_URL_KALTURA,
  MATCH_URL_MIXCLOUD: () => MATCH_URL_MIXCLOUD,
  MATCH_URL_MUX: () => MATCH_URL_MUX,
  MATCH_URL_SOUNDCLOUD: () => MATCH_URL_SOUNDCLOUD,
  MATCH_URL_STREAMABLE: () => MATCH_URL_STREAMABLE,
  MATCH_URL_TWITCH_CHANNEL: () => MATCH_URL_TWITCH_CHANNEL,
  MATCH_URL_TWITCH_VIDEO: () => MATCH_URL_TWITCH_VIDEO,
  MATCH_URL_VIDYARD: () => MATCH_URL_VIDYARD,
  MATCH_URL_VIMEO: () => MATCH_URL_VIMEO,
  MATCH_URL_WISTIA: () => MATCH_URL_WISTIA,
  MATCH_URL_YOUTUBE: () => MATCH_URL_YOUTUBE,
  VIDEO_EXTENSIONS: () => VIDEO_EXTENSIONS,
  canPlay: () => canPlay
});
var patterns = __toCommonJS$5(patterns_exports);
var import_utils$3 = utils;
const MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
const MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
const MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
const MATCH_URL_MUX = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/;
const MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
const MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
const MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
const MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;
const MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
const MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
const MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;
const MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
const MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
const MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;
const AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
const VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
const HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
const DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
const FLV_EXTENSIONS = /\.(flv)($|\?)/i;
const canPlayFile = (url) => {
  if (url instanceof Array) {
    for (const item of url) {
      if (typeof item === "string" && canPlayFile(item)) {
        return true;
      }
      if (canPlayFile(item.src)) {
        return true;
      }
    }
    return false;
  }
  if ((0, import_utils$3.isMediaStream)(url) || (0, import_utils$3.isBlobUrl)(url)) {
    return true;
  }
  return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
};
const canPlay = {
  youtube: (url) => {
    if (url instanceof Array) {
      return url.every((item) => MATCH_URL_YOUTUBE.test(item));
    }
    return MATCH_URL_YOUTUBE.test(url);
  },
  soundcloud: (url) => MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url),
  vimeo: (url) => MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url),
  mux: (url) => MATCH_URL_MUX.test(url),
  facebook: (url) => MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url),
  streamable: (url) => MATCH_URL_STREAMABLE.test(url),
  wistia: (url) => MATCH_URL_WISTIA.test(url),
  twitch: (url) => MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url),
  dailymotion: (url) => MATCH_URL_DAILYMOTION.test(url),
  mixcloud: (url) => MATCH_URL_MIXCLOUD.test(url),
  vidyard: (url) => MATCH_URL_VIDYARD.test(url),
  kaltura: (url) => MATCH_URL_KALTURA.test(url),
  file: canPlayFile
};
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$4 = Object.getOwnPropertyNames;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __export$4 = (target, all) => {
  for (var name in all)
    __defProp$4(target, name, { get: all[name], enumerable: true });
};
var __copyProps$4 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$4(from))
      if (!__hasOwnProp$4.call(to, key) && key !== except)
        __defProp$4(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$4(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS$4 = (mod) => __copyProps$4(__defProp$4({}, "__esModule", { value: true }), mod);
var players_exports = {};
__export$4(players_exports, {
  default: () => players_default
});
var players = __toCommonJS$4(players_exports);
var import_utils$2 = utils;
var import_patterns = patterns;
var players_default = [
  {
    key: "youtube",
    name: "YouTube",
    canPlay: import_patterns.canPlay.youtube,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerYouTube' */
      "./YouTube-Cx2I2Gvb.js"
    ).then((n) => n.Y), true ? __vite__mapDeps([0,1,2]) : void 0))
  },
  {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: import_patterns.canPlay.soundcloud,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerSoundCloud' */
      "./SoundCloud-UHkIOLPR.js"
    ).then((n) => n.S), true ? __vite__mapDeps([3,1,2]) : void 0))
  },
  {
    key: "vimeo",
    name: "Vimeo",
    canPlay: import_patterns.canPlay.vimeo,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerVimeo' */
      "./Vimeo-o7B6Cg50.js"
    ).then((n) => n.V), true ? __vite__mapDeps([4,1,2]) : void 0))
  },
  {
    key: "mux",
    name: "Mux",
    canPlay: import_patterns.canPlay.mux,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerMux' */
      "./Mux-x8LqZMsq.js"
    ).then((n) => n.M), true ? __vite__mapDeps([5,1,2]) : void 0))
  },
  {
    key: "facebook",
    name: "Facebook",
    canPlay: import_patterns.canPlay.facebook,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerFacebook' */
      "./Facebook-CxoYo-hx.js"
    ).then((n) => n.F), true ? __vite__mapDeps([6,1,2]) : void 0))
  },
  {
    key: "streamable",
    name: "Streamable",
    canPlay: import_patterns.canPlay.streamable,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerStreamable' */
      "./Streamable-C2eJraUn.js"
    ).then((n) => n.S), true ? __vite__mapDeps([7,1,2]) : void 0))
  },
  {
    key: "wistia",
    name: "Wistia",
    canPlay: import_patterns.canPlay.wistia,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerWistia' */
      "./Wistia-DdpwX_xR.js"
    ).then((n) => n.W), true ? __vite__mapDeps([8,1,2]) : void 0))
  },
  {
    key: "twitch",
    name: "Twitch",
    canPlay: import_patterns.canPlay.twitch,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerTwitch' */
      "./Twitch-VUQOhXN_.js"
    ).then((n) => n.T), true ? __vite__mapDeps([9,1,2]) : void 0))
  },
  {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: import_patterns.canPlay.dailymotion,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerDailyMotion' */
      "./DailyMotion-Ce0xA9pN.js"
    ).then((n) => n.D), true ? __vite__mapDeps([10,1,2]) : void 0))
  },
  {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: import_patterns.canPlay.mixcloud,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerMixcloud' */
      "./Mixcloud-CV1i858f.js"
    ).then((n) => n.M), true ? __vite__mapDeps([11,1,2]) : void 0))
  },
  {
    key: "vidyard",
    name: "Vidyard",
    canPlay: import_patterns.canPlay.vidyard,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerVidyard' */
      "./Vidyard-sqNLAN1b.js"
    ).then((n) => n.V), true ? __vite__mapDeps([12,1,2]) : void 0))
  },
  {
    key: "kaltura",
    name: "Kaltura",
    canPlay: import_patterns.canPlay.kaltura,
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerKaltura' */
      "./Kaltura-BaNP-uDo.js"
    ).then((n) => n.K), true ? __vite__mapDeps([13,1,2]) : void 0))
  },
  {
    key: "file",
    name: "FilePlayer",
    canPlay: import_patterns.canPlay.file,
    canEnablePIP: (url) => {
      return import_patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, import_utils$2.supportsWebKitPresentationMode)()) && !import_patterns.AUDIO_EXTENSIONS.test(url);
    },
    lazyPlayer: (0, import_utils$2.lazy)(() => __vitePreload(() => import(
      /* webpackChunkName: 'reactPlayerFilePlayer' */
      "./FilePlayer-CHZqB5kO.js"
    ).then((n) => n.F), true ? __vite__mapDeps([14,1,2]) : void 0))
  }
];
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual3) {
  if (isEqual3 === void 0) {
    isEqual3 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual3(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
const memoizeOne_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: memoizeOne
}, Symbol.toStringTag, { value: "Module" }));
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(memoizeOne_esm);
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a, b) {
  if (a === b) return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i])) return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i]) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    if (hasElementType && a instanceof Element) return false;
    for (i = length; i-- !== 0; ) {
      if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var reactFastCompare = function isEqual2(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
var __create$3 = Object.create;
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$3 = Object.getOwnPropertyNames;
var __getProtoOf$3 = Object.getPrototypeOf;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __export$3 = (target, all) => {
  for (var name in all)
    __defProp$3(target, name, { get: all[name], enumerable: true });
};
var __copyProps$3 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$3(from))
      if (!__hasOwnProp$3.call(to, key) && key !== except)
        __defProp$3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$3(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$3 = (mod, isNodeMode, target) => (target = mod != null ? __create$3(__getProtoOf$3(mod)) : {}, __copyProps$3(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$3(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$3 = (mod) => __copyProps$3(__defProp$3({}, "__esModule", { value: true }), mod);
var props_exports = {};
__export$3(props_exports, {
  defaultProps: () => defaultProps,
  propTypes: () => propTypes
});
var props = __toCommonJS$3(props_exports);
var import_prop_types = __toESM$3(propTypesExports);
const { string, bool, number, array, oneOfType, shape, object, func, node } = import_prop_types.default;
const propTypes = {
  url: oneOfType([string, array, object]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  stopOnUnmount: bool,
  light: oneOfType([bool, string, object]),
  playIcon: node,
  previewTabIndex: number,
  previewAriaLabel: string,
  fallback: node,
  oEmbedUrl: string,
  wrapper: oneOfType([
    string,
    func,
    shape({ render: func.isRequired })
  ]),
  config: shape({
    soundcloud: shape({
      options: object
    }),
    youtube: shape({
      playerVars: object,
      embedOptions: object,
      onUnstarted: func
    }),
    facebook: shape({
      appId: string,
      version: string,
      playerId: string,
      attributes: object
    }),
    dailymotion: shape({
      params: object
    }),
    vimeo: shape({
      playerOptions: object,
      title: string
    }),
    mux: shape({
      attributes: object,
      version: string
    }),
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceSafariHLS: bool,
      forceDisableHls: bool,
      forceDASH: bool,
      forceFLV: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string,
      flvVersion: string
    }),
    wistia: shape({
      options: object,
      playerId: string,
      customControls: array
    }),
    mixcloud: shape({
      options: object
    }),
    twitch: shape({
      options: object,
      playerId: string
    }),
    vidyard: shape({
      options: object
    })
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onPlaybackRateChange: func,
  onPlaybackQualityChange: func,
  onProgress: func,
  onClickPreview: func,
  onEnablePIP: func,
  onDisablePIP: func
};
const noop2 = () => {
};
const defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: "640px",
  height: "360px",
  style: {},
  progressInterval: 1e3,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  light: false,
  fallback: null,
  wrapper: "div",
  previewTabIndex: 0,
  previewAriaLabel: "",
  oEmbedUrl: "https://noembed.com/embed?url={url}",
  config: {
    soundcloud: {
      options: {
        visual: true,
        // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: noop2
    },
    facebook: {
      appId: "1309697205772819",
      version: "v3.3",
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        "endscreen-enable": false
      }
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false
      },
      title: null
    },
    mux: {
      attributes: {},
      version: "2"
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      forceFLV: false,
      hlsOptions: {},
      hlsVersion: "1.1.4",
      dashVersion: "3.1.3",
      flvVersion: "1.5.0",
      forceDisableHls: false
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: noop2,
  onStart: noop2,
  onPlay: noop2,
  onPause: noop2,
  onBuffer: noop2,
  onBufferEnd: noop2,
  onEnded: noop2,
  onError: noop2,
  onDuration: noop2,
  onSeek: noop2,
  onPlaybackRateChange: noop2,
  onPlaybackQualityChange: noop2,
  onProgress: noop2,
  onClickPreview: noop2,
  onEnablePIP: noop2,
  onDisablePIP: noop2
};
var __create$2 = Object.create;
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$2 = Object.getOwnPropertyNames;
var __getProtoOf$2 = Object.getPrototypeOf;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export$2 = (target, all) => {
  for (var name in all)
    __defProp$2(target, name, { get: all[name], enumerable: true });
};
var __copyProps$2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$2(from))
      if (!__hasOwnProp$2.call(to, key) && key !== except)
        __defProp$2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$2(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$2 = (mod, isNodeMode, target) => (target = mod != null ? __create$2(__getProtoOf$2(mod)) : {}, __copyProps$2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$2 = (mod) => __copyProps$2(__defProp$2({}, "__esModule", { value: true }), mod);
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var Player_exports = {};
__export$2(Player_exports, {
  default: () => Player
});
var Player_1 = __toCommonJS$2(Player_exports);
var import_react$1 = __toESM$2(reactExports);
var import_react_fast_compare$1 = __toESM$2(reactFastCompare);
var import_props$1 = props;
var import_utils$1 = utils;
const SEEK_ON_PLAY_EXPIRY = 5e3;
class Player extends import_react$1.Component {
  constructor() {
    super(...arguments);
    __publicField$1(this, "mounted", false);
    __publicField$1(this, "isReady", false);
    __publicField$1(this, "isPlaying", false);
    __publicField$1(this, "isLoading", true);
    __publicField$1(this, "loadOnReady", null);
    __publicField$1(this, "startOnPlay", true);
    __publicField$1(this, "seekOnPlay", null);
    __publicField$1(this, "onDurationCalled", false);
    __publicField$1(this, "handlePlayerMount", (player) => {
      if (this.player) {
        this.progress();
        return;
      }
      this.player = player;
      this.player.load(this.props.url);
      this.progress();
    });
    __publicField$1(this, "getInternalPlayer", (key) => {
      if (!this.player)
        return null;
      return this.player[key];
    });
    __publicField$1(this, "progress", () => {
      if (this.props.url && this.player && this.isReady) {
        const playedSeconds = this.getCurrentTime() || 0;
        const loadedSeconds = this.getSecondsLoaded();
        const duration = this.getDuration();
        if (duration) {
          const progress = {
            playedSeconds,
            played: playedSeconds / duration
          };
          if (loadedSeconds !== null) {
            progress.loadedSeconds = loadedSeconds;
            progress.loaded = loadedSeconds / duration;
          }
          if (progress.playedSeconds !== this.prevPlayed || progress.loadedSeconds !== this.prevLoaded) {
            this.props.onProgress(progress);
          }
          this.prevPlayed = progress.playedSeconds;
          this.prevLoaded = progress.loadedSeconds;
        }
      }
      this.progressTimeout = setTimeout(this.progress, this.props.progressFrequency || this.props.progressInterval);
    });
    __publicField$1(this, "handleReady", () => {
      if (!this.mounted)
        return;
      this.isReady = true;
      this.isLoading = false;
      const { onReady, playing, volume, muted } = this.props;
      onReady();
      if (!muted && volume !== null) {
        this.player.setVolume(volume);
      }
      if (this.loadOnReady) {
        this.player.load(this.loadOnReady, true);
        this.loadOnReady = null;
      } else if (playing) {
        this.player.play();
      }
      this.handleDurationCheck();
    });
    __publicField$1(this, "handlePlay", () => {
      this.isPlaying = true;
      this.isLoading = false;
      const { onStart, onPlay, playbackRate } = this.props;
      if (this.startOnPlay) {
        if (this.player.setPlaybackRate && playbackRate !== 1) {
          this.player.setPlaybackRate(playbackRate);
        }
        onStart();
        this.startOnPlay = false;
      }
      onPlay();
      if (this.seekOnPlay) {
        this.seekTo(this.seekOnPlay);
        this.seekOnPlay = null;
      }
      this.handleDurationCheck();
    });
    __publicField$1(this, "handlePause", (e) => {
      this.isPlaying = false;
      if (!this.isLoading) {
        this.props.onPause(e);
      }
    });
    __publicField$1(this, "handleEnded", () => {
      const { activePlayer, loop, onEnded } = this.props;
      if (activePlayer.loopOnEnded && loop) {
        this.seekTo(0);
      }
      if (!loop) {
        this.isPlaying = false;
        onEnded();
      }
    });
    __publicField$1(this, "handleError", (...args) => {
      this.isLoading = false;
      this.props.onError(...args);
    });
    __publicField$1(this, "handleDurationCheck", () => {
      clearTimeout(this.durationCheckTimeout);
      const duration = this.getDuration();
      if (duration) {
        if (!this.onDurationCalled) {
          this.props.onDuration(duration);
          this.onDurationCalled = true;
        }
      } else {
        this.durationCheckTimeout = setTimeout(this.handleDurationCheck, 100);
      }
    });
    __publicField$1(this, "handleLoaded", () => {
      this.isLoading = false;
    });
  }
  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    clearTimeout(this.progressTimeout);
    clearTimeout(this.durationCheckTimeout);
    if (this.isReady && this.props.stopOnUnmount) {
      this.player.stop();
      if (this.player.disablePIP) {
        this.player.disablePIP();
      }
    }
    this.mounted = false;
  }
  componentDidUpdate(prevProps) {
    if (!this.player) {
      return;
    }
    const { url, playing, volume, muted, playbackRate, pip, loop, activePlayer, disableDeferredLoading } = this.props;
    if (!(0, import_react_fast_compare$1.default)(prevProps.url, url)) {
      if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, import_utils$1.isMediaStream)(url)) {
        console.warn(`ReactPlayer: the attempt to load ${url} is being deferred until the player has loaded`);
        this.loadOnReady = url;
        return;
      }
      this.isLoading = true;
      this.startOnPlay = true;
      this.onDurationCalled = false;
      this.player.load(url, this.isReady);
    }
    if (!prevProps.playing && playing && !this.isPlaying) {
      this.player.play();
    }
    if (prevProps.playing && !playing && this.isPlaying) {
      this.player.pause();
    }
    if (!prevProps.pip && pip && this.player.enablePIP) {
      this.player.enablePIP();
    }
    if (prevProps.pip && !pip && this.player.disablePIP) {
      this.player.disablePIP();
    }
    if (prevProps.volume !== volume && volume !== null) {
      this.player.setVolume(volume);
    }
    if (prevProps.muted !== muted) {
      if (muted) {
        this.player.mute();
      } else {
        this.player.unmute();
        if (volume !== null) {
          setTimeout(() => this.player.setVolume(volume));
        }
      }
    }
    if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
      this.player.setPlaybackRate(playbackRate);
    }
    if (prevProps.loop !== loop && this.player.setLoop) {
      this.player.setLoop(loop);
    }
  }
  getDuration() {
    if (!this.isReady)
      return null;
    return this.player.getDuration();
  }
  getCurrentTime() {
    if (!this.isReady)
      return null;
    return this.player.getCurrentTime();
  }
  getSecondsLoaded() {
    if (!this.isReady)
      return null;
    return this.player.getSecondsLoaded();
  }
  seekTo(amount, type, keepPlaying) {
    if (!this.isReady) {
      if (amount !== 0) {
        this.seekOnPlay = amount;
        setTimeout(() => {
          this.seekOnPlay = null;
        }, SEEK_ON_PLAY_EXPIRY);
      }
      return;
    }
    const isFraction = !type ? amount > 0 && amount < 1 : type === "fraction";
    if (isFraction) {
      const duration = this.player.getDuration();
      if (!duration) {
        console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
        return;
      }
      this.player.seekTo(duration * amount, keepPlaying);
      return;
    }
    this.player.seekTo(amount, keepPlaying);
  }
  render() {
    const Player2 = this.props.activePlayer;
    if (!Player2) {
      return null;
    }
    return /* @__PURE__ */ import_react$1.default.createElement(
      Player2,
      {
        ...this.props,
        onMount: this.handlePlayerMount,
        onReady: this.handleReady,
        onPlay: this.handlePlay,
        onPause: this.handlePause,
        onEnded: this.handleEnded,
        onLoaded: this.handleLoaded,
        onError: this.handleError
      }
    );
  }
}
__publicField$1(Player, "displayName", "Player");
__publicField$1(Player, "propTypes", import_props$1.propTypes);
__publicField$1(Player, "defaultProps", import_props$1.defaultProps);
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf$1 = Object.getPrototypeOf;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export$1 = (target, all) => {
  for (var name in all)
    __defProp$1(target, name, { get: all[name], enumerable: true });
};
var __copyProps$1 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames$1(from))
      if (!__hasOwnProp$1.call(to, key) && key !== except)
        __defProp$1(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM$1 = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$1(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS$1 = (mod) => __copyProps$1(__defProp$1({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var ReactPlayer_exports = {};
__export$1(ReactPlayer_exports, {
  createReactPlayer: () => createReactPlayer
});
var ReactPlayer$1 = __toCommonJS$1(ReactPlayer_exports);
var import_react = __toESM$1(reactExports);
var import_deepmerge = __toESM$1(cjs);
var import_memoize_one = __toESM$1(require$$2);
var import_react_fast_compare = __toESM$1(reactFastCompare);
var import_props = props;
var import_utils = utils;
var import_Player = __toESM$1(Player_1);
const Preview = (0, import_utils.lazy)(() => __vitePreload(() => import(
  /* webpackChunkName: 'reactPlayerPreview' */
  "./Preview-CwuXlofZ.js"
).then((n) => n.P), true ? __vite__mapDeps([15,1,2]) : void 0));
const IS_BROWSER = typeof window !== "undefined" && window.document && typeof document !== "undefined";
const IS_GLOBAL = typeof commonjsGlobal !== "undefined" && commonjsGlobal.window && commonjsGlobal.window.document;
const SUPPORTED_PROPS = Object.keys(import_props.propTypes);
const UniversalSuspense = IS_BROWSER || IS_GLOBAL ? import_react.Suspense : () => null;
const customPlayers = [];
const createReactPlayer = (players2, fallback2) => {
  var _a;
  return _a = class extends import_react.Component {
    constructor() {
      super(...arguments);
      __publicField(this, "state", {
        showPreview: !!this.props.light
      });
      __publicField(this, "references", {
        wrapper: (wrapper) => {
          this.wrapper = wrapper;
        },
        player: (player) => {
          this.player = player;
        }
      });
      __publicField(this, "handleClickPreview", (e) => {
        this.setState({ showPreview: false });
        this.props.onClickPreview(e);
      });
      __publicField(this, "showPreview", () => {
        this.setState({ showPreview: true });
      });
      __publicField(this, "getDuration", () => {
        if (!this.player)
          return null;
        return this.player.getDuration();
      });
      __publicField(this, "getCurrentTime", () => {
        if (!this.player)
          return null;
        return this.player.getCurrentTime();
      });
      __publicField(this, "getSecondsLoaded", () => {
        if (!this.player)
          return null;
        return this.player.getSecondsLoaded();
      });
      __publicField(this, "getInternalPlayer", (key = "player") => {
        if (!this.player)
          return null;
        return this.player.getInternalPlayer(key);
      });
      __publicField(this, "seekTo", (fraction, type, keepPlaying) => {
        if (!this.player)
          return null;
        this.player.seekTo(fraction, type, keepPlaying);
      });
      __publicField(this, "handleReady", () => {
        this.props.onReady(this);
      });
      __publicField(this, "getActivePlayer", (0, import_memoize_one.default)((url) => {
        for (const player of [...customPlayers, ...players2]) {
          if (player.canPlay(url)) {
            return player;
          }
        }
        if (fallback2) {
          return fallback2;
        }
        return null;
      }));
      __publicField(this, "getConfig", (0, import_memoize_one.default)((url, key) => {
        const { config } = this.props;
        return import_deepmerge.default.all([
          import_props.defaultProps.config,
          import_props.defaultProps.config[key] || {},
          config,
          config[key] || {}
        ]);
      }));
      __publicField(this, "getAttributes", (0, import_memoize_one.default)((url) => {
        return (0, import_utils.omit)(this.props, SUPPORTED_PROPS);
      }));
      __publicField(this, "renderActivePlayer", (url) => {
        if (!url)
          return null;
        const player = this.getActivePlayer(url);
        if (!player)
          return null;
        const config = this.getConfig(url, player.key);
        return /* @__PURE__ */ import_react.default.createElement(
          import_Player.default,
          {
            ...this.props,
            key: player.key,
            ref: this.references.player,
            config,
            activePlayer: player.lazyPlayer || player,
            onReady: this.handleReady
          }
        );
      });
    }
    shouldComponentUpdate(nextProps, nextState) {
      return !(0, import_react_fast_compare.default)(this.props, nextProps) || !(0, import_react_fast_compare.default)(this.state, nextState);
    }
    componentDidUpdate(prevProps) {
      const { light } = this.props;
      if (!prevProps.light && light) {
        this.setState({ showPreview: true });
      }
      if (prevProps.light && !light) {
        this.setState({ showPreview: false });
      }
    }
    renderPreview(url) {
      if (!url)
        return null;
      const { light, playIcon, previewTabIndex, oEmbedUrl, previewAriaLabel } = this.props;
      return /* @__PURE__ */ import_react.default.createElement(
        Preview,
        {
          url,
          light,
          playIcon,
          previewTabIndex,
          previewAriaLabel,
          oEmbedUrl,
          onClick: this.handleClickPreview
        }
      );
    }
    render() {
      const { url, style, width, height, fallback: fallback22, wrapper: Wrapper } = this.props;
      const { showPreview } = this.state;
      const attributes = this.getAttributes(url);
      const wrapperRef = typeof Wrapper === "string" ? this.references.wrapper : void 0;
      return /* @__PURE__ */ import_react.default.createElement(Wrapper, { ref: wrapperRef, style: { ...style, width, height }, ...attributes }, /* @__PURE__ */ import_react.default.createElement(UniversalSuspense, { fallback: fallback22 }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
    }
  }, __publicField(_a, "displayName", "ReactPlayer"), __publicField(_a, "propTypes", import_props.propTypes), __publicField(_a, "defaultProps", import_props.defaultProps), __publicField(_a, "addCustomPlayer", (player) => {
    customPlayers.push(player);
  }), __publicField(_a, "removeCustomPlayers", () => {
    customPlayers.length = 0;
  }), __publicField(_a, "canPlay", (url) => {
    for (const Player2 of [...customPlayers, ...players2]) {
      if (Player2.canPlay(url)) {
        return true;
      }
    }
    return false;
  }), __publicField(_a, "canEnablePIP", (url) => {
    for (const Player2 of [...customPlayers, ...players2]) {
      if (Player2.canEnablePIP && Player2.canEnablePIP(url)) {
        return true;
      }
    }
    return false;
  }), _a;
};
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
var lib = __toCommonJS(src_exports);
var import_players = __toESM(players);
var import_ReactPlayer = ReactPlayer$1;
const fallback = import_players.default[import_players.default.length - 1];
var src_default = (0, import_ReactPlayer.createReactPlayer)(import_players.default, fallback);
const ReactPlayer = /* @__PURE__ */ getDefaultExportFromCjs(lib);
const WorkspaceCarousel = ({ workspace }) => {
  const carouselItems = React.useMemo(() => {
    var _a;
    const items = [];
    if (((_a = workspace.photos) == null ? void 0 : _a.length) > 0) {
      items.push(
        ...workspace.photos.map((image, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image,
            alt: `Office view ${index + 1}`,
            className: "object-cover w-full h-full"
          }
        ) }, `photo-${index}`))
      );
    } else {
      items.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-700",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "No photos available" })
          },
          "no-photos"
        )
      );
    }
    if (workspace.video) {
      items.push(
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ReactPlayer,
          {
            url: workspace.video,
            width: "100%",
            height: "100%",
            controls: true
          }
        ) }, "video")
      );
    }
    return items;
  }, [workspace.photos, workspace.video]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(js.Carousel, { showThumbs: false, showStatus: false, children: carouselItems }) }) });
};
const WorkspaceView = () => {
  const [workspace, setWorkspace] = reactExports.useState({});
  const [reviews, setReviews] = reactExports.useState([]);
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const quickInfoItems = [
    {
      icon: FaChair,
      label: "Seats",
      value: workspace.seatsPerTable * workspace.tablesAvailable
    },
    {
      icon: FaClock,
      label: "Hours",
      value: workspace.timing
    },
    {
      icon: FaRupeeSign,
      label: "Price",
      value: `₹${workspace == null ? void 0 : workspace.pricePerSeat}`
    },
    {
      icon: FaCalendar,
      label: "Days",
      value: workspace.workingDays
    }
  ];
  reactExports.useEffect(() => {
    const fetchDetails = async () => {
      try {
        dispatch(setLoading(true));
        const response = await getSingleWorkspace(id);
        if ((response == null ? void 0 : response.status) === 200) {
          const seatsAvailable = await getAvailableSeats(id);
          if ((seatsAvailable == null ? void 0 : seatsAvailable.status) === 200) {
          }
        }
        await new Promise((resolve) => setTimeout(resolve, 300));
        setWorkspace(response == null ? void 0 : response.data.data);
        dispatch(setLoading(false));
      } catch (error) {
        console.error(error);
        dispatch(setLoading(false));
        _t.error("An error occurred. Please try again.");
      }
    };
    const fetchReviews = async () => {
      try {
        const response = await getReviews(id);
        if ((response == null ? void 0 : response.status) === 200) setReviews(response.data.data);
      } catch (error) {
        console.error(error);
        _t.error("An error occurred. Please try again.");
      }
    };
    window.scrollTo(0, 0);
    fetchDetails();
    fetchReviews();
  }, [dispatch, id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: loading || !workspace ? /* @__PURE__ */ jsxRuntimeExports.jsx(WorkspaceSkeleton, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => window.history.back(),
          className: "p-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaArrowLeft, { className: "text-gray-600 dark:text-gray-300" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: [
        workspace.buildingName,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-gray-500 dark:text-gray-400 ml-2", children: workspace.district })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(WorkspaceCarousel, { workspace }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 p-4", children: quickInfoItems.map((item, index) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "mx-auto text-gray-600 dark:text-gray-300 mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 dark:text-gray-400", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-900 dark:text-white", children: item.value })
            ]
          },
          index
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-4 border-t dark:border-gray-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: `/workspace/${workspace == null ? void 0 : workspace._id}/book`,
            state: { workspace },
            className: "flex-1",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaTicketAlt, { className: "text-sm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Book Now" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => window.open(`tel:${workspace == null ? void 0 : workspace.contactNo}`),
            className: "px-4 py-2 border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 rounded-lg",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaPhoneAlt, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => window.open(
              `https://www.google.com/maps/search/?api=1&query=${workspace.location}`,
              "_blank"
            ),
            className: "px-4 py-2 border-2 border-orange-600 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-gray-700 rounded-lg",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaMapMarkerAlt, {})
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-4", children: "Amenities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["AC", "Free Wifi", "Power Backup"].map((amenity) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "px-3 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Battery, { className: "text-sm" }),
            amenity
          ]
        },
        amenity
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: "Reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-1 bg-green-500 text-white rounded-lg text-sm", children: [
            (reviews.reduce((acc, curr) => acc + (curr == null ? void 0 : curr.rating), 0) / reviews.length).toFixed(1),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "inline ml-1", size: 14 })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
            "(",
            reviews.length,
            ")"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: reviews.length > 0 ? reviews.slice(0, 3).map((review, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-medium text-gray-900 dark:text-white", children: review.userId.fullName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({ length: review.rating }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Star,
                {
                  className: "text-yellow-400",
                  size: 14
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300", children: review.comment })
          ]
        },
        index
      )) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-gray-500 dark:text-gray-400 py-4", children: "No reviews yet" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewForm, { workspaceId: workspace == null ? void 0 : workspace._id }) })
  ] }) }) });
};
const ViewWorkspacePage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen mx-auto flex flex-col bg-[#FAF1DF] dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SearchBar, { onSearch: () => {
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex-1 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkspaceView, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) }) });
};
const ViewWorkspace = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ViewWorkspacePage
}, Symbol.toStringTag, { value: "Module" }));
export {
  ViewWorkspace as V,
  patterns as p,
  utils as u
};
