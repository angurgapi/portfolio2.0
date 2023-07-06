import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import home from "../assets/home.svg";
import burger from "../assets/burger.svg";
import times from "../assets/times.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    {
      id: "tools",
      title: "tools / skills",
    },
    {
      id: "projects",
      title: "projects",
    },
    {
      id: "contact",
      title: "contact",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="w-full flex items-center p-5 fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={home} alt="logo" className="w-5 h-5 object-contain" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="hover:text-cyan-100 text-[18px] font-medium cursor-pointer"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={menuOpen ? times : burger}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <div
            className={`${
              !menuOpen ? "hidden" : "flex"
            } p-6 bg-blur absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="font-medium cursor-pointer text-[16px] text-white"
                  onClick={() => {
                    setMenuOpen(!menuOpen);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
