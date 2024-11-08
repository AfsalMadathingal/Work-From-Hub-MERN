import { t as tv, m as mapPropsVariants, u as useDOMRef, c as clsx, o as objectToDeps, f as forwardRef } from "./chunk-N2KXC5ZE-B3rqp_Yo.js";
import { x as ringClasses, f as colorVariants, $ as $3ef42575df84b30b$export$9d1611c77c2fe928 } from "./chunk-XHQUSKIE-kpJhvuYQ.js";
import { a as $f7dceffc5ad7768b$export$4e328f61c538687f, $ as $f6c31cce2adf654f$export$45712eceda6fad21 } from "./useFocusRing-D2Xc8JP6.js";
import { j as jsxRuntimeExports, b as reactExports } from "./index-BgyoVvld.js";
import { B } from "./react-toastify.esm-CTm47IRj.js";
import { u as userEditValidate } from "./adminValidator-GoKZ0z25.js";
var chip = tv({
  slots: {
    base: [
      "relative",
      "max-w-fit",
      "min-w-min",
      "inline-flex",
      "items-center",
      "justify-between",
      "box-border",
      "whitespace-nowrap"
    ],
    content: "flex-1 text-inherit font-normal",
    dot: ["w-2", "h-2", "ml-1", "rounded-full"],
    avatar: "flex-shrink-0",
    closeButton: [
      "z-10",
      "appearance-none",
      "outline-none",
      "select-none",
      "transition-opacity",
      "opacity-70",
      "hover:opacity-100",
      "cursor-pointer",
      "active:opacity-disabled",
      "tap-highlight-transparent"
    ]
  },
  variants: {
    variant: {
      solid: {},
      bordered: {
        base: "border-medium bg-transparent"
      },
      light: {
        base: "bg-transparent"
      },
      flat: {},
      faded: {
        base: "border-medium"
      },
      shadow: {},
      dot: {
        base: "border-medium border-default text-foreground bg-transparent"
      }
    },
    color: {
      default: {
        dot: "bg-default-400"
      },
      primary: {
        dot: "bg-primary"
      },
      secondary: {
        dot: "bg-secondary"
      },
      success: {
        dot: "bg-success"
      },
      warning: {
        dot: "bg-warning"
      },
      danger: {
        dot: "bg-danger"
      }
    },
    size: {
      sm: {
        base: "px-1 h-6 text-tiny",
        content: "px-1",
        closeButton: "text-medium",
        avatar: "w-4 h-4"
      },
      md: {
        base: "px-1 h-7 text-small",
        content: "px-2",
        closeButton: "text-large",
        avatar: "w-5 h-5"
      },
      lg: {
        base: "px-2 h-8 text-medium",
        content: "px-2",
        closeButton: "text-xl",
        avatar: "w-6 h-6"
      }
    },
    radius: {
      none: {
        base: "rounded-none"
      },
      sm: {
        base: "rounded-small"
      },
      md: {
        base: "rounded-medium"
      },
      lg: {
        base: "rounded-large"
      },
      full: {
        base: "rounded-full"
      }
    },
    isOneChar: {
      true: {},
      false: {}
    },
    isCloseable: {
      true: {},
      false: {}
    },
    hasStartContent: {
      true: {}
    },
    hasEndContent: {
      true: {}
    },
    isDisabled: {
      true: { base: "opacity-disabled pointer-events-none" }
    },
    isCloseButtonFocusVisible: {
      true: {
        closeButton: [...ringClasses, "ring-1", "rounded-full"]
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "full",
    isDisabled: false
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "default",
      class: {
        base: colorVariants.solid.default
      }
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        base: colorVariants.solid.primary
      }
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        base: colorVariants.solid.secondary
      }
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: colorVariants.solid.success
      }
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: colorVariants.solid.warning
      }
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: colorVariants.solid.danger
      }
    },
    {
      variant: "shadow",
      color: "default",
      class: {
        base: colorVariants.shadow.default
      }
    },
    {
      variant: "shadow",
      color: "primary",
      class: {
        base: colorVariants.shadow.primary
      }
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        base: colorVariants.shadow.secondary
      }
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        base: colorVariants.shadow.success
      }
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        base: colorVariants.shadow.warning
      }
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        base: colorVariants.shadow.danger
      }
    },
    {
      variant: "bordered",
      color: "default",
      class: {
        base: colorVariants.bordered.default
      }
    },
    {
      variant: "bordered",
      color: "primary",
      class: {
        base: colorVariants.bordered.primary
      }
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        base: colorVariants.bordered.secondary
      }
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        base: colorVariants.bordered.success
      }
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        base: colorVariants.bordered.warning
      }
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        base: colorVariants.bordered.danger
      }
    },
    {
      variant: "flat",
      color: "default",
      class: {
        base: colorVariants.flat.default
      }
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        base: colorVariants.flat.primary
      }
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        base: colorVariants.flat.secondary
      }
    },
    {
      variant: "flat",
      color: "success",
      class: {
        base: colorVariants.flat.success
      }
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        base: colorVariants.flat.warning
      }
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        base: colorVariants.flat.danger
      }
    },
    {
      variant: "faded",
      color: "default",
      class: {
        base: colorVariants.faded.default
      }
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        base: colorVariants.faded.primary
      }
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        base: colorVariants.faded.secondary
      }
    },
    {
      variant: "faded",
      color: "success",
      class: {
        base: colorVariants.faded.success
      }
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        base: colorVariants.faded.warning
      }
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        base: colorVariants.faded.danger
      }
    },
    {
      variant: "light",
      color: "default",
      class: {
        base: colorVariants.light.default
      }
    },
    {
      variant: "light",
      color: "primary",
      class: {
        base: colorVariants.light.primary
      }
    },
    {
      variant: "light",
      color: "secondary",
      class: {
        base: colorVariants.light.secondary
      }
    },
    {
      variant: "light",
      color: "success",
      class: {
        base: colorVariants.light.success
      }
    },
    {
      variant: "light",
      color: "warning",
      class: {
        base: colorVariants.light.warning
      }
    },
    {
      variant: "light",
      color: "danger",
      class: {
        base: colorVariants.light.danger
      }
    },
    {
      isOneChar: true,
      hasStartContent: false,
      hasEndContent: false,
      size: "sm",
      class: {
        base: "w-5 h-5 min-w-5 min-h-5"
      }
    },
    {
      isOneChar: true,
      hasStartContent: false,
      hasEndContent: false,
      size: "md",
      class: {
        base: "w-6 h-6 min-w-6 min-h-6"
      }
    },
    {
      isOneChar: true,
      hasStartContent: false,
      hasEndContent: false,
      size: "lg",
      class: {
        base: "w-7 h-7 min-w-7 min-h-7"
      }
    },
    {
      isOneChar: true,
      isCloseable: false,
      hasStartContent: false,
      hasEndContent: false,
      class: {
        base: "px-0 justify-center",
        content: "px-0 flex-none"
      }
    },
    {
      isOneChar: true,
      isCloseable: true,
      hasStartContent: false,
      hasEndContent: false,
      class: {
        base: "w-auto"
      }
    },
    {
      isOneChar: true,
      variant: "dot",
      class: {
        base: "w-auto h-7 px-1 items-center",
        content: "px-2"
      }
    },
    {
      hasStartContent: true,
      size: "sm",
      class: {
        content: "pl-0.5"
      }
    },
    {
      hasStartContent: true,
      size: ["md", "lg"],
      class: {
        content: "pl-1"
      }
    },
    {
      hasEndContent: true,
      size: "sm",
      class: {
        content: "pr-0.5"
      }
    },
    {
      hasEndContent: true,
      size: ["md", "lg"],
      class: {
        content: "pr-1"
      }
    }
  ]
});
var CloseFilledIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "svg",
  {
    "aria-hidden": "true",
    focusable: "false",
    height: "1em",
    role: "presentation",
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",
        fill: "currentColor"
      }
    )
  }
);
function useChip(originalProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, chip.variantKeys);
  const {
    ref,
    as,
    children,
    avatar,
    startContent,
    endContent,
    onClose,
    classNames,
    className,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = useDOMRef(ref);
  const baseStyles = clsx(classNames == null ? void 0 : classNames.base, className);
  const isCloseable = !!onClose;
  const isDotVariant = originalProps.variant === "dot";
  const { focusProps: closeFocusProps, isFocusVisible: isCloseButtonFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const isOneChar = reactExports.useMemo(
    () => typeof children === "string" && (children == null ? void 0 : children.length) === 1,
    [children]
  );
  const hasStartContent = reactExports.useMemo(() => !!avatar || !!startContent, [avatar, startContent]);
  const hasEndContent = reactExports.useMemo(() => !!endContent || isCloseable, [endContent, isCloseable]);
  const slots = reactExports.useMemo(
    () => chip({
      ...variantProps,
      hasStartContent,
      hasEndContent,
      isOneChar,
      isCloseable,
      isCloseButtonFocusVisible
    }),
    [
      objectToDeps(variantProps),
      isCloseButtonFocusVisible,
      hasStartContent,
      hasEndContent,
      isOneChar,
      isCloseable
    ]
  );
  const { pressProps: closePressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled: !!(originalProps == null ? void 0 : originalProps.isDisabled),
    onPress: onClose
  });
  const getChipProps = () => {
    return {
      ref: domRef,
      className: slots.base({ class: baseStyles }),
      ...otherProps
    };
  };
  const getCloseButtonProps = () => {
    return {
      role: "button",
      tabIndex: 0,
      className: slots.closeButton({ class: classNames == null ? void 0 : classNames.closeButton }),
      "aria-label": "close chip",
      ...$3ef42575df84b30b$export$9d1611c77c2fe928(closePressProps, closeFocusProps)
    };
  };
  const getAvatarClone = (avatar2) => {
    if (!reactExports.isValidElement(avatar2))
      return null;
    return reactExports.cloneElement(avatar2, {
      className: slots.avatar({ class: classNames == null ? void 0 : classNames.avatar })
    });
  };
  const getContentClone = (content) => reactExports.isValidElement(content) ? reactExports.cloneElement(content, {
    className: clsx("max-h-[80%]", content.props.className)
  }) : null;
  return {
    Component,
    children,
    slots,
    classNames,
    isDot: isDotVariant,
    isCloseable,
    startContent: getAvatarClone(avatar) || getContentClone(startContent),
    endContent: getContentClone(endContent),
    getCloseButtonProps,
    getChipProps
  };
}
var Chip = forwardRef((props, ref) => {
  const {
    Component,
    children,
    slots,
    classNames,
    isDot,
    isCloseable,
    startContent,
    endContent,
    getCloseButtonProps,
    getChipProps
  } = useChip({
    ...props,
    ref
  });
  const start = reactExports.useMemo(() => {
    if (isDot && !startContent) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: slots.dot({ class: classNames == null ? void 0 : classNames.dot }) });
    }
    return startContent;
  }, [slots, startContent, isDot]);
  const end = reactExports.useMemo(() => {
    if (isCloseable) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getCloseButtonProps(), children: endContent || /* @__PURE__ */ jsxRuntimeExports.jsx(CloseFilledIcon, {}) });
    }
    return endContent;
  }, [endContent, isCloseable, getCloseButtonProps]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getChipProps(), children: [
    start,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: slots.content({ class: classNames == null ? void 0 : classNames.content }), children }),
    end
  ] });
});
Chip.displayName = "NextUI.Chip";
var chip_default = Chip;
const EyeIcon = (props) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    viewBox: "0 0 20 20",
    width: "1em",
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5
        }
      )
    ]
  }
);
const UserProfileDialog = ({ user: { fullName, isBlocked, email, createdAt, profilePic }, setUserDetailsModal }) => {
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const [showDialog, setShowDialog] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setShowDialog(true);
    setTimeout(() => setIsVisible(true), 10);
  }, []);
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowDialog(false);
      setUserDetailsModal(false);
    }, 300);
  };
  if (!showDialog) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white rounded-lg shadow-lg p-6 w-96 transform transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: profilePic, alt: "User", className: "w-20 h-20 rounded-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-gray-800 ", children: fullName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: email }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Account Status:" }),
                  " ",
                  isBlocked ? "Blocked" : "Active"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Date Joined:" }),
                  " ",
                  createdAt == null ? void 0 : createdAt.slice(0, 10)
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none transition ease-in-out",
                onClick: handleClose,
                children: "Close"
              }
            ) })
          ]
        }
      )
    }
  );
};
const EditUserProfile = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = reactExports.useState({
    id: user == null ? void 0 : user._id,
    fullName: user == null ? void 0 : user.fullName,
    email: user == null ? void 0 : user.email,
    status: user == null ? void 0 : user.status,
    dateJoined: user == null ? void 0 : user.dateJoined
  });
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const [showProfile, setShowProfile] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  reactExports.useEffect(() => {
    setShowProfile(true);
    setTimeout(() => setIsVisible(true), 10);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSave = () => {
    const formattedErrors = userEditValidate({
      fullName: formData.fullName,
      email: formData.email
    });
    if (formattedErrors) {
      setErrors(formattedErrors);
      return;
    }
    if (formData.fullName == (user == null ? void 0 : user.fullName) && formData.email == (user == null ? void 0 : user.email)) {
      B.error(
        "If you dont want to change any details, please click cancel."
      );
      return;
    }
    onSave(formData);
  };
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowProfile(false);
      onCancel();
    }, 300);
  };
  if (!showProfile) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white rounded-lg shadow-lg p-6 w-96 transform transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-center mb-4", children: "Edit User Profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  name: "fullName",
                  value: formData.fullName || "",
                  onChange: handleChange,
                  className: "w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                }
              ),
              errors.fullName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.fullName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-700 text-sm font-bold mb-2", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  name: "email",
                  value: formData.email || "",
                  onChange: handleChange,
                  className: "w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                }
              ),
              errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 text-sm mt-1", children: errors.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none transition ease-in-out",
                  onClick: handleSave,
                  children: "Save"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none transition ease-in-out",
                  onClick: handleClose,
                  children: "Cancel"
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
export {
  EyeIcon as E,
  UserProfileDialog as U,
  EditUserProfile as a,
  chip_default as c
};
