import React from "react";
import { Donatetabs } from "../Components/Donatetabs";
import { Support } from "../Components/Support";

export default function Donate() {
  return (
    <div className="mx-auto flex justify-center text-center mb-12 text-black dark:text-white">
      <div>
        <div className="mb-20">
          <h1 className="mb-10 text-6xl font-[Inter] font-[800]">
            Support My Journey
          </h1>
          <h2 className="text-xl mx-8 font-[Inter]">
            I&apos;m on a mission to land my first developer job. Your support means
            everything to me as I work towards this goal!
          </h2>
        </div>
        <div className="mb-20">
          <Donatetabs />
        </div>
        <div className="mb-20">
          <Support />
        </div>
      </div>
    </div>
  );
}
