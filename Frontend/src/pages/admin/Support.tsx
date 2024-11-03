import{ useEffect} from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/adminSlice';
import AdminChat from '../../components/admin/SupportTable';



const Support = () => {
  const dispatch = useDispatch();

  // Set the page title when the component mounts
  useEffect(() => {
    dispatch(setPageTitle("Support"));
  }, [dispatch]);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        {/* AdminLayout component wraps the SupportTable */}
        <AdminLayout 
          component={
            <AdminChat/>
          } 
        />
      </div>
    </div>
  );
};

export default Support;
