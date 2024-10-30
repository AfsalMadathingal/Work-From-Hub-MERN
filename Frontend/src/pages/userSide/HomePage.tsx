import React, {  } from "react";
import Header from "../../components/userSide/Header";
import Footer from "../../components/userSide/Footer";
import HeroSection from "../../components/userSide/HeroSection";
import FeatureSection from "../../components/userSide/FeatureSection";
import AnimatedPage from "../../components/Animation";



const HomePage = () => {



  return (
<>
  <AnimatedPage>
    <div className="min-h-screen flex flex-col  dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  </AnimatedPage>
</>

  );
};

export default HomePage;
