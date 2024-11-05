import { useState } from 'react';
import { passwordChangeValidator } from '../../utils/userValidator';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { changePassword } from '../../services/userServices';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { setLoading } from '../../redux/slices/userSlice';
import ReactLoading from 'react-loading';

const PasswordResetModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error,setError] = useState<
    { [key: string]: string }>({});
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {user , loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();




  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    // Handle password change logic here

    const error = passwordChangeValidator({
      currentPassword,
      newPassword,
      confirmPassword,
    });


    if (error) {
      setError(error);
      dispatch(setLoading(false));
      return;
    }


  

    try {

        try {

          if (user && user.email) {
            const response = await changePassword(currentPassword, newPassword, user.email);
            if (response?.status === 200) {
              toast.success(response.data.message);
              onClose();
             
          } 
          } else {
            toast.error("something went wrong");
            console.error("User or email is undefined");
          }
        } catch (error) {

          toast.error("something went wrong");
          console.error(error);
        }
        
        

        

        clearFields();
        dispatch(setLoading(false));

    } catch (error) {
      console.log(error);
      
      clearFields();
        toast.error("Something went wrong");
        
    }


  };


  const handleCancel = () => {
    clearFields();
    onClose();
  };

  const  clearFields = () => {
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setError({});
  };



  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-xl font-semibold text-orange-500 mb-6">Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">Current Password</label>
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-12 transform -translate-y-1/2"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {error.currentPassword && <p className="text-red-500 text-xs">{error.currentPassword}</p>}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
            <input
              type={showNewPassword ? 'text' : 'password'}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-12 transform -translate-y-1/2"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {error.newPassword && <p className="text-red-500 text-xs">{error.newPassword}</p>}
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-12 transform -translate-y-1/2"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {error.confirmPassword && <p className="text-red-500 text-xs">{error.confirmPassword}</p>}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button

            disabled={loading}
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
                {loading ? <ReactLoading type="spin" color="white" height={20} width={20} />: "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetModal;

