import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginSchema from "../../utils/userLoginValidator";
import LoadingPageWithReactLoading from "../../components/loadingPage/Loading";
import { PRIMARY_COLOR } from "../../constant/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setUser,
  setIsAuthenticated,
  setAccessToken,
} from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store/store";
import validate from "../../utils/userLoginValidator";
import { login, signInWithGoogle } from "../../services/UserAuthService";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { loading, error , isAuthenticated } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    console.log(isAuthenticated);
    
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
        const { userFound, accessToken, refreshToken } = response.data;
        dispatch(setUser(userFound));
        dispatch(setIsAuthenticated(true));
        dispatch(setLoading(false));
      }else{
        dispatch(setError({email:response.data.error,password:response.data.error}))
        dispatch(setLoading(false));
        
      }
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
   {loading && <LoadingPageWithReactLoading  transparent={true} type="spin" color={PRIMARY_COLOR}/>}
      <div className="flex h-screen bg-[#fcefe7] transition ">
        <div className="m-auto bg-white rounded-lg shadow-2xl flex max-w-3xl ">
          <div className="  p-8">
            <h2 className="text-2xl text-center font-bold mb-4">
              WELCOME BACK
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Welcome back! Please enter your details.
            </p>
            <form onSubmit={handleSubmit}>
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
            <div className="mt-6  shadow-lg">
              <button 
              onClick={handleGoogleSignIn}
              className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center">
                <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
                Sign in with Google
              </button>
            </div>
            <p className="text-center mt-6 text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to={"/sign-up"} className="text-blue-500 hover:underline">
                Sign up for free
              </Link>
            </p>
          </div>
          <div className="w-1/2 hidden lg:block">
            <img
              src="/loginpageimage.webp"
              alt="Person working on laptop"
              className="object-cover h-full w-full rounded-r-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default LoginPage;
