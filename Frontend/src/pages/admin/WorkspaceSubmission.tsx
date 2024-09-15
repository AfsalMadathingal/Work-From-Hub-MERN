import React, { useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/adminSlice';
import WorkspaceSubmissionTable from '../../components/admin/WorkSpace';



const WorkspaceSubmission = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Workspace Submission"));
  }, []);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<WorkspaceSubmissionTable />} />
      </div>
    </div>
  );
};

export default WorkspaceSubmission;
