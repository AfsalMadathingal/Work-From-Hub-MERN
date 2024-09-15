import React, { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import BuildingForm from '../../components/businessUser/BuildingForm';
import WorkspaceDetail from '../../components/businessUser/BWorkspaceDetails';
import BWorkspaceListing from '../../components/businessUser/BWorkSpace';



const BWorkspaceManage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Workspace Listing"));
  }, []);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<BWorkspaceListing/>} />
      </div>
    </div>
  );
};

export default BWorkspaceManage;
