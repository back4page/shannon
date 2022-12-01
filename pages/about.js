import Creatives from "../components/About/Creatives";
import Counts from "../components/common/Counts";
import Staff from "../components/common/Staff";
import ServicesAccordion from "../components/About/ServicesAccordion";

function AboutPage() {
  return (
    <>
      <Creatives />
      <Counts />
      <Staff />
      <ServicesAccordion />
    </>
  );
}

AboutPage.pageDetails = {
  title: "About Us",
  description: "About shannon it",
  keywords: "About shannon it",
  text: "There's a template for everything",
  heading: "About Us",
};

export default AboutPage;
