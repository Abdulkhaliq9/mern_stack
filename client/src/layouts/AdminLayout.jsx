import React from "react";
import AdminMenu from "../admin/components/AdminMenu";
import { useLocation } from "react-router-dom";
import ProfileDropDown from "../admin/components/ProfileDropDown";
import { Search } from "lucide-react";
import "../admin/css/adminmenu.css";

// import LoadingBar from 'react-top-loading-bar'

export default function AdminLayout({ children }) {
  const location = useLocation();

  const getPageName = () => {
    switch (location.pathname) {
      case "/dashboard/admin":
        return "Dashboard";
      case "/dashboard/addproducts":
        return "Add Products";
      case "/dashboard/addcategory":
        return "Add Category";
      // Add more cases as needed
      default:
        return "Dashboard"; // Default page name
    }
  };

  const pageName = getPageName();
  return (
    <div className="admin-layout py-2 ">
      <div className="container-fluid">
        {/* <LoadingBar color='#f11946' ref={ref} /> */}

        <div className="row">
          {/* <AdminNav /> */}
          <div className="col-md-2">
            <AdminMenu />
          </div>
          <div className="col-md-10">
            <div className="d-flex align-items-center justify-content-between">
              <div className="dashboard-heading">
                <h2 className="text-dark fs-1">{pageName}</h2>
                <p className="text-secondary">
                  Welcome to Admin Dashboard of Mega Sale
                </p>
              </div>
              <div className="admin-settings ms-auto">
                <ProfileDropDown />
              </div>

              <div className="h-search-form ms-4 text-center w-25">
                <form action="#">
                  <input type="search" name="search" placeholder="Search.." />
                  <button>
                    <Search />
                  </button>
                </form>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
