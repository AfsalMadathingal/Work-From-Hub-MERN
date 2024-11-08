import { J as Joi } from "./joi-browser.min-7gqfidDl.js";
import { p as propTypesExports, b as reactExports } from "./index-BgyoVvld.js";
const registerSchema = Joi.object({
  fullName: Joi.string().pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/).min(3).max(100).required().messages({
    "string.base": "Full name must be a text.",
    "string.pattern.base": "Full name must consist of at least two words.",
    "string.empty": "Full name is required.",
    "string.min": "Full name must be at least 3 characters long.",
    "string.max": "Full name must be less than 100 characters long.",
    "any.required": "Full name is required."
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.email": "Please enter a valid email address",
    "string.empty": "Email is required"
  }),
  password: Joi.string().min(8).pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")).required().messages({
    "string.min": "Password must be at least 8 characters long",
    "string.pattern.base": "Password must include uppercase, lowercase, number, and special character",
    "string.empty": "Password is required"
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Confirm password does not match",
    "string.empty": "Confirm password is required"
  })
});
const validate = (data) => {
  const { error } = registerSchema.validate(data, { abortEarly: false });
  if (error) {
    const formattedErrors = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0]] = detail.message;
    });
    return formattedErrors;
  }
  return null;
};
var reactCheckmark_min = { exports: {} };
(function(module, exports) {
  ((e, t) => {
    module.exports = t(propTypesExports, reactExports);
  })(window, function(r, n) {
    return i = [function(e, t) {
      e.exports = r;
    }, function(e, t) {
      e.exports = n;
    }, function(e, t, r2) {
      r2.r(t), r2.d(t, "PREDEFINED_SIZE_MAP", function() {
        return s;
      }), r2.d(t, "Checkmark", function() {
        return c;
      });
      var t = r2(1), n2 = r2.n(t), t = r2(0), t = r2.n(t);
      r2(3);
      function i2(e2) {
        return (i2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      function a2(t2, e2) {
        var r3, n3 = Object.keys(t2);
        return Object.getOwnPropertySymbols && (r3 = Object.getOwnPropertySymbols(t2), e2 && (r3 = r3.filter(function(e3) {
          return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
        })), n3.push.apply(n3, r3)), n3;
      }
      function o2(n3) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var o3 = null != arguments[e2] ? arguments[e2] : {};
          e2 % 2 ? a2(Object(o3), true).forEach(function(e3) {
            var t2, r3;
            t2 = n3, r3 = o3[e3 = e3], (e3 = ((e4) => (e4 = ((e5, t3) => {
              if ("object" != i2(e5) || !e5) return e5;
              var r4 = e5[Symbol.toPrimitive];
              if (void 0 === r4) return ("string" === t3 ? String : Number)(e5);
              if ("object" != i2(r4 = r4.call(e5, t3 || "default"))) return r4;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            })(e4, "string"), "symbol" == i2(e4) ? e4 : e4 + ""))(e3)) in t2 ? Object.defineProperty(t2, e3, { value: r3, enumerable: true, configurable: true, writable: true }) : t2[e3] = r3;
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n3, Object.getOwnPropertyDescriptors(o3)) : a2(Object(o3)).forEach(function(e3) {
            Object.defineProperty(n3, e3, Object.getOwnPropertyDescriptor(o3, e3));
          });
        }
        return n3;
      }
      var s = { small: "16px", medium: "24px", large: "52px", xLarge: "72px", xxLarge: "96px", insane: "144px" };
      function c(e2) {
        var t2 = e2.size, t2 = void 0 === t2 ? "large" : t2, e2 = e2.color, t2 = s[t2] || t2, t2 = o2({ width: t2, height: t2 }, e2 && { "--checkmark-fill-color": e2 });
        return n2.a.createElement("svg", { className: "checkmark", xmlns: "http://www.w3.org/2000/svg", style: t2, viewBox: "0 0 52 52" }, n2.a.createElement("circle", { className: "checkmark__circle", cx: "26", cy: "26", r: "25", fill: "none" }), n2.a.createElement("path", { className: "checkmark__check", fill: "none", d: "M14.1 27.2l7.1 7.2 16.7-16.8" }));
      }
      c.propTypes = { size: t.a.oneOfType([t.a.string, t.a.number]), color: t.a.string };
    }, function(e, t, r2) {
      var n2 = r2(4), o2 = ("string" == typeof n2 && (n2 = [[e.i, n2, ""]]), { hmr: true });
      o2.transform = void 0, o2.insertInto = void 0, r2(6)(n2, o2);
      n2.locals && (e.exports = n2.locals);
    }, function(e, t, r2) {
      (e.exports = r2(5)(false)).push([e.i, ":root{--checkmark-fill-color:#7ac142;--checkmark-arrow-color:#fff;--checkmark-arrow-thickness:5}.checkmark{display:block;margin-left:auto;margin-right:auto;border-radius:50%;stroke:var(--checkmark-arrow-color);stroke-width:var(--checkmark-arrow-thickness);stroke-miterlimit:10;//box-shadow:inset 0 0 0 var(--checkmark-fill-color);animation:fill .4s ease-in-out .4s forwards,scale .3s ease-in-out .9s both}.checkmark__circle{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:var(--checkmark-arrow-thickness);stroke-miterlimit:10;stroke:var(--checkmark-fill-color);fill:none;animation:stroke .6s cubic-bezier(.65,0,.45,1) forwards}.checkmark__check{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;animation:stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards}@keyframes stroke{to{stroke-dashoffset:0}}@keyframes scale{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@keyframes fill{to{box-shadow:inset 0 0 0 100vh var(--checkmark-fill-color)}}", ""]);
    }, function(e, t) {
      e.exports = function(r2) {
        var a2 = [];
        return a2.toString = function() {
          return this.map(function(e2) {
            var t2 = ((e3, t3) => {
              var r3 = e3[1] || "", n2 = e3[3];
              return n2 ? (t3 && "function" == typeof btoa ? (e3 = ((e4) => "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e4)))) + " */")(n2), t3 = n2.sources.map(function(e4) {
                return "/*# sourceURL=" + n2.sourceRoot + e4 + " */";
              }), [r3].concat(t3).concat([e3])) : [r3]).join("\n") : r3;
            })(e2, r2);
            return e2[2] ? "@media " + e2[2] + "{" + t2 + "}" : t2;
          }).join("");
        }, a2.i = function(e2, t2) {
          "string" == typeof e2 && (e2 = [[null, e2, ""]]);
          for (var r3 = {}, n2 = 0; n2 < this.length; n2++) {
            var o2 = this[n2][0];
            "number" == typeof o2 && (r3[o2] = true);
          }
          for (n2 = 0; n2 < e2.length; n2++) {
            var i2 = e2[n2];
            "number" == typeof i2[0] && r3[i2[0]] || (t2 && !i2[2] ? i2[2] = t2 : t2 && (i2[2] = "(" + i2[2] + ") and (" + t2 + ")"), a2.push(i2));
          }
        }, a2;
      };
    }, function(e, t, n2) {
      var r2, o2, i2, c = {}, f = (r2 = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return o2 = void 0 === o2 ? r2.apply(this, arguments) : o2;
      }), a2 = (i2 = {}, function(e2, t2) {
        if ("function" == typeof e2) return e2();
        if (void 0 === i2[e2]) {
          t2 = (function(e3, t3) {
            return (t3 || document).querySelector(e3);
          }).call(this, e2, t2);
          if (window.HTMLIFrameElement && t2 instanceof window.HTMLIFrameElement) try {
            t2 = t2.contentDocument.head;
          } catch (e3) {
            t2 = null;
          }
          i2[e2] = t2;
        }
        return i2[e2];
      }), s = null, l = 0, u = [], p = n2(7);
      function d(e2, t2) {
        for (var r3 = 0; r3 < e2.length; r3++) {
          var n3 = e2[r3], o3 = c[n3.id];
          if (o3) {
            o3.refs++;
            for (var i3 = 0; i3 < o3.parts.length; i3++) o3.parts[i3](n3.parts[i3]);
            for (; i3 < n3.parts.length; i3++) o3.parts.push(k(n3.parts[i3], t2));
          } else {
            for (var a3 = [], i3 = 0; i3 < n3.parts.length; i3++) a3.push(k(n3.parts[i3], t2));
            c[n3.id] = { id: n3.id, refs: 1, parts: a3 };
          }
        }
      }
      function m(e2, t2) {
        for (var r3 = [], n3 = {}, o3 = 0; o3 < e2.length; o3++) {
          var i3 = e2[o3], a3 = t2.base ? i3[0] + t2.base : i3[0], i3 = { css: i3[1], media: i3[2], sourceMap: i3[3] };
          n3[a3] ? n3[a3].parts.push(i3) : r3.push(n3[a3] = { id: a3, parts: [i3] });
        }
        return r3;
      }
      function h(e2, t2) {
        var r3 = a2(e2.insertInto);
        if (!r3) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var n3 = u[u.length - 1];
        if ("top" === e2.insertAt) n3 ? n3.nextSibling ? r3.insertBefore(t2, n3.nextSibling) : r3.appendChild(t2) : r3.insertBefore(t2, r3.firstChild), u.push(t2);
        else if ("bottom" === e2.insertAt) r3.appendChild(t2);
        else {
          if ("object" != typeof e2.insertAt || !e2.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
          n3 = a2(e2.insertAt.before, r3);
          r3.insertBefore(t2, n3);
        }
      }
      function b(e2) {
        null !== e2.parentNode && (e2.parentNode.removeChild(e2), 0 <= (e2 = u.indexOf(e2))) && u.splice(e2, 1);
      }
      function y(e2) {
        var t2, r3 = document.createElement("style");
        return void 0 === e2.attrs.type && (e2.attrs.type = "text/css"), void 0 === e2.attrs.nonce && (t2 = n2.nc) && (e2.attrs.nonce = t2), v(r3, e2.attrs), h(e2, r3), r3;
      }
      function v(t2, r3) {
        Object.keys(r3).forEach(function(e2) {
          t2.setAttribute(e2, r3[e2]);
        });
      }
      function k(t2, e2) {
        var r3, n3, o3, i3, a3;
        if (e2.transform && t2.css) {
          if (!(i3 = "function" == typeof e2.transform ? e2.transform(t2.css) : e2.transform.default(t2.css))) return function() {
          };
          t2.css = i3;
        }
        return o3 = e2.singleton ? (i3 = l++, r3 = s = s || y(e2), n3 = x.bind(null, r3, i3, false), x.bind(null, r3, i3, true)) : t2.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i3 = e2, a3 = document.createElement("link"), void 0 === i3.attrs.type && (i3.attrs.type = "text/css"), i3.attrs.rel = "stylesheet", v(a3, i3.attrs), h(i3, a3), r3 = a3, n3 = (function(e3, t3, r4) {
          var n4 = r4.css, r4 = r4.sourceMap, o4 = void 0 === t3.convertToAbsoluteUrls && r4;
          (t3.convertToAbsoluteUrls || o4) && (n4 = p(n4));
          r4 && (n4 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r4)))) + " */");
          t3 = new Blob([n4], { type: "text/css" }), o4 = e3.href;
          e3.href = URL.createObjectURL(t3), o4 && URL.revokeObjectURL(o4);
        }).bind(null, r3, e2), function() {
          b(r3), r3.href && URL.revokeObjectURL(r3.href);
        }) : (r3 = y(e2), n3 = (function(e3, t3) {
          var r4 = t3.css, t3 = t3.media;
          t3 && e3.setAttribute("media", t3);
          if (e3.styleSheet) e3.styleSheet.cssText = r4;
          else {
            for (; e3.firstChild; ) e3.removeChild(e3.firstChild);
            e3.appendChild(document.createTextNode(r4));
          }
        }).bind(null, r3), function() {
          b(r3);
        }), n3(t2), function(e3) {
          e3 ? e3.css === t2.css && e3.media === t2.media && e3.sourceMap === t2.sourceMap || n3(t2 = e3) : o3();
        };
      }
      e.exports = function(e2, a3) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (a3 = a3 || {}).attrs = "object" == typeof a3.attrs ? a3.attrs : {}, a3.singleton || "boolean" == typeof a3.singleton || (a3.singleton = f()), a3.insertInto || (a3.insertInto = "head"), a3.insertAt || (a3.insertAt = "bottom");
        var s2 = m(e2, a3);
        return d(s2, a3), function(e3) {
          for (var t2 = [], r3 = 0; r3 < s2.length; r3++) {
            var n3 = s2[r3];
            (o3 = c[n3.id]).refs--, t2.push(o3);
          }
          e3 && d(m(e3, a3), a3);
          for (var o3, r3 = 0; r3 < t2.length; r3++) if (0 === (o3 = t2[r3]).refs) {
            for (var i3 = 0; i3 < o3.parts.length; i3++) o3.parts[i3]();
            delete c[o3.id];
          }
        };
      };
      g = [];
      var g, w = function(e2, t2) {
        return g[e2] = t2, g.filter(Boolean).join("\n");
      };
      function x(e2, t2, r3, n3) {
        var r3 = r3 ? "" : n3.css;
        e2.styleSheet ? e2.styleSheet.cssText = w(t2, r3) : (n3 = document.createTextNode(r3), (r3 = e2.childNodes)[t2] && e2.removeChild(r3[t2]), r3.length ? e2.insertBefore(n3, r3[t2]) : e2.appendChild(n3));
      }
    }, function(e, t) {
      e.exports = function(e2) {
        var r2, n2, t2 = "undefined" != typeof window && window.location;
        if (t2) return e2 && "string" == typeof e2 ? (r2 = t2.protocol + "//" + t2.host, n2 = r2 + t2.pathname.replace(/\/[^\/]*$/, "/"), e2.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e3, t3) {
          t3 = t3.trim().replace(/^"(.*)"$/, function(e4, t4) {
            return t4;
          }).replace(/^'(.*)'$/, function(e4, t4) {
            return t4;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(t3) ? e3 : (e3 = 0 === t3.indexOf("//") ? t3 : 0 === t3.indexOf("/") ? r2 + t3 : n2 + t3.replace(/^\.\//, ""), "url(" + JSON.stringify(e3) + ")");
        })) : e2;
        throw new Error("fixUrls requires window.location");
      };
    }], a = {}, o.m = i, o.c = a, o.d = function(e, t, r2) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: r2 });
    }, o.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
    }, o.t = function(t, e) {
      if (1 & e && (t = o(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r2 = /* @__PURE__ */ Object.create(null);
      if (o.r(r2), Object.defineProperty(r2, "default", { enumerable: true, value: t }), 2 & e && "string" != typeof t) for (var n2 in t) o.d(r2, n2, (function(e2) {
        return t[e2];
      }).bind(null, n2));
      return r2;
    }, o.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default;
      } : function() {
        return e;
      };
      return o.d(t, "a", t), t;
    }, o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, o.p = "", o(o.s = 2);
    function o(e) {
      var t;
      return (a[e] || (t = a[e] = { i: e, l: false, exports: {} }, i[e].call(t.exports, t, t.exports, o), t.l = true, t)).exports;
    }
    var i, a;
  });
})(reactCheckmark_min);
var reactCheckmark_minExports = reactCheckmark_min.exports;
export {
  reactCheckmark_minExports as r,
  validate as v
};
