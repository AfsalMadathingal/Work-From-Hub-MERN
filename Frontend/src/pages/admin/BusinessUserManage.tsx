import React, { useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import BusinessUserTable from '../../components/admin/BusinessUserTable';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/adminSlice';



const BusinessUserManage : React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Business User Management"));
  }, []);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<BusinessUserTable />} />
      </div>
    </div>
  );
};

export default BusinessUserManage;
