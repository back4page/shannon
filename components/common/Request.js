import React from "react";
import {
  Fade,
  ScaleFade,
  SlideRightFade,
  SlideTopFade,
} from "../../animations/scroll";
import useMenu from "../../hooks/useMenu";
import ModalContact from "../Modal/ModalContact";

function Request() {
  const { showMenu: showModal, setShowMenu: setShowModal, node } = useMenu();

  return (
    <div className="bg-white my-auto">
      <div className="lg:container flex flex-col justify-center py-16 lg:py-40">
        <div className="">
          <SlideTopFade>
            <h2 className="heading-lg px-10 lg:px-20 text-center">
              Lets Get Started your project
            </h2>
          </SlideTopFade>
          <Fade>
            <p className="mt-5 px-8 lg:px-0 text-sm text-custom-gray3 text-center">
              We will help you to achieve your goals and to grow your business.
            </p>
          </Fade>
        </div>
        <div className="mx-auto">
          <ScaleFade>
            <button
              className="mt-8 lg:mt-8 py-4 lg:py-4 px-5 lg:px-10 bg-custom-orange  hover:bg-red-500  duration-300 text-custom-gray4 text-sm font-Montserrat rounded-full uppercase"
              onClick={() => setShowModal(true)}
            >
              request a quote
            </button>
          </ScaleFade>
        </div>
      </div>

      <ModalContact
        showModal={showModal}
        setShowModal={setShowModal}
        node={node}
      />
    </div>
  );
}

export default Request;
