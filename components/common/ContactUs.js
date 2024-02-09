const ContactUs = props => {
  return (
    <div className="container py-20">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-bold mb-4">Let&apos;s talk</h1>
        <p className="text-gray-600 text-lg">
          Just make one call and get a reply within one minute. If email is the
          preferable way of communication for you, you are welcome to contact us
          just right now. Your personal manager will take into consideration all
          your requires with pleasure.
        </p>
      </div>
      <div className="grid gap-5 grid-cols-2">{props.children}</div>
    </div>
  );
};

export default ContactUs;
