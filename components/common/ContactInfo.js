import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MdPhoneInTalk, MdEmail, MdLocationPin } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import TextField from "./TextField";
import { TextField, TextArea } from "./InputField";
import {
  SlideLeftFade,
  SlideRightFade,
  SlideTopFade,
  StaggerLeftFade,
  StaggerParent,
} from "../../animations/scroll";

const API_URL = "https://boolalgback.herokuapp.com/saveinfo";

function ContactInfo() {
  const contactData = [
    {
      contact: "+8801743136127",
      link: "https://api.whatsapp.com/send?phone=+8801743136127",
      icon: <MdPhoneInTalk />,
    },
    {
      contact: "rana@shannonit.org",
      link: "mailto:rana@shannonit.org",
      icon: <MdEmail />,
    },
    {
      contact: "41/14-A Afsar Uddin Lane,1209, Zigatola - Dhaka",
      icon: <MdLocationPin />,
    },
  ];

  const initialvalues = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid Email"),
    number: Yup.string().required("Number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  // const handleSubmit = async (values, formik) => {
  //   const { name, email, number, message } = values;

  //   const res = await fetch(`${API_URL}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email, number, message }),
  //   });

  //   if (res.ok) {
  //     toast.success("Message sent successfully!");
  //     console.log(res);
  //     formik.resetForm();
  //   } else {
  //     console.log("status", res.status);
  //     toast.error("Something went wrong!");
  //   }
  // };

  return (
    <div className="bg-white">
      <ToastContainer />
      <div className="lg:container py-16 px-4 lg:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:self-center">
            <SlideTopFade>
              <h1 className="heading-lg">Contact Information</h1>
            </SlideTopFade>
            <SlideRightFade>
              <p className="mt-4 lg:mt-6 text-custom-gray3">
                Just make one call and get a reply within one minute. If email
                is the preferable way of communication for you, you are welcome
                to contact us just right now. Your personal manager will take
                into consideration all your requires with pleasure.
              </p>
            </SlideRightFade>

            <StaggerParent>
              <div className="flex flex-col gap-7 lg:gap-10 mt-7 lg:mt-10 text-custom-gray3">
                {contactData.map((data, i) => (
                  <div key={i}>
                    <StaggerLeftFade>
                      <div className="flex items-center gap-5">
                        <span className="text-4xl text-custom-orange">
                          {data.icon}
                        </span>
                        {data.link ? (
                          <a href={data.link}>{data.contact}</a>
                        ) : (
                          <p>{data.contact}</p>
                        )}
                        {/* <a href={data?.link}>{data.contact}</a> */}
                      </div>
                    </StaggerLeftFade>
                  </div>
                ))}
              </div>
            </StaggerParent>
          </div>

          <SlideLeftFade>
            <div className="lg:place-self-end border-[16px] border-[#dfddce] p-6 lg:p-10">
              <div className="text-center heading-lg leading-snug lg:text-[26px]">
                <h1>Have questions?</h1>
                <h1>We call you back!</h1>
              </div>

              <Formik
                initialValues={initialvalues}
                validationSchema={validate}
                onSubmit={handleSubmit}
              >
                {(formik) => (
                  <Form>
                    <div className="mt-3 space-y-11 lg:px-10">
                      <TextField label="Your Name *" name="name" type="text" />
                      <TextField label="Email *" name="email" type="text" />
                      <TextField
                        label="Phone Number *"
                        name="number"
                        type="text"
                      />
                      <TextField
                        label="Service You Are Looking For *"
                        name="message"
                        type="text"
                        as="textarea"
                        rows="3"
                      />

                      <button
                        type="submit"
                        className="mt-5 flex mx-auto bg-custom-orange active:bg-orange-600 text-white px-5 lg:px-8 py-3 rounded-full uppercase disabled:bg-opacity-60 disabled:cursor-wait"
                        // disabled={formik.isSubmitting}
                        aria-label="send message"
                      >
                        Send Message
                        {/* {formik.isSubmitting
                          ? "sending message"
                          : "send message"} */}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </SlideLeftFade>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
