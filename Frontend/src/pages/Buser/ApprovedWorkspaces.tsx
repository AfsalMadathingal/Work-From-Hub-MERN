import React, { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import BWorkspaceListing from '../../components/businessUser/BWorkSpace';
import BApprovedWorkspaces from '../../components/businessUser/BApprovedWorkspaces';




const ApprovedWorkspaces = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Approved Workspaces"));
  }, []);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<BApprovedWorkspaces />} />
      </div>
    </div>
  );
};

export default ApprovedWorkspaces;
