var define_process_env_default = {};
var warningStack = {};
function warn(message, component, ...args) {
  var _a;
  const tag = component ? ` [${component}]` : " ";
  const log = `[Next UI]${tag}: ${message}`;
  if (typeof console === "undefined")
    return;
  if (warningStack[log])
    return;
  warningStack[log] = true;
  if (((_a = process == null ? void 0 : define_process_env_default) == null ? void 0 : _a.NODE_ENV) !== "production") {
    return console.warn(log, args);
  }
}
export {
  warn as w
};
