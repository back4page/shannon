const InputFiled = ({ label, name, type, placeholder, formik }) => {
  const inputStyle = `shadow rounded-full w-full py-2 px-3 bg-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
    formik.touched[name] && formik.errors[name] && 'border-2 border-red-400'
  } `;
  return (
    <div className="mb-3">
      <label
        className="block text-gray-600 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className={inputStyle}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-400 text-xs">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default InputFiled;
