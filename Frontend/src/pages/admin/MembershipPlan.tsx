import React from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import Checkout from '../Checkout';
import MembershipTable from '../../components/admin/MembershipTable';


const MembershipPlan = () => {


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<MembershipTable />} />
      </div>
    </div>
  );
};

export default MembershipPlan;
