import Image from "next/image";
import {
  SlideLeftFade,
  SlideRightFade,
  SlideTopFade,
} from "../../animations/scroll";

function Creatives() {
  return (
    <div className="bg-custom-gray4">
      <div className="container py-12 lg:py-[130px] px-4">
        <div className="flex flex-col lg:flex-row gap-7 lg:gap-20">
          <div className="lg:flex-1">
            <div className="lg:space-y-14">
              <SlideTopFade>
                <h1 className="heading-lg lg:text-[32px] capitalize">
                  Smart template for creatives
                </h1>
              </SlideTopFade>

              <SlideRightFade>
                <div className="mt-5">
                  <h2 className=" text-custom-orange text-[19px] lg:text-[26px] font-Montserrat capitalize">
                    professional tools
                  </h2>
                  <p className="text-custom-gray3 mt-5">
                    Professional tools & Design makes our investments more
                    valuable. And that’s how we work with our startups — as
                    partners.
                  </p>
                </div>
                <div>
                  <h2 className="mt-5 text-custom-orange text-[19px] lg:text-[26px] font-Montserrat capitalize">
                    professional products
                  </h2>
                  <p className=" text-custom-gray3 mt-5">
                    Professional tools & Design makes our investments more
                    valuable. And that’s how we work with our startups — as
                    partners.
                  </p>
                </div>

                <div className="mt-5 flex justify-between items-center gap-3 lg:gap-4">
                  <div className="">
                    <Image
                      src="/images/about/about.jpg"
                      alt="CEO"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="lg:mt-5 flex-1">
                    <p className=" text-custom-gray text-sm lg:text-base">
                      Build on the principles of excellence. For all the things
                      you want to do. For the things you love.
                    </p>
                    <p className="mt-3 text-custom-gray3 text-xs lg:text-sm">
                      Jonathan Guerrero, CEO
                    </p>
                  </div>
                </div>
              </SlideRightFade>
            </div>
          </div>

          <div className="lg:flex-1">
            <SlideLeftFade>
              <Image
                src="/images/about/about2.jpg"
                alt="image"
                width={533}
                height={485}
              />
            </SlideLeftFade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creatives;
