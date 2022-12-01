import { StaggerDownFade, StaggerParent } from "../animations/scroll";
import ImageGrid from "../components/common/ImageGrid";
import { servicesAllList } from "../data/servicesAllList";

function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="lg:container py-20 px-4 lg:py-32">
        <StaggerParent>
          <div className="lg:container py-16 lg:px-4 grid lg:grid-cols-3 gap-6">
            {servicesAllList.map((product, i) => (
              <div key={i}>
                <StaggerDownFade>
                  <ImageGrid
                    key={product.id}
                    image={product.img}
                    name={product.name}
                  />
                </StaggerDownFade>
              </div>
            ))}
          </div>
        </StaggerParent>
      </div>
    </div>
  );
}

ServicesPage.pageDetails = {
  title: "Services",
  description: "Services",
  keywords: "Services",
  text: "There's a template for everything",
  heading: "Services",
};

export default ServicesPage;
