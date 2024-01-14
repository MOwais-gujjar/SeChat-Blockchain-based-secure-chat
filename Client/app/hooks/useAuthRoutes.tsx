import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { CiSettings } from "react-icons/ci";
import { FaEthereum } from 'react-icons/fa';
import metamask from '/images/metamask.svg';


import { signOut } from "next-auth/react";
import useConversation from "./useConverstationId";

const useAuthRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();
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
  return authRoutes;
};

export default useAuthRoutes;