'use client';
import { useState } from 'react';
import NavLinks from './Navbar/NavLinks';
import Link from 'next/link';

function Header() {
  const [hidden, setHidden] = useState(false);
  return (
    <header className="bg-white">
      <nav className="flex flex-wrap items-center justify-between max-w-[1400px] w-full mx-auto py-0 lg:py-3 px-4 text-lg text-gray-700 ">
        <Link href="/">
          <img
            loading="lazy"
            src={'./logo.png'}
            className="max-w-full  w-[200px]"
          />
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer lg:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setHidden(!hidden)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div
          className={
            hidden
              ? ' w-full pb-6 lg:pb-0 lg:flex lg:items-center lg:w-auto'
              : 'hidden w-full lg:flex lg:items-center lg:w-auto'
          }
        >
          <ul className="pt-4 text-base text-gray-700 lg:flex lg:justify-between lg:pt-0">
            <NavLinks setHidden={setHidden} />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
