import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./Theme";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-center w-full">
      <Image
        alt="akita"
        width={400}
        height={200}
        src="/akita.png"
        priority={true}
        className="dark:shadow-none rounded-full md:h-28 h-24 flex mt-6 md:w-32 w-24 object-cover"
      />
      <div className="w-full">
      <div className="flex bg-stone-700 mt-6 h-[85px] items-center justify-start w-full md:justify-between rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.35),5px_10px_15px_rgba(0,0,5,0.5)]">
        <div className="space-x-2 md:space-x-4 md:text-xl text-md md:ml-6 ml-2 mr-4 text-white font-[NunitoSans]">
          <Link href="/">HOME</Link>
          <Link href="/donate">DONATE</Link>
        </div>
        <div className="mr-6 text-xl text-white flex flex-row space-x-4 cursor-pointer">
          <ThemeToggle />
        </div>
      </div>
    </div>
    </div>
  );
};
