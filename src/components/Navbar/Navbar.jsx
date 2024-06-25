import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { data } from "autoprefixer";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu.jsx";

const DropdownLinks = [
  {
    name: "Our Service",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div
        className="fixed top-0 right-0 w-full
    bg-white text-black shadow-md z-[99999]"
      >
        <div className="  bg-gradient-to-r from-primary to-secondary">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex justify-between text-white">
              <p>20% off on next booking</p>
              <p>Mobile No. +84 12345678</p>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* logo section */}
            <div>
              <Link to="/" onClick={() => window.scroll(0, 0)}>
                <img src={LogoImg} alt="" className="h-16" />
              </Link>
            </div>
            {/*Desktop Navlink section */}
            <div className="mobile-menu hidden md:block">
              <ul className="flex items-center gap-6">
                <li className="py-4">
                  <NavLink
                    to="/"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/blogs"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/places"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Best Places
                  </NavLink>
                </li>
                <li className="py-4">
                  <NavLink
                    to="/about"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </NavLink>
                </li>
                {/* Dropdown Section */}
                <li className="py-4 relative group cursor-pointer">
                  <div className="dropdown group flex items-center">
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown
                        className="transition-all
                      duration-200 group-hover:rotate-180"
                      ></FaCaretDown>
                    </span>
                  </div>
                  <div
                    className=" absolute -left-9 top-[57px] z-[9999] 
                  hidden group-hover:block shadow-md 
                  text-black w-[150px] bg-white p-2"
                  >
                    <ul>
                      {DropdownLinks.map((data) => {
                        return (
                          <li key={data.name}>
                            <a
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              href={data.link}
                            >
                              {data.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* Book Now Button */}
            <div className="flex items-center gap-4 ">
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary
             to-secondary  hover:bg-bg-gradient-to-r 
            hover:from-secondary hover:bg-primary
            transition-all duration-600 text-white px-3
            py-1 rounded-full"
              >
                Book Now
              </button>
              {/* Mobile Hambuger Menu */}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer
                        transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer
                        transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Navbar;
