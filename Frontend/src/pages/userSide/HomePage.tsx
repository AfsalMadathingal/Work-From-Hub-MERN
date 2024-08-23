import React, { useEffect } from 'react'
import Header from '../../components/userSide/Header'
import Footer from '../../components/userSide/Footer'
import HeroSection from '../../components/userSide/HeroSection'
import FeatureSection from '../../components/userSide/FeatureSection'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { setLoading } from "../../redux/slices/userSlice";
import LoadingPageWithReactLoading from '../../components/loadingPage/Loading'
import { PRIMARY_COLOR } from '../../constant/colors'


const HomePage = () => {

  const dispatch = useDispatch()
  const {loading , isAuthenticated ,error} = useSelector((state: RootState) => state.user);

  useEffect(()=>{
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 1000);

  },[])

  return (
    <>
    {loading ? <LoadingPageWithReactLoading transparent={false} type='bars' color={PRIMARY_COLOR}/> :
        <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <FeatureSection />
        </main>
        <Footer />
      </div>
    }

    
    </>
  )
}

export default HomePage
