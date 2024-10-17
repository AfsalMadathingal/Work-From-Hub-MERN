import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import Dashboard from '../../components/admin/Dashboard';


const AdminDashboard = () => {


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<Dashboard />} />
      </div>
    </div>
  );
};

export default AdminDashboard;
