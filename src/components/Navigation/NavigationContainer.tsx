'use client';

import { useState } from 'react';

import Image from 'next/image';
import BackIcon from './menu_interaction.svg';

const NavigationContainer = (props: { children: React.ReactElement[] }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav
      className={`absolute z-50 flex w-full items-start justify-between bg-blue-900 bg-opacity-5 px-8 py-4 backdrop-brightness-75 md:justify-center ${
        isOpen
          ? 'border-b after:absolute after:left-0 after:top-full after:h-1 after:w-full after:bg-white after:blur-xl'
          : ''
      }`}
    >
      <div className={`flex ${isOpen ? 'flex-col' : 'hidden md:flex'}`}>{props.children}</div>

      <button onClick={() => setOpen(!isOpen)} className="ml-auto p-2 md:hidden">
        <Image
          src={BackIcon}
          alt="Back"
          className={`mx-[5%] ${
            isOpen ? 'animate-rotateForwards' : 'animate-rotateBackwards'
          }`}
        />
      </button>
    </nav>
  );
};

export default NavigationContainer;
