import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import Joi from "joi";
import { emailValidate } from "../../utils/userLoginValidator";
import { setError } from "../../redux/slices/userSlice";

interface DialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: (email: string) => Promise<boolean | null>;
  onCancel: () => void;
  onVerify: (otp: string,email:string) => void;
}

const ForgotPasswordModal: FC<DialogProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  onVerify,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [showDialog, setShowDialog] = useState(isOpen);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch()
  const { loading ,error } = useSelector((state: RootState) => state.user);

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

  const handleConfirm = async () => {
    dispatch(setError({}))
    const error = emailValidate( email );

    if (error) {
        dispatch(setError(error))
      return toast.error(error.email);
    }

    const response = await onConfirm(email);

    console.log('=======fromthe confirm=================================');
    console.log(response);
    console.log('====================================');

    if (response) {
      setOtpSent(true);
    }


    
  };




  

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg max-w-md w-full p-6 transform transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <h2 className="text-lg font-semibold text-center text-gray-800">
          {title}
        </h2>
        <p className="text-gray-600  mt-2">{message}</p>
        <div className="flex flex-col justify-center mt-2">
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-orange-300 focus:outline-none rounded-md focus:border-orange-500"
          />
          {error?.email && (
            <p className="text-red-500 text-sm mt-1  ">{error.email}</p>
          )}
        </div>
        {otpSent && (
          <div className="flex flex-col items-center justify-center mt-2">
            <p>Enter the Code sent to your email</p>
            <div className="flex justify-center mt-2 w-[50%]">
              <input
                type="text"
                placeholder="Enter the code"
                name="otp"
                id="otp"
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 border border-orange-300 focus:outline-none rounded-md focus:border-orange-500"
              />
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition ease-in-out"
          >
            Cancel
          </button>
          {otpSent ? (
            <button
              onClick={() => onVerify(otp,email)}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ease-in-out"
            >
              Verify
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ease-in-out"
            >
              {loading ? (
                <ReactLoading
                  type="spin"
                  height={24}
                  width={24}
                  color="#ffffff"
                />
              ) : (
                "Confirm"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
