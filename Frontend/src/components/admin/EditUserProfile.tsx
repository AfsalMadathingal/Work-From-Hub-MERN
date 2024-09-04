import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { userEditValidate } from '../../utils/adminValidator';

const EditUserProfile = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    status: user.status,
    dateJoined: user.dateJoined,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setShowProfile(true);
    setTimeout(() => setIsVisible(true), 10); 
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {


    const formattedErrors = userEditValidate({
      fullName: formData.fullName,
      email: formData.email,
    });
    if (formattedErrors) {
      setErrors(formattedErrors);
      return;
    }
    if (formData.fullName  == user.fullName && formData.email == user.email) {
      toast.error('If you dont want to change any details, please click cancel.');
      return;
    }

    
    
    onSave(formData);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowProfile(false);
      onCancel();
    }, 300);
  };

  if (!showProfile) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 w-96 transform transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <h2 className="text-xl font-semibold text-center mb-4">Edit User Profile</h2>
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Save and Cancel Buttons */}
        <div className="flex justify-between">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none transition ease-in-out"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none transition ease-in-out"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;
