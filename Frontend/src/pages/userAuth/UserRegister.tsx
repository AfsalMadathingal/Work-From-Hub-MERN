import React, { useEffect, useState } from "react";
import validate from "../../utils/userRegisterValidator";
import { sendOTP, signInWithGoogle } from "../../services/UserAuthService";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import {
  setAccessToken,
  setError,
  setFormData,
  setIsAuthenticated,
  setLoading,
  setModal,
  setUser,
} from "../../redux/slices/userSlice";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import LoadingPageWithReactLoading from "../../components/loadingPage/Loading";
import { PRIMARY_COLOR } from "../../constant/colors";
import OTPForm from "../../components/userSide/OTPForm";
import AnimatedPage from "../../components/Animation";
import { Image } from "@nextui-org/react";
import axios from "axios";

const UserRegister: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, modal } = useSelector(
    (state: RootState) => state.user
  );

  const error :{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  } = useSelector((state: RootState) => state.user.error);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const formattedErrors = validate({
        fullName,
        email,
        password,
        confirmPassword,
      });

      if (formattedErrors) {
        setTimeout(() => {
          dispatch(setLoading(false));
          dispatch(setError(formattedErrors));
        }, 1000);
        return;
      }

      dispatch(setError({}));
      dispatch(setFormData({ fullName, email, password }));

     const otpResponse = await sendOTP({ fullName, email, password });
     
     if (axios.isAxiosError(otpResponse)) {
       toast.error(otpResponse.message);
     } else if (otpResponse?.status === 200) {
       dispatch(setModal(true));
     } else {
       toast.error("Something went wrong");
     }

      dispatch(setLoading(false));
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
      toast.error("Something Went Wrong");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      dispatch(setLoading(true));
      const response = await signInWithGoogle();

      if (response.success) {
        const { user, accessToken } = response.data;
        dispatch(setUser(user));
        dispatch(setIsAuthenticated(true));
        dispatch(setLoading(false));
        dispatch(setAccessToken(accessToken));
      }
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
      toast.success("Something Went Wrong");
    }
  };

  useEffect(() => {
    dispatch(setError({}));
  }, []);

  return (
    <>
<AnimatedPage>
  {loading && (
    <LoadingPageWithReactLoading
      type="spin"
      transparent={true}
      color={PRIMARY_COLOR}
    />
  )}

  {modal && <OTPForm />}

  <div className="min-h-screen bg-[#fcefe7] dark:bg-gray-900 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-2xl flex max-w-4xl w-full dark:bg-gray-800">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-1xl font-bold mb-1 text-center text-gray-900 dark:text-white">
          LET'S GET STARTED
        </h1>
        <p className="text-gray-600 mb-2 text-center dark:text-gray-300">
          Welcome! Please enter your details.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 mb-2 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {error?.fullName && (
              <p className="text-red-500 text-sm mt-1">{error.fullName}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error?.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 mb-2 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error?.password && (
            <p className="text-red-500 text-sm mt-1">{error.password}</p>
          )}

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error?.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 mb-4 text-center flex justify-center"
          >
            {loading ? (
              <ReactLoading
                type="spin"
                height={24}
                width={24}
                color="#ffffff"
              />
            ) : (
              "Sign Up"
            )}
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center dark:text-gray-300"
          >
            <img
              src="/google.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </form>
        <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500 hover:underline">
            Sign In{" "}
          </Link>
        </p>
      </div>
      <div className="hidden md:block md:w-1/2">
        <Image
          src="/loginpageimage.webp"
          alt="Person working on laptop"
          className="object-cover h-full w-full rounded-r-lg"
        />
      </div>
    </div>
  </div>
</AnimatedPage>

    </>
  );
};

export default UserRegister;
