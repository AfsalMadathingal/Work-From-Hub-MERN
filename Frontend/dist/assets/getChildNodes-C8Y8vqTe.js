import { $ as $18f2051aff69b9bf$export$43bb16f9c6d9e3f7, b as reactExports, k as React } from "./index-CRCdbRYf.js";
import { i as $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c, $ as $3ef42575df84b30b$export$9d1611c77c2fe928, m as $9ab94262bd0047c7$export$420e68273165f4ec } from "./chunk-XHQUSKIE-C8hINOKQ.js";
const $5b160d28a433310d$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
const $5b160d28a433310d$var$stringsSymbol = Symbol.for("react-aria.i18n.strings");
let $5b160d28a433310d$var$cachedGlobalStrings = void 0;
class $5b160d28a433310d$export$c17fa47878dc55b6 {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(key, locale) {
    let strings = this.getStringsForLocale(locale);
    let string = strings[key];
    if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
    return string;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(locale) {
    let strings = this.strings[locale];
    if (!strings) {
      strings = $5b160d28a433310d$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
      this.strings[locale] = strings;
    }
    return strings;
  }
  static getGlobalDictionaryForPackage(packageName) {
    if (typeof window === "undefined") return null;
    let locale = window[$5b160d28a433310d$var$localeSymbol];
    if ($5b160d28a433310d$var$cachedGlobalStrings === void 0) {
      let globalStrings = window[$5b160d28a433310d$var$stringsSymbol];
      if (!globalStrings) return null;
      $5b160d28a433310d$var$cachedGlobalStrings = {};
      for (let pkg in globalStrings) $5b160d28a433310d$var$cachedGlobalStrings[pkg] = new $5b160d28a433310d$export$c17fa47878dc55b6({
        [locale]: globalStrings[pkg]
      }, locale);
    }
    let dictionary = $5b160d28a433310d$var$cachedGlobalStrings === null || $5b160d28a433310d$var$cachedGlobalStrings === void 0 ? void 0 : $5b160d28a433310d$var$cachedGlobalStrings[packageName];
    if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return dictionary;
  }
  constructor(messages, defaultLocale = "en-US") {
    this.strings = Object.fromEntries(Object.entries(messages).filter(([, v]) => v));
    this.defaultLocale = defaultLocale;
  }
}
function $5b160d28a433310d$var$getStringsForLocale(locale, strings, defaultLocale = "en-US") {
  if (strings[locale]) return strings[locale];
  let language = $5b160d28a433310d$var$getLanguage(locale);
  if (strings[language]) return strings[language];
  for (let key in strings) {
    if (key.startsWith(language + "-")) return strings[key];
  }
  return strings[defaultLocale];
}
function $5b160d28a433310d$var$getLanguage(locale) {
  if (Intl.Locale)
    return new Intl.Locale(locale).language;
  return locale.split("-")[0];
}
const $6db58dc88e78b024$var$pluralRulesCache = /* @__PURE__ */ new Map();
const $6db58dc88e78b024$var$numberFormatCache = /* @__PURE__ */ new Map();
class $6db58dc88e78b024$export$2f817fcdc4b89ae0 {
  /** Formats a localized string for the given key with the provided variables. */
  format(key, variables) {
    let message = this.strings.getStringForLocale(key, this.locale);
    return typeof message === "function" ? message(variables, this) : message;
  }
  plural(count, options, type = "cardinal") {
    let opt = options["=" + count];
    if (opt) return typeof opt === "function" ? opt() : opt;
    let key = this.locale + ":" + type;
    let pluralRules = $6db58dc88e78b024$var$pluralRulesCache.get(key);
    if (!pluralRules) {
      pluralRules = new Intl.PluralRules(this.locale, {
        type
      });
      $6db58dc88e78b024$var$pluralRulesCache.set(key, pluralRules);
    }
    let selected = pluralRules.select(count);
    opt = options[selected] || options.other;
    return typeof opt === "function" ? opt() : opt;
  }
  number(value) {
    let numberFormat = $6db58dc88e78b024$var$numberFormatCache.get(this.locale);
    if (!numberFormat) {
      numberFormat = new Intl.NumberFormat(this.locale);
      $6db58dc88e78b024$var$numberFormatCache.set(this.locale, numberFormat);
    }
    return numberFormat.format(value);
  }
  select(options, value) {
    let opt = options[value] || options.other;
    return typeof opt === "function" ? opt() : opt;
  }
  constructor(locale, strings) {
    this.locale = locale;
    this.strings = strings;
  }
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
let $325a3faab7a68acd$var$cache = /* @__PURE__ */ new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
  let { locale } = $18f2051aff69b9bf$export$43bb16f9c6d9e3f7();
  let cacheKey = locale + (options ? Object.entries(options).sort((a, b) => a[0] < b[0] ? -1 : 1).join() : "");
  if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
  let formatter = new Intl.Collator(locale, options);
  $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
  return formatter;
}
const $5c3e21d68f1c4674$var$styles = {
  border: 0,
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  width: "1px",
  whiteSpace: "nowrap"
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {
  let { style, isFocusable } = props;
  let [isFocused, setFocused] = reactExports.useState(false);
  let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !isFocusable,
    onFocusWithinChange: (val) => setFocused(val)
  });
  let combinedStyles = reactExports.useMemo(() => {
    if (isFocused) return style;
    else if (style) return {
      ...$5c3e21d68f1c4674$var$styles,
      ...style
    };
    else return $5c3e21d68f1c4674$var$styles;
  }, [
    isFocused
  ]);
  return {
    visuallyHiddenProps: {
      ...focusWithinProps,
      style: combinedStyles
    }
  };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
  let { children, elementType: Element = "div", isFocusable, style, ...otherProps } = props;
  let { visuallyHiddenProps } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
  return /* @__PURE__ */ React.createElement(Element, $3ef42575df84b30b$export$9d1611c77c2fe928(otherProps, visuallyHiddenProps), children);
}
class $e40ea825a81a3709$export$52baac22726c72bf extends Set {
  constructor(keys, anchorKey, currentKey) {
    super(keys);
    if (keys instanceof $e40ea825a81a3709$export$52baac22726c72bf) {
      this.anchorKey = anchorKey || keys.anchorKey;
      this.currentKey = currentKey || keys.currentKey;
    } else {
      this.anchorKey = anchorKey;
      this.currentKey = currentKey;
    }
  }
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
function $7af3f5b51489e0b5$var$equalSets(setA, setB) {
  if (setA.size !== setB.size) return false;
  for (let item of setA) {
    if (!setB.has(item)) return false;
  }
  return true;
}
function $7af3f5b51489e0b5$export$253fe78d46329472(props) {
  let { selectionMode = "none", disallowEmptySelection, allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = "toggle", disabledBehavior = "all" } = props;
  let isFocusedRef = reactExports.useRef(false);
  let [, setFocused] = reactExports.useState(false);
  let focusedKeyRef = reactExports.useRef(null);
  let childFocusStrategyRef = reactExports.useRef(null);
  let [, setFocusedKey] = reactExports.useState(null);
  let selectedKeysProp = reactExports.useMemo(() => $7af3f5b51489e0b5$var$convertSelection(props.selectedKeys), [
    props.selectedKeys
  ]);
  let defaultSelectedKeys = reactExports.useMemo(() => $7af3f5b51489e0b5$var$convertSelection(props.defaultSelectedKeys, new $e40ea825a81a3709$export$52baac22726c72bf()), [
    props.defaultSelectedKeys
  ]);
  let [selectedKeys, setSelectedKeys] = $458b0a5536c1a7cf$export$40bfa8c7b0832715(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
  let disabledKeysProp = reactExports.useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [
    props.disabledKeys
  ]);
  let [selectionBehavior, setSelectionBehavior] = reactExports.useState(selectionBehaviorProp);
  if (selectionBehaviorProp === "replace" && selectionBehavior === "toggle" && typeof selectedKeys === "object" && selectedKeys.size === 0) setSelectionBehavior("replace");
  let lastSelectionBehavior = reactExports.useRef(selectionBehaviorProp);
  reactExports.useEffect(() => {
    if (selectionBehaviorProp !== lastSelectionBehavior.current) {
      setSelectionBehavior(selectionBehaviorProp);
      lastSelectionBehavior.current = selectionBehaviorProp;
    }
  }, [
    selectionBehaviorProp
  ]);
  return {
    selectionMode,
    disallowEmptySelection,
    selectionBehavior,
    setSelectionBehavior,
    get isFocused() {
      return isFocusedRef.current;
    },
    setFocused(f) {
      isFocusedRef.current = f;
      setFocused(f);
    },
    get focusedKey() {
      return focusedKeyRef.current;
    },
    get childFocusStrategy() {
      return childFocusStrategyRef.current;
    },
    setFocusedKey(k, childFocusStrategy = "first") {
      focusedKeyRef.current = k;
      childFocusStrategyRef.current = childFocusStrategy;
      setFocusedKey(k);
    },
    selectedKeys,
    setSelectedKeys(keys) {
      if (allowDuplicateSelectionEvents || !$7af3f5b51489e0b5$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
    },
    disabledKeys: disabledKeysProp,
    disabledBehavior
  };
}
function $7af3f5b51489e0b5$var$convertSelection(selection, defaultValue) {
  if (!selection) return defaultValue;
  return selection === "all" ? "all" : new $e40ea825a81a3709$export$52baac22726c72bf(selection);
}
function $c5a24bc478652b5f$export$1005530eda016c13$1(node, collection) {
  if (typeof collection.getChildren === "function") return collection.getChildren(node.key);
  return node.childNodes;
}
function $c5a24bc478652b5f$export$fbdeaa6a76694f71$1(iterable) {
  return $c5a24bc478652b5f$export$5f3398f8733f90e2$1(iterable);
}
function $c5a24bc478652b5f$export$5f3398f8733f90e2$1(iterable, index) {
  for (let item of iterable) {
    return item;
  }
}
function $c5a24bc478652b5f$export$8c434b3a7a4dad6(collection, a, b) {
  if (a.parentKey === b.parentKey) return a.index - b.index;
  let aAncestors = [
    ...$c5a24bc478652b5f$var$getAncestors(collection, a),
    a
  ];
  let bAncestors = [
    ...$c5a24bc478652b5f$var$getAncestors(collection, b),
    b
  ];
  let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a2, i) => a2 !== bAncestors[i]);
  if (firstNonMatchingAncestor !== -1) {
    a = aAncestors[firstNonMatchingAncestor];
    b = bAncestors[firstNonMatchingAncestor];
    return a.index - b.index;
  }
  if (aAncestors.findIndex((node) => node === b) >= 0) return 1;
  else if (bAncestors.findIndex((node) => node === a) >= 0) return -1;
  return -1;
}
function $c5a24bc478652b5f$var$getAncestors(collection, node) {
  let parents = [];
  while ((node === null || node === void 0 ? void 0 : node.parentKey) != null) {
    node = collection.getItem(node.parentKey);
    parents.unshift(node);
  }
  return parents;
}
class $d496c0a20b6e58ec$export$6c8a5aaad13c9852 {
  /**
  * The type of selection that is allowed in the collection.
  */
  get selectionMode() {
    return this.state.selectionMode;
  }
  /**
  * Whether the collection allows empty selection.
  */
  get disallowEmptySelection() {
    return this.state.disallowEmptySelection;
  }
  /**
  * The selection behavior for the collection.
  */
  get selectionBehavior() {
    return this.state.selectionBehavior;
  }
  /**
  * Sets the selection behavior for the collection.
  */
  setSelectionBehavior(selectionBehavior) {
    this.state.setSelectionBehavior(selectionBehavior);
  }
  /**
  * Whether the collection is currently focused.
  */
  get isFocused() {
    return this.state.isFocused;
  }
  /**
  * Sets whether the collection is focused.
  */
  setFocused(isFocused) {
    this.state.setFocused(isFocused);
  }
  /**
  * The current focused key in the collection.
  */
  get focusedKey() {
    return this.state.focusedKey;
  }
  /** Whether the first or last child of the focused key should receive focus. */
  get childFocusStrategy() {
    return this.state.childFocusStrategy;
  }
  /**
  * Sets the focused key.
  */
  setFocusedKey(key, childFocusStrategy) {
    if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
  }
  /**
  * The currently selected keys in the collection.
  */
  get selectedKeys() {
    return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
  }
  /**
  * The raw selection value for the collection.
  * Either 'all' for select all, or a set of keys.
  */
  get rawSelection() {
    return this.state.selectedKeys;
  }
  /**
  * Returns whether a key is selected.
  */
  isSelected(key) {
    if (this.state.selectionMode === "none") return false;
    key = this.getKey(key);
    return this.state.selectedKeys === "all" ? this.canSelectItem(key) : this.state.selectedKeys.has(key);
  }
  /**
  * Whether the selection is empty.
  */
  get isEmpty() {
    return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
  }
  /**
  * Whether all items in the collection are selected.
  */
  get isSelectAll() {
    if (this.isEmpty) return false;
    if (this.state.selectedKeys === "all") return true;
    if (this._isSelectAll != null) return this._isSelectAll;
    let allKeys = this.getSelectAllKeys();
    let selectedKeys = this.state.selectedKeys;
    this._isSelectAll = allKeys.every((k) => selectedKeys.has(k));
    return this._isSelectAll;
  }
  get firstSelectedKey() {
    let first = null;
    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!first || item && $c5a24bc478652b5f$export$8c434b3a7a4dad6(this.collection, item, first) < 0) first = item;
    }
    return first === null || first === void 0 ? void 0 : first.key;
  }
  get lastSelectedKey() {
    let last = null;
    for (let key of this.state.selectedKeys) {
      let item = this.collection.getItem(key);
      if (!last || item && $c5a24bc478652b5f$export$8c434b3a7a4dad6(this.collection, item, last) > 0) last = item;
    }
    return last === null || last === void 0 ? void 0 : last.key;
  }
  get disabledKeys() {
    return this.state.disabledKeys;
  }
  get disabledBehavior() {
    return this.state.disabledBehavior;
  }
  /**
  * Extends the selection to the given key.
  */
  extendSelection(toKey) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      this.replaceSelection(toKey);
      return;
    }
    toKey = this.getKey(toKey);
    let selection;
    if (this.state.selectedKeys === "all") selection = new $e40ea825a81a3709$export$52baac22726c72bf([
      toKey
    ], toKey, toKey);
    else {
      let selectedKeys = this.state.selectedKeys;
      let anchorKey = selectedKeys.anchorKey || toKey;
      selection = new $e40ea825a81a3709$export$52baac22726c72bf(selectedKeys, anchorKey, toKey);
      for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey || toKey)) selection.delete(key);
      for (let key of this.getKeyRange(toKey, anchorKey)) if (this.canSelectItem(key)) selection.add(key);
    }
    this.state.setSelectedKeys(selection);
  }
  getKeyRange(from, to) {
    let fromItem = this.collection.getItem(from);
    let toItem = this.collection.getItem(to);
    if (fromItem && toItem) {
      if ($c5a24bc478652b5f$export$8c434b3a7a4dad6(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
      return this.getKeyRangeInternal(to, from);
    }
    return [];
  }
  getKeyRangeInternal(from, to) {
    let keys = [];
    let key = from;
    while (key) {
      let item = this.collection.getItem(key);
      if (item && item.type === "item" || item.type === "cell" && this.allowsCellSelection) keys.push(key);
      if (key === to) return keys;
      key = this.collection.getKeyAfter(key);
    }
    return [];
  }
  getKey(key) {
    let item = this.collection.getItem(key);
    if (!item)
      return key;
    if (item.type === "cell" && this.allowsCellSelection) return key;
    while (item.type !== "item" && item.parentKey != null) item = this.collection.getItem(item.parentKey);
    if (!item || item.type !== "item") return null;
    return item.key;
  }
  /**
  * Toggles whether the given key is selected.
  */
  toggleSelection(key) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single" && !this.isSelected(key)) {
      this.replaceSelection(key);
      return;
    }
    key = this.getKey(key);
    if (key == null) return;
    let keys = new $e40ea825a81a3709$export$52baac22726c72bf(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
    if (keys.has(key)) keys.delete(key);
    else if (this.canSelectItem(key)) {
      keys.add(key);
      keys.anchorKey = key;
      keys.currentKey = key;
    }
    if (this.disallowEmptySelection && keys.size === 0) return;
    this.state.setSelectedKeys(keys);
  }
  /**
  * Replaces the selection with only the given key.
  */
  replaceSelection(key) {
    if (this.selectionMode === "none") return;
    key = this.getKey(key);
    if (key == null) return;
    let selection = this.canSelectItem(key) ? new $e40ea825a81a3709$export$52baac22726c72bf([
      key
    ], key, key) : new $e40ea825a81a3709$export$52baac22726c72bf();
    this.state.setSelectedKeys(selection);
  }
  /**
  * Replaces the selection with the given keys.
  */
  setSelectedKeys(keys) {
    if (this.selectionMode === "none") return;
    let selection = new $e40ea825a81a3709$export$52baac22726c72bf();
    for (let key of keys) {
      key = this.getKey(key);
      if (key != null) {
        selection.add(key);
        if (this.selectionMode === "single") break;
      }
    }
    this.state.setSelectedKeys(selection);
  }
  getSelectAllKeys() {
    let keys = [];
    let addKeys = (key) => {
      while (key != null) {
        if (this.canSelectItem(key)) {
          let item = this.collection.getItem(key);
          if (item.type === "item") keys.push(key);
          if (item.hasChildNodes && (this.allowsCellSelection || item.type !== "item")) addKeys($c5a24bc478652b5f$export$fbdeaa6a76694f71$1($c5a24bc478652b5f$export$1005530eda016c13$1(item, this.collection)).key);
        }
        key = this.collection.getKeyAfter(key);
      }
    };
    addKeys(this.collection.getFirstKey());
    return keys;
  }
  /**
  * Selects all items in the collection.
  */
  selectAll() {
    if (!this.isSelectAll && this.selectionMode === "multiple") this.state.setSelectedKeys("all");
  }
  /**
  * Removes all keys from the selection.
  */
  clearSelection() {
    if (!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new $e40ea825a81a3709$export$52baac22726c72bf());
  }
  /**
  * Toggles between select all and an empty selection.
  */
  toggleSelectAll() {
    if (this.isSelectAll) this.clearSelection();
    else this.selectAll();
  }
  select(key, e) {
    if (this.selectionMode === "none") return;
    if (this.selectionMode === "single") {
      if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
      else this.replaceSelection(key);
    } else if (this.selectionBehavior === "toggle" || e && (e.pointerType === "touch" || e.pointerType === "virtual"))
      this.toggleSelection(key);
    else this.replaceSelection(key);
  }
  /**
  * Returns whether the current selection is equal to the given selection.
  */
  isSelectionEqual(selection) {
    if (selection === this.state.selectedKeys) return true;
    let selectedKeys = this.selectedKeys;
    if (selection.size !== selectedKeys.size) return false;
    for (let key of selection) {
      if (!selectedKeys.has(key)) return false;
    }
    for (let key of selectedKeys) {
      if (!selection.has(key)) return false;
    }
    return true;
  }
  canSelectItem(key) {
    var _item_props;
    if (this.state.selectionMode === "none" || this.state.disabledKeys.has(key)) return false;
    let item = this.collection.getItem(key);
    if (!item || (item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.isDisabled) || item.type === "cell" && !this.allowsCellSelection) return false;
    return true;
  }
  isDisabled(key) {
    var _this_collection_getItem_props, _this_collection_getItem;
    return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(key) || !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.isDisabled));
  }
  isLink(key) {
    var _this_collection_getItem_props, _this_collection_getItem;
    return !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.href);
  }
  getItemProps(key) {
    var _this_collection_getItem;
    return (_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : _this_collection_getItem.props;
  }
  constructor(collection, state, options) {
    this.collection = collection;
    this.state = state;
    var _options_allowsCellSelection;
    this.allowsCellSelection = (_options_allowsCellSelection = options === null || options === void 0 ? void 0 : options.allowsCellSelection) !== null && _options_allowsCellSelection !== void 0 ? _options_allowsCellSelection : false;
    this._isSelectAll = null;
  }
}
class $eb2240fc39a57fa5$export$bf788dd355e3a401 {
  build(props, context) {
    this.context = context;
    return $eb2240fc39a57fa5$var$iterable(() => this.iterateCollection(props));
  }
  *iterateCollection(props) {
    let { children, items } = props;
    if (typeof children === "function") {
      if (!items) throw new Error("props.children was a function but props.items is missing");
      for (let item of props.items) yield* this.getFullNode({
        value: item
      }, {
        renderer: children
      });
    } else {
      let items2 = [];
      React.Children.forEach(children, (child) => {
        items2.push(child);
      });
      let index = 0;
      for (let item of items2) {
        let nodes = this.getFullNode({
          element: item,
          index
        }, {});
        for (let node of nodes) {
          index++;
          yield node;
        }
      }
    }
  }
  getKey(item, partialNode, state, parentKey) {
    if (item.key != null) return item.key;
    if (partialNode.type === "cell" && partialNode.key != null) return `${parentKey}${partialNode.key}`;
    let v = partialNode.value;
    if (v != null) {
      var _v_key;
      let key = (_v_key = v.key) !== null && _v_key !== void 0 ? _v_key : v.id;
      if (key == null) throw new Error("No key found for item");
      return key;
    }
    return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
  }
  getChildState(state, partialNode) {
    return {
      renderer: partialNode.renderer || state.renderer
    };
  }
  *getFullNode(partialNode, state, parentKey, parentNode) {
    let element = partialNode.element;
    if (!element && partialNode.value && state && state.renderer) {
      let cached = this.cache.get(partialNode.value);
      if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
        cached.index = partialNode.index;
        cached.parentKey = parentNode ? parentNode.key : null;
        yield cached;
        return;
      }
      element = state.renderer(partialNode.value);
    }
    if (React.isValidElement(element)) {
      let type = element.type;
      if (typeof type !== "function" && typeof type.getCollectionNode !== "function") {
        let name = typeof element.type === "function" ? element.type.name : element.type;
        throw new Error(`Unknown element <${name}> in collection.`);
      }
      let childNodes = type.getCollectionNode(element.props, this.context);
      let index = partialNode.index;
      let result = childNodes.next();
      while (!result.done && result.value) {
        let childNode = result.value;
        partialNode.index = index;
        let nodeKey = childNode.key;
        if (!nodeKey) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
        let nodes = this.getFullNode({
          ...childNode,
          key: nodeKey,
          index,
          wrapper: $eb2240fc39a57fa5$var$compose(partialNode.wrapper, childNode.wrapper)
        }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
        let children = [
          ...nodes
        ];
        for (let node2 of children) {
          node2.value = childNode.value || partialNode.value;
          if (node2.value) this.cache.set(node2.value, node2);
          if (partialNode.type && node2.type !== partialNode.type) throw new Error(`Unsupported type <${$eb2240fc39a57fa5$var$capitalize(node2.type)}> in <${$eb2240fc39a57fa5$var$capitalize(parentNode.type)}>. Only <${$eb2240fc39a57fa5$var$capitalize(partialNode.type)}> is supported.`);
          index++;
          yield node2;
        }
        result = childNodes.next(children);
      }
      return;
    }
    if (partialNode.key == null) return;
    let builder = this;
    let node = {
      type: partialNode.type,
      props: partialNode.props,
      key: partialNode.key,
      parentKey: parentNode ? parentNode.key : null,
      value: partialNode.value,
      level: parentNode ? parentNode.level + 1 : 0,
      index: partialNode.index,
      rendered: partialNode.rendered,
      textValue: partialNode.textValue,
      "aria-label": partialNode["aria-label"],
      wrapper: partialNode.wrapper,
      shouldInvalidate: partialNode.shouldInvalidate,
      hasChildNodes: partialNode.hasChildNodes,
      childNodes: $eb2240fc39a57fa5$var$iterable(function* () {
        if (!partialNode.hasChildNodes) return;
        let index = 0;
        for (let child of partialNode.childNodes()) {
          if (child.key != null)
            child.key = `${node.key}${child.key}`;
          child.index = index;
          let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);
          for (let node2 of nodes) {
            index++;
            yield node2;
          }
        }
      })
    };
    yield node;
  }
  constructor() {
    this.cache = /* @__PURE__ */ new WeakMap();
  }
}
function $eb2240fc39a57fa5$var$iterable(iterator) {
  let cache = [];
  let iterable = null;
  return {
    *[Symbol.iterator]() {
      for (let item of cache) yield item;
      if (!iterable) iterable = iterator();
      for (let item of iterable) {
        cache.push(item);
        yield item;
      }
    }
  };
}
function $eb2240fc39a57fa5$var$compose(outer, inner) {
  if (outer && inner) return (element) => outer(inner(element));
  if (outer) return outer;
  if (inner) return inner;
}
function $eb2240fc39a57fa5$var$capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function $7613b1592d41b092$export$6cd28814d92fa9c9(props, factory, context) {
  let builder = reactExports.useMemo(() => new $eb2240fc39a57fa5$export$bf788dd355e3a401(), []);
  let { children, items, collection } = props;
  let result = reactExports.useMemo(() => {
    if (collection) return collection;
    let nodes = builder.build({
      children,
      items
    }, context);
    return factory(nodes);
  }, [
    builder,
    children,
    items,
    collection,
    context,
    factory
  ]);
  return result;
}
function $c5a24bc478652b5f$export$1005530eda016c13(node, collection) {
  if (typeof collection.getChildren === "function") return collection.getChildren(node.key);
  return node.childNodes;
}
function $c5a24bc478652b5f$export$fbdeaa6a76694f71(iterable) {
  return $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, 0);
}
function $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, index) {
  if (index < 0) return void 0;
  let i = 0;
  for (let item of iterable) {
    if (i === index) return item;
    i++;
  }
}
function $c5a24bc478652b5f$export$7475b2c64539e4cf(iterable) {
  let lastItem = void 0;
  for (let value of iterable) lastItem = value;
  return lastItem;
}
export {
  $fca6afa0e843324b$export$f12b703ca79dfbb1 as $,
  $ef06256079686ba0$export$f8aeda7b10753fa1 as a,
  $5c3e21d68f1c4674$export$439d29a4e110a164 as b,
  $325a3faab7a68acd$export$a16aca283550c30d as c,
  $c5a24bc478652b5f$export$1005530eda016c13 as d,
  $7af3f5b51489e0b5$export$253fe78d46329472 as e,
  $7613b1592d41b092$export$6cd28814d92fa9c9 as f,
  $d496c0a20b6e58ec$export$6c8a5aaad13c9852 as g,
  $6db58dc88e78b024$export$2f817fcdc4b89ae0 as h,
  $5b160d28a433310d$export$c17fa47878dc55b6 as i,
  $c5a24bc478652b5f$export$fbdeaa6a76694f71 as j,
  $c5a24bc478652b5f$export$5f3398f8733f90e2 as k,
  $c5a24bc478652b5f$export$7475b2c64539e4cf as l
};
