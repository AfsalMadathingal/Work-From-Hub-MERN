import { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import ProfileManagement from '../../components/businessUser/ProfileManagement';



const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Workspace Listing"));
  }, [dispatch]);


  return (
    <div className="flex h-screen dark:bg-gray-900">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<ProfileManagement />} />
      </div>
    </div>
  );
};

export default Profile;
