"use client";

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  active?: boolean;
  href: string;
  onClick?: () => void;
}
const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  active,
  href,
  onClick,
}) => {
  const handleClick = () => {
    if (onclick) {
      return onClick;
    }
  };
  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          `
            group 
            flex 
            mx-auto
            gap-x-3 
            rounded-md 
            p-3 
            text-sm 
            leading-6 
            font-semibold 
            text-gray-500 
            hover:text-black 
            hover:bg-gray-100
`,
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className=" h-6 y-6 shrink-0" />
        <span className=" sr-only"> {label} </span>
      </Link>
    </li>
  );
};

export default DesktopItem;