
import  { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import ReactLoading from "react-loading";
import toast from "react-hot-toast";
import { setError } from "../../redux/slices/userSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { validatePassword } from "../../utils/userValidator";

interface DialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: (password: string) => Promise<boolean | null>;
  onCancel: () => void;
}

const ResetPasswordModal: FC<DialogProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [showDialog, setShowDialog] = useState(isOpen);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);

  const error:{
    password?: string
  } = useSelector((state: RootState) => state.user.error);

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
    dispatch(setError({}));

    const error = validatePassword(password);

    if (error) {
      dispatch(setError(error));
      return toast.error(error.password);
    }
    

    if (password !== confirmPassword) {
      dispatch(setError({ password: "Passwords do not match" }));
      return toast.error("Passwords do not match");
    }

    const response = await onConfirm(password);

    if (response) {
      toast.success("Password reset successfully");
      onCancel();
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
        <p className="text-gray-600 mt-2">{message}</p>

        <div className="flex flex-col justify-center mt-4">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
              className="w-full px-3 py-2 border border-orange-300 focus:outline-none rounded-md focus:border-orange-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {error?.password && (
            <p className="text-red-500 text-sm mt-1">{error.password}</p>
          )}
        </div>

        <div className="flex flex-col justify-center mt-4">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full px-3 py-2 border border-orange-300 focus:outline-none rounded-md focus:border-orange-500"
          />
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition ease-in-out"
          >
            Cancel
          </button>
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
              "Reset Password"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordModal;
