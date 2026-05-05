import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  const uiLink = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/work" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <footer className="w-full mt-20 py-10 border-t border-[var(--border)] px-4">
      
      {/* Main Footer Layout */}
      <div className="
        flex flex-col md:flex-row 
        justify-between gap-10 md:gap-20 
        max-w-6xl mx-auto
      ">

        {/* Branding */}
        <div className="flex flex-col md:w-1/3">
          <h1 className="font-[Syne] font-black text-[var(--text)] text-3xl">
            Manjil <span className="text-[var(--lime)]">.</span>
          </h1>
          <p className="text-[var(--muted2)] text-sm mt-2 leading-relaxed">
            Web developer crafting bold digital experiences from Kathmandu, Nepal.
          </p>
        </div>

        {/* Navigation + Social */}
        <div className="flex flex-col sm:flex-row gap-10 md:gap-20">

          {/* Navigation Section */}
          <div>
            <h3 className="text-[var(--text)] font-bold text-xs tracking-wider mb-3">
              NAVIGATE
            </h3>

            <ul className="flex flex-col gap-2">
              {uiLink.map((el) => (
                <li key={el.name}>
                  <NavLink
                    to={el.path}
                    className="text-[var(--muted2)] text-sm hover:text-[var(--text)] transition"
                  >
                    {el.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-[var(--text)] font-bold text-xs tracking-wider mb-3">
              CONNECT
            </h3>

            <ul className="flex flex-col gap-2 text-sm text-[var(--muted2)]">
              <li>
                <a
                  target="_blank"
                  href="https://github.com/User-manjil"
                  className="hover:text-[var(--text)] transition"
                >
                  Github
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/ma_manjil/"
                  className="hover:text-[var(--text)] transition"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/manzeel-aryal/"
                  className="hover:text-[var(--text)] transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copy */}
      <div className="text-center text-[var(--muted2)] text-xs mt-10">
        © {new Date().getFullYear()} Manjil. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;