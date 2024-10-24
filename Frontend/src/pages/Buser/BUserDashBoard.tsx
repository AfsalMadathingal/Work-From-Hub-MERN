import React, { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import BUserDashboard from '../../components/businessUser/BDashboard';




const BUserDashBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Dashboard"));
  }, []);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<BUserDashboard />} />
      </div>
    </div>
  );
};

export default BUserDashBoard;
