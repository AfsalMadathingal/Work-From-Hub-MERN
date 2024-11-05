import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pencil as PencilIcon, Plus } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { RootState } from '../../redux/store/store';
import { setError, setLoading, setUser } from '../../redux/slices/userSlice';
import { editUserData } from '../../services/userServices';
import { validateEditing } from '../../utils/userValidator';
import { IUsers } from '../../@types/user';
import ProfileEdit from './ProfileEdit';



const ProfileDetails = () => {
  const user  = useSelector((state: RootState) => state.user.user);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();


  const handleEdit = async (userForEdit: Partial<IUsers>) => {
    dispatch(setLoading(true));

    const validationError = validateEditing(userForEdit);
    if (validationError) {
      dispatch(setLoading(false));
      dispatch(setError(validationError));
      return null;
    }

    const userWithId = { ...userForEdit, id: user?._id };
    const response = await editUserData(userWithId as unknown as IUsers);

    if (response?.status === 409) {
      dispatch(setLoading(false));
      toast.error(response.data.message);
      return null;
    }

    if (response?.status === 200) {
      dispatch(setLoading(false));
      dispatch(setUser(response.data.data));
      setIsEdit(false);
      toast.success("Profile Updated Successfully");
    } else {
      dispatch(setLoading(false));
      toast.error("Something went wrong");
    }

    return null;
  };

  const ProfileField = ({ 
    label, 
    value, 
    onClick 
  }: { 
    label: string; 
    value?: string | null; 
    onClick?: () => void; 
  }) => (
    <div className="group py-4 px-4 -mx-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-lg">
      <span className="text-sm font-medium text-gray-600 dark:text-gray-300 tracking-wide">
        {label}
      </span>
      {value ? (
        <span className="text-gray-800 dark:text-gray-100">
          {label === "BIRTHDAY" && value ? value.slice(0, 10) : value}
        </span>
      ) : (
        <button
          onClick={onClick}
          className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">Add</span>
        </button>
      )}
    </div>
  );

  return (
    <>
      {isEdit && user && (
        <ProfileEdit
          isOpen={isEdit}
          user={user}
          onConfirm={handleEdit}
          onCancel={() => setIsEdit(false)}
        />
      )}
      
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700/50 overflow-hidden">
          {/* Header */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Profile
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Basic info, click +add to add your details
                </p>
              </div>
              
              <button
                onClick={() => setIsEdit(true)}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-500/20 transition-colors duration-200"
              >
                <PencilIcon className="w-4 h-4 mr-2" />
                <span className="font-medium">Edit Profile</span>
              </button>
            </div>

            {/* Profile Fields */}
            <div className="divide-y divide-gray-200 dark:divide-gray-700/50">
              <ProfileField 
                label="NAME" 
                value={user?.fullName} 
                onClick={() => setIsEdit(true)} 
              />
              
          <ProfileEdit
            isOpen={isEdit}
            user={user}
            onConfirm={handleEdit}
            onCancel={() => setIsEdit(false)}
          />
              
              <ProfileField 
                label="GENDER" 
                value={user?.gender} 
                onClick={() => setIsEdit(true)} 
              />
              
              <ProfileField 
                label="PHONE" 
                value={user?.phone} 
                onClick={() => setIsEdit(true)} 
              />
              
              <ProfileField 
                label="YOUR ADDRESS" 
                value="brototype kinfra" 
              />
              
              <ProfileField 
                label="PINCODE" 
                value={user?.pin_code} 
                onClick={() => setIsEdit(true)} 
              />
              
              <ProfileField 
                label="STATE" 
                value={user?.address} 
                onClick={() => setIsEdit(true)} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;