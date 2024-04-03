'use client';
import NavLink from './Link/NavLink';
import Appointment from '../Appointment';

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
        <Appointment />
      </li>
    </>
  );
};

export default NavLinks;
