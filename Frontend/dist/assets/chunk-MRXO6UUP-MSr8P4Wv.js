import { E as tv, bs as colorVariants, G as dataFocusVisibleClasses, j as jsxRuntimeExports, ae as forwardRef, O as useDOMRef, bH as $ea8dcbcb9ea1b556$export$9a302a45f65d0572, r as reactExports, a0 as $f6c31cce2adf654f$export$45712eceda6fad21, a9 as $f7dceffc5ad7768b$export$4e328f61c538687f, aa as $6179b936705e76d3$export$ae780daf29e6d456, T as dataAttr, U as $3ef42575df84b30b$export$9d1611c77c2fe928, a6 as filterDOMProps, a4 as clsx, a5 as $ff5963eb1fccf552$export$e08e3b67e392101e, bI as $ea8dcbcb9ea1b556$export$efa8c9099e530235, D as $18f2051aff69b9bf$export$43bb16f9c6d9e3f7, bJ as range, N as useProviderContext, M as mapPropsVariants, Q as objectToDeps } from "./index-CTy2qHgP.js";
import { t } from "./index-C--itkGG.js";
var pagination = tv({
  slots: {
    base: ["p-2.5", "-m-2.5", "overflow-x-scroll", "scrollbar-hide"],
    wrapper: [
      "flex",
      "flex-nowrap",
      "h-fit",
      "max-w-fit",
      "relative",
      "gap-1",
      "items-center",
      "overflow-visible"
    ],
    item: ["tap-highlight-transparent", "select-none", "touch-none"],
    prev: "",
    next: "",
    cursor: [
      "absolute",
      "flex",
      "overflow-visible",
      "items-center",
      "justify-center",
      "origin-center",
      "left-0",
      "select-none",
      "touch-none",
      "pointer-events-none",
      "z-20"
    ],
    forwardIcon: "hidden group-hover:block group-data-[focus-visible=true]:block data-[before=true]:rotate-180",
    ellipsis: "group-hover:hidden group-data-[focus-visible=true]:hidden",
    chevronNext: "rotate-180"
  },
  variants: {
    variant: {
      bordered: {
        item: [
          "border-medium",
          "border-default",
          "bg-transparent",
          "data-[hover=true]:bg-default-100"
        ]
      },
      light: {
        item: "bg-transparent"
      },
      flat: {},
      faded: {
        item: ["border-medium", "border-default"]
      }
    },
    color: {
      default: {
        cursor: colorVariants.solid.default
      },
      primary: {
        cursor: colorVariants.solid.primary
      },
      secondary: {
        cursor: colorVariants.solid.secondary
      },
      success: {
        cursor: colorVariants.solid.success
      },
      warning: {
        cursor: colorVariants.solid.warning
      },
      danger: {
        cursor: colorVariants.solid.danger
      }
    },
    size: {
      sm: {},
      md: {},
      lg: {}
    },
    radius: {
      none: {},
      sm: {},
      md: {},
      lg: {},
      full: {}
    },
    isCompact: {
      true: {
        wrapper: "gap-0 shadow-sm",
        item: [
          "shadow-none",
          "first-of-type:rounded-r-none",
          "last-of-type:rounded-l-none",
          "[&:not(:first-of-type):not(:last-of-type)]:rounded-none"
        ],
        prev: "!rounded-r-none",
        next: "!rounded-l-none"
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none"
      }
    },
    showShadow: {
      true: {}
    },
    disableCursorAnimation: {
      true: {
        cursor: "hidden"
      }
    },
    disableAnimation: {
      true: {
        item: "transition-none",
        cursor: "transition-none"
      },
      false: {
        item: ["data-[pressed=true]:scale-[0.97]", "transition-transform-background"],
        cursor: [
          "data-[moving=true]:transition-transform",
          "!data-[moving=true]:duration-300",
          "opacity-0",
          "data-[moving]:opacity-100"
        ]
      }
    }
  },
  defaultVariants: {
    variant: "flat",
    color: "primary",
    size: "md",
    radius: "md",
    isCompact: false,
    isDisabled: false,
    showShadow: false,
    disableCursorAnimation: false
  },
  compoundVariants: [
    {
      showShadow: true,
      color: "default",
      class: {
        cursor: [colorVariants.shadow.default, "shadow-md"]
      }
    },
    {
      showShadow: true,
      color: "primary",
      class: {
        cursor: [colorVariants.shadow.primary, "shadow-md"]
      }
    },
    {
      showShadow: true,
      color: "secondary",
      class: {
        cursor: [colorVariants.shadow.secondary, "shadow-md"]
      }
    },
    {
      showShadow: true,
      color: "success",
      class: {
        cursor: [colorVariants.shadow.success, "shadow-md"]
      }
    },
    {
      showShadow: true,
      color: "warning",
      class: {
        cursor: [colorVariants.shadow.warning, "shadow-md"]
      }
    },
    {
      showShadow: true,
      color: "danger",
      class: {
        cursor: [colorVariants.shadow.danger, "shadow-md"]
      }
    },
    {
      isCompact: true,
      variant: "bordered",
      class: {
        item: "[&:not(:first-of-type)]:ml-[calc(theme(borderWidth.2)*-1)]"
      }
    },
    {
      disableCursorAnimation: true,
      color: "default",
      class: {
        item: [
          "data-[active=true]:bg-default-400",
          "data-[active=true]:border-default-400",
          "data-[active=true]:text-default-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      color: "primary",
      class: {
        item: [
          "data-[active=true]:bg-primary",
          "data-[active=true]:border-primary",
          "data-[active=true]:text-primary-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      color: "secondary",
      class: {
        item: [
          "data-[active=true]:bg-secondary",
          "data-[active=true]:border-secondary",
          "data-[active=true]:text-secondary-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      color: "success",
      class: {
        item: [
          "data-[active=true]:bg-success",
          "data-[active=true]:border-success",
          "data-[active=true]:text-success-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      color: "warning",
      class: {
        item: [
          "data-[active=true]:bg-warning",
          "data-[active=true]:border-warning",
          "data-[active=true]:text-warning-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      color: "danger",
      class: {
        item: [
          "data-[active=true]:bg-danger",
          "data-[active=true]:border-danger",
          "data-[active=true]:text-danger-foreground"
        ]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "default",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-default/50"]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "primary",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-primary/40"]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "secondary",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-secondary/40"]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "success",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-success/40"]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "warning",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-warning/40"]
      }
    },
    {
      disableCursorAnimation: true,
      showShadow: true,
      color: "danger",
      class: {
        item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-danger/40"]
      }
    }
  ],
  compoundSlots: [
    {
      slots: ["item", "prev", "next"],
      class: [
        "flex",
        "flex-wrap",
        "truncate",
        "box-border",
        "outline-none",
        "items-center",
        "justify-center",
        "text-default-foreground",
        ...dataFocusVisibleClasses,
        "data-[disabled=true]:text-default-300",
        "data-[disabled=true]:pointer-events-none"
      ]
    },
    {
      slots: ["item", "prev", "next"],
      variant: ["flat", "bordered", "faded"],
      class: ["shadow-sm"]
    },
    {
      slots: ["item", "prev", "next"],
      variant: "flat",
      class: [
        "bg-default-100",
        "[&[data-hover=true]:not([data-active=true])]:bg-default-200",
        "active:bg-default-300"
      ]
    },
    {
      slots: ["item", "prev", "next"],
      variant: "faded",
      class: [
        "bg-default-50",
        "[&[data-hover=true]:not([data-active=true])]:bg-default-100",
        "active:bg-default-200"
      ]
    },
    {
      slots: ["item", "prev", "next"],
      variant: "light",
      class: [
        "[&[data-hover=true]:not([data-active=true])]:bg-default-100",
        "active:bg-default-200"
      ]
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "sm",
      class: "min-w-8 w-8 h-8 text-tiny"
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "md",
      class: "min-w-9 w-9 h-9 text-small"
    },
    {
      slots: ["item", "cursor", "prev", "next"],
      size: "lg",
      class: "min-w-10 w-10 h-10 text-medium"
    },
    {
      slots: ["wrapper", "item", "cursor", "prev", "next"],
      radius: "none",
      class: "rounded-none"
    },
    {
      slots: ["wrapper", "item", "cursor", "prev", "next"],
      radius: "sm",
      class: "rounded-small"
    },
    {
      slots: ["wrapper", "item", "cursor", "prev", "next"],
      radius: "md",
      class: "rounded-medium"
    },
    {
      slots: ["wrapper", "item", "cursor", "prev", "next"],
      radius: "lg",
      class: "rounded-large"
    },
    {
      slots: ["wrapper", "item", "cursor", "prev", "next"],
      radius: "full",
      class: "rounded-full"
    }
  ]
});
var ForwardIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    shapeRendering: "geometricPrecision",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M13 17l5-5-5-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 17l5-5-5-5" })
    ]
  }
);
var ChevronIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M15.5 19l-7-7 7-7",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5"
      }
    )
  }
);
var EllipsisIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    height: "1em",
    shapeRendering: "geometricPrecision",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", fill: "currentColor", r: "1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "19", cy: "12", fill: "currentColor", r: "1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "5", cy: "12", fill: "currentColor", r: "1" })
    ]
  }
);
var PaginationCursor = forwardRef((props, ref) => {
  const { as, activePage, ...otherProps } = props;
  const Component = as || "span";
  const domRef = useDOMRef(ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ref: domRef, "aria-hidden": true, ...otherProps, children: activePage });
});
PaginationCursor.displayName = "NextUI.PaginationCursor";
var pagination_cursor_default = PaginationCursor;
function usePaginationItem(props) {
  const {
    as,
    ref,
    value,
    children,
    isActive,
    isDisabled,
    onPress,
    onClick,
    getAriaLabel,
    className,
    ...otherProps
  } = props;
  const isLink = !!(props == null ? void 0 : props.href);
  const Component = as || isLink ? "a" : "li";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
  const ariaLabel = reactExports.useMemo(
    () => isActive ? `${getAriaLabel == null ? void 0 : getAriaLabel(value)} active` : getAriaLabel == null ? void 0 : getAriaLabel(value),
    [value, isActive]
  );
  const { isPressed, pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled,
    onPress
  });
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f({});
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  const getItemProps = (props2 = {}) => {
    return {
      ref: domRef,
      role: "button",
      tabIndex: isDisabled ? -1 : 0,
      "aria-label": ariaLabel,
      "aria-current": dataAttr(isActive),
      "aria-disabled": dataAttr(isDisabled),
      "data-disabled": dataAttr(isDisabled),
      "data-active": dataAttr(isActive),
      "data-focus": dataAttr(isFocused),
      "data-hover": dataAttr(isHovered),
      "data-pressed": dataAttr(isPressed),
      "data-focus-visible": dataAttr(isFocusVisible),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(
        props2,
        pressProps,
        focusProps,
        hoverProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        })
      ),
      className: clsx(className, props2.className),
      onClick: (e) => {
        $ff5963eb1fccf552$export$e08e3b67e392101e(pressProps == null ? void 0 : pressProps.onClick, onClick)(e);
        if (!router.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && $ea8dcbcb9ea1b556$export$efa8c9099e530235(e.currentTarget, e) && props2.href) {
          e.preventDefault();
          router.open(e.currentTarget, e, props2.href, props2.routerOptions);
        }
      }
    };
  };
  return {
    Component,
    children,
    ariaLabel,
    isFocused,
    isFocusVisible,
    getItemProps
  };
}
var PaginationItem = forwardRef((props, ref) => {
  const { Component, children, getItemProps } = usePaginationItem({ ...props, ref });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...getItemProps(), children });
});
PaginationItem.displayName = "NextUI.PaginationItem";
var pagination_item_default = PaginationItem;
var PaginationItemType = /* @__PURE__ */ ((PaginationItemType2) => {
  PaginationItemType2["DOTS"] = "dots";
  PaginationItemType2["PREV"] = "prev";
  PaginationItemType2["NEXT"] = "next";
  return PaginationItemType2;
})(PaginationItemType || {});
function usePagination$1(props) {
  const {
    page,
    total,
    siblings = 1,
    boundaries = 1,
    initialPage = 1,
    showControls = false,
    onChange
  } = props;
  const [activePage, setActivePage] = reactExports.useState(page || initialPage);
  const { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const isRTL = direction === "rtl";
  const onChangeActivePage = (newPage) => {
    setActivePage(newPage);
    onChange && onChange(newPage);
  };
  reactExports.useEffect(() => {
    if (page && page !== activePage) {
      setActivePage(page);
    }
  }, [page]);
  const setPage = reactExports.useCallback(
    (pageNumber) => {
      if (pageNumber <= 0) {
        onChangeActivePage(1);
      } else if (pageNumber > total) {
        onChangeActivePage(total);
      } else {
        onChangeActivePage(pageNumber);
      }
    },
    [total, activePage, onChangeActivePage]
  );
  const next = () => isRTL ? setPage(activePage - 1) : setPage(activePage + 1);
  const previous = () => isRTL ? setPage(activePage + 1) : setPage(activePage - 1);
  const first = () => isRTL ? setPage(total) : setPage(1);
  const last = () => isRTL ? setPage(1) : setPage(total);
  const formatRange = reactExports.useCallback(
    (range2) => {
      if (showControls) {
        return isRTL ? [
          "next",
          ...range2,
          "prev"
          /* PREV */
        ] : [
          "prev",
          ...range2,
          "next"
          /* NEXT */
        ];
      }
      return range2;
    },
    [isRTL, showControls]
  );
  const paginationRange = reactExports.useMemo(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;
    if (totalPageNumbers >= total) {
      return formatRange(range(1, total));
    }
    const leftSiblingIndex = Math.max(activePage - siblings, boundaries);
    const rightSiblingIndex = Math.min(activePage + siblings, total - boundaries);
    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1);
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return formatRange([
        ...range(1, leftItemCount),
        "dots",
        ...range(total - (boundaries - 1), total)
      ]);
    }
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return formatRange([
        ...range(1, boundaries),
        "dots",
        ...range(total - rightItemCount, total)
      ]);
    }
    return formatRange([
      ...range(1, boundaries),
      "dots",
      ...range(leftSiblingIndex, rightSiblingIndex),
      "dots",
      ...range(total - boundaries + 1, total)
    ]);
  }, [total, activePage, siblings, boundaries, formatRange]);
  return {
    range: paginationRange,
    activePage,
    setPage,
    next,
    previous,
    first,
    last
  };
}
var CURSOR_TRANSITION_TIMEOUT = 300;
function usePagination(originalProps) {
  var _a, _b, _c, _d;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, pagination.variantKeys);
  const {
    as,
    ref,
    classNames,
    dotsJump = 5,
    loop = false,
    showControls = false,
    total = 1,
    initialPage = 1,
    page,
    siblings,
    boundaries,
    onChange,
    className,
    renderItem,
    getItemAriaLabel: getItemAriaLabelProp,
    ...otherProps
  } = props;
  const Component = as || "nav";
  const domRef = useDOMRef(ref);
  const cursorRef = reactExports.useRef(null);
  const itemsRef = reactExports.useRef();
  const cursorTimer = reactExports.useRef();
  const { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const isRTL = direction === "rtl";
  const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const disableCursorAnimation = (_d = (_c = originalProps == null ? void 0 : originalProps.disableCursorAnimation) != null ? _c : disableAnimation) != null ? _d : false;
  function getItemsRefMap() {
    if (!itemsRef.current) {
      itemsRef.current = /* @__PURE__ */ new Map();
    }
    return itemsRef.current;
  }
  function getItemRef(node, value) {
    const map = getItemsRefMap();
    if (node) {
      map.set(value, node);
    } else {
      map.delete(value);
    }
  }
  function scrollTo(value, skipAnimation) {
    const map = getItemsRefMap();
    const node = map.get(value);
    if (!node || !cursorRef.current)
      return;
    cursorTimer.current && clearTimeout(cursorTimer.current);
    t(node, {
      scrollMode: "always",
      behavior: "smooth",
      block: "start",
      inline: "start",
      boundary: domRef.current
    });
    const { offsetLeft } = node;
    if (skipAnimation) {
      cursorRef.current.setAttribute("data-moving", "false");
      cursorRef.current.style.transform = `translateX(${offsetLeft}px) scale(1)`;
      return;
    }
    cursorRef.current.setAttribute("data-moving", "true");
    cursorRef.current.style.transform = `translateX(${offsetLeft}px) scale(1.1)`;
    cursorTimer.current = setTimeout(() => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translateX(${offsetLeft}px) scale(1)`;
      }
      cursorTimer.current = setTimeout(() => {
        var _a2;
        (_a2 = cursorRef.current) == null ? void 0 : _a2.setAttribute("data-moving", "false");
        cursorTimer.current && clearTimeout(cursorTimer.current);
      }, CURSOR_TRANSITION_TIMEOUT);
    }, CURSOR_TRANSITION_TIMEOUT);
  }
  const { range: range2, activePage, setPage, previous, next, first, last } = usePagination$1({
    page,
    total,
    initialPage,
    siblings,
    boundaries,
    showControls,
    onChange
  });
  const activePageRef = reactExports.useRef(activePage);
  reactExports.useEffect(() => {
    if (activePage && !disableAnimation) {
      scrollTo(activePage, activePage === activePageRef.current);
    }
    activePageRef.current = activePage;
  }, [
    activePage,
    disableAnimation,
    disableCursorAnimation,
    originalProps.dotsJump,
    originalProps.isCompact,
    originalProps.showControls
  ]);
  const slots = reactExports.useMemo(
    () => pagination({
      ...variantProps,
      disableAnimation,
      disableCursorAnimation
    }),
    [objectToDeps(variantProps), disableCursorAnimation, disableAnimation]
  );
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const onNext = () => {
    if (loop && activePage === (isRTL ? 1 : total)) {
      return first();
    }
    return next();
  };
  const onPrevious = () => {
    if (loop && activePage === (isRTL ? total : 1)) {
      return last();
    }
    return previous();
  };
  const getBaseProps = (props2 = {}) => {
    return {
      ...props2,
      ref: domRef,
      role: "navigation",
      "aria-label": props2["aria-label"] || "pagination navigation",
      "data-slot": "base",
      "data-controls": dataAttr(showControls),
      "data-loop": dataAttr(loop),
      "data-dots-jump": dotsJump,
      "data-total": total,
      "data-active-page": activePage,
      className: slots.base({ class: clsx(baseStyles, props2 == null ? void 0 : props2.className) }),
      ...otherProps
    };
  };
  const getWrapperProps = (props2 = {}) => {
    return {
      ...props2,
      "data-slot": "wrapper",
      className: slots.wrapper({ class: clsx(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) })
    };
  };
  const getItemAriaLabel = (page2) => {
    if (!page2)
      return;
    if (getItemAriaLabelProp) {
      return getItemAriaLabelProp(page2);
    }
    switch (page2) {
      case PaginationItemType.DOTS:
        return "dots element";
      case PaginationItemType.PREV:
        return "previous page button";
      case PaginationItemType.NEXT:
        return "next page button";
      case "first":
        return "first page button";
      case "last":
        return "last page button";
      default:
        return `pagination item ${page2}`;
    }
  };
  const getItemProps = (props2 = {}) => {
    return {
      ...props2,
      ref: (node) => getItemRef(node, props2.value),
      "data-slot": "item",
      isActive: props2.value === activePage,
      className: slots.item({ class: clsx(classNames == null ? void 0 : classNames.item, props2 == null ? void 0 : props2.className) }),
      onPress: () => {
        if (props2.value !== activePage) {
          setPage(props2.value);
        }
      }
    };
  };
  const getCursorProps = (props2 = {}) => {
    return {
      ...props2,
      ref: cursorRef,
      activePage,
      "data-slot": "cursor",
      className: slots.cursor({ class: clsx(classNames == null ? void 0 : classNames.cursor, props2 == null ? void 0 : props2.className) })
    };
  };
  return {
    Component,
    showControls,
    dotsJump,
    slots,
    classNames,
    loop,
    total,
    range: range2,
    activePage,
    getItemRef,
    disableAnimation,
    disableCursorAnimation,
    setPage,
    onPrevious,
    onNext,
    renderItem,
    getBaseProps,
    getWrapperProps,
    getItemProps,
    getCursorProps,
    getItemAriaLabel
  };
}
var Pagination = forwardRef((props, ref) => {
  const {
    Component,
    dotsJump,
    slots,
    classNames,
    total,
    range: range2,
    loop,
    activePage,
    disableCursorAnimation,
    disableAnimation,
    renderItem: renderItemProp,
    onNext,
    onPrevious,
    setPage,
    getItemAriaLabel,
    getItemRef,
    getBaseProps,
    getWrapperProps,
    getItemProps,
    getCursorProps
  } = usePagination({ ...props, ref });
  const { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  const isRTL = direction === "rtl";
  const renderItem = reactExports.useCallback(
    (value, index) => {
      const isBefore = index < range2.indexOf(activePage);
      if (renderItemProp && typeof renderItemProp === "function") {
        let page = typeof value == "number" ? value : index;
        if (value === PaginationItemType.NEXT) {
          page = activePage + 1;
        }
        if (value === PaginationItemType.PREV) {
          page = activePage - 1;
        }
        if (value === PaginationItemType.DOTS) {
          page = isBefore ? activePage - dotsJump >= 1 ? activePage - dotsJump : 1 : activePage + dotsJump <= total ? activePage + dotsJump : total;
        }
        const itemChildren = {
          [PaginationItemType.PREV]: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronIcon, {}),
          [PaginationItemType.NEXT]: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronIcon,
            {
              className: slots.chevronNext({
                class: classNames == null ? void 0 : classNames.chevronNext
              })
            }
          ),
          [PaginationItemType.DOTS]: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisIcon, { className: slots == null ? void 0 : slots.ellipsis({ class: classNames == null ? void 0 : classNames.ellipsis }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ForwardIcon,
              {
                className: slots == null ? void 0 : slots.forwardIcon({ class: classNames == null ? void 0 : classNames.forwardIcon }),
                "data-before": dataAttr(isBefore)
              }
            )
          ] })
        };
        return renderItemProp({
          value,
          index,
          key: `${value}-${index}`,
          page,
          total,
          children: typeof value === "number" ? value : itemChildren[value],
          activePage,
          dotsJump,
          isBefore,
          isActive: value === activePage,
          isPrevious: value === activePage - 1,
          isNext: value === activePage + 1,
          isFirst: value === 1,
          isLast: value === total,
          onNext,
          onPrevious,
          setPage,
          onPress: () => setPage(page),
          ref: typeof value === "number" ? (node) => getItemRef(node, value) : void 0,
          className: slots.item({ class: classNames == null ? void 0 : classNames.item }),
          getAriaLabel: getItemAriaLabel
        });
      }
      if (value === PaginationItemType.PREV) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          pagination_item_default,
          {
            className: slots.prev({
              class: classNames == null ? void 0 : classNames.prev
            }),
            "data-slot": "prev",
            getAriaLabel: getItemAriaLabel,
            isDisabled: !loop && activePage === (isRTL ? total : 1),
            value,
            onPress: onPrevious,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronIcon, {})
          },
          PaginationItemType.PREV
        );
      }
      if (value === PaginationItemType.NEXT) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          pagination_item_default,
          {
            className: slots.next({
              class: clsx(classNames == null ? void 0 : classNames.next)
            }),
            "data-slot": "next",
            getAriaLabel: getItemAriaLabel,
            isDisabled: !loop && activePage === (isRTL ? 1 : total),
            value,
            onPress: onNext,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronIcon,
              {
                className: slots.chevronNext({
                  class: classNames == null ? void 0 : classNames.chevronNext
                })
              }
            )
          },
          PaginationItemType.NEXT
        );
      }
      if (value === PaginationItemType.DOTS) {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          pagination_item_default,
          {
            className: slots.item({
              class: clsx(classNames == null ? void 0 : classNames.item, "group")
            }),
            "data-slot": "item",
            getAriaLabel: getItemAriaLabel,
            value,
            onPress: () => isBefore ? setPage(activePage - dotsJump >= 1 ? activePage - dotsJump : 1) : setPage(activePage + dotsJump <= total ? activePage + dotsJump : total),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisIcon, { className: slots == null ? void 0 : slots.ellipsis({ class: classNames == null ? void 0 : classNames.ellipsis }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ForwardIcon,
                {
                  className: slots == null ? void 0 : slots.forwardIcon({ class: classNames == null ? void 0 : classNames.forwardIcon }),
                  "data-before": dataAttr(isRTL ? !isBefore : isBefore)
                }
              )
            ]
          },
          PaginationItemType.DOTS + isBefore
        );
      }
      return /* @__PURE__ */ reactExports.createElement(pagination_item_default, { ...getItemProps({ value }), key: value, getAriaLabel: getItemAriaLabel }, value);
    },
    [
      isRTL,
      activePage,
      dotsJump,
      getItemProps,
      loop,
      range2,
      renderItemProp,
      slots,
      classNames,
      total
    ]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ...getBaseProps(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { ...getWrapperProps(), children: [
    !disableCursorAnimation && !disableAnimation && /* @__PURE__ */ jsxRuntimeExports.jsx(pagination_cursor_default, { ...getCursorProps() }),
    range2.map(renderItem)
  ] }) });
});
Pagination.displayName = "NextUI.Pagination";
var pagination_default = Pagination;
export {
  pagination_default as p
};
