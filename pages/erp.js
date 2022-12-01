import Image from "next/image";
import { Fade, SlideTopFade } from "../animations/scroll";
import ERP_Form from "../components/Services/ERP_Form";

function ERPPage() {
  return (
    <div className="bg-white">
      <div className="lg:container py-20 px-4 lg:py-32 ">
        <div className="text-center">
          <SlideTopFade>
            <div className="">
              <Image
                src="/images/services/erp.jpg"
                alt="erp"
                width={619}
                height={521}
              />
            </div>
          </SlideTopFade>

          <Fade>
            <p className="text-lg py-10">
              Group of programs and integrated systems work with each other to
              cover the needs of factories and companies, these systems
              self-system and permanence, warehouses and sales are built on the
              basis of independent and integrated modules system working
              together, the planned demonstration shows general perspective
              sections Home for this group, interdependence and management role
              supplementing to her.
            </p>
          </Fade>
        </div>

        <div className="py-10">
          <SlideTopFade>
            <h1 className="text-red-500 text-4xl font-bold">E.R.P Features:</h1>
          </SlideTopFade>

          <Fade>
            <div className="pt-6 text-lg space-y-7">
              <p>
                Reticular system is based on the principle of (Client–Server).
              </p>
              <p>
                Operating system server systems: Windows Server 2003 or later –
                workstations System: Win XP.
              </p>
              <p>
                Server Inter-base / Fire-bird-SQL open source database (Open
                Source) without need to license.
              </p>
              <p>
                <b>Adjustable (Customizable)</b> To suit the work of a large
                segment of tourism companies because there are flexible settings
                system helps to install the system according to company-specific
                requirements.
              </p>
              <p>
                Delivering System According to the principle of full turnkey its
                equipment and includes training, rehabilitation and maintenance
                of hand (technical support) for a month until the actual date of
                the direct use.
              </p>
              <p>
                Ensuring returns without question or embarrassment during the
                month if the system did not achieve what is required of him.
              </p>
              <p>
                <b>A follow-up (After Sale Service)</b> It provides technical
                support to ensure the operation after the expiration of the
                initial bail by visits upon request or by remote control via the
                Internet.
              </p>
            </div>
          </Fade>
        </div>

        <SlideTopFade>
          <ERP_Form />
        </SlideTopFade>
      </div>
    </div>
  );
}

ERPPage.pageDetails = {
  title: "E.R.P",
  description: "E.R.P",
  keywords: "E.R.P",
  text: "There's a template for everything",
  heading: "E.R.P",
};

export default ERPPage;
