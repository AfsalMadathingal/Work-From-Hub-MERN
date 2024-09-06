import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import ReactLoading from "react-loading";
import AnimatedPage from "../Animation";

interface DialogProps {
  isOpen: boolean;
  user: {
    fullName: string;
    phone: string;
    date_of_birth: Date;
    pin_code: string;
    state: string;
    city: string;
    gender?: string;
  };
  onConfirm: (user: {
    fullName: string;
    phone: string;
    date_of_birth: Date;
    pin_code: string;
    state: string;
    city: string;
    gender?: string;
  }) => Promise<boolean | null>;
  onCancel: () => void;
}

const ProfileEdit: FC<DialogProps> = ({
  isOpen,
  user,
  onConfirm,
  onCancel,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [showDialog, setShowDialog] = useState(isOpen);
  const [firstName, setFirstName] = useState(user.fullName.split(" ")[0]);
  const [lastName, setLastName] = useState(user.fullName.split(" ")[1]);
  const [date_of_birth, setdate_of_birth] = useState(user.date_of_birth);
  const [pin_code, setpin_code] = useState(user.pin_code);
  const [gender, setGender] = useState(user.gender);
  const [phone, setPhone] = useState(user.phone);
  const [state, setState] = useState(user.state);

  const [city, setCity] = useState(user.city);
  const { loading, error } = useSelector((state: RootState) => state.user);

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
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <AnimatedPage>
        <div
          className={`bg-white rounded-lg shadow-lg max-w-lg w-full p-6 transform transition-all duration-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
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
              {error?.fullName && (
                <p className="text-red-500 p-0 m-0 ">{error.fullName}</p>
              )}
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg w-full"
                placeholder="Phone Number"
                value={phone?.toString()}
                onChange={(e) => setPhone(e.target.value)}
              />

              <input
                type="date"
                className="p-2 border border-gray-300 rounded-lg w-full"
                placeholder="Date of Birth"
                value={date_of_birth?.slice(0, 10)}
                onChange={(e) => setdate_of_birth(e.target.value)}
              />
            </div>
            {error?.date_of_birth && (
              <p className="text-red-500 p-0 m-0 ">{error.date_of_birth}</p>
            )}
            {error?.phone && (
              <p className="text-red-500 p-0 m-0 ">{error.phone}</p>
            )}
            <div className="flex space-x-4">
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-lg w-full"
                placeholder="pin_code"
                value={pin_code}
                onChange={(e) => setpin_code(e.target.value)}
              />
              {error?.pin_code && (
                <p className="text-red-500 p-0 m-0 ">
                  {error.pin_code.split(`"`).join("")}
                </p>
              )}
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg w-full"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              {error?.state && (
                <p className="text-red-500 p-0 m-0 ">{error.state}</p>
              )}
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                className="p-2 border border-gray-300 rounded-lg w-full"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              {error?.city && (
                <p className="text-red-500 p-0 m-0 ">{error.city}</p>
              )}
              <select
                className="p-2 border border-gray-300 rounded-lg w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled hidden>
                  Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>
            {error?.gender && (
              <p className="text-red-500 p-0 m-0 ">
                {error.gender.split(`"`).join("")}
              </p>
            )}
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition ease-in-out"
            >
              Cancel
            </button>
            <button
              onClick={() =>
                onConfirm({
                  fullName: `${firstName} ${lastName}`,
                  phone,
                  date_of_birth,
                  pin_code,
                  state,
                  city,
                  gender,
                })
              }
              disabled={loading}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ease-in-out"
            >
              {loading ? (
                <ReactLoading
                  type="spin"
                  color="white"
                  height={20}
                  width={20}
                />
              ) : (
                "Update"
              )}
            </button>
          </div>
        </div>
      </AnimatedPage>
    </div>
  );
};

export default ProfileEdit;
