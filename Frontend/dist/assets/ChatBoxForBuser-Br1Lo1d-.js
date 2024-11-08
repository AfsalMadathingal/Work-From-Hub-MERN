import { b as reactExports, c as useSelector, j as jsxRuntimeExports } from "./index-CRCdbRYf.js";
import { l as lookup } from "./index-DaNQagWn.js";
import { F as FaBan } from "./index-DiJo3T71.js";
import { B } from "./react-toastify.esm-Bun9FK4S.js";
import { t as tooltip_default } from "./chunk-3ZXLDIEA-t0c3aBnz.js";
import "./iconBase-CZo89hZi.js";
import "./useOverlayTriggerState-DxxZd4vX.js";
import "./chunk-XHQUSKIE-C8hINOKQ.js";
import "./clsx-DgYk2OaC.js";
import "./useFocusable-B9R5QQmh.js";
import "./chunk-N2KXC5ZE-Blp81Z_t.js";
import "./useControlledState-zThHW1ja.js";
import "./features-animation-DXMUZmFI.js";
import "./create-visual-element-IukP1vNR.js";
import "./index-CJMRsIY3.js";
import "./chunk-RFUEKIFS-5kmiI8xu.js";
const SOCKET_URL = "http://localhost:5000";
const ChatBoxForBuser = () => {
  const [socket, setSocket] = reactExports.useState(null);
  const [message, setMessage] = reactExports.useState("");
  const [messages, setMessages] = reactExports.useState([]);
  const [isChatOpen, setIsChatOpen] = reactExports.useState(false);
  const [isChatStarted, setIsChatStarted] = reactExports.useState(false);
  const messageListRef = reactExports.useRef(null);
  const { isAuthenticated } = useSelector((state) => state.businessUser);
  const user = useSelector((state) => state.businessUser.user);
  const audioRef = reactExports.useRef(null);
  const currentUserId = user == null ? void 0 : user._id;
  const handleStartChat = () => {
    if (socket) {
      socket.off("message");
      socket.off("adminMessage");
    }
    const newSocket = lookup(SOCKET_URL);
    setSocket(newSocket);
    setIsChatStarted(true);
    newSocket.on("connect", () => {
      newSocket.emit("connectUser", {
        socketId: newSocket.id,
        id: currentUserId,
        name: user == null ? void 0 : user.fullName,
        email: user == null ? void 0 : user.email,
        phone: (user == null ? void 0 : user.phone) || ""
      });
    });
    newSocket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    newSocket.on("adminMessage", (msg) => {
      if (msg.to === currentUserId) {
        if (audioRef.current) {
          audioRef.current.play();
        }
        setMessages((prev) => [...prev, { ...msg, isAdmin: true }]);
      }
    });
    newSocket.on("connect_error", (err) => {
      console.error("Socket connection error:", err);
      B.error("Socket connection error. Please try again.");
    });
  };
  reactExports.useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);
  const sendMessage = (e) => {
    e.preventDefault();
    if (socket && message.trim() && currentUserId) {
      socket.emit("userMessage", { userId: currentUserId, message });
      setMessages((prevMessages) => [...prevMessages, { userId: currentUserId, message }]);
      setMessage("");
    } else {
      B.error("Unable to send message. User ID is undefined.");
    }
  };
  const handleEndChat = () => {
    if (socket) {
      socket.disconnect();
      setSocket(null);
      setIsChatStarted(false);
    }
  };
  reactExports.useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
    };
  }, [socket]);
  if (isAuthenticated === false) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("audio", { ref: audioRef, src: "/messgeIncoming.mp3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `fixed bottom-2 right-2 z-50 ${isChatOpen ? "w-full max-w-sm sm:max-w-md h-96" : "w-16 h-16"} 
    bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-in-out transform`,
        children: isChatOpen ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-orange-500 text-white p-2 flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Chat With Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsChatOpen(false), className: "text-sm", children: "Close" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full p-2 flex flex-col justify-between", children: !isChatStarted ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: handleStartChat,
              className: "bg-orange-500 text-white py-2 px-4 rounded-md",
              children: "Start Chat"
            }
          ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                ref: messageListRef,
                className: "overflow-y-auto space-y-2 p-2 bg-gray-50 rounded-md h-full",
                children: messages.length ? messages.map((msgObj, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex ${msgObj.userId === currentUserId ? "justify-end" : "justify-start"}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-xs p-2 rounded-md ${msgObj.isAdmin ? "bg-blue-200" : msgObj.userId === currentUserId ? "bg-orange-100" : "bg-gray-200"}`, children: msgObj.message })
                  },
                  index
                )) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-gray-500", children: "No messages yet" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: handleEndChat,
                className: "bg-blue-500 text-white mt-2 py-1 px-4 rounded-md self-end flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FaBan, {}),
                  " End Chat"
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: sendMessage, className: "mt-2 pb-12 flex", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  value: message,
                  onChange: (e) => setMessage(e.target.value),
                  placeholder: "Type a message",
                  className: "flex-grow border border-gray-300 rounded-l-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "bg-orange-500 text-white p-2 rounded-r-md", children: "Send" })
            ] })
          ] }) })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(tooltip_default, { showArrow: true, content: "Chat With Support", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-white flex items-center justify-center bg-orange-500 h-full cursor-pointer",
            onClick: () => setIsChatOpen(true),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-6 w-6",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  }
                )
              }
            )
          }
        ) })
      }
    )
  ] });
};
export {
  ChatBoxForBuser as default
};
