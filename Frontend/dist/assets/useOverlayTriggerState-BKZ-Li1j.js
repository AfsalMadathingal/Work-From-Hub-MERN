import { b as reactExports, a7 as $c87311424ea30a05$export$78551043582a6a98, $ as $18f2051aff69b9bf$export$43bb16f9c6d9e3f7, k as React } from "./index-BgyoVvld.js";
import { i as $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c, j as $8ae05eaa5c114e9c$export$7f54fc3180508a52, k as $431fbd86ca7dc216$export$b204af158042fbac, l as $431fbd86ca7dc216$export$f21a1ffae260145a, m as $9ab94262bd0047c7$export$420e68273165f4ec, d as dataFocusVisibleClasses, f as colorVariants } from "./chunk-XHQUSKIE-kpJhvuYQ.js";
import { a as $6a99195332edec8b$export$80f3e147d781571c } from "./useFocusable-BHKaAMEV.js";
import { t as tv } from "./chunk-N2KXC5ZE-B3rqp_Yo.js";
import { $ as $458b0a5536c1a7cf$export$40bfa8c7b0832715 } from "./useControlledState-chsM3Wdo.js";
function $9daab02d461809db$var$hasResizeObserver() {
  return typeof window.ResizeObserver !== "undefined";
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
  const { ref, onResize } = options;
  reactExports.useEffect(() => {
    let element = ref === null || ref === void 0 ? void 0 : ref.current;
    if (!element) return;
    if (!$9daab02d461809db$var$hasResizeObserver()) {
      window.addEventListener("resize", onResize, false);
      return () => {
        window.removeEventListener("resize", onResize, false);
      };
    } else {
      const resizeObserverInstance = new window.ResizeObserver((entries) => {
        if (!entries.length) return;
        onResize();
      });
      resizeObserverInstance.observe(element);
      return () => {
        if (element) resizeObserverInstance.unobserve(element);
      };
    }
  }, [
    onResize,
    ref
  ]);
}
function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
  let newValue = Math.min(Math.max(value, min), max);
  return newValue;
}
const $edcf132a9284368a$var$AXIS = {
  top: "top",
  bottom: "top",
  left: "left",
  right: "left"
};
const $edcf132a9284368a$var$FLIPPED_DIRECTION = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
const $edcf132a9284368a$var$CROSS_AXIS = {
  top: "left",
  left: "top"
};
const $edcf132a9284368a$var$AXIS_SIZE = {
  top: "height",
  left: "width"
};
const $edcf132a9284368a$var$TOTAL_SIZE = {
  width: "totalWidth",
  height: "totalHeight"
};
const $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE = {};
let $edcf132a9284368a$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $edcf132a9284368a$var$getContainerDimensions(containerNode) {
  let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
  let scroll = {};
  let isPinchZoomedIn = ($edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.scale) > 1;
  if (containerNode.tagName === "BODY") {
    let documentElement = document.documentElement;
    totalWidth = documentElement.clientWidth;
    totalHeight = documentElement.clientHeight;
    var _visualViewport_width;
    width = (_visualViewport_width = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.width) !== null && _visualViewport_width !== void 0 ? _visualViewport_width : totalWidth;
    var _visualViewport_height;
    height = (_visualViewport_height = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.height) !== null && _visualViewport_height !== void 0 ? _visualViewport_height : totalHeight;
    scroll.top = documentElement.scrollTop || containerNode.scrollTop;
    scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
    if ($edcf132a9284368a$var$visualViewport) {
      top = $edcf132a9284368a$var$visualViewport.offsetTop;
      left = $edcf132a9284368a$var$visualViewport.offsetLeft;
    }
  } else {
    ({ width, height, top, left } = $edcf132a9284368a$var$getOffset(containerNode));
    scroll.top = containerNode.scrollTop;
    scroll.left = containerNode.scrollLeft;
    totalWidth = width;
    totalHeight = height;
  }
  if ($c87311424ea30a05$export$78551043582a6a98() && (containerNode.tagName === "BODY" || containerNode.tagName === "HTML") && isPinchZoomedIn) {
    scroll.top = 0;
    scroll.left = 0;
    top = $edcf132a9284368a$var$visualViewport.pageTop;
    left = $edcf132a9284368a$var$visualViewport.pageLeft;
  }
  return {
    width,
    height,
    totalWidth,
    totalHeight,
    scroll,
    top,
    left
  };
}
function $edcf132a9284368a$var$getScroll(node) {
  return {
    top: node.scrollTop,
    left: node.scrollLeft,
    width: node.scrollWidth,
    height: node.scrollHeight
  };
}
function $edcf132a9284368a$var$getDelta(axis, offset, size, boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary) {
  let containerScroll = containerDimensions.scroll[axis];
  let boundarySize = boundaryDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]];
  let boundaryStartEdge = boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] + padding;
  let boundaryEndEdge = boundarySize + boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] - padding;
  let startEdgeOffset = offset - containerScroll + containerOffsetWithBoundary[axis] - boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];
  let endEdgeOffset = offset - containerScroll + size + containerOffsetWithBoundary[axis] - boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];
  if (startEdgeOffset < boundaryStartEdge) return boundaryStartEdge - startEdgeOffset;
  else if (endEdgeOffset > boundaryEndEdge) return Math.max(boundaryEndEdge - endEdgeOffset, boundaryStartEdge - startEdgeOffset);
  else return 0;
}
function $edcf132a9284368a$var$getMargins(node) {
  let style = window.getComputedStyle(node);
  return {
    top: parseInt(style.marginTop, 10) || 0,
    bottom: parseInt(style.marginBottom, 10) || 0,
    left: parseInt(style.marginLeft, 10) || 0,
    right: parseInt(style.marginRight, 10) || 0
  };
}
function $edcf132a9284368a$var$parsePlacement(input) {
  if ($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]) return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
  let [placement, crossPlacement] = input.split(" ");
  let axis = $edcf132a9284368a$var$AXIS[placement] || "right";
  let crossAxis = $edcf132a9284368a$var$CROSS_AXIS[axis];
  if (!$edcf132a9284368a$var$AXIS[crossPlacement]) crossPlacement = "center";
  let size = $edcf132a9284368a$var$AXIS_SIZE[axis];
  let crossSize = $edcf132a9284368a$var$AXIS_SIZE[crossAxis];
  $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input] = {
    placement,
    crossPlacement,
    axis,
    crossAxis,
    size,
    crossSize
  };
  return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
}
function $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset) {
  let { placement, crossPlacement, axis, crossAxis, size, crossSize } = placementInfo;
  let position = {};
  position[crossAxis] = childOffset[crossAxis];
  if (crossPlacement === "center")
    position[crossAxis] += (childOffset[crossSize] - overlaySize[crossSize]) / 2;
  else if (crossPlacement !== crossAxis)
    position[crossAxis] += childOffset[crossSize] - overlaySize[crossSize];
  position[crossAxis] += crossOffset;
  const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
  const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
  position[crossAxis] = $9446cca9a3875146$export$7d15b64cf5a3a4c4(position[crossAxis], minPosition, maxPosition);
  if (placement === axis) {
    const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE[size]];
    position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
  } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
  return position;
}
function $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlayHeight, heightGrowthDirection) {
  const containerHeight = isContainerPositioned ? containerOffsetWithBoundary.height : boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE.height];
  let overlayTop = position.top != null ? containerOffsetWithBoundary.top + position.top : containerOffsetWithBoundary.top + (containerHeight - position.bottom - overlayHeight);
  let maxHeight = heightGrowthDirection !== "top" ? (
    // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, boundaryDimensions.height + boundaryDimensions.top + boundaryDimensions.scroll.top - overlayTop - (margins.top + margins.bottom + padding))
  ) : Math.max(0, overlayTop + overlayHeight - (boundaryDimensions.top + boundaryDimensions.scroll.top) - (margins.top + margins.bottom + padding));
  return Math.min(boundaryDimensions.height - padding * 2, maxHeight);
}
function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
  let { placement, axis, size } = placementInfo;
  if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - boundaryDimensions.scroll[axis] + containerOffsetWithBoundary[axis] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
  return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $edcf132a9284368a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset) {
  let placementInfo = $edcf132a9284368a$var$parsePlacement(placementInput);
  let { size, crossAxis, crossSize, placement, crossPlacement } = placementInfo;
  let position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
  let normalizedOffset = offset;
  let space = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
  if (flip && scrollSize[size] > space) {
    let flippedPlacementInfo = $edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
    let flippedPosition = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    let flippedSpace = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo);
    if (flippedSpace > space) {
      placementInfo = flippedPlacementInfo;
      position = flippedPosition;
      normalizedOffset = offset;
    }
  }
  let heightGrowthDirection = "bottom";
  if (placementInfo.axis === "top") {
    if (placementInfo.placement === "top") heightGrowthDirection = "top";
    else if (placementInfo.placement === "bottom") heightGrowthDirection = "bottom";
  } else if (placementInfo.crossAxis === "top") {
    if (placementInfo.crossPlacement === "top") heightGrowthDirection = "bottom";
    else if (placementInfo.crossPlacement === "bottom") heightGrowthDirection = "top";
  }
  let delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
  position[crossAxis] += delta;
  let maxHeight = $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlaySize.height, heightGrowthDirection);
  if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
  overlaySize.height = Math.min(overlaySize.height, maxHeight);
  position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
  delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
  position[crossAxis] += delta;
  let arrowPosition = {};
  let preferredArrowPosition = childOffset[crossAxis] + 0.5 * childOffset[crossSize] - position[crossAxis];
  const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
  const arrowMaxPosition = overlaySize[crossSize] - arrowSize / 2 - arrowBoundaryOffset;
  const arrowOverlappingChildMinEdge = childOffset[crossAxis] - position[crossAxis] + arrowSize / 2;
  const arrowOverlappingChildMaxEdge = childOffset[crossAxis] + childOffset[crossSize] - position[crossAxis] - arrowSize / 2;
  const arrowPositionOverlappingChild = $9446cca9a3875146$export$7d15b64cf5a3a4c4(preferredArrowPosition, arrowOverlappingChildMinEdge, arrowOverlappingChildMaxEdge);
  arrowPosition[crossAxis] = $9446cca9a3875146$export$7d15b64cf5a3a4c4(arrowPositionOverlappingChild, arrowMinPosition, arrowMaxPosition);
  return {
    position,
    maxHeight,
    arrowOffsetLeft: arrowPosition.left,
    arrowOffsetTop: arrowPosition.top,
    placement: placementInfo.placement
  };
}
function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts) {
  let { placement, targetNode, overlayNode, scrollNode, padding, shouldFlip, boundaryElement, offset, crossOffset, maxHeight, arrowSize = 0, arrowBoundaryOffset = 0 } = opts;
  let container = overlayNode instanceof HTMLElement ? $edcf132a9284368a$var$getContainingBlock(overlayNode) : document.documentElement;
  let isViewportContainer = container === document.documentElement;
  const containerPositionStyle = window.getComputedStyle(container).position;
  let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== "static";
  let childOffset = isViewportContainer ? $edcf132a9284368a$var$getOffset(targetNode) : $edcf132a9284368a$var$getPosition(targetNode, container);
  if (!isViewportContainer) {
    let { marginTop, marginLeft } = window.getComputedStyle(targetNode);
    childOffset.top += parseInt(marginTop, 10) || 0;
    childOffset.left += parseInt(marginLeft, 10) || 0;
  }
  let overlaySize = $edcf132a9284368a$var$getOffset(overlayNode);
  let margins = $edcf132a9284368a$var$getMargins(overlayNode);
  overlaySize.width += margins.left + margins.right;
  overlaySize.height += margins.top + margins.bottom;
  let scrollSize = $edcf132a9284368a$var$getScroll(scrollNode);
  let boundaryDimensions = $edcf132a9284368a$var$getContainerDimensions(boundaryElement);
  let containerDimensions = $edcf132a9284368a$var$getContainerDimensions(container);
  let containerOffsetWithBoundary = boundaryElement.tagName === "BODY" ? $edcf132a9284368a$var$getOffset(container) : $edcf132a9284368a$var$getPosition(container, boundaryElement);
  if (container.tagName === "HTML" && boundaryElement.tagName === "BODY") {
    containerDimensions.scroll.top = 0;
    containerDimensions.scroll.left = 0;
  }
  return $edcf132a9284368a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset);
}
function $edcf132a9284368a$var$getOffset(node) {
  let { top, left, width, height } = node.getBoundingClientRect();
  let { scrollTop, scrollLeft, clientTop, clientLeft } = document.documentElement;
  return {
    top: top + scrollTop - clientTop,
    left: left + scrollLeft - clientLeft,
    width,
    height
  };
}
function $edcf132a9284368a$var$getPosition(node, parent) {
  let style = window.getComputedStyle(node);
  let offset;
  if (style.position === "fixed") {
    let { top, left, width, height } = node.getBoundingClientRect();
    offset = {
      top,
      left,
      width,
      height
    };
  } else {
    offset = $edcf132a9284368a$var$getOffset(node);
    let parentOffset = $edcf132a9284368a$var$getOffset(parent);
    let parentStyle = window.getComputedStyle(parent);
    parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
    parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
    offset.top -= parentOffset.top;
    offset.left -= parentOffset.left;
  }
  offset.top -= parseInt(style.marginTop, 10) || 0;
  offset.left -= parseInt(style.marginLeft, 10) || 0;
  return offset;
}
function $edcf132a9284368a$var$getContainingBlock(node) {
  let offsetParent = node.offsetParent;
  if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === "static" && !$edcf132a9284368a$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
  if (offsetParent == null) {
    offsetParent = node.parentElement;
    while (offsetParent && !$edcf132a9284368a$var$isContainingBlock(offsetParent)) offsetParent = offsetParent.parentElement;
  }
  return offsetParent || document.documentElement;
}
function $edcf132a9284368a$var$isContainingBlock(node) {
  let style = window.getComputedStyle(node);
  return style.transform !== "none" || /transform|perspective/.test(style.willChange) || style.filter !== "none" || style.contain === "paint" || // @ts-ignore
  "backdropFilter" in style && style.backdropFilter !== "none" || // @ts-ignore
  "WebkitBackdropFilter" in style && style.WebkitBackdropFilter !== "none";
}
const $dd149f63282afbbf$export$f6211563215e3b37 = /* @__PURE__ */ new WeakMap();
function $dd149f63282afbbf$export$18fc8428861184da(opts) {
  let { triggerRef, isOpen, onClose } = opts;
  reactExports.useEffect(() => {
    if (!isOpen || onClose === null) return;
    let onScroll = (e) => {
      let target = e.target;
      if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
      let onCloseHandler = onClose || $dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);
      if (onCloseHandler) onCloseHandler();
    };
    window.addEventListener("scroll", onScroll, true);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
    };
  }, [
    isOpen,
    onClose,
    triggerRef
  ]);
}
let $2a41e45df1593e64$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props) {
  let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let { arrowSize = 0, targetRef, overlayRef, scrollRef = overlayRef, placement = "bottom", containerPadding = 12, shouldFlip = true, boundaryElement = typeof document !== "undefined" ? document.body : null, offset = 0, crossOffset = 0, shouldUpdatePosition = true, isOpen = true, onClose, maxHeight, arrowBoundaryOffset = 0 } = props;
  let [position, setPosition] = reactExports.useState({
    position: {},
    arrowOffsetLeft: void 0,
    arrowOffsetTop: void 0,
    maxHeight: void 0,
    placement: void 0
  });
  let deps = [
    shouldUpdatePosition,
    placement,
    overlayRef.current,
    targetRef.current,
    scrollRef.current,
    containerPadding,
    shouldFlip,
    boundaryElement,
    offset,
    crossOffset,
    isOpen,
    direction,
    maxHeight,
    arrowBoundaryOffset,
    arrowSize
  ];
  let lastScale = reactExports.useRef($2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale);
  reactExports.useEffect(() => {
    if (isOpen) lastScale.current = $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale;
  }, [
    isOpen
  ]);
  let updatePosition = reactExports.useCallback(() => {
    if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !scrollRef.current || !boundaryElement) return;
    if (($2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale) !== lastScale.current) return;
    let overlay = overlayRef.current;
    if (!maxHeight && overlayRef.current) {
      var _window_visualViewport;
      overlay.style.top = "0px";
      overlay.style.bottom = "";
      var _window_visualViewport_height;
      overlay.style.maxHeight = ((_window_visualViewport_height = (_window_visualViewport = window.visualViewport) === null || _window_visualViewport === void 0 ? void 0 : _window_visualViewport.height) !== null && _window_visualViewport_height !== void 0 ? _window_visualViewport_height : window.innerHeight) + "px";
    }
    let position2 = $edcf132a9284368a$export$b3ceb0cbf1056d98({
      placement: $2a41e45df1593e64$var$translateRTL(placement, direction),
      overlayNode: overlayRef.current,
      targetNode: targetRef.current,
      scrollNode: scrollRef.current,
      padding: containerPadding,
      shouldFlip,
      boundaryElement,
      offset,
      crossOffset,
      maxHeight,
      arrowSize,
      arrowBoundaryOffset
    });
    overlay.style.top = "";
    overlay.style.bottom = "";
    Object.keys(position2.position).forEach((key) => overlay.style[key] = position2.position[key] + "px");
    overlay.style.maxHeight = position2.maxHeight != null ? position2.maxHeight + "px" : void 0;
    setPosition(position2);
  }, deps);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(updatePosition, deps);
  $2a41e45df1593e64$var$useResize(updatePosition);
  $9daab02d461809db$export$683480f191c0e3ea({
    ref: overlayRef,
    onResize: updatePosition
  });
  let isResizing = reactExports.useRef(false);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let timeout;
    let onResize = () => {
      isResizing.current = true;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isResizing.current = false;
      }, 500);
      updatePosition();
    };
    let onScroll = () => {
      if (isResizing.current) onResize();
    };
    $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener("resize", onResize);
    $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener("scroll", onScroll);
    return () => {
      $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener("resize", onResize);
      $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener("scroll", onScroll);
    };
  }, [
    updatePosition
  ]);
  let close = reactExports.useCallback(() => {
    if (!isResizing.current) onClose();
  }, [
    onClose,
    isResizing
  ]);
  $dd149f63282afbbf$export$18fc8428861184da({
    triggerRef: targetRef,
    isOpen,
    onClose: onClose && close
  });
  return {
    overlayProps: {
      style: {
        position: "absolute",
        zIndex: 1e5,
        ...position.position,
        maxHeight: position.maxHeight
      }
    },
    placement: position.placement,
    arrowProps: {
      "aria-hidden": "true",
      role: "presentation",
      style: {
        left: position.arrowOffsetLeft,
        top: position.arrowOffsetTop
      }
    },
    updatePosition
  };
}
function $2a41e45df1593e64$var$useResize(onResize) {
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    window.addEventListener("resize", onResize, false);
    return () => {
      window.removeEventListener("resize", onResize, false);
    };
  }, [
    onResize
  ]);
}
function $2a41e45df1593e64$var$translateRTL(position, direction) {
  if (direction === "rtl") return position.replace("start", "right").replace("end", "left");
  return position.replace("start", "left").replace("end", "right");
}
function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
  let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
  let stateRef = reactExports.useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  let onPointerDown = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e) => {
    if (onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
      if (onInteractOutsideStart) onInteractOutsideStart(e);
      stateRef.current.isPointerDown = true;
    }
  });
  let triggerInteractOutside = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e) => {
    if (onInteractOutside) onInteractOutside(e);
  });
  reactExports.useEffect(() => {
    let state = stateRef.current;
    if (isDisabled) return;
    const element = ref.current;
    const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
    if (typeof PointerEvent !== "undefined") {
      let onPointerUp = (e) => {
        if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
        state.isPointerDown = false;
      };
      documentObject.addEventListener("pointerdown", onPointerDown, true);
      documentObject.addEventListener("pointerup", onPointerUp, true);
      return () => {
        documentObject.removeEventListener("pointerdown", onPointerDown, true);
        documentObject.removeEventListener("pointerup", onPointerUp, true);
      };
    } else {
      let onMouseUp = (e) => {
        if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;
        else if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
        state.isPointerDown = false;
      };
      let onTouchEnd = (e) => {
        state.ignoreEmulatedMouseEvents = true;
        if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
        state.isPointerDown = false;
      };
      documentObject.addEventListener("mousedown", onPointerDown, true);
      documentObject.addEventListener("mouseup", onMouseUp, true);
      documentObject.addEventListener("touchstart", onPointerDown, true);
      documentObject.addEventListener("touchend", onTouchEnd, true);
      return () => {
        documentObject.removeEventListener("mousedown", onPointerDown, true);
        documentObject.removeEventListener("mouseup", onMouseUp, true);
        documentObject.removeEventListener("touchstart", onPointerDown, true);
        documentObject.removeEventListener("touchend", onTouchEnd, true);
      };
    }
  }, [
    ref,
    isDisabled,
    onPointerDown,
    triggerInteractOutside
  ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
  if (event.button > 0) return false;
  if (event.target) {
    const ownerDocument = event.target.ownerDocument;
    if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
    if (event.target.closest("[data-react-aria-top-layer]")) return false;
  }
  return ref.current && !ref.current.contains(event.target);
}
function $645f2e67b85a24c9$var$isStyleVisible(element) {
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
  if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
  let { display, visibility } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    const { getComputedStyle } = element.ownerDocument.defaultView;
    let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
    isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
  }
  return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
  return !element.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !element.hasAttribute("data-react-aria-prevent-focus") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
  return element.nodeName !== "#comment" && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}
