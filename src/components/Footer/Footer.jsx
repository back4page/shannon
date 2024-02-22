import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

function Footer() {
  const linkStyles = 'py-1 hover:text-sky-500';
  return (
    <footer className="px-2">
      <div className="md:grid grid-cols-6 gap-2 lg:gap-5 max-w-[1400px] w-full mx-auto py-10">
        <div className="col-span-2 mb-10 md:mb-0">
          <img
            src={'./logo.png'}
            alt="logo"
            className="max-w-full aspect-[3.85] w-[286px]"
          />
          <p>
            Our first priorities Customer Satisfaction. our team actively listen
            to our clients to understand their points, goals, and expectations.
            we successfully served over 100+ amazing clients.
          </p>
        </div>
        <div className="flex justify-between md:justify-around col-span-3 mb-10 md:mb-0">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">Pages</h1>
            <Link href="/about" className={linkStyles}>
              About
            </Link>
            <Link href="/services" className={linkStyles}>
              Service
            </Link>
            <Link href="/products" className={linkStyles}>
              Product
            </Link>
            <Link href="/resource" className={linkStyles}>
              Resource
            </Link>
            <Link href="/contact" className={linkStyles}>
              Contact
            </Link>
            <Link href="/how-we-work" className={linkStyles}>
              How We Work
            </Link>
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">Quick Links</h1>
            <Link href="/privacy-policy" className={linkStyles}>
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className={linkStyles}>
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <div>
            <h1 className="text-xl font-bold mb-4">Connect Us On</h1>
            <div className="flex gap-5">
              <FaFacebookF className="text-blue-500 text-xl" />
              <FaTwitter className="text-blue-400 text-xl" />
              <FaLinkedinIn className="text-blue-600 text-xl" />
              <FaInstagramSquare className="text-[#d62976] text-xl" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
