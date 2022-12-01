import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const buttonVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", buttonVisibility);
    return () => {
      window.removeEventListener("scroll", buttonVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      aria-label="scroll to top"
      onClick={scrollToTop}
      className={
        isVisible
          ? "fixed bottom-10 right-10 p-3 text-2xl text-slate-100 bg-custom-orange rounded transition-opacity duration-300 hover:bg-custom-gray active:scale-90"
          : "hidden"
      }
    >
      <FaAngleUp />
    </button>
  );
}

export default ScrollToTop;
