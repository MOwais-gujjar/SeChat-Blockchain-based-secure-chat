import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { IoChatboxEllipses } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { FaEthereum } from 'react-icons/fa';


import { signOut } from "next-auth/react";
import useConversation from "./useConverstationId";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
    { 
      label: 'Home', 
      href: '/home', 
      icon: GoHome,
      active: pathname === '/conversations' || !!conversationId
    },
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: IoChatboxEllipses, 
      active: pathname === '/conversations'
    },
    {
      label: 'Logout', 
      onClick: () => signOut(),
      href: '#',
      icon: HiArrowLeftOnRectangle, 
    }
  ], [pathname, conversationId]);

  const authRoutes = useMemo(() => [
    { 
      label: 'wallet', 
      href: '/wallet', 
      icon: FaEthereum,
      active: pathname === '/wallet' || !!conversationId
    },
    { 
      label: 'setting', 
      href: '/setting', 
      icon: CiSettings,
      active: pathname === '/setting' || !!conversationId
    },
  ], [pathname, conversationId]);
  return routes;
};

export default useRoutes;