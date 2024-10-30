import Header from "../../components/userSide/Header";
import Footer from "../../components/userSide/Footer";
import AnimatedPage from "../../components/Animation";
import BookingPaymentPage from "../../components/userSide/BookingPaymentPage";

const BookingCheckout = (): JSX.Element => {
  return (
    <>
      <AnimatedPage>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
          <Header />
          {/* <SearchBar onSearch={()=>{}} /> */}
          <main className="flex-grow flex">
            <section className="flex-1 p-4">
              <BookingPaymentPage />
            </section>
          </main>
          <Footer />
        </div>
      </AnimatedPage>
    </>
  );
};

export default BookingCheckout;
