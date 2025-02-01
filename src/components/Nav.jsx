import { Link, NavLink } from "react-router-dom";
import menuIcon from "../assets/Menu.svg";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import BackgroundGraphics from "./BackgroundGraphics";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", function () {
  //     let header = document.querySelector("header");
  //     header.classList.toggle("sticky", window.scrollY > 0);
  //   });
  // }, []);

  return (
    <React.Fragment>
      {/* <BackgroundGraphics /> */}
      <nav className="mx-auto w-full items-center justify-between px-5 md:flex md:px-16">
        {/* max-w-screen-3xl */}
        <div className="flex items-center justify-between pb-6 pt-8 text-white md:pb-12 md:pt-14">
          <div className="w-8 cursor-pointer md:w-[60px]">
            <Link
              onClick={() => setMenuOpen(false)}
              to={"/"}
              aria-label="GameX Logo"
            >
              <img
                className="h-8 w-8 md:h-fit md:w-fit"
                src={logo}
                alt="GameX logo"
                title="GameX logo"
              />
            </Link>
          </div>
          <div
            className="block cursor-pointer rounded-full bg-white active:opacity-70 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open Menu</span>
            <img
              className="p-2"
              src={menuIcon}
              loading="eager"
              alt="Menu Icon"
            />
          </div>
        </div>
        <div className="gap-8 pb-4 font-body font-semibold transition-all md:block md:pb-0">
          {/** nav for desktop */}
          <ul className="hidden flex-row space-x-8 font-body font-medium text-white md:flex ">
            <li>
              <NavLink
                to="/"
                className={`cursor-pointer ${
                  location.pathname.toString() === "/"
                    ? "border-b-2 border-white pb-2 text-white"
                    : "text-white"
                }`}
                // activeClassName="active"
                aria-label="Home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gxapp"
                className={`cursor-pointer ${
                  location.pathname.toString() === "/gxapp"
                    ? "border-b-2 border-white pb-2 text-white"
                    : "text-white"
                }`}
                aria-label="Gx App"
                // activeClassName="active"
              >
                GX App
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                className={`cursor-pointer ${
                  location.pathname.toString() === "/careers"
                    ? "border-b-2 border-white pb-2 text-white"
                    : "text-white"
                }`}
                aria-label="Careers"
                // activeClassName="active"
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={`cursor-pointer ${
                  location.pathname.toString() === "/contact"
                    ? "border-b-2 border-white pb-2 text-white"
                    : "text-white"
                }`}
                aria-label="Contact"
                // activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          {/** nav for mobile screens and tablets */}
          {menuOpen && (
            <ul className="mb-4 flex flex-col gap-y-4 border-b border-lightGray pb-4 font-body text-lg font-medium text-white transition-all md:hidden ">
              <li>
                <NavLink
                  to="/"
                  className={`w-fit cursor-pointer ${
                    location.pathname.toString() === "/"
                      ? "border-b-2 border-white text-white"
                      : "text-white"
                  }`}
                  aria-label="Home"
                  // activeClassName="active"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gxapp"
                  className={`w-fit cursor-pointer ${
                    location.pathname.toString() === "/gxapp"
                      ? "border-b-2 border-white text-white"
                      : "text-white"
                  }`}
                  aria-label="Gx App"
                  // activeClassName="active"
                  onClick={() => setMenuOpen(false)}
                >
                  GX App
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className={`w-fit cursor-pointer ${
                    location.pathname.toString() === "/careers"
                      ? "border-b-2 border-white text-white"
                      : "text-white"
                  }`}
                  aria-label="Careers"
                  // activeClassName="active"
                  onClick={() => setMenuOpen(false)}
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={`w-fit cursor-pointer ${
                    location.pathname.toString() === "/contact"
                      ? "border-b-2 border-white text-white"
                      : "text-white"
                  }`}
                  aria-label="Contact"
                  // activeClassName="active"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
