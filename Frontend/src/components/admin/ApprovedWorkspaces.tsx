import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllApprovedWorkspaces } from "../../services/adminService";
import { logout } from "../../services/adminAuth";
import { IWorkspace } from "../../@types/workspace";
import { MapPin, Eye, Building2, ChevronLeft, ChevronRight, Grid } from "lucide-react";
import toast from "react-hot-toast";

const ApprovedWorkspaces = () => {
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(6);

  useEffect(() => {
    const fetchWorkspaces = async (page: number, limit: number) => {
      try {
        const response = await getAllApprovedWorkspaces(page, limit);
        if (response?.status === 200) {
          setWorkspaces(response.data.data.approvedWorkspaces);
          setTotalPages(response.data.data.totalPages);
        } else if (response?.status === 401) {
          await logout();
          toast.error("Session expired");
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        console.error("Error fetching workspaces:", error);
        toast.error("An error occurred while fetching workspaces");
      }
    };

    fetchWorkspaces(currentPage, limit);
  }, [currentPage, limit]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Grid className="w-6 h-6 text-orange-500" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Approved Workspaces</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaces.map((workspace) => (
            <div
              key={workspace._id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <img
                  className="w-full h-full object-cover"
                  src={workspace?.photos?.[0]?.toString() || "https://picsum.photos/200/300"}
                  alt={workspace.buildingName}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {workspace.buildingName}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => {
                      const url = `https://www.google.com/maps/search/?api=1&query=${workspace.location}`;
                      window.open(url, "_blank");
                    }}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">View Location</span>
                  </button>

                  <Link 
                    to={`/admin/workspace-view/${workspace._id}`}
                    className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="text-sm font-medium">View Details</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handleChangePage(index + 1)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovedWorkspaces;