import ContactInfo from "../components/common/ContactInfo";
import Request from "../components/common/Request";

function ContactPage() {
  return (
    <>
      <ContactInfo />
      <div className="h-80 bg-custom-gray4"></div>
      <Request />
    </>
  );
}

ContactPage.pageDetails = {
  title: "Contact Information",
  description: "Contact Information",
  keywords: "Contact Information",
  text: "There's a template for everything",
  heading: "Contact Information",
};

export default ContactPage;
