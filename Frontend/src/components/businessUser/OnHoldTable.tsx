import { useState, useEffect } from "react";
import { FaLocationArrow,} from "react-icons/fa";
import toast from "react-hot-toast";
import { logout } from "../../services/adminAuth";
import { IWorkspace } from "../../@types/workspace";
import { Pagination } from "@nextui-org/react";

import AnimatedPage from "../Animation";
import {
  getApprovedWorkspaces,
  manageHolding,
} from "../../services/BuserService";

const OnHoldTable = () => {
  const [workspaces, setWorkspaces] = useState<IWorkspace[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(5);

  const fetchWorkspaces = async (page: number) => {
    try {
      const response = await getApprovedWorkspaces(page, limit);
      if (response?.status === 200) {
        const holdedSpace = response.data.data.approvedWorkspaces.filter(
          (workspace: IWorkspace) => workspace.isOnHold
        );
        setWorkspaces(holdedSpace);
        setTotalPages(response.data.data.totalPages);
      } else if (response?.status === 401) {
        await logout();
        toast.error("Session expired");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while fetching workspaces");
    }
  };

  useEffect(() => {
    const fetchWorkspaces = async (page: number) => {
      try {
        const response = await getApprovedWorkspaces(page, limit);
        if (response?.status === 200) {
          const holdedSpace = response.data.data.approvedWorkspaces.filter(
            (workspace: IWorkspace) => workspace.isOnHold
          );
          setWorkspaces(holdedSpace);
          setTotalPages(response.data.data.totalPages);
        } else if (response?.status === 401) {
          await logout();
          toast.error("Session expired");
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred while fetching workspaces");
      }
    };

    fetchWorkspaces(currentPage);
  }, [currentPage, limit]);

  const handleUnHold = async (id: string) => {
    try {
      const response = await manageHolding(id);

      if (response?.status === 200) {
        toast.success("workspace unholded"); 
        await fetchWorkspaces(currentPage);
      }else{
        toast.error("something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  const getStatusStyles = (workspace: IWorkspace) => {
    if (workspace.isOnHold) return "bg-amber-500";
    return "bg-gray-500";
  };

  const getStatusText = (workspace: IWorkspace) => {
    if (workspace.isOnHold) return "On Hold";
    return "Pending";
  };

  return (
    <AnimatedPage>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 dark:bg-gray-800">
        <div className="overflow-x-auto rounded-lg shadow dark:shadow-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-200">
                  Building Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-200">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-200">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-200">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-800">
              {workspaces?.length ? (
                workspaces?.map((workspace) => (
                  <tr
                    key={workspace._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300">
                      {workspace.buildingName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <button
                        onClick={() =>
                          window.open(
                            `https://www.google.com/maps/search/${workspace.location}`,
                            "_blank"
                          )
                        }
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
                      >
                        <span>View location</span>
                        <FaLocationArrow className="h-4 w-4" />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full text-white ${getStatusStyles(
                          workspace
                        )} dark:bg-gray-800`}
                      >
                        {getStatusText(workspace)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex justify-center space-x-3">
                        <button
                          onClick={() => handleUnHold(workspace?._id as string)}
                          className="p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors dark:bg-emerald-500 dark:hover:bg-emerald-600"
                        >
                          Un Hold
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
                    No on-hold workspaces found
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
    </AnimatedPage>
  );
};

export default OnHoldTable;
