import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout';
import WorkspaceDetail from '../../components/admin/WorkspaceDetail';
import { useLocation } from 'react-router-dom';


const View = () => {

  const location = useLocation();

  const workspace = location.state?.workspace;

  
  return (
    <div className="flex h-screen">
    <div className="flex-1 flex flex-col">
      <AdminLayout component={<WorkspaceDetail workspace={workspace} />} />
    </div>
  </div>
  )
}

export default View