import Link from "next/link";
import ImageGrid from "../common/ImageGrid";
import { servicesAllList } from "../../data/servicesAllList";
import {
  ScaleFade,
  SlideTopFade,
  StaggerDownFade,
  StaggerParent,
} from "../../animations/scroll";

function Services() {
  const services = servicesAllList.slice(0, 6);

  return (
    <div className="bg-white">
      <div className="lg:container py-20 px-4 lg:py-32">
        <div className="lg:w-2/4">
          <SlideTopFade>
            <h2 className="heading-lg leading-snug">
              For all the things you want to do. <br />
              For the things you love.
            </h2>
          </SlideTopFade>
        </div>

        <StaggerParent>
          <div className="lg:container py-16 px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((product, i) => (
              <div key={i}>
                <StaggerDownFade>
                  <ImageGrid
                    // key={product.id}
                    image={product.img}
                    name={product.name}
                  />
                </StaggerDownFade>
              </div>
            ))}
          </div>
        </StaggerParent>

        <div className="flex justify-center mt-5">
          <ScaleFade>
            <Link href="/services" passHref>
              <button className="px-10 lg:px-16 py-3 lg:py-4 bg-white hover:bg-custom-gray text-custom-gray hover:text-white duration-300 text-sm border-2 border-slate-300 hover:border-custom-gray font-Montserrat rounded-full uppercase">
                see more
              </button>
            </Link>
          </ScaleFade>
        </div>
      </div>
    </div>
  );
}

export default Services;
