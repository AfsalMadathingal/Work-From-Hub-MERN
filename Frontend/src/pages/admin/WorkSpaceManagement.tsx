import  { useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/adminSlice';
import ApprovedWorkspaces from '../../components/admin/ApprovedWorkspaces';



const WorkspaceManagement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Workspace Management"));
  }, [dispatch]);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<ApprovedWorkspaces />} />
      </div>
    </div>
  );
};

export default WorkspaceManagement;