const $9bf71ea28793e738$var$FocusContext = /* @__PURE__ */ React.createContext(null);
let $9bf71ea28793e738$var$activeScope = null;
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
  let { children, contain, restoreFocus, autoFocus } = props;
  let startRef = reactExports.useRef(null);
  let endRef = reactExports.useRef(null);
  let scopeRef = reactExports.useRef([]);
  let { parentNode } = reactExports.useContext($9bf71ea28793e738$var$FocusContext) || {};
  let node = reactExports.useMemo(() => new $9bf71ea28793e738$var$TreeNode({
    scopeRef
  }), [
    scopeRef
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let parent = parentNode || $9bf71ea28793e738$export$d06fae2ee68b101e.root;
    if ($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef) && $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, parent.scopeRef)) {
      let activeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
      if (activeNode) parent = activeNode;
    }
    parent.addChild(node);
    $9bf71ea28793e738$export$d06fae2ee68b101e.addNode(node);
  }, [
    node,
    parentNode
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let node2 = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
    if (node2) node2.contain = !!contain;
  }, [
    contain
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    var _startRef_current;
    let node2 = (_startRef_current = startRef.current) === null || _startRef_current === void 0 ? void 0 : _startRef_current.nextSibling;
    let nodes = [];
    while (node2 && node2 !== endRef.current) {
      nodes.push(node2);
      node2 = node2.nextSibling;
    }
    scopeRef.current = nodes;
  }, [
    children
  ]);
  $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restoreFocus, contain);
  $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
  $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
  $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
  reactExports.useEffect(() => {
    const activeElement = $431fbd86ca7dc216$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0).activeElement;
    let scope = null;
    if ($9bf71ea28793e738$var$isElementInScope(activeElement, scopeRef.current)) {
      for (let node2 of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse()) if (node2.scopeRef && $9bf71ea28793e738$var$isElementInScope(activeElement, node2.scopeRef.current)) scope = node2;
      if (scope === $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) $9bf71ea28793e738$var$activeScope = scope.scopeRef;
    }
  }, [
    scopeRef
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    return () => {
      var _focusScopeTree_getTreeNode_parent, _focusScopeTree_getTreeNode;
      var _focusScopeTree_getTreeNode_parent_scopeRef;
      let parentScope = (_focusScopeTree_getTreeNode_parent_scopeRef = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : (_focusScopeTree_getTreeNode_parent = _focusScopeTree_getTreeNode.parent) === null || _focusScopeTree_getTreeNode_parent === void 0 ? void 0 : _focusScopeTree_getTreeNode_parent.scopeRef) !== null && _focusScopeTree_getTreeNode_parent_scopeRef !== void 0 ? _focusScopeTree_getTreeNode_parent_scopeRef : null;
      if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
      $9bf71ea28793e738$export$d06fae2ee68b101e.removeTreeNode(scopeRef);
    };
  }, [
    scopeRef
  ]);
  let focusManager = reactExports.useMemo(() => $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef), []);
  let value = reactExports.useMemo(() => ({
    focusManager,
    parentNode: node
  }), [
    node,
    focusManager
  ]);
  return /* @__PURE__ */ React.createElement($9bf71ea28793e738$var$FocusContext.Provider, {
    value
  }, /* @__PURE__ */ React.createElement("span", {
    "data-focus-scope-start": true,
    hidden: true,
    ref: startRef
  }), children, /* @__PURE__ */ React.createElement("span", {
    "data-focus-scope-end": true,
    hidden: true,
    ref: endRef
  }));
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
  return {
    focusNext(opts = {}) {
      let scope = scopeRef.current;
      let { from, tabbable, wrap, accept } = opts;
      let node = from || $431fbd86ca7dc216$export$b204af158042fbac(scope[0]).activeElement;
      let sentinel = scope[0].previousElementSibling;
      let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable,
        accept
      }, scope);
      walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
      let nextNode = walker.nextNode();
      if (!nextNode && wrap) {
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
      }
      if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusPrevious(opts = {}) {
      let scope = scopeRef.current;
      let { from, tabbable, wrap, accept } = opts;
      let node = from || $431fbd86ca7dc216$export$b204af158042fbac(scope[0]).activeElement;
      let sentinel = scope[scope.length - 1].nextElementSibling;
      let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable,
        accept
      }, scope);
      walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
      let previousNode = walker.previousNode();
      if (!previousNode && wrap) {
        walker.currentNode = sentinel;
        previousNode = walker.previousNode();
      }
      if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    },
    focusFirst(opts = {}) {
      let scope = scopeRef.current;
      let { tabbable, accept } = opts;
      let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable,
        accept
      }, scope);
      walker.currentNode = scope[0].previousElementSibling;
      let nextNode = walker.nextNode();
      if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusLast(opts = {}) {
      let scope = scopeRef.current;
      let { tabbable, accept } = opts;
      let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable,
        accept
      }, scope);
      walker.currentNode = scope[scope.length - 1].nextElementSibling;
      let previousNode = walker.previousNode();
      if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    }
  };
}
const $9bf71ea28793e738$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
const $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$getScopeRoot(scope) {
  return scope[0].parentElement;
}
function $9bf71ea28793e738$var$shouldContainFocus(scopeRef) {
  let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
  while (scope && scope.scopeRef !== scopeRef) {
    if (scope.contain) return false;
    scope = scope.parent;
  }
  return true;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
  let focusedNode = reactExports.useRef();
  let raf = reactExports.useRef();
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let scope = scopeRef.current;
    if (!contain) {
      if (raf.current) {
        cancelAnimationFrame(raf.current);
        raf.current = void 0;
      }
      return;
    }
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(scope ? scope[0] : void 0);
    let onKeyDown = (e) => {
      if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef) || e.isComposing) return;
      let focusedElement = ownerDocument.activeElement;
      let scope2 = scopeRef.current;
      if (!scope2 || !$9bf71ea28793e738$var$isElementInScope(focusedElement, scope2)) return;
      let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope2);
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable: true
      }, scope2);
      if (!focusedElement) return;
      walker.currentNode = focusedElement;
      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!nextElement) {
        walker.currentNode = e.shiftKey ? scope2[scope2.length - 1].nextElementSibling : scope2[0].previousElementSibling;
        nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      }
      e.preventDefault();
      if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
    };
    let onFocus = (e) => {
      if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(e.target, scopeRef.current)) {
        $9bf71ea28793e738$var$activeScope = scopeRef;
        focusedNode.current = e.target;
      } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
        if (focusedNode.current) focusedNode.current.focus();
        else if ($9bf71ea28793e738$var$activeScope && $9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
      } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef)) focusedNode.current = e.target;
    };
    let onBlur = (e) => {
      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        if (ownerDocument.activeElement && $9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(ownerDocument.activeElement, scopeRef)) {
          $9bf71ea28793e738$var$activeScope = scopeRef;
          if (ownerDocument.body.contains(e.target)) {
            var _focusedNode_current;
            focusedNode.current = e.target;
            (_focusedNode_current = focusedNode.current) === null || _focusedNode_current === void 0 ? void 0 : _focusedNode_current.focus();
          } else if ($9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
        }
      });
    };
    ownerDocument.addEventListener("keydown", onKeyDown, false);
    ownerDocument.addEventListener("focusin", onFocus, false);
    scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.addEventListener("focusin", onFocus, false));
    scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.addEventListener("focusout", onBlur, false));
    return () => {
      ownerDocument.removeEventListener("keydown", onKeyDown, false);
      ownerDocument.removeEventListener("focusin", onFocus, false);
      scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.removeEventListener("focusin", onFocus, false));
      scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.removeEventListener("focusout", onBlur, false));
    };
  }, [
    scopeRef,
    contain
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [
    raf
  ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
  return $9bf71ea28793e738$var$isElementInChildScope(element);
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  if (!element) return false;
  if (!scope) return false;
  return scope.some((node) => node.contains(element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope = null) {
  if (element instanceof Element && element.closest("[data-react-aria-top-layer]")) return true;
  for (let { scopeRef: s } of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))) {
    if (s && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
  }
  return false;
}
function $9bf71ea28793e738$export$1258395f99bf9cbf(element) {
  return $9bf71ea28793e738$var$isElementInChildScope(element, $9bf71ea28793e738$var$activeScope);
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
  var _focusScopeTree_getTreeNode;
  let parent = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : _focusScopeTree_getTreeNode.parent;
  while (parent) {
    if (parent.scopeRef === ancestor) return true;
    parent = parent.parent;
  }
  return false;
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
  if (element != null && !scroll) try {
    (0, $6a99195332edec8b$export$80f3e147d781571c)(element);
  } catch (err) {
  }
  else if (element != null) try {
    element.focus();
  } catch (err) {
  }
}
function $9bf71ea28793e738$var$focusFirstInScope(scope, tabbable = true) {
  let sentinel = scope[0].previousElementSibling;
  let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
  let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
    tabbable
  }, scope);
  walker.currentNode = sentinel;
  let nextNode = walker.nextNode();
  if (tabbable && !nextNode) {
    scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
    walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
      tabbable: false
    }, scope);
    walker.currentNode = sentinel;
    nextNode = walker.nextNode();
  }
  $9bf71ea28793e738$var$focusElement(nextNode);
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
  const autoFocusRef = React.useRef(autoFocus);
  reactExports.useEffect(() => {
    if (autoFocusRef.current) {
      $9bf71ea28793e738$var$activeScope = scopeRef;
      const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0);
      if (!$9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement, $9bf71ea28793e738$var$activeScope.current) && scopeRef.current) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
    }
    autoFocusRef.current = false;
  }, [
    scopeRef
  ]);
}
function $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restore, contain) {
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (restore || contain) return;
    let scope = scopeRef.current;
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(scope ? scope[0] : void 0);
    let onFocus = (e) => {
      let target = e.target;
      if ($9bf71ea28793e738$var$isElementInScope(target, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
      else if (!$9bf71ea28793e738$var$isElementInAnyScope(target)) $9bf71ea28793e738$var$activeScope = null;
    };
    ownerDocument.addEventListener("focusin", onFocus, false);
    scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.addEventListener("focusin", onFocus, false));
    return () => {
      ownerDocument.removeEventListener("focusin", onFocus, false);
      scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.removeEventListener("focusin", onFocus, false));
    };
  }, [
    scopeRef,
    restore,
    contain
  ]);
}
function $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef) {
  let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
  while (scope && scope.scopeRef !== scopeRef) {
    if (scope.nodeToRestore) return false;
    scope = scope.parent;
  }
  return (scope === null || scope === void 0 ? void 0 : scope.scopeRef) === scopeRef;
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
  const nodeToRestoreRef = reactExports.useRef(typeof document !== "undefined" ? $431fbd86ca7dc216$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0).activeElement : null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let scope = scopeRef.current;
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(scope ? scope[0] : void 0);
    if (!restoreFocus || contain) return;
    let onFocus = () => {
      if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
    };
    ownerDocument.addEventListener("focusin", onFocus, false);
    scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.addEventListener("focusin", onFocus, false));
    return () => {
      ownerDocument.removeEventListener("focusin", onFocus, false);
      scope === null || scope === void 0 ? void 0 : scope.forEach((element) => element.removeEventListener("focusin", onFocus, false));
    };
  }, [
    scopeRef,
    contain
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0);
    if (!restoreFocus) return;
    let onKeyDown = (e) => {
      if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef) || e.isComposing) return;
      let focusedElement = ownerDocument.activeElement;
      if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current)) return;
      let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
      if (!treeNode) return;
      let nodeToRestore = treeNode.nodeToRestore;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ownerDocument.body, {
        tabbable: true
      });
      walker.currentNode = focusedElement;
      let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!nodeToRestore || !ownerDocument.body.contains(nodeToRestore) || nodeToRestore === ownerDocument.body) {
        nodeToRestore = void 0;
        treeNode.nodeToRestore = void 0;
      }
      if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
        walker.currentNode = nodeToRestore;
        do
          nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
        while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current));
        e.preventDefault();
        e.stopPropagation();
        if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        else if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
        else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
      }
    };
    if (!contain) ownerDocument.addEventListener("keydown", onKeyDown, true);
    return () => {
      if (!contain) ownerDocument.removeEventListener("keydown", onKeyDown, true);
    };
  }, [
    scopeRef,
    restoreFocus,
    contain
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0);
    if (!restoreFocus) return;
    let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
    if (!treeNode) return;
    var _nodeToRestoreRef_current;
    treeNode.nodeToRestore = (_nodeToRestoreRef_current = nodeToRestoreRef.current) !== null && _nodeToRestoreRef_current !== void 0 ? _nodeToRestoreRef_current : void 0;
    return () => {
      let treeNode2 = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
      if (!treeNode2) return;
      let nodeToRestore = treeNode2.nodeToRestore;
      if (restoreFocus && nodeToRestore && // eslint-disable-next-line react-hooks/exhaustive-deps
      ($9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement, scopeRef.current) || ownerDocument.activeElement === ownerDocument.body && $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef))) {
        let clonedTree = $9bf71ea28793e738$export$d06fae2ee68b101e.clone();
        requestAnimationFrame(() => {
          if (ownerDocument.activeElement === ownerDocument.body) {
            let treeNode3 = clonedTree.getTreeNode(scopeRef);
            while (treeNode3) {
              if (treeNode3.nodeToRestore && treeNode3.nodeToRestore.isConnected) {
                $9bf71ea28793e738$var$focusElement(treeNode3.nodeToRestore);
                return;
              }
              treeNode3 = treeNode3.parent;
            }
            treeNode3 = clonedTree.getTreeNode(scopeRef);
            while (treeNode3) {
              if (treeNode3.scopeRef && treeNode3.scopeRef.current && $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(treeNode3.scopeRef)) {
                $9bf71ea28793e738$var$focusFirstInScope(treeNode3.scopeRef.current, true);
                return;
              }
              treeNode3 = treeNode3.parent;
            }
          }
        });
      }
    };
  }, [
    scopeRef,
    restoreFocus
  ]);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
  let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
  let walker = $431fbd86ca7dc216$export$b204af158042fbac(root).createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      var _opts_from;
      if (opts === null || opts === void 0 ? void 0 : (_opts_from = opts.from) === null || _opts_from === void 0 ? void 0 : _opts_from.contains(node)) return NodeFilter.FILTER_REJECT;
      if (node.matches(selector) && $645f2e67b85a24c9$export$e989c0fffaa6b27a(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
      return NodeFilter.FILTER_SKIP;
    }
  });
  if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
  return walker;
}
class $9bf71ea28793e738$var$Tree {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
    if (!parentNode) return;
    let node = new $9bf71ea28793e738$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore) node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null) return;
    let node = this.fastMap.get(scopeRef);
    if (!node) return;
    let parentNode = node.parent;
    for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    if (parentNode) {
      parentNode.removeChild(node);
      if (children.size > 0) children.forEach((child) => parentNode && parentNode.addChild(child));
    }
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null) yield node;
    if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
  }
  clone() {
    var _node_parent;
    let newTree = new $9bf71ea28793e738$var$Tree();
    var _node_parent_scopeRef;
    for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
    return newTree;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $9bf71ea28793e738$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
}
class $9bf71ea28793e738$var$TreeNode {
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
}
let $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();
const $a11501f3d1d39e6c$var$visibleOverlays = [];
function $a11501f3d1d39e6c$export$ea8f71083e90600f(props, ref) {
  let { onClose, shouldCloseOnBlur, isOpen, isDismissable = false, isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside } = props;
  reactExports.useEffect(() => {
    if (isOpen) $a11501f3d1d39e6c$var$visibleOverlays.push(ref);
    return () => {
      let index = $a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);
      if (index >= 0) $a11501f3d1d39e6c$var$visibleOverlays.splice(index, 1);
    };
  }, [
    isOpen,
    ref
  ]);
  let onHide = () => {
    if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref && onClose) onClose();
  };
  let onInteractOutsideStart = (e) => {
    if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
      if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  };
  let onInteractOutside = (e) => {
    if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
      if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
        e.stopPropagation();
        e.preventDefault();
      }
      onHide();
    }
  };
  let onKeyDown = (e) => {
    if (e.key === "Escape" && !isKeyboardDismissDisabled && !e.nativeEvent.isComposing) {
      e.stopPropagation();
      e.preventDefault();
      onHide();
    }
  };
  $e0b6e0b68ec7f50f$export$872b660ac5a1ff98({
    ref,
    onInteractOutside: isDismissable && isOpen ? onInteractOutside : null,
    onInteractOutsideStart
  });
  let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !shouldCloseOnBlur,
    onBlurWithin: (e) => {
      if (!e.relatedTarget || $9bf71ea28793e738$export$1258395f99bf9cbf(e.relatedTarget)) return;
      if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose();
    }
  });
  let onPointerDownUnderlay = (e) => {
    if (e.target === e.currentTarget) e.preventDefault();
  };
  return {
    overlayProps: {
      onKeyDown,
      ...focusWithinProps
    },
    underlayProps: {
      onPointerDown: onPointerDownUnderlay
    }
  };
}
var popover = tv({
  slots: {
    base: [
      "z-0",
      "relative",
      "bg-transparent",
      "before:content-['']",
      "before:hidden",
      "before:z-[-1]",
      "before:absolute",
      "before:rotate-45",
      "before:w-2.5",
      "before:h-2.5",
      "before:rounded-sm",
      "data-[arrow=true]:before:block",
      "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top]:before:left-1/2",
      "data-[placement=top]:before:-translate-x-1/2",
      "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top-start]:before:left-3",
      "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top-end]:before:right-3",
      "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom]:before:left-1/2",
      "data-[placement=bottom]:before:-translate-x-1/2",
      "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom-start]:before:left-3",
      "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom-end]:before:right-3",
      "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
      "data-[placement=left]:before:top-1/2",
      "data-[placement=left]:before:-translate-y-1/2",
      "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=left-start]:before:top-1/4",
      "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=left-end]:before:bottom-1/4",
      "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
      "data-[placement=right]:before:top-1/2",
      "data-[placement=right]:before:-translate-y-1/2",
      "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=right-start]:before:top-1/4",
      "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=right-end]:before:bottom-1/4",
      ...dataFocusVisibleClasses
    ],
    content: [
      "z-10",
      "px-2.5",
      "py-1",
      "w-full",
      "inline-flex",
      "flex-col",
      "items-center",
      "justify-center",
      "box-border",
      "subpixel-antialiased",
      "outline-none",
      "box-border"
    ],
    trigger: ["z-10"],
    backdrop: ["hidden"],
    arrow: []
  },
  variants: {
    size: {
      sm: { content: "text-tiny" },
      md: { content: "text-small" },
      lg: { content: "text-medium" }
    },
    color: {
      default: {
        base: "before:bg-content1 before:shadow-small",
        content: "bg-content1"
      },
      foreground: {
        base: "before:bg-foreground",
        content: colorVariants.solid.foreground
      },
      primary: {
        base: "before:bg-primary",
        content: colorVariants.solid.primary
      },
      secondary: {
        base: "before:bg-secondary",
        content: colorVariants.solid.secondary
      },
      success: {
        base: "before:bg-success",
        content: colorVariants.solid.success
      },
      warning: {
        base: "before:bg-warning",
        content: colorVariants.solid.warning
      },
      danger: {
        base: "before:bg-danger",
        content: colorVariants.solid.danger
      }
    },
    radius: {
      none: { content: "rounded-none" },
      sm: { content: "rounded-small" },
      md: { content: "rounded-medium" },
      lg: { content: "rounded-large" },
      full: { content: "rounded-full" }
    },
    shadow: {
      sm: {
        content: "shadow-small"
      },
      md: {
        content: "shadow-medium"
      },
      lg: {
        content: "shadow-large"
      }
    },
    backdrop: {
      transparent: {},
      opaque: {
        backdrop: "bg-overlay/50 backdrop-opacity-disabled"
      },
      blur: {
        backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"
      }
    },
    triggerScaleOnOpen: {
      true: {
        trigger: ["aria-expanded:scale-[0.97]", "aria-expanded:opacity-70", "subpixel-antialiased"]
      },
      false: {}
    },
    disableAnimation: {
      true: {
        base: "animate-none"
      }
    },
    isTriggerDisabled: {
      true: {
        trigger: "opacity-disabled pointer-events-none"
      },
      false: {}
    }
  },
  defaultVariants: {
    color: "default",
    radius: "lg",
    size: "md",
    shadow: "md",
    backdrop: "transparent",
    triggerScaleOnOpen: true
  },
  compoundVariants: [
    {
      backdrop: ["opaque", "blur"],
      class: {
        backdrop: "block w-full h-full fixed inset-0 -z-30"
      }
    }
  ]
});
var TRANSITION_EASINGS = {
  ease: [0.36, 0.66, 0.4, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: [0.155, 1.105, 0.295, 1.12],
  springOut: [0.57, -0.15, 0.62, 0.07],
  softSpring: [0.16, 1.11, 0.3, 1.02]
};
var TRANSITION_VARIANTS = {
  scaleSpring: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.2
      }
    },
    exit: {
      transform: "scale(0.85)",
      opacity: 0,
      transition: {
        type: "easeOut",
        duration: 0.15
      }
    }
  },
  scaleSpringOpacity: {
    initial: {
      opacity: 0,
      transform: "scale(0.8)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transform: "scale(0.96)",
      transition: {
        type: "easeOut",
        bounce: 0,
        duration: 0.15
      }
    }
  },
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  scaleFadeIn: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: TRANSITION_EASINGS.easeIn
      }
    },
    exit: {
      transform: "scale(0.95)",
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: TRANSITION_EASINGS.easeOut
      }
    }
  },
  scaleInOut: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      transform: "scale(1.03)",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  },
  fade: {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  },
  collapse: {
    enter: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          bounce: 0,
          duration: 0.3
        },
        opacity: {
          easings: "ease",
          duration: 0.4
        }
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        easings: "ease",
        duration: 0.3
      }
    }
  }
};
var getTransformOrigins = (placement) => {
  const origins = {
    top: {
      originY: 1
    },
    bottom: {
      originY: 0
    },
    left: {
      originX: 1
    },
    right: {
      originX: 0
    },
    "top-start": {
      originX: 0,
      originY: 1
    },
    "top-end": {
      originX: 1,
      originY: 1
    },
    "bottom-start": {
      originX: 0,
      originY: 0
    },
    "bottom-end": {
      originX: 1,
      originY: 0
    },
    "right-start": {
      originX: 0,
      originY: 0
    },
    "right-end": {
      originX: 0,
      originY: 1
    },
    "left-start": {
      originX: 1,
      originY: 0
    },
    "left-end": {
      originX: 1,
      originY: 1
    }
  };
  return (origins == null ? void 0 : origins[placement]) || {};
};
var toReactAriaPlacement = (placement) => {
  const mapPositions = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    "top-start": "top start",
    "top-end": "top end",
    "bottom-start": "bottom start",
    "bottom-end": "bottom end",
    "left-start": "left top",
    "left-end": "left bottom",
    "right-start": "right top",
    "right-end": "right bottom"
  };
  return mapPositions[placement];
};
var getShouldUseAxisPlacement = (axisPlacement, overlayPlacement) => {
  if (overlayPlacement.includes("-")) {
    const [position] = overlayPlacement.split("-");
    if (position.includes(axisPlacement)) {
      return false;
    }
  }
  return true;
};
var getArrowPlacement = (dynamicPlacement, placement) => {
  if (placement.includes("-")) {
    const [, position] = placement.split("-");
    return `${dynamicPlacement}-${position}`;
  }
  return dynamicPlacement;
};
function $fc909762b330b746$export$61c6a8c84e605fb6(props) {
  let [isOpen, setOpen] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(props.isOpen, props.defaultOpen || false, props.onOpenChange);
  const open = reactExports.useCallback(() => {
    setOpen(true);
  }, [
    setOpen
  ]);
  const close = reactExports.useCallback(() => {
    setOpen(false);
  }, [
    setOpen
  ]);
  const toggle = reactExports.useCallback(() => {
    setOpen(!isOpen);
  }, [
    setOpen,
    isOpen
  ]);
  return {
    isOpen,
    setOpen,
    open,
    close,
    toggle
  };
}
export {
  $9daab02d461809db$export$683480f191c0e3ea as $,
  TRANSITION_EASINGS as T,
  $fc909762b330b746$export$61c6a8c84e605fb6 as a,
  $2a41e45df1593e64$export$d39e1813b3bdd0e1 as b,
  $a11501f3d1d39e6c$export$ea8f71083e90600f as c,
  TRANSITION_VARIANTS as d,
  getTransformOrigins as e,
  $dd149f63282afbbf$export$f6211563215e3b37 as f,
  getArrowPlacement as g,
  $9bf71ea28793e738$export$20e40289641fbbb6 as h,
  $9bf71ea28793e738$export$2d6ec8fc375ceafa as i,
  getShouldUseAxisPlacement as j,
  popover as p,
  toReactAriaPlacement as t
};
