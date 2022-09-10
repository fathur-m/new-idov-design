import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { GiEntryDoor } from "react-icons/gi";
import { UseToggle } from "../Hook/UseToggle";
import NavMobile from "./NavMobile";

const Navbar = () => {
  const navigate = useNavigate();
  const { status: nav, toggleStatus: navToggle } = UseToggle();

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 px-4 select-none z-40 bg-ctm-black/70 backdrop-blur-md border-b-2 border-ctm-blue/50">
      <div className="max-w-[1200px] h-full mx-auto flex justify-between items-center flex-row-reverse sm:flex-row">
        <span className="sm:hidden cursor-pointer pt-1" onClick={navToggle}>
          {nav ? (
            <AiOutlineClose className="text-lg" />
          ) : (
            <AiOutlineMenuUnfold className="text-lg" />
          )}
        </span>
        <span
          className="sm:hidden cursor-pointer ml-auto mr-4 pt-1"
          onClick={() => navigate("/login")}
        >
          <GiEntryDoor className="text-lg" />
        </span>
        <div
          onClick={() => {
            navigate("/");
            window.scrollBy({
              top: -window.pageYOffset,
              left: 0,
              behavior: "smooth",
            });
          }}
          className="sm:mr-16 cursor-pointer"
        >
          <img className="w-14" src={Logo} alt="/" />
        </div>
        <ul className="mr-auto sm:flex items-center gap-8 pt-1 hidden">
          <li>
            <NavLink to="/tv">Serial TV</NavLink>
          </li>
          <li>
            <NavLink to="/movie">Film</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
        <div
          onClick={() => navigate("/login")}
          className="pt-1 gap-2 items-center cursor-pointer hidden sm:block"
        >
          <span>Masuk</span>
        </div>
        <NavMobile nav={nav} />
      </div>
    </nav>
  );
};

export default Navbar;
