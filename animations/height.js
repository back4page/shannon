//---requires <AnimatePresence> before condition

import { motion } from "framer-motion";

export const HeightResize = ({ children }) => {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};
