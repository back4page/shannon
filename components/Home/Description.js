import Image from "next/image";
import { descriptionList } from "../../data/descriptionList";
import { useScrollAnimate } from "../../hooks/useScrollAnimate";
import { motion } from "framer-motion";
import {
  SlideLeftFade,
  SlideRightFade,
  SlideTopFade,
  StaggerDownFade,
  StaggerParent,
} from "../../animations/scroll";

function Description() {
  const { ref, controls } = useScrollAnimate(0.3);
  const { ref: ref2, controls: controls2 } = useScrollAnimate(0.1);

  const stagger = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const items = {
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
    <div className="bg-custom-gray4">
      <div className="container py-12 lg:py-[120px] px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 pb-20 border-b border-gray-200">
          <div className="flex flex-col justify-between">
            <SlideTopFade>
              <h1 className="heading-lg leading-snug lg:text-[32px]">
                Beautiful, Innovative & Effective Websites With Box Theme
              </h1>
            </SlideTopFade>

            <SlideRightFade>
              <p className="mt-6 lg:mt-10 text-custom-gray3">
                There are vivid, unique and, sometimes, even revolutionary ideas
                on a basis of our work. It is a very foundation of each and
                every project, no matter it’s digital, marketing activity or a
                PR campaign — we always score our goals.
              </p>
            </SlideRightFade>
          </div>
          <div className="flex items-end">
            <SlideLeftFade>
              <p className="text-custom-gray3">
                Our raison d’etre is to master the best image solutions in the
                industry, and we solve all our tasks. There are a lot of major
                brands among our clients, and each of them is satisfied with our
                partnership.
              </p>
            </SlideLeftFade>
          </div>
        </div>

        <StaggerParent>
          <div className="grid grid-cols-1 lg:grid-cols-4 mt-20">
            {descriptionList.map((list, i) => (
              <div key={i} className="p-5">
                <StaggerDownFade>
                  <div className="">
                    <Image
                      src={list.icon}
                      alt={list.name}
                      width={59}
                      height={64}
                    />

                    <h2 className="mt-5 heading-md">{list.name}</h2>
                    <p className="mt-6 text-sm leading-relaxed text-custom-gray3">
                      {list.description}
                    </p>
                  </div>
                </StaggerDownFade>
              </div>
            ))}
          </div>
        </StaggerParent>
      </div>
    </div>
  );
}

export default Description;
