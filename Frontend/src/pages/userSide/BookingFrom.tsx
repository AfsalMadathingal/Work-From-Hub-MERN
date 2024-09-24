import React, { useEffect, useState } from "react";
import Header from "../../components/userSide/Header";
import Footer from "../../components/userSide/Footer";
import AnimatedPage from "../../components/Animation";
import BookingTable from "../../components/userSide/BookingTable";

const BookingFrom = (): JSX.Element => {
  return (
    <>
      <AnimatedPage>
        <div className="min-h-screen flex flex-col">
          <Header />
          {/* <SearchBar onSearch={()=>{}} /> */}
          <main className="flex-grow flex">
            <section className="flex-1 p-4">
              <BookingTable />
            </section>
          </main>
          <Footer />
        </div>
      </AnimatedPage>
    </>
  );
};

export default BookingFrom;
