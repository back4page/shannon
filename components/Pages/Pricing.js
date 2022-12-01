import Image from "next/image";
import { pricingList } from "../../data/pricingList";
import { SlideTopFade } from "../../animations/scroll";
import ModalContact from "../Modal/ModalContact";
import useMenu from "../../hooks/useMenu";

function Pricing() {
  const { showMenu: showModal, setShowMenu: setShowModal, node } = useMenu();

  return (
    <div className="py-20 px-4 lg:px-0 lg:py-[130px]">
      <SlideTopFade>
        <div className="lg:container grid grid-cols-1 lg:grid-cols-3 bg-white py-16 divide-gray-200 divide-y lg:divide-y-0 lg:divide-x">
          {pricingList.map((item) => (
            <div key={item.id} className="">
              <div className="relative grid grid-cols-1 text-center items-center gap-4 px-4 py-8 lg:p-4 ">
                {item.tag && (
                  <div className="absolute top-0 w-28 border-r-8 border-custom-orange bg-custom-gray3 text-custom-gray4 font-bold text-xs py-3 uppercase">
                    best choice
                  </div>
                )}
                <div className="mx-auto">
                  <Image src={item.img} alt="" width={161} height={161} />
                </div>
                <div className="heading-sm mt-4">
                  <h2>{item.name}</h2>
                </div>
                <div className="grid grid-cols-1 items-center divide-y px-8 text-[15px] text-[#c7c7c7] gap-3">
                  <h2 className="">{item.options.option1}</h2>
                  <h2 className="pt-3">{item.options.option2}</h2>
                  <h2 className="pt-3">{item.options.option3}</h2>
                </div>
                <div className="">
                  <h2 className="font-Montserrat text-[20px]">
                    $<span className="heading-xl">{item.price}</span>/mo
                  </h2>
                </div>
                <div className="">
                  <button
                    className="px-10 py-2 rounded-full border-2 border-[#e7c3a5] hover:bg-[#e7c3a5] duration-300 uppercase"
                    onClick={() => setShowModal(true)}
                  >
                    get it
                  </button>
                </div>
              </div>
            </div>
          ))}
          <ModalContact
            showModal={showModal}
            setShowModal={setShowModal}
            node={node}
          />
        </div>
      </SlideTopFade>
    </div>
  );
}

export default Pricing;
