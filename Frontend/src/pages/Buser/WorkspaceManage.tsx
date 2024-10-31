import React, { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import PropertyCards from '../../components/userSide/PropertyCards';



const BWorkspaceManage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Workspace Listing"));
  }, []);


  return (
    <div className="flex h-screen dark:bg-gray-900">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<PropertyCards />} />
      </div>
    </div>
  );
};

export default BWorkspaceManage;
