import React, { useEffect, useState } from "react";
import validate from "../../utils/userRegisterValidator";
import {
  register,
  sendOTP,
  signInWithGoogle,
} from "../../services/UserAuthService";
import { toast } from "react-toastify";
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
import { Link, useNavigate } from "react-router-dom";
import LoadingPageWithReactLoading from "../../components/loadingPage/Loading";
import { PRIMARY_COLOR } from "../../constant/colors";
import { IUsers } from "../../@types/user";
import OTPForm from "../../components/userSide/OTPForm";
import ForgotPasswordModal from "../../components/userSide/ForgotPasswordModal";
import AnimatedPage from "../../components/Animation";
import { Image } from "@nextui-org/react";

const UserRegister: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const { loading, modal, error } = useSelector(
    (state: RootState) => state.user
  );

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

      if (otpResponse?.status === 200) {
        dispatch(setModal(true));
      } else if (otpResponse?.error) {
        toast.error(otpResponse.error);
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
      dispatch(setLoading(false));
      toast.success("Something Went Wrong");
      console.log(error);
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

        <div className="min-h-screen bg-[#fcefe7] flex items-center justify-center p-4 ">
          <div className="bg-white rounded-lg shadow-2xl flex max-w-4xl w-full">
            <div className="w-full md:w-1/2 p-8">
              <h1 className="text-1xl font-bold mb-1 text-center">
                LETS GET STARTED
              </h1>
              <p className="text-gray-600 mb-2 text-center">
                Welcome! Please enter your details.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {error?.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.fullName}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                    className="block text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
                    className="block text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {error?.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.confirmPassword}
                    </p>
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
                  className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center"
                >
                  <img
                    src="/google.png"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Sign up with Google
                </button>
              </form>
              <p className="text-center mt-6 text-sm text-gray-600">
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
