import React, { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import BWorkspaceDetail from '../../components/businessUser/BWorkspaceDetails';
import { useLocation } from 'react-router-dom';



const ViewWorkSpace = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const workspace = location.state?.workspace;

  useEffect(() => {
    dispatch(setPageTitle("Workspace Listing"));
  }, []);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<BWorkspaceDetail workspace={workspace}/>} />
      </div>
    </div>
  );
};

export default ViewWorkSpace;
