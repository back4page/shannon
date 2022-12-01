import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScrollAnimate = (props) => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: props,
    triggerOnce: true,
  });

  inView ? controls.start("animate") : controls.start("initial");

  return { ref, controls };
};
