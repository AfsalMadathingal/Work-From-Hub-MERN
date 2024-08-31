import React, { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import BusinessUserTable from '../../components/admin/BusinessUserTable';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/adminSlice';



const WorkplaceManage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Business User Management"));
  }, []);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<BusinessUserTable />} />
      </div>
    </div>
  );
};

export default WorkplaceManage;
