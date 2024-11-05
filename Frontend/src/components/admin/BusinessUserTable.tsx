import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@nextui-org/react";

import { EyeIcon } from "./EyeIcon";
import {
  blockAndUnblockBUser,
  editBusinessUser,
  getAllBusinessUsers,
} from "../../services/adminService";
import toast from "react-hot-toast";
import { logout } from "../../services/adminAuth";
import { FaBan } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setModal } from "../../redux/slices/adminSlice";
import Dialog from "./Dialog";
import UserProfileDialog from "./UserProfileDialog";
import EditUserProfile from "./EditUserProfile";
import { IBUsers } from "../../@types/businessUser";
import { EditIcon } from "lucide-react";
import { IUsers } from "../../@types/user";

const columns = [
  { name: "NAME", uid: "fullName" },
  { name: "STATUS", uid: "isBlocked" },
  { name: "ACTIONS", uid: "actions" },
];

export default function BusinessUserTable() {
  const [users, setUsers] = useState<IBUsers[]>([]);
  const [itemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<IBUsers | null>(null);
  const [userDetailsModal, setUserDetailsModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.admin);

  const openBlockModal = (user: IBUsers) => {
    setSelectedUser(user);
    dispatch(setModal(true));
  };

  const fetchUsers = async (page: number, itemsPerPage: number) => {
    const response = await getAllBusinessUsers(page, itemsPerPage);
    if (response?.status === 200) {
      setUsers(response.data.data.allUsers);
      setTotalPages(response.data.data.totalPages);
    } else if (response?.status === 401) {
      await logout();
      toast.error("session expired");
    } else {
      toast.error("something went wrong");
    }
  };

  const handleBlock = async () => {
    try {
      const response = await blockAndUnblockBUser(selectedUser);
      if (response?.status === 200) {
        toast.success(response.data.message);
        await fetchUsers(currentPage, itemsPerPage);
        setSelectedUser(null);
        dispatch(setModal(false));
      } else if (response?.status === 401) {
        await logout();
        toast.error("Session expired");
      } else {
        toast.error("Something went wrong");
      }
    } catch {
      toast.error("An error occurred");
    } finally {
      setSelectedUser(null);
      dispatch(setModal(false));
    }
  };

  const handleView = (user: IBUsers) => {
    setSelectedUser(user);
    setUserDetailsModal(true);
  };

  const handleEdit = (user: IBUsers) => {
    setSelectedUser(user);
    setEditUserModal(true);
  };

  const saveEditedUser = async (user: Partial<IBUsers>) => {
    
    const response = await editBusinessUser(user as IUsers);
    if (response?.status === 200) {
      toast(response.data.message);
      await fetchUsers(currentPage, itemsPerPage);
      setEditUserModal(false);
    } else if (response?.status === 401) {
      await logout();
      toast.error("session expired");
    } else if (response?.status === 409) {
      toast.error(response.data.message);
    } else {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    fetchUsers(currentPage, itemsPerPage);
  }, [currentPage]);

  const renderCell = React.useCallback((user: IBUsers, columnKey: string) => {
    const cellValue = user[columnKey as keyof IBUsers];

    switch (columnKey) {
      case "fullName":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.profilePic || "" }}
            description={user.email}
            name={cellValue as string}
          >
            {user.fullName}
          </User>
        );
      case "isBlocked":
        return (
          <Chip
            className="capitalize"
            color={user?.isBlocked ? "danger" : "success"}
            size="sm"
            variant="flat"
          >
            {user?.isBlocked ? "Blocked" : "Active"}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span
                onClick={() => handleView(user)}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span
                onClick={() => handleEdit(user)}
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
              >
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip
              color="danger"
              content={user.isBlocked ? "Unblock user" : "Block user"}
            >
              <span
                onClick={() => openBlockModal(user)}
                className="text-lg text-danger cursor-pointer active:opacity-50"
              >
                <FaBan />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      <Dialog
        isOpen={modal}
        title="Confirm Action"
        message={`Are you sure you want to ${
          selectedUser?.isBlocked ? "unblock" : "block"
        } ${selectedUser?.fullName}?`}
        onConfirm={handleBlock}
        onCancel={() => dispatch(setModal(false))}
      />

      <div>
        <Table aria-label="User management table with pagination">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} align="start">
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow key={item._id}>
                {(columnKey) => (
                  <TableCell>
                    {renderCell(item, columnKey.toString())}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {userDetailsModal && selectedUser && (
        <UserProfileDialog
          setUserDetailsModal={setUserDetailsModal}
          user={selectedUser as IUsers}
        />
      )}
      {editUserModal && selectedUser && (
        <EditUserProfile
          onCancel={() => setEditUserModal(false)}
          onSave={saveEditedUser}
          user={selectedUser as IUsers}
        />
      )}
    </>
  );
}
