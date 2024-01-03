import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputFiled from './ContactFormFields';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Please Provide Your Name'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email Is Required'),
      phone: Yup.string().required('Please Provide Your Phone Number'),
      message: Yup.string()
        .min(20, 'Must be 20 characters or more')
        .required('Message Is Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // border-2 border-red-600

  return (
    <div>
      <div className="text-center heading-lg leading-snug lg:text-[26px]">
        <h1>Have questions?</h1>
        <h1>We call you back!</h1>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <InputFiled
          label="Your Name"
          name="name"
          type="text"
          placeholder="Your Name"
          formik={formik}
        />

        <InputFiled
          label="Your Email"
          name="email"
          type="email"
          placeholder="Your Email"
          formik={formik}
        />

        <InputFiled
          label="Phone Number"
          name="phone"
          type="number"
          placeholder="Your Phone Number"
          formik={formik}
        />
      </form>
    </div>
  );
};

export default ContactForm;
