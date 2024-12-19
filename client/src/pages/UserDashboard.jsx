import React from "react";

import UserLayout from "../layouts/UserLayout";
import HeroSection from "../components/landingpage/HeroSection";
import CategorySection from "../components/landingpage/CategorySection";
import NewsLetter from "../components/landingpage/NewsLetter";
import Discount from "../components/landingpage/Discount";

export default function UserDashboard() {
  return (
    <>
      <UserLayout>




      
        <HeroSection />
        <CategorySection />
        <Discount />
        <NewsLetter />
      </UserLayout>
    </>
  );
}
