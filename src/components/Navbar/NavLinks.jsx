'use client';
import NavLink from './Link/NavLink';

const NavLinks = ({ setHidden }) => {
  const links = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Products',
      path: '/products',
    },
    // {
    //   title: 'Resource',
    //   path: '/resource',
    // },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];
  return (
    <>
      {links.map(link => (
        <NavLink key={link.title} item={link} setHidden={setHidden} />
      ))}
      <li className="flex items-center">
        <button className="px-12 block py-3 text-sm text-white bg-sky-500 shadow-lg rounded-full max-md:px-5">
          {' '}
          Appointment{' '}
        </button>
      </li>
    </>
  );
};

export default NavLinks;
