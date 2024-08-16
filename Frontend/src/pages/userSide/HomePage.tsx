import React from 'react'
import Header from '../../components/userSide/Header'
import Footer from '../../components/userSide/Footer'
import HeroSection from '../../components/userSide/HeroSection'
import FeatureSection from '../../components/userSide/FeatureSection'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setLoading } from "../../redux/slices/userSlice";


const HomePage = () => {

  const {loading , isAuthenticated ,error} = useSelector((state: RootState) => state.user);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
