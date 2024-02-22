const images = [
  {
    src: './bayshore-logo.svg',
    alt: 'Describe this image',
    width: 'w-[120px]',
    styles: '',
  },
  {
    src: './safcon.png',
    alt: 'Describe this image',
    styles: '',
  },
  {
    src: './aldariyah.png',
    alt: 'Describe this image',
    width: 'w-[100px]',
    styles: '',
  },
  {
    src: './sozoo.png',
    alt: 'Describe this image',
    width: 'w-[100px]',
    styles: 'bg-sky-300 rounded-md',
  },
  {
    src: './work.svg',
    alt: 'Describe this image',
    width: 'w-[100px]',
    styles: '',
  },
  {
    src: './uni.png',
    alt: 'Describe this image',
    width: 'w-[100px]',
    styles: '',
  },
];

function TeamMember({ name, designation, imageSrc }) {
  return (
    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow items-center pb-8 w-full whitespace-nowrap rounded-xl bg-sky-800 bg-opacity-30 max-md:mt-10">
        <img
          loading="lazy"
          srcSet={imageSrc}
          className="self-stretch w-full aspect-square"
          alt={name}
        />
        <div className="mt-5 text-2xl font-medium text-neutral-700">{name}</div>
        <div className="mt-2.5 text-base text-stone-500">{designation}</div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <main className="flex flex-col items-center bg-gradient-to-r from-sky-100 to-orange-50">
        <section className="about w-screen">
          <div className="max-w-[1400px] mx-auto py-12 px-3">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-6xl font-semibold text-white">
                Project Management out, Product <br />
                Delivery in
              </div>
              <p className="text-gray-200 py-6">
                Shannon it is full Stack IT firm. Our mission is to solve
                problems and build technology. Rana Ahamed, CEO of company he
                had an inovation mind. He understand technology very well.
                Yeasir Ahamed, CTO of company and a experiance IT guy. Our
                company goals solve problems.
              </p>
            </div>
          </div>
        </section>

        <h1 className="mt-24 text-6xl font-bold text-center whitespace-nowrap text-stone-700 max-md:mt-10 max-md:text-4xl">
          Our Team
        </h1>

        <p className="mt-7 text-xl font-medium text-center text-stone-500 max-md:max-w-full">
          Let your creativity shine and start <br /> building your website today
          and impress your visitors.
        </p>

        <section className="px-5 mt-16 w-full max-w-[1096px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <TeamMember
              name="Rana Ahamed"
              designation="CEO"
              imageSrc={'./rana.jpg'}
            />
            <TeamMember
              name="Yeasir Ahamed"
              designation="CTO"
              imageSrc={'./yeasir.jpg'}
            />
            <TeamMember
              name="Simon Ahamed"
              designation="CMO"
              imageSrc={'./simon.jpg'}
            />
          </div>
        </section>

        <h1 className="mt-24 text-6xl font-bold text-center whitespace-nowrap text-stone-700 max-md:mt-10 max-md:text-4xl">
          Our Clients
        </h1>

        <p className="mt-7 text-xl font-medium text-center text-stone-500 max-md:max-w-full">
          Let your creativity shine and start <br /> building your website today
          and impress your visitors.
        </p>

        <section className="flex gap-5 justify-between px-5  py-10 max-md:flex-wrap">
          {images.map((image, index) => (
            <img
              key={index}
              srcSet={image.src}
              alt={image.alt}
              className={`my-auto ${image.width} ${image.styles}`}
              loading="lazy"
            />
          ))}
        </section>
        {/* <section className="flex gap-5 justify-between px-5 max-md:flex-wrap">
          {images.map((image, index) => (
            <img
              key={index}
              srcSet={image.src}
              alt={image.alt}
              className={`my-auto ${image.aspectRatio} ${image.width}`}
              loading="lazy"
            />
          ))}
        </section> */}

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
    </>
  );
}

export default AboutPage;
