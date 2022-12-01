import { motion } from "framer-motion";

export const Fade = ({ children }) => {
  const fade = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  return (
    <motion.div variants={fade} initial="initial" whileInView="animate">
      {children}
    </motion.div>
  );
};

export const SlideTopFade = ({ children }) => {
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
      variants={slideTopFade}
      initial="initial"
      whileInView="animate"
      className=""
    >
      {children}
    </motion.div>
  );
};

export const SlideRightFade = ({ children }) => {
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
      variants={slideRightFade}
      initial="initial"
      whileInView="animate"
      className=""
    >
      {children}
    </motion.div>
  );
};

export const SlideLeftFade = ({ children }) => {
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
      variants={slideLeftFade}
      initial="initial"
      whileInView="animate"
      className=""
    >
      {children}
    </motion.div>
  );
};

export const ScaleFade = ({ children }) => {
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
      variants={scaleFade}
      initial="initial"
      whileInView="animate"
      className=""
    >
      {children}
    </motion.div>
  );
};

export const StaggerParent = ({ children }) => {
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
      variants={staggerParent}
      initial="initial"
      whileInView="animate"
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

  return <motion.div variants={fade}>{children}</motion.div>;
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

  return <motion.div variants={slideDownFade}>{children}</motion.div>;
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

  return <motion.div variants={slideLeftFade}>{children}</motion.div>;
};
