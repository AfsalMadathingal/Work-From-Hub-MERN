import { r as reactExports, a as useDispatch, u as useSelector, R as React, j as jsxRuntimeExports, c8 as tooltip_default, cq as SquarePen, c9 as FaBan, c0 as setModal, cr as getAllBusinessUsers, bm as logout, y as _t, cs as blockAndUnblockBUser, ct as editBusinessUser, bX as setPageTitle } from "./index-DhlojAJa.js";
import { R as ResponsiveDrawer } from "./AdminLayout-D0fMJVBI.js";
import { E as EyeIcon, c as chip_default, U as UserProfileDialog, a as EditUserProfile } from "./EditUserProfile-CVnnub84.js";
import { D as Dialog } from "./Dialog-DBoMd3mL.js";
import { u as user_default, t as table_default, a as table_header_default, b as table_column_default, c as table_body_default, d as table_row_default, e as table_cell_default } from "./chunk-YRZGWF2W-DBPb5omG.js";
import "./adminValidator-jwSo87c-.js";
import "./LiveAnnouncer-DOgq-u9y.js";
import "./chunk-IXXDDLGU-DjM0gjSu.js";
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
