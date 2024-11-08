import { t as createContext2, j as jsxRuntimeExports, b as reactExports, o as useProviderContext } from "./index-CRCdbRYf.js";
import { t as tv, g as getUniqueID, u as useDOMRef, d as dataAttr, m as mapPropsVariants, o as objectToDeps, c as clsx, f as forwardRef } from "./chunk-N2KXC5ZE-Blp81Z_t.js";
import { $ as $f6c31cce2adf654f$export$45712eceda6fad21, a as $f7dceffc5ad7768b$export$4e328f61c538687f, f as filterDOMProps } from "./useFocusRing-6DVXckHy.js";
import { d as dataFocusVisibleClasses, f as colorVariants, u as collapseAdjacentVariantBorders, $ as $3ef42575df84b30b$export$9d1611c77c2fe928, c as $ff5963eb1fccf552$export$e08e3b67e392101e, e as $6179b936705e76d3$export$ae780daf29e6d456 } from "./chunk-XHQUSKIE-C8hINOKQ.js";
import { $ as $65484d02dcb7eb3e$export$457c3d6518dd4c6f, L as LazyMotion, d as domAnimation, A as AnimatePresence, m } from "./features-animation-DXMUZmFI.js";
import { $ as $e6afbd83fe6ebbd2$export$4c014de7c8940b4c } from "./useFocusable-B9R5QQmh.js";
import { c as clamp } from "./chunk-MNNRULGA-DyzUL4cr.js";
var spinner = tv({
  slots: {
    base: "relative inline-flex flex-col gap-2 items-center justify-center",
    wrapper: "relative flex",
    circle1: [
      "absolute",
      "w-full",
      "h-full",
      "rounded-full",
      "animate-spinner-ease-spin",
      "border-2",
      "border-solid",
      "border-t-transparent",
      "border-l-transparent",
      "border-r-transparent"
    ],
    circle2: [
      "absolute",
      "w-full",
      "h-full",
      "rounded-full",
      "opacity-75",
      "animate-spinner-linear-spin",
      "border-2",
      "border-dotted",
      "border-t-transparent",
      "border-l-transparent",
      "border-r-transparent"
    ],
    label: "text-foreground dark:text-foreground-dark font-regular"
  },
  variants: {
    size: {
      sm: {
        wrapper: "w-5 h-5",
        circle1: "border-2",
        circle2: "border-2",
        label: "text-small"
      },
      md: {
        wrapper: "w-8 h-8",
        circle1: "border-3",
        circle2: "border-3",
        label: "text-medium"
      },
      lg: {
        wrapper: "w-10 h-10",
        circle1: "border-3",
        circle2: "border-3",
        label: "text-large"
      }
    },
    color: {
      current: {
        circle1: "border-b-current",
        circle2: "border-b-current"
      },
      white: {
        circle1: "border-b-white",
        circle2: "border-b-white"
      },
      default: {
        circle1: "border-b-default",
        circle2: "border-b-default"
      },
      primary: {
        circle1: "border-b-primary",
        circle2: "border-b-primary"
      },
      secondary: {
        circle1: "border-b-secondary",
        circle2: "border-b-secondary"
      },
      success: {
        circle1: "border-b-success",
        circle2: "border-b-success"
      },
      warning: {
        circle1: "border-b-warning",
        circle2: "border-b-warning"
      },
      danger: {
        circle1: "border-b-danger",
        circle2: "border-b-danger"
      }
    },
    labelColor: {
      foreground: {
        label: "text-foreground"
      },
      primary: {
        label: "text-primary"
      },
      secondary: {
        label: "text-secondary"
      },
      success: {
        label: "text-success"
      },
      warning: {
        label: "text-warning"
      },
      danger: {
        label: "text-danger"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    labelColor: "foreground"
  }
});
var button = tv({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    "data-[pressed=true]:scale-[0.97]",
    ...dataFocusVisibleClasses
  ],
  variants: {
    variant: {
      solid: "",
      bordered: "border-medium bg-transparent",
      light: "bg-transparent",
      flat: "",
      faded: "border-medium",
      shadow: "",
      ghost: "border-medium bg-transparent"
    },
    size: {
      sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
      md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
      lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large"
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: ""
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
      full: "rounded-full"
    },
    fullWidth: {
      true: "w-full"
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none"
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none"
    },
    isIconOnly: {
      true: "px-0 !gap-0",
      false: "[&>svg]:max-w-[theme(spacing.8)]"
    },
    disableAnimation: {
      true: "!transition-none data-[pressed=true]:scale-100",
      false: "transition-transform-colors-opacity motion-reduce:transition-none"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "default",
    fullWidth: false,
    isDisabled: false,
    isInGroup: false
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "default",
      class: colorVariants.solid.default
    },
    {
      variant: "solid",
      color: "primary",
      class: colorVariants.solid.primary
    },
    {
      variant: "solid",
      color: "secondary",
      class: colorVariants.solid.secondary
    },
    {
      variant: "solid",
      color: "success",
      class: colorVariants.solid.success
    },
    {
      variant: "solid",
      color: "warning",
      class: colorVariants.solid.warning
    },
    {
      variant: "solid",
      color: "danger",
      class: colorVariants.solid.danger
    },
    {
      variant: "shadow",
      color: "default",
      class: colorVariants.shadow.default
    },
    {
      variant: "shadow",
      color: "primary",
      class: colorVariants.shadow.primary
    },
    {
      variant: "shadow",
      color: "secondary",
      class: colorVariants.shadow.secondary
    },
    {
      variant: "shadow",
      color: "success",
      class: colorVariants.shadow.success
    },
    {
      variant: "shadow",
      color: "warning",
      class: colorVariants.shadow.warning
    },
    {
      variant: "shadow",
      color: "danger",
      class: colorVariants.shadow.danger
    },
    {
      variant: "bordered",
      color: "default",
      class: colorVariants.bordered.default
    },
    {
      variant: "bordered",
      color: "primary",
      class: colorVariants.bordered.primary
    },
    {
      variant: "bordered",
      color: "secondary",
      class: colorVariants.bordered.secondary
    },
    {
      variant: "bordered",
      color: "success",
      class: colorVariants.bordered.success
    },
    {
      variant: "bordered",
      color: "warning",
      class: colorVariants.bordered.warning
    },
    {
      variant: "bordered",
      color: "danger",
      class: colorVariants.bordered.danger
    },
    {
      variant: "flat",
      color: "default",
      class: colorVariants.flat.default
    },
    {
      variant: "flat",
      color: "primary",
      class: colorVariants.flat.primary
    },
    {
      variant: "flat",
      color: "secondary",
      class: colorVariants.flat.secondary
    },
    {
      variant: "flat",
      color: "success",
      class: colorVariants.flat.success
    },
    {
      variant: "flat",
      color: "warning",
      class: colorVariants.flat.warning
    },
    {
      variant: "flat",
      color: "danger",
      class: colorVariants.flat.danger
    },
    {
      variant: "faded",
      color: "default",
      class: colorVariants.faded.default
    },
    {
      variant: "faded",
      color: "primary",
      class: colorVariants.faded.primary
    },
    {
      variant: "faded",
      color: "secondary",
      class: colorVariants.faded.secondary
    },
    {
      variant: "faded",
      color: "success",
      class: colorVariants.faded.success
    },
    {
      variant: "faded",
      color: "warning",
      class: colorVariants.faded.warning
    },
    {
      variant: "faded",
      color: "danger",
      class: colorVariants.faded.danger
    },
    {
      variant: "light",
      color: "default",
      class: [colorVariants.light.default, "data-[hover=true]:bg-default/40"]
    },
    {
      variant: "light",
      color: "primary",
      class: [colorVariants.light.primary, "data-[hover=true]:bg-primary/20"]
    },
    {
      variant: "light",
      color: "secondary",
      class: [colorVariants.light.secondary, "data-[hover=true]:bg-secondary/20"]
    },
    {
      variant: "light",
      color: "success",
      class: [colorVariants.light.success, "data-[hover=true]:bg-success/20"]
    },
    {
      variant: "light",
      color: "warning",
      class: [colorVariants.light.warning, "data-[hover=true]:bg-warning/20"]
    },
    {
      variant: "light",
      color: "danger",
      class: [colorVariants.light.danger, "data-[hover=true]:bg-danger/20"]
    },
    {
      variant: "ghost",
      color: "default",
      class: colorVariants.ghost.default
    },
    {
      variant: "ghost",
      color: "primary",
      class: colorVariants.ghost.primary
    },
    {
      variant: "ghost",
      color: "secondary",
      class: colorVariants.ghost.secondary
    },
    {
      variant: "ghost",
      color: "success",
      class: colorVariants.ghost.success
    },
    {
      variant: "ghost",
      color: "warning",
      class: colorVariants.ghost.warning
    },
    {
      variant: "ghost",
      color: "danger",
      class: colorVariants.ghost.danger
    },
    {
      isInGroup: true,
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      size: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: true,
      size: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      size: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: true,
      isRounded: true,
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    {
      isInGroup: true,
      radius: "none",
      class: "rounded-none first:rounded-s-none last:rounded-e-none"
    },
    {
      isInGroup: true,
      radius: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: true,
      radius: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      radius: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: true,
      radius: "full",
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "default",
      className: collapseAdjacentVariantBorders.default
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "primary",
      className: collapseAdjacentVariantBorders.primary
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "secondary",
      className: collapseAdjacentVariantBorders.secondary
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "success",
      className: collapseAdjacentVariantBorders.success
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "warning",
      className: collapseAdjacentVariantBorders.warning
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "danger",
      className: collapseAdjacentVariantBorders.danger
    },
    {
      isIconOnly: true,
      size: "sm",
      class: "min-w-8 w-8 h-8"
    },
    {
      isIconOnly: true,
      size: "md",
      class: "min-w-10 w-10 h-10"
    },
    {
      isIconOnly: true,
      size: "lg",
      class: "min-w-12 w-12 h-12"
    },
    {
      variant: ["solid", "faded", "flat", "bordered", "shadow"],
      class: "data-[hover=true]:opacity-hover"
    }
  ]
});
tv({
  base: "inline-flex items-center justify-center h-auto",
  variants: {
    fullWidth: {
      true: "w-full"
    }
  },
  defaultVariants: {
    fullWidth: false
  }
});
var [ButtonGroupProvider, useButtonGroupContext] = createContext2({
  name: "ButtonGroupContext",
  strict: false
});
function useAriaButton(props, ref) {
  let {
    elementType = "button",
    isDisabled,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    preventFocusOnPress,
    allowFocusWhenDisabled,
    onClick: deprecatedOnClick,
    href,
    target,
    rel,
    type = "button",
    allowTextSelectionOnPress
  } = props;
  let additionalProps;
  if (elementType === "button") {
    additionalProps = {
      type,
      disabled: isDisabled
    };
  } else {
    additionalProps = {
      role: "button",
      tabIndex: isDisabled ? void 0 : 0,
      href: elementType === "a" && isDisabled ? void 0 : href,
      target: elementType === "a" ? target : void 0,
      type: elementType === "input" ? type : void 0,
      disabled: elementType === "input" ? isDisabled : void 0,
      "aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
      rel: elementType === "a" ? rel : void 0
    };
  }
  let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    isDisabled,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    ref
  });
  let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
  if (allowFocusWhenDisabled) {
    focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
  }
  let buttonProps = $3ef42575df84b30b$export$9d1611c77c2fe928(
    focusableProps,
    pressProps,
    $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, { labelable: true })
  );
  return {
    isPressed,
    buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(additionalProps, buttonProps, {
      "aria-haspopup": props["aria-haspopup"],
      "aria-expanded": props["aria-expanded"],
      "aria-controls": props["aria-controls"],
      "aria-pressed": props["aria-pressed"],
      onClick: (e) => {
        deprecatedOnClick == null ? void 0 : deprecatedOnClick(e);
      }
    })
  };
}
var Ripple = (props) => {
  const { ripples = [], motionProps, color = "currentColor", style, onClear } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: ripples.map((ripple) => {
    const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      m.span,
      {
        animate: { transform: "scale(2)", opacity: 0 },
        className: "nextui-ripple",
        exit: { opacity: 0 },
        initial: { transform: "scale(0)", opacity: 0.35 },
        style: {
          position: "absolute",
          backgroundColor: color,
          borderRadius: "100%",
          transformOrigin: "center",
          pointerEvents: "none",
          overflow: "hidden",
          inset: 0,
          zIndex: 0,
          top: ripple.y,
          left: ripple.x,
          width: `${ripple.size}px`,
          height: `${ripple.size}px`,
          ...style
        },
        transition: { duration },
        onAnimationComplete: () => {
          onClear(ripple.key);
        },
        ...motionProps
      }
    ) }) }, ripple.key);
  }) });
};
Ripple.displayName = "NextUI.Ripple";
var ripple_default = Ripple;
function useRipple(props = {}) {
  const [ripples, setRipples] = reactExports.useState([]);
  const onClick = reactExports.useCallback((event) => {
    const trigger = event.currentTarget;
    const size = Math.max(trigger.clientWidth, trigger.clientHeight);
    const rect = trigger.getBoundingClientRect();
    setRipples((prevRipples) => [
      ...prevRipples,
      {
        key: getUniqueID(prevRipples.length.toString()),
        size,
        x: event.clientX - rect.left - size / 2,
        y: event.clientY - rect.top - size / 2
      }
    ]);
  }, []);
  const onClear = reactExports.useCallback((key) => {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key));
  }, []);
  return { ripples, onClick, onClear, ...props };
}
function useButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const groupContext = useButtonGroupContext();
  const globalContext = useProviderContext();
  const isInGroup = !!groupContext;
  const {
    ref,
    as,
    children,
    startContent: startContentProp,
    endContent: endContentProp,
    autoFocus,
    className,
    spinner: spinner2,
    isLoading = false,
    disableRipple: disableRippleProp = false,
    fullWidth = (_a = groupContext == null ? void 0 : groupContext.fullWidth) != null ? _a : false,
    radius = groupContext == null ? void 0 : groupContext.radius,
    size = (_b = groupContext == null ? void 0 : groupContext.size) != null ? _b : "md",
    color = (_c = groupContext == null ? void 0 : groupContext.color) != null ? _c : "default",
    variant = (_d = groupContext == null ? void 0 : groupContext.variant) != null ? _d : "solid",
    disableAnimation = (_f = (_e = groupContext == null ? void 0 : groupContext.disableAnimation) != null ? _e : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _f : false,
    isDisabled: isDisabledProp = (_g = groupContext == null ? void 0 : groupContext.isDisabled) != null ? _g : false,
    isIconOnly = (_h = groupContext == null ? void 0 : groupContext.isIconOnly) != null ? _h : false,
    spinnerPlacement = "start",
    onPress,
    onClick,
    ...otherProps
  } = props;
  const Component = as || "button";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const disableRipple = (_i = disableRippleProp || (globalContext == null ? void 0 : globalContext.disableRipple)) != null ? _i : disableAnimation;
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus
  });
  const isDisabled = isDisabledProp || isLoading;
  const styles = reactExports.useMemo(
    () => button({
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      disableAnimation,
      isIconOnly,
      className
    }),
    [
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      isIconOnly,
      disableAnimation,
      className
    ]
  );
  const { onClick: onRippleClickHandler, onClear: onClearRipple, ripples } = useRipple();
  const handleClick = reactExports.useCallback(
    (e) => {
      if (disableRipple || isDisabled || disableAnimation)
        return;
      domRef.current && onRippleClickHandler(e);
    },
    [disableRipple, isDisabled, disableAnimation, domRef, onRippleClickHandler]
  );
  const { buttonProps: ariaButtonProps, isPressed } = useAriaButton(
    {
      elementType: as,
      isDisabled,
      onPress,
      onClick: $ff5963eb1fccf552$export$e08e3b67e392101e(onClick, handleClick),
      ...otherProps
    },
    domRef
  );
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  const getButtonProps = reactExports.useCallback(
    (props2 = {}) => ({
      "data-disabled": dataAttr(isDisabled),
      "data-focus": dataAttr(isFocused),
      "data-pressed": dataAttr(isPressed),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-loading": dataAttr(isLoading),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        ariaButtonProps,
        focusProps,
        hoverProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        filterDOMProps(props2)
      )
    }),
    [
      isLoading,
      isDisabled,
      isFocused,
      isPressed,
      shouldFilterDOMProps,
      isFocusVisible,
      isHovered,
      ariaButtonProps,
      focusProps,
      hoverProps,
      otherProps
    ]
  );
  const getIconClone = (icon) => reactExports.isValidElement(icon) ? reactExports.cloneElement(icon, {
    "aria-hidden": true,
    focusable: false,
    tabIndex: -1
  }) : null;
  const startContent = getIconClone(startContentProp);
  const endContent = getIconClone(endContentProp);
  const spinnerSize = reactExports.useMemo(() => {
    const buttonSpinnerSizeMap = {
      sm: "sm",
      md: "sm",
      lg: "md"
    };
    return buttonSpinnerSizeMap[size];
  }, [size]);
  const getRippleProps = reactExports.useCallback(
    () => ({ ripples, onClear: onClearRipple }),
    [ripples, onClearRipple]
  );
  return {
    Component,
    children,
    domRef,
    spinner: spinner2,
    styles,
    startContent,
    endContent,
    isLoading,
    spinnerPlacement,
    spinnerSize,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly
  };
}
function useSpinner(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, spinner.variantKeys);
  const { children, className, classNames, label: labelProp, ...otherProps } = props;
  const slots = reactExports.useMemo(() => spinner({ ...variantProps }), [objectToDeps(variantProps)]);
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const label = labelProp || children;
  const ariaLabel = reactExports.useMemo(() => {
    if (label && typeof label === "string") {
      return label;
    }
    return !otherProps["aria-label"] ? "Loading" : "";
  }, [children, label, otherProps["aria-label"]]);
  const getSpinnerProps = reactExports.useCallback(
    () => ({
      "aria-label": ariaLabel,
      className: slots.base({
        class: baseStyles
      }),
      ...otherProps
    }),
    [ariaLabel, slots, baseStyles, otherProps]
  );
  return { label, slots, classNames, getSpinnerProps };
}
var Spinner = forwardRef((props, ref) => {
  const { slots, classNames, label, getSpinnerProps } = useSpinner({ ...props });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, ...getSpinnerProps(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: slots.circle1({ class: classNames == null ? void 0 : classNames.circle1 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: slots.circle2({ class: classNames == null ? void 0 : classNames.circle2 }) })
    ] }),
    label && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: slots.label({ class: classNames == null ? void 0 : classNames.label }), children: label })
  ] });
});
Spinner.displayName = "NextUI.Spinner";
var spinner_default = Spinner;
var Button = forwardRef((props, ref) => {
  const {
    Component,
    domRef,
    children,
    styles,
    spinnerSize,
    spinner: spinner2 = /* @__PURE__ */ jsxRuntimeExports.jsx(spinner_default, { color: "current", size: spinnerSize }),
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly
  } = useButton({ ...props, ref });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ref: domRef, className: styles, ...getButtonProps(), children: [
    startContent,
    isLoading && spinnerPlacement === "start" && spinner2,
    isLoading && isIconOnly ? null : children,
    isLoading && spinnerPlacement === "end" && spinner2,
    endContent,
    !disableRipple && /* @__PURE__ */ jsxRuntimeExports.jsx(ripple_default, { ...getRippleProps() })
  ] });
});
Button.displayName = "NextUI.Button";
var button_default = Button;
export {
  button_default as b,
  useAriaButton as u
};
