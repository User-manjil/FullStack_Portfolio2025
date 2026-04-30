
// import { NavLink } from "react-router-dom";

import { Link, NavLink } from "react-router";

const Navbar = () => {
  const uiLink = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/work" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    
    <div className="flex fixed w-full max-w-6xl bg-black/70 backdrop-blur-md z-50 mx-auto justify-between items-center h-15 px-5">
      
      {/* Logo */}
      <div className="flex font-[Syne] font-black text-[var(--text)] text-xl">
        MA<span className="text-[var(--lime)]">.</span>
      </div>

      {/* Navigation */}
      <ul className="flex gap-10 text-[12px] font-[Bricolage Grotesque] font-medium">
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

      {/* CTA Button */}
      
       <Link to={'/contact'} > <div  className="flex border px-4 py-2 border-[var(--muted)] h-fit font-[Bricolage Grotesque] hover:bg-[var(--lime)] hover:text-black font-medium text-[10px] w-fit rounded-[var(--r)] text-[var(--text)] transition-all duration-300 cursor-pointer"> LET'S TALK </div></Link>
      
    </div>
  );
};

export default Navbar;