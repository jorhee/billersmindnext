import HeaderIcon from './HeaderIcon';
import Image from "next/image";
import LoginButton from "./LoginButton";

import {
    HomeIcon,
    Squares2X2Icon,
    ChatBubbleLeftEllipsisIcon,
    BellIcon,
    ChevronDownIcon
  } from '@heroicons/react/24/solid';

import {
    MagnifyingGlassIcon,

    NewspaperIcon,
    CalculatorIcon,
    UserCircleIcon,
    UsersIcon 
  } from '@heroicons/react/24/outline';

const Header = () => {
 

  return (
   
      <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      
        {/*Left*/}
        <div className="flex items-center">
          <Image
            className="cursor-pointer transition-transform duration-300 hover:scale-110"
            src="/bmfav.png"
            alt="BM Favicon"
            width={40}
            height={40}
            style="fixed"
            />
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
              <MagnifyingGlassIcon  className="h-6 text-gray-900" />
              <input 
                className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' 
                type="text" 
                placeholder="Search Billers Mind" />
            </div>

        </div>

        {/*Center*/}
        <div className='flex justify-center flex-grow'>
          <div className='flex space-x-6 md:space-x-2'>
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={NewspaperIcon} />
            <HeaderIcon Icon={CalculatorIcon} />
            <HeaderIcon Icon={UsersIcon} />
            <HeaderIcon Icon={UserCircleIcon} />
          </div>
        </div>
        {/*Right*/}
        <div className='flex items-center sm:space-x-2 justify-end'>
          {/*Profile Pic*/}
        <p className='whitespace-nowrap font-semibold pr-3'>JorHee</p>
        <Squares2X2Icon className='icon' />
        <ChatBubbleLeftEllipsisIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />

        </div>
        <LoginButton />


      </div>
    
  );
};

export default Header;
