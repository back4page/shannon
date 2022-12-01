import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

function Modal({ showModal, setShowModal, node, children }) {
  const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);

  //   return () => setMounted(false);
  // }, []);

  useEffect(() => {
    setMounted(true);

    const scrollWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const fakeScroll = `mr-[${scrollWidth + "px"}]`;

    const scrollbar = "absolute top-0 bottom-0 right-0 w-[8px] bg-[#2f4f4f]";

    if (showModal) {
      // document.body.classList.add("overflow-hidden", "bg-[#2f4f4f]");
      // document.body.classList.add("overflow-hidden", fakeScroll);
      // document.body.style.overflowY = "scroll";
      // if (window.innerWidth >= 768 && document.body.scrollHeight > 947) {
      //   document.body.style.marginRight = scrollWidth + "px";
      // }
    }

    return () => {
      setMounted(false);
      // document.body.classList.remove("overflow-hidden", "bg-[#2f4f4f]");
      // document.body.classList.remove("overflow-hidden", fakeScroll);

      // document.body.style.overflowY = "unset";
      // document.body.style.marginRight = "auto";
    };
  }, [showModal]);

  // useEffect(() => {
  //   setMounted(true);

  //   const scrollWidth =
  //     window.innerWidth - document.documentElement.clientWidth;

  //   if (showModal) {
  //     document.body.style.overflow = "hidden";
  //     if (window.innerWidth >= 768 && document.body.scrollHeight > 947) {
  //       document.body.style.marginRight = scrollWidth + "px";
  //     }
  //   }

  //   return () => {
  //     setMounted(false);

  //     document.body.style.overflow = "unset";
  //     document.body.style.marginRight = "auto";
  //   };
  // }, [showModal]);

  return mounted
    ? createPortal(
        <div>
          <AnimatePresence>
            {showModal && (
              <div className="">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="fixed inset-0 bg-black/50 z-30"
                >
                  <div className="flex h-screen justify-center items-center">
                    <motion.div
                      initial={{ y: "100px", opacity: 0 }}
                      animate={{ y: "0px", opacity: 1 }}
                      exit={{ y: "100px", opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      ref={node}
                      className="z-40 bg-white text-gray-900  rounded"
                    >
                      <div className="p-4 relative">
                        <button
                          className="absolute top-[10px] right-[10px]  transition duration-100 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowModal(false)}
                        >
                          <FaTimes />
                        </button>

                        {children}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>,
        document.getElementById("modal-root")
      )
    : null;
}

export default Modal;
