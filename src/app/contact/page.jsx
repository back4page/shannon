const ContactPage = () => {
  const formFields = [
    { label: 'Your Name', type: 'text', id: 'name' },
    { label: 'Email Address', type: 'email', id: 'email' },
    { label: 'Phone Number', type: 'tel', id: 'phone' },
  ];
  return (
    <>
      <main className="flex flex-col items-center bg-gradient-to-r from-violet-200 to-pink-200">
        <section className="contact w-screen">
          <div className="max-w-[1400px] mx-auto py-12 px-3">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-6xl font-semibold text-white">
                Project Management out, Product <br />
                Delivery in
              </div>
              <p className="text-gray-200 py-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting.
              </p>
            </div>
          </div>
        </section>

        <section className="w-[80%] mt-10 px-11 py-12 bg-white rounded-xl max-md:px-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-center">
            <div className="flex flex-col w-[35%] max-md:w-full">
              <div className="mt-32 text-2xl flex flex-col justify-center font-semibold text-center text-zinc-800 max-md:mt-10">
                <img
                  srcSet={'./avatar.png'}
                  className="self-center max-w-full aspect-[1.22] w-[229px]"
                />
                <p className="mt-4">
                  Contact us for a<br />
                  appointment and get
                  <br />a consultation
                </p>
              </div>
            </div>
            <div className="w-[65%] max-md:w-full">
              <form className="flex flex-col justify-center items-center mt-7 text-center max-md:mt-10">
                {formFields.map(field => (
                  <div key={field.id} className="w-full mt-6">
                    <label htmlFor={field.id} className="sr-only">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.label}
                      aria-label={field.label}
                      className="justify-center items-start px-10 py-6 w-full text-xl leading-6 whitespace-nowrap bg-white border border-solid border-zinc-400 rounded-[100px] text-zinc-500"
                    />
                  </div>
                ))}
                <div className="flex flex-col py-10 pr-20 pl-10 mt-6 bg-white rounded-3xl border border-solid border-zinc-400 w-full">
                  <textarea
                    className="w-full px-4 py-2 text-zinc-500 text-xl leading-6"
                    rows="5"
                    placeholder="Your Question............"
                    aria-label="Your Question"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" w-full self-center mt-5 bg-sky-500 text-white h-[69px] rounded-[100px] px-5 py-1 text-base font-semibold leading-6 whitespace-nowrap max-md:mt-10"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <h1 className="mt-24 text-6xl font-bold text-center whitespace-nowrap text-stone-700 max-md:mt-10 max-md:text-4xl">
          Our Location
        </h1>

        <p className="mt-7 mb-[20px] text-base font-medium text-center text-stone-500 max-md:max-w-full">
          Address : 41/14 A, Hazi Afsar Uddin Road, Zigatola, Dhaka
          <br />
          Phone : +8801743136127
          <br />
          Email : info@shannonit.org
          <br />
        </p>
        <img src={'./location.png'} className="w-full h-[481px]" />
      </main>
    </>
  );
};

export default ContactPage;
