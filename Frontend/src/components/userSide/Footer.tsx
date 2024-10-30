import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#211717] text-white py-8  px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">Download WFHUB App for Exciting Offers</h4>
          <div className="flex space-x-4">
            <img src="/app-store.png" alt="Download on the Apple Store" className="w-20 h-20"/>
            <img src="/play-store.png" alt="Download on Google Play" className="w-20 h-20"/>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Trust And Safety</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Responsible Disclosure</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
            <li><a href="#" className="hover:underline">Advertise your Business</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md mb-4 text-gray-900"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-400"
            >
              Subscribe Newsletter
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
