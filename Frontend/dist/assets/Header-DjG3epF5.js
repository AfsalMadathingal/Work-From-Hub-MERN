import { j as jsxRuntimeExports, G as $ea8dcbcb9ea1b556$export$9a302a45f65d0572, H as $ea8dcbcb9ea1b556$export$7e924b3091a3bd18, I as $ea8dcbcb9ea1b556$export$efa8c9099e530235, o as useProviderContext, b as reactExports, t as createContext2, a as useDispatch, c as useSelector, u as useNavigate, z as setUser, A as setIsAuthenticated, _ as _t } from "./index-CRCdbRYf.js";
import { x as logout } from "./UserRouter-k4GHkO3b.js";
import { T as ThemeToggle } from "./Footer-C6GpN6k1.js";
import { t as tv, m as mapPropsVariants, u as useDOMRef, o as objectToDeps, d as dataAttr, f as forwardRef, c as clsx } from "./chunk-N2KXC5ZE-Blp81Z_t.js";
import { d as dataFocusVisibleClasses, $ as $3ef42575df84b30b$export$9d1611c77c2fe928 } from "./chunk-XHQUSKIE-C8hINOKQ.js";
import { R as ReactRemoveScroll, c as $337b884510726a0d$export$c6fdb837b070b4ff, p as pickChildren, d as dropdown_default, e as dropdown_trigger_default, f as dropdown_menu_default, m as menu_item_base_default } from "./chunk-3YEK3JGC-cX8-fyRH.js";
import { $ as $65484d02dcb7eb3e$export$457c3d6518dd4c6f, A as AnimatePresence, L as LazyMotion, d as domAnimation, m } from "./features-animation-DXMUZmFI.js";
import { T as TRANSITION_EASINGS, $ as $9daab02d461809db$export$683480f191c0e3ea } from "./useOverlayTriggerState-DxxZd4vX.js";
import { $ as $458b0a5536c1a7cf$export$40bfa8c7b0832715 } from "./useControlledState-zThHW1ja.js";
import { $ as $e6afbd83fe6ebbd2$export$4c014de7c8940b4c } from "./useFocusable-B9R5QQmh.js";
import { $ as $f6c31cce2adf654f$export$45712eceda6fad21, a as $f7dceffc5ad7768b$export$4e328f61c538687f } from "./useFocusRing-6DVXckHy.js";
import { a as avatar_default } from "./chunk-QXREVWCS-c8bsRa8m.js";
var navbar = tv({
  slots: {
    base: [
      "flex",
      "z-40",
      "w-full",
      "h-auto",
      "items-center",
      "justify-center",
      "data-[menu-open=true]:border-none"
    ],
    wrapper: [
      "z-40",
      "flex",
      "px-6",
      "gap-4",
      "w-full",
      "flex-row",
      "relative",
      "flex-nowrap",
      "items-center",
      "justify-between",
      "h-[var(--navbar-height)]"
    ],
    toggle: [
      "group",
      "flex",
      "items-center",
      "justify-center",
      "w-6",
      "h-full",
      "outline-none",
      "rounded-small",
      "tap-highlight-transparent",
      ...dataFocusVisibleClasses
    ],
    srOnly: ["sr-only"],
    toggleIcon: [
      "w-full",
      "h-full",
      "pointer-events-none",
      "flex",
      "flex-col",
      "items-center",
      "justify-center",
      "text-inherit",
      "group-data-[pressed=true]:opacity-70",
      "transition-opacity",
      "before:content-['']",
      "before:block",
      "before:h-px",
      "before:w-6",
      "before:bg-current",
      "before:transition-transform",
      "before:duration-150",
      "before:-translate-y-1",
      "before:rotate-0",
      "group-data-[open=true]:before:translate-y-px",
      "group-data-[open=true]:before:rotate-45",
      "after:content-['']",
      "after:block",
      "after:h-px",
      "after:w-6",
      "after:bg-current",
      "after:transition-transform",
      "after:duration-150",
      "after:translate-y-1",
      "after:rotate-0",
      "group-data-[open=true]:after:translate-y-0",
      "group-data-[open=true]:after:-rotate-45"
    ],
    brand: [
      "flex",
      "basis-0",
      "flex-row",
      "flex-grow",
      "flex-nowrap",
      "justify-start",
      "bg-transparent",
      "items-center",
      "no-underline",
      "text-medium",
      "whitespace-nowrap",
      "box-border"
    ],
    content: [
      "flex",
      "gap-4",
      "h-full",
      "flex-row",
      "flex-nowrap",
      "items-center",
      "data-[justify=start]:justify-start",
      "data-[justify=start]:flex-grow",
      "data-[justify=start]:basis-0",
      "data-[justify=center]:justify-center",
      "data-[justify=end]:justify-end",
      "data-[justify=end]:flex-grow",
      "data-[justify=end]:basis-0"
    ],
    item: [
      "text-medium",
      "whitespace-nowrap",
      "box-border",
      "list-none",
      "data-[active=true]:font-semibold"
    ],
    menu: [
      "z-30",
      "px-6",
      "pt-2",
      "fixed",
      "flex",
      "max-w-full",
      "top-[var(--navbar-height)]",
      "inset-x-0",
      "bottom-0",
      "w-screen",
      "flex-col",
      "gap-2",
      "overflow-y-auto"
    ],
    menuItem: [
      "text-large",
      "data-[active=true]:font-semibold"
    ]
  },
  variants: {
    position: {
      static: {
        base: "static"
      },
      sticky: {
        base: "sticky top-0 inset-x-0"
      }
    },
    maxWidth: {
      sm: {
        wrapper: "max-w-[640px]"
      },
      md: {
        wrapper: "max-w-[768px]"
      },
      lg: {
        wrapper: "max-w-[1024px]"
      },
      xl: {
        wrapper: "max-w-[1280px]"
      },
      "2xl": {
        wrapper: "max-w-[1536px]"
      },
      full: {
        wrapper: "max-w-full"
      }
    },
    hideOnScroll: {
      true: {
        base: ["sticky", "top-0", "inset-x-0"]
      }
    },
    isBordered: {
      true: {
        base: ["border-b", "border-divider"]
      }
    },
    isBlurred: {
      false: {
        base: "bg-background",
        menu: "bg-background"
      },
      true: {
        base: [
          "backdrop-blur-lg",
          "data-[menu-open=true]:backdrop-blur-xl",
          "backdrop-saturate-150",
          "bg-background/70"
        ],
        menu: ["backdrop-blur-xl", "backdrop-saturate-150", "bg-background/70"]
      }
    },
    disableAnimation: {
      true: {
        menu: ["hidden", "h-[calc(100dvh_-_var(--navbar-height))]", "data-[open=true]:flex"]
      }
    }
  },
  defaultVariants: {
    maxWidth: "lg",
    position: "sticky",
    isBlurred: true
  }
});
var link = tv({
  base: [
    "relative inline-flex items-center outline-none tap-highlight-transparent",
    ...dataFocusVisibleClasses
  ],
  variants: {
    size: {
      sm: "text-small",
      md: "text-medium",
      lg: "text-large"
    },
    color: {
      foreground: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger"
    },
    underline: {
      none: "no-underline",
      hover: "hover:underline",
      always: "underline",
      active: "active:underline",
      focus: "focus:underline"
    },
    isBlock: {
      true: [
        "px-2",
        "py-1",
        "hover:after:opacity-100",
        "after:content-['']",
        "after:inset-0",
        "after:opacity-0",
        "after:w-full",
        "after:h-full",
        "after:rounded-xl",
        "after:transition-background",
        "after:absolute"
      ],
      false: "hover:opacity-80 active:opacity-disabled transition-opacity"
    },
    isDisabled: {
      true: "opacity-disabled cursor-default pointer-events-none"
    },
    disableAnimation: {
      true: "after:transition-none transition-none"
    }
  },
  compoundVariants: [
    {
      isBlock: true,
      color: "foreground",
      class: "hover:after:bg-foreground/10"
    },
    {
      isBlock: true,
      color: "primary",
      class: "hover:after:bg-primary/20"
    },
    {
      isBlock: true,
      color: "secondary",
      class: "hover:after:bg-secondary/20"
    },
    {
      isBlock: true,
      color: "success",
      class: "hover:after:bg-success/20"
    },
    {
      isBlock: true,
      color: "warning",
      class: "hover:after:bg-warning/20"
    },
    {
      isBlock: true,
      color: "danger",
      class: "hover:after:bg-danger/20"
    },
    {
      underline: ["hover", "always", "active", "focus"],
      class: "underline-offset-4"
    }
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    isBlock: false,
    underline: "none",
    isDisabled: false
  }
});
var linkAnchorClasses = "flex mx-1 text-current self-center";
var LinkIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    shapeRendering: "geometricPrecision",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 3h6v6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 14L21 3" })
    ]
  }
);
function $298d61e98472621b$export$dcf14c9974fe2767(props, ref) {
  let {
    elementType = "a",
    onPress,
    onPressStart,
    onPressEnd,
    // @ts-ignore
    onClick: deprecatedOnClick,
    isDisabled,
    ...otherProps
  } = props;
  let linkProps = {};
  if (elementType !== "a") linkProps = {
    role: "link",
    tabIndex: !isDisabled ? 0 : void 0
  };
  let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
  let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21({
    onPress,
    onPressStart,
    onPressEnd,
    isDisabled,
    ref
  });
  let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(otherProps, {
    labelable: true
  });
  let interactionHandlers = $3ef42575df84b30b$export$9d1611c77c2fe928(focusableProps, pressProps);
  let router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
  let routerLinkProps = $ea8dcbcb9ea1b556$export$7e924b3091a3bd18(props);
  return {
    isPressed,
    linkProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, routerLinkProps, {
      ...interactionHandlers,
      ...linkProps,
      "aria-disabled": isDisabled || void 0,
      "aria-current": props["aria-current"],
      onClick: (e) => {
        var _pressProps_onClick;
        (_pressProps_onClick = pressProps.onClick) === null || _pressProps_onClick === void 0 ? void 0 : _pressProps_onClick.call(pressProps, e);
        if (deprecatedOnClick) {
          deprecatedOnClick(e);
          console.warn("onClick is deprecated, please use onPress");
        }
        if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && // If props are applied to a router Link component, it may have already prevented default.
        !e.isDefaultPrevented() && $ea8dcbcb9ea1b556$export$efa8c9099e530235(e.currentTarget, e) && props.href) {
          e.preventDefault();
          router.open(e.currentTarget, e, props.href, props.routerOptions);
        }
      }
    })
  };
}
function useLink(originalProps) {
  var _a, _b, _c, _d;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, link.variantKeys);
  const {
    ref,
    as,
    children,
    anchorIcon,
    isExternal = false,
    showAnchorIcon = false,
    autoFocus = false,
    className,
    onPress,
    onPressStart,
    onPressEnd,
    onClick,
    ...otherProps
  } = props;
  const Component = as || "a";
  const domRef = useDOMRef(ref);
  const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const { linkProps } = $298d61e98472621b$export$dcf14c9974fe2767(
    {
      ...otherProps,
      onPress,
      onPressStart,
      onPressEnd,
      onClick,
      isDisabled: originalProps.isDisabled,
      elementType: `${as}`
    },
    domRef
  );
  const { isFocused, isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus
  });
  if (isExternal) {
    otherProps.rel = (_c = otherProps.rel) != null ? _c : "noopener noreferrer";
    otherProps.target = (_d = otherProps.target) != null ? _d : "_blank";
  }
  const classNames = reactExports.useMemo(
    () => link({
      ...variantProps,
      disableAnimation,
      className
    }),
    [objectToDeps(variantProps), disableAnimation, className]
  );
  const getLinkProps = reactExports.useCallback(() => {
    return {
      ref: domRef,
      className: classNames,
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(originalProps.isDisabled),
      "data-focus-visible": dataAttr(isFocusVisible),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, linkProps, otherProps)
    };
  }, [classNames, isFocused, isFocusVisible, focusProps, linkProps, otherProps]);
  return { Component, children, anchorIcon, showAnchorIcon, getLinkProps };
}
var Link = forwardRef((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = /* @__PURE__ */ jsxRuntimeExports.jsx(LinkIcon, { className: linkAnchorClasses }),
    getLinkProps
  } = useLink({
    ref,
    ...props
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...getLinkProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    children,
    showAnchorIcon && anchorIcon
  ] }) });
});
Link.displayName = "NextUI.Link";
var link_default = Link;
var [NavbarProvider, useNavbarContext] = createContext2({
  name: "NavbarContext",
  strict: true,
  errorMessage: "useNavbarContext: `context` is undefined. Seems you forgot to wrap component within <Navbar />"
});
var menuVariants = {
  enter: {
    height: "calc(100vh - var(--navbar-height))",
    transition: {
      duration: 0.3,
      easings: "easeOut"
    }
  },
  exit: {
    height: 0,
    transition: {
      duration: 0.25,
      easings: "easeIn"
    }
  }
};
var NavbarMenu = forwardRef((props, ref) => {
  var _a, _b;
  const { className, children, portalContainer, motionProps, style, ...otherProps } = props;
  const domRef = useDOMRef(ref);
  const { slots, isMenuOpen, height, disableAnimation, classNames } = useNavbarContext();
  const styles = clsx(classNames == null ? void 0 : classNames.menu, className);
  const MenuWrapper = reactExports.useCallback(
    ({ children: children2 }) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ReactRemoveScroll, { forwardProps: true, enabled: isMenuOpen, removeScrollBar: false, children: children2 });
    },
    [isMenuOpen]
  );
  const contents = disableAnimation ? /* @__PURE__ */ jsxRuntimeExports.jsx(MenuWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "ul",
    {
      ref: domRef,
      className: (_a = slots.menu) == null ? void 0 : _a.call(slots, { class: styles }),
      "data-open": dataAttr(isMenuOpen),
      style: {
        "--navbar-height": height
      },
      ...otherProps,
      children
    }
  ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: isMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuWrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    m.ul,
    {
      ref: domRef,
      layoutScroll: true,
      animate: "enter",
      className: (_b = slots.menu) == null ? void 0 : _b.call(slots, { class: styles }),
      "data-open": dataAttr(isMenuOpen),
      exit: "exit",
      initial: "exit",
      style: {
        "--navbar-height": height,
        ...style
      },
      variants: menuVariants,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(motionProps, otherProps),
      children
    }
  ) }) }) : null });
  return /* @__PURE__ */ jsxRuntimeExports.jsx($337b884510726a0d$export$c6fdb837b070b4ff, { portalContainer, children: contents });
});
NavbarMenu.displayName = "NextUI.NavbarMenu";
var navbar_menu_default = NavbarMenu;
var hideOnScrollVariants = {
  visible: {
    y: 0,
    transition: {
      ease: TRANSITION_EASINGS.easeOut
    }
  },
  hidden: {
    y: "-100%",
    transition: {
      ease: TRANSITION_EASINGS.easeIn
    }
  }
};
var isBrowser = typeof window !== "undefined";
function getScrollPosition(element) {
  if (!isBrowser)
    return { x: 0, y: 0 };
  if (!element) {
    return { x: window.scrollX, y: window.scrollY };
  }
  return { x: element.scrollLeft, y: element.scrollTop };
}
var useScrollPosition = (props) => {
  const { elementRef, delay = 30, callback, isEnabled } = props;
  const position = reactExports.useRef(
    isEnabled ? getScrollPosition(elementRef == null ? void 0 : elementRef.current) : { x: 0, y: 0 }
  );
  const throttleTimeout = reactExports.useRef(null);
  const handler = reactExports.useCallback(() => {
    const currPos = getScrollPosition(elementRef == null ? void 0 : elementRef.current);
    if (typeof callback === "function") {
      callback({ prevPos: position.current, currPos });
    }
    position.current = currPos;
    throttleTimeout.current = null;
  }, [callback, elementRef]);
  reactExports.useEffect(() => {
    if (!isEnabled)
      return;
    const handleScroll = () => {
      if (delay) {
        if (throttleTimeout.current) {
          clearTimeout(throttleTimeout.current);
        }
        throttleTimeout.current = setTimeout(handler, delay);
      } else {
        handler();
      }
    };
    const target = (elementRef == null ? void 0 : elementRef.current) || window;
    target.addEventListener("scroll", handleScroll);
    return () => {
      target.removeEventListener("scroll", handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, [elementRef == null ? void 0 : elementRef.current, delay, handler, isEnabled]);
  return position.current;
};
function useNavbar(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, navbar.variantKeys);
  const {
    ref,
    as,
    parentRef,
    height = "4rem",
    shouldHideOnScroll = false,
    disableScrollHandler = false,
    onScrollPositionChange,
    isMenuOpen: isMenuOpenProp,
    isMenuDefaultOpen,
    onMenuOpenChange = () => {
    },
    motionProps,
    className,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "nav";
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const domRef = useDOMRef(ref);
  const prevWidth = reactExports.useRef(0);
  const navHeight = reactExports.useRef(0);
  const [isHidden, setIsHidden] = reactExports.useState(false);
  const handleMenuOpenChange = reactExports.useCallback(
    (isOpen) => {
      onMenuOpenChange(isOpen || false);
    },
    [onMenuOpenChange]
  );
  const [isMenuOpen, setIsMenuOpen] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(
    isMenuOpenProp,
    isMenuDefaultOpen != null ? isMenuDefaultOpen : false,
    handleMenuOpenChange
  );
  const updateWidth = () => {
    if (domRef.current) {
      const width = domRef.current.offsetWidth;
      if (width !== prevWidth.current) {
        prevWidth.current = width;
      }
    }
  };
  $9daab02d461809db$export$683480f191c0e3ea({
    ref: domRef,
    onResize: () => {
      var _a2;
      const currentWidth = (_a2 = domRef.current) == null ? void 0 : _a2.offsetWidth;
      if (currentWidth !== prevWidth.current) {
        updateWidth();
        setIsMenuOpen(false);
      }
    }
  });
  reactExports.useEffect(() => {
    var _a2;
    updateWidth();
    navHeight.current = ((_a2 = domRef.current) == null ? void 0 : _a2.offsetHeight) || 0;
  }, []);
  const slots = reactExports.useMemo(
    () => navbar({
      ...variantProps,
      disableAnimation,
      hideOnScroll: shouldHideOnScroll
    }),
    [objectToDeps(variantProps), disableAnimation, shouldHideOnScroll]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  useScrollPosition({
    elementRef: parentRef,
    isEnabled: shouldHideOnScroll || !disableScrollHandler,
    callback: ({ prevPos, currPos }) => {
      onScrollPositionChange == null ? void 0 : onScrollPositionChange(currPos.y);
      if (shouldHideOnScroll) {
        setIsHidden((prev) => {
          const next = currPos.y > prevPos.y && currPos.y > navHeight.current;
          return next !== prev ? next : prev;
        });
      }
    }
  });
  const getBaseProps = (props2 = {}) => ({
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(otherProps, props2),
    "data-hidden": dataAttr(isHidden),
    "data-menu-open": dataAttr(isMenuOpen),
    ref: domRef,
    className: slots.base({ class: clsx(baseStyles, props2 == null ? void 0 : props2.className) }),
    style: {
      "--navbar-height": height,
      ...otherProps == null ? void 0 : otherProps.style,
      ...props2 == null ? void 0 : props2.style
    }
  });
  const getWrapperProps = (props2 = {}) => ({
    ...props2,
    "data-menu-open": dataAttr(isMenuOpen),
    className: slots.wrapper({ class: clsx(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) })
  });
  return {
    Component,
    slots,
    domRef,
    height,
    isHidden,
    disableAnimation,
    shouldHideOnScroll,
    isMenuOpen,
    classNames,
    setIsMenuOpen,
    motionProps,
    getBaseProps,
    getWrapperProps
  };
}
var Navbar = forwardRef((props, ref) => {
  const { children, ...otherProps } = props;
  const context = useNavbar({ ...otherProps, ref });
  const Component = context.Component;
  const [childrenWithoutMenu, menu] = pickChildren(children, navbar_menu_default);
  const content = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { ...context.getWrapperProps(), children: childrenWithoutMenu }),
    menu
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NavbarProvider, { value: context, children: context.shouldHideOnScroll ? /* @__PURE__ */ jsxRuntimeExports.jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    m.nav,
    {
      animate: context.isHidden ? "hidden" : "visible",
      initial: false,
      variants: hideOnScrollVariants,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(context.getBaseProps(), context.motionProps),
      children: content
    }
  ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...context.getBaseProps(), children: content }) });
});
Navbar.displayName = "NextUI.Navbar";
var navbar_default = Navbar;
var NavbarBrand = forwardRef((props, ref) => {
  var _a;
  const { as, className, children, ...otherProps } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const { slots, classNames } = useNavbarContext();
  const styles = clsx(classNames == null ? void 0 : classNames.brand, className);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ref: domRef, className: (_a = slots.brand) == null ? void 0 : _a.call(slots, { class: styles }), ...otherProps, children });
});
NavbarBrand.displayName = "NextUI.NavbarBrand";
var navbar_brand_default = NavbarBrand;
var NavbarContent = forwardRef((props, ref) => {
  var _a;
  const { as, className, children, justify = "start", ...otherProps } = props;
  const Component = as || "ul";
  const domRef = useDOMRef(ref);
  const { slots, classNames } = useNavbarContext();
  const styles = clsx(classNames == null ? void 0 : classNames.content, className);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref: domRef,
      className: (_a = slots.content) == null ? void 0 : _a.call(slots, { class: styles }),
      "data-justify": justify,
      ...otherProps,
      children
    }
  );
});
NavbarContent.displayName = "NextUI.NavbarContent";
var navbar_content_default = NavbarContent;
var NavbarItem = forwardRef((props, ref) => {
  var _a;
  const { as, className, children, isActive, ...otherProps } = props;
  const Component = as || "li";
  const domRef = useDOMRef(ref);
  const { slots, classNames } = useNavbarContext();
  const styles = clsx(classNames == null ? void 0 : classNames.item, className);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref: domRef,
      className: (_a = slots.item) == null ? void 0 : _a.call(slots, { class: styles }),
      "data-active": dataAttr(isActive),
      ...otherProps,
      children
    }
  );
});
NavbarItem.displayName = "NextUI.NavbarItem";
var navbar_item_default = NavbarItem;
function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    dispatch(setUser({}));
    dispatch(setIsAuthenticated(false));
    navigate("/login");
    _t.success("Logged out successfully");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(navbar_default, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(navbar_brand_default, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        onClick: () => navigate("/user/home"),
        className: "w-20 ms-5 cursor-pointer",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.png", alt: "logo" })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(navbar_content_default, { className: "hidden sm:flex gap-6", justify: "center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(navbar_item_default, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(link_default, { color: "foreground", href: "#", children: "Complaints" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(navbar_item_default, { isActive: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        link_default,
        {
          className: "cursor-pointer",
          onPress: () => window.location.href = `/workspace?all=true`,
          color: "warning",
          children: "View all Workspace"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(navbar_item_default, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(link_default, { href: "/business/login", color: "foreground", children: "List your space" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(navbar_item_default, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(navbar_content_default, { as: "div", justify: "end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(dropdown_default, { placement: "bottom-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(dropdown_trigger_default, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        avatar_default,
        {
          isBordered: true,
          as: "button",
          className: "transition-transform",
          color: "warning",
          name: (user == null ? void 0 : user.fullName) || "",
          size: "sm",
          src: (user == null ? void 0 : user.profilePic) || ""
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(dropdown_menu_default, { "aria-label": "Profile Actions", variant: "flat", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(menu_item_base_default, { className: "h-14 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Signed in as" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: (user == null ? void 0 : user.email) || "" })
        ] }, "profile"),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          menu_item_base_default,
          {
            onClick: () => navigate("/user/profile"),
            children: "My Profile"
          },
          "settings"
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          menu_item_base_default,
          {
            onClick: () => navigate("/user/bookings"),
            children: "Bookings"
          },
          "bookings"
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          menu_item_base_default,
          {
            onClick: () => navigate("/user/membership"),
            children: "Membership"
          },
          "membership"
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          menu_item_base_default,
          {
            onClick: () => navigate("/user/wallet"),
            children: "Wallet"
          },
          "wallet"
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(menu_item_base_default, { onClick: handleLogout, color: "danger", children: "Log Out" }, "logout")
      ] })
    ] }) })
  ] }) });
}
export {
  Header as H
};
