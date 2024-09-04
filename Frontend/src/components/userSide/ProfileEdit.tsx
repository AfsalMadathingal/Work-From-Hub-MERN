import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import ReactLoading from 'react-loading';

interface DialogProps {
  isOpen: boolean;
  user: {
    fullName: string;
    email: string;
    date_of_birth: string;
    pin_code: string;
    state: string;
    city: string;
  };
  onConfirm: (user: {
    fullName: string;
    email: string;
    date_of_birth: string;
    pin_code: string;
    state: string;
    city: string;
  }) => Promise<boolean | null>;
  onCancel: () => void;
}

const ProfileEdit: FC<DialogProps> = ({ isOpen, user, onConfirm, onCancel }) => {
    
  const [isVisible, setIsVisible] = useState(isOpen);
  const [showDialog, setShowDialog] = useState(isOpen);
  const [firstName, setFirstName] = useState(user.fullName.split(' ')[0]);
  const [lastName, setLastName] = useState(user.fullName.split(' ')[1]);
  const [email, setEmail] = useState(user.email);
  const [date_of_birth, setdate_of_birth] = useState(user.date_of_birth);
  const [pin_code, setpin_code] = useState(user.pin_code);
  const [state, setState] = useState(user.state);
  const [city, setCity] = useState(user.city);
  const {loading} = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (isOpen) {
      setShowDialog(true); 
      setTimeout(() => setIsVisible(true), 10); 
    } else {
      setIsVisible(false); 
      const timer = setTimeout(() => setShowDialog(false), 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);



  if (!showDialog) return null; 

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg max-w-lg w-full p-6 transform transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-800">Edit Profile</h2>
        <div className="space-y-4 mt-4">
          <div className="flex space-x-4">
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className="flex-grow p-2 border border-gray-300 rounded-lg"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="email"
            className="p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="date"
            className="p-2 border border-gray-300 rounded-lg w-full"
            placeholder="Date of Birth"
            value={date_of_birth}
            onChange={(e) => setdate_of_birth(e.target.value)}
          />
          <input
            type="number"
            className="p-2 border border-gray-300 rounded-lg w-full"
            placeholder="pin_code"
            value={pin_code}
            onChange={(e) => setpin_code(e.target.value)}
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg w-full"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded-lg w-full"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm({
              fullName: `${firstName} ${lastName}`,
              email,
              date_of_birth,
              pin_code,
              state,
              city
            })}
            disabled={loading}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ease-in-out"
          >
            {loading ? <ReactLoading type="spin" color="white" height={20} width={20} /> : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;

