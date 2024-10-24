import React from 'react'
import AdminLayout from '../../components/admin/AdminLayout';
import DetailedBookingsReport from '../../components/admin/DetailedBookingsReport';


const BookingReportPage = () => {
  return (
    <div className="flex h-screen">
    <div className="flex-1 flex flex-col">
      <AdminLayout component={<DetailedBookingsReport />} />
    </div>
  </div>
  )
}

export default BookingReportPage

