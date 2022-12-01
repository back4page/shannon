import { motion } from "framer-motion";
import { useScrollAnimate } from "../hooks/useScrollAnimate";

export const Fade = ({ children }) => {
  const { ref, controls } = useScrollAnimate(0);

  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={fade}
      initial="initial"
      animate={controls}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const SlideTopFade = ({ children }) => {
  const { ref, controls } = useScrollAnimate(0);

  const slideTopFade = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={slideTopFade}
      initial="initial"
      animate={controls}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className=""
    >
      {children}
    </motion.div>
  );
};

export const SlideRightFade = ({ children }) => {
  const { ref, controls } = useScrollAnimate(0);

  const slideRightFade = {
    initial: {
      x: "-20vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={slideRightFade}
      initial="initial"
      animate={controls}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className=""
    >
      {children}
    </motion.div>
  );
};

export const SlideLeftFade = ({ children }) => {
  const { ref, controls } = useScrollAnimate(0);

  const slideLeftFade = {
    initial: {
      x: "20vw",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={slideLeftFade}
      initial="initial"
      animate={controls}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className=""
    >
      {children}
    </motion.div>
  );
};

export const ScaleFade = ({ children }) => {
  const { ref, controls } = useScrollAnimate(0);

  const scaleFade = {
    initial: {
      opacity: 0,
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={scaleFade}
      initial="initial"
      animate={controls}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className=""
    >
      {children}
    </motion.div>
  );
};

export const StaggerParent = ({ children }) => {
  const { ref, controls } = useScrollAnimate(0);

  const staggerParent = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={staggerParent}
      initial="initial"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export const StaggerFade = ({ children }) => {
  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={fade}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerDownFade = ({ children }) => {
  const slideDownFade = {
    initial: {
      opacity: 0,
      y: -40,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      variants={slideDownFade}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerLeftFade = ({ children }) => {
  const slideLeftFade = {
    initial: {
      opacity: 0,
      x: 40,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={slideLeftFade}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};
