import { r as reactExports } from "./index-BA_d4uvr.js";
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
const $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7e3;
let $319e236875307eab$var$liveAnnouncer = null;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = "assertive", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
  if (!$319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();
  $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
class $319e236875307eab$var$LiveAnnouncer {
  createLog(ariaLive) {
    let node = document.createElement("div");
    node.setAttribute("role", "log");
    node.setAttribute("aria-live", ariaLive);
    node.setAttribute("aria-relevant", "additions");
    return node;
  }
  destroy() {
    if (!this.node) return;
    document.body.removeChild(this.node);
    this.node = null;
  }
  announce(message, assertiveness = "assertive", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!this.node) return;
    let node = document.createElement("div");
    node.textContent = message;
    if (assertiveness === "assertive") this.assertiveLog.appendChild(node);
    else this.politeLog.appendChild(node);
    if (message !== "") setTimeout(() => {
      node.remove();
    }, timeout);
  }
  clear(assertiveness) {
    if (!this.node) return;
    if (!assertiveness || assertiveness === "assertive") this.assertiveLog.innerHTML = "";
    if (!assertiveness || assertiveness === "polite") this.politeLog.innerHTML = "";
  }
  constructor() {
    this.node = document.createElement("div");
    this.node.dataset.liveAnnouncer = "true";
    Object.assign(this.node.style, {
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
    });
    this.assertiveLog = this.createLog("assertive");
    this.node.appendChild(this.assertiveLog);
    this.politeLog = this.createLog("polite");
    this.node.appendChild(this.politeLog);
    document.body.prepend(this.node);
  }
}
export {
  $4f58c5f72bcf79f7$export$496315a1608d9602 as $,
  $319e236875307eab$export$a9b970dcc4ae71a9 as a
};
