import { c as createLucideIcon } from "./createLucideIcon-aT5HAUZt.js";
import { b as reactExports, j as jsxRuntimeExports } from "./index-BgyoVvld.js";
/**
 * @license lucide-react v0.436.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Star = createLucideIcon("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
const SearchBar = ({ onSearch, defaultValue = "" }) => {
  const [query, setQuery] = reactExports.useState(defaultValue);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  reactExports.useEffect(() => {
    setQuery(defaultValue);
  }, [defaultValue]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "flex justify-center items-center mt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "text",
        value: query,
        onChange: handleChange,
        placeholder: "Search by city, state or town",
        className: "w-2/3 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-200"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-orange-500 text-white px-4 py-3 rounded-r-md hover:bg-orange-600", children: "Search" })
  ] });
};
export {
  Star as S,
  SearchBar as a
};
