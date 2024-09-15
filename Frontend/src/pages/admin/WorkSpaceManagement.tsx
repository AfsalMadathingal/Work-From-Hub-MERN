import React, { useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/adminSlice';
import WorkspaceSubmissionTable from '../../components/admin/WorkSpace';
import ApprovedWorkspaces from '../../components/admin/ApprovedWorkspaces';



const WorkspaceManagement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Workspace Management"));
  }, []);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<ApprovedWorkspaces />} />
      </div>
    </div>
  );
};

export default WorkspaceManagement;
