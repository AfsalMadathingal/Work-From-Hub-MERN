import { PencilIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { useState } from "react";
import ProfileEdit from "./ProfileEdit";
import { IUsers } from "../../@types/user";
import { setError, setLoading, setUser } from "../../redux/slices/userSlice";
import { editUserData } from "../../services/userServices";
import toast from "react-hot-toast";
import { validateEditing } from "../../utils/userValidator";

const ProfileDetails = () => {
  const { user,error } = useSelector((state: RootState) => state.user);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = async (userForEdit:IUsers) => {
    dispatch(setLoading(true));

    const error =  validateEditing(userForEdit);

    if(error) {
      dispatch(setLoading(false));
      dispatch(setError(error));
      return null;
    }

    const userWithId = { ...userForEdit, id: user?._id };

    const response  = await editUserData(userWithId);

    if(response.status === 409){
      dispatch(setLoading(false));
      toast.error(response.data.message);
      return null;
    }

    if(response.status === 200) {
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

  return (
    <>
      {isEdit && (
        <ProfileEdit
          isOpen={isEdit}
          user={user}
          onConfirm={handleEdit}
          onCancel={() => setIsEdit(false)}
        />
      )}
      <div className="max-w-2xl dark:bg-gray-800 p-6 bg-white rounded-lg shadow-md mt-8 dark:text-white">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Profile</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Basic info, click +add to add you'r details
            </p>
          </div>
          <button
            onClick={() => {
              setIsEdit(!isEdit);
            }}
            className="flex items-center text-orange-500 hover:text-orange-700 focus:outline-none dark:text-orange-400 dark:hover:text-orange-600"
          >
            <PencilIcon className="w-5 h-5 mr-1" />
            EDIT
          </button>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700">
          <div className="py-4 flex justify-between">
            <span className="font-semibold text-gray-600 dark:text-gray-300">NAME</span>
            <span className="text-gray-800 dark:text-gray-100">{user?.fullName}</span>
          </div>
          <div className="py-4 flex justify-between border-t border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-600 dark:text-gray-300">BIRTHDAY</span>
            {user?.date_of_birth ? (
                <span className="text-gray-800 dark:text-gray-100">{user?.date_of_birth.slice(0,10)}</span>
            ):(
                <button onClick={() => {
                  setIsEdit(!isEdit);
                }} className="text-orange-500 hover:underline dark:text-orange-400 dark:hover:text-orange-600">+ Add</button>
            )}
            
          </div>
          <div className="py-4 flex justify-between border-t border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-600 dark:text-gray-300">GENDER</span>
            {user?.gender ? (
                <span className="text-gray-800 dark:text-gray-100">{user?.gender}</span>
            ):(
                <button onClick={() => {
                  setIsEdit(!isEdit);
                }} className="text-orange-500 hover:underline dark:text-orange-400 dark:hover:text-orange-600">+ Add</button>
            )}
          </div>
          <div className="py-4 flex justify-between border-t border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-600 dark:text-gray-300">PHONE</span>
            {user?.phone ? (
                <span className="text-gray-800 dark:text-gray-100">{user?.phone}</span>
            ):(
                <button onClick={() => {
                  setIsEdit(!isEdit);
                }} className="text-orange-500 hover:underline dark:text-orange-400 dark:hover:text-orange-600">+ Add</button>
            )}
          </div>
          <div className="py-4 flex justify-between border-t border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-600 dark:text-gray-300">YOUR ADDRESS</span>
            <span className="text-gray-800 dark:text-gray-100">brototype kinfra</span>
          </div>
          <div className="py-4 flex justify-between border-t border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-600 dark:text-gray-300">PINCODE</span>
            {user?.pin_code ? (
                <span className="text-gray-800 dark:text-gray-100">{user?.pin_code}</span>
            ):(
                <button 
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
                className="text-orange-500 hover:underline dark:text-orange-400 dark:hover:text-orange-600">+ Add</button>
            )}
          </div>
          <div className="py-4 flex justify-between border-t border-gray-200 dark:border-gray-700">
            <span className="font-semibold text-gray-600 dark:text-gray-300">STATE</span>
            {user?.address ? (
                <span className="text-gray-800 dark:text-gray-100">{user?.address}</span>
            ):(
                <button 
                onClick={() => {
                  setIsEdit(!isEdit);
                }}
                className="text-orange-500 hover:underline dark:text-orange-400 dark:hover:text-orange-600">+ Add</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
