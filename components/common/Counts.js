import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Fade } from "../../animations/scroll";

function Counts() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const counts = [
    {
      name: "coffee cups",
      number: 654,
    },
    {
      name: "projects",
      number: 53,
    },
    {
      name: "working days",
      number: 569,
    },
    {
      name: "clients",
      number: 236,
    },
  ];

  return (
    <div className="bg-white">
      <div className="lg:container py-16 px-4 lg:py-36">
        <Fade>
          <div className="grid lg:grid-cols-4 gap-4" ref={ref}>
            {counts.map((count, i) => (
              <div key={i} className="text-center">
                <h1 className="text-[25px] lg:text-[55px] text-custom-orange font-Montserrat">
                  {inView && (
                    <CountUp start={0} end={count.number} duration={4} />
                  )}
                </h1>
                <p className="mt-1 lg:mt-2 text-sm text-custom-gray3">
                  {count.name}
                </p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Counts;
