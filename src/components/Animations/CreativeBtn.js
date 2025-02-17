import { ArrowRight, ChevronsRight } from 'lucide-react';
import React from 'react';

export const DiscoverButton = () => {
  const scrollToSection = () => {
    document.getElementById('new-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      onClick={scrollToSection}
      className="group relative cursor-pointer p-6 w-40 border border-black bg-black text-white rounded-full overflow-hidden text-center font-semibold transition-all duration-300"
    >
      <span className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
        Discover
      </span>
      <div className="flex gap-2 text-white items-center absolute top-0 h-full w-full justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Discover</span>
        <ArrowRight />
      </div>
      <div className="absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-black scale-[1] dark:group-hover:bg-[#e7cb6e] group-hover:bg-[#ffffff] group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%]"></div>
    </div>
  );
};

export const JoinButton = () => {
  return (
    <a
      className="flex gap-1 items-center justify-center px-3 py-1 w-60 bg-black text-white hover:bg-white hover:text-black border-black transition-all border-2 rounded-full font-semibold text-sm"
      href="/join-community"
    >
      Join the Society
      <ChevronsRight />
    </a>
  );
};
