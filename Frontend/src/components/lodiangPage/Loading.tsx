// Example.tsx
import React from 'react';
import ReactLoading from 'react-loading';

interface LoadingProps {
  type: string;
  color: string;
}

const LoadingPageWithReactLoading: React.FC<LoadingProps> = ({ type, color }) => {
  return (
    <div className="loading-screen h-screen flex justify-center items-center">
      <ReactLoading type={type} color={color} height={60} width={60} />

    </div>
  );
};

export default LoadingPageWithReactLoading;
