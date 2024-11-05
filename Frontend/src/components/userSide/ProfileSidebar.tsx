import React, { useState, useRef } from "react";
import {
  FaUser,
  FaBook,
  FaAddressCard,
  FaWallet,
  FaSignOutAlt,
  FaWindowClose,
} from "react-icons/fa";
import { EditIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { logout } from "../../services/UserAuthService";
import {
  setError,
  setIsAuthenticated,
  setLoading,
  setUser,
} from "../../redux/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "react-loading";
import { editUserProfilePic } from "../../services/userServices";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import PasswordResetModal from "./PasswordResetModal";

const ProfileSidebar = () => {
  const { user, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [editProfilePic, setEditProfilePic] = useState(false);
  const [profilePic, setProfilePic] = useState(user?.profile_pic);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const cropperRef = useRef<ReactCropperElement>(null);
  const [changePasswordModal, setChangePasswordModal] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    await logout();
    dispatch(setUser({}));
    navigate("/login");
    dispatch(setIsAuthenticated(false));
    toast.success("Logged out successfully");
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
    const croppedCanvas = cropper?.getCroppedCanvas();
    croppedCanvas?.toBlob((blob) => {
      if (blob && selectedFile && user) {
        const formData = new FormData();
        formData.append("image", blob, `${user._id}_${selectedFile.name}`);
        formData.append("id", user._id!);

        editUserProfilePic(formData).then((response) => {
          if (response?.status === 200) {
            dispatch(setUser(response.data?.data));
            handleCancel();
            toast.success("Profile picture uploaded successfully");
          } else {
            toast.error("Failed to upload profile picture");
          }
          dispatch(setLoading(false));
        });
      } else {
        console.error("User or selected file is null or undefined");
      }
    }, selectedFile?.type);
  } catch (error) {
    console.error("Error uploading profile picture:", error);
    toast.error("Error occurred while uploading profile picture");
    dispatch(setLoading(false));
  }
};
  const handleCancel = () => {
    setEditProfilePic(false);
    setProfilePic(user?.profile_pic);
    setSelectedFile(null);
  };

  const handlePasswordResetClose = () => {
    setChangePasswordModal(false);
    dispatch(setLoading(false));
    dispatch(setError({}));
  };

  return (
    <>
 <div className="relative flex h-full">
      {/* Password Reset Modal */}
      <PasswordResetModal
        isOpen={changePasswordModal}
        onClose={handlePasswordResetClose}
      />

      {/* Profile Picture Edit Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${editProfilePic ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleCancel} />
        <div className="relative w-full max-w-xl mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
          <button
            onClick={handleCancel}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <FaWindowClose className="w-6 h-6" />
          </button>
          
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Edit Profile Picture</h2>
              <div className="mx-auto w-24 h-1 bg-orange-500 dark:bg-orange-400 rounded-full" />
            </div>

            <div className="mt-6">
              {selectedFile ? (
                <Cropper
                  src={profilePic}
                  style={{ height: 400, width: "100%" }}
                  initialAspectRatio={1}
                  guides={false}
                  ref={cropperRef}
                  className="rounded-lg"
                />
              ) : (
                <img
                  src={user?.profilePic}
                  className="w-40 h-40 rounded-full object-cover mx-auto ring-4 ring-orange-500/20"
                  alt="Profile"
                />
              )}
            </div>

            <div className="flex flex-col items-center gap-3 mt-6">
              <label
                htmlFor="profilePic"
                className="px-6 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg cursor-pointer transition-colors duration-200 text-gray-700 dark:text-gray-200 font-medium flex items-center gap-2"
              >
                <EditIcon className="w-4 h-4" />
                Choose Image
              </label>
              <button
                disabled={loading}
                onClick={handlePhotoSave}
                className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 rounded-lg text-white font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <Loading type="spin" color="white" height={20} width={20} />
                ) : (
                  'Save Changes'
                )}
              </button>
            </div>

            <input
              type="file"
              className="hidden"
              id="profilePic"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative bg-white dark:bg-gray-800 shadow-lg lg:shadow-none z-40 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          transition-all duration-300 ease-in-out 
          w-72 lg:w-72 h-full overflow-y-auto
          lg:transform-none`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative group">
              <img
                src={user?.profilePic || "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-icon-hd.png"}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-orange-500/20"
                alt="Profile"
              />
              <button
                onClick={() => setEditProfilePic(true)}
                className="absolute bottom-0 right-0 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                <EditIcon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <div className="text-center space-y-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{user?.fullName}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{user?.email}</p>
              <button
                onClick={() => setChangePasswordModal(true)}
                className="text-sm text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-500 font-medium transition-colors duration-200"
              >
                Change Password
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-8 space-y-2">
            <Link
              to="/user/profile"
              className="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
            >
              <FaUser className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3" />
              <span className="font-medium group-hover:text-orange-500 dark:group-hover:text-orange-400">Profile</span>
            </Link>

            <Link
              to="/user/bookings"
              className="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
            >
              <FaBook className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3" />
              <span className="font-medium group-hover:text-orange-500 dark:group-hover:text-orange-400">Bookings</span>
            </Link>

            <Link
              to="/user/membership"
              className="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
            >
              <FaAddressCard className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3" />
              <span className="font-medium group-hover:text-orange-500 dark:group-hover:text-orange-400">Membership</span>
            </Link>

            <Link
              to="/user/wallet"
              className="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
            >
              <FaWallet className="w-5 h-5 text-orange-500 dark:text-orange-400 mr-3" />
              <span className="font-medium group-hover:text-orange-500 dark:group-hover:text-orange-400">Wallet</span>
            </Link>
          </nav>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-auto flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200 group"
          >
            <FaSignOutAlt className="w-5 h-5 text-red-500 dark:text-red-400 mr-3" />
            <span className="font-medium group-hover:text-red-500 dark:group-hover:text-red-400">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Toggle */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg"
      >
        <svg
          className="w-6 h-6 text-orange-500 dark:text-orange-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
    </>
  );
};

export default ProfileSidebar;
