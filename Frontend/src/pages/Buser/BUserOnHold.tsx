import  { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import OnHoldTable from '../../components/businessUser/OnHoldTable';




const BUserOnHold = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Approved Workspaces"));
  }, [dispatch]);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<OnHoldTable />} />
      </div>
    </div>
  );
};

export default BUserOnHold;