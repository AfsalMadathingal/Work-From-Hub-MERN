import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingPageWithReactLoading from "../../components/loadingPage/Loading";
import { PRIMARY_COLOR } from "../../constant/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setUser,
  setIsAuthenticated,
  setAccessToken,
  setModal,
  setFormData,
} from "../../redux/slices/businessUserSlice";
import { RootState } from "../../redux/store/store";
import validate from "../../utils/userRegisterValidator";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import { register, sendOTP } from "../../services/BUserAuthService";
import BusinessUserOTPForms from "../../components/businessUser/BusinessUserOTPForm";

const BusinessLogin: React.FC = () => {
  const [fullName,setFullName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false);

  const { loading, error , modal } = useSelector((state: RootState) => state.businessUser);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setError({}));
    dispatch(setLoading(true));
  
    const formattedErrors = validate({ fullName, email, password, confirmPassword });
  
    if (formattedErrors) {
      dispatch(setLoading(false));
      dispatch(setError(formattedErrors));
      return;
    }

    dispatch(setError({}));
    dispatch(setFormData({ fullName, email, password }));
  
    try {
      const otpResponse = await sendOTP({ fullName, email, password });


      
      if (otpResponse?.status === 200) {
        dispatch(setModal(true));
    } else if (otpResponse?.error) {
        toast.error(otpResponse.error);
    }
    dispatch(setLoading(false));

    } catch (error) {
      toast.error('Failed to submit. Please try again later.');
    } finally {
      dispatch(setLoading(false));
    }
  };
  


  const handleGoogleSignIn = async ()=>{

    try {
      dispatch(setLoading(true))
      const response = await  signInWithGoogle()
     
      if(response?.success){
        const {user,accessToken} = response.data ;

        dispatch(setUser(user))
        dispatch(setIsAuthenticated(true))
        dispatch(setLoading(false))
        dispatch(setAccessToken(accessToken))
        toast.success("Welcome")
        
      }else{
  
        dispatch(setLoading(false))
        toast.success("something Went Wrong")

      }

    } catch (error) {
      dispatch(setLoading(false))
      toast.error("Something went Wrong!")
      console.log(error);
      
    }
   

    
  }


  return (
    <>
    {loading && <LoadingPageWithReactLoading transparent={true} type="spin" color={PRIMARY_COLOR}/> }

    {modal && <BusinessUserOTPForms />}

      <div className="flex h-screen bg-[#fcefe7] transition ">
        <div className="m-auto bg-white rounded-lg shadow-lg flex max-w-4xl">
          <div className="w-full p-8">
            <h2 className="text-2xl text-center font-bold mb-4">
              BUSINESS ACCOUNT REGISTER
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Please fill your details.
            </p>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {error?.fullName && (
                  <p className="text-red-500 text-sm mt-1  ">{error.fullName}</p>
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
                  <p className="text-red-500 text-sm mt-1  ">{error.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">
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
                {error?.password && (
                  <p className="text-red-500 text-sm mt-1">{error.password}</p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 mb-2">
                 Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error?.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>
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
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 shadow-lg flex justify-center "
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
            <p className="text-center mt-6 text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to={"/sign-up"} className="text-blue-500 hover:underline">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default BusinessLogin;
