import { useState, useEffect, useId } from "react";

import Link from "next/link";
// import Image from "next/image";
import Router, { useRouter } from "next/router";
import DropDown from "./DropDown";
import { navLinks } from "./navLinks";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerMenu from "./HamburgerMenu";
import { HeightResize } from "../../animations/height";

function Header() {
  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState("");
  const uId = useId();

  Router.events.on("routeChangeStart", (url) => {
    setToggle(false);
  });

  const { pathname, asPath } = useRouter();

  // useEffect(() => {
  //   setToggle(false);
  // }, [asPath]);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const menu = (index) => {
    if (showSubMenu === index) {
      return setShowSubMenu(null);
    }
    setShowSubMenu(index);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const activeLinkClass = (path) =>
    pathname === path
      ? "text-custom-orange"
      : "hover:text-custom-orange transition duration-300";

  const activeLinkBorder = (path) =>
    pathname === path ? "absolute w-full border border-custom-orange" : "";

  const activeSubLinkClass = (navLink) => {
    const value = navLink.subLinks.find((subLink) => subLink.link === pathname);
    if (pathname === value?.link) {
      return "text-custom-orange cursor-pointer";
    } else {
      return "hover:text-custom-orange transition duration-300 cursor-pointer";
    }
  };

  const checkSubLinkActive = (navLink) => {
    const value = navLink.subLinks.find((subLink) => subLink.link === pathname);
    if (pathname === value?.link) {
      return true;
    } else {
      return false;
    }
  };

  const activeSubLinkBorder = (navLink) => {
    const value = navLink.subLinks.find((subLink) => subLink.link === pathname);
    if (pathname === value?.link) {
      return "absolute w-full border border-custom-orange";
    } else {
      return "";
    }
  };

  return (
    <div className="fixed w-full z-30">
      <div
        className={`duration-200 ${
          scroll
            ? `py-4 ${
                pathname === "/"
                  ? "bg-custom-gray text-white shadow-lg"
                  : "bg-gray-200  shadow-lg"
              } `
            : `py-14  ${
                pathname === "/"
                  ? "bg-transparent text-white"
                  : "bg-white text-black duration-500"
              } `
        }`}
      >
        <div className="px-4 lg:container flex justify-between items-center">
          <div className="">
            <Link href="/" passHref>
              {/* <div className="w-[50px] h-[50px]">
                <Image
                  src="/images/logo/.jpg"
                  alt="Shannon IT"
                  width={238}
                  height={212}
                />
              </div> */}
              <h1 className="text-[22px] font-Shrikhand text-emerald-500 cursor-pointer border px-2 py-1 border-emerald-500/50 select-none underline underline-offset-4">
                Shannon IT
              </h1>
            </Link>
          </div>

          <HamburgerMenu toggle={toggle} setToggle={setToggle} />

          <div className="hidden lg:flex gap-[50px] uppercase text-sm font-Montserrat">
            {navLinks &&
              navLinks.map((navLink, i) => (
                <div key={i}>
                  {!navLink.subLinks ? (
                    <div className="">
                      <Link href={navLink.link} passHref>
                        <a className={`${activeLinkClass(navLink.link)}`}>
                          {navLink.name}
                        </a>
                      </Link>
                      {pathname === navLink.link && !scroll ? (
                        <motion.div
                          layoutId={uId}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="relative"
                        >
                          <div className={activeLinkBorder(navLink.link)}></div>
                        </motion.div>
                      ) : (
                        <div className="relative">
                          <div className={activeLinkBorder(navLink.link)}></div>
                        </div>
                      )}

                      {/* for smooth scrolling */}
                      {/* {pathname === navLink.link && (
                        <motion.div
                          layoutId={uId}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="relative"
                        >
                          <div className={activeLinkBorder(navLink.link)}></div>
                        </motion.div>
                      )} */}
                    </div>
                  ) : (
                    <div
                      onMouseEnter={() => menu(i)}
                      onMouseLeave={() => menu(null)}
                      className={activeSubLinkClass(navLink)}
                    >
                      <div>
                        <p className="">{navLink.name}</p>

                        {checkSubLinkActive(navLink) && !scroll ? (
                          <motion.div
                            layoutId={uId}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative"
                          >
                            <div className={activeSubLinkBorder(navLink)}></div>
                          </motion.div>
                        ) : (
                          <div className="relative">
                            <div className={activeSubLinkBorder(navLink)}></div>
                          </div>
                        )}

                        {/* for smooth scrolling */}
                        {/* {checkSubLinkActive(navLink) && (
                          <motion.div
                            layoutId={uId}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="relative"
                          >
                            <div className={activeSubLinkBorder(navLink)}></div>
                          </motion.div>
                        )} */}
                      </div>

                      <AnimatePresence>
                        {showSubMenu === i && (
                          <div className="absolute">
                            <HeightResize>
                              <div className="h-8 border-b-2 border-custom-gray"></div>
                              <div className="py-2 bg-custom-orange shadow-xl">
                                {navLink.subLinks.map((subLink, i) => (
                                  <div
                                    key={i}
                                    className={`flex flex-col hover:text-custom-orange hover:bg-slate-200 cursor-pointer duration-300  ${
                                      pathname === subLink.link
                                        ? "bg-slate-200 text-custom-orange "
                                        : "text-white  "
                                    }}`}
                                  >
                                    <Link href={subLink.link}>
                                      <a className={`py-2 pl-4 pr-24`}>
                                        {subLink.name}
                                      </a>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </HeightResize>
                          </div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {toggle && (
          <HeightResize>
            <DropDown
              pathname={pathname}
              // closeDropdown={() => setToggle(false)}
            />
          </HeightResize>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
