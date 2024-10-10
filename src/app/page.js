import { Donations } from "./Components/Donations";
import { Hero } from "./Components/Hero";
import { TotalCount } from "./Components/Totalcounter";
import { Donatebtn } from "./Components/Donatebtn";
import DonationProgress from "./Components/DonationProgress";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="mb-20">
        <Hero />
      </div>
      <div className="mb-20 flex justify-center">
        <Donatebtn />
      </div>
      <div className="mb-10">
        <DonationProgress />
      </div>
      <div className="mb-24">
        <TotalCount />
      </div>
      <div className="mb-20">
        <Donations />
      </div>
    </>
  );
}
