import { E as tv, bs as colorVariants, N as useProviderContext, M as mapPropsVariants, r as reactExports, a4 as clsx, Q as objectToDeps, ae as forwardRef, j as jsxRuntimeExports, bt as _extends, bu as _objectWithoutPropertiesLoose, bv as clsx$1, bw as capitalize, bx as lighten_1, by as alpha_1, bz as darken_1, a8 as button_default, bj as createTheme, ak as PRIMARY_COLOR, bA as lookup, B, bk as ThemeProvider, a as useDispatch, bB as setPageTitle } from "./index-CTy2qHgP.js";
import { R as ResponsiveDrawer } from "./AdminLayout-C1017qFS.js";
import { P as Paper, B as Button } from "./Logout-9OedVr_p.js";
import { g as generateUtilityClass, a as generateUtilityClasses, s as styled, u as useDefaultProps, c as composeClasses, T as Typography, B as Box } from "./Modal-mOoAhFB-.js";
import "tslib";
import "./index-Dn0LtB1c.js";
var badge = tv({
  slots: {
    base: ["relative", "inline-flex", "shrink-0"],
    badge: [
      "flex",
      "z-10",
      "flex-wrap",
      "absolute",
      "box-border",
      "rounded-full",
      "whitespace-nowrap",
      "place-content-center",
      "origin-center",
      "items-center",
      "text-inherit",
      "select-none",
      "font-regular",
      "scale-100",
      "opacity-100",
      "subpixel-antialiased",
      "data-[invisible=true]:scale-0",
      "data-[invisible=true]:opacity-0"
    ]
  },
  variants: {
    variant: {
      solid: {},
      flat: {},
      faded: {
        badge: "border-medium"
      },
      shadow: {}
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {}
    },
    size: {
      sm: {
        badge: "px-1 text-tiny"
      },
      md: {
        badge: "px-1 text-small"
      },
      lg: {
        badge: "px-1 text-small"
      }
    },
    placement: {
      "top-right": {},
      "top-left": {},
      "bottom-right": {},
      "bottom-left": {}
    },
    shape: {
      circle: {},
      rectangle: {}
    },
    isInvisible: {
      true: {}
    },
    isOneChar: {
      true: {
        badge: "px-0"
      }
    },
    isDot: {
      true: {}
    },
    disableAnimation: {
      true: {
        badge: "transition-none"
      },
      false: {
        badge: "transition-transform-opacity !ease-soft-spring !duration-300"
      }
    },
    showOutline: {
      true: {
        badge: "border-2 border-background"
      },
      false: {
        badge: "border-transparent border-0"
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    shape: "rectangle",
    placement: "top-right",
    showOutline: true,
    isInvisible: false
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "default",
      class: {
        badge: colorVariants.solid.default
      }
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        badge: colorVariants.solid.primary
      }
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        badge: colorVariants.solid.secondary
      }
    },
    {
      variant: "solid",
      color: "success",
      class: {
        badge: colorVariants.solid.success
      }
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        badge: colorVariants.solid.warning
      }
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        badge: colorVariants.solid.danger
      }
    },
    {
      variant: "shadow",
      color: "default",
      class: {
        badge: colorVariants.shadow.default
      }
    },
    {
      variant: "shadow",
      color: "primary",
      class: {
        badge: colorVariants.shadow.primary
      }
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        badge: colorVariants.shadow.secondary
      }
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        badge: colorVariants.shadow.success
      }
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        badge: colorVariants.shadow.warning
      }
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        badge: colorVariants.shadow.danger
      }
    },
    {
      variant: "flat",
      color: "default",
      class: {
        badge: colorVariants.flat.default
      }
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        badge: colorVariants.flat.primary
      }
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        badge: colorVariants.flat.secondary
      }
    },
    {
      variant: "flat",
      color: "success",
      class: {
        badge: colorVariants.flat.success
      }
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        badge: colorVariants.flat.warning
      }
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        badge: colorVariants.flat.danger
      }
    },
    {
      variant: "faded",
      color: "default",
      class: {
        badge: colorVariants.faded.default
      }
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        badge: colorVariants.faded.primary
      }
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        badge: colorVariants.faded.secondary
      }
    },
    {
      variant: "faded",
      color: "success",
      class: {
        badge: colorVariants.faded.success
      }
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        badge: colorVariants.faded.warning
      }
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        badge: colorVariants.faded.danger
      }
    },
    {
      isOneChar: true,
      size: "sm",
      class: {
        badge: "w-4 h-4 min-w-4 min-h-4"
      }
    },
    {
      isOneChar: true,
      size: "md",
      class: {
        badge: "w-5 h-5 min-w-5 min-h-5"
      }
    },
    {
      isOneChar: true,
      size: "lg",
      class: {
        badge: "w-6 h-6 min-w-6 min-h-6"
      }
    },
    {
      isDot: true,
      size: "sm",
      class: {
        badge: "w-3 h-3 min-w-3 min-h-3"
      }
    },
    {
      isDot: true,
      size: "md",
      class: {
        badge: "w-3.5 h-3.5 min-w-3.5 min-h-3.5"
      }
    },
    {
      isDot: true,
      size: "lg",
      class: {
        badge: "w-4 h-4 min-w-4 min-h-4"
      }
    },
    {
      placement: "top-right",
      shape: "rectangle",
      class: {
        badge: "top-[5%] right-[5%] translate-x-1/2 -translate-y-1/2"
      }
    },
    {
      placement: "top-left",
      shape: "rectangle",
      class: {
        badge: "top-[5%] left-[5%] -translate-x-1/2 -translate-y-1/2"
      }
    },
    {
      placement: "bottom-right",
      shape: "rectangle",
      class: {
        badge: "bottom-[5%] right-[5%] translate-x-1/2 translate-y-1/2"
      }
    },
    {
      placement: "bottom-left",
      shape: "rectangle",
      class: {
        badge: "bottom-[5%] left-[5%] -translate-x-1/2 translate-y-1/2"
      }
    },
    {
      placement: "top-right",
      shape: "circle",
      class: {
        badge: "top-[10%] right-[10%] translate-x-1/2 -translate-y-1/2"
      }
    },
    {
      placement: "top-left",
      shape: "circle",
      class: {
        badge: "top-[10%] left-[10%] -translate-x-1/2 -translate-y-1/2"
      }
    },
    {
      placement: "bottom-right",
      shape: "circle",
      class: {
        badge: "bottom-[10%] right-[10%] translate-x-1/2 translate-y-1/2"
      }
    },
    {
      placement: "bottom-left",
      shape: "circle",
      class: {
        badge: "bottom-[10%] left-[10%] -translate-x-1/2 translate-y-1/2"
      }
    }
  ]
});
function useBadge(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const disableAnimation = (_b = (_a = originalProps == null ? void 0 : originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const [props, variantProps] = mapPropsVariants(originalProps, badge.variantKeys);
  const { as, children, className, content, classNames, ...otherProps } = props;
  const Component = as || "span";
  const isOneChar = reactExports.useMemo(
    () => {
      var _a2;
      return ((_a2 = String(content)) == null ? void 0 : _a2.length) === 1 || (originalProps == null ? void 0 : originalProps.isOneChar);
    },
    [content, originalProps == null ? void 0 : originalProps.isOneChar]
  );
  const isDot = reactExports.useMemo(() => {
    var _a2;
    return ((_a2 = String(content)) == null ? void 0 : _a2.length) === 0;
  }, [content]);
  const baseStyles = clsx(classNames == null ? void 0 : classNames.badge, className);
  const slots = reactExports.useMemo(
    () => badge({
      ...variantProps,
      showOutline: !!(originalProps == null ? void 0 : originalProps.disableOutline) ? !(originalProps == null ? void 0 : originalProps.disableOutline) : originalProps == null ? void 0 : originalProps.showOutline,
      isOneChar,
      isDot
    }),
    [objectToDeps(variantProps), isOneChar, isDot]
  );
  const getBadgeProps = () => {
    return {
      className: slots.badge({ class: baseStyles }),
      "data-invisible": originalProps.isInvisible,
      ...otherProps
    };
  };
  return {
    Component,
    children,
    content,
    slots,
    classNames,
    disableAnimation,
    isInvisible: originalProps == null ? void 0 : originalProps.isInvisible,
    getBadgeProps
  };
}
var Badge = forwardRef((props, ref) => {
  const { Component, children, content, slots, classNames, getBadgeProps } = useBadge({
    ...props
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: slots.base({ class: classNames == null ? void 0 : classNames.base }), children: [
    children,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ref, ...getBadgeProps(), children: content })
  ] });
});
Badge.displayName = "NextUI.Badge";
var badge_default = Badge;
const TableContext = /* @__PURE__ */ reactExports.createContext();
function getTableUtilityClass(slot) {
  return generateUtilityClass("MuiTable", slot);
}
generateUtilityClasses("MuiTable", ["root", "stickyHeader"]);
const _excluded$5 = ["className", "component", "padding", "size", "stickyHeader"];
const useUtilityClasses$5 = (ownerState) => {
  const {
    classes,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ["root", stickyHeader && "stickyHeader"]
  };
  return composeClasses(slots, getTableUtilityClass, classes);
};
const TableRoot = styled("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.stickyHeader && styles.stickyHeader];
  }
})(({
  theme: theme2,
  ownerState
}) => _extends({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  "& caption": _extends({}, theme2.typography.body2, {
    padding: theme2.spacing(2),
    color: (theme2.vars || theme2).palette.text.secondary,
    textAlign: "left",
    captionSide: "bottom"
  })
}, ownerState.stickyHeader && {
  borderCollapse: "separate"
}));
const defaultComponent$3 = "table";
const Table = /* @__PURE__ */ reactExports.forwardRef(function Table2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTable"
  });
  const {
    className,
    component = defaultComponent$3,
    padding = "normal",
    size = "medium",
    stickyHeader = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const ownerState = _extends({}, props, {
    component,
    padding,
    size,
    stickyHeader
  });
  const classes = useUtilityClasses$5(ownerState);
  const table = reactExports.useMemo(() => ({
    padding,
    size,
    stickyHeader
  }), [padding, size, stickyHeader]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContext.Provider, {
    value: table,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableRoot, _extends({
      as: component,
      role: component === defaultComponent$3 ? null : "table",
      ref,
      className: clsx$1(classes.root, className),
      ownerState
    }, other))
  });
});
const Tablelvl2Context = /* @__PURE__ */ reactExports.createContext();
function getTableBodyUtilityClass(slot) {
  return generateUtilityClass("MuiTableBody", slot);
}
generateUtilityClasses("MuiTableBody", ["root"]);
const _excluded$4 = ["className", "component"];
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableBodyUtilityClass, classes);
};
const TableBodyRoot = styled("tbody", {
  name: "MuiTableBody",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "table-row-group"
});
const tablelvl2$1 = {
  variant: "body"
};
const defaultComponent$2 = "tbody";
const TableBody = /* @__PURE__ */ reactExports.forwardRef(function TableBody2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableBody"
  });
  const {
    className,
    component = defaultComponent$2
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const ownerState = _extends({}, props, {
    component
  });
  const classes = useUtilityClasses$4(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
    value: tablelvl2$1,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableBodyRoot, _extends({
      className: clsx$1(classes.root, className),
      as: component,
      ref,
      role: component === defaultComponent$2 ? null : "rowgroup",
      ownerState
    }, other))
  });
});
function getTableCellUtilityClass(slot) {
  return generateUtilityClass("MuiTableCell", slot);
}
const tableCellClasses = generateUtilityClasses("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]);
const _excluded$3 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ["root", variant, stickyHeader && "stickyHeader", align !== "inherit" && `align${capitalize(align)}`, padding !== "normal" && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getTableCellUtilityClass, classes);
};
const TableCellRoot = styled("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== "normal" && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== "inherit" && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
  }
})(({
  theme: theme2,
  ownerState
}) => _extends({}, theme2.typography.body2, {
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: theme2.vars ? `1px solid ${theme2.vars.palette.TableCell.border}` : `1px solid
    ${theme2.palette.mode === "light" ? lighten_1(alpha_1(theme2.palette.divider, 1), 0.88) : darken_1(alpha_1(theme2.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16
}, ownerState.variant === "head" && {
  color: (theme2.vars || theme2).palette.text.primary,
  lineHeight: theme2.typography.pxToRem(24),
  fontWeight: theme2.typography.fontWeightMedium
}, ownerState.variant === "body" && {
  color: (theme2.vars || theme2).palette.text.primary
}, ownerState.variant === "footer" && {
  color: (theme2.vars || theme2).palette.text.secondary,
  lineHeight: theme2.typography.pxToRem(21),
  fontSize: theme2.typography.pxToRem(12)
}, ownerState.size === "small" && {
  padding: "6px 16px",
  [`&.${tableCellClasses.paddingCheckbox}`]: {
    width: 24,
    // prevent the checkbox column from growing
    padding: "0 12px 0 16px",
    "& > *": {
      padding: 0
    }
  }
}, ownerState.padding === "checkbox" && {
  width: 48,
  // prevent the checkbox column from growing
  padding: "0 0 0 4px"
}, ownerState.padding === "none" && {
  padding: 0
}, ownerState.align === "left" && {
  textAlign: "left"
}, ownerState.align === "center" && {
  textAlign: "center"
}, ownerState.align === "right" && {
  textAlign: "right",
  flexDirection: "row-reverse"
}, ownerState.align === "justify" && {
  textAlign: "justify"
}, ownerState.stickyHeader && {
  position: "sticky",
  top: 0,
  zIndex: 2,
  backgroundColor: (theme2.vars || theme2).palette.background.default
}));
const TableCell = /* @__PURE__ */ reactExports.forwardRef(function TableCell2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableCell"
  });
  const {
    align = "inherit",
    className,
    component: componentProp,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const table = reactExports.useContext(TableContext);
  const tablelvl22 = reactExports.useContext(Tablelvl2Context);
  const isHeadCell = tablelvl22 && tablelvl22.variant === "head";
  let component;
  if (componentProp) {
    component = componentProp;
  } else {
    component = isHeadCell ? "th" : "td";
  }
  let scope = scopeProp;
  if (component === "td") {
    scope = void 0;
  } else if (!scope && isHeadCell) {
    scope = "col";
  }
  const variant = variantProp || tablelvl22 && tablelvl22.variant;
  const ownerState = _extends({}, props, {
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : "normal"),
    size: sizeProp || (table && table.size ? table.size : "medium"),
    sortDirection,
    stickyHeader: variant === "head" && table && table.stickyHeader,
    variant
  });
  const classes = useUtilityClasses$3(ownerState);
  let ariaSort = null;
  if (sortDirection) {
    ariaSort = sortDirection === "asc" ? "ascending" : "descending";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableCellRoot, _extends({
    as: component,
    ref,
    className: clsx$1(classes.root, className),
    "aria-sort": ariaSort,
    scope,
    ownerState
  }, other));
});
function getTableContainerUtilityClass(slot) {
  return generateUtilityClass("MuiTableContainer", slot);
}
generateUtilityClasses("MuiTableContainer", ["root"]);
const _excluded$2 = ["className", "component"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableContainerUtilityClass, classes);
};
const TableContainerRoot = styled("div", {
  name: "MuiTableContainer",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  width: "100%",
  overflowX: "auto"
});
const TableContainer = /* @__PURE__ */ reactExports.forwardRef(function TableContainer2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableContainer"
  });
  const {
    className,
    component = "div"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const ownerState = _extends({}, props, {
    component
  });
  const classes = useUtilityClasses$2(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainerRoot, _extends({
    ref,
    as: component,
    className: clsx$1(classes.root, className),
    ownerState
  }, other));
});
function getTableHeadUtilityClass(slot) {
  return generateUtilityClass("MuiTableHead", slot);
}
generateUtilityClasses("MuiTableHead", ["root"]);
const _excluded$1 = ["className", "component"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTableHeadUtilityClass, classes);
};
const TableHeadRoot = styled("thead", {
  name: "MuiTableHead",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  display: "table-header-group"
});
const tablelvl2 = {
  variant: "head"
};
const defaultComponent$1 = "thead";
const TableHead = /* @__PURE__ */ reactExports.forwardRef(function TableHead2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableHead"
  });
  const {
    className,
    component = defaultComponent$1
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const ownerState = _extends({}, props, {
    component
  });
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Tablelvl2Context.Provider, {
    value: tablelvl2,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeadRoot, _extends({
      as: component,
      className: clsx$1(classes.root, className),
      ref,
      role: component === defaultComponent$1 ? null : "rowgroup",
      ownerState
    }, other))
  });
});
function getTableRowUtilityClass(slot) {
  return generateUtilityClass("MuiTableRow", slot);
}
const tableRowClasses = generateUtilityClasses("MuiTableRow", ["root", "selected", "hover", "head", "footer"]);
const _excluded = ["className", "component", "hover", "selected"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    selected,
    hover,
    head,
    footer
  } = ownerState;
  const slots = {
    root: ["root", selected && "selected", hover && "hover", head && "head", footer && "footer"]
  };
  return composeClasses(slots, getTableRowUtilityClass, classes);
};
const TableRowRoot = styled("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.head && styles.head, ownerState.footer && styles.footer];
  }
})(({
  theme: theme2
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${tableRowClasses.hover}:hover`]: {
    backgroundColor: (theme2.vars || theme2).palette.action.hover
  },
  [`&.${tableRowClasses.selected}`]: {
    backgroundColor: theme2.vars ? `rgba(${theme2.vars.palette.primary.mainChannel} / ${theme2.vars.palette.action.selectedOpacity})` : alpha_1(theme2.palette.primary.main, theme2.palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: theme2.vars ? `rgba(${theme2.vars.palette.primary.mainChannel} / calc(${theme2.vars.palette.action.selectedOpacity} + ${theme2.vars.palette.action.hoverOpacity}))` : alpha_1(theme2.palette.primary.main, theme2.palette.action.selectedOpacity + theme2.palette.action.hoverOpacity)
    }
  }
}));
const defaultComponent = "tr";
const TableRow = /* @__PURE__ */ reactExports.forwardRef(function TableRow2(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: "MuiTableRow"
  });
  const {
    className,
    component = defaultComponent,
    hover = false,
    selected = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const tablelvl22 = reactExports.useContext(Tablelvl2Context);
  const ownerState = _extends({}, props, {
    component,
    hover,
    selected,
    head: tablelvl22 && tablelvl22.variant === "head",
    footer: tablelvl22 && tablelvl22.variant === "footer"
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TableRowRoot, _extends({
    as: component,
    ref,
    className: clsx$1(classes.root, className),
    role: component === defaultComponent ? null : "row",
    ownerState
  }, other));
});
const NotificationIcon = ({
  size,
  height,
  width,
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      fill: "none",
      height: size || height || 24,
      viewBox: "0 0 24 24",
      width: size || width || 24,
      xmlns: "http://www.w3.org/2000/svg",
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          clipRule: "evenodd",
          d: "M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z",
          fill: "currentColor",
          fillRule: "evenodd"
        }
      )
    }
  );
};
function BadgeForSupport({ count }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(badge_default, { content: count, shape: "circle", color: "danger", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    button_default,
    {
      radius: "full",
      isIconOnly: true,
      "aria-label": "more than 99 notifications",
      variant: "light",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationIcon, { size: 20 })
    }
  ) });
}
const theme = createTheme({
  palette: {
    primary: {
      main: "#99"
    },
    secondary: {
      main: PRIMARY_COLOR
    },
    background: {
      default: "#f5f5f5"
    }
  }
});
const SOCKET_URL = "http://localhost:5000";
const AdminChat = () => {
  const [socket, setSocket] = reactExports.useState(null);
  const [users, setUsers] = reactExports.useState([]);
  const [selectedUser, setSelectedUser] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState([]);
  const [message, setMessage] = reactExports.useState("");
  const [isChatOpen, setIsChatOpen] = reactExports.useState(false);
  const [isChatStarted, setIsChatStarted] = reactExports.useState(false);
  const messageListRef = reactExports.useRef(null);
  const chatWindowRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const newSocket = lookup(SOCKET_URL);
    setSocket(newSocket);
    newSocket.emit("adminConnected");
    newSocket.on("connectedUsers", (userList) => {
      if (!userList) return;
      const updatedUsers = Object.values(userList).map((user) => ({ ...user, unreadCount: 0 }));
      setUsers(updatedUsers);
    });
    newSocket.on("userMessage", (msg) => {
      var _a;
      setMessages((prev) => [...prev, { message: msg.message, isAdmin: false, userId: msg.userId }]);
      setUsers(
        (prevUsers) => prevUsers.map((user) => {
          if (user.id === msg.userId) {
            const shouldIncrement = !document.hasFocus() || (selectedUser == null ? void 0 : selectedUser.id) !== user.id;
            return {
              ...user,
              unreadCount: shouldIncrement ? user.unreadCount + 1 : user.unreadCount
            };
          }
          return user;
        })
      );
      if (!document.hasFocus() || (selectedUser == null ? void 0 : selectedUser.id) !== msg.userId) {
        B(`New message from ${((_a = users.find((u) => u.id === msg.userId)) == null ? void 0 : _a.name) || "User"}`);
      }
    });
    newSocket.on("userDisconnected", (userId) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      if ((selectedUser == null ? void 0 : selectedUser.id) === userId) {
        setSelectedUser(null);
        setIsChatOpen(false);
        setIsChatStarted(false);
        B("User has disconnected");
      }
    });
    return () => {
      newSocket.disconnect();
    };
  }, [selectedUser]);
  reactExports.useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);
  reactExports.useEffect(() => {
    const handleFocus = () => {
      if (selectedUser) {
        setUsers(
          (prevUsers) => prevUsers.map(
            (user) => user.id === selectedUser.id ? { ...user, unreadCount: 0 } : user
          )
        );
      }
    };
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [selectedUser]);
  const sendMessage = (e) => {
    e.preventDefault();
    if (socket && selectedUser && message.trim()) {
      socket.emit("adminMessage", { userId: selectedUser.id, message });
      setMessages((prev) => [...prev, { userId: selectedUser.id, message, isAdmin: true }]);
      setMessage("");
    }
  };
  const handleStartChat = () => {
    setIsChatStarted(true);
    if (selectedUser) {
      setUsers(
        (prevUsers) => prevUsers.map((user) => user.id === selectedUser.id ? { ...user, unreadCount: 0 } : user)
      );
    }
  };
  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setIsChatOpen(true);
    setUsers(
      (prevUsers) => prevUsers.map((u) => u.id === user.id ? { ...u, unreadCount: 0 } : u)
    );
  };
  const hasUsers = users.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { theme, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Paper, { elevation: 3, sx: { p: 4, backgroundColor: "background.default" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h4", gutterBottom: true, sx: { color: "primary.main", fontWeight: "bold", mb: 3 }, children: "Active Users" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, elevation: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: "bold", color: "primary.main" }, children: "Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: "bold", color: "primary.main" }, children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: "bold", color: "primary.main" }, children: "Action" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: hasUsers ? users.map((user) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { hover: true, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: user.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: user.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "contained",
              color: "secondary",
              size: "small",
              onClick: () => handleUserSelect(user),
              children: [
                "Open Chat",
                user.unreadCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeForSupport, { count: user.unreadCount })
              ]
            }
          ) })
        ] }, user.id)) : /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 3, align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { py: 4, textAlign: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", color: "text.secondary", children: "No active users at the moment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 1 }, children: "Check back later or refresh the page" })
        ] }) }) }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0", children: isChatOpen && selectedUser && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: chatWindowRef,
        className: "fixed bottom-0 right-0 w-96 bg-white border border-gray-300 shadow-lg z-50 mb-12",
        style: {
          minWidth: "300px",
          height: "500px",
          maxWidth: "600px"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-500 text-white p-2 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Chat With ",
              selectedUser.name
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsChatOpen(false),
                className: "text-sm bg-red-500 px-2 py-1 rounded hover:bg-red-600",
                children: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col flex-grow h-full", children: !isChatStarted ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleStartChat,
              className: "bg-orange-500 text-white py-2 px-4 rounded-md",
              children: "Start Chat"
            }
          ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                ref: messageListRef,
                className: "flex-grow overflow-y-auto p-4 space-y-2",
                style: { maxHeight: "calc(100% - 60px)" },
                children: messages.length ? messages.filter((msg) => msg.userId === selectedUser.id).map((msg, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex ${msg.isAdmin ? "justify-end" : "justify-start"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `max-w-[70%] p-2 rounded-md ${msg.isAdmin ? "bg-orange-100" : "bg-blue-200"}`,
                        children: msg.message
                      }
                    )
                  },
                  index
                )) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-gray-500", children: "No messages yet" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-white border-t border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: sendMessage, className: "flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  placeholder: "Type a message",
                  className: "flex-grow border border-gray-300 rounded-l-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  className: "bg-orange-500 text-white px-4 rounded-r-md",
                  children: "Send"
                }
              )
            ] }) })
          ] }) })
        ] })
      }
    ) })
  ] });
};
const Support = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Support"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ResponsiveDrawer,
    {
      component: /* @__PURE__ */ jsxRuntimeExports.jsx(AdminChat, {})
    }
  ) }) });
};
export {
  Support as default
};
