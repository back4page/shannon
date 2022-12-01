import Image from "next/image";
import {
  Fade,
  SlideTopFade,
  StaggerParent,
  StaggerLeftFade,
} from "../../animations/scroll";

function Advantages() {
  const advantagesData = [
    {
      name: "Web Design",
      icon: "/images/pen.png",
    },
    {
      name: "Web Development",
      icon: "/images/plug.png",
    },
    {
      name: "UX Design",
      icon: "/images/setting.png",
    },
    {
      name: "SEO",
      icon: "/images/search.png",
    },
  ];

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="lg:grid grid-cols-2 px-4 gap-28">
        <SlideTopFade>
          <Image
            src="/images/macbook.png"
            alt="mackbook"
            width={911}
            height={554}
          />
        </SlideTopFade>

        <div className="pt-2 lg:mr-36 lg:pr-60 self-center">
          <SlideTopFade>
            <h2 className="heading-lg">Discover the advantages</h2>
          </SlideTopFade>
          <Fade>
            <p className="mt-7 text-custom-gray3">
              Thanks to our experience and the centrality of the attention to
              the wishes of our customers, we create Web projects at the highest
              professional level
            </p>
          </Fade>

          <StaggerParent>
            <div className="flex flex-col gap-2 lg:gap-4 mt-14">
              {advantagesData.map((advantage, i) => (
                <div key={i}>
                  <StaggerLeftFade>
                    <div className="flex items-center gap-5 lg:gap-10">
                      <Image
                        src={advantage.icon}
                        alt="pen"
                        width={30}
                        height={30}
                      />
                      <p className="text-custom-orange">{advantage.name}</p>
                    </div>
                  </StaggerLeftFade>
                </div>
              ))}
            </div>
          </StaggerParent>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
