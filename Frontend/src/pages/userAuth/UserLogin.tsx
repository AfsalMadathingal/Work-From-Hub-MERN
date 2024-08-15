import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen bg-[#fcefe7]">
      <div className="m-auto bg-white rounded-lg shadow-lg flex max-w-4xl">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl text-center font-bold mb-4">WELCOME BACK</h2>
          <p className="text-gray-600 text-center mb-6">Welcome back! Please enter your details.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 shadow-lg"
            >
              Sign in
            </button>
          </form>
          <div className="mt-6  shadow-lg">
            <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center">
              <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>
          </div>
          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up for free</a>
          </p>
        </div>
        <div className="w-1/2">
          <img
            src='/loginpageimage.jpg'
            alt="Person working on laptop"
            className="object-cover h-full w-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;