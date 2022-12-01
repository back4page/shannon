import { useState } from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import { navLinks } from "./navLinks";
import { AnimatePresence } from "framer-motion";
import { HeightResize } from "../../animations/height";

function DropDown({ pathname }) {
  const [showSubMenu, setShowSubMenu] = useState("");

  const toggleSubMenu = (index) => {
    if (showSubMenu === index) {
      return setShowSubMenu(null);
    }
    setShowSubMenu(index);
  };

  const activeSubLinkClass = (navLink) => {
    const value = navLink.subLinks.find((subLink) => subLink.link === pathname);
    if (pathname === value?.link) {
      return "text-custom-orange bg-slate-200";
    } else {
      return "";
    }
  };

  return (
    <div className="lg:hidden flex flex-col bg-custom-orange text-white text-lg cursor-pointer uppercase">
      {navLinks &&
        navLinks.map((navLink, i) => (
          <div key={i} className="border-b border-red-300 last:border-b-0">
            {!navLink.subLinks ? (
              <Link href={navLink.link} passHref>
                <a>
                  <p
                    className={`px-6 py-2 ${
                      pathname === navLink.link
                        ? "text-custom-orange bg-slate-200"
                        : ""
                    }`}
                    // onClick={() => {
                    //   toggleSubMenu(null)
                    // }}
                  >
                    {navLink.name}
                  </p>
                </a>
              </Link>
            ) : (
              <div
                className={`flex justify-between items-center px-6 py-2 ${activeSubLinkClass(
                  navLink
                )}`}
                onClick={() => toggleSubMenu(i)}
              >
                <p>{navLink.name}</p>
                <span
                  className={`transition duration-300 ${
                    showSubMenu === i && "rotate-90 "
                  }`}
                >
                  <FaAngleRight />
                </span>
              </div>
            )}

            <AnimatePresence>
              {showSubMenu === i && (
                <HeightResize>
                  {navLink.subLinks.map((subLink, i) => (
                    <Link key={i} href={subLink.link} passHref>
                      <a>
                        <p
                          className={`px-10 py-2 text-sm ${
                            pathname === subLink.link
                              ? "text-custom-orange bg-slate-200/80"
                              : ""
                          }`}
                          // onClick={() => {
                          //   toggleSubMenu(null);
                          // }}
                        >
                          {subLink.name}
                        </p>
                      </a>
                    </Link>
                  ))}
                </HeightResize>
              )}
            </AnimatePresence>
          </div>
        ))}
    </div>
  );
}

export default DropDown;
