import React, { useState } from "react";
import registerSchema from "../../utils/userRegisterValidator";
import { register, signInWithGoogle } from "../../services/UserAuthService";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setIsAuthenticated, setLoading, setUser } from "../../redux/slices/userSlice";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";

const UserRegister: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const dispatch = useDispatch();
  const { loading  } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const { error } = registerSchema.validate(
        { fullName, email, password, confirmPassword },
        { abortEarly: false }
      );
      if (error) {
        const formattedErrors: { [key: string]: string } = {};
        error.details.forEach((detail) => {
          formattedErrors[detail.path[0]] = detail.message;
          console.log(detail.path[0]);
        });
        setTimeout(() => {
          setErrors(formattedErrors);
          dispatch(setLoading(false));
        }, 1000);
       
      } else {
        setErrors({});

        const apiResponse = await register({ fullName, email, password });

        if (apiResponse?.data) {
          const { user, accessToken, refreshToken } = apiResponse.data;
          dispatch(setLoading(false));
          dispatch(setUser(user))
          dispatch(setIsAuthenticated(true))
          toast.success("Registered successfully")
          navigate('/u/home/')
        }

        if (apiResponse?.alert) {
          dispatch(setLoading(false));
          toast.error(apiResponse.message);
        } else {
        
          console.log(apiResponse);
          
          dispatch(setLoading(false));
          setErrors(apiResponse);
        }
      }
    } catch (error) {
      dispatch(setLoading(false));
      toast.error("something Went Wrong");
    }
  };

  const handleGoogleSignIn = async ()=>{

      
  }

  return (
    <div className="min-h-screen bg-[#fcefe7] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg  flex max-w-4xl w-full">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-1xl font-bold mb-1 text-center">
            LETS GET STARTED
          </h1>
          <p className="text-gray-600 mb-2 text-center">
            Welcome! Please enter your details.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 mb-2">
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
              {errors?.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
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
              {errors?.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
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
            </div>
            {errors?.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
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
              {errors?.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
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
              <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
          </form>
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to={'/login'} className="text-blue-500 hover:underline">Sign In </Link>
          </p>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src="/loginpageimage.jpg"
            alt="Person working on laptop"
            className="object-cover h-full w-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
