import Header from "../../components/userSide/Header";
import Footer from "../../components/userSide/Footer";
import ProfileSidebar from "../../components/userSide/ProfileSidebar";
import AnimatedPage from "../../components/Animation";
import Wallet from "../../components/userSide/Wallet";


const WalletPage = () => {

  return (
    <>
       <AnimatedPage>
        <div className="min-h-screen flex flex-col gap-2">
          <Header />
          <main className=" lg:m-auto lg:w-2/3  flex-grow flex">
            <ProfileSidebar />

            <section className="flex-1 p-4">
             <Wallet/>
            </section>
          </main>
          <Footer />
        </div>
      </AnimatedPage>
    </>
  );

};

export default WalletPage;
