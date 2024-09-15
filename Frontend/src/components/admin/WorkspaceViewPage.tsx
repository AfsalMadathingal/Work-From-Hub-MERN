// src/pages/WorkspacePage.tsx

import React, { useEffect, useState } from "react";
 // Assume this service exists
import { toast } from "react-toastify";
import WorkspaceDetail from "./WorkspaceDetail";

const WorkspaceViewPage: React.FC= () => {
  const [workspace, setWorkspace] = useState<any>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchWorkspace = async () => {
    //   try {
    //     const response = await getWorkspaceById(workspaceId);
    //     if (response.status === 200) {
    //       setWorkspace(response.data.data.workspace);
    //     } else {
    //       toast.error("Failed to fetch workspace details");
    //     }
    //   } catch (error) {
    //     toast.error("An error occurred while fetching workspace details");
    //   } finally {
    //     setLoading(false);
    //   }
    };

    fetchWorkspace();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!workspace) {
    return <div className="text-center mt-10">Workspace not found.</div>;
  }

  return <WorkspaceDetail workspace={workspace} />;
};

export default WorkspaceViewPage;
