import { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import BWorkspaceListing from '../../components/businessUser/BWorkSpace';




const BWorkspaceSubmissions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Workspace Submission"));
  }, []);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<BWorkspaceListing />} />
      </div>
    </div>
  );
};

export default BWorkspaceSubmissions;
