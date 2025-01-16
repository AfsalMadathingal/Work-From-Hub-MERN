import React, { lazy, Suspense } from 'react';
import AnimatedPage from "../../components/Animation";

const Header = lazy(() => import("../../components/userSide/Header"));
const Footer = lazy(() => import("../../components/userSide/Footer"));
const HeroSection = lazy(() => import("../../components/userSide/HeroSection"));
const FeatureSection = lazy(() => import("../../components/userSide/FeatureSection"));

const HomePage = () => {
  return (
    <>
      <AnimatedPage>
        <div className="min-h-screen flex flex-col dark:bg-gray-900">
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
          </Suspense>
          <main className="flex-grow">
            <Suspense fallback={<div>Loading...</div>}>
              <HeroSection />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <FeatureSection />
            </Suspense>
          </main>
          <Suspense fallback={<div>Loading...</div>}>
            <Footer />
          </Suspense>
        </div>
      </AnimatedPage>
    </>
  );
};

export default HomePage;
