import React from "react";
import Footer from "../../components/userSide/Footer";
import Navbar from "../../components/userSide/Navbar";
import { Link } from "react-router-dom";
import FAQAccordion from "../../components/userSide/Faq";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow bg-beige dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Tired of working alone?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-4 md:mt-6 text-base lg:text-lg">
                Join our vibrant workspaces to connect with like-minded professionals and spark your social life!
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Link to="/login">
                  <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all">
                    Book a seat
                  </button>
                </Link>
                <a href="tel:+91123456789" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border border-orange-500 text-orange-500 hover:bg-orange-100 px-6 py-3 rounded-lg transition-all">
                    Call Us
                  </button>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="hero-1.png"
                alt="Working alone"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center">
            What Is <span className="text-orange-500">Work From Hub?</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-4 md:mt-6 text-base lg:text-lg text-center max-w-4xl mx-auto">
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
        <section className="mb-12">
          <FAQAccordion />
        </section>
      </div>
    </main>
    <Footer />
  </div>
  );
};

export default LandingPage;
