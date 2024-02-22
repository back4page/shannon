import * as React from 'react';

const NavigationButton = ({ text }) => (
  <button className="self-stretch my-auto">{text}</button>
);

const DescriptionCard = ({ title, description }) => (
  <article className="flex flex-col grow text-base max-md:mt-10">
    <h2 className="text-xl font-bold text-stone-700">{title}</h2>
    <p className="mt-4 leading-7 text-ellipsis text-neutral-600">
      {description}
    </p>
    <div className="flex gap-2.5 justify-center self-start px-8 py-2.5 mt-8 font-semibold text-white whitespace-nowrap bg-sky-500 rounded-[30px] max-md:px-5">
      <div className="grow">Contact Us</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e48b56ed60dc21ed7d3d7d2c2f273c5c3cd98ea4b53aedd7b52f58e4fe9fc8ef?apiKey=a4806e8dc69e4eb6b7ffa701d0e30f01"
        className="w-6 aspect-square"
        alt=""
      />
    </div>
  </article>
);

const Image = ({ src }) => (
  <div>
    <img
      loading="lazy"
      srcSet={src}
      alt=""
      className="hidden lg:block w-[500px]"
    />
  </div>
);

function productsPage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-r from-sky-100 to-orange-50">
      <section className="product w-screen">
        <div className="max-w-[1400px] mx-auto py-12 px-3">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-6xl font-semibold text-white">
              Project Management out, Product <br />
              Delivery in
            </div>
            <p className="text-gray-200 py-6">
              Shannon IT is a software company that offer web and app
              development. And we have three products, - School and Collage
              Management system - Garments management system - NGO management
              system We provide innovative and practical solutions to help you
              expand your business.
            </p>
          </div>
        </div>
      </section>

      <h1 className="mt-24 text-6xl font-bold text-center whitespace-nowrap text-stone-700 max-md:mt-10 max-md:text-4xl">
        Our Product
      </h1>

      <p className="mt-7 text-xl font-medium text-center text-stone-500 max-md:max-w-full">
        Let your creativity shine and start <br /> building your website today
        and impress your visitors.
      </p>

      <section className="mt-14 w-full max-w-[1203px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow p-8 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <DescriptionCard
                  title="Team augmentation"
                  description="Team augmentation offers flexibility in terms of scaling resources up or down according to project requirements or business needs. It allows businesses to adapt to changing demands without the long-term commitment associated with traditional hiring."
                />
                <Image src={'./teamAugmentation.png'} />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow px-10 py-8 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <section className="flex items-center gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <DescriptionCard
                  title="Mobile Development"
                  description="Nowadays every business need mobile application. Our mobile app development teams prioritizing clients' needs. Developing apps that perform well across different mobile devices requires careful consideration of various factors, responsive design, cross-platform development, testing on different devices, API compatibility, app store guidelines."
                />
                <Image src={'./mobileDevelopment.png'} />
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-9 w-full max-w-[1203px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow p-8 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <DescriptionCard
                  title="Backend Development"
                  description="Our backend developers work with databases, server-side languages (such as Python, Ruby, Java, or Node.js), frameworks (like Django, Flask, Ruby on Rails, or Express.js), and other tools to build the core functionality of web applications. we also focus on security, scalability, and performance optimization to ensure the reliability and efficiency of our customers."
                />
                <Image src={'./backendDevelopment.png'} />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow px-10 py-8 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <DescriptionCard
                  title="AI Development"
                  description="In AI development, our engineers typically start by defining the problem they create  AI system to solve or the task they want it to perform. They then collect and preprocess data relevant to the task, design and train machine learning models using algorithms suitable for the problem domain, and finally deploy and evaluate the performance of the AI system in real-world scenarios."
                />
                <Image src={'./AIDevelopment.png'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-9 w-full max-w-[1203px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow p-8 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <DescriptionCard
                  title="Frontend Development"
                  description="Our primary focuses on the design, layout, and interactivity of the site or application that users interact with directly. Our experiance frontend developers use a combination of programming languages such as HTML, CSS, and JavaScript to build these components.  We also create responsive design principles to ensure that websites and applications work well on various devices and screen sizes, from desktop computers to smartphones and tablets."
                />
                <Image src={'./frontendDevelopment.png'} />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow px-10 py-8 w-full bg-white rounded-3xl max-md:px-5 max-md:mt-5 max-md:max-w-full">
              <div className="flex items-center gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <DescriptionCard
                  title="Web Development"
                  description="When it comes to developing disruptive web products, Shannon takes an unconventional approach. Continue exploring new technologies, business models, and design approaches to create truly disruptive web products that can make a lasting impact in the industry."
                />
                <Image src={'./webDevelopment.png'} />
              </div>
            </div>
          </div>
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

        <button className="mb-[40px] px-8 py-4 mt-16 text-base font-bold text-center text-white whitespace-nowrap bg-sky-500 shadow-lg rounded-[100px] max-md:px-5 max-md:mt-10">
          Appointment
        </button>
      </footer>
    </main>
  );
}

export default productsPage;
