import { Boxes, User2, Home, Package } from 'lucide-react'
import React from 'react'  
import { NavLink } from 'react-router-dom'

export default function AdminMenu() {
    
    return (
        <>

            <div className="sidebar">
                <div className="sidebar-header ">
                    <h2 className="sidebar-title">Admin</h2>
                </div>
                <div className="sidebar-menu">
                    <ul className='sidebar-list'>
                        <li className="sidebar-items "><NavLink className="sidebar-links " to="/dashboard/admin"> <Home /> Dashboard</NavLink></li>
                        <li className="sidebar-items "><NavLink className="sidebar-links " to="/dashboard/addproducts"> <Package /> Products</NavLink></li>
                        <li className="sidebar-items "><NavLink className="sidebar-links " to="/dashboard/addcategory"> <Boxes /> Category</NavLink></li>
                        <li className="sidebar-items "><NavLink className="sidebar-links " to="/dashboard/listusers"><User2 /> Users</NavLink></li>
                    </ul>
                </div>

            </div>

        </>
    )
}
