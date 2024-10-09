import React, { useEffect, useState } from "react";
import Header from "../../components/userSide/Header";
import Footer from "../../components/userSide/Footer";
import ProfileSidebar from "../../components/userSide/ProfileSidebar";
import AnimatedPage from "../../components/Animation";
import BookingHistory from "../../components/userSide/BookingHistory";

const Bookings = () => {

  return (
    <>
       <AnimatedPage>
        <div className="min-h-screen flex flex-col gap-2">
          <Header />
          <main className=" lg:m-auto lg:w-2/3  flex-grow flex">
            <ProfileSidebar />

            <section className="flex-1 p-4">
              <BookingHistory />
            </section>
          </main>
          <Footer />
        </div>
      </AnimatedPage>
    </>
  );
};

export default Bookings;
