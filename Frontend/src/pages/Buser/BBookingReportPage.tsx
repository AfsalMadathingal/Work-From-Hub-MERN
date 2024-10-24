import React from 'react'
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import BDetailedBookingsReport from '../../components/businessUser/BDetailedBookingsReport';



const BBookingReportPage = () => {
  return (
    <div className="flex h-screen">
    <div className="flex-1 flex flex-col">
      <BusinessUserLayout component={<BDetailedBookingsReport />} />
    </div>
  </div>
  )
}

export default BBookingReportPage

