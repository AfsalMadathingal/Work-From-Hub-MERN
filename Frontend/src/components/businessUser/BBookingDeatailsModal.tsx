import { useEffect } from 'react';
import { X } from 'lucide-react';
import { IWorkspace } from '../../@types/workspace';
import { IUsers } from '../../@types/user';
import { ISeat } from '../../@types/seat';



interface Bookings {
  workspaceName: string;
  userInfo: IUsers[];
  seatInfo: Partial<ISeat>;
  workspaceInfo: IWorkspace;
  date: string;
  amount: string;
  status: string;
  paymentIntentId: string;
  paymentMethod: string;
  paymentStatus: string;
}

interface BookingDetailsModalProps {
  isOpen: boolean;
  booking: Bookings;
  onClose: () => void;
}

const BBookingDetailsModal: React.FC<BookingDetailsModalProps> = ({
  isOpen,
  booking,
  onClose,
}) => {


  console.log(booking);
  
  useEffect(() => {
    console.log(booking);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [booking]);

  if(!isOpen || !booking) {
    return null;
  }

  return (
<div className={`${isOpen ? 'block' : 'hidden'} mt-8 fixed inset-0 z-50 overflow-y-auto dark:bg-gray-900 dark:bg-opacity-10 dark:text-white`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center">
    {/* Background overlay with blur effect */}
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity animate-in fade-in duration-300 backdrop-blur-md dark:bg-gray-800 dark:bg-opacity-50"
      onClick={onClose}
      aria-hidden="true"
    />

    {/* Modal panel with animation */}
    <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg animate-in slide-in-from-bottom duration-300">
      {/* Close button */}
      <div className="absolute right-0 top-0 pr-4 pt-4 z-10">
        <button
          onClick={onClose}
          className="rounded-md bg-white dark:bg-gray-800 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-4 pt-5 sm:p-6">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 w-full text-left sm:mt-0">
            <h2 className="text-2xl font-semibold leading-6 text-center text-gray-900 dark:text-white mb-6">
              Booking Details
            </h2>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {/* Date */}
              <div className="py-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500 dark:text-gray-300">Date</span>
                  <span className="text-gray-900 dark:text-white">
                    {new Date(booking?.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
              {/* Username */}
              <div className="py-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500 dark:text-gray-300">User</span>
                  <span className="text-gray-900 dark:text-white text-right">
                    <div>{booking?.userInfo[0]?.fullName}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {booking?.userInfo[0]?.email}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {booking?.userInfo[0]?.phone}  
                    </div>
                  </span>
                </div>
              </div>

              {/* Workspace */}
              <div className="py-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500 dark:text-gray-300">Workspace</span>
                  <span className="text-right text-gray-900 dark:text-white">
                    <div>{booking?.workspaceInfo?.buildingName}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {booking?.workspaceInfo?.street}, {booking?.workspaceInfo?.district}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {booking?.workspaceInfo?.state}, {booking?.workspaceInfo?.pinCode}
                    </div>
                  </span>
                </div>
              </div>

              {/* Seat Details */}
              <div className="py-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500 dark:text-gray-300">Seat Details</span>
                  <span className="text-gray-900 dark:text-white">
                    Table {booking?.seatInfo.tableNumber}, Seat {booking?.seatInfo.seatNumber}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="py-4">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500 dark:text-gray-300">Price</span>
                  <span className="text-gray-900 dark:text-white font-semibold">
                    ₹{booking?.amount}
                  </span>
                </div>
              </div>

              {/* Payment Details */}
              <div className="py-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500 dark:text-gray-300">Payment Status</span>
                    <span className={`px-2 py-1 text-sm rounded-full ${
                      booking?.paymentStatus.toLowerCase() === 'paid' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking?.paymentStatus}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-500 dark:text-gray-300">Payment Method</span>
                    <span className="text-gray-900 dark:text-white">{booking?.paymentMethod}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default BBookingDetailsModal;