import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import { commentList } from "../data/commentList";

function CustomSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stopLoop, setStopLoop] = useState(false);
  const { id, img, name, desc, position } = commentList[currentSlide];
  const [ref, { width }] = useMeasure();
  const [direction, setDirection] = useState(0);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const next = () => {
    setDirection(1);
    if (currentSlide === commentList.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(currentSlide + 1);
  };

  const prev = () => {
    setDirection(-1);
    if (currentSlide === 0) {
      setCurrentSlide(commentList.length - 1);
      return;
    }
    setCurrentSlide(currentSlide - 1);
  };

  const changeSlide = (i) => {
    if (i < currentSlide) {
      setDirection(-1);
    }
    if (i > currentSlide) {
      setDirection(1);
    }
    setCurrentSlide(i);
  };

  useEffect(() => {
    const loopSlide = !stopLoop && setTimeout(() => next(), 5000);
    return () => clearTimeout(loopSlide);
  }, [next, stopLoop]);

  // const [tuple, setTuple] = useState([null, currentSlide]);

  // if (tuple[1] !== currentSlide) {
  //   setTuple([tuple[1], currentSlide]);
  // }

  // const previous = tuple[0];

  // const direction = currentSlide > previous ? "increasing" : "decreasing";

  // const checkNumber = (number) => {
  //   if (number > commentList.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return commentList.length - 1;
  //   }

  //   return number;
  // };

  // const next = () => {
  //   let newIndex = setCurrentSlide(currentSlide + 1);
  //   return newIndex;
  // };

  // const prev = () => {
  //   let newIndex = setCurrentSlide(currentSlide - 1);
  //   return newIndex;
  // };

  // const next = () => {
  //   setCurrentSlide((index) => {
  //     let newIndex = index + 1;
  //     return checkNumber(newIndex);
  //   });
  // };

  // const prev = () => {
  //   setCurrentSlide((index) => {
  //     let newIndex = index - 1;
  //     return checkNumber(newIndex);
  //   });
  // };

  const slide = {
    initial: (direction) => ({
      x: direction > 0 ? width : -width,
      opacity: 0,
      scale: 0.4,
    }),
    animate: { x: 0, opacity: 1, scale: 1, zIndex: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -width : width,
      opacity: 0,
      scale: 0.4,
      zIndex: 0,
    }),
  };

  return (
    <div className="pb-10 relative h-[500px] lg:h-[400px] ">
      <div className="flex justify-center items-center px-3 lg:px-20 py-5 absolute overflow-hidden">
        <div ref={ref} className="text-center">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={id}
              custom={direction}
              variants={slide}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileTap={{ cursor: "grabbing" }}
              onMouseEnter={() => setStopLoop(true)}
              onMouseLeave={() => setStopLoop(false)}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  next();
                } else if (swipe > swipeConfidenceThreshold) {
                  prev();
                }
              }}
              className="cursor-grab"
            >
              <Image
                src={img}
                alt=""
                className="lg:pb-5"
                width={50}
                height={50}
              />
              <h2 className="py-6 heading-lg lg:text-[26px] text-center">
                {desc}
              </h2>
              <p className="text-lg lg:text-xl text-green-400">{name}</p>
              <p className="text-xs lg:text-sm text-custom-gray3">{position}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-10 absolute bottom-20 left-0 right-0 flex justify-center gap-2">
        {commentList.map((list, i) => (
          <div
            key={i}
            className={`h-[10px] w-[10px] rounded-full cursor-pointer transition duration-300 ${
              currentSlide === i ? "bg-green-600" : " bg-slate-300"
            }`}
            onClick={() => changeSlide(i)}
          ></div>
        ))}
      </div>
      <div className="mt-10 flex justify-center gap-5 absolute bottom-4 left-0 right-0">
        <button
          className="bg-cyan-300 active:bg-cyan-400 px-4 py-2 rounded text-xs font-semibold text-gray-500"
          onClick={prev}
        >
          Prev
        </button>
        <button
          className="bg-cyan-300 active:bg-cyan-400 px-4 py-2 rounded text-xs font-semibold text-gray-500"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomSlider;
