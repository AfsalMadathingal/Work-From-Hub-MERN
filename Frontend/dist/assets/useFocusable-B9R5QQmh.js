import { k as $431fbd86ca7dc216$export$b204af158042fbac, b as $507fabe10e71c6fb$export$630ff653c5ada6a9, n as $bbed8b41f857bcc0$export$24490316f764c430, o as $a1ea59d68270f0dd$export$f8168d8dd8fd66e6, $ as $3ef42575df84b30b$export$9d1611c77c2fe928, p as $e7801be82b4b2a53$export$4debdb1a3f0fa79e } from "./chunk-XHQUSKIE-C8hINOKQ.js";
import { q as $7215afc6de606d6b$export$de79e2c695e052f3, b as reactExports, k as React } from "./index-CRCdbRYf.js";
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
function $6a99195332edec8b$export$80f3e147d781571c(element) {
  const ownerDocument = $431fbd86ca7dc216$export$b204af158042fbac(element);
  if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === "virtual") {
    let lastFocusedElement = ownerDocument.activeElement;
    $bbed8b41f857bcc0$export$24490316f764c430(() => {
      if (ownerDocument.activeElement === lastFocusedElement && element.isConnected) $7215afc6de606d6b$export$de79e2c695e052f3(element);
    });
  } else $7215afc6de606d6b$export$de79e2c695e052f3(element);
}
let $e6afbd83fe6ebbd2$var$FocusableContext = /* @__PURE__ */ React.createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
  let context = reactExports.useContext($e6afbd83fe6ebbd2$var$FocusableContext) || {};
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref);
  let { ref: _, ...otherProps } = context;
  return otherProps;
}
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props);
  let { keyboardProps } = $46d819fcbaf35654$export$8f71654801c2f7cd(props);
  let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, keyboardProps);
  let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = reactExports.useRef(props.autoFocus);
  reactExports.useEffect(() => {
    if (autoFocusRef.current && domRef.current) $6a99195332edec8b$export$80f3e147d781571c(domRef.current);
    autoFocusRef.current = false;
  }, [
    domRef
  ]);
  return {
    focusableProps: $3ef42575df84b30b$export$9d1611c77c2fe928({
      ...interactions,
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : void 0
    }, interactionProps)
  };
}
export {
  $e6afbd83fe6ebbd2$export$4c014de7c8940b4c as $,
  $6a99195332edec8b$export$80f3e147d781571c as a,
  $46d819fcbaf35654$export$8f71654801c2f7cd as b
};
