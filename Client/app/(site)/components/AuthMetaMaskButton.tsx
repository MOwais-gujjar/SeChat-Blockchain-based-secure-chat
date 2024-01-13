"use client"
import metamask from '@/public/metamask.svg'
import Image from 'next/image';

interface AuthMetamaskButtonProps {
    onClick?: ()=> void;
}
const AuthMetaMaskButton: React.FC<AuthMetamaskButtonProps> = ({
    onClick
}) => {
  return (
    <button
    type='button'
    onClick={onClick}
    className='
        inline-flex
        w-full
        justify-center
        rounded-md
        px-4
        py-2
        text-gray-500
        shadow-sm
        ring-1
        ring-inset
        ring-gray-300
        hover:bg-gray-50
        focus:outline-offset-0
    '   
    >
        <Image src={metamask} alt='metamask' height={28} width={28} />
    </button>
    )
}

export default AuthMetaMaskButton