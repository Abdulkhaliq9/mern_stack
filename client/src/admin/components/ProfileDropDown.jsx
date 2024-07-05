// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ArchiveIcon, ChevronDown,  Pencil, SquareSlashIcon, Trash } from 'lucide-react'

import { ChevronDown, LogOut, User } from "lucide-react";
import { useAuth } from "../../context/auth";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";


export default function Example() {

    const [auth, setAuth] = useAuth()

    const handleLogOut = () => {
        setAuth({
            ...auth,
            user: null,
            token: '',
        })
        sessionStorage.removeItem('token');
        toast.success("You have logout successfully")

    }

    return (
        //   <nav>
        <>
            <ul >
                <li className="drop">
                    <NavLink href="#">{auth.user.name}</NavLink> <ChevronDown />
                    <div className="triangle" />
                    <div className="dropdownContain">
                        <div className="dropOut">
                            <ul>
                                <li> <NavLink><User /> Profile</NavLink> </li>

                                <li><NavLink to="/" onClick={handleLogOut}><LogOut /> Log Out</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>



        </>

    )
}
