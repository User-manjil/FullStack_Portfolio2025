import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const uiLink = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/work" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto py-4 px-5 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <div className="flex font-[Syne] font-black text-[var(--text)] text-xl">
            MA<span className="text-[var(--lime)]">.</span>
          </div>
        </Link>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="sm:hidden text-[var(--text)] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-10 text-[12px] font-[Bricolage Grotesque] font-medium">
          {uiLink.map((el) => (
            <li key={el.name}>
              <NavLink
                to={el.path}
                className={({ isActive }) =>
                  `
                relative transition-all
                ${isActive ? "text-[var(--text)]" : "text-[var(--muted)] hover:text-[var(--text)]"}

                after:content-['']
                after:absolute
                after:left-0
                after:bottom-[-5px]
                after:h-[1px]
                after:rounded-full
                after:transition-all
                after:duration-300

                ${
                  isActive
                    ? "after:w-full after:bg-[var(--lime)]"
                    : "after:w-0 after:bg-transparent hover:after:w-full hover:after:bg-[var(--lime)]"
                }
              `
                }
              >
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link to="/contact" className="hidden sm:flex">
          <div className="border px-4 py-2 border-[var(--muted)]
           font-[Bricolage Grotesque] text-[10px] rounded-[var(--r)]
           text-[var(--text)] hover:bg-[var(--lime)] hover:text-black transition-all duration-300 cursor-pointer">
            LET'S TALK
          </div>
        </Link>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`
        sm:hidden flex flex-col bg-black/95 backdrop-blur-xl transition-all duration-300 overflow-hidden
        ${isOpen ? "max-h-[300px] py-5" : "max-h-0 py-0"}
      `}
      >
        {/* Navigation Links (Mobile) */}
        <ul className="flex flex-col gap-6 text-[14px] font-[Bricolage Grotesque] font-medium px-6">
          {uiLink.map((el) => (
            <li key={el.name}>
              <NavLink
                to={el.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                relative transition-all block w-full
                ${isActive ? "text-[var(--lime)]" : "text-[var(--muted)] hover:text-[var(--text)]"}
              `
                }
              >
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA Button Mobile */}
        <div className="px-6 mt-6">
          <Link to="/contact" onClick={closeMenu}>
            <div className="border px-4 py-3 border-[var(--muted)]
              font-[Bricolage Grotesque] text-[12px] rounded-[var(--r)] text-[var(--text)]
              hover:bg-[var(--lime)] hover:text-black transition-all duration-300 cursor-pointer text-center">
              LET'S TALK
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;