import { E as tv, G as dataFocusVisibleClasses, ca as groupDataFocusVisibleClasses, j as jsxRuntimeExports, cb as $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$2, cc as $8ae05eaa5c114e9c$export$7f54fc3180508a52$2, cd as $507fabe10e71c6fb$export$8397ddfc504fdb9a, r as reactExports, R as React, bv as clsx, ce as _class_private_field_set, cf as _class_private_field_get, C as _class_private_field_init, P as $458b0a5536c1a7cf$export$40bfa8c7b0832715, a7 as createContext2, cg as useSafeLayoutEffect, N as useProviderContext, ch as __DEV__, ci as warn, cj as safeAriaLabel, a0 as $f6c31cce2adf654f$export$45712eceda6fad21$2, aa as $6179b936705e76d3$export$ae780daf29e6d456, a9 as $f7dceffc5ad7768b$export$4e328f61c538687f, a4 as clsx$1, T as dataAttr, U as $3ef42575df84b30b$export$9d1611c77c2fe928$2, ck as mergeRefs, a5 as $ff5963eb1fccf552$export$e08e3b67e392101e$2, ae as forwardRef, ad as $5c3e21d68f1c4674$export$439d29a4e110a164, O as useDOMRef, a6 as filterDOMProps, cl as avatar_default, cm as $6db58dc88e78b024$export$2f817fcdc4b89ae0, cn as $5b160d28a433310d$export$c17fa47878dc55b6, bb as reactDomExports, co as $c5a24bc478652b5f$export$fbdeaa6a76694f71$2, cp as $c5a24bc478652b5f$export$1005530eda016c13$2, cq as $c5a24bc478652b5f$export$5f3398f8733f90e2$2, cr as $325a3faab7a68acd$export$a16aca283550c30d$1, D as $18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1, cs as $bdb11010cef70236$export$f680877a34711e37$1, V as $fca6afa0e843324b$export$f12b703ca79dfbb1$1, Z as $ef06256079686ba0$export$f8aeda7b10753fa1$1, ct as $e6afbd83fe6ebbd2$export$4c014de7c8940b4c$1, cu as $c87311424ea30a05$export$a11b0059900ceec8$2, cv as $c5a24bc478652b5f$export$7475b2c64539e4cf$2, cw as $ea8dcbcb9ea1b556$export$51437d503373d223, cx as $7af3f5b51489e0b5$export$253fe78d46329472, cy as $d496c0a20b6e58ec$export$6c8a5aaad13c9852, cz as $7613b1592d41b092$export$6cd28814d92fa9c9, M as mapPropsVariants, Q as objectToDeps } from "./index-BA_d4uvr.js";
import { a as $319e236875307eab$export$a9b970dcc4ae71a9, $ as $4f58c5f72bcf79f7$export$496315a1608d9602$1 } from "./LiveAnnouncer-Dwh_1pNw.js";
import { s as spacer_default } from "./chunk-IXXDDLGU-1TSiYlfu.js";
var user = tv({
  slots: {
    base: [
      "inline-flex items-center justify-center gap-2 rounded-small outline-none",
      ...dataFocusVisibleClasses
    ],
    wrapper: "inline-flex flex-col items-start",
    name: "text-small text-inherit",
    description: "text-tiny text-foreground-400"
  }
});
var table = tv({
  slots: {
    base: "flex flex-col relative gap-4",
    wrapper: [
      "p-4",
      "z-0",
      "flex",
      "flex-col",
      "relative",
      "justify-between",
      "gap-4",
      "shadow-small",
      "bg-content1",
      "overflow-auto"
    ],
    table: "min-w-full h-auto",
    thead: "[&>tr]:first:rounded-lg",
    tbody: "",
    tr: ["group", "outline-none", ...dataFocusVisibleClasses],
    th: [
      "group",
      "px-3",
      "h-10",
      "align-middle",
      "bg-default-100",
      "whitespace-nowrap",
      "text-foreground-500",
      "text-tiny",
      "font-semibold",
      "first:rounded-l-lg",
      "rtl:first:rounded-r-lg",
      "rtl:first:rounded-l-[unset]",
      "last:rounded-r-lg",
      "rtl:last:rounded-l-lg",
      "rtl:last:rounded-r-[unset]",
      "outline-none",
      "data-[sortable=true]:cursor-pointer",
      "data-[hover=true]:text-foreground-400",
      ...dataFocusVisibleClasses
    ],
    td: [
      "py-2",
      "px-3",
      "relative",
      "align-middle",
      "whitespace-normal",
      "text-small",
      "font-normal",
      "outline-none",
      "[&>*]:z-1",
      "[&>*]:relative",
      ...dataFocusVisibleClasses,
      "before:content-['']",
      "before:absolute",
      "before:z-0",
      "before:inset-0",
      "before:opacity-0",
      "data-[selected=true]:before:opacity-100",
      "group-data-[disabled=true]:text-foreground-300",
      "group-data-[disabled=true]:cursor-not-allowed"
    ],
    tfoot: "",
    sortIcon: [
      "ml-2",
      "mb-px",
      "opacity-0",
      "text-inherit",
      "inline-block",
      "transition-transform-opacity",
      "data-[visible=true]:opacity-100",
      "group-data-[hover=true]:opacity-100",
      "data-[direction=ascending]:rotate-180"
    ],
    emptyWrapper: "text-foreground-400 align-middle text-center h-40",
    loadingWrapper: "absolute inset-0 flex items-center justify-center"
  },
  variants: {
    color: {
      default: {
        td: "before:bg-default/60 data-[selected=true]:text-default-foreground"
      },
      primary: {
        td: "before:bg-primary/20 data-[selected=true]:text-primary"
      },
      secondary: {
        td: "before:bg-secondary/20 data-[selected=true]:text-secondary"
      },
      success: {
        td: "before:bg-success/20 data-[selected=true]:text-success-600 dark:data-[selected=true]:text-success"
      },
      warning: {
        td: "before:bg-warning/20 data-[selected=true]:text-warning-600 dark:data-[selected=true]:text-warning"
      },
      danger: {
        td: "before:bg-danger/20 data-[selected=true]:text-danger dark:data-[selected=true]:text-danger-500"
      }
    },
    layout: {
      auto: {
        table: "table-auto"
      },
      fixed: {
        table: "table-fixed"
      }
    },
    radius: {
      none: {
        wrapper: "rounded-none"
      },
      sm: {
        wrapper: "rounded-small"
      },
      md: {
        wrapper: "rounded-medium"
      },
      lg: {
        wrapper: "rounded-large"
      }
    },
    shadow: {
      none: {
        wrapper: "shadow-none"
      },
      sm: {
        wrapper: "shadow-small"
      },
      md: {
        wrapper: "shadow-medium"
      },
      lg: {
        wrapper: "shadow-large"
      }
    },
    hideHeader: {
      true: {
        thead: "hidden"
      }
    },
    isStriped: {
      true: {
        td: [
          "group-data-[odd=true]:before:bg-default-100",
          "group-data-[odd=true]:before:opacity-100",
          "group-data-[odd=true]:before:-z-10"
        ]
      }
    },
    isCompact: {
      true: {
        td: "py-1"
      },
      false: {}
    },
    isHeaderSticky: {
      true: {
        thead: "sticky top-0 z-20 [&>tr]:first:shadow-small"
      }
    },
    isSelectable: {
      true: {
        tr: "cursor-default",
        td: [
          "group-aria-[selected=false]:group-data-[hover=true]:before:bg-default-100",
          "group-aria-[selected=false]:group-data-[hover=true]:before:opacity-70"
        ]
      }
    },
    isMultiSelectable: {
      true: {
        td: [
          "group-data-[first=true]:first:before:rounded-tl-lg",
          "group-data-[first=true]:rtl:first:before:rounded-tr-lg",
          "group-data-[first=true]:rtl:first:before:rounded-tl-[unset]",
          "group-data-[first=true]:last:before:rounded-tr-lg",
          "group-data-[first=true]:rtl:last:before:rounded-tl-lg",
          "group-data-[first=true]:rtl:last:before:rounded-tr-[unset]",
          "group-data-[middle=true]:before:rounded-none",
          "group-data-[last=true]:first:before:rounded-bl-lg",
          "group-data-[last=true]:rtl:first:before:rounded-br-lg",
          "group-data-[last=true]:rtl:first:before:rounded-bl-[unset]",
          "group-data-[last=true]:last:before:rounded-br-lg",
          "group-data-[last=true]:rtl:last:before:rounded-bl-lg",
          "group-data-[last=true]:rtl:last:before:rounded-br-[unset]"
        ]
      },
      false: {
        td: [
          "first:before:rounded-l-lg",
          "rtl:first:before:rounded-r-lg",
          "rtl:first:before:rounded-l-[unset]",
          "last:before:rounded-r-lg",
          "rtl:last:before:rounded-l-lg",
          "rtl:last:before:rounded-r-[unset]"
        ]
      }
    },
    fullWidth: {
      true: {
        base: "w-full",
        wrapper: "w-full",
        table: "w-full"
      }
    },
    align: {
      start: {
        th: "text-start",
        td: "text-start"
      },
      center: {
        th: "text-center",
        td: "text-center"
      },
      end: {
        th: "text-end",
        td: "text-end"
      }
    }
  },
  defaultVariants: {
    layout: "auto",
    shadow: "sm",
    radius: "lg",
    color: "default",
    isCompact: false,
    hideHeader: false,
    isStriped: false,
    fullWidth: true,
    align: "start"
  },
  compoundVariants: [
    {
      isStriped: true,
      color: "default",
      class: {
        td: "group-data-[odd=true]:data-[selected=true]:before:bg-default/60"
      }
    },
    {
      isStriped: true,
      color: "primary",
      class: {
        td: "group-data-[odd=true]:data-[selected=true]:before:bg-primary/20"
      }
    },
    {
      isStriped: true,
      color: "secondary",
      class: {
        td: "group-data-[odd=true]:data-[selected=true]:before:bg-secondary/20"
      }
    },
    {
      isStriped: true,
      color: "success",
      class: {
        td: "group-data-[odd=true]:data-[selected=true]:before:bg-success/20"
      }
    },
    {
      isStriped: true,
      color: "warning",
      class: {
        td: "group-data-[odd=true]:data-[selected=true]:before:bg-warning/20"
      }
    },
    {
      isStriped: true,
      color: "danger",
      class: {
        td: "group-data-[odd=true]:data-[selected=true]:before:bg-danger/20"
      }
    }
  ]
});
var checkbox = tv({
  slots: {
    base: "group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",
    wrapper: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "flex-shrink-0",
      "overflow-hidden",
      "before:content-['']",
      "before:absolute",
      "before:inset-0",
      "before:border-solid",
      "before:border-2",
      "before:box-border",
      "before:border-default",
      "after:content-['']",
      "after:absolute",
      "after:inset-0",
      "after:scale-50",
      "after:opacity-0",
      "after:origin-center",
      "group-data-[selected=true]:after:scale-100",
      "group-data-[selected=true]:after:opacity-100",
      "group-data-[hover=true]:before:bg-default-100",
      ...groupDataFocusVisibleClasses
    ],
    icon: "z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",
    label: "relative text-foreground select-none"
  },
  variants: {
    color: {
      default: {
        wrapper: "after:bg-default after:text-default-foreground text-default-foreground"
      },
      primary: {
        wrapper: "after:bg-primary after:text-primary-foreground text-primary-foreground"
      },
      secondary: {
        wrapper: "after:bg-secondary after:text-secondary-foreground text-secondary-foreground"
      },
      success: {
        wrapper: "after:bg-success after:text-success-foreground text-success-foreground"
      },
      warning: {
        wrapper: "after:bg-warning after:text-warning-foreground text-warning-foreground"
      },
      danger: {
        wrapper: "after:bg-danger after:text-danger-foreground text-danger-foreground"
      }
    },
    size: {
      sm: {
        wrapper: [
          "w-4 h-4 mr-2 rtl:ml-2 rtl:mr-[unset]",
          "rounded-[calc(theme(borderRadius.medium)*0.5)]",
          "before:rounded-[calc(theme(borderRadius.medium)*0.5)]",
          "after:rounded-[calc(theme(borderRadius.medium)*0.5)]"
        ],
        label: "text-small",
        icon: "w-3 h-2"
      },
      md: {
        wrapper: [
          "w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset]",
          "rounded-[calc(theme(borderRadius.medium)*0.6)]",
          "before:rounded-[calc(theme(borderRadius.medium)*0.6)]",
          "after:rounded-[calc(theme(borderRadius.medium)*0.6)]"
        ],
        label: "text-medium",
        icon: "w-4 h-3"
      },
      lg: {
        wrapper: [
          "w-6 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]",
          "rounded-[calc(theme(borderRadius.medium)*0.7)]",
          "before:rounded-[calc(theme(borderRadius.medium)*0.7)]",
          "after:rounded-[calc(theme(borderRadius.medium)*0.7)]"
        ],
        label: "text-large",
        icon: "w-5 h-4"
      }
    },
    radius: {
      none: {
        wrapper: "rounded-none before:rounded-none after:rounded-none"
      },
      sm: {
        wrapper: [
          "rounded-[calc(theme(borderRadius.medium)*0.5)]",
          "before:rounded-[calc(theme(borderRadius.medium)*0.5)]",
          "after:rounded-[calc(theme(borderRadius.medium)*0.5)]"
        ]
      },
      md: {
        wrapper: [
          "rounded-[calc(theme(borderRadius.medium)*0.6)]",
          "before:rounded-[calc(theme(borderRadius.medium)*0.6)]",
          "after:rounded-[calc(theme(borderRadius.medium)*0.6)]"
        ]
      },
      lg: {
        wrapper: [
          "rounded-[calc(theme(borderRadius.medium)*0.7)]",
          "before:rounded-[calc(theme(borderRadius.medium)*0.7)]",
          "after:rounded-[calc(theme(borderRadius.medium)*0.7)]"
        ]
      },
      full: {
        wrapper: "rounded-full before:rounded-full after:rounded-full"
      }
    },
    lineThrough: {
      true: {
        label: [
          "inline-flex",
          "items-center",
          "justify-center",
          "before:content-['']",
          "before:absolute",
          "before:bg-foreground",
          "before:w-0",
          "before:h-0.5",
          "group-data-[selected=true]:opacity-60",
          "group-data-[selected=true]:before:w-full"
        ]
      }
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none"
      }
    },
    isInvalid: {
      true: {
        wrapper: "before:border-danger",
        label: "text-danger"
      }
    },
    disableAnimation: {
      true: {
        wrapper: "transition-none",
        icon: "transition-none",
        label: "transition-none"
      },
      false: {
        wrapper: [
          "before:transition-colors",
          "group-data-[pressed=true]:scale-95",
          "transition-transform",
          "after:transition-transform-opacity",
          "after:!ease-linear",
          "after:!duration-200",
          "motion-reduce:transition-none"
        ],
        icon: "transition-opacity motion-reduce:transition-none",
        label: "transition-colors-opacity before:transition-width motion-reduce:transition-none"
      }
    }
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    isDisabled: false,
    lineThrough: false
  }
});
tv({
  slots: {
    base: "relative flex flex-col gap-2",
    label: "relative text-medium text-foreground-500",
    wrapper: "flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",
    description: "text-small text-foreground-400",
    errorMessage: "text-small text-danger"
  },
  variants: {
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5"
      }
    },
    isInvalid: {
      true: {
        description: "text-danger"
      }
    },
    disableAnimation: {
      true: {},
      false: {
        description: "transition-colors !duration-150 motion-reduce:transition-none"
      }
    }
  },
  defaultVariants: {
    isInvalid: false,
    isRequired: false
  }
});
var ChevronDownIcon = ({ strokeWidth = 1.5, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "svg",
  {
    "aria-hidden": "true",
    fill: "none",
    focusable: "false",
    height: "1em",
    role: "presentation",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth,
    viewBox: "0 0 24 24",
    width: "1em",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "m6 9 6 6 6-6" })
  }
);
function $e93e671b31057976$export$b8473d3665f3a75a(props, state, ref) {
  let { validationBehavior, focus } = props;
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$2(() => {
    if (validationBehavior === "native" && (ref === null || ref === void 0 ? void 0 : ref.current)) {
      let errorMessage = state.realtimeValidation.isInvalid ? state.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
      ref.current.setCustomValidity(errorMessage);
      if (!ref.current.hasAttribute("title")) ref.current.title = "";
      if (!state.realtimeValidation.isInvalid) state.updateValidation($e93e671b31057976$var$getNativeValidity(ref.current));
    }
  });
  let onReset = $8ae05eaa5c114e9c$export$7f54fc3180508a52$2(() => {
    state.resetValidation();
  });
  let onInvalid = $8ae05eaa5c114e9c$export$7f54fc3180508a52$2((e) => {
    var _ref_current;
    if (!state.displayValidation.isInvalid) state.commitValidation();
    let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
    if (!e.defaultPrevented && ref && form && $e93e671b31057976$var$getFirstInvalidInput(form) === ref.current) {
      var _ref_current1;
      if (focus) focus();
      else (_ref_current1 = ref.current) === null || _ref_current1 === void 0 ? void 0 : _ref_current1.focus();
      $507fabe10e71c6fb$export$8397ddfc504fdb9a("keyboard");
    }
    e.preventDefault();
  });
  let onChange = $8ae05eaa5c114e9c$export$7f54fc3180508a52$2(() => {
    state.commitValidation();
  });
  reactExports.useEffect(() => {
    let input = ref === null || ref === void 0 ? void 0 : ref.current;
    if (!input) return;
    let form = input.form;
    input.addEventListener("invalid", onInvalid);
    input.addEventListener("change", onChange);
    form === null || form === void 0 ? void 0 : form.addEventListener("reset", onReset);
    return () => {
      input.removeEventListener("invalid", onInvalid);
      input.removeEventListener("change", onChange);
      form === null || form === void 0 ? void 0 : form.removeEventListener("reset", onReset);
    };
  }, [
    ref,
    onInvalid,
    onChange,
    onReset,
    validationBehavior
  ]);
}
function $e93e671b31057976$var$getValidity(input) {
  let validity = input.validity;
  return {
    badInput: validity.badInput,
    customError: validity.customError,
    patternMismatch: validity.patternMismatch,
    rangeOverflow: validity.rangeOverflow,
    rangeUnderflow: validity.rangeUnderflow,
    stepMismatch: validity.stepMismatch,
    tooLong: validity.tooLong,
    tooShort: validity.tooShort,
    typeMismatch: validity.typeMismatch,
    valueMissing: validity.valueMissing,
    valid: validity.valid
  };
}
function $e93e671b31057976$var$getNativeValidity(input) {
  return {
    isInvalid: !input.validity.valid,
    validationDetails: $e93e671b31057976$var$getValidity(input),
    validationErrors: input.validationMessage ? [
      input.validationMessage
    ] : []
  };
}
function $e93e671b31057976$var$getFirstInvalidInput(form) {
  for (let i = 0; i < form.elements.length; i++) {
    let element = form.elements[i];
    if (!element.validity.valid) return element;
  }
  return null;
}
const $e5be200c675c3b3a$export$aca958c65c314e6c = {
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valueMissing: false,
  valid: true
};
const $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE = {
  ...$e5be200c675c3b3a$export$aca958c65c314e6c,
  customError: true,
  valid: false
};
const $e5be200c675c3b3a$export$dad6ae84456c676a = {
  isInvalid: false,
  validationDetails: $e5be200c675c3b3a$export$aca958c65c314e6c,
  validationErrors: []
};
const $e5be200c675c3b3a$export$571b5131b7e65c11 = reactExports.createContext({});
const $e5be200c675c3b3a$export$a763b9476acd3eb = "__formValidationState" + Date.now();
function $e5be200c675c3b3a$export$fc1a364ae1f3ff10(props) {
  if (props[$e5be200c675c3b3a$export$a763b9476acd3eb]) {
    let { realtimeValidation, displayValidation, updateValidation, resetValidation, commitValidation } = props[$e5be200c675c3b3a$export$a763b9476acd3eb];
    return {
      realtimeValidation,
      displayValidation,
      updateValidation,
      resetValidation,
      commitValidation
    };
  }
  return $e5be200c675c3b3a$var$useFormValidationStateImpl(props);
}
function $e5be200c675c3b3a$var$useFormValidationStateImpl(props) {
  let { isInvalid, validationState, name, value, builtinValidation, validate, validationBehavior = "aria" } = props;
  if (validationState) isInvalid || (isInvalid = validationState === "invalid");
  let controlledError = isInvalid !== void 0 ? {
    isInvalid,
    validationErrors: [],
    validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
  } : null;
  let clientError = reactExports.useMemo(() => $e5be200c675c3b3a$var$getValidationResult($e5be200c675c3b3a$var$runValidate(validate, value)), [
    validate,
    value
  ]);
  if (builtinValidation === null || builtinValidation === void 0 ? void 0 : builtinValidation.validationDetails.valid) builtinValidation = null;
  let serverErrors = reactExports.useContext($e5be200c675c3b3a$export$571b5131b7e65c11);
  let serverErrorMessages = reactExports.useMemo(() => {
    if (name) return Array.isArray(name) ? name.flatMap((name2) => $e5be200c675c3b3a$var$asArray(serverErrors[name2])) : $e5be200c675c3b3a$var$asArray(serverErrors[name]);
    return [];
  }, [
    serverErrors,
    name
  ]);
  let [lastServerErrors, setLastServerErrors] = reactExports.useState(serverErrors);
  let [isServerErrorCleared, setServerErrorCleared] = reactExports.useState(false);
  if (serverErrors !== lastServerErrors) {
    setLastServerErrors(serverErrors);
    setServerErrorCleared(false);
  }
  let serverError = reactExports.useMemo(() => $e5be200c675c3b3a$var$getValidationResult(isServerErrorCleared ? [] : serverErrorMessages), [
    isServerErrorCleared,
    serverErrorMessages
  ]);
  let nextValidation = reactExports.useRef($e5be200c675c3b3a$export$dad6ae84456c676a);
  let [currentValidity, setCurrentValidity] = reactExports.useState($e5be200c675c3b3a$export$dad6ae84456c676a);
  let lastError = reactExports.useRef($e5be200c675c3b3a$export$dad6ae84456c676a);
  let commitValidation = () => {
    if (!commitQueued) return;
    setCommitQueued(false);
    let error = clientError || builtinValidation || nextValidation.current;
    if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
      lastError.current = error;
      setCurrentValidity(error);
    }
  };
  let [commitQueued, setCommitQueued] = reactExports.useState(false);
  reactExports.useEffect(commitValidation);
  let realtimeValidation = controlledError || serverError || clientError || builtinValidation || $e5be200c675c3b3a$export$dad6ae84456c676a;
  let displayValidation = validationBehavior === "native" ? controlledError || serverError || currentValidity : controlledError || serverError || clientError || builtinValidation || currentValidity;
  return {
    realtimeValidation,
    displayValidation,
    updateValidation(value2) {
      if (validationBehavior === "aria" && !$e5be200c675c3b3a$var$isEqualValidation(currentValidity, value2)) setCurrentValidity(value2);
      else nextValidation.current = value2;
    },
    resetValidation() {
      let error = $e5be200c675c3b3a$export$dad6ae84456c676a;
      if (!$e5be200c675c3b3a$var$isEqualValidation(error, lastError.current)) {
        lastError.current = error;
        setCurrentValidity(error);
      }
      if (validationBehavior === "native") setCommitQueued(false);
      setServerErrorCleared(true);
    },
    commitValidation() {
      if (validationBehavior === "native") setCommitQueued(true);
      setServerErrorCleared(true);
    }
  };
}
function $e5be200c675c3b3a$var$asArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [
    v
  ];
}
function $e5be200c675c3b3a$var$runValidate(validate, value) {
  if (typeof validate === "function") {
    let e = validate(value);
    if (e && typeof e !== "boolean") return $e5be200c675c3b3a$var$asArray(e);
  }
  return [];
}
function $e5be200c675c3b3a$var$getValidationResult(errors) {
  return errors.length ? {
    isInvalid: true,
    validationErrors: errors,
    validationDetails: $e5be200c675c3b3a$var$CUSTOM_VALIDITY_STATE
  } : null;
}
function $e5be200c675c3b3a$var$isEqualValidation(a, b) {
  if (a === b) return true;
  return a && b && a.isInvalid === b.isInvalid && a.validationErrors.length === b.validationErrors.length && a.validationErrors.every((a2, i) => a2 === b.validationErrors[i]) && Object.entries(a.validationDetails).every(([k, v]) => b.validationDetails[k] === v);
}
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1 = typeof document !== "undefined" ? React.useLayoutEffect : () => {
};
function $8ae05eaa5c114e9c$export$7f54fc3180508a52$1(fn) {
  const ref = reactExports.useRef(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return reactExports.useCallback((...args) => {
    const f = ref.current;
    return f === null || f === void 0 ? void 0 : f(...args);
  }, []);
}
let $bdb11010cef70236$var$idsUpdaterMap$1 = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$cd8c9cb68f842629$1(idA, idB) {
  if (idA === idB) return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap$1.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $bdb11010cef70236$var$idsUpdaterMap$1.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}
function $ff5963eb1fccf552$export$e08e3b67e392101e$1(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}
const $431fbd86ca7dc216$export$b204af158042fbac$1 = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a$1 = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac$1(el);
  return doc.defaultView || window;
};
function $3ef42575df84b30b$export$9d1611c77c2fe928$1(...args) {
  let result = {
    ...args[0]
  };
  for (let i = 1; i < args.length; i++) {
    let props = args[i];
    for (let key in props) {
      let a = result[key];
      let b = props[key];
      if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e$1(a, b);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = clsx(a, b);
      else if (key === "id" && a && b) result.id = $bdb11010cef70236$export$cd8c9cb68f842629$1(a, b);
      else result[key] = b !== void 0 ? b : a;
    }
  }
  return result;
}
const $65484d02dcb7eb3e$var$DOMPropNames$1 = /* @__PURE__ */ new Set([
  "id"
]);
const $65484d02dcb7eb3e$var$labelablePropNames$1 = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]);
const $65484d02dcb7eb3e$var$linkPropNames$1 = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]);
const $65484d02dcb7eb3e$var$propRe$1 = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f$1(props, opts = {}) {
  let { labelable, isLink, propNames } = opts;
  let filteredProps = {};
  for (const prop in props) if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames$1.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames$1.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames$1.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe$1.test(prop))) filteredProps[prop] = props[prop];
  return filteredProps;
}
function $7215afc6de606d6b$export$de79e2c695e052f3$1(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll$1()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements$1(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition$1(scrollableElements);
  }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached$1 = null;
function $7215afc6de606d6b$var$supportsPreventScroll$1() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached$1 == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached$1 = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached$1 = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached$1;
}
function $7215afc6de606d6b$var$getScrollableElements$1(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition$1(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
function $c87311424ea30a05$var$testUserAgent$1(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform$1(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached$1(fn) {
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
const $c87311424ea30a05$export$9ac100e40613ea10$1 = $c87311424ea30a05$var$cached$1(function() {
  return $c87311424ea30a05$var$testPlatform$1(/^Mac/i);
});
const $c87311424ea30a05$export$186c6964ca17d99$1 = $c87311424ea30a05$var$cached$1(function() {
  return $c87311424ea30a05$var$testPlatform$1(/^iPhone/i);
});
const $c87311424ea30a05$export$7bef049ce92e4224$1 = $c87311424ea30a05$var$cached$1(function() {
  return $c87311424ea30a05$var$testPlatform$1(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10$1() && navigator.maxTouchPoints > 1;
});
const $c87311424ea30a05$export$fedb369cb70207f1$1 = $c87311424ea30a05$var$cached$1(function() {
  return $c87311424ea30a05$export$186c6964ca17d99$1() || $c87311424ea30a05$export$7bef049ce92e4224$1();
});
const $c87311424ea30a05$export$78551043582a6a98$1 = $c87311424ea30a05$var$cached$1(function() {
  return $c87311424ea30a05$var$testUserAgent$1(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e$1();
});
const $c87311424ea30a05$export$6446a186d09e379e$1 = $c87311424ea30a05$var$cached$1(function() {
  return $c87311424ea30a05$var$testUserAgent$1(/Chrome/i);
});
const $c87311424ea30a05$export$a11b0059900ceec8$1 = $c87311424ea30a05$var$cached$1(function() {
  return $c87311424ea30a05$var$testUserAgent$1(/Android/i);
});
const $c87311424ea30a05$export$b7d78993b74f766d$1 = $c87311424ea30a05$var$cached$1(function() {
  return $c87311424ea30a05$var$testUserAgent$1(/Firefox/i);
});
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7$1(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ($c87311424ea30a05$export$b7d78993b74f766d$1() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ($c87311424ea30a05$export$9ac100e40613ea10$1()) metaKey = true;
    else ctrlKey = true;
  }
  let event = $c87311424ea30a05$export$78551043582a6a98$1() && $c87311424ea30a05$export$9ac100e40613ea10$1() && !$c87311424ea30a05$export$7bef049ce92e4224$1() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7$1.isOpening = setOpening;
  $7215afc6de606d6b$export$de79e2c695e052f3$1(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7$1.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7$1.isOpening = false;
let $bbed8b41f857bcc0$var$transitionsByElement$1 = /* @__PURE__ */ new Map();
let $bbed8b41f857bcc0$var$transitionCallbacks$1 = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents$1() {
  if (typeof window === "undefined") return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e) => {
    if (!isTransitionEvent(e) || !e.target) return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement$1.get(e.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement$1.set(e.target, transitions);
      e.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e.propertyName);
  };
  let onTransitionEnd = (e) => {
    if (!isTransitionEvent(e) || !e.target) return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement$1.get(e.target);
    if (!properties) return;
    properties.delete(e.propertyName);
    if (properties.size === 0) {
      e.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement$1.delete(e.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement$1.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks$1) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks$1.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents$1();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents$1);
}
function $bbed8b41f857bcc0$export$24490316f764c430$1(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement$1.size === 0) fn();
    else $bbed8b41f857bcc0$var$transitionCallbacks$1.add(fn);
  });
}
function $03deb23ff14920c4$export$4eaf04e54aa8eed6$1() {
  let globalListeners = reactExports.useRef(/* @__PURE__ */ new Map());
  let addGlobalListener = reactExports.useCallback((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = reactExports.useCallback((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = reactExports.useCallback(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  reactExports.useEffect(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e$1(context, ref) {
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref) context.ref.current = null;
      };
    }
  });
}
function $6a7db85432448f7f$export$60278871457622de$1(event) {
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  if ($c87311424ea30a05$export$a11b0059900ceec8$1() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63$1(event) {
  return !$c87311424ea30a05$export$a11b0059900ceec8$1() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}
function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
  let resetValue = reactExports.useRef(initialValue);
  let handleReset = $8ae05eaa5c114e9c$export$7f54fc3180508a52$1(() => {
    if (onReset) onReset(resetValue.current);
  });
  reactExports.useEffect(() => {
    var _ref_current;
    let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
    form === null || form === void 0 ? void 0 : form.addEventListener("reset", handleReset);
    return () => {
      form === null || form === void 0 ? void 0 : form.removeEventListener("reset", handleReset);
    };
  }, [
    ref,
    handleReset
  ]);
}
let $14c0b72509d70225$var$state$1 = "default";
let $14c0b72509d70225$var$savedUserSelect$1 = "";
let $14c0b72509d70225$var$modifiedElementMap$1 = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487$1(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f1$1()) {
    if ($14c0b72509d70225$var$state$1 === "default") {
      const documentObject = $431fbd86ca7dc216$export$b204af158042fbac$1(target);
      $14c0b72509d70225$var$savedUserSelect$1 = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state$1 = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    $14c0b72509d70225$var$modifiedElementMap$1.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295$1(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f1$1()) {
    if ($14c0b72509d70225$var$state$1 !== "disabled") return;
    $14c0b72509d70225$var$state$1 = "restoring";
    setTimeout(() => {
      $bbed8b41f857bcc0$export$24490316f764c430$1(() => {
        if ($14c0b72509d70225$var$state$1 === "restoring") {
          const documentObject = $431fbd86ca7dc216$export$b204af158042fbac$1(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect$1 || "";
          $14c0b72509d70225$var$savedUserSelect$1 = "";
          $14c0b72509d70225$var$state$1 = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap$1.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap$1.get(target);
      if (target.style.userSelect === "none") target.style.userSelect = targetOldUserSelect;
      if (target.getAttribute("style") === "") target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap$1.delete(target);
    }
  }
}
const $ae1eeba8b9eafd08$export$5165eccb35aaadb5$1 = React.createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5$1.displayName = "PressResponderContext";
function $f6c31cce2adf654f$var$usePressResponderContext$1(props) {
  let context = reactExports.useContext($ae1eeba8b9eafd08$export$5165eccb35aaadb5$1);
  if (context) {
    let { register, ...contextProps } = context;
    props = $3ef42575df84b30b$export$9d1611c77c2fe928$1(contextProps, props);
    register();
  }
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e$1(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation$1 = /* @__PURE__ */ new WeakMap();
let $f6c31cce2adf654f$var$PressEvent$1 = class $f6c31cce2adf654f$var$PressEvent {
  continuePropagation() {
    _class_private_field_set(this, $f6c31cce2adf654f$var$_shouldStopPropagation$1, false);
  }
  get shouldStopPropagation() {
    return _class_private_field_get(this, $f6c31cce2adf654f$var$_shouldStopPropagation$1);
  }
  constructor(type, pointerType, originalEvent, state) {
    _class_private_field_init(this, $f6c31cce2adf654f$var$_shouldStopPropagation$1, {
      writable: true,
      value: void 0
    });
    _class_private_field_set(this, $f6c31cce2adf654f$var$_shouldStopPropagation$1, true);
    var _state_target;
    let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
    const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
    let x, y = 0;
    let clientX, clientY = null;
    if (originalEvent.clientX != null && originalEvent.clientY != null) {
      clientX = originalEvent.clientX;
      clientY = originalEvent.clientY;
    }
    if (rect) {
      if (clientX != null && clientY != null) {
        x = clientX - rect.left;
        y = clientY - rect.top;
      } else {
        x = rect.width / 2;
        y = rect.height / 2;
      }
    }
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
    this.x = x;
    this.y = y;
  }
};
const $f6c31cce2adf654f$var$LINK_CLICKED$1 = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad21$1(props) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext$1(props);
  let [isPressed, setPressed] = reactExports.useState(false);
  let ref = reactExports.useRef({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6$1();
  let triggerPressStart = $8ae05eaa5c114e9c$export$7f54fc3180508a52$1((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled || state.didFirePressStart) return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent$1("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = $8ae05eaa5c114e9c$export$7f54fc3180508a52$1((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart) return false;
    state.ignoreClickAfterPress = true;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent$1("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled) {
      let event = new $f6c31cce2adf654f$var$PressEvent$1("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = $8ae05eaa5c114e9c$export$7f54fc3180508a52$1((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled) return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent$1("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = $8ae05eaa5c114e9c$export$7f54fc3180508a52$1((e) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent$1(state.target, e), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295$1(state.target);
    }
  });
  let cancelOnPointerExit = $8ae05eaa5c114e9c$export$7f54fc3180508a52$1((e) => {
    if (shouldCancelOnPointerExit) cancel(e);
  });
  let pressProps = reactExports.useMemo(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent$1(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard$1(e.target, e.key)) e.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            shouldStopPropagation = triggerPressStart(e, "keyboard");
            let originalTarget = e.currentTarget;
            let pressUp = (e2) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent$1(e2, originalTarget) && !e2.repeat && originalTarget.contains(e2.target) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent$1(state.target, e2), "keyboard");
            };
            addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac$1(e.currentTarget), "keyup", $ff5963eb1fccf552$export$e08e3b67e392101e$1(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation) e.stopPropagation();
          if (e.metaKey && $c87311424ea30a05$export$9ac100e40613ea10$1()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
        } else if (e.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e) {
        if (e && !e.currentTarget.contains(e.target)) return;
        if (e && e.button === 0 && !state.isTriggeringEvent && !$ea8dcbcb9ea1b556$export$95185d699e05d4d7$1.isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled) e.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || $6a7db85432448f7f$export$60278871457622de$1(e.nativeEvent))) {
            if (!isDisabled && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3$1(e.currentTarget);
            let stopPressStart = triggerPressStart(e, "virtual");
            let stopPressUp = triggerPressUp(e, "virtual");
            let stopPressEnd = triggerPressEnd(e, "virtual");
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
          if (shouldStopPropagation) e.stopPropagation();
        }
      }
    };
    let onKeyUp = (e) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent$1(e, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard$1(e.target, e.key)) e.preventDefault();
        let target = e.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent$1(state.target, e), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (e.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink$1(state.target) && state.target.contains(target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED$1]) {
          e[$f6c31cce2adf654f$var$LINK_CLICKED$1] = true;
          $ea8dcbcb9ea1b556$export$95185d699e05d4d7$1(state.target, e, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
      } else if (e.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values()) (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e) => {
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
        if ($6a7db85432448f7f$export$29bf1b5f2c56cf63$1(e.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault$1(e.currentTarget)) e.preventDefault();
        state.pointerType = e.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;
          if (!isDisabled && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3$1(e.currentTarget);
          if (!allowTextSelectionOnPress) $14c0b72509d70225$export$16a4697467175487$1(state.target);
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
          addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac$1(e.currentTarget), "pointermove", onPointerMove, false);
          addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac$1(e.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac$1(e.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseDown = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (e.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault$1(e.currentTarget)) e.preventDefault();
          e.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e) => {
        if (!e.currentTarget.contains(e.target) || state.pointerType === "virtual") return;
        if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget$1(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
      };
      let onPointerMove = (e) => {
        if (e.pointerId !== state.activePointerId) return;
        if (state.target && $f6c31cce2adf654f$var$isOverTarget$1(e, state.target)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent$1(state.target, e), state.pointerType);
          }
        } else if (state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent$1(state.target, e), state.pointerType, false);
          cancelOnPointerExit(e);
        }
      };
      let onPointerUp = (e) => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
          if ($f6c31cce2adf654f$var$isOverTarget$1(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent$1(state.target, e), state.pointerType);
          else if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent$1(state.target, e), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295$1(state.target);
        }
      };
      let onPointerCancel = (e) => {
        cancel(e);
      };
      pressProps2.onDragStart = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        cancel(e);
      };
    } else {
      pressProps2.onMouseDown = (e) => {
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault$1(e.currentTarget)) e.preventDefault();
        if (state.ignoreEmulatedMouseEvents) {
          e.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e.currentTarget;
        state.pointerType = $6a7db85432448f7f$export$60278871457622de$1(e.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3$1(e.currentTarget);
        let shouldStopPropagation = triggerPressStart(e, state.pointerType);
        if (shouldStopPropagation) e.stopPropagation();
        addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac$1(e.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseLeave = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
          cancelOnPointerExit(e);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseUp = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType || "mouse");
      };
      let onMouseUp = (e) => {
        if (e.button !== 0) return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && $f6c31cce2adf654f$var$isOverTarget$1(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent$1(state.target, e), state.pointerType);
        else if (state.target && state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent$1(state.target, e), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent$1(e.nativeEvent);
        if (!touch) return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3$1(e.currentTarget);
        if (!allowTextSelectionOnPress) $14c0b72509d70225$export$16a4697467175487$1(state.target);
        let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent$1(state.target, e), state.pointerType);
        if (shouldStopPropagation) e.stopPropagation();
        addGlobalListener($431fbd86ca7dc216$export$f21a1ffae260145a$1(e.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (!state.isPressed) {
          e.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById$1(e.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget$1(touch, e.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent$1(state.target, e), state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent$1(state.target, e), state.pointerType, false);
          cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent$1(state.target, e));
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onTouchEnd = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (!state.isPressed) {
          e.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById$1(e.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget$1(touch, e.currentTarget) && state.pointerType != null) {
          triggerPressUp($f6c31cce2adf654f$var$createTouchEvent$1(state.target, e), state.pointerType);
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent$1(state.target, e), state.pointerType);
        } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent$1(state.target, e), state.pointerType, false);
        if (shouldStopPropagation) e.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295$1(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        e.stopPropagation();
        if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent$1(state.target, e));
      };
      let onScroll = (e) => {
        if (state.isPressed && e.target.contains(state.target)) cancel({
          currentTarget: state.target,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
          altKey: false
        });
      };
      pressProps2.onDragStart = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        cancel(e);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp
  ]);
  reactExports.useEffect(() => {
    return () => {
      var _ref_current_target;
      if (!allowTextSelectionOnPress)
        $14c0b72509d70225$export$b0d6fa1ab32e3295$1((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : void 0);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: $3ef42575df84b30b$export$9d1611c77c2fe928$1(domProps, pressProps)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink$1(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent$1(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof $431fbd86ca7dc216$export$f21a1ffae260145a$1(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey$1(element, key) || element instanceof $431fbd86ca7dc216$export$f21a1ffae260145a$1(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink$1(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent$1(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0) return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById$1(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i];
    if (touch.identifier === pointerId) return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createTouchEvent$1(target, e) {
  let clientX = 0;
  let clientY = 0;
  if (e.targetTouches && e.targetTouches.length === 1) {
    clientX = e.targetTouches[0].clientX;
    clientY = e.targetTouches[0].clientY;
  }
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$createEvent$1(target, e) {
  let clientX = e.clientX;
  let clientY = e.clientY;
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$getPointClientRect$1(point) {
  let offsetX = 0;
  let offsetY = 0;
  if (point.width !== void 0) offsetX = point.width / 2;
  else if (point.radiusX !== void 0) offsetX = point.radiusX;
  if (point.height !== void 0) offsetY = point.height / 2;
  else if (point.radiusY !== void 0) offsetY = point.radiusY;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping$1(a, b) {
  if (a.left > b.right || b.left > a.right) return false;
  if (a.top > b.bottom || b.top > a.bottom) return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget$1(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect$1(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping$1(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault$1(target) {
  return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard$1(target, key) {
  if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey$1(target, key);
  if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink$1(target)) return false;
  return true;
}
const $f6c31cce2adf654f$var$nonTextInputTypes$1 = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey$1(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes$1.has(target.type);
}
class $8a9cb279dc87e130$export$905e7fc544a71f36 {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = reactExports.useRef({
    isFocused: false,
    observer: null
  });
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c$1(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = $8ae05eaa5c114e9c$export$7f54fc3180508a52$1((e) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  });
  return reactExports.useCallback((e) => {
    if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e.target;
      let onBlurHandler = (e2) => {
        stateRef.current.isFocused = false;
        if (target.disabled)
          dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e2));
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = reactExports.useCallback((e) => {
    if (e.target === e.currentTarget) {
      if (onBlurProp) onBlurProp(e);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  const onFocus = reactExports.useCallback((e) => {
    const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac$1(e.target);
    if (e.target === e.currentTarget && ownerDocument.activeElement === e.target) {
      if (onFocusProp) onFocusProp(e);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}
let $507fabe10e71c6fb$var$currentModality$1 = null;
let $507fabe10e71c6fb$var$changeHandlers$1 = /* @__PURE__ */ new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7$1 = /* @__PURE__ */ new Map();
let $507fabe10e71c6fb$var$hasEventBeforeFocus$1 = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently$1 = false;
function $507fabe10e71c6fb$var$triggerChangeHandlers$1(modality, e) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers$1) handler(modality, e);
}
function $507fabe10e71c6fb$var$isValidKey$1(e) {
  return !(e.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10$1() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent$1(e) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus$1 = true;
  if ($507fabe10e71c6fb$var$isValidKey$1(e)) {
    $507fabe10e71c6fb$var$currentModality$1 = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers$1("keyboard", e);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent$1(e) {
  $507fabe10e71c6fb$var$currentModality$1 = "pointer";
  if (e.type === "mousedown" || e.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus$1 = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers$1("pointer", e);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent$1(e) {
  if ($6a7db85432448f7f$export$60278871457622de$1(e)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus$1 = true;
    $507fabe10e71c6fb$var$currentModality$1 = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent$1(e) {
  if (e.target === window || e.target === document) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus$1 && !$507fabe10e71c6fb$var$hasBlurredWindowRecently$1) {
    $507fabe10e71c6fb$var$currentModality$1 = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers$1("virtual", e);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus$1 = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently$1 = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur$1() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus$1 = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently$1 = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents$1(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7$1.get($431fbd86ca7dc216$export$f21a1ffae260145a$1(element))) return;
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a$1(element);
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac$1(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus$1 = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent$1, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent$1, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent$1, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent$1, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur$1, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking$1(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7$1.set(windowObject, {
    focus
  });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking$1 = (element, loadListener) => {
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a$1(element);
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac$1(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7$1.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7$1.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent$1, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent$1, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent$1, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent$1, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur$1, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent$1, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7$1.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d$1(element) {
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac$1(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents$1(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents$1(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking$1(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d$1();
function $507fabe10e71c6fb$export$630ff653c5ada6a9$1() {
  return $507fabe10e71c6fb$var$currentModality$1;
}
function $93925083ecbb358c$export$48d1ea6320830260(handler) {
  if (!handler) return void 0;
  let shouldStopPropagation = true;
  return (e) => {
    let event = {
      ...e,
      preventDefault() {
        e.preventDefault();
      },
      isDefaultPrevented() {
        return e.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        shouldStopPropagation = false;
      }
    };
    handler(event);
    if (shouldStopPropagation) e.stopPropagation();
  };
}
function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyDown),
      onKeyUp: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyUp)
    }
  };
}
function $6a99195332edec8b$export$80f3e147d781571c$1(element) {
  const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac$1(element);
  if ($507fabe10e71c6fb$export$630ff653c5ada6a9$1() === "virtual") {
    let lastFocusedElement = ownerDocument.activeElement;
    $bbed8b41f857bcc0$export$24490316f764c430$1(() => {
      if (ownerDocument.activeElement === lastFocusedElement && element.isConnected) $7215afc6de606d6b$export$de79e2c695e052f3$1(element);
    });
  } else $7215afc6de606d6b$export$de79e2c695e052f3$1(element);
}
let $e6afbd83fe6ebbd2$var$FocusableContext = /* @__PURE__ */ React.createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
  let context = reactExports.useContext($e6afbd83fe6ebbd2$var$FocusableContext) || {};
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e$1(context, ref);
  let { ref: _, ...otherProps } = context;
  return otherProps;
}
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props);
  let { keyboardProps } = $46d819fcbaf35654$export$8f71654801c2f7cd(props);
  let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928$1(focusProps, keyboardProps);
  let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = reactExports.useRef(props.autoFocus);
  reactExports.useEffect(() => {
    if (autoFocusRef.current && domRef.current) $6a99195332edec8b$export$80f3e147d781571c$1(domRef.current);
    autoFocusRef.current = false;
  }, [
    domRef
  ]);
  return {
    focusableProps: $3ef42575df84b30b$export$9d1611c77c2fe928$1({
      ...interactions,
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : void 0
    }, interactionProps)
  };
}
function $d2c8e2b0480f3f34$export$cbe85ee05b554577(props, state, ref) {
  let { isDisabled = false, isReadOnly = false, value, name, children, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, validationState = "valid", isInvalid } = props;
  let onChange = (e) => {
    e.stopPropagation();
    state.setSelected(e.target.checked);
  };
  let hasChildren = children != null;
  let hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
  if (!hasChildren && !hasAriaLabel) console.warn("If you do not provide children, you must specify an aria-label for accessibility");
  let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21$1({
    isDisabled
  });
  let { pressProps: labelProps, isPressed: isLabelPressed } = $f6c31cce2adf654f$export$45712eceda6fad21$1({
    isDisabled: isDisabled || isReadOnly,
    onPress() {
      state.toggle();
    }
  });
  let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
  let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928$1(pressProps, focusableProps);
  let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f$1(props, {
    labelable: true
  });
  $99facab73266f662$export$5add1d006293d136(ref, state.isSelected, state.setSelected);
  return {
    labelProps: $3ef42575df84b30b$export$9d1611c77c2fe928$1(labelProps, {
      onClick: (e) => e.preventDefault()
    }),
    inputProps: $3ef42575df84b30b$export$9d1611c77c2fe928$1(domProps, {
      "aria-invalid": isInvalid || validationState === "invalid" || void 0,
      "aria-errormessage": props["aria-errormessage"],
      "aria-controls": props["aria-controls"],
      "aria-readonly": isReadOnly || void 0,
      onChange,
      disabled: isDisabled,
      ...value == null ? {} : {
        value
      },
      name,
      type: "checkbox",
      ...interactions
    }),
    isSelected: state.isSelected,
    isPressed: isPressed || isLabelPressed,
    isDisabled,
    isReadOnly,
    isInvalid: isInvalid || validationState === "invalid"
  };
}
function $406796ff087fe49b$export$e375f10ce42261c5(props, state, inputRef) {
  let validationState = $e5be200c675c3b3a$export$fc1a364ae1f3ff10({
    ...props,
    value: state.isSelected
  });
  let { isInvalid, validationErrors, validationDetails } = validationState.displayValidation;
  let { labelProps, inputProps, isSelected, isPressed, isDisabled, isReadOnly } = $d2c8e2b0480f3f34$export$cbe85ee05b554577({
    ...props,
    isInvalid
  }, state, inputRef);
  $e93e671b31057976$export$b8473d3665f3a75a(props, validationState, inputRef);
  let { isIndeterminate, isRequired, validationBehavior = "aria" } = props;
  reactExports.useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = !!isIndeterminate;
  });
  return {
    labelProps,
    inputProps: {
      ...inputProps,
      checked: isSelected,
      "aria-required": isRequired && validationBehavior === "aria" || void 0,
      required: isRequired && validationBehavior === "native"
    },
    isSelected,
    isPressed,
    isDisabled,
    isReadOnly,
    isInvalid,
    validationErrors,
    validationDetails
  };
}
const $1ae600c947479353$export$ec98120685d4f57d = /* @__PURE__ */ new WeakMap();
function $3017fa7ffdddec74$export$8042c6c013fd5226(props = {}) {
  let { isReadOnly } = props;
  let [isSelected, setSelected] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(props.isSelected, props.defaultSelected || false, props.onChange);
  function updateSelected(value) {
    if (!isReadOnly) setSelected(value);
  }
  function toggleState() {
    if (!isReadOnly) setSelected(!isSelected);
  }
  return {
    isSelected,
    setSelected: updateSelected,
    toggle: toggleState
  };
}
function $fba3e38d5ca8983f$export$353b32fc6898d37d(props, state, inputRef) {
  const toggleState = $3017fa7ffdddec74$export$8042c6c013fd5226({
    isReadOnly: props.isReadOnly || state.isReadOnly,
    isSelected: state.isSelected(props.value),
    onChange(isSelected) {
      if (isSelected) state.addValue(props.value);
      else state.removeValue(props.value);
      if (props.onChange) props.onChange(isSelected);
    }
  });
  let { name, descriptionId, errorMessageId, validationBehavior } = $1ae600c947479353$export$ec98120685d4f57d.get(state);
  var _props_validationBehavior;
  validationBehavior = (_props_validationBehavior = props.validationBehavior) !== null && _props_validationBehavior !== void 0 ? _props_validationBehavior : validationBehavior;
  let { realtimeValidation } = $e5be200c675c3b3a$export$fc1a364ae1f3ff10({
    ...props,
    value: toggleState.isSelected,
    // Server validation is handled at the group level.
    name: void 0,
    validationBehavior: "aria"
  });
  let nativeValidation = reactExports.useRef($e5be200c675c3b3a$export$dad6ae84456c676a);
  let updateValidation = () => {
    state.setInvalid(props.value, realtimeValidation.isInvalid ? realtimeValidation : nativeValidation.current);
  };
  reactExports.useEffect(updateValidation);
  let combinedRealtimeValidation = state.realtimeValidation.isInvalid ? state.realtimeValidation : realtimeValidation;
  let displayValidation = validationBehavior === "native" ? state.displayValidation : combinedRealtimeValidation;
  var _props_isRequired;
  let res = $406796ff087fe49b$export$e375f10ce42261c5({
    ...props,
    isReadOnly: props.isReadOnly || state.isReadOnly,
    isDisabled: props.isDisabled || state.isDisabled,
    name: props.name || name,
    isRequired: (_props_isRequired = props.isRequired) !== null && _props_isRequired !== void 0 ? _props_isRequired : state.isRequired,
    validationBehavior,
    [$e5be200c675c3b3a$export$a763b9476acd3eb]: {
      realtimeValidation: combinedRealtimeValidation,
      displayValidation,
      resetValidation: state.resetValidation,
      commitValidation: state.commitValidation,
      updateValidation(v) {
        nativeValidation.current = v;
        updateValidation();
      }
    }
  }, toggleState, inputRef);
  return {
    ...res,
    inputProps: {
      ...res.inputProps,
      "aria-describedby": [
        props["aria-describedby"],
        state.isInvalid ? errorMessageId : null,
        descriptionId
      ].filter(Boolean).join(" ") || void 0
    }
  };
}
var [CheckboxGroupProvider, useCheckboxGroupContext] = createContext2({
  name: "CheckboxGroupContext",
  strict: false
});
function CheckIcon(props) {
  const { isSelected, disableAnimation, ...otherProps } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { "aria-hidden": "true", role: "presentation", viewBox: "0 0 17 18", ...otherProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "polyline",
    {
      fill: "none",
      points: "1 9 7 14 15 4",
      stroke: "currentColor",
      strokeDasharray: 22,
      strokeDashoffset: isSelected ? 44 : 66,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      style: !disableAnimation && isSelected ? {
        transition: "stroke-dashoffset 250ms linear 0.2s"
      } : {}
    }
  ) });
}
function IndeterminateIcon(props) {
  const { isSelected, disableAnimation, ...otherProps } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { stroke: "currentColor", strokeWidth: 3, viewBox: "0 0 24 24", ...otherProps, children: /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" }) });
}
function CheckboxIcon(props) {
  const { isIndeterminate, ...otherProps } = props;
  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BaseIcon, { ...otherProps });
}
function useCallbackRef(fn, deps = []) {
  const ref = reactExports.useRef(fn);
  useSafeLayoutEffect(() => {
    ref.current = fn;
  });
  return reactExports.useCallback((...args) => {
    var _a;
    return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args);
  }, deps);
}
function useCheckbox(props = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const globalContext = useProviderContext();
  const groupContext = useCheckboxGroupContext();
  const isInGroup = !!groupContext;
  const {
    as,
    ref,
    value = "",
    children,
    icon,
    name,
    isRequired,
    isReadOnly: isReadOnlyProp = false,
    autoFocus = false,
    isSelected: isSelectedProp,
    size = (_a = groupContext == null ? void 0 : groupContext.size) != null ? _a : "md",
    color = (_b = groupContext == null ? void 0 : groupContext.color) != null ? _b : "primary",
    radius = groupContext == null ? void 0 : groupContext.radius,
    lineThrough = (_c = groupContext == null ? void 0 : groupContext.lineThrough) != null ? _c : false,
    isDisabled: isDisabledProp = (_d = groupContext == null ? void 0 : groupContext.isDisabled) != null ? _d : false,
    disableAnimation = (_f = (_e = groupContext == null ? void 0 : groupContext.disableAnimation) != null ? _e : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _f : false,
    validationState,
    isInvalid = validationState ? validationState === "invalid" : (_g = groupContext == null ? void 0 : groupContext.isInvalid) != null ? _g : false,
    isIndeterminate = false,
    validationBehavior = (_h = groupContext == null ? void 0 : groupContext.validationBehavior) != null ? _h : "aria",
    defaultSelected,
    classNames,
    className,
    onValueChange,
    ...otherProps
  } = props;
  if (groupContext && __DEV__) {
    if (isSelectedProp) {
      warn(
        "The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.",
        "Checkbox"
      );
    }
    if (defaultSelected) {
      warn(
        "The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.",
        "Checkbox"
      );
    }
  }
  const Component = as || "label";
  const domRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  let onChange = props.onChange;
  if (isInGroup) {
    const dispatch = () => {
      groupContext.groupState.resetValidation();
    };
    onChange = $ff5963eb1fccf552$export$e08e3b67e392101e$2(dispatch, onChange);
  }
  const labelId = reactExports.useId();
  const ariaCheckboxProps = reactExports.useMemo(() => {
    return {
      name,
      value,
      children,
      autoFocus,
      defaultSelected,
      validationBehavior,
      isIndeterminate,
      isRequired,
      isInvalid,
      isSelected: isSelectedProp,
      isDisabled: isDisabledProp,
      isReadOnly: isReadOnlyProp,
      "aria-label": safeAriaLabel(otherProps["aria-label"], children),
      "aria-labelledby": otherProps["aria-labelledby"] || labelId,
      onChange: onValueChange
    };
  }, [
    value,
    name,
    labelId,
    children,
    autoFocus,
    isInvalid,
    isIndeterminate,
    isDisabledProp,
    isReadOnlyProp,
    isSelectedProp,
    defaultSelected,
    validationBehavior,
    otherProps["aria-label"],
    otherProps["aria-labelledby"],
    onValueChange
  ]);
  const toggleState = $3017fa7ffdddec74$export$8042c6c013fd5226(ariaCheckboxProps);
  const {
    inputProps,
    isSelected,
    isDisabled,
    isReadOnly,
    isPressed: isPressedKeyboard
  } = isInGroup ? $fba3e38d5ca8983f$export$353b32fc6898d37d({ ...ariaCheckboxProps }, groupContext.groupState, inputRef) : $406796ff087fe49b$export$e375f10ce42261c5({ ...ariaCheckboxProps }, toggleState, inputRef);
  const isInteractionDisabled = isDisabled || isReadOnly;
  const [isPressed, setPressed] = reactExports.useState(false);
  const { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21$2({
    isDisabled: isInteractionDisabled,
    onPressStart(e) {
      if (e.pointerType !== "keyboard") {
        setPressed(true);
      }
    },
    onPressEnd(e) {
      if (e.pointerType !== "keyboard") {
        setPressed(false);
      }
    }
  });
  const pressed = isInteractionDisabled ? false : isPressed || isPressedKeyboard;
  const { hoverProps, isHovered } = $6179b936705e76d3$export$ae780daf29e6d456({
    isDisabled: inputProps.disabled
  });
  const { focusProps, isFocused, isFocusVisible } = $f7dceffc5ad7768b$export$4e328f61c538687f({
    autoFocus: inputProps.autoFocus
  });
  const slots = reactExports.useMemo(
    () => checkbox({
      color,
      size,
      radius,
      isInvalid,
      lineThrough,
      isDisabled,
      disableAnimation
    }),
    [color, size, radius, isInvalid, lineThrough, isDisabled, disableAnimation]
  );
  useSafeLayoutEffect(() => {
    if (!inputRef.current)
      return;
    const isInputRefChecked = !!inputRef.current.checked;
    toggleState.setSelected(isInputRefChecked);
  }, [inputRef.current]);
  const onChangeProp = useCallbackRef(onChange);
  const handleCheckboxChange = reactExports.useCallback(
    (event) => {
      if (isReadOnly || isDisabled) {
        event.preventDefault();
        return;
      }
      onChangeProp == null ? void 0 : onChangeProp(event);
    },
    [isReadOnly, isDisabled, onChangeProp]
  );
  const baseStyles = clsx$1(classNames == null ? void 0 : classNames.base, className);
  const getBaseProps = reactExports.useCallback(() => {
    return {
      ref: domRef,
      className: slots.base({ class: baseStyles }),
      "data-disabled": dataAttr(isDisabled),
      "data-selected": dataAttr(isSelected || isIndeterminate),
      "data-invalid": dataAttr(isInvalid),
      "data-hover": dataAttr(isHovered),
      "data-focus": dataAttr(isFocused),
      "data-pressed": dataAttr(pressed),
      "data-readonly": dataAttr(inputProps.readOnly),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-indeterminate": dataAttr(isIndeterminate),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(hoverProps, pressProps, otherProps)
    };
  }, [
    slots,
    baseStyles,
    isDisabled,
    isSelected,
    isIndeterminate,
    isInvalid,
    isHovered,
    isFocused,
    pressed,
    inputProps.readOnly,
    isFocusVisible,
    hoverProps,
    pressProps,
    otherProps
  ]);
  const getWrapperProps = reactExports.useCallback(
    (props2 = {}) => {
      return {
        ...props2,
        "aria-hidden": true,
        className: clsx$1(slots.wrapper({ class: clsx$1(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) }))
      };
    },
    [slots, classNames == null ? void 0 : classNames.wrapper]
  );
  const getInputProps = reactExports.useCallback(() => {
    return {
      ref: mergeRefs(inputRef, ref),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(inputProps, focusProps),
      onChange: $ff5963eb1fccf552$export$e08e3b67e392101e$2(inputProps.onChange, handleCheckboxChange)
    };
  }, [inputProps, focusProps, handleCheckboxChange]);
  const getLabelProps = reactExports.useCallback(
    () => ({
      id: labelId,
      className: slots.label({ class: classNames == null ? void 0 : classNames.label })
    }),
    [slots, classNames == null ? void 0 : classNames.label, isDisabled, isSelected, isInvalid]
  );
  const getIconProps = reactExports.useCallback(
    () => ({
      isSelected,
      isIndeterminate,
      disableAnimation,
      className: slots.icon({ class: classNames == null ? void 0 : classNames.icon })
    }),
    [slots, classNames == null ? void 0 : classNames.icon, isSelected, isIndeterminate, disableAnimation]
  );
  return {
    Component,
    icon,
    children,
    isSelected,
    isDisabled,
    isInvalid,
    isFocused,
    isHovered,
    isFocusVisible,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getIconProps
  };
}
var Checkbox = forwardRef((props, ref) => {
  const {
    Component,
    children,
    icon = /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIcon, {}),
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getIconProps,
    getLabelProps
  } = useCheckbox({ ...props, ref });
  const clonedIcon = typeof icon === "function" ? icon(getIconProps()) : reactExports.cloneElement(icon, getIconProps());
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getBaseProps(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx($5c3e21d68f1c4674$export$439d29a4e110a164, { elementType: "span", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...getInputProps() }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getWrapperProps(), children: clonedIcon }),
    children && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ...getLabelProps(), children })
  ] });
});
Checkbox.displayName = "NextUI.Checkbox";
var checkbox_default = Checkbox;
function useUser(props) {
  const {
    as,
    ref,
    name,
    description,
    className,
    classNames,
    isFocusable = false,
    avatarProps: userAvatarProps = {},
    ...otherProps
  } = props;
  const avatarProps = {
    isFocusable: false,
    ...userAvatarProps
  };
  const Component = as || "div";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { isFocusVisible, isFocused, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f({});
  const canBeFocused = reactExports.useMemo(() => {
    return isFocusable || as === "button";
  }, [isFocusable, as]);
  const slots = reactExports.useMemo(() => user(), []);
  const baseStyles = clsx$1(classNames == null ? void 0 : classNames.base, className);
  const getUserProps = reactExports.useCallback(
    () => ({
      ref: domRef,
      tabIndex: canBeFocused ? 0 : -1,
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-focus": dataAttr(isFocused),
      className: slots.base({
        class: baseStyles
      }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        canBeFocused ? focusProps : {}
      )
    }),
    [canBeFocused, slots, baseStyles, focusProps, otherProps]
  );
  return {
    Component,
    className,
    slots,
    name,
    description,
    classNames,
    baseStyles,
    avatarProps,
    getUserProps
  };
}
var User = forwardRef((props, ref) => {
  const { Component, name, slots, classNames, description, avatarProps, getUserProps } = useUser({
    ...props,
    ref
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getUserProps(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(avatar_default, { ...avatarProps }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: slots.name({ class: classNames == null ? void 0 : classNames.name }), children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: slots.description({ class: classNames == null ? void 0 : classNames.description }), children: description })
    ] })
  ] });
});
User.displayName = "NextUI.User";
var user_default = User;
const $2140fb2337097f2d$export$552312adfd451dab = /* @__PURE__ */ new WeakMap();
function $2140fb2337097f2d$var$normalizeKey(key) {
  if (typeof key === "string") return key.replace(/\s*/g, "");
  return "" + key;
}
function $2140fb2337097f2d$export$37cd4213f2ad742e(state, columnKey) {
  let gridId = $2140fb2337097f2d$export$552312adfd451dab.get(state);
  if (!gridId) throw new Error("Unknown grid");
  return `${gridId}-${$2140fb2337097f2d$var$normalizeKey(columnKey)}`;
}
function $2140fb2337097f2d$export$19baff3266315d44(state, rowKey, columnKey) {
  let gridId = $2140fb2337097f2d$export$552312adfd451dab.get(state);
  if (!gridId) throw new Error("Unknown grid");
  return `${gridId}-${$2140fb2337097f2d$var$normalizeKey(rowKey)}-${$2140fb2337097f2d$var$normalizeKey(columnKey)}`;
}
function $2140fb2337097f2d$export$85069b70317f543(state, rowKey) {
  return [
    ...state.collection.rowHeaderColumnKeys
  ].map((columnKey) => $2140fb2337097f2d$export$19baff3266315d44(state, rowKey, columnKey)).join(" ");
}
var $ce3de3ff2fd66848$exports = {};
$ce3de3ff2fd66848$exports = {
  "ascending": `تصاعدي`,
  "ascendingSort": (args) => `ترتيب حسب العمود ${args.columnName} بترتيب تصاعدي`,
  "columnSize": (args) => `${args.value} بالبكسل`,
  "descending": `تنازلي`,
  "descendingSort": (args) => `ترتيب حسب العمود ${args.columnName} بترتيب تنازلي`,
  "resizerDescription": `اضغط على مفتاح Enter لبدء تغيير الحجم`,
  "select": `تحديد`,
  "selectAll": `تحديد الكل`,
  "sortable": `عمود قابل للترتيب`
};
var $cb80dcce530985b9$exports = {};
$cb80dcce530985b9$exports = {
  "ascending": `възходящ`,
  "ascendingSort": (args) => `сортирано по колона ${args.columnName} във възходящ ред`,
  "columnSize": (args) => `${args.value} пиксела`,
  "descending": `низходящ`,
  "descendingSort": (args) => `сортирано по колона ${args.columnName} в низходящ ред`,
  "resizerDescription": `Натиснете „Enter“, за да започнете да преоразмерявате`,
  "select": `Изберете`,
  "selectAll": `Изберете всичко`,
  "sortable": `сортираща колона`
};
var $68ac86749db4c0fb$exports = {};
$68ac86749db4c0fb$exports = {
  "ascending": `vzestupně`,
  "ascendingSort": (args) => `řazeno vzestupně podle sloupce ${args.columnName}`,
  "columnSize": (args) => `${args.value} pixelů`,
  "descending": `sestupně`,
  "descendingSort": (args) => `řazeno sestupně podle sloupce ${args.columnName}`,
  "resizerDescription": `Stisknutím klávesy Enter začnete měnit velikost`,
  "select": `Vybrat`,
  "selectAll": `Vybrat vše`,
  "sortable": `sloupec s možností řazení`
};
var $9a6cbac08487e661$exports = {};
$9a6cbac08487e661$exports = {
  "ascending": `stigende`,
  "ascendingSort": (args) => `sorteret efter kolonne ${args.columnName} i stigende rækkefølge`,
  "columnSize": (args) => `${args.value} pixels`,
  "descending": `faldende`,
  "descendingSort": (args) => `sorteret efter kolonne ${args.columnName} i faldende rækkefølge`,
  "resizerDescription": `Tryk på Enter for at ændre størrelse`,
  "select": `Vælg`,
  "selectAll": `Vælg alle`,
  "sortable": `sorterbar kolonne`
};
var $c963661d89486e72$exports = {};
$c963661d89486e72$exports = {
  "ascending": `aufsteigend`,
  "ascendingSort": (args) => `sortiert nach Spalte ${args.columnName} in aufsteigender Reihenfolge`,
  "columnSize": (args) => `${args.value} Pixel`,
  "descending": `absteigend`,
  "descendingSort": (args) => `sortiert nach Spalte ${args.columnName} in absteigender Reihenfolge`,
  "resizerDescription": `Eingabetaste zum Starten der Größenänderung drücken`,
  "select": `Auswählen`,
  "selectAll": `Alles auswählen`,
  "sortable": `sortierbare Spalte`
};
var $ac03861c6e8605f4$exports = {};
$ac03861c6e8605f4$exports = {
  "ascending": `αύξουσα`,
  "ascendingSort": (args) => `διαλογή ανά στήλη ${args.columnName} σε αύξουσα σειρά`,
  "columnSize": (args) => `${args.value} pixel`,
  "descending": `φθίνουσα`,
  "descendingSort": (args) => `διαλογή ανά στήλη ${args.columnName} σε φθίνουσα σειρά`,
  "resizerDescription": `Πατήστε Enter για έναρξη της αλλαγής μεγέθους`,
  "select": `Επιλογή`,
  "selectAll": `Επιλογή όλων`,
  "sortable": `Στήλη διαλογής`
};
var $09e6b82e0d6e466a$exports = {};
$09e6b82e0d6e466a$exports = {
  "select": `Select`,
  "selectAll": `Select All`,
  "sortable": `sortable column`,
  "ascending": `ascending`,
  "descending": `descending`,
  "ascendingSort": (args) => `sorted by column ${args.columnName} in ascending order`,
  "descendingSort": (args) => `sorted by column ${args.columnName} in descending order`,
  "columnSize": (args) => `${args.value} pixels`,
  "resizerDescription": `Press Enter to start resizing`
};
var $8cc39eb66c2bf220$exports = {};
$8cc39eb66c2bf220$exports = {
  "ascending": `de subida`,
  "ascendingSort": (args) => `ordenado por columna ${args.columnName} en orden de subida`,
  "columnSize": (args) => `${args.value} píxeles`,
  "descending": `de bajada`,
  "descendingSort": (args) => `ordenado por columna ${args.columnName} en orden de bajada`,
  "resizerDescription": `Pulse Intro para empezar a redimensionar`,
  "select": `Seleccionar`,
  "selectAll": `Seleccionar todos`,
  "sortable": `columna ordenable`
};
var $4e11db3c25a38112$exports = {};
$4e11db3c25a38112$exports = {
  "ascending": `tõusev järjestus`,
  "ascendingSort": (args) => `sorditud veeru järgi ${args.columnName} tõusvas järjestuses`,
  "columnSize": (args) => `${args.value} pikslit`,
  "descending": `laskuv järjestus`,
  "descendingSort": (args) => `sorditud veeru järgi ${args.columnName} laskuvas järjestuses`,
  "resizerDescription": `Suuruse muutmise alustamiseks vajutage klahvi Enter`,
  "select": `Vali`,
  "selectAll": `Vali kõik`,
  "sortable": `sorditav veerg`
};
var $da1e751a92575e02$exports = {};
$da1e751a92575e02$exports = {
  "ascending": `nouseva`,
  "ascendingSort": (args) => `lajiteltu sarakkeen ${args.columnName} mukaan nousevassa järjestyksessä`,
  "columnSize": (args) => `${args.value} pikseliä`,
  "descending": `laskeva`,
  "descendingSort": (args) => `lajiteltu sarakkeen ${args.columnName} mukaan laskevassa järjestyksessä`,
  "resizerDescription": `Aloita koon muutos painamalla Enter-näppäintä`,
  "select": `Valitse`,
  "selectAll": `Valitse kaikki`,
  "sortable": `lajiteltava sarake`
};
var $1b5d6c6c47d55106$exports = {};
$1b5d6c6c47d55106$exports = {
  "ascending": `croissant`,
  "ascendingSort": (args) => `trié en fonction de la colonne ${args.columnName} par ordre croissant`,
  "columnSize": (args) => `${args.value} pixels`,
  "descending": `décroissant`,
  "descendingSort": (args) => `trié en fonction de la colonne ${args.columnName} par ordre décroissant`,
  "resizerDescription": `Appuyez sur Entrée pour commencer le redimensionnement.`,
  "select": `Sélectionner`,
  "selectAll": `Sélectionner tout`,
  "sortable": `colonne triable`
};
var $7c18ba27b86d3308$exports = {};
$7c18ba27b86d3308$exports = {
  "ascending": `עולה`,
  "ascendingSort": (args) => `מוין לפי עמודה ${args.columnName} בסדר עולה`,
  "columnSize": (args) => `${args.value} פיקסלים`,
  "descending": `יורד`,
  "descendingSort": (args) => `מוין לפי עמודה ${args.columnName} בסדר יורד`,
  "resizerDescription": `הקש Enter כדי לשנות את הגודל`,
  "select": `בחר`,
  "selectAll": `בחר הכול`,
  "sortable": `עמודה שניתן למיין`
};
var $2cb40998e20e8a46$exports = {};
$2cb40998e20e8a46$exports = {
  "ascending": `rastući`,
  "ascendingSort": (args) => `razvrstano po stupcima ${args.columnName} rastućem redoslijedom`,
  "columnSize": (args) => `${args.value} piksela`,
  "descending": `padajući`,
  "descendingSort": (args) => `razvrstano po stupcima ${args.columnName} padajućim redoslijedom`,
  "resizerDescription": `Pritisnite Enter da biste započeli promenu veličine`,
  "select": `Odaberite`,
  "selectAll": `Odaberite sve`,
  "sortable": `stupac koji se može razvrstati`
};
var $189e23eec1d6aa3a$exports = {};
$189e23eec1d6aa3a$exports = {
  "ascending": `növekvő`,
  "ascendingSort": (args) => `rendezve a(z) ${args.columnName} oszlop szerint, növekvő sorrendben`,
  "columnSize": (args) => `${args.value} képpont`,
  "descending": `csökkenő`,
  "descendingSort": (args) => `rendezve a(z) ${args.columnName} oszlop szerint, csökkenő sorrendben`,
  "resizerDescription": `Nyomja le az Enter billentyűt az átméretezés megkezdéséhez`,
  "select": `Kijelölés`,
  "selectAll": `Összes kijelölése`,
  "sortable": `rendezendő oszlop`
};
var $3c5ec8e4f015dfd0$exports = {};
$3c5ec8e4f015dfd0$exports = {
  "ascending": `crescente`,
  "ascendingSort": (args) => `in ordine crescente in base alla colonna ${args.columnName}`,
  "columnSize": (args) => `${args.value} pixel`,
  "descending": `decrescente`,
  "descendingSort": (args) => `in ordine decrescente in base alla colonna ${args.columnName}`,
  "resizerDescription": `Premi Invio per iniziare a ridimensionare`,
  "select": `Seleziona`,
  "selectAll": `Seleziona tutto`,
  "sortable": `colonna ordinabile`
};
var $d021d50e6b315ebb$exports = {};
$d021d50e6b315ebb$exports = {
  "ascending": `昇順`,
  "ascendingSort": (args) => `列 ${args.columnName} を昇順で並べ替え`,
  "columnSize": (args) => `${args.value} ピクセル`,
  "descending": `降順`,
  "descendingSort": (args) => `列 ${args.columnName} を降順で並べ替え`,
  "resizerDescription": `Enter キーを押してサイズ変更を開始`,
  "select": `選択`,
  "selectAll": `すべて選択`,
  "sortable": `並べ替え可能な列`
};
var $52535c35c24ec937$exports = {};
$52535c35c24ec937$exports = {
  "ascending": `오름차순`,
  "ascendingSort": (args) => `${args.columnName} 열을 기준으로 오름차순으로 정렬됨`,
  "columnSize": (args) => `${args.value} 픽셀`,
  "descending": `내림차순`,
  "descendingSort": (args) => `${args.columnName} 열을 기준으로 내림차순으로 정렬됨`,
  "resizerDescription": `크기 조정을 시작하려면 Enter를 누르세요.`,
  "select": `선택`,
  "selectAll": `모두 선택`,
  "sortable": `정렬 가능한 열`
};
var $b37ee03672edfd1d$exports = {};
$b37ee03672edfd1d$exports = {
  "ascending": `didėjančia tvarka`,
  "ascendingSort": (args) => `surikiuota pagal stulpelį ${args.columnName} didėjančia tvarka`,
  "columnSize": (args) => `${args.value} piks.`,
  "descending": `mažėjančia tvarka`,
  "descendingSort": (args) => `surikiuota pagal stulpelį ${args.columnName} mažėjančia tvarka`,
  "resizerDescription": `Paspauskite „Enter“, kad pradėtumėte keisti dydį`,
  "select": `Pasirinkti`,
  "selectAll": `Pasirinkti viską`,
  "sortable": `rikiuojamas stulpelis`
};
var $c7df6686b4189d56$exports = {};
$c7df6686b4189d56$exports = {
  "ascending": `augošā secībā`,
  "ascendingSort": (args) => `kārtots pēc kolonnas ${args.columnName} augošā secībā`,
  "columnSize": (args) => `${args.value} pikseļi`,
  "descending": `dilstošā secībā`,
  "descendingSort": (args) => `kārtots pēc kolonnas ${args.columnName} dilstošā secībā`,
  "resizerDescription": `Nospiediet Enter, lai sāktu izmēru mainīšanu`,
  "select": `Atlasīt`,
  "selectAll": `Atlasīt visu`,
  "sortable": `kārtojamā kolonna`
};
var $da07fe8ec87e6b68$exports = {};
$da07fe8ec87e6b68$exports = {
  "ascending": `stigende`,
  "ascendingSort": (args) => `sortert etter kolonne ${args.columnName} i stigende rekkefølge`,
  "columnSize": (args) => `${args.value} piksler`,
  "descending": `synkende`,
  "descendingSort": (args) => `sortert etter kolonne ${args.columnName} i synkende rekkefølge`,
  "resizerDescription": `Trykk på Enter for å starte størrelsesendring`,
  "select": `Velg`,
  "selectAll": `Velg alle`,
  "sortable": `kolonne som kan sorteres`
};
var $64b7e390f5791490$exports = {};
$64b7e390f5791490$exports = {
  "ascending": `oplopend`,
  "ascendingSort": (args) => `gesorteerd in oplopende volgorde in kolom ${args.columnName}`,
  "columnSize": (args) => `${args.value} pixels`,
  "descending": `aflopend`,
  "descendingSort": (args) => `gesorteerd in aflopende volgorde in kolom ${args.columnName}`,
  "resizerDescription": `Druk op Enter om het formaat te wijzigen`,
  "select": `Selecteren`,
  "selectAll": `Alles selecteren`,
  "sortable": `sorteerbare kolom`
};
var $2a03621e773f1678$exports = {};
$2a03621e773f1678$exports = {
  "ascending": `rosnąco`,
  "ascendingSort": (args) => `posortowano według kolumny ${args.columnName} w porządku rosnącym`,
  "columnSize": (args) => `Liczba pikseli: ${args.value}`,
  "descending": `malejąco`,
  "descendingSort": (args) => `posortowano według kolumny ${args.columnName} w porządku malejącym`,
  "resizerDescription": `Naciśnij Enter, aby rozpocząć zmienianie rozmiaru`,
  "select": `Zaznacz`,
  "selectAll": `Zaznacz wszystko`,
  "sortable": `kolumna z możliwością sortowania`
};
var $0a79c0aba9e5ecc6$exports = {};
$0a79c0aba9e5ecc6$exports = {
  "ascending": `crescente`,
  "ascendingSort": (args) => `classificado pela coluna ${args.columnName} em ordem crescente`,
  "columnSize": (args) => `${args.value} pixels`,
  "descending": `decrescente`,
  "descendingSort": (args) => `classificado pela coluna ${args.columnName} em ordem decrescente`,
  "resizerDescription": `Pressione Enter para começar a redimensionar`,
  "select": `Selecionar`,
  "selectAll": `Selecionar tudo`,
  "sortable": `coluna classificável`
};
var $de7b4d0f7dc86fc8$exports = {};
$de7b4d0f7dc86fc8$exports = {
  "ascending": `ascendente`,
  "ascendingSort": (args) => `Ordenar por coluna ${args.columnName} em ordem ascendente`,
  "columnSize": (args) => `${args.value} pixels`,
  "descending": `descendente`,
  "descendingSort": (args) => `Ordenar por coluna ${args.columnName} em ordem descendente`,
  "resizerDescription": `Prima Enter para iniciar o redimensionamento`,
  "select": `Selecionar`,
  "selectAll": `Selecionar tudo`,
  "sortable": `Coluna ordenável`
};
var $28ea7e849d77bd1c$exports = {};
$28ea7e849d77bd1c$exports = {
  "ascending": `crescătoare`,
  "ascendingSort": (args) => `sortate după coloana ${args.columnName} în ordine crescătoare`,
  "columnSize": (args) => `${args.value} pixeli`,
  "descending": `descrescătoare`,
  "descendingSort": (args) => `sortate după coloana ${args.columnName} în ordine descrescătoare`,
  "resizerDescription": `Apăsați pe Enter pentru a începe redimensionarea`,
  "select": `Selectare`,
  "selectAll": `Selectare totală`,
  "sortable": `coloană sortabilă`
};
var $9a09321cf046b187$exports = {};
$9a09321cf046b187$exports = {
  "ascending": `возрастание`,
  "ascendingSort": (args) => `сортировать столбец ${args.columnName} в порядке возрастания`,
  "columnSize": (args) => `${args.value} пикс.`,
  "descending": `убывание`,
  "descendingSort": (args) => `сортировать столбец ${args.columnName} в порядке убывания`,
  "resizerDescription": `Нажмите клавишу Enter для начала изменения размеров`,
  "select": `Выбрать`,
  "selectAll": `Выбрать все`,
  "sortable": `сортируемый столбец`
};
var $5afe469a63fcac7b$exports = {};
$5afe469a63fcac7b$exports = {
  "ascending": `vzostupne`,
  "ascendingSort": (args) => `zoradené zostupne podľa stĺpca ${args.columnName}`,
  "columnSize": (args) => `Počet pixelov: ${args.value}`,
  "descending": `zostupne`,
  "descendingSort": (args) => `zoradené zostupne podľa stĺpca ${args.columnName}`,
  "resizerDescription": `Stlačením klávesu Enter začnete zmenu veľkosti`,
  "select": `Vybrať`,
  "selectAll": `Vybrať všetko`,
  "sortable": `zoraditeľný stĺpec`
};
var $2956757ac31a7ce2$exports = {};
$2956757ac31a7ce2$exports = {
  "ascending": `naraščajoče`,
  "ascendingSort": (args) => `razvrščeno po stolpcu ${args.columnName} v naraščajočem vrstnem redu`,
  "columnSize": (args) => `${args.value} slikovnih pik`,
  "descending": `padajoče`,
  "descendingSort": (args) => `razvrščeno po stolpcu ${args.columnName} v padajočem vrstnem redu`,
  "resizerDescription": `Pritisnite tipko Enter da začnete spreminjati velikost`,
  "select": `Izberite`,
  "selectAll": `Izberite vse`,
  "sortable": `razvrstljivi stolpec`
};
var $cedee0e66b175529$exports = {};
$cedee0e66b175529$exports = {
  "ascending": `rastući`,
  "ascendingSort": (args) => `sortirano po kolonama ${args.columnName} rastućim redosledom`,
  "columnSize": (args) => `${args.value} piksela`,
  "descending": `padajući`,
  "descendingSort": (args) => `sortirano po kolonama ${args.columnName} padajućim redosledom`,
  "resizerDescription": `Pritisnite Enter da biste započeli promenu veličine`,
  "select": `Izaberite`,
  "selectAll": `Izaberite sve`,
  "sortable": `kolona koja se može sortirati`
};
var $6db19998ba4427da$exports = {};
$6db19998ba4427da$exports = {
  "ascending": `stigande`,
  "ascendingSort": (args) => `sorterat på kolumn ${args.columnName} i stigande ordning`,
  "columnSize": (args) => `${args.value} pixlar`,
  "descending": `fallande`,
  "descendingSort": (args) => `sorterat på kolumn ${args.columnName} i fallande ordning`,
  "resizerDescription": `Tryck på Retur för att börja ändra storlek`,
  "select": `Markera`,
  "selectAll": `Markera allt`,
  "sortable": `sorterbar kolumn`
};
var $166b7c9cc1adb1a1$exports = {};
$166b7c9cc1adb1a1$exports = {
  "ascending": `artan sırada`,
  "ascendingSort": (args) => `${args.columnName} sütuna göre artan düzende sırala`,
  "columnSize": (args) => `${args.value} piksel`,
  "descending": `azalan sırada`,
  "descendingSort": (args) => `${args.columnName} sütuna göre azalan düzende sırala`,
  "resizerDescription": `Yeniden boyutlandırmak için Enter'a basın`,
  "select": `Seç`,
  "selectAll": `Tümünü Seç`,
  "sortable": `Sıralanabilir sütun`
};
var $c7ab180b401e49ff$exports = {};
$c7ab180b401e49ff$exports = {
  "ascending": `висхідний`,
  "ascendingSort": (args) => `відсортовано за стовпцем ${args.columnName} у висхідному порядку`,
  "columnSize": (args) => `${args.value} пікс.`,
  "descending": `низхідний`,
  "descendingSort": (args) => `відсортовано за стовпцем ${args.columnName} у низхідному порядку`,
  "resizerDescription": `Натисніть Enter, щоб почати зміну розміру`,
  "select": `Вибрати`,
  "selectAll": `Вибрати все`,
  "sortable": `сортувальний стовпець`
};
var $1648ec00941567f3$exports = {};
$1648ec00941567f3$exports = {
  "ascending": `升序`,
  "ascendingSort": (args) => `按列 ${args.columnName} 升序排序`,
  "columnSize": (args) => `${args.value} 像素`,
  "descending": `降序`,
  "descendingSort": (args) => `按列 ${args.columnName} 降序排序`,
  "resizerDescription": `按“输入”键开始调整大小。`,
  "select": `选择`,
  "selectAll": `全选`,
  "sortable": `可排序的列`
};
var $b26f22384b3c1526$exports = {};
$b26f22384b3c1526$exports = {
  "ascending": `遞增`,
  "ascendingSort": (args) => `已依據「${args.columnName}」欄遞增排序`,
  "columnSize": (args) => `${args.value} 像素`,
  "descending": `遞減`,
  "descendingSort": (args) => `已依據「${args.columnName}」欄遞減排序`,
  "resizerDescription": `按 Enter 鍵以開始調整大小`,
  "select": `選取`,
  "selectAll": `全選`,
  "sortable": `可排序的欄`
};
var $7476b46781682bf5$exports = {};
$7476b46781682bf5$exports = {
  "ar-AE": $ce3de3ff2fd66848$exports,
  "bg-BG": $cb80dcce530985b9$exports,
  "cs-CZ": $68ac86749db4c0fb$exports,
  "da-DK": $9a6cbac08487e661$exports,
  "de-DE": $c963661d89486e72$exports,
  "el-GR": $ac03861c6e8605f4$exports,
  "en-US": $09e6b82e0d6e466a$exports,
  "es-ES": $8cc39eb66c2bf220$exports,
  "et-EE": $4e11db3c25a38112$exports,
  "fi-FI": $da1e751a92575e02$exports,
  "fr-FR": $1b5d6c6c47d55106$exports,
  "he-IL": $7c18ba27b86d3308$exports,
  "hr-HR": $2cb40998e20e8a46$exports,
  "hu-HU": $189e23eec1d6aa3a$exports,
  "it-IT": $3c5ec8e4f015dfd0$exports,
  "ja-JP": $d021d50e6b315ebb$exports,
  "ko-KR": $52535c35c24ec937$exports,
  "lt-LT": $b37ee03672edfd1d$exports,
  "lv-LV": $c7df6686b4189d56$exports,
  "nb-NO": $da07fe8ec87e6b68$exports,
  "nl-NL": $64b7e390f5791490$exports,
  "pl-PL": $2a03621e773f1678$exports,
  "pt-BR": $0a79c0aba9e5ecc6$exports,
  "pt-PT": $de7b4d0f7dc86fc8$exports,
  "ro-RO": $28ea7e849d77bd1c$exports,
  "ru-RU": $9a09321cf046b187$exports,
  "sk-SK": $5afe469a63fcac7b$exports,
  "sl-SI": $2956757ac31a7ce2$exports,
  "sr-SP": $cedee0e66b175529$exports,
  "sv-SE": $6db19998ba4427da$exports,
  "tr-TR": $166b7c9cc1adb1a1$exports,
  "uk-UA": $c7ab180b401e49ff$exports,
  "zh-CN": $1648ec00941567f3$exports,
  "zh-TW": $b26f22384b3c1526$exports
};
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? React.useLayoutEffect : () => {
};
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = reactExports.useRef(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return reactExports.useCallback((...args) => {
    const f = ref.current;
    return f === null || f === void 0 ? void 0 : f(...args);
  }, []);
}
const $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
const $b5e257d569688ac6$var$SSRContext = /* @__PURE__ */ React.createContext($b5e257d569688ac6$var$defaultContext);
const $b5e257d569688ac6$var$IsSSRContext = /* @__PURE__ */ React.createContext(false);
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = reactExports.useContext($b5e257d569688ac6$var$SSRContext);
  let ref = reactExports.useRef(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = reactExports.useContext($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = React.useId();
  let [didSSR] = reactExports.useState($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof React["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof React["useSyncExternalStore"] === "function") return React["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return reactExports.useContext($b5e257d569688ac6$var$IsSSRContext);
}
let $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let [value, setValue] = reactExports.useState(defaultId);
  let nextId = reactExports.useRef(null);
  let res = $b5e257d569688ac6$export$619500959fc48b26(value);
  let updateValue = reactExports.useCallback((val) => {
    nextId.current = val;
  }, []);
  if ($bdb11010cef70236$var$canUseDOM) $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let r = res;
    return () => {
      $bdb11010cef70236$var$idsUpdaterMap.delete(r);
    };
  }, [
    res
  ]);
  reactExports.useEffect(() => {
    let newId = nextId.current;
    if (newId) {
      nextId.current = null;
      setValue(newId);
    }
  });
  return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB) return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}
const $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i = 1; i < args.length; i++) {
    let props = args[i];
    for (let key in props) {
      let a = result[key];
      let b = props[key];
      if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(a, b);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = clsx(a, b);
      else if (key === "id" && a && b) result.id = $bdb11010cef70236$export$cd8c9cb68f842629(a, b);
      else result[key] = b !== void 0 ? b : a;
    }
  }
  return result;
}
const $65484d02dcb7eb3e$var$DOMPropNames = /* @__PURE__ */ new Set([
  "id"
]);
const $65484d02dcb7eb3e$var$labelablePropNames = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]);
const $65484d02dcb7eb3e$var$linkPropNames = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
  let { labelable, isLink, propNames } = opts;
  let filteredProps = {};
  for (const prop in props) if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
  return filteredProps;
}
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
const $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
const $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
const $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
const $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
const $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
const $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
const $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
const $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});
const $ea8dcbcb9ea1b556$var$RouterContext = /* @__PURE__ */ reactExports.createContext({
  isNative: true,
  open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
  useHref: (href) => href
});
function $ea8dcbcb9ea1b556$export$9a302a45f65d0572() {
  return reactExports.useContext($ea8dcbcb9ea1b556$var$RouterContext);
}
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ($c87311424ea30a05$export$b7d78993b74f766d() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ($c87311424ea30a05$export$9ac100e40613ea10()) metaKey = true;
    else ctrlKey = true;
  }
  let event = $c87311424ea30a05$export$78551043582a6a98() && $c87311424ea30a05$export$9ac100e40613ea10() && !$c87311424ea30a05$export$7bef049ce92e4224() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  $7215afc6de606d6b$export$de79e2c695e052f3(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
  if (target instanceof HTMLAnchorElement) open(target);
  else if (target.hasAttribute("data-href")) {
    let link = document.createElement("a");
    link.href = target.getAttribute("data-href");
    if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
    if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
    if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
    if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
    if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
    target.appendChild(link);
    open(link);
    target.removeChild(link);
  }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
  $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link) => $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}
let $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
let $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined") return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e) => {
    if (!isTransitionEvent(e) || !e.target) return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
      e.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e.propertyName);
  };
  let onTransitionEnd = (e) => {
    if (!isTransitionEvent(e) || !e.target) return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!properties) return;
    properties.delete(e.propertyName);
    if (properties.size === 0) {
      e.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
    else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = reactExports.useRef(/* @__PURE__ */ new Map());
  let addGlobalListener = reactExports.useCallback((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = reactExports.useCallback((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = reactExports.useCallback(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  reactExports.useEffect(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
  const isInitialMount = reactExports.useRef(true);
  const lastDeps = reactExports.useRef(null);
  reactExports.useEffect(() => {
    isInitialMount.current = true;
    return () => {
      isInitialMount.current = false;
    };
  }, []);
  reactExports.useEffect(() => {
    if (isInitialMount.current) isInitialMount.current = false;
    else if (!lastDeps.current || dependencies.some((dep, i) => !Object.is(dep, lastDeps[i]))) effect();
    lastDeps.current = dependencies;
  }, dependencies);
}
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref) context.ref.current = null;
      };
    }
  });
}
function $cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow) {
  let style = window.getComputedStyle(node);
  let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
  if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
  return isScrollable;
}
function $62d8ded9296f3872$export$cfa2225e87938781(node, checkForOverflow) {
  let scrollableNode = node;
  if ($cc38e7bd3fc7b213$export$2bb74740c4e19def(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
  while (scrollableNode && !$cc38e7bd3fc7b213$export$2bb74740c4e19def(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
  return scrollableNode || document.scrollingElement || document.documentElement;
}
function $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(node, checkForOverflow) {
  const scrollParents = [];
  while (node && node !== document.documentElement) {
    if ($cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow)) scrollParents.push(node);
    node = node.parentElement;
  }
  return scrollParents;
}
let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = /* @__PURE__ */ new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
  let [id, setId] = reactExports.useState();
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (!description) return;
    let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
    if (!desc) {
      let id2 = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
      setId(id2);
      let node = document.createElement("div");
      node.id = id2;
      node.style.display = "none";
      node.textContent = description;
      document.body.appendChild(node);
      desc = {
        refCount: 0,
        element: node
      };
      $ef06256079686ba0$var$descriptionNodes.set(description, desc);
    } else setId(desc.element.id);
    desc.refCount++;
    return () => {
      if (desc && --desc.refCount === 0) {
        desc.element.remove();
        $ef06256079686ba0$var$descriptionNodes.delete(description);
      }
    };
  }, [
    description
  ]);
  return {
    "aria-describedby": description ? id : void 0
  };
}
function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
  let handleEvent = $8ae05eaa5c114e9c$export$7f54fc3180508a52(handler);
  let isDisabled = handler == null;
  reactExports.useEffect(() => {
    if (isDisabled || !ref.current) return;
    let element = ref.current;
    element.addEventListener(event, handleEvent, options);
    return () => {
      element.removeEventListener(event, handleEvent, options);
    };
  }, [
    ref,
    event,
    options,
    isDisabled,
    handleEvent
  ]);
}
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
  let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "left");
  let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "top");
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  let x = scrollView.scrollLeft;
  let y = scrollView.scrollTop;
  let { borderTopWidth, borderLeftWidth } = getComputedStyle(scrollView);
  let borderAdjustedX = scrollView.scrollLeft + parseInt(borderLeftWidth, 10);
  let borderAdjustedY = scrollView.scrollTop + parseInt(borderTopWidth, 10);
  let maxX = borderAdjustedX + scrollView.clientWidth;
  let maxY = borderAdjustedY + scrollView.clientHeight;
  if (offsetX <= x) x = offsetX - parseInt(borderLeftWidth, 10);
  else if (offsetX + width > maxX) x += offsetX + width - maxX;
  if (offsetY <= borderAdjustedY) y = offsetY - parseInt(borderTopWidth, 10);
  else if (offsetY + height > maxY) y += offsetY + height - maxY;
  scrollView.scrollLeft = x;
  scrollView.scrollTop = y;
}
function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
  const prop = axis === "left" ? "offsetLeft" : "offsetTop";
  let sum = 0;
  while (child.offsetParent) {
    sum += child[prop];
    if (child.offsetParent === ancestor) break;
    else if (child.offsetParent.contains(ancestor)) {
      sum -= ancestor[prop];
      break;
    }
    child = child.offsetParent;
  }
  return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
  if (document.contains(targetElement)) {
    let root = document.scrollingElement || document.documentElement;
    let isScrollPrevented = window.getComputedStyle(root).overflow === "hidden";
    if (!isScrollPrevented) {
      var _targetElement_scrollIntoView;
      let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
      targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
        block: "nearest"
      });
      let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
      if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
        var _opts_containingElement_scrollIntoView, _opts_containingElement, _targetElement_scrollIntoView1;
        opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
          block: "center",
          inline: "center"
        });
        (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
          block: "nearest"
        });
      }
    } else {
      let scrollParents = $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(targetElement);
      for (let scrollParent of scrollParents) $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
    }
  }
}
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  if ($c87311424ea30a05$export$a11b0059900ceec8() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
  return !$c87311424ea30a05$export$a11b0059900ceec8() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}
function $feb5ffebff200149$export$d3e3bd3e26688c04(e) {
  return $c87311424ea30a05$export$e1865c3bedcd822b() ? e.altKey : e.ctrlKey;
}
function $feb5ffebff200149$export$16792effe837dba3(e) {
  if ($c87311424ea30a05$export$9ac100e40613ea10()) return e.metaKey;
  return e.ctrlKey;
}
const $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1e3;
function $fb3050f43d946246$export$e32c88dfddc6e1d8(options) {
  let { keyboardDelegate, selectionManager, onTypeSelect } = options;
  let state = reactExports.useRef({
    search: "",
    timeout: null
  }).current;
  let onKeyDown = (e) => {
    let character = $fb3050f43d946246$var$getStringForKey(e.key);
    if (!character || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
    if (character === " " && state.search.trim().length > 0) {
      e.preventDefault();
      if (!("continuePropagation" in e)) e.stopPropagation();
    }
    state.search += character;
    let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
    if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
    if (key != null) {
      selectionManager.setFocusedKey(key);
      if (onTypeSelect) onTypeSelect(key);
    }
    clearTimeout(state.timeout);
    state.timeout = setTimeout(() => {
      state.search = "";
    }, $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
  };
  return {
    typeSelectProps: {
      // Using a capturing listener to catch the keydown event before
      // other hooks in order to handle the Spacebar event.
      onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : null
    }
  };
}
function $fb3050f43d946246$var$getStringForKey(key) {
  if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
  return "";
}
let $14c0b72509d70225$var$state = "default";
let $14c0b72509d70225$var$savedUserSelect = "";
let $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f1()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f1()) {
    if ($14c0b72509d70225$var$state !== "disabled") return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      $bbed8b41f857bcc0$export$24490316f764c430(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      if (target.style.userSelect === "none") target.style.userSelect = targetOldUserSelect;
      if (target.getAttribute("style") === "") target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}
const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = React.createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = reactExports.useContext($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
  if (context) {
    let { register, ...contextProps } = context;
    props = $3ef42575df84b30b$export$9d1611c77c2fe928(contextProps, props);
    register();
  }
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
class $f6c31cce2adf654f$var$PressEvent2 {
  continuePropagation() {
    _class_private_field_set(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return _class_private_field_get(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent, state) {
    _class_private_field_init(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    _class_private_field_set(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    var _state_target;
    let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
    const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
    let x, y = 0;
    let clientX, clientY = null;
    if (originalEvent.clientX != null && originalEvent.clientY != null) {
      clientX = originalEvent.clientX;
      clientY = originalEvent.clientY;
    }
    if (rect) {
      if (clientX != null && clientY != null) {
        x = clientX - rect.left;
        y = clientY - rect.top;
      } else {
        x = rect.width / 2;
        y = rect.height / 2;
      }
    }
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
    this.x = x;
    this.y = y;
  }
}
const $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = reactExports.useState(false);
  let ref = reactExports.useRef({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let triggerPressStart = $8ae05eaa5c114e9c$export$7f54fc3180508a52((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled || state.didFirePressStart) return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent2("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = $8ae05eaa5c114e9c$export$7f54fc3180508a52((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart) return false;
    state.ignoreClickAfterPress = true;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent2("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled) {
      let event = new $f6c31cce2adf654f$var$PressEvent2("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = $8ae05eaa5c114e9c$export$7f54fc3180508a52((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled) return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent2("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
    }
  });
  let cancelOnPointerExit = $8ae05eaa5c114e9c$export$7f54fc3180508a52((e) => {
    if (shouldCancelOnPointerExit) cancel(e);
  });
  let pressProps = reactExports.useMemo(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            shouldStopPropagation = triggerPressStart(e, "keyboard");
            let originalTarget = e.currentTarget;
            let pressUp = (e2) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e2, originalTarget) && !e2.repeat && originalTarget.contains(e2.target) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e2), "keyboard");
            };
            addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac(e.currentTarget), "keyup", $ff5963eb1fccf552$export$e08e3b67e392101e(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation) e.stopPropagation();
          if (e.metaKey && $c87311424ea30a05$export$9ac100e40613ea10()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
        } else if (e.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e) {
        if (e && !e.currentTarget.contains(e.target)) return;
        if (e && e.button === 0 && !state.isTriggeringEvent && !$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled) e.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || $6a7db85432448f7f$export$60278871457622de(e.nativeEvent))) {
            if (!isDisabled && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
            let stopPressStart = triggerPressStart(e, "virtual");
            let stopPressUp = triggerPressUp(e, "virtual");
            let stopPressEnd = triggerPressEnd(e, "virtual");
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
          if (shouldStopPropagation) e.stopPropagation();
        }
      }
    };
    let onKeyUp = (e) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
        let target = e.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (e.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          $ea8dcbcb9ea1b556$export$95185d699e05d4d7(state.target, e, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
      } else if (e.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values()) (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e) => {
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
        if ($6a7db85432448f7f$export$29bf1b5f2c56cf63(e.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
        state.pointerType = e.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;
          if (!isDisabled && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
          if (!allowTextSelectionOnPress) $14c0b72509d70225$export$16a4697467175487(state.target);
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
          addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac(e.currentTarget), "pointermove", onPointerMove, false);
          addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac(e.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac(e.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseDown = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (e.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
          e.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e) => {
        if (!e.currentTarget.contains(e.target) || state.pointerType === "virtual") return;
        if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
      };
      let onPointerMove = (e) => {
        if (e.pointerId !== state.activePointerId) return;
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
          }
        } else if (state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
          cancelOnPointerExit(e);
        }
      };
      let onPointerUp = (e) => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
          if ($f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
          else if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
        }
      };
      let onPointerCancel = (e) => {
        cancel(e);
      };
      pressProps2.onDragStart = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        cancel(e);
      };
    } else {
      pressProps2.onMouseDown = (e) => {
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
        if (state.ignoreEmulatedMouseEvents) {
          e.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e.currentTarget;
        state.pointerType = $6a7db85432448f7f$export$60278871457622de(e.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
        let shouldStopPropagation = triggerPressStart(e, state.pointerType);
        if (shouldStopPropagation) e.stopPropagation();
        addGlobalListener($431fbd86ca7dc216$export$b204af158042fbac(e.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseLeave = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
          cancelOnPointerExit(e);
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onMouseUp = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType || "mouse");
      };
      let onMouseUp = (e) => {
        if (e.button !== 0) return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
        else if (state.target && state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
        if (!touch) return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled && !preventFocusOnPress) $7215afc6de606d6b$export$de79e2c695e052f3(e.currentTarget);
        if (!allowTextSelectionOnPress) $14c0b72509d70225$export$16a4697467175487(state.target);
        let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
        if (shouldStopPropagation) e.stopPropagation();
        addGlobalListener($431fbd86ca7dc216$export$f21a1ffae260145a(e.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (!state.isPressed) {
          e.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
          cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
        }
        if (shouldStopPropagation) e.stopPropagation();
      };
      pressProps2.onTouchEnd = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        if (!state.isPressed) {
          e.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
          triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType);
        } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e), state.pointerType, false);
        if (shouldStopPropagation) e.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress) $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        e.stopPropagation();
        if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e));
      };
      let onScroll = (e) => {
        if (state.isPressed && e.target.contains(state.target)) cancel({
          currentTarget: state.target,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
          altKey: false
        });
      };
      pressProps2.onDragStart = (e) => {
        if (!e.currentTarget.contains(e.target)) return;
        cancel(e);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp
  ]);
  reactExports.useEffect(() => {
    return () => {
      var _ref_current_target;
      if (!allowTextSelectionOnPress)
        $14c0b72509d70225$export$b0d6fa1ab32e3295((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : void 0);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, pressProps)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof $431fbd86ca7dc216$export$f21a1ffae260145a(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof $431fbd86ca7dc216$export$f21a1ffae260145a(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0) return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i];
    if (touch.identifier === pointerId) return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createTouchEvent(target, e) {
  let clientX = 0;
  let clientY = 0;
  if (e.targetTouches && e.targetTouches.length === 1) {
    clientX = e.targetTouches[0].clientX;
    clientY = e.targetTouches[0].clientY;
  }
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
  let clientX = e.clientX;
  let clientY = e.clientY;
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = 0;
  let offsetY = 0;
  if (point.width !== void 0) offsetX = point.width / 2;
  else if (point.radiusX !== void 0) offsetX = point.radiusX;
  if (point.height !== void 0) offsetY = point.height / 2;
  else if (point.radiusY !== void 0) offsetY = point.radiusY;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
  if (a.left > b.right || b.left > a.right) return false;
  if (a.top > b.bottom || b.top > a.bottom) return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
  return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
  return true;
}
const $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}
let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e);
}
function $507fabe10e71c6fb$var$isValidKey(e) {
  return !(e.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e.type === "mousedown" || e.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
  if ($6a7db85432448f7f$export$60278871457622de(e)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
  if (e.target === window || e.target === document) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get($431fbd86ca7dc216$export$f21a1ffae260145a(element))) return;
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = $431fbd86ca7dc216$export$b204af158042fbac(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
  return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  let [modality, setModality] = reactExports.useState($507fabe10e71c6fb$var$currentModality);
  reactExports.useEffect(() => {
    let handler = () => {
      setModality($507fabe10e71c6fb$var$currentModality);
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, []);
  return $b5e257d569688ac6$export$535bd6ca7f90a273() ? null : modality;
}
const $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
  let { isDisabled, onLongPressStart, onLongPressEnd, onLongPress, threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD, accessibilityDescription } = props;
  const timeRef = reactExports.useRef(void 0);
  let { addGlobalListener, removeGlobalListener } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled,
    onPressStart(e) {
      e.continuePropagation();
      if (e.pointerType === "mouse" || e.pointerType === "touch") {
        if (onLongPressStart) onLongPressStart({
          ...e,
          type: "longpressstart"
        });
        timeRef.current = setTimeout(() => {
          e.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: true
          }));
          if (onLongPress) onLongPress({
            ...e,
            type: "longpress"
          });
          timeRef.current = void 0;
        }, threshold);
        if (e.pointerType === "touch") {
          let onContextMenu = (e2) => {
            e2.preventDefault();
          };
          addGlobalListener(e.target, "contextmenu", onContextMenu, {
            once: true
          });
          addGlobalListener(window, "pointerup", () => {
            setTimeout(() => {
              removeGlobalListener(e.target, "contextmenu", onContextMenu);
            }, 30);
          }, {
            once: true
          });
        }
      }
    },
    onPressEnd(e) {
      if (timeRef.current) clearTimeout(timeRef.current);
      if (onLongPressEnd && (e.pointerType === "mouse" || e.pointerType === "touch")) onLongPressEnd({
        ...e,
        type: "longpressend"
      });
    }
  });
  let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : void 0);
  return {
    longPressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, descriptionProps)
  };
}
function $6a99195332edec8b$export$80f3e147d781571c(element) {
  const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(element);
  if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === "virtual") {
    let lastFocusedElement = ownerDocument.activeElement;
    $bbed8b41f857bcc0$export$24490316f764c430(() => {
      if (ownerDocument.activeElement === lastFocusedElement && element.isConnected) $7215afc6de606d6b$export$de79e2c695e052f3(element);
    });
  } else $7215afc6de606d6b$export$de79e2c695e052f3(element);
}
function $645f2e67b85a24c9$var$isStyleVisible(element) {
  const windowObject = $431fbd86ca7dc216$export$f21a1ffae260145a(element);
  if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
  let { display, visibility } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    const { getComputedStyle: getComputedStyle2 } = element.ownerDocument.defaultView;
    let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle2(element);
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
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  if (!element) return false;
  if (!scope) return false;
  return scope.some((node) => node.contains(element));
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
new $9bf71ea28793e738$var$Tree();
function $83013635b024ae3d$export$eac1895992b9f3d6(ref, options) {
  let isDisabled = options === null || options === void 0 ? void 0 : options.isDisabled;
  let [hasTabbableChild, setHasTabbableChild] = reactExports.useState(false);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if ((ref === null || ref === void 0 ? void 0 : ref.current) && !isDisabled) {
      let update = () => {
        if (ref.current) {
          let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ref.current, {
            tabbable: true
          });
          setHasTabbableChild(!!walker.nextNode());
        }
      };
      update();
      let observer = new MutationObserver(update);
      observer.observe(ref.current, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: [
          "tabIndex",
          "disabled"
        ]
      });
      return () => {
        observer.disconnect();
      };
    }
  });
  return isDisabled ? false : hasTabbableChild;
}
const $148a7a147e38ea7f$var$RTL_SCRIPTS = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]);
const $148a7a147e38ea7f$var$RTL_LANGS = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(localeString) {
  if (Intl.Locale) {
    let locale = new Intl.Locale(localeString).maximize();
    let textInfo = typeof locale.getTextInfo === "function" ? locale.getTextInfo() : locale.textInfo;
    if (textInfo) return textInfo.direction === "rtl";
    if (locale.script) return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(locale.script);
  }
  let lang = localeString.split("-")[0];
  return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}
const $1e5a04cdaf7d1af8$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
  let locale = typeof window !== "undefined" && window[$1e5a04cdaf7d1af8$var$localeSymbol] || typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      locale
    ]);
  } catch (_err) {
    locale = "en-US";
  }
  return {
    locale,
    direction: $148a7a147e38ea7f$export$702d680b21cbd764(locale) ? "rtl" : "ltr"
  };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = /* @__PURE__ */ new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
  $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
  for (let listener of $1e5a04cdaf7d1af8$var$listeners) listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
  let isSSR = $b5e257d569688ac6$export$535bd6ca7f90a273();
  let [defaultLocale, setDefaultLocale] = reactExports.useState($1e5a04cdaf7d1af8$var$currentLocale);
  reactExports.useEffect(() => {
    if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
    $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
    return () => {
      $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
      if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
    };
  }, []);
  if (isSSR) return {
    locale: "en-US",
    direction: "ltr"
  };
  return defaultLocale;
}
const $18f2051aff69b9bf$var$I18nContext = /* @__PURE__ */ React.createContext(null);
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
  let defaultLocale = $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a();
  let context = reactExports.useContext($18f2051aff69b9bf$var$I18nContext);
  return context || defaultLocale;
}
const $fca6afa0e843324b$var$cache = /* @__PURE__ */ new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary(strings) {
  let dictionary = $fca6afa0e843324b$var$cache.get(strings);
  if (!dictionary) {
    dictionary = new $5b160d28a433310d$export$c17fa47878dc55b6(strings);
    $fca6afa0e843324b$var$cache.set(strings, dictionary);
  }
  return dictionary;
}
function $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName) {
  return packageName && $5b160d28a433310d$export$c17fa47878dc55b6.getGlobalDictionaryForPackage(packageName) || $fca6afa0e843324b$var$getCachedDictionary(strings);
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings, packageName) {
  let { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let dictionary = $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName);
  return reactExports.useMemo(() => new $6db58dc88e78b024$export$2f817fcdc4b89ae0(locale, dictionary), [
    locale,
    dictionary
  ]);
}
let $325a3faab7a68acd$var$cache = /* @__PURE__ */ new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
  let { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
  if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
  let formatter = new Intl.Collator(locale, options);
  $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
  return formatter;
}
function $ae20dd8cbca75726$export$d6daf82dcd84e87c(options) {
  let { selectionManager: manager, keyboardDelegate: delegate, ref, autoFocus = false, shouldFocusWrap = false, disallowEmptySelection = false, disallowSelectAll = false, selectOnFocus = manager.selectionBehavior === "replace", disallowTypeAhead = false, shouldUseVirtualFocus, allowsTabNavigation = false, isVirtualized, scrollRef = ref, linkBehavior = "action" } = options;
  let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
  let onKeyDown = (e) => {
    if (e.altKey && e.key === "Tab") e.preventDefault();
    if (!ref.current.contains(e.target)) return;
    const navigateToKey = (key, childFocus) => {
      if (key != null) {
        if (manager.isLink(key) && linkBehavior === "selection" && selectOnFocus && !$feb5ffebff200149$export$d3e3bd3e26688c04(e)) {
          reactDomExports.flushSync(() => {
            manager.setFocusedKey(key, childFocus);
          });
          let item = scrollRef.current.querySelector(`[data-key="${CSS.escape(key.toString())}"]`);
          let itemProps = manager.getItemProps(key);
          router.open(item, e, itemProps.href, itemProps.routerOptions);
          return;
        }
        manager.setFocusedKey(key, childFocus);
        if (manager.isLink(key) && linkBehavior === "override") return;
        if (e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(key);
        else if (selectOnFocus && !$feb5ffebff200149$export$d3e3bd3e26688c04(e)) manager.replaceSelection(key);
      }
    };
    switch (e.key) {
      case "ArrowDown":
        if (delegate.getKeyBelow) {
          var _delegate_getFirstKey, _delegate_getFirstKey1;
          e.preventDefault();
          let nextKey = manager.focusedKey != null ? delegate.getKeyBelow(manager.focusedKey) : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate);
          if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getFirstKey1 = delegate.getFirstKey) === null || _delegate_getFirstKey1 === void 0 ? void 0 : _delegate_getFirstKey1.call(delegate, manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "ArrowUp":
        if (delegate.getKeyAbove) {
          var _delegate_getLastKey, _delegate_getLastKey1;
          e.preventDefault();
          let nextKey = manager.focusedKey != null ? delegate.getKeyAbove(manager.focusedKey) : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate);
          if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getLastKey1 = delegate.getLastKey) === null || _delegate_getLastKey1 === void 0 ? void 0 : _delegate_getLastKey1.call(delegate, manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "ArrowLeft":
        if (delegate.getKeyLeftOf) {
          var _delegate_getFirstKey2, _delegate_getLastKey2;
          e.preventDefault();
          let nextKey = delegate.getKeyLeftOf(manager.focusedKey);
          if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? (_delegate_getFirstKey2 = delegate.getFirstKey) === null || _delegate_getFirstKey2 === void 0 ? void 0 : _delegate_getFirstKey2.call(delegate, manager.focusedKey) : (_delegate_getLastKey2 = delegate.getLastKey) === null || _delegate_getLastKey2 === void 0 ? void 0 : _delegate_getLastKey2.call(delegate, manager.focusedKey);
          navigateToKey(nextKey, direction === "rtl" ? "first" : "last");
        }
        break;
      case "ArrowRight":
        if (delegate.getKeyRightOf) {
          var _delegate_getLastKey3, _delegate_getFirstKey3;
          e.preventDefault();
          let nextKey = delegate.getKeyRightOf(manager.focusedKey);
          if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? (_delegate_getLastKey3 = delegate.getLastKey) === null || _delegate_getLastKey3 === void 0 ? void 0 : _delegate_getLastKey3.call(delegate, manager.focusedKey) : (_delegate_getFirstKey3 = delegate.getFirstKey) === null || _delegate_getFirstKey3 === void 0 ? void 0 : _delegate_getFirstKey3.call(delegate, manager.focusedKey);
          navigateToKey(nextKey, direction === "rtl" ? "last" : "first");
        }
        break;
      case "Home":
        if (delegate.getFirstKey) {
          e.preventDefault();
          let firstKey = delegate.getFirstKey(manager.focusedKey, $feb5ffebff200149$export$16792effe837dba3(e));
          manager.setFocusedKey(firstKey);
          if ($feb5ffebff200149$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(firstKey);
          else if (selectOnFocus) manager.replaceSelection(firstKey);
        }
        break;
      case "End":
        if (delegate.getLastKey) {
          e.preventDefault();
          let lastKey = delegate.getLastKey(manager.focusedKey, $feb5ffebff200149$export$16792effe837dba3(e));
          manager.setFocusedKey(lastKey);
          if ($feb5ffebff200149$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(lastKey);
          else if (selectOnFocus) manager.replaceSelection(lastKey);
        }
        break;
      case "PageDown":
        if (delegate.getKeyPageBelow) {
          e.preventDefault();
          let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "PageUp":
        if (delegate.getKeyPageAbove) {
          e.preventDefault();
          let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
          navigateToKey(nextKey);
        }
        break;
      case "a":
        if ($feb5ffebff200149$export$16792effe837dba3(e) && manager.selectionMode === "multiple" && disallowSelectAll !== true) {
          e.preventDefault();
          manager.selectAll();
        }
        break;
      case "Escape":
        if (!disallowEmptySelection && manager.selectedKeys.size !== 0) {
          e.stopPropagation();
          e.preventDefault();
          manager.clearSelection();
        }
        break;
      case "Tab":
        if (!allowsTabNavigation) {
          if (e.shiftKey) ref.current.focus();
          else {
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ref.current, {
              tabbable: true
            });
            let next;
            let last;
            do {
              last = walker.lastChild();
              if (last) next = last;
            } while (last);
            if (next && !next.contains(document.activeElement)) $7215afc6de606d6b$export$de79e2c695e052f3(next);
          }
          break;
        }
    }
  };
  let scrollPos = reactExports.useRef({
    top: 0,
    left: 0
  });
  $e9faafb641e167db$export$90fc3a17d93f704c(scrollRef, "scroll", isVirtualized ? null : () => {
    scrollPos.current = {
      top: scrollRef.current.scrollTop,
      left: scrollRef.current.scrollLeft
    };
  });
  let onFocus = (e) => {
    if (manager.isFocused) {
      if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
      return;
    }
    if (!e.currentTarget.contains(e.target)) return;
    manager.setFocused(true);
    if (manager.focusedKey == null) {
      let navigateToFirstKey = (key) => {
        if (key != null) {
          manager.setFocusedKey(key);
          if (selectOnFocus) manager.replaceSelection(key);
        }
      };
      let relatedTarget = e.relatedTarget;
      var _manager_lastSelectedKey, _manager_firstSelectedKey;
      if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToFirstKey((_manager_lastSelectedKey = manager.lastSelectedKey) !== null && _manager_lastSelectedKey !== void 0 ? _manager_lastSelectedKey : delegate.getLastKey());
      else navigateToFirstKey((_manager_firstSelectedKey = manager.firstSelectedKey) !== null && _manager_firstSelectedKey !== void 0 ? _manager_firstSelectedKey : delegate.getFirstKey());
    } else if (!isVirtualized) {
      scrollRef.current.scrollTop = scrollPos.current.top;
      scrollRef.current.scrollLeft = scrollPos.current.left;
    }
    if (manager.focusedKey != null) {
      let element = scrollRef.current.querySelector(`[data-key="${CSS.escape(manager.focusedKey.toString())}"]`);
      if (element) {
        if (!element.contains(document.activeElement)) $7215afc6de606d6b$export$de79e2c695e052f3(element);
        let modality = $507fabe10e71c6fb$export$630ff653c5ada6a9();
        if (modality === "keyboard") $2f04cbc44ee30ce0$export$c826860796309d1b(element, {
          containingElement: ref.current
        });
      }
    }
  };
  let onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) manager.setFocused(false);
  };
  const autoFocusRef = reactExports.useRef(autoFocus);
  reactExports.useEffect(() => {
    if (autoFocusRef.current) {
      let focusedKey = null;
      if (autoFocus === "first") focusedKey = delegate.getFirstKey();
      if (autoFocus === "last") focusedKey = delegate.getLastKey();
      let selectedKeys = manager.selectedKeys;
      if (selectedKeys.size) {
        for (let key of selectedKeys) if (manager.canSelectItem(key)) {
          focusedKey = key;
          break;
        }
      }
      manager.setFocused(true);
      manager.setFocusedKey(focusedKey);
      if (focusedKey == null && !shouldUseVirtualFocus) $6a99195332edec8b$export$80f3e147d781571c(ref.current);
    }
  }, []);
  let lastFocusedKey = reactExports.useRef(manager.focusedKey);
  reactExports.useEffect(() => {
    if (manager.isFocused && manager.focusedKey != null && (manager.focusedKey !== lastFocusedKey.current || autoFocusRef.current) && (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current)) {
      let modality = $507fabe10e71c6fb$export$630ff653c5ada6a9();
      let element = ref.current.querySelector(`[data-key="${CSS.escape(manager.focusedKey.toString())}"]`);
      if (!element)
        return;
      if (modality === "keyboard" || autoFocusRef.current) {
        $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollRef.current, element);
        if (modality !== "virtual") $2f04cbc44ee30ce0$export$c826860796309d1b(element, {
          containingElement: ref.current
        });
      }
    }
    if (!shouldUseVirtualFocus && manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null) $6a99195332edec8b$export$80f3e147d781571c(ref.current);
    lastFocusedKey.current = manager.focusedKey;
    autoFocusRef.current = false;
  });
  $e9faafb641e167db$export$90fc3a17d93f704c(ref, "react-aria-focus-scope-restore", (e) => {
    e.preventDefault();
    manager.setFocused(true);
  });
  let handlers = {
    onKeyDown,
    onFocus,
    onBlur,
    onMouseDown(e) {
      if (scrollRef.current === e.target)
        e.preventDefault();
    }
  };
  let { typeSelectProps } = $fb3050f43d946246$export$e32c88dfddc6e1d8({
    keyboardDelegate: delegate,
    selectionManager: manager
  });
  if (!disallowTypeAhead) handlers = $3ef42575df84b30b$export$9d1611c77c2fe928(typeSelectProps, handlers);
  let tabIndex;
  if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
  return {
    collectionProps: {
      ...handlers,
      tabIndex
    }
  };
}
function $880e95eb8b93ba9a$export$ecf600387e221c37(options) {
  let { selectionManager: manager, key, ref, shouldSelectOnPressUp, shouldUseVirtualFocus, focus, isDisabled, onAction, allowsDifferentPressOrigin, linkBehavior = "action" } = options;
  let router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
  let onSelect = (e) => {
    if (e.pointerType === "keyboard" && $feb5ffebff200149$export$d3e3bd3e26688c04(e)) manager.toggleSelection(key);
    else {
      if (manager.selectionMode === "none") return;
      if (manager.isLink(key)) {
        if (linkBehavior === "selection") {
          let itemProps2 = manager.getItemProps(key);
          router.open(ref.current, e, itemProps2.href, itemProps2.routerOptions);
          manager.setSelectedKeys(manager.selectedKeys);
          return;
        } else if (linkBehavior === "override" || linkBehavior === "none") return;
      }
      if (manager.selectionMode === "single") {
        if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
        else manager.replaceSelection(key);
      } else if (e && e.shiftKey) manager.extendSelection(key);
      else if (manager.selectionBehavior === "toggle" || e && ($feb5ffebff200149$export$16792effe837dba3(e) || e.pointerType === "touch" || e.pointerType === "virtual"))
        manager.toggleSelection(key);
      else manager.replaceSelection(key);
    }
  };
  reactExports.useEffect(() => {
    let isFocused = key === manager.focusedKey;
    if (isFocused && manager.isFocused && !shouldUseVirtualFocus) {
      if (focus) focus();
      else if (document.activeElement !== ref.current) $6a99195332edec8b$export$80f3e147d781571c(ref.current);
    }
  }, [
    ref,
    key,
    manager.focusedKey,
    manager.childFocusStrategy,
    manager.isFocused,
    shouldUseVirtualFocus
  ]);
  isDisabled = isDisabled || manager.isDisabled(key);
  let itemProps = {};
  if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
    tabIndex: key === manager.focusedKey ? 0 : -1,
    onFocus(e) {
      if (e.target === ref.current) manager.setFocusedKey(key);
    }
  };
  else if (isDisabled) itemProps.onMouseDown = (e) => {
    e.preventDefault();
  };
  let isLinkOverride = manager.isLink(key) && linkBehavior === "override";
  let hasLinkAction = manager.isLink(key) && linkBehavior !== "selection" && linkBehavior !== "none";
  let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride;
  let allowsActions = (onAction || hasLinkAction) && !isDisabled;
  let hasPrimaryAction = allowsActions && (manager.selectionBehavior === "replace" ? !allowsSelection : !allowsSelection || manager.isEmpty);
  let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === "replace";
  let hasAction = hasPrimaryAction || hasSecondaryAction;
  let modality = reactExports.useRef(null);
  let longPressEnabled = hasAction && allowsSelection;
  let longPressEnabledOnPressStart = reactExports.useRef(false);
  let hadPrimaryActionOnPressStart = reactExports.useRef(false);
  let performAction = (e) => {
    if (onAction) onAction();
    if (hasLinkAction) {
      let itemProps2 = manager.getItemProps(key);
      router.open(ref.current, e, itemProps2.href, itemProps2.routerOptions);
    }
  };
  let itemPressProps = {};
  if (shouldSelectOnPressUp) {
    itemPressProps.onPressStart = (e) => {
      modality.current = e.pointerType;
      longPressEnabledOnPressStart.current = longPressEnabled;
      if (e.pointerType === "keyboard" && (!hasAction || $880e95eb8b93ba9a$var$isSelectionKey())) onSelect(e);
    };
    if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e) => {
      if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== "mouse") {
        if (e.pointerType === "keyboard" && !$880e95eb8b93ba9a$var$isActionKey()) return;
        performAction(e);
      } else if (e.pointerType !== "keyboard" && allowsSelection) onSelect(e);
    };
    else {
      itemPressProps.onPressUp = hasPrimaryAction ? null : (e) => {
        if (e.pointerType !== "keyboard" && allowsSelection) onSelect(e);
      };
      itemPressProps.onPress = hasPrimaryAction ? performAction : null;
    }
  } else {
    itemPressProps.onPressStart = (e) => {
      modality.current = e.pointerType;
      longPressEnabledOnPressStart.current = longPressEnabled;
      hadPrimaryActionOnPressStart.current = hasPrimaryAction;
      if (allowsSelection && (e.pointerType === "mouse" && !hasPrimaryAction || e.pointerType === "keyboard" && (!allowsActions || $880e95eb8b93ba9a$var$isSelectionKey()))) onSelect(e);
    };
    itemPressProps.onPress = (e) => {
      if (e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && hasAction && $880e95eb8b93ba9a$var$isActionKey() || e.pointerType === "mouse" && hadPrimaryActionOnPressStart.current) {
        if (hasAction) performAction(e);
        else if (allowsSelection) onSelect(e);
      }
    };
  }
  itemProps["data-key"] = key;
  itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
  let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21(itemPressProps);
  let onDoubleClick = hasSecondaryAction ? (e) => {
    if (modality.current === "mouse") {
      e.stopPropagation();
      e.preventDefault();
      performAction(e);
    }
  } : void 0;
  let { longPressProps } = $8a26561d2877236e$export$c24ed0104d07eab9({
    isDisabled: !longPressEnabled,
    onLongPress(e) {
      if (e.pointerType === "touch") {
        onSelect(e);
        manager.setSelectionBehavior("toggle");
      }
    }
  });
  let onDragStartCapture = (e) => {
    if (modality.current === "touch" && longPressEnabledOnPressStart.current) e.preventDefault();
  };
  let onClick = manager.isLink(key) ? (e) => {
    if (!$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening) e.preventDefault();
  } : void 0;
  return {
    itemProps: $3ef42575df84b30b$export$9d1611c77c2fe928(itemProps, allowsSelection || hasPrimaryAction ? pressProps : {}, longPressEnabled ? longPressProps : {}, {
      onDoubleClick,
      onDragStartCapture,
      onClick
    }),
    isPressed,
    isSelected: manager.isSelected(key),
    isFocused: manager.isFocused && manager.focusedKey === key,
    isDisabled,
    allowsSelection,
    hasAction
  };
}
function $880e95eb8b93ba9a$var$isActionKey() {
  let event = window.event;
  return (event === null || event === void 0 ? void 0 : event.key) === "Enter";
}
function $880e95eb8b93ba9a$var$isSelectionKey() {
  let event = window.event;
  return (event === null || event === void 0 ? void 0 : event.key) === " " || (event === null || event === void 0 ? void 0 : event.code) === "Space";
}
class $657e4dc4a6e88df0$export$8f5ed9ff9f511381 {
  getItemRect(key) {
    let container = this.ref.current;
    let item = key != null ? container.querySelector(`[data-key="${CSS.escape(key.toString())}"]`) : null;
    if (!item) return null;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    return {
      x: itemRect.left - containerRect.left + container.scrollLeft,
      y: itemRect.top - containerRect.top + container.scrollTop,
      width: itemRect.width,
      height: itemRect.height
    };
  }
  getContentSize() {
    let container = this.ref.current;
    return {
      width: container.scrollWidth,
      height: container.scrollHeight
    };
  }
  getVisibleRect() {
    let container = this.ref.current;
    return {
      x: container.scrollLeft,
      y: container.scrollTop,
      width: container.offsetWidth,
      height: container.offsetHeight
    };
  }
  constructor(ref) {
    this.ref = ref;
  }
}
function $c5a24bc478652b5f$export$1005530eda016c13$1(node, collection) {
  if (typeof collection.getChildren === "function") return collection.getChildren(node.key);
  return node.childNodes;
}
function $c5a24bc478652b5f$export$fbdeaa6a76694f71$1(iterable) {
  return $c5a24bc478652b5f$export$5f3398f8733f90e2$1(iterable, 0);
}
function $c5a24bc478652b5f$export$5f3398f8733f90e2$1(iterable, index) {
  if (index < 0) return void 0;
  let i = 0;
  for (let item of iterable) {
    if (i === index) return item;
    i++;
  }
}
function $c5a24bc478652b5f$export$7475b2c64539e4cf$1(iterable) {
  let lastItem = void 0;
  for (let value of iterable) lastItem = value;
  return lastItem;
}
class $d1c300d9c497e402$export$de9feff04fda126e {
  isCell(node) {
    return node.type === "cell";
  }
  isRow(node) {
    return node.type === "row" || node.type === "item";
  }
  isDisabled(item) {
    var _item_props;
    return this.disabledBehavior === "all" && (((_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.isDisabled) || this.disabledKeys.has(item.key));
  }
  findPreviousKey(fromKey, pred) {
    let key = fromKey != null ? this.collection.getKeyBefore(fromKey) : this.collection.getLastKey();
    while (key != null) {
      let item = this.collection.getItem(key);
      if (!this.isDisabled(item) && (!pred || pred(item))) return key;
      key = this.collection.getKeyBefore(key);
    }
  }
  findNextKey(fromKey, pred) {
    let key = fromKey != null ? this.collection.getKeyAfter(fromKey) : this.collection.getFirstKey();
    while (key != null) {
      let item = this.collection.getItem(key);
      if (!this.isDisabled(item) && (!pred || pred(item))) return key;
      key = this.collection.getKeyAfter(key);
    }
  }
  getKeyBelow(key) {
    let startItem = this.collection.getItem(key);
    if (!startItem) return;
    if (this.isCell(startItem)) key = startItem.parentKey;
    key = this.findNextKey(key, (item) => item.type === "item");
    if (key != null) {
      if (this.isCell(startItem)) {
        let item = this.collection.getItem(key);
        return $c5a24bc478652b5f$export$5f3398f8733f90e2$1($c5a24bc478652b5f$export$1005530eda016c13$1(item, this.collection), startItem.index).key;
      }
      if (this.focusMode === "row") return key;
    }
  }
  getKeyAbove(key) {
    let startItem = this.collection.getItem(key);
    if (!startItem) return;
    if (this.isCell(startItem)) key = startItem.parentKey;
    key = this.findPreviousKey(key, (item) => item.type === "item");
    if (key != null) {
      if (this.isCell(startItem)) {
        let item = this.collection.getItem(key);
        return $c5a24bc478652b5f$export$5f3398f8733f90e2$1($c5a24bc478652b5f$export$1005530eda016c13$1(item, this.collection), startItem.index).key;
      }
      if (this.focusMode === "row") return key;
    }
  }
  getKeyRightOf(key) {
    let item = this.collection.getItem(key);
    if (!item) return;
    if (this.isRow(item)) {
      let children = $c5a24bc478652b5f$export$1005530eda016c13$1(item, this.collection);
      return this.direction === "rtl" ? $c5a24bc478652b5f$export$7475b2c64539e4cf$1(children).key : $c5a24bc478652b5f$export$fbdeaa6a76694f71$1(children).key;
    }
    if (this.isCell(item)) {
      let parent = this.collection.getItem(item.parentKey);
      let children = $c5a24bc478652b5f$export$1005530eda016c13$1(parent, this.collection);
      let next = this.direction === "rtl" ? $c5a24bc478652b5f$export$5f3398f8733f90e2$1(children, item.index - 1) : $c5a24bc478652b5f$export$5f3398f8733f90e2$1(children, item.index + 1);
      if (next) return next.key;
      if (this.focusMode === "row") return item.parentKey;
      return this.direction === "rtl" ? this.getFirstKey(key) : this.getLastKey(key);
    }
  }
  getKeyLeftOf(key) {
    let item = this.collection.getItem(key);
    if (!item) return;
    if (this.isRow(item)) {
      let children = $c5a24bc478652b5f$export$1005530eda016c13$1(item, this.collection);
      return this.direction === "rtl" ? $c5a24bc478652b5f$export$fbdeaa6a76694f71$1(children).key : $c5a24bc478652b5f$export$7475b2c64539e4cf$1(children).key;
    }
    if (this.isCell(item)) {
      let parent = this.collection.getItem(item.parentKey);
      let children = $c5a24bc478652b5f$export$1005530eda016c13$1(parent, this.collection);
      let prev = this.direction === "rtl" ? $c5a24bc478652b5f$export$5f3398f8733f90e2$1(children, item.index + 1) : $c5a24bc478652b5f$export$5f3398f8733f90e2$1(children, item.index - 1);
      if (prev) return prev.key;
      if (this.focusMode === "row") return item.parentKey;
      return this.direction === "rtl" ? this.getLastKey(key) : this.getFirstKey(key);
    }
  }
  getFirstKey(key, global) {
    let item;
    if (key != null) {
      item = this.collection.getItem(key);
      if (!item) return;
      if (this.isCell(item) && !global) {
        let parent = this.collection.getItem(item.parentKey);
        return $c5a24bc478652b5f$export$fbdeaa6a76694f71$1($c5a24bc478652b5f$export$1005530eda016c13$1(parent, this.collection)).key;
      }
    }
    key = this.findNextKey(null, (item2) => item2.type === "item");
    if (key != null && item && this.isCell(item) && global || this.focusMode === "cell") {
      let item2 = this.collection.getItem(key);
      key = $c5a24bc478652b5f$export$fbdeaa6a76694f71$1($c5a24bc478652b5f$export$1005530eda016c13$1(item2, this.collection)).key;
    }
    return key;
  }
  getLastKey(key, global) {
    let item;
    if (key != null) {
      item = this.collection.getItem(key);
      if (!item) return;
      if (this.isCell(item) && !global) {
        let parent = this.collection.getItem(item.parentKey);
        let children = $c5a24bc478652b5f$export$1005530eda016c13$1(parent, this.collection);
        return $c5a24bc478652b5f$export$7475b2c64539e4cf$1(children).key;
      }
    }
    key = this.findPreviousKey(null, (item2) => item2.type === "item");
    if (key != null && item && this.isCell(item) && global || this.focusMode === "cell") {
      let item2 = this.collection.getItem(key);
      let children = $c5a24bc478652b5f$export$1005530eda016c13$1(item2, this.collection);
      key = $c5a24bc478652b5f$export$7475b2c64539e4cf$1(children).key;
    }
    return key;
  }
  getKeyPageAbove(key) {
    let itemRect = this.layoutDelegate.getItemRect(key);
    if (!itemRect) return null;
    let pageY = Math.max(0, itemRect.y + itemRect.height - this.layoutDelegate.getVisibleRect().height);
    while (itemRect && itemRect.y > pageY) {
      key = this.getKeyAbove(key);
      itemRect = this.layoutDelegate.getItemRect(key);
    }
    return key;
  }
  getKeyPageBelow(key) {
    let itemRect = this.layoutDelegate.getItemRect(key);
    if (!itemRect) return null;
    let pageHeight = this.layoutDelegate.getVisibleRect().height;
    let pageY = Math.min(this.layoutDelegate.getContentSize().height, itemRect.y + pageHeight);
    while (itemRect && itemRect.y + itemRect.height < pageY) {
      let nextKey = this.getKeyBelow(key);
      if (nextKey == null) break;
      itemRect = this.layoutDelegate.getItemRect(nextKey);
      key = nextKey;
    }
    return key;
  }
  getKeyForSearch(search, fromKey) {
    if (!this.collator) return null;
    let collection = this.collection;
    let key = fromKey !== null && fromKey !== void 0 ? fromKey : this.getFirstKey();
    let startItem = collection.getItem(key);
    if (startItem.type === "cell") key = startItem.parentKey;
    let hasWrapped = false;
    while (key != null) {
      let item = collection.getItem(key);
      if (item.textValue) {
        let substring = item.textValue.slice(0, search.length);
        if (this.collator.compare(substring, search) === 0) {
          if (this.isRow(item) && this.focusMode === "cell") return $c5a24bc478652b5f$export$fbdeaa6a76694f71$1($c5a24bc478652b5f$export$1005530eda016c13$1(item, this.collection)).key;
          return item.key;
        }
      }
      key = this.findNextKey(key, (item2) => item2.type === "item");
      if (key == null && !hasWrapped) {
        key = this.getFirstKey();
        hasWrapped = true;
      }
    }
    return null;
  }
  constructor(options) {
    this.collection = options.collection;
    this.disabledKeys = options.disabledKeys;
    this.disabledBehavior = options.disabledBehavior || "all";
    this.direction = options.direction;
    this.collator = options.collator;
    this.layoutDelegate = options.layoutDelegate || (options.layout ? new $d1c300d9c497e402$var$DeprecatedLayoutDelegate(options.layout) : new $657e4dc4a6e88df0$export$8f5ed9ff9f511381(options.ref));
    this.focusMode = options.focusMode || "row";
  }
}
class $d1c300d9c497e402$var$DeprecatedLayoutDelegate {
  getContentSize() {
    return this.layout.getContentSize();
  }
  getItemRect(key) {
    var _this_layout_getLayoutInfo;
    return ((_this_layout_getLayoutInfo = this.layout.getLayoutInfo(key)) === null || _this_layout_getLayoutInfo === void 0 ? void 0 : _this_layout_getLayoutInfo.rect) || null;
  }
  getVisibleRect() {
    return this.layout.virtualizer.visibleRect;
  }
  constructor(layout) {
    this.layout = layout;
  }
}
const $1af922eb41e03c8f$export$e6235c0d09b995d0 = /* @__PURE__ */ new WeakMap();
var $682989befd4f478d$exports = {};
$682989befd4f478d$exports = {
  "deselectedItem": (args) => `${args.item} غير المحدد`,
  "longPressToSelect": `اضغط مطولًا للدخول إلى وضع التحديد.`,
  "select": `تحديد`,
  "selectedAll": `جميع العناصر المحددة.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `لم يتم تحديد عناصر`,
    one: () => `${formatter.number(args.count)} عنصر محدد`,
    other: () => `${formatter.number(args.count)} عنصر محدد`
  })}.`,
  "selectedItem": (args) => `${args.item} المحدد`
};
var $f7fca02019afd941$exports = {};
$f7fca02019afd941$exports = {
  "deselectedItem": (args) => `${args.item} не е избран.`,
  "longPressToSelect": `Натиснете и задръжте за да влезете в избирателен режим.`,
  "select": `Изберете`,
  "selectedAll": `Всички елементи са избрани.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Няма избрани елементи`,
    one: () => `${formatter.number(args.count)} избран елемент`,
    other: () => `${formatter.number(args.count)} избрани елементи`
  })}.`,
  "selectedItem": (args) => `${args.item} избран.`
};
var $8f86f40be75387f1$exports = {};
$8f86f40be75387f1$exports = {
  "deselectedItem": (args) => `Položka ${args.item} není vybrána.`,
  "longPressToSelect": `Dlouhým stisknutím přejdete do režimu výběru.`,
  "select": `Vybrat`,
  "selectedAll": `Vybrány všechny položky.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nevybrány žádné položky`,
    one: () => `Vybrána ${formatter.number(args.count)} položka`,
    other: () => `Vybráno ${formatter.number(args.count)} položek`
  })}.`,
  "selectedItem": (args) => `Vybrána položka ${args.item}.`
};
var $db24ba43c8d652ee$exports = {};
$db24ba43c8d652ee$exports = {
  "deselectedItem": (args) => `${args.item} ikke valgt.`,
  "longPressToSelect": `Lav et langt tryk for at aktivere valgtilstand.`,
  "select": `Vælg`,
  "selectedAll": `Alle elementer valgt.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Ingen elementer valgt`,
    one: () => `${formatter.number(args.count)} element valgt`,
    other: () => `${formatter.number(args.count)} elementer valgt`
  })}.`,
  "selectedItem": (args) => `${args.item} valgt.`
};
var $f8f1e72c8b5447d6$exports = {};
$f8f1e72c8b5447d6$exports = {
  "deselectedItem": (args) => `${args.item} nicht ausgewählt.`,
  "longPressToSelect": `Gedrückt halten, um Auswahlmodus zu öffnen.`,
  "select": `Auswählen`,
  "selectedAll": `Alle Elemente ausgewählt.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Keine Elemente ausgewählt`,
    one: () => `${formatter.number(args.count)} Element ausgewählt`,
    other: () => `${formatter.number(args.count)} Elemente ausgewählt`
  })}.`,
  "selectedItem": (args) => `${args.item} ausgewählt.`
};
var $9a73ed2983c3ab0b$exports = {};
$9a73ed2983c3ab0b$exports = {
  "deselectedItem": (args) => `Δεν επιλέχθηκε το στοιχείο ${args.item}.`,
  "longPressToSelect": `Πατήστε παρατεταμένα για να μπείτε σε λειτουργία επιλογής.`,
  "select": `Επιλογή`,
  "selectedAll": `Επιλέχθηκαν όλα τα στοιχεία.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Δεν επιλέχθηκαν στοιχεία`,
    one: () => `Επιλέχθηκε ${formatter.number(args.count)} στοιχείο`,
    other: () => `Επιλέχθηκαν ${formatter.number(args.count)} στοιχεία`
  })}.`,
  "selectedItem": (args) => `Επιλέχθηκε το στοιχείο ${args.item}.`
};
var $583de0b3587601b9$exports = {};
$583de0b3587601b9$exports = {
  "deselectedItem": (args) => `${args.item} not selected.`,
  "select": `Select`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `No items selected`,
    one: () => `${formatter.number(args.count)} item selected`,
    other: () => `${formatter.number(args.count)} items selected`
  })}.`,
  "selectedAll": `All items selected.`,
  "selectedItem": (args) => `${args.item} selected.`,
  "longPressToSelect": `Long press to enter selection mode.`
};
var $147159c978043442$exports = {};
$147159c978043442$exports = {
  "deselectedItem": (args) => `${args.item} no seleccionado.`,
  "longPressToSelect": `Mantenga pulsado para abrir el modo de selección.`,
  "select": `Seleccionar`,
  "selectedAll": `Todos los elementos seleccionados.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Ningún elemento seleccionado`,
    one: () => `${formatter.number(args.count)} elemento seleccionado`,
    other: () => `${formatter.number(args.count)} elementos seleccionados`
  })}.`,
  "selectedItem": (args) => `${args.item} seleccionado.`
};
var $5cbb62c8a19173ac$exports = {};
$5cbb62c8a19173ac$exports = {
  "deselectedItem": (args) => `${args.item} pole valitud.`,
  "longPressToSelect": `Valikurežiimi sisenemiseks vajutage pikalt.`,
  "select": `Vali`,
  "selectedAll": `Kõik üksused valitud.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Üksusi pole valitud`,
    one: () => `${formatter.number(args.count)} üksus valitud`,
    other: () => `${formatter.number(args.count)} üksust valitud`
  })}.`,
  "selectedItem": (args) => `${args.item} valitud.`
};
var $a33d71dc804cc59e$exports = {};
$a33d71dc804cc59e$exports = {
  "deselectedItem": (args) => `Kohdetta ${args.item} ei valittu.`,
  "longPressToSelect": `Siirry valintatilaan painamalla pitkään.`,
  "select": `Valitse`,
  "selectedAll": `Kaikki kohteet valittu.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Ei yhtään kohdetta valittu`,
    one: () => `${formatter.number(args.count)} kohde valittu`,
    other: () => `${formatter.number(args.count)} kohdetta valittu`
  })}.`,
  "selectedItem": (args) => `${args.item} valittu.`
};
var $92d800447793d084$exports = {};
$92d800447793d084$exports = {
  "deselectedItem": (args) => `${args.item} non sélectionné.`,
  "longPressToSelect": `Appuyez de manière prolongée pour passer en mode de sélection.`,
  "select": `Sélectionner`,
  "selectedAll": `Tous les éléments sélectionnés.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Aucun élément sélectionné`,
    one: () => `${formatter.number(args.count)} élément sélectionné`,
    other: () => `${formatter.number(args.count)} éléments sélectionnés`
  })}.`,
  "selectedItem": (args) => `${args.item} sélectionné.`
};
var $fe732cdb32124ea8$exports = {};
$fe732cdb32124ea8$exports = {
  "deselectedItem": (args) => `${args.item} לא נבחר.`,
  "longPressToSelect": `הקשה ארוכה לכניסה למצב בחירה.`,
  "select": `בחר`,
  "selectedAll": `כל הפריטים נבחרו.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `לא נבחרו פריטים`,
    one: () => `פריט ${formatter.number(args.count)} נבחר`,
    other: () => `${formatter.number(args.count)} פריטים נבחרו`
  })}.`,
  "selectedItem": (args) => `${args.item} נבחר.`
};
var $e41234e934efb4f5$exports = {};
$e41234e934efb4f5$exports = {
  "deselectedItem": (args) => `Stavka ${args.item} nije odabrana.`,
  "longPressToSelect": `Dugo pritisnite za ulazak u način odabira.`,
  "select": `Odaberite`,
  "selectedAll": `Odabrane su sve stavke.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nije odabrana nijedna stavka`,
    one: () => `Odabrana je ${formatter.number(args.count)} stavka`,
    other: () => `Odabrano je ${formatter.number(args.count)} stavki`
  })}.`,
  "selectedItem": (args) => `Stavka ${args.item} je odabrana.`
};
var $1b0393182473bf9e$exports = {};
$1b0393182473bf9e$exports = {
  "deselectedItem": (args) => `${args.item} nincs kijelölve.`,
  "longPressToSelect": `Nyomja hosszan a kijelöléshez.`,
  "select": `Kijelölés`,
  "selectedAll": `Az összes elem kijelölve.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Egy elem sincs kijelölve`,
    one: () => `${formatter.number(args.count)} elem kijelölve`,
    other: () => `${formatter.number(args.count)} elem kijelölve`
  })}.`,
  "selectedItem": (args) => `${args.item} kijelölve.`
};
var $2eed782c1c110ce7$exports = {};
$2eed782c1c110ce7$exports = {
  "deselectedItem": (args) => `${args.item} non selezionato.`,
  "longPressToSelect": `Premi a lungo per passare alla modalità di selezione.`,
  "select": `Seleziona`,
  "selectedAll": `Tutti gli elementi selezionati.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nessun elemento selezionato`,
    one: () => `${formatter.number(args.count)} elemento selezionato`,
    other: () => `${formatter.number(args.count)} elementi selezionati`
  })}.`,
  "selectedItem": (args) => `${args.item} selezionato.`
};
var $8b5d459f86e9b23c$exports = {};
$8b5d459f86e9b23c$exports = {
  "deselectedItem": (args) => `${args.item} が選択されていません。`,
  "longPressToSelect": `長押しして選択モードを開きます。`,
  "select": `選択`,
  "selectedAll": `すべての項目を選択しました。`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `項目が選択されていません`,
    one: () => `${formatter.number(args.count)} 項目を選択しました`,
    other: () => `${formatter.number(args.count)} 項目を選択しました`
  })}。`,
  "selectedItem": (args) => `${args.item} を選択しました。`
};
var $1949c3ad17295fd4$exports = {};
$1949c3ad17295fd4$exports = {
  "deselectedItem": (args) => `${args.item}이(가) 선택되지 않았습니다.`,
  "longPressToSelect": `선택 모드로 들어가려면 길게 누르십시오.`,
  "select": `선택`,
  "selectedAll": `모든 항목이 선택되었습니다.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `선택된 항목이 없습니다`,
    one: () => `${formatter.number(args.count)}개 항목이 선택되었습니다`,
    other: () => `${formatter.number(args.count)}개 항목이 선택되었습니다`
  })}.`,
  "selectedItem": (args) => `${args.item}이(가) 선택되었습니다.`
};
var $f5e3df4dc8aa7b54$exports = {};
$f5e3df4dc8aa7b54$exports = {
  "deselectedItem": (args) => `${args.item} nepasirinkta.`,
  "longPressToSelect": `Norėdami įjungti pasirinkimo režimą, paspauskite ir palaikykite.`,
  "select": `Pasirinkti`,
  "selectedAll": `Pasirinkti visi elementai.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nepasirinktas nė vienas elementas`,
    one: () => `Pasirinktas ${formatter.number(args.count)} elementas`,
    other: () => `Pasirinkta elementų: ${formatter.number(args.count)}`
  })}.`,
  "selectedItem": (args) => `Pasirinkta: ${args.item}.`
};
var $9dd86690a5c2b2c5$exports = {};
$9dd86690a5c2b2c5$exports = {
  "deselectedItem": (args) => `Vienums ${args.item} nav atlasīts.`,
  "longPressToSelect": `Ilgi turiet nospiestu. lai ieslēgtu atlases režīmu.`,
  "select": `Atlasīt`,
  "selectedAll": `Atlasīti visi vienumi.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nav atlasīts neviens vienums`,
    one: () => `Atlasīto vienumu skaits: ${formatter.number(args.count)}`,
    other: () => `Atlasīto vienumu skaits: ${formatter.number(args.count)}`
  })}.`,
  "selectedItem": (args) => `Atlasīts vienums ${args.item}.`
};
var $843964c3bf9a7d24$exports = {};
$843964c3bf9a7d24$exports = {
  "deselectedItem": (args) => `${args.item} er ikke valgt.`,
  "longPressToSelect": `Bruk et langt trykk for å gå inn i valgmodus.`,
  "select": `Velg`,
  "selectedAll": `Alle elementer er valgt.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Ingen elementer er valgt`,
    one: () => `${formatter.number(args.count)} element er valgt`,
    other: () => `${formatter.number(args.count)} elementer er valgt`
  })}.`,
  "selectedItem": (args) => `${args.item} er valgt.`
};
var $73f50e845f9ef3b4$exports = {};
$73f50e845f9ef3b4$exports = {
  "deselectedItem": (args) => `${args.item} niet geselecteerd.`,
  "longPressToSelect": `Druk lang om de selectiemodus te openen.`,
  "select": `Selecteren`,
  "selectedAll": `Alle items geselecteerd.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Geen items geselecteerd`,
    one: () => `${formatter.number(args.count)} item geselecteerd`,
    other: () => `${formatter.number(args.count)} items geselecteerd`
  })}.`,
  "selectedItem": (args) => `${args.item} geselecteerd.`
};
var $87f92a7e077514b2$exports = {};
$87f92a7e077514b2$exports = {
  "deselectedItem": (args) => `Nie zaznaczono ${args.item}.`,
  "longPressToSelect": `Naciśnij i przytrzymaj, aby wejść do trybu wyboru.`,
  "select": `Zaznacz`,
  "selectedAll": `Wszystkie zaznaczone elementy.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nie zaznaczono żadnych elementów`,
    one: () => `${formatter.number(args.count)} zaznaczony element`,
    other: () => `${formatter.number(args.count)} zaznaczonych elementów`
  })}.`,
  "selectedItem": (args) => `Zaznaczono ${args.item}.`
};
var $c28c98d58ee9ff6f$exports = {};
$c28c98d58ee9ff6f$exports = {
  "deselectedItem": (args) => `${args.item} não selecionado.`,
  "longPressToSelect": `Mantenha pressionado para entrar no modo de seleção.`,
  "select": `Selecionar`,
  "selectedAll": `Todos os itens selecionados.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nenhum item selecionado`,
    one: () => `${formatter.number(args.count)} item selecionado`,
    other: () => `${formatter.number(args.count)} itens selecionados`
  })}.`,
  "selectedItem": (args) => `${args.item} selecionado.`
};
var $b6b1503b17b2254d$exports = {};
$b6b1503b17b2254d$exports = {
  "deselectedItem": (args) => `${args.item} não selecionado.`,
  "longPressToSelect": `Prima continuamente para entrar no modo de seleção.`,
  "select": `Selecionar`,
  "selectedAll": `Todos os itens selecionados.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nenhum item selecionado`,
    one: () => `${formatter.number(args.count)} item selecionado`,
    other: () => `${formatter.number(args.count)} itens selecionados`
  })}.`,
  "selectedItem": (args) => `${args.item} selecionado.`
};
var $8bdaeb71e50c3e1a$exports = {};
$8bdaeb71e50c3e1a$exports = {
  "deselectedItem": (args) => `${args.item} neselectat.`,
  "longPressToSelect": `Apăsați lung pentru a intra în modul de selectare.`,
  "select": `Selectare`,
  "selectedAll": `Toate elementele selectate.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Niciun element selectat`,
    one: () => `${formatter.number(args.count)} element selectat`,
    other: () => `${formatter.number(args.count)} elemente selectate`
  })}.`,
  "selectedItem": (args) => `${args.item} selectat.`
};
var $ec2b852dd7c3d1f2$exports = {};
$ec2b852dd7c3d1f2$exports = {
  "deselectedItem": (args) => `${args.item} не выбрано.`,
  "longPressToSelect": `Нажмите и удерживайте для входа в режим выбора.`,
  "select": `Выбрать`,
  "selectedAll": `Выбраны все элементы.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Нет выбранных элементов`,
    one: () => `${formatter.number(args.count)} элемент выбран`,
    other: () => `${formatter.number(args.count)} элементов выбрано`
  })}.`,
  "selectedItem": (args) => `${args.item} выбрано.`
};
var $79e6d900d6a4f82d$exports = {};
$79e6d900d6a4f82d$exports = {
  "deselectedItem": (args) => `Nevybraté položky: ${args.item}.`,
  "longPressToSelect": `Dlhším stlačením prejdite do režimu výberu.`,
  "select": `Vybrať`,
  "selectedAll": `Všetky vybraté položky.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Žiadne vybraté položky`,
    one: () => `${formatter.number(args.count)} vybratá položka`,
    other: () => `Počet vybratých položiek:${formatter.number(args.count)}`
  })}.`,
  "selectedItem": (args) => `Vybraté položky: ${args.item}.`
};
var $f4c1f0d5d4d03d80$exports = {};
$f4c1f0d5d4d03d80$exports = {
  "deselectedItem": (args) => `Element ${args.item} ni izbran.`,
  "longPressToSelect": `Za izbirni način pritisnite in dlje časa držite.`,
  "select": `Izberite`,
  "selectedAll": `Vsi elementi so izbrani.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Noben element ni izbran`,
    one: () => `${formatter.number(args.count)} element je izbran`,
    other: () => `${formatter.number(args.count)} elementov je izbranih`
  })}.`,
  "selectedItem": (args) => `Element ${args.item} je izbran.`
};
var $46252cd87269b10b$exports = {};
$46252cd87269b10b$exports = {
  "deselectedItem": (args) => `${args.item} nije izabrano.`,
  "longPressToSelect": `Dugo pritisnite za ulazak u režim biranja.`,
  "select": `Izaberite`,
  "selectedAll": `Izabrane su sve stavke.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Nije izabrana nijedna stavka`,
    one: () => `Izabrana je ${formatter.number(args.count)} stavka`,
    other: () => `Izabrano je ${formatter.number(args.count)} stavki`
  })}.`,
  "selectedItem": (args) => `${args.item} je izabrano.`
};
var $d4d5d8dab362555c$exports = {};
$d4d5d8dab362555c$exports = {
  "deselectedItem": (args) => `${args.item} ej markerat.`,
  "longPressToSelect": `Tryck länge när du vill öppna väljarläge.`,
  "select": `Markera`,
  "selectedAll": `Alla markerade objekt.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Inga markerade objekt`,
    one: () => `${formatter.number(args.count)} markerat objekt`,
    other: () => `${formatter.number(args.count)} markerade objekt`
  })}.`,
  "selectedItem": (args) => `${args.item} markerat.`
};
var $3d55d1f97c377e83$exports = {};
$3d55d1f97c377e83$exports = {
  "deselectedItem": (args) => `${args.item} seçilmedi.`,
  "longPressToSelect": `Seçim moduna girmek için uzun basın.`,
  "select": `Seç`,
  "selectedAll": `Tüm ögeler seçildi.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Hiçbir öge seçilmedi`,
    one: () => `${formatter.number(args.count)} öge seçildi`,
    other: () => `${formatter.number(args.count)} öge seçildi`
  })}.`,
  "selectedItem": (args) => `${args.item} seçildi.`
};
var $5368512f1c703a3f$exports = {};
$5368512f1c703a3f$exports = {
  "deselectedItem": (args) => `${args.item} не вибрано.`,
  "longPressToSelect": `Виконайте довге натиснення, щоб перейти в режим вибору.`,
  "select": `Вибрати`,
  "selectedAll": `Усі елементи вибрано.`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `Жодних елементів не вибрано`,
    one: () => `${formatter.number(args.count)} елемент вибрано`,
    other: () => `Вибрано елементів: ${formatter.number(args.count)}`
  })}.`,
  "selectedItem": (args) => `${args.item} вибрано.`
};
var $f1316b1074463583$exports = {};
$f1316b1074463583$exports = {
  "deselectedItem": (args) => `未选择 ${args.item}。`,
  "longPressToSelect": `长按以进入选择模式。`,
  "select": `选择`,
  "selectedAll": `已选择所有项目。`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `未选择项目`,
    one: () => `已选择 ${formatter.number(args.count)} 个项目`,
    other: () => `已选择 ${formatter.number(args.count)} 个项目`
  })}。`,
  "selectedItem": (args) => `已选择 ${args.item}。`
};
var $7e60654723031b6f$exports = {};
$7e60654723031b6f$exports = {
  "deselectedItem": (args) => `未選取「${args.item}」。`,
  "longPressToSelect": `長按以進入選擇模式。`,
  "select": `選取`,
  "selectedAll": `已選取所有項目。`,
  "selectedCount": (args, formatter) => `${formatter.plural(args.count, {
    "=0": `未選取任何項目`,
    one: () => `已選取 ${formatter.number(args.count)} 個項目`,
    other: () => `已選取 ${formatter.number(args.count)} 個項目`
  })}。`,
  "selectedItem": (args) => `已選取「${args.item}」。`
};
var $835c96616a7cb4f9$exports = {};
$835c96616a7cb4f9$exports = {
  "ar-AE": $682989befd4f478d$exports,
  "bg-BG": $f7fca02019afd941$exports,
  "cs-CZ": $8f86f40be75387f1$exports,
  "da-DK": $db24ba43c8d652ee$exports,
  "de-DE": $f8f1e72c8b5447d6$exports,
  "el-GR": $9a73ed2983c3ab0b$exports,
  "en-US": $583de0b3587601b9$exports,
  "es-ES": $147159c978043442$exports,
  "et-EE": $5cbb62c8a19173ac$exports,
  "fi-FI": $a33d71dc804cc59e$exports,
  "fr-FR": $92d800447793d084$exports,
  "he-IL": $fe732cdb32124ea8$exports,
  "hr-HR": $e41234e934efb4f5$exports,
  "hu-HU": $1b0393182473bf9e$exports,
  "it-IT": $2eed782c1c110ce7$exports,
  "ja-JP": $8b5d459f86e9b23c$exports,
  "ko-KR": $1949c3ad17295fd4$exports,
  "lt-LT": $f5e3df4dc8aa7b54$exports,
  "lv-LV": $9dd86690a5c2b2c5$exports,
  "nb-NO": $843964c3bf9a7d24$exports,
  "nl-NL": $73f50e845f9ef3b4$exports,
  "pl-PL": $87f92a7e077514b2$exports,
  "pt-BR": $c28c98d58ee9ff6f$exports,
  "pt-PT": $b6b1503b17b2254d$exports,
  "ro-RO": $8bdaeb71e50c3e1a$exports,
  "ru-RU": $ec2b852dd7c3d1f2$exports,
  "sk-SK": $79e6d900d6a4f82d$exports,
  "sl-SI": $f4c1f0d5d4d03d80$exports,
  "sr-SP": $46252cd87269b10b$exports,
  "sv-SE": $d4d5d8dab362555c$exports,
  "tr-TR": $3d55d1f97c377e83$exports,
  "uk-UA": $5368512f1c703a3f$exports,
  "zh-CN": $f1316b1074463583$exports,
  "zh-TW": $7e60654723031b6f$exports
};
function $parcel$interopDefault$5(a) {
  return a && a.__esModule ? a.default : a;
}
function $92599c3fd427b763$export$137e594ef3218a10(props, state) {
  let { getRowText = (key) => {
    var _state_collection_getTextValue, _state_collection, _state_collection_getItem;
    var _state_collection_getTextValue1;
    return (_state_collection_getTextValue1 = (_state_collection_getTextValue = (_state_collection = state.collection).getTextValue) === null || _state_collection_getTextValue === void 0 ? void 0 : _state_collection_getTextValue.call(_state_collection, key)) !== null && _state_collection_getTextValue1 !== void 0 ? _state_collection_getTextValue1 : (_state_collection_getItem = state.collection.getItem(key)) === null || _state_collection_getItem === void 0 ? void 0 : _state_collection_getItem.textValue;
  } } = props;
  let stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1($parcel$interopDefault$5($835c96616a7cb4f9$exports), "@react-aria/grid");
  let selection = state.selectionManager.rawSelection;
  let lastSelection = reactExports.useRef(selection);
  $4f58c5f72bcf79f7$export$496315a1608d9602(() => {
    var _lastSelection_current;
    if (!state.selectionManager.isFocused) {
      lastSelection.current = selection;
      return;
    }
    let addedKeys = $92599c3fd427b763$var$diffSelection(selection, lastSelection.current);
    let removedKeys = $92599c3fd427b763$var$diffSelection(lastSelection.current, selection);
    let isReplace = state.selectionManager.selectionBehavior === "replace";
    let messages = [];
    if (state.selectionManager.selectedKeys.size === 1 && isReplace) {
      if (state.collection.getItem(state.selectionManager.selectedKeys.keys().next().value)) {
        let currentSelectionText = getRowText(state.selectionManager.selectedKeys.keys().next().value);
        if (currentSelectionText) messages.push(stringFormatter.format("selectedItem", {
          item: currentSelectionText
        }));
      }
    } else if (addedKeys.size === 1 && removedKeys.size === 0) {
      let addedText = getRowText(addedKeys.keys().next().value);
      if (addedText) messages.push(stringFormatter.format("selectedItem", {
        item: addedText
      }));
    } else if (removedKeys.size === 1 && addedKeys.size === 0) {
      if (state.collection.getItem(removedKeys.keys().next().value)) {
        let removedText = getRowText(removedKeys.keys().next().value);
        if (removedText) messages.push(stringFormatter.format("deselectedItem", {
          item: removedText
        }));
      }
    }
    if (state.selectionManager.selectionMode === "multiple") {
      if (messages.length === 0 || selection === "all" || selection.size > 1 || lastSelection.current === "all" || ((_lastSelection_current = lastSelection.current) === null || _lastSelection_current === void 0 ? void 0 : _lastSelection_current.size) > 1) messages.push(selection === "all" ? stringFormatter.format("selectedAll") : stringFormatter.format("selectedCount", {
        count: selection.size
      }));
    }
    if (messages.length > 0) $319e236875307eab$export$a9b970dcc4ae71a9(messages.join(" "));
    lastSelection.current = selection;
  }, [
    selection
  ]);
}
function $92599c3fd427b763$var$diffSelection(a, b) {
  let res = /* @__PURE__ */ new Set();
  if (a === "all" || b === "all") return res;
  for (let key of a.keys()) if (!b.has(key)) res.add(key);
  return res;
}
function $parcel$interopDefault$4(a) {
  return a && a.__esModule ? a.default : a;
}
function $5b9b5b5723db6ae1$export$be42ebdab07ae4c2(props) {
  let stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1($parcel$interopDefault$4($835c96616a7cb4f9$exports), "@react-aria/grid");
  let modality = $507fabe10e71c6fb$export$98e20ec92f614cfe();
  let shouldLongPress = (modality === "pointer" || modality === "virtual" || modality == null) && typeof window !== "undefined" && "ontouchstart" in window;
  let interactionDescription = reactExports.useMemo(() => {
    let selectionMode = props.selectionManager.selectionMode;
    let selectionBehavior = props.selectionManager.selectionBehavior;
    let message = void 0;
    if (shouldLongPress) message = stringFormatter.format("longPressToSelect");
    return selectionBehavior === "replace" && selectionMode !== "none" && props.hasItemActions ? message : void 0;
  }, [
    props.selectionManager.selectionMode,
    props.selectionManager.selectionBehavior,
    props.hasItemActions,
    stringFormatter,
    shouldLongPress
  ]);
  let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(interactionDescription);
  return descriptionProps;
}
function $83c6e2eafa584c67$export$f6b86a04e5d66d90(props, state, ref) {
  let { isVirtualized, keyboardDelegate, focusMode, scrollRef, getRowText, onRowAction, onCellAction } = props;
  let { selectionManager: manager } = state;
  if (!props["aria-label"] && !props["aria-labelledby"]) console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
  let collator = $325a3faab7a68acd$export$a16aca283550c30d({
    usage: "search",
    sensitivity: "base"
  });
  let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let disabledBehavior = state.selectionManager.disabledBehavior;
  let delegate = reactExports.useMemo(() => keyboardDelegate || new $d1c300d9c497e402$export$de9feff04fda126e({
    collection: state.collection,
    disabledKeys: state.disabledKeys,
    disabledBehavior,
    ref,
    direction,
    collator,
    focusMode
  }), [
    keyboardDelegate,
    state.collection,
    state.disabledKeys,
    disabledBehavior,
    ref,
    direction,
    collator,
    focusMode
  ]);
  let { collectionProps } = $ae20dd8cbca75726$export$d6daf82dcd84e87c({
    ref,
    selectionManager: manager,
    keyboardDelegate: delegate,
    isVirtualized,
    scrollRef
  });
  let id = $bdb11010cef70236$export$f680877a34711e37(props.id);
  $1af922eb41e03c8f$export$e6235c0d09b995d0.set(state, {
    keyboardDelegate: delegate,
    actions: {
      onRowAction,
      onCellAction
    }
  });
  let descriptionProps = $5b9b5b5723db6ae1$export$be42ebdab07ae4c2({
    selectionManager: manager,
    hasItemActions: !!(onRowAction || onCellAction)
  });
  let domProps = $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
    labelable: true
  });
  let onFocus = reactExports.useCallback((e) => {
    if (manager.isFocused) {
      if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
      return;
    }
    if (!e.currentTarget.contains(e.target)) return;
    manager.setFocused(true);
  }, [
    manager
  ]);
  let navDisabledHandlers = reactExports.useMemo(() => ({
    onBlur: collectionProps.onBlur,
    onFocus
  }), [
    onFocus,
    collectionProps.onBlur
  ]);
  let hasTabbableChild = $83013635b024ae3d$export$eac1895992b9f3d6(ref, {
    isDisabled: state.collection.size !== 0
  });
  let gridProps = $3ef42575df84b30b$export$9d1611c77c2fe928(
    domProps,
    {
      role: "grid",
      id,
      "aria-multiselectable": manager.selectionMode === "multiple" ? "true" : void 0
    },
    state.isKeyboardNavigationDisabled ? navDisabledHandlers : collectionProps,
    // If collection is empty, make sure the grid is tabbable unless there is a child tabbable element.
    state.collection.size === 0 && {
      tabIndex: hasTabbableChild ? -1 : 0
    },
    descriptionProps
  );
  if (isVirtualized) {
    gridProps["aria-rowcount"] = state.collection.size;
    gridProps["aria-colcount"] = state.collection.columnCount;
  }
  $92599c3fd427b763$export$137e594ef3218a10({
    getRowText
  }, state);
  return {
    gridProps
  };
}
function $e45487f8ba1cbdbf$export$d3037f5d3f3e51bf() {
  return {
    rowGroupProps: {
      role: "rowgroup"
    }
  };
}
function $4159a7a9cbb0cc18$export$96357d5a73f686fa(props, state, ref) {
  var _node_props, _node_props1;
  let { node, isVirtualized, shouldSelectOnPressUp, onAction } = props;
  let { actions } = $1af922eb41e03c8f$export$e6235c0d09b995d0.get(state);
  let onRowAction = actions.onRowAction ? () => actions.onRowAction(node.key) : onAction;
  let { itemProps, ...states } = $880e95eb8b93ba9a$export$ecf600387e221c37({
    selectionManager: state.selectionManager,
    key: node.key,
    ref,
    isVirtualized,
    shouldSelectOnPressUp,
    onAction: onRowAction || (node === null || node === void 0 ? void 0 : (_node_props = node.props) === null || _node_props === void 0 ? void 0 : _node_props.onAction) ? $ff5963eb1fccf552$export$e08e3b67e392101e(node === null || node === void 0 ? void 0 : (_node_props1 = node.props) === null || _node_props1 === void 0 ? void 0 : _node_props1.onAction, onRowAction) : void 0,
    isDisabled: state.collection.size === 0
  });
  let isSelected = state.selectionManager.isSelected(node.key);
  let rowProps = {
    role: "row",
    "aria-selected": state.selectionManager.selectionMode !== "none" ? isSelected : void 0,
    "aria-disabled": states.isDisabled || void 0,
    ...itemProps
  };
  if (isVirtualized) rowProps["aria-rowindex"] = node.index + 1;
  return {
    rowProps,
    ...states
  };
}
function $ab90dcbc1b5466d0$export$c7e10bfc0c59f67c(props, state, ref) {
  let { node, isVirtualized, focusMode = "child", shouldSelectOnPressUp, onAction } = props;
  let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let { keyboardDelegate, actions: { onCellAction } } = $1af922eb41e03c8f$export$e6235c0d09b995d0.get(state);
  let keyWhenFocused = reactExports.useRef(null);
  let focus = () => {
    let treeWalker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ref.current);
    if (focusMode === "child") {
      if (ref.current.contains(document.activeElement) && ref.current !== document.activeElement) return;
      let focusable = state.selectionManager.childFocusStrategy === "last" ? $ab90dcbc1b5466d0$var$last(treeWalker) : treeWalker.firstChild();
      if (focusable) {
        $6a99195332edec8b$export$80f3e147d781571c(focusable);
        return;
      }
    }
    if (keyWhenFocused.current != null && node.key !== keyWhenFocused.current || !ref.current.contains(document.activeElement)) $6a99195332edec8b$export$80f3e147d781571c(ref.current);
  };
  let { itemProps, isPressed } = $880e95eb8b93ba9a$export$ecf600387e221c37({
    selectionManager: state.selectionManager,
    key: node.key,
    ref,
    isVirtualized,
    focus,
    shouldSelectOnPressUp,
    onAction: onCellAction ? () => onCellAction(node.key) : onAction,
    isDisabled: state.collection.size === 0
  });
  let onKeyDownCapture = (e) => {
    if (!e.currentTarget.contains(e.target) || state.isKeyboardNavigationDisabled) return;
    let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ref.current);
    walker.currentNode = document.activeElement;
    switch (e.key) {
      case "ArrowLeft": {
        let focusable = direction === "rtl" ? walker.nextNode() : walker.previousNode();
        if (focusMode === "child" && focusable === ref.current) focusable = null;
        e.preventDefault();
        e.stopPropagation();
        if (focusable) {
          $6a99195332edec8b$export$80f3e147d781571c(focusable);
          $2f04cbc44ee30ce0$export$c826860796309d1b(focusable, {
            containingElement: $62d8ded9296f3872$export$cfa2225e87938781(ref.current)
          });
        } else {
          let prev = keyboardDelegate.getKeyLeftOf(node.key);
          if (prev !== node.key) {
            ref.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
            break;
          }
          if (focusMode === "cell" && direction === "rtl") {
            $6a99195332edec8b$export$80f3e147d781571c(ref.current);
            $2f04cbc44ee30ce0$export$c826860796309d1b(ref.current, {
              containingElement: $62d8ded9296f3872$export$cfa2225e87938781(ref.current)
            });
          } else {
            walker.currentNode = ref.current;
            focusable = direction === "rtl" ? walker.firstChild() : $ab90dcbc1b5466d0$var$last(walker);
            if (focusable) {
              $6a99195332edec8b$export$80f3e147d781571c(focusable);
              $2f04cbc44ee30ce0$export$c826860796309d1b(focusable, {
                containingElement: $62d8ded9296f3872$export$cfa2225e87938781(ref.current)
              });
            }
          }
        }
        break;
      }
      case "ArrowRight": {
        let focusable = direction === "rtl" ? walker.previousNode() : walker.nextNode();
        if (focusMode === "child" && focusable === ref.current) focusable = null;
        e.preventDefault();
        e.stopPropagation();
        if (focusable) {
          $6a99195332edec8b$export$80f3e147d781571c(focusable);
          $2f04cbc44ee30ce0$export$c826860796309d1b(focusable, {
            containingElement: $62d8ded9296f3872$export$cfa2225e87938781(ref.current)
          });
        } else {
          let next = keyboardDelegate.getKeyRightOf(node.key);
          if (next !== node.key) {
            ref.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
            break;
          }
          if (focusMode === "cell" && direction === "ltr") {
            $6a99195332edec8b$export$80f3e147d781571c(ref.current);
            $2f04cbc44ee30ce0$export$c826860796309d1b(ref.current, {
              containingElement: $62d8ded9296f3872$export$cfa2225e87938781(ref.current)
            });
          } else {
            walker.currentNode = ref.current;
            focusable = direction === "rtl" ? $ab90dcbc1b5466d0$var$last(walker) : walker.firstChild();
            if (focusable) {
              $6a99195332edec8b$export$80f3e147d781571c(focusable);
              $2f04cbc44ee30ce0$export$c826860796309d1b(focusable, {
                containingElement: $62d8ded9296f3872$export$cfa2225e87938781(ref.current)
              });
            }
          }
        }
        break;
      }
      case "ArrowUp":
      case "ArrowDown":
        if (!e.altKey && ref.current.contains(e.target)) {
          e.stopPropagation();
          e.preventDefault();
          ref.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent));
        }
        break;
    }
  };
  let onFocus = (e) => {
    keyWhenFocused.current = node.key;
    if (e.target !== ref.current) {
      if (!$507fabe10e71c6fb$export$b9b3dfddab17db27()) state.selectionManager.setFocusedKey(node.key);
      return;
    }
    requestAnimationFrame(() => {
      if (focusMode === "child" && document.activeElement === ref.current) focus();
    });
  };
  let gridCellProps = $3ef42575df84b30b$export$9d1611c77c2fe928(itemProps, {
    role: "gridcell",
    onKeyDownCapture,
    onFocus
  });
  var _node_colIndex;
  if (isVirtualized) gridCellProps["aria-colindex"] = ((_node_colIndex = node.colIndex) !== null && _node_colIndex !== void 0 ? _node_colIndex : node.index) + 1;
  if (shouldSelectOnPressUp && gridCellProps.tabIndex != null && gridCellProps.onPointerDown == null) gridCellProps.onPointerDown = (e) => {
    let el = e.currentTarget;
    let tabindex = el.getAttribute("tabindex");
    el.removeAttribute("tabindex");
    requestAnimationFrame(() => {
      el.setAttribute("tabindex", tabindex);
    });
  };
  return {
    gridCellProps,
    isPressed
  };
}
function $ab90dcbc1b5466d0$var$last(walker) {
  let next;
  let last;
  do {
    last = walker.lastChild();
    if (last) next = last;
  } while (last);
  return next;
}
function $parcel$interopDefault$3(a) {
  return a && a.__esModule ? a.default : a;
}
function $7cb39d07f245a780$export$70e2eed1a92976ad(props, state) {
  let { key } = props;
  let manager = state.selectionManager;
  let checkboxId = $bdb11010cef70236$export$f680877a34711e37();
  let isDisabled = !state.selectionManager.canSelectItem(key);
  let isSelected = state.selectionManager.isSelected(key);
  let onChange = () => manager.toggleSelection(key);
  const stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1($parcel$interopDefault$3($835c96616a7cb4f9$exports), "@react-aria/grid");
  return {
    checkboxProps: {
      id: checkboxId,
      "aria-label": stringFormatter.format("select"),
      isSelected,
      isDisabled,
      onChange
    }
  };
}
class $0ba3c81c7f1caedd$export$da43f8f5cb04028d extends $d1c300d9c497e402$export$de9feff04fda126e {
  isCell(node) {
    return node.type === "cell" || node.type === "rowheader" || node.type === "column";
  }
  getKeyBelow(key) {
    let startItem = this.collection.getItem(key);
    if (!startItem) return;
    if (startItem.type === "column") {
      let child = $c5a24bc478652b5f$export$fbdeaa6a76694f71$2($c5a24bc478652b5f$export$1005530eda016c13$2(startItem, this.collection));
      if (child) return child.key;
      let firstKey = this.getFirstKey();
      if (firstKey == null) return;
      let firstItem = this.collection.getItem(firstKey);
      return $c5a24bc478652b5f$export$5f3398f8733f90e2$2($c5a24bc478652b5f$export$1005530eda016c13$2(firstItem, this.collection), startItem.index).key;
    }
    return super.getKeyBelow(key);
  }
  getKeyAbove(key) {
    let startItem = this.collection.getItem(key);
    if (!startItem) return;
    if (startItem.type === "column") {
      let parent = this.collection.getItem(startItem.parentKey);
      if (parent && parent.type === "column") return parent.key;
      return;
    }
    let superKey = super.getKeyAbove(key);
    if (superKey != null && this.collection.getItem(superKey).type !== "headerrow") return superKey;
    if (this.isCell(startItem)) return this.collection.columns[startItem.index].key;
    return this.collection.columns[0].key;
  }
  findNextColumnKey(column) {
    let key = this.findNextKey(column.key, (item) => item.type === "column");
    if (key != null) return key;
    let row = this.collection.headerRows[column.level];
    for (let item of $c5a24bc478652b5f$export$1005530eda016c13$2(row, this.collection)) {
      if (item.type === "column") return item.key;
    }
  }
  findPreviousColumnKey(column) {
    let key = this.findPreviousKey(column.key, (item) => item.type === "column");
    if (key != null) return key;
    let row = this.collection.headerRows[column.level];
    let childNodes = [
      ...$c5a24bc478652b5f$export$1005530eda016c13$2(row, this.collection)
    ];
    for (let i = childNodes.length - 1; i >= 0; i--) {
      let item = childNodes[i];
      if (item.type === "column") return item.key;
    }
  }
  getKeyRightOf(key) {
    let item = this.collection.getItem(key);
    if (!item) return;
    if (item.type === "column") return this.direction === "rtl" ? this.findPreviousColumnKey(item) : this.findNextColumnKey(item);
    return super.getKeyRightOf(key);
  }
  getKeyLeftOf(key) {
    let item = this.collection.getItem(key);
    if (!item) return;
    if (item.type === "column") return this.direction === "rtl" ? this.findNextColumnKey(item) : this.findPreviousColumnKey(item);
    return super.getKeyLeftOf(key);
  }
  getKeyForSearch(search, fromKey) {
    if (!this.collator) return null;
    let collection = this.collection;
    let key = fromKey !== null && fromKey !== void 0 ? fromKey : this.getFirstKey();
    if (key == null) return null;
    let startItem = collection.getItem(key);
    if (startItem.type === "cell") key = startItem.parentKey;
    let hasWrapped = false;
    while (key != null) {
      let item = collection.getItem(key);
      for (let cell of $c5a24bc478652b5f$export$1005530eda016c13$2(item, this.collection)) {
        let column = collection.columns[cell.index];
        if (collection.rowHeaderColumnKeys.has(column.key) && cell.textValue) {
          let substring = cell.textValue.slice(0, search.length);
          if (this.collator.compare(substring, search) === 0) {
            let fromItem = fromKey != null ? collection.getItem(fromKey) : startItem;
            return fromItem.type === "cell" ? cell.key : item.key;
          }
        }
      }
      key = this.getKeyBelow(key);
      if (key == null && !hasWrapped) {
        key = this.getFirstKey();
        hasWrapped = true;
      }
    }
    return null;
  }
}
let $f4e2df6bd15f8569$var$_tableNestedRows = false;
function $f4e2df6bd15f8569$export$1b00cb14a96194e6() {
  return $f4e2df6bd15f8569$var$_tableNestedRows;
}
function $parcel$interopDefault$2(a) {
  return a && a.__esModule ? a.default : a;
}
function $6e31608fbba75bab$export$25bceaac3c7e4dc7(props, state, ref) {
  let { keyboardDelegate, isVirtualized, layout } = props;
  let collator = $325a3faab7a68acd$export$a16aca283550c30d$1({
    usage: "search",
    sensitivity: "base"
  });
  let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1();
  let disabledBehavior = state.selectionManager.disabledBehavior;
  let delegate = reactExports.useMemo(() => keyboardDelegate || new $0ba3c81c7f1caedd$export$da43f8f5cb04028d({
    collection: state.collection,
    disabledKeys: state.disabledKeys,
    disabledBehavior,
    ref,
    direction,
    collator,
    layout
  }), [
    keyboardDelegate,
    state.collection,
    state.disabledKeys,
    disabledBehavior,
    ref,
    direction,
    collator,
    layout
  ]);
  let id = $bdb11010cef70236$export$f680877a34711e37$1(props.id);
  $2140fb2337097f2d$export$552312adfd451dab.set(state, id);
  let { gridProps } = $83c6e2eafa584c67$export$f6b86a04e5d66d90({
    ...props,
    id,
    keyboardDelegate: delegate
  }, state, ref);
  if (isVirtualized) gridProps["aria-rowcount"] = state.collection.size + state.collection.headerRows.length;
  if ($f4e2df6bd15f8569$export$1b00cb14a96194e6() && "expandedKeys" in state) gridProps.role = "treegrid";
  let { column, direction: sortDirection } = state.sortDescriptor || {};
  let stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1$1($parcel$interopDefault$2($7476b46781682bf5$exports), "@react-aria/table");
  let sortDescription = reactExports.useMemo(() => {
    var _state_collection_columns_find;
    let columnName = (_state_collection_columns_find = state.collection.columns.find((c) => c.key === column)) === null || _state_collection_columns_find === void 0 ? void 0 : _state_collection_columns_find.textValue;
    return sortDirection && column ? stringFormatter.format(`${sortDirection}Sort`, {
      columnName
    }) : void 0;
  }, [
    sortDirection,
    column,
    state.collection.columns
  ]);
  let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1$1(sortDescription);
  $4f58c5f72bcf79f7$export$496315a1608d9602$1(() => {
    $319e236875307eab$export$a9b970dcc4ae71a9(sortDescription, "assertive", 500);
  }, [
    sortDescription
  ]);
  return {
    gridProps: $3ef42575df84b30b$export$9d1611c77c2fe928$2(gridProps, descriptionProps, {
      // merge sort description with long press information
      "aria-describedby": [
        descriptionProps["aria-describedby"],
        gridProps["aria-describedby"]
      ].filter(Boolean).join(" ")
    })
  };
}
function $parcel$interopDefault$1(a) {
  return a && a.__esModule ? a.default : a;
}
function $f329116d8ad0aba0$export$9514819a8c81e960(props, state, ref) {
  var _state_sortDescriptor, _state_sortDescriptor1;
  let { node } = props;
  let allowsSorting = node.props.allowsSorting;
  let { gridCellProps } = $ab90dcbc1b5466d0$export$c7e10bfc0c59f67c({
    ...props,
    focusMode: "child"
  }, state, ref);
  let isSelectionCellDisabled = node.props.isSelectionCell && state.selectionManager.selectionMode === "single";
  let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21$2({
    isDisabled: !allowsSorting || isSelectionCellDisabled,
    onPress() {
      state.sort(node.key);
    },
    ref
  });
  let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c$1({}, ref);
  let ariaSort = null;
  let isSortedColumn = ((_state_sortDescriptor = state.sortDescriptor) === null || _state_sortDescriptor === void 0 ? void 0 : _state_sortDescriptor.column) === node.key;
  let sortDirection = (_state_sortDescriptor1 = state.sortDescriptor) === null || _state_sortDescriptor1 === void 0 ? void 0 : _state_sortDescriptor1.direction;
  if (node.props.allowsSorting && !$c87311424ea30a05$export$a11b0059900ceec8$2()) ariaSort = isSortedColumn ? sortDirection : "none";
  let stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1$1($parcel$interopDefault$1($7476b46781682bf5$exports), "@react-aria/table");
  let sortDescription;
  if (allowsSorting) {
    sortDescription = `${stringFormatter.format("sortable")}`;
    if (isSortedColumn && sortDirection && $c87311424ea30a05$export$a11b0059900ceec8$2()) sortDescription = `${sortDescription}, ${stringFormatter.format(sortDirection)}`;
  }
  let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1$1(sortDescription);
  let shouldDisableFocus = state.collection.size === 0;
  reactExports.useEffect(() => {
    if (shouldDisableFocus && state.selectionManager.focusedKey === node.key) state.selectionManager.setFocusedKey(null);
  }, [
    shouldDisableFocus,
    state.selectionManager,
    node.key
  ]);
  return {
    columnHeaderProps: {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(
        gridCellProps,
        pressProps,
        focusableProps,
        descriptionProps,
        // If the table is empty, make all column headers untabbable
        shouldDisableFocus && {
          tabIndex: -1
        }
      ),
      role: "columnheader",
      id: $2140fb2337097f2d$export$37cd4213f2ad742e(state, node.key),
      "aria-colspan": node.colspan && node.colspan > 1 ? node.colspan : null,
      "aria-sort": ariaSort
    }
  };
}
const $b2db214c022798eb$var$EXPANSION_KEYS = {
  expand: {
    ltr: "ArrowRight",
    rtl: "ArrowLeft"
  },
  "collapse": {
    ltr: "ArrowLeft",
    rtl: "ArrowRight"
  }
};
function $b2db214c022798eb$export$7f2f6ae19e707aa5(props, state, ref) {
  let { node, isVirtualized } = props;
  let { rowProps, ...states } = $4159a7a9cbb0cc18$export$96357d5a73f686fa(props, state, ref);
  let { direction } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7$1();
  if (isVirtualized && !($f4e2df6bd15f8569$export$1b00cb14a96194e6() && "expandedKeys" in state)) rowProps["aria-rowindex"] = node.index + 1 + state.collection.headerRows.length;
  else delete rowProps["aria-rowindex"];
  let treeGridRowProps = {};
  if ($f4e2df6bd15f8569$export$1b00cb14a96194e6() && "expandedKeys" in state) {
    let treeNode = state.keyMap.get(node.key);
    if (treeNode != null) {
      var _treeNode_props, _treeNode_props_children, _treeNode_props1;
      let hasChildRows = ((_treeNode_props = treeNode.props) === null || _treeNode_props === void 0 ? void 0 : _treeNode_props.UNSTABLE_childItems) || ((_treeNode_props1 = treeNode.props) === null || _treeNode_props1 === void 0 ? void 0 : (_treeNode_props_children = _treeNode_props1.children) === null || _treeNode_props_children === void 0 ? void 0 : _treeNode_props_children.length) > state.userColumnCount;
      treeGridRowProps = {
        onKeyDown: (e) => {
          if (e.key === $b2db214c022798eb$var$EXPANSION_KEYS["expand"][direction] && state.selectionManager.focusedKey === treeNode.key && hasChildRows && state.expandedKeys !== "all" && !state.expandedKeys.has(treeNode.key)) {
            state.toggleKey(treeNode.key);
            e.stopPropagation();
          } else if (e.key === $b2db214c022798eb$var$EXPANSION_KEYS["collapse"][direction] && state.selectionManager.focusedKey === treeNode.key && hasChildRows && (state.expandedKeys === "all" || state.expandedKeys.has(treeNode.key))) {
            state.toggleKey(treeNode.key);
            e.stopPropagation();
          }
        },
        "aria-expanded": hasChildRows ? state.expandedKeys === "all" || state.expandedKeys.has(node.key) : void 0,
        "aria-level": treeNode.level,
        "aria-posinset": treeNode.indexOfType + 1,
        "aria-setsize": treeNode.level > 1 ? $c5a24bc478652b5f$export$7475b2c64539e4cf$2(state.keyMap.get(treeNode === null || treeNode === void 0 ? void 0 : treeNode.parentKey).childNodes).indexOfType + 1 : $c5a24bc478652b5f$export$7475b2c64539e4cf$2(state.keyMap.get(state.collection.body.key).childNodes).indexOfType + 1
      };
    }
  }
  let linkProps = states.hasAction ? $ea8dcbcb9ea1b556$export$51437d503373d223(node.props) : {};
  return {
    rowProps: {
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(rowProps, treeGridRowProps, linkProps),
      "aria-labelledby": $2140fb2337097f2d$export$85069b70317f543(state, node.key)
    },
    ...states
  };
}
function $f917ee10f4c32dab$export$1b95a7d2d517b841(props, state, ref) {
  let { node, isVirtualized } = props;
  let rowProps = {
    role: "row"
  };
  if (isVirtualized && !($f4e2df6bd15f8569$export$1b00cb14a96194e6() && "expandedKeys" in state)) rowProps["aria-rowindex"] = node.index + 1;
  return {
    rowProps
  };
}
function $7713593715703b24$export$49571c903d73624c(props, state, ref) {
  let { gridCellProps, isPressed } = $ab90dcbc1b5466d0$export$c7e10bfc0c59f67c(props, state, ref);
  let columnKey = props.node.column.key;
  if (state.collection.rowHeaderColumnKeys.has(columnKey)) {
    gridCellProps.role = "rowheader";
    gridCellProps.id = $2140fb2337097f2d$export$19baff3266315d44(state, props.node.parentKey, columnKey);
  }
  return {
    gridCellProps,
    isPressed
  };
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $2a795c53a101c542$export$16ea7f650bd7c1bb(props, state) {
  let { key } = props;
  const { checkboxProps } = $7cb39d07f245a780$export$70e2eed1a92976ad(props, state);
  return {
    checkboxProps: {
      ...checkboxProps,
      "aria-labelledby": `${checkboxProps.id} ${$2140fb2337097f2d$export$85069b70317f543(state, key)}`
    }
  };
}
function $2a795c53a101c542$export$1003db6a7e384b99(state) {
  let { isEmpty, isSelectAll, selectionMode } = state.selectionManager;
  const stringFormatter = $fca6afa0e843324b$export$f12b703ca79dfbb1$1($parcel$interopDefault($7476b46781682bf5$exports), "@react-aria/table");
  return {
    checkboxProps: {
      "aria-label": stringFormatter.format(selectionMode === "single" ? "select" : "selectAll"),
      isSelected: isSelectAll,
      isDisabled: selectionMode !== "multiple" || state.collection.size === 0,
      isIndeterminate: !isEmpty && !isSelectAll,
      onChange: () => state.selectionManager.toggleSelectAll()
    }
  };
}
function $0047e6c294ea075f$export$6fb1613bd7b28198() {
  return $e45487f8ba1cbdbf$export$d3037f5d3f3e51bf();
}
var TableSelectAllCheckbox = forwardRef((props, ref) => {
  var _a, _b;
  const {
    as,
    className,
    node,
    slots,
    state,
    selectionMode,
    color,
    checkboxesProps,
    disableAnimation,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "th";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { columnHeaderProps } = $f329116d8ad0aba0$export$9514819a8c81e960({ node }, state, domRef);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { checkboxProps } = $2a795c53a101c542$export$1003db6a7e384b99(state);
  const thStyles = clsx$1(classNames == null ? void 0 : classNames.th, className, (_a = node.props) == null ? void 0 : _a.className);
  const isSingleSelectionMode = selectionMode === "single";
  const { onChange, ...otherCheckboxProps } = checkboxProps;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref: domRef,
      "data-focus-visible": dataAttr(isFocusVisible),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(
        columnHeaderProps,
        focusProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps
        }),
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        })
      ),
      className: (_b = slots.th) == null ? void 0 : _b.call(slots, { class: thStyles }),
      children: isSingleSelectionMode ? /* @__PURE__ */ jsxRuntimeExports.jsx($5c3e21d68f1c4674$export$439d29a4e110a164, { children: checkboxProps["aria-label"] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        checkbox_default,
        {
          color,
          disableAnimation,
          onValueChange: onChange,
          ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(checkboxesProps, otherCheckboxProps)
        }
      )
    }
  );
});
TableSelectAllCheckbox.displayName = "NextUI.TableSelectAllCheckbox";
var table_select_all_checkbox_default = TableSelectAllCheckbox;
function $c5a24bc478652b5f$export$1005530eda016c13(node, collection) {
  if (typeof collection.getChildren === "function") return collection.getChildren(node.key);
  return node.childNodes;
}
function $c5a24bc478652b5f$export$fbdeaa6a76694f71(iterable) {
  return $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable);
}
function $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, index) {
  for (let item of iterable) {
    return item;
  }
}
function $c5a24bc478652b5f$export$7475b2c64539e4cf(iterable) {
  let lastItem = void 0;
  for (let value of iterable) lastItem = value;
  return lastItem;
}
function $62967d126f3aa823$export$4007ac09ff9c68ed(props) {
  let { collection, focusMode } = props;
  let selectionState = props.UNSAFE_selectionState || $7af3f5b51489e0b5$export$253fe78d46329472(props);
  let disabledKeys = reactExports.useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let setFocusedKey = selectionState.setFocusedKey;
  selectionState.setFocusedKey = (key, child) => {
    if (focusMode === "cell" && key != null) {
      let item = collection.getItem(key);
      if ((item === null || item === void 0 ? void 0 : item.type) === "item") {
        var _getLastItem, _getFirstItem;
        let children = $c5a24bc478652b5f$export$1005530eda016c13(item, collection);
        if (child === "last") key = (_getLastItem = $c5a24bc478652b5f$export$7475b2c64539e4cf(children)) === null || _getLastItem === void 0 ? void 0 : _getLastItem.key;
        else key = (_getFirstItem = $c5a24bc478652b5f$export$fbdeaa6a76694f71(children)) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
      }
    }
    setFocusedKey(key, child);
  };
  let selectionManager = reactExports.useMemo(() => new $d496c0a20b6e58ec$export$6c8a5aaad13c9852(collection, selectionState), [
    collection,
    selectionState
  ]);
  const cachedCollection = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) {
      const node = cachedCollection.current.getItem(selectionState.focusedKey);
      const parentNode = node.parentKey != null && (node.type === "cell" || node.type === "rowheader" || node.type === "column") ? cachedCollection.current.getItem(node.parentKey) : node;
      const cachedRows = cachedCollection.current.rows;
      const rows = collection.rows;
      const diff = cachedRows.length - rows.length;
      let index = Math.min(diff > 1 ? Math.max(parentNode.index - diff + 1, 0) : parentNode.index, rows.length - 1);
      let newRow;
      while (index >= 0) {
        if (!selectionManager.isDisabled(rows[index].key) && rows[index].type !== "headerrow") {
          newRow = rows[index];
          break;
        }
        if (index < rows.length - 1) index++;
        else {
          if (index > parentNode.index) index = parentNode.index;
          index--;
        }
      }
      if (newRow) {
        const childNodes = newRow.hasChildNodes ? [
          ...$c5a24bc478652b5f$export$1005530eda016c13(newRow, collection)
        ] : [];
        const keyToFocus = newRow.hasChildNodes && parentNode !== node && node.index < childNodes.length ? childNodes[node.index].key : newRow.key;
        selectionState.setFocusedKey(keyToFocus);
      } else selectionState.setFocusedKey(null);
    }
    cachedCollection.current = collection;
  }, [
    collection,
    selectionManager,
    selectionState,
    selectionState.focusedKey
  ]);
  return {
    collection,
    disabledKeys,
    isKeyboardNavigationDisabled: false,
    selectionManager
  };
}
class $16805b1b18093c5f$export$de3fdf6493c353d {
  *[Symbol.iterator]() {
    yield* [
      ...this.rows
    ];
  }
  get size() {
    return [
      ...this.rows
    ].length;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(key) {
    let node = this.keyMap.get(key);
    return node ? node.prevKey : null;
  }
  getKeyAfter(key) {
    let node = this.keyMap.get(key);
    return node ? node.nextKey : null;
  }
  getFirstKey() {
    var _;
    return (_ = [
      ...this.rows
    ][0]) === null || _ === void 0 ? void 0 : _.key;
  }
  getLastKey() {
    var _rows_;
    let rows = [
      ...this.rows
    ];
    return (_rows_ = rows[rows.length - 1]) === null || _rows_ === void 0 ? void 0 : _rows_.key;
  }
  getItem(key) {
    return this.keyMap.get(key);
  }
  at(idx) {
    const keys = [
      ...this.getKeys()
    ];
    return this.getItem(keys[idx]);
  }
  getChildren(key) {
    let node = this.keyMap.get(key);
    return (node === null || node === void 0 ? void 0 : node.childNodes) || [];
  }
  constructor(opts) {
    this.keyMap = /* @__PURE__ */ new Map();
    this.keyMap = /* @__PURE__ */ new Map();
    this.columnCount = opts === null || opts === void 0 ? void 0 : opts.columnCount;
    this.rows = [];
    let visit = (node) => {
      let prevNode = this.keyMap.get(node.key);
      if (opts.visitNode) node = opts.visitNode(node);
      this.keyMap.set(node.key, node);
      let childKeys = /* @__PURE__ */ new Set();
      let last2;
      for (let child of node.childNodes) {
        if (child.type === "cell" && child.parentKey == null)
          child.parentKey = node.key;
        childKeys.add(child.key);
        if (last2) {
          last2.nextKey = child.key;
          child.prevKey = last2.key;
        } else child.prevKey = null;
        visit(child);
        last2 = child;
      }
      if (last2) last2.nextKey = null;
      if (prevNode) {
        for (let child of prevNode.childNodes) if (!childKeys.has(child.key)) remove(child);
      }
    };
    let remove = (node) => {
      this.keyMap.delete(node.key);
      for (let child of node.childNodes) if (this.keyMap.get(child.key) === child) remove(child);
    };
    let last;
    opts.items.forEach((node, i) => {
      let rowNode = {
        level: 0,
        key: "row-" + i,
        type: "row",
        value: void 0,
        hasChildNodes: true,
        childNodes: [
          ...node.childNodes
        ],
        rendered: void 0,
        textValue: void 0,
        ...node
      };
      if (last) {
        last.nextKey = rowNode.key;
        rowNode.prevKey = last.key;
      } else rowNode.prevKey = null;
      this.rows.push(rowNode);
      visit(rowNode);
      last = rowNode;
    });
    if (last) last.nextKey = null;
  }
}
const $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY = "row-header-column-" + Math.random().toString(36).slice(2);
let $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY_DRAG = "row-header-column-" + Math.random().toString(36).slice(2);
while ($788781baa30117fa$var$ROW_HEADER_COLUMN_KEY === $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY_DRAG) $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY_DRAG = "row-header-column-" + Math.random().toString(36).slice(2);
function $788781baa30117fa$export$7c127db850d4e81e(keyMap, columnNodes) {
  if (columnNodes.length === 0) return [];
  let columns = [];
  let seen = /* @__PURE__ */ new Map();
  for (let column of columnNodes) {
    let parentKey = column.parentKey;
    let col = [
      column
    ];
    while (parentKey) {
      let parent = keyMap.get(parentKey);
      if (!parent) break;
      if (seen.has(parent)) {
        parent.colspan++;
        let { column: column2, index } = seen.get(parent);
        if (index > col.length) break;
        for (let i2 = index; i2 < col.length; i2++) column2.splice(i2, 0, null);
        for (let i2 = col.length; i2 < column2.length; i2++)
          if (column2[i2] && seen.has(column2[i2])) seen.get(column2[i2]).index = i2;
      } else {
        parent.colspan = 1;
        col.push(parent);
        seen.set(parent, {
          column: col,
          index: col.length - 1
        });
      }
      parentKey = parent.parentKey;
    }
    columns.push(col);
    column.index = columns.length - 1;
  }
  let maxLength = Math.max(...columns.map((c) => c.length));
  let headerRows = Array(maxLength).fill(0).map(() => []);
  let colIndex = 0;
  for (let column of columns) {
    let i2 = maxLength - 1;
    for (let item of column) {
      if (item) {
        let row = headerRows[i2];
        let rowLength = row.reduce((p, c) => p + c.colspan, 0);
        if (rowLength < colIndex) {
          let placeholder = {
            type: "placeholder",
            key: "placeholder-" + item.key,
            colspan: colIndex - rowLength,
            index: rowLength,
            value: null,
            rendered: null,
            level: i2,
            hasChildNodes: false,
            childNodes: [],
            textValue: null
          };
          if (row.length > 0) {
            row[row.length - 1].nextKey = placeholder.key;
            placeholder.prevKey = row[row.length - 1].key;
          }
          row.push(placeholder);
        }
        if (row.length > 0) {
          row[row.length - 1].nextKey = item.key;
          item.prevKey = row[row.length - 1].key;
        }
        item.level = i2;
        item.colIndex = colIndex;
        row.push(item);
      }
      i2--;
    }
    colIndex++;
  }
  let i = 0;
  for (let row of headerRows) {
    let rowLength = row.reduce((p, c) => p + c.colspan, 0);
    if (rowLength < columnNodes.length) {
      let placeholder = {
        type: "placeholder",
        key: "placeholder-" + row[row.length - 1].key,
        colspan: columnNodes.length - rowLength,
        index: rowLength,
        value: null,
        rendered: null,
        level: i,
        hasChildNodes: false,
        childNodes: [],
        textValue: null,
        prevKey: row[row.length - 1].key
      };
      row.push(placeholder);
    }
    i++;
  }
  return headerRows.map((childNodes, index) => {
    let row = {
      type: "headerrow",
      key: "headerrow-" + index,
      index,
      value: null,
      rendered: null,
      level: 0,
      hasChildNodes: true,
      childNodes,
      textValue: null
    };
    return row;
  });
}
class $788781baa30117fa$export$596e1b2e2cf93690 extends $16805b1b18093c5f$export$de3fdf6493c353d {
  *[Symbol.iterator]() {
    yield* this.body.childNodes;
  }
  get size() {
    return this._size;
  }
  getKeys() {
    return this.keyMap.keys();
  }
  getKeyBefore(key) {
    let node = this.keyMap.get(key);
    return node ? node.prevKey : null;
  }
  getKeyAfter(key) {
    let node = this.keyMap.get(key);
    return node ? node.nextKey : null;
  }
  getFirstKey() {
    var _getFirstItem;
    return (_getFirstItem = $c5a24bc478652b5f$export$fbdeaa6a76694f71$2(this.body.childNodes)) === null || _getFirstItem === void 0 ? void 0 : _getFirstItem.key;
  }
  getLastKey() {
    var _getLastItem;
    return (_getLastItem = $c5a24bc478652b5f$export$7475b2c64539e4cf$2(this.body.childNodes)) === null || _getLastItem === void 0 ? void 0 : _getLastItem.key;
  }
  getItem(key) {
    return this.keyMap.get(key);
  }
  at(idx) {
    const keys = [
      ...this.getKeys()
    ];
    return this.getItem(keys[idx]);
  }
  getTextValue(key) {
    let row = this.getItem(key);
    if (!row) return "";
    if (row.textValue) return row.textValue;
    let rowHeaderColumnKeys = this.rowHeaderColumnKeys;
    if (rowHeaderColumnKeys) {
      let text = [];
      for (let cell of row.childNodes) {
        let column = this.columns[cell.index];
        if (rowHeaderColumnKeys.has(column.key) && cell.textValue) text.push(cell.textValue);
        if (text.length === rowHeaderColumnKeys.size) break;
      }
      return text.join(" ");
    }
    return "";
  }
  constructor(nodes, prev, opts) {
    let rowHeaderColumnKeys = /* @__PURE__ */ new Set();
    let body;
    let columns = [];
    if (opts === null || opts === void 0 ? void 0 : opts.showSelectionCheckboxes) {
      let rowHeaderColumn = {
        type: "column",
        key: $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY,
        value: null,
        textValue: "",
        level: 0,
        index: (opts === null || opts === void 0 ? void 0 : opts.showDragButtons) ? 1 : 0,
        hasChildNodes: false,
        rendered: null,
        childNodes: [],
        props: {
          isSelectionCell: true
        }
      };
      columns.unshift(rowHeaderColumn);
    }
    if (opts === null || opts === void 0 ? void 0 : opts.showDragButtons) {
      let rowHeaderColumn = {
        type: "column",
        key: $788781baa30117fa$var$ROW_HEADER_COLUMN_KEY_DRAG,
        value: null,
        textValue: "",
        level: 0,
        index: 0,
        hasChildNodes: false,
        rendered: null,
        childNodes: [],
        props: {
          isDragButtonCell: true
        }
      };
      columns.unshift(rowHeaderColumn);
    }
    let rows = [];
    let columnKeyMap = /* @__PURE__ */ new Map();
    let visit = (node) => {
      switch (node.type) {
        case "body":
          body = node;
          break;
        case "column":
          columnKeyMap.set(node.key, node);
          if (!node.hasChildNodes) {
            columns.push(node);
            if (node.props.isRowHeader) rowHeaderColumnKeys.add(node.key);
          }
          break;
        case "item":
          rows.push(node);
          return;
      }
      for (let child of node.childNodes) visit(child);
    };
    for (let node of nodes) visit(node);
    let headerRows = $788781baa30117fa$export$7c127db850d4e81e(columnKeyMap, columns);
    headerRows.forEach((row, i) => rows.splice(i, 0, row));
    super({
      columnCount: columns.length,
      items: rows,
      visitNode: (node) => {
        node.column = columns[node.index];
        return node;
      }
    });
    this._size = 0;
    this.columns = columns;
    this.rowHeaderColumnKeys = rowHeaderColumnKeys;
    this.body = body;
    this.headerRows = headerRows;
    this._size = [
      ...body.childNodes
    ].length;
    if (this.rowHeaderColumnKeys.size === 0) this.rowHeaderColumnKeys.add(this.columns.find((column) => {
      var _column_props, _column_props1;
      return !((_column_props = column.props) === null || _column_props === void 0 ? void 0 : _column_props.isDragButtonCell) && !((_column_props1 = column.props) === null || _column_props1 === void 0 ? void 0 : _column_props1.isSelectionCell);
    }).key);
  }
}
const $4a0dd036d492cee4$var$OPPOSITE_SORT_DIRECTION = {
  ascending: "descending",
  descending: "ascending"
};
function $4a0dd036d492cee4$export$907bcc6c48325fd6(props) {
  let [isKeyboardNavigationDisabled, setKeyboardNavigationDisabled] = reactExports.useState(false);
  let { selectionMode = "none", showSelectionCheckboxes, showDragButtons } = props;
  let context = reactExports.useMemo(() => ({
    showSelectionCheckboxes: showSelectionCheckboxes && selectionMode !== "none",
    showDragButtons,
    selectionMode,
    columns: []
  }), [
    props.children,
    showSelectionCheckboxes,
    selectionMode,
    showDragButtons
  ]);
  let collection = $7613b1592d41b092$export$6cd28814d92fa9c9(props, reactExports.useCallback((nodes) => new $788781baa30117fa$export$596e1b2e2cf93690(nodes, null, context), [
    context
  ]), context);
  let { disabledKeys, selectionManager } = $62967d126f3aa823$export$4007ac09ff9c68ed({
    ...props,
    collection,
    disabledBehavior: props.disabledBehavior || "selection"
  });
  return {
    collection,
    disabledKeys,
    selectionManager,
    showSelectionCheckboxes: props.showSelectionCheckboxes || false,
    sortDescriptor: props.sortDescriptor,
    isKeyboardNavigationDisabled: collection.size === 0 || isKeyboardNavigationDisabled,
    setKeyboardNavigationDisabled,
    sort(columnKey, direction) {
      var _props_sortDescriptor;
      props.onSortChange({
        column: columnKey,
        direction: direction !== null && direction !== void 0 ? direction : ((_props_sortDescriptor = props.sortDescriptor) === null || _props_sortDescriptor === void 0 ? void 0 : _props_sortDescriptor.column) === columnKey ? $4a0dd036d492cee4$var$OPPOSITE_SORT_DIRECTION[props.sortDescriptor.direction] : "ascending"
      });
    }
  };
}
function $312ae3b56a94a86e$var$TableHeader(props) {
  return null;
}
$312ae3b56a94a86e$var$TableHeader.getCollectionNode = function* getCollectionNode(props, context) {
  let { children, columns } = props;
  context.columns = [];
  if (typeof children === "function") {
    if (!columns) throw new Error("props.children was a function but props.columns is missing");
    for (let column of columns) yield {
      type: "column",
      value: column,
      renderer: children
    };
  } else {
    let columns2 = [];
    React.Children.forEach(children, (column) => {
      columns2.push({
        type: "column",
        element: column
      });
    });
    yield* columns2;
  }
};
let $312ae3b56a94a86e$export$f850895b287ef28e = $312ae3b56a94a86e$var$TableHeader;
function $4ae5314bf50db1a3$var$TableBody(props) {
  return null;
}
$4ae5314bf50db1a3$var$TableBody.getCollectionNode = function* getCollectionNode2(props) {
  let { children, items } = props;
  yield {
    type: "body",
    hasChildNodes: true,
    props,
    *childNodes() {
      if (typeof children === "function") {
        if (!items) throw new Error("props.children was a function but props.items is missing");
        for (let item of items) yield {
          type: "item",
          value: item,
          renderer: children
        };
      } else {
        let items2 = [];
        React.Children.forEach(children, (item) => {
          items2.push({
            type: "item",
            element: item
          });
        });
        yield* items2;
      }
    }
  };
};
let $4ae5314bf50db1a3$export$76ccd210b9029917 = $4ae5314bf50db1a3$var$TableBody;
function $1cd244557c2f97d5$var$Column(props) {
  return null;
}
$1cd244557c2f97d5$var$Column.getCollectionNode = function* getCollectionNode3(props, context) {
  let { title, children, childColumns } = props;
  let rendered = title || children;
  let textValue = props.textValue || (typeof rendered === "string" ? rendered : "") || props["aria-label"];
  let fullNodes = yield {
    type: "column",
    hasChildNodes: !!childColumns || title && React.Children.count(children) > 0,
    rendered,
    textValue,
    props,
    *childNodes() {
      if (childColumns) for (let child of childColumns) yield {
        type: "column",
        value: child
      };
      else if (title) {
        let childColumns2 = [];
        React.Children.forEach(children, (child) => {
          childColumns2.push({
            type: "column",
            element: child
          });
        });
        yield* childColumns2;
      }
    },
    shouldInvalidate(newContext) {
      updateContext(newContext);
      return false;
    }
  };
  let updateContext = (context2) => {
    for (let node of fullNodes) if (!node.hasChildNodes) context2.columns.push(node);
  };
  updateContext(context);
};
let $1cd244557c2f97d5$export$816b5d811295e6bc = $1cd244557c2f97d5$var$Column;
function $70d70eb16ea48428$var$Row(props) {
  return null;
}
$70d70eb16ea48428$var$Row.getCollectionNode = function* getCollectionNode4(props, context) {
  let { children, textValue, UNSTABLE_childItems } = props;
  yield {
    type: "item",
    props,
    textValue,
    "aria-label": props["aria-label"],
    hasChildNodes: true,
    *childNodes() {
      if (context.showDragButtons) yield {
        type: "cell",
        key: "header-drag",
        props: {
          isDragButtonCell: true
        }
      };
      if (context.showSelectionCheckboxes && context.selectionMode !== "none") yield {
        type: "cell",
        key: "header",
        props: {
          isSelectionCell: true
        }
      };
      if (typeof children === "function") {
        for (let column of context.columns) yield {
          type: "cell",
          element: children(column.key),
          key: column.key
          // this is combined with the row key by CollectionBuilder
        };
        if (UNSTABLE_childItems) for (let child of UNSTABLE_childItems)
          yield {
            type: "item",
            value: child
          };
      } else {
        let cells = [];
        let childRows = [];
        React.Children.forEach(children, (node) => {
          if (node.type === $70d70eb16ea48428$var$Row) {
            if (cells.length < context.columns.length) throw new Error("All of a Row's child Cells must be positioned before any child Rows.");
            childRows.push({
              type: "item",
              element: node
            });
          } else cells.push({
            type: "cell",
            element: node
          });
        });
        if (cells.length !== context.columns.length) throw new Error(`Cell count must match column count. Found ${cells.length} cells and ${context.columns.length} columns.`);
        yield* cells;
        yield* childRows;
      }
    },
    shouldInvalidate(newContext) {
      return newContext.columns.length !== context.columns.length || newContext.columns.some((c, i) => c.key !== context.columns[i].key) || newContext.showSelectionCheckboxes !== context.showSelectionCheckboxes || newContext.showDragButtons !== context.showDragButtons || newContext.selectionMode !== context.selectionMode;
    }
  };
};
let $70d70eb16ea48428$export$b59bdbef9ce70de2 = $70d70eb16ea48428$var$Row;
function $941d1d9a6a28982a$var$Cell(props) {
  return null;
}
$941d1d9a6a28982a$var$Cell.getCollectionNode = function* getCollectionNode5(props) {
  let { children } = props;
  let textValue = props.textValue || (typeof children === "string" ? children : "") || props["aria-label"] || "";
  yield {
    type: "cell",
    props,
    rendered: children,
    textValue,
    "aria-label": props["aria-label"],
    hasChildNodes: false
  };
};
let $941d1d9a6a28982a$export$f6f0c3fe4ec306ea = $941d1d9a6a28982a$var$Cell;
function useTable(originalProps) {
  var _a;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, table.variantKeys);
  const {
    ref,
    as,
    baseRef,
    children,
    className,
    classNames,
    layoutNode,
    removeWrapper = false,
    disableAnimation = (_a = globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _a : false,
    selectionMode = "none",
    topContentPlacement = "inside",
    bottomContentPlacement = "inside",
    selectionBehavior = selectionMode === "none" ? null : "toggle",
    disabledBehavior = "selection",
    showSelectionCheckboxes = selectionMode === "multiple" && selectionBehavior !== "replace",
    BaseComponent = "div",
    checkboxesProps,
    topContent,
    bottomContent,
    onRowAction,
    onCellAction,
    ...otherProps
  } = props;
  const Component = as || "table";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const domBaseRef = useDOMRef(baseRef);
  const state = $4a0dd036d492cee4$export$907bcc6c48325fd6({
    ...originalProps,
    children,
    showSelectionCheckboxes
  });
  const { collection } = state;
  const { gridProps } = $6e31608fbba75bab$export$25bceaac3c7e4dc7({ ...originalProps, layout: layoutNode }, state, domRef);
  const isSelectable = selectionMode !== "none";
  const isMultiSelectable = selectionMode === "multiple";
  const slots = reactExports.useMemo(
    () => table({
      ...variantProps,
      isSelectable,
      isMultiSelectable
    }),
    [objectToDeps(variantProps), isSelectable, isMultiSelectable]
  );
  const baseStyles = clsx$1(classNames == null ? void 0 : classNames.base, className);
  const values = reactExports.useMemo(
    () => {
      var _a2;
      return {
        state,
        slots,
        isSelectable,
        collection,
        classNames,
        color: originalProps == null ? void 0 : originalProps.color,
        disableAnimation,
        checkboxesProps,
        isHeaderSticky: (_a2 = originalProps == null ? void 0 : originalProps.isHeaderSticky) != null ? _a2 : false,
        selectionMode,
        selectionBehavior,
        disabledBehavior,
        showSelectionCheckboxes,
        onRowAction,
        onCellAction
      };
    },
    [
      slots,
      state,
      collection,
      isSelectable,
      classNames,
      selectionMode,
      selectionBehavior,
      checkboxesProps,
      disabledBehavior,
      disableAnimation,
      showSelectionCheckboxes,
      originalProps == null ? void 0 : originalProps.color,
      originalProps == null ? void 0 : originalProps.isHeaderSticky,
      onRowAction,
      onCellAction
    ]
  );
  const getBaseProps = reactExports.useCallback(
    (props2) => ({
      ...props2,
      ref: domBaseRef,
      className: slots.base({ class: clsx$1(baseStyles, props2 == null ? void 0 : props2.className) })
    }),
    [baseStyles, slots]
  );
  const getWrapperProps = reactExports.useCallback(
    (props2) => ({
      ...props2,
      ref: domBaseRef,
      className: slots.wrapper({ class: clsx$1(classNames == null ? void 0 : classNames.wrapper, props2 == null ? void 0 : props2.className) })
    }),
    [classNames == null ? void 0 : classNames.wrapper, slots]
  );
  const getTableProps = reactExports.useCallback(
    (props2) => ({
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(
        gridProps,
        filterDOMProps(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        props2
      ),
      onKeyDownCapture: void 0,
      ref: domRef,
      className: slots.table({ class: clsx$1(classNames == null ? void 0 : classNames.table, props2 == null ? void 0 : props2.className) })
    }),
    [classNames == null ? void 0 : classNames.table, shouldFilterDOMProps, slots, gridProps, otherProps]
  );
  return {
    BaseComponent,
    Component,
    children,
    state,
    collection,
    values,
    topContent,
    bottomContent,
    removeWrapper,
    topContentPlacement,
    bottomContentPlacement,
    getBaseProps,
    getWrapperProps,
    getTableProps
  };
}
var TableCell$1 = forwardRef((props, ref) => {
  var _a, _b, _c;
  const { as, className, node, rowKey, slots, state, classNames, ...otherProps } = props;
  const Component = as || "td";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { gridCellProps } = $7713593715703b24$export$49571c903d73624c({ node }, state, domRef);
  const tdStyles = clsx$1(classNames == null ? void 0 : classNames.td, className, (_a = node.props) == null ? void 0 : _a.className);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const isRowSelected = state.selectionManager.isSelected(rowKey);
  const cell = reactExports.useMemo(() => {
    const cellType = typeof node.rendered;
    return cellType !== "object" && cellType !== "function" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: node.rendered }) : node.rendered;
  }, [node.rendered]);
  const columnProps = ((_b = node.column) == null ? void 0 : _b.props) || {};
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref: domRef,
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-selected": dataAttr(isRowSelected),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(
        gridCellProps,
        focusProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps
        }),
        otherProps
      ),
      className: (_c = slots.td) == null ? void 0 : _c.call(slots, { align: columnProps.align, class: tdStyles }),
      children: cell
    }
  );
});
TableCell$1.displayName = "NextUI.TableCell";
var table_cell_default$1 = TableCell$1;
var TableCheckboxCell = forwardRef((props, ref) => {
  var _a, _b;
  const {
    as,
    className,
    node,
    rowKey,
    slots,
    state,
    color,
    disableAnimation,
    checkboxesProps,
    selectionMode,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "td";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { gridCellProps } = $7713593715703b24$export$49571c903d73624c({ node }, state, domRef);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { checkboxProps } = $2a795c53a101c542$export$16ea7f650bd7c1bb({ key: (node == null ? void 0 : node.parentKey) || node.key }, state);
  const tdStyles = clsx$1(classNames == null ? void 0 : classNames.td, className, (_a = node.props) == null ? void 0 : _a.className);
  const isSingleSelectionMode = selectionMode === "single";
  const { onChange, ...otherCheckboxProps } = checkboxProps;
  const isRowSelected = state.selectionManager.isSelected(rowKey);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref: domRef,
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-selected": dataAttr(isRowSelected),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(
        gridCellProps,
        focusProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps
        }),
        otherProps
      ),
      className: (_b = slots.td) == null ? void 0 : _b.call(slots, { class: tdStyles }),
      children: isSingleSelectionMode ? /* @__PURE__ */ jsxRuntimeExports.jsx($5c3e21d68f1c4674$export$439d29a4e110a164, { children: checkboxProps["aria-label"] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        checkbox_default,
        {
          color,
          disableAnimation,
          onValueChange: onChange,
          ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(checkboxesProps, otherCheckboxProps)
        }
      )
    }
  );
});
TableCheckboxCell.displayName = "NextUI.TableCheckboxCell";
var table_checkbox_cell_default = TableCheckboxCell;
var TableRow$1 = forwardRef((props, ref) => {
  var _a, _b;
  const { as, className, children, node, slots, state, isSelectable, classNames, ...otherProps } = props;
  const Component = as || ((props == null ? void 0 : props.href) ? "a" : "tr");
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { rowProps } = $b2db214c022798eb$export$7f2f6ae19e707aa5({ node }, state, domRef);
  const trStyles = clsx$1(classNames == null ? void 0 : classNames.tr, className, (_a = node.props) == null ? void 0 : _a.className);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const isDisabled = state.disabledKeys.has(node.key);
  const isSelected = state.selectionManager.isSelected(node.key);
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled });
  const { isFirst, isLast, isMiddle, isOdd } = reactExports.useMemo(() => {
    const isFirst2 = node.key === state.collection.getFirstKey();
    const isLast2 = node.key === state.collection.getLastKey();
    const isMiddle2 = !isFirst2 && !isLast2;
    const isOdd2 = (node == null ? void 0 : node.index) ? (node.index + 1) % 2 === 0 : false;
    return {
      isFirst: isFirst2,
      isLast: isLast2,
      isMiddle: isMiddle2,
      isOdd: isOdd2
    };
  }, [node, state.collection]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref: domRef,
      "data-disabled": dataAttr(isDisabled),
      "data-first": dataAttr(isFirst),
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-last": dataAttr(isLast),
      "data-middle": dataAttr(isMiddle),
      "data-odd": dataAttr(isOdd),
      "data-selected": dataAttr(isSelected),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(
        rowProps,
        focusProps,
        isSelectable ? hoverProps : {},
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps
        }),
        otherProps
      ),
      className: (_b = slots.tr) == null ? void 0 : _b.call(slots, { class: trStyles }),
      children
    }
  );
});
TableRow$1.displayName = "NextUI.TableRow";
var table_row_default$1 = TableRow$1;
var TableBody$1 = forwardRef((props, ref) => {
  var _a;
  const {
    as,
    className,
    slots,
    state,
    collection,
    isSelectable,
    color,
    disableAnimation,
    checkboxesProps,
    selectionMode,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "tbody";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { rowGroupProps } = $0047e6c294ea075f$export$6fb1613bd7b28198();
  const tbodyStyles = clsx$1(classNames == null ? void 0 : classNames.tbody, className);
  const bodyProps = collection == null ? void 0 : collection.body.props;
  const isLoading = (bodyProps == null ? void 0 : bodyProps.isLoading) || (bodyProps == null ? void 0 : bodyProps.loadingState) === "loading" || (bodyProps == null ? void 0 : bodyProps.loadingState) === "loadingMore";
  const renderRows = reactExports.useMemo(() => {
    return [...collection.body.childNodes].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      table_row_default$1,
      {
        classNames,
        isSelectable,
        node: row,
        slots,
        state,
        children: [...row.childNodes].map(
          (cell) => cell.props.isSelectionCell ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            table_checkbox_cell_default,
            {
              checkboxesProps,
              classNames,
              color,
              disableAnimation,
              node: cell,
              rowKey: row.key,
              selectionMode,
              slots,
              state
            },
            cell.key
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            table_cell_default$1,
            {
              classNames,
              node: cell,
              rowKey: row.key,
              slots,
              state
            },
            cell.key
          )
        )
      },
      row.key
    ));
  }, [collection.body.childNodes, classNames, isSelectable, slots, state]);
  let emptyContent;
  let loadingContent;
  if (collection.size === 0 && bodyProps.emptyContent) {
    emptyContent = /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { role: "row", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "td",
      {
        className: slots == null ? void 0 : slots.emptyWrapper({ class: classNames == null ? void 0 : classNames.emptyWrapper }),
        colSpan: collection.columnCount,
        role: "gridcell",
        children: !isLoading && bodyProps.emptyContent
      }
    ) });
  }
  if (isLoading && bodyProps.loadingContent) {
    loadingContent = /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { role: "row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "td",
        {
          className: slots == null ? void 0 : slots.loadingWrapper({ class: classNames == null ? void 0 : classNames.loadingWrapper }),
          colSpan: collection.columnCount,
          role: "gridcell",
          children: bodyProps.loadingContent
        }
      ),
      !emptyContent && collection.size === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: slots == null ? void 0 : slots.emptyWrapper({ class: classNames == null ? void 0 : classNames.emptyWrapper }) }) : null
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Component,
    {
      ref: domRef,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(
        rowGroupProps,
        filterDOMProps(bodyProps, {
          enabled: shouldFilterDOMProps
        }),
        otherProps
      ),
      className: (_a = slots.tbody) == null ? void 0 : _a.call(slots, { class: tbodyStyles }),
      "data-empty": dataAttr(collection.size === 0),
      "data-loading": dataAttr(isLoading),
      children: [
        renderRows,
        loadingContent,
        emptyContent
      ]
    }
  );
});
TableBody$1.displayName = "NextUI.TableBody";
var table_body_default$1 = TableBody$1;
var TableColumnHeader = forwardRef((props, ref) => {
  var _a, _b, _c, _d, _e;
  const { as, className, state, node, slots, classNames, ...otherProps } = props;
  const Component = as || "th";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { columnHeaderProps } = $f329116d8ad0aba0$export$9514819a8c81e960({ node }, state, domRef);
  const thStyles = clsx$1(classNames == null ? void 0 : classNames.th, className, (_a = node.props) == null ? void 0 : _a.className);
  const { isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f();
  const { isHovered, hoverProps } = $6179b936705e76d3$export$ae780daf29e6d456({});
  const { hideHeader, align, ...columnProps } = node.props;
  const allowsSorting = columnProps.allowsSorting;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Component,
    {
      ref: domRef,
      colSpan: node.colspan,
      "data-focus-visible": dataAttr(isFocusVisible),
      "data-hover": dataAttr(isHovered),
      "data-sortable": dataAttr(allowsSorting),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(
        columnHeaderProps,
        focusProps,
        filterDOMProps(columnProps, {
          enabled: shouldFilterDOMProps
        }),
        allowsSorting ? hoverProps : {},
        otherProps
      ),
      className: (_b = slots.th) == null ? void 0 : _b.call(slots, { align, class: thStyles }),
      children: [
        hideHeader ? /* @__PURE__ */ jsxRuntimeExports.jsx($5c3e21d68f1c4674$export$439d29a4e110a164, { children: node.rendered }) : node.rendered,
        allowsSorting && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ChevronDownIcon,
          {
            "aria-hidden": "true",
            className: (_c = slots.sortIcon) == null ? void 0 : _c.call(slots, { class: classNames == null ? void 0 : classNames.sortIcon }),
            "data-direction": (_d = state.sortDescriptor) == null ? void 0 : _d.direction,
            "data-visible": dataAttr(((_e = state.sortDescriptor) == null ? void 0 : _e.column) === node.key),
            strokeWidth: 3
          }
        )
      ]
    }
  );
});
TableColumnHeader.displayName = "NextUI.TableColumnHeader";
var table_column_header_default = TableColumnHeader;
var TableHeaderRow = forwardRef((props, ref) => {
  var _a, _b;
  const { as, className, children, node, slots, classNames, state, ...otherProps } = props;
  const Component = as || "tr";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = useDOMRef(ref);
  const { rowProps } = $f917ee10f4c32dab$export$1b95a7d2d517b841({ node }, state);
  const trStyles = clsx$1(classNames == null ? void 0 : classNames.tr, className, (_a = node.props) == null ? void 0 : _a.className);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref: domRef,
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(
        rowProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps
        }),
        otherProps
      ),
      className: (_b = slots.tr) == null ? void 0 : _b.call(slots, { class: trStyles }),
      children
    }
  );
});
TableHeaderRow.displayName = "NextUI.TableHeaderRow";
var table_header_row_default = TableHeaderRow;
var TableRowGroup = forwardRef((props, ref) => {
  var _a;
  const { as, className, children, slots, classNames, ...otherProps } = props;
  const Component = as || "thead";
  const domRef = useDOMRef(ref);
  const { rowGroupProps } = $0047e6c294ea075f$export$6fb1613bd7b28198();
  const theadStyles = clsx$1(classNames == null ? void 0 : classNames.thead, className);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Component,
    {
      ref: domRef,
      className: (_a = slots.thead) == null ? void 0 : _a.call(slots, { class: theadStyles }),
      ...$3ef42575df84b30b$export$9d1611c77c2fe928$2(rowGroupProps, otherProps),
      children
    }
  );
});
TableRowGroup.displayName = "NextUI.TableRowGroup";
var table_row_group_default = TableRowGroup;
var Table = forwardRef((props, ref) => {
  const {
    BaseComponent,
    Component,
    collection,
    values,
    topContent,
    topContentPlacement,
    bottomContentPlacement,
    bottomContent,
    removeWrapper,
    getBaseProps,
    getWrapperProps,
    getTableProps
  } = useTable({
    ...props,
    ref
  });
  const Wrapper = reactExports.useCallback(
    ({ children }) => {
      if (removeWrapper) {
        return children;
      }
      return /* @__PURE__ */ jsxRuntimeExports.jsx(BaseComponent, { ...getWrapperProps(), children });
    },
    [removeWrapper, getWrapperProps]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getBaseProps(), children: [
    topContentPlacement === "outside" && topContent,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      topContentPlacement === "inside" && topContent,
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Component, { ...getTableProps(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(table_row_group_default, { classNames: values.classNames, slots: values.slots, children: [
          collection.headerRows.map((headerRow) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            table_header_row_default,
            {
              classNames: values.classNames,
              node: headerRow,
              slots: values.slots,
              state: values.state,
              children: [...headerRow.childNodes].map(
                (column) => {
                  var _a;
                  return ((_a = column == null ? void 0 : column.props) == null ? void 0 : _a.isSelectionCell) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    table_select_all_checkbox_default,
                    {
                      checkboxesProps: values.checkboxesProps,
                      classNames: values.classNames,
                      color: values.color,
                      disableAnimation: values.disableAnimation,
                      node: column,
                      selectionMode: values.selectionMode,
                      slots: values.slots,
                      state: values.state
                    },
                    column == null ? void 0 : column.key
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                    table_column_header_default,
                    {
                      classNames: values.classNames,
                      node: column,
                      slots: values.slots,
                      state: values.state
                    },
                    column == null ? void 0 : column.key
                  );
                }
              )
            },
            headerRow == null ? void 0 : headerRow.key
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(spacer_default, { as: "tr", tabIndex: -1, y: 1 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          table_body_default$1,
          {
            checkboxesProps: values.checkboxesProps,
            classNames: values.classNames,
            collection: values.collection,
            color: values.color,
            disableAnimation: values.disableAnimation,
            isSelectable: values.isSelectable,
            selectionMode: values.selectionMode,
            slots: values.slots,
            state: values.state
          }
        )
      ] }),
      bottomContentPlacement === "inside" && bottomContent
    ] }) }),
    bottomContentPlacement === "outside" && bottomContent
  ] });
});
Table.displayName = "NextUI.Table";
var table_default = Table;
var TableRow = $70d70eb16ea48428$export$b59bdbef9ce70de2;
var table_row_default = TableRow;
var TableBody = $4ae5314bf50db1a3$export$76ccd210b9029917;
var table_body_default = TableBody;
var TableCell = $941d1d9a6a28982a$export$f6f0c3fe4ec306ea;
var table_cell_default = TableCell;
var TableColumn = $1cd244557c2f97d5$export$816b5d811295e6bc;
var table_column_default = TableColumn;
var TableHeader = $312ae3b56a94a86e$export$f850895b287ef28e;
var table_header_default = TableHeader;
export {
  table_header_default as a,
  table_column_default as b,
  table_body_default as c,
  table_row_default as d,
  table_cell_default as e,
  table_default as t,
  user_default as u
};
