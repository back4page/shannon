import Staff from "../components/common/Staff";

function OurTeamPage() {
  return (
    <div className="bg-custom-gray4">
      <Staff />
    </div>
  );
}

OurTeamPage.pageDetails = {
  title: "Our Team",
  description: "Our Team",
  keywords: "Our Team",
  text: "There's a template for everything",
  heading: "Our Team",
};

export default OurTeamPage;
