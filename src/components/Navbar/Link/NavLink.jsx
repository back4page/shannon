import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavLink = ({ item, setHidden }) => {
  const pathName = usePathname();
  const linkClasses =
    pathName === item.path
      ? ' mx-4 py-1  block text-[#1DA1F3] border-b-2 border-[#1DA1F3]'
      : ' mx-4 py-1  block  hover:text-[#1DA1F3] hover:border-b-2 hover:border-[#1DA1F3]';
  return (
    <li className="flex items-center ">
      <Link
        key={item.title}
        href={item.path}
        className={linkClasses}
        onClick={() => setHidden(() => false)}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default NavLink;
