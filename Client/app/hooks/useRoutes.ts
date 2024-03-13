import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { IoChatboxEllipses } from "react-icons/io5";
import { TbUserFilled  } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { FaEthereum } from 'react-icons/fa';
import { FiPhoneCall  } from "react-icons/fi";
import { HiMiniUserGroup } from "react-icons/hi2";
import {MdOutlineContactSupport } from 'react-icons/md'

import { signOut } from "next-auth/react";
import useConversation from "./useConverstationId";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(() => [
   
    { 
      label: 'Chat', 
      href: '/conversations', 
      icon: IoChatboxEllipses, 
      active: pathname === '/conversations'
    },
    { 
      label: 'Friends', 
      href: '/friends', 
      icon: TbUserFilled ,
      active: pathname === '/transaction' || !!conversationId
    },
    { 
      label: 'Calls', 
      href: '/calls', 
      icon: FiPhoneCall,
      active: pathname === '/etheruemBot' || !!conversationId
    },
    { 
      label: 'Communities', 
      href: '/communities', 
      icon: HiMiniUserGroup,
      active: pathname === '/etheruemBot' || !!conversationId
    },
    { 
      label: 'Support', 
      href: '/support', 
      icon: MdOutlineContactSupport ,
      active: pathname === '/etheruemBot' || !!conversationId
    },
    {
      label: 'Logout', 
      onClick: () => signOut(),
      href: '/',
      icon: HiArrowLeftOnRectangle, 
    }
  ], [pathname, conversationId]);

  const authRoutes = useMemo(() => [
    { 
      label: 'Eth_Server', 
      href: '/ethserver', 
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