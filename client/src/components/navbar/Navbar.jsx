import { useState, useEffect, useRef } from "react";
import { ChevronRight, User, LogOut, List, ShoppingBag } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import useApi from "../../hooks/UseApi";

export default function Navbar() {
  const [auth, setAuth] = useAuth();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const overlayRef = useRef(null);
  const menuArrowRef = useRef(null);
  const { request } = useApi();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await request("/products/category", "get");
        // setCategories(res.data);

        setCategories(res.data.categories || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error(error.message || "Failed to load products");
      }
    };

    fetchCategory();
  }, []);

  useEffect(() => {
    const limitProducts = async () => {
      try {
        const res = await request("/products?limit=3", "get");
        setProducts(res.data.products || []);
        console.log(res.data.products || [])


      } catch (error) {
        toast.error(error.status);
      }
    };
    limitProducts();
  }, []);

  const handleLogOut = () => {
    setAuth({ user: null, token: "" });
    sessionStorage.removeItem("auth", "token");
    toast.success("You have logged out successfully!");
  };

  const menuData = [
    { name: "Home", link: "/" },
    {
      name: "Category",
      link: "#",
      dropdown: categories.map((category) => ({
        title: category,
      })),
    },
    {
      name: "New Arrival",
      link: "#",
      dropdown: products.map((product) => ({
        id: product.id,
        title: product.title.substring(0, 34)
        ,
        image: product.image  , 
        items: [{ name: "View Details", link: `/details/${product.id}` }],
      })),
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
                  <li className="inline-block leading-6 pr-5 group" key={index}>
                    <NavLink
                      to={item.link}
                      className="flex items-center justify-center cursor-pointer text-capitalize transition-all ease-linear"
                    >
                      {item.name}
                    </NavLink>
                    {item.dropdown && (
                      <div className="hidden group-hover:block transition-all ease-in-out">
                        <div className="absolute z-10 w-full shadow-lg shadow-gray py-4 px-8 left-1/2 mx-auto transform -translate-x-1/2 rounded-lg border-b-2 border-b-purple bg-white grid grid-cols-4 gap-5 max-w-[62rem]">
                          {item.dropdown.map((sub, subIndex) => (
                            <div className=" " key={subIndex}>
                              <h4 className="font-medium py-3 text-purple capitalize">
                                {sub.title}
                              </h4>
                              {/* index 2 has image */}
                              {sub.image && (
                                <div className="flex my-5 items-center">
                                  <img
                                    src={sub.image}
                                    alt=""
                                    className="size-full object-cover rounded-full"
                                  />
                                </div>
                                )}
                              <ul className="submenu-list">
                                {sub?.items?.map((subItem, itemIndex) => (
                                  <li key={itemIndex}>
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
                <li className="inline-block group">
                  <span className="flex items-center justify-center cursor-pointer text-capitalize transition-all ease-linear">
                    {auth.user.name}{" "}
                    <ChevronRight className="text-xl ml-1 rotate-90" />
                  </span>
                  <div className="absolute z-10 py-4 px-8 left-[85.99%] hidden group-hover:flex flex-wrap gap-5 rounded-lg border-t-2 border-t-purple shadow-md bg-white w-full max-w-[15rem]">
                    <div className="flex hover:bg-gray p-2 hover:rounded-lg w-full">
                      <Link
                        to="#"
                        className="flex gap-5 font-medium whitespace-nowrap transition-all ease-in-out hover:text-white"
                      >
                        <User /> Profile
                      </Link>
                    </div>
                    <div className="flex hover:bg-gray p-2 hover:rounded-lg w-full">
                      <NavLink
                        to={`/dashboard/${
                          auth.user.role === 1 ? "admin" : "user"
                        }`}
                        className="flex gap-5 font-medium whitespace-nowrap transition-all ease-in-out hover:text-white"
                      >
                        <User /> Dashboard
                      </NavLink>
                    </div>
                    <div className="flex hover:bg-gray p-2 hover:rounded-lg w-full">
                      <Link
                        to="/cart"
                        className="flex gap-5 font-medium whitespace-nowrap transition-all ease-in-out hover:text-white"
                      >
                        <ShoppingBag /> My Cart
                      </Link>
                    </div>
                    <div className="flex hover:bg-gray p-2 hover:rounded-lg w-full">
                      <Link
                        to="/checkout"
                        className="flex gap-5 font-medium whitespace-nowrap transition-all ease-in-out hover:text-white"
                      >
                        <List /> Check Out
                      </Link>
                    </div>
                    <div className="flex hover:bg-gray p-2 hover:rounded-lg w-full">
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
