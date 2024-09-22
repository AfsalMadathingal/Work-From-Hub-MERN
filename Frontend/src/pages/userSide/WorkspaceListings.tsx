import React, { useEffect, useState } from 'react'
import Header from '../../components/userSide/Header'
import Footer from '../../components/userSide/Footer'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import AnimatedPage from '../../components/Animation'
import AllListings from '../../components/userSide/AllListings'

const WorkspaceListingsPage = (): JSX.Element => {
  const { user } = useSelector((state: RootState) => state.user)

  return (
    <>
      <AnimatedPage>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow flex">
            <section className="flex-1 p-4">
              <AllListings />
            </section>
          </main>
          <Footer />
        </div>
      </AnimatedPage>
    </>
  )
}

export default WorkspaceListingsPage

