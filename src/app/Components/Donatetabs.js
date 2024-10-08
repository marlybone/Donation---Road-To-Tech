"use client";
import React from "react";
import Link from "next/link";

const donationOptions = [
  {
    title: "Helping Hand",
    amount: 10,
    stripeLink: "https://buy.stripe.com/bIYg2I4ZC60V9LWfZ0",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        height={30}
        width={30}
        className="dark:fill-white"
      >
        <path d="M7.8 207.7c-13.1-17.8-9.3-42.8 8.5-55.9L142.9 58.5C166.2 41.3 194.5 32 223.5 32L384 32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-36.8 0-44.9 36c-22.7 18.2-50.9 28-80 28L304 224l-16 0-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-120.6 0L63.7 216.2c-17.8 13.1-42.8 9.3-55.9-8.5zM382.4 160c0 0 0 0 0 0l.9 0c-.3 0-.6 0-.9 0zM568.2 304.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 453.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 480 32 480c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 352c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z" />
      </svg>
    ),
  },
  {
    title: "Key Contributor",
    amount: 20,
    stripeLink: "https://buy.stripe.com/aEU9Ek1Nq74Z3nyeUV",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        height={30}
        width={30}
        className="dark:fill-white"
      >
        <path d="M333.2 322.8s0 0 0 0l-133.9-146s0 0 0 0L146 118.6c7.8-5.1 37-22.6 78-22.6s70.2 17.4 78 22.6L245.7 180l85.6 93.4 27.4-29.8c16.3-17.7 25.3-40.9 25.3-65l0-29.5c0-19-5.6-37.5-16.1-53.3L327.8 35.6C312.9 13.4 287.9 0 261.2 0l-76 0c-25.8 0-50.1 12.5-65.1 33.5L81.9 87C70.3 103.2 64 122.8 64 142.8L64 164c0 23.2 8.4 45.6 23.6 63.1l56 64.2s0 0 0 0l83.3 95.6s0 0 0 0l91.8 105.3c10 11.5 26.8 14.3 40 6.8l54.5-31.1c17.8-10.2 21.6-34.3 7.7-49.4l-87.7-95.7zM205.2 410.6l-83.3-95.6L27.1 418.5c-13.9 15.1-10.1 39.2 7.7 49.4l55.1 31.5c13 7.4 29.3 4.9 39.4-6.1l75.9-82.6z" />
      </svg>
    ),
  },
  {
    title: "Top Supporter",
    amount: 50,
    stripeLink: "https://buy.stripe.com/4gw3fW3Vy4WR2ju148",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height={30}
        width={30}
        className="dark:fill-white"
      >
        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
      </svg>
    ),
  },
];

export const Donatetabs = ({ onDonationSuccess }) => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-row space-x-10 mb-10">
        {donationOptions.map((option) => (
          <div
            key={option.amount}
            className="space-y-6 w-[190px] h-[254px] flex-col bg-[rgba(217,217,217,0.58)] border border-white shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-[6px] rounded-[17px] text-center cursor-pointer flex items-center justify-center select-none font-bold text-black"
          >
            {option.svg}
            <h2 className="text-xl font-semibold mb-2text-black">
              {option.title}
            </h2>
            <p className="text-black mb-4">Donate £{option.amount}.00</p>
            <Link
              target="_blank"
              href={option.stripeLink}
              className="bg-black text-white rounded-md py-2 px-4 hover:bg-slate-800 transition-colors duration-300 bottom-0"
              onClick={() => onDonationSuccess(option.amount)} // Call the success function with the amount
            >
              Donate
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
