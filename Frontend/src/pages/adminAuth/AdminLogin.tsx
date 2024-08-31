import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setUser,
  setIsAuthenticated,
  setAccessToken,
} from "../../redux/slices/adminSlice";
import { RootState } from "../../redux/store/store";
import { login } from "../../services/adminAuth";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import {loginValidate} from "../../utils/adminValidator";

const AdminLogin: React.FC = () => {

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { loading, error , } = useSelector((state: RootState) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const formattedErrors = loginValidate({ userId, password });

    if (formattedErrors) {
      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setError(formattedErrors));
      }, 1000);
    } else {
      dispatch(setError({}));

      const response = await login({ userId, password });

      if (response.success) {
        const { user, accessToken, refreshToken } = response.data;
        dispatch(setUser(user));
        dispatch(setIsAuthenticated(true));
        dispatch(setLoading(false));
        dispatch(setAccessToken(accessToken));
        toast.success("Welcome");
        navigate('/admin/dashboard')
      }else{
        dispatch(setError({email:response.data.error,password:response.data.error}))
        dispatch(setLoading(false));
        
      }
    }
  };





  return (
    <>
    
      <div className="flex h-screen bg-[#fcefe7] transition ">
        <div className="m-auto bg-white rounded-lg shadow-lg flex max-w-4xl">
          <div className="w-full p-8">
            <h2 className="text-2xl text-center font-bold mb-4">
              ADMIN LOGIN
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Welcome back! Please enter your details.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  User Id
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your user Id"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                {error?.userId && (
                  <p className="text-red-500 text-sm mt-1  ">{error.userId}</p>
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

export default AdminLogin;
