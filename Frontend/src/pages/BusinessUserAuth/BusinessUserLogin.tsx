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
} from "../../redux/slices/businessUserSlice";
import { RootState } from "../../redux/store/store";
import validate from "../../utils/userValidator";
import { login } from "../../services/BUserAuthService";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";

const BusinessLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { loading, error , } = useSelector((state: RootState) => state.businessUser);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const formattedErrors = validate({ email, password });

    if (formattedErrors) {
      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setError(formattedErrors));
      }, 300);
    } else {
      dispatch(setError({}));

      const response = await login({ email, password });


      if(response?.statusCode === 200){

        const { userFound, accessToken } = response.data;
        dispatch(setUser(userFound));
        dispatch(setIsAuthenticated(true));
        dispatch(setLoading(false));
        dispatch(setAccessToken(accessToken));
        localStorage.setItem("businessAccessToken", accessToken);
        toast.success("Welcome");
        navigate('/business/dashboard')


      }else{
        dispatch(setError({email:response.data.error,password:response.data.error}))
        dispatch(setLoading(false));

        
      }
    }
  };





  return (
    <>
  
      <div className="flex h-screen bg-[#fcefe7] dark:bg-gray-900 transition dark:text-white">
        <div className="m-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg flex max-w-4xl">
          <div className="w-full p-8">
            <h2 className="text-2xl text-center font-bold mb-4 dark:text-white">
              BUSINESS LOGIN
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
              Welcome back! Please enter your details.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error?.email && (
                  <p className="text-red-500 text-sm mt-1  dark:text-red-400">{error.email}</p>
                )}
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {error?.password && (
                  <p className="text-red-500 text-sm mt-1 dark:text-red-400">{error.password}</p>
                )}
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 dark:bg-gray-700"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 dark:bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-600 shadow-lg flex justify-center "
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
            <p className="text-center mt-6 text-sm text-gray-600 dark:text-gray-300">
              Don't have an account?{" "}
              <Link to={"/business/register"} className="text-blue-500 hover:underline dark:text-blue-400">
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
