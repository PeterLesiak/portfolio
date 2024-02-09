'use client';

import { TypeAnimation } from 'react-type-animation';

const HomeSection = () => (
  <main className="flex h-full w-full items-center">
    <header className="flex w-full flex-col items-center justify-center text-[7vw] text-white">
      <p>
        I&apos;m&nbsp;
        <span className="animate-gradient bg-gradient bg-[length:500%_auto] bg-clip-text text-transparent">
          Piotr Lesiak
        </span>
      </p>
      <p>
        I&nbsp;
        <TypeAnimation
          sequence={[
            'code in TypeScript',
            2500,
            'code in JavaScript',
            1000,
            'code in C++',
            3500,
            'use Tailwind/CSS',
            2500,
            'enjoy Web Dev <3',
            4000,
          ]}
          speed={25}
          repeat={Infinity}
        />
      </p>
    </header>
  </main>
);

export { HomeSection };
