import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAllApprovedWorkspaces } from "../../services/adminService";

import { Pagination } from "@nextui-org/react";
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
    <div className="container mx-auto py-12 px-4 md:px-0">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Approved Workspaces
      </h3>
      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="table-auto w-full bg-white rounded-lg">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-600 uppercase tracking-wider">
                Workspace Name
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-600 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {workspaces.map((workspace) => (
              <tr
                key={workspace._id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={workspace.photos[0]}
                        alt="Workspace"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {workspace.buildingName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm text-gray-700">
                    {workspace.location}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <Link
                    state={{ workspace }}
                    to={`/admin/workspace-view/${workspace?._id}`}
                  >
                    <button className="text-white bg-blue-500 hover:bg-blue-600 rounded-full p-2 transition-colors">
                      <FaEye />
                    </button>
                  </Link>
                  {/* <button
                    onClick={() =>
                      navigate(`/admin/workspace-detail/${workspace._id}`)
                    }
                    type="button"
                    className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    View
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-8">
        <Pagination
          total={totalPages}
          initialPage={currentPage}
          onChange={handleChangePage}
          color="warning" // This will give it the orange theme
          className="bg-orange-500 text-white rounded-full shadow-md"
          size="lg"
        />
      </div>
    </div>
  );
};

export default ApprovedWorkspaces;
