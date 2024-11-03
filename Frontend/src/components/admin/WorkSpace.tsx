import React, { useState, useEffect } from "react";
import { FaEdit, FaEye, FaLocationArrow } from "react-icons/fa";
import toast from "react-hot-toast";
import { logout } from "../../services/adminAuth";
import { IWorkspace } from "../../@types/workspace";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setModal } from "../../redux/slices/adminSlice";
import { getAllPendingSubmission } from "../../services/adminService";
import { Pagination } from "@nextui-org/react";
import { Link } from "react-router-dom";

const WorkspaceSubmissionTable = () => {
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(5);
  const [activeFilter, setActiveFilter] = useState('all');
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    fetchWorkspaces(currentPage);
  }, [currentPage]);

  const fetchWorkspaces = async (page: number) => {
    try {
      const response = await getAllPendingSubmission(page, limit);
      if (response.status === 200) {
        setWorkspaces(response.data.data.pendingSubmissions);
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

  const handleEdit = (workspace: IWorkspace) => {
    dispatch(setModal({ type: "edit", data: workspace }));
  };

  const getStatusStyles = (workspace: IWorkspace) => {
    if (workspace.approved) return "bg-emerald-500 dark:bg-emerald-600";
    if (workspace.rejected) return "bg-red-500 dark:bg-red-600";
    return "bg-amber-500 dark:bg-amber-600";
  };

  const filteredWorkspaces = workspaces.filter(workspace => {
    if (activeFilter === 'pending') return !workspace.approved && !workspace.rejected;
    if (activeFilter === 'rejected') return workspace.rejected;
    return true;
  });

  const FilterButton = ({ status, label }: { status: string; label: string }) => (
    <button
      onClick={() => setActiveFilter(status)}
      className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 
        ${activeFilter === status 
          ? 'bg-blue-600 dark:bg-blue-500 text-white' 
          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dark:bg-gray-900">
      <div className="mb-6 flex flex-wrap gap-3">
        <FilterButton status="all" label="All" />
        <FilterButton status="pending" label="Pending" />
        <FilterButton status="rejected" label="Rejected" />
      </div>
      
      <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Building Name
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Location
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-4 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {filteredWorkspaces.length ? (
              filteredWorkspaces.map((workspace) => (
                <tr key={workspace._id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                    {workspace.buildingName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <span>{workspace.location}</span>
                      <button
                        onClick={() => window.open(`https://www.google.com/maps/search/${workspace.location}`, "_blank")}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                      >
                        <FaLocationArrow className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full text-white ${getStatusStyles(workspace)}`}>
                      {workspace.approved ? "Approved" : workspace.rejected ? "Rejected" : "Pending"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center space-x-3">
                      <Link 
                        to={`/admin/workspace-view/${workspace._id}`}
                        state={{ workspace }}
                        className="inline-flex items-center p-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-sm"
                      >
                        <FaEye className="h-4 w-4" />
                      </Link>
                      <button
                        onClick={() => handleEdit(workspace)}
                        className="inline-flex items-center p-2 bg-emerald-600 dark:bg-emerald-500 text-white rounded-full hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors duration-200 shadow-sm"
                      >
                        <FaEdit className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800">
                  No {activeFilter !== 'all' ? activeFilter : ''} submissions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          color="warning"
          total={totalPages}
          initialPage={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default WorkspaceSubmissionTable;