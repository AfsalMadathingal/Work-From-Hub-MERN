import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setUser,
  setIsAuthenticated,
  setAccessToken,
} from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store/store";
import validate from "../../utils/userValidator";
import {
  forgotPasswordReset,
  forgotPasswordSendOTP,
  forgotPasswordVerifyOTP,
  login,
  signInWithGoogle,
} from "../../services/UserAuthService";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";
import ForgotPasswordModal from "../../components/userSide/ForgotPasswordModal";
import ResetPasswordModal from "../../components/userSide/ResetPassword";
import AnimatedPage from "../../components/Animation";
import { Image } from "@nextui-org/react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [loadingImage,setLoadingImage] = useState(false)
  const { loading} = useSelector(
    (state: RootState) => state.user
  );
  const error: {
    email?: string;
    password?: string;
  } = useSelector((state: RootState) => state.user.error);
  const [otpToken, setOtpToken] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    ;

    const formattedErrors = validate({ email, password });

    if (formattedErrors) {
      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setError(formattedErrors));
      }, 1000);
    } else {
      dispatch(setError({}));

      const response = await login({ email, password });

      if (response.success) {
        const { userFound, accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        dispatch(setUser(userFound));
        dispatch(setIsAuthenticated(true));
        dispatch(setLoading(false));
      } else {
        dispatch(
          setError({
            email: response.data.error,
            password: response.data.error,
          })
        );
        dispatch(setLoading(false));
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      dispatch(setLoading(true));
      const response = await signInWithGoogle();

      if (response?.success) {
        const { user, accessToken } = response.data;

        localStorage.setItem("accessToken", accessToken);

        dispatch(setUser(user));
        dispatch(setIsAuthenticated(true));
        dispatch(setLoading(false));
        dispatch(setAccessToken(accessToken));
        toast.success("Welcome");
      } else {
        dispatch(setLoading(false));
        toast.success("something Went Wrong");
      }
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
      toast.error("Something went Wrong!");
      ;
    }
  };

  const handleForgotPassword = async (email : string) => {
    dispatch(setLoading(true));

    const response = await forgotPasswordSendOTP(email);

    if (response?.status == 400 || response?.status == 500) {
      toast.error(
        response.status == 500
          ? response.data.error
          : response.data.message || "Something went wrong"
      );

      dispatch(setLoading(false));

      return null;
    }

    if (response?.data.success) {
      toast.success(response.data.message);
      dispatch(setLoading(false));
      return true;
    }

    toast.error("Something went wrong");
    dispatch(setLoading(false));
    return null;
  };

  const handleOTPVerification = async (otp: string, email: string) => {
    try {
      dispatch(setLoading(true));

      if (!otp || otp.length != 4) {
        toast.error("Please Enter valid OTP");
        return null;
      }

      const response = await forgotPasswordVerifyOTP(otp, email);

      if (response?.data.statusCode == 400 || response?.data.statusCode == 500) {
        toast.error(response.data.message || "Enter valid OTP");
      }

      if (response?.data.success) {
        dispatch(setLoading(false));
        setOtpToken(response.data.data.accessToken);
        setForgotPassword(false);
        setResetPassword(true);
      }
    } catch (error) {

      dispatch(setLoading(false));
      console.log('====================================');
      console.log(error);
      console.log('====================================');
      toast.error("Something went wrong");
    }
  };

  const handleResetPassword = async (password: string) => {
    dispatch(setLoading(true));

    const response = await forgotPasswordReset(password, otpToken);

    if (response?.data.success) {
      dispatch(setLoading(false));

      return true;
    }

    if (response?.data.statusCode == 405) {
      toast.error(response.data.message);
      dispatch(setLoading(false));
      return null;
    }

    toast.error("Something went wrong");
    dispatch(setLoading(false));

    return false;
  };

  const handleCancel = () => {
    dispatch(setLoading(false));
    setForgotPassword(false);
    setResetPassword(false);
  };

  useEffect(() => {
    dispatch(setError({}));
  }, [dispatch]);

  return (
    <>
 <AnimatedPage>
      {forgotPassword && (
        <ForgotPasswordModal
          onVerify={handleOTPVerification}
          onConfirm={handleForgotPassword}
          isOpen={forgotPassword}
          onCancel={handleCancel}
          title="Forgot Password"
          message="Enter your email"
        />
      )}
      {resetPassword && (
        <ResetPasswordModal
          onConfirm={handleResetPassword}
          isOpen={resetPassword}
          onCancel={handleCancel}
          title="Reset Password"
          message="Enter your new password"
        />
      )}

<div className="flex h-screen bg-[#fcefe7] dark:bg-gray-900 transition-all duration-300">
  <div className="m-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex max-w-3xl relative overflow-hidden">
    {/* Left Form Section */}
    <div className="p-8 flex-1">
      <h2 className="text-2xl text-center font-bold mb-4 dark:text-white">
        WELCOME BACK
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
        Welcome back! Please enter your details.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md transition-all duration-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error?.email && (
            <p className="text-red-500 text-sm mt-1">{error.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md transition-all duration-300"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error?.password && (
            <p className="text-red-500 text-sm mt-1">{error.password}</p>
          )}
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="text-sm text-gray-600 dark:text-gray-300">Remember me</span>
          </label>
          <p
            onClick={() => setForgotPassword(true)}
            className="text-sm text-blue-500 hover:underline cursor-pointer"
          >
            Forgot password?
          </p>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 shadow-lg flex justify-center transition-all duration-300"
        >
          {loading ? (
            <ReactLoading
              type="spin"
              height={24}
              width={24}
              color="#ffffff"
            />
          ) : (
            "Sign in"
          )}
        </button>
      </form>
      <div className="mt-6 shadow-lg">
        <button
          onClick={handleGoogleSignIn}
          className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-md flex items-center justify-center transition-all duration-300 dark:bg-gray-700"
        >
          <img
            src="/google.png"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
      </div>
      <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-300">
        Don't have an account?{" "}
        <Link to="/sign-up" className="text-blue-500 hover:underline">
          Sign up for free
        </Link>
      </p>
    </div>

    {/* Right Image Section */}
    <div className="w-1/2 hidden lg:block relative">
      {/* Placeholder while image loads */}
      {loadingImage ? (
        <div className="h-full bg-gray-300 dark:bg-gray-700 animate-pulse" />
      ) : (
        <Image
          className="object-cover h-full w-full rounded-r-lg opacity-90 transition-opacity duration-300"
          alt="Login page image"
          src="/loginpageimage.webp"
          onLoad={() => setLoadingImage(false)} // Ensure loading state is removed once the image loads
        />
      )}
    </div>
  </div>
</div>

    </AnimatedPage>
    </>
  );
};

export default LoginPage;
