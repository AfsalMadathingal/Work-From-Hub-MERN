import React, { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { toast } from 'react-toastify';
import { PRIMARY_COLOR } from '../../constant/colors';
import { setAccessToken, setError, setFormData, setIsAuthenticated, setLoading, setModal, setUser } from '../../redux/slices/userSlice';
import { register, sendOTP } from '../../services/UserAuthService';
import { useNavigate } from 'react-router-dom';
import { Checkmark } from 'react-checkmark'

const OTPForm: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '',]);
  const [verified, setVerified] = useState(false);
  const [timer, setTimer] = useState<number>(60);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formData } = useSelector((state: RootState) => state.user);


  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-input${index + 2}`) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleSubmit = async () => {
  
    const OTPSubmited = otp.join('');

    try {
      const apiResponse = await register(formData, { otp: OTPSubmited });

      if (apiResponse?.alert) {
        dispatch(setLoading(false));
        return toast.error(apiResponse.message);
      }

      if (apiResponse?.data) {
        const { user, accessToken, refreshToken } = apiResponse.data;
        setVerified(true);
        console.log('====================================');
        console.log(user);
        console.log('====================================');
        await new Promise((resolve) => setTimeout(() => resolve("wait for animation"), 3000));
        dispatch(setModal(false));
        dispatch(setLoading(false));
        dispatch(setUser(user));
        dispatch(setIsAuthenticated(true));
        dispatch(setAccessToken(accessToken));
        dispatch(setFormData({}))
        toast.success("Registered successfully");
        navigate("/u/home/");
      } else {
        console.log(apiResponse);
        dispatch(setLoading(false));
        dispatch(setError(apiResponse));
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleResend = async () => {
    if (timer === 0) {
      setTimer(60); // Reset timer to 60 seconds
      const otpResponse = await sendOTP(formData);

      if(otpResponse?.error){
        toast.error(otpResponse.error)
      }
    }
  };
  const handleClose = () => {
    dispatch(setModal(false));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {verified ? <Checkmark size='96px' /> :
        <form
          
          className="otp-Form w-60 bg-white p-8 rounded-lg shadow-lg relative flex flex-col items-center gap-5"
        >
          <button
            type="button"
            onClick={handleClose}
            className="exitBtn absolute top-2 right-2 bg-white text-primaryOrange rounded-full w-6 h-6 flex items-center justify-center shadow-sm"
          >
            &times;
          </button>
          <span className="mainHeading text-lg font-bold text-gray-800">Enter OTP</span>
          <p className="otpSubheading text-xs text-center text-gray-600">
            We have sent a verification code to your Email
          </p>
          <div className="inputContainer flex justify-between w-full">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`otp-input${index + 1}`}
                className="otp-input w-8 h-8 text-center bg-gray-200 rounded-md focus:bg-blue-100 transition duration-300 outline-none"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className={`verifyButton w-full h-10 bg-primaryOrange text-white rounded-md font-semibold hover:bg-orange-400 transition duration-200`}
          >
            Verify
          </button>
          <p className="resendNote text-xs text-gray-600 text-center mt-4">
            Didn't receive the code?
            <button
              type="button"
              className="resendBtn text-orange-500 font-bold ml-1"
              onClick={handleResend}
              disabled={timer > 0} // Disable the button until timer reaches 0
            >
              {timer > 0 ? `Resend Code in ${timer}s` : 'Resend Code'}
            </button>
          </p>
        </form>}
    </div>
  );
};

export default OTPForm;