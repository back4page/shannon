import Pricing from "../components/Pages/Pricing";
import Request from "../components/common/Request";

function PricingPage() {
  return (
    <div className="bg-custom-gray4">
      <Pricing />
      <Request />
    </div>
  );
}

PricingPage.pageDetails = {
  title: "Pricing",
  description: "Pricing",
  keywords: "Pricing",
  text: "There's a template for everything",
  heading: "Pricing",
};

export default PricingPage;
