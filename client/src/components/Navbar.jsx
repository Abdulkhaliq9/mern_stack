import { useEffect, useRef } from "react";
import "../css/components/navbar.css";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  User,
  LogOut,
  List,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

export default function Navbar() {
  const [auth, setAuth] = useAuth();
  const menuRef = useRef(null);
  const burgerRef = useRef(null);
  const overlayRef = useRef(null);
  const menuArrowRef = useRef(null);

  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
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
    if (!menuRef.current.classList.contains("is-active")) {
      return;
    }
    if (e.target.closest(".menu-dropdown")) {
      const children = e.target.closest(".menu-dropdown");
      showSubMenu(children);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        if (
          menuRef.current &&
          menuRef.current.classList.contains("is-active")
        ) {
          toggleMenu();
        }
      }
    };

    window.addEventListener("resize", handleResize);

    if (burgerRef.current) {
      burgerRef.current.addEventListener("click", toggleMenu);
    }
    if (overlayRef.current) {
      overlayRef.current.addEventListener("click", toggleMenu);
    }
    if (menuArrowRef.current) {
      menuArrowRef.current.addEventListener("click", hideSubMenu);
    }
    if (menuRef.current) {
      menuRef.current.addEventListener("click", toggleSubMenu);
    }

    return () => {
      window.removeEventListener("resize", handleResize);

      if (burgerRef.current) {
        burgerRef.current.removeEventListener("click", toggleMenu);
      }
      if (overlayRef.current) {
        overlayRef.current.removeEventListener("click", toggleMenu);
      }
      if (menuArrowRef.current) {
        menuArrowRef.current.removeEventListener("click", hideSubMenu);
      }
      if (menuRef.current) {
        menuRef.current.removeEventListener("click", toggleSubMenu);
      }
    };
  }, []);

  return (
    // <header className="header" id="header">
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <section className="navbar-left d-flex align-items-center">
            <Link to="/" className="brand">
              Mega Bazar
            </Link>
            <div className="burger" id="burger" ref={burgerRef}>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </div>
          </section>
          <section className="navbar-center">
            <span className="overlay" ref={overlayRef}></span>
            <div className="menu" id="menu" ref={menuRef}>
              <div className="menu-header">
                <span className="menu-arrow" ref={menuArrowRef}>
                  <ChevronLeft />
                </span>
                <span className="menu-title"></span>
              </div>
              <ul className="menu-inner mb-0">
                <li className="menu-item">
                  <Link to="/ " className="menu-link">
                    Home
                  </Link>
                </li>
                <li className="menu-item menu-dropdown">
                  <span className="menu-link">
                    Category <ChevronRight />
                  </span>
                  <div className="submenu megamenu megamenu-column-4">
                    <div className="submenu-inner">
                      <h4 className="submenu-title">Men</h4>
                      <ul className="submenu-list">
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                      </ul>
                      <h4 className="submenu-title">Kids</h4>
                      <ul className="submenu-list">
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="submenu-inner">
                      <h4 className="submenu-title">Women</h4>
                      <ul className="submenu-list">
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                      </ul>
                      <h4 className="submenu-title">Beauty</h4>
                      <ul className="submenu-list">
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="submenu-inner">
                      <h4 className="submenu-title">Sport</h4>
                      <ul className="submenu-list">
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                        <li className="submenu-item">
                          <Link to="/details" className="submenu-link">
                            Product Name
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="submenu-inner">
                      <img
                        src="https://i.ibb.co/3Bj3gbS/Product-1.jpg"
                        className="submenu-image"
                        alt="Product"
                      />
                    </div>
                  </div>
                </li>
                <li className="menu-item menu-dropdown">
                  <span className="menu-link">
                    New Arrival <ChevronRight />
                  </span>
                  <div className="submenu megamenu megamenu-column-4">
                    <div className="submenu-inner">
                      <a href="#" className="submenu-link">
                        <img
                          src="https://i.ibb.co/kgNX8ks/Product-2.jpg"
                          className="submenu-image"
                          alt="Product"
                        />
                        <span className="submenu-title">Product Name</span>
                      </a>
                    </div>
                    <div className="submenu-inner">
                      <a href="#" className="submenu-link">
                        <img
                          src="https://i.ibb.co/ZTD2wF6/Product-3.jpg"
                          className="submenu-image"
                          alt="Product"
                        />
                        <span className="submenu-title">Product Name</span>
                      </a>
                    </div>
                    <div className="submenu-inner">
                      <a href="#" className="submenu-link">
                        <img
                          src="https://i.ibb.co/prb0Vz9/Product-4.jpg"
                          className="submenu-image"
                          alt="Product"
                        />
                        <span className="submenu-title">Product Name</span>
                      </a>
                    </div>
                    <div className="submenu-inner">
                      <a href="#" className="submenu-link">
                        <img
                          src="https://i.ibb.co/zPJm9jy/Product-5.jpg"
                          className="submenu-image"
                          alt="Product"
                        />
                        <span className="submenu-title">Product Name</span>
                      </a>
                    </div>
                  </div>
                </li>{" "}
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Support
                  </a>
                </li>
                <li className="menu-item">
                  <Link to="/cart" className="menu-link">
                    My Cart
                  </Link>
                </li>
                <li className="menu-item">
                  <form id="navbar-search" action="/search" method="get">
                    <input type="text" name="q" placeholder="Search..." />
                    <button type="submit">
                      <span className="material-symbols-outlined">
                        <Search />
                      </span>
                    </button>
                  </form>
                </li>
              </ul>
              {!auth.user ? (<></>) : (
                <>
                  <ul className="menu-inner d-block d-lg-none ">
                    <li className="menu-item">
                      <a href="" className="menu-link">
                        Profile
                      </a>
                    </li>
                    <li className="menu-item">
                      <Link to="/" onClick={handleLogOut} className="menu-link">
                        LogOut
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </section>
          <section className="navbar-right">
            {!auth.user ? (
              <>
                <Link to="/auth/login" className=" text-light">
                  SignUp / LogIn
                </Link>
              </>
            ) : (
              <>
                <ul className="menu-inner mb-0 d-none d-lg-block ">
                  <li className="menu-item menu-dropdown">
                    <span className="menu-link">
                      UserName <ChevronRight />
                    </span>
                    <div className="submenu megamenu megamenu-column-1 text-center p-0">
                      <div className="submenu-inner">
                        <Link href="#" className="submenu-link">
                          <User /> Profile
                        </Link>
                      </div>{" "}
                      <div className="submenu-inner">
                        <Link to="/cart" className="submenu-link">
                          <ShoppingBag /> My Cart
                        </Link>
                      </div>{" "}
                      <div className="submenu-inner">
                        <Link href="#" className="submenu-link">
                          <List /> Check Out
                        </Link>
                      </div>{" "}
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
              </>
            )}
          </section>
        </div>
      </nav>
    </>
  );
}
