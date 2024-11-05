import { E as tv, M as mapPropsVariants, r as reactExports, Q as objectToDeps, T as dataAttr, a4 as clsx, ae as forwardRef, j as jsxRuntimeExports } from "./index-BA_d4uvr.js";
var spacer = tv({
  base: "w-px h-px inline-block",
  variants: {
    isInline: {
      true: "inline-block",
      false: "block"
    }
  },
  defaultVariants: {
    isInline: false
  }
});
var spacing = {
  px: "1px",
  0: "0px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
};
var getMargin = (value) => {
  var _a;
  return (_a = spacing[value]) != null ? _a : value;
};
function useSpacer(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, spacer.variantKeys);
  const { as, className, x = 1, y = 1, ...otherProps } = props;
  const Component = as || "span";
  const styles = reactExports.useMemo(
    () => spacer({
      ...variantProps,
      className
    }),
    [objectToDeps(variantProps), className]
  );
  const marginLeft = getMargin(x);
  const marginTop = getMargin(y);
  const getSpacerProps = (props2 = {}) => ({
    ...props2,
    ...otherProps,
    "aria-hidden": dataAttr(true),
    className: clsx(styles, props2.className),
    style: {
      ...props2.style,
      ...otherProps.style,
      marginLeft,
      marginTop
    }
  });
  return { Component, getSpacerProps };
}
var Spacer = forwardRef((props, ref) => {
  const { Component, getSpacerProps } = useSpacer({ ...props });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ref, ...getSpacerProps() });
});
Spacer.displayName = "NextUI.Spacer";
var spacer_default = Spacer;
export {
  spacer_default as s
};
