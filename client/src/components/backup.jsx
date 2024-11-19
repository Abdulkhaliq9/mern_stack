import { useEffect, useRef } from "react";
import "../css/components/navbar.css";
import {
  ChevronRight,
  ChevronLeft,
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
    sessionStorage.removeItem("token");
    toast.success("You have logged out successfully!");
  };

  const toggleMenu = () => {
    menuRef.current.classList.toggle("is-active");
    overlayRef.current.classList.toggle("is-active");
  };

  const showSubMenu = (children) => {
    const subMenu = children.querySelector(".submenu");
    subMenu.classList.add("is-active");
    subMenu.style.animation = "slideLeft 0.35s ease forwards";
    const menuTitle =
      children.querySelector("i").parentNode.childNodes[0].textContent;
    menuRef.current.querySelector(".menu-title").textContent = menuTitle;
    menuRef.current.querySelector(".menu-header").classList.add("is-active");
  };

  const hideSubMenu = () => {
    const subMenu = menuRef.current.querySelector(".submenu.is-active");
    subMenu.style.animation = "slideRight 0.35s ease forwards";
    setTimeout(() => {
      subMenu.classList.remove("is-active");
    }, 300);
    menuRef.current.querySelector(".menu-title").textContent = "";
    menuRef.current.querySelector(".menu-header").classList.remove("is-active");
  };

  const toggleSubMenu = (e) => {
    if (!menuRef.current.classList.contains("is-active")) return;
    const closestDropdown = e.target.closest(".menu-dropdown");
    if (closestDropdown) {
      showSubMenu(closestDropdown);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth >= 992 &&
        menuRef.current?.classList.contains("is-active")
      ) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    burgerRef.current?.addEventListener("click", toggleMenu);
    overlayRef.current?.addEventListener("click", toggleMenu);
    menuArrowRef.current?.addEventListener("click", hideSubMenu);
    menuRef.current?.addEventListener("click", toggleSubMenu);

    return () => {
      window.removeEventListener("resize", handleResize);
      burgerRef.current?.removeEventListener("click", toggleMenu);
      overlayRef.current?.removeEventListener("click", toggleMenu);
      menuArrowRef.current?.removeEventListener("click", hideSubMenu);
      menuRef.current?.removeEventListener("click", toggleSubMenu);
    };
  }, []);

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
          items: [{ name: "Product Name", link: "/details" } /* More items */],
        },
        {
          title: "Kids",
          items: [{ name: "Product Name", link: "/details" } /* More items */],
        },
        {
          title: "Women",
          items: [{ name: "Product Name", link: "/details" } /* More items */],
        },
        {
          title: "Beauty",
          items: [{ name: "Product Name", link: "/details" } /* More items */],
        },
        {
          title: "Sport",
          items: [{ name: "Product Name", link: "/details" } /* More items */],
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
        // More items...
      ],
    },
    { name: "Products", link: "/products" },
    { name: "My Cart", link: "/cart" },
    { name: "SignUp / LogIn", link: "/auth/login", guestOnly: true },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <section className="navbar-left d-flex align-items-center">
            <Link to="/" className="brand">
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
                <span className="menu-arrow" ref={menuArrowRef}>
                  <ChevronLeft />
                </span>
                <span className="menu-title"></span>
              </div>

              <ul className="menu-inner mb-0">
                {menuData.map((item, index) => (
                  <li className="menu-item menu-dropdown" key={index}>
                    <NavLink to={item.link} className="menu-link">
                      {item.name}
                    </NavLink>
                    {item.dropdown && (
                      <div className="submenu megamenu megamenu-column-4">
                        {item.dropdown.map((sub, subIndex) => (
                          <div className="submenu-inner" key={subIndex}>
                            <h4 className="submenu-title">{sub.title}</h4>
                            <ul className="submenu-list">
                              {sub?.items?.map((subItem, itemIndex) => (
                                <li className="submenu-item" key={itemIndex}>
                                  <Link
                                    to={subItem.link}
                                    className="submenu-link"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
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
                <li className="menu-item menu-dropdown">
                  <span className="menu-link">
                    {auth.user.name} <ChevronRight />
                  </span>
                  <div className="submenu megamenu megamenu-column-1 text-center p-0">
                    <div className="submenu-inner">
                      <Link to="#" className="submenu-link">
                        <User /> Profile
                      </Link>
                    </div>
                    <div className="submenu-inner">
                      <NavLink
                        to={`/dashboard/${
                          auth.user.role === 1 ? "admin" : "user"
                        }`}
                        className="submenu-link"
                      >
                        <User /> Dashboard
                      </NavLink>
                    </div>
                    <div className="submenu-inner">
                      <Link to="/cart" className="submenu-link">
                        <ShoppingBag /> My Cart
                      </Link>
                    </div>
                    <div className="submenu-inner">
                      <Link to="#" className="submenu-link">
                        <List /> Check Out
                      </Link>
                    </div>
                    <div className="submenu-inner">
                      <Link
                        to="/"
                        onClick={handleLogOut}
                        className="submenu-link"
                      >
                        <LogOut /> LogOut
                      </Link>
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
