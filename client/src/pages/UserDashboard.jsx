import React from "react";

import UserLayout from "../layouts/UserLayout";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import NewsLetter from "../components/NewsLetter";
import Discount from "../components/Discount";

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
