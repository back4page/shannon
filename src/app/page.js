'use client';
import { RiBarChartBoxLine } from 'react-icons/ri';
import { IoHappyOutline } from 'react-icons/io5';
import { LuBarChart3 } from 'react-icons/lu';
import { MdCastForEducation } from 'react-icons/md';
import { RiInfinityLine } from 'react-icons/ri';
import { TbHealthRecognition } from 'react-icons/tb';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { TbMoneybag } from 'react-icons/tb';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { MdOutlineReduceCapacity } from 'react-icons/md';
import { motion } from 'framer-motion';
import Appointment from '@/components/Appointment';

const ServiceCard = ({ image, title, description }) => (
  <motion.div
    initial={{
      opacity: 0,
      // if odd index card,slide from right instead of left
      y: 100,
    }}
    whileInView={{
      opacity: 1,
      y: 0, // Slide in to its original position
      transition: {
        duration: 0.5, // Animation duration
      },
    }}
    viewport={{ once: true }}
    className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
  >
    <div className="flex flex-col grow px-4 py-11 w-full rounded-xl shadow-2xl bg-white bg-opacity-40 max-md:mt-6">
      <img
        loading="lazy"
        srcSet={image}
        className="w-10 aspect-square"
        alt={title}
      />
      <h2 className="mt-7 text-xl font-bold text-stone-700">{title}</h2>
      <p className="mt-5 text-sm text-stone-500">{description}</p>
    </div>
  </motion.div>
);

const Button = ({ label }) => (
  <button className="justify-center px-8 py-3 mt-14 mb-[20px] text-base font-bold text-center text-white whitespace-nowrap bg-sky-500 shadow-lg rounded-[100px] max-md:px-5 max-md:mt-10">
    {label}
  </button>
);

const SectionHeader = ({ title, subtitle, children }) => (
  <>
    {title && (
      <h2 className="mt-20 text-6xl font-bold text-center text-stone-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        {title}
      </h2>
    )}
    {subtitle && (
      <p className="mt-7 text-xl font-medium text-center text-stone-500 max-md:max-w-full">
        {subtitle}
      </p>
    )}
    {children}
  </>
);

function Home() {
  return (
    <main>
      <div className="flex flex-col items-center bg-gradient-to-r from-sky-100 to-orange-50 pb-5">
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-20 text-6xl font-semibold text-center text-stone-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl px-2"
          >
            Innovative Solutions: Your <br /> Partner in Digital Transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mt-12 text-xl font-medium text-center text-stone-500 max-md:max-w-full"
          >
            Let your creativity shine and start <br /> building your website
            today and impress your visitors.
          </motion.p>
        </SectionHeader>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
          className="px-5 mt-14 max-w-full w-[544px] max-md:mt-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex justify-center items-center px-7 mx-auto bg-indigo-200 rounded-full h-[100px] w-[100px] max-md:px-5 max-md:mt-10">
                <img loading="lazy" srcSet={'./coding.png'} />
              </div>
            </div>
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex justify-center items-center px-7 mx-auto bg-orange-200 rounded-full h-[100px] w-[100px] max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet={'./app-development.png'}
                  alt=""
                  className="w-full aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex justify-center items-center px-7 mx-auto bg-blue-200 rounded-full h-[100px] w-[100px] max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet={'./desktop.png'}
                  alt=""
                  className="w-full aspect-square"
                />
              </div>
            </div>
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex justify-center items-center px-7 mx-auto bg-red-200 rounded-full h-[100px] w-[100px] max-md:px-5 max-md:mt-10">
                <img loading="lazy" srcSet={'./layers.png'} />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.8 }}
        >
          <Button label="Get A Quotes" />
        </motion.div>
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, delay: 1 }}
          className="flex flex-col mt-[20px] mx-2 items-center px-16 py-11 text-base shadow-lg bg-gradient-to-r from-sky-100 to-orange-50 bg-opacity-10 rounded-[30px] xl:w-[60%] max-md:px-5"
        >
          <header className="text-3xl font-bold text-black text-opacity-80 text-center max-md:max-w-full">
            Solving complex problems, effortlessly
          </header>
          <article className="self-stretch mt-5 leading-7 text-center text-stone-500 max-md:max-w-full">
            We have experienced teams who can deal with complexity. Our
            expertise, technological innovations, and passion will make your
            business shine.
          </article>
          <button
            className="justify-center px-8 py-3 mt-5 font-semibold text-sky-500 whitespace-nowrap border-2 border-sky-500 border-solid rounded-[30px] max-md:px-5"
            tabIndex="0"
          >
            Let's Discuss your projects
          </button>
        </motion.section>
      </div>
      <div className="flex flex-col items-center bg-gradient-to-bl from-sky-100 to-orange-50 pb-5">
        <h1 className="mt-24 text-6xl font-bold text-center whitespace-nowrap text-stone-700 max-md:mt-10 max-md:text-4xl">
          What We Do
        </h1>

        <p className="mt-7 text-xl font-medium text-center text-stone-500 max-md:max-w-full">
          Let your creativity shine and start <br /> building your website today
          and impress your visitors.
        </p>

        <section className="px-5 mt-14 w-full max-w-[1164px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <ServiceCard
              image={'./desktop.png'}
              title="Web Application"
              description="When it comes to developing disruptive web products, Shannon takes an unconventional approach. Continue exploring new technologies, business models, and design approaches to create truly disruptive web products that can make a lasting impact on the industry"
            />
            <ServiceCard
              image={'./app-development.png'}
              title="Mobile Application"
              description="Our mobile app development teams prioritize clients' needs. Developing apps that perform well across different mobile devices requires careful consideration of various factors, including responsive design, cross-platform development, testing on different devices, API compatibility, and app store guidelines."
            />
            <ServiceCard
              image={'./coding.png'}
              title="Desktop Application"
              description="Desktop application development Shannon IT follows a unique process 
