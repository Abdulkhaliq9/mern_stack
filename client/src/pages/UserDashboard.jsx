import React from "react";

import UserLayout from "../layouts/UserLayout";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";

export default function UserDashboard() {
  return (
    <>
      <UserLayout>
          <HeroSection/>
          <CategorySection/>
        

      </UserLayout>
    </>
  );
}
