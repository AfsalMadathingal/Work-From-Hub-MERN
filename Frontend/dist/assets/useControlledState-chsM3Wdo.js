import { i as isFunction } from "./chunk-N2KXC5ZE-B3rqp_Yo.js";
import { b as reactExports } from "./index-BgyoVvld.js";
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction(ref)) {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
  let [stateValue, setStateValue] = reactExports.useState(value || defaultValue);
  let isControlledRef = reactExports.useRef(value !== void 0);
  let isControlled = value !== void 0;
  reactExports.useEffect(() => {
    let wasControlled = isControlledRef.current;
    if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
    isControlledRef.current = isControlled;
  }, [
    isControlled
  ]);
  let currentValue = isControlled ? value : stateValue;
  let setValue = reactExports.useCallback((value2, ...args) => {
    let onChangeCaller = (value3, ...onChangeArgs) => {
      if (onChange) {
        if (!Object.is(currentValue, value3)) onChange(value3, ...onChangeArgs);
      }
      if (!isControlled)
        currentValue = value3;
    };
    if (typeof value2 === "function") {
      console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
      let updateFunction = (oldValue, ...functionArgs) => {
        let interceptedValue = value2(isControlled ? currentValue : oldValue, ...functionArgs);
        onChangeCaller(interceptedValue, ...args);
        if (!isControlled) return interceptedValue;
        return oldValue;
      };
      setStateValue(updateFunction);
    } else {
      if (!isControlled) setStateValue(value2);
      onChangeCaller(value2, ...args);
    }
  }, [
    isControlled,
    currentValue,
    onChange
  ]);
  return [
    currentValue,
    setValue
  ];
}
export {
  $458b0a5536c1a7cf$export$40bfa8c7b0832715 as $,
  mergeRefs as m
};