-Requirement Analysis
-Design and Prototyping
-User Interface (UI) Development
-Development
- Deployment  
 After deployment, developers continue to maintain and support the desktop application by fixing bugs and addressing user feedback.
"
            />
            <ServiceCard
              image={'./layers.png'}
              title="Software Solution"
              description="We have a team of experienced developers who can create custom software solutions tailored to meet your unique business needs. Whether you need a web application, mobile app, or desktop software, we can deliver high-quality solutions."
            />
          </div>
        </section>
        <Button label="View All" />

        <div className="bg-[#6b727711] w-full py-16">
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.5, // Animation duration
                  delay: 0.2,
                },
              }}
              viewport={{ once: true }}
              className="bg-[#ffffff63] rounded-md px-5 py-5"
            >
              <RiBarChartBoxLine className="text-4xl mb-2 text-amber-500" />
              <div className="flex justify-between gap-5 items-center">
                <h1 className="text-4xl text-amber-500 font-semibold">30+</h1>
                <h1 className="text-xl">Projects Done</h1>
              </div>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.5, // Animation duration
                  delay: 0.4,
                },
              }}
              viewport={{ once: true }}
              className="bg-[#ffffff63] rounded-md px-5 py-5"
            >
              <IoHappyOutline className="text-4xl mb-2 text-cyan-500" />
              <div className="flex justify-between gap-5 items-center">
                <h1 className="text-4xl text-cyan-500 font-semibold">8+</h1>
                <h1 className="text-xl">Happy Client</h1>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 0.5, // Animation duration
                  delay: 0.6,
                },
              }}
              viewport={{ once: true }}
              className="bg-[#ffffff63] rounded-md px-5 py-5"
            >
              <LuBarChart3 className="text-4xl mb-2 text-teal-500" />
              <div className="flex justify-between gap-5 items-center">
                <h1 className="text-4xl text-teal-500 font-semibold">20+</h1>
                <h1 className="text-xl">Growing Team</h1>
              </div>
            </motion.div>
          </div>
        </div>

        {/* come back add add section */}

        <div>
          <h1 className="mt-24 text-6xl font-bold text-center whitespace-nowrap text-stone-700 max-md:mt-10 max-md:text-4xl">
            Industries We Serve
          </h1>

          <p className="mt-7 text-xl font-medium text-center text-stone-500 max-md:max-w-full">
            Let your creativity shine and start <br /> building your website
            today and impress your visitors.
          </p>
          <section className="px-5 mt-14 w-full max-w-[1164px] max-md:mt-10 max-md:max-w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 0.5, // Animation duration
                  },
                }}
                viewport={{ once: true }}
                className="flex flex-col grow px-4 py-11 w-full rounded-xl shadow-2xl bg-white bg-opacity-40 max-md:mt-6"
              >
                <MdCastForEducation className="text-4xl" />
                <h1 className="mt-7 text-xl font-bold text-stone-700">
                  Education
                </h1>
                <p className="mt-5 text-sm text-stone-500">
                  Our software solutions for schools streamline administrative
                  tasks, enhance communication between teachers, students, and
                  parents, and provide tools for personalized learning
                  experiences, ensuring a conducive environment for academic
                  success.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 0.5, // Animation duration
                  },
                }}
                viewport={{ once: true }}
                className="flex flex-col grow px-4 py-11 w-full rounded-xl shadow-2xl bg-white bg-opacity-40 max-md:mt-6"
              >
                <RiInfinityLine className="text-4xl" />
                <h1 className="mt-7 text-xl font-bold text-stone-700">
                  Garments
                </h1>
                <p className="mt-5 text-sm text-stone-500">
                  Tailored for the garment industry, our software optimizes
                  production processes, manages inventory efficiently, tracks
                  orders seamlessly, and provides insights to enhance
                  decision-making, empowering garment manufacturers to stay
                  competitive in a dynamic market.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 0.5, // Animation duration
                  },
                }}
                viewport={{ once: true }}
                className="flex flex-col grow px-4 py-11 w-full rounded-xl shadow-2xl bg-white bg-opacity-40 max-md:mt-6"
              >
                <TbHealthRecognition className="text-4xl" />
                <h1 className="mt-7 text-xl font-bold text-stone-700">
                  Healthcare
                </h1>
                <p className="mt-5 text-sm text-stone-500">
                  Our healthcare software facilitates seamless patient
                  management, electronic health record keeping, scheduling,
                  billing, and reporting. With a focus on interoperability and
                  data security, we empower healthcare providers to deliver
                  high-quality care while improving operational efficiency.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 0.5, // Animation duration
                  },
                }}
                viewport={{ once: true }}
                className="flex flex-col grow px-4 py-11 w-full rounded-xl shadow-2xl bg-white bg-opacity-40 max-md:mt-6"
              >
                <RiMoneyDollarCircleLine className="text-4xl" />
                <h1 className="mt-7 text-xl font-bold text-stone-700">
                  Fintech
                </h1>
                <p className="mt-5 text-sm text-stone-500">
                  Our fintech solutions offer robust platforms for financial
                  institutions, enabling secure transactions, risk management,
                  compliance, and personalized customer experiences. With
                  innovative tools for banking, payments, and wealth management,
                  we drive digital transformation in the financial sector,
                  enhancing agility and customer satisfaction.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 0.5, // Animation duration
                  },
                }}
                viewport={{ once: true }}
                className="flex flex-col grow px-4 py-11 w-full rounded-xl shadow-2xl bg-white bg-opacity-40 max-md:mt-6"
              >
                <TbMoneybag className="text-4xl" />
                <h1 className="mt-7 text-xl font-bold text-stone-700">Ngo</h1>
                <p className="mt-5 text-sm text-stone-500">
                  Our software solutions for NGOs streamline donor management,
                  fundraising efforts, volunteer coordination, and impact
                  assessment. With tools for transparent reporting and resource
                  allocation, we empower NGOs to maximize their social impact
                  and achieve their mission effectively.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 0.5, // Animation duration
                  },
                }}
                viewport={{ once: true }}
                className="flex flex-col grow px-4 py-11 w-full rounded-xl shadow-2xl bg-white bg-opacity-40 max-md:mt-6"
              >
                <MdOutlineRestaurantMenu className="text-4xl" />
                <h1 className="mt-7 text-xl font-bold text-stone-700">
                  Restaurant
                </h1>
                <p className="mt-5 text-sm text-stone-500">
                  Our restaurant management software offers features for table
                  reservation, order management, inventory tracking, staff
                  scheduling, and customer engagement. With seamless integration
                  with online ordering platforms and analytics for menu
                  optimization, we help restaurants enhance operational
                  efficiency and elevate guest experiences.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 0.5, // Animation duration
                  },
                }}
                viewport={{ once: true }}
                className="flex flex-col grow px-4 py-11 w-full rounded-xl shadow-2xl bg-white bg-opacity-40 max-md:mt-6"
              >
                <MdOutlineTravelExplore className="text-4xl" />
                <h1 className="mt-7 text-xl font-bold text-stone-700">
                  Travel
                </h1>
                <p className="mt-5 text-sm text-stone-500">
                  Tailored for the travel industry, our software facilitates
                  booking management, itinerary planning, payment processing,
                  and real-time communication with travelers. With integrations
                  with global distribution systems and insights for trend
                  analysis, we empower travel agencies and tour operators to
                  provide memorable and seamless travel experiences.
                </p>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 0.5, // Animation duration
                  },
                }}
                viewport={{ once: true }}
                className="flex flex-col grow px-4 py-11 w-full rounded-xl shadow-2xl bg-white bg-opacity-40 max-md:mt-6"
              >
                <MdOutlineReduceCapacity className="text-4xl" />
                <h1 className="mt-7 text-xl font-bold text-stone-700">
                  Retail
                </h1>
                <p className="mt-5 text-sm text-stone-500">
                  Our retail software solutions enable inventory management,
                  point-of-sale transactions, customer relationship management,
                  and omnichannel sales strategies. With features for loyalty
                  programs, promotions, and analytics-driven insights, we
                  empower retailers to drive sales, improve customer
                  satisfaction, and stay ahead in a competitive market.
                </p>
              </motion.div>
            </div>
          </section>
        </div>

        <div className=" flex flex-col justify-center items-center">
          <h1 className="mt-20 text-6xl font-bold text-center text-stone-700 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
            Get A 30 Min Free Consultation
          </h1>

          <p className="mt-7 text-xl font-medium text-center text-stone-500 max-md:max-w-full">
            Let your creativity shine and start building your website today and
            impress your visitors.
          </p>

          <div className="py-10">
            <Appointment />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
