import { Link } from "react-router-dom";
import menuIcon from "../assets/Menu.svg";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import BackgroundGraphics from "./BackgroundGraphics";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      let header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  return (
    <React.Fragment>
      {/* <BackgroundGraphics /> */}
      <nav className="mx-auto w-11/12 max-w-screen-3xl items-center justify-between md:flex">
        <div className="flex items-center justify-between pb-6 pt-8 text-white md:pb-12 md:pt-14">
          <div className="w-8 cursor-pointer md:w-[60px]">
            <Link onClick={() => setMenuOpen(false)} to={"/"}>
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
            <Link
              to="/"
              className={`cursor-pointer ${
                location.pathname.toString() === "/"
                  ? "border-b-2 border-neonYellow text-neonYellow"
                  : "text-white"
              }`}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/gxapp"
              className={`cursor-pointer ${
                location.pathname.toString() === "/gxapp"
                  ? "border-b-2 border-neonYellow text-neonYellow"
                  : "text-white"
              }`}
            >
              <li>GX App</li>
            </Link>
            <Link
              to="/careers"
              className={`cursor-pointer ${
                location.pathname.toString() === "/careers"
                  ? "border-b-2 border-neonYellow text-neonYellow"
                  : "text-white"
              }`}
            >
              <li>Careers</li>
            </Link>
            <Link
              to="/contact"
              className={`cursor-pointer ${
                location.pathname.toString() === "/contact"
                  ? "border-b-2 border-neonYellow text-neonYellow"
                  : "text-white"
              }`}
            >
              <li>Contact Us</li>
            </Link>
          </ul>
          {/** nav for mobile screens and tablets */}
          {menuOpen && (
            <ul className="mb-4 flex flex-col gap-y-4 border-b border-lightGray pb-4 font-body text-lg font-medium text-white transition-all md:hidden ">
              <Link
                to="/"
                className="w-fit cursor-pointer active:text-neonYellow "
                onClick={() => setMenuOpen(false)}
              >
                <li>Home</li>
              </Link>
              <Link
                to="/gxapp"
                className="w-fit cursor-pointer active:text-neonYellow "
                onClick={() => setMenuOpen(false)}
              >
                <li>GX App</li>
              </Link>
              <Link
                to="/careers"
                className="w-fit cursor-pointer active:text-neonYellow "
                onClick={() => setMenuOpen(false)}
              >
                <li>Careers</li>
              </Link>
              <Link
                to="/contact"
                className="w-fit cursor-pointer active:text-neonYellow"
                onClick={() => setMenuOpen(false)}
              >
                <li>Contact Us</li>
              </Link>
            </ul>
          )}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
