import React from "react";
import Footer from "../../components/userSide/Footer";
import Navbar from "../../components/userSide/Navbar";

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-beige min-h-screen m-12">
        <section className="container  mx-auto flex flex-col md:flex-row items-center mt-12 space-y-6 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900">
              Tired of working alone?
            </h2>
            <p className="text-gray-600 mt-4">
              Join our vibrant workspaces to connect with like-minded
              professionals and spark your social life!
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
                Book a seat
              </button>
              <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-lg">
                Call Us
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img src="hero-1.png" alt="Working alone" className="w-full" />
          </div>
        </section>

        <section className="container mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            What Is <span className="text-orange-500 ">Work From Hub?</span>
          </h3>
          <p className="text-gray-600 mt-4 text-center">
            Welcome to WorkFromHub, your ultimate solution for remote
            workspaces! At WorkFromHub, we understand the challenges of working
            from home, such as isolation, distractions, and power issues. Our
            platform connects remote workers with a variety of professional
            workspaces across the state, providing a conducive environment to
            boost productivity and enhance your social life. Whether you need a
            quiet place to focus for a few hours, a full day, or an entire
            month, WorkFromHub offers flexible booking options and membership
            plans with exclusive discounts. Join us today and transform your
            remote work experience into a vibrant, community-driven journey!
          </p>
        </section>

        <section className="container mx-auto mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center">FAQ</h3>
          <div className="mt-8">
            <details className="bg-white p-4 rounded-lg shadow-md mb-4">
              <summary className="text-gray-700 font-semibold">
                What types of workspaces are available for booking?
              </summary>
              <p className="text-gray-600 mt-2">Answer to this question...</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-md mb-4">
              <summary className="text-gray-700 font-semibold">
                How can I book a workspace?
              </summary>
              <p className="text-gray-600 mt-2">Answer to this question...</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-md mb-4">
              <summary className="text-gray-700 font-semibold">
                Can I see the availability of workspaces in real-time?
              </summary>
              <p className="text-gray-600 mt-2">Answer to this question...</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-md mb-4">
              <summary className="text-gray-700 font-semibold">
                What payment methods are accepted?
              </summary>
              <p className="text-gray-600 mt-2">Answer to this question...</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-md mb-4">
              <summary className="text-gray-700 font-semibold">
                Can I cancel or modify my booking?
              </summary>
              <p className="text-gray-600 mt-2">Answer to this question...</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-md mb-4">
              <summary className="text-gray-700 font-semibold">
                Is there a membership program?
              </summary>
              <p className="text-gray-600 mt-2">Answer to this question...</p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow-md">
              <summary className="text-gray-700 font-semibold">
                Are there any discounts for long-term bookings?
              </summary>
              <p className="text-gray-600 mt-2">Answer to this question...</p>
            </details>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
