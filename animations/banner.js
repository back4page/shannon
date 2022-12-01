import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export const BannerSlideFade = ({ children }) => {
  const { pathname } = useRouter();

  const slideFade = {
    initial: {
      opacity: 0,
      x: "200px",
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: "-200px",
    },
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        variants={slideFade}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: "easeOut",
          opacity: { duration: 0.3 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const BannerFade = ({ children }) => {
  const { pathname } = useRouter();

  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        variants={fade}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className=""
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export const BannerScaleFade = ({ children }) => {
  const { pathname } = useRouter();

  const scaleFade = {
    initial: {
      opacity: 0,
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.6,
    },
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={pathname}
        variants={scaleFade}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className=""
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
