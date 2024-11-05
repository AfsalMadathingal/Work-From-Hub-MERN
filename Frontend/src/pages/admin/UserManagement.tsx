import { useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import UserManagementTable from '../../components/admin/UserManagement';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/adminSlice';


const UserManagement = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("User Management"));
  }, [dispatch]);

   
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<UserManagementTable />} />
      </div>
    </div>
  );
};

export default UserManagement;
