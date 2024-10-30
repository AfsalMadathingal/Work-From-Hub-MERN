import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaLocationArrow, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { logout } from "../../services/adminAuth";
import { IWorkspace } from "../../@types/workspace";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setModal, setTempData } from "../../redux/slices/adminSlice";
import { getAllPendingSubmission } from "../../services/adminService";
import { Pagination } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { getAllWorkspaces, getApprovedWorkspaces } from "../../services/BuserService";
import AnimatedPage from "../Animation";

export default function BApprovedWorkspaces() {
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(5); // Keep the limit static for now
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    fetchWorkspaces(currentPage);
  }, [currentPage]);

  const fetchWorkspaces = async (page: number) => {
    try {
      const response = await getApprovedWorkspaces(page, limit);
      if (response.status === 200) {
        setWorkspaces(response.data.data.approvedWorkspaces);
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
    <table className="min-w-full bg-white shadow-lg rounded-lg border border-gray-200">
      <thead>
        <tr className="bg-gray-200 border-b">
          <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
            Building Name
          </th>
          <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
            Location
          </th>
          <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
            Status
          </th>
          <th className="py-3 px-4 text-center text-sm font-semibold text-gray-700">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {workspaces.length ? (
          workspaces.map((workspace) => (
            <tr key={workspace._id} className="border-b hover:bg-gray-100 transition-colors">
              <td className="py-4 px-4 text-gray-800">{workspace.buildingName}</td>
              <td className="py-4 px-4">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-700">click to view</span>
                  <FaLocationArrow
                    className="text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
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
                      ? "bg-green-600"
                      : workspace.rejected
                      ? "bg-red-600"
                      : "bg-yellow-600"
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
                    <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-full p-2 transition-colors shadow-md">
                      <FaEye />
                    </button>
                  </Link>

                  <button
                    className="text-white bg-green-600 hover:bg-green-700 rounded-full p-2 transition-colors shadow-md"
                    onClick={() => handleEdit(workspace)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-white bg-red-600 hover:bg-red-700 rounded-full p-2 transition-colors shadow-md"
                    onClick={() => handleDelete(workspace)} // Ensure handleDelete function is defined
                  >
                    <FaTrash />
                  </button>
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
