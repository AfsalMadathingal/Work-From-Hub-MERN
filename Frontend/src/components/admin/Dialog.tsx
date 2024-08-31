import React, { FC, useEffect, useState } from 'react';

interface DialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Dialog: FC<DialogProps> = ({ isOpen, title, message, onConfirm, onCancel }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [showDialog, setShowDialog] = useState(isOpen);

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

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg max-w-md w-full p-6 transform transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{message}</p>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition ease-in-out"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
