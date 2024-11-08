import { b as reactExports, o as useProviderContext, j as jsxRuntimeExports, a6 as $f57aed4a881a3485$export$b47c3594eab58386 } from "./index-BgyoVvld.js";
import { a as $fc909762b330b746$export$61c6a8c84e605fb6, b as $2a41e45df1593e64$export$d39e1813b3bdd0e1, c as $a11501f3d1d39e6c$export$ea8f71083e90600f, p as popover, g as getArrowPlacement, t as toReactAriaPlacement, d as TRANSITION_VARIANTS, e as getTransformOrigins } from "./useOverlayTriggerState-BKZ-Li1j.js";
import { e as $6179b936705e76d3$export$ae780daf29e6d456, $ as $3ef42575df84b30b$export$9d1611c77c2fe928, g as $bdb11010cef70236$export$f680877a34711e37, b as $507fabe10e71c6fb$export$630ff653c5ada6a9, h as $507fabe10e71c6fb$export$b9b3dfddab17db27 } from "./chunk-XHQUSKIE-kpJhvuYQ.js";
import { $ as $65484d02dcb7eb3e$export$457c3d6518dd4c6f, L as LazyMotion, d as domAnimation, m, A as AnimatePresence } from "./features-animation-DpivVBXV.js";
import { $ as $e6afbd83fe6ebbd2$export$4c014de7c8940b4c } from "./useFocusable-BHKaAMEV.js";
import { m as mapPropsVariants, b as createDOMRef, o as objectToDeps, d as dataAttr, c as clsx, f as forwardRef } from "./chunk-N2KXC5ZE-B3rqp_Yo.js";
import { m as mergeRefs } from "./useControlledState-chsM3Wdo.js";
import { u as useSafeLayoutEffect } from "./index-CFMAwm7M.js";
import { w as warn } from "./chunk-RFUEKIFS-5kmiI8xu.js";
const $8796f90736e175cb$var$TOOLTIP_DELAY = 1500;
const $8796f90736e175cb$var$TOOLTIP_COOLDOWN = 500;
let $8796f90736e175cb$var$tooltips = {};
let $8796f90736e175cb$var$tooltipId = 0;
let $8796f90736e175cb$var$globalWarmedUp = false;
let $8796f90736e175cb$var$globalWarmUpTimeout = null;
let $8796f90736e175cb$var$globalCooldownTimeout = null;
function $8796f90736e175cb$export$4d40659c25ecb50b(props = {}) {
  let { delay = $8796f90736e175cb$var$TOOLTIP_DELAY, closeDelay = $8796f90736e175cb$var$TOOLTIP_COOLDOWN } = props;
  let { isOpen, open, close } = $fc909762b330b746$export$61c6a8c84e605fb6(props);
  let id = reactExports.useMemo(() => `${++$8796f90736e175cb$var$tooltipId}`, []);
  let closeTimeout = reactExports.useRef();
  let ensureTooltipEntry = () => {
    $8796f90736e175cb$var$tooltips[id] = hideTooltip;
  };
  let closeOpenTooltips = () => {
    for (let hideTooltipId in $8796f90736e175cb$var$tooltips) if (hideTooltipId !== id) {
      $8796f90736e175cb$var$tooltips[hideTooltipId](true);
      delete $8796f90736e175cb$var$tooltips[hideTooltipId];
    }
  };
  let showTooltip = () => {
    clearTimeout(closeTimeout.current);
    closeTimeout.current = null;
    closeOpenTooltips();
    ensureTooltipEntry();
    $8796f90736e175cb$var$globalWarmedUp = true;
    open();
    if ($8796f90736e175cb$var$globalWarmUpTimeout) {
      clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
      $8796f90736e175cb$var$globalWarmUpTimeout = null;
    }
    if ($8796f90736e175cb$var$globalCooldownTimeout) {
      clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
      $8796f90736e175cb$var$globalCooldownTimeout = null;
    }
  };
  let hideTooltip = (immediate) => {
    if (immediate || closeDelay <= 0) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
      close();
    } else if (!closeTimeout.current) closeTimeout.current = setTimeout(() => {
      closeTimeout.current = null;
      close();
    }, closeDelay);
    if ($8796f90736e175cb$var$globalWarmUpTimeout) {
      clearTimeout($8796f90736e175cb$var$globalWarmUpTimeout);
      $8796f90736e175cb$var$globalWarmUpTimeout = null;
    }
    if ($8796f90736e175cb$var$globalWarmedUp) {
      if ($8796f90736e175cb$var$globalCooldownTimeout) clearTimeout($8796f90736e175cb$var$globalCooldownTimeout);
      $8796f90736e175cb$var$globalCooldownTimeout = setTimeout(() => {
        delete $8796f90736e175cb$var$tooltips[id];
        $8796f90736e175cb$var$globalCooldownTimeout = null;
        $8796f90736e175cb$var$globalWarmedUp = false;
      }, Math.max($8796f90736e175cb$var$TOOLTIP_COOLDOWN, closeDelay));
    }
  };
  let warmupTooltip = () => {
    closeOpenTooltips();
    ensureTooltipEntry();
    if (!isOpen && !$8796f90736e175cb$var$globalWarmUpTimeout && !$8796f90736e175cb$var$globalWarmedUp) $8796f90736e175cb$var$globalWarmUpTimeout = setTimeout(() => {
      $8796f90736e175cb$var$globalWarmUpTimeout = null;
      $8796f90736e175cb$var$globalWarmedUp = true;
      showTooltip();
    }, delay);
    else if (!isOpen) showTooltip();
  };
  reactExports.useEffect(() => {
    return () => {
      clearTimeout(closeTimeout.current);
      let tooltip = $8796f90736e175cb$var$tooltips[id];
      if (tooltip) delete $8796f90736e175cb$var$tooltips[id];
    };
  }, [
    id
  ]);
  return {
    isOpen,
    open: (immediate) => {
      if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
      else showTooltip();
    },
    close: hideTooltip
  };
}
function $326e436e94273fe1$export$1c4b08e0eca38426(props, state) {
  let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
    labelable: true
  });
  let { hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({
    onHoverStart: () => state === null || state === void 0 ? void 0 : state.open(true),
    onHoverEnd: () => state === null || state === void 0 ? void 0 : state.close()
  });
  return {
    tooltipProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, hoverProps, {
      role: "tooltip"
    })
  };
}
function $4e1b34546679e357$export$a6da6c504e4bba8b(props, state, ref) {
  let { isDisabled, trigger } = props;
  let tooltipId = $bdb11010cef70236$export$f680877a34711e37();
  let isHovered = reactExports.useRef(false);
  let isFocused = reactExports.useRef(false);
  let handleShow = () => {
    if (isHovered.current || isFocused.current) state.open(isFocused.current);
  };
  let handleHide = (immediate) => {
    if (!isHovered.current && !isFocused.current) state.close(immediate);
  };
  reactExports.useEffect(() => {
    let onKeyDown = (e) => {
      if (ref && ref.current) {
        if (e.key === "Escape") {
          e.stopPropagation();
          state.close(true);
        }
      }
    };
    if (state.isOpen) {
      document.addEventListener("keydown", onKeyDown, true);
      return () => {
        document.removeEventListener("keydown", onKeyDown, true);
      };
    }
  }, [
    ref,
    state
  ]);
  let onHoverStart = () => {
    if (trigger === "focus") return;
    if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === "pointer") isHovered.current = true;
    else isHovered.current = false;
    handleShow();
  };
  let onHoverEnd = () => {
    if (trigger === "focus") return;
    isFocused.current = false;
    isHovered.current = false;
    handleHide();
  };
  let onPressStart = () => {
    isFocused.current = false;
    isHovered.current = false;
    handleHide(true);
  };
  let onFocus = () => {
    let isVisible = $507fabe10e71c6fb$export$b9b3dfddab17db27();
    if (isVisible) {
      isFocused.current = true;
      handleShow();
    }
  };
  let onBlur = () => {
    isFocused.current = false;
    isHovered.current = false;
    handleHide(true);
  };
  let { hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled,
    onHoverStart,
    onHoverEnd
  });
  let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c({
    isDisabled,
    onFocus,
    onBlur
  }, ref);
  return {
    triggerProps: {
      "aria-describedby": state.isOpen ? tooltipId : void 0,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(focusableProps, hoverProps, {
        onPointerDown: onPressStart,
        onKeyDown: onPressStart
      })
    },
    tooltipProps: {
      id: tooltipId
    }
  };
}
function useTooltip(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, popover.variantKeys);
  const {
    ref,
    as,
    isOpen: isOpenProp,
    content,
    children,
    defaultOpen,
    onOpenChange,
    isDisabled,
    trigger: triggerAction,
    shouldFlip = true,
    containerPadding = 12,
    placement: placementProp = "top",
    delay = 0,
    closeDelay = 500,
    showArrow = false,
    offset = 7,
    crossOffset = 0,
    isDismissable,
    shouldCloseOnBlur = true,
    portalContainer,
    isKeyboardDismissDisabled = false,
    updatePositionDeps = [],
    shouldCloseOnInteractOutside,
    className,
    onClose,
    motionProps,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "div";
  const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const state = $8796f90736e175cb$export$4d40659c25ecb50b({
    delay,
    closeDelay,
    isDisabled,
    defaultOpen,
    isOpen: isOpenProp,
    onOpenChange: (isOpen2) => {
      onOpenChange == null ? void 0 : onOpenChange(isOpen2);
      if (!isOpen2) {
        onClose == null ? void 0 : onClose();
      }
    }
  });
  const triggerRef = reactExports.useRef(null);
  const overlayRef = reactExports.useRef(null);
  const tooltipId = reactExports.useId();
  const isOpen = state.isOpen && !isDisabled;
  reactExports.useImperativeHandle(
    ref,
    () => createDOMRef(overlayRef)
  );
  const { triggerProps, tooltipProps: triggerTooltipProps } = $4e1b34546679e357$export$a6da6c504e4bba8b(
    {
      isDisabled,
      trigger: triggerAction
    },
    state,
    triggerRef
  );
  const { tooltipProps } = $326e436e94273fe1$export$1c4b08e0eca38426(
    {
      isOpen,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(props, triggerTooltipProps)
    },
    state
  );
  const {
    overlayProps: positionProps,
    placement,
    updatePosition
  } = $2a41e45df1593e64$export$d39e1813b3bdd0e1({
    isOpen,
    targetRef: triggerRef,
    placement: toReactAriaPlacement(placementProp),
    overlayRef,
    offset: showArrow ? offset + 3 : offset,
    crossOffset,
    shouldFlip,
    containerPadding
  });
  useSafeLayoutEffect(() => {
    if (!updatePositionDeps.length)
      return;
    updatePosition();
  }, updatePositionDeps);
  const { overlayProps } = $a11501f3d1d39e6c$export$ea8f71083e90600f(
    {
      isOpen,
      onClose: state.close,
      isDismissable,
      shouldCloseOnBlur,
      isKeyboardDismissDisabled,
      shouldCloseOnInteractOutside
    },
    overlayRef
  );
  const slots = reactExports.useMemo(
    () => {
      var _a2, _b2, _c;
      return popover({
        ...variantProps,
        disableAnimation,
        radius: (_a2 = originalProps == null ? void 0 : originalProps.radius) != null ? _a2 : "md",
        size: (_b2 = originalProps == null ? void 0 : originalProps.size) != null ? _b2 : "md",
        shadow: (_c = originalProps == null ? void 0 : originalProps.shadow) != null ? _c : "sm"
      });
    },
    [
      objectToDeps(variantProps),
      disableAnimation,
      originalProps == null ? void 0 : originalProps.radius,
      originalProps == null ? void 0 : originalProps.size,
      originalProps == null ? void 0 : originalProps.shadow
    ]
  );
  const getTriggerProps = reactExports.useCallback(
    (props2 = {}, _ref = null) => ({
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(triggerProps, props2),
      ref: mergeRefs(_ref, triggerRef),
      "aria-describedby": isOpen ? tooltipId : void 0
    }),
    [triggerProps, isOpen, tooltipId, state]
  );
  const getTooltipProps = reactExports.useCallback(
    () => ({
      ref: overlayRef,
      "data-slot": "base",
      "data-open": dataAttr(isOpen),
      "data-arrow": dataAttr(showArrow),
      "data-disabled": dataAttr(isDisabled),
      "data-placement": getArrowPlacement(placement, placementProp),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(tooltipProps, overlayProps, otherProps),
      style: $3ef42575df84b30b$export$9d1611c77c2fe928(positionProps.style, otherProps.style, props.style),
      className: slots.base({ class: classNames == null ? void 0 : classNames.base }),
      id: tooltipId
    }),
    [
      slots,
      isOpen,
      showArrow,
      isDisabled,
      placement,
      placementProp,
      tooltipProps,
      overlayProps,
      otherProps,
      positionProps,
      props,
      tooltipId
    ]
  );
  const getTooltipContentProps = reactExports.useCallback(
    () => ({
      "data-slot": "content",
      "data-open": dataAttr(isOpen),
      "data-arrow": dataAttr(showArrow),
      "data-disabled": dataAttr(isDisabled),
      "data-placement": getArrowPlacement(placement, placementProp),
      className: slots.content({ class: clsx(classNames == null ? void 0 : classNames.content, className) })
    }),
    [slots, isOpen, showArrow, isDisabled, placement, placementProp, classNames]
  );
  return {
    Component,
    content,
    children,
    isOpen,
    triggerRef,
    showArrow,
    portalContainer,
    placement: placementProp,
    disableAnimation,
    isDisabled,
    motionProps,
    getTooltipContentProps,
    getTriggerProps,
    getTooltipProps
  };
}
var Tooltip = forwardRef((props, ref) => {
  const {
    Component,
    children,
    content,
    isOpen,
    portalContainer,
    placement,
    disableAnimation,
    motionProps,
    getTriggerProps,
    getTooltipProps,
    getTooltipContentProps
  } = useTooltip({
    ...props,
    ref
  });
  let trigger;
  try {
    const childrenNum = reactExports.Children.count(children);
    if (childrenNum !== 1)
      throw new Error();
    if (!reactExports.isValidElement(children)) {
      trigger = /* @__PURE__ */ jsxRuntimeExports.jsx("p", { ...getTriggerProps(), children });
    } else {
      const child = children;
      trigger = reactExports.cloneElement(child, getTriggerProps(child.props, child.ref));
    }
  } catch (error) {
    trigger = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {});
    warn("Tooltip must have only one child node. Please, check your code.");
  }
  const { ref: tooltipRef, id, style, ...otherTooltipProps } = getTooltipProps();
  const animatedContent = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: tooltipRef, id, style, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    m.div,
    {
      animate: "enter",
      exit: "exit",
      initial: "exit",
      variants: TRANSITION_VARIANTS.scaleSpring,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(motionProps, otherTooltipProps),
      style: {
        ...getTransformOrigins(placement)
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...getTooltipContentProps(), children: content })
    }
  ) }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    trigger,
    disableAnimation && isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx($f57aed4a881a3485$export$b47c3594eab58386, { portalContainer, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: tooltipRef, id, style, ...otherTooltipProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...getTooltipContentProps(), children: content }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx($f57aed4a881a3485$export$b47c3594eab58386, { portalContainer, children: animatedContent }) : null })
  ] });
});
Tooltip.displayName = "NextUI.Tooltip";
var tooltip_default = Tooltip;
export {
  tooltip_default as t
};
