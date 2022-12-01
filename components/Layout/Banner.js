//---with react-scroll-parallax
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import {
  BannerFade,
  BannerScaleFade,
  BannerSlideFade,
} from "../../animations/banner";
import { Parallax } from "react-scroll-parallax";

function Banner({ pageDetails }) {
  const { pathname } = useRouter();
  const [ref, { height }] = useMeasure();

  // const y = pathname !== "/" ? { y: "145px" } : { y: 0 };

  return (
    <motion.div
      // initial={pathname === "/" ? { y: 0 } : { y: "150px" }}
      // animate={{ height: height || "auto", ...y }}
      animate={{ height: height || "auto" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="" ref={ref}>
        <div
          className={` ${
            pathname === "/" ? "h-screen" : "h-[420px] lg:h-[560px]"
          }`}
        >
          <Parallax speed={-20}>
            <div className="relative w-full h-screen">
              <Image
                src="/images/banner.jpg"
                alt="banner"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </Parallax>
        </div>

        <div className="absolute inset-0 lg:container mx-3 mt-[250px] lg:mt-[300px] grid grid-cols-3 text-white overflow-hidden">
          <div className="col-span-3 lg:col-span-2">
            <p className="text-gray-300">{pageDetails?.text}</p>

            <BannerSlideFade>
              <h1 className="font-Montserrat capitalize text-[30px] lg:text-[55px] leading-tight  font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-cyan-300">
                {pageDetails?.heading}
              </h1>
            </BannerSlideFade>

            <div className="">
              <BannerFade>
                <div className="overflow-hidden">
                  {pathname === "/" && (
                    <p className="mt-7 text-gray-200">
                      We combine creativity, technologies and passion to bring
                      you the best results in web design. Join our community to
                      start building your website now
                    </p>
                  )}
                </div>
              </BannerFade>

              <div className="w-[130px] lg:w-[190px]">
                <BannerScaleFade>
                  {pathname === "/" && (
                    <Link href="/more-information" passHref>
                      <a>
                        <button
                          type="button"
                          className="mt-12 py-3 lg:py-4 px-6 lg:px-10 bg-white  hover:bg-custom-orange duration-300 text-custom-gray text-xs lg:text-sm font-bold tracking-widest font-Montserrat rounded-full uppercase"
                        >
                          read more
                        </button>
                      </a>
                    </Link>
                  )}
                </BannerScaleFade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  //---perfect
  // import { useRouter } from "next/router";
  // import Link from "next/link";
  // import Image from "next/image";
  // import {
  //   AnimatePresence,
  //   motion,
  //   useScroll,
  //   useTransform,
  // } from "framer-motion";
  // import { useRef } from "react";
  // import useMeasure from "react-use-measure";
  // import {
  //   BannerFade,
  //   BannerScaleFade,
  //   BannerSlideFade,
  // } from "../../animations/banner";

  // function Banner({ pageDetails }) {
  //   const { pathname } = useRouter();
  //   const [ref, { height }] = useMeasure();

  //   const refScroll = useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: refScroll,
  //     offset: ["start start", "end start"],
  //   });
  //   const parallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  //   // const y = pathname !== "/" ? { y: "145px" } : { y: 0 };

  //   return (
  //     <motion.div
  //       // initial={pathname === "/" ? { y: 0 } : { y: "150px" }}
  //       // animate={{ height: height || "auto", ...y }}
  //       animate={{ height: height || "auto" }}
  //       transition={{ duration: 0.7, ease: "easeOut" }}
  //       className="overflow-hidden"
  //     >
  //       <div className="" ref={ref}>
  //         <div
  //           className={` ${
  //             pathname === "/" ? "h-screen" : "h-[420px] lg:h-[560px]"
  //           }`}
  //         >
  //           <motion.div
  //             // ref={refScroll}
  //             // style={{ y: parallax }}
  //             className="relative w-full h-screen"
  //           >
  //             <Image
  //               src="/images/banner.jpg"
  //               alt="banner"
  //               layout="fill"
  //               objectFit="cover"
  //               priority
  //             />
  //           </motion.div>
  //         </div>

  //         <div className="absolute inset-0 lg:container mx-3 mt-[250px] lg:mt-[300px] grid grid-cols-3 text-white overflow-hidden">
  //           <div className="col-span-3 lg:col-span-2">
  //             <p className="text-gray-300">{pageDetails?.text}</p>

  //             <BannerSlideFade>
  //               <h1 className="font-Montserrat capitalize text-[30px] lg:text-[55px] leading-tight  font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-cyan-300">
  //                 {pageDetails?.heading}
  //               </h1>
  //             </BannerSlideFade>

  //             <div className="">
  //               <BannerFade>
  //                 <div className="overflow-hidden">
  //                   {pathname === "/" && (
  //                     <p className="mt-7 text-gray-200">
  //                       We combine creativity, technologies and passion to bring
  //                       you the best results in web design. Join our community to
  //                       start building your website now
  //                     </p>
  //                   )}
  //                 </div>
  //               </BannerFade>

  //               <div className="w-[130px] lg:w-[190px]">
  //                 <BannerScaleFade>
  //                   {pathname === "/" && (
  //                     <Link href="/more-information" passHref>
  //                       <a>
  //                         <button className="mt-12 py-3 lg:py-4 px-6 lg:px-10 bg-white  hover:bg-custom-orange duration-300 text-custom-gray text-xs lg:text-sm font-bold tracking-widest font-Montserrat rounded-full uppercase">
  //                           read more
  //                         </button>
  //                       </a>
  //                     </Link>
  //                   )}
  //                 </BannerScaleFade>
  //               </div>
  //             </div>

  //           </div>
  //         </div>
  //       </div>
  //     </motion.div>
  //   );

  // return (
  //   <motion.div
  //     // initial={pathname === "/" ? { y: 0 } : { y: "150px" }}
  //     // animate={{ height: height || "auto", ...y }}
  //     animate={{ height: height || "auto" }}
  //     transition={{ duration: 0.7, ease: "easeOut" }}
  //     className="overflow-hidden"
  //   >
  //     <div className="" ref={ref}>
  //       {pathname === "/" ? (
  //         <div className="" ref={refScroll}>
  //           <motion.div
  //             className="relative w-full h-screen"
  //             style={{ parallax }}
  //           >
  //             <Image
  //               src="/images/banner.jpg"
  //               alt="banner"
  //               layout="fill"
  //               objectFit="cover"
  //               priority
  //             />
  //           </motion.div>
  //           <div className="absolute inset-0 lg:container mx-3 mt-[260px] lg:mt-[300px] grid grid-cols-3 text-white">
  //             <div className="col-span-3 lg:col-span-2">
  //               {/* <p className="">There&apos;s a template for everything</p> */}
  //               <p className="">{pageDetails?.text}</p>
  //               <h1 className="font-Montserrat text-[30px] lg:text-[55px] leading-tight font-medium">
  //                 {/* We create high quality digital solutions */}
  //                 {pageDetails?.heading}
  //               </h1>
  //               <p className="mt-7 text-gray-200">
  //                 We combine creativity, technologies and passion to bring you
  //                 the best results in web design. Join our community to start
  //                 building your website now
  //               </p>
  //               <Link href="/more-information" passHref>
  //                 <a>
  //                   <button className="mt-12 py-3 lg:py-4 px-6 lg:px-10 bg-white hover:bg-custom-orange duration-300 text-custom-gray text-xs lg:text-sm font-bold tracking-widest font-Montserrat rounded-full uppercase">
  //                     read more
  //                   </button>
  //                 </a>
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className="h-[420px] lg:h-[600px]">
  //           <div className="relative w-full h-screen">
  //             <Image
  //               src="/images/banner.jpg"
  //               alt="banner"
  //               layout="fill"
  //               objectFit="cover"
  //               priority
  //             />
  //           </div>

  //           <div className="absolute inset-0 lg:container mx-3 mt-[260px] lg:mt-[300px] grid grid-cols-3 text-white">
  //             <div className="col-span-3">
  //               <p className="">{pageDetails?.text}</p>
  //               <h1 className="font-Montserrat text-[30px] lg:text-[55px] leading-tight font-medium">
  //                 {pageDetails?.heading}
  //               </h1>
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </motion.div>
  // );

  // return (
  //   <motion.div className="relative overflow-x-hidden">
  //     {/* <div className="bg-black">
  //       <div
  //         className={`relative w-screen opacity-80 ${
  //           pathname === "/"
  //             ? "h-screen lg:h-[1080px]"
  //             : "h-[400px] lg:h-[600px]"
  //         } `}
  //       >
  //         <Image
  //           src="/images/banner.jpg"
  //           alt="banner"
  //           layout="fill"
  //           objectFit="cover"
  //           priority
  //         />
  //       </div>
  //     </div> */}
  //     <div className="">
  //       <motion.div
  //         layout
  //         className={`relative w-screen ${
  //           pathname === "/"
  //             ? "h-screen lg:h-[1080px]"
  //             : "h-[400px] lg:h-[600px]"
  //         } `}
  //       >
  //         <Image
  //           src="/images/banner.jpg"
  //           alt="banner"
  //           layout="fill"
  //           objectFit="cover"
  //           priority
  //         />
  //       </motion.div>
  //     </div>
  //     {pathname === "/" ? (
  //       <div className="">
  //         <div className="absolute inset-0 lg:container px-4 grid grid-cols-3 text-white py-32 lg:py-[370px]">
  //           <div className="col-span-3 lg:col-span-2 pt-28 lg:pt-0">
  //             <p className="">There&apos;s a template for everything</p>
  //             <h1
  //               className="font-Montserrat text-[30px] lg:text-[55px] leading-tight font-medium"
  //               // style={{ textShadow: "2px 2px gray" }}
  //             >
  //               We create high quality digital solutions
  //             </h1>
  //             <p className="mt-7 text-gray-200">
  //               We combine creativity, technologies and passion to bring you the
  //               best results in web design. Join our community to start building
  //               your website now
  //             </p>
  //             <Link href="/more-information" passHref>
  //               <button className="mt-12 py-3 lg:py-4 px-6 lg:px-10 bg-white hover:bg-custom-orange duration-300 text-custom-gray text-xs lg:text-sm font-bold tracking-widest font-Montserrat rounded-full uppercase">
  //                 read more
  //               </button>
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     ) : (
  //       <div className="absolute inset-0 lg:container px-4 grid grid-cols-3 text-white py-32 lg:pt-[300px] lg:pb-[150px]">
  //         <div className="col-span-3 pt-28 lg:pt-0">
  //           <p className="">Other Page</p>
  //           {/* <p className="">{text}</p> */}
  //           <h1 className="font-Montserrat text-[30px] lg:text-[55px] leading-tight font-medium">
  //             Page Heading
  //             {/* {heading} */}
  //           </h1>
  //         </div>
  //       </div>
  //     )}
  //   </motion.div>

  // <div className="relative overflow-x-hidden">
  //   <div
  //     className={`relative w-screen ${
  //       pathname === "/" ? "h-screen" : "h-[600px]"
  //     } `}
  //   >
  //     <Image
  //       src="/images/banner.jpg"
  //       alt="banner"
  //       layout="fill"
  //       objectFit="cover"
  //       priority
  //     />
  //   </div>
  //   {pathname === "/" ? (
  //     <div className=" overflow-x-hidden">
  //       <div className="absolute inset-0 lg:container px-4 grid grid-cols-3 text-white py-32 lg:py-[370px]">
  //         <div className="col-span-3 lg:col-span-2 pt-28 lg:pt-0">
  //           <p className="">There&apos;s a template for everything</p>
  //           <h1 className="font-Montserrat text-[25px] lg:text-[55px] leading-tight ">
  //             We create high quality digital solutions
  //           </h1>
  //           <p className="mt-7 text-custom-gray2">
  //             We combine creativity, technologies and passion to bring you the
  //             best results in web design. Join our community to start building
  //             your website now
  //           </p>
  //           <Link href="/more-information" passHref>
  //             <button className="mt-12 py-3 lg:py-4 px-6 lg:px-10 bg-white hover:bg-custom-orange duration-300 text-custom-gray text-xs lg:text-sm font-bold tracking-widest font-Montserrat rounded-full uppercase">
  //               read more
  //             </button>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   ) : (
  //     <div className="absolute inset-0 lg:container px-4 grid grid-cols-3 text-white py-32 lg:pt-[300px] lg:pb-[150px]">
  //       <div className="col-span-3 pt-28 lg:pt-0">
  //         <p className="">{text}</p>
  //         <h1 className="font-Montserrat text-[25px] lg:text-[55px] leading-tight ">
  //           {heading}
  //         </h1>
  //       </div>
  //     </div>
  //   )}
  // </div>

  // <div className="bg-[url('/images/banner.jpg')]">
  //   {pathname === "/" ? (
  //     <div className="lg:container px-4 grid grid-cols-3 text-white py-32 lg:py-[370px]">
  //       <div className="col-span-3 lg:col-span-2 pt-28 lg:pt-0">
  //         <p className="">There&apos;s a template for everything</p>
  //         <h1 className="font-Montserrat text-[25px] lg:text-[55px] leading-tight ">
  //           We create high quality digital solutions
  //         </h1>
  //         <p className="mt-7 text-custom-gray2">
  //           We combine creativity, technologies and passion to bring you the
  //           best results in web design. Join our community to start building
  //           your website now
  //         </p>
  //         <Link href="/more-information" passHref>
  //           <button className="mt-12 py-3 lg:py-4 px-6 lg:px-10 bg-white hover:bg-custom-orange duration-300 text-custom-gray text-xs lg:text-sm font-bold tracking-widest font-Montserrat rounded-full uppercase">
  //             read more
  //           </button>
  //         </Link>
  //       </div>
  //     </div>
  //   ) : (
  //     <div className="lg:container px-4 grid grid-cols-3 text-white py-32 lg:pt-[300px] lg:pb-[150px]">
  //       <div className="col-span-3 pt-28 lg:pt-0">
  //         <p className="">{text}</p>
  //         <h1 className="font-Montserrat text-[25px] lg:text-[55px] leading-tight ">
  //           {heading}
  //         </h1>
  //       </div>
  //     </div>
  //   )}
  // </div>
  // );
}

export default Banner;
