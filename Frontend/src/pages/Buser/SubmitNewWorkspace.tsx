import { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import BuildingForm from '../../components/businessUser/PropertyForm';




const SubmitNewWorkspace = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Submit New Workspace"));
  }, [dispatch]);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<BuildingForm />} />
      </div>
    </div>
  );
};

export default SubmitNewWorkspace;
