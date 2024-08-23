import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import MembershipTable from '../../components/admin/MembershipTable';


const UserManagement = () => {


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<MembershipTable />} />
      </div>
    </div>
  );
};

export default UserManagement;
