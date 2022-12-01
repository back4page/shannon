import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import { ScaleFade } from "../../animations/scroll";
import { commentList } from "../../data/commentList";
import CustomSlider from "../CustomSlider";

function Comments() {
  const refSlider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    // dotsClass: "slick-dots line-indicator",
    // customPaging: (i) => <div className="absolute inset-0 opacity-0">{i}</div>,
  };

  return (
    <div className="bg-[#f8f8f8]">
      <div className="lg:container py-16 px-5 lg:px-36 lg:py-44">
        <ScaleFade>
          <div className="flex flex-col items-center mb-14">
            <Image src="/images/message.png" alt="" width={55} height={40} />
          </div>

          {/* <CustomSlider /> */}

          <div className="">
            <Slider {...settings} ref={refSlider}>
              {commentList.map((comment) => (
                <div key={comment.id} className="text-center">
                  <Image
                    src={comment.img}
                    alt=""
                    className="lg:pb-5"
                    width={50}
                    height={50}
                  />
                  <h2 className="py-6 heading-lg lg:text-[26px] text-center">
                    {comment.desc}
                  </h2>
                  <p className="text-lg lg:text-xl text-green-400">
                    {comment.name}
                  </p>
                  <p className="text-xs lg:text-sm text-custom-gray3">
                    {comment.position}
                  </p>
                </div>
              ))}
            </Slider>

            <div className="mt-10 flex justify-center gap-5">
              <button
                className="bg-cyan-300 active:bg-cyan-400 px-4 py-2 rounded text-xs font-semibold text-gray-500 "
                onClick={() => refSlider?.current?.slickPrev()}
              >
                Prev
              </button>
              <button
                className="bg-cyan-300 active:bg-cyan-400 px-4 py-2 rounded text-xs font-semibold text-gray-500 "
                onClick={() => refSlider?.current?.slickNext()}
              >
                Next
              </button>
            </div>
          </div>
        </ScaleFade>
      </div>
    </div>
  );
}

export default Comments;
