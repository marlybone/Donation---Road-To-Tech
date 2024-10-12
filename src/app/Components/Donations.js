import React from "react";

export const Donations = () => {
  return (
    <div className="dark:text-white text-black">
      <h1 className="mb-8 md:text-6xl font-[Inter] text-3xl">How It Works:</h1>
      <ul className="mb-10 md:text-xl leading-10 font-[Inter] text-md space-y-3">
        <li>
          1. Your contributions will directly support my journey toward securing
          my first developer role during this period of unemployment.{" "}
        </li>
        <li>
          2. With every donation, you&apos;ll bring the photomosaic closer to
          life by adding color and reducing the greyscale—a fun way to track
          progress!
        </li>
        <li>
          3. Every contribution not only helps me achieve my goal but also
          highlights the strength of community, showcasing how individual
          actions can create a meaningful collective impact.
        </li>
      </ul>
      <div>
        <h1 className="md:text-xl text-md text-center font-[Inter]">
          I&apos;ll be coding full-time every day, sharing updates on my
          progress, interviews, job applications, and learning journey on
          Twitter.
        </h1>
      </div>
    </div>
  );
};
