import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllApprovedWorkspaces } from "../../services/adminService";
import { logout } from "../../services/adminAuth";
import { IWorkspace } from "../../@types/workspace";
import { FaEye, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const ApprovedWorkspaces = () => {
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(5);

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
      <h1 className="text-md font-bold mb-2">Approved Workspaces</h1>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Building Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {workspaces.map((workspace) => (
              <tr key={workspace._id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    className="h-16 w-16 object-cover rounded"
                    src={workspace?.photos?.[0]?.toString() || "https://picsum.photos/200/300"}
                    alt={workspace.buildingName}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                  {workspace.buildingName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium py-2 px-4 rounded-md transition-colors"
                    onClick={() => {
                      const url = `https://www.google.com/maps/search/?api=1&query=${workspace.location}`;
                      window.open(url, "_blank");
                    }}
                  >
                    <FaMapMarkerAlt className="mr-2" /> Open in Google Maps
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/admin/workspace-view/${workspace._id}`}>
                    <button className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                      <FaEye className="mr-2" /> View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white"
          } transition-colors`}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handleChangePage(index + 1)}
            className={`px-4 py-2 rounded-md transition-colors ${
              currentPage === index + 1
                ? "bg-orange-500 dark:bg-orange-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 dark:bg-gray-600 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white"
          } transition-colors`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ApprovedWorkspaces;