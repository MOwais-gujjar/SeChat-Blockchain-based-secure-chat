"use client";
import React, { useCallback, useState } from 'react'
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import LoadingModel from './LoadingModel';
import data from '../userRecords/list'
const UserBox = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = useCallback(() => {
        setIsLoading(true);
        //  define routes 
    }, []);

    return (
        <>
            {isLoading && (
              <LoadingModel /> 
            )}
            {data.map((item: any) => (
                <div
                    onClick={handleClick}
                    className="
            w-full 
            relative 
            flex 
            items-center 
            space-x-3 
            bg-white 
            p-3 
            hover:bg-neutral-100
            rounded-lg
            transition
            cursor-pointer
          "
                >
                    {/* Profile Image */}
                    <Image src={item.image} alt='image' width={30} height={30}
                        className=' rounded-full'
                    />
                    <div className="min-w-0 flex-1">
                        <div className="focus:outline-none">
                            <span className="absolute inset-0" aria-hidden="true" />
                            <div className="flex justify-between items-center mb-1">
                                <p className="text-sm font-medium text-gray-900">
                                    {item.username}
                                </p>
                                <span className=' text-[10px] text-right mt-4 text-red-400 font-light '>
                                    {item.message}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
    </> 
        )
}


export default UserBox;