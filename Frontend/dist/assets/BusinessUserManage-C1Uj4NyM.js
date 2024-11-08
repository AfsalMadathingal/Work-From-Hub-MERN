import { b as reactExports, a as useDispatch, c as useSelector, k as React, j as jsxRuntimeExports, aD as setModal, _ as _t, a5 as setPageTitle } from "./index-BgyoVvld.js";
import { R as ResponsiveDrawer } from "./AdminLayout-BQAs6xey.js";
import { E as EyeIcon, c as chip_default, U as UserProfileDialog, a as EditUserProfile } from "./EditUserProfile-C5AtyDQ3.js";
import { l as getAllBusinessUsers, n as blockAndUnblockBUser, o as editBusinessUser } from "./AdminRouter-C0QqS4Ui.js";
import { l as logout } from "./adminAuth-DQebXDMS.js";
import { F as FaBan } from "./index-CBXuPOJf.js";
import { D as Dialog } from "./Dialog-YV2lcL6O.js";
import { S as SquarePen } from "./square-pen-DmL50rxf.js";
import { t as tooltip_default } from "./chunk-3ZXLDIEA-BVo5qd2O.js";
import { u as user_default, t as table_default, a as table_header_default, b as table_column_default, c as table_body_default, d as table_row_default, e as table_cell_default } from "./chunk-YRZGWF2W-CE1GT2rg.js";
import "./Logout-D0QFIkxM.js";
import "./clsx-DgYk2OaC.js";
import "./Modal-C-CzRshO.js";
import "./index-JtRx5LEO.js";
import "./iconBase-b0mU4BcV.js";
import "./colors-w8IeHXqN.js";
import "./chunk-N2KXC5ZE-B3rqp_Yo.js";
import "./chunk-XHQUSKIE-kpJhvuYQ.js";
import "./useFocusRing-D2Xc8JP6.js";
import "./react-toastify.esm-CTm47IRj.js";
import "./adminValidator-GoKZ0z25.js";
import "./joi-browser.min-7gqfidDl.js";
import "./index-Bxisd2S8.js";
import "./createLucideIcon-aT5HAUZt.js";
import "./useOverlayTriggerState-BKZ-Li1j.js";
import "./useFocusable-BHKaAMEV.js";
import "./useControlledState-chsM3Wdo.js";
import "./features-animation-DpivVBXV.js";
import "./create-visual-element-Bp75OA0n.js";
import "./index-CFMAwm7M.js";
import "./chunk-RFUEKIFS-5kmiI8xu.js";
import "./chunk-QXREVWCS-Dw8VqDq0.js";
import "./index-D2hLiIF9.js";
import "./getChildNodes-ei8c2tXI.js";
import "./LiveAnnouncer-D5Rj6zce.js";
import "./chunk-IXXDDLGU-CnNsE2GD.js";
const columns = [
  { name: "NAME", uid: "fullName" },
  { name: "STATUS", uid: "isBlocked" },
  { name: "ACTIONS", uid: "actions" }
];
function BusinessUserTable() {
  const [users, setUsers] = reactExports.useState([]);
  const [itemsPerPage] = reactExports.useState(5);
  const [totalPages, setTotalPages] = reactExports.useState(0);
  const [currentPage, setCurrentPage] = reactExports.useState(1);
  const [selectedUser, setSelectedUser] = reactExports.useState(null);
  const [userDetailsModal, setUserDetailsModal] = reactExports.useState(false);
  const [editUserModal, setEditUserModal] = reactExports.useState(false);
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.admin);
  const openBlockModal = (user) => {
    setSelectedUser(user);
    dispatch(setModal(true));
  };
  const fetchUsers = async (page, itemsPerPage2) => {
    const response = await getAllBusinessUsers(page, itemsPerPage2);
    if ((response == null ? void 0 : response.status) === 200) {
      setUsers(response.data.data.allUsers);
      setTotalPages(response.data.data.totalPages);
    } else if ((response == null ? void 0 : response.status) === 401) {
      await logout();
      _t.error("session expired");
    } else {
      _t.error("something went wrong");
    }
  };
  const handleBlock = async () => {
    try {
      const response = await blockAndUnblockBUser(selectedUser);
      if ((response == null ? void 0 : response.status) === 200) {
        _t.success(response.data.message);
        await fetchUsers(currentPage, itemsPerPage);
        setSelectedUser(null);
        dispatch(setModal(false));
      } else if ((response == null ? void 0 : response.status) === 401) {
        await logout();
        _t.error("Session expired");
      } else {
        _t.error("Something went wrong");
      }
    } catch {
      _t.error("An error occurred");
    } finally {
      setSelectedUser(null);
      dispatch(setModal(false));
    }
  };
  const handleView = (user) => {
    setSelectedUser(user);
    setUserDetailsModal(true);
  };
  const handleEdit = (user) => {
    setSelectedUser(user);
    setEditUserModal(true);
  };
  const saveEditedUser = async (user) => {
    const response = await editBusinessUser(user);
    if ((response == null ? void 0 : response.status) === 200) {
      _t(response.data.message);
      await fetchUsers(currentPage, itemsPerPage);
      setEditUserModal(false);
    } else if ((response == null ? void 0 : response.status) === 401) {
      await logout();
      _t.error("session expired");
    } else if ((response == null ? void 0 : response.status) === 409) {
      _t.error(response.data.message);
    } else {
      _t.error("something went wrong");
    }
  };
  reactExports.useEffect(() => {
    fetchUsers(currentPage, itemsPerPage);
  }, [currentPage]);
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "fullName":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          user_default,
          {
            avatarProps: { radius: "lg", src: user.profilePic || "" },
            description: user.email,
            name: cellValue,
            children: user.fullName
          }
        );
      case "isBlocked":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          chip_default,
          {
            className: "capitalize",
            color: (user == null ? void 0 : user.isBlocked) ? "danger" : "success",
            size: "sm",
            variant: "flat",
            children: (user == null ? void 0 : user.isBlocked) ? "Blocked" : "Active"
          }
        );
      case "actions":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(tooltip_default, { content: "Details", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              onClick: () => handleView(user),
              className: "text-lg text-default-400 cursor-pointer active:opacity-50",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(EyeIcon, {})
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(tooltip_default, { content: "Edit user", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              onClick: () => handleEdit(user),
              className: "text-lg text-default-400 cursor-pointer active:opacity-50",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, {})
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            tooltip_default,
            {
              color: "danger",
              content: user.isBlocked ? "Unblock user" : "Block user",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  onClick: () => openBlockModal(user),
                  className: "text-lg text-danger cursor-pointer active:opacity-50",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaBan, {})
                }
              )
            }
          )
        ] });
      default:
        return cellValue;
    }
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Dialog,
      {
        isOpen: modal,
        title: "Confirm Action",
        message: `Are you sure you want to ${(selectedUser == null ? void 0 : selectedUser.isBlocked) ? "unblock" : "block"} ${selectedUser == null ? void 0 : selectedUser.fullName}?`,
        onConfirm: handleBlock,
        onCancel: () => dispatch(setModal(false))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(table_default, { "aria-label": "User management table with pagination", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(table_header_default, { columns, children: (column) => /* @__PURE__ */ jsxRuntimeExports.jsx(table_column_default, { align: "start", children: column.name }, column.uid) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(table_body_default, { items: users, children: (item) => /* @__PURE__ */ jsxRuntimeExports.jsx(table_row_default, { children: (columnKey) => /* @__PURE__ */ jsxRuntimeExports.jsx(table_cell_default, { children: renderCell(item, columnKey.toString()) }) }, item._id) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-4", children: Array.from({ length: totalPages }, (_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: `mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? "bg-orange-500 text-white" : "bg-gray-200"}`,
          onClick: () => setCurrentPage(i + 1),
          children: i + 1
        },
        i + 1
      )) })
    ] }),
    userDetailsModal && selectedUser && /* @__PURE__ */ jsxRuntimeExports.jsx(
      UserProfileDialog,
      {
        setUserDetailsModal,
        user: selectedUser
      }
    ),
    editUserModal && selectedUser && /* @__PURE__ */ jsxRuntimeExports.jsx(
      EditUserProfile,
      {
        onCancel: () => setEditUserModal(false),
        onSave: saveEditedUser,
        user: selectedUser
      }
    )
  ] });
}
const BusinessUserManage = () => {
  const dispatch = useDispatch();
  reactExports.useEffect(() => {
    dispatch(setPageTitle("Business User Management"));
  }, [dispatch]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveDrawer, { component: /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessUserTable, {}) }) }) });
};
export {
  BusinessUserManage as default
};
