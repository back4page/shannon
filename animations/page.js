import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export const PageFade = ({ children }) => {
  const { asPath } = useRouter();

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={asPath}
        // initial={false}
        // animate={false}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-x-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
