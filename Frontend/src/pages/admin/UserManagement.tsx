import React from 'react';
import Sidebar from '../../components/admin/Sidebar';
import AdminLayout from '../../components/admin/AdminLayout';
import UserManagementTable from '../../components/admin/UserManagement';


const UserManagement = () => {


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<UserManagementTable />} />
      </div>
    </div>
  );
};

export default UserManagement;
