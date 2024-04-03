import * as React from 'react';
import Appointment from '@/components/Appointment';

const NavigationButton = ({ text }) => (
  <button className="self-stretch my-auto">{text}</button>
);

const Image = ({ src }) => (
  <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
    <img
      loading="lazy"
      srcSet={src}
      className="self-stretch my-auto max-w-full aspect-square w-[121px] max-md:mt-10"
      alt=""
    />
  </div>
);

const ServiceCard = ({ image, title, description }) => (
  <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow px-4 py-11 w-full rounded-xl shadow-2xl bg-white bg-opacity-40 max-md:mt-6">
      <img
        loading="lazy"
        srcSet={image}
        className="w-12 aspect-square"
        alt={title}
      />
      <h2 className="mt-7 text-xl font-bold text-stone-700">{title}</h2>
      <p className="mt-5 text-sm text-stone-500">{description}</p>
    </div>
  </div>
);

const ServicesPage = props => (
  <>
    <main className="flex flex-col items-center bg-gradient-to-r from-sky-100 to-orange-50 pb-5">
      <section className="service w-screen">
        <div className="max-w-[1400px] mx-auto py-12 px-3">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-6xl font-semibold text-white">
              Project Management out, Product <br />
              Delivery in
            </div>
            <p className="text-gray-200 py-6">
              We crafts digital symphonies that captivate hearts and minds.
              Shannon can take your quality game to the next level by applying
              best practice, field-proven testing methods to ensure the
              high-quality of your product.
            </p>
          </div>
        </div>
      </section>

      <h1 className="mt-24 text-6xl font-bold text-center whitespace-nowrap text-stone-700 max-md:mt-10 max-md:text-4xl">
        Our Services
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
            description="When it comes to developing disruptive web products, Shannon takes an unconventional approach. Continue exploring new technologies, business models, and design approaches to create truly disruptive web products that can make a lasting impact in the industry "
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
            description="We have multiple software solution. 
- Enterprise Resource Planning (ERP) Software
- Customer Relationship Management (CRM) Software
- Supply Chain Management (SCM) Software
- Human Resource Management (HRM) Software
- Business Intelligence (BI) Software
"
          />
        </div>
      </section>

      <footer className=" flex flex-col justify-center items-center">
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
      </footer>
    </main>
  </>
);
export default ServicesPage;
