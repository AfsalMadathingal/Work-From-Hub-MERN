import React, { useEffect, useState } from "react";
import Header from "../../components/userSide/Header";
import Footer from "../../components/userSide/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import ProfileSidebar from "../../components/userSide/ProfileSidebar";
import { EditIcon, EyeIcon, PencilIcon } from "lucide-react";
import ProfileDetails from "../../components/userSide/ProfileDetails";
import AnimatedPage from "../../components/Animation";

const Profile = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <>
      <AnimatedPage>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className=" flex-grow flex">
            <ProfileSidebar />

            <section className="flex-1 p-4">
              <ProfileDetails />
            </section>
          </main>
          <Footer />
        </div>
      </AnimatedPage>
    </>
  );
};

export default Profile;
