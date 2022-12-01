import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function Accordion({ service, index, clicked, setClicked }) {
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div key={index} className="">
      <div className="border-b lg:w-[470px]">
        <div
          className="flex items-center justify-between py-4 group cursor-pointer"
          onClick={() => toggle(index)}
        >
          <div className="flex items-center gap-5">
            <div className="text-custom-orange text-[17px]  lg:text-xl">
              {service.icon}
            </div>
            <h1 className="heading-lg text-[17px] lg:text-xl group-hover:text-custom-orange transition duration-300">
              {service.name}
            </h1>
          </div>
          <span
            className={`mr-2 text-base lg:text-lg text-custom-gray3 group-hover:text-custom-orange  transition duration-300 ${
              clicked === index && " rotate-90 "
            }`}
          >
            <FaAngleRight />
          </span>
          {/* {clicked === index ? <FaAngleDown /> : <FaAngleRight />} */}
        </div>

        <AnimatePresence>
          {clicked === index && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-7 py-4 pr-16">
                <p className="text-sm text-custom-gray3">{service.desc}</p>
                <Link href="/more-information" passHref>
                  <a>
                    <p className="link">
                      Learn more <FaAngleRight />
                    </p>
                  </a>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* {clicked === index ? (
          <div className="flex flex-col gap-7 py-4 pr-16 ">
            <p className="text-sm text-custom-gray3">{service.desc}</p>
            <Link href="/more-information">
              <p className="link">
                Learn more <FaAngleRight />
              </p>
            </Link>
          </div>
        ) : null} */}
      </div>
    </div>
  );
}

export default Accordion;
