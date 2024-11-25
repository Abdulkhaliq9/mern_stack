import { useState, useEffect } from "react";
import {
  ChevronRight,
  User,
  LogOut,
  List,
  ShoppingBag,
  MenuIcon,
  CrossIcon,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import useApi from "../../hooks/UseApi";

export default function Navbar() {
  const [auth, setAuth] = useAuth();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);

  const { request } = useApi();

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

  const limitProducts = async () => {
    try {
      const res = await request("/products?limit=4", "get");
      setProducts(res.data.products || []);
      console.log(res.data.products || []);
    } catch (error) {
      toast.error(error.status);
    }
  };

  useEffect(() => {
    limitProducts();
    fetchCategory();
  }, []);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  const handleLogOut = () => {
    setAuth({ user: null, token: "" });
    sessionStorage.removeItem("auth", "token");
    toast.success("You have logged out successfully!");
  };

  const menuData = [
    { name: "Home", link: "/" },
    {
      name: "Category",
      link: "/category",
      dropdown: categories.map((category) => ({
        title: category,
      })),
    },
    {
      name: "Products",
      link: "/products",
      dropdown: products.map((product) => ({
        id: product.id,
        title: product.title.substring(0, 34),
        image: product.image,
        items: [{ name: "View Details", link: `/details/${product.id}` }],
      })),
    },
    { name: "My Cart", link: "/cart" },
  ];

  return (
    <>
      <nav className="bg-blue p-4 fixed top-0 left-0 right-0 shadow-xl z-10">
        <div className="flex items-center justify-between">
          <section className="navbar-left flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-uppercase order-1 text-white"
            >
              Mega Bazar
            </Link>
          </section>

          <section className="navbar-center hidden lg:block ">
            <div className="menu">
              <div className="menu-header"></div>

              <ul className=" flex itmes-center gap-6">
                {menuData.map((item, index) => (
                  <li className=" group" key={index}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive
                          ? " text-dark bg-white px-5 py-2 rounded shadow-md shadow-purple font-bold"
                          : "flex items-center text-white font-medium  "
                      }
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

          <section className="navbar-right hidden lg:block ">
            {!auth.user ? (
              <Link to="/auth/login" className="text-white">
                SignUp / LogIn
              </Link>
            ) : (
              <ul className="menu-inner mb-0 ">
                <li className="inline-block group">
                  <span className="flex items-center text-white font-medium  justify-center cursor-pointer text-capitalize transition-all ease-linear">
                    {auth.user.name}{" "}
                    <ChevronRight className="text-xl ml-1 rotate-90" />
                  </span>
                  <div className="absolute z-10 py-4 px-8 left-[85.99%] hidden group-hover:flex flex-wrap gap-5 rounded-lg border-t-2 border-t-purple shadow-md bg-white w-full transition-all ease-linear max-w-[15rem]">
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
          <button
            className=" block lg:hidden transition-all ease-in-out"
            onClick={handleToggleMenu}
          >
            {toggleMenu ? (
              <CrossIcon className="text-white rotate-45" />
            ) : (
              <MenuIcon className="text-white" />
            )}
          </button>
        </div>

        {toggleMenu && (
          <div className="relative">
            <div className="absolute z-10 py-4 px-8 right-0  group-hover:flex flex-wrap gap-5 rounded-lg border-t-2 border-t-purple shadow-md bg-white w-full transition-all ease-linear  ">
              {menuData.map((item, index) => (
                <div
                  key={index}
                  className="flex hover:bg-gray p-2 hover:rounded-lg w-full"
                >
                  <NavLink
                    to={item.link}
                    className={ ({isActive}) => isActive ? "text-dark bg-blue px-5 py-2 w-full text-white rounded shadow-md shadow-purple font-bold" : " flex gap-5 font-medium whitespace-nowrap transition-all ease-in-out hover:text-white"}
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}

              {/* <div className="flex hover:bg-gray p-2 hover:rounded-lg w-full">
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
                    </div> */}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
