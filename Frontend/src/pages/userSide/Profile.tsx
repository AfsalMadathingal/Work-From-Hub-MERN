import Header from "../../components/userSide/Header";
import Footer from "../../components/userSide/Footer";
import ProfileSidebar from "../../components/userSide/ProfileSidebar";
import ProfileDetails from "../../components/userSide/ProfileDetails";
import AnimatedPage from "../../components/Animation";


const Profile = () => {

  return (
    <>
      <AnimatedPage>
        <div className="min-h-screen flex flex-col gap-2">
          <Header />
          <main className=" lg:m-auto lg:w-2/3  flex-grow flex">
            <ProfileSidebar />

            <section className="flex-1 flex  justify-center p-1">
              <div className="w-full max-w-2xl ">
                <ProfileDetails />
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </AnimatedPage>
    </>
  );
};

export default Profile;
