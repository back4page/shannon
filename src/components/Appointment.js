'use client';

import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

const Appointment = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <PopupButton
      url="https://calendly.com/sozootoday99"
      rootElement={isMounted ? document.getElementById('mainBody') : ''}
      text="Appointment"
      className="px-12 block py-3 text-sm text-white bg-sky-500 shadow-lg rounded-full max-md:px-5"
    />
  );
};

export default Appointment;
