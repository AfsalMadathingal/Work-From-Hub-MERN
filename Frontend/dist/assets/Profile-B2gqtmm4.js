import { b as reactExports, c as useSelector, j as jsxRuntimeExports, a as useDispatch, l as setLoading, y as setError, F as n, z as setUser } from "./index-CRCdbRYf.js";
import { H as Header } from "./Header-DjG3epF5.js";
import { F as Footer } from "./Footer-C6GpN6k1.js";
import { P as ProfileSidebar } from "./ProfileSidebar-C0LDz-I9.js";
import { v as editUserData } from "./UserRouter-k4GHkO3b.js";
import { b as validateEditing } from "./userValidator-Y1z3hoIo.js";
import { R as ReactLoading } from "./colors-BHzic30Z.js";
import { A as AnimatedPage } from "./Animation-Cos3fwbw.js";
import { c as createLucideIcon } from "./createLucideIcon-I0cbKwv6.js";
import "./chunk-N2KXC5ZE-Blp81Z_t.js";
import "./chunk-XHQUSKIE-C8hINOKQ.js";
import "./clsx-DgYk2OaC.js";
import "./chunk-3YEK3JGC-cX8-fyRH.js";
import "./getChildNodes-C8Y8vqTe.js";
import "./useOverlayTriggerState-DxxZd4vX.js";
import "./useFocusable-B9R5QQmh.js";
import "./useControlledState-zThHW1ja.js";
import "./tslib.es6-hzme6y_e.js";
import "./features-animation-DXMUZmFI.js";
import "./create-visual-element-IukP1vNR.js";
import "./useFocusRing-6DVXckHy.js";
import "./chunk-DBLREEYE-FUIzjYHW.js";
import "./chunk-MNNRULGA-DyzUL4cr.js";
import "./index-CJMRsIY3.js";
import "./chunk-QXREVWCS-c8bsRa8m.js";
import "./index-DLS5rOVa.js";
import "./index-DiJo3T71.js";
import "./iconBase-CZo89hZi.js";
import "./react-toastify.esm-Bun9FK4S.js";
import "./square-pen-DuusKohF.js";
import "./index-Bxisd2S8.js";
import "./alert-cjddj-FJ.js";
import "./joi-browser.min-De1ehRHH.js";
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pencil = createLucideIcon("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
const ProfileEdit = ({
  isOpen,
  user,
  onConfirm,
  onCancel
}) => {
  const [isVisible, setIsVisible] = reactExports.useState(isOpen);
  const [showDialog, setShowDialog] = reactExports.useState(isOpen);
  const [firstName, setFirstName] = reactExports.useState(user.fullName.split(" ")[0]);
  const [lastName, setLastName] = reactExports.useState(user.fullName.split(" ")[1]);
  const [date_of_birth, setdate_of_birth] = reactExports.useState(user.date_of_birth);
  const [pin_code, setpin_code] = reactExports.useState(user.pin_code);
  const [gender, setGender] = reactExports.useState(user.gender);
  const [phone, setPhone] = reactExports.useState(user.phone);
  const [state, setState] = reactExports.useState(user.state);
  const [city, setCity] = reactExports.useState(user.city);
  const { loading } = useSelector((state2) => state2.user);
  const error = useSelector((state2) => state2.user.error);
  reactExports.useEffect(() => {
    if (isOpen) {
      setShowDialog(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setShowDialog(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  if (!showDialog) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `bg-white rounded-lg shadow-lg max-w-lg w-full p-6 transform transition-all duration-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-gray-800", children: "Edit Profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    className: "flex-grow p-2 border border-gray-300 rounded-lg",
                    placeholder: "First Name",
                    value: firstName,
                    onChange: (e) => setFirstName(e.target.value)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    className: "flex-grow p-2 border border-gray-300 rounded-lg",
                    placeholder: "Last Name",
                    value: lastName,
                    onChange: (e) => setLastName(e.target.value)
                  }
                ),
                (error == null ? void 0 : error.fullName) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 p-0 m-0 ", children: error.fullName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    className: "p-2 border border-gray-300 rounded-lg w-full",
                    placeholder: "Phone Number",
                    value: phone == null ? void 0 : phone.toString(),
                    onChange: (e) => setPhone(e.target.value)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "date",
                    className: "p-2 border border-gray-300 rounded-lg w-full",
                    placeholder: "Date of Birth",
                    value: date_of_birth == null ? void 0 : date_of_birth.slice(0, 10),
                    onChange: (e) => setdate_of_birth(e.target.value)
                  }
                )
              ] }),
              (error == null ? void 0 : error.date_of_birth) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 p-0 m-0 ", children: error.date_of_birth }),
              (error == null ? void 0 : error.phone) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 p-0 m-0 ", children: error.phone }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "number",
                    className: "p-2 border border-gray-300 rounded-lg w-full",
                    placeholder: "pin_code",
                    value: pin_code,
                    onChange: (e) => setpin_code(e.target.value)
                  }
                ),
                (error == null ? void 0 : error.pin_code) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 p-0 m-0 ", children: error.pin_code.split(`"`).join("") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    className: "p-2 border border-gray-300 rounded-lg w-full",
                    placeholder: "State",
                    value: state,
                    onChange: (e) => setState(e.target.value)
                  }
                ),
                (error == null ? void 0 : error.state) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 p-0 m-0 ", children: error.state })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex space-x-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    type: "text",
                    className: "p-2 border border-gray-300 rounded-lg w-full",
                    placeholder: "City",
                    value: city,
                    onChange: (e) => setCity(e.target.value)
                  }
                ),
                (error == null ? void 0 : error.city) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 p-0 m-0 ", children: error.city }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "p-2 border border-gray-300 rounded-lg w-full",
                    value: gender,
                    onChange: (e) => setGender(e.target.value),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, hidden: true, children: "Gender" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Male", children: "Male" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Female", children: "Female" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Others", children: "Others" })
                    ]
                  }
                )
              ] }),
              (error == null ? void 0 : error.gender) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500 p-0 m-0 ", children: error.gender.split(`"`).join("") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end space-x-4 mt-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: onCancel,
                  className: "px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition ease-in-out",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => onConfirm({
                    fullName: `${firstName} ${lastName}`,
                    phone,
                    date_of_birth,
                    pin_code,
                    state,
                    city,
                    gender
                  }),
                  disabled: loading,
                  className: "px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ease-in-out",
                  children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ReactLoading,
                    {
                      type: "spin",
                      color: "white",
                      height: 20,
                      width: 20
                    }
                  ) : "Update"
                }
              )
            ] })
          ]
        }
      ) })
    }
  );
};
const ProfileDetails = () => {
  const user = useSelector((state) => state.user.user);
  const [isEdit, setIsEdit] = reactExports.useState(false);
  const dispatch = useDispatch();
  const handleEdit = async (userForEdit) => {
    dispatch(setLoading(true));
    const validationError = validateEditing(userForEdit);
    if (validationError) {
      dispatch(setLoading(false));
      dispatch(setError(validationError));
      return null;
    }
    const userWithId = { ...userForEdit, id: user == null ? void 0 : user._id };
    const response = await editUserData(userWithId);
    if ((response == null ? void 0 : response.status) === 409) {
      dispatch(setLoading(false));
      n.error(response.data.message);
      return null;
    }
    if ((response == null ? void 0 : response.status) === 200) {
      dispatch(setLoading(false));
      dispatch(setUser(response.data.data));
      setIsEdit(false);
      n.success("Profile Updated Successfully");
    } else {
      dispatch(setLoading(false));
      n.error("Something went wrong");
    }
    return null;
  };
  const ProfileField = ({
    label,
    value,
    onClick
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group py-4 px-4 -mx-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-600 dark:text-gray-300 tracking-wide", children: label }),
    value ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-800 dark:text-gray-100", children: label === "BIRTHDAY" && value ? value.slice(0, 10) : value }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick,
        className: "inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Add" })
        ]
      }
    )
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    isEdit && user && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProfileEdit,
      {
        isOpen: isEdit,
        user,
        onConfirm: handleEdit,
        onCancel: () => setIsEdit(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Basic info, click +add to add your details" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => setIsEdit(true),
            className: "inline-flex items-center px-4 py-2 rounded-lg bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors duration-200",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "w-4 h-4 mr-2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Edit Profile" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "divide-y divide-gray-200 dark:divide-gray-700/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProfileField,
          {
            label: "NAME",
            value: user == null ? void 0 : user.fullName,
            onClick: () => setIsEdit(true)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProfileEdit,
          {
            isOpen: isEdit,
            user,
            onConfirm: handleEdit,
            onCancel: () => setIsEdit(false)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProfileField,
          {
            label: "GENDER",
            value: user == null ? void 0 : user.gender,
            onClick: () => setIsEdit(true)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProfileField,
          {
            label: "PHONE",
            value: user == null ? void 0 : user.phone,
            onClick: () => setIsEdit(true)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProfileField,
          {
            label: "YOUR ADDRESS",
            value: "brototype kinfra"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProfileField,
          {
            label: "PINCODE",
            value: user == null ? void 0 : user.pin_code,
            onClick: () => setIsEdit(true)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProfileField,
          {
            label: "STATE",
            value: user == null ? void 0 : user.address,
            onClick: () => setIsEdit(true)
          }
        )
      ] })
    ] }) }) })
  ] });
};
const Profile = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: " lg:m-auto lg:w-2/3  flex-grow flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileSidebar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flex-1 flex  justify-center p-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-2xl ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileDetails, {}) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) }) });
};
export {
  Profile as default
};
