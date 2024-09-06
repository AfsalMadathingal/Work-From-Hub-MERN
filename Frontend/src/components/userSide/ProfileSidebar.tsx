import React, { useState, useRef, useEffect } from 'react';
import { FaAd, FaAddressCard, FaBars, FaBook, FaCross, FaSignOutAlt, FaUser, FaWallet, FaWindowClose } from 'react-icons/fa';
import { EditIcon, EyeIcon, PencilIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { logout } from '../../services/UserAuthService';
import { setIsAuthenticated, setLoading, setUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from 'react-loading';
import { editUserProfilePic } from '../../services/userServices';
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import AnimatedPage from '../Animation';

const ProfileSidebar = () => {
  const { user, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [editProfilePic, setEditProfilePic] = useState(false);
  const [profilePic, setProfilePic] = useState(user?.profile_pic);
  const [formData, setFormData] = useState(new FormData());
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const cropperRef = useRef<ReactCropperElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    await logout();
    dispatch(setUser({}));
    navigate('/login');
    dispatch(setIsAuthenticated(false));
    toast.info('Logged out successfully');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setProfilePic(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoSave = async () => {
    dispatch(setLoading(true));

    try {
      const cropper = cropperRef.current?.cropper;
      const croppedCanvas = cropper.getCroppedCanvas();
      croppedCanvas.toBlob((blob) => {
        if (blob && selectedFile) {
          const formData = new FormData();
          formData.append('image', blob, `${user?._id}_${selectedFile.name}`);
          formData.append('id', user?._id);

          editUserProfilePic(formData).then((response) => {

            console.log(response);
            
            if (response.status === 200) {
              dispatch(setUser(response.data?.data));
              handleCancel();
              toast.success('Profile picture uploaded successfully');
            } else {
              toast.error('Failed to upload profile picture');
            }
            dispatch(setLoading(false));
          });
        }
      }, selectedFile?.type);
    } catch (error) {
      console.error('Error uploading profile picture:', error);
      toast.error('Error occurred while uploading profile picture');
      dispatch(setLoading(false));
    }
  };

  const handleCancel = () => {
    setEditProfilePic(false);
    setProfilePic(user?.profile_pic);
    setSelectedFile(null);
  };



  return (
    <>

      {/* modal to edit image */}


      <div className={`fixed z-50 inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${editProfilePic ? 'block' : 'hidden'}`}>
        <div className="bg-white rounded-lg p-4 w-2/6 text-center flex flex-col justify-center items-center relative">
          <div className="absolute top-3 right-3">
            <button onClick={handleCancel} className="bg-gray-200 rounded-full p-2 text-gray-700 hover:bg-gray-300">
              <FaWindowClose className="w-6 h-6" />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <h2 className="text-lg font-semibold">Edit Profile Picture</h2>
          </div>
          <div className="h-1 w-2/4 bg-orange-500 mt-2 rounded-full"></div>
          <div className="mt-4">
            {selectedFile ? (
              <Cropper
                src={profilePic}
                style={{ height: 400, width: '100%' }}
                initialAspectRatio={1}
                guides={false}
                ref={cropperRef}
              />
            ) : (
              <img src={user?.profilePic} className="w-40 h-40 rounded-full object-full mx-auto" alt="" />
            )}
            <div className="mt-4 flex flex-col justify-center items-center">
              <label htmlFor="profilePic" className="bg-gray-500 py-2 px-4 rounded-md text-white font-bold cursor-pointer">
                <span className="">+ Choose Image</span>
              </label>
              <button
                disabled={loading}
                onClick={handlePhotoSave}
                className="bg-orange-500 py-2 px-4 rounded-md text-white font-bold mt-4"
              >
                {loading ? <Loading type="spin" color="white" height={20} width={20} /> : 'Save'}
              </button>
            </div>
            <input type="file" className="hidden" id="profilePic" onChange={handleFileChange} />
          </div>
        </div>
      </div>

      <aside className={`bg-white shadow-md mt-5 ms-56 rounded-lg p-4 transition-transform ${isSidebarOpen ? 'transform-none' : '-translate-x-full lg:translate-x-0'} lg:w-60 lg:block`}>
        <div className="flex flex-col justify-center items-center">
          <img src={user?.profilePic ? user?.profilePic : "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-icon-hd.png"} className="w-20 h-26 rounded-full object-cover" alt="" />
          <div className="flex flex-col mt-4">
            <button onClick={() => setEditProfilePic(true)} className="text-gray-600 text-sm hover:text-orange-500 flex items-center">
              <EditIcon className="mr-2 w-4" />
              Edit Profile Pic
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center">
          <p className="text-lg font-semibold">{user?.fullName}</p>
          <p className="text-gray-600 text-small">{user?.email}</p>
        </div>
        <div className="mt-6 space-y-2">
          <button className="w-full border border-gray-300 text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg flex items-center">
            <FaUser className="mr-2" />
            Profile
          </button>
          <button className="w-full border border-gray-300 text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg flex items-center">
            <FaBook className="mr-2" />
            Bookings
          </button>
          <button className="w-full border border-gray-300 text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg flex items-center">
            <FaAddressCard className="mr-2" />
            Membership
      
          </button>
          <button className="w-full border border-gray-300 text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg flex items-center">
            <FaWallet className="mr-2" />
            Wallet
          </button>
          <button onClick={handleLogout} className="w-full border border-gray-300 text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg flex items-center">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </aside>

      {/* Toggle button for smaller screens */}
      <button onClick={toggleSidebar} className="lg:hidden p-2 text-orange-500 focus:outline-none fixed top-4 left-4 z-20">
        ☰
      </button>
    </>
  );
};

export default ProfileSidebar;
