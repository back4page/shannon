import { SlideTopFade } from "../animations/scroll";
import SchoolManagementForm from "../components/Services/SchoolManagementForm";

function SchoolManagementSystemPage() {
  return (
    <div className="bg-white">
      <div className="lg:container py-20 px-4 lg:py-32 ">
        <SlideTopFade>
          <SchoolManagementForm />
        </SlideTopFade>
      </div>
    </div>
  );
}

SchoolManagementSystemPage.pageDetails = {
  title: "School Management System",
  description: "School Management System",
  keywords: "School Management System",
  text: "There's a template for everything",
  heading: "School Management System",
};

export default SchoolManagementSystemPage;
