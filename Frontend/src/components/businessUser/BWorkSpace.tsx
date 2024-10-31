import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaTrash, FaEye, FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { getAllWorkspaces } from "../../services/BuserService";
import { logout } from "../../services/adminAuth";
import type { IWorkspace } from "../../@types/workspace";

const WorkspaceListing = () => {
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(5);

  useEffect(() => {
    fetchWorkspaces(currentPage);
  }, [currentPage]);

  const fetchWorkspaces = async (page: number) => {
    try {
      const response = await getAllWorkspaces(page, limit);
      if (response.status === 200) {
        const filteredData = response.data.data.filter(
          (workspace: IWorkspace) => !workspace.approved
        );
        setWorkspaces(filteredData);
        setTotalPages(response.data.data.totalPages);
      } else if (response.status === 401) {
        await logout();
        toast.error("Session expired");
      }
    } catch (error) {
      toast.error("Failed to fetch workspaces");
    }
  };

  const getStatusBadgeClass = (workspace: IWorkspace) => {
    if (workspace.approved) return "bg-green-500 dark:bg-green-600";
    if (workspace.rejected) return "bg-red-500 dark:bg-red-600";
    return "bg-yellow-500 dark:bg-yellow-600";
  };

  const getStatusText = (workspace: IWorkspace) => {
    if (workspace.approved) return "Approved";
    if (workspace.rejected) return "Rejected";
    return "Pending";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Building Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {workspaces.length > 0 ? (
                  workspaces.map((workspace) => (
                    <tr 
                      key={workspace._id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                        {workspace.buildingName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        <div className="flex items-center space-x-2">
                          <span>{workspace.location}</span>
                          <FaLocationArrow
                            className="text-blue-500 hover:text-blue-600 cursor-pointer"
                            onClick={() => window.open(
                              `https://www.google.com/maps/search/${workspace.location}`,
                              "_blank"
                            )}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full text-white
                          ${getStatusBadgeClass(workspace)}`}>
                          {getStatusText(workspace)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-3">
                          <Link
                            to={`/business/workspace-view/${workspace._id}`}
                            state={{ workspace }}
                            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                          >
                            <FaEye className="w-5 h-5" />
                          </Link>
                          <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <FaEdit className="w-5 h-5" />
                          </button>
                          <button className="text-red-400 hover:text-red-500">
                            <FaTrash className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td 
                      colSpan={4} 
                      className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400"
                    >
                      No pending submissions found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center">
            <nav className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md text-sm font-medium
                    ${currentPage === page
                      ? 'bg-blue-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkspaceListing;