import { c as createLucideIcon, aN as GenIcon, r as reactExports, j as jsxRuntimeExports, aO as ThemeToggle, L as Link, F as Footer } from "./index-CTy2qHgP.js";
import { M as MdClose } from "./index-Dn0LtB1c.js";
import "tslib";
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
function GiHamburgerMenu(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" }, "child": [] }] })(props);
}
const Navbar = () => {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 bg-white/70 backdrop-blur-sm py-4 shadow-md px-4 md:px-12 z-50 dark:bg-[#1A202C]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "h-14", src: "/logo.png", alt: "Company Logo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex space-x-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white",
            children: "Work Spaces"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white",
            children: "Pricing"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white",
            children: "About Us"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white",
            children: "Login/Register"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex space-x-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-orange-500 text-white px-4 py-2 rounded dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900", children: "Book a Seat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "border border-orange-500 text-orange-500 px-4 py-2 rounded dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600", children: "Call Us" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "md:hidden p-2",
          onClick: toggleMenu,
          "aria-label": isOpen ? "Close menu" : "Open menu",
          children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(MdClose, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(GiHamburgerMenu, { size: 24 })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `md:hidden bg-white shadow-lg mt-2 rounded-md overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} dark:bg-[#2D2D2D]`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col space-y-4 px-4 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white",
              children: "Work Spaces"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white",
              children: "Pricing"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white",
              children: "About Us"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white",
              children: "Login/Register"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-orange-500 text-white px-4 py-2 rounded dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900", children: "Book a Seat" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "border border-orange-500 text-orange-500 px-4 py-2 rounded dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600", children: "Call Us" })
          ] })
        ] })
      }
    )
  ] });
};
const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const faqs = [
    {
      question: "What types of workspaces are available for booking?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "How can I book a workspace?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "Can I see the availability of workspaces in real-time?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "What payment methods are accepted?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "Is there a membership program?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "Are there any discounts for long-term bookings?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    }
  ];
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex flex-col justify-center items-center container mx-auto mt-12 dark:bg-gray-900 transition-colors duration-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-gray-900 dark:text-white text-center", children: "Frequently Asked Questions" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 w-full md:w-2/3 px-4", children: faqs.map((faq, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mb-4 rounded-lg overflow-hidden transition-all duration-300 ease-in-out\r\n                     bg-white dark:bg-gray-800 shadow-md hover:shadow-lg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => toggleAccordion(index),
              className: "w-full text-left px-6 py-4 flex items-center justify-between\r\n                       hover:bg-gray-50 dark:hover:bg-gray-700\r\n                       transition-all duration-200",
              "aria-controls": `panel${index + 1}-content`,
              id: `panel${index + 1}-header`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold text-gray-900 dark:text-white", children: faq.question }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ChevronDown,
                  {
                    className: `w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform duration-200
                         ${openIndex === index ? "rotate-180" : "rotate-0"}`
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `overflow-hidden transition-all duration-200 ease-in-out
                       ${openIndex === index ? "max-h-64" : "max-h-0"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-4 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed", children: faq.answer }) })
            }
          )
        ]
      },
      index
    )) })
  ] });
};
const LandingPage = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-grow bg-beige dark:bg-gray-900 dark:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8 md:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white", children: "Tired of working alone?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 mt-4 md:mt-6 text-base lg:text-lg", children: "Join our vibrant workspaces to connect with like-minded professionals and spark your social life!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all", children: "Book a seat" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+91123456789", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full sm:w-auto border border-orange-500 text-orange-500 hover:bg-orange-100 px-6 py-3 rounded-lg transition-all", children: "Call Us" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "hero-1.png",
            alt: "Working alone",
            className: "w-full h-auto object-cover rounded-lg"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center", children: [
          "What Is ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-500", children: "Work From Hub?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 dark:text-gray-300 mt-4 md:mt-6 text-base lg:text-lg text-center max-w-4xl mx-auto", children: "Welcome to WorkFromHub, your ultimate solution for remote workspaces! At WorkFromHub, we understand the challenges of working from home, such as isolation, distractions, and power issues. Our platform connects remote workers with a variety of professional workspaces across the state, providing a conducive environment to boost productivity and enhance your social life. Whether you need a quiet place to focus for a few hours, a full day, or an entire month, WorkFromHub offers flexible booking options and membership plans with exclusive discounts. Join us today and transform your remote work experience into a vibrant, community-driven journey!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQAccordion, {}) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
};
export {
  LandingPage as default
};
