import { Link } from "react-router-dom";
import menuIcon from "../assets/Menu.svg";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="mx-auto w-11/12 max-w-screen-3xl items-center justify-between md:flex">
        <div className="flex items-center justify-between pb-6 pt-8 text-white md:pb-12 md:pt-14">
          <div className="cursor-pointer ">
            <Link
              onClick={() => setMenuOpen(false)}
              to={"/dashboard"}
              aria-label={"Open Dashboard Menu"}
            >
              <img className="w-8 md:w-fit" src={logo} alt="GameX logo" />
            </Link>
          </div>
          <div
            className="block cursor-pointer rounded-full bg-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open Menu</span>
            <img className="p-2" src={menuIcon} alt="Menu Icon" />
          </div>
        </div>
        <div className="cursor-pointer gap-8  font-body font-semibold transition-all md:block md:pb-0">
          {/** nav for desktop and tablets */}
          <ul className="hidden flex-row space-x-8 font-body font-medium text-white md:flex ">
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  isActive ? "border-white text-white" : "text-white"
                }
                aria-label={"Publish Job"}
              >
                Publish Job
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/edit"
                end
                className={({ isActive }) =>
                  isActive ? "border-white text-white" : "text-white"
                }
                aria-label={"Edit Job"}
              >
                Edit Job
              </NavLink>
            </li>
          </ul>
          {/** nav for mobile screens*/}
          {menuOpen && (
            <ul className="flex flex-col space-y-4 pb-4 font-body text-xl font-medium text-white transition-all md:hidden">
              <li>
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    isActive ? "border-white text-white" : "text-white"
                  }
                  onClick={() => setMenuOpen(false)}
                  aria-label={"Publish Job"}
                >
                  Publish Job
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/edit"
                  end
                  className={({ isActive }) =>
                    isActive ? "border-white text-white" : "text-white"
                  }
                  onClick={() => setMenuOpen(false)}
                  aria-label={"Edit Job"}
                >
                  Edit Job
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <div className="h-px w-full bg-[#D9D9D9]"></div>
    </>
  );
};

export default DashboardNav;
