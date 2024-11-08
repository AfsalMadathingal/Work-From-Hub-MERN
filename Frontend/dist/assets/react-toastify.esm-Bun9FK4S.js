import { b as reactExports } from "./index-CRCdbRYf.js";
const c = (e) => "number" == typeof e && !isNaN(e), d = (e) => "string" == typeof e, u = (e) => "function" == typeof e, m = (e) => reactExports.isValidElement(e) || d(e) || u(e) || c(e);
const v = /* @__PURE__ */ new Map();
let h = [];
const T = /* @__PURE__ */ new Set(), b = () => v.size > 0;
function I(e, t) {
  var n;
  if (t) return !(null == (n = v.get(t)) || !n.isToastActive(e));
  let o = false;
  return v.forEach((t2) => {
    t2.isToastActive(e) && (o = true);
  }), o;
}
function _(e, t) {
  m(e) && (b() || h.push({ content: e, options: t }), v.forEach((n) => {
    n.buildToast(e, t);
  }));
}
function C(e, t) {
  v.forEach((n) => {
    null != t && null != t && t.containerId ? (null == t ? void 0 : t.containerId) === n.id && n.toggle(e, null == t ? void 0 : t.id) : n.toggle(e, null == t ? void 0 : t.id);
  });
}
let w = 1;
const k = () => "" + w++;
function P(e) {
  return e && (d(e.toastId) || c(e.toastId)) ? e.toastId : k();
}
function M(e, t) {
  return _(e, t), t.toastId;
}
function x(e, t) {
  return { ...t, type: t && t.type || e, toastId: P(t) };
}
function A(e) {
  return (t, n) => M(t, x(e, n));
}
function B(e, t) {
  return M(e, x("default", t));
}
B.loading = (e, t) => M(e, x("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...t })), B.promise = function(e, t, n) {
  let o, { pending: s, error: a, success: r } = t;
  s && (o = d(s) ? B.loading(s, n) : B.loading(s.render, { ...n, ...s }));
  const i = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l = (e2, t2, s2) => {
    if (null == t2) return void B.dismiss(o);
    const a2 = { type: e2, ...i, ...n, data: s2 }, r2 = d(t2) ? { render: t2 } : t2;
    return o ? B.update(o, { ...a2, ...r2 }) : B(r2.render, { ...a2, ...r2 }), s2;
  }, c2 = u(e) ? e() : e;
  return c2.then((e2) => l("success", r, e2)).catch((e2) => l("error", a, e2)), c2;
}, B.success = A("success"), B.info = A("info"), B.error = A("error"), B.warning = A("warning"), B.warn = B.warning, B.dark = (e, t) => M(e, x("default", { theme: "dark", ...t })), B.dismiss = function(e) {
  !function(e2) {
    var t;
    if (b()) {
      if (null == e2 || d(t = e2) || c(t)) v.forEach((t2) => {
        t2.removeToast(e2);
      });
      else if (e2 && ("containerId" in e2 || "id" in e2)) {
        const t2 = v.get(e2.containerId);
        t2 ? t2.removeToast(e2.id) : v.forEach((t3) => {
          t3.removeToast(e2.id);
        });
      }
    } else h = h.filter((t2) => null != e2 && t2.options.toastId !== e2);
  }(e);
}, B.clearWaitingQueue = function(e) {
  void 0 === e && (e = {}), v.forEach((t) => {
    !t.props.limit || e.containerId && t.id !== e.containerId || t.clearQueue();
  });
}, B.isActive = I, B.update = function(e, t) {
  void 0 === t && (t = {});
  const n = ((e2, t2) => {
    var n2;
    let { containerId: o } = t2;
    return null == (n2 = v.get(o || 1)) ? void 0 : n2.toasts.get(e2);
  })(e, t);
  if (n) {
    const { props: o, content: s } = n, a = { delay: 100, ...o, ...t, toastId: t.toastId || e, updateId: k() };
    a.toastId !== e && (a.staleId = e);
    const r = a.render || s;
    delete a.render, M(r, a);
  }
}, B.done = (e) => {
  B.update(e, { progress: 1 });
}, B.onChange = function(e) {
  return T.add(e), () => {
    T.delete(e);
  };
}, B.play = (e) => C(true, e), B.pause = (e) => C(false, e);
export {
  B
};
