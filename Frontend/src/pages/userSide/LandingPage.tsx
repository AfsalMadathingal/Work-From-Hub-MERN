import React, { useEffect } from "react";
import Footer from "../../components/userSide/Footer";
import Navbar from "../../components/userSide/Navbar";
import { Link } from "react-router-dom";
import FAQAccordion from "../../components/userSide/Faq";


const LandingPage: React.FC = () => {

  return (
    <>
    
      <Navbar />
      <div className="bg-beige min-h-screen m-0 p-4 md:m-12">
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center mt-12 space-y-6 md:space-y-0 md:space-x-12">
        <div className="flex-1 text-center md:text-left px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Tired of working alone?
          </h2>
          <p className="text-gray-600 mt-4 md:mt-6 leading-relaxed text-lg">
            Join our vibrant workspaces to connect with like-minded professionals and spark your social life!
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/login">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all">
                Book a seat
              </button>
            </Link>
            <a href="tel:+91123456789">
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-100 px-6 py-3 rounded-lg transition-all">
                Call Us
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1 px-4">
          <img
            src="hero-1.png"
            alt="Working alone"
            className="w-full h-auto object-cover "
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
          What Is <span className="text-orange-500">Work From Hub?</span>
        </h3>
        <p className="text-gray-600 mt-4 md:mt-6 leading-relaxed text-lg text-center">
          Welcome to WorkFromHub, your ultimate solution for remote workspaces!
          At WorkFromHub, we understand the challenges of working from home,
          such as isolation, distractions, and power issues. Our platform
          connects remote workers with a variety of professional workspaces
          across the state, providing a conducive environment to boost
          productivity and enhance your social life. Whether you need a quiet
          place to focus for a few hours, a full day, or an entire month,
          WorkFromHub offers flexible booking options and membership plans with
          exclusive discounts. Join us today and transform your remote work
          experience into a vibrant, community-driven journey!
        </p>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto mt-12">
        <FAQAccordion />
      </section>
    </div>
      <Footer />
      </>


  );
};

export default LandingPage;
