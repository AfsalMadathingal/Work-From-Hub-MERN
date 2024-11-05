import { r as reactExports, f as getAugmentedNamespace, h as getDefaultExportFromCjs, bK as interopRequireDefaultExports, p as propTypesExports, af as useNavigate, j as jsxRuntimeExports, v as FaMapMarkerAlt, b1 as FaPhone, b2 as FaPowerOff, b3 as FaSnowflake, b4 as FaToilet, k as FaChair, b5 as FaDollarSign, bL as rejectWorkspace, y as _t, bM as approveWorkspace, i as useParams, ag as ReactLoading, ak as PRIMARY_COLOR, bN as getWorkspace } from "./index-CTy2qHgP.js";
import { R as ResponsiveDrawer } from "./AdminLayout-C1017qFS.js";
import { l as lodash_debounce } from "./index-DLHuk5DV.js";
import { r as requireClassnames } from "./index-X3VZbKVJ.js";
import { d as defineProperty$1, _ as _defineProperty$5 } from "./defineProperty-HdmO2Bss.js";
import { r as requireObjectWithoutPropertiesLoose, b as require_extends } from "./Modal-mOoAhFB-.js";
import { D as Dialog } from "./Dialog-CisY6Zkl.js";
import { n as notify } from "./NotificationService-BFNGC8ax.js";
import "tslib";
import "./Logout-9OedVr_p.js";
import "./index-Dn0LtB1c.js";
var lib$1 = {};
var slider = {};
var innerSlider = {};
var initialState = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var initialState2 = {
    animating: false,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: false,
    edgeDragged: false,
    initialized: false,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: false,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: false,
    // used by swipeEvent. differentites between touch and swipe.
    swiping: false,
    touchObject: {
      startX: 0,
      startY: 0,
      curX: 0,
      curY: 0
    },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0
  };
  exports["default"] = initialState2;
})(initialState);
var innerSliderUtils = {};
var defaultProps = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react2 = _interopRequireDefault2(reactExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var defaultProps2 = {
    accessibility: true,
    adaptiveHeight: false,
    afterChange: null,
    appendDots: function appendDots(dots2) {
      return /* @__PURE__ */ _react2["default"].createElement("ul", {
        style: {
          display: "block"
        }
      }, dots2);
    },
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: false,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function customPaging(i) {
      return /* @__PURE__ */ _react2["default"].createElement("button", null, i + 1);
    },
    dots: false,
    dotsClass: "slick-dots",
    draggable: true,
    easing: "linear",
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: false,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: true,
    swipeEvent: null,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false,
    waitForAnimate: true,
    asNavFor: null
  };
  exports["default"] = defaultProps2;
})(defaultProps);
Object.defineProperty(innerSliderUtils, "__esModule", {
  value: true
});
innerSliderUtils.checkSpecKeys = innerSliderUtils.checkNavigable = innerSliderUtils.changeSlide = innerSliderUtils.canUseDOM = innerSliderUtils.canGoNext = void 0;
innerSliderUtils.clamp = clamp;
innerSliderUtils.extractObject = void 0;
innerSliderUtils.filterSettings = filterSettings;
innerSliderUtils.validSettings = innerSliderUtils.swipeStart = innerSliderUtils.swipeMove = innerSliderUtils.swipeEnd = innerSliderUtils.slidesOnRight = innerSliderUtils.slidesOnLeft = innerSliderUtils.slideHandler = innerSliderUtils.siblingDirection = innerSliderUtils.safePreventDefault = innerSliderUtils.lazyStartIndex = innerSliderUtils.lazySlidesOnRight = innerSliderUtils.lazySlidesOnLeft = innerSliderUtils.lazyEndIndex = innerSliderUtils.keyHandler = innerSliderUtils.initializedState = innerSliderUtils.getWidth = innerSliderUtils.getTrackLeft = innerSliderUtils.getTrackCSS = innerSliderUtils.getTrackAnimateCSS = innerSliderUtils.getTotalSlides = innerSliderUtils.getSwipeDirection = innerSliderUtils.getSlideCount = innerSliderUtils.getRequiredLazySlides = innerSliderUtils.getPreClones = innerSliderUtils.getPostClones = innerSliderUtils.getOnDemandLazySlides = innerSliderUtils.getNavigableIndexes = innerSliderUtils.getHeight = void 0;
var _react$4 = _interopRequireDefault$4(reactExports);
var _defaultProps = _interopRequireDefault$4(defaultProps);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _typeof$5(o) {
  "@babel/helpers - typeof";
  return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$5(o);
}
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function(r2) {
      _defineProperty$4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$4(obj, key, value) {
  key = _toPropertyKey$4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$4(t) {
  var i = _toPrimitive$4(t, "string");
  return "symbol" == _typeof$5(i) ? i : String(i);
}
function _toPrimitive$4(t, r) {
  if ("object" != _typeof$5(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$5(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}
var safePreventDefault = innerSliderUtils.safePreventDefault = function safePreventDefault2(event) {
  var passiveEvents = ["onTouchStart", "onTouchMove", "onWheel"];
  if (!passiveEvents.includes(event._reactName)) {
    event.preventDefault();
  }
};
var getOnDemandLazySlides = innerSliderUtils.getOnDemandLazySlides = function getOnDemandLazySlides2(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }
  return onDemandSlides;
};
innerSliderUtils.getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }
  return requiredSlides;
};
var lazyStartIndex = innerSliderUtils.lazyStartIndex = function lazyStartIndex2(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};
var lazyEndIndex = innerSliderUtils.lazyEndIndex = function lazyEndIndex2(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};
var lazySlidesOnLeft = innerSliderUtils.lazySlidesOnLeft = function lazySlidesOnLeft2(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};
var lazySlidesOnRight = innerSliderUtils.lazySlidesOnRight = function lazySlidesOnRight2(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
};
var getWidth = innerSliderUtils.getWidth = function getWidth2(elem) {
  return elem && elem.offsetWidth || 0;
};
var getHeight = innerSliderUtils.getHeight = function getHeight2(elem) {
  return elem && elem.offsetHeight || 0;
};
var getSwipeDirection = innerSliderUtils.getSwipeDirection = function getSwipeDirection2(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var xDist, yDist, r, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r * 180 / Math.PI);
  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }
  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }
  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }
  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }
  return "vertical";
};
var canGoNext = innerSliderUtils.canGoNext = function canGoNext2(spec) {
  var canGo = true;
  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }
  return canGo;
};
innerSliderUtils.extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function(key) {
    return newObject[key] = spec[key];
  });
  return newObject;
};
innerSliderUtils.initializedState = function initializedState(spec) {
  var slideCount = _react$4["default"].Children.count(spec.children);
  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef && spec.trackRef.node;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;
  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }
    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }
  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === void 0 ? spec.initialSlide : spec.currentSlide;
  if (spec.rtl && spec.currentSlide === void 0) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }
  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(_objectSpread$4(_objectSpread$4({}, spec), {}, {
    currentSlide,
    lazyLoadedList
  }));
  lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount,
    slideWidth,
    listWidth,
    trackWidth,
    currentSlide,
    slideHeight,
    listHeight,
    lazyLoadedList
  };
  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }
  return state;
};
innerSliderUtils.slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate, animating = spec.animating, fade = spec.fade, infinite = spec.infinite, index2 = spec.index, slideCount = spec.slideCount, lazyLoad = spec.lazyLoad, currentSlide = spec.currentSlide, centerMode = spec.centerMode, slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, useCSS = spec.useCSS;
  var lazyLoadedList = spec.lazyLoadedList;
  if (waitForAnimate && animating) return {};
  var animationSlide = index2, finalSlide, animationLeft, finalLeft;
  var state = {}, nextState = {};
  var targetSlide = infinite ? index2 : clamp(index2, 0, slideCount - 1);
  if (fade) {
    if (!infinite && (index2 < 0 || index2 >= slideCount)) return {};
    if (index2 < 0) {
      animationSlide = index2 + slideCount;
    } else if (index2 >= slideCount) {
      animationSlide = index2 - slideCount;
    }
    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList = lazyLoadedList.concat(animationSlide);
    }
    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;
    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;
      else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;
      else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }
    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }
    animationLeft = getTrackLeft(_objectSpread$4(_objectSpread$4({}, spec), {}, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread$4(_objectSpread$4({}, spec), {}, {
      slideIndex: finalSlide
    }));
    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }
    if (lazyLoad) {
      lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread$4(_objectSpread$4({}, spec), {}, {
        currentSlide: animationSlide
      })));
    }
    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread$4(_objectSpread$4({}, spec), {}, {
          left: finalLeft
        })),
        lazyLoadedList,
        targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread$4(_objectSpread$4({}, spec), {}, {
          left: animationLeft
        })),
        lazyLoadedList,
        targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread$4(_objectSpread$4({}, spec), {}, {
          left: finalLeft
        })),
        swipeLeft: null,
        targetSlide
      };
    }
  }
  return {
    state,
    nextState
  };
};
innerSliderUtils.changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, slideCount = spec.slideCount, currentSlide = spec.currentSlide, previousTargetSlide = spec.targetSlide, lazyLoad = spec.lazyLoad, infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;
    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;
    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === "dots") {
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === "children") {
    targetSlide = options.index;
    if (infinite) {
      var direction = siblingDirection(_objectSpread$4(_objectSpread$4({}, spec), {}, {
        targetSlide
      }));
      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);
  }
  return targetSlide;
};
innerSliderUtils.keyHandler = function keyHandler(e, accessibility, rtl) {
  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e.keyCode === 37) return rtl ? "next" : "previous";
  if (e.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};
innerSliderUtils.swipeStart = function swipeStart(e, swipe, draggable) {
  e.target.tagName === "IMG" && safePreventDefault(e);
  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e.touches ? e.touches[0].pageX : e.clientX,
      startY: e.touches ? e.touches[0].pageY : e.clientY,
      curX: e.touches ? e.touches[0].pageX : e.clientX,
      curY: e.touches ? e.touches[0].pageY : e.clientY
    }
  };
};
innerSliderUtils.swipeMove = function swipeMove(e, spec) {
  var scrolling = spec.scrolling, animating = spec.animating, vertical = spec.vertical, swipeToSlide = spec.swipeToSlide, verticalSwiping = spec.verticalSwiping, rtl = spec.rtl, currentSlide = spec.currentSlide, edgeFriction = spec.edgeFriction, edgeDragged = spec.edgeDragged, onEdge = spec.onEdge, swiped = spec.swiped, swiping = spec.swiping, slideCount = spec.slideCount, slidesToScroll = spec.slidesToScroll, infinite = spec.infinite, touchObject = spec.touchObject, swipeEvent = spec.swipeEvent, listHeight = spec.listHeight, listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return safePreventDefault(e);
  if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e);
  var swipeLeft, state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }
  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;
  if (!infinite) {
    if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;
      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }
  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }
  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }
  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }
  state = _objectSpread$4(_objectSpread$4({}, state), {}, {
    touchObject,
    swipeLeft,
    trackStyle: getTrackCSS(_objectSpread$4(_objectSpread$4({}, spec), {}, {
      left: swipeLeft
    }))
  });
  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }
  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    safePreventDefault(e);
  }
  return state;
};
innerSliderUtils.swipeEnd = function swipeEnd(e, spec) {
  var dragging = spec.dragging, swipe = spec.swipe, touchObject = spec.touchObject, listWidth = spec.listWidth, touchThreshold = spec.touchThreshold, verticalSwiping = spec.verticalSwiping, listHeight = spec.listHeight, swipeToSlide = spec.swipeToSlide, scrolling = spec.scrolling, onSwipe = spec.onSwipe, targetSlide = spec.targetSlide, currentSlide = spec.currentSlide, infinite = spec.infinite;
  if (!dragging) {
    if (swipe) safePreventDefault(e);
    return {};
  }
  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };
  if (scrolling) {
    return state;
  }
  if (!touchObject.swipeLength) {
    return state;
  }
  if (touchObject.swipeLength > minSwipe) {
    safePreventDefault(e);
    if (onSwipe) {
      onSwipe(swipeDirection);
    }
    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;
    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;
      case "right":
      case "down":
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;
      default:
        slideCount = activeSlide;
    }
    state["triggerSlideHandler"] = slideCount;
  } else {
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread$4(_objectSpread$4({}, spec), {}, {
      left: currentLeft
    }));
  }
  return state;
};
var getNavigableIndexes = innerSliderUtils.getNavigableIndexes = function getNavigableIndexes2(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];
  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }
  return indexes;
};
var checkNavigable = innerSliderUtils.checkNavigable = function checkNavigable2(spec, index2) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;
  if (index2 > navigables[navigables.length - 1]) {
    index2 = navigables[navigables.length - 1];
  } else {
    for (var n in navigables) {
      if (index2 < navigables[n]) {
        index2 = prevNavigable;
        break;
      }
      prevNavigable = navigables[n];
    }
  }
  return index2;
};
var getSlideCount = innerSliderUtils.getSlideCount = function getSlideCount2(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
    Array.from(slides).every(function(slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }
      return true;
    });
    if (!swipedSlide) {
      return 0;
    }
    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};
