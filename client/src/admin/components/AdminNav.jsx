import React from 'react'
import "../css/adminmenu.css"
import toast from "react-hot-toast";

import {
  Search,

  User,
  LogOut,


} from "lucide-react";

import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/auth'
export default function AdminNav() {
  const [auth, setAuth] = useAuth()




  // logout functionality
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    })
    sessionStorage.removeItem("token");
    toast.success("You have logged out successfully!")
  }
  return (



    <>

      <nav className="navbar navbar-expand-lg  mb-3 admin-nav">
        <div className="container-fluid">
          <a className="navbar-brand text-white " href="#">Admin Panel</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto w-75" role="search">
              <input className="form-control me-2" type="search" placeholder="Quick Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit"><Search /></button>
            </form>
            <div className="navbar-nav ms-auto  mb-lg-0">

              <div className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle text-white " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {auth.user.name}
                </NavLink>
                <ul className="dropdown-menu"  style={{
              left:"-69px"
            }}>
                  <li><a className="dropdown-item" href="#"> <User /> Profile</a></li>
                  <li><NavLink className="dropdown-item" to="/" onClick={handleLogOut}> <LogOut /> Log Out </NavLink></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </nav>


    </>



  )
}
