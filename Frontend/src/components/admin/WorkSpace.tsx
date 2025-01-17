import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModal } from "../../redux/slices/adminSlice";
import { getAllPendingSubmission } from "../../services/adminService";
import { logout } from "../../services/adminAuth";
import { IWorkspace } from "../../@types/workspace";
import { Eye, Edit2, MapPin, Building2, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import toast from "react-hot-toast";

const WorkspaceSubmissionTable = () => {
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(5);
  const [activeFilter, setActiveFilter] = useState('all');
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWorkspaces(currentPage);
  }, [currentPage]);

  const fetchWorkspaces = async (page: number) => {
    try {
      const response = await getAllPendingSubmission(page, limit);
      if (response?.status === 200) {
        setWorkspaces(response.data.data.pendingSubmissions);
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

  const handleEdit = (workspace: IWorkspace) => {
    dispatch(setModal({ type: "edit", data: workspace }));
  };

  const getStatusIcon = (workspace: IWorkspace) => {
    if (workspace.approved) return <CheckCircle className="w-4 h-4 text-emerald-500" />;
    if (workspace.rejected) return <XCircle className="w-4 h-4 text-red-500" />;
    return <AlertCircle className="w-4 h-4 text-amber-500" />;
  };

  const getStatusStyles = (workspace: IWorkspace) => {
    if (workspace.approved) return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300";
    if (workspace.rejected) return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    return "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300";
  };

  const filteredWorkspaces = workspaces.filter(workspace => {
    if (activeFilter === 'pending') return !workspace.approved && !workspace.rejected;
    if (activeFilter === 'rejected') return workspace.rejected;
    return true;
  });

  const FilterButton = ({ status, label }: { status: string; label: string }) => (
    <button
      onClick={() => setActiveFilter(status)}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
        activeFilter === status
          ? 'bg-orange-500 text-white shadow-md transform scale-105'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Building2 className="w-6 h-6 text-orange-500" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Workspace Submissions</h1>
        </div>
        <div className="flex space-x-3">
          <FilterButton status="all" label="All" />
          <FilterButton status="pending" label="Pending" />
          <FilterButton status="rejected" label="Rejected" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Building Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredWorkspaces.length ? (
                filteredWorkspaces.map((workspace) => (
                  <tr key={workspace._id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-lg object-cover"
                            src={workspace?.photos?.[0]?.toString() || "https://picsum.photos/200/300"}
                            alt={workspace.buildingName}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {workspace.buildingName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => window.open(`https://www.google.com/maps/search/${workspace.location}`, "_blank")}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{workspace.location}</span>
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(workspace)}`}>
                        {getStatusIcon(workspace)}
                        <span className="ml-2">
                          {workspace.approved ? "Approved" : workspace.rejected ? "Rejected" : "Pending"}
                        </span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex justify-center space-x-3">
                        <Link
                          to={`/admin/workspace-view/${workspace._id}`}
                          state={{ workspace }}
                          className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleEdit(workspace)}
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                    No {activeFilter !== 'all' ? activeFilter : ''} submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 flex justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
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
    </div>
  );
};

export default WorkspaceSubmissionTable;