var checkSpecKeys = innerSliderUtils.checkSpecKeys = function checkSpecKeys2(spec, keysArray) {
  return keysArray.reduce(function(value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};
var getTrackCSS = innerSliderUtils.getTrackCSS = function getTrackCSS2(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;
  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }
  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };
  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread$4(_objectSpread$4({}, style), {}, {
      WebkitTransform,
      transform,
      msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }
  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight;
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }
  return style;
};
var getTrackAnimateCSS = innerSliderUtils.getTrackAnimateCSS = function getTrackAnimateCSS2(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec);
  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getTrackLeft = innerSliderUtils.getTrackLeft = function getTrackLeft2(spec) {
  if (spec.unslick) {
    return 0;
  }
  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex, trackRef = spec.trackRef, infinite = spec.infinite, centerMode = spec.centerMode, slideCount = spec.slideCount, slidesToShow = spec.slidesToShow, slidesToScroll = spec.slidesToScroll, slideWidth = spec.slideWidth, listWidth = spec.listWidth, variableWidth = spec.variableWidth, slideHeight = spec.slideHeight, fade = spec.fade, vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;
  if (fade || spec.slideCount === 1) {
    return 0;
  }
  var slidesToOffset = 0;
  if (infinite) {
    slidesToOffset = -getPreClones(spec);
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    }
    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }
    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }
  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;
  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }
  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef && trackRef.node;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;
      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }
      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }
  return targetLeft;
};
var getPreClones = innerSliderUtils.getPreClones = function getPreClones2(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  if (spec.variableWidth) {
    return spec.slideCount;
  }
  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getPostClones = innerSliderUtils.getPostClones = function getPostClones2(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  return spec.slideCount;
};
var getTotalSlides = innerSliderUtils.getTotalSlides = function getTotalSlides2(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};
var siblingDirection = innerSliderUtils.siblingDirection = function siblingDirection2(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }
    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }
    return "left";
  }
};
var slidesOnRight = innerSliderUtils.slidesOnRight = function slidesOnRight2(_ref) {
  var slidesToShow = _ref.slidesToShow, centerMode = _ref.centerMode, rtl = _ref.rtl, centerPadding = _ref.centerPadding;
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }
  if (rtl) {
    return 0;
  }
  return slidesToShow - 1;
};
var slidesOnLeft = innerSliderUtils.slidesOnLeft = function slidesOnLeft2(_ref2) {
  var slidesToShow = _ref2.slidesToShow, centerMode = _ref2.centerMode, rtl = _ref2.rtl, centerPadding = _ref2.centerPadding;
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }
  if (rtl) {
    return slidesToShow - 1;
  }
  return 0;
};
innerSliderUtils.canUseDOM = function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};
var validSettings = innerSliderUtils.validSettings = Object.keys(_defaultProps["default"]);
function filterSettings(settings) {
  return validSettings.reduce(function(acc, settingName) {
    if (settings.hasOwnProperty(settingName)) {
      acc[settingName] = settings[settingName];
    }
    return acc;
  }, {});
}
var track = {};
Object.defineProperty(track, "__esModule", {
  value: true
});
track.Track = void 0;
var _react$3 = _interopRequireDefault$3(reactExports);
var _classnames$3 = _interopRequireDefault$3(requireClassnames());
var _innerSliderUtils$3 = innerSliderUtils;
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _typeof$4(o) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$4(o);
}
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$2.apply(this, arguments);
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$3(descriptor.key), descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$3(subClass, superClass);
}
function _setPrototypeOf$3(o, p) {
  _setPrototypeOf$3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$3(o, p);
}
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$3(this, result);
  };
}
function _possibleConstructorReturn$3(self2, call) {
  if (call && (_typeof$4(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$3(self2);
}
function _assertThisInitialized$3(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct$3() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$3(o) {
  _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$3(o);
}
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty$3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$3(t) {
  var i = _toPrimitive$3(t, "string");
  return "symbol" == _typeof$4(i) ? i : String(i);
}
function _toPrimitive$3(t, r) {
  if ("object" != _typeof$4(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$4(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var getSlideClasses = function getSlideClasses2(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index2;
  if (spec.rtl) {
    index2 = spec.slideCount - 1 - spec.index;
  } else {
    index2 = spec.index;
  }
  slickCloned = index2 < 0 || index2 >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index2 - spec.currentSlide) % spec.slideCount === 0;
    if (index2 > spec.currentSlide - centerOffset - 1 && index2 <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index2 && index2 < spec.currentSlide + spec.slidesToShow;
  }
  var focusedSlide;
  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }
  var slickCurrent = index2 === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent
    // dubious in case of RTL
  };
};
var getSlideStyle = function getSlideStyle2(spec) {
  var style = {};
  if (spec.variableWidth === void 0 || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }
  if (spec.fade) {
    style.position = "relative";
    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.zIndex = spec.currentSlide === spec.index ? 999 : 998;
    if (spec.useCSS) {
      style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", visibility " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getKey = function getKey2(child, fallbackKey) {
  return child.key || fallbackKey;
};
var renderSlides = function renderSlides2(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = _react$3["default"].Children.count(spec.children);
  var startIndex = (0, _innerSliderUtils$3.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils$3.lazyEndIndex)(spec);
  _react$3["default"].Children.forEach(spec.children, function(elem, index2) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index2,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };
    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index2) >= 0) {
      child = elem;
    } else {
      child = /* @__PURE__ */ _react$3["default"].createElement("div", null);
    }
    var childStyle = getSlideStyle(_objectSpread$3(_objectSpread$3({}, spec), {}, {
      index: index2
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread$3(_objectSpread$3({}, spec), {}, {
      index: index2
    }));
    slides.push(/* @__PURE__ */ _react$3["default"].cloneElement(child, {
      key: "original" + getKey(child, index2),
      "data-index": index2,
      className: (0, _classnames$3["default"])(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread$3(_objectSpread$3({
        outline: "none"
      }, child.props.style || {}), childStyle),
      onClick: function onClick(e) {
        child.props && child.props.onClick && child.props.onClick(e);
        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    }));
    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index2;
      if (preCloneNo <= (0, _innerSliderUtils$3.getPreClones)(spec)) {
        key = -preCloneNo;
        if (key >= startIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(_objectSpread$3(_objectSpread$3({}, spec), {}, {
          index: key
        }));
        preCloneSlides.push(/* @__PURE__ */ _react$3["default"].cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames$3["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread$3(_objectSpread$3({}, child.props.style || {}), childStyle),
          onClick: function onClick(e) {
            child.props && child.props.onClick && child.props.onClick(e);
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
      key = childrenCount + index2;
      if (key < endIndex) {
        child = elem;
      }
      slideClasses = getSlideClasses(_objectSpread$3(_objectSpread$3({}, spec), {}, {
        index: key
      }));
      postCloneSlides.push(/* @__PURE__ */ _react$3["default"].cloneElement(child, {
        key: "postcloned" + getKey(child, key),
        "data-index": key,
        tabIndex: "-1",
        className: (0, _classnames$3["default"])(slideClasses, slideClass),
        "aria-hidden": !slideClasses["slick-active"],
        style: _objectSpread$3(_objectSpread$3({}, child.props.style || {}), childStyle),
        onClick: function onClick(e) {
          child.props && child.props.onClick && child.props.onClick(e);
          if (spec.focusOnSelect) {
            spec.focusOnSelect(childOnClickOptions);
          }
        }
      }));
    }
  });
  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};
track.Track = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits$3(Track, _React$PureComponent);
  var _super = _createSuper$3(Track);
  function Track() {
    var _this;
    _classCallCheck$3(this, Track);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$3(_assertThisInitialized$3(_this), "node", null);
    _defineProperty$3(_assertThisInitialized$3(_this), "handleRef", function(ref) {
      _this.node = ref;
    });
    return _this;
  }
  _createClass$3(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter,
        onMouseOver,
        onMouseLeave
      };
      return /* @__PURE__ */ _react$3["default"].createElement("div", _extends$2({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);
  return Track;
}(_react$3["default"].PureComponent);
var dots = {};
function _typeof$3(o) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$3(o);
}
Object.defineProperty(dots, "__esModule", {
  value: true
});
dots.Dots = void 0;
var _react$2 = _interopRequireDefault$2(reactExports);
var _classnames$2 = _interopRequireDefault$2(requireClassnames());
var _innerSliderUtils$2 = innerSliderUtils;
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$2(descriptor.key), descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$3(i) ? i : String(i);
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}
function _setPrototypeOf$2(o, p) {
  _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$2(o, p);
}
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$2(this, result);
  };
}
function _possibleConstructorReturn$2(self2, call) {
  if (call && (_typeof$3(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$2(self2);
}
function _assertThisInitialized$2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct$2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$2(o) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$2(o);
}
var getDotCount = function getDotCount2(spec) {
  var dots2;
  if (spec.infinite) {
    dots2 = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots2 = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }
  return dots2;
};
dots.Dots = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits$2(Dots, _React$PureComponent);
  var _super = _createSuper$2(Dots);
  function Dots() {
    _classCallCheck$2(this, Dots);
    return _super.apply(this, arguments);
  }
  _createClass$2(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      e.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave, infinite = _this$props.infinite, slidesToScroll = _this$props.slidesToScroll, slidesToShow = _this$props.slidesToShow, slideCount = _this$props.slideCount, currentSlide = _this$props.currentSlide;
      var dotCount = getDotCount({
        slideCount,
        slidesToScroll,
        slidesToShow,
        infinite
      });
      var mouseEvents = {
        onMouseEnter,
        onMouseOver,
        onMouseLeave
      };
      var dots2 = [];
      for (var i = 0; i < dotCount; i++) {
        var _rightBound = (i + 1) * slidesToScroll - 1;
        var rightBound = infinite ? _rightBound : (0, _innerSliderUtils$2.clamp)(_rightBound, 0, slideCount - 1);
        var _leftBound = rightBound - (slidesToScroll - 1);
        var leftBound = infinite ? _leftBound : (0, _innerSliderUtils$2.clamp)(_leftBound, 0, slideCount - 1);
        var className = (0, _classnames$2["default"])({
          "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
        });
        var dotOptions = {
          message: "dots",
          index: i,
          slidesToScroll,
          currentSlide
        };
        var onClick = this.clickHandler.bind(this, dotOptions);
        dots2 = dots2.concat(/* @__PURE__ */ _react$2["default"].createElement("li", {
          key: i,
          className
        }, /* @__PURE__ */ _react$2["default"].cloneElement(this.props.customPaging(i), {
          onClick
        })));
      }
      return /* @__PURE__ */ _react$2["default"].cloneElement(this.props.appendDots(dots2), _objectSpread$2({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);
  return Dots;
}(_react$2["default"].PureComponent);
var arrows = {};
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
Object.defineProperty(arrows, "__esModule", {
  value: true
});
arrows.PrevArrow = arrows.NextArrow = void 0;
var _react$1 = _interopRequireDefault$1(reactExports);
var _classnames$1 = _interopRequireDefault$1(requireClassnames());
var _innerSliderUtils$1 = innerSliderUtils;
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
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
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$2(i) ? i : String(i);
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
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
function _possibleConstructorReturn$1(self2, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self2);
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
arrows.PrevArrow = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits$1(PrevArrow, _React$PureComponent);
  var _super = _createSuper$1(PrevArrow);
  function PrevArrow() {
    _classCallCheck$1(this, PrevArrow);
    return _super.apply(this, arguments);
  }
  _createClass$1(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }
      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });
      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }
      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames$1["default"])(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;
      if (this.props.prevArrow) {
        prevArrow = /* @__PURE__ */ _react$1["default"].cloneElement(this.props.prevArrow, _objectSpread$1(_objectSpread$1({}, prevArrowProps), customProps));
      } else {
        prevArrow = /* @__PURE__ */ _react$1["default"].createElement("button", _extends$1({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }
      return prevArrow;
    }
  }]);
  return PrevArrow;
}(_react$1["default"].PureComponent);
arrows.NextArrow = /* @__PURE__ */ function(_React$PureComponent2) {
  _inherits$1(NextArrow, _React$PureComponent2);
  var _super2 = _createSuper$1(NextArrow);
  function NextArrow() {
    _classCallCheck$1(this, NextArrow);
    return _super2.apply(this, arguments);
  }
  _createClass$1(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e) {
      if (e) {
        e.preventDefault();
      }
      this.props.clickHandler(options, e);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });
      if (!(0, _innerSliderUtils$1.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }
      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames$1["default"])(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;
      if (this.props.nextArrow) {
        nextArrow = /* @__PURE__ */ _react$1["default"].cloneElement(this.props.nextArrow, _objectSpread$1(_objectSpread$1({}, nextArrowProps), customProps));
      } else {
        nextArrow = /* @__PURE__ */ _react$1["default"].createElement("button", _extends$1({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }
      return nextArrow;
    }
  }]);
  return NextArrow;
}(_react$1["default"].PureComponent);
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return (
    /** @class */
    function() {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      class_1.prototype.get = function(key) {
        var index2 = getIndex(this.__entries__, key);
        var entry = this.__entries__[index2];
        return entry && entry[1];
      };
      class_1.prototype.set = function(key, value) {
        var index2 = getIndex(this.__entries__, key);
        if (~index2) {
          this.__entries__[index2][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      class_1.prototype.delete = function(key) {
        var entries = this.__entries__;
        var index2 = getIndex(entries, key);
        if (~index2) {
          entries.splice(index2, 1);
        }
      };
      class_1.prototype.has = function(key) {
        return !!~getIndex(this.__entries__, key);
      };
      class_1.prototype.clear = function() {
        this.__entries__.splice(0);
      };
      class_1.prototype.forEach = function(callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }()
  );
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = (
  /** @class */
  function() {
    function ResizeObserverController2() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    ResizeObserverController2.prototype.addObserver = function(observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      }
      if (!this.connected_) {
        this.connect_();
      }
    };
    ResizeObserverController2.prototype.removeObserver = function(observer) {
      var observers2 = this.observers_;
      var index2 = observers2.indexOf(observer);
      if (~index2) {
        observers2.splice(index2, 1);
      }
      if (!observers2.length && this.connected_) {
        this.disconnect_();
      }
    };
    ResizeObserverController2.prototype.refresh = function() {
      var changesDetected = this.updateObservers_();
      if (changesDetected) {
        this.refresh();
      }
    };
    ResizeObserverController2.prototype.updateObservers_ = function() {
      var activeObservers = this.observers_.filter(function(observer) {
        return observer.gatherActive(), observer.hasActive();
      });
      activeObservers.forEach(function(observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    ResizeObserverController2.prototype.connect_ = function() {
      if (!isBrowser || this.connected_) {
        return;
      }
      document.addEventListener("transitionend", this.onTransitionEnd_);
      window.addEventListener("resize", this.refresh);
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener("DOMSubtreeModified", this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    };
    ResizeObserverController2.prototype.disconnect_ = function() {
      if (!isBrowser || !this.connected_) {
        return;
      }
      document.removeEventListener("transitionend", this.onTransitionEnd_);
      window.removeEventListener("resize", this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener("DOMSubtreeModified", this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
      var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
      var isReflowProperty = transitionKeys.some(function(key) {
        return !!~propertyName.indexOf(key);
      });
      if (isReflowProperty) {
        this.refresh();
      }
    };
    ResizeObserverController2.getInstance = function() {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController2();
      }
      return this.instance_;
    };
    ResizeObserverController2.instance_ = null;
    return ResizeObserverController2;
  }()
);
var defineConfigurable = function(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var ResizeObservation = (
  /** @class */
  function() {
    function ResizeObservation2(target) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    ResizeObservation2.prototype.isActive = function() {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    ResizeObservation2.prototype.broadcastRect = function() {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };
    return ResizeObservation2;
  }()
);
var ResizeObserverEntry = (
  /** @class */
  /* @__PURE__ */ function() {
    function ResizeObserverEntry2(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);
      defineConfigurable(this, { target, contentRect });
    }
    return ResizeObserverEntry2;
  }()
);
var ResizeObserverSPI = (
  /** @class */
  function() {
    function ResizeObserverSPI2(callback, controller, callbackCtx) {
      this.activeObservations_ = [];
      this.observations_ = new MapShim();
      if (typeof callback !== "function") {
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      }
      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    ResizeObserverSPI2.prototype.observe = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (observations.has(target)) {
        return;
      }
      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this);
      this.controller_.refresh();
    };
    ResizeObserverSPI2.prototype.unobserve = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (!observations.has(target)) {
        return;
      }
      observations.delete(target);
      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    ResizeObserverSPI2.prototype.disconnect = function() {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    ResizeObserverSPI2.prototype.gatherActive = function() {
      var _this = this;
      this.clearActive();
      this.observations_.forEach(function(observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    ResizeObserverSPI2.prototype.broadcastActive = function() {
      if (!this.hasActive()) {
        return;
      }
      var ctx = this.callbackCtx_;
      var entries = this.activeObservations_.map(function(observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    ResizeObserverSPI2.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    };
    ResizeObserverSPI2.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI2;
  }()
);
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver = (
  /** @class */
  /* @__PURE__ */ function() {
    function ResizeObserver2(callback) {
      if (!(this instanceof ResizeObserver2)) {
        throw new TypeError("Cannot call a class as a function.");
      }
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }
    return ResizeObserver2;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
const ResizeObserver_es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const require$$8 = /* @__PURE__ */ getAugmentedNamespace(ResizeObserver_es);
Object.defineProperty(innerSlider, "__esModule", {
  value: true
});
innerSlider.InnerSlider = void 0;
var _react = _interopRequireDefault(reactExports);
var _initialState = _interopRequireDefault(initialState);
var _lodash = _interopRequireDefault(lodash_debounce);
var _classnames = _interopRequireDefault(requireClassnames());
var _innerSliderUtils = innerSliderUtils;
var _track = track;
var _dots = dots;
var _arrows = arrows;
var _resizeObserverPolyfill = _interopRequireDefault(require$$8);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
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
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof$1(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
innerSlider.InnerSlider = /* @__PURE__ */ function(_React$Component) {
  _inherits(InnerSlider, _React$Component);
  var _super = _createSuper(InnerSlider);
  function InnerSlider(props) {
    var _this;
    _classCallCheck(this, InnerSlider);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function(ref) {
      return _this.list = ref;
    });
    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function(ref) {
      return _this.track = ref;
    });
    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function() {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector('[data-index="'.concat(_this.state.currentSlide, '"]'));
        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    });
    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function() {
      _this.props.onInit && _this.props.onInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function(prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);
      _this.updateState(spec, true, function() {
        _this.adaptHeight();
        _this.props.autoplay && _this.autoPlay("update");
      });
      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1e3);
      }
      _this.ro = new _resizeObserverPolyfill["default"](function() {
        if (_this.state.animating) {
          _this.onWindowResized(false);
          _this.callbackTimers.push(setTimeout(function() {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });
      _this.ro.observe(_this.list);
      document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      });
      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function() {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }
      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }
      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function(timer) {
          return clearTimeout(timer);
        });
        _this.callbackTimers = [];
      }
      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      _this.ro.disconnect();
    });
    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function(prevProps) {
      _this.checkImagesLoad();
      _this.props.onReInit && _this.props.onReInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function(prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      _this.adaptHeight();
      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);
      var setTrackStyle = _this.didPropsChange(prevProps);
      setTrackStyle && _this.updateState(spec, setTrackStyle, function() {
        if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
          _this.changeSlide({
            message: "index",
            index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }
        if (_this.props.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function(setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash["default"])(function() {
        return _this.resizeWindow(setTrackStyle);
      }, 50);
      _this.debouncedResize();
    });
    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function() {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      var isTrackMounted = Boolean(_this.track && _this.track.node);
      if (!isTrackMounted) return;
      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);
      _this.updateState(spec, setTrackStyle, function() {
        if (_this.props.autoplay) _this.autoPlay("update");
        else _this.pause("paused");
      });
      _this.setState({
        animating: false
      });
      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });
    _defineProperty(_assertThisInitialized(_this), "updateState", function(spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread(_objectSpread({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }
      _this.setState(updatedState, callback);
    });
    _defineProperty(_assertThisInitialized(_this), "ssrInit", function() {
      if (_this.props.variableWidth) {
        var _trackWidth = 0, _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        _this.props.children.forEach(function(child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });
        for (var i = 0; i < preClones; i++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
        }
        for (var _i = 0; _i < postClones; _i++) {
          _trackWidth += childrenWidths[_i];
        }
        for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
          _trackLeft += childrenWidths[_i2];
        }
        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };
        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }
        return {
          trackStyle: _trackStyle
        };
      }
      var childrenCount = _react["default"].Children.count(_this.props.children);
      var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        slideCount: childrenCount
      });
      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;
      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }
      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      return {
        slideWidth: slideWidth + "%",
        trackStyle
      };
    });
    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function() {
      var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
      var imagesCount = images.length, loadedCount = 0;
      Array.prototype.forEach.call(images, function(image) {
        var handler = function handler2() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };
        if (!image.onclick) {
          image.onclick = function() {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;
          image.onclick = function(e) {
            prevClickHandler(e);
            image.parentNode.focus();
          };
        }
        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function() {
              _this.adaptHeight();
              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;
            image.onerror = function() {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function() {
      var slidesToLoad = [];
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      for (var index2 = _this.state.currentSlide; index2 < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index2++) {
        if (_this.state.lazyLoadedList.indexOf(index2) < 0) {
          slidesToLoad.push(index2);
          break;
        }
      }
      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }
      if (slidesToLoad.length > 0) {
        _this.setState(function(state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });
        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "slideHandler", function(index2) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var _this$props = _this.props, asNavFor = _this$props.asNavFor, beforeChange = _this$props.beforeChange, onLazyLoad = _this$props.onLazyLoad, speed = _this$props.speed, afterChange = _this$props.afterChange;
      var currentSlide = _this.state.currentSlide;
      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
        index: index2
      }, _this.props), _this.state), {}, {
        trackRef: _this.track,
        useCSS: _this.props.useCSS && !dontAnimate
      })), state = _slideHandler.state, nextState = _slideHandler.nextState;
      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function(value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
      if (!_this.props.waitForAnimate && _this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete _this.animationEndCallback;
      }
      _this.setState(state, function() {
        if (asNavFor && _this.asNavForIndex !== index2) {
          _this.asNavForIndex = index2;
          asNavFor.innerSlider.slideHandler(index2);
        }
        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function() {
          var animating = nextState.animating, firstBatch = _objectWithoutProperties(nextState, ["animating"]);
          _this.setState(firstBatch, function() {
            _this.callbackTimers.push(setTimeout(function() {
              return _this.setState({
                animating
              });
            }, 10));
            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "changeSlide", function(options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;
      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }
      _this.props.autoplay && _this.autoPlay("update");
      if (_this.props.focusOnSelect) {
        var nodes = _this.list.querySelectorAll(".slick-current");
        nodes[0] && nodes[0].focus();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "clickHandler", function(e) {
      if (_this.clickable === false) {
        e.stopPropagation();
        e.preventDefault();
      }
      _this.clickable = true;
    });
    _defineProperty(_assertThisInitialized(_this), "keyHandler", function(e) {
      var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });
    _defineProperty(_assertThisInitialized(_this), "selectHandler", function(options) {
      _this.changeSlide(options);
    });
    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function() {
      var preventDefault = function preventDefault2(e) {
        e = e || window.event;
        if (e.preventDefault) e.preventDefault();
        e.returnValue = false;
      };
      window.ontouchmove = preventDefault;
    });
    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function() {
      window.ontouchmove = null;
    });
    _defineProperty(_assertThisInitialized(_this), "swipeStart", function(e) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }
      var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });
    _defineProperty(_assertThisInitialized(_this), "swipeMove", function(e) {
      var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      if (state["swiping"]) {
        _this.clickable = false;
      }
      _this.setState(state);
    });
    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function(e) {
      var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];
      _this.setState(state);
      if (triggerSlideHandler === void 0) return;
      _this.slideHandler(triggerSlideHandler);
      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "touchEnd", function(e) {
      _this.swipeEnd(e);
      _this.clickable = true;
    });
    _defineProperty(_assertThisInitialized(_this), "slickPrev", function() {
      _this.callbackTimers.push(setTimeout(function() {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "slickNext", function() {
      _this.callbackTimers.push(setTimeout(function() {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";
      _this.callbackTimers.push(setTimeout(function() {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "play", function() {
      var nextIndex;
      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }
      _this.slideHandler(nextIndex);
    });
    _defineProperty(_assertThisInitialized(_this), "autoPlay", function(playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      var autoplaying = _this.state.autoplaying;
      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }
      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
      _this.setState({
        autoplaying: "playing"
      });
    });
    _defineProperty(_assertThisInitialized(_this), "pause", function(pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }
      var autoplaying = _this.state.autoplaying;
      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function() {
      return _this.props.autoplay && _this.pause("hovered");
    });
    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function() {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });
    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function() {
      return _this.props.autoplay && _this.pause("hovered");
    });
    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function() {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });
    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function() {
      return _this.props.autoplay && _this.pause("focused");
    });
    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function() {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });
    _defineProperty(_assertThisInitialized(_this), "render", function() {
      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
      });
      var dots2;
      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots2 = /* @__PURE__ */ _react["default"].createElement(_dots.Dots, dotProps);
      }
      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;
      if (_this.props.arrows) {
        prevArrow = /* @__PURE__ */ _react["default"].createElement(_arrows.PrevArrow, arrowProps);
        nextArrow = /* @__PURE__ */ _react["default"].createElement(_arrows.NextArrow, arrowProps);
      }
      var verticalHeightStyle = null;
      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }
      var centerPaddingStyle = null;
      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }
      var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);
      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.touchEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className,
        dir: "ltr",
        style: _this.props.style
      };
      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className
        };
      }
      return /* @__PURE__ */ _react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /* @__PURE__ */ _react["default"].createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), /* @__PURE__ */ _react["default"].createElement(_track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots2 : "");
    });
    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
      currentSlide: _this.props.initialSlide,
      targetSlide: _this.props.initialSlide ? _this.props.initialSlide : 0,
      slideCount: _react["default"].Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;
    var ssrState = _this.ssrInit();
    _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
    return _this;
  }
  _createClass(InnerSlider, [{
    key: "didPropsChange",
    value: function didPropsChange(prevProps) {
      var setTrackStyle = false;
      for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];
        if (!prevProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }
        if (_typeof$1(prevProps[key]) === "object" || typeof prevProps[key] === "function" || isNaN(prevProps[key])) {
          continue;
        }
        if (prevProps[key] !== this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }
      return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
    }
  }]);
  return InnerSlider;
}(_react["default"].Component);
var camel2hyphen$1 = function(str) {
  return str.replace(/[A-Z]/g, function(match) {
    return "-" + match.toLowerCase();
  }).toLowerCase();
};
var camel2hyphen_1 = camel2hyphen$1;
var camel2hyphen = camel2hyphen_1;
var isDimension = function(feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};
var obj2mq = function(obj) {
  var mq = "";
  var features = Object.keys(obj);
  features.forEach(function(feature, index2) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    if (isDimension(feature) && typeof value === "number") {
      value = value + "px";
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += "not " + feature;
    } else {
      mq += "(" + feature + ": " + value + ")";
    }
    if (index2 < features.length - 1) {
      mq += " and ";
    }
  });
  return mq;
};
var json2mq = function(query) {
  var mq = "";
  if (typeof query === "string") {
    return query;
  }
  if (query instanceof Array) {
    query.forEach(function(q, index2) {
      mq += obj2mq(q);
      if (index2 < query.length - 1) {
        mq += ", ";
      }
    });
    return mq;
  }
  return obj2mq(query);
};
var json2mq_1 = json2mq;
var QueryHandler_1;
var hasRequiredQueryHandler;
function requireQueryHandler() {
  if (hasRequiredQueryHandler) return QueryHandler_1;
  hasRequiredQueryHandler = 1;
  function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
  }
  QueryHandler.prototype = {
    constructor: QueryHandler,
    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup: function() {
      if (this.options.setup) {
        this.options.setup();
      }
      this.initialised = true;
    },
    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on: function() {
      !this.initialised && this.setup();
      this.options.match && this.options.match();
    },
    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off: function() {
      this.options.unmatch && this.options.unmatch();
    },
    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy: function() {
      this.options.destroy ? this.options.destroy() : this.off();
    },
    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals: function(target) {
      return this.options === target || this.options.match === target;
    }
  };
  QueryHandler_1 = QueryHandler;
  return QueryHandler_1;
}
var Util;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return Util;
  hasRequiredUtil = 1;
  function each(collection, fn) {
    var i = 0, length = collection.length, cont;
    for (i; i < length; i++) {
      cont = fn(collection[i], i);
      if (cont === false) {
        break;
      }
    }
  }
  function isArray(target) {
    return Object.prototype.toString.apply(target) === "[object Array]";
  }
  function isFunction(target) {
    return typeof target === "function";
  }
  Util = {
    isFunction,
    isArray,
    each
  };
  return Util;
}
var MediaQuery_1;
var hasRequiredMediaQuery;
function requireMediaQuery() {
  if (hasRequiredMediaQuery) return MediaQuery_1;
  hasRequiredMediaQuery = 1;
  var QueryHandler = requireQueryHandler();
  var each = requireUtil().each;
  function MediaQuery(query, isUnconditional) {
    this.query = query;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query);
    var self2 = this;
    this.listener = function(mql) {
      self2.mql = mql.currentTarget || mql;
      self2.assess();
    };
    this.mql.addListener(this.listener);
  }
  MediaQuery.prototype = {
    constuctor: MediaQuery,
    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler: function(handler) {
      var qh = new QueryHandler(handler);
      this.handlers.push(qh);
      this.matches() && qh.on();
    },
    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler: function(handler) {
      var handlers = this.handlers;
      each(handlers, function(h, i) {
        if (h.equals(handler)) {
          h.destroy();
          return !handlers.splice(i, 1);
        }
      });
    },
    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches: function() {
      return this.mql.matches || this.isUnconditional;
    },
    /**
     * Clears all handlers and unbinds events
     */
    clear: function() {
      each(this.handlers, function(handler) {
        handler.destroy();
      });
      this.mql.removeListener(this.listener);
      this.handlers.length = 0;
    },
    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess: function() {
      var action = this.matches() ? "on" : "off";
      each(this.handlers, function(handler) {
        handler[action]();
      });
    }
  };
  MediaQuery_1 = MediaQuery;
  return MediaQuery_1;
}
var MediaQueryDispatch_1;
var hasRequiredMediaQueryDispatch;
function requireMediaQueryDispatch() {
  if (hasRequiredMediaQueryDispatch) return MediaQueryDispatch_1;
  hasRequiredMediaQueryDispatch = 1;
  var MediaQuery = requireMediaQuery();
  var Util2 = requireUtil();
  var each = Util2.each;
  var isFunction = Util2.isFunction;
  var isArray = Util2.isArray;
  function MediaQueryDispatch() {
    if (!window.matchMedia) {
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    }
    this.queries = {};
    this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  MediaQueryDispatch.prototype = {
    constructor: MediaQueryDispatch,
    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register: function(q, options, shouldDegrade) {
      var queries = this.queries, isUnconditional = shouldDegrade && this.browserIsIncapable;
      if (!queries[q]) {
        queries[q] = new MediaQuery(q, isUnconditional);
      }
      if (isFunction(options)) {
        options = { match: options };
      }
      if (!isArray(options)) {
        options = [options];
      }
      each(options, function(handler) {
        if (isFunction(handler)) {
          handler = { match: handler };
        }
        queries[q].addHandler(handler);
      });
      return this;
    },
    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister: function(q, handler) {
      var query = this.queries[q];
      if (query) {
        if (handler) {
          query.removeHandler(handler);
        } else {
          query.clear();
          delete this.queries[q];
        }
      }
      return this;
    }
  };
  MediaQueryDispatch_1 = MediaQueryDispatch;
  return MediaQueryDispatch_1;
}
var src;
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  var MediaQueryDispatch = requireMediaQueryDispatch();
  src = new MediaQueryDispatch();
  return src;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react2 = _interopRequireDefault2(reactExports);
  var _innerSlider = innerSlider;
  var _json2mq = _interopRequireDefault2(json2mq_1);
  var _defaultProps2 = _interopRequireDefault2(defaultProps);
  var _innerSliderUtils2 = innerSliderUtils;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, _typeof2(o);
  }
  function _extends2() {
    _extends2 = Object.assign ? Object.assign.bind() : function(target) {
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
    return _extends2.apply(this, arguments);
  }
  function ownKeys2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function(r2) {
        return Object.getOwnPropertyDescriptor(e, r2).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread3(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
        _defineProperty2(e, r2, t[r2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
        Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
      });
    }
    return e;
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o, p) {
    _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf22(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf2(o, p);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self2, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized2(self2);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct2() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t2) {
    }
    return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct22() {
      return !!t;
    })();
  }
  function _getPrototypeOf2(o) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf22(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf2(o);
  }
  function _defineProperty2(obj, key, value) {
    key = _toPropertyKey2(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey2(t) {
    var i = _toPrimitive2(t, "string");
    return "symbol" == _typeof2(i) ? i : String(i);
  }
  function _toPrimitive2(t, r) {
    if ("object" != _typeof2(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != _typeof2(i)) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  var enquire = (0, _innerSliderUtils2.canUseDOM)() && requireSrc();
  exports["default"] = /* @__PURE__ */ function(_React$Component) {
    _inherits2(Slider2, _React$Component);
    var _super = _createSuper2(Slider2);
    function Slider2(props) {
      var _this;
      _classCallCheck2(this, Slider2);
      _this = _super.call(this, props);
      _defineProperty2(_assertThisInitialized2(_this), "innerSliderRefHandler", function(ref) {
        return _this.innerSlider = ref;
      });
      _defineProperty2(_assertThisInitialized2(_this), "slickPrev", function() {
        return _this.innerSlider.slickPrev();
      });
      _defineProperty2(_assertThisInitialized2(_this), "slickNext", function() {
        return _this.innerSlider.slickNext();
      });
      _defineProperty2(_assertThisInitialized2(_this), "slickGoTo", function(slide) {
        var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        return _this.innerSlider.slickGoTo(slide, dontAnimate);
      });
      _defineProperty2(_assertThisInitialized2(_this), "slickPause", function() {
        return _this.innerSlider.pause("paused");
      });
      _defineProperty2(_assertThisInitialized2(_this), "slickPlay", function() {
        return _this.innerSlider.autoPlay("play");
      });
      _this.state = {
        breakpoint: null
      };
      _this._responsiveMediaHandlers = [];
      return _this;
    }
    _createClass2(Slider2, [{
      key: "media",
      value: function media(query, handler) {
        enquire.register(query, handler);
        this._responsiveMediaHandlers.push({
          query,
          handler
        });
      }
      // handles responsive breakpoints
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;
        if (this.props.responsive) {
          var breakpoints = this.props.responsive.map(function(breakpt) {
            return breakpt.breakpoint;
          });
          breakpoints.sort(function(x, y) {
            return x - y;
          });
          breakpoints.forEach(function(breakpoint, index2) {
            var bQuery;
            if (index2 === 0) {
              bQuery = (0, _json2mq["default"])({
                minWidth: 0,
                maxWidth: breakpoint
              });
            } else {
              bQuery = (0, _json2mq["default"])({
                minWidth: breakpoints[index2 - 1] + 1,
                maxWidth: breakpoint
              });
            }
            (0, _innerSliderUtils2.canUseDOM)() && _this2.media(bQuery, function() {
              _this2.setState({
                breakpoint
              });
            });
          });
          var query = (0, _json2mq["default"])({
            minWidth: breakpoints.slice(-1)[0]
          });
          (0, _innerSliderUtils2.canUseDOM)() && this.media(query, function() {
            _this2.setState({
              breakpoint: null
            });
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._responsiveMediaHandlers.forEach(function(obj) {
          enquire.unregister(obj.query, obj.handler);
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;
        var settings;
        var newProps;
        if (this.state.breakpoint) {
          newProps = this.props.responsive.filter(function(resp) {
            return resp.breakpoint === _this3.state.breakpoint;
          });
          settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread3(_objectSpread3(_objectSpread3({}, _defaultProps2["default"]), this.props), newProps[0].settings);
        } else {
          settings = _objectSpread3(_objectSpread3({}, _defaultProps2["default"]), this.props);
        }
        if (settings.centerMode) {
          if (settings.slidesToScroll > 1 && false) {
            console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
          }
          settings.slidesToScroll = 1;
        }
        if (settings.fade) {
          if (settings.slidesToShow > 1 && false) {
            console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
          }
          if (settings.slidesToScroll > 1 && false) {
            console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
          }
          settings.slidesToShow = 1;
          settings.slidesToScroll = 1;
        }
        var children = _react2["default"].Children.toArray(this.props.children);
        children = children.filter(function(child) {
          if (typeof child === "string") {
            return !!child.trim();
          }
          return !!child;
        });
        if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
          console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
          settings.variableWidth = false;
        }
        var newChildren = [];
        var currentWidth = null;
        for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
          var newSlide = [];
          for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
            var row = [];
            for (var k = j; k < j + settings.slidesPerRow; k += 1) {
              if (settings.variableWidth && children[k].props.style) {
                currentWidth = children[k].props.style.width;
              }
              if (k >= children.length) break;
              row.push(/* @__PURE__ */ _react2["default"].cloneElement(children[k], {
                key: 100 * i + 10 * j + k,
                tabIndex: -1,
                style: {
                  width: "".concat(100 / settings.slidesPerRow, "%"),
                  display: "inline-block"
                }
              }));
            }
            newSlide.push(/* @__PURE__ */ _react2["default"].createElement("div", {
              key: 10 * i + j
            }, row));
          }
          if (settings.variableWidth) {
            newChildren.push(/* @__PURE__ */ _react2["default"].createElement("div", {
              key: i,
              style: {
                width: currentWidth
              }
            }, newSlide));
          } else {
            newChildren.push(/* @__PURE__ */ _react2["default"].createElement("div", {
              key: i
            }, newSlide));
          }
        }
        if (settings === "unslick") {
          var className = "regular slider " + (this.props.className || "");
          return /* @__PURE__ */ _react2["default"].createElement("div", {
            className
          }, children);
        } else if (newChildren.length <= settings.slidesToShow && !settings.infinite) {
          settings.unslick = true;
        }
        return /* @__PURE__ */ _react2["default"].createElement(_innerSlider.InnerSlider, _extends2({
          style: this.props.style,
          ref: this.innerSliderRefHandler
        }, (0, _innerSliderUtils2.filterSettings)(settings)), newChildren);
      }
    }]);
    return Slider2;
  }(_react2["default"].Component);
})(slider);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _slider = _interopRequireDefault2(slider);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  exports["default"] = _slider["default"];
})(lib$1);
const Slider$1 = /* @__PURE__ */ getDefaultExportFromCjs(lib$1);
var lib = {};
var interopRequireWildcard = { exports: {} };
var _typeof = { exports: {} };
(function(module) {
  function _typeof2(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
      return typeof o2;
    } : function(o2) {
      return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof2(o);
  }
  module.exports = _typeof2, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(_typeof);
var _typeofExports = _typeof.exports;
(function(module) {
  var _typeof2 = _typeofExports["default"];
  function _getRequireWildcardCache(e) {
    if ("function" != typeof WeakMap) return null;
    var r = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache2(e2) {
      return e2 ? t : r;
    })(e);
  }
  function _interopRequireWildcard(e, r) {
    if (!r && e && e.__esModule) return e;
    if (null === e || "object" != _typeof2(e) && "function" != typeof e) return {
      "default": e
    };
    var t = _getRequireWildcardCache(r);
    if (t && t.has(e)) return t.get(e);
    var n = {
      __proto__: null
    }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n["default"] = e, t && t.set(e, n), n;
  }
  module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;
})(interopRequireWildcard);
var interopRequireWildcardExports = interopRequireWildcard.exports;
var Player = {};
var objectSpread = { exports: {} };
var defineProperty = { exports: {} };
var toPropertyKey = { exports: {} };
var toPrimitive = { exports: {} };
var hasRequiredToPrimitive;
function requireToPrimitive() {
  if (hasRequiredToPrimitive) return toPrimitive.exports;
  hasRequiredToPrimitive = 1;
  (function(module) {
    var _typeof2 = _typeofExports["default"];
    function toPrimitive2(t, r) {
      if ("object" != _typeof2(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof2(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    module.exports = toPrimitive2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(toPrimitive);
  return toPrimitive.exports;
}
var hasRequiredToPropertyKey;
function requireToPropertyKey() {
  if (hasRequiredToPropertyKey) return toPropertyKey.exports;
  hasRequiredToPropertyKey = 1;
  (function(module) {
    var _typeof2 = _typeofExports["default"];
    var toPrimitive2 = requireToPrimitive();
    function toPropertyKey2(t) {
      var i = toPrimitive2(t, "string");
      return "symbol" == _typeof2(i) ? i : i + "";
    }
    module.exports = toPropertyKey2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(toPropertyKey);
  return toPropertyKey.exports;
}
var hasRequiredDefineProperty;
function requireDefineProperty() {
  if (hasRequiredDefineProperty) return defineProperty.exports;
  hasRequiredDefineProperty = 1;
  (function(module) {
    var toPropertyKey2 = requireToPropertyKey();
    function _defineProperty2(e, r, t) {
      return (r = toPropertyKey2(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[r] = t, e;
    }
    module.exports = _defineProperty2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(defineProperty);
  return defineProperty.exports;
}
var hasRequiredObjectSpread;
function requireObjectSpread() {
  if (hasRequiredObjectSpread) return objectSpread.exports;
  hasRequiredObjectSpread = 1;
  (function(module) {
    var defineProperty2 = requireDefineProperty();
    function _objectSpread3(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? Object(arguments[r]) : {}, o = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(t).filter(function(e2) {
          return Object.getOwnPropertyDescriptor(t, e2).enumerable;
        })), o.forEach(function(r2) {
          defineProperty2(e, r2, t[r2]);
        });
      }
      return e;
    }
    module.exports = _objectSpread3, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(objectSpread);
  return objectSpread.exports;
}
const require$$3 = /* @__PURE__ */ getAugmentedNamespace(defineProperty$1);
var objectWithoutProperties = { exports: {} };
var hasRequiredObjectWithoutProperties;
function requireObjectWithoutProperties() {
  if (hasRequiredObjectWithoutProperties) return objectWithoutProperties.exports;
  hasRequiredObjectWithoutProperties = 1;
  (function(module) {
    var objectWithoutPropertiesLoose = requireObjectWithoutPropertiesLoose();
    function _objectWithoutProperties2(e, t) {
      if (null == e) return {};
      var o, r, i = objectWithoutPropertiesLoose(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
      }
      return i;
    }
    module.exports = _objectWithoutProperties2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(objectWithoutProperties);
  return objectWithoutProperties.exports;
}
var classCallCheck = { exports: {} };
var hasRequiredClassCallCheck;
function requireClassCallCheck() {
  if (hasRequiredClassCallCheck) return classCallCheck.exports;
  hasRequiredClassCallCheck = 1;
  (function(module) {
    function _classCallCheck2(a, n) {
      if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    module.exports = _classCallCheck2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(classCallCheck);
  return classCallCheck.exports;
}
var createClass = { exports: {} };
var hasRequiredCreateClass;
function requireCreateClass() {
  if (hasRequiredCreateClass) return createClass.exports;
  hasRequiredCreateClass = 1;
  (function(module) {
    var toPropertyKey2 = requireToPropertyKey();
    function _defineProperties2(e, r) {
      for (var t = 0; t < r.length; t++) {
        var o = r[t];
        o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey2(o.key), o);
      }
    }
    function _createClass2(e, r, t) {
      return r && _defineProperties2(e.prototype, r), t && _defineProperties2(e, t), Object.defineProperty(e, "prototype", {
        writable: false
      }), e;
    }
    module.exports = _createClass2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(createClass);
  return createClass.exports;
}
var possibleConstructorReturn = { exports: {} };
var assertThisInitialized = { exports: {} };
var hasRequiredAssertThisInitialized;
function requireAssertThisInitialized() {
  if (hasRequiredAssertThisInitialized) return assertThisInitialized.exports;
  hasRequiredAssertThisInitialized = 1;
  (function(module) {
    function _assertThisInitialized2(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    module.exports = _assertThisInitialized2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(assertThisInitialized);
  return assertThisInitialized.exports;
}
var hasRequiredPossibleConstructorReturn;
function requirePossibleConstructorReturn() {
  if (hasRequiredPossibleConstructorReturn) return possibleConstructorReturn.exports;
  hasRequiredPossibleConstructorReturn = 1;
  (function(module) {
    var _typeof2 = _typeofExports["default"];
    var assertThisInitialized2 = requireAssertThisInitialized();
    function _possibleConstructorReturn2(t, e) {
      if (e && ("object" == _typeof2(e) || "function" == typeof e)) return e;
      if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
      return assertThisInitialized2(t);
    }
    module.exports = _possibleConstructorReturn2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(possibleConstructorReturn);
  return possibleConstructorReturn.exports;
}
var getPrototypeOf = { exports: {} };
var hasRequiredGetPrototypeOf;
function requireGetPrototypeOf() {
  if (hasRequiredGetPrototypeOf) return getPrototypeOf.exports;
  hasRequiredGetPrototypeOf = 1;
  (function(module) {
    function _getPrototypeOf2(t) {
      return module.exports = _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
        return t2.__proto__ || Object.getPrototypeOf(t2);
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf2(t);
    }
    module.exports = _getPrototypeOf2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(getPrototypeOf);
  return getPrototypeOf.exports;
}
var inherits = { exports: {} };
var setPrototypeOf = { exports: {} };
var hasRequiredSetPrototypeOf;
function requireSetPrototypeOf() {
  if (hasRequiredSetPrototypeOf) return setPrototypeOf.exports;
  hasRequiredSetPrototypeOf = 1;
  (function(module) {
    function _setPrototypeOf2(t, e) {
      return module.exports = _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
        return t2.__proto__ = e2, t2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf2(t, e);
    }
    module.exports = _setPrototypeOf2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(setPrototypeOf);
  return setPrototypeOf.exports;
}
var hasRequiredInherits;
function requireInherits() {
  if (hasRequiredInherits) return inherits.exports;
  hasRequiredInherits = 1;
  (function(module) {
    var setPrototypeOf2 = requireSetPrototypeOf();
    function _inherits2(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: true,
          configurable: true
        }
      }), Object.defineProperty(t, "prototype", {
        writable: false
      }), e && setPrototypeOf2(t, e);
    }
    module.exports = _inherits2, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(inherits);
  return inherits.exports;
}
var Manager = {};
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty$5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index2 = nextListeners.indexOf(listener);
      nextListeners.splice(index2, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
var legacy_createStore = createStore;
function assertReducerShape(reducers2) {
  Object.keys(reducers2).forEach(function(key) {
    var reducer = reducers2[key];
    var initialState2 = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers2) {
  var reducerKeys = Object.keys(reducers2);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];
    if (typeof reducers2[key] === "function") {
      finalReducers[key] = reducers2[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(formatProdErrorMessage(16));
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a, b) {
    return function() {
      return a(b.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
const redux = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __DO_NOT_USE__ActionTypes: ActionTypes,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
  compose,
  createStore,
  legacy_createStore
}, Symbol.toStringTag, { value: "Module" }));
const require$$5 = /* @__PURE__ */ getAugmentedNamespace(redux);
var reducers = {};
var player$1 = {};
var video = {};
var hasRequiredVideo$1;
function requireVideo$1() {
  if (hasRequiredVideo$1) return video;
  hasRequiredVideo$1 = 1;
  Object.defineProperty(video, "__esModule", {
    value: true
  });
  video.handleLoadStart = handleLoadStart;
  video.handleCanPlay = handleCanPlay;
  video.handleWaiting = handleWaiting;
  video.handleCanPlayThrough = handleCanPlayThrough;
  video.handlePlaying = handlePlaying;
  video.handlePlay = handlePlay;
  video.handlePause = handlePause;
  video.handleEnd = handleEnd;
  video.handleSeeking = handleSeeking;
  video.handleSeeked = handleSeeked;
  video.handleDurationChange = handleDurationChange;
  video.handleTimeUpdate = handleTimeUpdate;
  video.handleVolumeChange = handleVolumeChange;
  video.handleProgressChange = handleProgressChange;
  video.handleRateChange = handleRateChange;
  video.handleSuspend = handleSuspend;
  video.handleAbort = handleAbort;
  video.handleEmptied = handleEmptied;
  video.handleStalled = handleStalled;
  video.handleLoadedMetaData = handleLoadedMetaData;
  video.handleLoadedData = handleLoadedData;
  video.handleResize = handleResize;
  video.handleError = handleError;
  video.handleSeekingTime = handleSeekingTime;
  video.handleEndSeeking = handleEndSeeking;
  video.activateTextTrack = activateTextTrack;
  video.ACTIVATE_TEXT_TRACK = video.ERROR = video.RESIZE = video.LOADED_DATA = video.LOADED_META_DATA = video.STALLED = video.EMPTIED = video.ABORT = video.SUSPEND = video.RATE_CHANGE = video.PROGRESS_CHANGE = video.VOLUME_CHANGE = video.TIME_UPDATE = video.DURATION_CHANGE = video.END_SEEKING = video.SEEKING_TIME = video.SEEKED = video.SEEKING = video.END = video.PAUSE = video.PLAY = video.PLAYING = video.CAN_PLAY_THROUGH = video.WAITING = video.CAN_PLAY = video.LOAD_START = void 0;
  var LOAD_START = "video-react/LOAD_START";
  video.LOAD_START = LOAD_START;
  var CAN_PLAY = "video-react/CAN_PLAY";
  video.CAN_PLAY = CAN_PLAY;
  var WAITING = "video-react/WAITING";
  video.WAITING = WAITING;
  var CAN_PLAY_THROUGH = "video-react/CAN_PLAY_THROUGH";
  video.CAN_PLAY_THROUGH = CAN_PLAY_THROUGH;
  var PLAYING = "video-react/PLAYING";
  video.PLAYING = PLAYING;
  var PLAY = "video-react/PLAY";
  video.PLAY = PLAY;
  var PAUSE = "video-react/PAUSE";
  video.PAUSE = PAUSE;
  var END = "video-react/END";
  video.END = END;
  var SEEKING = "video-react/SEEKING";
  video.SEEKING = SEEKING;
  var SEEKED = "video-react/SEEKED";
  video.SEEKED = SEEKED;
  var SEEKING_TIME = "video-react/SEEKING_TIME";
  video.SEEKING_TIME = SEEKING_TIME;
  var END_SEEKING = "video-react/END_SEEKING";
  video.END_SEEKING = END_SEEKING;
  var DURATION_CHANGE = "video-react/DURATION_CHANGE";
  video.DURATION_CHANGE = DURATION_CHANGE;
  var TIME_UPDATE = "video-react/TIME_UPDATE";
  video.TIME_UPDATE = TIME_UPDATE;
  var VOLUME_CHANGE = "video-react/VOLUME_CHANGE";
  video.VOLUME_CHANGE = VOLUME_CHANGE;
  var PROGRESS_CHANGE = "video-react/PROGRESS_CHANGE";
  video.PROGRESS_CHANGE = PROGRESS_CHANGE;
  var RATE_CHANGE = "video-react/RATE_CHANGE";
  video.RATE_CHANGE = RATE_CHANGE;
  var SUSPEND = "video-react/SUSPEND";
  video.SUSPEND = SUSPEND;
  var ABORT = "video-react/ABORT";
  video.ABORT = ABORT;
  var EMPTIED = "video-react/EMPTIED";
  video.EMPTIED = EMPTIED;
  var STALLED = "video-react/STALLED";
  video.STALLED = STALLED;
  var LOADED_META_DATA = "video-react/LOADED_META_DATA";
  video.LOADED_META_DATA = LOADED_META_DATA;
  var LOADED_DATA = "video-react/LOADED_DATA";
  video.LOADED_DATA = LOADED_DATA;
  var RESIZE = "video-react/RESIZE";
  video.RESIZE = RESIZE;
  var ERROR = "video-react/ERROR";
  video.ERROR = ERROR;
  var ACTIVATE_TEXT_TRACK = "video-react/ACTIVATE_TEXT_TRACK";
  video.ACTIVATE_TEXT_TRACK = ACTIVATE_TEXT_TRACK;
  function handleLoadStart(videoProps) {
    return {
      type: LOAD_START,
      videoProps
    };
  }
  function handleCanPlay(videoProps) {
    return {
      type: CAN_PLAY,
      videoProps
    };
  }
  function handleWaiting(videoProps) {
    return {
      type: WAITING,
      videoProps
    };
  }
  function handleCanPlayThrough(videoProps) {
    return {
      type: CAN_PLAY_THROUGH,
      videoProps
    };
  }
  function handlePlaying(videoProps) {
    return {
      type: PLAYING,
      videoProps
    };
  }
  function handlePlay(videoProps) {
    return {
      type: PLAY,
      videoProps
    };
  }
  function handlePause(videoProps) {
    return {
      type: PAUSE,
      videoProps
    };
  }
  function handleEnd(videoProps) {
    return {
      type: END,
      videoProps
    };
  }
  function handleSeeking(videoProps) {
    return {
      type: SEEKING,
      videoProps
    };
  }
  function handleSeeked(videoProps) {
    return {
      type: SEEKED,
      videoProps
    };
  }
  function handleDurationChange(videoProps) {
    return {
      type: DURATION_CHANGE,
      videoProps
    };
  }
  function handleTimeUpdate(videoProps) {
    return {
      type: TIME_UPDATE,
      videoProps
    };
  }
  function handleVolumeChange(videoProps) {
    return {
      type: VOLUME_CHANGE,
      videoProps
    };
  }
  function handleProgressChange(videoProps) {
    return {
      type: PROGRESS_CHANGE,
      videoProps
    };
  }
  function handleRateChange(videoProps) {
    return {
      type: RATE_CHANGE,
      videoProps
    };
  }
  function handleSuspend(videoProps) {
    return {
      type: SUSPEND,
      videoProps
    };
  }
  function handleAbort(videoProps) {
    return {
      type: ABORT,
      videoProps
    };
  }
  function handleEmptied(videoProps) {
    return {
      type: EMPTIED,
      videoProps
    };
  }
  function handleStalled(videoProps) {
    return {
      type: STALLED,
      videoProps
    };
  }
  function handleLoadedMetaData(videoProps) {
    return {
      type: LOADED_META_DATA,
      videoProps
    };
  }
  function handleLoadedData(videoProps) {
    return {
      type: LOADED_DATA,
      videoProps
    };
  }
  function handleResize(videoProps) {
    return {
      type: RESIZE,
      videoProps
    };
  }
  function handleError(videoProps) {
    return {
      type: ERROR,
      videoProps
    };
  }
  function handleSeekingTime(time) {
    return {
      type: SEEKING_TIME,
      time
    };
  }
  function handleEndSeeking(time) {
    return {
      type: END_SEEKING,
      time
    };
  }
  function activateTextTrack(textTrack) {
    return {
      type: ACTIVATE_TEXT_TRACK,
      textTrack
    };
  }
  return video;
}
var player = {};
var fullscreen = {};
var hasRequiredFullscreen;
function requireFullscreen() {
  if (hasRequiredFullscreen) return fullscreen;
  hasRequiredFullscreen = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var Fullscreen = /* @__PURE__ */ function() {
      function Fullscreen2() {
        (0, _classCallCheck2["default"])(this, Fullscreen2);
      }
      (0, _createClass2["default"])(Fullscreen2, [{
        key: "request",
        value: function request(elm) {
          if (elm.requestFullscreen) {
            elm.requestFullscreen();
          } else if (elm.webkitRequestFullscreen) {
            elm.webkitRequestFullscreen();
          } else if (elm.mozRequestFullScreen) {
            elm.mozRequestFullScreen();
          } else if (elm.msRequestFullscreen) {
            elm.msRequestFullscreen();
          }
        }
      }, {
        key: "exit",
        value: function exit() {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(handler) {
          document.addEventListener("fullscreenchange", handler);
          document.addEventListener("webkitfullscreenchange", handler);
          document.addEventListener("mozfullscreenchange", handler);
          document.addEventListener("MSFullscreenChange", handler);
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(handler) {
          document.removeEventListener("fullscreenchange", handler);
          document.removeEventListener("webkitfullscreenchange", handler);
          document.removeEventListener("mozfullscreenchange", handler);
          document.removeEventListener("MSFullscreenChange", handler);
        }
      }, {
        key: "isFullscreen",
        get: function get() {
          return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        }
      }, {
        key: "enabled",
        get: function get() {
          return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
        }
      }]);
      return Fullscreen2;
    }();
    var _default = new Fullscreen();
    exports["default"] = _default;
  })(fullscreen);
  return fullscreen;
}
var hasRequiredPlayer$2;
function requirePlayer$2() {
  if (hasRequiredPlayer$2) return player;
  hasRequiredPlayer$2 = 1;
  var _interopRequireDefault2 = interopRequireDefaultExports;
  Object.defineProperty(player, "__esModule", {
    value: true
  });
  player.handleFullscreenChange = handleFullscreenChange;
  player.activate = activate;
  player.userActivate = userActivate;
  player.play = play;
  player.pause = pause;
  player.togglePlay = togglePlay;
  player.seek = seek;
  player.forward = forward;
  player.replay = replay;
  player.changeRate = changeRate;
  player.changeVolume = changeVolume;
  player.mute = mute;
  player.toggleFullscreen = toggleFullscreen;
  player.USER_ACTIVATE = player.PLAYER_ACTIVATE = player.FULLSCREEN_CHANGE = player.OPERATE = void 0;
  var _fullscreen = _interopRequireDefault2(requireFullscreen());
  var OPERATE = "video-react/OPERATE";
  player.OPERATE = OPERATE;
  var FULLSCREEN_CHANGE = "video-react/FULLSCREEN_CHANGE";
  player.FULLSCREEN_CHANGE = FULLSCREEN_CHANGE;
  var PLAYER_ACTIVATE = "video-react/PLAYER_ACTIVATE";
  player.PLAYER_ACTIVATE = PLAYER_ACTIVATE;
  var USER_ACTIVATE = "video-react/USER_ACTIVATE";
  player.USER_ACTIVATE = USER_ACTIVATE;
  function handleFullscreenChange(isFullscreen) {
    return {
      type: FULLSCREEN_CHANGE,
      isFullscreen
    };
  }
  function activate(activity) {
    return {
      type: PLAYER_ACTIVATE,
      activity
    };
  }
  function userActivate(activity) {
    return {
      type: USER_ACTIVATE,
      activity
    };
  }
  function play() {
    var operation2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      action: "play",
      source: ""
    };
    this.video.play();
    return {
      type: OPERATE,
      operation: operation2
    };
  }
  function pause() {
    var operation2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      action: "pause",
      source: ""
    };
    this.video.pause();
    return {
      type: OPERATE,
      operation: operation2
    };
  }
  function togglePlay() {
    var operation2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      action: "toggle-play",
      source: ""
    };
    this.video.togglePlay();
    return {
      type: OPERATE,
      operation: operation2
    };
  }
  function seek(time) {
    var operation2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      action: "seek",
      source: ""
    };
    this.video.seek(time);
    return {
      type: OPERATE,
      operation: operation2
    };
  }
  function forward(seconds) {
    var operation2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      action: "forward-".concat(seconds),
      source: ""
    };
    this.video.forward(seconds);
    return {
      type: OPERATE,
      operation: operation2
    };
  }
  function replay(seconds) {
    var operation2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      action: "replay-".concat(seconds),
      source: ""
    };
    this.video.replay(seconds);
    return {
      type: OPERATE,
      operation: operation2
    };
  }
  function changeRate(rate) {
    var operation2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      action: "change-rate",
      source: ""
    };
    this.video.playbackRate = rate;
    return {
      type: OPERATE,
      operation: operation2
    };
  }
  function changeVolume(volume) {
    var operation2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      action: "change-volume",
      source: ""
    };
    var v = volume;
    if (volume < 0) {
      v = 0;
    }
    if (volume > 1) {
      v = 1;
    }
    this.video.volume = v;
    return {
      type: OPERATE,
      operation: operation2
    };
  }
  function mute(muted) {
    var operation2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      action: muted ? "muted" : "unmuted",
      source: ""
    };
    this.video.muted = muted;
    return {
      type: OPERATE,
      operation: operation2
    };
  }
  function toggleFullscreen(player2) {
    if (_fullscreen["default"].enabled) {
      if (_fullscreen["default"].isFullscreen) {
        _fullscreen["default"].exit();
      } else {
        _fullscreen["default"].request(this.rootElement);
      }
      return {
        type: OPERATE,
        operation: {
          action: "toggle-fullscreen",
          source: ""
        }
      };
    }
    return {
      type: FULLSCREEN_CHANGE,
      isFullscreen: !player2.isFullscreen
    };
  }
  return player;
}
var hasRequiredPlayer$1;
function requirePlayer$1() {
  if (hasRequiredPlayer$1) return player$1;
  hasRequiredPlayer$1 = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = player2;
    var _objectSpread22 = _interopRequireDefault2(requireObjectSpread());
    var _video = requireVideo$1();
    var _player = requirePlayer$2();
    var initialState2 = {
      currentSrc: null,
      duration: 0,
      currentTime: 0,
      seekingTime: 0,
      buffered: null,
      waiting: false,
      seeking: false,
      paused: true,
      autoPaused: false,
      ended: false,
      playbackRate: 1,
      muted: false,
      volume: 1,
      readyState: 0,
      networkState: 0,
      videoWidth: 0,
      videoHeight: 0,
      hasStarted: false,
      userActivity: true,
      isActive: false,
      isFullscreen: false,
      activeTextTrack: null
    };
    function player2() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState2;
      var action = arguments.length > 1 ? arguments[1] : void 0;
      switch (action.type) {
        case _player.USER_ACTIVATE:
          return (0, _objectSpread22["default"])({}, state, {
            userActivity: action.activity
          });
        case _player.PLAYER_ACTIVATE:
          return (0, _objectSpread22["default"])({}, state, {
            isActive: action.activity
          });
        case _player.FULLSCREEN_CHANGE:
          return (0, _objectSpread22["default"])({}, state, {
            isFullscreen: !!action.isFullscreen
          });
        case _video.SEEKING_TIME:
          return (0, _objectSpread22["default"])({}, state, {
            seekingTime: action.time
          });
        case _video.END_SEEKING:
          return (0, _objectSpread22["default"])({}, state, {
            seekingTime: 0
          });
        case _video.LOAD_START:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            hasStarted: false,
            ended: false
          });
        case _video.CAN_PLAY:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            waiting: false
          });
        case _video.WAITING:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            waiting: true
          });
        case _video.CAN_PLAY_THROUGH:
        case _video.PLAYING:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            waiting: false
          });
        case _video.PLAY:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            ended: false,
            paused: false,
            autoPaused: false,
            waiting: false,
            hasStarted: true
          });
        case _video.PAUSE:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            paused: true
          });
        case _video.END:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            ended: true
          });
        case _video.SEEKING:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            seeking: true
          });
        case _video.SEEKED:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            seeking: false
          });
        case _video.ERROR:
          return (0, _objectSpread22["default"])({}, state, action.videoProps, {
            error: "UNKNOWN ERROR",
            ended: true
          });
        case _video.DURATION_CHANGE:
        case _video.TIME_UPDATE:
        case _video.VOLUME_CHANGE:
        case _video.PROGRESS_CHANGE:
        case _video.RATE_CHANGE:
        case _video.SUSPEND:
        case _video.ABORT:
        case _video.EMPTIED:
        case _video.STALLED:
        case _video.LOADED_META_DATA:
        case _video.LOADED_DATA:
        case _video.RESIZE:
          return (0, _objectSpread22["default"])({}, state, action.videoProps);
        case _video.ACTIVATE_TEXT_TRACK:
          return (0, _objectSpread22["default"])({}, state, {
            activeTextTrack: action.textTrack
          });
        default:
          return state;
      }
    }
  })(player$1);
  return player$1;
}
var operation = {};
var hasRequiredOperation;
function requireOperation() {
  if (hasRequiredOperation) return operation;
  hasRequiredOperation = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = operation2;
    var _objectSpread22 = _interopRequireDefault2(requireObjectSpread());
    var _player = requirePlayer$2();
    var initialState2 = {
      count: 0,
      operation: {
        action: "",
        source: ""
      }
    };
    function operation2() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : initialState2;
      var action = arguments.length > 1 ? arguments[1] : void 0;
      switch (action.type) {
        case _player.OPERATE:
          return (0, _objectSpread22["default"])({}, state, {
            count: state.count + 1,
            operation: (0, _objectSpread22["default"])({}, state.operation, action.operation)
          });
        default:
          return state;
      }
    }
  })(operation);
  return operation;
}
var hasRequiredReducers;
function requireReducers() {
  if (hasRequiredReducers) return reducers;
  hasRequiredReducers = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = _default;
    exports.operationReducer = exports.playerReducer = void 0;
    var _player = _interopRequireDefault2(requirePlayer$1());
    var _operation = _interopRequireDefault2(requireOperation());
    function _default() {
      var state = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : void 0;
      return {
        player: (0, _player["default"])(state.player, action),
        operation: (0, _operation["default"])(state.operation, action)
      };
    }
    var playerReducer = _player["default"];
    exports.playerReducer = playerReducer;
    var operationReducer = _operation["default"];
    exports.operationReducer = operationReducer;
  })(reducers);
  return reducers;
}
var hasRequiredManager;
function requireManager() {
  if (hasRequiredManager) return Manager;
  hasRequiredManager = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _objectSpread22 = _interopRequireDefault2(requireObjectSpread());
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _redux = require$$5;
    var _reducers = _interopRequireDefault2(requireReducers());
    var playerActions = _interopRequireWildcard(requirePlayer$2());
    var videoActions = _interopRequireWildcard(requireVideo$1());
    var Manager2 = /* @__PURE__ */ function() {
      function Manager3(store) {
        (0, _classCallCheck2["default"])(this, Manager3);
        this.store = store || (0, _redux.createStore)(_reducers["default"]);
        this.video = null;
        this.rootElement = null;
      }
      (0, _createClass2["default"])(Manager3, [{
        key: "getActions",
        value: function getActions() {
          var manager = this;
          var dispatch = this.store.dispatch;
          var actions = (0, _objectSpread22["default"])({}, playerActions, videoActions);
          function bindActionCreator2(actionCreator) {
            return function bindAction() {
              var action = actionCreator.apply(manager, arguments);
              if (typeof action !== "undefined") {
                dispatch(action);
              }
            };
          }
          return Object.keys(actions).filter(function(key) {
            return typeof actions[key] === "function";
          }).reduce(function(boundActions, key) {
            boundActions[key] = bindActionCreator2(actions[key]);
            return boundActions;
          }, {});
        }
      }, {
        key: "getState",
        value: function getState() {
          return this.store.getState();
        }
        // subscribe state change
      }, {
        key: "subscribeToStateChange",
        value: function subscribeToStateChange(listener, getState) {
          if (!getState) {
            getState = this.getState.bind(this);
          }
          var prevState = getState();
          var handleChange = function handleChange2() {
            var state = getState();
            if (state === prevState) {
              return;
            }
            var prevStateCopy = prevState;
            prevState = state;
            listener(state, prevStateCopy);
          };
          return this.store.subscribe(handleChange);
        }
        // subscribe to operation state change
      }, {
        key: "subscribeToOperationStateChange",
        value: function subscribeToOperationStateChange(listener) {
          var _this = this;
          return this.subscribeToStateChange(listener, function() {
            return _this.getState().operation;
          });
        }
        // subscribe to player state change
      }, {
        key: "subscribeToPlayerStateChange",
        value: function subscribeToPlayerStateChange(listener) {
          var _this2 = this;
          return this.subscribeToStateChange(listener, function() {
            return _this2.getState().player;
          });
        }
      }]);
      return Manager3;
    }();
    exports["default"] = Manager2;
  })(Manager);
  return Manager;
}
var BigPlayButton = {};
var hasRequiredBigPlayButton;
function requireBigPlayButton() {
  if (hasRequiredBigPlayButton) return BigPlayButton;
  hasRequiredBigPlayButton = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      position: _propTypes["default"].string,
      className: _propTypes["default"].string
    };
    var defaultProps2 = {
      position: "left"
    };
    var BigPlayButton2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(BigPlayButton3, _Component);
      function BigPlayButton3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, BigPlayButton3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BigPlayButton3).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(BigPlayButton3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
        }
      }, {
        key: "handleClick",
        value: function handleClick() {
          var actions = this.props.actions;
          actions.play();
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props, player2 = _this$props.player, position = _this$props.position;
          return _react2["default"].createElement("button", {
            className: (0, _classnames2["default"])("video-react-button", "video-react-big-play-button", "video-react-big-play-button-".concat(position), this.props.className, {
              "big-play-button-hide": player2.hasStarted || !player2.currentSrc
            }),
            type: "button",
            "aria-live": "polite",
            tabIndex: "0",
            onClick: this.handleClick
          }, _react2["default"].createElement("span", {
            className: "video-react-control-text"
          }, "Play Video"));
        }
      }]);
      return BigPlayButton3;
    }(_react2.Component);
    exports["default"] = BigPlayButton2;
    BigPlayButton2.propTypes = propTypes;
    BigPlayButton2.defaultProps = defaultProps2;
    BigPlayButton2.displayName = "BigPlayButton";
  })(BigPlayButton);
  return BigPlayButton;
}
var LoadingSpinner = {};
var hasRequiredLoadingSpinner;
function requireLoadingSpinner() {
  if (hasRequiredLoadingSpinner) return LoadingSpinner;
  hasRequiredLoadingSpinner = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = LoadingSpinner2;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function LoadingSpinner2(_ref) {
      var player2 = _ref.player, className = _ref.className;
      if (player2.error) {
        return null;
      }
      return _react2["default"].createElement("div", {
        className: (0, _classnames2["default"])("video-react-loading-spinner", className)
      });
    }
    LoadingSpinner2.propTypes = propTypes;
    LoadingSpinner2.displayName = "LoadingSpinner";
  })(LoadingSpinner);
  return LoadingSpinner;
}
var PosterImage = {};
var hasRequiredPosterImage;
function requirePosterImage() {
  if (hasRequiredPosterImage) return PosterImage;
  hasRequiredPosterImage = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      poster: _propTypes["default"].string,
      player: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function PosterImage2(_ref) {
      var poster = _ref.poster, player2 = _ref.player, actions = _ref.actions, className = _ref.className;
      if (!poster || player2.hasStarted) {
        return null;
      }
      return _react2["default"].createElement("div", {
        className: (0, _classnames2["default"])("video-react-poster", className),
        style: {
          backgroundImage: 'url("'.concat(poster, '")')
        },
        onClick: function onClick() {
          if (player2.paused) {
            actions.play();
          }
        }
      });
    }
    PosterImage2.propTypes = propTypes;
    PosterImage2.displayName = "PosterImage";
    var _default = PosterImage2;
    exports["default"] = _default;
  })(PosterImage);
  return PosterImage;
}
var Video = {};
var utils = {};
var toConsumableArray = { exports: {} };
var arrayWithoutHoles = { exports: {} };
var arrayLikeToArray = { exports: {} };
var hasRequiredArrayLikeToArray;
function requireArrayLikeToArray() {
  if (hasRequiredArrayLikeToArray) return arrayLikeToArray.exports;
  hasRequiredArrayLikeToArray = 1;
  (function(module) {
    function _arrayLikeToArray(r, a) {
      (null == a || a > r.length) && (a = r.length);
      for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
      return n;
    }
    module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(arrayLikeToArray);
  return arrayLikeToArray.exports;
}
var hasRequiredArrayWithoutHoles;
function requireArrayWithoutHoles() {
  if (hasRequiredArrayWithoutHoles) return arrayWithoutHoles.exports;
  hasRequiredArrayWithoutHoles = 1;
  (function(module) {
    var arrayLikeToArray2 = requireArrayLikeToArray();
    function _arrayWithoutHoles(r) {
      if (Array.isArray(r)) return arrayLikeToArray2(r);
    }
    module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(arrayWithoutHoles);
  return arrayWithoutHoles.exports;
}
var iterableToArray = { exports: {} };
var hasRequiredIterableToArray;
function requireIterableToArray() {
  if (hasRequiredIterableToArray) return iterableToArray.exports;
  hasRequiredIterableToArray = 1;
  (function(module) {
    function _iterableToArray(r) {
      if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
    }
    module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(iterableToArray);
  return iterableToArray.exports;
}
var unsupportedIterableToArray = { exports: {} };
var hasRequiredUnsupportedIterableToArray;
function requireUnsupportedIterableToArray() {
  if (hasRequiredUnsupportedIterableToArray) return unsupportedIterableToArray.exports;
  hasRequiredUnsupportedIterableToArray = 1;
  (function(module) {
    var arrayLikeToArray2 = requireArrayLikeToArray();
    function _unsupportedIterableToArray(r, a) {
      if (r) {
        if ("string" == typeof r) return arrayLikeToArray2(r, a);
        var t = {}.toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray2(r, a) : void 0;
      }
    }
    module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(unsupportedIterableToArray);
  return unsupportedIterableToArray.exports;
}
var nonIterableSpread = { exports: {} };
var hasRequiredNonIterableSpread;
function requireNonIterableSpread() {
  if (hasRequiredNonIterableSpread) return nonIterableSpread.exports;
  hasRequiredNonIterableSpread = 1;
  (function(module) {
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(nonIterableSpread);
  return nonIterableSpread.exports;
}
var hasRequiredToConsumableArray;
function requireToConsumableArray() {
  if (hasRequiredToConsumableArray) return toConsumableArray.exports;
  hasRequiredToConsumableArray = 1;
  (function(module) {
    var arrayWithoutHoles2 = requireArrayWithoutHoles();
    var iterableToArray2 = requireIterableToArray();
    var unsupportedIterableToArray2 = requireUnsupportedIterableToArray();
    var nonIterableSpread2 = requireNonIterableSpread();
    function _toConsumableArray(r) {
      return arrayWithoutHoles2(r) || iterableToArray2(r) || unsupportedIterableToArray2(r) || nonIterableSpread2();
    }
    module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
  })(toConsumableArray);
  return toConsumableArray.exports;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  var _interopRequireDefault2 = interopRequireDefaultExports;
  Object.defineProperty(utils, "__esModule", {
    value: true
  });
  utils.formatTime = formatTime;
  utils.isVideoChild = isVideoChild;
  utils.mergeAndSortChildren = mergeAndSortChildren;
  utils.deprecatedWarning = deprecatedWarning;
  utils.throttle = throttle2;
  utils.mediaProperties = void 0;
  var _toConsumableArray2 = _interopRequireDefault2(requireToConsumableArray());
  var _objectSpread22 = _interopRequireDefault2(requireObjectSpread());
  var _objectWithoutProperties2 = _interopRequireDefault2(requireObjectWithoutProperties());
  var _react2 = _interopRequireDefault2(reactExports);
  var isNaN2 = Number.isNaN || function(value) {
    return value !== value;
  };
  function formatTime() {
    var seconds = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    var guide = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : seconds;
    var s = Math.floor(seconds % 60);
    var m = Math.floor(seconds / 60 % 60);
    var h = Math.floor(seconds / 3600);
    var gm = Math.floor(guide / 60 % 60);
    var gh = Math.floor(guide / 3600);
    if (isNaN2(seconds) || seconds === Infinity) {
      h = "-";
      m = "-";
      s = "-";
    }
    h = h > 0 || gh > 0 ? "".concat(h, ":") : "";
    m = "".concat((h || gm >= 10) && m < 10 ? "0".concat(m) : m, ":");
    s = s < 10 ? "0".concat(s) : s;
    return h + m + s;
  }
  function isVideoChild(c) {
    if (c.props && c.props.isVideoChild) {
      return true;
    }
    return c.type === "source" || c.type === "track";
  }
  var find = function find2(elements, func) {
    return elements.filter(func)[0];
  };
  var isTypeEqual = function isTypeEqual2(component1, component2) {
    var type1 = component1.type;
    var type2 = component2.type;
    if (typeof type1 === "string" || typeof type2 === "string") {
      return type1 === type2;
    }
    if (typeof type1 === "function" && typeof type2 === "function") {
      return type1.displayName === type2.displayName;
    }
    return false;
  };
  function mergeAndSortChildren(defaultChildren, _children, _parentProps) {
    var defaultOrder = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
    var children = _react2["default"].Children.toArray(_children);
    _parentProps.order;
    var parentProps = (0, _objectWithoutProperties2["default"])(_parentProps, ["order"]);
    return children.filter(function(e) {
      return !e.props.disabled;
    }).concat(defaultChildren.filter(function(c) {
      return !find(children, function(component) {
        return isTypeEqual(component, c);
      });
    })).map(function(element) {
      var defaultComponent = find(defaultChildren, function(c) {
        return isTypeEqual(c, element);
      });
      var defaultProps2 = defaultComponent ? defaultComponent.props : {};
      var props = (0, _objectSpread22["default"])({}, parentProps, defaultProps2, element.props);
      var e = _react2["default"].cloneElement(element, props, element.props.children);
      return e;
    }).sort(function(a, b) {
      return (a.props.order || defaultOrder) - (b.props.order || defaultOrder);
    });
  }
  function deprecatedWarning(oldMethodCall, newMethodCall) {
    console.warn("WARNING: ".concat(oldMethodCall, " will be deprecated soon! Please use ").concat(newMethodCall, " instead."));
  }
  function throttle2(callback, limit) {
    var _arguments = arguments;
    var wait = false;
    return function() {
      if (!wait) {
        callback.apply(void 0, (0, _toConsumableArray2["default"])(_arguments));
        wait = true;
        setTimeout(function() {
          wait = false;
        }, limit);
      }
    };
  }
  var mediaProperties = ["error", "src", "srcObject", "currentSrc", "crossOrigin", "networkState", "preload", "buffered", "readyState", "seeking", "currentTime", "duration", "paused", "defaultPlaybackRate", "playbackRate", "played", "seekable", "ended", "autoplay", "loop", "mediaGroup", "controller", "controls", "volume", "muted", "defaultMuted", "audioTracks", "videoTracks", "textTracks", "width", "height", "videoWidth", "videoHeight", "poster"];
  utils.mediaProperties = mediaProperties;
  return utils;
}
var hasRequiredVideo;
function requireVideo() {
  if (hasRequiredVideo) return Video;
  hasRequiredVideo = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _objectSpread22 = _interopRequireDefault2(requireObjectSpread());
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _utils = requireUtils();
    var propTypes = {
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      children: _propTypes["default"].any,
      startTime: _propTypes["default"].number,
      loop: _propTypes["default"].bool,
      muted: _propTypes["default"].bool,
      autoPlay: _propTypes["default"].bool,
      playsInline: _propTypes["default"].bool,
      src: _propTypes["default"].string,
      poster: _propTypes["default"].string,
      className: _propTypes["default"].string,
      preload: _propTypes["default"].oneOf(["auto", "metadata", "none"]),
      crossOrigin: _propTypes["default"].string,
      onLoadStart: _propTypes["default"].func,
      onWaiting: _propTypes["default"].func,
      onCanPlay: _propTypes["default"].func,
      onCanPlayThrough: _propTypes["default"].func,
      onPlaying: _propTypes["default"].func,
      onEnded: _propTypes["default"].func,
      onSeeking: _propTypes["default"].func,
      onSeeked: _propTypes["default"].func,
      onPlay: _propTypes["default"].func,
      onPause: _propTypes["default"].func,
      onProgress: _propTypes["default"].func,
      onDurationChange: _propTypes["default"].func,
      onError: _propTypes["default"].func,
      onSuspend: _propTypes["default"].func,
      onAbort: _propTypes["default"].func,
      onEmptied: _propTypes["default"].func,
      onStalled: _propTypes["default"].func,
      onLoadedMetadata: _propTypes["default"].func,
      onLoadedData: _propTypes["default"].func,
      onTimeUpdate: _propTypes["default"].func,
      onRateChange: _propTypes["default"].func,
      onVolumeChange: _propTypes["default"].func,
      onResize: _propTypes["default"].func
    };
    var Video2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(Video3, _Component);
      function Video3(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, Video3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Video3).call(this, props));
        _this.video = null;
        _this.play = _this.play.bind((0, _assertThisInitialized2["default"])(_this));
        _this.pause = _this.pause.bind((0, _assertThisInitialized2["default"])(_this));
        _this.seek = _this.seek.bind((0, _assertThisInitialized2["default"])(_this));
        _this.forward = _this.forward.bind((0, _assertThisInitialized2["default"])(_this));
        _this.replay = _this.replay.bind((0, _assertThisInitialized2["default"])(_this));
        _this.toggleFullscreen = _this.toggleFullscreen.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getProperties = _this.getProperties.bind((0, _assertThisInitialized2["default"])(_this));
        _this.renderChildren = _this.renderChildren.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleLoadStart = _this.handleLoadStart.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleCanPlay = _this.handleCanPlay.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handlePlay = _this.handlePlay.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handlePlaying = _this.handlePlaying.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handlePause = _this.handlePause.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleEnded = _this.handleEnded.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleWaiting = _this.handleWaiting.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSeeking = _this.handleSeeking.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSeeked = _this.handleSeeked.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFullscreenChange = _this.handleFullscreenChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleError = _this.handleError.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSuspend = _this.handleSuspend.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleAbort = _this.handleAbort.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleEmptied = _this.handleEmptied.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleStalled = _this.handleStalled.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleLoadedData = _this.handleLoadedData.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleTimeUpdate = _this.handleTimeUpdate.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleRateChange = _this.handleRateChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleVolumeChange = _this.handleVolumeChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleDurationChange = _this.handleDurationChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleProgress = (0, _utils.throttle)(_this.handleProgress.bind((0, _assertThisInitialized2["default"])(_this)), 250);
        _this.handleKeypress = _this.handleKeypress.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleTextTrackChange = _this.handleTextTrackChange.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(Video3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.forceUpdate();
          if (this.video && this.video.textTracks) {
            this.video.textTracks.onaddtrack = this.handleTextTrackChange;
            this.video.textTracks.onremovetrack = this.handleTextTrackChange;
          }
        }
        // get all video properties
      }, {
        key: "getProperties",
        value: function getProperties() {
          var _this2 = this;
          if (!this.video) {
            return null;
          }
          return _utils.mediaProperties.reduce(function(properties, key) {
            properties[key] = _this2.video[key];
            return properties;
          }, {});
        }
        // get playback rate
      }, {
        key: "handleTextTrackChange",
        value: function handleTextTrackChange() {
          var _this$props = this.props, actions = _this$props.actions, player2 = _this$props.player;
          if (this.video && this.video.textTracks) {
            var activeTextTrack = Array.from(this.video.textTracks).find(function(textTrack) {
              return textTrack.mode === "showing";
            });
            if (activeTextTrack !== player2.activeTextTrack) {
              actions.activateTextTrack(activeTextTrack);
            }
          }
        }
        // play the video
      }, {
        key: "play",
        value: function play() {
          var promise = this.video.play();
          if (promise !== void 0) {
            promise["catch"](function() {
            }).then(function() {
            });
          }
        }
        // pause the video
      }, {
        key: "pause",
        value: function pause() {
          var promise = this.video.pause();
          if (promise !== void 0) {
            promise["catch"](function() {
            }).then(function() {
            });
          }
        }
        // Change the video source and re-load the video:
      }, {
        key: "load",
        value: function load() {
          this.video.load();
        }
        // Add a new text track to the video
      }, {
        key: "addTextTrack",
        value: function addTextTrack() {
          var _this$video;
          (_this$video = this.video).addTextTrack.apply(_this$video, arguments);
        }
        // Check if your browser can play different types of video:
      }, {
        key: "canPlayType",
        value: function canPlayType() {
          var _this$video2;
          (_this$video2 = this.video).canPlayType.apply(_this$video2, arguments);
        }
        // toggle play
      }, {
        key: "togglePlay",
        value: function togglePlay() {
          if (this.video.paused) {
            this.play();
          } else {
            this.pause();
          }
        }
        // seek video by time
      }, {
        key: "seek",
        value: function seek(time) {
          try {
            this.video.currentTime = time;
          } catch (e) {
          }
        }
        // jump forward x seconds
      }, {
        key: "forward",
        value: function forward(seconds) {
          this.seek(this.video.currentTime + seconds);
        }
        // jump back x seconds
      }, {
        key: "replay",
        value: function replay(seconds) {
          this.forward(-seconds);
        }
        // enter or exist full screen
      }, {
        key: "toggleFullscreen",
        value: function toggleFullscreen() {
          var _this$props2 = this.props, player2 = _this$props2.player, actions = _this$props2.actions;
          actions.toggleFullscreen(player2);
        }
        // Fired when the user agent
        // begins looking for media data
      }, {
        key: "handleLoadStart",
        value: function handleLoadStart() {
          var _this$props3 = this.props, actions = _this$props3.actions, onLoadStart = _this$props3.onLoadStart;
          actions.handleLoadStart(this.getProperties());
          if (onLoadStart) {
            onLoadStart.apply(void 0, arguments);
          }
        }
        // A handler for events that
        // signal that waiting has ended
      }, {
        key: "handleCanPlay",
        value: function handleCanPlay() {
          var _this$props4 = this.props, actions = _this$props4.actions, onCanPlay = _this$props4.onCanPlay;
          actions.handleCanPlay(this.getProperties());
          if (onCanPlay) {
            onCanPlay.apply(void 0, arguments);
          }
        }
        // A handler for events that
        // signal that waiting has ended
      }, {
        key: "handleCanPlayThrough",
        value: function handleCanPlayThrough() {
          var _this$props5 = this.props, actions = _this$props5.actions, onCanPlayThrough = _this$props5.onCanPlayThrough;
          actions.handleCanPlayThrough(this.getProperties());
          if (onCanPlayThrough) {
            onCanPlayThrough.apply(void 0, arguments);
          }
        }
        // A handler for events that
        // signal that waiting has ended
      }, {
        key: "handlePlaying",
        value: function handlePlaying() {
          var _this$props6 = this.props, actions = _this$props6.actions, onPlaying = _this$props6.onPlaying;
          actions.handlePlaying(this.getProperties());
          if (onPlaying) {
            onPlaying.apply(void 0, arguments);
          }
        }
        // Fired whenever the media has been started
      }, {
        key: "handlePlay",
        value: function handlePlay() {
          var _this$props7 = this.props, actions = _this$props7.actions, onPlay = _this$props7.onPlay;
          actions.handlePlay(this.getProperties());
          if (onPlay) {
            onPlay.apply(void 0, arguments);
          }
        }
        // Fired whenever the media has been paused
      }, {
        key: "handlePause",
        value: function handlePause() {
          var _this$props8 = this.props, actions = _this$props8.actions, onPause = _this$props8.onPause;
          actions.handlePause(this.getProperties());
          if (onPause) {
            onPause.apply(void 0, arguments);
          }
        }
        // Fired when the duration of
        // the media resource is first known or changed
      }, {
        key: "handleDurationChange",
        value: function handleDurationChange() {
          var _this$props9 = this.props, actions = _this$props9.actions, onDurationChange = _this$props9.onDurationChange;
          actions.handleDurationChange(this.getProperties());
          if (onDurationChange) {
            onDurationChange.apply(void 0, arguments);
          }
        }
        // Fired while the user agent
        // is downloading media data
      }, {
        key: "handleProgress",
        value: function handleProgress() {
          var _this$props10 = this.props, actions = _this$props10.actions, onProgress = _this$props10.onProgress;
          if (this.video) {
            actions.handleProgressChange(this.getProperties());
          }
          if (onProgress) {
            onProgress.apply(void 0, arguments);
          }
        }
        // Fired when the end of the media resource
        // is reached (currentTime == duration)
      }, {
        key: "handleEnded",
        value: function handleEnded() {
          var _this$props11 = this.props, loop = _this$props11.loop, player2 = _this$props11.player, actions = _this$props11.actions, onEnded = _this$props11.onEnded;
          if (loop) {
            this.seek(0);
            this.play();
          } else if (!player2.paused) {
            this.pause();
          }
          actions.handleEnd(this.getProperties());
          if (onEnded) {
            onEnded.apply(void 0, arguments);
          }
        }
        // Fired whenever the media begins waiting
      }, {
        key: "handleWaiting",
        value: function handleWaiting() {
          var _this$props12 = this.props, actions = _this$props12.actions, onWaiting = _this$props12.onWaiting;
          actions.handleWaiting(this.getProperties());
          if (onWaiting) {
            onWaiting.apply(void 0, arguments);
          }
        }
        // Fired whenever the player
        // is jumping to a new time
      }, {
        key: "handleSeeking",
        value: function handleSeeking() {
          var _this$props13 = this.props, actions = _this$props13.actions, onSeeking = _this$props13.onSeeking;
          actions.handleSeeking(this.getProperties());
          if (onSeeking) {
            onSeeking.apply(void 0, arguments);
          }
        }
        // Fired when the player has
        // finished jumping to a new time
      }, {
        key: "handleSeeked",
        value: function handleSeeked() {
          var _this$props14 = this.props, actions = _this$props14.actions, onSeeked = _this$props14.onSeeked;
          actions.handleSeeked(this.getProperties());
          if (onSeeked) {
            onSeeked.apply(void 0, arguments);
          }
        }
        // Handle Fullscreen Change
      }, {
        key: "handleFullscreenChange",
        value: function handleFullscreenChange() {
        }
        // Fires when the browser is
        // intentionally not getting media data
      }, {
        key: "handleSuspend",
        value: function handleSuspend() {
          var _this$props15 = this.props, actions = _this$props15.actions, onSuspend = _this$props15.onSuspend;
          actions.handleSuspend(this.getProperties());
          if (onSuspend) {
            onSuspend.apply(void 0, arguments);
          }
        }
        // Fires when the loading of an audio/video is aborted
      }, {
        key: "handleAbort",
        value: function handleAbort() {
          var _this$props16 = this.props, actions = _this$props16.actions, onAbort = _this$props16.onAbort;
          actions.handleAbort(this.getProperties());
          if (onAbort) {
            onAbort.apply(void 0, arguments);
          }
        }
        // Fires when the current playlist is empty
      }, {
        key: "handleEmptied",
        value: function handleEmptied() {
          var _this$props17 = this.props, actions = _this$props17.actions, onEmptied = _this$props17.onEmptied;
          actions.handleEmptied(this.getProperties());
          if (onEmptied) {
            onEmptied.apply(void 0, arguments);
          }
        }
        // Fires when the browser is trying to
        // get media data, but data is not available
      }, {
        key: "handleStalled",
        value: function handleStalled() {
          var _this$props18 = this.props, actions = _this$props18.actions, onStalled = _this$props18.onStalled;
          actions.handleStalled(this.getProperties());
          if (onStalled) {
            onStalled.apply(void 0, arguments);
          }
        }
        // Fires when the browser has loaded
        // meta data for the audio/video
      }, {
        key: "handleLoadedMetaData",
        value: function handleLoadedMetaData() {
          var _this$props19 = this.props, actions = _this$props19.actions, onLoadedMetadata = _this$props19.onLoadedMetadata, startTime = _this$props19.startTime;
          if (startTime && startTime > 0) {
            this.video.currentTime = startTime;
          }
          actions.handleLoadedMetaData(this.getProperties());
          if (onLoadedMetadata) {
            onLoadedMetadata.apply(void 0, arguments);
          }
        }
        // Fires when the browser has loaded
        // the current frame of the audio/video
      }, {
        key: "handleLoadedData",
        value: function handleLoadedData() {
          var _this$props20 = this.props, actions = _this$props20.actions, onLoadedData = _this$props20.onLoadedData;
          actions.handleLoadedData(this.getProperties());
          if (onLoadedData) {
            onLoadedData.apply(void 0, arguments);
          }
        }
        // Fires when the current
        // playback position has changed
      }, {
        key: "handleTimeUpdate",
        value: function handleTimeUpdate() {
          var _this$props21 = this.props, actions = _this$props21.actions, onTimeUpdate = _this$props21.onTimeUpdate;
          actions.handleTimeUpdate(this.getProperties());
          if (onTimeUpdate) {
            onTimeUpdate.apply(void 0, arguments);
          }
        }
        /**
         * Fires when the playing speed of the audio/video is changed
         */
      }, {
        key: "handleRateChange",
        value: function handleRateChange() {
          var _this$props22 = this.props, actions = _this$props22.actions, onRateChange = _this$props22.onRateChange;
          actions.handleRateChange(this.getProperties());
          if (onRateChange) {
            onRateChange.apply(void 0, arguments);
          }
        }
        // Fires when the volume has been changed
      }, {
        key: "handleVolumeChange",
        value: function handleVolumeChange() {
          var _this$props23 = this.props, actions = _this$props23.actions, onVolumeChange = _this$props23.onVolumeChange;
          actions.handleVolumeChange(this.getProperties());
          if (onVolumeChange) {
            onVolumeChange.apply(void 0, arguments);
          }
        }
        // Fires when an error occurred
        // during the loading of an audio/video
      }, {
        key: "handleError",
        value: function handleError() {
          var _this$props24 = this.props, actions = _this$props24.actions, onError = _this$props24.onError;
          actions.handleError(this.getProperties());
          if (onError) {
            onError.apply(void 0, arguments);
          }
        }
      }, {
        key: "handleResize",
        value: function handleResize() {
          var _this$props25 = this.props, actions = _this$props25.actions, onResize = _this$props25.onResize;
          actions.handleResize(this.getProperties());
          if (onResize) {
            onResize.apply(void 0, arguments);
          }
        }
      }, {
        key: "handleKeypress",
        value: function handleKeypress() {
        }
      }, {
        key: "renderChildren",
        value: function renderChildren() {
          var _this3 = this;
          var props = (0, _objectSpread22["default"])({}, this.props, {
            video: this.video
          });
          if (!this.video) {
            return null;
          }
          return _react2["default"].Children.toArray(this.props.children).filter(_utils.isVideoChild).map(function(c) {
            var cprops;
            if (typeof c.type === "string") {
              if (c.type === "source") {
                cprops = (0, _objectSpread22["default"])({}, c.props);
                var preOnError = cprops.onError;
                cprops.onError = function() {
                  if (preOnError) {
                    preOnError.apply(void 0, arguments);
                  }
                  _this3.handleError.apply(_this3, arguments);
                };
              }
            } else {
              cprops = props;
            }
            return _react2["default"].cloneElement(c, cprops);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;
          var _this$props26 = this.props, loop = _this$props26.loop, poster = _this$props26.poster, preload = _this$props26.preload, src2 = _this$props26.src, autoPlay = _this$props26.autoPlay, playsInline = _this$props26.playsInline, muted = _this$props26.muted, crossOrigin = _this$props26.crossOrigin, videoId = _this$props26.videoId;
          return _react2["default"].createElement("video", {
            className: (0, _classnames2["default"])("video-react-video", this.props.className),
            id: videoId,
            crossOrigin,
            ref: function ref(c) {
              _this4.video = c;
            },
            muted,
            preload,
            loop,
            playsInline,
            autoPlay,
            poster,
            src: src2,
            onLoadStart: this.handleLoadStart,
            onWaiting: this.handleWaiting,
            onCanPlay: this.handleCanPlay,
            onCanPlayThrough: this.handleCanPlayThrough,
            onPlaying: this.handlePlaying,
            onEnded: this.handleEnded,
            onSeeking: this.handleSeeking,
            onSeeked: this.handleSeeked,
            onPlay: this.handlePlay,
            onPause: this.handlePause,
            onProgress: this.handleProgress,
            onDurationChange: this.handleDurationChange,
            onError: this.handleError,
            onSuspend: this.handleSuspend,
            onAbort: this.handleAbort,
            onEmptied: this.handleEmptied,
            onStalled: this.handleStalled,
            onLoadedMetadata: this.handleLoadedMetaData,
            onLoadedData: this.handleLoadedData,
            onTimeUpdate: this.handleTimeUpdate,
            onRateChange: this.handleRateChange,
            onVolumeChange: this.handleVolumeChange,
            tabIndex: "-1"
          }, this.renderChildren());
        }
      }, {
        key: "playbackRate",
        get: function get() {
          return this.video.playbackRate;
        },
        set: function set(rate) {
          this.video.playbackRate = rate;
        }
      }, {
        key: "muted",
        get: function get() {
          return this.video.muted;
        },
        set: function set(val) {
          this.video.muted = val;
        }
      }, {
        key: "volume",
        get: function get() {
          return this.video.volume;
        },
        set: function set(val) {
          if (val > 1) {
            val = 1;
          }
          if (val < 0) {
            val = 0;
          }
          this.video.volume = val;
        }
        // video width
      }, {
        key: "videoWidth",
        get: function get() {
          return this.video.videoWidth;
        }
        // video height
      }, {
        key: "videoHeight",
        get: function get() {
          return this.video.videoHeight;
        }
      }]);
      return Video3;
    }(_react2.Component);
    exports["default"] = Video2;
    Video2.propTypes = propTypes;
    Video2.displayName = "Video";
  })(Video);
  return Video;
}
var Bezel = {};
var hasRequiredBezel;
function requireBezel() {
  if (hasRequiredBezel) return Bezel;
  hasRequiredBezel = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      manager: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    var Bezel2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(Bezel3, _Component);
      function Bezel3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, Bezel3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Bezel3).call(this, props, context));
        _this.timer = null;
        props.manager.subscribeToOperationStateChange(_this.handleStateChange.bind((0, _assertThisInitialized2["default"])(_this)));
        _this.state = {
          hidden: true,
          operation: {}
        };
        return _this;
      }
      (0, _createClass2["default"])(Bezel3, [{
        key: "handleStateChange",
        value: function handleStateChange(state, prevState) {
          var _this2 = this;
          if (state.count !== prevState.count && state.operation.source === "shortcut") {
            if (this.timer) {
              clearTimeout(this.timer);
              this.timer = null;
            }
            this.setState({
              hidden: false,
              count: state.count,
              operation: state.operation
            });
            this.timer = setTimeout(function() {
              _this2.setState({
                hidden: true
              });
              _this2.timer = null;
            }, 500);
          }
        }
      }, {
        key: "render",
        value: function render() {
          if (this.state.operation.source !== "shortcut") {
            return null;
          }
          var style = this.state.hidden ? {
            display: "none"
          } : null;
          return _react2["default"].createElement("div", {
            className: (0, _classnames2["default"])({
              "video-react-bezel": true,
              "video-react-bezel-animation": this.state.count % 2 === 0,
              "video-react-bezel-animation-alt": this.state.count % 2 === 1
            }, this.props.className),
            style,
            role: "status",
            "aria-label": this.state.operation.action
          }, _react2["default"].createElement("div", {
            className: (0, _classnames2["default"])("video-react-bezel-icon", "video-react-bezel-icon-".concat(this.state.operation.action))
          }));
        }
      }]);
      return Bezel3;
    }(_react2.Component);
    exports["default"] = Bezel2;
    Bezel2.propTypes = propTypes;
    Bezel2.displayName = "Bezel";
  })(Bezel);
  return Bezel;
}
var Shortcut = {};
var dom = {};
var hasRequiredDom;
function requireDom() {
  if (hasRequiredDom) return dom;
  hasRequiredDom = 1;
  Object.defineProperty(dom, "__esModule", {
    value: true
  });
  dom.findElPosition = findElPosition;
  dom.getPointerPosition = getPointerPosition;
  dom.blurNode = blurNode;
  dom.focusNode = focusNode;
  dom.hasClass = hasClass;
  function findElPosition(el) {
    var box;
    if (el.getBoundingClientRect && el.parentNode) {
      box = el.getBoundingClientRect();
    }
    if (!box) {
      return {
        left: 0,
        top: 0
      };
    }
    var _document = document, body = _document.body, docEl = _document.documentElement;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var scrollLeft = window.pageXOffset || body.scrollLeft;
    var left = box.left + scrollLeft - clientLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var scrollTop = window.pageYOffset || body.scrollTop;
    var top = box.top + scrollTop - clientTop;
    return {
      left: Math.round(left),
      top: Math.round(top)
    };
  }
  function getPointerPosition(el, event) {
    var position = {};
    var box = findElPosition(el);
    var boxW = el.offsetWidth;
    var boxH = el.offsetHeight;
    var boxY = box.top;
    var boxX = box.left;
    var evtPageY = event.pageY;
    var evtPageX = event.pageX;
    if (event.changedTouches) {
      evtPageX = event.changedTouches[0].pageX;
      evtPageY = event.changedTouches[0].pageY;
    }
    position.y = Math.max(0, Math.min(1, (boxY - evtPageY + boxH) / boxH));
    position.x = Math.max(0, Math.min(1, (evtPageX - boxX) / boxW));
    return position;
  }
  function blurNode(reactNode) {
    if (reactNode && reactNode.blur) {
      reactNode.blur();
    }
  }
  function focusNode(reactNode) {
    if (reactNode && reactNode.focus) {
      reactNode.focus();
    }
  }
  function hasClass(elm, cls) {
    var classes = elm.className.split(" ");
    for (var i = 0; i < classes.length; i++) {
      if (classes[i].toLowerCase() === cls.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
  return dom;
}
var hasRequiredShortcut;
function requireShortcut() {
  if (hasRequiredShortcut) return Shortcut;
  hasRequiredShortcut = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _defineProperty2 = _interopRequireDefault2(require$$3);
    var _toConsumableArray2 = _interopRequireDefault2(requireToConsumableArray());
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _react2 = reactExports;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _dom = requireDom();
    var propTypes = {
      clickable: _propTypes["default"].bool,
      dblclickable: _propTypes["default"].bool,
      manager: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      shortcuts: _propTypes["default"].array
    };
    var defaultProps2 = {
      clickable: true,
      dblclickable: true
    };
    var Shortcut2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(Shortcut3, _Component);
      function Shortcut3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, Shortcut3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Shortcut3).call(this, props, context));
        _this.defaultShortcuts = [{
          keyCode: 32,
          // spacebar
          handle: _this.togglePlay
        }, {
          keyCode: 75,
          // k
          handle: _this.togglePlay
        }, {
          keyCode: 70,
          // f
          handle: _this.toggleFullscreen
        }, {
          keyCode: 37,
          // Left arrow
          handle: function handle(player2, actions) {
            if (!player2.hasStarted) {
              return;
            }
            actions.replay(5, {
              action: "replay-5",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 74,
          // j
          handle: function handle(player2, actions) {
            if (!player2.hasStarted) {
              return;
            }
            actions.replay(10, {
              action: "replay-10",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 39,
          // Right arrow
          handle: function handle(player2, actions) {
            if (!player2.hasStarted) {
              return;
            }
            actions.forward(5, {
              action: "forward-5",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 76,
          // l
          handle: function handle(player2, actions) {
            if (!player2.hasStarted) {
              return;
            }
            actions.forward(10, {
              action: "forward-10",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 36,
          // Home
          handle: function handle(player2, actions) {
            if (!player2.hasStarted) {
              return;
            }
            actions.seek(0);
          }
        }, {
          keyCode: 35,
          // End
          handle: function handle(player2, actions) {
            if (!player2.hasStarted) {
              return;
            }
            actions.seek(player2.duration);
          }
        }, {
          keyCode: 38,
          // Up arrow
          handle: function handle(player2, actions) {
            var v = player2.volume + 0.05;
            if (v > 1) {
              v = 1;
            }
            actions.changeVolume(v, {
              action: "volume-up",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 40,
          // Down arrow
          handle: function handle(player2, actions) {
            var v = player2.volume - 0.05;
            if (v < 0) {
              v = 0;
            }
            var action = v > 0 ? "volume-down" : "volume-off";
            actions.changeVolume(v, {
              action,
              source: "shortcut"
            });
          }
        }, {
          keyCode: 190,
          // Shift + >
          shift: true,
          handle: function handle(player2, actions) {
            var playbackRate = player2.playbackRate;
            if (playbackRate >= 1.5) {
              playbackRate = 2;
            } else if (playbackRate >= 1.25) {
              playbackRate = 1.5;
            } else if (playbackRate >= 1) {
              playbackRate = 1.25;
            } else if (playbackRate >= 0.5) {
              playbackRate = 1;
            } else if (playbackRate >= 0.25) {
              playbackRate = 0.5;
            } else if (playbackRate >= 0) {
              playbackRate = 0.25;
            }
            actions.changeRate(playbackRate, {
              action: "fast-forward",
              source: "shortcut"
            });
          }
        }, {
          keyCode: 188,
          // Shift + <
          shift: true,
          handle: function handle(player2, actions) {
            var playbackRate = player2.playbackRate;
            if (playbackRate <= 0.5) {
              playbackRate = 0.25;
            } else if (playbackRate <= 1) {
              playbackRate = 0.5;
            } else if (playbackRate <= 1.25) {
              playbackRate = 1;
            } else if (playbackRate <= 1.5) {
              playbackRate = 1.25;
            } else if (playbackRate <= 2) {
              playbackRate = 1.5;
            }
            actions.changeRate(playbackRate, {
              action: "fast-rewind",
              source: "shortcut"
            });
          }
        }];
        _this.shortcuts = (0, _toConsumableArray2["default"])(_this.defaultShortcuts);
        _this.mergeShortcuts = _this.mergeShortcuts.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleDoubleClick = _this.handleDoubleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(Shortcut3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.mergeShortcuts();
          document.addEventListener("keydown", this.handleKeyPress);
          document.addEventListener("click", this.handleClick);
          document.addEventListener("dblclick", this.handleDoubleClick);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.shortcuts !== this.props.shortcuts) {
            this.mergeShortcuts();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.removeEventListener("keydown", this.handleKeyPress);
          document.removeEventListener("click", this.handleClick);
          document.removeEventListener("dblclick", this.handleDoubleClick);
        }
        // merge the shortcuts from props
      }, {
        key: "mergeShortcuts",
        value: function mergeShortcuts() {
          var getShortcutKey = function getShortcutKey2(_ref) {
            var _ref$keyCode = _ref.keyCode, keyCode = _ref$keyCode === void 0 ? 0 : _ref$keyCode, _ref$ctrl = _ref.ctrl, ctrl = _ref$ctrl === void 0 ? false : _ref$ctrl, _ref$shift = _ref.shift, shift = _ref$shift === void 0 ? false : _ref$shift, _ref$alt = _ref.alt, alt = _ref$alt === void 0 ? false : _ref$alt;
            return "".concat(keyCode, ":").concat(ctrl, ":").concat(shift, ":").concat(alt);
          };
          var defaultShortcuts = this.defaultShortcuts.reduce(function(shortcuts, shortcut) {
            return Object.assign(shortcuts, (0, _defineProperty2["default"])({}, getShortcutKey(shortcut), shortcut));
          }, {});
          var mergedShortcuts = (this.props.shortcuts || []).reduce(function(shortcuts, shortcut) {
            var keyCode = shortcut.keyCode, handle = shortcut.handle;
            if (keyCode && typeof handle === "function") {
              return Object.assign(shortcuts, (0, _defineProperty2["default"])({}, getShortcutKey(shortcut), shortcut));
            }
            return shortcuts;
          }, defaultShortcuts);
          var gradeShortcut = function gradeShortcut2(s) {
            var score = 0;
            var ps = ["ctrl", "shift", "alt"];
            ps.forEach(function(key) {
              if (s[key]) {
                score++;
              }
            });
            return score;
          };
          this.shortcuts = Object.keys(mergedShortcuts).map(function(key) {
            return mergedShortcuts[key];
          }).sort(function(a, b) {
            return gradeShortcut(b) - gradeShortcut(a);
          });
        }
      }, {
        key: "togglePlay",
        value: function togglePlay(player2, actions) {
          if (player2.paused) {
            actions.play({
              action: "play",
              source: "shortcut"
            });
          } else {
            actions.pause({
              action: "pause",
              source: "shortcut"
            });
          }
        }
      }, {
        key: "toggleFullscreen",
        value: function toggleFullscreen(player2, actions) {
          actions.toggleFullscreen(player2);
        }
      }, {
        key: "handleKeyPress",
        value: function handleKeyPress(e) {
          var _this$props = this.props, player2 = _this$props.player, actions = _this$props.actions;
          if (!player2.isActive) {
            return;
          }
          if (document.activeElement && ((0, _dom.hasClass)(document.activeElement, "video-react-control") || (0, _dom.hasClass)(document.activeElement, "video-react-menu-button-active") || (0, _dom.hasClass)(document.activeElement, "video-react-big-play-button"))) {
            return;
          }
          var keyCode = e.keyCode || e.which;
          var ctrl = e.ctrlKey || e.metaKey;
          var shift = e.shiftKey;
          var alt = e.altKey;
          var shortcut = this.shortcuts.filter(function(s) {
            if (!s.keyCode || s.keyCode - keyCode !== 0) {
              return false;
            }
            if (s.ctrl !== void 0 && s.ctrl !== ctrl || s.shift !== void 0 && s.shift !== shift || s.alt !== void 0 && s.alt !== alt) {
              return false;
            }
            return true;
          })[0];
          if (shortcut) {
            shortcut.handle(player2, actions);
            e.preventDefault();
          }
        }
        // only if player is active and player is ready
      }, {
        key: "canBeClicked",
        value: function canBeClicked(player2, e) {
          if (!player2.isActive || e.target.nodeName !== "VIDEO" || player2.readyState !== 4) {
            return false;
          }
          return true;
        }
      }, {
        key: "handleClick",
        value: function handleClick(e) {
          var _this$props2 = this.props, player2 = _this$props2.player, actions = _this$props2.actions, clickable = _this$props2.clickable;
          if (!this.canBeClicked(player2, e) || !clickable) {
            return;
          }
          this.togglePlay(player2, actions);
        }
      }, {
        key: "handleDoubleClick",
        value: function handleDoubleClick(e) {
          var _this$props3 = this.props, player2 = _this$props3.player, actions = _this$props3.actions, dblclickable = _this$props3.dblclickable;
          if (!this.canBeClicked(player2, e) || !dblclickable) {
            return;
          }
          this.toggleFullscreen(player2, actions);
        }
        // this component dose not render anything
        // it's just for the key down event
      }, {
        key: "render",
        value: function render() {
          return null;
        }
      }]);
      return Shortcut3;
    }(_react2.Component);
    exports["default"] = Shortcut2;
    Shortcut2.propTypes = propTypes;
    Shortcut2.defaultProps = defaultProps2;
    Shortcut2.displayName = "Shortcut";
  })(Shortcut);
  return Shortcut;
}
var ControlBar = {};
var ProgressControl = {};
var SeekBar = {};
var Slider = {};
var hasRequiredSlider;
function requireSlider() {
  if (hasRequiredSlider) return Slider;
  hasRequiredSlider = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var Dom = _interopRequireWildcard(requireDom());
    var propTypes = {
      className: _propTypes["default"].string,
      onMouseDown: _propTypes["default"].func,
      onMouseMove: _propTypes["default"].func,
      stepForward: _propTypes["default"].func,
      stepBack: _propTypes["default"].func,
      sliderActive: _propTypes["default"].func,
      sliderInactive: _propTypes["default"].func,
      onMouseUp: _propTypes["default"].func,
      onFocus: _propTypes["default"].func,
      onBlur: _propTypes["default"].func,
      onClick: _propTypes["default"].func,
      getPercent: _propTypes["default"].func,
      vertical: _propTypes["default"].bool,
      children: _propTypes["default"].node,
      label: _propTypes["default"].string,
      valuenow: _propTypes["default"].string,
      valuetext: _propTypes["default"].string
    };
    var Slider2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(Slider3, _Component);
      function Slider3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, Slider3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Slider3).call(this, props, context));
        _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseUp = _this.handleMouseUp.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
        _this.calculateDistance = _this.calculateDistance.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getProgress = _this.getProgress.bind((0, _assertThisInitialized2["default"])(_this));
        _this.renderChildren = _this.renderChildren.bind((0, _assertThisInitialized2["default"])(_this));
        _this.state = {
          active: false
        };
        return _this;
      }
      (0, _createClass2["default"])(Slider3, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          document.removeEventListener("mousemove", this.handleMouseMove, true);
          document.removeEventListener("mouseup", this.handleMouseUp, true);
          document.removeEventListener("touchmove", this.handleMouseMove, true);
          document.removeEventListener("touchend", this.handleMouseUp, true);
          document.removeEventListener("keydown", this.handleKeyPress, true);
        }
      }, {
        key: "getProgress",
        value: function getProgress() {
          var getPercent = this.props.getPercent;
          if (!getPercent) {
            return 0;
          }
          var progress = getPercent();
          if (typeof progress !== "number" || progress < 0 || progress === Infinity) {
            progress = 0;
          }
          return progress;
        }
      }, {
        key: "handleMouseDown",
        value: function handleMouseDown(event) {
          var onMouseDown = this.props.onMouseDown;
          document.addEventListener("mousemove", this.handleMouseMove, true);
          document.addEventListener("mouseup", this.handleMouseUp, true);
          document.addEventListener("touchmove", this.handleMouseMove, true);
          document.addEventListener("touchend", this.handleMouseUp, true);
          this.setState({
            active: true
          });
          if (this.props.sliderActive) {
            this.props.sliderActive(event);
          }
          this.handleMouseMove(event);
          if (onMouseDown) {
            onMouseDown(event);
          }
        }
      }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
          var onMouseMove = this.props.onMouseMove;
          if (onMouseMove) {
            onMouseMove(event);
          }
        }
      }, {
        key: "handleMouseUp",
        value: function handleMouseUp(event) {
          event.preventDefault();
          var onMouseUp = this.props.onMouseUp;
          document.removeEventListener("mousemove", this.handleMouseMove, true);
          document.removeEventListener("mouseup", this.handleMouseUp, true);
          document.removeEventListener("touchmove", this.handleMouseMove, true);
          document.removeEventListener("touchend", this.handleMouseUp, true);
          this.setState({
            active: false
          });
          if (this.props.sliderInactive) {
            this.props.sliderInactive(event);
          }
          if (onMouseUp) {
            onMouseUp(event);
          }
        }
      }, {
        key: "handleFocus",
        value: function handleFocus(e) {
          document.addEventListener("keydown", this.handleKeyPress, true);
          if (this.props.onFocus) {
            this.props.onFocus(e);
          }
        }
      }, {
        key: "handleBlur",
        value: function handleBlur(e) {
          document.removeEventListener("keydown", this.handleKeyPress, true);
          if (this.props.onBlur) {
            this.props.onBlur(e);
          }
        }
      }, {
        key: "handleClick",
        value: function handleClick(event) {
          event.preventDefault();
          if (this.props.onClick) {
            this.props.onClick(event);
          }
        }
      }, {
        key: "handleKeyPress",
        value: function handleKeyPress(event) {
          if (event.which === 37 || event.which === 40) {
            event.preventDefault();
            event.stopPropagation();
            this.stepBack();
          } else if (event.which === 38 || event.which === 39) {
            event.preventDefault();
            event.stopPropagation();
            this.stepForward();
          }
        }
      }, {
        key: "stepForward",
        value: function stepForward() {
          if (this.props.stepForward) {
            this.props.stepForward();
          }
        }
      }, {
        key: "stepBack",
        value: function stepBack() {
          if (this.props.stepBack) {
            this.props.stepBack();
          }
        }
      }, {
        key: "calculateDistance",
        value: function calculateDistance(event) {
          var node = this.slider;
          var position = Dom.getPointerPosition(node, event);
          if (this.props.vertical) {
            return position.y;
          }
          return position.x;
        }
      }, {
        key: "renderChildren",
        value: function renderChildren() {
          var progress = this.getProgress();
          var percentage = "".concat((progress * 100).toFixed(2), "%");
          return _react2["default"].Children.map(this.props.children, function(child) {
            return _react2["default"].cloneElement(child, {
              progress,
              percentage
            });
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props, vertical = _this$props.vertical, label = _this$props.label, valuenow = _this$props.valuenow, valuetext = _this$props.valuetext;
          return _react2["default"].createElement("div", {
            className: (0, _classnames2["default"])(this.props.className, {
              "video-react-slider-vertical": vertical,
              "video-react-slider-horizontal": !vertical,
              "video-react-sliding": this.state.active
            }, "video-react-slider"),
            ref: function ref(c) {
              _this2.slider = c;
            },
            tabIndex: "0",
            role: "slider",
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleMouseDown,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onClick: this.handleClick,
            "aria-label": label || "",
            "aria-valuenow": valuenow || "",
            "aria-valuetext": valuetext || "",
            "aria-valuemin": 0,
            "aria-valuemax": 100
          }, this.renderChildren());
        }
      }]);
      return Slider3;
    }(_react2.Component);
    exports["default"] = Slider2;
    Slider2.propTypes = propTypes;
    Slider2.displayName = "Slider";
  })(Slider);
  return Slider;
}
var PlayProgressBar = {};
var hasRequiredPlayProgressBar;
function requirePlayProgressBar() {
  if (hasRequiredPlayProgressBar) return PlayProgressBar;
  hasRequiredPlayProgressBar = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = PlayProgressBar2;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _utils = requireUtils();
    var propTypes = {
      currentTime: _propTypes["default"].number,
      duration: _propTypes["default"].number,
      percentage: _propTypes["default"].string,
      className: _propTypes["default"].string
    };
    function PlayProgressBar2(_ref) {
      var currentTime = _ref.currentTime, duration = _ref.duration, percentage = _ref.percentage, className = _ref.className;
      return _react2["default"].createElement("div", {
        "data-current-time": (0, _utils.formatTime)(currentTime, duration),
        className: (0, _classnames2["default"])("video-react-play-progress video-react-slider-bar", className),
        style: {
          width: percentage
        }
      }, _react2["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Progress: ".concat(percentage)));
    }
    PlayProgressBar2.propTypes = propTypes;
    PlayProgressBar2.displayName = "PlayProgressBar";
  })(PlayProgressBar);
  return PlayProgressBar;
}
var LoadProgressBar = {};
var hasRequiredLoadProgressBar;
function requireLoadProgressBar() {
  if (hasRequiredLoadProgressBar) return LoadProgressBar;
  hasRequiredLoadProgressBar = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = LoadProgressBar2;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      duration: _propTypes["default"].number,
      buffered: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function LoadProgressBar2(_ref) {
      var buffered = _ref.buffered, duration = _ref.duration, className = _ref.className;
      if (!buffered || !buffered.length) {
        return null;
      }
      var bufferedEnd = buffered.end(buffered.length - 1);
      var style = {};
      if (bufferedEnd > duration) {
        bufferedEnd = duration;
      }
      function percentify(time, end2) {
        var percent = time / end2 || 0;
        return "".concat((percent >= 1 ? 1 : percent) * 100, "%");
      }
      style.width = percentify(bufferedEnd, duration);
      var parts = [];
      for (var i = 0; i < buffered.length; i++) {
        var start = buffered.start(i);
        var end = buffered.end(i);
        var part = _react2["default"].createElement("div", {
          style: {
            left: percentify(start, bufferedEnd),
            width: percentify(end - start, bufferedEnd)
          },
          key: "part-".concat(i)
        });
        parts.push(part);
      }
      if (parts.length === 0) {
        parts = null;
      }
      return _react2["default"].createElement("div", {
        style,
        className: (0, _classnames2["default"])("video-react-load-progress", className)
      }, _react2["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Loaded: 0%"), parts);
    }
    LoadProgressBar2.propTypes = propTypes;
    LoadProgressBar2.displayName = "LoadProgressBar";
  })(LoadProgressBar);
  return LoadProgressBar;
}
var MouseTimeDisplay = {};
var hasRequiredMouseTimeDisplay;
function requireMouseTimeDisplay() {
  if (hasRequiredMouseTimeDisplay) return MouseTimeDisplay;
  hasRequiredMouseTimeDisplay = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _utils = requireUtils();
    function MouseTimeDisplay2(_ref) {
      var duration = _ref.duration, mouseTime = _ref.mouseTime, className = _ref.className, text = _ref.text;
      if (!mouseTime.time) {
        return null;
      }
      var time = text || (0, _utils.formatTime)(mouseTime.time, duration);
      return _react2["default"].createElement("div", {
        className: (0, _classnames2["default"])("video-react-mouse-display", className),
        style: {
          left: "".concat(mouseTime.position, "px")
        },
        "data-current-time": time
      });
    }
    MouseTimeDisplay2.propTypes = {
      duration: _propTypes["default"].number,
      mouseTime: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    MouseTimeDisplay2.displayName = "MouseTimeDisplay";
    var _default = MouseTimeDisplay2;
    exports["default"] = _default;
  })(MouseTimeDisplay);
  return MouseTimeDisplay;
}
var hasRequiredSeekBar;
function requireSeekBar() {
  if (hasRequiredSeekBar) return SeekBar;
  hasRequiredSeekBar = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _Slider = _interopRequireDefault2(requireSlider());
    var _PlayProgressBar = _interopRequireDefault2(requirePlayProgressBar());
    var _LoadProgressBar = _interopRequireDefault2(requireLoadProgressBar());
    var _MouseTimeDisplay = _interopRequireDefault2(requireMouseTimeDisplay());
    var _utils = requireUtils();
    var propTypes = {
      player: _propTypes["default"].object,
      mouseTime: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    var SeekBar2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(SeekBar3, _Component);
      function SeekBar3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, SeekBar3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SeekBar3).call(this, props, context));
        _this.getPercent = _this.getPercent.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getNewTime = _this.getNewTime.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseUp = _this.handleMouseUp.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(SeekBar3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
        }
        /**
         * Get percentage of video played
         *
         * @return {Number} Percentage played
         * @method getPercent
         */
      }, {
        key: "getPercent",
        value: function getPercent() {
          var _this$props$player = this.props.player, currentTime = _this$props$player.currentTime, seekingTime = _this$props$player.seekingTime, duration = _this$props$player.duration;
          var time = seekingTime || currentTime;
          var percent = time / duration;
          return percent >= 1 ? 1 : percent;
        }
      }, {
        key: "getNewTime",
        value: function getNewTime(event) {
          var duration = this.props.player.duration;
          var distance = this.slider.calculateDistance(event);
          var newTime = distance * duration;
          return newTime === duration ? newTime - 0.1 : newTime;
        }
      }, {
        key: "handleMouseDown",
        value: function handleMouseDown() {
        }
      }, {
        key: "handleMouseUp",
        value: function handleMouseUp(event) {
          var actions = this.props.actions;
          var newTime = this.getNewTime(event);
          actions.seek(newTime);
          actions.handleEndSeeking(newTime);
        }
      }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
          var actions = this.props.actions;
          var newTime = this.getNewTime(event);
          actions.handleSeekingTime(newTime);
        }
      }, {
        key: "stepForward",
        value: function stepForward() {
          var actions = this.props.actions;
          actions.forward(5);
        }
      }, {
        key: "stepBack",
        value: function stepBack() {
          var actions = this.props.actions;
          actions.replay(5);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props, _this$props$player2 = _this$props.player, currentTime = _this$props$player2.currentTime, seekingTime = _this$props$player2.seekingTime, duration = _this$props$player2.duration, buffered = _this$props$player2.buffered, mouseTime = _this$props.mouseTime;
          var time = seekingTime || currentTime;
          return _react2["default"].createElement(_Slider["default"], {
            ref: function ref(input) {
              _this2.slider = input;
            },
            label: "video progress bar",
            className: (0, _classnames2["default"])("video-react-progress-holder", this.props.className),
            valuenow: (this.getPercent() * 100).toFixed(2),
            valuetext: (0, _utils.formatTime)(time, duration),
            onMouseDown: this.handleMouseDown,
            onMouseMove: this.handleMouseMove,
            onMouseUp: this.handleMouseUp,
            getPercent: this.getPercent,
            stepForward: this.stepForward,
            stepBack: this.stepBack
          }, _react2["default"].createElement(_LoadProgressBar["default"], {
            buffered,
            currentTime: time,
            duration
          }), _react2["default"].createElement(_MouseTimeDisplay["default"], {
            duration,
            mouseTime
          }), _react2["default"].createElement(_PlayProgressBar["default"], {
            currentTime: time,
            duration
          }));
        }
      }]);
      return SeekBar3;
    }(_react2.Component);
    exports["default"] = SeekBar2;
    SeekBar2.propTypes = propTypes;
    SeekBar2.displayName = "SeekBar";
  })(SeekBar);
  return SeekBar;
}
var hasRequiredProgressControl;
function requireProgressControl() {
  if (hasRequiredProgressControl) return ProgressControl;
  hasRequiredProgressControl = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _extends2 = _interopRequireDefault2(require_extends());
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var Dom = _interopRequireWildcard(requireDom());
    var _SeekBar = _interopRequireDefault2(requireSeekBar());
    var propTypes = {
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    var ProgressControl2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(ProgressControl3, _Component);
      function ProgressControl3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, ProgressControl3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ProgressControl3).call(this, props, context));
        _this.state = {
          mouseTime: {
            time: null,
            position: 0
          }
        };
        _this.handleMouseMoveThrottle = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(ProgressControl3, [{
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
          if (!event.pageX) {
            return;
          }
          var duration = this.props.player.duration;
          var node = this.seekBar;
          var newTime = Dom.getPointerPosition(node, event).x * duration;
          var position = event.pageX - Dom.findElPosition(node).left;
          this.setState({
            mouseTime: {
              time: newTime,
              position
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var className = this.props.className;
          return _react2["default"].createElement("div", {
            onMouseMove: this.handleMouseMoveThrottle,
            className: (0, _classnames2["default"])("video-react-progress-control video-react-control", className)
          }, _react2["default"].createElement(_SeekBar["default"], (0, _extends2["default"])({
            mouseTime: this.state.mouseTime,
            ref: function ref(c) {
              _this2.seekBar = c;
            }
          }, this.props)));
        }
      }]);
      return ProgressControl3;
    }(_react2.Component);
    exports["default"] = ProgressControl2;
    ProgressControl2.propTypes = propTypes;
    ProgressControl2.displayName = "ProgressControl";
  })(ProgressControl);
  return ProgressControl;
}
var PlayToggle = {};
var hasRequiredPlayToggle;
function requirePlayToggle() {
  if (hasRequiredPlayToggle) return PlayToggle;
  hasRequiredPlayToggle = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    var PlayToggle2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(PlayToggle3, _Component);
      function PlayToggle3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, PlayToggle3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlayToggle3).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(PlayToggle3, [{
        key: "handleClick",
        value: function handleClick() {
          var _this$props = this.props, actions = _this$props.actions, player2 = _this$props.player;
          if (player2.paused) {
            actions.play();
          } else {
            actions.pause();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props2 = this.props, player2 = _this$props2.player, className = _this$props2.className;
          var controlText = player2.paused ? "Play" : "Pause";
          return _react2["default"].createElement("button", {
            ref: function ref(c) {
              _this2.button = c;
            },
            className: (0, _classnames2["default"])(className, {
              "video-react-play-control": true,
              "video-react-control": true,
              "video-react-button": true,
              "video-react-paused": player2.paused,
              "video-react-playing": !player2.paused
            }),
            type: "button",
            tabIndex: "0",
            onClick: this.handleClick
          }, _react2["default"].createElement("span", {
            className: "video-react-control-text"
          }, controlText));
        }
      }]);
      return PlayToggle3;
    }(_react2.Component);
    exports["default"] = PlayToggle2;
    PlayToggle2.propTypes = propTypes;
    PlayToggle2.displayName = "PlayToggle";
  })(PlayToggle);
  return PlayToggle;
}
var ForwardControl = {};
var ForwardReplayControl = {};
var hasRequiredForwardReplayControl;
function requireForwardReplayControl() {
  if (hasRequiredForwardReplayControl) return ForwardReplayControl;
  hasRequiredForwardReplayControl = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var propTypes = {
      actions: _propTypes["default"].object,
      className: _propTypes["default"].string,
      seconds: _propTypes["default"].oneOf([5, 10, 30])
    };
    var defaultProps2 = {
      seconds: 10
    };
    var _default = function _default2(mode) {
      var ForwardReplayControl2 = /* @__PURE__ */ function(_Component) {
        (0, _inherits2["default"])(ForwardReplayControl3, _Component);
        function ForwardReplayControl3(props, context) {
          var _this;
          (0, _classCallCheck2["default"])(this, ForwardReplayControl3);
          _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ForwardReplayControl3).call(this, props, context));
          _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
          return _this;
        }
        (0, _createClass2["default"])(ForwardReplayControl3, [{
          key: "handleClick",
          value: function handleClick() {
            var _this$props = this.props, actions = _this$props.actions, seconds = _this$props.seconds;
            if (mode === "forward") {
              actions.forward(seconds);
            } else {
              actions.replay(seconds);
            }
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;
            var _this$props2 = this.props, seconds = _this$props2.seconds, className = _this$props2.className;
            var classNames = ["video-react-control", "video-react-button", "video-react-icon"];
            classNames.push("video-react-icon-".concat(mode, "-").concat(seconds), "video-react-".concat(mode, "-control"));
            if (className) {
              classNames.push(className);
            }
            return _react2["default"].createElement("button", {
              ref: function ref(c) {
                _this2.button = c;
              },
              className: classNames.join(" "),
              type: "button",
              onClick: this.handleClick
            }, _react2["default"].createElement("span", {
              className: "video-react-control-text"
            }, "".concat(mode, " ").concat(seconds, " seconds")));
          }
        }]);
        return ForwardReplayControl3;
      }(_react2.Component);
      ForwardReplayControl2.propTypes = propTypes;
      ForwardReplayControl2.defaultProps = defaultProps2;
      return ForwardReplayControl2;
    };
    exports["default"] = _default;
  })(ForwardReplayControl);
  return ForwardReplayControl;
}
var hasRequiredForwardControl;
function requireForwardControl() {
  if (hasRequiredForwardControl) return ForwardControl;
  hasRequiredForwardControl = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _ForwardReplayControl = _interopRequireDefault2(requireForwardReplayControl());
    var ForwardControl2 = (0, _ForwardReplayControl["default"])("forward");
    ForwardControl2.displayName = "ForwardControl";
    var _default = ForwardControl2;
    exports["default"] = _default;
  })(ForwardControl);
  return ForwardControl;
}
var ReplayControl = {};
var hasRequiredReplayControl;
function requireReplayControl() {
  if (hasRequiredReplayControl) return ReplayControl;
  hasRequiredReplayControl = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _ForwardReplayControl = _interopRequireDefault2(requireForwardReplayControl());
    var ReplayControl2 = (0, _ForwardReplayControl["default"])("replay");
    ReplayControl2.displayName = "ReplayControl";
    var _default = ReplayControl2;
    exports["default"] = _default;
  })(ReplayControl);
  return ReplayControl;
}
var FullscreenToggle = {};
var hasRequiredFullscreenToggle;
function requireFullscreenToggle() {
  if (hasRequiredFullscreenToggle) return FullscreenToggle;
  hasRequiredFullscreenToggle = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    var FullscreenToggle2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(FullscreenToggle3, _Component);
      function FullscreenToggle3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, FullscreenToggle3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FullscreenToggle3).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(FullscreenToggle3, [{
        key: "handleClick",
        value: function handleClick() {
          var _this$props = this.props, player2 = _this$props.player, actions = _this$props.actions;
          actions.toggleFullscreen(player2);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props2 = this.props, player2 = _this$props2.player, className = _this$props2.className;
          return _react2["default"].createElement("button", {
            className: (0, _classnames2["default"])(className, {
              "video-react-icon-fullscreen-exit": player2.isFullscreen,
              "video-react-icon-fullscreen": !player2.isFullscreen
            }, "video-react-fullscreen-control video-react-control video-react-button video-react-icon"),
            ref: function ref(c) {
              _this2.button = c;
            },
            type: "button",
            tabIndex: "0",
            onClick: this.handleClick
          }, _react2["default"].createElement("span", {
            className: "video-react-control-text"
          }, "Non-Fullscreen"));
        }
      }]);
      return FullscreenToggle3;
    }(_react2.Component);
    exports["default"] = FullscreenToggle2;
    FullscreenToggle2.propTypes = propTypes;
    FullscreenToggle2.displayName = "FullscreenToggle";
  })(FullscreenToggle);
  return FullscreenToggle;
}
var RemainingTimeDisplay = {};
var hasRequiredRemainingTimeDisplay;
function requireRemainingTimeDisplay() {
  if (hasRequiredRemainingTimeDisplay) return RemainingTimeDisplay;
  hasRequiredRemainingTimeDisplay = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _utils = requireUtils();
    var propTypes = {
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function RemainingTimeDisplay2(_ref) {
      var _ref$player = _ref.player, currentTime = _ref$player.currentTime, duration = _ref$player.duration, className = _ref.className;
      var remainingTime = duration - currentTime;
      var formattedTime = (0, _utils.formatTime)(remainingTime);
      return _react2["default"].createElement("div", {
        className: (0, _classnames2["default"])("video-react-remaining-time video-react-time-control video-react-control", className)
      }, _react2["default"].createElement("div", {
        className: "video-react-remaining-time-display",
        "aria-live": "off"
      }, _react2["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Remaining Time "), "-".concat(formattedTime)));
    }
    RemainingTimeDisplay2.propTypes = propTypes;
    RemainingTimeDisplay2.displayName = "RemainingTimeDisplay";
    var _default = RemainingTimeDisplay2;
    exports["default"] = _default;
  })(RemainingTimeDisplay);
  return RemainingTimeDisplay;
}
var CurrentTimeDisplay = {};
var hasRequiredCurrentTimeDisplay;
function requireCurrentTimeDisplay() {
  if (hasRequiredCurrentTimeDisplay) return CurrentTimeDisplay;
  hasRequiredCurrentTimeDisplay = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _utils = requireUtils();
    var propTypes = {
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function CurrentTimeDisplay2(_ref) {
      var _ref$player = _ref.player, currentTime = _ref$player.currentTime, duration = _ref$player.duration, className = _ref.className;
      var formattedTime = (0, _utils.formatTime)(currentTime, duration);
      return _react2["default"].createElement("div", {
        className: (0, _classnames2["default"])("video-react-current-time video-react-time-control video-react-control", className)
      }, _react2["default"].createElement("div", {
        className: "video-react-current-time-display",
        "aria-live": "off"
      }, _react2["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Current Time "), formattedTime));
    }
    CurrentTimeDisplay2.propTypes = propTypes;
    CurrentTimeDisplay2.displayName = "CurrentTimeDisplay";
    var _default = CurrentTimeDisplay2;
    exports["default"] = _default;
  })(CurrentTimeDisplay);
  return CurrentTimeDisplay;
}
var DurationDisplay = {};
var hasRequiredDurationDisplay;
function requireDurationDisplay() {
  if (hasRequiredDurationDisplay) return DurationDisplay;
  hasRequiredDurationDisplay = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _utils = requireUtils();
    var propTypes = {
      player: _propTypes["default"].object,
      className: _propTypes["default"].string
    };
    function DurationDisplay2(_ref) {
      var duration = _ref.player.duration, className = _ref.className;
      var formattedTime = (0, _utils.formatTime)(duration);
      return _react2["default"].createElement("div", {
        className: (0, _classnames2["default"])(className, "video-react-duration video-react-time-control video-react-control")
      }, _react2["default"].createElement("div", {
        className: "video-react-duration-display",
        "aria-live": "off"
      }, _react2["default"].createElement("span", {
        className: "video-react-control-text"
      }, "Duration Time "), formattedTime));
    }
    DurationDisplay2.propTypes = propTypes;
    DurationDisplay2.displayName = "DurationDisplay";
    var _default = DurationDisplay2;
    exports["default"] = _default;
  })(DurationDisplay);
  return DurationDisplay;
}
var TimeDivider = {};
var hasRequiredTimeDivider;
function requireTimeDivider() {
  if (hasRequiredTimeDivider) return TimeDivider;
  hasRequiredTimeDivider = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = TimeDivider2;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      separator: _propTypes["default"].string,
      className: _propTypes["default"].string
    };
    function TimeDivider2(_ref) {
      var separator = _ref.separator, className = _ref.className;
      var separatorText = separator || "/";
      return _react2["default"].createElement("div", {
        className: (0, _classnames2["default"])("video-react-time-control video-react-time-divider", className),
        dir: "ltr"
      }, _react2["default"].createElement("div", null, _react2["default"].createElement("span", null, separatorText)));
    }
    TimeDivider2.propTypes = propTypes;
    TimeDivider2.displayName = "TimeDivider";
  })(TimeDivider);
  return TimeDivider;
}
var VolumeMenuButton = {};
var PopupButton = {};
var ClickableComponent = {};
var hasRequiredClickableComponent;
function requireClickableComponent() {
  if (hasRequiredClickableComponent) return ClickableComponent;
  hasRequiredClickableComponent = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _extends2 = _interopRequireDefault2(require_extends());
    var _objectSpread22 = _interopRequireDefault2(requireObjectSpread());
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      tagName: _propTypes["default"].string,
      onClick: _propTypes["default"].func.isRequired,
      onFocus: _propTypes["default"].func,
      onBlur: _propTypes["default"].func,
      className: _propTypes["default"].string
    };
    var defaultProps2 = {
      tagName: "div"
    };
    var ClickableComponent2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(ClickableComponent3, _Component);
      function ClickableComponent3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, ClickableComponent3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClickableComponent3).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeypress = _this.handleKeypress.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(ClickableComponent3, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount(e) {
          this.handleBlur(e);
        }
      }, {
        key: "handleKeypress",
        value: function handleKeypress(event) {
          if (event.which === 32 || event.which === 13) {
            event.preventDefault();
            this.handleClick(event);
          }
        }
      }, {
        key: "handleClick",
        value: function handleClick(event) {
          var onClick = this.props.onClick;
          onClick(event);
        }
      }, {
        key: "handleFocus",
        value: function handleFocus(e) {
          document.addEventListener("keydown", this.handleKeypress);
          if (this.props.onFocus) {
            this.props.onFocus(e);
          }
        }
      }, {
        key: "handleBlur",
        value: function handleBlur(e) {
          document.removeEventListener("keydown", this.handleKeypress);
          if (this.props.onBlur) {
            this.props.onBlur(e);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var Tag = this.props.tagName;
          var props = (0, _objectSpread22["default"])({}, this.props);
          delete props.tagName;
          delete props.className;
          return _react2["default"].createElement(Tag, (0, _extends2["default"])({
            className: (0, _classnames2["default"])(this.props.className),
            role: "button",
            tabIndex: "0",
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          }, props));
        }
      }]);
      return ClickableComponent3;
    }(_react2.Component);
    exports["default"] = ClickableComponent2;
    ClickableComponent2.propTypes = propTypes;
    ClickableComponent2.defaultProps = defaultProps2;
    ClickableComponent2.displayName = "ClickableComponent";
  })(ClickableComponent);
  return ClickableComponent;
}
var Popup = {};
var hasRequiredPopup;
function requirePopup() {
  if (hasRequiredPopup) return Popup;
  hasRequiredPopup = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var propTypes = {
      player: _propTypes["default"].object,
      children: _propTypes["default"].any
    };
    var Popup2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(Popup3, _Component);
      function Popup3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, Popup3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Popup3).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(Popup3, [{
        key: "handleClick",
        value: function handleClick(event) {
          event.preventDefault();
        }
      }, {
        key: "render",
        value: function render() {
          var children = this.props.children;
          return _react2["default"].createElement("div", {
            className: "video-react-menu",
            onClick: this.handleClick
          }, _react2["default"].createElement("div", {
            className: "video-react-menu-content"
          }, children));
        }
      }]);
      return Popup3;
    }(_react2.Component);
    exports["default"] = Popup2;
    Popup2.propTypes = propTypes;
    Popup2.displayName = "Popup";
  })(Popup);
  return Popup;
}
var hasRequiredPopupButton;
function requirePopupButton() {
  if (hasRequiredPopupButton) return PopupButton;
  hasRequiredPopupButton = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = PopupButton2;
    var _extends2 = _interopRequireDefault2(require_extends());
    var _objectSpread22 = _interopRequireDefault2(requireObjectSpread());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _ClickableComponent = _interopRequireDefault2(requireClickableComponent());
    var _Popup = _interopRequireDefault2(requirePopup());
    var propTypes = {
      inline: _propTypes["default"].bool,
      onClick: _propTypes["default"].func.isRequired,
      onFocus: _propTypes["default"].func,
      onBlur: _propTypes["default"].func,
      className: _propTypes["default"].string
    };
    var defaultProps2 = {
      inline: true
    };
    function PopupButton2(props) {
      var inline = props.inline, className = props.className;
      var ps = (0, _objectSpread22["default"])({}, props);
      delete ps.children;
      delete ps.inline;
      delete ps.className;
      return _react2["default"].createElement(_ClickableComponent["default"], (0, _extends2["default"])({
        className: (0, _classnames2["default"])(className, {
          "video-react-menu-button-inline": !!inline,
          "video-react-menu-button-popup": !inline
        }, "video-react-control video-react-button video-react-menu-button")
      }, ps), _react2["default"].createElement(_Popup["default"], props));
    }
    PopupButton2.propTypes = propTypes;
    PopupButton2.defaultProps = defaultProps2;
    PopupButton2.displayName = "PopupButton";
  })(PopupButton);
  return PopupButton;
}
var VolumeBar = {};
var VolumeLevel = {};
var hasRequiredVolumeLevel;
function requireVolumeLevel() {
  if (hasRequiredVolumeLevel) return VolumeLevel;
  hasRequiredVolumeLevel = 1;
  (function(exports) {
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireDefault2(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      percentage: _propTypes["default"].string,
      vertical: _propTypes["default"].bool,
      className: _propTypes["default"].string
    };
    var defaultProps2 = {
      percentage: "100%",
      vertical: false
    };
    function VolumeLevel2(_ref) {
      var percentage = _ref.percentage, vertical = _ref.vertical, className = _ref.className;
      var style = {};
      if (vertical) {
        style.height = percentage;
      } else {
        style.width = percentage;
      }
      return _react2["default"].createElement("div", {
        className: (0, _classnames2["default"])(className, "video-react-volume-level"),
        style
      }, _react2["default"].createElement("span", {
        className: "video-react-control-text"
      }));
    }
    VolumeLevel2.propTypes = propTypes;
    VolumeLevel2.defaultProps = defaultProps2;
    VolumeLevel2.displayName = "VolumeLevel";
    var _default = VolumeLevel2;
    exports["default"] = _default;
  })(VolumeLevel);
  return VolumeLevel;
}
var hasRequiredVolumeBar;
function requireVolumeBar() {
  if (hasRequiredVolumeBar) return VolumeBar;
  hasRequiredVolumeBar = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _extends2 = _interopRequireDefault2(require_extends());
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _Slider = _interopRequireDefault2(requireSlider());
    var _VolumeLevel = _interopRequireDefault2(requireVolumeLevel());
    var propTypes = {
      actions: _propTypes["default"].object,
      player: _propTypes["default"].object,
      className: _propTypes["default"].string,
      onFocus: _propTypes["default"].func,
      onBlur: _propTypes["default"].func
    };
    var VolumeBar2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(VolumeBar3, _Component);
      function VolumeBar3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, VolumeBar3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VolumeBar3).call(this, props, context));
        _this.state = {
          percentage: "0%"
        };
        _this.handleMouseMove = _this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handlePercentageChange = _this.handlePercentageChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.checkMuted = _this.checkMuted.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getPercent = _this.getPercent.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepForward = _this.stepForward.bind((0, _assertThisInitialized2["default"])(_this));
        _this.stepBack = _this.stepBack.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(VolumeBar3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
        }
      }, {
        key: "getPercent",
        value: function getPercent() {
          var player2 = this.props.player;
          if (player2.muted) {
            return 0;
          }
          return player2.volume;
        }
      }, {
        key: "checkMuted",
        value: function checkMuted() {
          var _this$props = this.props, player2 = _this$props.player, actions = _this$props.actions;
          if (player2.muted) {
            actions.mute(false);
          }
        }
      }, {
        key: "handleMouseMove",
        value: function handleMouseMove(event) {
          var actions = this.props.actions;
          this.checkMuted();
          var distance = this.slider.calculateDistance(event);
          actions.changeVolume(distance);
        }
      }, {
        key: "stepForward",
        value: function stepForward() {
          var _this$props2 = this.props, player2 = _this$props2.player, actions = _this$props2.actions;
          this.checkMuted();
          actions.changeVolume(player2.volume + 0.1);
        }
      }, {
        key: "stepBack",
        value: function stepBack() {
          var _this$props3 = this.props, player2 = _this$props3.player, actions = _this$props3.actions;
          this.checkMuted();
          actions.changeVolume(player2.volume - 0.1);
        }
      }, {
        key: "handleFocus",
        value: function handleFocus(e) {
          if (this.props.onFocus) {
            this.props.onFocus(e);
          }
        }
      }, {
        key: "handleBlur",
        value: function handleBlur(e) {
          if (this.props.onBlur) {
            this.props.onBlur(e);
          }
        }
      }, {
        key: "handlePercentageChange",
        value: function handlePercentageChange(percentage) {
          if (percentage !== this.state.percentage) {
            this.setState({
              percentage
            });
          }
        }
      }, {
        key: "handleClick",
        value: function handleClick(event) {
          event.stopPropagation();
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props4 = this.props, player2 = _this$props4.player, className = _this$props4.className;
          var volume = (player2.volume * 100).toFixed(2);
          return _react2["default"].createElement(_Slider["default"], (0, _extends2["default"])({
            ref: function ref(c) {
              _this2.slider = c;
            },
            label: "volume level",
            valuenow: volume,
            valuetext: "".concat(volume, "%"),
            onMouseMove: this.handleMouseMove,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onClick: this.handleClick,
            sliderActive: this.handleFocus,
            sliderInactive: this.handleBlur,
            getPercent: this.getPercent,
            onPercentageChange: this.handlePercentageChange,
            stepForward: this.stepForward,
            stepBack: this.stepBack
          }, this.props, {
            className: (0, _classnames2["default"])(className, "video-react-volume-bar video-react-slider-bar")
          }), _react2["default"].createElement(_VolumeLevel["default"], this.props));
        }
      }]);
      return VolumeBar3;
    }(_react2.Component);
    VolumeBar2.propTypes = propTypes;
    VolumeBar2.displayName = "VolumeBar";
    var _default = VolumeBar2;
    exports["default"] = _default;
  })(VolumeBar);
  return VolumeBar;
}
var hasRequiredVolumeMenuButton;
function requireVolumeMenuButton() {
  if (hasRequiredVolumeMenuButton) return VolumeMenuButton;
  hasRequiredVolumeMenuButton = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _extends2 = _interopRequireDefault2(require_extends());
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _PopupButton = _interopRequireDefault2(requirePopupButton());
    var _VolumeBar = _interopRequireDefault2(requireVolumeBar());
    var propTypes = {
      player: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      vertical: _propTypes["default"].bool,
      className: _propTypes["default"].string,
      alwaysShowVolume: _propTypes["default"].bool
    };
    var defaultProps2 = {
      vertical: false
    };
    var VolumeMenuButton2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(VolumeMenuButton3, _Component);
      function VolumeMenuButton3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, VolumeMenuButton3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VolumeMenuButton3).call(this, props, context));
        _this.state = {
          active: false
        };
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(VolumeMenuButton3, [{
        key: "handleClick",
        value: function handleClick() {
          var _this$props = this.props, player2 = _this$props.player, actions = _this$props.actions;
          actions.mute(!player2.muted);
        }
      }, {
        key: "handleFocus",
        value: function handleFocus() {
          this.setState({
            active: true
          });
        }
      }, {
        key: "handleBlur",
        value: function handleBlur() {
          this.setState({
            active: false
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, vertical = _this$props2.vertical, player2 = _this$props2.player, className = _this$props2.className;
          var inline = !vertical;
          var level = this.volumeLevel;
          return _react2["default"].createElement(_PopupButton["default"], {
            className: (0, _classnames2["default"])(className, {
              "video-react-volume-menu-button-vertical": vertical,
              "video-react-volume-menu-button-horizontal": !vertical,
              "video-react-vol-muted": player2.muted,
              "video-react-vol-0": level === 0 && !player2.muted,
              "video-react-vol-1": level === 1,
              "video-react-vol-2": level === 2,
              "video-react-vol-3": level === 3,
              "video-react-slider-active": this.props.alwaysShowVolume || this.state.active,
              "video-react-lock-showing": this.props.alwaysShowVolume || this.state.active
            }, "video-react-volume-menu-button"),
            onClick: this.handleClick,
            inline
          }, _react2["default"].createElement(_VolumeBar["default"], (0, _extends2["default"])({
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          }, this.props)));
        }
      }, {
        key: "volumeLevel",
        get: function get() {
          var _this$props$player = this.props.player, volume = _this$props$player.volume, muted = _this$props$player.muted;
          var level = 3;
          if (volume === 0 || muted) {
            level = 0;
          } else if (volume < 0.33) {
            level = 1;
          } else if (volume < 0.67) {
            level = 2;
          }
          return level;
        }
      }]);
      return VolumeMenuButton3;
    }(_react2.Component);
    VolumeMenuButton2.propTypes = propTypes;
    VolumeMenuButton2.defaultProps = defaultProps2;
    VolumeMenuButton2.displayName = "VolumeMenuButton";
    var _default = VolumeMenuButton2;
    exports["default"] = _default;
  })(VolumeMenuButton);
  return VolumeMenuButton;
}
var PlaybackRateMenuButton = {};
var MenuButton = {};
var Menu = {};
var hasRequiredMenu;
function requireMenu() {
  if (hasRequiredMenu) return Menu;
  hasRequiredMenu = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var propTypes = {
      children: _propTypes["default"].any
    };
    var Menu2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(Menu3, _Component);
      function Menu3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, Menu3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Menu3).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(Menu3, [{
        key: "handleClick",
        value: function handleClick(event) {
          event.preventDefault();
        }
      }, {
        key: "render",
        value: function render() {
          return _react2["default"].createElement("div", {
            className: "video-react-menu video-react-lock-showing",
            role: "presentation",
            onClick: this.handleClick
          }, _react2["default"].createElement("ul", {
            className: "video-react-menu-content"
          }, this.props.children));
        }
      }]);
      return Menu3;
    }(_react2.Component);
    exports["default"] = Menu2;
    Menu2.propTypes = propTypes;
    Menu2.displayName = "Menu";
  })(Menu);
  return Menu;
}
var MenuItem = {};
var hasRequiredMenuItem;
function requireMenuItem() {
  if (hasRequiredMenuItem) return MenuItem;
  hasRequiredMenuItem = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var propTypes = {
      item: _propTypes["default"].object,
      index: _propTypes["default"].number,
      activateIndex: _propTypes["default"].number,
      onSelectItem: _propTypes["default"].func
    };
    var MenuItem2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(MenuItem3, _Component);
      function MenuItem3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, MenuItem3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MenuItem3).call(this, props, context));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(MenuItem3, [{
        key: "handleClick",
        value: function handleClick() {
          var _this$props = this.props, index2 = _this$props.index, onSelectItem = _this$props.onSelectItem;
          onSelectItem(index2);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, item = _this$props2.item, index2 = _this$props2.index, activateIndex = _this$props2.activateIndex;
          return _react2["default"].createElement("li", {
            className: (0, _classnames2["default"])({
              "video-react-menu-item": true,
              "video-react-selected": index2 === activateIndex
            }),
            role: "menuitem",
            onClick: this.handleClick
          }, item.label, _react2["default"].createElement("span", {
            className: "video-react-control-text"
          }));
        }
      }]);
      return MenuItem3;
    }(_react2.Component);
    exports["default"] = MenuItem2;
    MenuItem2.propTypes = propTypes;
    MenuItem2.displayName = "MenuItem";
  })(MenuItem);
  return MenuItem;
}
var hasRequiredMenuButton;
function requireMenuButton() {
  if (hasRequiredMenuButton) return MenuButton;
  hasRequiredMenuButton = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _Menu = _interopRequireDefault2(requireMenu());
    var _MenuItem = _interopRequireDefault2(requireMenuItem());
    var _ClickableComponent = _interopRequireDefault2(requireClickableComponent());
    var propTypes = {
      inline: _propTypes["default"].bool,
      items: _propTypes["default"].array,
      className: _propTypes["default"].string,
      onSelectItem: _propTypes["default"].func,
      children: _propTypes["default"].any,
      selectedIndex: _propTypes["default"].number
    };
    var MenuButton2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(MenuButton3, _Component);
      function MenuButton3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, MenuButton3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MenuButton3).call(this, props, context));
        _this.state = {
          active: false,
          activateIndex: props.selectedIndex || 0
        };
        _this.commitSelection = _this.commitSelection.bind((0, _assertThisInitialized2["default"])(_this));
        _this.activateMenuItem = _this.activateMenuItem.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2["default"])(_this));
        _this.renderMenu = _this.renderMenu.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleUpArrow = _this.handleUpArrow.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleDownArrow = _this.handleDownArrow.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleEscape = _this.handleEscape.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleReturn = _this.handleReturn.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleTab = _this.handleTab.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyPress = _this.handleKeyPress.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleIndexChange = _this.handleIndexChange.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(MenuButton3, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.selectedIndex !== this.props.selectedIndex) {
            this.activateMenuItem(this.props.selectedIndex);
          }
        }
      }, {
        key: "commitSelection",
        value: function commitSelection(index2) {
          this.setState({
            activateIndex: index2
          });
          this.handleIndexChange(index2);
        }
      }, {
        key: "activateMenuItem",
        value: function activateMenuItem(index2) {
          this.setState({
            activateIndex: index2
          });
          this.handleIndexChange(index2);
        }
      }, {
        key: "handleIndexChange",
        value: function handleIndexChange(index2) {
          var onSelectItem = this.props.onSelectItem;
          onSelectItem(index2);
        }
      }, {
        key: "handleClick",
        value: function handleClick() {
          this.setState(function(prevState) {
            return {
              active: !prevState.active
            };
          });
        }
      }, {
        key: "handleFocus",
        value: function handleFocus() {
          document.addEventListener("keydown", this.handleKeyPress);
        }
      }, {
        key: "handleBlur",
        value: function handleBlur() {
          this.setState({
            active: false
          });
          document.removeEventListener("keydown", this.handleKeyPress);
        }
      }, {
        key: "handleUpArrow",
        value: function handleUpArrow(e) {
          var items = this.props.items;
          if (this.state.active) {
            e.preventDefault();
            var newIndex = this.state.activateIndex - 1;
            if (newIndex < 0) {
              newIndex = items.length ? items.length - 1 : 0;
            }
            this.activateMenuItem(newIndex);
          }
        }
      }, {
        key: "handleDownArrow",
        value: function handleDownArrow(e) {
          var items = this.props.items;
          if (this.state.active) {
            e.preventDefault();
            var newIndex = this.state.activateIndex + 1;
            if (newIndex >= items.length) {
              newIndex = 0;
            }
            this.activateMenuItem(newIndex);
          }
        }
      }, {
        key: "handleTab",
        value: function handleTab(e) {
          if (this.state.active) {
            e.preventDefault();
            this.commitSelection(this.state.activateIndex);
          }
        }
      }, {
        key: "handleReturn",
        value: function handleReturn(e) {
          e.preventDefault();
          if (this.state.active) {
            this.commitSelection(this.state.activateIndex);
          } else {
            this.setState({
              active: true
            });
          }
        }
      }, {
        key: "handleEscape",
        value: function handleEscape() {
          this.setState({
            active: false,
            activateIndex: 0
          });
        }
      }, {
        key: "handleKeyPress",
        value: function handleKeyPress(event) {
          if (event.which === 27) {
            this.handleEscape(event);
          } else if (event.which === 9) {
            this.handleTab(event);
          } else if (event.which === 13) {
            this.handleReturn(event);
          } else if (event.which === 38) {
            this.handleUpArrow(event);
          } else if (event.which === 40) {
            this.handleDownArrow(event);
          }
        }
      }, {
        key: "handleSelectItem",
        value: function handleSelectItem(i) {
          this.commitSelection(i);
        }
      }, {
        key: "renderMenu",
        value: function renderMenu() {
          var _this2 = this;
          if (!this.state.active) {
            return null;
          }
          var items = this.props.items;
          return _react2["default"].createElement(_Menu["default"], null, items.map(function(item, i) {
            return _react2["default"].createElement(_MenuItem["default"], {
              item,
              index: i,
              onSelectItem: _this2.handleSelectItem,
              activateIndex: _this2.state.activateIndex,
              key: "item-".concat(i++)
            });
          }));
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          var _this$props = this.props, inline = _this$props.inline, className = _this$props.className;
          return _react2["default"].createElement(_ClickableComponent["default"], {
            className: (0, _classnames2["default"])(className, {
              "video-react-menu-button-inline": !!inline,
              "video-react-menu-button-popup": !inline,
              "video-react-menu-button-active": this.state.active
            }, "video-react-control video-react-button video-react-menu-button"),
            role: "button",
            tabIndex: "0",
            ref: function ref(c) {
              _this3.menuButton = c;
            },
            onClick: this.handleClick,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur
          }, this.props.children, this.renderMenu());
        }
      }]);
      return MenuButton3;
    }(_react2.Component);
    exports["default"] = MenuButton2;
    MenuButton2.propTypes = propTypes;
    MenuButton2.displayName = "MenuButton";
  })(MenuButton);
  return MenuButton;
}
var hasRequiredPlaybackRateMenuButton;
function requirePlaybackRateMenuButton() {
  if (hasRequiredPlaybackRateMenuButton) return PlaybackRateMenuButton;
  hasRequiredPlaybackRateMenuButton = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _MenuButton = _interopRequireDefault2(requireMenuButton());
    var propTypes = {
      player: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      rates: _propTypes["default"].array,
      className: _propTypes["default"].string
    };
    var defaultProps2 = {
      rates: [2, 1.5, 1.25, 1, 0.5, 0.25]
    };
    var PlaybackRateMenuButton2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(PlaybackRateMenuButton3, _Component);
      function PlaybackRateMenuButton3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, PlaybackRateMenuButton3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlaybackRateMenuButton3).call(this, props, context));
        _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(PlaybackRateMenuButton3, [{
        key: "handleSelectItem",
        value: function handleSelectItem(index2) {
          var _this$props = this.props, rates = _this$props.rates, actions = _this$props.actions;
          if (index2 >= 0 && index2 < rates.length) {
            actions.changeRate(rates[index2]);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, rates = _this$props2.rates, player2 = _this$props2.player;
          var items = rates.map(function(rate) {
            return {
              label: "".concat(rate, "x"),
              value: rate
            };
          });
          var selectedIndex = rates.indexOf(player2.playbackRate) || 0;
          return _react2["default"].createElement(_MenuButton["default"], {
            className: (0, _classnames2["default"])("video-react-playback-rate", this.props.className),
            onSelectItem: this.handleSelectItem,
            items,
            selectedIndex
          }, _react2["default"].createElement("span", {
            className: "video-react-control-text"
          }, "Playback Rate"), _react2["default"].createElement("div", {
            className: "video-react-playback-rate-value"
          }, "".concat(player2.playbackRate.toFixed(2), "x")));
        }
      }]);
      return PlaybackRateMenuButton3;
    }(_react2.Component);
    PlaybackRateMenuButton2.propTypes = propTypes;
    PlaybackRateMenuButton2.defaultProps = defaultProps2;
    PlaybackRateMenuButton2.displayName = "PlaybackRateMenuButton";
    var _default = PlaybackRateMenuButton2;
    exports["default"] = _default;
  })(PlaybackRateMenuButton);
  return PlaybackRateMenuButton;
}
var hasRequiredControlBar;
function requireControlBar() {
  if (hasRequiredControlBar) return ControlBar;
  hasRequiredControlBar = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _objectWithoutProperties2 = _interopRequireDefault2(requireObjectWithoutProperties());
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _ProgressControl = _interopRequireDefault2(requireProgressControl());
    var _PlayToggle = _interopRequireDefault2(requirePlayToggle());
    var _ForwardControl = _interopRequireDefault2(requireForwardControl());
    var _ReplayControl = _interopRequireDefault2(requireReplayControl());
    var _FullscreenToggle = _interopRequireDefault2(requireFullscreenToggle());
    var _RemainingTimeDisplay = _interopRequireDefault2(requireRemainingTimeDisplay());
    var _CurrentTimeDisplay = _interopRequireDefault2(requireCurrentTimeDisplay());
    var _DurationDisplay = _interopRequireDefault2(requireDurationDisplay());
    var _TimeDivider = _interopRequireDefault2(requireTimeDivider());
    var _VolumeMenuButton = _interopRequireDefault2(requireVolumeMenuButton());
    var _PlaybackRateMenuButton = _interopRequireDefault2(requirePlaybackRateMenuButton());
    var _utils = requireUtils();
    var propTypes = {
      children: _propTypes["default"].any,
      autoHide: _propTypes["default"].bool,
      autoHideTime: _propTypes["default"].number,
      // used in Player
      disableDefaultControls: _propTypes["default"].bool,
      disableCompletely: _propTypes["default"].bool,
      className: _propTypes["default"].string
    };
    var defaultProps2 = {
      autoHide: true,
      disableCompletely: false
    };
    var ControlBar2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(ControlBar3, _Component);
      function ControlBar3(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, ControlBar3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ControlBar3).call(this, props));
        _this.getDefaultChildren = _this.getDefaultChildren.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getFullChildren = _this.getFullChildren.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(ControlBar3, [{
        key: "getDefaultChildren",
        value: function getDefaultChildren() {
          return [_react2["default"].createElement(_PlayToggle["default"], {
            key: "play-toggle",
            order: 1
          }), _react2["default"].createElement(_VolumeMenuButton["default"], {
            key: "volume-menu-button",
            order: 4
          }), _react2["default"].createElement(_CurrentTimeDisplay["default"], {
            key: "current-time-display",
            order: 5.1
          }), _react2["default"].createElement(_TimeDivider["default"], {
            key: "time-divider",
            order: 5.2
          }), _react2["default"].createElement(_DurationDisplay["default"], {
            key: "duration-display",
            order: 5.3
          }), _react2["default"].createElement(_ProgressControl["default"], {
            key: "progress-control",
            order: 6
          }), _react2["default"].createElement(_FullscreenToggle["default"], {
            key: "fullscreen-toggle",
            order: 8
          })];
        }
      }, {
        key: "getFullChildren",
        value: function getFullChildren() {
          return [_react2["default"].createElement(_PlayToggle["default"], {
            key: "play-toggle",
            order: 1
          }), _react2["default"].createElement(_ReplayControl["default"], {
            key: "replay-control",
            order: 2
          }), _react2["default"].createElement(_ForwardControl["default"], {
            key: "forward-control",
            order: 3
          }), _react2["default"].createElement(_VolumeMenuButton["default"], {
            key: "volume-menu-button",
            order: 4
          }), _react2["default"].createElement(_CurrentTimeDisplay["default"], {
            key: "current-time-display",
            order: 5
          }), _react2["default"].createElement(_TimeDivider["default"], {
            key: "time-divider",
            order: 6
          }), _react2["default"].createElement(_DurationDisplay["default"], {
            key: "duration-display",
            order: 7
          }), _react2["default"].createElement(_ProgressControl["default"], {
            key: "progress-control",
            order: 8
          }), _react2["default"].createElement(_RemainingTimeDisplay["default"], {
            key: "remaining-time-display",
            order: 9
          }), _react2["default"].createElement(_PlaybackRateMenuButton["default"], {
            rates: [1, 1.25, 1.5, 2],
            key: "playback-rate",
            order: 10
          }), _react2["default"].createElement(_FullscreenToggle["default"], {
            key: "fullscreen-toggle",
            order: 11
          })];
        }
      }, {
        key: "getChildren",
        value: function getChildren() {
          var children = _react2["default"].Children.toArray(this.props.children);
          var defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
          var _this$props = this.props;
          _this$props.className;
          var parentProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className"]);
          return (0, _utils.mergeAndSortChildren)(defaultChildren, children, parentProps);
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props, autoHide = _this$props2.autoHide, className = _this$props2.className, disableCompletely = _this$props2.disableCompletely;
          var children = this.getChildren();
          return disableCompletely ? null : _react2["default"].createElement("div", {
            className: (0, _classnames2["default"])("video-react-control-bar", {
              "video-react-control-bar-auto-hide": autoHide
            }, className)
          }, children);
        }
      }]);
      return ControlBar3;
    }(_react2.Component);
    exports["default"] = ControlBar2;
    ControlBar2.propTypes = propTypes;
    ControlBar2.defaultProps = defaultProps2;
    ControlBar2.displayName = "ControlBar";
  })(ControlBar);
  return ControlBar;
}
var browser = {};
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser;
  hasRequiredBrowser = 1;
  Object.defineProperty(browser, "__esModule", {
    value: true
  });
  browser.IS_IOS = browser.IS_IPOD = browser.IS_IPHONE = browser.IS_IPAD = void 0;
  var USER_AGENT = typeof window !== "undefined" && window.navigator ? window.navigator.userAgent : "";
  var IS_IPAD = /iPad/i.test(USER_AGENT);
  browser.IS_IPAD = IS_IPAD;
  var IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
  browser.IS_IPHONE = IS_IPHONE;
  var IS_IPOD = /iPod/i.test(USER_AGENT);
  browser.IS_IPOD = IS_IPOD;
  var IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
  browser.IS_IOS = IS_IOS;
  return browser;
}
var hasRequiredPlayer;
function requirePlayer() {
  if (hasRequiredPlayer) return Player;
  hasRequiredPlayer = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _objectSpread22 = _interopRequireDefault2(requireObjectSpread());
    var _defineProperty2 = _interopRequireDefault2(require$$3);
    var _objectWithoutProperties2 = _interopRequireDefault2(requireObjectWithoutProperties());
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _Manager = _interopRequireDefault2(requireManager());
    var _BigPlayButton = _interopRequireDefault2(requireBigPlayButton());
    var _LoadingSpinner = _interopRequireDefault2(requireLoadingSpinner());
    var _PosterImage = _interopRequireDefault2(requirePosterImage());
    var _Video = _interopRequireDefault2(requireVideo());
    var _Bezel = _interopRequireDefault2(requireBezel());
    var _Shortcut = _interopRequireDefault2(requireShortcut());
    var _ControlBar = _interopRequireDefault2(requireControlBar());
    var browser2 = _interopRequireWildcard(requireBrowser());
    var _dom = requireDom();
    var _utils = requireUtils();
    var _fullscreen = _interopRequireDefault2(requireFullscreen());
    var propTypes = {
      children: _propTypes["default"].any,
      width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
      fluid: _propTypes["default"].bool,
      muted: _propTypes["default"].bool,
      playsInline: _propTypes["default"].bool,
      aspectRatio: _propTypes["default"].string,
      className: _propTypes["default"].string,
      videoId: _propTypes["default"].string,
      startTime: _propTypes["default"].number,
      loop: _propTypes["default"].bool,
      autoPlay: _propTypes["default"].bool,
      src: _propTypes["default"].string,
      poster: _propTypes["default"].string,
      preload: _propTypes["default"].oneOf(["auto", "metadata", "none"]),
      onLoadStart: _propTypes["default"].func,
      onWaiting: _propTypes["default"].func,
      onCanPlay: _propTypes["default"].func,
      onCanPlayThrough: _propTypes["default"].func,
      onPlaying: _propTypes["default"].func,
      onEnded: _propTypes["default"].func,
      onSeeking: _propTypes["default"].func,
      onSeeked: _propTypes["default"].func,
      onPlay: _propTypes["default"].func,
      onPause: _propTypes["default"].func,
      onProgress: _propTypes["default"].func,
      onDurationChange: _propTypes["default"].func,
      onError: _propTypes["default"].func,
      onSuspend: _propTypes["default"].func,
      onAbort: _propTypes["default"].func,
      onEmptied: _propTypes["default"].func,
      onStalled: _propTypes["default"].func,
      onLoadedMetadata: _propTypes["default"].func,
      onLoadedData: _propTypes["default"].func,
      onTimeUpdate: _propTypes["default"].func,
      onRateChange: _propTypes["default"].func,
      onVolumeChange: _propTypes["default"].func,
      store: _propTypes["default"].object
    };
    var defaultProps2 = {
      fluid: true,
      muted: false,
      playsInline: false,
      preload: "auto",
      aspectRatio: "auto"
    };
    var Player2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(Player3, _Component);
      function Player3(props) {
        var _this;
        (0, _classCallCheck2["default"])(this, Player3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Player3).call(this, props));
        _this.controlsHideTimer = null;
        _this.video = null;
        _this.manager = new _Manager["default"](props.store);
        _this.actions = _this.manager.getActions();
        _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind((0, _assertThisInitialized2["default"])(_this)));
        _this.getStyle = _this.getStyle.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2["default"])(_this));
        _this.getChildren = _this.getChildren.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleMouseMove = (0, _utils.throttle)(_this.handleMouseMove.bind((0, _assertThisInitialized2["default"])(_this)), 250);
        _this.handleMouseDown = _this.handleMouseDown.bind((0, _assertThisInitialized2["default"])(_this));
        _this.startControlsTimer = _this.startControlsTimer.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFullScreenChange = _this.handleFullScreenChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }
      (0, _createClass2["default"])(Player3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.handleResize();
          window.addEventListener("resize", this.handleResize);
          _fullscreen["default"].addEventListener(this.handleFullScreenChange);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener("resize", this.handleResize);
          _fullscreen["default"].removeEventListener(this.handleFullScreenChange);
          if (this.controlsHideTimer) {
            window.clearTimeout(this.controlsHideTimer);
          }
        }
      }, {
        key: "getDefaultChildren",
        value: function getDefaultChildren(originalChildren) {
          var _this2 = this;
          return [_react2["default"].createElement(_Video["default"], {
            ref: function ref(c) {
              _this2.video = c;
              _this2.manager.video = _this2.video;
            },
            key: "video",
            order: 0
          }, originalChildren), _react2["default"].createElement(_PosterImage["default"], {
            key: "poster-image",
            order: 1
          }), _react2["default"].createElement(_LoadingSpinner["default"], {
            key: "loading-spinner",
            order: 2
          }), _react2["default"].createElement(_Bezel["default"], {
            key: "bezel",
            order: 3
          }), _react2["default"].createElement(_BigPlayButton["default"], {
            key: "big-play-button",
            order: 4
          }), _react2["default"].createElement(_ControlBar["default"], {
            key: "control-bar",
            order: 5
          }), _react2["default"].createElement(_Shortcut["default"], {
            key: "shortcut",
            order: 99
          })];
        }
      }, {
        key: "getChildren",
        value: function getChildren(props) {
          props.className;
          var originalChildren = props.children, propsWithoutChildren = (0, _objectWithoutProperties2["default"])(props, ["className", "children"]);
          var children = _react2["default"].Children.toArray(this.props.children).filter(function(e) {
            return !(0, _utils.isVideoChild)(e);
          });
          var defaultChildren = this.getDefaultChildren(originalChildren);
          return (0, _utils.mergeAndSortChildren)(defaultChildren, children, propsWithoutChildren);
        }
      }, {
        key: "setWidthOrHeight",
        value: function setWidthOrHeight(style, name, value) {
          var styleVal;
          if (typeof value === "string") {
            if (value === "auto") {
              styleVal = "auto";
            } else if (value.match(/\d+%/)) {
              styleVal = value;
            }
          } else if (typeof value === "number") {
            styleVal = "".concat(value, "px");
          }
          Object.assign(style, (0, _defineProperty2["default"])({}, name, styleVal));
        }
      }, {
        key: "getStyle",
        value: function getStyle() {
          var _this$props = this.props, fluid = _this$props.fluid, propsAspectRatio = _this$props.aspectRatio, propsHeight = _this$props.height, propsWidth = _this$props.width;
          var _this$manager$getStat = this.manager.getState(), player2 = _this$manager$getStat.player;
          var style = {};
          var width;
          var height;
          var aspectRatio;
          if (propsAspectRatio !== void 0 && propsAspectRatio !== "auto") {
            aspectRatio = propsAspectRatio;
          } else if (player2.videoWidth) {
            aspectRatio = "".concat(player2.videoWidth, ":").concat(player2.videoHeight);
          } else {
            aspectRatio = "16:9";
          }
          var ratioParts = aspectRatio.split(":");
          var ratioMultiplier = ratioParts[1] / ratioParts[0];
          if (propsWidth !== void 0) {
            width = propsWidth;
          } else if (propsHeight !== void 0) {
            width = propsHeight / ratioMultiplier;
          } else {
            width = player2.videoWidth || 400;
          }
          if (propsHeight !== void 0) {
            height = propsHeight;
          } else {
            height = width * ratioMultiplier;
          }
          if (fluid) {
            style.paddingTop = "".concat(ratioMultiplier * 100, "%");
          } else {
            this.setWidthOrHeight(style, "width", width);
            this.setWidthOrHeight(style, "height", height);
          }
          return style;
        }
        // get redux state
        // { player, operation }
      }, {
        key: "getState",
        value: function getState() {
          return this.manager.getState();
        }
        // get playback rate
      }, {
        key: "play",
        // play the video
        value: function play() {
          this.video.play();
        }
        // pause the video
      }, {
        key: "pause",
        value: function pause() {
          this.video.pause();
        }
        // Change the video source and re-load the video:
      }, {
        key: "load",
        value: function load() {
          this.video.load();
        }
        // Add a new text track to the video
      }, {
        key: "addTextTrack",
        value: function addTextTrack() {
          var _this$video;
          (_this$video = this.video).addTextTrack.apply(_this$video, arguments);
        }
        // Check if your browser can play different types of video:
      }, {
        key: "canPlayType",
        value: function canPlayType() {
          var _this$video2;
          (_this$video2 = this.video).canPlayType.apply(_this$video2, arguments);
        }
        // seek video by time
      }, {
        key: "seek",
        value: function seek(time) {
          this.video.seek(time);
        }
        // jump forward x seconds
      }, {
        key: "forward",
        value: function forward(seconds) {
          this.video.forward(seconds);
        }
        // jump back x seconds
      }, {
        key: "replay",
        value: function replay(seconds) {
          this.video.replay(seconds);
        }
        // enter or exist full screen
      }, {
        key: "toggleFullscreen",
        value: function toggleFullscreen() {
          this.video.toggleFullscreen();
        }
        // subscribe to player state change
      }, {
        key: "subscribeToStateChange",
        value: function subscribeToStateChange(listener) {
          return this.manager.subscribeToPlayerStateChange(listener);
        }
        // player resize
      }, {
        key: "handleResize",
        value: function handleResize() {
        }
      }, {
        key: "handleFullScreenChange",
        value: function handleFullScreenChange(event) {
          if (event.target === this.manager.rootElement) {
            this.actions.handleFullscreenChange(_fullscreen["default"].isFullscreen);
          }
        }
      }, {
        key: "handleMouseDown",
        value: function handleMouseDown() {
          this.startControlsTimer();
        }
      }, {
        key: "handleMouseMove",
        value: function handleMouseMove() {
          this.startControlsTimer();
        }
      }, {
        key: "handleKeyDown",
        value: function handleKeyDown() {
          this.startControlsTimer();
        }
      }, {
        key: "startControlsTimer",
        value: function startControlsTimer() {
          var _this3 = this;
          var controlBarActiveTime = 3e3;
          _react2["default"].Children.forEach(this.props.children, function(element) {
            if (!_react2["default"].isValidElement(element) || element.type !== _ControlBar["default"]) {
              return;
            }
            var autoHideTime = element.props.autoHideTime;
            if (typeof autoHideTime === "number") {
              controlBarActiveTime = autoHideTime;
            }
          });
          this.actions.userActivate(true);
          clearTimeout(this.controlsHideTimer);
          this.controlsHideTimer = setTimeout(function() {
            _this3.actions.userActivate(false);
          }, controlBarActiveTime);
        }
      }, {
        key: "handleStateChange",
        value: function handleStateChange(state, prevState) {
          if (state.isFullscreen !== prevState.isFullscreen) {
            this.handleResize();
            (0, _dom.focusNode)(this.manager.rootElement);
          }
          this.forceUpdate();
        }
      }, {
        key: "handleFocus",
        value: function handleFocus() {
          this.actions.activate(true);
        }
      }, {
        key: "handleBlur",
        value: function handleBlur() {
          this.actions.activate(false);
        }
      }, {
        key: "render",
        value: function render() {
          var _this4 = this;
          var fluid = this.props.fluid;
          var _this$manager$getStat2 = this.manager.getState(), player2 = _this$manager$getStat2.player;
          var paused = player2.paused, hasStarted = player2.hasStarted, waiting = player2.waiting, seeking = player2.seeking, isFullscreen = player2.isFullscreen, userActivity = player2.userActivity;
          var props = (0, _objectSpread22["default"])({}, this.props, {
            player: player2,
            actions: this.actions,
            manager: this.manager,
            store: this.manager.store,
            video: this.video ? this.video.video : null
          });
          var children = this.getChildren(props);
          return _react2["default"].createElement("div", {
            className: (0, _classnames2["default"])({
              "video-react-controls-enabled": true,
              "video-react-has-started": hasStarted,
              "video-react-paused": paused,
              "video-react-playing": !paused,
              "video-react-waiting": waiting,
              "video-react-seeking": seeking,
              "video-react-fluid": fluid,
              "video-react-fullscreen": isFullscreen,
              "video-react-user-inactive": !userActivity,
              "video-react-user-active": userActivity,
              "video-react-workinghover": !browser2.IS_IOS
            }, "video-react", this.props.className),
            style: this.getStyle(),
            ref: function ref(c) {
              _this4.manager.rootElement = c;
            },
            role: "region",
            onTouchStart: this.handleMouseDown,
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleMouseMove,
            onMouseMove: this.handleMouseMove,
            onKeyDown: this.handleKeyDown,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            tabIndex: "-1"
          }, children);
        }
      }, {
        key: "playbackRate",
        get: function get() {
          return this.video.playbackRate;
        },
        set: function set(rate) {
          this.video.playbackRate = rate;
        }
      }, {
        key: "muted",
        get: function get() {
          return this.video.muted;
        },
        set: function set(val) {
          this.video.muted = val;
        }
      }, {
        key: "volume",
        get: function get() {
          return this.video.volume;
        },
        set: function set(val) {
          this.video.volume = val;
        }
        // video width
      }, {
        key: "videoWidth",
        get: function get() {
          return this.video.videoWidth;
        }
        // video height
      }, {
        key: "videoHeight",
        get: function get() {
          return this.video.videoHeight;
        }
      }]);
      return Player3;
    }(_react2.Component);
    exports["default"] = Player2;
    Player2.contextTypes = {
      store: _propTypes["default"].object
    };
    Player2.propTypes = propTypes;
    Player2.defaultProps = defaultProps2;
    Player2.displayName = "Player";
  })(Player);
  return Player;
}
var PlaybackRate = {};
var hasRequiredPlaybackRate;
function requirePlaybackRate() {
  if (hasRequiredPlaybackRate) return PlaybackRate;
  hasRequiredPlaybackRate = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _react2 = _interopRequireWildcard(reactExports);
    var _PlaybackRateMenuButton = _interopRequireDefault2(requirePlaybackRateMenuButton());
    var _utils = requireUtils();
    var PlaybackRate2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(PlaybackRate3, _Component);
      function PlaybackRate3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, PlaybackRate3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlaybackRate3).call(this, props, context));
        (0, _utils.deprecatedWarning)("PlaybackRate", "PlaybackRateMenuButton");
        return _this;
      }
      (0, _createClass2["default"])(PlaybackRate3, [{
        key: "render",
        value: function render() {
          return _react2["default"].createElement(_PlaybackRateMenuButton["default"], this.props);
        }
      }]);
      return PlaybackRate3;
    }(_react2.Component);
    exports["default"] = PlaybackRate2;
    PlaybackRate2.displayName = "PlaybackRate";
  })(PlaybackRate);
  return PlaybackRate;
}
var ClosedCaptionButton = {};
var hasRequiredClosedCaptionButton;
function requireClosedCaptionButton() {
  if (hasRequiredClosedCaptionButton) return ClosedCaptionButton;
  hasRequiredClosedCaptionButton = 1;
  (function(exports) {
    var _interopRequireWildcard = interopRequireWildcardExports;
    var _interopRequireDefault2 = interopRequireDefaultExports;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _classCallCheck2 = _interopRequireDefault2(requireClassCallCheck());
    var _createClass2 = _interopRequireDefault2(requireCreateClass());
    var _possibleConstructorReturn2 = _interopRequireDefault2(requirePossibleConstructorReturn());
    var _getPrototypeOf2 = _interopRequireDefault2(requireGetPrototypeOf());
    var _assertThisInitialized2 = _interopRequireDefault2(requireAssertThisInitialized());
    var _inherits2 = _interopRequireDefault2(requireInherits());
    var _propTypes = _interopRequireDefault2(propTypesExports);
    var _react2 = _interopRequireWildcard(reactExports);
    var _classnames2 = _interopRequireDefault2(requireClassnames());
    var _MenuButton = _interopRequireDefault2(requireMenuButton());
    var propTypes = {
      player: _propTypes["default"].object,
      actions: _propTypes["default"].object,
      className: _propTypes["default"].string,
      offMenuText: _propTypes["default"].string,
      showOffMenu: _propTypes["default"].bool,
      kinds: _propTypes["default"].array
    };
    var defaultProps2 = {
      offMenuText: "Off",
      showOffMenu: true,
      kinds: ["captions", "subtitles"]
      // `kind`s of TextTrack to look for to associate it with this menu.
    };
    var ClosedCaptionButton2 = /* @__PURE__ */ function(_Component) {
      (0, _inherits2["default"])(ClosedCaptionButton3, _Component);
      function ClosedCaptionButton3(props, context) {
        var _this;
        (0, _classCallCheck2["default"])(this, ClosedCaptionButton3);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClosedCaptionButton3).call(this, props, context));
        _this.getTextTrackItems = _this.getTextTrackItems.bind((0, _assertThisInitialized2["default"])(_this));
        _this.updateState = _this.updateState.bind((0, _assertThisInitialized2["default"])(_this));
        _this.handleSelectItem = _this.handleSelectItem.bind((0, _assertThisInitialized2["default"])(_this));
        _this.state = _this.getTextTrackItems();
        return _this;
      }
      (0, _createClass2["default"])(ClosedCaptionButton3, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          this.updateState();
        }
      }, {
        key: "getTextTrackItems",
        value: function getTextTrackItems() {
          var _this$props = this.props, kinds = _this$props.kinds, player2 = _this$props.player, offMenuText = _this$props.offMenuText, showOffMenu = _this$props.showOffMenu;
          var textTracks = player2.textTracks, activeTextTrack = player2.activeTextTrack;
          var textTrackItems = {
            items: [],
            selectedIndex: 0
          };
          var tracks = Array.from(textTracks || []);
          if (tracks.length === 0) {
            return textTrackItems;
          }
          if (showOffMenu) {
            textTrackItems.items.push({
              label: offMenuText || "Off",
              value: null
            });
          }
          tracks.forEach(function(textTrack) {
            if (kinds.length && !kinds.includes(textTrack.kind)) {
              return;
            }
            textTrackItems.items.push({
              label: textTrack.label,
              value: textTrack.language
            });
          });
          textTrackItems.selectedIndex = textTrackItems.items.findIndex(function(item) {
            return activeTextTrack && activeTextTrack.language === item.value;
          });
          if (textTrackItems.selectedIndex === -1) {
            textTrackItems.selectedIndex = 0;
          }
          return textTrackItems;
        }
      }, {
        key: "updateState",
        value: function updateState() {
          var textTrackItems = this.getTextTrackItems();
          if (textTrackItems.selectedIndex !== this.state.selectedIndex || !this.textTrackItemsAreEqual(textTrackItems.items, this.state.items)) {
            this.setState(textTrackItems);
          }
        }
      }, {
        key: "textTrackItemsAreEqual",
        value: function textTrackItemsAreEqual(items1, items2) {
          if (items1.length !== items2.length) {
            return false;
          }
          for (var i = 0; i < items1.length; i++) {
            if (!items2[i] || items1[i].label !== items2[i].label || items1[i].value !== items2[i].value) {
              return false;
            }
          }
          return true;
        }
      }, {
        key: "handleSelectItem",
        value: function handleSelectItem(index2) {
          var _this$props2 = this.props, player2 = _this$props2.player, actions = _this$props2.actions, showOffMenu = _this$props2.showOffMenu;
          var textTracks = player2.textTracks;
          Array.from(textTracks).forEach(function(textTrack, i) {
            if (index2 === (showOffMenu ? i + 1 : i)) {
              textTrack.mode = "showing";
              actions.activateTextTrack(textTrack);
            } else {
              textTrack.mode = "hidden";
            }
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$state = this.state, items = _this$state.items, selectedIndex = _this$state.selectedIndex;
          return _react2["default"].createElement(_MenuButton["default"], {
            className: (0, _classnames2["default"])("video-react-closed-caption", this.props.className),
            onSelectItem: this.handleSelectItem,
            items,
            selectedIndex
          }, _react2["default"].createElement("span", {
            className: "video-react-control-text"
          }, "Closed Caption"));
        }
      }]);
      return ClosedCaptionButton3;
    }(_react2.Component);
    ClosedCaptionButton2.propTypes = propTypes;
    ClosedCaptionButton2.defaultProps = defaultProps2;
    ClosedCaptionButton2.displayName = "ClosedCaptionButton";
    var _default = ClosedCaptionButton2;
    exports["default"] = _default;
  })(ClosedCaptionButton);
  return ClosedCaptionButton;
}
(function(exports) {
  var _interopRequireWildcard = interopRequireWildcardExports;
  var _interopRequireDefault2 = interopRequireDefaultExports;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "Player", {
    enumerable: true,
    get: function get() {
      return _Player["default"];
    }
  });
  Object.defineProperty(exports, "Video", {
    enumerable: true,
    get: function get() {
      return _Video["default"];
    }
  });
  Object.defineProperty(exports, "BigPlayButton", {
    enumerable: true,
    get: function get() {
      return _BigPlayButton["default"];
    }
  });
  Object.defineProperty(exports, "LoadingSpinner", {
    enumerable: true,
    get: function get() {
      return _LoadingSpinner["default"];
    }
  });
  Object.defineProperty(exports, "PosterImage", {
    enumerable: true,
    get: function get() {
      return _PosterImage["default"];
    }
  });
  Object.defineProperty(exports, "Slider", {
    enumerable: true,
    get: function get() {
      return _Slider["default"];
    }
  });
  Object.defineProperty(exports, "Bezel", {
    enumerable: true,
    get: function get() {
      return _Bezel["default"];
    }
  });
  Object.defineProperty(exports, "Shortcut", {
    enumerable: true,
    get: function get() {
      return _Shortcut["default"];
    }
  });
  Object.defineProperty(exports, "ControlBar", {
    enumerable: true,
    get: function get() {
      return _ControlBar["default"];
    }
  });
  Object.defineProperty(exports, "PlayToggle", {
    enumerable: true,
    get: function get() {
      return _PlayToggle["default"];
    }
  });
  Object.defineProperty(exports, "ForwardControl", {
    enumerable: true,
    get: function get() {
      return _ForwardControl["default"];
    }
  });
  Object.defineProperty(exports, "ReplayControl", {
    enumerable: true,
    get: function get() {
      return _ReplayControl["default"];
    }
  });
  Object.defineProperty(exports, "FullscreenToggle", {
    enumerable: true,
    get: function get() {
      return _FullscreenToggle["default"];
    }
  });
  Object.defineProperty(exports, "ProgressControl", {
    enumerable: true,
    get: function get() {
      return _ProgressControl["default"];
    }
  });
  Object.defineProperty(exports, "SeekBar", {
    enumerable: true,
    get: function get() {
      return _SeekBar["default"];
    }
  });
  Object.defineProperty(exports, "PlayProgressBar", {
    enumerable: true,
    get: function get() {
      return _PlayProgressBar["default"];
    }
  });
  Object.defineProperty(exports, "LoadProgressBar", {
    enumerable: true,
    get: function get() {
      return _LoadProgressBar["default"];
    }
  });
  Object.defineProperty(exports, "MouseTimeDisplay", {
    enumerable: true,
    get: function get() {
      return _MouseTimeDisplay["default"];
    }
  });
  Object.defineProperty(exports, "VolumeMenuButton", {
    enumerable: true,
    get: function get() {
      return _VolumeMenuButton["default"];
    }
  });
  Object.defineProperty(exports, "PlaybackRateMenuButton", {
    enumerable: true,
    get: function get() {
      return _PlaybackRateMenuButton["default"];
    }
  });
  Object.defineProperty(exports, "PlaybackRate", {
    enumerable: true,
    get: function get() {
      return _PlaybackRate["default"];
    }
  });
  Object.defineProperty(exports, "ClosedCaptionButton", {
    enumerable: true,
    get: function get() {
      return _ClosedCaptionButton["default"];
    }
  });
  Object.defineProperty(exports, "RemainingTimeDisplay", {
    enumerable: true,
    get: function get() {
      return _RemainingTimeDisplay["default"];
    }
  });
  Object.defineProperty(exports, "CurrentTimeDisplay", {
    enumerable: true,
    get: function get() {
      return _CurrentTimeDisplay["default"];
    }
  });
  Object.defineProperty(exports, "DurationDisplay", {
    enumerable: true,
    get: function get() {
      return _DurationDisplay["default"];
    }
  });
  Object.defineProperty(exports, "TimeDivider", {
    enumerable: true,
    get: function get() {
      return _TimeDivider["default"];
    }
  });
  Object.defineProperty(exports, "MenuButton", {
    enumerable: true,
    get: function get() {
      return _MenuButton["default"];
    }
  });
  Object.defineProperty(exports, "playerReducer", {
    enumerable: true,
    get: function get() {
      return _reducers.playerReducer;
    }
  });
  Object.defineProperty(exports, "operationReducer", {
    enumerable: true,
    get: function get() {
      return _reducers.operationReducer;
    }
  });
  exports.videoActions = exports.playerActions = void 0;
  var _Player = _interopRequireDefault2(requirePlayer());
  var _Video = _interopRequireDefault2(requireVideo());
  var _BigPlayButton = _interopRequireDefault2(requireBigPlayButton());
  var _LoadingSpinner = _interopRequireDefault2(requireLoadingSpinner());
  var _PosterImage = _interopRequireDefault2(requirePosterImage());
  var _Slider = _interopRequireDefault2(requireSlider());
  var _Bezel = _interopRequireDefault2(requireBezel());
  var _Shortcut = _interopRequireDefault2(requireShortcut());
  var _ControlBar = _interopRequireDefault2(requireControlBar());
  var _PlayToggle = _interopRequireDefault2(requirePlayToggle());
  var _ForwardControl = _interopRequireDefault2(requireForwardControl());
  var _ReplayControl = _interopRequireDefault2(requireReplayControl());
  var _FullscreenToggle = _interopRequireDefault2(requireFullscreenToggle());
  var _ProgressControl = _interopRequireDefault2(requireProgressControl());
  var _SeekBar = _interopRequireDefault2(requireSeekBar());
  var _PlayProgressBar = _interopRequireDefault2(requirePlayProgressBar());
  var _LoadProgressBar = _interopRequireDefault2(requireLoadProgressBar());
  var _MouseTimeDisplay = _interopRequireDefault2(requireMouseTimeDisplay());
  var _VolumeMenuButton = _interopRequireDefault2(requireVolumeMenuButton());
  var _PlaybackRateMenuButton = _interopRequireDefault2(requirePlaybackRateMenuButton());
  var _PlaybackRate = _interopRequireDefault2(requirePlaybackRate());
  var _ClosedCaptionButton = _interopRequireDefault2(requireClosedCaptionButton());
  var _RemainingTimeDisplay = _interopRequireDefault2(requireRemainingTimeDisplay());
  var _CurrentTimeDisplay = _interopRequireDefault2(requireCurrentTimeDisplay());
  var _DurationDisplay = _interopRequireDefault2(requireDurationDisplay());
  var _TimeDivider = _interopRequireDefault2(requireTimeDivider());
  var _MenuButton = _interopRequireDefault2(requireMenuButton());
  var playerActions = _interopRequireWildcard(requirePlayer$2());
  exports.playerActions = playerActions;
  var videoActions = _interopRequireWildcard(requireVideo$1());
  exports.videoActions = videoActions;
  var _reducers = requireReducers();
})(lib);
const WorkspaceDetail = ({ workspace }) => {
  const [confirmDialog, setConfirmDialog] = reactExports.useState(false);
  const [onDialogConfirm, setOnDialogConfirm] = reactExports.useState(() => {
  });
  const [onDialogCancel, setOnDialogCancel] = reactExports.useState(() => {
  });
  const [dialogTitle, setDialogTitle] = reactExports.useState("");
  const [dialogMessage, setDialogMessage] = reactExports.useState("");
  const navigate = useNavigate();
  if (!workspace) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Loading..." });
  }
  const {
    pricePerSeat,
    rejected,
    buildingName,
    state,
    district,
    location,
    pinCode,
    street,
    contactNo,
    powerBackup,
    ac,
    bathroom,
    photos,
    video: video2,
    tablesAvailable,
    approved,
    createdAt,
    ownerId
  } = workspace;
  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/${location}`, "_blank");
  };
  const handleDialog = (action) => {
    if (action === "reject") {
      notify.prompt({
        title: "Enter Reason",
        label: "Reason",
        placeholder: "Type your reason here"
      }).then((reason) => {
        if (reason) {
          handleReject(reason);
        }
      });
      return;
    }
    const config = {
      approve: {
        title: "Approve Workspace",
        message: "Are you sure you want to approve this workspace?",
        onConfirm: handleApprove
      },
      reject: {
        title: "Reject Workspace",
        message: "Are you sure you want to reject this workspace?",
        onConfirm: handleReject
      }
    };
    const { title, message, onConfirm } = config[action];
    setDialogTitle(title);
    setDialogMessage(message);
    setOnDialogConfirm(() => onConfirm);
    setOnDialogCancel(() => () => setConfirmDialog(false));
    setConfirmDialog(true);
  };
  const handleApprove = async () => {
    try {
      const response = await approveWorkspace(workspace._id);
      setConfirmDialog(false);
      if ((response == null ? void 0 : response.status) === 200) {
        navigate(-1);
        _t.success("Workspace approved successfully");
      } else {
        _t.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      _t.error("Something went wrong");
    }
  };
  const handleReject = async (reason) => {
    try {
      const response = await rejectWorkspace(workspace._id, reason);
      setConfirmDialog(false);
      if ((response == null ? void 0 : response.status) === 200) {
        navigate(-1);
        _t.success("Workspace rejected successfully");
      } else {
        _t.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      _t.error("Something went wrong");
    }
  };
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        title: dialogTitle,
        message: dialogMessage,
        isOpen: confirmDialog,
        onConfirm: onDialogConfirm,
        onCancel: onDialogCancel
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white", children: buildingName }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 text-sm text-gray-600 dark:text-gray-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Submitted on" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: new Date(createdAt).toLocaleDateString() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:block text-gray-300", children: "|" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "by" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: ownerId == null ? void 0 : ownerId.fullName }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400", children: [
                "(",
                ownerId == null ? void 0 : ownerId.email,
                ")"
              ] })
            ] })
          ] })
        ] }),
        approved ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => alert("hold"),
            className: "px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition duration-200",
            children: "Hold"
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleDialog("reject"),
              className: "px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition duration-200",
              children: "Reject"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => handleDialog("approve"),
              disabled: approved || rejected,
              className: "px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
              children: "Approve"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaMapMarkerAlt, { className: "text-blue-500 mt-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-900 dark:text-white", children: street }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
                  district,
                  ", ",
                  state,
                  ", ",
                  pinCode
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: openInGoogleMaps,
                    className: "mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium",
                    children: "View on Google Maps"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaPhone, { className: "text-green-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Contact:" }),
                " ",
                contactNo
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaPowerOff, { className: "text-yellow-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Power Backup" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: powerBackup ? "Available" : "Not Available" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaSnowflake, { className: "text-blue-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Air Conditioning" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: ac ? "Available" : "Not Available" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaToilet, { className: "text-red-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Bathroom" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: bathroom ? "Available" : "Not Available" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FaChair, { className: "text-purple-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Tables Available" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: tablesAvailable })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 dark:bg-gray-700 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Slider$1, { ...sliderSettings, children: photos.map((photo, index2) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: photo, alt: `Workspace Image ${index2 + 1}`, className: "w-full h-64 object-cover rounded-lg" }) }, index2)) }) }),
          video2 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 dark:bg-gray-700 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(lib.Player, { playsInline: true, poster: "/assets/poster.png", src: video2 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaDollarSign, { className: "text-green-600" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-lg text-gray-900 dark:text-white", children: [
            "Price per seat: ₹",
            pricePerSeat
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-gray-500 dark:text-gray-400", children: approved ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-green-600", children: "Approved" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-red-600", children: "Pending Approval" }) })
      ] })
    ] }) })
  ] });
};
const View = () => {
  const { workspaceId } = useParams();
  const [workspace, setWorkspace] = reactExports.useState();
  const [loading, setLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const fetchWorkspace = async () => {
      try {
        _t("Fetching workspace details");
        setLoading(true);
        const response = await getWorkspace(workspaceId);
        console.log("====================================");
        console.log(response);
        console.log("====================================");
        if (!(response == null ? void 0 : response.data.data)) {
          setLoading(false);
          _t.error("Workspace not found");
          return;
        }
        setWorkspace(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        _t.dismiss();
        setLoading(false);
        _t.error("An error occurred while fetching workspace details");
      }
    };
    fetchWorkspace();
  }, [workspaceId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center  h-screen w-screen flex justify-center items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ReactLoading, { type: "bars", color: PRIMARY_COLOR, height: 100, width: 100 }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ResponsiveDrawer,
    {
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkspaceDetail, { workspace })
    }
  ) }) }) });
};
export {
  View as default
};
