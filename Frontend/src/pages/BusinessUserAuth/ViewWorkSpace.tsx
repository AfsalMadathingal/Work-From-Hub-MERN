import { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import BWorkspaceDetail from '../../components/businessUser/BWorkspaceDetails';




const ViewWorkSpace = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setPageTitle("Workspace Listing"));
  }, [dispatch]);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
      
        <BusinessUserLayout component={<BWorkspaceDetail/>} />
      </div>
    </div>
  );
};

export default ViewWorkSpace;
