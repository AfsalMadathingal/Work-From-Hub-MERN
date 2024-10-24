import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllApprovedWorkspaces } from "../../services/adminService";
import { logout } from "../../services/adminAuth";
import { IWorkspace } from "../../@types/workspace";
import { FaEye } from "react-icons/fa";

const ApprovedWorkspaces = () => {
  const navigate = useNavigate();

  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(5); // Static limit

  useEffect(() => {
    const fetchWorkspaces = async (page: number, limit: number) => {
      try {
        const response = await getAllApprovedWorkspaces(page, limit);
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

    fetchWorkspaces(currentPage, limit);
  }, [currentPage, limit]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Page title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        Approved Workspaces
      </h3>

      {/* Cards container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workspaces.map((workspace) => (
          <div
            key={workspace._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="h-36 w-full object-cover"
              src={workspace.photos[0]}
              alt={workspace.buildingName}
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                {workspace.buildingName}
              </h4>
              <p className="text-gray-600 text-sm mb-3">{workspace.location}</p>
              <Link to={`/admin/workspace-view/${workspace._id}`}>
                <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-3 rounded-md transition-colors">
                  <FaEye className="mr-2" /> View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } transition-colors`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleChangePage(index + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-orange-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            } transition-colors`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          } transition-colors`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApprovedWorkspaces;
