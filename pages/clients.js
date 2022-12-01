import Comments from "../components/common/Comments";
import Clients from "../components/Pages/Clients";

function ClientsPage() {
  return (
    <>
      <Clients />
      <Comments />
    </>
  );
}

ClientsPage.pageDetails = {
  title: "Our Dear Clients",
  description: "Our Dear Clients",
  keywords: "Our Dear Clients",
  text: "There's a template for everything",
  heading: "Our Dear Clients",
};

export default ClientsPage;
