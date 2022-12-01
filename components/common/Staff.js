import Image from "next/image";
import {
  SlideRightFade,
  SlideTopFade,
  StaggerFade,
  StaggerParent,
} from "../../animations/scroll";
import { staffs } from "../../data/staffs";

function Staff() {
  const team = staffs.slice(0, 8);

  return (
    <div className="bg-custom-gray4">
      <div className="lg:container py-16 lg:py-[130px] ">
        <div className="text-center lg:mx-52 lg:px-28">
          <SlideTopFade>
            <h2 className="heading-lg">Our Staff</h2>
          </SlideTopFade>
          <SlideRightFade>
            <p className="mt-6 mx-4 lg:mx-0 text-custom-gray3">
              We work to make your business start effectively working for you.
              Meet the financial and marketing specialists.
            </p>
          </SlideRightFade>
        </div>

        <StaggerParent>
          <div className="mt-10 lg:mt-20 grid lg:grid-cols-4 gap-6 lg:gap-x-5 lg:gap-y-6">
            {team.map((staff) => (
              <div
                key={staff.id}
                className="flex flex-col items-center gap-2 mb-8"
              >
                <StaggerFade>
                  <div className="relative w-[280px] h-[340px]">
                    <Image
                      src={staff.img}
                      alt={staff.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <h3 className="mt-5 text-center text-custom-gray text-[20px] lg:text-[23px] font-Montserrat">
                    {staff.name}
                  </h3>
                  <p className="text-sm text-center text-custom-gray3">
                    {staff.position}
                  </p>
                </StaggerFade>
              </div>
            ))}
          </div>
        </StaggerParent>
      </div>
    </div>
  );
}

export default Staff;
