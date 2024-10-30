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
  EditUser,
  getAllUsers,
  manageBlockAndUnblock,
} from "../../services/adminService";
import toast from "react-hot-toast";
import { logout } from "../../services/adminAuth";
import { IUsers } from "../../@types/user";
import { FaBan } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setModal } from "../../redux/slices/adminSlice";
import Dialog from "./Dialog";
import UserProfileDialog from "./UserProfileDialog";
import EditUserProfile from "./EditUserProfile";
import { EditIcon } from "./EditIcon";


const columns = [
  { name: "NAME", uid: "fullName" },
  { name: "STATUS", uid: "isBlocked" },
  { name: "ACTIONS", uid: "actions" },
];

export default function UserManagementTable() {
  const [users, setUsers] = useState([]);
  const [itemsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<IUsers | null>(null);
  const [userDetailsModal , setUserDetailsModal] = useState<boolean>(false);
  const [editUserModal , setEditUserModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.admin);


  const openBlockModal = (user: IUsers) => {
    
    setSelectedUser(user);
    dispatch(setModal(true));
  };

  const fetchUsers = async (page: number, itemsPerPage: number) => {
    const response = await getAllUsers(page, itemsPerPage);

    if (response.status === 200) {
      setUsers(response.data.data.allUsers);
      setTotalPages(response.data.data.totalPages);
    } else if (response.status === 401) {
      await logout();
      toast.error("session expired");
    } else {
      toast.error("something went wrong");
    }
  };

  const handleBlock = async () => {

 
    try {
      const response = await manageBlockAndUnblock(selectedUser as IUsers);

      if (response.status === 200) {
        toast.success(response.data.message);
        await fetchUsers(currentPage, itemsPerPage);
        setSelectedUser(null);
        dispatch(setModal(false));
      } else if (response.status === 401) {
        await logout();
        setSelectedUser(null);
        dispatch(setModal(false));
        toast.error("Session expired");
      } else {
        setSelectedUser(null);
        dispatch(setModal(false));
        toast.error("Something went wrong");
      }
    } catch (error) {
      setSelectedUser(null);
      dispatch(setModal(false));
      toast.error("An error occurred");
    }
  };


  const handleView = (user : IUsers) => {

    setSelectedUser(user);
    setUserDetailsModal(true);
  }

  const handleEdit = (user : IUsers) => {

    setSelectedUser(user);
    setEditUserModal(true);

  }


  const saveEditedUser = async (user: Partial<IUsers>) => {

    const response = await EditUser(user);

    if (response.status === 200  ) {
      toast.info(response.data.message);
      setEditUserModal(false);
    } else if (response.status === 401) {
      await logout();
      toast.error("session expired");
      return
    }else if(response.status === 409){

      toast.error(response.data.message);
      return
    }else {
      toast.error("something went wrong");
      return
    }

    setEditUserModal(false);

    fetchUsers(currentPage, itemsPerPage);
  }

  useEffect(() => {
    fetchUsers(currentPage, itemsPerPage);
  }, [currentPage]);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderCell = React.useCallback((user : IUsers, columnKey : string) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "fullName":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.profilePic || "" }}
            description={user.email}
            name={cellValue  as string || ""}
          >
            {user.fullName}
          </User>
        );
      case "isBlocked":
        return (
          <Chip
            className="capitalize"
            color={user.isBlocked ? "danger" : "success"}
            size="sm"
            variant="flat"
          >
            {user.isBlocked ? "Blocked" : "Active"}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span 
              onClick={() => handleView(user)}
              className="text-lg text-default-400 cursor-pointer active:opacity-50">
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
      message={`Are you sure you want to ${selectedUser?.isBlocked ? "unblock" : "block"} ${selectedUser?.fullName}?`}
      onConfirm={handleBlock}
      onCancel={() => dispatch(setModal(false))}
      />
      
      <div>
        
        <Table aria-label="User management table with pagination">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "start" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item : IUsers) => (
              <TableRow key={item._id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item , columnKey.toString())}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex justify-center mt-4">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === number
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>

{userDetailsModal  && selectedUser && <UserProfileDialog setUserDetailsModal={setUserDetailsModal}  user={selectedUser as IUsers }/>}

{editUserModal && selectedUser && <EditUserProfile onCancel={() => setEditUserModal(false)} onSave={saveEditedUser} user={selectedUser as IUsers}/>}
      
    </>
  );
}
