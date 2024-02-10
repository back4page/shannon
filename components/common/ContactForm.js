import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputFiled from './ContactFormFields';
import axios from 'axios';

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
      // come back and handle data 🚩🚩🚩🚩🚩🚩
      // must be clear data after successfully submited data
    },
  });
  // border-2 border-red-600

  return (
    <div>
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
        <div className="mb-3">
          <label
            className="block text-gray-600 text-sm font-bold mb-2"
            htmlFor="textMessage"
          >
            Message
          </label>
          <textarea
            rows="4"
            className={`shadow rounded-md w-full py-2 px-3 bg-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              formik.touched.message &&
              formik.errors.message &&
              'border-2 border-red-400'
            }`}
            id="textMessage"
            name="message"
            type="text"
            placeholder="Type Your Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-400 text-xs">{formik.errors.message}</p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            className="shadow ml-3 inline-block bg-gray-300 hover:text-black focus:shadow-outline focus:outline-none text-gray-600 font-semibold py-2 px-6 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
