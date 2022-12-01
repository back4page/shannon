import { Fade, SlideTopFade } from "../animations/scroll";
import { moreInformationList } from "../data/moreInformationList";

function MoreInformationPage() {
  return (
    <div className="bg-white">
      <div className="container py-12 lg:py-[190px] px-4">
        <SlideTopFade>
          <div className="heading-lg">
            <h2>More</h2>
          </div>
          <div className="mt-14 flex flex-col gap-14">
            {moreInformationList.map((item) => (
              <div key={item.id}>
                <Fade>
                  <h3 className="heading-sm">{item.name}</h3>
                  <p className="mt-5 text-custom-gray3">{item.desc}</p>
                </Fade>
              </div>
            ))}
          </div>
        </SlideTopFade>
      </div>
    </div>
  );
}

MoreInformationPage.pageDetails = {
  title: "More Information",
  description: "More Information",
  keywords: "More Information",
  text: "There's a template for everything",
  heading: "More Information",
};

export default MoreInformationPage;
