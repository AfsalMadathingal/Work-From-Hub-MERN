import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip } from "@nextui-org/react";
import { EditIcon } from "./Editicon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { getAllUsers } from "../../services/adminService";
import { toast } from "react-toastify";
import { logout } from "../../services/adminAuth";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  { name: "NAME", uid: "fullName" },
  { name: "STATUS", uid: "isBlocked" },
  { name: "ACTIONS", uid: "actions" },
];

export default function UserManagementTable() {
  const [users, setUsers] = useState([]);
  const [itemsPerPage] = useState(5); // You can change this value as needed
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  

  const fetchUsers = async (page: number, itemsPerPage: number) => {
    const response = await getAllUsers(page, itemsPerPage);

    if (response.status === 200) {
      setUsers(response.data.data.allUsers);
      setTotalPages(response.data.data.totalPages);
    } else if(response.status === 401) {
      await logout();
      toast.error("session expired");
      
    }else{
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    fetchUsers(currentPage,itemsPerPage);
  }, [currentPage]);


  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderCell = React.useCallback((user, columnKey) => {


    const cellValue = user[columnKey];


    switch (columnKey) {
      case "fullName":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.profilePic }}
            description={user.email}
            name={cellValue}
          >
            {user.fullName}
          </User>
        );
      case "isBlocked":
        return (
          <Chip className="capitalize" color={user.isBlocked ? "danger" : "success"} size="sm" variant="flat">
            {user.isBlocked ? "Blocked" : "Active"}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);



  return (
    <div>
      <Table aria-label="User management table with pagination">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === number ? 'bg-orange-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
