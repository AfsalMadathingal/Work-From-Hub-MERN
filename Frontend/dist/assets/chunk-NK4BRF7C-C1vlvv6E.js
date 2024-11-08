import { E as tv, N as useProviderContext, M as mapPropsVariants, aR as useImage$1, O as useDOMRef, r as reactExports, Q as objectToDeps, a4 as clsx, T as dataAttr, af as forwardRef, j as jsxRuntimeExports } from "./index-DhlojAJa.js";
var image = tv({
  slots: {
    wrapper: "relative shadow-black/5",
    zoomedWrapper: "relative overflow-hidden rounded-inherit",
    img: "relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",
    blurredImg: [
      "absolute",
      "z-0",
      "inset-0",
      "w-full",
      "h-full",
      "object-cover",
      "filter",
      "blur-lg",
      "scale-105",
      "saturate-150",
      "opacity-30",
      "translate-y-1"
    ]
  },
  variants: {
    radius: {
      none: {},
      sm: {},
      md: {},
      lg: {},
      full: {}
    },
    shadow: {
      none: {
        wrapper: "shadow-none",
        img: "shadow-none"
      },
      sm: {
        wrapper: "shadow-small",
        img: "shadow-small"
      },
      md: {
        wrapper: "shadow-medium",
        img: "shadow-medium"
      },
      lg: {
        wrapper: "shadow-large",
        img: "shadow-large"
      }
    },
    isZoomed: {
      true: {
        img: ["object-cover", "transform", "hover:scale-125"]
      }
    },
    showSkeleton: {
      true: {
        wrapper: ["group", "relative", "overflow-hidden", "bg-content3 dark:bg-content2"],
        img: "opacity-0"
      }
    },
    disableAnimation: {
      true: {
        img: "transition-none"
      },
      false: {
        img: "transition-transform-opacity motion-reduce:transition-none !duration-300"
      }
    }
  },
  defaultVariants: {
    radius: "lg",
    shadow: "none",
    isZoomed: false,
    isBlurred: false,
    showSkeleton: false
  },
  compoundVariants: [
    {
      showSkeleton: true,
      disableAnimation: false,
      class: {
        wrapper: [
          "before:opacity-100",
          "before:absolute",
          "before:inset-0",
          "before:-translate-x-full",
          "before:animate-[shimmer_2s_infinite]",
          "before:border-t",
          "before:border-content4/30",
          "before:bg-gradient-to-r",
          "before:from-transparent",
          "before:via-content4",
          "dark:before:via-default-700/10",
          "before:to-transparent",
          "after:opacity-100",
          "after:absolute",
          "after:inset-0",
          "after:-z-10",
          "after:bg-content3",
          "dark:after:bg-content2"
        ]
      }
    }
  ],
  compoundSlots: [
    {
      slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
      radius: "none",
      class: "rounded-none"
    },
    {
      slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
      radius: "full",
      class: "rounded-full"
    },
    {
      slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
      radius: "sm",
      class: "rounded-small"
    },
    {
      slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
      radius: "md",
      class: "rounded-md"
    },
    {
      slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
      radius: "lg",
      class: "rounded-large"
    }
  ]
});
function useImage(originalProps) {
  var _a, _b;
  const globalContext = useProviderContext();
  const [props, variantProps] = mapPropsVariants(originalProps, image.variantKeys);
  const {
    ref,
    as,
    src,
    className,
    classNames,
    loading,
    isBlurred,
    fallbackSrc,
    isLoading: isLoadingProp,
    disableSkeleton = !!fallbackSrc,
    removeWrapper = false,
    onError,
    onLoad,
    srcSet,
    sizes,
    crossOrigin,
    ...otherProps
  } = props;
  const imageStatus = useImage$1({
    src,
    loading,
    onError,
    onLoad,
    ignoreFallback: false,
    srcSet,
    sizes,
    crossOrigin
  });
  const disableAnimation = (_b = (_a = originalProps.disableAnimation) != null ? _a : globalContext == null ? void 0 : globalContext.disableAnimation) != null ? _b : false;
  const isImgLoaded = imageStatus === "loaded" && !isLoadingProp;
  const isLoading = imageStatus === "loading" || isLoadingProp;
  const isZoomed = originalProps.isZoomed;
  const Component = as || "img";
  const domRef = useDOMRef(ref);
  const { w, h } = reactExports.useMemo(() => {
    return {
      w: props.width ? typeof props.width === "number" ? `${props.width}px` : props.width : "fit-content",
      h: props.height ? typeof props.height === "number" ? `${props.height}px` : props.height : "auto"
    };
  }, [props == null ? void 0 : props.width, props == null ? void 0 : props.height]);
  const showFallback = (!src || !isImgLoaded) && !!fallbackSrc;
  const showSkeleton = isLoading && !disableSkeleton;
  const slots = reactExports.useMemo(
    () => image({
      ...variantProps,
      disableAnimation,
      showSkeleton
    }),
    [objectToDeps(variantProps), disableAnimation, showSkeleton]
  );
  const baseStyles = clsx(className, classNames == null ? void 0 : classNames.img);
  const getImgProps = (props2 = {}) => {
    const imgStyles = clsx(baseStyles, props2 == null ? void 0 : props2.className);
    return {
      src,
      ref: domRef,
      "data-loaded": dataAttr(isImgLoaded),
      className: slots.img({ class: imgStyles }),
      loading,
      srcSet,
      sizes,
      crossOrigin,
      ...otherProps,
      style: {
        ...(otherProps == null ? void 0 : otherProps.height) && { height: h },
        ...props2.style,
        ...otherProps.style
      }
    };
  };
  const getWrapperProps = reactExports.useCallback(() => {
    const fallbackStyle = showFallback ? {
      backgroundImage: `url(${fallbackSrc})`
    } : {};
    return {
      className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }),
      style: {
        ...fallbackStyle,
        maxWidth: w
      }
    };
  }, [slots, showFallback, fallbackSrc, classNames == null ? void 0 : classNames.wrapper]);
  const getBlurredImgProps = reactExports.useCallback(() => {
    return {
      src,
      "aria-hidden": dataAttr(true),
      className: slots.blurredImg({ class: classNames == null ? void 0 : classNames.blurredImg })
    };
  }, [slots, src, classNames == null ? void 0 : classNames.blurredImg]);
  return {
    Component,
    domRef,
    slots,
    classNames,
    isBlurred,
    disableSkeleton,
    fallbackSrc,
    removeWrapper,
    isZoomed,
    isLoading,
    getImgProps,
    getWrapperProps,
    getBlurredImgProps
  };
}
var Image = forwardRef((props, ref) => {
  const {
    Component,
    domRef,
    slots,
    classNames,
    isBlurred,
    isZoomed,
    fallbackSrc,
    removeWrapper,
    disableSkeleton,
    getImgProps,
    getWrapperProps,
    getBlurredImgProps
  } = useImage({
    ...props,
    ref
  });
  const img = /* @__PURE__ */ jsxRuntimeExports.jsx(Component, { ref: domRef, ...getImgProps() });
  if (removeWrapper) {
    return img;
  }
  const zoomed = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: slots.zoomedWrapper({ class: classNames == null ? void 0 : classNames.zoomedWrapper }), children: img });
  if (isBlurred) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getWrapperProps(), children: [
      isZoomed ? zoomed : img,
      reactExports.cloneElement(img, getBlurredImgProps())
    ] });
  }
  if (isZoomed || !disableSkeleton || fallbackSrc) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ...getWrapperProps(), children: [
      " ",
      isZoomed ? zoomed : img
    ] });
  }
  return img;
});
Image.displayName = "NextUI.Image";
var image_default = Image;
export {
  image_default as i
};
