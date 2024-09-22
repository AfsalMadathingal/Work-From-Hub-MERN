import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaLocationArrow, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { logout } from "../../services/adminAuth";
import { IWorkspace } from "../../@types/workspace";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setModal, setTempData } from "../../redux/slices/adminSlice";
import { getAllPendingSubmission } from "../../services/adminService";
import { Pagination } from "@nextui-org/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAllWorkspaces } from "../../services/BuserService";
import AnimatedPage from "../Animation";
import { EyeIcon } from "../admin/EyeIcon";
import { Tooltip } from "@mui/material";
import { EditIcon } from "../admin/Editicon";
import { DeleteIcon, TrashIcon } from "lucide-react";

export default function BWorkspaceListing() {
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(5); // Keep the limit static for now
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { modal } = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    fetchWorkspaces(currentPage);
  }, [currentPage]);

  const fetchWorkspaces = async (page: number) => {
    try {
      const response = await getAllWorkspaces(page, limit);
      if (response.status === 200) {
        setWorkspaces(response.data.data);
        setTotalPages(response.data.data.totalPages);
      } else if (response.status === 401) {
        await logout();
        toast.error("Session expired");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("An error occurred while fetching workspaces");
    }
  };

  const handleEdit = (workspace: IWorkspace) => {};

  return (
    <AnimatedPage>
      <div className="container mx-auto px-4 py-6">
        <div className="w-full overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 border-b">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Building Name
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Location
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
                <th className="py-3 px-4 text-center text-sm font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {workspaces.length ? (
                workspaces.map((workspace) => (
                  <tr key={workspace._id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4">{workspace.buildingName}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <span>{workspace.location}</span>
                        <FaLocationArrow
                          className="text-blue-500 cursor-pointer"
                          onClick={() =>
                            window.open(
                              `https://www.google.com/maps/search/${workspace.location}`,
                              "_blank"
                            )
                          }
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${
                          workspace.approved
                            ? "bg-green-500"
                            : workspace.rejected
                            ? "bg-red-500"
                            : "bg-yellow-500"
                        }`}
                      >
                        {workspace.approved
                          ? "Approved"
                          : workspace.rejected
                          ? "Rejected"
                          : "Pending"}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <Link
                          state={{ workspace }}
                          to={`/business/workspace-view/${workspace?._id}`}
                        >
                          <Tooltip title="View Details" content="Details">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                              <EyeIcon />
                            </span>
                          </Tooltip>
                        </Link>

                        <Tooltip title="Edit Workspace" content="Edit user">
                          <span
                            onClick={() => handleEdit(workspace)}
                            className="text-lg text-default-400 cursor-pointer active:opacity-50"
                          >
                            <EditIcon />
                          </span>
                        </Tooltip>
                        <Tooltip title="Edit Workspace" content="Edit user">
                          <span
                            onClick={() => handleEdit(workspace)}
                            className="text-lg text-default-400 cursor-pointer active:opacity-50"
                          >
                            <FaTrash className="text-red-500" />
                          </span>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="py-4 px-4 text-center text-gray-500"
                  >
                    No pending submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          <Pagination
            color="warning"
            total={totalPages}
            initialPage={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </AnimatedPage>
  );
}
