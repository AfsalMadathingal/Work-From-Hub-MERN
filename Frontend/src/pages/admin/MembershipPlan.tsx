import React, { useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import PlansTable from '../../components/admin/plansTable';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/adminSlice';


const MembershipPlan : React.FC =  () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Plan Management"));
  }, []);


  return (
    <div className="flex h-screen dark:bg-gray-900">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<PlansTable />} />
      </div>
    </div>
  );
};

export default MembershipPlan;
