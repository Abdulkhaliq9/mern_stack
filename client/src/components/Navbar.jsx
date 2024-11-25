import {  useRef } from "react";
import {
  ChevronRight,
    User,
  LogOut,
  List,
  ShoppingBag,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

export default function Navbar() {
  const [auth, setAuth] = useAuth();
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const overlayRef = useRef(null);
  const menuArrowRef = useRef(null);

  const handleLogOut = () => {
    setAuth({ user: null, token: "" });
    sessionStorage.removeItem('auth',"token");
    toast.success("You have logged out successfully!");
  };

 

  const menuData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Category",
      link: "#",
      dropdown: [
        {
          title: "Men",
          items: [{ name: "Product Name", link: "/details" }],
        },
        {
          title: "Kids",
          items: [{ name: "Product Name", link: "/details" }],
        },
        {
          title: "Women",
          items: [{ name: "Product Name", link: "/details" }],
        },
        {
          title: "Beauty",
          items: [{ name: "Product Name", link: "/details" }],
        },
        {
          title: "Sport",
          items: [{ name: "Product Name", link: "/details" }],
        },
      ],
    },
    {
      name: "New Arrival",
      link: "#",
      dropdown: [
        {
          name: "Product Name",
          link: "/details",
          image: "https://i.ibb.co/kgNX8ks/Product-2.jpg",
        },
      ],
    },
    { name: "Products", link: "/products" },
    { name: "My Cart", link: "/cart" },
  ];

  return (
    <>
      <nav className="bg-blue p-4">
        <div className="flex items-center justify-between">
          <section className="navbar-left flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-uppercase order-1 text-white"
            >
              Mega Bazar
            </Link>
            <div className="burger" ref={burgerRef}>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </div>
          </section>

          <section className="navbar-center">
            <span className="overlay" ref={overlayRef}></span>
            <div className="menu" ref={menuRef}>
              <div className="menu-header">
                <span className="menu-arrow" ref={menuArrowRef}></span>
                <span className="menu-title"></span>
              </div>

              <ul className="menu-inner h-[87%] overflow-y-auto overflow-x-hidden">
                {menuData.map((item, index) => (
                  <li className="inline-block leading-6 pr-5 group " key={index}>
                    <NavLink
                      to={item.link}
                      className="flex items-center justify-center cursor-pointer text-capitalize transition-all ease-linear "
                    >
                      {item.name}
                      {/* <ChevronRight className="ml-1 rotate-90" /> */}
                    </NavLink>
                    {item.dropdown && (
                     <div className="hidden group-hover:block transition-all ease-in-out">
                       <div className="absolute z-10 w-full shadow-lg shadow-gray  py-4 px-8 left-1/2 mx-auto transform -translate-x-1/2 rounded-lg border-b-2 border-b-purple bg-white flex flex-wrap max-w-[62rem]">
                        {item.dropdown.map((sub, subIndex) => (
                          <div className="flex-[0_0_25%]" key={subIndex}>
                            <h4 className="font-medium py-3 text-purple">
                              {sub.title}
                            </h4>
                            <ul className="submenu-list">
                              {sub?.items?.map((subItem, itemIndex) => (
                                <li className="" key={itemIndex}>
                                  <NavLink
                                    to={subItem.link}
                                    className="inline-block font-medium whitespace-nowrap transition-all ease-in-out"
                                  >
                                    {subItem.name}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                     </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="navbar-right">
            {!auth.user ? (
              <Link to="/auth/login" className="text-light">
                SignUp / LogIn
              </Link>
            ) : (
              <ul className="menu-inner mb-0 d-none d-lg-block">
                <li className="inline-block group ">
                  <span className="flex items-center justify-center cursor-pointer text-capitalize transition-all ease-linear">
                    {auth.user.name}{" "}
                    <ChevronRight className="text-xl ml-1 rotate-90" />
                  </span>
                  <div className="absolute z-10 py-4 px-8 left-[85.99%] hidden group-hover:flex flex-wrap gap-5 rounded-lg border-t-2 border-t-purple shadow-md bg-white w-full max-w-[15rem]">
                    <div className="flex   hover:bg-gray p-2 hover:rounded-lg w-full ">
                      <Link
                        to="#"
                        className="flex gap-5 font-medium whitespace-nowrap transition-all ease-in-out hover:text-white"
                      >
                        <User /> Profile
                      </Link>
                    </div>
                    <div className="flex   hover:bg-gray p-2 hover:rounded-lg w-full">
                      <NavLink
                        to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`}
                        className="flex gap-5 font-medium whitespace-nowrap transition-all ease-in-out hover:text-white"
                      >
                        <User /> Dashboard
                      </NavLink>
                    </div>
                    <div className="flex   hover:bg-gray p-2 hover:rounded-lg w-full">
                      <Link
                        to="/cart"
                        className="flex gap-5 font-medium whitespace-nowrap transition-all ease-in-out hover:text-white"
                      >
                        <ShoppingBag /> My Cart
                      </Link>
                    </div>
                    <div className="flex   hover:bg-gray p-2 hover:rounded-lg w-full">
                      <Link
                        to="/checkout"
                        className="flex gap-5 font-medium whitespace-nowrap transition-all ease-in-out hover:text-white"
                      >
                        <List /> Check Out
                      </Link>
                    </div>
                    <div className="flex   hover:bg-gray p-2 hover:rounded-lg w-full">
                      <button
                       
                        onClick={handleLogOut}
                        className="flex gap-5 font-medium whitespace-nowrap transition-all ease-in-out hover:text-white"
                      >
                        <LogOut /> LogOut
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </section>
        </div>
      </nav>
    </>
  );
}
