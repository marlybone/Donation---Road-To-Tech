import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./Theme";

export const Navbar = () => {
  return (
    <div className="flex flex-row space-x-4">
      <Image
        alt="akita"
        width={400}
        height={200}
        src="/akita.png"
        priority={true}
        className="dark:shadow-none rounded-full h-26 flex mt-6 w-32 object-cover"
      />
      <div className="flex bg-stone-700 mt-6 w-full h-[85px] items-center justify-between rounded-lg shadow-[0px_5px_15px_rgba(0,0,0,0.35),5px_10px_15px_rgba(0,0,5,0.5)]">
        <div className="space-x-4 text-xl ml-6 text-white font-[NunitoSans]">
          <Link href="/">HOME</Link>
          <Link href="/donate">DONATE</Link>
        </div>
        <div className="mr-6 text-xl text-white flex flex-row space-x-4 cursor-pointer">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
