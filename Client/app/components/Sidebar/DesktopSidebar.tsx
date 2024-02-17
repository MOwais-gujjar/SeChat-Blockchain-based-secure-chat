"use client";

import useRoutes from "../../hooks/useRoutes";
import useAuthRoutes from "../../hooks/useAuthRoutes";
import React, { useState } from "react";
import DesktopItem from "./DesktopItem";
import { User } from "@prisma/client";
import Image from "next/image";
import logo from "../../../public/images/logo.jpg";
import DesktopFooterList from "./DesktopFooterList";

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
  const routes = useRoutes();
  const authRoutes = useAuthRoutes();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="
        lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:top-16 lg:h-auto lg:z-20 lg:w-20 lg:px-6 lg:overflow-auto lg:bg-white
        lg:border-r-[1px] lg:pb-4 lg:flex-col justify-between
    "
    >
      <nav
        className="
        mt-4 flex flex-col justify-between
        "
      >
        {/* <Image src={logo} width={40} height={40} alt="sechat" /> */}
        <ul
          role="list"
          className="
            flex flex-col items-center space-y-1
            "
        >
          {routes.map((route, index) => (
            <DesktopItem
              key={index}
              href={route.href}
              label={route.label}
              icon={route.icon}
              onClick={route.onClick}
              active={route.active}
            />
          ))}
        </ul>
      </nav>
      <nav className="mt-4 flex flex-col justify-between items-center">
        <div
          onClick={() => setIsOpen(true)}
          className="cursor-pointer hover:opacity-75 transition"
        >
          {authRoutes.map((item, index) => (
            <DesktopFooterList
              key={index}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.active}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
